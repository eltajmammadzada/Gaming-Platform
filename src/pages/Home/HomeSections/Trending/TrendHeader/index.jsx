import Button from '../../../../../common/Button'

export default function TrendHeader() {
 return (
  <div className="flex items-center justify-between pb-10">
   <h3 className="lg:text-4xl md:text-3xl text-2xl font-bold">
    Currently Trending Games
   </h3>
   <Button variant="danger">SEE ALL</Button>
  </div>
 )
}
