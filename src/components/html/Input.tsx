import React from "react"

type InputProps = React.ComponentProps<'input'>

export const CustomInput = (props: InputProps) => {
    return <input type="text" value='Ha-Ha-Ha' {...props}/>
}