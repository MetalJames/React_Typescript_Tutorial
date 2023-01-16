import { useRef, useEffect } from "react";

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    // if we know taht our value is not null we can use exclamation mark
    //const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus()
        //then we dont need to say this is optional
        //inputRef.current.focus()
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}