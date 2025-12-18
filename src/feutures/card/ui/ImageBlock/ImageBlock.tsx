import imagePreview1 from '@/app/assets/imageBlock/imagePreview1.svg'
import imagePreview2 from '@/app/assets/imageBlock/imagePreview2.svg'
import imageMain from '@/app/assets/imageBlock/imageMain.svg'
import { Image } from '@/common/components/Image/Image'
import { FlexWrapper } from '@/common/components';
import styles from './ImageBlock.module.css'

export const ImageBlock = () => {
    return (
        <FlexWrapper direction='column' align='center' gap={145} className={styles.container}>
            <Image src={imageMain} alt='image-main' widthPx='300px' heightPx='322px'/>
            <FlexWrapper gap={75}>
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