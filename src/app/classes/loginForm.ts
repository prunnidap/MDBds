import {
  alpha,
  required,
  compare,
  email,
} from '@rxweb/reactive-form-validators';

export class LoginForm {
  private _firstName: string = '';
  private _lastName: string = '';

  fullName: string;

  @alpha()
  @required()
  set firstName(value: string) {
    this._firstName = value;
    this.setFullName();
  }

  get firstName(): string {
    return this._firstName;
  }

  @required()
  set lastName(value: string) {
    this._lastName = value;
    this.setFullName();
  }

  get lastName(): string {
    return this._lastName;
  }

  @required()
  password: string;

  @required()
  @email()
  email: string;

  @compare({ fieldName: 'password' })
  confirmPassword: string;

  setFullName() {
    this.fullName = `${this.firstName} ${this.lastName}`;
  }
}
