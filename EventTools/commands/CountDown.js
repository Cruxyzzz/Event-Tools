import Settings from "../features/Settings";

register('command', (arg) => {
    if (isNaN(arg) || !arg) {
        ChatLib.chat(Settings.chatPrefix + "&cYou didn't enter a number.")
    } else {
        countdown(arg);
    }

    function countdown(currentNumber) {
        if (currentNumber > 0) {
            ChatLib.say("-" + currentNumber + "-")
            setTimeout(() => countdown(currentNumber - 1), 1000);
        } else {
            ChatLib.say("GO!")
            ChatLib.chat(Settings.chatPrefix + '&aCountdown finished!');
            
        }
    }

}).setName('countdown').setAliases('cd');