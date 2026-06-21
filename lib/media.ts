/** Drop your hero clip at public/videos/hero.mp4 */
export const HERO_VIDEO = '/videos/hero.mp4'

/** Optional still shown while the video loads — public/videos/hero-poster.jpg */
export const HERO_POSTER = '/videos/hero-poster.jpg'

/** Homepage editorial images — public/videos/ */
export const HOME_IMAGES = {
  artOfTheDress: '/videos/art-of-the-dress.jpeg',
  collections: '/videos/collections.jpeg',
  sketch: '/videos/sketch.jpeg',
  drape: '/videos/drape.jpeg',
  gallery: '/videos/gallery.jpeg',
} as const

/** About page editorial images — public/videos/ */
export const ABOUT_IMAGES = {
  shikatel: '/videos/shikatel.jpeg',
  origins: '/videos/origins.jpeg',
  quotes: [
    '/videos/quote-1.jpeg',
    '/videos/quote-2.jpeg',
    '/videos/quote-3.jpeg',
  ] as const,
} as const

export const SEW_VIDEO = '/videos/sew.mp4'

/** Additional portfolio images */
export const SITE_IMAGES = {
  img1: '/videos/img1.jpeg',
  img2: '/videos/img%202.jpeg',
  img3: '/videos/img%203.jpeg',
} as const

/** Portfolio films */
export const SITE_VIDEOS = {
  vid1: '/videos/vid%201.mp4',
  vid2: '/videos/vid%202.mp4',
  vid3: '/videos/vid%203.mp4',
  vid4: '/videos/vid%204.mp4',
} as const

/** All local stills — use to replace placeholders across the site */
export const LOCAL_IMAGES = [
  HOME_IMAGES.artOfTheDress,
  HOME_IMAGES.collections,
  HOME_IMAGES.sketch,
  HOME_IMAGES.drape,
  HOME_IMAGES.gallery,
  ABOUT_IMAGES.shikatel,
  ABOUT_IMAGES.origins,
  ABOUT_IMAGES.quotes[0],
  ABOUT_IMAGES.quotes[1],
  ABOUT_IMAGES.quotes[2],
  SITE_IMAGES.img1,
  SITE_IMAGES.img2,
  SITE_IMAGES.img3,
] as const

export const LOCAL_VIDEOS = [
  HERO_VIDEO,
  SEW_VIDEO,
  SITE_VIDEOS.vid1,
  SITE_VIDEOS.vid2,
  SITE_VIDEOS.vid3,
  SITE_VIDEOS.vid4,
] as const

export function localImage(index: number): string {
  return LOCAL_IMAGES[index % LOCAL_IMAGES.length]!
}

export function localVideo(index: number): string {
  return LOCAL_VIDEOS[index % LOCAL_VIDEOS.length]!
}

export const HERO_VIDEOS = LOCAL_VIDEOS
