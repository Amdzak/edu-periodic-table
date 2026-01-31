import { PHASE_COLOR_MAP } from "./colorMap"

function ElementCard({
  atomicNumber,
  symbol,
  name,
  atomicMass,
  indName,
  xpos,
  ypos,
  phase,
  category,
}) {
  // fallback logic
  const colorClass =
    PHASE_COLOR_MAP[phase] ||
    (category === "synthetic" ? PHASE_COLOR_MAP.Synthetic : "bg-gray-300 border-gray-300")

  const [bgColor, borderColor] = colorClass.split(" ")

  return (
    <div
      style={{
        gridColumnStart: xpos,
        gridRowStart: ypos,
      }}
      className={`rounded-xl p-1 ${bgColor} w-28`}
    >
      <div className="bg-white rounded-lg h-40 flex flex-col items-center relative">

        {/* Atomic number */}
        <span className="absolute top-6 left-6 text-xs font-semibold">
          {atomicNumber}
        </span>

        {/* Symbol */}
        <div className="flex-1 flex items-center justify-center">
          <span className="text-4xl font-extrabold">
            {symbol}
          </span>
        </div>

        {/* Atomic mass */}
        <span className="absolute bottom-10 left-6 text-xs">
          {atomicMass}
        </span>

        {/* Footer */}
        <div className={`w-full text-center border-t-2 ${borderColor} py-1`}>
          <div className="text-[10px] capitalize">{indName}</div>
          <div className="text-xs font-semibold uppercase">{name}</div>
        </div>

      </div>
    </div>
  )
}

export default ElementCard
