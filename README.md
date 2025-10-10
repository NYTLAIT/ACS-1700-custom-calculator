# Shape Calculator

A simple, interactive, and scalable **geometry calculator** that dynamically displays the correct formulas and input fields for different 2D and 3D shapes. Built using **HTML, CSS, and JavaScript**.

---

## Features

- **Dynamic dropdown menus**  
  Choose a measurement type (area, volume, etc.) and see only the relevant shapes.

- **Auto-generated input fields**  
  Input boxes update automatically based on the selected shape’s required parameters.

- **Instant calculations and scalable**  
  Results are computed using pre-defined formula functions stored in `formulas.js`.

- **Clean and responsive UI**  
  Styled with modern CSS for a smooth user experience.

- **Reset-friendly design**  
  Refreshes cleanly and resets all input fields without reloading the entire page.

- **Easily scalable** 
  By being dynamically populated, more selections can be easily entered in `formulas.js`.

---

## How It Works

1. Select a **measurement type** (e.g., Area, Volume).  
2. Choose a **shape** from the dropdown (e.g., Triangle, Sphere).  
3. Enter the required **values** (like base, height, or radius).  
4. Click **Calculate** to see the result displayed instantly.

Formulas are defined in [`formulas.js`](./formulas.js) and dynamically accessed by [`scripts.js`](./scripts.js).

---

## Improvements That Can Be Implemented

- Con of being dynamically populated is that names can sound weird and stiff by being shown exactly like in the `formulas.js` which does not allow spaces.
- There are no units.
- There are no formulas shown.
- Can enter values that are not numbers. To makes matters worse, there is no fyi that says, so when inputting units, user may just get confused.