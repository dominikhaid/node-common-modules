/**
 * Validate Email string
 * @param {String} val
 * @returns boolean
 */
const val_email = val =>
  /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim.test(val);
/**
 * Validate Password String
 * @param {String|Number} val
 * @returns boolean
 */
const val_password = val =>
  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm.test(val);
/**
 * Validate Password Sepcial Char
 * @param {String} val
 * @returns boolean
 */
const val_password_special = val => /(.*[^\w\d\s:])/gm.test(val);
/**
 * Validate Password Length
 * @param {String} val
 * @returns boolean
 */
const val_password_length = val =>
  /^(?=.*)(?=.*[^\s:])([^\s]){8,16}$/gm.test(val);
/**
 * Validate Password Digit
 * @param {String} val
 * @returns boolean
 */
const val_password_digit = val => /(.*\d.*)$/gm.test(val);
/**
 * Validate Password Cases
 * @param {String|Number} val
 * @returns boolean
 */
const val_password_case = val => /([A-Z].*[a-z]|[a-z].*[A-Z])/gm.test(val);
/**
 * Validate Postalcode
 * @param {String|Number} val
 * @returns boolean
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const val_zip = val => /^(?:[1-9]|0(?!0{4}))\d{4}(?:[-\s]\d{4})?$/gm.test(val);
/**
 * RValidate Requires Field
 * @param {String|Number} val
 * @returns boolean
 */
const val_required = val => val.replace(/\s*/gm, '') !== '';
/**
 * Validate Phone Number
 * @param {String|Number} val
 * @returns boolean
 */
const val_phone = val =>
  /(\+\d{1})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s-.]?\d{4}/gm.test(val);

interface IVALID {
  state: boolean;
  msg: string;
}

/**
 * @desc form field validation object
 * @param {Bool} state
 * @param {String} msg
 * @returns object
 */
const check_field = (state = true, msg = ''): IVALID => {
  return {
    state: state,
    msg: msg,
  };
};

interface ICHECK {
  type: string;
  value: string | number;
  rules?: any[];
  required?: boolean;
}

//TODO WE DIDNT IMPLEMENT THE RULES FIELD JET
/**
 * @desc validate input field
 * @param {String} type
 * @param {String} value
 * @param {Array} rules
 * @param {Bool} required
 * @returns validation object {state: bool,msg: string}
 */

export const validateField = ({
  type,
  value, // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rules = [],
  required = false,
}: ICHECK): IVALID => {
  if (!type) return {state: true, msg: ''};
  let check: IVALID = {state: false, msg: ''};
  switch (type) {
    case 'email':
      check = check_field(
        val_email(value),
        'Please type in a valid email address!',
      );
      break;
    case 'password':
      check = {state: false, msg: ''};
      check = check_field(
        val_password_length(value),
        check.msg !== ''
          ? 'Between 8-16 characters'
          : check.msg + '\nBetween 8-16 characters',
      );
      check = check_field(
        val_password_case(value),
        check.msg !== ''
          ? 'One upper and one lower case character'
          : check.msg + '\nOne upper and one lower case character',
      );
      check = check_field(
        val_password_digit(value),
        check.msg !== '' ? 'One digit' : check.msg + '\nOne digit',
      );
      check = check_field(val_password_special(value), 'One special character');
      check = check_field(
        val_password(value),
        check.msg !== ''
          ? 'Your passwort must be between 8-16 character long and contain one uppercase and one lowercase chracter at least one number and one sepcial character!'
          : check.msg +
              '\nYour passwort must be between 8-16 character long and contain one uppercase and one lowercase chracter at least one number and one sepcial character!',
      );
      break;
    case 'text':
      if (required)
        check = check_field(
          val_required(value),
          'This field must be filled out!',
        );
      if (!required) check = check_field(true, 'This field has no validation!');
      break;
    case 'tel':
      check = check_field(
        val_phone(value),
        'Please type in a valid phone number!',
      );
      if (!required && check.msg === '')
        check = check_field(true, 'This field has no validation!');
      break;
    default:
      if (required)
        check = check_field(
          val_required(value),
          'This field must be filled out!',
        );
      if (!required) check = check_field(true, 'This field has no validation!');
      break;
  }

  return check;
};

interface IVALIDHTML {
  state: boolean;
  msg: string;
  name: string;
  value: string;
}

interface IVALIFORM {
  state: boolean;
  data: IVALIDHTML[];
}
/**
 * @desc validate form
 * @param {String} name form name
 * @returns array
 */
export const validateFrom = (name: string): IVALIFORM => {
  const formFields = document.querySelectorAll(
    `form[name="${name}"] input`,
  ) as NodeListOf<HTMLInputElement>;
  let formtest = true;
  const fieldValues: IVALIDHTML[] = [];

  formFields.forEach((e: HTMLInputElement, index: number) => {
    const test = validateField({
      value: e.value,
      type: e.type,
      required: e.required,
    });

    if (e.type === 'password') {
      if (
        formFields[index - 1].type === 'password' &&
        formFields[index + 1].type !== 'password' &&
        formFields[index - 1].value !== e.value
      ) {
        test.msg = 'Your passwords are not matching!';
        test.state = false;
      }
    }

    if (e.getAttribute('data-value') && e.getAttribute('data-value') !== '')
      fieldValues.push({
        state: true,
        msg: '',
        name: `remembered_${e.id}`,
        value: e.getAttribute('data-value') || '',
      });

    if (!test.state) formtest = false;

    fieldValues.push({
      state: test.state,
      msg: test.msg,
      name: e.id,
      value: e.value,
    });
  });
  return {state: formtest, data: fieldValues};
};

/**
 * @desc display form errors
 * @param {String} name form name
 * @param {Array} fields [{state:bool,msg:string,name:id}]
 * @returns true
 */
export const remapErrors = (name: string, fields: IVALIDHTML[]): boolean => {
  if (!document.querySelector(`form[name="${name}"]`)) return false;

  fields.forEach(field => {
    if (field.state) return false;

    const formField = document?.querySelector(
      `form[name="${name}"] #${field.name}`,
    );

    if (!formField) return false;
    let oldValErrors = formField?.parentElement?.querySelector(
      'span.form-validation-error',
    );

    if (oldValErrors)
      [...Array.from(oldValErrors.children)].forEach(e =>
        oldValErrors?.removeChild(e),
      );

    if (!oldValErrors) {
      oldValErrors = document?.createElement('SPAN');
      oldValErrors.classList.add('form-validation-error');
      formField?.parentElement?.appendChild(oldValErrors);
    }

    const error = document.createElement('P');
    error.innerHTML = field.msg;
    error.classList.add('text-red-dark');
    oldValErrors.appendChild(error);
  });

  return true;
};
