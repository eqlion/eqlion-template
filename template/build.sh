# yarn jetify
yarn react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
cd ./android
if [[ $1 == "apk" ]]; then
    bash ./gradlew clean app:assembleRelease -x bundleReleaseJsAndAssets
    cp app/build/outputs/apk/release/app-release.apk ~/Desktop/ProPromo.apk
else
    bash ./gradlew clean app:bundleRelease -x bundleReleaseJsAndAssets
    cp app/build/outputs/bundle/release/app-release.aab ~/Desktop/ProPromo.aab
fi
