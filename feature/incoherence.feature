# J'ai mis Angular et React --> KO
#   Notion de roles de technologies
# J'ai mis PHP et JAVA dans une stack de topologie client serveur -> KO
#   
# J'ai mis PHP et JAVA dans un stack de topologie micro service --> OK



Feature: Incorehences detection
  As a developper
  I want to be warned if i add a stack with incoherences
  In order to be able to fix the errors

Scenario: Bob succesfully add a stack
  
  Given the following technologies
  | Name     |
  | React    |
  | Express  |
  | Mongo DB |
  
  When Bob try to add the stack named "The Bob's stack" with the following technologies :
  | React    |
  | Express  |
  | Mongo DB |
  
  Then the stack named "The Bob's stack" is created with the following technologies :
  | React    |
  | Express  |
  | Mongo DB |

Scenario: Bob add the same technology twice
  
  Given "React" is a technology
  When Bob try to add the stack named "The Bob's stack" with the following technologies :
  | React |
  | React |
  
  Then Bob can see the error "Duplicate technology error"
  And the stack is not added

Scenario: Bob try to add 2 front end framework in his stack

  Given the following technologies
  | Name     | Family            |
  | React    | Front framework   | 
  | Angular  | Front framework   | 
  | Express  | Backend framework |

  When Bob try to add the stack named "The Bob's stack" with the following technologies :
  | React    |
  | Angular  |
  | Express  |

  Then Bob can see the error "React and Angular technologies are redundant"
  And the stack is not added
