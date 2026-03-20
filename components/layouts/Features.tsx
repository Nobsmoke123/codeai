import {
  BsFileEarmarkCodeFill,
  BsFillShieldLockFill,
  BsGlobe,
} from "react-icons/bs";
import { MdPsychology } from "react-icons/md";

const Features = () => {
  return (
    <div className="flex sm:max-w-5xl lg:max-w-3xl items-center mx-auto">
      {/* <!-- Features Grid --> */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 mt-12 w-full max-w-2xl">
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 text-left">
          <BsGlobe className="text-custom-primary mb-2 sm:text-base lg:text-xl" />
          <h3 className="sm:text-xs lg:text-lg font-bold mb-1">
            20+ Languages
          </h3>
          <p className="sm:text-[8px] lg:text-sm text-slate-500">
            From Python to Rust, we support it all.
          </p>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 text-left">
          <MdPsychology className="text-custom-primary mb-2 sm:text-base lg:text-2xl" />
          <h3 className="sm:text-xs lg:text-lg font-bold mb-1">
            Context Aware
          </h3>
          <p className="sm:text-[8px] lg:text-sm text-slate-500">
            Understands variables and imports.
          </p>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 text-left">
          <BsFileEarmarkCodeFill className="text-custom-primary mb-2 sm:text-base lg:text-xl" />
          <h3 className="sm:text-xs lg:text-lg font-bold mb-1">Instant Docs</h3>
          <p className="sm:text-[8px] lg:text-sm text-slate-500">
            Generate JSDoc strings on the fly.
          </p>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 text-left">
          <BsFillShieldLockFill className="text-custom-primary mb-2 sm:text-base lg:text-xl" />
          <h3 className="sm:text-xs lg:text-lg font-bold mb-1">
            Private &amp; Secure
          </h3>
          <p className="sm:text-[8px] lg:text-sm text-slate-500">
            Your code stays yours. 100% private.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
