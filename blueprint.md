# Lotto Number Generator

## Overview

This is a modern, responsive Lotto Number Generator application built using framework-less web technologies (HTML, CSS, and JavaScript). It leverages Web Components for encapsulation and modern CSS for a polished look and feel.

## Features

- **Unique Number Generation:** Generates 6 unique random numbers between 1 and 45.
- **Theme Switcher:** Seamlessly toggle between **Dark Mode** and **White (Light) Mode**. Preference is persisted using `localStorage`.
- **Partnership Inquiry Form:** Integrated with **Formspree** for direct business inquiries.
- **Dynamic UI:** 
    - Animated number balls that "pop in" sequentially.
    - Color-coded balls based on number ranges (1-10: Yellow, 11-20: Blue, 21-30: Red, 31-40: Gray, 41-45: Green).
    - Modern aesthetics with gradients, deep shadows, and smooth transitions.
- **Web Components:** The core generator logic is encapsulated within a `<lotto-generator>` custom element.

## Technical Implementation

- **CSS Variables:** Used for theming (`--bg-color`, `--app-bg`, etc.) to allow for easy mode switching.
- **Shadow DOM:** Used in the `LottoGenerator` component to isolate its styles and structure.
- **ES6+ JavaScript:** 
    - `Set` for unique number generation.
    - `setTimeout` for the sequential pop-in animation.
    - `Attribute` manipulation on the `body` tag for theme switching.

## Deployment

- **Repository:** https://github.com/chochoaiai/product-builder-lecture.git
- **Branch:** main
