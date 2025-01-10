# Minimal Viable Product (MVP) Requirements for "World Maker" and "World Travel"

---

## **Phase 1: Planning and Requirements**

### **Sub-task 1.1: Outline key features for World Maker**

-   **Requirements:**
    -   Map editor (simple grid-based system).
    -   Basic object placement (e.g., NPCs, items).
    -   Export functionality to save the created world in JSON format.

### **Sub-task 1.2: Outline key features for World Travel**

-   **Requirements:**
    -   Load a map created in **World Maker**.
    -   Simple player movement on the map.
    -   Basic interaction system (e.g., open dialogue with NPCs, pick up items).

### **Sub-task 1.3: Identify shared components**

-   **Requirements:**
    -   Common data format (JSON) for maps, characters, NPCs, and items to ensure compatibility between **World Maker** and **World Travel**.

---

## **Phase 2: Prototype Development**

### **Sub-task 1.1: Initialize basic p5.js project for World Maker**

-   **Requirements:**
    -   Create a minimal p5.js project with an `index.html` and `sketch.js` file.
    -   Basic setup to handle p5.js’s `setup` and `draw` functions.
    -   Display a blank canvas.

### **Sub-task 1.2: Create main menu in World Maker**

-   **Requirements:**
    -   A basic menu with options to start a new world or load an existing one.
    -   Display text-based options using p5.js’s text rendering functions.

### **Sub-task 1.3: Implement basic canvas for map creation**

-   **Requirements:**
    -   A grid-based canvas (e.g., 10x10 or 20x20 cells).
    -   Ability to place tiles (e.g., grass, water, mountain) on the grid by clicking.
    -   A simple tile-selection UI, possibly using HTML elements.

### **Sub-task 1.4: Simple tile system**

-   **Requirements:**
    -   Implement a basic tile system to represent terrain with unique IDs.
    -   A few basic tile types (e.g., grass, water, dirt).
    -   Map should be a 2D array storing tile IDs.

---

### **Sub-task 2.1: Initialize basic p5.js project for World Travel**

-   **Requirements:**
    -   Basic p5.js project setup with `index.html` and `sketch.js`.
    -   Load a map (grid of tiles) created by **World Maker**.
    -   Display map and basic UI (e.g., a sidebar for inventory or character stats).

### **Sub-task 2.2: Implement map loading in World Travel**

-   **Requirements:**
    -   Load the JSON format map exported by **World Maker**.
    -   Basic rendering of the map on the screen.
    -   Panning and zooming functionality.

### **Sub-task 2.3: Character movement on the map**

-   **Requirements:**
    -   Simple movement system allowing the player character to move across the map grid (up, down, left, right).
    -   Movement tied to key presses (e.g., arrow keys or WASD).

### **Sub-task 2.4: Display basic UI elements**

-   **Requirements:**
    -   A simple inventory window showing items.
    -   Display player stats (health, mana, etc.) on a static HUD.

---

## **Phase 3: World Maker Development**

### **Sub-task 1.1: Add complex terrain types**

-   **Requirements:**
    -   Expand the tile system with a few more terrain types (forest, mountain).
    -   Basic tile type management UI using HTML and CSS.

### **Sub-task 1.2: Region tagging**

-   **Requirements:**
    -   Add basic tagging system for map regions (e.g., "town" or "dungeon").
    -   Simple click-based tagging interface, with region names stored in the map data.

### **Sub-task 1.3: Map layers**

-   **Requirements:**
    -   Basic layer system (e.g., separate layers for terrain, objects).
    -   Simple toggle to switch between layers when editing the map.

### **Sub-task 2.1: NPC and object placement**

-   **Requirements:**
    -   Click-based placement of NPCs and objects on the map.
    -   Basic UI to configure NPC properties (name, role).
    -   Objects (e.g., chests, doors) placed as static items on the grid.

### **Sub-task 3.1: Character creator**

-   **Requirements:**
    -   Simple form-based character creation (choose race, class, basic attributes like strength, agility).
    -   Save character data in JSON format.

### **Sub-task 3.2: Quest system**

-   **Requirements:**
    -   Simple quest system allowing the creation of quests with objectives (e.g., "defeat 5 enemies", "find an item").
    -   Basic quest data stored in JSON linked to NPCs.

### **Sub-task 4.1: Export maps and characters**

-   **Requirements:**
    -   Export maps, NPCs, items, and quests as JSON.
    -   Ensure the exported files are readable by **World Travel**.

---

## **Phase 4: World Travel Development**

### **Sub-task 1.1: Turn-based movement for players**

-   **Requirements:**
    -   Implement basic turn-based movement, where the player takes a turn, then NPCs move.
    -   Simple AI for NPCs, moving randomly or toward specific points.

### **Sub-task 1.2: Basic event system**

-   **Requirements:**
    -   Basic event system where interacting with certain objects (e.g., doors, chests) triggers a predefined action.

### **Sub-task 2.1: Dialogue system**

-   **Requirements:**
    -   A simple dialogue box triggered by interaction with NPCs.
    -   Read dialogue data from NPCs created in **World Maker**.

### **Sub-task 2.2: Quest tracking**

-   **Requirements:**
    -   Basic quest log UI displaying active and completed quests.
    -   Track quest objectives and progress through interactions.

### **Sub-task 3.1: Combat system**

-   **Requirements:**
    -   A simple turn-based combat system.
    -   Implement basic attack, health, and damage mechanics.

### **Sub-task 4.1: Inventory system**

-   **Requirements:**
    -   Basic inventory UI showing items picked up.
    -   Simple item use system (e.g., potions for healing).

---

## **Phase 5: Feature Expansion (MVP)**

### **Sub-task 1.1: Multiplayer features (Optional for MVP)**

-   **Requirements:**
    -   Not required for the MVP but can be considered for future development.

### **Sub-task 2.1: Terrain generation tools**

-   **Requirements:**
    -   Basic random terrain generation for maps (optional, not necessary for MVP).

---

## **Phase 6: Testing and Debugging**

### **Sub-task 1.1: Test exporting from World Maker**

-   **Requirements:**
    -   Ensure maps, characters, and quests export correctly and are readable by **World Travel**.

### **Sub-task 2.1: Test movement, combat, and quest progression in World Travel**

-   **Requirements:**
    -   Test basic mechanics (movement, interaction, combat).
    -   Debug any inconsistencies between exported data and gameplay.

---

## **Phase 7: Finalization and Polish**

### **Sub-task 1.1: Basic UI improvements**

-   **Requirements:**
    -   Minimal polish to the UI for a smoother experience (basic tooltips, better navigation).
    -   Simple menus and in-game instructions.

---

## **Phase 8: Release and Community Engagement**

### **Task 1: Prepare for Release**

-   **Sub-task 1.1:** Package both tools with clear instructions for installation.
-   **Sub-task 1.2:** Distribute the project on a platform like GitHub or itch.io.

### **Task 2: Community Engagement**

-   **Sub-task 2.1:** Gather feedback from early users.
-   **Sub-task 2.2:** Implement post-release patches and improvements based on community input.

---
