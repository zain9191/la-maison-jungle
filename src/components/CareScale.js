import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? (
        <img src={Sun} alt='sun-icon' />
    ) : (
        <img src={Water} alt='water-icon' />
    )

    const handleCareClick = (careType, scaleValue) => {
        const careLevel = ['peu', 'modérément', 'beaucoup'][scaleValue - 1];
		console.log(careLevel)
        const careTypeText = careType === 'light' ? 'de lumière' : "d'arrosage";
        alert(`Cette plante requiert ${careLevel} ${careTypeText}`);
    }

    return (
        <div>
            {range.map((rangeElem) => (
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()} onClick={() => handleCareClick(careType, scaleValue)}>
                        {scaleType}
                    </span>
                ) : null
            ))}
        </div>
    )
}

export default CareScale
