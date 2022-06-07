import {Profil} from "./Profil";

export class Creneau {
  constructor (
    public id:number,
    public sport: string,
    public imageCreneau : string,
    public respo : string,
    public photoRespo : string,
    public jour : string,
    public heureDebut : string,
    public heureFin : string,
    public lieu : string,
    public descriptif : string,
    public nbParticipants : number,
    public infosBonus : string,
    public participants : Profil[]
  )
  {
    this.id=id
    this.sport=sport
    this.imageCreneau = imageCreneau
    this.respo=respo
    this.photoRespo=photoRespo
    this.jour=jour
    this.heureDebut=heureDebut
    this.heureFin=heureFin
    this.lieu=lieu
    this.descriptif=descriptif
    this.nbParticipants=nbParticipants
    this.infosBonus=infosBonus
    this.participants=participants
  }
}
