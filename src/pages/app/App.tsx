import { useEffect, useState } from 'react';
import { AppHeader, Home } from '../../components'
import './index.scss'

export const App = () => {
    const [showFloatingButtons, setShowFloatingButtons] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const threshold = 95;
            setShowFloatingButtons(scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return <>
    <div className='app'>
        <AppHeader showFloatingButtons={showFloatingButtons} />
        <Home showFloatingButtons={showFloatingButtons} />
    </div>
    </>
}