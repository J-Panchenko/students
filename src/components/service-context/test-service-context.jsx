import { createContext } from 'react';

const {
  Provider: TestServiceProvider,
  Consumer: TestServiceConsumer,
} = createContext();

export {
  TestServiceProvider,
  TestServiceConsumer,
};
