import { useEffect, useState } from 'react';



export const usePopup = () => {
    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        window.scrollTo(0,0)
        document.querySelector('.overlay')?.classList.toggle('open')
        document.querySelector('.body')?.classList.toggle('overlow-hidden')
        setOpen(!open)
    }

    const closePopup = () => {
        window.scrollTo(0,0)
        document.querySelector('.overlay')?.classList.remove('open')
        document.querySelector('.body')?.classList.remove('overlow-hidden')
        setOpen(false)
    }

    useEffect(() => {
        const overlay = document.querySelector('.overlay')

        overlay?.addEventListener('click', closePopup)

        return () => overlay?.removeEventListener('click',closePopup)
    }, [open])

    return {toggleOpen, open, closePopup}
}