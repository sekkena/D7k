# D7k
D7k, Package That generates egyptian jokes for discord.js/guilded.js/telegarm.js

## Install Package
```bash
npm install D7K
```

## Usage
> Generate egyptian jokes for discord.js/guilded.js/telegarm.js

## Example
```javascript
const { jokegen, generateJoke } = require(`D7k`);
console.log(jokegen());
console.log(generateJoke());
```

## Discord.js
```javascript
const { generateJoke } = require(`D7k`);
client.on("messageCreate", async message => {
  if (message.content.startsWith("gen-joke")) {
    const jokes = generateJoke();
    await message.reply({content: `**${jokes}**`});
 }
});
```

## Gulided.js
```javascript
const { generateJoke } = require(`D7k`);
client.on('messageCreate', message => {
    if (message.content === 'gen-joke') {
       const jokes = generateJoke();
        message.reply(jokes);
    }
});
```

**If you have any joke you can suggest it in https://discord.gg/vms**
**For any qustion or problem join server https://discord.gg/vms**
**Copyrights to vampire_sekkena**
