require("dotenv").config();

const verifyEnv = <T extends string | undefined = string>(name: string): T => {
	const value = process.env[name] as T;

	if (!value || typeof value == "undefined") {
		throw new Error(
			"No value set for " + name + " in your environment variables."
		);
	}

	return value as T;
};

export const CONFIG = {
	CLIENT_ID: verifyEnv("CLIENT_ID"),
	PUBLIC_KEY: verifyEnv("PUBLIC_KEY"),
	BOT_TOKEN: verifyEnv("BOT_TOKEN"),
	GUILD_IDS: verifyEnv("GUILD_IDS").split(","),
};
