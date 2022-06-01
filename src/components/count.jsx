import { useState } from "react"

export function Count() {
    const [count, setCount] = useState(0)

    return (
        <button
            className="w-max"
            onClick={() => { setCount(count + 1) }} 
        > 
        Count: {count} 
        </button>
    )
}