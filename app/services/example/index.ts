import { getSomeData } from './example';

class Example {
  // методы для работы с api
  getSomeData = () => getSomeData();
}

const exampleServices = new Example();

export { exampleServices };
