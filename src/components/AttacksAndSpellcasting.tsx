import React from 'react'

import NumberInput from './NumberInput'

export default function AttacksAndSpellcasting() {
  return (
    <div className="bg-white shadow text-center rounded p-2 space-y-2">
      <div className="uppercase font-bold text-center text-sm">
        Attacks &amp; Spellcasting
      </div>

      <table className="table-fixed w-full text-left">
        <thead className="text-xxs">
          <tr>
            <th className="w-1/2">Name</th>
            <th className="w-1/4">Attack Bonus</th>
            <th className="w-1/4">Damage/Type</th>
          </tr>
        </thead>

        <tbody></tbody>
      </table>

      <button className="bg-brand-green w-full rounded p-2 text-white uppercase font-bold">
        Add Attack
      </button>
    </div>
  )
}
