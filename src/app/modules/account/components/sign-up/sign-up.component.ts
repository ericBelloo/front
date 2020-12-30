
import { NgComponentOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor( private signUpService: AccountService ) { }

  ngOnInit(): void {
  }

}
