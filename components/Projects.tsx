import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Projects({}: Props) {
  const projects= [1,2,3,4,5]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once:true }}
      className='h-screen relative overflow-hidden flex-col text-left md:flex-row max-w-full justify evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thum-[#F7AB0A]/80'>
        {projects.map((project, i) => (
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once:true }}
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/600px-Spotify_App_Logo.svg.png?20210620075506'
              alt=''
            />

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className ='underline decoration-[#F7AB0A]/50'>
                  Case Study {i + 1} of {projects.length}:
                </span>{' '}
                Spotify Clone
              </h4>

              <p className='text-lg text-center md:text-left'>
                EXPLANATION   kjlkjl lks jslksdajf l;kjsa;lkdfj lk j
                 asjdl;fkjl;ksadjf lkjsdal;fkjlksajd
                 jl;fksdajflkjsdl;kfjlsakdjf
                 ojasdflkjlskdajfslkjsdflkjsdlkfjdlskjflksdjf
                 alskdfjlsdjfl;kjsa sa df sadf sf
              </p>
            </div>
          </div>
        ))}

      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects