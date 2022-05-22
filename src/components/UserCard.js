import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
//import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';
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

export default function UserCard({ id, username, firstName, lastName, watchlist, articles, avatarColor, displayName }) {
    const [ expanded, setExpanded ] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const fullName = `${firstName} ${lastName}`
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: avatarColor }} aria-label="user">
                        {displayName}
                    </Avatar>
                }
                title={username}
                subheader={fullName}
            />
            <CardContent>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                </Box>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show info"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {/*                <Typography variant="body2" color="text.secondary">
                    Submissions
                </Typography>
                    <Submissions articles={articles} />
                    <Watchlist watchlist={watchlist} />*/}
                </CardContent>
            </Collapse>
        </Card>
    );
}