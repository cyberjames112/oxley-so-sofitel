// ===================================================================
// Home Page — Oxley Tower / SO/ Sofitel Kuala Lumpur
// Design: Oriental Luxury (東方奢華)
// Colors: Forest Green #1a3a2a, Gold #c9a96e, Ivory #f5f0e8
// ===================================================================

import SectionWrapper from "@/components/SectionWrapper";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLineLink } from "@/hooks/useLineLink";
import { useTourLink } from "@/hooks/useTourLink";
import {
  AMENITIES,
  FREE_FURNISHING,
  IMAGES,
  KEY_FEATURES,
  LANDMARKS,
  UNIT_TYPES,
  VR_TOUR_LINK,
} from "@/lib/data";
import {
  Building2,
  ChevronRight,
  Crown,
  Eye,
  Landmark,
  MapPin,
  Phone,
  ShieldCheck,
  Sofa,
  Sparkles,
  Waves,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

// ─── Hero Section ───────────────────────────────────────────────────
function HeroSection({ tourLink }: { tourLink: string }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Oxley Tower 吉隆坡 KLCC 外觀"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a2a]/80 via-[#1a3a2a]/40 to-[#1a3a2a]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center container">
        <div className="max-w-3xl">
          {/* Gold accent line */}
          <div
            className="w-16 h-0.5 bg-[#c9a96e] mb-8"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
              transition: "all 1s ease-out 0.3s",
            }}
          />

          {/* Project name */}
          <h1
            className="font-serif text-white"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease-out 0.5s",
            }}
          >
            <span className="block text-lg sm:text-xl tracking-[0.3em] text-[#c9a96e] mb-3 font-sans font-light">
              OXLEY TOWER · SO/ SOFITEL KL
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Oxley Tower
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="mt-6 text-lg sm:text-xl text-white/90 font-light leading-relaxed max-w-xl"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease-out 0.7s",
            }}
          >
            吉隆坡 KLCC 永久地契 ／ SO/ Sofitel 品牌管理
            <br />
            <span className="text-[#c9a96e]">已完工 · 拎包入住</span>
            ・1,150 萬台幣起
          </p>

          {/* CTA buttons */}
          <div
            className="mt-10 flex flex-wrap gap-4"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease-out 0.9s",
            }}
          >
            <Link
              href={`/last-units?${new URLSearchParams(window.location.search).toString()}`}
              className="btn-gold px-8 py-3.5 text-base rounded-sm inline-flex items-center gap-2"
            >
              查看推薦房型
              <ChevronRight className="w-4 h-4" />
            </Link>
            <a
              href={tourLink}
              className="btn-gold-outline px-8 py-3.5 text-base rounded-sm text-white border-white/40 hover:border-[#c9a96e] inline-flex items-center gap-2"
            >
              報名考察團
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-white/50 text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#c9a96e] to-transparent animate-pulse" />
      </div>
    </section>
  );
}

// ─── Stats Bar ──────────────────────────────────────────────────────
function StatsBar() {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const stats = [
    { value: "永久", label: "地契" },
    { value: "78", label: "層樓" },
    { value: "590", label: "戶(A棟)" },
    { value: "3.11", label: "英畝基地" },
    { value: "已完工", label: "交屋狀態" },
    { value: "RM 1,489,200", label: "淨價起" },
  ];

  return (
    <div
      ref={ref}
      className="bg-[#1a3a2a] border-y border-[#c9a96e]/20"
    >
      <div className="container py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(15px)",
                transition: `all 0.6s ease-out ${i * 0.1}s`,
              }}
            >
              <div className="font-serif text-2xl sm:text-3xl text-[#c9a96e] font-bold">
                {stat.value}
              </div>
              <div className="text-[#f5f0e8]/60 text-sm mt-1 tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Key Features Section ───────────────────────────────────────────
function KeyFeaturesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    landmark: <Landmark className="w-7 h-7" />,
    hotel: <Crown className="w-7 h-7" />,
    pool: <Waves className="w-7 h-7" />,
    document: <ShieldCheck className="w-7 h-7" />,
    furniture: <Sofa className="w-7 h-7" />,
  };

  return (
    <SectionWrapper number="01" label="KEY FEATURES" className="pb-20">
      <div className="container">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1a3a2a] mb-3">
          建案五大特色
        </h2>
        <div className="gold-divider-wide" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {KEY_FEATURES.map((feature, i) => (
            <FeatureCard key={i} feature={feature} icon={iconMap[feature.icon]} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function FeatureCard({
  feature,
  icon,
  index,
}: {
  feature: (typeof KEY_FEATURES)[number];
  icon: React.ReactNode;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.2);
  return (
    <div
      ref={ref}
      className="group p-6 bg-white border border-[#c9a96e]/15 hover:border-[#c9a96e]/40 transition-all duration-500 hover:shadow-lg hover:shadow-[#c9a96e]/5"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.6s ease-out ${index * 0.1}s`,
      }}
    >
      <div className="text-[#c9a96e] mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-serif text-lg text-[#1a3a2a] mb-2 font-semibold">
        {feature.title}
      </h3>
      <p className="text-sm text-[#2d2d2d]/70 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}

// ─── Overview Section ───────────────────────────────────────────────
function OverviewSection() {
  return (
    <SectionWrapper number="02" label="OVERVIEW" dark className="pb-20">
      <div className="container">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f0e8] mb-3">
          建案總覽
        </h2>
        <div className="gold-divider-wide" />

        {/* Developer intro */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-serif text-xl text-[#c9a96e] mb-4">
              Oxley Holdings Limited
            </h3>
            <p className="text-[#f5f0e8]/80 leading-relaxed mb-6">
              Oxley Tower 由新加坡上市公司 Oxley Holdings Limited 開發，位於吉隆坡 KLCC 黃金地段（157 Jalan Ampang），佔地 3.11 英畝。基地由三棟組成：塔 1 為 78 層 SO/ Sofitel 酒店式公寓（590 戶），塔 2 為 49 層酒店與服務式公寓（267 戶），並附設 30 層豪華辦公大樓。
            </p>
            <p className="text-[#f5f0e8]/80 leading-relaxed mb-6">
              全案榮獲 BCA Greenmark 綠色 / 金牌等級雙認證，永久地契，管理費僅 RM 1.12 / 平方英尺 / 月。住宅塔配備 A 棟 600 個平面車位，已完工、精裝拎包入住。
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="border border-[#c9a96e]/30 px-5 py-3">
                <div className="text-[#c9a96e] font-serif text-lg">78F</div>
                <div className="text-[#f5f0e8]/50 text-xs mt-1">塔 1 樓層</div>
              </div>
              <div className="border border-[#c9a96e]/30 px-5 py-3">
                <div className="text-[#c9a96e] font-serif text-lg">600</div>
                <div className="text-[#f5f0e8]/50 text-xs mt-1">A 棟車位</div>
              </div>
              <div className="border border-[#c9a96e]/30 px-5 py-3">
                <div className="text-[#c9a96e] font-serif text-lg">BCA</div>
                <div className="text-[#f5f0e8]/50 text-xs mt-1">Greenmark 認證</div>
              </div>
            </div>
          </div>

          {/* Project renders */}
          <div className="space-y-4">
            <div className="img-zoom rounded-sm overflow-hidden">
              <img
                src={IMAGES.so_rooftop}
                alt="SO/ Sofitel 空中露台酒廊"
                className="w-full h-56 object-cover"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="img-zoom rounded-sm overflow-hidden">
                <img
                  src={IMAGES.interior}
                  alt="精裝修室內示意"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="img-zoom rounded-sm overflow-hidden">
                <img
                  src={IMAGES.lobby}
                  alt="氣派大廳"
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="text-[#c9a96e]/60 text-xs text-center tracking-wider mt-2">
              ※ 以上所有圖片為 3D 示意圖
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

// ─── Floor Plan Section ─────────────────────────────────────────────
function FloorPlanSection() {
  const [activeTab, setActiveTab] = useState("A2");
  const activeType = UNIT_TYPES.find((t) => t.id === activeTab)!;

  return (
    <SectionWrapper number="03" label="FLOOR PLANS" className="pb-20">
      <div className="container">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1a3a2a] mb-3">
          房型介紹
        </h2>
        <div className="gold-divider-wide" />

        {/* Tabs */}
        <div className="flex gap-1 mt-10 border-b border-[#1a3a2a]/10 overflow-x-auto">
          {UNIT_TYPES.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`px-6 py-3 text-sm font-medium tracking-wider transition-all whitespace-nowrap ${
                activeTab === type.id
                  ? "tab-gold-active text-[#c9a96e]"
                  : "text-[#2d2d2d]/50 hover:text-[#2d2d2d]/80"
              }`}
            >
              {type.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Floor plan image */}
          <div className="lg:col-span-3">
            <div className="bg-white p-2 border border-[#c9a96e]/15">
              <img
                src={activeType.floorPlanImage}
                alt={`${activeType.name} 格局圖`}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Specs */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <h3 className="font-serif text-2xl text-[#1a3a2a] mb-6">
              {activeType.name}
            </h3>
            <div className="space-y-4">
              <SpecRow label="面積" value={`${activeType.sqft} sqft / ${activeType.ping} 坪`} />
              <SpecRow label="格局" value={activeType.layout} />
              <SpecRow label="管理費" value={`RM ${(activeType.sqft * 1.12).toFixed(0)}/月`} />
              <SpecRow label="車位" value="每戶附贈 1 個平面車位" />
            </div>

            <div className="mt-8 pt-6 border-t border-[#c9a96e]/20">
              <p className="text-sm text-[#2d2d2d]/60 mb-4">精裝交屋配備</p>
              <div className="flex flex-wrap gap-2">
                {FREE_FURNISHING.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 bg-[#1a3a2a]/5 text-[#1a3a2a]/70 border border-[#1a3a2a]/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href={`/last-units?${new URLSearchParams(window.location.search).toString()}`}
              className="btn-gold mt-8 px-6 py-3 text-sm rounded-sm inline-flex items-center gap-2 self-start"
            >
              查看推薦房型
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-[#1a3a2a]/5">
      <span className="text-sm text-[#2d2d2d]/50">{label}</span>
      <span className="text-sm font-medium text-[#1a3a2a]">{value}</span>
    </div>
  );
}

// ─── Lifestyle Section ──────────────────────────────────────────────
function LifestyleSection() {
  return (
    <SectionWrapper number="04" label="LIFESTYLE" dark className="pb-20">
      <div className="container">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f0e8] mb-3">
          SO/ Sofitel 品牌生活
        </h2>
        <div className="gold-divider-wide" />
        <p className="text-[#f5f0e8]/60 text-sm mt-4 mb-8 max-w-2xl">
          法式奢華 × 東方風情。由索飛特旗下 SO/ 品牌進駐管理，77 樓空中泳池俯瞰雙子星，
          77 樓空中花園、SO Fit 健身房、SO/ 溫泉療理讓每一天都像度假。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="img-zoom overflow-hidden border border-[#c9a96e]/20">
            <img src={IMAGES.so_rooftop} alt="SO/ 空中酒廊" className="w-full h-72 object-cover" loading="lazy" />
          </div>
          <div className="img-zoom overflow-hidden border border-[#c9a96e]/20">
            <img src={IMAGES.interior} alt="精裝修客廳示意" className="w-full h-72 object-cover" loading="lazy" />
          </div>
          <div className="img-zoom overflow-hidden border border-[#c9a96e]/20">
            <img src={IMAGES.lobby} alt="氣派酒店式大廳" className="w-full h-72 object-cover" loading="lazy" />
          </div>
        </div>

        <p className="text-[#c9a96e]/50 text-xs mt-6 text-center italic">
          ※ 以上所有圖片為 3D 示意圖
        </p>
      </div>
    </SectionWrapper>
  );
}

// ─── Amenities Section ──────────────────────────────────────────────
function AmenitiesSection() {
  const amenityPhotos = [
    { src: IMAGES.lobby, label: "氣派酒店式大廳" },
    { src: IMAGES.so_rooftop, label: "SO/ 空中酒廊" },
    { src: IMAGES.interior, label: "精裝修客廳" },
    { src: IMAGES.city_view, label: "77F 空中泳池視野" },
    { src: IMAGES.marketing, label: "雙子星景觀" },
    { src: IMAGES.hero, label: "KLCC 地標大樓" },
  ];

  return (
    <SectionWrapper number="05" label="AMENITIES" className="pb-20">
      <div className="container">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1a3a2a] mb-3">
          公共設施
        </h2>
        <div className="gold-divider-wide" />

        {/* Photo grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3">
          {amenityPhotos.map((photo, i) => (
            <AmenityPhoto key={i} photo={photo} index={i} />
          ))}
        </div>

        {/* Amenity list */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {AMENITIES.map((amenity) => (
            <div
              key={amenity.name}
              className="flex items-center gap-3 py-3 px-4 bg-white border border-[#c9a96e]/10"
            >
              <div className="w-1.5 h-1.5 bg-[#c9a96e] rounded-full shrink-0" />
              <span className="text-sm text-[#2d2d2d]/80">{amenity.name}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function AmenityPhoto({
  photo,
  index,
}: {
  photo: { src: string; label: string };
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className="img-zoom relative group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(15px)",
        transition: `all 0.5s ease-out ${index * 0.08}s`,
      }}
    >
      <img
        src={photo.src}
        alt={photo.label}
        className="w-full h-40 sm:h-48 object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a2a]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
        <span className="text-white text-sm font-light">{photo.label}</span>
      </div>
    </div>
  );
}

// ─── Location Section ───────────────────────────────────────────────
function LocationSection() {
  return (
    <SectionWrapper number="06" label="LOCATION" dark className="pb-20">
      <div className="container">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f0e8] mb-3">
          地理位置
        </h2>
        <div className="gold-divider-wide" />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* City skyline image */}
          <div className="border border-[#c9a96e]/20 overflow-hidden">
            <img
              src={IMAGES.page_011}
              alt="吉隆坡天際線與周邊地標"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Landmarks */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-5 h-5 text-[#c9a96e]" />
              <p className="text-[#f5f0e8]/80 text-sm">
                157, Jln Ampang, Kuala Ampang, 55000 Kuala Lumpur, Malaysia
              </p>
            </div>

            <div className="space-y-0">
              {LANDMARKS.map((landmark, i) => (
                <div
                  key={landmark.name}
                  className="flex justify-between items-center py-4 border-b border-[#c9a96e]/10"
                >
                  <span className="text-[#f5f0e8]/90 text-sm">{landmark.name}</span>
                  <span className="text-[#c9a96e] text-sm font-light">{landmark.distance}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-[#c9a96e]/10 border border-[#c9a96e]/20">
              <p className="text-[#c9a96e] text-sm font-medium mb-2">
                KLCC 核心地段
              </p>
              <p className="text-[#f5f0e8]/70 text-sm leading-relaxed">
                位居吉隆坡市中心 Jalan Ampang，與國油雙子星大樓為鄰，步行可達 Suria KLCC、Avenue K、KLCC Park；5 分鐘車程即達 Pavilion、Bukit Bintang；鄰近 Grand Hyatt、Mandarin Oriental、InterContinental 國際酒店群。
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

// ─── CTA Section ────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.city_view}
          alt="城市景觀"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a3a2a]/80" />
      </div>
      <div className="relative z-10 container py-24 text-center">
        <span className="text-[#c9a96e] text-sm tracking-[0.3em] font-light">
          LIMITED EDITION
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mt-4 mb-4">
          60 樓以上
          <br />
          <span className="text-[#c9a96e]">雙子星景觀戶</span>
        </h2>
        <div className="gold-divider-wide mx-auto" />
        <p className="text-white/70 mt-6 mb-10 max-w-md mx-auto leading-relaxed">
          60 樓以上稀有面 KLCC 戶型，直面國油雙子星，精裝拎包入住，每戶附贈 1 個車位，限量釋出。
        </p>
        <Link
          href={`/last-units?${new URLSearchParams(window.location.search).toString()}`}
          className="btn-gold px-10 py-4 text-base rounded-sm inline-flex items-center gap-2"
        >
          查看推薦房型
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

//// ─── Footer ───────────────────────────────────────────────────
function Footer({ lineLink, tourLink }: { lineLink: string; tourLink: string }) {
  return (
    <footer className="bg-[#0f2219] text-[#f5f0e8]">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl text-[#c9a96e] mb-2">
              Oxley Tower · SO/ Sofitel KL
            </h3>
            <p className="font-serif text-lg text-white mb-4">吉隆坡永久地契品牌住宅</p>
            <p className="text-[#f5f0e8]/50 text-sm leading-relaxed">
              157, Jln Ampang, Kuala Ampang,
              <br />
              55000 Kuala Lumpur, Malaysia
            </p>
            <p className="text-[#f5f0e8]/50 text-sm mt-2">
              開發商：Oxley Holdings Limited
              <br />
              酒店管理：SO/ Sofitel (Accor)
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[#c9a96e] text-sm tracking-wider mb-4">快速連結</h4>
            <div className="space-y-3">
              <a href="#features" className="block text-[#f5f0e8]/60 text-sm hover:text-[#c9a96e] transition-colors">
                建案特色
              </a>
              <a href="#overview" className="block text-[#f5f0e8]/60 text-sm hover:text-[#c9a96e] transition-colors">
                建案總覽
              </a>
              <a href="#floorplans" className="block text-[#f5f0e8]/60 text-sm hover:text-[#c9a96e] transition-colors">
                房型介紹
              </a>
              <a href="#amenities" className="block text-[#f5f0e8]/60 text-sm hover:text-[#c9a96e] transition-colors">
                公共設施
              </a>
              <Link href={`/last-units?${new URLSearchParams(window.location.search).toString()}`} className="block text-[#f5f0e8]/60 text-sm hover:text-[#c9a96e] transition-colors">
                推薦房型
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#c9a96e] text-sm tracking-wider mb-4">聯繫我們</h4>
            <div className="space-y-4">
              <a
                href={lineLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-6 py-3 text-sm rounded-sm inline-flex items-center gap-2 w-full justify-center"
              >
                <Phone className="w-4 h-4" />
                我有興趣（LINE）
              </a>
              <a
                href={tourLink}
                className="btn-gold-outline px-6 py-3 text-sm rounded-sm inline-flex items-center gap-2 w-full justify-center text-[#c9a96e]"
              >
                <Eye className="w-4 h-4" />
                報名考察團
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-[#c9a96e]/10">
          <p className="text-[#f5f0e8]/30 text-xs leading-relaxed">
            免責聲明：本網站所載資料僅供參考，不構成任何要約或承諾。所有圖片、平面圖及規格以最終買賣合約為準。開發商保留修改設計及規格之權利，恕不另行通知。價格及優惠以開發商最新公告為準。
          </p>
          <p className="text-[#f5f0e8]/20 text-xs mt-4">
            &copy; 2026 Oxley Holdings Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Home Page ─────────────────────────────────────────────────
export default function Home() {
  const lineLink = useLineLink();
  const tourLink = useTourLink();
  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <HeroSection tourLink={tourLink} />
      <StatsBar />
      <div id="features">
        <KeyFeaturesSection />
      </div>
      <div id="overview">
        <OverviewSection />
      </div>
      <div id="floorplans">
        <FloorPlanSection />
      </div>
      <LifestyleSection />
      <div id="amenities">
        <AmenitiesSection />
      </div>
      <LocationSection />
      <CTASection />
      <Footer lineLink={lineLink} tourLink={tourLink} />
    </div>
  );
}
