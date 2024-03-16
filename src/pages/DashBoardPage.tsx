import React from 'react';
import { Excalidraw } from "@excalidraw/excalidraw";
import styles from './DashBoardPage.module.scss';

const DashBoardPage = () => {
    return (
        <div className={styles.dashboard}>
            <Excalidraw />
        </div>
    );
}

export default DashBoardPage;
