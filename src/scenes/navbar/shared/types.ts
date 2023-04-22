export 

enum SelectedPage {
    Home = "home",
    Benefits = "benefits", 
    OurClasses = "ourclasses",
    ContactUs = "contactus"
  }
  
  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;

  }

  export interface ClassType {
    name: string;
    description?: string;  // Adding a question mark means the description is optional
    image: string;
  }
  
  