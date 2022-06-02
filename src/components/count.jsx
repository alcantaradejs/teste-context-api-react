import { useCount } from "../context/countContext";

export function Count() {

    const {count, setCount} = useCount()

    return (
        <button
            className="w-max"
            onClick={() => { setCount(count + 1) }} 
        > 
        Count: {count}
        </button>
    )
}