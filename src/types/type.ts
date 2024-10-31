export interface CalculatorForm {
  amount: string;
  term: string;
  interest: string;
  mortgageType: string;
}

export interface ErrorType {
  amount?: string;
  term?: string;
  interest?: string;
  mortgageType?: string;
}

export interface FormResultProps {
  monthlyPayment: number;
  totalPayment: number;
}

export interface FormSectionProps {
  calculatorForm: CalculatorForm;
  error: ErrorType;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  ClearAll: () => void;
  handleCalculation: () => void;
}

export interface UseFormProps {
  ClearAll: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: ErrorType;
  calculatorForm: CalculatorForm;
  handleCalculation: () => void;
  monthlyPayment: number;
  totalPayment: number;
  submitted: boolean;
}
