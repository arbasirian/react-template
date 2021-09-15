import colors from './colors';
import device, { breakpoints } from './devices';

export default (theme: any, language: any) => {
  return {
    colors: colors(theme),
    device: device,
    breakpoints: breakpoints,
    language: language,
  };
};
