import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    boxBgColor: string;
    bgColor: string;
    accentColor: string;
  }
}
