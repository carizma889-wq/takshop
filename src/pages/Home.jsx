import BannerSlider from "../components/layout/BannerSlider";
import OurProduct from "../components/OurProduct";
import { categoryBanners } from "../assets/assets";

function Home() {
  return (
    <div className="HomePage">
      <BannerSlider slides={categoryBanners} />
      <OurProduct source="categories" title="Our product categories" />
      <section id="discounts" style={{ minHeight: 400, marginTop: 800 }}>
        Discounts section
      </section>
    </div>
  );
}

export default Home;
