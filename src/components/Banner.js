import logo from './assets/logo.png'
import '../styles/Banner.css'

function Banner() {
    const titile = "La maison jungle"
    return <div className='lmj-banner'>
        <img src= {logo} alt = "La maison jungle" className='lmj-logo'></img>
        <h1 className='lmj-titile'>{titile}</h1>   
            
            </div>
}

export default Banner