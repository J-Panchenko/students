import React from 'react';
import { TestServiceConsumer } from '../components/service-context';

function withService(Wrapped) {
  return function withProps({ ...props }) {
    return (
      <TestServiceConsumer>
        {
          (testService) => (
            <Wrapped {...props} service={testService} />
          )
        }
      </TestServiceConsumer>
    );
  };
}

export default withService;
