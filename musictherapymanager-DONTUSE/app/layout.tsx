import "./globals.css";

import { AppProps } from "next/app";
import { initializeApp } from "firebase/app";

import {
  initializeAuth,
  indexedDBLocalPersistence,
  inMemoryPersistence,
} from "firebase/auth";

import { FirebaseAppProvider, AuthProvider } from "reactfire";

import configuration from "../configuration";
import { isBrowser } from "../lib/generic/isBrowser";

function App(props: AppProps) {
  const { Component, pageProps } = props;

  // we initialize the firebase app
  // using the configuration that we defined above
  const app = initializeApp(configuration.firebase);

  // make sure we're not using IndexedDB when SSR
  // as it is only supported on browser environments
  const persistence = isBrowser()
    ? indexedDBLocalPersistence
    : inMemoryPersistence;

  const auth = initializeAuth(app, { persistence });

  return (
    <FirebaseAppProvider firebaseApp={app}>
      <AuthProvider sdk={auth}>
        <Component {...pageProps} />
      </AuthProvider>
    </FirebaseAppProvider>
  );
}

export default App;
