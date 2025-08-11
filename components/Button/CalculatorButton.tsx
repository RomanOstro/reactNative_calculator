import { useMemo } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface IButtonProps {
  value: string;
  type: string;
  onPress: (value: string) => void;
}

export const CalculatorButton = (props: IButtonProps) => {
  const { type, value, onPress } = props;

  const bgColor = useMemo(
    () =>
      type === "top"
        ? "#706c6cff"
        : type === "right"
        ? "#cc790bff"
        : "#4d4a4aff",
    [type]
  );

  return (
    <TouchableOpacity
      style={[style.button, { backgroundColor: bgColor }]}
      onPress={() => onPress(value)}
    >
      <Text style={style.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    width: 85,
    height: 85,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
  text: {
    color: "#e9e7e7ff",
    fontSize: 20,
  },
  switch: {
    backgroundColor: "red",
  },
});
