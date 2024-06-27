import { @Vigilant, @TextProperty, @ParagraphProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @ColorProperty, @CheckboxProperty, @SelectorProperty, @PercentSliderProperty, @SliderProperty, Color } from 'Vigilance';

@Vigilant("EventTools")
class Settings {

    @SliderProperty({
		name: "&cToggle PVP/Fall Damage Delay",
		description: "In &bmilliseconds&7, how much delay do you want in between gui clicks?",
		category: "Settings",
		min: 350,
		max: 2500
	})
	togglepvp = 500;    

    @SliderProperty({
		name: "&cToggle Chat Toggle Delay",
		description: "In &bmilliseconds&7, how much delay do you want in between gui clicks?",
		category: "Settings",
		min: 350,
		max: 2500
	})
	toggleDelay = 500;

    chatPrefix = "&e[&6&lEvent Tools&e] &f";
    
    @ButtonProperty({
        name: "&6&lCookie Messages",
        description: "&7Chats a randomized message asking to give cookies.",
        placeholder: "Click",
        category: "Auto Messages"
    })
    cookieMSG() {
        Client.currentGui.close()
        var number = Math.floor(Math.random() * 11);
        if (number == 1.0) {
            ChatLib.command("ac Want to win the event? Give cookies!")
        }
        if (number == 2.0) {
            ChatLib.command("ac Support me by giving me a cookie!")
        }
        if (number == 3.0) {
            ChatLib.command("ac I heard giving cookies increases your chances at winning! Make sure to give cookies!")
        }
        if (number == 4.0) {
            ChatLib.command("ac Want more events in the future? Make sure to give cookies!")
        }
        if (number == 5.0) {
            ChatLib.command("ac Give cookies right now if you want to win the event!")
        }
        if (number == 6.0) {
            ChatLib.command("ac Help us reach our Cookie Goal by giving us coookies!")
        }
        if (number == 7.0) {
            ChatLib.command("ac It is scientifically proven that giving cookies increases your odds at winning!")
        }
        if (number == 8.0) {
            ChatLib.command("ac Support our events by giving a cookie!")
        }
        if (number == 9.0) {
            ChatLib.command("ac Do you want to win the event? Give cookies now if you do!")
        }
        if (number == 10.0) {
            ChatLib.command("ac Make sure to drop a cookie!")
        }

    }

    @ButtonProperty({
        name: "&9&lJoin the Discord Message",
        description: "&7Chats a randomized message asking players to run /disc.",
        placeholder: "Click",
        category: "Auto Messages"
    })
    discordMSG() {
        Client.currentGui.close()
        var number = Math.floor(Math.random() * 11);
        if (number == 1.0) {
            ChatLib.command("ac Want to participate in future events? Join our discord at /disc!")
        }
        if (number == 2.0) {
            ChatLib.command("ac Make sure to join our discord at /disc!")
        }
        if (number == 3.0) {
            ChatLib.command("ac Be sure to join our discord to be notified on future events! /disc")
        }
        if (number == 4.0) {
            ChatLib.command("ac Join our community by using /disc!")
        }
        if (number == 5.0) {
            ChatLib.command("ac Want to be notified on future events? Type /disc!")
        }
        if (number == 6.0) {
            ChatLib.command("ac Join our discord at /disc!")
        }
        if (number == 7.0) {
            ChatLib.command("ac Just a reminder to join our discord at /disc!")
        }
        if (number == 8.0) {
            ChatLib.command("ac Support our events by joining our discord! /disc")
        }
        if (number == 9.0) {
            ChatLib.command("ac Want to play in our future events? Type /disc!")
        }
        if (number == 10.0) {
            ChatLib.command("ac Be sure to type the command /disc!")
        }

    }

    @ButtonProperty({
        name: "&a&lStall Message",
        description: "&7Chats a randomized message telling players to not leave and to wait for the event to start.",
        placeholder: "Click",
        category: "Auto Messages"
    })
    stallMSG() {
        Client.currentGui.close()
        var number = Math.floor(Math.random() * 11);
        if (number == 1.0) {
            ChatLib.command("ac Don't leave! The event will start shortly!")
        }
        if (number == 2.0) {
            ChatLib.command("ac Waiting for the event to start? Join our discord in the meantime!")
        }
        if (number == 3.0) {
            ChatLib.command("ac The event will start soon!")
        }
        if (number == 4.0) {
            ChatLib.command("ac Event starts soon! Don't leave! (please)")
        }
        if (number == 5.0) {
            ChatLib.command("ac The event will start soon! Get ready!")
        }
        if (number == 6.0) {
            ChatLib.command("ac Event starting soon! Don't go anywhere!")
        }
        if (number == 7.0) {
            ChatLib.command("ac The event will start shortly! Bring a few friends before we start!")
        }
        if (number == 8.0) {
            ChatLib.command("ac Event starting soon!")
        }
        if (number == 9.0) {
            ChatLib.command("ac Don't leave! Starting soon!")
        }
        if (number == 10.0) {
            ChatLib.command("ac Event starts shortly - Don't leave!")
        }

    }
    

    @ButtonProperty({
        name: "How to play: &aRedRover",
        placeholder: "Execute",
        description: "&7Automatically explains RedRover.",
        category: "Event Explanation"
    })
    htpRedRover() {
        import Settings from '../features/Settings';
        Client.currentGui.close()
        ChatLib.chat(Settings.chatPrefix + "&aRunning..")
        ChatLib.command('ac In RedRover, the goal is simple: Get to the other side!')
        setTimeout(() => {
            ChatLib.command('ac Be warned, however, as there will be rovers in the middle trying to kill you.')
            setTimeout(() => {
                ChatLib.command('ac Obstacles will be added throughout the event, be careful!')
                setTimeout(() => {
                    ChatLib.command('ac The last player alive will win the event. Will you survive?')
                    ChatLib.chat(Settings.chatPrefix + "&aExplanation finished.")
                  }, "4000");
              }, "5000");              
          }, "5000");
          
    }

    @ButtonProperty({
        name: "How to play: &aWaterDrop",
        placeholder: "Execute",
        description: "&7Automatically explains Waterdrop.",
        category: "Event Explanation"
    })
    htpWaterdrop() {
        import Settings from '../features/Settings';
        Client.currentGui.close()
        ChatLib.chat(Settings.chatPrefix + "&aRunning..")
        ChatLib.command('ac In Waterdrop, the goal is simple: Land in the Water!')
        setTimeout(() => {
            ChatLib.command('ac There will be blocks and obstacles trying to kill you as you fall.')
            setTimeout(() => {
                ChatLib.command('ac Landing on a block will eliminate you from the event.')
                setTimeout(() => {
                    ChatLib.command('ac The last player alive will win the event. Will you survive?')
                    ChatLib.chat(Settings.chatPrefix + "&aExplanation finished.")
                  }, "4000");
              }, "5000");              
          }, "5000");
          
    }

    @ButtonProperty({
        name: "How to play: &aLast to Stop Running",
        placeholder: "Execute",
        description: "&7Automatically explains Last to Stop Running.",
        category: "Event Explanation"
    })
    htpLTSR() {
        import Settings from '../features/Settings';
        Client.currentGui.close()
        ChatLib.chat(Settings.chatPrefix + "&aRunning..")
        ChatLib.command('ac In Last to Stop Running, the goal is simple: Survive without stopping!')
        setTimeout(() => {
            ChatLib.command('ac You will be running around a track, making sure you are always running.')
            setTimeout(() => {
                ChatLib.command('ac Failure to run, or dying at an obstacle will eliminate you from the event.')
                setTimeout(() => {
                    ChatLib.command('ac The last player alive will win the event. Will you survive?')
                    ChatLib.chat(Settings.chatPrefix + "&aExplanation finished.")
                  }, "4000");
              }, "5000");              
          }, "5000");
          
    }

    @ButtonProperty({
        name: "How to play: &aLast to Fail Jump",
        placeholder: "Execute",
        description: "&7Automatically explains Last to Fail Jump.",
        category: "Event Explanation"
    })
    htpLTFJ() {
        import Settings from '../features/Settings';
        Client.currentGui.close()
        ChatLib.chat(Settings.chatPrefix + "&aRunning..")
        ChatLib.command('ac In Last to Fail Jump, the goal is simple: Parkour back and fourth without dying!')
        setTimeout(() => {
            ChatLib.command('ac You will be parkouring from side to side, with each round increasing the difficulty.')
            setTimeout(() => {
                ChatLib.command('ac Failure to complete the jump in time, or messing up the jump completely will eliminate you from the event.')
                setTimeout(() => {
                    ChatLib.command('ac The last player alive will win the event. Will you survive?')
                    ChatLib.chat(Settings.chatPrefix + "&aExplanation finished.")
                  }, "4000");
              }, "5000");              
          }, "5000");
          
    }

    @ButtonProperty({
        name: "How to play: &aSimon Says",
        placeholder: "Execute",
        description: "&7Automatically explains Simon Says.",
        category: "Event Explanation"
    })
    htpSS() {
        import Settings from '../features/Settings';
        Client.currentGui.close()
        ChatLib.chat(Settings.chatPrefix + "&aRunning..")
        ChatLib.command('ac In Simon Says, the goal is simple: Listen to Simon or die!')
        setTimeout(() => {
            ChatLib.command('ac In the event, I will be simon. You must do everything I tell you if my message starts with "Simon Says".')
            setTimeout(() => {
                ChatLib.command('ac If you do a task without me saying "Simon Says", you will be eliminated.')
                setTimeout(() => {
                    ChatLib.command('ac The last player alive will win the event. Will you survive?')
                    ChatLib.chat(Settings.chatPrefix + "&aExplanation finished.")
                  }, "4000");
              }, "5000");              
          }, "5000");
          
    }

    @ButtonProperty({
        name: "How to play: &aLadders",
        placeholder: "Execute",
        description: "&7Automatically explains Ladders.",
        category: "Event Explanation"
    })
    htpL() {
        import Settings from '../features/Settings';
        Client.currentGui.close()
        ChatLib.chat(Settings.chatPrefix + "&aRunning..")
        ChatLib.command('ac In Ladders, the goal is simple: Team up with players and be the last one standing!')
        setTimeout(() => {
            ChatLib.command('ac In the event, you will be on ladders, next to other players.')
            setTimeout(() => {
                ChatLib.command('ac PVP will be enabled throughout the event, so form alliances and survive!')
                setTimeout(() => {
                    ChatLib.command('ac The last player alive will win the event. Will you survive?')
                    ChatLib.chat(Settings.chatPrefix + "&aExplanation finished.")
                  }, "4000");
              }, "5000");              
          }, "5000");
          
    }

    @ButtonProperty({
        name: "How to play: &aHide and Seek",
        placeholder: "Execute",
        description: "&7Automatically explains Hide and Seek.",
        category: "Event Explanation"
    })
    htpHS() {
        import Settings from '../features/Settings';
        Client.currentGui.close()
        ChatLib.chat(Settings.chatPrefix + "&aRunning..")
        ChatLib.command('ac In Hide and Seek, the goal is simple: If you are Seeker, eliminate all Hiders. IF you are a Hider, hide from the Seekers!')
        setTimeout(() => {
            ChatLib.command('ac In the event, you will hide around the map from the seekers.')
            setTimeout(() => {
                ChatLib.command('ac If a seeker finds you, you will be eliminated!')
                setTimeout(() => {
                    ChatLib.command('ac The last player alive will win the event. Will you survive?')
                    ChatLib.chat(Settings.chatPrefix + "&aExplanation finished.")
                  }, "4000");
              }, "5000");              
          }, "5000");
          
    }

    @ButtonProperty({
        name: "How to play: &aBlock Shuffle",
        placeholder: "Execute",
        description: "&7Automatically explains Block Shuffle.",
        category: "Event Explanation"
    })
    htpBLOCKS() {
        import Settings from '../features/Settings';
        Client.currentGui.close()
        ChatLib.chat(Settings.chatPrefix + "&aRunning..")
        ChatLib.command('ac In Block Shuffle, the goal is simple: Survive the longest on the wool!')
        setTimeout(() => {
            ChatLib.command('ac During the event, random colors of wool will be cut.')
            setTimeout(() => {
                ChatLib.command('ac If you are on a color of wool and it is cut, you will fall into the lava!')
                setTimeout(() => {
                    ChatLib.command('ac The last player alive will win the event. Will you survive?')
                    ChatLib.chat(Settings.chatPrefix + "&aExplanation finished.")
                  }, "4000");
              }, "5000");              
          }, "5000");
          
    }

    constructor() {
        this.initialize(this);
        this.setCategoryDescription("Event Explanation", "&e[&6&lEvent Tools&e] \n &7Made by &btdarth &c<3")
        this.setCategoryDescription("Auto Messages", "&e[&6&lEvent Tools&e] \n &7Made by &btdarth &c<3")
        this.setCategoryDescription("Settings", "&e[&6&lEvent Tools&e]")
        
        
    }
}

export default new Settings();
