import { EVENT_TAG_IMAGE_MAP } from '../settings'

const TagIcon = ({ tags, match, render }) => (
  render(
    tags.map(tag => EVENT_TAG_IMAGE_MAP[tag]),
    EVENT_TAG_IMAGE_MAP[tags[0]] || EVENT_TAG_IMAGE_MAP.default,
  )
)

export default TagIcon
