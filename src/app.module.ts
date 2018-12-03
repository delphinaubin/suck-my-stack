import { Module } from '@nestjs/common';
import { StackController } from './stack/stack.controller';
import { StackService } from './stack/stack.service';
import { StackTopologyService } from './stack-topology/stack-topology.service';

@Module({
  imports: [],
  controllers: [StackController],
  providers: [StackService, StackTopologyService],
})
export class AppModule {}
