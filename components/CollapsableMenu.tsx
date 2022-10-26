/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../styles/Register.module.scss';

const CollapsableMenu = ({ show, children }: { show: boolean, children?: React.ReactNode }) => {
    return (
        <div className={styles["collapsable-menu"]} style={show ? { display: 'block' } : { display: 'none' }} >
            {children}
        </div>
    )
}

const MenuItem = ({ link, label, imgUrl, className }: {
    link: string, label: string,
    imgUrl: string, className?: any
}) => {

    return (
        <a href={link} className={`${styles["collapsable-menu-item"]} ${className}`}>
            <img src={imgUrl} alt={`${label} image`}></img>
            {label}
        </a>
    )
}
export default CollapsableMenu;
export { MenuItem };