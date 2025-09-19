# Project Overview

This project is a 2D web-based game built desired tech stack. js or wasm. without requiring node

The player should click on the correct preposition(s)

Win/Lose conditions:

If the player successfully clicks on all correct prepositions, we show the next verb.

## Gameplay Flow

A verb appears in the center of the screen.

Around it, all possible prepositions are displayed in light-blue circles, arranged like chairs around a table.

The player clicks on the prepositions they think are correct.

## Game Levels

The game consists of 8 levels.

Each level introduces a set of verbs defined for that level.
They should come in order. so on level 1, we show the verb only from this level. and when user has solved all the puzzles in this level, we go to the next level

### Animations:

Preposition button click: brief “pressed” animation.

Correct answer highlight:

When a verb appears, all of its correct prepositions (clicked or not) slowly fade from light blue to green.

The fade effect takes 15 seconds.

This gives the player a hint toward the right answers.

### Clicking on Prepositions:

✅ Correct and last correct → Background turns green, Advance immediately to the next verb.

✅ Correct but more remain → 
Background turns green

Button becomes disabled

Wait for next input

❌ Incorrect → lose one heart.

### Lives:

The player starts with 3 hearts.

Losing all hearts ends the game.


## Scoring

Points per successful verb depend on the level:

Level 1: 3 points

Level 2: 4 points

Level 3: 5 points

…and so on.

The game records and stores the player’s high score.

## Data Storage

All verbs and their corresponding correct prepositions and also level is stored in verbs_mit_prepositions.js