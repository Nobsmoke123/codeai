const LanguageChip: React.FC<{
  language: string;
  icon: React.ReactNode;
}> = ({ language, icon }) => {
  return (
    <button className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-200 dark:bg-slate-800 px-4 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
      {icon}
      <span className="text-sm font-medium">{language}</span>
    </button>
  );
};

export default LanguageChip;
