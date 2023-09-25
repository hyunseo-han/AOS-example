import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Container = styled.div`
  width: 390px;
  height: 2040px;
  margin: auto;
  display: flex;
  background: #050023;
`;

const Somsom = styled.div`
  position: relative;
  display: flex;
  width: 65px;
  height: 81px;
  top: 130px;
  right: 120px;
`;

const Planet = styled.div`
  position: relative;
  display: flex;
  width: 340px;
  height: 303px;
  top: 100px;
  left: 100px;
`;

const Rocket = styled.div`
  position: relative;
  display: flex;
  width: 53.908px;
  height: 92.243px;
  top: 1000px;
  right: 200px;
`;

function Main() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 애니메이션 지속 시간 (1초)
    });
  }, []);

  return (
    <Container>
      <Planet data-aos="fade-left">
        <img src="/images/행성.png" />
      </Planet>

      <Somsom data-aos="zoom-in-up">
        <img src="/images/솜솜.png" />
      </Somsom>

      <Rocket data-aos="fade-up-left">
        <img src="/images/우주선.png" />
      </Rocket>
    </Container>
  );
}

export default Main;
