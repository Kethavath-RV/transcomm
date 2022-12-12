import { Type } from "class-transformer";
import { IsNotEmpty, ValidateNested } from "class-validator";
import { InboundModel, InboundLineModel } from "core";


class InboundLineModelDto implements InboundLineModel {
    line_id: string;
    goods_desc: string;
    commodity_code: string;
    mfg_country_code: string;
    goods_value?: string;
    duty_amt: string;
    tax_amt: string;
    duty_currency: string;
    mop1: string;
    mop1_value: string;
    mop2: string;
    mop2_value?: string;
}

export class InboundModelDto implements InboundModel {
    @IsNotEmpty()
    messageType: string;
    @IsNotEmpty()
    shipper_acc_no: string;
    @IsNotEmpty()
    hawb_no: string;
    @IsNotEmpty()
    order_id: string;
    declaration_status: string;
    declaration_no: string;
    declaration_date: string;
    incoterm: string;
    line_items: [];

}
