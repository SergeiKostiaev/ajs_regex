import Validator from '../app';

test('должна проверять имя пользователя', () => {
  const expected = true;
  const received = Validator.validateUsername('Nastya012_miss-120h');
  expect(received).toBe(expected);
});