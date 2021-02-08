# Tic Tac Toe App, Karl Gall

### Basic Design principles

I have been using the atomic design principle in most of my react apps. I find it generally easy to follow and simple to reuse components.

Generally speaking, smaller components with less logic would be considered atoms. Larger components with more logic and atom components within them, are molecules. Larger components with Molecules within them would be considered Organisms, etc, etc.

        Ex. Atoms -> Molecules -> Organisms -> Templates -> Pages

Atomic design principles link: https://codeburst.io/atomic-design-with-react-e7aea8152957

### Reasoning behind main technical choices

Overall, my technical choices aren't anything too complex or difficult to understand.

useContext: I chose to use useContext vs something like Redux in most applications I have developed (unless a requirement or specification wants to utilize Redux). I find it fairly simple to maintain global state, by referencing context data, and updating state with the global methods. The important thing to note is that ReactJS is a library, not a framework. ReactJS allows the developers to get creative and 'develop' their own frameworks that suit them.

React Router v4: React-router is pretty common in most ReactJS applications. Since the application by nature is not that verbose, having routes is not absolutely imperative. However, I do like to utilize the useHistory hook in some of my conditionals.

Logic for the game: Many topics in software development have a large set of ways to implement logic. It pretty much boils down to the most optimal logical process. I tried my best within this application to keep the logic for checking the board very 'modular'. It would be easy to fall into "if-else hell", so I often try to find ways to not have many embedded if-else's. However, sometimes it is necessary.

Material-UI: Is an approach that really makes it easy for the developer to focus on logic and not so much on styling. Though, styling and writing CSS if quite vital, material-ui makes it easy to implement clean components without a lot of work. But it is always important to read the props of each material-ui component or module that is being implemented.

### Things I would implement / Trade-offs I made

1. Suggested Move: This seemed like a fun challenge to implement, unfortunately I ran a little short on time. However, I would try to implement something like the following (pseudo-code):

   1a. More or less, the first move, should be in any one of the corners. The corners generally are the most advantageous spot. One could implement something to check if the board is blank for the suggested move at first, if so, suggest a corner.
   2b. From a more defensive approach, the board could be searched to check if the opponent has 2 in a row. (with the functions created in checkBoard.js, with slight logic changes). If the opponent has 2 in a row, suggest a move in the third position that proceeds the opponent's 2-in-a-row.
   2c. A more offensive approach, would be quite similar to 2b. with the exception of looking for X's instead of the opponents O's.

2. Trade-offs: Had I spent a little more time with styling, I wouldn't have window.alert's at all. I would utilize the Modal from material-ui to show win, loss, or draw. I was quite a bit more focused on the board checking than the styling of showing winning/losing/draw. I would definitely change that.

### How to run

1. clone repository, from master branch.
2. npm install or yarn.
3. npm run start.
