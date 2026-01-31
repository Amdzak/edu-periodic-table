import { PHASE_COLOR_MAP } from "./colorMap"

interface ElementCardProps {
  atomicNumber: number
  symbol: string
  name: string
  indName: string
  atomicMass: number
  xpos: number
  ypos: number
  phase: string
  category: string
}

function ElementCard({atomicNumber, symbol, name, atomicMass, indName, xpos, ypos, phase, category,}: ElementCardProps) {
  const colorClass =
    PHASE_COLOR_MAP[phase as keyof typeof PHASE_COLOR_MAP] ||
    (category === "synthetic"
      ? PHASE_COLOR_MAP.Synthetic
      : "bg-gray-300 border-gray-300")

  const [bgColor, borderColor] = colorClass.split(" ")

  return (
    <div
      style={{
        gridColumnStart: xpos,
        gridRowStart: ypos,
      }}
      className={` ${bgColor} rounded-xl p-1 aspect-3/4 min-w-16 md:min-w-22 max-w-24`}
    >
      <div className="bg-white rounded-lg h-full flex flex-col items-center relative">

        {/* Atomic number */}
        <span className="absolute top-1 left-1 text-xs md:font-semibold">
          {atomicNumber}
        </span>

        {/* Symbol */}
        <div className="flex-1 flex items-center justify-center">
          <span className="md:text-4xl sm:text-xl font-extrabold">
            {symbol}
          </span>
        </div>

        {/* Atomic mass */}
        <span className="absolute bottom-6 left-1 text-xs md:font-semibold">
          {atomicMass}
        </span>

        {/* Footer */}
        <div className={`w-full text-center border-t ${borderColor} py-1`}>
          <div className="text-[9px] capitalize truncate">
            {indName}
          </div>
          <div className="text-[8px] md:text-[9px] font-semibold uppercase truncate">
            {name}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ElementCard
