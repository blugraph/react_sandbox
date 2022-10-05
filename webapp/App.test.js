import { render, screen } from '@testing-library/react';
import App from './App';
//import { Amplify } from 'aws-amplify'
//import { Auth } from 'aws-amplify'
//import { Authenticator } from '@aws-amplify/ui-react';
//import { Amplify, Auth } from 'aws-amplify';
//import '@aws-amplify/ui-react/styles.css';
//import awsExports from './aws-exports';

//Amplify.configure(awsExports);

var user = { "email": "test@test.com" };

//jest.mock('aws-amplify')

/*
it('calls event handler; "handleSubmit"', async () => {
  Auth.signIn = jest.fn().mockImplementation(
    () => {
      // return whatever you want to test
    });
});
*/

/*
// https://stackoverflow.com/questions/51649891/how-to-mock-aws-library-in-jest
jest.mock('aws-amplify', () => {
  const originalModule = jest.requireActual('aws-amplify');
  // Works and lets you check for constructor calls:
  return {
    ...originalModule,
    Auth: jest.fn().mockImplementation(() => {
      return {
        signIn:
          //() => {}
          (email, pass) =>
            new Promise((resolve, reject) => {
              const userExists = user[email];

              if (userExists && pass === '12345678') {
                const signedUser = {
                  username: 'abcdfg123',
                  attributes: { email, name: 'John Rambo', phone: '+460777777777' },
                  signInUserSession: {
                    accessToken: { jwtToken: '123456' },
                  },
                };
                return resolve(signedUser);
              }

              if (userExists) {
                return reject({
                  code: 'NotAuthorizedException',
                  name: 'NotAuthorizedException',
                  message: 'Incorrect username or password.',
                });
              }

              return reject({
                code: 'UserNotFoundException',
                name: 'UserNotFoundException',
                message: 'User does not exist.',
              });
            }),
      };
    }),
    currentAuthenticatedUser:
      () =>
        new Promise((resolve, reject) => {
          const currentUser = {
            username: 'abc123',
            email: 'demo@test.com',
            accessToken: '123cvb123',
            name: 'John Rambo',
            phone: '+46761022312',
            phoneVerified: false,
            attributes: {
              sub: 'abc123',
            },
          };

          return resolve(currentUser);
        })

  };
});
*/

/*
jest.mock('aws-amplify', () => {
  const originalModule = jest.requireActual('aws-amplify');
  https://github.com/facebook/jest/blob/main/examples/module-mock/__tests__/partial_mock.js
  //const mockedModule = jest.createMockFromModule('../fruit');
  //Mock the default export and named export 'foo'
  return {
    //__esModule: true,
    ...originalModule,
    //default: jest.fn(() => 'mocked baz'),
    signIn: jest.fn().mockImplementation(
      (email, pass) =>
        new Promise((resolve, reject) => {
          const userExists = user[email];

          if (userExists && pass === '12345678') {
            const signedUser = {
              username: 'abcdfg123',
              attributes: { email, name: 'John Rambo', phone: '+460777777777' },
              signInUserSession: {
                accessToken: { jwtToken: '123456' },
              },
            };
            return resolve(signedUser);
          }

          if (userExists) {
            return reject({
              code: 'NotAuthorizedException',
              name: 'NotAuthorizedException',
              message: 'Incorrect username or password.',
            });
          }

          return reject({
            code: 'UserNotFoundException',
            name: 'UserNotFoundException',
            message: 'User does not exist.',
          });
        }),
    ),
    currentAuthenticatedUser: jest.fn().mockImplementation(
      () =>
        new Promise((resolve, reject) => {
          const currentUser = {
            username: 'abc123',
            email: 'demo@test.com',
            accessToken: '123cvb123',
            name: 'John Rambo',
            phone: '+46761022312',
            phoneVerified: false,
            attributes: {
              sub: 'abc123',
            },
          };

          return resolve(currentUser);
        }),
    )

  };
});

it('does something', () => {
  //Amplify.Auth.signIn.mockRejectedValue('mock error')
  //Amplify.Auth.currentAuthenticatedUser.mockResolvedValue('mock user')
  Auth.signIn = jest.fn().mockImplementation(
    () => {
      // return whatever you want to test
    });

  // Fill in username, password and submit.
  // Check for home page.
})

it('SIGNUP: Completed form fields enable button', async () => {
  ...
  wrapper
      .find('#submitButton')
      .at(0)
      .simulate('click');
})
*/

test('renders learn react link', () => {
  render(<App />);
  //window.URL.createObjectURL = jest.fn();
  //Amplify.Auth.signIn.mockRejectedValue('mock error')
  //Amplify.Auth.currentAuthenticatedUser.mockResolvedValue('mock user')
  //const linkElement = screen.getByText(/learn react/i);
  const linkElement = screen.getByText(/reload/i);
  expect(linkElement).toBeInTheDocument();
});
