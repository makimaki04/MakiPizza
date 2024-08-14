import { Home } from '../../pages'
import { AppHeader } from '../app-header/App-header'
import './index.scss'

export function App() {
    return <>
    <div className='app'>
        <AppHeader/>
        <Home></Home>
    </div>
    </>
}