import { Controller, Get } from '@nestjs/common';

@Controller('time')
export class TimeController {
    @Get()
    getTime(): string {
        const time = new Date().toLocaleTimeString();
        return time
    }

}
