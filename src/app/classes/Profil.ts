export class Profil {
  constructor (
    public id: number,
    public nom: string,
    public prenom:string,
    public email:string,
    public respo:boolean,
    public photo:string)
  {
    this.id=id
    this.nom=nom
    this.prenom=prenom
    this.email=email
    this.respo=respo
    this.photo=photo
  }
}
