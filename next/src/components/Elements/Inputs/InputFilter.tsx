import React, {TouchEvent} from 'react';
import uuid from 'react-uuid';

interface IInputFilter {
  input: IInput;
  style?: React.CSSProperties;
  className?: string;
  formItem?: {name: string};
  label?: string;
}

interface IInputLabel {
  labelFor: string;
  label?: string;
}

interface IPrefix {
  prefix?: JSX.Element | JSX.Element[];
}

const InputTypeCheck = ({formItem, input}: IInputFilter) => {
  if (!input.type || input.type !== 'checkbox') return <></>;
  return (
    <input
      aria-label={input.aria}
      aria-required="false"
      checked={input.checked && input.checked(input.label)}
      onChange={() =>
        input.onChange &&
        input.onChange(
          input?.label,
          input?.group,
          input.checked && input.checked(input.label),
        )
      }
      id={formItem?.name}
      className={
        input.type === 'checkbox'
          ? 'flex-none relative display-none'
          : 'flex-auto'
      }
      type={input.type}
      placeholder={input.placeholder}
    />
  );
};

const InputTypeValue = ({formItem, input}: IInputFilter) => {
  if (!input.type) return <></>;
  return (
    <input
      aria-label={input.aria}
      aria-required="false"
      id={formItem?.name}
      className={'flex-1 w-75'}
      onChange={e => {
        input.onChange && input.onChange(Number(e.target.value), input.group);
      }}
      style={{minWidth: '200px'}}
      defaultValue={input.defaultValue || undefined}
      type={input.type}
      placeholder={input.placeholder}
    />
  );
};

const InputTypeRange = ({formItem, input}: IInputFilter) => {
  if (!input.type) return <></>;
  return (
    <input
      aria-label={input.aria}
      aria-required="false"
      id={formItem?.name}
      className={'flex-1 w-75'}
      onTouchEnd={(e: TouchEvent<HTMLInputElement>) => {
        input.onChange && input.onChange(Number(e.target.value), input.group);
      }}
      onMouseUp={(e: React.SyntheticEvent<HTMLInputElement>) => {
        input.onChange && input.onChange(Number(e.target.value), input.group);
      }}
      onChange={e => {
        const rangeLabel =
          e?.target?.parentElement?.querySelector('.range-val');
        if (rangeLabel)
          rangeLabel.textContent = input.unit
            ? e.target.value + input.unit
            : e.target.value;
      }}
      step="1"
      min={input.min}
      max={input.max}
      style={{minWidth: '200px'}}
      defaultValue={input.defaultValue || undefined}
      type={input.type}
      placeholder={input.placeholder}
    />
  );
};

const InputPrefix = ({prefix}: IPrefix): React.ReactElement => {
  if (!prefix) return <></>;
  return (
    <span className="flex flex-col content-center justify-center text-sm pt-sm text-primary">
      {prefix}
    </span>
  );
};

const InputLabel = ({labelFor, label}: IInputLabel) => {
  if (!label) return <></>;
  return (
    <label
      className="text-sm pr-none"
      htmlFor={labelFor}
      style={{flex: '0 0 max-content'}}
    >
      {label}
    </label>
  );
};

export default function InputFilter({
  formItem,
  input,
  className = '',
  style,
}: IInputFilter): React.ReactElement {
  if (!formItem) formItem = {name: uuid()};

  className = 'flex flex-row flex-wrap justify-start ';

  return (
    <>
      <style jsx>{`
        fieldset {
          justify-content: center !important;
        }
      `}</style>
      <fieldset style={style} className={className}>
        <InputLabel
          labelFor={formItem && formItem.name ? formItem.name : input.name}
          label={input.label}
        />
        <InputPrefix prefix={input.prefix} />
        {input.type === 'checkbox' && (
          <InputTypeCheck input={input} formItem={formItem} />
        )}
        {input.type === 'text' && (
          <InputTypeValue input={input} formItem={formItem} />
        )}
        {input.type === 'range' && (
          <InputTypeRange input={input} formItem={formItem} />
        )}
        {input.type === 'range' && (
          <small className="mt-0 font-bold text-center range-val w-100">
            {input.unit}
          </small>
        )}
      </fieldset>
    </>
  );
}
