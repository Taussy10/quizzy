import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingsItem from '~/src/components/profile/settings-item';

const Profile = () => {
  return (
    // For some reason putting the ImageBackground below the safeareva view doesn't work
    <View className=" flex-1">
      <ImageBackground
        source={require('~/assets/dot-dot-bg.png')}
        resizeMode="repeat"
        style={{ flex: 1 }}>
        <SafeAreaView className="flex-1  px-4  ">
          <ScrollView
            // (property) showsVerticalScrollIndicator?: boolean | undefined
            // here property shows that it's a prop
            // 2. It's optional value by ? and accept two value either boolean or undefined
            // 2nd it is written like showsVerticalScrollIndicator?: boolean
            // but in jsx we don't use :(colon we use it in js and
            // ts telling : cause  js and ts both are freinds )
            //  instead we use = that's why
            showsVerticalScrollIndicator={false}>
            {/*Container for header */}
            <View
              className=" mb-5 flex-row items-center  justify-between ">
              <Text className=" text-lg">Profile</Text>
              <Image className=" size-7" source={icons.bell} />
            </View>

            {/* Container for Avatar and text */}
            <View
              className="  mb-4 flex-col items-center 
        justify-center gap-3  ">
              <Image
                source={require('~/assets/images/spin-card.png')}
                className="  size-32 rounded-full"
              />
              {/* w-full is if the big name then it can get also text center for centering the text */}
              {/* will be optional cause in starting we won't have when we login */}
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
                  icon={icons.calendar}
                  title="My Booking"
                  onPress={() => console.log('Hello')}
                />
                <SettingsItem
                  icon={icons.wallet}
                  title="Payments"
                  onPress={() => console.log('Hello')}
                />
              </View>

              {/* Horizontal Line */}
              <View className=" border-primary-200  mb-3  border-b" />

              {/* container for profile to invite freinds */}
              <View className=" mb-3">
                <SettingsItem
                  icon={icons.person}
                  title="Profile"
                  onPress={() => console.log('Hello')}
                />
                <SettingsItem
                  icon={icons.bell}
                  title="Notification"
                  onPress={() => console.log('Hello')}
                />
                <SettingsItem
                  icon={icons.shield}
                  title="Security"
                  onPress={() => console.log('Hello')}
                />
              </View>
            </View>

            {/* for logout */}

            <TouchableOpacity
              activeOpacity={0.7}
              // onPress={logoutUser}
              className=" flex-row items-center gap-2 ">
              <Image source={icons.logout} resizeMode="contain" className="  h-7 w-7 " />
              <Text className=" text-danger text-xl  font-semibold">Logout</Text>
            </TouchableOpacity>
          </ScrollView>

          {/* Container for screen */}
          <Text>Profile screen</Text>
          <TouchableOpacity className=" w-32 border-2 border-[#0B2131]   bg-[#4884FF] p-3  px-4   py-1  text-lg text-white ">
            <Text className=" text-center font-OpenSans-SemiBold text-2xl text-white">Hello</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Profile;
