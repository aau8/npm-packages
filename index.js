import { number, object, string } from 'yup';

const userSchema = object({
  name: string().required(),
  age: number().required(),
  address: string(),
});

const data = {
  name: 'Artyom',
  age: [{}, '23', 32, {}],
  address: 'Sochi',
};

try {
  const user = await userSchema.validate(data);

  console.log(user);
} catch (e) {
  throw e;
}
