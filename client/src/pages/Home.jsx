
import HeroSection from "../components/home/HeroSection";
import { styled } from "styled-components";
import NewArrival from "../components/home/NewArrival";
import JustForYou from "../components/home/JustForYou";
function Home() {
  return (
    <Content>
      <HeroSection />
      <NewArrival />
      <JustForYou />
    </Content>
  );
}

const Content = styled.section`

`

export default Home;
