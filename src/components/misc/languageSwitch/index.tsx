/* eslint-disable */ 
import { HStack, Switch, Text } from "native-base";
import { LanguageSwitcherProps } from "../../../utils/types";
import { AR, EN, LANGUAGE } from "../../../utils/constants";
import { View } from "react-native";
import {styles} from "./styles";


export const LanguageSwitcher = ({ setLanguage, language }: LanguageSwitcherProps) => {
  

  

    return (
      <View style={styles.container}>
        <Text>{LANGUAGE}</Text>
        <HStack alignItems="center" space={4}>
          <Text>{EN}</Text>
          <Switch onValueChange={(value)=>setLanguage(!value?"en":"ar")} size="sm" />
          <Text>{AR}</Text>
        </HStack>
      </View>
    );
  };