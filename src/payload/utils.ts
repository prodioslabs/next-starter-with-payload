import { Media } from './types'

export function getURLFromMedia(media: Media | string) {
  if (typeof media === 'string') {
    return media
  } else if (media && typeof media.url === 'string') {
    return media.url
  }
  return ''
}
