import React from 'react';

function CommentForm(): JSX.Element {

  const raiting: string[] = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

  const [data, setData] = React.useState({
    rating: '',
    text: ''
  });

  const handleInputRating = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setData({ ...data, [name]: value });
  };

  const handleTextareaText = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setData({ ...data, [name]: value });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          raiting.map((value, index) => (
            <React.Fragment key={`${value}-key`}>
              < input
                className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={`${value}-stars`}
                type="radio"
                onChange={handleInputRating}
              />
              <label
                htmlFor={`${value}-stars`}
                className="reviews__rating-label form__rating-label"
                title={String(raiting.length - index)}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleTextareaText}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form >
  );
}
export default CommentForm;
