// we do here extend (augment) the interface
import 'pinia';
declare module 'pinia' {
  export interface PiniaCustomProperties {
    secret: string;
  }
}
