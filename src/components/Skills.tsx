import React from 'react'

import NumberInput from './NumberInput'
import Checkbox from './Checkbox'

function SkillsOption({ skill }: { skill: string }) {
  return (
    <div className="col-span-1">
      <div className="uppercase text-xxs font-bold">{skill}</div>

      <div className="flex justify-between space-x-2">
        <Checkbox
          name={`${skill.toLowerCase()}Proficiency`}
          className="w-1/4"
        />
        <NumberInput name={`${skill.toLowerCase()}Saving`} className="w-full" />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <div className="bg-white p-2 rounded shadow space-y-2">
      <div className="uppercase font-bold text-center text-sm">Skills</div>

      <div className="grid grid-cols-3 gap-4">
        <SkillsOption skill="Acrobatics" />
        <SkillsOption skill="Animal Handling" />
        <SkillsOption skill="Arcana" />
        <SkillsOption skill="Athletics" />
        <SkillsOption skill="Deception" />
        <SkillsOption skill="History" />
        <SkillsOption skill="Insight" />
        <SkillsOption skill="Intimidation" />
        <SkillsOption skill="Investigation" />
        <SkillsOption skill="Medicine" />
        <SkillsOption skill="Nature" />
        <SkillsOption skill="Perception" />
        <SkillsOption skill="Performance" />
        <SkillsOption skill="Persuasion" />
        <SkillsOption skill="Religion" />
        <SkillsOption skill="Sleight of Hand" />
        <SkillsOption skill="Stealth" />
        <SkillsOption skill="Survival" />
      </div>
    </div>
  )
}
