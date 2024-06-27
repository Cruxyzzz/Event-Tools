import Settings from './Settings'

register("command", (inputNumber, seconds) => {
    const number = parseInt(inputNumber);
    const cooldownTime = parseFloat(seconds);

    if (isNaN(number) || isNaN(cooldownTime) || number < 1 || number > 10 || cooldownTime < 0) {
        ChatLib.chat("&cInvalid input. Usage: /bp <number (1-10)> <seconds>");
        return;
    }

    const totalBlocks = 10;
    const limeWool = "35:5";
    const redWool = "35:14";

    const numRedWool = number;
    const numLimeWool = totalBlocks - number;

    let setCommand = "/set ";

    for (let i = 0; i < numLimeWool; i++) {
        setCommand += limeWool + ",";
    }

    for (let i = 0; i < numRedWool; i++) {
        setCommand += redWool + ",";
    }

    setCommand = setCommand.slice(0, -1);

    ChatLib.command(setCommand);
    ChatLib.chat(`&aRunning command: ${setCommand}`);

    const cooldownMilliseconds = cooldownTime * 1000;

    setTimeout(() => {
        const replaceCommand = "/replace 35:14 air";
        ChatLib.command(replaceCommand);
        ChatLib.chat(Settings.chatPrefix + " &aCommand finished successfully!");
    }, cooldownMilliseconds);
}).setName("bp");


register("command", (color, seconds) => {
    const validColors = ['red', 'green', 'yellow', 'blue', 'pink', 'purple', 'orange'];
    const colorCodes = {
        red: '35:14',
        green: '35:5',
        yellow: '35:4',
        blue: '35:3',
        pink: '35:6',
        purple: '35:10',
        orange: '35:1'
    };

    if (!validColors.includes(color.toLowerCase()) || isNaN(parseFloat(seconds)) || parseFloat(seconds) < 0) {
        ChatLib.chat(Settings.chatPrefix + " &cInvalid input. Usage: /bpr <color> <seconds>");
        return;
    }

    // Set the floor to the randomized colored floor
    const setCommand = "/set 35:1,35:3,35:4,35:5,35:6,35:10,35:14";
    ChatLib.command(setCommand);
    ChatLib.chat(Settings.chatPrefix + ` &aRunning command: ${setCommand}`);

    // Exclude the selected color from the replace command
    const excludeColorCode = colorCodes[color.toLowerCase()];
    const replaceColors = Object.values(colorCodes).filter(code => code !== excludeColorCode);
    const replaceCommand = `/replace ${replaceColors.join(',')} air`;

    // Wait for the specified seconds before running the replace command
    const cooldownMilliseconds = parseFloat(seconds) * 1000;

    setTimeout(() => {
        ChatLib.command(replaceCommand);
        ChatLib.chat(Settings.chatPrefix + ` &aRunning command: ${replaceCommand}`);
    }, cooldownMilliseconds);

}).setName('bpr');
