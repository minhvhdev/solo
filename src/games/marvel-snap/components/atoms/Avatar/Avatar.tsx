import styles from './Avatar.css';

type AvatarProps = {
  imgUrl: string;
  playerName: string;
};

const Avatar = (props: AvatarProps) => {
  const { imgUrl, playerName } = props;
  return <div className={styles.avatar}>useState</div>;
};

export default Avatar;
