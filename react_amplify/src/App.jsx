import "./assets/scss/App.scss";
import '@aws-amplify/ui-react/styles.css';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { BrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import awsExports from './aws-exports';

Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
