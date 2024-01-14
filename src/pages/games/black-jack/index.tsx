import { useRouter } from 'next/router';

type IndexPageProps = {};

const BASE_URL = '/games/black-jack';

const IndexPage = (props: IndexPageProps) => {
  const router = useRouter();

  const handleSinglePlay = () => {
    router.push(`${BASE_URL}/single-play`);
  };

  const handleCreateRoom = () => {
    router.push('/black-jack/single-play');
  };

  const handleJoinRoom = () => {
    router.push('/black-jack/single-play');
  };

  return (
    <div className="flex flex-col">
      <button onClick={handleSinglePlay} tabIndex={0}>
        Single Play
      </button>
      <button onClick={handleCreateRoom}>Create Room</button>
      <button onClick={handleJoinRoom}>Join Room</button>
    </div>
  );
};

export default IndexPage;
