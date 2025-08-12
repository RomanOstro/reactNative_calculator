import { TOperatorType } from "../types/type";

interface ICalculateParams {
  valueOne: string;
  valueTwo: string;
  operator: TOperatorType;
}

//  [хук принимает первое, второе значение и оператор/ возвращает хендлер для кнопки "=" и итоговое значение]

export const useCalculate = ({
  valueOne,
  valueTwo,
  operator,
}: ICalculateParams) => {
  const calculate = () => {
    const firstNum = parseFloat(valueOne);
    const secondNum = parseFloat(valueTwo);

    switch (operator) {
      case "-":
        return (firstNum - secondNum).toString();

      case "+":
        return (firstNum + secondNum).toString();

      case "/":
        return secondNum === 0 ? "Error" : (firstNum / secondNum).toString();

      case "*":
        return (firstNum * secondNum).toString();

      default:
        return "0";
    }
  };

  return { calculate };
};
