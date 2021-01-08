import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, { 
  Easing, 
  Extrapolate, 
  interpolate, 
  useAnimatedProps, 
  useSharedValue, 
  withDelay, 
  withRepeat, 
  withTiming, 
} from 'react-native-reanimated';
import { Svg, Circle } from 'react-native-svg';

import colors from '../constants/Colors';

const { width } = Dimensions.get('window');
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

// animation timing functions configuration
const EASING = Easing.bezier(0, 0.2, 0.8, 1);
const DURATION = 1000;
const DELAY = DURATION * 0.5;
const TIMING_CONFIG = {
  duration: DURATION,
  easing: EASING,
};

// loader sizes
const ARC_SIZE = width * 0.5;
const CX = ARC_SIZE * 0.5;
const CY = ARC_SIZE * 0.5;
const STROKE_WIDTH = 10;
const OUTPUT_RANGE = [0, (ARC_SIZE / 2) - STROKE_WIDTH];

// loader colors
const RING_COLOR = colors.accent;
const styles = StyleSheet.create({
  main: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rings: {
    width: ARC_SIZE,
    height: ARC_SIZE,
  },
});

function Loader() {
  const progress = useSharedValue(0);
  const progressDelayed = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(withTiming(1, TIMING_CONFIG), -1, false);
    progressDelayed.value = withDelay(DELAY, withRepeat(withTiming(1, TIMING_CONFIG), -1, false));
  }, []);

  const animatedProps = useAnimatedProps(() => {
    const size = interpolate(progress.value, [0, 1], OUTPUT_RANGE, Extrapolate.CLAMP);
    return {
      r: size,
      opacity: 1 - progress.value,
    }
  }, [progress]);

  const animatedProps2 = useAnimatedProps(() => {
    const size = interpolate(progressDelayed.value, [0, 1], OUTPUT_RANGE, Extrapolate.CLAMP);
    return {
      r: size,
      opacity: 1 - progressDelayed.value,
    }
  }, [progressDelayed]);
  
  return (
    <View style={styles.main}>
      <Svg style={styles.rings}>
        <AnimatedCircle
          cx={CX}
          cy={CY}
          fill="none"
          stroke={RING_COLOR}
          strokeWidth={STROKE_WIDTH}
          animatedProps={animatedProps}
        />
        <AnimatedCircle
          cx={CX}
          cy={CY}
          fill="none"
          stroke={RING_COLOR}
          strokeWidth={STROKE_WIDTH}
          animatedProps={animatedProps2}
        />
      </Svg>
    </View>
  );
}

export default Loader;
