# COMPSCI 326 Git Workflow Lab

## Lab Description

This project considers the topic of real-world collaboration workflows in git
and GitHub for software development in agile teams. Components of collaboration
workflows that will be touched upon include development branches, production
branches, feature branches, pull requests, code reviews, and ticket tracking.
While there are discrete workflows that teams follow, it is also important to
emphasize that standard workflow definitions are completely up to the individual
teams/companies. These standards are, in fact, most often altered to better fit
the work environment at hand. The presented workflow components serve as a
foundation for learning how to customize the optimal workflow for a development
team.

## Intended learning outcomes (ILOs)

You are expected to distinguish between different types of workflows for
managing a git repository and know how to deal with merge conflicts. You will
also learn how to communicate with other team members in a git setting to get
changes implemented and pushed. You should understand the importance of tests in
ensuring the production branch is reliably functional.

## Features

- Basic arithmetic operations: `+`, `-`, `*`, `/`
- Clear (`Clear`) and delete last character (`Del`) buttons
- Memory storage (`Store`), memory recall (`Recall`), and memory clear (`Reset`)
  functionality
- Error handling for invalid inputs

### Implemented Features:

- [x] Display for calculator operations
- [x] Basic arithmetic functions
- [x] Clear and Delete buttons

### TODO Features:

- [ ] Implement square root function
- [ ] Implement square function
- [ ] Add keyboard support for number input
- [ ] Improve the design (CSS styling)
- [ ] Fix reciprocal function
- [ ] Implement sine function
- [ ] Implement cosine function
- [ ] Implement tangent function

## How to Set Up The Lab

1. Fork this template repository (have only ONE student do this)
2. Add all contributing students to the list of repository contributors
3. Create ticket in Issue's tab
4. Clone your fork:
   ```bash
   git clone https://github.com/your-username/js-calculator.git
   ```
5. Create a new branch with name matching corresponding issue:
   ```bash
   git checkout -b feature/my-feature
   ```

6. Make your changes and commit them:
7. Push your changes to your fork:
   ```bash
   git push origin feature/my-feature
   ```

## Setup
1. Install node.js (if not already on system) https://nodejs.org/en/download/package-manager/
2. Run `npm i` to install project dependencies.
3. Use `npm run test` in order to verify that project tests run as expected.

## Instructions

In your group of 7 each student should assign themselves a number 1-7. Make sure this assignment is clear to everyone! Each person will be pushing one change to the repository and reviewing one change made by another student.

1. (STUDENT A) Select 1 issue from the list above (TODO features) and create corresponding ticket on GitHub issues. Include descriptions, tags, and assignments in the issues. Make sure to assigning the issue to yourself.
2. (STUDENT A) Create the branch corresponding to the issue assigned to yourself. Make and push any changes to complete the issue. Don't forget about adding and running tests in the tests file. Create a pull request for the branch and assign the STUDENT #2 as a reviewer.
3. (STUDENT B) Review the PR from STUDENT #1 and create any necessary comments (write at least one comment).
4. (STUDENT A) Respond to the STUDENT #1 comments and make any additional commits to fix the changes.
5. (STUDENT B) Check that any comments are resolved and then approve/merge STUDENT #1's PR.

Repeat steps 1 through 5 for pairs of students 1 and 2, 2 and 3, 3 and 4, ..., 6 and 7, 7 and 1. Everyone should be commiting one change to the repository and then reviewing the next student's change. If you have less than 7 students in your group, reduce the pairs accordingly following the same pattern.

## Submission

Once you have completed the activity, upload a link of the forked repository to the gradescope assignment. Make sure the repository visibility is set to public.
