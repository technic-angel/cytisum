"use client"

import Navbar from './components/navBar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import ThreadGallery from './components/thread/threadGallery';
import { Provider } from 'react-redux';
import store from './store';
import ThreadContainer from './components/thread/threadContainer';

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-start">
        <CssBaseline>
          <Container disableGutters={true} maxWidth={false}>
            <Navbar />
          </Container>
        </CssBaseline>
        <Container sx={{height: "1200px"}}>
          <ThreadGallery />
        </Container>
        <ThreadContainer />
      </main>
    </Provider>
  )
}
