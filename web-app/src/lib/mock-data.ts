export type TransportType = "Jeepney" | "Modern Jeepney" | "Bus" | "Tricycle";

export type Stop = {
  id: string;
  name: string;
  lat: number;
  lng: number;
};

export type Route = {
  id: string;
  code: string;
  name: string;
  type: TransportType;
  origin: string;
  destination: string;
  minFare: number;
  regularFare: number;
  updatedAt: string;
  confidence: "High" | "Medium" | "Low";
  stops: Stop[];
  color: string;
};

export type Terminal = {
  id: string;
  name: string;
  city: string;
  routes: number;
  lat: number;
  lng: number;
};

export type Report = {
  id: string;
  routeCode: string;
  routeName: string;
  type: "Fare Update" | "Route Update" | "New Route";
  description: string;
  status: "Pending" | "Approved" | "Rejected";
  submittedBy: string;
  submittedAt: string;
};

export const routes: Route[] = [
  {
    id: "r1",
    code: "SF-01",
    name: "San Fernando — Angeles",
    type: "Modern Jeepney",
    origin: "San Fernando Terminal",
    destination: "Marquee Mall, Angeles",
    minFare: 15,
    regularFare: 35,
    updatedAt: "2026-05-28",
    confidence: "High",
    color: "oklch(0.5 0.12 175)",
    stops: [
      { id: "s1", name: "San Fernando Terminal", lat: 15.034, lng: 120.689 },
      { id: "s2", name: "Robinsons Starmills", lat: 15.024, lng: 120.683 },
      { id: "s3", name: "SM Pampanga", lat: 15.043, lng: 120.69 },
      { id: "s4", name: "Dau Exit", lat: 15.156, lng: 120.605 },
      { id: "s5", name: "Marquee Mall", lat: 15.155, lng: 120.604 },
    ],
  },
  {
    id: "r2",
    code: "AN-12",
    name: "Angeles — Clark Loop",
    type: "Jeepney",
    origin: "Angeles City Hall",
    destination: "Clark Freeport",
    minFare: 13,
    regularFare: 25,
    updatedAt: "2026-06-02",
    confidence: "High",
    color: "oklch(0.75 0.16 95)",
    stops: [
      { id: "s6", name: "Angeles City Hall", lat: 15.149, lng: 120.587 },
      { id: "s7", name: "Nepo Mall", lat: 15.143, lng: 120.591 },
      { id: "s8", name: "Friendship Gate", lat: 15.171, lng: 120.555 },
      { id: "s9", name: "Clark Main Gate", lat: 15.181, lng: 120.545 },
    ],
  },
  {
    id: "r3",
    code: "MB-07",
    name: "Mabalacat — Magalang",
    type: "Bus",
    origin: "Mabalacat Terminal",
    destination: "Magalang Public Market",
    minFare: 18,
    regularFare: 42,
    updatedAt: "2026-04-14",
    confidence: "Medium",
    color: "oklch(0.55 0.15 240)",
    stops: [
      { id: "s10", name: "Mabalacat Terminal", lat: 15.221, lng: 120.572 },
      { id: "s11", name: "Dolores Junction", lat: 15.201, lng: 120.595 },
      { id: "s12", name: "Magalang Plaza", lat: 15.225, lng: 120.66 },
      { id: "s13", name: "Magalang Public Market", lat: 15.227, lng: 120.662 },
    ],
  },
  {
    id: "r4",
    code: "TR-22",
    name: "San Fernando — Bacolor",
    type: "Tricycle",
    origin: "Sindalan",
    destination: "Bacolor Church",
    minFare: 12,
    regularFare: 20,
    updatedAt: "2026-06-09",
    confidence: "High",
    color: "oklch(0.65 0.2 25)",
    stops: [
      { id: "s14", name: "Sindalan Terminal", lat: 15.013, lng: 120.682 },
      { id: "s15", name: "Cabambangan", lat: 15.0, lng: 120.658 },
      { id: "s16", name: "Bacolor Church", lat: 14.998, lng: 120.652 },
    ],
  },
  {
    id: "r5",
    code: "AP-09",
    name: "Apalit — San Fernando",
    type: "Modern Jeepney",
    origin: "Apalit Public Market",
    destination: "San Fernando Terminal",
    minFare: 15,
    regularFare: 45,
    updatedAt: "2026-05-30",
    confidence: "Medium",
    color: "oklch(0.7 0.15 145)",
    stops: [
      { id: "s17", name: "Apalit Public Market", lat: 14.949, lng: 120.766 },
      { id: "s18", name: "Minalin Junction", lat: 14.977, lng: 120.685 },
      { id: "s19", name: "Sto. Tomas", lat: 15.005, lng: 120.7 },
      { id: "s20", name: "San Fernando Terminal", lat: 15.034, lng: 120.689 },
    ],
  },
];

export const terminals: Terminal[] = [
  { id: "t1", name: "San Fernando Central Terminal", city: "San Fernando", routes: 12, lat: 15.034, lng: 120.689 },
  { id: "t2", name: "Angeles City Terminal", city: "Angeles", routes: 9, lat: 15.149, lng: 120.587 },
  { id: "t3", name: "Mabalacat Terminal", city: "Mabalacat", routes: 7, lat: 15.221, lng: 120.572 },
  { id: "t4", name: "Apalit Public Market Terminal", city: "Apalit", routes: 5, lat: 14.949, lng: 120.766 },
  { id: "t5", name: "Guagua Terminal", city: "Guagua", routes: 6, lat: 14.969, lng: 120.633 },
  { id: "t6", name: "Sindalan Tricycle Terminal", city: "San Fernando", routes: 3, lat: 15.013, lng: 120.682 },
];

export const reports: Report[] = [
  {
    id: "rep1",
    routeCode: "SF-01",
    routeName: "San Fernando — Angeles",
    type: "Fare Update",
    description: "Driver charged ₱40 instead of ₱35 from terminal to Marquee.",
    status: "Pending",
    submittedBy: "ana.cruz@example.com",
    submittedAt: "2026-06-13",
  },
  {
    id: "rep2",
    routeCode: "AN-12",
    routeName: "Angeles — Clark Loop",
    type: "Route Update",
    description: "New stop added near Nepo Mall back entrance.",
    status: "Approved",
    submittedBy: "miguel.santos@example.com",
    submittedAt: "2026-06-10",
  },
  {
    id: "rep3",
    routeCode: "MB-07",
    routeName: "Mabalacat — Magalang",
    type: "Fare Update",
    description: "Fare increased to ₱45 regular as of last week.",
    status: "Rejected",
    submittedBy: "jen.dizon@example.com",
    submittedAt: "2026-06-05",
  },
  {
    id: "rep4",
    routeCode: "—",
    routeName: "Lubao — San Fernando proposal",
    type: "New Route",
    description: "Suggesting a new modern jeepney route via NLEX service road.",
    status: "Pending",
    submittedBy: "ana.cruz@example.com",
    submittedAt: "2026-06-12",
  },
];

export const transportTypes: TransportType[] = ["Jeepney", "Modern Jeepney", "Bus", "Tricycle"];
