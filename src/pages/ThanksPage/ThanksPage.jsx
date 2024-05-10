import { useLocation } from 'react-router-dom';
import RatingIllustration from '../../assets/images/illustration-thank-you.svg';

function ThanksPage() {
  const { state } = useLocation();
  return (
    <article
      className="p-6 m-auto w-[90vw] max-w-[327px] sm:max-w-[412px] rounded-[30px] bg-gradient-bg
        sm:px-9 sm:py-11 flex flex-col gap-6 sm:gap-9 items-center"
    >
      <img
        src={RatingIllustration}
        alt="Rating illustration"
        className="sm:w-[162px] w-[144px]"
      />
      {state && (
        <div className="text-orange rounded-[22.5px] bg-dark-blue py-1 px-[1.2rem]">
          <p>You selected {state} out of 5</p>
        </div>
      )}
      <header className="text-center space-y-[15px]">
        <h1 className="text-[1.75rem] font-bold">Thank you!</h1>
        <p className="text-light-grey text-sm sm:text-[15px]">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </header>
    </article>
  );
}

export default ThanksPage;
