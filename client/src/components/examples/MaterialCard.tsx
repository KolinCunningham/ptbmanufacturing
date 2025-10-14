import MaterialCard from '../MaterialCard'
import linenImage from '@assets/stock_images/natural_linen_fabric_b9805618.jpg'

export default function MaterialCardExample() {
  return (
    <MaterialCard 
      name="Linen"
      description="Breathable and durable natural fiber perfect for elegant, sustainable fashion"
      image={linenImage}
    />
  )
}
