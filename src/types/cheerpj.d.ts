declare var cheerpjInit: (options?: any) => Promise<void>;
declare var cheerpjCreateDisplay: (width: number, height: number, element?: HTMLElement) => void;
declare var cheerpjRunJar: (jarPath: string, ...args: string[]) => Promise<number>;
declare var cheerpjCreateNodeFS: (url: string, mountPoint: string) => Promise<void>;