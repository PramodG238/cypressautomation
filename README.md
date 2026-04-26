# 🌲 Cypress Test Automation — JavaScript

End-to-end web application test automation using **Cypress** with **JavaScript** — fast, reliable browser testing with real-time test execution and automatic waiting.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| Cypress | End-to-end test automation |
| JavaScript | Core programming language |
| Mocha | Test structure (built into Cypress) |
| Chai | Assertions (built into Cypress) |
| Node.js | Runtime environment |

---

## 📁 Project Structure

```
cypressautomation/
├── cypress/
│   ├── e2e/                # Test spec files
│   ├── fixtures/           # Test data (JSON files)
│   ├── support/
│   │   ├── commands.js     # Custom Cypress commands
│   │   └── e2e.js          # Global config & hooks
│   └── pages/              # Page Object pattern
├── cypress.config.js       # Cypress configuration
├── package.json
└── README.md
```

---

## ✅ Key Features

- **Fast execution** — Cypress runs directly in the browser, no WebDriver overhead
- **Auto-waiting** — No explicit waits needed — Cypress waits automatically
- **Real-time reload** — Tests reload instantly on code change
- **Screenshots & video** — Auto-captured on test failure
- **Custom commands** — Reusable actions defined in `commands.js`
- **Fixtures** — JSON-based test data management

---

## 🚀 How to Run

### Prerequisites
- Node.js 14+
- npm

### Install dependencies
```bash
npm install
```

### Open Cypress Test Runner (interactive)
```bash
npx cypress open
```

### Run headless (CI mode)
```bash
npx cypress run
```

### Run specific spec
```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

---

## 📊 Test Coverage

- UI functional tests
- Form submission & validation
- Navigation flows
- Cross-browser testing (Chrome, Firefox, Edge)

---

## 👤 Author

**Pramod R. Gunjal** — Senior QA Engineer  
📧 pramodgunjal212@gmail.com  
🔗 [GitHub Profile](https://github.com/PramodG238)
