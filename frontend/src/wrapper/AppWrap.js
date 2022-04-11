import React from 'react'
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} >

        </div>
    )
}

export default AppWrap