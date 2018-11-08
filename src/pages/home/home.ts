import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alertCtrl: AlertController,
    public navCtrl: NavController) {

  }
  showAlert1(){
    const alert = this.alertCtrl.create({
      title: 'แจ้งเตือนการใช้งาน',
      subTitle: 'ของระบบ',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert2(){
    const alert = this.alertCtrl.create({
      title: 'โปรดใส่รหัสผ่านที่สมัครไว้',
      message: 'TEST MESSAGE',
      subTitle: 'จำนวน 6 ตัวขึ้นไป',
      inputs: [
        {
          name: 'Login',
          placeholder: '*******'
        }
      ],
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('ยกเลิกแล้ว');
          }
        },
        {
          text: 'บันทึก',
          handler: () => {
            console.log('บันทึกแล้ว');
          }
        }
      ]
    });
    alert.present();
  }
}
