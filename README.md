Luma-Project is an end-to-end testing project built using [Playwright & typescript]([https://playwright.dev/](https://magento.softwaretestingboard.com/)). 
It automates various user flows for the Luma e-commerce platform, such as login, adding items to the cart, and processing payments.

---

## **Project Structure**
mom-project-LUMA/ 
├── page/ # Page Object Model (POM) classes │ 
  ├── AddToCart.ts # Handles adding items to the cart │ 
  ├── Login.ts # Handles user login functionality │ 
  ├── ProcessPayment.ts # Handles payment processing │ 
  └── CreateNewAccount.ts # Handles account creation 
├── tests/ # Test files │ 
  ├── AddToCart.spec.ts # Test for adding items to the cart │ 
  ├── Login.spec.ts # Test for login functionality │ 
  ├── ProcessPayment.spec.ts # Test for payment processing │ 
  └── CreateNewAccount.spec.ts # Test for account creation 
├── data/ # Test data(data driving) │ 
  └── loginData.ts # Contains login credentials 
├── .gitignore # Files and folders to ignore in Git 
├── playwright.config.ts (only execute in Chrome enviroment right now)# Playwright configuration
 
└── README.md # Project documentation
