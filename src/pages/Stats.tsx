import React from 'react'

import Container from '../components/Container'

import CharacterInfo from '../components/CharacterInfo'

import AbilityScores from '../components/AbilityScores'

import Inspiration from '../components/Inspiration'
import ProficiencyBonus from '../components/ProficiencyBonus'
import SavingThrows from '../components/SavingThrows'
import Skills from '../components/Skills'

import ArmorClass from '../components/ArmorClass'
import Initiative from '../components/Initiative'
import Speed from '../components/Speed'
import HitPoints from '../components/HitPoints'
import HitDice from '../components/HitDice'
import DeathSaves from '../components/DeathSaves'

import AttacksAndSpellcasting from '../components/AttacksAndSpellcasting'

export default function Stats() {
  return (
    <Container>
      <CharacterInfo />

      <div className="grid grid-cols-6 gap-6">
        <div className="space-y-6 col-span-1 row-span-2">
          <Inspiration />
          <AbilityScores />
        </div>

        <div className="col-span-2 space-y-6 row-span-1">
          <ProficiencyBonus />
          <SavingThrows />
        </div>

        <div className="space-y-6 col-span-3 row-span-1">
          <div className="grid grid-cols-3 gap-6">
            <ArmorClass />
            <Initiative />
            <Speed />
          </div>

          <HitPoints />

          <div className="grid grid-cols-2 gap-6">
            <HitDice />
            <DeathSaves />
          </div>

          <div className="col-span-2">
            <AttacksAndSpellcasting />
          </div>
        </div>

        <div className="row-span-1 col-span-5">
          <Skills />
        </div>
      </div>
    </Container>
  )
}
