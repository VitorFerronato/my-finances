import { Movement } from "../Movement/Movement";

export interface BalanceProps {
  emitMovement: (movement: Movement) => void;
  currentBalance: number;
}
