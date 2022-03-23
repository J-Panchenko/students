import React from 'react';
import { TestServiceConsumer } from '../service-context';

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
