import { Type } from "class-transformer";
import { IsNotEmpty, ValidateNested} from "class-validator";
import { OutboundModel,OutboundMessageModel } from "core";


class OutboundMessageModelDto implements OutboundMessageModel{
    @IsNotEmpty()
    shipper_acc_no: string;
    @IsNotEmpty()
    hawb_no: string;
    @IsNotEmpty()
    order_id: string;
}


export class OutboundModelDto implements OutboundModel{
    @IsNotEmpty()
    messageType: string

    @ValidateNested({each:true})
    @Type(()=>OutboundMessageModelDto)
    message:OutboundMessageModelDto[]
}