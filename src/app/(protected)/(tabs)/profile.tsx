import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingsItem from '~/src/components/profile/settings-item';
import { Icons } from '~/src/constants/icons';
const Profile = () => {
  return (
    // For some reason putting the ImageBackground below the safeareva view doesn't work
    <View className=" flex-1">
      <ImageBackground
        source={require('~/assets/dot-dot-bg.png')}
        resizeMode="repeat"
        style={{ flex: 1 }}>
        <SafeAreaView className="flex-1  px-4  ">
          <ScrollView showsVerticalScrollIndicator={false}>
            {/*Container for top bar */}
            <View className=" mb-5 flex-row items-center  justify-between ">
              <Text className=" text-lg">Profile</Text>
              <Image className=" size-7" source={Icons.privacyPolicy} />
            </View>

            {/* Container for Avatar and text */}
            <View
              className="  mb-4 flex-col items-center 
              justify-center gap-3  ">
              <Image
                source={require('~/assets/images/spin-card.png')}
                className="  size-32 rounded-full"
              />
              <Text className=" font-rubik-medium  w-full text-center  text-xl  uppercase">
                Tausif
              </Text>
            </View>

            {/*  for horizontal line */}
            <View className=" border-primary-200  mb-5  border-b" />

            {/* for all the container */}
            <View className=" ">
              {/* container for payments and booking */}
              <View className=" mb-4  ">
                {/* container for booking */}
                <SettingsItem
                  icon={Icons.privacyPolicy}
                  title="My Booking"
                  onPress={() => console.log('Hello')}
                />
                <SettingsItem
                  icon={Icons.privacyPolicy}
                  title="Payments"
                  onPress={() => console.log('Hello')}
                />
              </View>

              {/* Horizontal Line */}
              <View className=" border-primary-200  mb-3  border-b" />

              {/* container for profile to invite freinds */}
              <View className=" mb-3">
                <SettingsItem
                  icon={Icons.ratings}
                  title="Profile"
                  onPress={() => console.log('Hello')}
                />
              </View>
            </View>

            {/* for logout */}

            <TouchableOpacity
              activeOpacity={0.7}
              // onPress={logoutUser}
              className=" w-32 flex-row  items-center gap-2 rounded-xl border-2 border-[#0B2131] bg-red-600 p-4    "
              style={{
                position: 'absolute',
                top: 400,
              }}>
              <Image
                source={Icons.logout}
                tintColor={'white'}
                resizeMode="contain"
                className="  h-7 w-7 "
              />
              <Text className=" text-danger  text-xl  font-semibold  text-white">Logout</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Profile;
