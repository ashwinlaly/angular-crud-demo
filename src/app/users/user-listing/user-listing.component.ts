import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {

  @Input() users: any;
  @Output() emitter = new EventEmitter<any>();
  @Output() deleteEmitter = new EventEmitter<Boolean>();

  constructor(private $userService : UserService) { }

  ngOnInit() {
  }

  deleteuser(data){
    this.$userService.deleteuser(data._id).subscribe(
      res => {
        this.deleteEmitter.emit(true);
      },
      err => {
        console.log(err)
      }
    )
  }

  edituser(data){
    this.emitter.emit(data)
  }

}
