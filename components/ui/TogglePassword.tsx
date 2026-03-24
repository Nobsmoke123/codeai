import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const TogglePassword: React.FC<{
  revealPassword: boolean;
  togglePassword: () => void;
}> = ({ revealPassword, togglePassword }) => {
  return (
    <button onClick={() => togglePassword()} type="button">
      {!revealPassword ? (
        <BsEyeSlashFill className="text-sm absolute right-4 top-1/2 -translate-y-1/2 text-[#94a3b8] transition-colors group-focus-within:text-primary" />
      ) : (
        <BsEyeFill className="text-sm absolute right-4 top-1/2 -translate-y-1/2 text-[#94a3b8] transition-colors group-focus-within:text-primary" />
      )}
    </button>
  );
};

export default TogglePassword;
