export default function PostTitle({ children }) {
  return (
    <h1
      className=" md:text-7xl lg:text-lg text-lg font-semibold  leading-8 md:leading-none mb-3  md:text-left"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
