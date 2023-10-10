import { useEffect, useState } from 'react';

import Peer, { DataConnection } from 'peerjs';
import { Button } from '@mui/material';

export default function Home() {
  const [peer, setPeer] = useState<Peer>();
  const [conn, setConn] = useState<DataConnection>();
  const [gameId, setGameId] = useState('');
  const [move, setMove] = useState('');
  const [opponentMove, setOpponentMove] = useState('');

  // Create a new game
  const createGame = () => {
    import('peerjs').then(({ default: Peer }) => {
      console.log('Create a new gameId:', gameId);

      setPeer(new Peer(gameId));
    });
  };

  // Join a game
  const joinGame = () => {
    if (!peer) return;
    const conn = peer.connect(gameId);
    console.log('Join a gameId:', gameId);
    setConn(conn);
  };

  // Send a move
  const sendMove = () => {
    conn && conn.send(move);
    setMove('');
  };

  // Receive a move
  useEffect(() => {
    if (!peer) return;
    const handler = (conn: DataConnection) => {
      setConn(conn);
    };
    peer.on('connection', handler);
    return () => {
      peer.off('connection', handler);
    };
  }, [conn, peer]);

  // Receive a move
  useEffect(() => {
    if (!(conn && peer)) return;

    const dataHandler = (move: unknown) => {
      setOpponentMove(move as string);
    };
    const closeHandler = () => {
      setConn(undefined);
    };
    conn.on('data', dataHandler);
    conn.on('close', closeHandler);

    return () => {
      conn && conn.off('data', dataHandler);
      conn && conn.off('close', closeHandler);
    };
  }, [conn, peer]);

  //close connection
  const disconnect = () => {
    conn && conn.close();
    setConn(undefined);
  };

  useEffect(() => {
    import('peerjs').then(({ default: Peer }) => {
      const peer = new Peer();
      setPeer(peer);
    });
  }, [conn]);

  return (
    <div>
      <Button onClick={createGame}>Create Game</Button>
      <input
        value={gameId}
        onChange={(e) => setGameId(e.target.value)}
        placeholder="Game ID"
      />
      <Button onClick={joinGame}>Join Game</Button>
      <input
        value={move}
        onChange={(e) => setMove(e.target.value)}
        placeholder="Move"
      />
      <button onClick={sendMove}>Send Move</button>
      <div>The opponent give:{opponentMove}</div>
      <button onClick={disconnect}>disconnect</button>
    </div>
  );
}
