function SubmitButton({ className, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <button
        type="submit"
        className={`w-full rounded-[22.5px] bg-orange p-[11px] text-[15px] font-bold uppercase
        tracking-[2px] text-white focus:outline-none ${className} hover:bg-white
        hover:text-orange focus:bg-white focus:text-orange focus:ring-2
        focus:ring-orange focus:ring-offset-4 focus:ring-offset-dark-blue`}
      >
        Submit
      </button>
    </form>
  );
}

export default SubmitButton;
