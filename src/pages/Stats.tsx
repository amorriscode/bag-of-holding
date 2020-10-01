import React from 'react'

import Container from '../components/Container'
import CharacterInfo from '../components/CharacterInfo'
import StatBlocks from '../components/StatBlocks'
import Inspiration from '../components/Inspiration'
import ProficiencyBonus from '../components/ProficiencyBonus'
import SavingThrows from '../components/SavingThrows'
import Skills from '../components/Skills'

export default function Stats() {
  return (
    <Container>
      <CharacterInfo />

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 grid grid-cols-2 gap-4">
          <StatBlocks />

          <div>
            <Inspiration />
            <ProficiencyBonus />
            <SavingThrows />
            <Skills />
          </div>
        </div>
      </div>
    </Container>
  )
}
