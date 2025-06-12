import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { AnimatorService } from '../services/animator.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../services/api/email.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('animatedText') animatedText!: ElementRef;

  contactTitle = "Contact Me"
  contactForm!: FormGroup;
  submitted = false;

  constructor(
    private renderer: Renderer2,
    private textAnimator: AnimatorService,
    private fb: FormBuilder,
    private emailService: EmailService
  ){
    this.initiateForm();
  }

  ngAfterViewInit() {
    this.textAnimator.animateText(this.contactTitle, this.animatedText.nativeElement, this.renderer);
  }

  initiateForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      this.emailService.sendMessage(this.contactForm.value).subscribe({
        next: (response: any) => {
          this.submitted = false,
          this.contactForm.reset();
        },
        error: (error) => {
          console.log(error)
        }
      });
    }
  }
}
