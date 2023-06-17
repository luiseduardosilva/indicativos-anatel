
import { alphabet } from "../utils/alphabet.utils";
import { sleep } from "../utils/sleep.utils";
import { request } from "../wrappers/anatel.wrapper";
import { addContextToFile } from "../wrappers/file.wrapper";


const { PREFIX } = process.env;
export class CallsignService {
    async execute(): Promise<void> {
        const prefix = PREFIX;
        const classC = ['E', 'F', 'G', 'H'];    

        for (let i of classC){
            for(let one of alphabet){
                for(let two of alphabet ){
                    await sleep()
                    const callsign = `${prefix}${i}${one.toUpperCase()}${two.toUpperCase()}`;
                    const inUse = await request({ callsign });
                    await this.save({ callsign, inUse })
                }
            }
        }
    }
    private async save (props: { callsign: string, inUse: boolean }): Promise<void> {
        const { callsign, inUse } = props;
        if(!inUse){
            console.log(`${callsign} - Está disponivel`)
            await addContextToFile({ context: callsign });
            return;
        }
        console.log(`${callsign} - Está em uso`)
    }
}