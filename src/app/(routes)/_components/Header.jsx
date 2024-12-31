import Image from 'next/image'
import boudaImage from '../../../images/bounda.webp'
const Header = () => {

  console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  return (
    <header className='center container'>
        <div className='flex gap-2 flex-col-reverse md:flex-row items-center'>
        <div>

        <h1 className='text-xl md:text-4xl lg:text-6xl font-bold text-mainColor'>Salut, Je suis Guylain 👋</h1>
        <p className='text-mainColor/50 text-xl font-medium mt-2'>Etudiant en formation Continue.</p>
        </div>
        <div className='h-32 border rounded-full overflow-hidden'>
            <Image src={boudaImage} alt='guylain' className='h-full w-full object-cover object-center'/>
        </div>
        </div>
    </header>
  )
}

export default Header