import imagePreview1 from '@/app/assets/imageBlock/imagePreview1.svg'
import imagePreview2 from '@/app/assets/imageBlock/imagePreview2.svg'
import imageMain from '@/app/assets/imageBlock/imageMain.svg'
import { Image } from '@/common/components/Image/Image'
import { FlexWrapper } from '@/common/components';

export const ImageBlock = () => {
    return (
        <FlexWrapper direction='column' align='center' gap={145}>
            <Image src={imageMain} alt='image-main' widthPx='300px' heightPx='322px'/>
            <FlexWrapper gap={75}>
                <Image src={imagePreview1} alt='image-preview1' widthPx='58px' heightPx='58px'/>
                <Image src={imagePreview2} alt='image-preview2' widthPx='58px' heightPx='58px'/>
            </FlexWrapper>
        </FlexWrapper>
    );
};