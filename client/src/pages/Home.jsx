
import HeroSection from "../components/home/HeroSection";
import { styled } from "styled-components";
import NewArrival from "../components/home/NewArrival";
function Home() {
  return (
    <Content>
      <HeroSection />
      <NewArrival />
    </Content>
  );
}

const Content = styled.section`

`

export default Home;
