const awsExports = {
    "Auth": {
        "identityPoolId": import.meta.env.VITE_IDENTITYPOOLID  , //'YOUR-IDENTITY-POOL-ID',
        "region": import.meta.env.VITE_REGION, //'YOUR-REGION',
        "userPoolId": import.meta.env.VITE_USERPOOLID,
        "userPoolWebClientId":import.meta.env.VITE_USERPOOLWEBCLIENTID,
        oauth: {
            domain: import.meta.env.VITE_OAUTH_DOMAIN,
            scope: ["email", "openid", "aws.cognito.signin.user.admin", "profile"],
            redirectSignIn: import.meta.env.VITE_REDIRECT_SIGNIN,
            redirectSignOut: import.meta.env.VITE_REDIRECT_SIGNOUT,
            responseType: "code"
          }
    },
};

export default awsExports;