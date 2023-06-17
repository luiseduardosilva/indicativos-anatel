import * as dotenv from 'dotenv'
dotenv.config()
import { CallsignService } from "./services/callsign.service";

const service = new CallsignService();
service.execute();
