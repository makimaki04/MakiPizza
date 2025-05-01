import { Home } from '../../pages'
import { AppHeader } from '../app-header/App-header'
import './index.scss'

export const App = () => {
    return <>
    <div className='app'>
        <AppHeader/>
        <Home></Home>
    </div>
    </>
}