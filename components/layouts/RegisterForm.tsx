"use client";

import { signIn, signUp } from "@/lib/auth-client";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { BiLogoGithub, BiLogoGoogle } from "react-icons/bi";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import { useRouter } from "next/navigation";

type RegisterFormData = {
  fullname: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    email: "",
    fullname: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const result = await signUp.email(
        {
          ...formData,
          name: formData.fullname,
          callbackURL: "/explainer",
        },
        {
          onSuccess: () => {
            router.push("/explainer");
          },
        },
      );
      setIsLoading(false);
      if (result.data?.user) {
        toast.success("Account created successfully.");
      } else {
        toast.error("An error occurred please contact support.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid email or password.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass-panel border border-white/5 rounded-xl p-8 shadow-2xl">
      <div className="mb-8">
        <h1 className="text-[36px] font-black leading-tight tracking-tight mb-2">
          Create Account
        </h1>
        <p className="text-[#94a3b8] text-sm font-medium">
          Join the next generation of engineering.
        </p>
      </div>
      <form action="#" className="space-y-6">
        <div className="space-y-2">
          <label className="block text-[10px] font-black tracking-widest text-[#94a3b8] uppercase ml-1">
            Full Name
          </label>
          <div className="relative">
            <input
              className="w-full bg-[#191b24] border-none ring-1 ring-outline-variant focus:ring-2 focus:ring-primary rounded-lg py-3 px-4 text-[#ffffff] placeholder:text-slate-600 transition-all outline-none"
              placeholder="John Doe"
              type="text"
              onChange={handleInputChange}
              value={formData.fullname}
              name="fullname"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-[10px] font-black tracking-widest text-[#94a3b8] uppercase ml-1">
            Email Address
          </label>
          <div className="relative">
            <input
              className="w-full bg-[#191b24] border-none ring-1 ring-outline-variant focus:ring-2 focus:ring-primary rounded-lg py-3 px-4 text-[#ffffff] placeholder:text-slate-600 transition-all outline-none"
              placeholder="name@company.com"
              type="email"
              onChange={handleInputChange}
              value={formData.email}
              name="email"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <label className="block text-[10px] font-black tracking-widest text-[#94a3b8] uppercase">
              Password
            </label>
          </div>
          <div className="relative">
            <input
              className="w-full bg-[#191b24] border-none ring-1 ring-outline-variant focus:ring-2 focus:ring-primary rounded-lg py-3 px-4 text-[#ffffff] placeholder:text-slate-600 transition-all outline-none"
              placeholder="••••••••"
              type="password"
              onChange={handleInputChange}
              value={formData.password}
              name="password"
            />
          </div>
        </div>
        <button
          className="w-full bg-blue-500 text-white font-black py-4 rounded-lg shadow-[0_0_40px_-10px_rgba(19,91,236,0.3)] hover:opacity-90 active:scale-[0.98] transition-all tracking-widest uppercase text-sm"
          type="button"
          disabled={!isLoading ? false : true}
          onClick={handleSubmit}
        >
          {!isLoading ? "Register" : <BeatLoader />}
        </button>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-outline-variant/50"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-[#0b0d11] px-4 text-[#94a3b8] font-black tracking-widest">
            Or Continue With
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Google button */}
        <button
          onClick={() =>
            signIn.social({
              provider: "google",
              callbackURL: "/explainer",
            })
          }
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#11131b] ring-1 ring-outline-variant hover:bg-[#191b24] transition-colors active:scale-95 group"
        >
          <BiLogoGoogle className="" />
          <span className="text-[10px] font-black tracking-widest uppercase text-[#94a3b8]">
            Google
          </span>
        </button>

        {/* Github button */}
        <button
          onClick={() =>
            signIn.social({
              provider: "github",
              callbackURL: "/explainer",
            })
          }
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#11131b] ring-1 ring-outline-variant hover:bg-[#191b24] transition-colors active:scale-95 group"
        >
          <BiLogoGithub className="" />
          <span className="text-[10px] font-black tracking-widest uppercase text-[#94a3b8]">
            GitHub
          </span>
        </button>
      </div>
      <div className="mt-10 text-center">
        <p className="text-[#94a3b8] text-[12px] font-medium">
          Already have an account? &nbsp;&nbsp;
          <Link
            href={"/login"}
            className="text-[#135BEC] font-black ml-1 hover:underline decoration-2 underline-offset-4 uppercase tracking-widest"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
