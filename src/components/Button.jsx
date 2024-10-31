const Button = ({ styles, text }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient bg-blue-gradient:hover font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;
