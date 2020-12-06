import defaultSettings from '@/settings'

const title = defaultSettings.title || '阳光商旅云平台'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
