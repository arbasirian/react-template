import { FC } from 'react';

import {
  BoxProps,
  FlexProps,
  GridProps,
  TextProps,
  TitleProps,
} from './types/components';

declare module 'components' {
  export const Box: FC<BoxProps>;
  export const Flex: FC<FlexProps>;
  export const Grid: FC<GridProps>;
  export const Text: FC<TextProps>;
  export const Title1: FC<TitleProps>;
  export const Title2: FC<TitleProps>;
  export const Title3: FC<TitleProps>;
  export const Title4: FC<TitleProps>;
  export const Title5: FC<TitleProps>;
}
