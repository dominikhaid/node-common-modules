import AsterixIcon from 'public/icons/phosphor-icons/assets/duotone/asterisk-duotone.svg';
import EyeIcon from 'public/icons/phosphor-icons/assets/duotone/eye-duotone.svg';
import React from 'react';
import uuid from 'react-uuid';
import {validateField} from 'src/hooks/validateFrom';
interface IPref {
  prefix?: JSX.Element | JSX.Element[];
}

const InputPrefix = ({prefix}: IPref): React.ReactElement => {
  if (!prefix) return <></>;
  return (
    <>
      <style jsx>{`
        span {
          width: 30px;
          height: 30px;
          flex: 0 0 30px;
        }

        @media (max-width: 765px) {
          span {
            width: 20px;
            height: 20px;
            flex: 0 0 20px;
          }
        }
      `}</style>
      <span key={uuid()} className="inline-flex text-primary">
        {prefix}
      </span>
    </>
  );
};

interface IAdd {
  type?: string;
}

const AdditionalRenderAfter = ({type}: IAdd) => {
  if (type !== 'password') return <></>;

  return (
    <span key={uuid()}>
      <style jsx>{`
        span {
          width: 30px;
          height: 30px;
          flex: 0 0 30px;
          display: flex;
          max-width: 30px;
          min-width: unset !important;
        }

        @media (max-width: 765px) {
          span {
            width: 15px;
            height: 15px;
            flex: 1 1 15px;
            max-width: 15px;
            min-width: unset !important;
          }
        }
        @media (max-width: 335px) {
          span {
            margin: 0 !important;
          }
        }
      `}</style>
      <EyeIcon
        key={uuid()}
        className="cursor-pointer postfix text-primary"
        onClick={(e: React.SyntheticEvent) => {
          let pwdField =
            (e?.target as HTMLBaseElement)?.parentElement?.tagName === 'SPAN'
              ? ((e?.target as HTMLBaseElement)?.parentElement
                  ?.previousElementSibling as HTMLInputElement)
              : ((e?.target as HTMLBaseElement)?.parentElement?.parentElement
                  ?.previousElementSibling as HTMLInputElement);

          if (pwdField?.tagName === 'FIELDSET')
            pwdField = pwdField.querySelector('input') as HTMLInputElement;

          if (pwdField)
            pwdField.type = pwdField.type === 'password' ? 'text' : 'password';
        }}
      />
    </span>
  );
};

interface IBefore {
  required?: boolean;
}

const AdditionalRenderBefore = ({required}: IBefore): React.ReactElement => {
  const add: React.ReactElement[] = [];

  if (required)
    add.push(
      <AsterixIcon
        key={uuid()}
        className="text-red-dark"
        style={{height: '10px', width: '10px', flex: '0 0 10px'}}
      />,
    );

  if (!required)
    add.push(
      <span
        key={uuid()}
        className="text-red-dark"
        style={{height: '10px', width: '10px', flex: '0 0 10px'}}
      />,
    );
  return <>{add}</>;
};

interface ILabel {
  name: string;
  required?: boolean;
  label?: string;
}

const InputLabel = ({label, name, required}: ILabel): React.ReactElement => {
  if (label === '') return <></>;
  return (
    <label
      key={uuid()}
      htmlFor={name}
      className={required ? 'required' : ''}
      style={{flex: '0 0 max-content'}}
    >
      {label}
    </label>
  );
};

interface IType {
  name: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
  remember?: boolean;
  aria: string;
  rules?: any[];
  defaultValue?: string | number;
}

const InputType = ({
  name,
  remember,
  required,
  placeholder,
  type,
  aria,
  rules,
  defaultValue,
}: IType): React.ReactElement => {
  const validation2Html = ({target, validation}) => {
    let formError = target.parentElement.querySelector(
      '.form-validation-error',
    );

    if (formError) {
      [...formError.children].forEach(e => formError.removeChild(e));
    }

    if (validation.state) return false;

    if (!formError) {
      formError.classList.add('form-validation-error');
      formError = target.parentElement.createElement('SPAN');
      target.parentElement.appendChild(formError);
    }

    const fieldErr = document.createElement('P');
    fieldErr.setAttribute('class', 'text-center text-red-dark w-100');
    fieldErr.innerHTML = validation.msg;
    formError.appendChild(fieldErr);
    return true;
  };

  const handelChange = (e: React.ChangeEvent) => {
    const target = e?.target as HTMLInputElement;
    if (!target) return;
    const newVal = {
      value: target?.value.replace(/^[\s\uFEFF\xA0]+/g, ''),
      type: target?.type,
      rules: rules,
    };

    if (target?.type === 'email') newVal.value = newVal.value.toLowerCase();

    const res = validateField(newVal);

    validation2Html({
      target: target,
      validation: {msg: res.msg, state: res.state},
    });

    target.value = newVal.value;
  };

  let inputCls = 'flex-auto';
  if (type === 'checkbox') inputCls += ' flex-none';
  if (type === 'password') inputCls += ' password-field';

  return (
    <input
      key={uuid()}
      id={name}
      aria-label={aria}
      aria-required={required}
      className={inputCls}
      onChange={e => handelChange(e)}
      defaultValue={defaultValue}
      required={required}
      type={type}
      data-value={remember ? defaultValue : ''}
      placeholder={placeholder}
    />
  );
};

export default function DefaultInput({
  name = '',
  required = false,
  type = 'text',
  placeholder = '',
  label = '',
  rules,
  defaultValue,
  prefix,
  className = '',
  remember = false,
  style = {},
  aria = '',
}: IInput): React.ReactElement {
  if (name === '') name = uuid();

  if (!required) required = rules?.find(rule => rule.required === true);

  className +=
    ' max-w-full spac-x-xs items-center flex-wrap place-content-center justify-start ';

  return (
    <>
      <fieldset key={uuid()} style={style} className={className}>
        <InputLabel label={label} name={name} required={required} />
        <InputPrefix prefix={prefix} />
        <AdditionalRenderBefore required={required} />
        <InputType
          type={type}
          aria={aria}
          defaultValue={defaultValue}
          remember={remember}
          name={name}
          rules={rules}
          required={required}
          placeholder={placeholder}
        />
        <AdditionalRenderAfter type={type} />
        <span className="form-validation-error"></span>
      </fieldset>
    </>
  );
}
