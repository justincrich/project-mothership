
# Mothership Programming Challenge

## Install
* clone repo
* install dependencies
 * npm: ```npm run install```
 * yarn: ```yarn install```
* Add add ```.env``` file and paste environment variables provided
  * in base directory (not '''src''')

## Run
* run app
 * npm: ```npm run start```
 * yarn: ```yarn start```
* Navigate to ```http://localhost:3000/billing```

## Considerations
* No mobile optimization
 * I usually program mobile first, however lacking design or product guidance I implemented only the desktop design
* Search is just a input field w no functionality
* Payment methods cannot be changed
 * dropdown works, but functionality to change the payment type is out of scope
* Page links just nav to a blank holder
* User interface (i.e. username) provides no functionality
 * No dropdown

## Technical Design Decisions
* Global data stored in redux, local is stored/managed within the relevant page using useReducer
 * Payment methods is sensitive local data used only on the billing page
 * User data is global data that should be available on any page
