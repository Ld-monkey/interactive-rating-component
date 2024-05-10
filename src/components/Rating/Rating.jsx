function Rating({ rating, setRating }) {
  return (
    <div className="flex gap-[17px] sm:gap-[21px]">
      {[...Array(5).keys()].map((index) => (
        <button
          key={index}
          className={`size-[42px] sm:size-[51px] items-center justify-center rounded-full bg-dark-blue
          font-bold text-medium-grey before:flex hover:cursor-pointer hover:bg-orange
          hover:text-white ${rating === index + 1 && 'bg-medium-grey text-white'}
          focus-visible:ring-offset-4 focus-visible:ring-orange focus-visible:ring-2
          outline-none focus:ring-offset-dark-blue focus-visible:bg-orange
          focus:text-white pt-1 text-sm sm:text-[15px]`}
          type="button"
          onClick={() => setRating(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Rating;
