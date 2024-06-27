import Settings from '../features/Settings';

let pvp = false;

register("command", (...arg) => {
    const footer = TabList.getFooter()
    if (footer.includes("You are in")) {
        if (!arg) {
            ChatLib.command("menu") 
            setTimeout(() => {
                Player.getContainer().click(39);
                setTimeout(() => {
                    Player.getContainer().click(24);
                    setTimeout(() => {
                        Player.getContainer().click(10);
                        setTimeout(() => {
                            Client.currentGui.close()
                            ChatLib.chat(Settings.chatPrefix + "&aPVP toggled for &2global&a.")
                        }, Settings.togglepvp);
                    }, Settings.togglepvp);
                }, Settings.togglepvp);
            }, Settings.togglepvp);
        } else {
            const regionName = arg.join(" ");
            ChatLib.command("region edit " + regionName)
            setTimeout(() => {
                Player.getContainer().click(29);
                setTimeout(() => {
                    Player.getContainer().click(10, false, "RIGHT");
                    if (pvp) {
                        pvp = false;
                        setTimeout(() => {
                            Player.getContainer().click(10);
                            setTimeout(() => {
                                Player.getContainer().click(10);
                                setTimeout(() => {
                                    Client.currentGui.close()
                                    ChatLib.chat(Settings.chatPrefix + "&aPVP &cdisabled&a for region &2" + regionName + "&a.")
                                }, Settings.togglepvp);
                            }, Settings.togglepvp);
                        }, Settings.togglepvp);
                    } else {
                        pvp = true;
                        setTimeout(() => {
                            Player.getContainer().click(10);
                            setTimeout(() => {
                                Client.currentGui.close()
                                ChatLib.chat(Settings.chatPrefix + "&aPVP &2enabled&a for region &2" + regionName + "&a.")
                            }, Settings.togglepvp);
                        }, Settings.togglepvp);
                    }
                }, Settings.togglepvp);
            }, Settings.togglepvp);
        }
    } else {
        ChatLib.chat(Settings.chatPrefix + "&cYou can only use this command in housing.")
    }
}).setName("togglepvp").setAliases("pvptoggle");

import Settings from '../features/Settings';

let falldmg = false;

register("command", (...arg) => {
    const footer = TabList.getFooter()
    if (footer.includes("You are in")) {
        if (!arg) {
            ChatLib.command("menu")
            setTimeout(() => {
                Player.getContainer().click(39);
                setTimeout(() => {
                    Player.getContainer().click(24);
                    setTimeout(() => {
                        Player.getContainer().click(13);
                        setTimeout(() => {
                            Client.currentGui.close()
                            ChatLib.chat(Settings.chatPrefix + "&aFall Damage toggled for &2global&a.")
                        }, Settings.togglepvp);
                    }, Settings.togglepvp);
                }, Settings.togglepvp);
            }, Settings.togglepvp);
        } else {
            const regionName = arg.join(" ");
            ChatLib.command("region edit " + regionName)
            setTimeout(() => {
                Player.getContainer().click(29);
                setTimeout(() => {
                    Player.getContainer().click(13, false, "RIGHT");
                    if (falldmg) {
                        falldmg = false;
                        setTimeout(() => {
                            Player.getContainer().click(13);
                            setTimeout(() => {
                                Player.getContainer().click(13);
                                setTimeout(() => {
                                    Client.currentGui.close()
                                    ChatLib.chat(Settings.chatPrefix + "&aFall Damage &cdisabled&a for region &2" + regionName + "&a.")
                                }, Settings.togglepvp);
                            }, Settings.togglepvp);
                        }, Settings.togglepvp);
                    } else {
                        falldmg = true;
                        setTimeout(() => {
                            Player.getContainer().click(13);
                            setTimeout(() => {
                                Client.currentGui.close()
                                ChatLib.chat(Settings.chatPrefix + "&aFall Damage &2enabled&a for region &2" + regionName + "&a.")
                            }, Settings.togglepvp);
                        }, Settings.togglepvp);
                    }
                }, Settings.togglepvp);
            }, Settings.togglepvp);
        }
    } else {
        ChatLib.chat(Settings.chatPrefix + "&cYou can only use this command in housing.")
    }
}).setName("togglefalldamage").setAliases("togglefall", "togglefalldmg", "togglefd");