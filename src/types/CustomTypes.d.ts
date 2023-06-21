export interface CustomError {
  status: number;
  msg: string;
}

export interface Park {
  id: string;
  name: string;
  desc: string;
  size: number;
  current_average_rating: number;
  current_review_count: number;
  features: {
    isFree: boolean;
    isWellLit: boolean;
    isFreeParking: boolean;
    isParking: boolean;
    hasAgilityEquipment: boolean;
    isFullyEnclosed: boolean;
    hasDisabledAccess: boolean;
  };
  opening_hours: {
    [key: string]: string;
  };
  address: {
    firstLine: string;
    secondLine: string;
    postCode: string;
    city: string;
  };
  location: {
    long: string;
    lat: string;
  };
  image_url: string;
  website_url: string;
  phone_number: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  type: string;
  isVerified: boolean;
  reviewUpvotes: number;
}

export interface Review {
  id: string;
  park_id: string;
  user_id: string;
  rating: number;
  title: string;
  body: string;
  votes: number;
  username;
}

export interface PatchReviewResponse {
  data: Review;
}

export interface orderObj {
  order: string;
  orderParam: string;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface MapProps {
  center: LatLngExpression;
  markers: {
    position: LatLngTuple;
    content: string;
    parkId: string;
  }[];
  onMarkerClick: (parkId: string) => void;
  selectedParkId: string | null;
  parks: Park[];
  isListView: boolean;
}

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

export interface HomeProps {
  uniqueParks: string[];
  setQueries: Function;
  setCity: Function;
}

export interface ReviewProps {
  reviews: Review[];
  isLoading: boolean;
}

export interface ParksListProps {
  parks: Park[];
  isLoading: boolean;
}

export interface ParksListCardProps {
  park: Park;
  fullWidth: boolean;
}

export interface SingleReviewProps {
  review: Review;
  fullWidth: boolean;
}

export interface ParkRatingProps {
  rating: number;
  reviewCount: number;
}

export interface ShowParksInterface {
  setQueries: Function;
  parks: Park[];
  mapMarkers: any;
  isLoading: boolean;
  city: string;
}

export interface FeaturesDropDownProps {
  setParkFeatures: Function;
}

export interface ParkAddressProps {
  setParkAddress: Function;
}

export interface ParkSizeProps {
  setParkSize: Function;
  parkSize: number | string;
}

export interface OpeningTimesProps {
  setOpeningTimes: Function;
}

export interface ParkFeatures {
  isFree: boolean;
  isWellLit: boolean;
  isFreeParking: boolean;
  isParking: boolean;
  hasAgilityEquipment: boolean;
  isFullyEnclosed: boolean;
  hasDisabledAccess: boolean;
}
export interface UserRequest {
  email: string;
  username: string;
  password: string;
  type: string;
}

export interface ReviewVoteRequest {
  review_id: string;
  increment: number;
}

type VoteValue = 1 | -1 | null;
