import { useEffect, useState } from "react"

const HeaderBottomItems = ({ text, hiddenXs }) => {
    const [hidden, setHidden] = useState(false)
    useEffect(() => {
        setHidden(hiddenXs)
    }, [hiddenXs])
    return (
        <div>
            <p className={`${hidden ? 'hidden' : 'flex'} sm:flex ml-2 cursor-pointer font-semibold items-center border-[1px] h-[32px] p-[2px] border-transparent hover:border-gray-200 whitespace-nowrap rounded-sm`}>
                {text}
            </p>
        </div>
    )
}

export default HeaderBottomItems
