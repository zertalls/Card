import imagePreview1 from '@/app/assets/imageBlock/imagePreview1.svg'
import imagePreview2 from '@/app/assets/imageBlock/imagePreview2.svg'
import imageMain from '@/app/assets/imageBlock/imageMain.svg'
import { Image } from '@/common/components/Image/Image'
import { FlexWrapper } from '@/common/components';
import styles from './ImageBlock.module.css'
import clsx from 'clsx';

export const ImageBlock = () => {
    return (
        <FlexWrapper className={clsx(styles.container, styles.flexWrapperMain)}>
            <Image src={imageMain} alt='image-main' widthPx='300px' heightPx='322px'/>
            <FlexWrapper className={clsx(styles.flexWrapperSecondary)}>
                <div className={`${styles.preview} ${styles.selected}`}>
                    <Image src={imagePreview1} alt='image-preview1' widthPx='58px' heightPx='58px'/>
                </div>
                <div className={styles.preview}>
                    <Image src={imagePreview2} alt='image-preview2' widthPx='58px' heightPx='58px'/>
                </div> 
            </FlexWrapper>
        </FlexWrapper>
    );
};