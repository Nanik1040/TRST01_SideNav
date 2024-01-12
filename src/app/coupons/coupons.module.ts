import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { couponsRoutingModule } from "./coupons-routing.module";
import { couponsComponent } from "./coupons.component";
import { CouponListComponent } from "./coupon-list/coupon-list.component";

@NgModule({
  declarations: [couponsComponent, CouponListComponent],
  imports: [CommonModule, couponsRoutingModule],
})
export class couponsModule {}
