import { createContext } from 'react';
import io, { Socket } from 'socket.io-client';

export const connection: typeof Socket = io(
  // TODO: this should be an environemnt variable
  'https://deepseen-ws.herokuapp.com',
  {
    autoConnect: false,
    reconnection: true,
    reconnectionAttempts: 10,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 10000,
  },
);

export default createContext<typeof Socket>(connection);
