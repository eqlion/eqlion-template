import { Dimensions, PixelRatio } from "react-native";

// The dimensions set as default are the viewport size of iPhone X
const { height, width } = Dimensions.get("window");

export const getHeight = (h: number) =>
    Math.round(PixelRatio.roundToNearestPixel((height / 812) * h));

export const getWidth = (w: number) =>
    Math.round(PixelRatio.roundToNearestPixel((width / 375) * w));

export const font = (f: number) =>
    Math.round(
        PixelRatio.roundToNearestPixel(Math.min(width / 375, height / 812) * f),
    );
