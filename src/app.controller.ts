import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly http: HttpService) {}

  @Get('new')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  async getMy(): Promise<any>  {
    
    const result = await this.http.get('https://test-crm70.retailcrm.ru/api/v5/orders/history', {
      headers: {

      },
      params: {
        'apiKey':'*********************'
      }
    })
    .toPromise(); 
    
    return result.data;
  }
}
