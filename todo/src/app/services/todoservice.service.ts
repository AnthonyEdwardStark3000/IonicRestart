import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  datas: Array<any>;

  constructor(private afs: AngularFirestore) { }
  saveData(data: any)
  {
    this.afs.collection('todos').add(data).then(docRef =>{
      console.log(docRef);
      // this.toaster.success(' Insertion of Data successful ');
      console.log('Insertion success');
    }
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    ).catch(function(err){
      console.log(err);
    });

    alert('Check');
  }

  //Read Datas
  getTasks() {
    return this.afs.collection('todos').snapshotChanges();
  }

}
