import { useRef } from "react";

export const useDebounce = (fn) => {
    const timer = useRef(null)

    const debounced = (e) => {
        if (timer.current) clearTimeout(timer.current)
        timer.current = setTimeout(() => {
            fn(e)
        }, 500)
    }

    return debounced
}