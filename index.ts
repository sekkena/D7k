interface Config {
  length?: number;
  prefix?: string;
  postfix?: string;
}

declare module "D7K" {
  export function generateJoke(config: Config): string;
}
