import React, {useState} from 'react'

export default function BoxWithLabel({ name, label }) {

    const [ value, setValue ] = useState()

    const container = {
        width: '100%',
        paddingBottom: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    }

    const inputStyle = {
        width: '100%',
        outline: 'none',
        padding: '0px',
        margin: '0px',
        border: 'none',
        backgroundColor: 'transparent',
        fontSize: '16px',
        borderBottom: '2px solid #777',
    }

    const labelStyle = {
        fontSize: '14px',
        position: 'relative',
        top: '-2px'
    }

    return (
        <div style={container} >
            <input value={value} onChange={e => setValue(e.target.value)} style={inputStyle}></input>
            <label style={labelStyle}>{label}</label>
        </div>
    )
}