interface userData {
  name: string;
  profession: string;
  cellphone: string;
  myIp: string;
}

const deleteLocalStorage = (): void => {
  localStorage.removeItem('user');
  window.location.reload();
};

const saveToLocalStorage = (
  event: React.FormEvent<HTMLFormElement>,
  data: userData
): void => {
  event.preventDefault();
  localStorage.setItem('user', JSON.stringify(data));
};

export { deleteLocalStorage, saveToLocalStorage };
