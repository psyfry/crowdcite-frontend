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
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from '@mui/material';
import CommentBox from './CommentBox'
import Tags from './Tags';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/system';

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

export default function Article({ id, title, dateCreated, author, url, description, tags, watchlist, comments, doi, pubDate, publisher, user, displayName, toggleWatchlist, avatarColor }) {
    const [ expanded, setExpanded ] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleAddWatchlist = () => {
        const articleId = id
        console.log({ articleId });
        toggleWatchlist(articleId)
    }
    return (
        <Card sx={{ maxWidth: '400px' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: avatarColor }} aria-label="article">
                        {displayName}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings" href={`api/articles/${id}`}>
                        <MoreVertIcon />
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
                <Typography>{<Tags tags={tags} isDeletable='false' />}</Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to watchlist">
                    <FavoriteIcon onClick={handleAddWatchlist} id={id} />
                </IconButton>
                <IconButton aria-label="Comment">
                    <ShareIcon />
                </IconButton>
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
                    <CommentBox id={id} comments={comments} user={user} />
                </CardContent>
            </Collapse>
        </Card >
    );
}
