import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Categories from './categories'

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="block md:hidden md:mb-12">
        <Avatar author={author} />
      </div>
      
      <div className="max-w-2xl mx-auto flex flex-row gap-3">
        <div className="hidden md:block ">
          <Avatar author={author} />
        </div>
        <div className="mb-6 text-md">
          Posted By <Date dateString={date} />
          <Categories categories={categories} />
          
        </div>
      </div>
      <div className=" sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
    </>
  )
}
