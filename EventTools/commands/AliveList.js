import Settings from "../features/Settings";

register('command', () => {
    let eventPlayers = [];
    let foundAlivePlayers = false; 
    let alivePlayersCount = 0; 

    ChatLib.chat(Settings.chatPrefix + " &e&lAlive Players:");

    let players = TabList.getNames();

    players.forEach(player => {
        let cleanedName = player.replace(/\[.*?\]\s*/g, '').replace(/\s*[\+\-]\s*(?=[^\[\]]*?Housing)|\s*\[EVENT\]\s*/g, '').trim();
        
        console.log("Cleaned name for " + player + ": " + cleanedName);
        
  
        let eventRegex = /\[ＥＶＥＮＴ\]|\[EVENT\]|\[Event\]|\[Alive\]/i;
        if (eventRegex.test(player)) {
            foundAlivePlayers = true; 
            alivePlayersCount++; 

            let shortenedName = cleanedName.substring(0, cleanedName.length - 1);
            
            console.log("shortenedName: " + shortenedName);
            let tpName = cleanedName.replace(/§[0-9a-fklmnor]/ig, ''); 
            let tpCommand = `/tp ${tpName}`;
            console.log("tpCommand: " + tpCommand);
            let teleportMessage = new Message(
                "", 
                new TextComponent(`&a - ${cleanedName} (click to teleport)`).setClick('run_command', tpCommand).setHoverValue(`Click to teleport to ${cleanedName}`)
            );
            console.log("teleportMessage: " + teleportMessage);
            ChatLib.chat(teleportMessage);
        }
    });

    // Display message if no alive players were found
    if (!foundAlivePlayers) {
        ChatLib.chat(Settings.chatPrefix + " &cNo alive players were found!");
    } else {
        // Display number of alive players found
        ChatLib.chat(Settings.chatPrefix + ` Found ${alivePlayersCount} alive player(s).`);
    }
}).setName('alivelist');
