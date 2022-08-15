import './index.scss'
import { Item } from '../../dataStructure'


interface Props {
    data: Item
}

const NavItem:React.FC<Props> =  ({ data }) => {
    const getColor = (v: string) =>{
        const isF = v.slice(0,1) === '-'
        return isF ? 'f' : 'z'
    }
    return (
        <a className='item-box' href={data.explorer || ''} target="_blank">
            <p className='item-title'>{data.name}</p>
            <p className='item-money'>${data.priceUsd}</p>
            <div className='item-footer'>
                <div className='item-footer-i'>
                    <p>volume</p>
                    <p>{data.volumeUsd24Hr}</p>
                </div>
                <div className='item-footer-i'>
                    <p>change</p>
                    <p className={getColor(data.changePercent24Hr || '')}>{data.changePercent24Hr}</p>
                </div>
            </div>
        </a>
    )
}

export default NavItem;