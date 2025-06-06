import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { Icons } from '~/src/constants/icons';

type settingsItemProp = {
  icon: ImageSourcePropType;
  title: string;
  onPress: () => void;
};

// custom comp for each component
const SettingsItem = ({ onPress, icon, title }: settingsItemProp) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      className=" flex flex-row items-center justify-between py-3">
      <View className=" flex-row items-center gap-2">
        <Image source={icon} resizeMode="contain" className=" size-7 " />
        <Text className=" font-semibold">{title}</Text>
      </View>

      <View>
        <Image source={Icons.rightArrow} resizeMode="contain" className="  h-7 w-7 " />
      </View>
    </TouchableOpacity>
  );
};

export default SettingsItem;
