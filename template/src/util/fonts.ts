import { Platform } from "react-native";

const iosAndroidFont = (
    fontAndroid: string,
    fontIos = "None",
    fontIosWeight: WEIGHTS,
    fontIosStyle: "normal" | "italic" = "normal",
) => {
    return Platform.select({
        ios: {
            fontFamily: fontIos,
            fontWeight: fontIosWeight,
            fontStyle: fontIosStyle,
        },
        android: { fontFamily: fontAndroid },
    });
};

enum WEIGHTS {
    thin = "100",
    ultra_light = "200",
    light = "300",
    regular = "400",
    medium = "500",
    semibold = "600",
    bold = "bold",
    normal = "normal",
}

const FONTS = {
    SF_Pro: {
        Display: {
            bold: iosAndroidFont(
                "SFProDisplay-Bold",
                "SF Pro Display",
                WEIGHTS.bold,
            ),
            bold_italic: iosAndroidFont(
                "SFProDisplay-BoldItalic",
                "SF Pro Display",
                WEIGHTS.bold,
                "italic",
            ),
            light: iosAndroidFont(
                "SFProDisplay-Light",
                "SF Pro Display",
                WEIGHTS.light,
            ),
            light_italic: iosAndroidFont(
                "SFProDisplay-LightItalic",
                "SF Pro Display",
                WEIGHTS.light,
                "italic",
            ),
            medium: iosAndroidFont(
                "SFProDisplay-Medium",
                "SF Pro Display",
                WEIGHTS.medium,
            ),
            medium_italic: iosAndroidFont(
                "SFProDisplay-MediumItalic",
                "SF Pro Display",
                WEIGHTS.medium,
                "italic",
            ),
            regular: iosAndroidFont(
                "SFProDisplay-Regular",
                "SF Pro Display",
                WEIGHTS.regular,
            ),
            regular_italic: iosAndroidFont(
                "SFProDisplay-RegularItalic",
                "SF Pro Display",
                WEIGHTS["regular"],
                "italic",
            ),
            thin: iosAndroidFont(
                "SFProDisplay-Thin",
                "SF Pro Display",
                WEIGHTS.thin,
            ),
            thin_italic: iosAndroidFont(
                "SFProDisplay-ThinItalic",
                "SF Pro Display",
                WEIGHTS.thin,
                "italic",
            ),
            ultra_light: iosAndroidFont(
                "SFProDisplay-Ultralight",
                "SF Pro Display",
                WEIGHTS.ultra_light,
            ),
            ultra_light_italic: iosAndroidFont(
                "SFProDisplay-UltralightItalic",
                "SF Pro Display",
                WEIGHTS.ultra_light,
                "italic",
            ),
        },
    },
};

export { WEIGHTS, FONTS };

// Usage:

// const Component: FC = () => {
//     return <Text style={styles.text}>Hey!</Text>
// }

// const styles = StyleSheet.create({
//     text: {
//         ...FONTS.SF_Pro.Display.medium,
//     },
// });
