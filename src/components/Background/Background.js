import * as React from 'react';
import { SafeAreaView } from 'react-native';

type Props = {
  backgroundColor: string,
  style: any,
  children: React.Node
};

const Background = ({
  backgroundColor,
  style = { flexDirection: 'column' },
  children
}: Props) => (
  <SafeAreaView style={[{ flex: 1, backgroundColor }, style]}>
    {children}
  </SafeAreaView>
);

export default Background;
