// import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 390px;
  background-color: #f4f4f8;
  display: flex;
  padding: 0 32px;
  flex-direction: column;
`;
const Title = styled.h1`
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
  color: #1e1e1e;
  margin-top: 91px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  color: rgba(30, 30, 30, 0.7);
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: 672px;
  height: 60px;
  border: 1px solid #4ba90a;
  border-radius: 10px;
  margin-right: 10px;
  padding-left: 20px;
`;

const Button = styled.button`
  width: 176px;
  height: 60px;
  background: #4ba90a;
  border-radius: 10px;
  color: white;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #fffefe;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Got Something to ask?</Title>
      <Desc>Send us an Email</Desc>
      <InputContainer>
        <Input placeholder="yourname@email.com" />
        <Button>Send</Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
