import React from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import Search from '../../components/Search/Search';
import { COLORS, FONTFAMILY, SPACING } from '../../theme/Theme';

interface MenuTab {
  name: string;
  background: string;
}

const Bill = () => {
  const menuTabs: MenuTab[] = [
    {
      name: "Lịch Đặt",
      background: '#ea5656'
    },
    {
      name: "Lịch hủy",
      background: '#00eaff'
    },
    {
      name: "Hoàn thành",
      background: '#48e948'
    },
    {
      name: "Đã Đánh giá",
      background: '#e4e45b'
    }
  ];

  const [tabIndexActive, setTabIndexActive] = React.useState(0);
  const searchHandler = () => {
    console.log("searchHandler");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Search searchHandler={searchHandler} props={{}} />

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 10,
            marginTop: 10,
            paddingHorizontal: 20,
            paddingVertical: 5,
          }}
          data={menuTabs}
          renderItem={({ item, index }) => (
            <View >
              <TouchableOpacity onPress={() => setTabIndexActive(index)}>
                <Text
                  style={{
                    fontSize: SPACING.space_16,
                    fontFamily: FONTFAMILY.Roboto_Medium,
                    textDecorationLine: tabIndexActive === index ? 'underline' : 'none',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View style={{ flex: 1 }} >
          {
            menuTabs[tabIndexActive].name === "Lịch Đặt" ? (
              <View style={{ backgroundColor: menuTabs[tabIndexActive].background, flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                {/* Content for "Lịch Đặt" tab */}
                <Text style={{
                  fontSize: SPACING.space_32,
                  fontFamily: FONTFAMILY.Roboto_Medium,
                  color: 'white'
                }} >{menuTabs[tabIndexActive].name}</Text>
              </View>
            ) : menuTabs[tabIndexActive].name === "Lịch hủy" ? (
              <View style={{ backgroundColor: menuTabs[tabIndexActive].background, flex: 1, alignItems: 'center', justifyContent: 'center' }}  >
                {/* Content for "Lịch hủy" tab */}
                <Text style={{
                  fontSize: SPACING.space_32,
                  fontFamily: FONTFAMILY.Roboto_Medium,
                  color: 'white'
                }} >{menuTabs[tabIndexActive].name}</Text>
              </View>
            ) : menuTabs[tabIndexActive].name === "Hoàn thành" ? (
              <View style={{ backgroundColor: menuTabs[tabIndexActive].background, flex: 1, alignItems: 'center', justifyContent: 'center' }}  >
                {/* Content for "Hoàn thành" tab */}
                <Text style={{
                  fontSize: SPACING.space_32,
                  fontFamily: FONTFAMILY.Roboto_Medium,
                  color: 'white'
                }} >{menuTabs[tabIndexActive].name}</Text>
              </View>
            ) : menuTabs[tabIndexActive].name === "Đã Đánh giá" ? (
              <View style={{ backgroundColor: menuTabs[tabIndexActive].background, flex: 1, alignItems: 'center', justifyContent: 'center' }}  >
                {/* Content for "Đã Đánh giá" tab */}
                <Text style={{
                  fontSize: SPACING.space_32,
                  fontFamily: FONTFAMILY.Roboto_Medium,
                  color: 'white'
                }} >{menuTabs[tabIndexActive].name}</Text>
              </View>
            ) : null
          }
        </View>


    </SafeAreaView>
  );
};

export default Bill;
