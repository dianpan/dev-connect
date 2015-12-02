# Dev Connect
Dev Connect is a subscription based site where users can connect to a community of investors, entrepreneurs and developers.  Any user can sign up for free and receive basic view only access to members of the community. Paid users can access all users and their contact information. [View live site](http://dev-connections.herokuapp.com/). 

#### Goals
I created this site to continue to practice Rails and build on my existing knowledge.  I also used this project to learn new technologies like utilizing APIs, email functionality, and additional CSS frameworks.

#### Technologies used: 
- Backend: Rails 
- Database: Postgres 
- APIs: [Stripe](https://github.com/stripe/stripe-ruby), [SendGrid](https://sendgrid.com/docs/API_Reference/index.html) 
- CSS framework: [Bootstrap](http://getbootstrap.com/)
- User authentication: [Devise](https://github.com/plataformatec/devise)
- Image hosting: [Paperclip](https://github.com/thoughtbot/paperclip)

#### How to run this code 
```
git clone the repo 
cd into repo
in terminal, run 'bundle install' 
in terminal, run 'rake db:setup'
in terminal, run 'rails s'
in browser, navigate to 'localhost:3000'
```

####Free users 
- signup for the free user account 
- no access to user contact information

####Premium users 
- use the following credit card simulation for premium user access: 
```
card number: 4242424242424242
CVV: any 3 digit number
expiration date: any date in the future 
```
- access to all user contact information 

