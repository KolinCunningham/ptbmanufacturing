import ServiceCard from '../ServiceCard'
import { Scissors } from 'lucide-react'

export default function ServiceCardExample() {
  return (
    <ServiceCard 
      icon={Scissors}
      title="Pattern Making"
      description="Precision pattern development using CAD technology and traditional craftsmanship to ensure perfect fit and construction."
    />
  )
}
