import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CALLBACK_URL, CLIENT_ID, GITHUB_AUTH_CODE_SERVER } from "../constants/oauth";

const Login = () => {
  const AUTHORIZATION_CODE_URL = `${GITHUB_AUTH_CODE_SERVER}?client_id=${CLIENT_ID}&redirect_url=${CALLBACK_URL}`;

  const fetchAuthCode = () => {
    window.location.assign(AUTHORIZATION_CODE_URL);
  };

  return (
    <LoginPage>
      <Title>로그인이 필요합니다.</Title>
      <GithubLoginBtn onClick={fetchAuthCode}>Login with GitHub OAuth</GithubLoginBtn>
    </LoginPage>
  );
};

const LoginPage = styled.div`
  width: 300px;
  height: 500px;
`;

const Title = styled.div`
  width: 100%;

  text-align: center;
  font-size: 24px;
`;

const GithubLoginBtn = styled.button`
  width: 100%;
  height: 50px;

  border-radius: 10px;

  color: white;
  background-color: hsl(210, 8%, 20%);

  &:hover {
    cursor: pointer;
  }
`;

export default Login;
