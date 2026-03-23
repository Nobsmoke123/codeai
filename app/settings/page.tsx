import Navigation from "@/components/ui/Navigation";
import ThemeSelector from "@/components/ui/ThemeSelector";
import { getServerSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { BiSolidFile } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import {
  MdChevronRight,
  MdOutlineHelp,
  MdOutlineOpenInNew,
  MdOutlinePalette,
  MdOutlineSecurity,
} from "react-icons/md";

const SettingsPage = async () => {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/login");
  }

  const user = session.user;

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
                    "${user?.image ?? "https://lh3.googleusercontent.com/aida-public/AB6AXuAMTo-nKfQw5tyJRagIBGW5dTl4sm5qE376ulU0F53mluJ_eZQLVrY-bIMC06_d6WSTxKZAOsHUGus6BABxObFcVoVPNsE2wPWgvkXYjRop7coA0k0fgCbhfKZ6vuN5fZ3uf3u7DHbmLhwJUfUmgjL6r_DmlaHDcsWTMKybDEUgTss6opQiInn-_mPi2VivfN-HrQtFmun2wd_dSOlTIMkxtFwyy501B2RUvmuXyuGPNV4v199UBb3296VFgxSPI2zPxVPRv-z9U6E"}")`,
                }}
              ></div>
              <div className="absolute bottom-0 right-0 size-4 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xl font-bold">{user.name}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
                {user.email}
              </p>
              <p className="text-xs text-slate-300 font-medium ">
                Last Login:{" "} 
              </p>
            </div>
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
              <ThemeSelector />
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
        {/* <div className="mt-10 px-4">
          <button className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 py-4 rounded-xl text-red-500 font-semibold hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors flex items-center justify-center gap-2">
            <MdOutlinePowerSettingsNew className="" />
            Log Out
          </button>
        </div> */}
      </main>
    </div>
  );
};

export default SettingsPage;
