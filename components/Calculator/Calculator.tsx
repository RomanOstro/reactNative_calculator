import { View, Text, StyleSheet, Switch } from "react-native";
import { ICalculateButton } from "./utils/constants";
import { CalculatorButton } from "../Button/CalculatorButton";
import { useCallback, useState } from "react";
import { useCalculate } from "./hooks/useCalculate";
import { TOperatorType } from "./types/type";

interface ICalculatorProps {
  buttons: ICalculateButton[];
}

export const Calculator = (props: ICalculatorProps) => {
  const { buttons } = props;
  const [operator, setOperator] = useState<TOperatorType>("");
  const [firstValue, setFirstValue] = useState<string>("");
  const [displayValue, setDisplayValue] = useState<string>("");

  //   [хук для кнопки "="]
  const { calculate } = useCalculate({
    valueOne: firstValue,
    valueTwo: displayValue,
    operator,
  });

  // [хендлер для кнопки "="]
  const handleTotal = useCallback(() => {
    calculate();
    setDisplayValue(calculate);
    setOperator("");
    setFirstValue("");
  }, [calculate]);

  // [хендлер для цифр]
  const digitHandler = useCallback(
    (value: string) => {
      if (displayValue === "0") {
        setDisplayValue(value);
      } else {
        setDisplayValue(displayValue + value);
      }
    },
    [displayValue]
  );

  //   [хендлер для операторов]
  const handleOperator = useCallback(
    (operator: TOperatorType) => {
      setOperator(operator);
      setFirstValue(displayValue);
      setDisplayValue("0");
    },
    [operator, displayValue]
  );

  //   [хендлер кнопки reset]
  const handleReset = useCallback(() => {
    setOperator("");
    setFirstValue("");
    setDisplayValue("0");
  }, []);

  // [хендлер удаления цифр по одной]
  const handleBackSpace = useCallback(() => {
    if (displayValue.length === 1) {
      setDisplayValue("0");
    } else {
      setDisplayValue((prev) => prev.slice(0, -1));
    }
  }, [displayValue]);

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Switch></Switch>
        <Text style={styles.topText}>{firstValue + operator}</Text>
        <Text style={styles.text}>{displayValue}</Text>
      </View>
      <View style={styles.buttonsPanel}>
        {buttons.map((button, i) => {
          const buttonsHandlers =
            button.operatorType === "number"
              ? () => digitHandler(button.value)
              : button.operatorType === "operator"
              ? () => handleOperator(button.value as TOperatorType)
              : button.operatorType === "backSpace"
              ? handleBackSpace
              : button.operatorType === "reset"
              ? handleReset
              : handleTotal; //последний хендлер для кнопки "равно"

          return (
            <CalculatorButton
              key={`${button.type}-${i}`}
              {...button}
              onPress={buttonsHandlers}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "black",
  },

  display: {
    height: "40%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingBlockEnd: 15,
  },
  topText: {
    fontSize: 50,
    color: "#6d6b6bff",
  },
  text: {
    color: "#e9e7e7ff",
    fontSize: 70,
    fontWeight: 300,
  },
  buttonsPanel: {
    height: "60%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
    justifyContent: "flex-end",
  },
});
