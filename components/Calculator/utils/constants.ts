type TButtonType = "top" | "right" | "digit";
type TOperatorType = "number" | "reset" | "operator" | "backSpace" | "result";

export interface ICalculateButton {
  value: string;
  type: TButtonType;
  operatorType: TOperatorType;
}

export const buttons: ICalculateButton[] = [
  { value: "AC", type: "top", operatorType: "reset" },
  { value: "⌫", type: "top", operatorType: "backSpace" },
  { value: "%", type: "top", operatorType: "operator" },
  { value: "/", type: "right", operatorType: "operator" },
  { value: "7", type: "digit", operatorType: "number" },
  { value: "8", type: "digit", operatorType: "number" },
  { value: "9", type: "digit", operatorType: "number" },
  { value: "*", type: "right", operatorType: "operator" },
  { value: "4", type: "digit", operatorType: "number" },
  { value: "5", type: "digit", operatorType: "number" },
  { value: "6", type: "digit", operatorType: "number" },
  { value: "-", type: "right", operatorType: "operator" },
  { value: "1", type: "digit", operatorType: "number" },
  { value: "2", type: "digit", operatorType: "number" },
  { value: "3", type: "digit", operatorType: "number" },
  { value: "+", type: "right", operatorType: "operator" },
  { value: "0", type: "digit", operatorType: "number" },
  { value: "00", type: "digit", operatorType: "number" },
  { value: ".", type: "digit", operatorType: "number" },
  { value: "=", type: "right", operatorType: "result" },
];
