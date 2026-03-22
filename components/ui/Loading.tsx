import { BiTerminal } from "react-icons/bi";

const LoadingIndicator = () => {
  return (
    <div className="bg-[#0b0d11] text-[#ffffff] font-body selection:bg-[#135bec]/30 min-h-screen flex flex-col overflow-hidden">
      <div className="absolute flex-grow flex flex-col items-center justify-center relative px-6">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="relative z-10 flex flex-col items-center max-w-md w-full">
          <div className="relative w-48 h-48 mb-12 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-[#135bec]/20 animate-pulse"></div>
            <div className="absolute inset-0 border-t-2 border-r-2 border-[#135bec] rounded-full animate-spin duration-700"></div>
            <div
              className="absolute inset-4 border-b-2 border-l-2 border-[#135bec]/40 rounded-full animate-spin duration-1000"
              style={{ animationDirection: "reverse" }}
            ></div>
            <div className="flex flex-col items-center justify-center space-y-1">
              {/* <span
                className="material-symbols-outlined text-[#135bec] text-4xl"
                style={{ fontVariationSettings: "'FILL', 1" }}
              ></span> */}
              <div className="flex items-center gap-2">
                <div className="bg-custom-primary p-0.5 rounded-sm">
                  <BiTerminal className="text-white size-6" />
                </div>
                <span className="font-bold">CodeAI</span>
              </div>
              <span className="font-mono text-[10px] tracking-widest text-[#135bec]/60">
                NODE_0x1A
              </span>
            </div>
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-[#135bec] shadow-[0_0_10px_#135BEC]"></div>
            <div className="absolute bottom-4 right-8 w-1 h-1 bg-[#135bec]/50"></div>
          </div>
          <div className="text-center space-y-4">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-bold tracking-[0.3em] text-[#135bec] uppercase">
                EXPLANING CODE...
              </span>
              <div className="w-64 h-[2px] bg-[#282a32] relative overflow-hidden rounded-full">
                <div
                  className="absolute inset-0 bg-[#135bec] w-1/2 animate-[progress_2s_ease-in-out_infinite]"
                  style={{ animation: "slide 1.5s infinite linear" }}
                ></div>
              </div>
            </div>
            <div className="font-mono text-[10px] text-[#94a3b8]/40 space-y-1 mt-6">
              <p className="animate-pulse">
                &gt; INITIALIZING SECURE HANDSHAKE
              </p>
              <p>&gt; AUTHENTICATING ENCRYPTED FRAGMENTS</p>
              <p className="text-[#135bec]/40">
                &gt; BYPASSING LATENCY CONSTRAINTS
              </p>
            </div>
          </div>
        </div>
        <div className="absolute scanline top-32 left-8 w-12 h-12 border-t border-l border-outline-variant/30"></div>
        <div className="absolute scanline top-32 right-8 w-12 h-12 border-t border-r border-outline-variant/30"></div>
        <div className="absolute scanline bottom-32 left-8 w-12 h-12 border-b border-l border-outline-variant/30"></div>
        <div className="absolute scanline bottom-32 right-8 w-12 h-12 border-b border-r border-outline-variant/30"></div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
