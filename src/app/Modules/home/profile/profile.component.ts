import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import StorageService from 'src/app/core/local-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export default class ProfileComponent implements OnInit {
  user: any;
  section: string | undefined;
  isedit = false;

  constructor(
    private aRouter: ActivatedRoute,
    private router: Router,
    private localStorageService: StorageService,
  ) {
    this.router = router;
    this.localStorageService = localStorageService;
    this.section = this.aRouter.snapshot.routeConfig?.path;
  }

  ngOnInit(): void {
    this.user = this.localStorageService.getItem('User');
    if(this.section === "profile/settings"){
      this.isedit = true;
    }
  }

  editable() {
    this.isedit = true;
  }

  cancel() {
    this.isedit = false;
  }

  save() {

  }
}
