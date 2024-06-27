import Settings from "../features/Settings";

register("command", (arg) => {
    ChatLib.chat(Settings.chatPrefix + " &6Commands:");
    ChatLib.chat("&7/thru - Teleports you a specified number of blocks forward.");
    ChatLib.chat("&7/dist - Changes the distance for /thru.");
    ChatLib.chat("&7/togglepvp <region> - Toggles PvP.");
    ChatLib.chat("&7/togglefd <region> - Toggles fall damage.");
    ChatLib.chat("&7/AliveList - Shows all alive players.");
    ChatLib.chat("&7/cd <number> - Counts down from the given number.");
    ChatLib.chat("&7/togglechat <group> - Toggles chat for the specified group.");
    ChatLib.chat("&7/bp <1-10> <seconds> - Auto Block Party command for the original Block Party.");
    ChatLib.chat("&7/bpr <color> <seconds> - Colorful version of the original Block Party.");
    ChatLib.chat("&7/font <text> - Automatically copies the text you wrote with a font.");
    ChatLib.chat(Settings.chatPrefix + " &eScroll up to see all commands!");
}).setName('etcmds').setAliases('eventtoolscommands');

const customKeybind = new KeyBind("/thru Keybind", Keyboard.KEY_NONE, "§6§lEventTools §f- Keybinds");

//Thanks to Wekend for the /thru code.
let teleport = false; 
let distance = 8; 

function sphericalToCartesian(radius, pitch, yaw) {
    pitch += 90;
    yaw -= 90;

    pitch *= (Math.PI / 180) * -1;
    yaw *= Math.PI / 180;

    let x = radius * Math.sin(pitch) * Math.cos(yaw);
    let y = radius * Math.cos(pitch);
    let z = radius * Math.sin(pitch) * Math.sin(yaw);

    return { x, y, z };
}

function performTeleport() {
    ChatLib.chat("&d&owoosh!");

    let { x, y, z } = sphericalToCartesian(distance, Player.getPitch(), Player.getYaw());

    x += Player.getX();
    y += Player.getY();
    z += Player.getZ();

    ChatLib.command(`tp ${x} ${y} ${z}`);

    teleport = true;
}

customKeybind.registerKeyPress(() => {
    performTeleport();
});

register("chat", (x, y, z, event) => {
    if (teleport) {
        cancel(event);
        teleport = false;
    }
}).setCriteria("Teleporting you to ${x}, ${y}, ${z}.");

register("command", (dist) => {
    if (!isNaN(dist) && dist > 0) {
        distance = parseFloat(dist);
        ChatLib.chat(Settings.chatPrefix + ` &aTeleport distance set to ${distance}`);
    } else {
        ChatLib.chat("Invalid distance. Please enter a positive number.");
    }
}).setName("dist");

register("command", () => {
    performTeleport();
}).setName("thru");
