function Rating({ rating, setRating }) {
  return (
    <div className="flex gap-[21px]">
      {[...Array(5).keys()].map((index) => (
        <button
          key={index}
          className={`size-[51px] items-center justify-center rounded-full bg-dark-blue font-bold
          text-medium-grey before:flex hover:cursor-pointer hover:bg-orange
          hover:text-white ${rating === index + 1 && 'bg-medium-grey text-white'}
          focus:ring-offset-4 focus:ring-orange focus:ring-2 outline-none
          focus:ring-offset-dark-blue focus:bg-orange focus:text-white`}
          type="button"
          onClick={() => setRating(index + 1)}
        >
          <p className="mt-1">{index + 1}</p>
        </button>
      ))}
    </div>
  );
}

export default Rating;
