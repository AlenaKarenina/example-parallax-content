'use client'

import { useRef } from 'react'
import lcs from './Content.module.scss'
import Picture1 from '../../public/images/1.jpg'
import Picture2 from '../../public/images/2.jpg'
import Picture3 from '../../public/images/3.jpg'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const word = 'with framer-motion'

export default function Index() {
  const container = useRef<any>(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50])
  const md = useTransform(scrollYProgress, [0, 1], [0, -150])
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250])

  const images = [
    {
      src: Picture1,
      y: 0
    },
    {
      src: Picture2,
      y: lg
    },
    {
      src: Picture3,
      y: md
    }
  ]

  return (
    <div ref={container} className={lcs.container}>
      <div className={lcs.body}>
        <motion.h1
          style={{y: sm}}
        >
          Parallax
        </motion.h1>
        <h1>Scroll</h1>
        <div className={lcs.word}>
          <p>
            {word.split('').map((letter, i) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const y = useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -50) - 25])
              return <motion.span
                style={{top: y}}
                key={`paragraph-${i}`}
              >
                {letter}
              </motion.span>
            })}
          </p>
        </div>
      </div>
      <div className={lcs.images}>
        {images.map( ({src, y}, i) => {
          return <motion.div style={{y}} key={`image-${i}`} className={lcs.image}>
            <Image
              src={src}
              placeholder='blur'
              alt='alt'
              fill
              priority
            />
          </motion.div>
        })}
      </div>
    </div>
  )
}
