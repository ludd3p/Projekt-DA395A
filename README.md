## Project description: F1 Race Statistics
This project is a web application and the final project for the course DA395A at Malmö University.
The application allows users to browse all individual F1 races on a set year by selecting a year from a dropdown menu.
A race can be selected and will then show the finishing order of the drivers. If a race has yet to occur it will simply show a message.
A user can choose to save favourite races to be accessed at a later time.

## Launch project

Run the development server.

```bash
# Locate project folder
cd ./path-to-project
# Install project dependencies
npm install
# Then run the project
npm run dev
# or
yarn dev
# or
pnpm dev
```
Result is shown at http://localhost:3000

## About the project
The project is built using TypeScript, and Next.js which is an extension of the React framework.
Application utilizes the free API http://ergast.com/mrd/ for fetching the F1 data.
For development we used a collaborative pair programming approach using Discord.
### The main reasons we chose to use Next.js over Angular or Vue are:
- It is a React framework, and we are more familiar with React than Angular or Vue.
- As React has the largest community, it is easier to find solutions to problems we encounter.
- React is currently the most popular framework with the most job openings, and as such it would be of higher value to learn it compared to the others.
- Next.js has one of the highest user satisfaction ratings of all frameworks, and is the most popular React framework.
- Angular could have been a choice as it used in many existing applications, has a lot of job openings and is more object oriented which we are more familiar with. However, it's popularity is declining and it has very low user satisfaction compared the other frameworks, is more complex and has a steeper learning curve and is supposedly more aimed at larger applications.
- Vue is a good choice for smaller applications, but is not as popular as React and Angular and has a lower user satisfaction rating than Next.js.
- As we are currently finishing our bachelor's degree, there is an appeal in taking the familiar to avoid having to learn a new framework from scratch considering the time constraints from both the thesis and this project.