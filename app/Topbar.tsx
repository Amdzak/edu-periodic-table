"use client"

import { ChevronDown, ChevronUp } from "lucide-react"

import { useState } from "react"

function TopFilter() {
  const [open, setOpen] = useState(true)

  return (
    <>
      {/* ✅ TOGGLE — SELALU KELIHATAN */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed
          top-4
          left-1/2
          -translate-x-1/2
          z-50
          bg-white/80
          backdrop-blur-lg
          shadow-lg
          border
          rounded-full
          p-2
          hover:scale-110
          transition
        "
      >
        {open ? <ChevronUp size={22}/> : <ChevronDown size={22}/>}
      </button>


      {/* ✅ PANEL */}
      <div
        className={`
          fixed
          top-0
          left-1/2
          -translate-x-1/2
          z-40
          transform
          transition-transform
          duration-300
          ease-out
          ${open ? "translate-y-12" : "-translate-y-full"}
        `}
      >
        <div className="
          flex gap-3
          bg-white/80
          backdrop-blur-lg
          shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          border
          rounded-2xl
          px-4
          py-3
        ">
          <button className="
            px-5 py-2
            rounded-lg
            bg-indigo-500
            text-white
            hover:bg-indigo-600
            transition
          ">
            Periode
          </button>

          <button className="
            px-5 py-2
            rounded-lg
            bg-emerald-500
            text-white
            hover:bg-emerald-600
            transition
          ">
            Golongan
          </button>
        </div>
      </div>
    </>
  )
}

export default TopFilter
