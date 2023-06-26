
import HeroSection from "../components/home/HeroSection";
import { styled } from "styled-components";
import NewArrival from "../components/home/NewArrival";
import JustForYou from "../components/home/JustForYou";
import Missout from "../components/home/Missout";
function Home() {
  return (
    <Content>
      <HeroSection />
      <NewArrival />
      <JustForYou />
      <Missout />
    </Content>
  );
}

const Content = styled.section`

`

export default Home;
