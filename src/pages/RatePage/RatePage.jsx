import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import IconStart from '../../assets/images/icon-star.svg';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import Rating from '../../components/Rating/Rating';

function RatePage() {
  const [rating, setRating] = useState(null);
  const navigate = useNavigate();

  function submitButton(e) {
    e.preventDefault();
    navigate('/thanks');
  }

  return (
    <article className="m-auto w-[90vw] max-w-[412px] rounded-[30px] bg-gradient-bg p-8">
      <div className="flex size-12 items-center justify-center rounded-full bg-dark-blue">
        <img src={IconStart} alt="Small orange start" />
      </div>
      <header className="mb-6 mt-[30px] space-y-[15px]">
        <h1 className="text-[1.75rem] font-bold">How did we do?</h1>
        <p className="text-light-grey">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </header>
      <Rating rating={rating} setRating={setRating} />
      <SubmitButton className="mt-8" onSubmit={(e) => submitButton(e)} />
    </article>
  );
}

export default RatePage;
