interface Config {
  length?: number;
  prefix?: string;
  postfix?: string;
}

declare module "D7k" {
  export function generateJoke(config: Config): string;
}
