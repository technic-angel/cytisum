import express from 'express';
import { createExpressServer } from 'routing-controllers';
import path from 'path';
import cors from 'cors'



export class Server {
    /** @type {express.Application} */
    private app: express.Application;
    /** @type {number} */
    private port: number;
  
    /**
     * Server constructor
     * initializes express server
     * and sets listening port
     * @constructor
     * @returns void
     */
    public constructor() {
      this.app = createExpressServer({
        cors: true,
        controllers: [path.join(__dirname + '/../controllers/*.js')]
      })
  
      this.port = Number(3001);
    }
  
    /**
     * Listen method
     * @memberof Server
     * @returns void
     */
    public listen(): void {
      this.app.listen(this.port, () => {
        console.log(`Server running on port ${this.port}`);
      });
    }
  }