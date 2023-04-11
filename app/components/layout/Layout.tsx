import React, {FC, ReactNode, useEffect, useState} from 'react';
import Head from "next/head";
import FavIcon from './../../assets/images/options/yandex-disk.png'
import Script from "next/script";
interface ILayout{
    tittle:string
    children:ReactNode
}

const Layout:FC<ILayout> = ({tittle,children}) => {
    const [isLoading,setIsLoading] = useState(false)
    useEffect(()=>{
        setIsLoading(true)
        const timeout = setTimeout(()=>{
            setIsLoading(false)
        },4000)
        return ()=> clearTimeout(timeout)
    })
    return (
        <div>
            <Head>
                <title>{tittle} | Yandex-Taxi</title>
                <meta name={'description'} content={'Taxi App'}/>
                <link rel="shortcut icon" href={FavIcon.src} type={'image/png'}/>
            </Head>
            <Script
            strategy={"afterInteractive"}
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=places`}
            />
            <div style={{maxWidth:480}} className={'mx-auto relative overflow-hidden'}>
                {isLoading ? <Loader/> : children}
            </div>

        </div>
    );
};

export default Layout;