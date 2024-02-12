import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//AppConfig.d.ts
export interface AppConfig {
    BroideryBackendUrl: string;
}

//AppConfigService.ts
@Injectable()
export class AppConfigService {
    private config: AppConfig;
    loaded = false;
    constructor(private http: HttpClient) {}
    loadConfig(): Promise<void> {
        return this.http
            .get<AppConfig>('../../assets/app.config.json')
            .toPromise()
            .then(data => {
                this.config = data;
                this.loaded = true;
            });
    }
    
    getConfig(): AppConfig {
        return this.config;
    }
}