# J'ai mis Hibernate mais pas de base de données --> KO
#   --> Notion de dépendance entres les technologies (entre 1 techno et 1 famille de techno)

Feature: Incorehences detection
  As a developper
  I want to be warned if i add a stack with incoherences
  In order to be able to fix the errors

Scenario: Bob succesfully add a stack
  Given the following technologies
  | Name     | Family            |
  | React    | Front framework   | 
  | Express  | Backend framework |
  | Mongoose | ODM               |
  | Mongo DB | Document database |

  And the "Mongoose" technology has the following dependencies
  | Document database |
  
  When Bob try to add the stack named "The Bob's stack" with the following technologies :
  | React    |
  | Express  |
  | Mongoose |
  | Mongo DB |
  
  Then the stack named "The Bob's stack" is created with the following technologies :
  | React    |
  | Express  |
  | Mongoose |
  | Mongo DB |

Scenario: Bob try to add a stack but a dependency is missing
  Given the following technologies
  | React    |
  | Express  |
  | Mongoose |

  And the "Mongoose" technology has the following dependencies
   | Document database |

  When Bob try to add the stack named "The Bob's stack" with the following technologies :
  | React    |
  | Express  |
  | Mongoose |

  Then Bob can see the error "The Mongoose's dependency named Document database is missing in given technologies"

  And the stack is not added

