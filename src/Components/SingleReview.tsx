import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Review } from '../types/CustomTypes';

interface SingleReviewProps {
    review: Review;
    fullWidth: boolean;
}

export default function SingleReview({ review, fullWidth }: SingleReviewProps) {
    if (!review) {
        return <p>Loading...</p>
    }

    return (
        <Card sx={{ maxWidth: fullWidth ? "100%" : 345 }}>
          <CardHeader title={review.title}
            subheader={review.user_id}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {review.body}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>

          </CardActions>
        </Card>
      );
}