import CenterContent from "../layout/CenterContent";
import FooterBottom from "../ui/footer/FooterBottom";
import FooterTop from "../ui/footer/FooterTop";

const Footer = () => {
  return (
    <footer
      className="flex flex-col text-white border-y-4 border-[#ff9f0d]"
      style={{
        background:
          "linear-gradient(180deg, #222222 0%, #1a1a1a 55%, #171717 100%)",
      }}
    >
      <div className="py-16 lg:py-20">
        <CenterContent>
          <FooterTop />
        </CenterContent>
      </div>
      <div className="border-t border-white/10">
        <CenterContent className="py-6">
          <FooterBottom />
        </CenterContent>
      </div>
    </footer>
  );
};

export default Footer;
