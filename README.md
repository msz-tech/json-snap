# JSON Snap

**JSON Snap** is a lightweight open source Chrome extension designed to improve the readability and formatting of JSON files directly in your browser.

---
[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-Unpublished-lightgrey?style=flat-square)](#)
[![License: MIT](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
![Vitest Tests](https://github.com/msz-tech/json-snap/actions/workflows/ci-vitest.yml/badge.svg)
[![GitHub issues](https://img.shields.io/github/issues/msz-tech/json-snap?style=flat-square)](https://github.com/msz-tech/json-snap/issues)



## Features

- Automatic JSON formatting: beautify and minify based on context  
- Light and dark flat UI themes inspired by modern color palettes (e.g., Monokai) — coming soon  
- Interactive JSON tree with collapsible nodes for easy navigation — planned feature  
- 100% client-side processing — no data leaves your browser  
- Lightweight and performant Chrome extension for seamless user experience  

---

## Installation

1. Clone this repository  

```bash
git clone https://github.com/msz-tech/json-snap.git
```

1. Load the extension in Chrome

2. Open chrome://extensions

3. Enable Developer mode

4. Click “Load unpacked”

5. Select the root folder of the project

## Usage

Open any page containing raw JSON: the extension will automatically format the content.

You can toggle between light and dark themes using the extension’s icon.

## Tests

This project uses [Vitest](https://vitest.dev/) for unit testing.

To run tests locally, use the following command:

```bash
npm test
```
- Tests are automatically run on GitHub Actions on every push to the develop and main branches, as well as on pull requests targeting develop. You can see the test results in the Actions tab of this repository.

## Contributing
Contributions are welcome! Please follow the branch naming conventions (feature/xxx, bugfix/xxx) and open clear pull requests.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any questions or support, please open an issue in this repository.