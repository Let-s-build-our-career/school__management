import MarqueeText from "../../components/Home/MarqueeText";
import Notice from "../../components/Home/Notice";
import PrincipalSaying from "../../components/Home/PrincipalSaying";
import Slogan from "../../components/Home/Slogan";

const Home = () => {
  return (
    <div>
      <h1>Above section</h1>
      <MarqueeText />
      <Slogan />
      <div className="flex flex-col md:flex-row gap-4 lg:gap-10 ">
        <Notice />
        <PrincipalSaying />
      </div>
    </div>
  );
};

export default Home;
