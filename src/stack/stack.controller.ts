import { Controller, Get } from '@nestjs/common';
import { StackService } from './stack.service';

@Controller('stack')
export class StackController {

  constructor(
    private stackService: StackService,
  ){}

  @Get()
  public getAllStacks() {
    return this.stackService.getAllStacks();
  }

}
