import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import * from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
//import { Link } from '@mui/material';
import CommentBox from './CommentBox'
import Tags from './Tags';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { deleteArticle } from '../reducers/articleReducer';
import { toggleWatched } from '../reducers/watchlistReducer'
import { setErrorMessage } from '../reducers/noticeReducer'
//import ArticleFormModal from './ArticleFormModal';

//import FlagIcon from '@mui/icons-material/Flag';
//import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import { openDialog, setEdit, setPrevValues } from '../reducers/articleFormReducer';
import Tooltip from '@mui/material/Tooltip';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Article({ id, title, author, url, description, tags, comments, doi, pubDate, publisher, displayName, avatarColor, user }) {
    const [ expanded, setExpanded ] = React.useState(false);
    const currentUser = useSelector((state) => state.user)
    const watchlist = useSelector((state) => state.watchlist)
    const dispatch = useDispatch()
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleAddWatchlist = () => {
        const articleId = id
        toggleWatchlist(articleId)
    }

    const handleDelete = (event) => {
        event.preventDefault()
        dispatch(deleteArticle(id))
    }
    const handleEditClick = () => {
        const prevArr = { id, title, author, url, description, tags, doi, pubDate, publisher }
        //handleEdit(prevArr)
        dispatch(setPrevValues(prevArr))
        dispatch(setEdit(prevArr))
        dispatch(openDialog())
    }

    const toggleWatchlist = async (articleId) => {
        try {
            dispatch(toggleWatched(articleId))
        } catch (exception) {
            dispatch(setErrorMessage("Error: Toggle Watchlist Failed", 5))
        }
    }

    const watchlistIds = watchlist.map(x => x.id)
    const watchColor = watchlistIds.includes(id) ? 'secondary' : 'action'

    return (
        <Card variant="outlined" sx={{ maxWidth: '400px' }}>
            <CardHeader
                avatar={
                    <IconButton aria-label='user' >
                        <Avatar sx={{ bgcolor: avatarColor }} aria-label="article contributor">
                            <Typography sx={{ color: 'black' }}>{displayName}</Typography>
                        </Avatar>
                    </IconButton>
                }
                title={title}
                subheader={<a href={url} target="_blank" rel="noreferrer" >{url}</a>}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Divider />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    <Typography>Author: {author}</Typography>
                    <Typography>Pub. Date: {pubDate}</Typography>
                    <Typography>Publisher: {publisher}</Typography>
                    <Typography>DOI: {doi}</Typography>
                </Box>
                <Tags tags={tags} isDeletable='false' />
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to watchlist" onClick={handleAddWatchlist} id={id} >
                    <FavoriteIcon color={watchColor} />
                </IconButton>
                {user.username === currentUser.username ? (
                    <>
                        <IconButton aria-label="Edit" onClick={handleEditClick}>
                            <EditSharpIcon />
                        </IconButton>
                        <IconButton aria-label="Delete" onClick={handleDelete}>
                            <DeleteIcon />
                        </IconButton>
                    </>) : <></>}
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show comments"
                >
                    <Tooltip title="View Comments">
                        <ExpandMoreIcon />
                    </Tooltip>
                </ExpandMore>Comments
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <CommentBox id={id} comments={comments} />
                </CardContent>
            </Collapse>

        </Card >
    );
}
