import Color from 'color';
import QuickLru from 'quick-lru';

const rgbaCache = new QuickLru({ maxSize: 500 });
export const rgba = (hex, opacity) => {
  const cacheKey = `${hex}__${opacity}`;
  if (!rgbaCache.has(cacheKey)) {
    rgbaCache.set(
      cacheKey,
      Color(hex)
        .alpha(opacity)
        .string(),
    );
  }
  return rgbaCache.get(cacheKey);
};
