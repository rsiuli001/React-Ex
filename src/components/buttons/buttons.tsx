import React from 'react';
import './buttons.css';

interface IButtonsProp {
  label: string;
  disable: boolean;
  onPress: () => void;
}

const Buttons: React.FC<IButtonsProp> = ({
  label,
  onPress,
  disable,
}: IButtonsProp): JSX.Element => (
  <button onClick={onPress} className="button" type="button" disabled={disable}>
    {label}
  </button>
);

export default Buttons;
