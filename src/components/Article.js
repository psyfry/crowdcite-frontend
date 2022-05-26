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
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Link } from '@mui/material';
import CommentBox from './CommentBox'
import Tags from './Tags';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { deleteArticle } from '../reducers/articleReducer';
//import FlagIcon from '@mui/icons-material/Flag';
//import FlagCircleIcon from '@mui/icons-material/FlagCircle';
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

export default function Article({ id, title, dateCreated, author, url, description, tags, comments, doi, pubDate, publisher, displayName, toggleWatchlist, avatarColor, watchArray, user }) {
    const [ expanded, setExpanded ] = React.useState(false);
    const currentUser = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleAddWatchlist = () => {
        const articleId = id
        toggleWatchlist(articleId)
    }

    const handleDelete = (event) => {
        console.log('delete');
        event.preventDefault()
        dispatch(deleteArticle(id))
    }
    //const color = watchArray.includes(id) ? 'secondary' : 'action'
    return (
        <Card variant="outlined" sx={{ maxWidth: '400px' }}>
            <CardHeader
                avatar={
                    <IconButton aria-label='user' href={`api/users/${user}`}>
                        <Avatar sx={{ bgcolor: avatarColor }} aria-label="article">
                            {displayName}
                        </Avatar>
                    </IconButton>
                }
                action={
                    <IconButton aria-label="settings" href={`api/articles/${id}`}>
                        <ArrowCircleRightIcon />
                    </IconButton>
                }
                title={title}

                subheader={<Link href={url} underline='hover'>{url}</Link>}
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
                <IconButton aria-label="add to watchlist" onClick={handleAddWatchlist} id={id}>
                    <FavoriteIcon />
                </IconButton>
                {user === currentUser.userId ? (
                    <>
                        <IconButton aria-label="Edit">
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
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <CommentBox id={id} comments={comments} />
                </CardContent>
            </Collapse>
        </Card >
    );
}
