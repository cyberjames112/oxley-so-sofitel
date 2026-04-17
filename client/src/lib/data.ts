// ===================================================================
// Oxley Tower — SO/ Sofitel Kuala Lumpur — Data Constants
// Design: Oriental Luxury (東方奢華)
// Colors: Deep Navy Blue #1a2a3a, Gold #c9a96e, Ivory #f5f0e8
// ===================================================================

// BASE_URL is "/" in dev, "/oxley-so-sofitel/" on GitHub Pages (see vite.config.ts).
// Prefixing so that public/images/* resolves under the Pages sub-path.
const B = import.meta.env.BASE_URL;

export const IMAGES = {
  // Hero / skyline
  hero: `${B}images/hero.jpg`,
  facade1: `${B}images/hero.jpg`,
  facade4: `${B}images/hero.jpg`,
  city_view: `${B}images/city_view.jpg`,

  // Lifestyle / amenities
  so_rooftop: `${B}images/so_rooftop.jpg`,
  interior: `${B}images/interior.jpg`,
  lobby: `${B}images/lobby.jpg`,
  marketing: `${B}images/marketing.jpg`,

  // Amenities grid reuses
  gym: `${B}images/so_rooftop.jpg`,
  pool_view1: `${B}images/so_rooftop.jpg`,
  pool_view2: `${B}images/city_view.jpg`,
  playground: `${B}images/marketing.jpg`,
  bbq: `${B}images/marketing.jpg`,
  pavilion: `${B}images/marketing.jpg`,
  lift_lobby: `${B}images/lobby.jpg`,

  // Construction / location
  real_photo1: `${B}images/advantages_page.jpg`,
  real_photo2: `${B}images/city_view.jpg`,
  real_photo3: `${B}images/storey_overview.jpg`,

  // Floor plans + map
  page_006: `${B}images/storey_plan.jpg`,
  page_007: `${B}images/fp_a2.jpg`,
  page_008: `${B}images/fp_c1.jpg`,
  page_009: `${B}images/fp_d1.jpg`,
  page_010: `${B}images/fp_d3.jpg`,
  page_011: `${B}images/map.jpg`,
} as const;

export const STOREY_PLAN = IMAGES.page_006;

// ─── Unit type specifications ──────────────────────────────────────
export const UNIT_TYPES = [
  {
    id: "A1",
    name: "TYPE A1",
    sqft: 578,
    ping: 16.2,
    layout: "Studio 套房",
    totalUnits: null as number | null,
    floorPlanImage: IMAGES.page_007,
  },
  {
    id: "A2",
    name: "TYPE A2",
    sqft: 566,
    ping: 15.9,
    layout: "Studio 套房",
    totalUnits: null,
    floorPlanImage: IMAGES.page_007,
  },
  {
    id: "C1",
    name: "TYPE C1",
    sqft: 711,
    ping: 19.9,
    layout: "1+1 房",
    totalUnits: null,
    floorPlanImage: IMAGES.page_008,
  },
  {
    id: "C2A",
    name: "TYPE C2A",
    sqft: 815,
    ping: 22.9,
    layout: "1+1 房",
    totalUnits: null,
    floorPlanImage: IMAGES.page_008,
  },
  {
    id: "D1",
    name: "TYPE D1",
    sqft: 903,
    ping: 25.3,
    layout: "2 房",
    totalUnits: null,
    floorPlanImage: IMAGES.page_009,
  },
  {
    id: "D2",
    name: "TYPE D2",
    sqft: 956,
    ping: 26.8,
    layout: "2 房",
    totalUnits: null,
    floorPlanImage: IMAGES.page_009,
  },
  {
    id: "D3",
    name: "TYPE D3",
    sqft: 956,
    ping: 26.8,
    layout: "雙鑰匙 2 房",
    totalUnits: null,
    floorPlanImage: IMAGES.page_010,
  },
  {
    id: "D4A",
    name: "TYPE D4A",
    sqft: 995,
    ping: 27.9,
    layout: "2 房",
    totalUnits: null,
    floorPlanImage: IMAGES.page_009,
  },
  {
    id: "D5A",
    name: "TYPE D5A",
    sqft: 894,
    ping: 25.1,
    layout: "2 房",
    totalUnits: null,
    floorPlanImage: IMAGES.page_009,
  },
];

// ─── Promoted units on /last-units ─────────────────────────────────
export interface PromotedUnit {
  id: string;
  unitNumber: string;
  floor: string;
  floorNumber: number;
  type: string;
  sqft: number;
  ping: number;
  layout: string;
  listPrice: number;
  spaPrice: number;
  discount: string;
  netPrice: number;
  unitPrice: number;    // 萬台幣/坪
  facing: string;
  view: string;
  parking: string;
  managementFee: string;
  floorPlanImage: string;
}

export const MYR_TO_TWD = 8;
const MGMT_RATE = 1.12;

function mgmtFee(sqft: number) {
  return `RM ${(sqft * MGMT_RATE).toFixed(0)}/月`;
}

export const PROMOTED_UNITS: PromotedUnit[] = [
  {
    id: "A-63A-09",
    unitNumber: "A-63A-09",
    floor: "63A 樓",
    floorNumber: 63,
    type: "A2",
    sqft: 566,
    ping: 15.9,
    layout: "Studio ／ 精裝修 + 1 車位",
    listPrice: 1752000,
    spaPrice: 1752000,
    discount: "10% + 4% + 1%",
    netPrice: 1489200,
    unitPrice: 74.9,
    facing: "面 KLCC",
    view: "雙子星景觀",
    parking: "附贈 1 個平面車位",
    managementFee: mgmtFee(566),
    floorPlanImage: IMAGES.page_007,
  },
  {
    id: "A-69-09",
    unitNumber: "A-69-09",
    floor: "69 樓",
    floorNumber: 69,
    type: "A2",
    sqft: 566,
    ping: 15.9,
    layout: "Studio ／ 精裝修 + 1 車位",
    listPrice: 1852000,
    spaPrice: 1852000,
    discount: "10% + 4% + 1%",
    netPrice: 1574200,
    unitPrice: 79.2,
    facing: "面 KLCC",
    view: "雙子星景觀",
    parking: "附贈 1 個平面車位",
    managementFee: mgmtFee(566),
    floorPlanImage: IMAGES.page_007,
  },
  {
    id: "A-60-10",
    unitNumber: "A-60-10",
    floor: "60 樓",
    floorNumber: 60,
    type: "C1",
    sqft: 711,
    ping: 19.97,
    layout: "1+1 房 ／ 精裝修 + 1 車位",
    listPrice: 1986000,
    spaPrice: 1986000,
    discount: "10% + 4% + 1%",
    netPrice: 1688100,
    unitPrice: 67.6,
    facing: "面 KLCC",
    view: "雙子星景觀",
    parking: "附贈 1 個平面車位",
    managementFee: mgmtFee(711),
    floorPlanImage: IMAGES.page_008,
  },
  {
    id: "A-69-10",
    unitNumber: "A-69-10",
    floor: "69 樓",
    floorNumber: 69,
    type: "C1",
    sqft: 711,
    ping: 19.97,
    layout: "1+1 房 ／ 精裝修 + 1 車位",
    listPrice: 2249000,
    spaPrice: 2249000,
    discount: "10% + 4% + 1%",
    netPrice: 1911650,
    unitPrice: 76.5,
    facing: "面 KLCC",
    view: "雙子星景觀",
    parking: "附贈 1 個平面車位",
    managementFee: mgmtFee(711),
    floorPlanImage: IMAGES.page_008,
  },
  {
    id: "A-70-03A",
    unitNumber: "A-70-03A",
    floor: "70 樓",
    floorNumber: 70,
    type: "D1",
    sqft: 903,
    ping: 25.37,
    layout: "2 房 ／ 精裝修 + 1 車位",
    listPrice: 2922000,
    spaPrice: 2922000,
    discount: "MOT 2% 優惠",
    netPrice: 2922000,
    unitPrice: 92.1,
    facing: "面 KLCC",
    view: "雙子星 + 城市景觀",
    parking: "附贈 1 個平面車位",
    managementFee: mgmtFee(903),
    floorPlanImage: IMAGES.page_009,
  },
  {
    id: "A-73A-03A",
    unitNumber: "A-73A-03A",
    floor: "73A 樓",
    floorNumber: 73,
    type: "D1",
    sqft: 903,
    ping: 25.37,
    layout: "2 房 ／ 精裝修 + 1 車位",
    listPrice: 3158000,
    spaPrice: 3158000,
    discount: "MOT 2% 優惠",
    netPrice: 3158000,
    unitPrice: 99.5,
    facing: "面 KLCC",
    view: "雙子星 + 城市景觀",
    parking: "附贈 1 個平面車位",
    managementFee: mgmtFee(903),
    floorPlanImage: IMAGES.page_009,
  },
  {
    id: "A-63-02",
    unitNumber: "A-63-02",
    floor: "63 樓",
    floorNumber: 63,
    type: "D3",
    sqft: 956,
    ping: 26.86,
    layout: "雙鑰匙 2 房 ／ 精裝修 + 1 車位",
    listPrice: 2876000,
    spaPrice: 2876000,
    discount: "MOT 2% 優惠",
    netPrice: 2876000,
    unitPrice: 85.6,
    facing: "面 KLCC",
    view: "雙子星景觀",
    parking: "附贈 1 個平面車位",
    managementFee: mgmtFee(956),
    floorPlanImage: IMAGES.page_010,
  },
  {
    id: "A-71-02",
    unitNumber: "A-71-02",
    floor: "71 樓",
    floorNumber: 71,
    type: "D3",
    sqft: 956,
    ping: 26.86,
    layout: "雙鑰匙 2 房 ／ 精裝修 + 1 車位",
    listPrice: 3071000,
    spaPrice: 3071000,
    discount: "MOT 2% 優惠",
    netPrice: 3071000,
    unitPrice: 91.4,
    facing: "面 KLCC",
    view: "雙子星景觀",
    parking: "附贈 1 個平面車位",
    managementFee: mgmtFee(956),
    floorPlanImage: IMAGES.page_010,
  },
];

// Group promoted units by type
export function getUnitsByType() {
  const groups: Record<string, { typeInfo: (typeof UNIT_TYPES)[number]; units: PromotedUnit[] }> = {};
  for (const unit of PROMOTED_UNITS) {
    if (!groups[unit.type]) {
      const typeInfo = UNIT_TYPES.find((t) => t.id === unit.type)!;
      groups[unit.type] = { typeInfo, units: [] };
    }
    groups[unit.type].units.push(unit);
  }
  return groups;
}

// ─── Five key features ─────────────────────────────────────────────
export const KEY_FEATURES = [
  {
    icon: "landmark",
    title: "雙子星地段",
    description: "與世界級地標國油雙子星大樓為鄰，KLCC 地段價值無可取代",
  },
  {
    icon: "hotel",
    title: "SO/ Sofitel 品牌管理",
    description: "索飛特旗下 SO/ 品牌進駐，真正的五星品牌住宅",
  },
  {
    icon: "pool",
    title: "吉隆坡最高無邊際泳池",
    description: "77 樓空中泳池 — 全吉隆坡與馬來西亞住宅最高樓層",
  },
  {
    icon: "document",
    title: "永久地契",
    description: "KLCC 區稀有永久產權，綜合式國際開發",
  },
  {
    icon: "furniture",
    title: "精裝拎包入住",
    description: "贈送全套高檔精裝傢俱，入住即享五星品牌生活",
  },
];

// ─── Amenities (PDF page 4) ───────────────────────────────────────
export const AMENITIES = [
  { name: "77 樓無邊際泳池", icon: "pool" },
  { name: "SO Fit 健身房", icon: "gym" },
  { name: "SO/ 溫泉療理", icon: "spa" },
  { name: "泳池吧", icon: "bar" },
  { name: "空中花園（77F）", icon: "sky-garden" },
  { name: "瑜珈室", icon: "yoga" },
  { name: "三溫暖", icon: "sauna" },
  { name: "按摩浴缸", icon: "jacuzzi" },
  { name: "放映室 / 影音室", icon: "cinema" },
  { name: "休息 / 閱讀室", icon: "book" },
  { name: "多用途禮堂", icon: "hall" },
  { name: "娛樂間（45F）", icon: "game" },
  { name: "烤肉爐", icon: "bbq" },
  { name: "更衣室", icon: "locker" },
  { name: "泳池小屋", icon: "pool-house" },
  { name: "兒童泳池", icon: "water" },
  { name: "兒童遊樂園", icon: "playground" },
  { name: "托兒所（1F）", icon: "nursery" },
  { name: "專業餐廳", icon: "restaurant" },
  { name: "主題餐廳", icon: "restaurant" },
  { name: "全天餐廳", icon: "restaurant" },
  { name: "行政酒廊", icon: "lounge" },
  { name: "商業中心", icon: "business" },
  { name: "會議室", icon: "meeting" },
  { name: "舞廳", icon: "ballroom" },
  { name: "24 小時物業管理", icon: "security" },
];

// ─── Turnkey furnishing ────────────────────────────────────────────
export const FREE_FURNISHING = [
  "客廳沙發",
  "主臥床組",
  "餐桌椅",
  "廚房櫥櫃",
  "爐具 / 抽油煙機",
  "冰箱",
  "洗烘衣機",
  "冷氣（客廳 + 臥室）",
  "衣櫃",
  "燈具",
  "窗簾",
  "浴室五金",
];

// ─── Nearby landmarks ──────────────────────────────────────────────
export const LANDMARKS = [
  { name: "國油雙子星大樓 Petronas Twin Towers", distance: "步行可達" },
  { name: "Suria KLCC 購物中心", distance: "步行 5 分鐘" },
  { name: "KLCC Park 公園", distance: "步行 5 分鐘" },
  { name: "Avenue K 購物中心", distance: "步行 5 分鐘" },
  { name: "Pavilion Kuala Lumpur", distance: "車程 5 分鐘" },
  { name: "Grand Hyatt / Mandarin Oriental", distance: "周邊 1 km" },
  { name: "Menara KL Tower", distance: "車程 8 分鐘" },
  { name: "KLCC LRT 站", distance: "步行 5 分鐘" },
];

export const VR_TOUR_LINK = "";

export function formatRM(amount: number): string {
  return `RM ${amount.toLocaleString()}`;
}

export function formatTWD(amountRM: number): string {
  return `約 NT$ ${Math.round(amountRM * MYR_TO_TWD).toLocaleString()}`;
}
