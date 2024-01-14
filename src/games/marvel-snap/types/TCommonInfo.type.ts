import TLocation from './TLocation.type';

type TCommonInfo = {
  currentRound: number;
  snapTimes: number;
  locations: TLocation[];
};

export default TCommonInfo;
