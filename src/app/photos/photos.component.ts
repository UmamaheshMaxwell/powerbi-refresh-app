import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PhotoService } from '../services/photo.service';
import { ConfirmDialogService } from '../confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: any =[]

  constructor(private photoService: PhotoService,
              private confirmDialogService: ConfirmDialogService, 
              private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getPhotos()

  }

  getPhotos(){
    this.SpinnerService.show();  
    this.photoService.getPhotos().subscribe(data =>{
      this.photos = data;
      this.SpinnerService.hide();  
    })
  }

  spinLoader= false;
  onSubmit() {
    this.spinLoader = true
  }

  showDialog() {  
    this.confirmDialogService.confirmThis("Are you sure to delete?", function () {  
      alert("Yes clicked");  
    }, function () {  
      alert("No clicked");  
    })  
  } 
}
