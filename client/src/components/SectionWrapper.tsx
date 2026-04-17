// ===================================================================
// SectionWrapper — Reusable section with scroll animation & numbering
// Design: Imperial Orient — gold dividers, section numbers
// ===================================================================

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  number?: string;
  label?: string;
  className?: string;
  dark?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  number,
  label,
  className = "",
  dark = false,
}: SectionWrapperProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative ${dark ? "bg-[#1a3a2a] text-[#f5f0e8]" : "bg-[#f5f0e8] text-[#2d2d2d]"} ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      {number && (
        <div className="container pt-16 pb-4">
          <div className="flex items-center gap-4">
            <span className="section-number font-serif text-xs tracking-[0.3em]">
              {number}
            </span>
            {label && (
              <>
                <div className="w-12 h-px bg-[#c9a96e]/40" />
                <span className="section-number text-xs tracking-[0.15em]">
                  {label}
                </span>
              </>
            )}
          </div>
        </div>
      )}
      {children}
    </section>
  );
}
