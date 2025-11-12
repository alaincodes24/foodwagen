const FooterBottom = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 text-sm text-white/60 md:flex-row">
      <p>All rights Reserved © Your Company, {new Date().getFullYear()}</p>
      <p className="flex items-center gap-2 text-white/50">
        Made with
        <span aria-hidden="true" className="text-primary">
          ♥
        </span>
        by ThemeWagon
      </p>
    </div>
  );
};
export default FooterBottom;
