import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ElectronicsService {
  cartpoint:number=0
 

  products:Products[] =[
    new Products(1,"iPhone Xs Max ",462000,4,"Phone","6.5  / 4 GB RAM / 64 GB ROM / Cam - 12 MP + 12MP /Selfie - 7 MP / iOS",new Date(2019,9,11),'https://i4.skapiec.pl/1/pMZktkraW1hZ2VzLzhkOTc1NzAzYTZiYmVkMTRiZWNjYWQ0ZGY2ZmY0ZTc0LmpwZ5OVAs0CvADCw5UCAM0CvMLDkwmmNzdjMjRlBg/apple-iphone-xs-max-64gb-gwiezdna-szarosc-mt502pm-a.jpg',0,false),
    new Products(2,"Lenovo Legion T530-28LCB",412500,10,"PC","Core i5 8400 4 GGh HDD 250GB,8Gb RAM,GeForce GTX1060 3Gb,Dolby Athmos,HDMI, LAN, USB 3.0, USB 2.0, Type-C, SD, AUX, DVI",new Date(2019,11,11),'https://cdn.cnetcontent.com/44/f4/44f45303-7175-4010-8ceb-5469a8c05209.jpg',0,false),
    new Products(3,"iPhone X ",362000,4,"Phone","5.8 / 3 GB RAM / 64 GB ROM / Cam - 12 MP + 12MP /Selfie - 7 MP / iOS",new Date(2017,9,11),'https://notebookcentre.am/wa-data/public/shop/products/98/03/398/images/704/704.750.jpg',0,false),
    new Products(4,"Dell Inspiron 5570 Touch",450000,5,"Notebook","15.6 / Core i5 8250U / 8 GB RAM / 1 TB HDD / Intel UHD Graphics 620 / Windows 10",new Date(2019,5,11),'https://notebookcentre.am/wa-data/public/shop/products/90/01/190/images/1180/1180.750.JPG',0,false),
    new Products(5,"Xiaomi Mi A2 ",117000,2,"Phone","5.5 / 3 GB RAM / 64 GB ROM / Cam - 12 MP + 20MP /Selfie - 20 MP / Android",new Date(2020,3,11),'https://notebookcentre.am/wa-data/public/shop/products/59/01/159/images/302/302.750.jpg',0,false),
    new Products(6,"Acer Aspire XC-885",374500,7,"PC","Core i7 8400 4 GGh HDD 1TB,16Gb RAM,GeForce GTX2060 4Gb,Dolby Athmos,HDMI, LAN, USB 3.0, USB 2.0, Type-C, SD, AUX, DVI",new Date(2018,10,15),'https://notebookcentre.am/wa-data/public/shop/products/49/11/1149/images/1676/1676.750.png',0,false),
    new Products(7,"Xiaomi MI 8 Lite ",317000,2,"Phone","5.5 / 4 GB RAM / 64 GB ROM / Cam - 12 MP + 20MP /Selfie - 20 MP / Android",new Date(2018,5,11),'https://notebookcentre.am/wa-data/public/shop/products/24/04/424/images/731/731.750.jpg',0,false),
    new Products(8,"Lenovo IdeaPad 320-15IAP",317000,5,"Notebook","15.6  / Intel N3350 / 4 Gb RAM / 1 TB HDD / Intel HD Graphics 500 / Dos",new Date(2019,10,1),'https://notebookcentre.am/wa-data/public/shop/products/22/02/222/images/1131/1131.750.jpg',0,false),
    new Products(9,"Samsung Galaxy A20 ",94000,12,"Phone","6.5 /3 GB RAM / 32 GB ROM / Cam - 13 MP + 20MP /Selfie - 7 MP / Android",new Date(2020,12,11),'https://notebookcentre.am/wa-data/public/shop/products/34/04/434/images/743/743.750.jpg',0,false),
    new Products(10,"AeroCool TOR PRO Black RGB ",414500,15,"PC","Core i7 8400 4 GGh HDD 1TB,16Gb RAM,GeForce GTX2060 4Gb,Dolby Athmos,HDMI, LAN, USB 3.0, USB 2.0, Type-C, SD, AUX, DVI",new Date(2018,10,15),'https://notebookcentre.am/wa-data/public/shop/products/50/13/1350/images/1979/1979.750.jpg',0,false),
    new Products(11,"Acer Aspire E5-576-392H",290000,2,"Notebook","15.6/ Core i3 8130U / 6 GB RAM / 1 TB HDD / Intel UHD Graphics 620 / Windows 10",new Date(2018,7,15),'https://notebookcentre.am/wa-data/public/shop/products/53/00/53/images/1119/1119.750.jpg',0,false),
    new Products(12,"Acer Aspire C22-760 ",204500,15,"PC","Core i3 8400 4 GGh HDD 1TB,16Gb RAM,GeForce GTX2060 4Gb,Dolby Athmos,HDMI, LAN, USB 3.0, USB 2.0, Type-C, SD, AUX, DVI",new Date(2017,4,15),'https://notebookcentre.am/wa-data/public/shop/products/89/04/489/images/811/811.750.jpg',0,false),
    new Products(13,"MacBook Air MRE82",582000,8,"Notebook","13.3  / 8 GB RAM / Intel UHD Graphics 617 / MacOS",new Date(2018,12,15),'https://notebookcentre.am/wa-data/public/shop/products/07/08/807/images/1241/1241.750.jpg',0,false),
    new Products(14,"Samsung Galaxy S9 ",294000,10,"Phone","5.8 /4 GB RAM / 64 GB ROM / Cam - 13 MP + 20MP /Selfie - 7 MP / Android",new Date(2018,12,11),'https://notebookcentre.am/wa-data/public/shop/products/51/04/451/images/760/760.750.jpg',0,false),
    new Products(15,"AeroCool Firm-FGH RGB ",474500,15,"PC","Core i3 8400 4 GGh HDD 1TB,16Gb RAM,GeForce GTX2060 4Gb,Dolby Athmos,HDMI, LAN, USB 3.0, USB 2.0, Type-C, SD, AUX, DVI",new Date(2015,3,15),'https://notebookcentre.am/wa-data/public/shop/products/50/13/1350/images/1979/1979.750.jpg',0,false),
    new Products(16,"HP 250 G7",252000,4,"Notebook","15.6  / Intel 4417U / 4 GB RAM / Intel HD Graphics 610 / Dos",new Date(2018,5,1),'https://notebookcentre.am/wa-data/public/shop/products/38/12/1238/images/1817/1817.750.jpg',0,false),
    new Products(17,"DeepCool SMARTER LED ",500500,15,"PC","Core i3 8400 4 GGh HDD 1TB,16Gb RAM,GeForce GTX2060 4Gb,Dolby Athmos,HDMI, LAN, USB 3.0, USB 2.0, Type-C, SD, AUX, DVI",new Date(2016,1,15),'https://notebookcentre.am/wa-data/public/shop/products/01/05/501/images/826/826.750.jpg',0,false),
    new Products(18,"MacBook Pro MR9Q2",952000,1,"Notebook","13.3  / 8 GB RAM / Intel Iris Plus Graphics 655 / MacOS",new Date(2018,7,11),'https://notebookcentre.am/wa-data/public/shop/products/04/08/804/images/1237/1237.750.jpg',0,false),

   
  ]
  cart:Products[]=[
  ]

  constructor(){ 

    let s=setInterval(()=>{
    
    
     
    if(this.cart.length==0){
      
      this.cartpoint=0

    }
				
     
    },150)
    
  }
}
class Products
{
  id:number;
  name:string;
  price:number;
  count:number;
  image:string;
  description:string;
  date:Date;
  type:string;
  mycount:number;
  cart:boolean
  constructor(i:number,a:string,b:number,c:number,d:string,e:string,f:Date,t:string,m:number,point:boolean){
    this.id=i
    this.name=a
    this.price=b
    this.count=c
    this.type=d
    this.description=e
    this.date=f
    this.image=t
    this.mycount=m
    this.cart=point


  }
}
