import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import SectionSeparator from './section-separator'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <h3 className="text-lg mb-3 leading-7 font-semibold">
        <Link
          href={`/posts/${slug}`}
          className="hover:underline"
          dangerouslySetInnerHTML={{ __html: title }}
        ></Link>
      </h3>
      <div className="text-sm mb-4">
        <Date dateString={date} />
      </div>
      <div className="border-accent-2 mt-5 mb-5">
        <SectionSeparator SectionSeparator={SectionSeparator} />
      </div>
      </div>
      
  )
}
