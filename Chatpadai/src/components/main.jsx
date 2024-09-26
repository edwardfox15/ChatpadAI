import {AiOutlinePlus , AiOutlineLock , AiOutlineKey} from 'react-icons/ai'
import {GiArtificialHive , GiFlowerStar} from 'react-icons/gi'
import {MdAttachMoney ,MdOutlineCloudDownload} from 'react-icons/md'
import './main.css'
import { useState } from 'react'

const Main = () => {

    const [newList, setNewList] = useState([])

    const handleNewList = () => {
        const addItems = [...newList,
            {
                num:1,
                name:'unexplained'
            }
        ]

        setNewList(addItems)
    }

    const renderGro = () => {
        return newList.map((item, index) => {
            <div key={item.num} className='container d-flex flex-row gap-4'>
                <div>
                    <p className='text-white'>{item.num}</p>
                </div>
                <div>
                    <p className='text-white'>{item .name}</p>
                </div>
            </div>
        })
    }

    return(
        <div className='d-flex flex-row'>
            <div className='Chat_nav border-end d-flex flex-column p-2'>
                <div className='logo_nav d-flex mx-auto'>
                    <a href="">
                        <h2 style={{color:'#089268'}}>
                            Chatpad AI
                        </h2>
                    </a>
                </div>

                {console.log(newList)}

                <div className='w-100 d-flex mx-auto gap-3 mb-3'>
                    <button type='button' className='d-flex button_transparent'>Chats</button>
                    <button type='button' className='d-flex button_transparent'>Prompts</button>
                </div>

                <hr  className='text-white mt-0'/>

                <div className='w-100 d-flex'>
                    <button type='button' onClick={handleNewList} className='d-flex Add_bu mx-auto pt-2'>
                       <AiOutlinePlus className='p-2 fs-2' /> NewChat
                    </button>
                </div>

                <div className='d-flex fs-3'>
                    {renderGro()}
                </div>

            </div>
            <div className='main_Tap d-flex flex-column'>
                <div className='w-100 d-flex flex-column mt-5' style={{padding:'10rem'}}>
                    <h1 className='text-white'><GiArtificialHive style={{color:'#089268'}}/> Chatpad AI</h1>
                    <p className='text-white fs-4 fw-light'>Not just another ChatGPT user-interface</p>

                    <div className='Carts d-flex'>
                        <div className='Carts_container d-flex'>
                            <div className='d-flex flex-row mx-auto'>
                                <div className='d-flex flex-column w-20 text-white'>
                                    <div className='d-flex border border-success rounded-circle p-2 mb-3' style={{width:'17%'}}>
                                        <MdAttachMoney className='fs-2 d-flex mx-auto' style={{color:'#089268'}}/>
                                    </div>
                                    <h4 className='d-flex'>Free and open source</h4>
                                    <p className='fs-5 fw-light w-50'>This app is provided for free and the source code is available on Github</p>
                                </div>
                                <div className='d-flex flex-column w-20 text-white'>
                                    <div className='d-flex border border-success rounded-circle p-2 mb-3' style={{width:'17%'}}>
                                        <AiOutlineLock className='fs-2 d-flex mx-auto' style={{color:'#089268'}}/>
                                    </div>
                                    <h4 className='d-flex'>Privacy focused</h4>
                                    <p className='fs-5 fw-light w-50'>No thinking, no cookies, no bullshit. All your data is stored locally.</p>
                                </div>
                                <div className='d-flex flex-column w-20 text-white'>
                                    <div className='d-flex border border-success rounded-circle p-2 mb-3' style={{width:'17%'}}>
                                        < GiFlowerStar className='fs-2 d-flex mx-auto' style={{color:'#089268'}}/>
                                    </div>
                                    <h4 className='d-flex'>Best experience</h4>
                                    <p className='fs-5 fw-light w-50'>Crafted with love and care to provide the best experience possible</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-100 buttons_tap_container d-flex mt-5'>
                        <div className='w-100 d-flex flex-row gap-3'>
                            <button type='button' className='d-flex w-25 btn btn-success pt-2'>
                                <p><AiOutlineKey className=' fs-1'/> Enter OpenAI Key</p>
                            </button>
                            <button type='button' className='btn btn-outline-success w-25 d-flex pt-2'>
                                <p><MdOutlineCloudDownload className=' fs-1'/> Enter OpenAI Key</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main