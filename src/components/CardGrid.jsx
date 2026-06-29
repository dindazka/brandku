import Card from './Card'

const CardGrid = ({ features }) => {
    return (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
            <Card
            key={feature.id}
            id={feature.id}
            icon={feature.icon}
            title={feature.title} 
            subtitle={feature.subtitle}
        />
        ))}
       </div>
   ) }
export default CardGrid;

