# German Prepositions Learning Game 🎮

A fun and interactive web-based game designed to help German language learners master verb-preposition combinations. Perfect for students at all levels who want to improve their German grammar skills through engaging gameplay.

**🔗 [Play Online Demo](https://mhsenpc.github.io/german_prepositions/)**

## 🎯 Features

- **8 Progressive Levels**: Start with basic verbs and advance to more complex combinations
- **Interactive Learning**: Click on prepositions to match them with displayed verbs
- **Lives System**: 3 hearts per game - lose one for each wrong answer
- **Score Tracking**: Earn points based on level difficulty
- **High Score**: Persistent high score saved in browser localStorage
- **Progress Visualization**: Track your completion through each level
- **Hint System**: Visual hints highlight correct prepositions
- **Responsive Design**: Works on desktop and mobile devices

## 🎮 How to Play

1. **Start the Game**: The game automatically loads when you open the page
2. **Match Prepositions**: Click on the correct preposition(s) for each verb displayed
3. **Complete Verbs**: Once all correct prepositions are selected, you'll advance to the next verb
4. **Progress Through Levels**: Complete all verbs in a level to unlock the next one
5. **Lives Management**: You have 3 lives - wrong answers cost you a heart
6. **Score Points**: Higher levels give more points (Level + 2 points per correct verb)

## 📚 Learning Content

The game includes **300+ German verbs** with their correct prepositions, organized by difficulty:

### Level 1 (Beginner)
- Basic verbs like `abhängen von`, `achten auf`, `anfangen mit`
- Simple, commonly used verb-preposition combinations

### Level 2 (Elementary)
- Verbs like `ausgeben für`, `danken für`, `denken an`
- Expanding vocabulary with familiar structures

### Level 3 (Intermediate)
- More complex verbs like `sich ärgern über`, `diskutieren mit/über`
- Reflexive verbs and multiple preposition options

### Levels 4-8 (Advanced)
- Sophisticated verb-preposition combinations
- Business and academic German vocabulary
- Complex grammatical structures

## 🛠️ Technology Stack

- **HTML5**: Semantic structure
- **CSS3**: Responsive styling and animations
- **JavaScript (ES6+)**: Game logic and state management
- **LocalStorage**: Persistent high score storage
- **No external dependencies**: Pure vanilla JavaScript

## 📁 Project Structure

```
prepositions_web/
├── index.html              # Main game interface
├── game.js                 # Game logic and mechanics
├── verbs_mit_prepositions.js  # Verb database with levels
├── styles.css              # Game styling and animations
└── README.md               # This file
```

## 🚀 Getting Started

### Local Development
1. **Clone the repository** (or download the files)
2. **Open `index.html` in your web browser**
3. **Start playing!** No build process required

### Web Deployment
The game is ready to deploy on any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Any web server

## 🎨 Game Features

### User Interface
- **Clean Header**: Shows current level, score, high score, and remaining lives
- **Central Game Area**: Verb display and preposition buttons
- **Progress Footer**: Visual progress bar and completion status
- **Game Over Modal**: Shows final score with restart option

### Game Mechanics
- **Progressive Difficulty**: Each level introduces more complex verbs
- **Visual Feedback**: Color-coded buttons (green for correct, red for incorrect)
- **Timeout Delays**: Brief pauses between rounds for better user experience
- **State Management**: Proper game state handling and progression

### Learning Aids
- **Hint Animation**: Correct prepositions are subtly highlighted
- **Multiple Selection**: Some verbs require multiple prepositions
- **Immediate Feedback**: Instant response to correct/incorrect selections

## 🎯 Educational Value

This game helps German learners:
- **Master verb-preposition combinations** through repetition
- **Build muscle memory** for correct grammatical structures
- **Learn progressively** from basic to advanced vocabulary
- **Stay motivated** through gamification elements
- **Track progress** with scoring and level advancement

## 🔄 Game Flow

1. **Initialize Game**: Load current level and display first verb
2. **Display Prepositions**: Show all available prepositions as buttons
3. **Handle Selection**: Process user clicks and provide feedback
4. **Check Completion**: Verify all correct prepositions are selected
5. **Advance**: Move to next verb or level when completed
6. **End Game**: Handle game over or completion scenarios

## 📊 Scoring System

- **Points per correct verb**: `Level + 2`
- **Example**: Level 1 = 3 points, Level 8 = 10 points
- **High Score**: Automatically saved and persists between sessions
- **Progress Bonus**: Complete levels to unlock higher-scoring opportunities

## 🎮 Controls

- **Mouse Click**: Select prepositions
- **Touch Support**: Works on mobile devices
- **Keyboard Navigation**: Future enhancement possibility

## 🔧 Customization

### Adding New Verbs
Edit `verbs_mit_prepositions.js` to add new verb-preposition combinations:

```javascript
{
    level: 3,
    name: "deinVerb",
    prepositions: ["präposition1", "präposition2"]
}
```

### Styling Customization
Modify `styles.css` to change colors, fonts, and animations.

### Difficulty Adjustment
Adjust level assignments in the verb database or modify scoring in `game.js`.

## 🤝 Contributing

Feel free to contribute to this project by:
- Adding more German verbs and prepositions
- Improving the user interface
- Adding new features like sound effects or animations
- Reporting bugs or suggesting improvements

## 📝 License

This project is open source and available under the MIT License.

## 🎓 Acknowledgments

Created for German language learners worldwide. Special thanks to the German language community for providing valuable feedback on verb-preposition combinations.

---

**Happy Learning!** 🇩🇪✨

Made with ❤️ for German language learners