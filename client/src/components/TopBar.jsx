import { Link } from 'wouter'

const TopBar = ({ brands }) => {
  return (
    <div className='w-screen h-full bg-black'>
      <div className='px-3 py-5 flex flex-col'>
        {/* brands */}
        <div className='flex items-center flex-wrap gap-5'>
          {brands.map(brand => (
            <div key={brand.id}>
              <Link href="/products">
                <img src={brand.image} className='w-14' alt="" />
              </Link>
            </div>
          ))}
        </div>

        {/* contact data */}
        <div></div>
      </div>
    </div>
  )
}

export default TopBar