"use client";

import { ChangeEvent, useState } from "react";
import { BiClipboard } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { toast } from "react-toastify";
import LoadingIndicator from "./Loading";
import { useRouter } from "next/navigation";
import { ErrorResult, SuccessResult } from "@/lib/types";

const ExplainerClient = () => {
  const [code, setCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  const handleClick = async () => {
    if (!code.trim()) {
      toast.error("Please paste a code in the code editor.", {
        autoClose: 1000,
        customProgressBar: false,
      });
      return;
    } else {
      try {
        setIsLoading(true);

        const response = await fetch("/api/explanations", {
          body: JSON.stringify({ code }),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to generate explanation.");
        }

        const data = (await response.json()) as SuccessResult | ErrorResult;

        setIsLoading(false);

        if (data.status === 201) {
          router.push(`/explanations/${data.id}`);
          return;
        } else {
          toast.error(data.error);
        }
      } catch (error) {
        console.log(error);
        toast.error("Error generating code explanation.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <main className="flex-1 flex flex-col p-4 space-y-6 max-w-5xl mx-auto w-full">
        {/* Title & Intro */}
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Enter Code</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Paste your snippet below for a detailed AI analysis.
          </p>
        </div>

        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <>
            {/* Code Input Area */}
            <div className="relative flex-1 group">
              <div className="absolute top-3 right-3 z-10">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/50 hover:bg-slate-800 text-white rounded-lg text-xs font-medium border border-slate-700 transition-all active:scale-95">
                  <BiClipboard className="text-[16px]" />
                  Paste
                </button>
              </div>
              <div className="h-full min-h-[300px] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm flex overflow-hidden ring-1 ring-slate-900/5 focus-within:ring-primary focus-within:border-primary transition-all">
                {/* Line numbers simulation */}
                <div className="w-10 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col items-center pt-4 text-[10px] font-mono text-slate-400 select-none leading-[1.625rem]">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                  <span>11</span>
                  <span>12</span>
                  <span>13</span>
                  <span>14</span>
                  <span>15</span>
                  <span>16</span>
                  <span>17</span>
                  <span>18</span>
                  <span>19</span>
                  <span>20</span>
                </div>

                {/* Actual Textarea */}
                <textarea
                  onChange={handleTextArea}
                  value={code}
                  className="flex-1 p-4 font-mono text-sm leading-relaxed bg-transparent border-none focus:ring-0 resize-none placeholder:italic"
                  placeholder="// Paste your code here to get a human-friendly explanation..."
                ></textarea>
              </div>
            </div>
          </>
        )}
      </main>

      {/* Bottom Action Area */}
      <footer className="p-4 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pb-8 mx-auto">
        <div className="max-w-lg mx-auto flex flex-col space-y-3">
          <button
            onClick={handleClick}
            disabled={isLoading ? true : false}
            className="w-full bg-custom-primary hover:bg-custom-primary/90 text-white font-bold py-4 rounded-2xl shadow-xl shadow-custom-primary/30 flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
          >
            <BsStars className="text-[18px]" />
            Explain Code
          </button>

          <p className="text-[10px] text-center text-slate-400 dark:text-slate-500 px-6 leading-tight">
            By using CodeAI, you agree to our terms. CodeAI can sometimes
            generate incorrect explanations. Use with caution.
          </p>
        </div>
      </footer>
    </>
  );
};

export default ExplainerClient;
