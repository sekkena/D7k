# D7k
D7k, Package That generates egyptian jokes for discord.js/guilded.js

## Install Package
```bash
npm install D7K
```

## Usage
> Generate egyptian jokes for discord.js/guilded.js

## Example
```javascript
const { generateLongJoke, generateShortJoke, hkmtElYom, generateJoke } = require(`D7k`);
console.log(generateLongJoke());
console.log(generateShortJoke());
console.log(hkmtElYom());
console.log(generateJoke());
```

## Discord.js
```javascript
const { generateLongJoke, generateShortJoke, hkmtElYom, generateJoke } = require(`D7k`);
client.on("messageCreate", async message => {
  if (message.content.startsWith("gen-joke")) {
    const jokes = generateJoke();
    const longjokes = generateLongJoke();
    const shortjokes = generateShortJoke();
    const hkmtElYomjoke = hkmtElYom();
    await message.reply({content: `**${jokes}**\n${longjokes}\n${shortjokes}\n${hkmtElYomjoke}`});
 }
});
```

## Gulided.js
```javascript
const { generateLongJoke, generateShortJoke, hkmtElYom, generateJoke } = require(`D7k`);
client.on('messageCreate', message => {
    if (message.content === 'gen-joke') {
    const jokes = generateJoke();
    const longjokes = generateLongJoke();
    const shortjokes = generateShortJoke();
    const hkmtElYomjoke = hkmtElYom();
    await message.reply({content: `**${jokes}**\n${longjokes}\n${shortjokes}\n${hkmtElYomjoke}`});
    }
});
```

**If you have any joke you can suggest it in https://discord.gg/vms**
**Any problem join server https://discord.gg/vms**
**Copyrights to vampire_sekkena**
