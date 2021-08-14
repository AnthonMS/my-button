# My Button Card

This is very much a work in progress. So don't play around with it yet.

## Install
### HACS
1. Add this repo to HACS
2. Install
3. Add something in the line of this to the configuration:
```yaml
    - url: /hacsfiles/my-button/my-button.js
      type: module
```

### Manually
1. Download my-button.js located in dist/ directory
2. Place it in your HA www/ directory
3. Add something in the line of this to the configuration:
```yaml
    - url: /local/my-button.js
      type: module
```


## Setup Dev Environment

1. Clone the repository down on your work PC.
2. Run `npm install` in the project root directory.
3. Serve it by running `npm start`
4. Build it by running `npm run build`
5. Add this to your Home Assistant Configuration (IP is the local IP of the machine you're hosting the card on):
```yaml
    - url: http://<IP>:5000/my-button.js?v=001
      type: module
```