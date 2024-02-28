import logo from './assets/logo.png'
import '../styles/Banner.css'

function Banner() {
    const titile = "La maison jungle"
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth <=5 

    console.log(currentMonth)
    console.log(isSpring)
    return  <div className='lmj-banner'>
        <div className='lmj-banner-row'>

        <img src={logo} alt='La maison jungle' className='lmj-logo'></img>
        <h1 className='lmj-titile'>{titile}</h1>

        </div>
       {isSpring ? (
        <div>Cést le printemps , remotez</div>) :
        (<div>Cen est pas le moment de remoter</div>) 
        }


    </div>

}

export default Banner