# emoji-compatibility-checker
A minimalistic library for checking if the platform supports unicode emoji.

### Usage
```
const canRenderEmoji = require('emoji-compatibility-checker')
if (canRenderEmoji()) {
  console.log('Yes!')
} else {
  console.log('Nope!')
}
```
