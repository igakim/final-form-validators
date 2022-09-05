<h3 align="center">Final Form Validators</h3>

  <p align="center">
    A set of functions intended for the final-form library 
  </p>

## Getting Started

### Installation

  ```sh
  npm install final-form-validators
  ```


### Usage

In examples below, we use react-final-form:

```js
import { Form, Field } from 'react-final-form';
import { required } from 'final-form-validators';

const App = () => {
  const handleSubmit = (values) => {
    
  };
  
  const validate = (values) => {
    return {
      username: required('This Field is required!')(values.username),
      password: required('This Field is required!')(values.password),
    }
  };
  
  return (
    <Form onSubmit={handleSubmit} validate={validate}>
      {({ handleSubmit: submit }) => (
        <form onSubmit={submit}>
          <Field name="username" component="input" type="text" />
          <Field name="password" component="input" type="password" />
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  )
};

```

More fun to combine multiple validations

```js
import { Form, Field } from 'react-final-form';
import { required } from 'final-form-validators/validators';
import { composeValidators, validateIf } from 'final-form-validators/helpers';

const App = () => {
  const [someState, setSomeState] = useState(false);
  const handleSubmit = (values) => {
    
  };
  
  const validate = (values) => {
    return {
      username: composeValidators(
        validateIf(someState)(required('This Field is required')),
      )(values.username),
      password: required('This Field is required!')(values.password),
    }
  };
  
  return (
    <Form onSubmit={handleSubmit} validate={validate}>
      {({ handleSubmit: submit }) => (
        <form onSubmit={submit}>
          <Field name="username" component="input" type="text" />
          <Field name="password" component="input" type="password" />
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  )
};

```
