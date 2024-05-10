function SubmitButton({ className, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <button
        type="submit"
        className={`w-full rounded-[22.5px] bg-orange p-[11px] text-[15px] font-bold uppercase
        tracking-[2px] text-white outline-none ${className} hover:bg-white outline-none
        hover:text-orange focus-visible:bg-white focus-visible:text-orange
        focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-4
        focus:ring-offset-dark-blue`}
      >
        Submit
      </button>
    </form>
  );
}

export default SubmitButton;
