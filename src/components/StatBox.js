

export default function StatBox({name, double}) {

    const container = {
        border: '2px solid #777',
        borderRadius: '8px',
        position: 'relative',
        height: '1in',
        width: double ? '2.16in' : '1in',
        marginBottom: '24px'
    }

    const labelStyle = {
        position: 'absolute',
        bottom: '-12px',
        width: '.8in',
        left: double ? '.65in' : '.09in',
        backgroundColor: 'white',
        border: '2px solid #777',
        borderRadius: '8px'
    }

    const headerStyle = {
        margin: '0px',
        fontSize: '54px',
        border: 'none',
        width: '100%',
        textAlign: 'center',
        borderRadius: '8px',
        marginTop: '8px',
        fontWeight: 'bold'
    }

    return (
        <div style={container} >
            <input style={headerStyle}></input>
            <label style={labelStyle} >{name}</label>
        </div>
    )
}