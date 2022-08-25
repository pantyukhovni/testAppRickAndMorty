const getGenderStatus = (status: string | undefined) =>
  status === 'Male' ? 'Мужчина' : 'Женщина';

export { getGenderStatus };
