const cellMask = (
  e: React.FormEvent<HTMLInputElement>
): React.FormEvent<HTMLInputElement> => {
  e.currentTarget.maxLength = 15;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{7})(\d)/, '$1-$2');
  value = value.replace(/^(\d{2})(\d)/, '$1) $2');
  value = value.replace(/^/, '(');
  e.currentTarget.value = value;
  return e;
};

export { cellMask };
