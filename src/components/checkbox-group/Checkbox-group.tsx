import clsx from "clsx";
import { CheckboxProps } from "../../ui/checkbox/Checkbox";
import { Checkbox, Container } from "../../ui";
import styles from './styles.module.scss'

interface CheckBoxGroupProps {
  items: CheckboxProps[];
  title: string;
}

export const CheckBoxGroup = ({items, title}: CheckBoxGroupProps) => {
  return (
    <>
      <div>
        <p className={clsx('m-0 text text_size_middle', styles.group__title)}>{title}</p>

        <Container className={styles.container}>
            {items.map((item, index) => (
                <Checkbox value={item.value} label={item.label} key={index} />
            ))}
        </Container>
      </div>
    </>
  );
}
