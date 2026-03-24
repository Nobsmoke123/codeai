import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const TogglePassword: React.FC<{
  revealPassword: boolean;
  togglePassword: () => void;
}> = ({ revealPassword, togglePassword }) => {
  return (
    <button onClick={() => togglePassword()} type="button">
      {!revealPassword ? (
        <BsEyeSlashFill className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 transition-colors group-focus-within:text-primary dark:text-slate-500" />
      ) : (
        <BsEyeFill className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 transition-colors group-focus-within:text-primary dark:text-slate-500" />
      )}
    </button>
  );
};

export default TogglePassword;
