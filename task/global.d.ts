import 'styled-components';

declare module 'snackbar/SnackbarComponent';

declare const isDev: boolean;
declare const baseURL: string;

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    backGroundColor: string;
  }
}
// declare module '*.ttf';
// declare module '*.png';
// declare module '*.jpg';
// declare module '*.gpeg';

// declare module '*.svg?url' {
//   const content: any;
//   export default content;
// }

// declare module '*.svg' {
//   const content: any;
//   export default content;
// }
