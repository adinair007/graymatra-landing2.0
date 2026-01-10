declare module "locomotive-scroll" {
  interface LocomotiveScrollOptions {
    el: HTMLElement;
    smooth?: boolean;
    lerp?: number;
    multiplier?: number;
    getDirection?: boolean;
    getSpeed?: boolean;
    class?: string;
    [key: string]: any;
  }

  class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    destroy(): void;
    update(): void;
  }

  export default LocomotiveScroll;
}
