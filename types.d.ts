// Type declarations for modules without type definitions
declare module 'react' {
  import * as React from 'react';
  export = React;
}

declare module 'react-dom' {
  import * as ReactDOM from 'react-dom';
  export = ReactDOM;
}

declare module 'next/font/google' {
  export interface FontOptions {
    weight?: string | string[];
    style?: string | string[];
    subsets?: string[];
    display?: string;
    variable?: string;
  }

  export function Inter(options: FontOptions): {
    className: string;
    style: { fontFamily: string };
  };
  
  export function Poppins(options: FontOptions): {
    className: string;
    style: { fontFamily: string };
    variable: string;
  };
}

declare module 'next/link' {
  import { ComponentProps } from 'react';
  export default function Link(props: {
    href: string;
    className?: string;
    children: React.ReactNode;
    [key: string]: any;
  }): JSX.Element;
}

declare module 'next/image' {
  import { ComponentProps } from 'react';
  export default function Image(props: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    [key: string]: any;
  }): JSX.Element;
}

declare module 'framer-motion' {
  export const motion: {
    [key: string]: any;
  };
  
  export interface AnimationProps {
    initial?: any;
    animate?: any;
    exit?: any;
    variants?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
  }
}

declare module 'react-intersection-observer' {
  export function useInView(options?: {
    threshold?: number;
    triggerOnce?: boolean;
    rootMargin?: string;
  }): {
    ref: (node: Element | null) => void;
    inView: boolean;
    entry?: IntersectionObserverEntry;
  };
}

declare module 'next-themes' {
  export interface ThemeProviderProps {
    attribute?: string;
    defaultTheme?: string;
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
    children: React.ReactNode;
    [key: string]: any;
  }
  
  export function ThemeProvider(props: ThemeProviderProps): JSX.Element;
  
  export function useTheme(): {
    theme: string | undefined;
    setTheme: (theme: string) => void;
    resolvedTheme: string | undefined;
    themes: string[];
    systemTheme: string | undefined;
  };
}

declare namespace JSX {
  interface IntrinsicElements {
    [elementName: string]: any;
  }
}

declare global {
  namespace React {
    interface ReactNode {
      [key: string]: any;
    }
  }
} 