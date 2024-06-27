import Settings from '../features/Settings';

function findAndClickItem(itemName) {
    let container = Player.getContainer();
    for (let i = 0; i < container.getSize(); i++) {
        let item = container.getStackInSlot(i);
        if (item) {
            let itemNameWithoutColor = item.getName().replace(/&[0-9a-fk-or]/ig, ''); // Strip color codes
            let trimmedItemName = itemNameWithoutColor.substring(2); // Trim the first two characters
            if (trimmedItemName.includes(itemName)) {
                container.click(i);
                return true;
            }
        }
    }
    return false;
}

register("command", (groupName) => {
    if (!groupName) {
        ChatLib.chat("&cIncorrect usage. Correct usage: /togglechat <groupName>");
        return;
    }

    ChatLib.command("menu");
    setTimeout(() => {
        Player.getContainer().click(40); 

        setTimeout(() => {
            if (findAndClickItem(groupName)) {
                setTimeout(() => {
                    Player.getContainer().click(14); 

                    setTimeout(() => {
                        Player.getContainer().click(44); 

                        setTimeout(() => {
                            let itemInSlot14 = Player.getContainer().getStackInSlot(15);
                            if (itemInSlot14.getName().includes("On")) {
                                Player.getContainer().click(15, false, "RIGHT");
                            } else if (itemInSlot14.getName().includes("Off")) {
                                Player.getContainer().click(15);
                            }

                            setTimeout(() => {
                                Client.currentGui.close();
                                ChatLib.chat(Settings.chatPrefix + "&aChat toggled for &2" + groupName + "&a.");
                            }, Settings.toggleDelay);
                        }, Settings.toggleDelay);
                    }, Settings.toggleDelay);
                }, Settings.toggleDelay);
            } else {
                ChatLib.chat(Settings.chatPrefix + "&cCouldn't find the group &4" + groupName);
                Client.currentGui.close();
            }
        }, Settings.toggleDelay);
    }, Settings.toggleDelay);
}).setName("togglechat").setAliases("tc");