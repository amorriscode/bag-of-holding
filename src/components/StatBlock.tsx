import React from 'react'

interface Props {
  label: string
}

export default function StatBlock({ label }: Props) {
  return (
    <div className="bg-white text-center rounded p-2 space-y-2">
      <div className="uppercase text-xs font-bold truncate">{label}</div>

      <div className="font-bold text-xl">+4</div>

      <input
        className="w-full bg-gray-200 rounded px-2 focus:border-brand-green focus:outline-none"
        type="number"
      />
    </div>
  )
}
