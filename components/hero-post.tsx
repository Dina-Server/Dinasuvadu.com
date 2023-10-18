import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import SectionSeparator from './section-separator'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-5">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <div className="md:grid md:grid-cols-1 md:gap-x-16 lg:gap-x-8 mb-2">
        <div>
          <h3 className="mb-4 text-lg leading-7 font-semibold">
            <Link
              href={`/posts/${slug}`}
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h3>
          <div className="mb-4 text-sm">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <div
            className="text-md leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
      </div>
      <div className="border-accent-2 mt-5 mb-5">
        <SectionSeparator SectionSeparator={SectionSeparator} />
      </div>
    </section>
  )
}
