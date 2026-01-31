import ElementCard from "./ElementCard"
import { elements } from "./elements.json"

function PeriodicTable() {
  return (
    <div className="grid grid-cols-18 gap-2 p-4">
      {elements.map((el) => (
        <ElementCard
          key={el.number}
          atomicNumber={el.number}
          symbol={el.symbol}
          name={el.name}
          indName={el.IndName}
          atomicMass={Math.round(el.atomic_mass)}
          xpos={el.xpos}
          ypos={el.ypos}
          phase={el.phase}
          category={el.category}
        />
      ))}
    </div>
  )
}

export default PeriodicTable
