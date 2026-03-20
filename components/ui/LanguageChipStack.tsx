import LanguageChip from "./LanguageChip";
import {
  BiLogoCPlusPlus,
  BiLogoDjango,
  BiLogoFlask,
  BiLogoFlutter,
  BiLogoGoLang,
  BiLogoGraphql,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPhp,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoVuejs,
  BiSolidInvader,
} from "react-icons/bi";
import { FaJava, FaPython } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const LanguageChipStack = () => {
  return (
    <div className="flex gap-2 p-4 overflow-x-auto no-scrollbar scroll-smooth">
      <button className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-xl bg-custom-primary px-4 text-white shadow-lg shadow-primary/20">
        <BsStars className="text-[18px]" />
        <span className="text-sm font-medium">All</span>
      </button>

      {/* Python Chip */}
      <LanguageChip
        language="Python"
        icon={<FaPython className="text-[18px] text-amber-500" />}
      />

      {/* JS Chip */}
      <LanguageChip
        language="JavaScript"
        icon={<BiLogoJavascript className="text-[18px] text-yellow-400" />}
      />

      {/* Java Chip */}
      <LanguageChip
        language="Java"
        icon={<FaJava className="text-[18px] text-blue-400" />}
      />

      {/* Go Chip */}
      <LanguageChip
        language="Go"
        icon={<BiLogoGoLang className="text-[24px] text-cyan-400" />}
      />

      {/* Nodejs Chip */}
      <LanguageChip
        language="Nodejs"
        icon={<BiLogoNodejs className="text-[18px] text-green-400" />}
      />

      {/* Php Chip */}
      <LanguageChip
        language="Php"
        icon={<BiLogoPhp className="text-[24px] text-purple-400" />}
      />

      {/* C++ Chip */}
      <LanguageChip
        language="C++"
        icon={<BiLogoCPlusPlus className="text-[18px] text-blue-400" />}
      />

      {/* TypeScript Chip */}
      <LanguageChip
        language="TypeScript"
        icon={<BiLogoTypescript className="text-[18px] text-blue-400" />}
      />

      {/* Flutter Chip */}
      <LanguageChip
        language="Flutter"
        icon={<BiLogoFlutter className="text-[18px] text-cyan-400" />}
      />

      {/* Rust Chip */}
      <LanguageChip
        language="Rust"
        icon={<BiSolidInvader className="text-[18px] text-red-400" />}
      />

      {/* GraphQL Chip */}
      <LanguageChip
        language="GraphQL"
        icon={<BiLogoGraphql className="text-[18px] text-pink-700" />}
      />

      {/* Postgres */}
      <LanguageChip
        language="PostgreSQL"
        icon={<BiLogoPostgresql className="text-[18px] text-blue-400" />}
      />

      {/* MongoDB */}
      <LanguageChip
        language="Mongo"
        icon={<BiLogoMongodb className="text-[18px] text-green-700" />}
      />

      {/* React Chip */}
      <LanguageChip
        language="React"
        icon={<BiLogoReact className="text-[18px] text-cyan-400" />}
      />

      {/* Vuejs Chip */}
      <LanguageChip
        language="Vuejs"
        icon={<BiLogoVuejs className="text-[18px] text-green-700" />}
      />

      {/* Flask Chip */}
      <LanguageChip
        language="Flask"
        icon={<BiLogoFlask className="text-[18px] text-white" />}
      />

      {/* Django Chip */}
      <LanguageChip
        language="Django"
        icon={<BiLogoDjango className="text-[18px] text-green-700" />}
      />
    </div>
  );
};

export default LanguageChipStack;
