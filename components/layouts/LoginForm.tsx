"use client";

import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { BiLogoGithub, BiLogoGoogle } from "react-icons/bi";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import TogglePassword from "../ui/TogglePassword";

type LoginFormData = {
  email: string;
  password: string;
};

const labelClassName =
  "ml-1 block text-[10px] font-black uppercase tracking-[0.28em] text-muted-foreground";
const inputClassName =
  "w-full rounded-xl border border-input-border bg-input-surface px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:text-white dark:placeholder:text-slate-600";
const socialButtonClassName =
  "flex items-center justify-center gap-2 rounded-xl border border-panel-border bg-white/70 px-4 py-3 text-slate-700 transition-colors hover:bg-white active:scale-95 dark:bg-slate-950/60 dark:text-slate-200 dark:hover:bg-slate-900";

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [revealPassword, setRevealPassword] = useState<boolean>(false);

  const handlePasswordToggle = () => {
    setRevealPassword(!revealPassword);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitButton = async () => {
    try {
      setIsLoading(true);
      const result = await signIn.email({
        ...formData,
        callbackURL: "/explainer",
      });

      if (result.error) {
        toast.error(result.error.message);
        return;
      }

      toast.success("Login successful.");
    } catch {
      toast.error("Invalid email or password.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass-panel rounded-[28px] p-8 shadow-2xl sm:p-10">
      <div className="mb-8">
        <h1 className="mb-2 text-[36px] font-black leading-tight tracking-tight text-slate-950 dark:text-white">
          Welcome Back.
        </h1>
        <p className="text-sm font-medium text-muted-foreground">
          Continue your development journey.
        </p>
      </div>

      <form action="#" className="space-y-6">
        <div className="space-y-2">
          <label className={labelClassName}>Email Address</label>
          <input
            className={inputClassName}
            placeholder="name@company.com"
            type="email"
            name="email"
            onChange={handleInputChange}
            value={formData.email}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <label className={labelClassName}>Password</label>
            <Link
              href={"/forgot-password"}
              className="text-[10px] font-black uppercase tracking-[0.28em] text-primary transition-opacity hover:opacity-80"
            >
              Forgot?
            </Link>
          </div>

          <div className="relative group">
            <input
              className={inputClassName}
              placeholder="••••••••"
              type={!revealPassword ? "password" : "text"}
              name="password"
              onChange={handleInputChange}
              value={formData.password}
            />
            <TogglePassword
              revealPassword={revealPassword}
              togglePassword={handlePasswordToggle}
            />
          </div>
        </div>

        <button
          className="w-full rounded-xl bg-blue-500 dark:bg-primary py-4 text-sm font-black uppercase tracking-[0.28em] text-white shadow-[0_0_40px_-10px_rgba(19,91,236,0.3)] transition-all hover:opacity-90 active:scale-[0.98]"
          type="button"
          disabled={isLoading}
          onClick={handleSubmitButton}
        >
          {!isLoading ? "Login" : <BeatLoader color="#fff" />}
        </button>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-panel-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-panel px-4 text-[10px] font-black tracking-[0.28em] text-muted-foreground">
            Or Continue With
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={async () =>
            await signIn.social({
              provider: "google",
              callbackURL: "/explainer",
            })
          }
          className={socialButtonClassName}
        >
          <BiLogoGoogle />
          <span className="text-[10px] font-black uppercase tracking-[0.28em] text-muted-foreground">
            Google
          </span>
        </button>

        <button
          onClick={async () =>
            await signIn.social({
              provider: "github",
              callbackURL: "/explainer",
            })
          }
          className={socialButtonClassName}
        >
          <BiLogoGithub />
          <span className="text-[10px] font-black uppercase tracking-[0.28em] text-muted-foreground">
            GitHub
          </span>
        </button>
      </div>

      <div className="mt-10 text-center">
        <p className="text-[12px] font-medium text-muted-foreground">
          Don&apos;t have an account?
          <Link
            href={"/register"}
            className="ml-3 font-black uppercase tracking-[0.28em] text-primary hover:underline decoration-2 underline-offset-4"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
