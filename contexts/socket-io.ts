import { createContext } from 'react';
import io, { Socket } from 'socket.io-client';

import { WEBSOCKETS_URL } from '../configuration';

export const connection: typeof Socket = io(
  WEBSOCKETS_URL,
  {
    autoConnect: false,
    reconnection: true,
    reconnectionAttempts: 10,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 10000,
  },
);

export default createContext<typeof Socket>(connection);
