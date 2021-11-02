export interface Post {
  problem: Filters.FIRE | Filters.FLOOD | Filters.POWER | Filters.MEDICAL;
  priority: Filters.LOW | Filters.MEDIUM | Filters.HIGH | Filters.CRITICAL;
  name: string;
  photo: string;
  content: string;
}

export enum Filters {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
  CRITICAL = "Critical",
  FIRE = "Fire",
  FLOOD = "Flood",
  POWER = "Power",
  MEDICAL = "Medical",
}

