import DynamicBackground from '@/components/DynamicBackground';
import MSPaint from '@/components/MSPaint'
import Waves from '@/components/Waves'
import Projects from '@/components/Projects'
import About from '@/components/About'

export default function ContactPage() {

return (
    <div className="relative min-h-screen">
        <DynamicBackground />
        <Projects />
        <About />
        <MSPaint />
        <Waves />
    </div>
);
}