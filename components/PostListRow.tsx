import classNames from 'classnames'
import style from './PostListRow.scss'

export interface IPostListRowProps {
  className?: string
  title?: string
  description?: string
  createdAt?: string
  author?: string
  tags?: string[]
}

const PostListRow = (props: IPostListRowProps) => {
  const {className, title, description, createdAt, author, tags} = props 
  return (
    <>
      <div className={classNames('postListRow', className)}>
        <h2 className='postListRow__title'>{title}</h2>
        <p className='postListRow__description'>{description}</p>
        <div className='postListRow__tag'>
        {tags?.map(tag => (
          <span key={tag} className="postListRow__tagItem">{tag}</span>
        ))}
        </div>
        <div className='postListRow__bottom'>
          <h5 className='postListRow__bottomAuthor'>{author}</h5>
          <h5 className='postListRow__bottomCreatedAt'>{createdAt}</h5>
        </div>
      </div>
      <style jsx>{style}</style>
    </>
  )
}

export default PostListRow
