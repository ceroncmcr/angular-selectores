export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export interface SmallCountry {
  name: string;
  cca3: string;
  borders: string[];
}

export interface Country {
  name:         Name;
  cca3:         string;
  status:       Status;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  subregion:    Subregion;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   string[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface Currencies {
  DJF?: Aoa;
  XOF?: Aoa;
  KMF?: Aoa;
  NAD?: Aoa;
  ZAR?: Aoa;
  XAF?: Aoa;
  GMD?: Aoa;
  TND?: Aoa;
  DZD?: Aoa;
  GNF?: Aoa;
  EUR?: Aoa;
  RWF?: Aoa;
  MAD?: Aoa;
  MUR?: Aoa;
  MRU?: Aoa;
  MWK?: Aoa;
  LRD?: Aoa;
  EGP?: Aoa;
  ZWL?: Aoa;
  LSL?: Aoa;
  TZS?: Aoa;
  CVE?: Aoa;
  SSP?: Aoa;
  GBP?: Aoa;
  SHP?: Aoa;
  ETB?: Aoa;
  ERN?: Aoa;
  SLL?: Aoa;
  MZN?: Aoa;
  LYD?: Aoa;
  BWP?: Aoa;
  CDF?: Aoa;
  NGN?: Aoa;
  ZMW?: Aoa;
  SZL?: Aoa;
  KES?: Aoa;
  STN?: Aoa;
  SOS?: Aoa;
  USD?: Aoa;
  SDG?: Sdg;
  SCR?: Aoa;
  BIF?: Aoa;
  AOA?: Aoa;
  GHS?: Aoa;
  MGA?: Aoa;
  UGX?: Aoa;
}

export interface Aoa {
  name:   string;
  symbol: string;
}

export interface Sdg {
  name: string;
}

export interface Demonyms {
  eng:  EngClass;
  fra?: EngClass;
}

export interface EngClass {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  ara?: Ara;
  fra?: Fra;
  zdj?: string;
  afr?: string;
  deu?: string;
  eng?: EngEnum;
  her?: string;
  hgm?: string;
  kwn?: string;
  loz?: string;
  ndo?: string;
  tsn?: string;
  kon?: string;
  lin?: string;
  kin?: string;
  ber?: string;
  mfe?: string;
  nya?: string;
  bwg?: string;
  kck?: string;
  khi?: string;
  ndc?: string;
  nde?: string;
  sna?: string;
  sot?: string;
  toi?: string;
  tso?: string;
  ven?: string;
  xho?: string;
  zib?: string;
  swa?: string;
  por?: string;
  amh?: string;
  tir?: string;
  sag?: string;
  pov?: string;
  lua?: string;
  mey?: string;
  spa?: string;
  ssw?: string;
  som?: string;
  crs?: string;
  run?: string;
  nbl?: string;
  nso?: string;
  zul?: string;
  mlg?: string;
}

export enum Ara {
  Arabic = "Arabic",
}

export enum EngEnum {
  English = "English",
}

export enum Fra {
  French = "French",
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}

export enum StartOfWeek {
  Monday = "monday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
}

export enum Subregion {
  EasternAfrica = "Eastern Africa",
  MiddleAfrica = "Middle Africa",
  NorthernAfrica = "Northern Africa",
  SouthernAfrica = "Southern Africa",
  WesternAfrica = "Western Africa",
}
