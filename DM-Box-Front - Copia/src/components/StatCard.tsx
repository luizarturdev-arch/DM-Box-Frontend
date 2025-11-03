import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  value: string;
  label: string;
  trend: "up" | "down";
  percentage: string;
}

export function StatCard({ value, label, trend, percentage }: StatCardProps) {
  const isPositive = trend === "up";
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="text-[#1a1f4d]">{value}</h3>
          <p className="text-gray-500">{label}</p>
        </div>
        <div className={`p-2 rounded-lg ${isPositive ? 'bg-green-50' : 'bg-red-50'}`}>
          {isPositive ? (
            <TrendingUp className="h-5 w-5 text-green-500" />
          ) : (
            <TrendingDown className="h-5 w-5 text-red-500" />
          )}
        </div>
      </div>
      <div className="flex items-center mt-4">
        <span className={`${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? '+' : '-'}{percentage}
        </span>
        <span className="text-gray-400 ml-2">vs último mês</span>
      </div>
      {/* Mini Sparkline */}
      <div className="mt-3 h-12">
        <svg width="100%" height="100%" viewBox="0 0 200 48" preserveAspectRatio="none">
          <path
            d={isPositive 
              ? "M0,40 L40,35 L80,28 L120,22 L160,18 L200,10"
              : "M0,10 L40,15 L80,22 L120,28 L160,32 L200,40"
            }
            fill="none"
            stroke={isPositive ? "#4ade80" : "#f87171"}
            strokeWidth="2"
          />
          <path
            d={isPositive 
              ? "M0,40 L40,35 L80,28 L120,22 L160,18 L200,10 L200,48 L0,48 Z"
              : "M0,10 L40,15 L80,22 L120,28 L160,32 L200,40 L200,48 L0,48 Z"
            }
            fill={isPositive ? "url(#gradient-green)" : "url(#gradient-red)"}
            opacity="0.2"
          />
          <defs>
            <linearGradient id="gradient-green" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4ade80" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient-red" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f87171" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#f87171" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
