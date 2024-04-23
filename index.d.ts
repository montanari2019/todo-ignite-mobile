// import type { SvgProps as DefaultSvgProps } from 'react-native-svg';
declare module "*.jpg";
declare module "*.png";



declare module 'react-native-svg' {
  interface SvgProps extends DefaultSvgProps {
    className?: string;
  }
}