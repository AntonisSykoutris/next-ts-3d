'use client'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Scroll, ScrollControls } from '@react-three/drei'
import { MotionConfig } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { framerMotionConfig } from '@/lib/utils'
import FirstSection from '@/components/FirstSection/FirstSection'
import SecondSection from '@/components/SecondSection/SecondSection'
import ThirdSection from '@/components/ThirdSection/ThirdSection'
// import { ScrollManager } from '@/components/General/ScrollManager'

gsap.registerPlugin(ScrollTrigger)
export default function Home() {
  // const [section, setSection] = useState(0)
  return (
    <section className='h-screen w-full'>
      <MotionConfig
        transition={{
          ...framerMotionConfig
        }}
      >
        <Canvas camera={{ position: [1, 1, 5], near: 0.01 }}>
          <Environment preset='city' />
          <ScrollControls pages={3} damping={0.25}>
            {/* <ScrollManager section={section} onSectionChange={setSection} /> Uncomment if you desire section snap on scroll */}
            {/* Add your 3D OBJECT HERE */}
            <Scroll html style={{ width: '100%' }}>
              <FirstSection />
              <SecondSection />
              <ThirdSection />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </MotionConfig>
    </section>
  )
}
