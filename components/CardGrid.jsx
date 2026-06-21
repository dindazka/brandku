import Card from './Card'

const CardGrid = ({ features }) => {
    console.log(feaatures, 'src');
    return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        Mengapa BrandKu?
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
            <Card 
            key={feature.id}
            icon={feature.icon}
            tittle={feature.tittle} 
            subtitle={feature.subtittle}
        />
        ))}
       </div>
    </section>
   ) 


export default CardGrid;

