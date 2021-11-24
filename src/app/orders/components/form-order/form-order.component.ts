import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {
  public states = StateOrder;
  @Input() init!: Order;
  public form!: FormGroup;
  @Output() submitted = new EventEmitter<Order>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt, Validators.required],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta: [this.init.typePresta, Validators.required],
      client: [this.init.client, [Validators.required,Validators.minLength(2)]],
      comment: [this.init.comment],
      id: [this.init.id]
    })
    console.log(this.form.value);
    
  }

  public onSubmit(): void {
    console.log(this.form.value);
    this.submitted.emit(this.form.value);
    
  }

}
