# API Preload POC

Minimal POC to preload essential data to increase page load speeds.

## Problem

When nested components form the landing page of an application, if some of them relay on data from API endpoints, the user has to wait till each API call to be completed untill the full page becomes visible.

## Peoposed solution

Use browser's preload capabilities to load all the essential data requred to render the landing page.
**Note: This solution leverages the `rel="preload"` as described in [W3C specification](https://w3c.github.io/preload/)**

## Local setup

### Clone project

`git clone https://github.com/serandah/api-preload-poc.git`

### Install dependencies

`cd api-preload-poc && npm install`

### Run the project

`npm start`

## Testing

### Preloaded

* Open chrome developer tool pane
* Switch to Network tab
* Refresh the browser

Note how 3 api calls are made concurrently

### Non Preloaded

* Open `App.js` and comment line 12 (`preload.load()`)
* Follow the steps under **Preloaded** above

Note how 3 api calls are made one after the other, in cascading style

## Next steps

* Browser testing / fixes
* Improve this POC
* Convert to a Node module
