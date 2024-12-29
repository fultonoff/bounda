import PetitText from '@/components/PetitText'
import Link from 'next/link'
import React from 'react'

const AproposSection = () => {
  return (
    <section className='center container pt-0'>
        <PetitText>
        A Propos
        </PetitText>
        <div className='max-w-2xl mt-2 text-mainColor/50'>
          <h3>Je m'appelle BOUNDA GUYLAIN, et je suis actuellement étudiant en reprise d'études dans le cadre d'une formation continue en deuxième année de Science pour l'ingénieur. Mon parcours académique et personnel est riche en expériences variées, ayant été marqué par plusieurs étapes significatives qui m'ont permis de grandir tant sur le plan éducatif que culturel.</h3>

          <div className='mt-6'>
            <Link href='/apropos' className='text-white bg-mainColor px-4 py-2 rounded-md duration-300 hover:bg-white hover:text-mainColor'>En savoir plus</Link>
          </div>
        </div>
    </section>
  )
}

export default AproposSection