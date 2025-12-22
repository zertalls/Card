import { HeaderTwo } from '@/common/components/HeaderTwo/HeaderTwo';
import styles from './InfoBlock.module.css'
import { FlexWrapper, SpanCustom } from "@/common/components";
import clsx from 'clsx';

export const InfoBlock = () => {
    return (
        <div className={styles.localeIndent}>
            <h1 className={styles.h1}>Fluted Contrast</h1>            
            <SpanCustom title='Mug / 33 cl' className={styles.span}/>
            <p className={styles.p}>Fluted Contrast represents the perfect fusion between the aesthetic and the functional. The design is elegant and modern, created out of a deep respect for Royal British history and traditions</p>
            <FlexWrapper className={clsx(styles.flexWrapperColorOption, styles.colorOptionIndent)}>
                <HeaderTwo title='Color options'/>
                <ul>
                    <li className={`${styles.preSelected} ${styles.selected}`}><div className={`${styles.circle} ${styles.blue}`}></div></li>
                    <li className={styles.preSelected}><div className={`${styles.circle} ${styles.yellow}`}></div></li>
                    <li className={styles.preSelected}><div className={`${styles.circle} ${styles.green}`}></div></li>
                    <li className={styles.preSelected}><div className={`${styles.circle} ${styles.red}`}></div></li>
                    <li className={styles.preSelected}><div className={`${styles.circle} ${styles.black}`}></div></li>
                </ul>
            </FlexWrapper>
            <FlexWrapper className={clsx(styles.flexWrapperQuantity, styles.quanityPriceIndent)}>
                <div>
                    <HeaderTwo title='Quantity'/>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div>
                    <HeaderTwo title='Price'/>
                    <SpanCustom title='eur 39,00' className={styles.spanSpec}/>
                </div>
            </FlexWrapper>
            <button className={styles.button}>Add To Basket</button>
        </div>
    );
};