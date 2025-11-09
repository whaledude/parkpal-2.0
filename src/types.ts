

export enum LocationType {
  THEME_PARK = 'theme',
  WATER_PARK = 'water',
  OTHER = 'other',
}

export enum Resort {
  WDW = 'Walt Disney World',
  DL = 'Disneyland',
}

export enum Park {
  MK = 'Magic Kingdom',
  EP = 'Epcot',
  HS = 'Hollywood Studios',
  AK = 'Animal Kingdom',
  DLP = 'Disneyland Park',
  DCA = 'Disney California Adventure',
  BB = 'Blizzard Beach',
  TL = 'Typhoon Lagoon',
  DS = 'Disney Springs',
  RD = 'Resort Day',
}

export enum PlannerMode {
  AUTO = 'Auto',
  MANUAL = 'Manual',
}

export enum Interest {
  THRILL = 'Thrill Rides',
  SHOWS = 'Shows & Parades',
  CHARACTERS = 'Characters',
  DINING = 'Dining',
  WATER = 'Water Rides',
  KIDS = 'Kid-Friendly',
  FAMILY = 'Family',
  SHOPPING = 'Shopping',
  RELAXING = 'Relaxing',
}

export interface ParkData {
  name: string;
  resort: Resort;
  type: LocationType;
  color: string;
  gradientClasses: string;
}

export interface AttractionInfo {
  leadImagineers?: string[];
  yearOpened?: number | string;
  precededBy?: string;
  themingInspiration?: string;
}

export interface TriviaQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface Activity {
  id: string;
  time: string;
  name: string;
  description: string;
  location: string;
  type: 'attraction' | 'dining' | 'show' | 'break' | 'reservation' | 'transition';
  completed: boolean;
  media: string[]; // array of data URLs for photos/videos
  park?: Park;
  waitTime?: number;
  facts?: AttractionInfo;
  trivia?: TriviaQuestion[];
  duration?: number;
}

export interface DailyPlan {
  date: string;
  title?: string;
  parks: Park[];
  arrivalTimes: { [park: string]: string };
  reservations: Activity[];
  priorities: string[]; // names of highlighted attractions
  mustDo: string[]; // names of absolute must-do attractions (starred)
  itinerary: Activity[];
}

export interface Trip {
  id: string;
  userId?: string;
  name: string;
  resort: Resort;
  startDate: string;
  endDate: string;
  mode: PlannerMode;
  parks: Park[]; // For Auto Mode
  interests: Interest[]; // For Auto Mode
  thrillLevel: number; // For Auto Mode
  walkingSpeed: number; // For Auto Mode
  dailyPlans: DailyPlan[]; // For Manual Mode
  unlockedDays: string[]; // array of dates (YYYY-MM-DD)
  isLightningLaneUnlocked: boolean;
  isGuest?: boolean;
}

export enum View {
  LAUNCH,
  LOGIN,
  SIGNUP,
  PLANNER,
  MY_TRIPS,
  PARK_PAL_LIVE,
  PAYWALL,
  UPGRADE,
  GALLERY,
  MY_ACCOUNT,
  EULA,
  PRIVACY_POLICY,
  DISCLAIMER,
  ITINERARY,
  MY_DISNEY_EXPERIENCE_FRIEND,
  PARK_PAL_LIVE_LOADING,
}

export type PurchaseOption = 'daily' | 'trip' | 'annual';

export interface PurchaseDetails {
  tripId: string;
  option: PurchaseOption;
  selectedDays: string[];
}

export interface User {
  id: string;
  email: string;
}

export interface Recommendation {
  name: string;
  waitTime?: number;
  location: string;
}

export interface RecommendationResponse {
  recommendation: Recommendation;
  reasoning: string;
}

export interface Restroom {
  name: string;
  location: string;
}

export interface BreakSpot {
  name: string;
  location: string;
  description: string;
}

export interface SnackLocation {
  name: string;
  location: string;
  description: string;
  menuUrl: string;
}