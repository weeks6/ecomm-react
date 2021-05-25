import ReviewCard from "../Book/ReviewCard"

type Props = {
    reviews: number[]
}

function Reviews({ reviews }: Props) {
    return (
        <section className="reviews">
            <div className="reviews__container">
                {reviews.length ?
                    reviews.map(review => <ReviewCard key={review} id={review} />) : 
                    <div className="reviews__container_empty">
                        <span className="reviews__messsage">
                            На эту книгу еще нет отзывов :(
                        </span>
                    </div>
                }
            </div>
        </section>
    )
}

export default Reviews
