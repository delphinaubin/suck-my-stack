import { Injectable } from '@nestjs/common';

@Injectable()
export class StackService {
  public getAllStacks() {
    return [
      { name: 'web'},
      { name: 'microservice'},
      { name: 'client lourd'},
    ];
  }

}
