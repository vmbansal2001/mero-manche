// Minimal type definitions for minimatch to satisfy the TS compiler.
declare namespace minimatch {
  interface IOptions {
    debug?: boolean;
    nobrace?: boolean;
    noglobstar?: boolean;
    dot?: boolean;
    noext?: boolean;
    nocase?: boolean;
    nonull?: boolean;
    matchBase?: boolean;
    nocomment?: boolean;
    nonegate?: boolean;
    flipNegate?: boolean;
    partial?: boolean;
  }

  interface IMinimatch {
    pattern: string;
    options: IOptions;
    set: RegExp[][];
    regexp: RegExp | false;
    negate: boolean;
    comment: boolean;
    empty: boolean;
    makeRe(): RegExp | false;
    match(fname: string): boolean;
    matchOne(files: string[], pattern: string[], partial: boolean): boolean;
  }

  function minimatch(
    path: string,
    pattern: string,
    options?: IOptions
  ): boolean;
  function filter(
    pattern: string,
    options?: IOptions
  ): (path: string, index?: number, array?: string[]) => boolean;
  function match(list: string[], pattern: string, options?: IOptions): string[];
  function makeRe(pattern: string, options?: IOptions): RegExp | false;

  const Minimatch: {
    new (pattern: string, options?: IOptions): IMinimatch;
    prototype: IMinimatch;
  };
}

declare function minimatch(
  path: string,
  pattern: string,
  options?: minimatch.IOptions
): boolean;

export = minimatch;
