import { useReviews, useUsers } from "../../store/store"
import Rating from "./Rating"

type Props = {
    id: number
} 

function ReviewCard({ id }: Props) {
    
    const review = useReviews(state => state.reviews.filter(v => v.id === id))[0] 
    const user = useUsers(state => state.users.filter(v => v.id === review.userId))[0]

    return (
        <div className="review-card">
            <div className="review-card__header">
                <img src={user?.avatar} alt="" className="review-card__user-avatar" />
                <div className="review-card__user">
                    <h4 className="review-card__user-name">{user?.name ? user?.name : "Аноним"}</h4>
                    <Rating rating={review.rating} />
                </div>
            </div>
            <p className="review-card__body">
                {review.content}
            </p>

        </div>
    )


}

export default ReviewCard
