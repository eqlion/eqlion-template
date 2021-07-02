import { PixelRatio, useWindowDimensions } from "react-native";

// The dimensions set as default are the viewport size of iPhone X
export default (f: number) => {
    const { width, height } = useWindowDimensions();
    return Math.round(
        PixelRatio.roundToNearestPixel(Math.min(width / 375, height / 812) * f),
    );
};
