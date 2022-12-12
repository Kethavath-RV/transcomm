import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { CreateOutboundCommand } from '../impl/create-outbound';
import { CommonService } from 'database/common.service';

@CommandHandler(CreateOutboundCommand)
export class CreateOutboundHandler implements ICommandHandler<CreateOutboundCommand> {
    private logger = new Logger(this.constructor.name);
    constructor(
        private commonService: CommonService,
    ) { }

    async execute(command: CreateOutboundCommand): Promise<void> {
        const { outboundData } = command;
        this.logger.debug("data in command handler", JSON.stringify(outboundData));
        await this.commonService.createInbound({});
    }
}


