import { styled } from "styled-components";
import CarouselComponent from "../components/home/CarouselComponent";
function Home() {
  return (
    <Content>
      <div>
       <CarouselComponent />
      </div>
    </Content>
  );
}

const Content = styled.section`
  img {
    width: 100% !important;
    height: 500px!important;
  }
`;
export default Home;
