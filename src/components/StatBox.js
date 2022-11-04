

export default function StatBox({name, value}) {

    const container = {
        border: '2px solid #777',
        borderRadius: '8px',
        position: 'relative',
        height: '1in',
        width: '1in',
        marginBottom: '24px'
    }

    const labelStyle = {
        position: 'absolute',
        bottom: '-12px',
        width: '.8in',
        left: '.09in',
        backgroundColor: 'white',
        border: '2px solid #777',
        borderRadius: '8px'
    }

    const headerStyle = {
        margin: '0px',
        fontSize: '54px'
    }

    return (
        <div style={container} >
            <h2 style={headerStyle} >{value}</h2>
            <label style={labelStyle} >{name}</label>
        </div>
    )
}