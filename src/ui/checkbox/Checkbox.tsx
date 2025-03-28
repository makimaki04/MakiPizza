import styles from "./styles.module.scss";
import { Container } from "../index";
import clsx from "clsx";
import { Check } from "lucide-react";

export interface CheckboxProps {
  label: string;
  value: string;
  onChange?: (checked: boolean) => void;
  checked?: boolean;
}

export const Checkbox = ({ label, value, onChange, checked }: CheckboxProps) => {
  return (
    <Container className={styles.checkbox__container}>
      <input
        type="checkbox"
        value={value}
        className={clsx(styles.checkbox, "m-0")}
        onChange={() => onChange}
        checked={checked}
        id={`checkbox-${value}`}
      />
      <label
        htmlFor={`checkbox-${value}`}
        className={clsx("text m-0 text_size_middle", styles.label)}
      >
        <div className={styles.checkbox__Icon__Wrapper}>
          <Check size={18} className={styles.checkbox__Icon} />
        </div>
        {label}
      </label>
    </Container>
  );
}
