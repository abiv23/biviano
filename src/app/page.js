import Hero from '../components/Hero'
import MSPaint from '../components/MSPaint'
import Waves from '../components/Waves'
import Carousel from '../components/Carousel'
import DynamicBackground from '../components/DynamicBackground'

export default function Home() {
  return (
    <>
      <Hero />
      <DynamicBackground />
      <Carousel />
      <MSPaint />
      <Waves />
    </>
  );
}