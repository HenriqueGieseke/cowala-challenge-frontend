import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 37rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: 500;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  height: 2.75rem;
  padding: 11px 14px;
  filter: opacity(0.65);
  transition: 0.2s;
  font-size: 1rem;

  &:hover {
    filter: opacity(0.8);
  }

  &:focus {
    filter: opacity(1);
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Button = styled.button`
  height: min-content;
  border: none;
  outline: none;
  padding: 12px 37px;
  background: #0a1633;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 18px;
  border-radius: 5px;
  transition: 0.2s;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const ButtonIP = styled.button`
  height: 2.75rem;
  width: 50%;
  border: none;
  outline: none;
  padding: 12px 37px;
  background: #00d9d0;
  color: #0a1633;
  text-transform: uppercase;
  font-size: 18px;
  align-self: flex-end;
  border-radius: 5px;
  transition: 0.2s;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: translateY(1px);
  }
`;
