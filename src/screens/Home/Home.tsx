import React, { useCallback, useState } from 'react';
import { View, Image, useWindowDimensions, TouchableOpacity, Text } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

import { Illustration } from '../../assets/images';
import * as Molecules from '../../components/Molecules';
import * as Organisms from '../../components/Organisms';
import { colors } from '../../constants/theme';
import styles from './styles';

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  const FirstRoute = () => (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => setIsOpen(true)} style={styles.openModalButton}>
        <Text>Open Modal</Text>
      </TouchableOpacity>
    </View>
  );

  const SecondRoute = () => (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => setIsOpen(true)} style={styles.openModalButton}>
        <Text>Open Modal</Text>
      </TouchableOpacity>
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: 'first', title: 'Timestamp feed' },
    { key: 'second', title: 'Activity feed' },
  ]);

  const renderTabBar = useCallback(
    (props: any) => (
      <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        style={styles.tab}
        labelStyle={styles.label}
        inactiveColor={colors.lightGrey}
        activeColor={colors.black}
        allowFontScaling={false}
      />
    ),
    []
  );

  return (
    <>
      <View style={styles.wrapper}>
        <Molecules.Header />
        <Image source={Illustration} style={styles.banner} />
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
      <Organisms.Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        <Molecules.Calendar />
      </Organisms.Modal>
    </>
  );
};
export default Home;
