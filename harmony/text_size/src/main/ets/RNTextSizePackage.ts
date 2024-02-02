import { RNPackage, TurboModulesFactory } from 'rnoh/ts';
import type { TurboModule, TurboModuleContext } from 'rnoh/ts';
import { RNTextSizeTurboModule } from './RNTextSizeTurboModule';

class RNTextSizeTurboModuleFactory extends TurboModulesFactory {
 createTurboModule(name: string): TurboModule | null {
   if (name === 'RTNTextSize') {
     return new RNTextSizeTurboModule(this.ctx)
   }
   return null;
 }

 hasTurboModule(name: string): boolean {
   return name === 'RTNTextSize';
 }
}

export class RNTextSizePackage extends RNPackage {
 createTurboModulesFactory(ctx: TurboModuleContext): TurboModulesFactory {
   return new RNTextSizeTurboModuleFactory (ctx);
 }
}