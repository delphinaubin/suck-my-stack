export class Stack {
  public name: string;
  public technologies: Technology[];
}

export class TechnologyFamily {

}

export class Technology {
  public family: TechnologyFamily;
  public dependencies: TechnologyFamily[];
}

interface Rule {
  isApplicable(stack: Stack): boolean;
  isOk(stack: Stack): boolean;
}

export class ShouldSatisfyDepenciesRule implements Rule {
  isApplicable(stack: Stack): boolean {
    return true;
  }
  public isOk(stack: Stack): boolean {
    // Apply the rule and return true if all depencies are satisfied and false otherwise
    return true;
  }
}

export class ShouldNotHaveDuplicate implements Rule {
  isApplicable(stack: Stack): boolean {
    return true;
  }
  public isOk(stack: Stack): boolean {
    // Apply the rule and return true if all there is no duplicates
    return true;
  }
}