import * as React from "react";

import { StyleProp, Text, View, ViewStyle } from "react-native";
import { EpicFloatingInput } from "epic-floating-input-react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function App() {
  const [mode] = React.useState<"light" | "dark">("dark");

  const container: StyleProp<ViewStyle> = {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: mode === "light" ? "#fff" : "#000",
  };

  return (
    <View style={container}>
      <View style={{ marginVertical: 30, alignItems: "center" }}>
        <Ionicons
          name="flower-outline"
          size={40}
          color={mode === "light" ? "#000" : "#fff"}
        />
        <Text
          style={{
            fontSize: 30,
            justifyContent: "center",
            alignItems: "center",
            color: mode === "light" ? "#000" : "#fff",
          }}
        >
          Epic Floating Input
        </Text>
        <Text style={{ color: "gray", marginTop: 5 }}>
          An Elegant & Fully Customizable Input
        </Text>
      </View>

      <EpicFloatingInput
        inputType={"outline"}
        mode="dark"
        type="muted"
        placeholder="Active Input"
      />

      <Text style={{ textAlign: "center", marginVertical: 20, color: "gray" }}>
        Liked The Component ✌️
      </Text>
      {/* 
      <EpicFloatingInput
        mode={mode}
        inputType={"solid"}
        type="warning"
        placeholder="Warning Input"
        helperText={"Helper Text Is Here..."}
        options={{ counter: true }}
      />
      <EpicFloatingInput
        mode={mode}
        inputType={"solid"}
        type="danger"
        placeholder="Danger Input"
        helperText={"Helper Text Is Here..."}
        options={{ counter: true }}
        textContentType="password"
        secureTextEntry
        maxLength={100}
        right={{ icon: "alert-circle-outline" }}
      />
      <EpicFloatingInput
        mode={mode}
        inputType={"solid"}
        type="success"
        placeholder="Success Input"
        helperText={"Helper Text Is Here..."}
        options={{ counter: true }}
        textContentType="password"
        secureTextEntry
        maxLength={100}
        right={{ icon: "checkmark-outline" }}
        left={{ icon: "person-outline" }}
      />

      <EpicFloatingInput
        inputType={"solid"}
        mode={mode}
        placeholder="Disabled Input"
        disabled
      /> */}
    </View>
  );
}
