import React, { useEffect, useState, useCallback } from 'react';
import { cellMask } from '../../helpers/inputMasks';
import {
  deleteLocalStorage,
  saveToLocalStorage,
} from '../../helpers/localStorage';
import { getIp } from '../../Services/getIp';
import {
  Button,
  ButtonIP,
  ButtonWrapper,
  FormContainer,
  Input,
  InputContainer,
  InputWrapper,
  Label,
} from './styles';

const Form: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [profession, setProfession] = useState<string>('');
  const [cellphone, setCellphone] = useState<string>('');
  const [myIp, setMyIp] = useState<string>('');

  useEffect(() => {
    const localUserData = localStorage.getItem('user');

    if (localUserData) {
      const localUserObj = JSON.parse(localUserData);
      setName(localUserObj.name);
      setProfession(localUserObj.profession);
      setCellphone(localUserObj.cellphone);
      setMyIp(localUserObj.myIp);
    } else {
      return;
    }
  }, []);

  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    cellMask(e);
  }, []);

  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setName(event.target.value);
  };

  const handleProfessionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setProfession(event.target.value);
  };

  const handleCellphoneChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCellphone(event.target.value);
  };

  return (
    <FormContainer
      onSubmit={(e) => {
        saveToLocalStorage(e, {
          name,
          profession,
          cellphone,
          myIp,
        });
      }}
    >
      <InputWrapper>
        <Label htmlFor="Name">Nome</Label>
        <Input
          type="text"
          required
          value={name}
          onChange={handleNameChange}
          id="Name"
        />
      </InputWrapper>
      <InputContainer>
        <InputWrapper>
          <Label htmlFor="Profession">Profissão</Label>
          <Input
            type="text"
            required
            value={profession}
            onChange={handleProfessionChange}
            id="Profession"
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="Cellphone">Celular</Label>
          <Input
            onKeyUp={handleKeyUp}
            required
            value={cellphone}
            onChange={handleCellphoneChange}
            id="Cellphone"
          />
        </InputWrapper>
      </InputContainer>
      <InputContainer>
        <InputWrapper>
          <Label>Meu ip</Label>
          <Input required readOnly value={myIp} />
        </InputWrapper>
        <ButtonIP
          onClick={(event) => {
            getIp(event, setMyIp);
          }}
        >
          Encontrar IP
        </ButtonIP>
      </InputContainer>
      <ButtonWrapper>
        <Button type="submit">Salvar</Button>
        <Button type="reset" onClick={deleteLocalStorage}>
          Limpar
        </Button>
      </ButtonWrapper>
    </FormContainer>
  );
};

export default Form;
