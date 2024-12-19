import React, {useState} from 'react';
import {
  Image,
  ImageProps,
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';

type LoadingImageProps = ImageProps & {
  containerStyle?: object;
  loaderStyle?: object;
};

export const LoadingImage: React.FC<LoadingImageProps> = ({
  style,
  containerStyle,
  loaderStyle,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={[styles.container, containerStyle]}>
      <Image
        {...props}
        style={style}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
      />
      {isLoading && (
        <View
          style={[
            StyleSheet.absoluteFill,
            styles.loaderContainer,
            loaderStyle,
          ]}>
          <ActivityIndicator size="large" color="#007AFF" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  loaderContainer: {
    backgroundColor: 'rgba(211, 211, 211, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
