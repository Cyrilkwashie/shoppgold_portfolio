import {
  ABOUT_IMAGES,
  HOME_IMAGES,
  HERO_VIDEO,
  SEW_VIDEO,
  SITE_IMAGES,
  SITE_VIDEOS,
} from '@/lib/media'

export type GalleryCategory = 'ALL' | 'EDITORIAL' | 'ATELIER' | 'BRIDAL' | 'FILM'

export type GalleryItem = {
  id: string
  src: string
  type: 'image' | 'video'
  videoSrc?: string
  span?: 'normal' | 'wide' | 'tall'
  category: Exclude<GalleryCategory, 'ALL'>
  caption?: string
}

export const GALLERY_FILTERS: GalleryCategory[] = [
  'ALL',
  'EDITORIAL',
  'ATELIER',
  'BRIDAL',
  'FILM',
]

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: HOME_IMAGES.artOfTheDress,
    type: 'image',
    span: 'tall',
    category: 'EDITORIAL',
    caption: 'The art of the dress',
  },
  {
    id: '2',
    src: HOME_IMAGES.collections,
    type: 'image',
    category: 'EDITORIAL',
    caption: 'Collections',
  },
  {
    id: '3',
    src: SITE_IMAGES.img1,
    type: 'image',
    category: 'EDITORIAL',
    caption: 'Editorial',
  },
  {
    id: '4',
    src: SITE_IMAGES.img2,
    type: 'image',
    span: 'tall',
    category: 'BRIDAL',
    caption: 'Bridal portrait',
  },
  {
    id: '5',
    src: SITE_IMAGES.img3,
    type: 'image',
    category: 'EDITORIAL',
    caption: 'Cape Coast',
  },
  {
    id: '6',
    src: HOME_IMAGES.sketch,
    type: 'image',
    category: 'ATELIER',
    caption: 'First sketch',
  },
  {
    id: '7',
    src: HOME_IMAGES.drape,
    type: 'image',
    span: 'tall',
    category: 'ATELIER',
    caption: 'Pinning the drape',
  },
  {
    id: '8',
    src: HOME_IMAGES.gallery,
    type: 'image',
    category: 'EDITORIAL',
    caption: 'Moments & details',
  },
  {
    id: '9',
    src: ABOUT_IMAGES.shikatel,
    type: 'image',
    category: 'EDITORIAL',
    caption: 'Shikatel',
  },
  {
    id: '10',
    src: ABOUT_IMAGES.origins,
    type: 'image',
    span: 'tall',
    category: 'ATELIER',
    caption: 'Atelier',
  },
  {
    id: '11',
    src: ABOUT_IMAGES.quotes[0],
    type: 'image',
    category: 'EDITORIAL',
  },
  {
    id: '12',
    src: ABOUT_IMAGES.quotes[1],
    type: 'image',
    category: 'EDITORIAL',
  },
  {
    id: '13',
    src: ABOUT_IMAGES.quotes[2],
    type: 'image',
    span: 'tall',
    category: 'EDITORIAL',
  },
  {
    id: '14',
    src: HOME_IMAGES.drape,
    type: 'video',
    videoSrc: HERO_VIDEO,
    span: 'wide',
    category: 'FILM',
    caption: 'Hero film',
  },
  {
    id: '15',
    src: HOME_IMAGES.sketch,
    type: 'video',
    videoSrc: SEW_VIDEO,
    span: 'wide',
    category: 'FILM',
    caption: 'Sewing process',
  },
  {
    id: '16',
    src: SITE_IMAGES.img1,
    type: 'video',
    videoSrc: SITE_VIDEOS.vid1,
    span: 'wide',
    category: 'FILM',
    caption: 'Film 01',
  },
  {
    id: '17',
    src: SITE_IMAGES.img2,
    type: 'video',
    videoSrc: SITE_VIDEOS.vid2,
    span: 'wide',
    category: 'FILM',
    caption: 'Film 02',
  },
  {
    id: '18',
    src: SITE_IMAGES.img3,
    type: 'video',
    videoSrc: SITE_VIDEOS.vid3,
    category: 'FILM',
    caption: 'Film 03',
  },
  {
    id: '19',
    src: HOME_IMAGES.gallery,
    type: 'video',
    videoSrc: SITE_VIDEOS.vid4,
    span: 'wide',
    category: 'FILM',
    caption: 'Film 04',
  },
]
