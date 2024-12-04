const awsExports = {
  Auth: {
    Cognito: {
      userPoolId: process.env.REACT_APP_USERPOOLID,
      userPoolClientId: process.env.REACT_APP_USERPOOLWEBCLIENTID,
      identityPoolId: process.env.REACT_APP_IDENTITYPOOLID,
      loginWith: {
        // OPTIONAL - Hosted UI configuration
        oauth: {
          domain: process.env.REACT_APP_OAUTH_DOMAIN,
          scopes: [
            'email',
            'profile',
            'openid',
            'aws.cognito.signin.user.admin'
          ],
          redirectSignIn: [process.env.REACT_APP_REDIRECT_SIGNIN],
          redirectSignOut: [process.env.REACT_APP_REDIRECT_SIGNOUT],
          responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
        } //oauth
      } //login
    } // cognito
  }
};

export default awsExports;
