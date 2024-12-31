import PetitText from '@/components/PetitText'
import { educationList } from '@/data/education'
import Image from 'next/image'
import React from 'react'

const EducationComponent = () => {
  return (
    <section className=''>
        <div className='center container'>
        <PetitText>
        Education
        </PetitText>
        
        <div className='flex flex-col gap-4 mt-5'>
        {educationList.map((education)=>{
            return(

        <div className='flex justify-between items-center' key={education.id}>
            <div className='flex items-start gap-2'>
                <div className='border size-16 rounded-full overflow-hidden'>
                    <Image src={education?.image} alt='universite' className='h-full w-full object-cover'/>
                </div>
                <div className='font-bold'>{education.institution}</div>
            </div>
            <div className='text-sm text-mainColor/60'>{education.name}</div>
        </div>
            )
        })}
        </div>
        </div>
    </section>
  )
}

export default EducationComponent