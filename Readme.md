Day 03
======

> In this day, you have to develop a complete project. However, you don't do it alone.

> This exercise helps you learn how to communicate and synchronize your work with other team members.

> By the time when the workday is over, we hope that you will work comfortably with Git (a well-know Source Versioning Control system) and the Git flow.

> Follow the Git flow carefully help you avoid getting many serious problems in real projects. So let's practice as if you are playing with a knife scary sharp :D

# Scenario

Root wants to make a game that named Game Of Life. He wants that game run on the website with beautiful graphic and develop easily. So he decided to use [p5js](http://p5js.org) (a javascript library) to develop the game.

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, or "populated" or "unpopulated" (the difference may seem minor, except when viewing it as an early model of human/urban behavior simulation or how one views a blank space on a grid). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

1. Any live cell with fewer than two live neighbours dies, as if caused by under-population.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by over-population.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.

Root wrote and prioritized user stories for his game as below:

## Game of Life Backlog

1. Display a board that has m rows and n columns on the screen (the number m, n depend on width and hight of the display canvas and the size of each cell on the board).
2. As a player I can place seeds on the board by click on the cell.
3. The seeds will growing by the rules of the Game of Life when user clicks Start button.
4. Change the color of the living cell to green.
5. Change the color of *Still lifes* block to blue.
6. Change the color of the *Glider* to red.

### The Root's Planing notes

| Step | To Do | Programmer | Git Branch |
|----|---|------------|--------------|
| 00 | 0 | You | develop |
| 01 | 1   | Root| feature/display_board |
| 02 | 2   | You | feature/seeding |
| 03 | 3.1 | Root | feature/display_start_button |
| 04 | 3.2 | You | feature/play_game_of_life |
| 05 | 3.3 | You | master:release1.0|
| 06 | 4   | Root | feature/change_color_living_cell|
| 07 | 5   | You | feature/change_color_still_lifes
| 08 | 7   | You | hotfix/change_color_living_cell
| 09 | 6   | You | feature/change_color_glider
| 10 | 8   | You | master:release1.1
| 11 | 10  | You | support:release1.0.1

### Implementation Guidelines

#### Step 00: Configure your local repository

    1. Connect to the remote repository:
    2. Configure git author & email
    3. Checkout develop branch

#### Step 01: [This is the Root's tasks] Develop feature/display_board

#### Step 02.0: Merge the feature/display_board to develop branch

#### Step 02.1: Develop feature/seeding

    1. Create the feature branch
    2. Implement the feature
    3. Commit change to local repository
    4. Share your feature branch (hint: you have to resolve some conflicts)

#### Step 03: [This is the Root's task] Develop feature/display_start_button

#### Step 04.0: Merge feature/display_start_button to develop branch

#### Step 04.1: Develop feature/play_game_of_lifes

    1. Create the feature branch
    2. Implement the feature
    3. Commit change to local repository
    4. Share your feature branch

#### Step 05: Releases version 1.0

    1. Create the release/v1.0 branch
    2. Make the merge request from release/v1.0 to master
    3. Make sure all your test pass
    4. Finalize the release branch

#### Step 06: [This is the Root's task] Develop feature/change_color_living_cell

#### Step 07.0: Merge the feature/change_color_living_cell to develop branch

#### Step 07.1: Develop the feature/change_color_still_lifes

#### Step 08: There are some bugs. You have to fix them before continue

    1. Create the hotfix/change_color_living_cell
    2. Fix the bugs
    3. Finalize the hotfix branch

#### Step 09: Develop the feature/change_color_glider

#### Step 10: Releases version 1.1

#### Step 11: There are bugs on version 1.0. You have to support this version.

    1. Create the support/v1.0 branch
    2. Create a hotfix for that branch
    3. Finalize the hotfix branch
    4. Release version 1.0.1 on the support branch

#### Step 12: Remove all .DS_Store files on all the branches of the repository

# Git Flow Practices

## Initialize

```sh
$ git init
$ git commit --allow-empty -m "Initial commit"
$ git checkout -b develop master
```

## Connect to the remote repository

```sh
$ git remote add origin MYREPO_URL
```

## Features

### Create a feature branch

```sh
$ git checkout -b feature/MYFEATURE develop
```

### Share a feature branch

```sh
$ git checkout feature/MYFEATURE
$ git push origin feature/MYFEATURE
```


### Get latest for a feature branch

```sh
$ git checkout feature/MYFEATURE
$ git pull --rebase origin feature/MYFEATURE
```


### Finalize a feature branch

```sh
$ git checkout develop
$ git merge --no-ff feature/MYFEATURE
$ git branch -d feature/MYFEATURE
```


### Push the merged feature branch

```sh
$ git push origin develop
$ git push origin :feature/MYFEATURE _(if pushed)_
```

## Releases

### Create a release branch

```sh
$ git checkout -b release/1.2.0 develop
```

### Share a release branch

```sh
$ git checkout release/1.2.0
$ git push origin release/1.2.0
```

### Get latest for a release branch

```sh
$ git checkout release/1.2.0
$ git pull --rebase origin release/1.2.0
```

### Finalize a release branch

```sh
$ git checkout master
$ git merge --no-ff release/1.2.0
$ git tag -a 1.2.0
$ git checkout develop
$ git merge --no-ff release/1.2.0
$ git branch -d release/1.2.0
```

### Push the merged feature branch

```sh
$ git push origin master
$ git push origin develop
$ git push origin --tags
$ git push origin :release/1.2.0 _(if pushed)_
```

## Hot-fixes

### Create a hotfix branch

```sh
$ git checkout -b hotfix/1.2.1 [commit]
```

### Finalize a hotfix branch

```sh
$ git checkout master
$ git merge --no-ff hotfix/1.2.1
$ git tag -a 1.2.1
$ git checkout develop
$ git merge --no-ff hotfix/1.2.1
$ git branch -d hotfix/1.2.1
```

### Push the merged hotfix branch

```sh
$ git push origin master
$ git push origin develop
$ git push origin --tags
$ git push origin :hotfix/1.2.1 _(if pushed)_
```
