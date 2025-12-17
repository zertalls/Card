import { HeaderTwo } from '@/common/components/HeaderTwo/HeaderTwo';
import styles from './InfoBlock.module.css'
import { FlexWrapper, SpanCustom } from "@/common/components";

export const InfoBlock = () => {
    return (
        <div>
            <h1 className={styles.h1}>Fluted Contrast</h1>
            <SpanCustom title="Mug / 33 cl"/>
            <p className={styles.p}>Fluted Contrast represents the perfect fusion between the aesthetic and the functional. The design is elegant and modern, created out of a deep respect for Royal British history and traditions</p>
            <FlexWrapper>
                <HeaderTwo title='Color options'/>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </FlexWrapper>
            <FlexWrapper>
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
                    <SpanCustom title='eur 39,00'/>
                </div>
            </FlexWrapper>
            <button className={styles.button}>Add To Basket</button>
        </div>
    );
};