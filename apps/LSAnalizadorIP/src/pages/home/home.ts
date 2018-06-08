import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  direccion: string;
  mostrarResultados: boolean;
  FirstIP: string;
  Hosts: number;
  IPBroadcast: string;
  IPNet: string;
  LastIP: string;
  Mask: string;

  constructor(public navCtrl: NavController, public http: Http) {
    this.mostrarResultados = false;
  }

  showabout() {
    this.navCtrl.push(AboutPage);
  }

  analizar(){
    this.mostrarResultados = true;
    this.http.get('http://lsystemstaxi.000webhostapp.com/direccionIP/procesamiento.php?ip='+this.direccion)
    .subscribe(r => {
      this.FirstIP = r.json().FirstIP;
      this.Hosts = r.json().Hosts;
      this.IPBroadcast = r.json().IPBroadcast;
      this.IPNet = r.json().IPNet;
      this.LastIP =r.json().LastIP;
      this.Mask = r.json().Mask;
    }, error => {

    });
  }
}
