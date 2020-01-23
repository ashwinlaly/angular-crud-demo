import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userForm = new FormGroup({
    name : new FormControl(),
    email : new FormControl()
  })

  constructor(private $userService : UserService) { }

  users: any;
  updateState : Boolean = false;
  user_id: String

  ngOnInit() {
    this.getallusers()
  }

  saveuser(){
    this.$userService.createUser(this.userForm.value).subscribe(
      res => {
        this.getallusers()
      },
      err => {
        console.log(err)
      }
    )
  }

  getallusers(){
    this.$userService.getusers().subscribe(
      res => {
        this.users = res.val
      },
      err => {
        console.log(err)
      }
    )
  }

  edituser(e){
    this.updateState = true
    this.user_id = e._id
    this.userForm.setValue({
      name : e.name , 
      email : e.email
    })
  }

  updateuser(){
    this.updateState = false
    this.$userService.updateuser(this.user_id,this.userForm.value).subscribe(
      res => {
        this.userForm.setValue({
          name : '', 
          email : ''
        })
        this.user_id = ''
        this.getallusers()
      },
      err => {
        console.log(err)
      }
    )
  }

  deleteuser(){
    this.getallusers()
  }

}
