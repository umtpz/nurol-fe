import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { CoreConfigService } from '@core/services/config.service';

@Component({
  selector: 'app-auth-forgot-password-v2',
  templateUrl: './auth-forgot-password-v2.component.html',
  styleUrls: ['./auth-forgot-password-v2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthForgotPasswordV2Component implements OnInit {
  // Public
  public emailVar;
  public coreConfig: any;
  public forgotPasswordForm: UntypedFormGroup;
  public submitted = false;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {FormBuilder} _formBuilder
   *
   */
  constructor(private _coreConfigService: CoreConfigService, private _formBuilder: UntypedFormBuilder) {
    this._unsubscribeAll = new Subject();

    // Configure the layout
    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        menu: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        customizer: false,
        enableLocalStorage: false
      }
    };
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.forgotPasswordForm.controls;
  }

  /**
   * On Submit
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgotPasswordForm.invalid) {
      return;
    }
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.forgotPasswordForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });

    // Subscribe to config changes
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      this.coreConfig = config;
    });

    document.addEventListener("mousemove", parallax);
    function parallax(event) {

      this.querySelectorAll(".parallax-bg-1").forEach((shift) => {
        if (event.pageX < window.innerWidth / 2)
          shift.style.transform = `translateX(0px) translateY(0px)`;
        else {
          const x = ((window.innerWidth / 4) * 3 - event.pageX) / 180;
          const y = (window.innerHeight - event.pageY) / 180;
          shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }
      });
      this.querySelectorAll(".parallax-bg-2").forEach((shift) => {
        if (event.pageX < window.innerWidth / 2)
          shift.style.transform = `translateX(0px) translateY(0px)`;
        else {
          const x = ((window.innerWidth / 4) * 3 - event.pageX) / 90;
          const y = (window.innerHeight - event.pageY) / 90;
          shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }
      });
    }

  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
