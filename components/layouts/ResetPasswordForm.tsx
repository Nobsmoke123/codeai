"use client";

import { resetPassword } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";
import {
  BsArrowRight,
  BsChevronLeft,
  BsEyeFill,
  BsEyeSlashFill,
  BsLockFill,
  BsShieldCheck,
} from "react-icons/bs";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import TogglePassword from "../ui/TogglePassword";

type ResetPasswordFormData = {
  password: string;
  confirm_password: string;
};

const ResetPasswordForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [revealPassword, setRevealPassword] = useState<boolean>(false);

  const [formData, setFormData] = useState<ResetPasswordFormData>({
    password: "",
    confirm_password: "",
  });

  const params = useSearchParams();
  const router = useRouter();

  const token = params.get("token");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordToggle = () => {
    setRevealPassword(!revealPassword);
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      if (!token) {
        toast.error("Invalid password reset link.");
        return;
      }

      if (formData.password !== formData.confirm_password) {
        toast.error(
          "Password mismatch. Password and Confirm Password must match.",
        );
        return;
      }

      const { error } = await resetPassword({
        token,
        newPassword: formData.password,
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Password reset successfully.");
      router.replace("/login");
    } catch (error) {
      toast.error("An error occured please contact support.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#11131b]/40 backdrop-blur-xl border border-[#1e293b]/50 p-8 rounded-xl ">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#135bec]/10 border border-[#135bec]/30 mb-6">
          <BsLockFill className="text-[#135bec] text-3xl" />
        </div>
        <h1 className="text-[2.25rem] font-black leading-none tracking-tighter mb-4 text-[#ffffff]">
          Reset Password
        </h1>
        <p className="text-[#94a3b8] text-sm leading-relaxed">
          Set a strong password for your CodeAI account.
        </p>
      </div>
      <form className="space-y-6">
        <div className="space-y-2">
          <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#94a3b8] block ml-1">
            New Password
          </label>
          <div className="relative group">
            <BsLockFill className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8] text-xl transition-colors group-focus-within:text-primary" />
            <input
              className="w-full bg-[#191b24] border border-[#1e293b] focus:border-primary focus:ring-1 focus:ring-primary rounded-lg py-4 pl-12 pr-4 text-[#ffffff] placeholder:text-slate-600 transition-all outline-none"
              placeholder="***********"
              required
              name="password"
              type={!revealPassword ? "password" : "text"}
              value={formData.password}
              onChange={handleInputChange}
            />

            <TogglePassword
              revealPassword={revealPassword}
              togglePassword={handlePasswordToggle}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#94a3b8] block ml-1">
            Confirm Password
          </label>
          <div className="relative group">
            <BsShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8] text-xl transition-colors group-focus-within:text-primary" />
            <input
              className="w-full bg-[#191b24] border border-[#1e293b] focus:border-primary focus:ring-1 focus:ring-primary rounded-lg py-4 pl-12 pr-4 text-[#ffffff] placeholder:text-slate-600 transition-all outline-none"
              placeholder="***********"
              required
              name="confirm_password"
              type={!revealPassword ? "password" : "text"}
              value={formData.confirm_password}
              onChange={handleInputChange}
            />
            <TogglePassword
              revealPassword={revealPassword}
              togglePassword={handlePasswordToggle}
            />
          </div>
        </div>
        <button
          className="w-full bg-[#135bec] text-[#ffffff] font-bold py-4 rounded-lg shadow-[0_0_20px_rgba(19,91,236,0.25)] hover:bg-[#135bec]/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
          type="button"
          disabled={!isLoading ? false : true}
          onClick={handleSubmit}
        >
          {!isLoading ? <span>Reset Password</span> : <BeatLoader />}
          <BsArrowRight className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
      <div className="mt-8 pt-8 border-t border-[#1e293b]/30 text-center">
        <Link
          href={"/login"}
          className="text-sm font-semibold text-on-surface-variant hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
        >
          <BsChevronLeft className="material-symbols-outlined text-lg" />
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
