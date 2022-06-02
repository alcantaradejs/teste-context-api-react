import { useCount } from "../context/countContext"

export function Mirror() {

    const {count} = useCount()

    return (
        <div> mirror: {count} </div>
    )
}