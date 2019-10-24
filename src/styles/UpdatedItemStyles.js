import styled from 'styled-components';

export const Input = styled.input`
  height: 40px;
  border-radius: 5px;
  background: #edf2f7;
  border: none;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 20px;
  font-size: 14px;
  width: 100%;
`;

export const MainDiv = styled.div`
  background: #fffefe;
  width: 500px;
  margin: auto;
  box-shadow: 0px 1px 3px 0px #aaa;
  height: 425px;
  padding-top: 30px;
  margin-top: 45px;
`;

export const Label = styled.label`
  text-align: left;
  margin-bottom: 5px;
  padding: 5px;
`;

export const Button = styled.button`
  background: #f35667;
  border-radius: 8px;
  border: 2px solid #f35667;
  color: white;
  /* padding: 0.25em 1em; */
  height: 40px;
  width: 160px;
  margin-left: 100px;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: auto;
  padding: 7px;
  margin-bottom: 7px;
`;

export const Section = styled.section`
  /* background: linear-gradient(180deg, #1f43d4 0%, rgba(31, 67, 212, 0.5) 100%);
  height: 100vh; */
  */
`;

export const TitleImage = styled.div`
  display: flex;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 0.4285em;

  p {
    color: #1f43d4;
    margin-bottom: 1px;
  }

  input {
    margin-top: 1px;
  }
`;

export const Desc = styled.div`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 0.4285em;

  p {
    color: #1f43d4;
    margin-bottom: 1px;
    margin-left: 10px;
  }

  input {
    margin-top: 1px;
  }
`;
