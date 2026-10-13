
import BannerSlider from "../components/layout/BannerSlider";
import { categoryBanners } from "../assets/assets";
function Home() {
  return (
    <div>
      <BannerSlider slides={categoryBanners} />
      <section id="discounts" style={{ minHeight: 400, marginTop: 800 }}>
        Discounts section
      </section>
    </div>
  );
}

export default Home;
