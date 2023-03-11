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
  activityLevel: "sedentary" | "light" | "moderate" | "active" | "very active";
}

export interface DialogType {
  isOpen: boolean;
  onClose(): void;
}