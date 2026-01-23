import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule, RectangleEllipsis } from 'lucide-angular';

@Component({
  selector: 'app-personal-inquiry',
  imports: [LucideAngularModule],
  templateUrl: './personal-inquiry.html',
  styleUrl: './personal-inquiry.scss',
})
export class PersonalInquiry {
  readonly fieldIcon = RectangleEllipsis;

  constructor(private route: Router) {}

  validation(){
    this.route.navigate(['userValidation']);
  }

}
