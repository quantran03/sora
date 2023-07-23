import { Client } from "discord.js";
import 'dotenv/config';

(async () => {
    const BOT = new Client({
        intents: [],
    });
    await BOT.login(process.env.BOT_TOKEN);
})();