export class Login {
  constructor (
    public id: number,
    public email: string,
    public password:string,
    public respo:boolean,
    public membre:boolean,
    public invite:boolean,
    public sportSelectionne : string)
  {
    this.id=id
    this.email=email
    this.password=password
    this.respo=respo
    this.invite=invite
    this.membre=membre
    this.sportSelectionne = sportSelectionne
  }
}
