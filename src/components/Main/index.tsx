import React from 'react';
import Form from '../Form';
import { MainBox, MainContainer } from './styles';

const Main: React.FC = () => {
  return (
    <MainContainer>
      <MainBox>
        <Form />
      </MainBox>
    </MainContainer>
  );
};

export default Main;
