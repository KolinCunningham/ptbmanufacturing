import ProcessStep from '../ProcessStep'
import studioImage from '@assets/stock_images/fashion_design_studi_68ed279b.jpg'

export default function ProcessStepExample() {
  return (
    <ProcessStep 
      number="01"
      title="Concept & Design"
      description="We begin by understanding your vision, translating ideas into technical patterns using advanced CAD systems combined with traditional pattern making expertise."
      image={studioImage}
      reverse={false}
    />
  )
}
