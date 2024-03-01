import 'styled-components';

declare const isDev: boolean;
declare const baseURL: string;
declare const microfrontend: string;
declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    backGroundColor: string;
  }
}
declare module 'snackbar/SnackbarComponent' {
  const SnackbarComponent: React.ComponentType; // Предполагая, что компонент является React-компонентом

  export default SnackbarComponent;
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
