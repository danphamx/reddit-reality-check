# Reddit Reality Check
**A minimalist Chrome Extension for intentional browsing.**

<img width="2086" height="1175" alt="image" src="https://github.com/user-attachments/assets/e1bc04fb-ac3d-481f-97a0-753c0a11b92b" />

This extension serves as a digital "speed bump," forcing a moment of reflection before you engage with Reddit. It is designed for those transitioning toward meaning-centered content consumption and away from low-signal digital noise.

---

### Project Overview
This tool acts as a psychological containment system. It interrupts the habit loop by presenting a high-contrast, isolated interstitial that reminds the user of the opportunity cost of their time.

### Features
* **Complete Isolation:** Uses a **Shadow DOM** to prevent Reddit's CSS from bleeding into the interface, ensuring a clean, centered, and high-fidelity layout.
* **Minimalist Aesthetic:** A dark-mode, high-contrast UI designed for clarity at a glance.
* **Custom Visual Reminder:** Integrates a local image (`dontcare.jpg`) to ground the message in your personal aesthetic.
* **Intentional Friction:** Replaces an automatic page load with a conscious decision to proceed.
* **Click to Proceed:** Once clicked, user can still access Reddit (which is better user experience than simply adding Reddit to your Adblocker or whatever.)

---

### File Structure
```text
reddit-check/
├── manifest.json    # Extension configuration and permissions
├── content.js       # The Shadow DOM logic and UI injection
└── dontcare.jpg     # Your custom grounding image
