# Project Overview

This project is a 2D web-based game built with the Phaser framework.

The player controls a verb (e.g., bringen) displayed at the bottom of the screen.

By touching and dragging, the player positions the verb and releases to shoot it upwards.

From the top, five prepositions fall toward the bottom each round.

The goal is to shoot only the correct prepositions associated with the given verb.

Win/Lose conditions:

If the player successfully hits all correct prepositions before they reach the bottom, they score and move instantly to the next verb.

If a correct preposition reaches the bottom or the player loses all lives, the game ends.

## Game Levels

The game consists of 8 levels.

Each level introduces a set of verbs defined for that level.

## Gameplay

Falling mechanics: Prepositions fall slowly from the top of the screen toward the bottom.

### Shooting:

Touch and release fires the verb straight upward.

If the projectile collides with a preposition, it is checked for correctness.

### Hit results:

✅ Correct and last correct → advance immediately to the next verb.

✅ Correct but others remain → the preposition explodes; continue shooting the rest.

❌ Incorrect → lose one heart.

### Lives:

The player starts with 3 hearts.

Losing all hearts ends the game.

## Movement

Drag to move: Touch and drag left/right along the bottom of the screen.

Shoot on release: Lifting your finger fires the verb upward.

Boundaries: Movement is restricted within the horizontal screen limits.

The verb starts centered at the bottom but can be repositioned horizontally before each shot.

## Player Appearance

The player’s avatar is represented by:


The sprite should be wide enough to allow easy touch control.

## Scoring

Points per successful verb depend on the level:

Level 1: 3 points

Level 2: 4 points

Level 3: 5 points

…and so on.

The game records and stores the player’s high score.

## Colors

Prepositions are displayed with random background colors, regardless of correctness.

## Data Storage

All verbs and their corresponding correct prepositions and also level is stored in verbs_mit_prepositions.js