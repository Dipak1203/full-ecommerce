
import HeroSection from "../components/home/HeroSection";
import { styled } from "styled-components";
import NewArrival from "../components/home/NewArrival";
import JustForYou from "../components/home/JustForYou";
import Missout from "../components/home/Missout";
import ChatbotComponent from "../components/home/ChatBotComponent";
function Home() {
  return (
    <Content>
    <ChatbotComponent />
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
