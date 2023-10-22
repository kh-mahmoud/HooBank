import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

function App() {

  return (
    <div className='bg-primary w-full overflow-hidden'>
              <Navbar/>

       <div className='bg-primary flexStart'>
          <div className='boxWidth'>
             <Hero/>
          </div>
       </div>

       <div className='bg-primary paddingX flexStart'>
          <div className='boxWidth'>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
          </div>
       </div>


    </div>
  )
}

export default App
