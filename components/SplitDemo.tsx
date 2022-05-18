import classNames from 'classnames'
import style from './SplitDemo.scss'

export interface ISplitDemoProps {
  className?: string
  selectMenu?: string[];
}

const SplitDemo = (props: ISplitDemoProps) => {
  return (
    <>
      <div className={classNames('splitDemo', props.className)}>
        
      </div>
      <style jsx>{style}</style>
    </>
  )
}

export default SplitDemo
