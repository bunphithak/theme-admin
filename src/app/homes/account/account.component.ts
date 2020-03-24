import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { MatDatepicker } from '@angular/material';
import { Moment } from 'moment';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public accountForm: FormGroup;
  items: FormArray;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.accountForm = this.formBuilder.group({
      branch: [''],
      transaction_date: [new Date()],
      month_bill: ['dddd'],
      items: new FormArray([])
    });
  }

  createItem(date = null): FormGroup {
    return this.formBuilder.group({
      account_date: [date ? date : ''], // วันที่ขาย
      account_total_money_sale: [], // ยอดรวมเงินขาย
      account_expense: [], // เงินขาย	ยอดหักค่าใช่จ่าย
      account_money_transfer_amount: [], // ยอดโอนเงิน
      account_accrued_transfers: [], // ค้างโอนขาย
      account_wage: [], // ค่าแรง
      account_special_wage: [], // ค่าแรงพิเศษ
      account_import: [], // ค่าสินค้าเข้า
      account_sticky_rice_price: [], // ค่าข้าวเหนียว
      account_buying_oil: [], // ซื้อน้ำมัน
      account_description: [], // รายละเอียดอื่นๆ
      account_expenditure: [], // รายจ่าย
      account_waste: [], // ของเสีย
      account_revenue: [] // รายรับ
    });
  }

  addItem(): void {
    this.items = this.accountForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  chosenMonthHandler(
    normalizedMonth: Moment,
    datepicker: MatDatepicker<Moment>
  ) {
    const monthSelect = moment(normalizedMonth).format('YYYY-MM');
    this.accountForm.get('month_bill').setValue(new Date(monthSelect));
    datepicker.close();
    this.createFormArray(normalizedMonth);
  }

  createFormArray(monthSelect) {
    this.clearFormArray(this.accountForm.get('items') as FormArray);
    const dateCount = moment(monthSelect, 'YYYY-MM').daysInMonth();
    for (let index = 0; index < dateCount; index++) {
      this.items = this.accountForm.get('items') as FormArray;
      const date = `${index + 1}-${moment(monthSelect).format('MM-YYYY')}`;
      this.items.push(this.createItem(date));
    }
  }

  clearFormArray = (formArray: FormArray) => {
    while (formArray.length !== 0) {
      formArray.removeAt(0);
    }
  }
}
