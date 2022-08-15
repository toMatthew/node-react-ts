import { useState, useEffect } from 'react';
import NavItem from '../../compoments/navItem'
import './index.scss'
import { Item, ItemListType } from '../../dataStructure'
import http from '../../utils/http'

function Home () {
    const [ navData, setNavData ] = useState<ItemListType>([])
    const getData = () =>{
        http.post('money/list', {id: 0}).then(res => 
            setNavData(res.data)
        )
    }
    // console.log(data.data)
    useEffect(()=>{
        getData()
    }, [])
    return (
        <div className='contanier'>
            <h1 className='title'>Cyptocurrency Realtime Price</h1>
            <div className="nav-box">
                {
                    navData.map((i:Item)=>{ 
                        // console.log(item)
                        return <NavItem data={i} key={i.id}></NavItem>
                    })
                }
            </div>
        </div>
    )
}


export default Home;