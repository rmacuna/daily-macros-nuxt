export interface SelectOptions {
  label: string;
  value: string;
}


export interface BodySetting {
  name: string;
  label: string;
  value: string | number;
  description?: string;
  placeholder?: string;
  options?: SelectOptions[]
}

export type Gender = "male" | "female";
export interface Person {
  height: number;
  age: number;
  gender: Gender;
  weight: number;
  activityLevels: string;
  neckCm?: number;
  waistCm?: number;
  hipCm?: number;
  trainingGoals: string;
}

export interface DialogType {
  isOpen: boolean;
  onClose(): void;
}