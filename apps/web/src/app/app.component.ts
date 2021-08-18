import { Component } from '@angular/core';
import { ApiService } from './services/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'projects-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // フォームグループの名前
  myFrom = new FormGroup({
    message: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
  });

  constructor(private apiService: ApiService) {}

  submit() {
    // 送信
    this.apiService.post('create', this.myFrom.value).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
      },
      (err) => {
        console.log(JSON.stringify(err));
      }
    );
    console.log(this.myFrom.value);
    // 送信したら消す
    this.myFrom.reset();
  }
}
