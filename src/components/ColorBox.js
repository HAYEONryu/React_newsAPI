import React, { useContext } from 'react';
import UserContext from '../contexts/userprovider';
import styled from 'styled-components';

const ColorBoxDeco = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  font-size: 1.125rem;
  text-decoration: none;
  color: red;
`;

const ColorBox = () => {
  const { state } = useContext(UserContext);
  return (
    <ColorBoxDeco>
      닉네임( {state.nickname} )님 안녕하세요.
      <br/>
      나이: {state.age}
    </ColorBoxDeco>
  );
};

export default ColorBox;