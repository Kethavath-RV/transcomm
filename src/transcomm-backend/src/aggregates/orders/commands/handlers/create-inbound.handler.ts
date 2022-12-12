import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { CreateInboundCommand } from '../impl/create-inbound';
import { CommonService } from 'database/common.service';

@CommandHandler(CreateInboundCommand)
export class CreateInboundHandler implements ICommandHandler<CreateInboundCommand> {
    private logger = new Logger(this.constructor.name);
    constructor(
        private commonService: CommonService,
    ) { }

    async execute(command: CreateInboundCommand): Promise<void> {
        this.logger.log("entred into command handler............");
        const { inboundData } = command;
        this.logger.debug("data in command handler", JSON.stringify(inboundData));
        
        await this.commonService.createInbound({
            "shipper_acc_no": inboundData.shipper_acc_no,
            "hawb_no": inboundData.hawb_no,
            "order_id": inboundData.order_id,
            "declaration_status": inboundData.declaration_status,
            "declaration_no": inboundData.declaration_no,
            "declaration_date": inboundData.declaration_date,
            "incoterm": inboundData.incoterm,
        });
    }
}

