import { StackTopology } from '../stack-topology/stack-topology.entity';

// @TODO extract each class in a separate file when entity graph will be finished
// @TODO find a better name fot "Topology"
export class Stack {
  public name: string;
  public topology: StackTopology;
  public technologies: Technology[];
}

export class Technology {
  public name: string;
  public languages: Language[];
  public basedOn: Technology[];
}

export class Language {
  public name: string;
  public isCompiled: boolean;
  public complexity: Complexity;
}

export class Complexity {
  public constructor(
    public readonly value: number,
  ) {}
}
