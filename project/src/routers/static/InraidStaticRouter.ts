import { inject, injectable } from "tsyringe";
import { InraidCallbacks } from "@spt/callbacks/InraidCallbacks";
import { RouteAction, StaticRouter } from "@spt/di/Router";
import { INullResponseData } from "@spt/models/eft/httpResponse/INullResponseData";

@injectable()
export class InraidStaticRouter extends StaticRouter
{
    constructor(@inject("InraidCallbacks") protected inraidCallbacks: InraidCallbacks)
    {
        super([
            new RouteAction(
                "/raid/profile/save",
                async (url: string, info: any, sessionID: string, output: string): Promise<INullResponseData> =>
                {
                    return this.inraidCallbacks.saveProgress(url, info, sessionID);
                },
            ),
            new RouteAction(
                "/singleplayer/settings/raid/endstate",
                async (url: string, info: any, sessionID: string, output: string): Promise<string> =>
                {
                    return this.inraidCallbacks.getRaidEndState();
                },
            ),
            new RouteAction(
                "/singleplayer/settings/raid/menu",
                async (url: string, info: any, sessionID: string, output: string): Promise<string> =>
                {
                    return this.inraidCallbacks.getRaidMenuSettings();
                },
            ),
            new RouteAction(
                "/singleplayer/airdrop/config",
                async (url: string, info: any, sessionID: string, output: string): Promise<string> =>
                {
                    return this.inraidCallbacks.getAirdropConfig();
                },
            ),
            new RouteAction(
                "/singleplayer/btr/config",
                async (url: string, info: any, sessionID: string, output: string): Promise<string> =>
                {
                    return this.inraidCallbacks.getBTRConfig();
                },
            ),
            new RouteAction(
                "/singleplayer/scav/traitorscavhostile",
                async (url: string, info: any, sessionID: string, output: string): Promise<string> =>
                {
                    return this.inraidCallbacks.getTraitorScavHostileChance(url, info, sessionID);
                },
            ),
            new RouteAction(
                "/singleplayer/BossConvert",
                async (url: string, info: any, sessionID: string, output: string): Promise<string> =>
                {
                    return this.inraidCallbacks.getBossConvertSettings(url, info, sessionID);
                },
            ),
        ]);
    }
}
