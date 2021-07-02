export class CardData{
    public serviceName: string;
  public description: string;
  public imagePath: string;
  public category:string;
  public purchaseDate: string;

  constructor(name: string, desc: string, imagePath: string, category:string,purchaseDate: string) {
    this.serviceName = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.category=category;
    this.purchaseDate=purchaseDate;
  }
}