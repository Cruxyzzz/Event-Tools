import Settings from "./features/Settings";

//Commands
import './commands/AliveList';
import './commands/commands';
import './commands/togglePvp';  
import './commands/CountDown';
import './commands/toggleChat';

//Features
import './features/AutoBp';
import './features/AutoFont'; 


register("command", () => Settings.openGUI()).setName('eventtools').setAliases('et');

ChatLib.chat(Settings.chatPrefix + " &aLoaded Successfully!")
