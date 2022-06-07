export class Annonces {
  constructor (
    public id:number,
    public type:string,
    public titre:string,
    public extrait:string,
    public contenu:string,
    public image:string
  )
  {
    this.id=id
    this.type=type
    this.titre=titre
    this.extrait=extrait
    this.contenu=contenu
    this.image=image
  }

}
