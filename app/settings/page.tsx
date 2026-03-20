"use client";

import Navigation from "@/components/ui/Navigation";
import { BiMenu, BiSolidFile } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import {
  MdChevronLeft,
  MdChevronRight,
  MdCode,
  MdCreate,
  MdOutlineHelp,
  MdOutlineOpenInNew,
  MdOutlinePalette,
  MdOutlinePowerSettingsNew,
  MdOutlineSecurity,
} from "react-icons/md";

const SettingsPage = () => {
  return (
    <div className="w-full max-w-5xl pt-6 mx-auto bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display">
      <Navigation />

      <main className="max-w-5xl mx-auto pb-12">
        {/* Account Section */}
        <div className="mt-6 px-4">
          <h2 className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 ml-1">
            Account
          </h2>
          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex items-center gap-4">
            <div className="relative">
              <div
                className="size-16 rounded-full bg-slate-200 dark:bg-slate-800 bg-cover bg-center overflow-hidden border-2 border-primary/20"
                data-alt="Professional developer profile picture headshot"
                style={{
                  backgroundImage: `url(
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAMTo-nKfQw5tyJRagIBGW5dTl4sm5qE376ulU0F53mluJ_eZQLVrY-bIMC06_d6WSTxKZAOsHUGus6BABxObFcVoVPNsE2wPWgvkXYjRop7coA0k0fgCbhfKZ6vuN5fZ3uf3u7DHbmLhwJUfUmgjL6r_DmlaHDcsWTMKybDEUgTss6opQiInn-_mPi2VivfN-HrQtFmun2wd_dSOlTIMkxtFwyy501B2RUvmuXyuGPNV4v199UBb3296VFgxSPI2zPxVPRv-z9U6E")`,
                }}
              ></div>
              <div className="absolute bottom-0 right-0 size-4 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-lg font-bold truncate">Alex Rivest</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
                alex.rivest@dev.io
              </p>
            </div>
            <button className="text-primary p-2">
              <MdCreate className="text-blue-400" />
            </button>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="mt-8 px-4">
          <h2 className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 ml-1">
            Preferences
          </h2>
          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl divide-y divide-slate-200 dark:divide-slate-800">
            {/*  Theme Toggle (Segmented) */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <MdOutlinePalette className="text-slate-400" />
                  <span className="font-medium">Theme</span>
                </div>
              </div>
              <div className="grid grid-cols-3 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                <button className="py-1.5 text-sm font-medium rounded-md text-slate-600 dark:text-slate-400">
                  Light
                </button>
                <button className="py-1.5 text-sm font-medium rounded-md bg-white dark:bg-slate-700 text-primary shadow-sm">
                  Dark
                </button>
                <button className="py-1.5 text-sm font-medium rounded-md text-slate-600 dark:text-slate-400">
                  System
                </button>
              </div>
            </div>

            {/*  Syntax Highlighting Toggle */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MdCode className="text-slate-400" />
                <div>
                  <p className="font-medium">Syntax Highlighting</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    For AI code explanations
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  onChange={() => {}}
                  className="sr-only ios-switch"
                  type="checkbox"
                />
                <div className="ios-switch-bg w-11 h-6 bg-slate-300 dark:bg-slate-700 rounded-full transition-colors duration-200">
                  <div className="ios-switch-dot absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full shadow transition-transform duration-200"></div>
                </div>
              </label>
            </div>

            {/* Language Dropdown */}
            <button className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center gap-3">
                <BsGlobe className="text-slate-400" />
                <span className="font-medium">Primary Language</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <span>TypeScript</span>
                <MdChevronRight className="text-lg" />
              </div>
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-8 px-4">
          <h2 className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 ml-1">
            Support &amp; Legal
          </h2>
          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl divide-y divide-slate-200 dark:divide-slate-800">
            <button className="w-full p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center gap-3">
                <MdOutlineHelp className="text-slate-400" />
                <span className="font-medium">Help Center</span>
              </div>
              <MdOutlineOpenInNew className="text-slate-400" />
            </button>
            <button className="w-full p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-left">
              <div className="flex items-center gap-3">
                <MdOutlineSecurity className="text-slate-400" />
                <span className="font-medium">Privacy Policy</span>
              </div>
              <MdChevronRight className="text-slate-400" />
            </button>

            <button className="w-full p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-left">
              <div className="flex items-center gap-3">
                <BiSolidFile className="text-slate-400" />
                <span className="font-medium">Terms of Service</span>
              </div>
              <MdChevronRight className="text-slate-400" />
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-10 px-4">
          <button className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 py-4 rounded-xl text-red-500 font-semibold hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors flex items-center justify-center gap-2">
            <MdOutlinePowerSettingsNew className="" />
            Log Out
          </button>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
