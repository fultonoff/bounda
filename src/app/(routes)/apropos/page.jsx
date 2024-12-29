import Image from 'next/image'
import studentImage from '../../../images/etudiant.jpg'
const Apropos = () => {
  return (
    <main>
      
      <div className='container center py-32 flex flex-col md:flex-row md:items-start gap-8'>
    <div className=' md:w-[30%]'>
      <Image src={studentImage} alt='etudiant' className='h-full w-full object-cover'/>
    </div>
    <div className='flex md:w-[70%] flex-col gap-8 text-sm lg:text-base'>
      <p>Tout a commencé à Brazzaville, où j'ai suivi mon cycle de lycée. Ces années ont forgé ma passion pour les sciences et la technologie, des domaines qui m'ont toujours fasciné. Mon intérêt pour la compréhension du monde physique et pour l'innovation s'est développé grâce aux cours suivis à cette époque.</p>
      <p>Après l'obtention de mon baccalauréat, j'ai décidé de partir en Ukraine pour poursuivre mes études. J'ai débuté à Kiev, la capitale, où j'ai appris la langue russe à l'université de Taras Chevtchenko, une étape clé pour m'intégrer au système éducatif local. Ensuite, j'ai poursuivi mes études à Kirovograd (aujourd'hui Kropyvnytskyi), où j'ai intégré l'Académie d'aviation d'Ukraine. Cette institution m'a permis de développer de solides bases en ingénierie et de me familiariser avec des concepts avancés dans le domaine de l'aviation.</p>
      <p>Après plusieurs années en Ukraine, j'ai souhaité diversifier mon parcours et relever de nouveaux défis en France. Actuellement, je suis étudiant à l'Université Paris-Saclay, sur le campus d'Évry-Courcouronnes. Cette expérience me permet de me spécialiser tout en évoluant dans un environnement académique stimulant.</p>
      <p>Ces expériences m'ont appris à m'adapter à différents environnements et m'ont permis de développer des compétences essentielles pour ma carrière d'ingénieur. Je suis également passionné par l'apprentissage des cultures et des langues, ayant acquis des compétences en russe en Ukraine et renforcé mon français en France.</p>
      <p>Mon parcours reflète mon ambition et ma volonté de me dépasser. Mon objectif est de combiner connaissances théoriques et compétences pratiques pour résoudre des problèmes complexes et contribuer au domaine des sciences et de l'ingénierie.</p>
    </div>
      </div>
    </main>
  )
}

export default Apropos