// ===================================================================
// Last Units (推薦房型) — Oxley Tower · SO/ Sofitel KL
// Design: Oriental Luxury
// Colors: Forest Green #1a2a3a, Gold #c9a96e, Ivory #f5f0e8
// ===================================================================

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLineLink } from "@/hooks/useLineLink";
import { useTourLink } from "@/hooks/useTourLink";
import {
  formatRM,
  formatTWD,
  getUnitsByType,
  IMAGES,
  type PromotedUnit,
  STOREY_PLAN,
  UNIT_TYPES,
} from "@/lib/data";
import {
  ArrowLeft,
  Building2,
  Car,
  ChevronDown,
  Compass,
  Eye,
  Maximize2,
  Phone,
  Ruler,
  Tag,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

// ─── Header ─────────────────────────────────────────────────────────
function PageHeader({ lineLink }: { lineLink: string }) {
  return (
    <header className="bg-[#1a2a3a] border-b border-[#c9a96e]/20 sticky top-0 z-50">
      <div className="container py-4 flex items-center justify-between">
        <Link
          href={`/?${new URLSearchParams(window.location.search).toString()}`}
          className="flex items-center gap-2 text-[#f5f0e8]/80 hover:text-[#c9a96e] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">返回首頁</span>
        </Link>
        <div className="text-center">
          <span className="text-[#c9a96e] text-xs tracking-[0.2em] block">
            OXLEY TOWER · SO/ SOFITEL KL
          </span>
          <span className="text-white font-serif text-sm">吉隆坡永久地契品牌住宅</span>
        </div>
        <a
          href={lineLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c9a96e] text-sm hover:text-[#d4bc8a] transition-colors flex items-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">聯繫我們</span>
        </a>
      </div>
    </header>
  );
}

// ─── Hero Banner ────────────────────────────────────────────────────
function PromotionHero({ lineLink }: { lineLink: string }) {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Oxley Tower"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2a3a]/85" />
      </div>
      <div className="relative z-10 container text-center">
        <span className="text-[#c9a96e] text-xs tracking-[0.4em] font-light">
          EXCLUSIVE UNITS
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mt-4 mb-3">
          推薦房型
        </h1>
        <div className="gold-divider-wide mx-auto" />
        <p className="text-white/70 mt-4 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
          精選 60 樓以上「面雙子星」與「城市景觀」戶
        </p>
        <div className="mt-6 flex justify-center gap-6 text-xs text-[#c9a96e]/70">
          <span>A2 ／ C1 戶型折扣 10% + 4% + 1%</span>
          <span className="text-[#c9a96e]/30">|</span>
          <span>D1 ／ D3 戶型 MOT 2% 優惠</span>
        </div>
      </div>
    </section>
  );
}

// ─── Unit Type Group ────────────────────────────────────────────────
function UnitTypeGroup({
  typeId,
  typeInfo,
  units,
  expandedId,
  onExpand,
  lineLink,
  tourLink,
}: {
  typeId: string;
  typeInfo: (typeof UNIT_TYPES)[number];
  units: PromotedUnit[];
  expandedId: string | null;
  onExpand: (id: string | null) => void;
  lineLink: string;
  tourLink: string;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className="mb-12"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.7s ease-out",
      }}
    >
      {/* Type header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-[#1a2a3a] text-[#c9a96e] px-4 py-2">
          <span className="font-serif text-lg font-bold">{typeInfo.name}</span>
        </div>
        <div className="flex-1 h-px bg-[#c9a96e]/20" />
        <div className="text-right">
          <span className="text-sm text-[#2d2d2d]/50">
            {typeInfo.sqft} sqft / {typeInfo.ping} 坪
          </span>
          <span className="text-[#2d2d2d]/30 mx-2">|</span>
          <span className="text-sm text-[#2d2d2d]/50">{typeInfo.layout}</span>
        </div>
      </div>

      {/* Floor cards */}
      <div className="space-y-3">
        {units.map((unit) => (
          <UnitFloorCard
            key={unit.id}
            unit={unit}
            isExpanded={expandedId === unit.id}
            onToggle={() => onExpand(expandedId === unit.id ? null : unit.id)}
            lineLink={lineLink}
            tourLink={tourLink}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Expandable Unit Floor Card ─────────────────────────────────────
function UnitFloorCard({
  unit,
  isExpanded,
  onToggle,
  lineLink,
  tourLink,
}: {
  unit: PromotedUnit;
  isExpanded: boolean;
  onToggle: () => void;
  lineLink: string;
  tourLink: string;
}) {
  return (
    <div className="border border-[#c9a96e]/15 bg-white transition-all duration-300 hover:border-[#c9a96e]/30">
      {/* Collapsed: Floor number button */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between group"
      >
        <div className="flex items-center gap-4">
          <span className="font-serif text-xl text-[#1a2a3a] font-bold group-hover:text-[#c9a96e] transition-colors">
            {unit.floor}
          </span>
          <span className="text-xs text-[#2d2d2d]/40">
            戶號 {unit.unitNumber}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-sm text-[#2d2d2d]/50">
              淨價
            </span>
            <span className="font-serif text-lg text-[#c9a96e] font-bold">
              {formatRM(unit.netPrice)}
            </span>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-[#c9a96e] transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {/* Expanded details */}
      {isExpanded && (
        <div className="border-t border-[#c9a96e]/10 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="p-6 sm:p-8">
            {/* Price highlight */}
            <div className="bg-[#1a2a3a] p-6 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <span className="text-[#f5f0e8]/50 text-xs block mb-1">牌價</span>
                  <span className="text-[#f5f0e8]/70 text-sm line-through">
                    {formatRM(unit.listPrice)}
                  </span>
                </div>
                <div>
                  <span className="text-[#f5f0e8]/50 text-xs block mb-1">折扣</span>
                  <span className="text-[#c9a96e] text-sm font-medium">
                    {unit.discount}
                  </span>
                </div>
                <div className="sm:col-span-1 flex flex-col justify-center">
                  <span className="text-[#c9a96e]/70 text-xs block mb-2 tracking-wider">淨價（折扣後）</span>
                  <span className="gold-pulse font-serif text-4xl sm:text-5xl font-black block leading-tight">
                    {formatRM(unit.netPrice)}
                  </span>
                  <span className="text-[#f5f0e8]/50 text-sm mt-2 block font-medium">
                    {formatTWD(unit.netPrice)}
                  </span>
                </div>
              </div>
            </div>

            {/* Detail grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
              <DetailRow
                icon={<Tag className="w-4 h-4" />}
                label="戶號"
                value={unit.unitNumber}
              />
              <DetailRow
                icon={<Building2 className="w-4 h-4" />}
                label="房型"
                value={`TYPE ${unit.type}`}
              />
              <DetailRow
                icon={<Maximize2 className="w-4 h-4" />}
                label="面積"
                value={`${unit.sqft} sqft / ${unit.ping} 坪`}
              />
              <DetailRow
                icon={<Ruler className="w-4 h-4" />}
                label="格局"
                value={unit.layout}
              />
              <DetailRow
                icon={<Tag className="w-4 h-4" />}
                label="合約價 (SPA)"
                value={formatRM(unit.spaPrice)}
              />
              <DetailRow
                icon={<Tag className="w-4 h-4" />}
                label="單價"
                value={`${unit.unitPrice} 萬台幣 / 坪`}
              />
              <DetailRow
                icon={<Compass className="w-4 h-4" />}
                label="座向"
                value={unit.facing}
              />
              <DetailRow
                icon={<Eye className="w-4 h-4" />}
                label="景觀"
                value={unit.view}
              />
              <DetailRow
                icon={<Car className="w-4 h-4" />}
                label="車位"
                value={unit.parking}
              />
              <DetailRow
                icon={<Building2 className="w-4 h-4" />}
                label="管理費"
                value={unit.managementFee}
              />
            </div>

            {/* Floor plan images */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-[#2d2d2d]/50 mb-2 tracking-wider">
                  格局圖 — TYPE {unit.type}
                </p>
                <div className="border border-[#c9a96e]/15 bg-[#1b2737]">
                  <img
                    src={unit.floorPlanImage}
                    alt={`TYPE ${unit.type} 格局圖`}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
              <div>
                <p className="text-xs text-[#2d2d2d]/50 mb-2 tracking-wider">
                  樓層平面圖
                </p>
                <div className="border border-[#c9a96e]/15 bg-[#1b2737]">
                  <img
                    src={STOREY_PLAN}
                    alt="樓層平面圖"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={lineLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-6 py-3 text-sm rounded-sm inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                我有興趣
              </a>
              <a
                href={tourLink}
                className="btn-gold-outline px-6 py-3 text-sm rounded-sm inline-flex items-center gap-2 text-[#1a2a3a]"
              >
                報名考察團
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 py-2 border-b border-[#1a2a3a]/5">
      <span className="text-[#c9a96e]">{icon}</span>
      <span className="text-xs text-[#2d2d2d]/50 w-24 shrink-0">{label}</span>
      <span className="text-sm text-[#1a2a3a] font-medium">{value}</span>
    </div>
  );
}
// ─── Bottom CTA ─────────────────────────────────────────────────────
function BottomCTA({ lineLink, tourLink }: { lineLink: string; tourLink: string }) {
  return (
    <section className="bg-[#1a2a3a] py-16">
      <div className="container text-center">
        <span className="text-[#c9a96e] text-xs tracking-[0.3em]">
          INTERESTED?
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl text-white mt-3 mb-2">
          把握最後機會
        </h2>
        <div className="gold-divider-wide mx-auto" />
        <p className="text-white/60 text-sm mt-4 mb-8 max-w-md mx-auto">
          60 樓以上「面雙子星」與「城市景觀」戶數量有限，歡迎聯繫我們了解詳情或預約實地考察。
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={lineLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-8 py-3.5 text-base rounded-sm inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            我有興趣（LINE）
          </a>
          <a
            href={tourLink}
            className="btn-gold-outline px-8 py-3.5 text-base rounded-sm inline-flex items-center gap-2 text-[#c9a96e]"
          >
            報名考察團
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────
function PageFooter() {
  return (
    <footer className="bg-[#0f1a2a] py-8">
      <div className="container text-center">
        <p className="text-[#f5f0e8]/30 text-xs leading-relaxed max-w-2xl mx-auto">
          免責聲明：本網站所載資料僅供參考，不構成任何要約或承諾。所有圖片、平面圖及規格以最終買賣合約為準。開發商保留修改設計及規格之權利，恕不另行通知。
        </p>
        <p className="text-[#f5f0e8]/20 text-xs mt-4">
          &copy; 2026 Oxley Holdings Limited
        </p>
      </div>
    </footer>
  );
}

// ─── Main Last Units Page ────────────────────────────────────────────────
export default function LastUnits() {
  const lineLink = useLineLink();
  const tourLink = useTourLink();
  const unitsByType = getUnitsByType();
  const typeOrder = ["A2", "C1", "D1", "D3"];
  const [expandedId, setExpandedId] = useState<string | null>(null);  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <PageHeader lineLink={lineLink} />
      <PromotionHero lineLink={lineLink} />

      {/* Units listing */}
      <div className="container py-16">
        <div className="flex items-center gap-4 mb-10">
          <span className="section-number font-serif text-xs tracking-[0.3em]">
            AVAILABLE UNITS
          </span>
          <div className="flex-1 h-px bg-[#c9a96e]/20" />
          <span className="text-xs text-[#2d2d2d]/40">
            共 {Object.values(unitsByType).reduce((sum, g) => sum + g.units.length, 0)} 戶
          </span>
        </div>

        {typeOrder.map((typeId) => {
          const group = unitsByType[typeId];
          if (!group) return null;
          return (
            <UnitTypeGroup
              key={typeId}
              typeId={typeId}
              typeInfo={group.typeInfo}
              units={group.units}
              expandedId={expandedId}
              onExpand={setExpandedId}
              lineLink={lineLink}
              tourLink={tourLink}
            />
          );
        })}
      </div>

      <BottomCTA lineLink={lineLink} tourLink={tourLink} />
      <PageFooter />
    </div>
  );
}
