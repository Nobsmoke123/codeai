"use client";

import { requestPasswordReset } from "@/lib/auth-client";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import {
  BsArrowRight,
  BsChevronLeft,
  BsEnvelopeFill,
  BsUnlockFill,
} from "react-icons/bs";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

const ForgotPasswordForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleSubmit = async () => {
    if (email.length === 0) {
      toast.error("Enter the email address.");
      return;
    }

    try {
      setIsLoading(true);
      const { data, error } = await requestPasswordReset({
        email,
        redirectTo: "/",
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error("An error occured please contact support.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass-panel rounded-[28px] p-8 shadow-2xl sm:p-10">
      <div className="mb-10 text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
          <BsUnlockFill className="text-3xl text-primary" />
        </div>
        <h1 className="mb-4 text-[2.25rem] font-black leading-none tracking-tighter text-slate-950 dark:text-white">
          Forgot Password
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Enter your email address to receive a password reset link.
        </p>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <label className="ml-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Email
          </label>
          <div className="relative group">
            <BsEnvelopeFill className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-muted-foreground transition-colors group-focus-within:text-primary" />
            <input
              className="w-full rounded-xl border border-input-border bg-input-surface py-4 pl-12 pr-4 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:text-white dark:placeholder:text-slate-600"
              placeholder="johndoe@gmail.com"
              required
              name="email"
              type="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 dark:bg-primary py-4 font-bold text-white shadow-[0_0_20px_rgba(19,91,236,0.25)] transition-all hover:bg-primary/90 active:scale-[0.98]"
          type="button"
          disabled={isLoading}
          onClick={handleSubmit}
        >
          {!isLoading ? (
            <span>Send Reset Link</span>
          ) : (
            <BeatLoader color="#fff" />
          )}
          <BsArrowRight className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1" />
        </button>
      </form>

      <div className="mt-8 border-t border-panel-border pt-8 text-center">
        <Link
          href={"/login"}
          className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-600 transition-all duration-300 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
        >
          <BsChevronLeft className="material-symbols-outlined text-lg" />
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
