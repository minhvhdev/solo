import { ECardStatus } from '@ms/enums';

type TCard = {
  id: string;
  name: string;
  ability: string;
  power: number;
  currentPower: number;
  energy: number;
  currentEnergy: number;
  status: ECardStatus;
};

export default TCard;
