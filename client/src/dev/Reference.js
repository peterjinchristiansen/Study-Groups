const colors = [
    {
        name: 'sky',
        code: '#7bdff2ff'
    }, {
        name: 'celeste',
        code: '#b2f7efff'
    }, {
        name: 'mint',
        code: '#eff7f6ff'
    }, {
        name: 'pink',
        code: '#f7d6e0ff'
    }, {
        name: 'candy',
        code: '#f2b5d4ff'
    }, {
        name: 'ruby',
        code: '#a31621ff'
    }, {
        name: 'beau',
        code: '#bfdbf7ff'
    }, {
        name: 'dye',
        code: '#053c5eff'
    }, {
        name: 'seaweed',
        code: '#1f7a8cff'
    }, {
        name: 'red',
        code: '#db222aff'
    }
]

const fonts = [
    {
        variable: 'logo',
        font: 'Merienda'
    }, {
        variable: 'heading',
        font: 'Permanent Marker'
    }, {
        variable: 'fancy',
        font: 'Courgette'
    }, {
        variable: 'handwriting',
        font: 'Architects Daughter'
    }, {
        variable: 'old',
        font: 'IM Fell English SC'
    }
]

const Reference = () => {
    const getColor = ({ name, code }) => {
        return(
            <div 
                key={name} 
                style={{backgroundColor: code}}
            >
                <h2>{name}</h2>
            </div>
        )
    }

    const getFont = ({variable, font}) => {
        return <h2 style={{fontFamily: font}}>{variable}</h2>
    }

    return(
        <div style={{marginTop: 500}}>
            {colors.map(color => getColor(color))}
            {fonts.map(font => getFont(font))}
        </div>
    )
}

export default Reference