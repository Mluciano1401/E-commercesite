import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-chatmodal',
  templateUrl: './chatmodal.component.html',
  styleUrls: ['./chatmodal.component.css']
})
export class ChatmodalComponent implements OnInit {
  textForm!: FormGroup;
  message: string = '';
  messages: Array<string> = [];
  constructor(
    private matDialogRef: MatDialogRef<ChatmodalComponent>,
    private fb: FormBuilder,
  ) { 
    this.fb = fb;
  }

  ngOnInit(): void {
    this.form();
  }

  private form():void{
    this.textForm = this.fb.group({
      text: ['', ],
    })
  }
  modalClose(){
    this.matDialogRef.close()
  }
  send(){
    const messageUser = {
      text: this.textForm.get('text')?.value,
    }
    this.message = messageUser.text;
    this.messages.push(this.message);
    this.textForm.reset();
  }
}
