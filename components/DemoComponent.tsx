import classNames from 'classnames'
import style from './DemoComponent.scss'

export interface IDemoComponentProps {
  className?: string
  inputA?: string
  inputB?: string
  isChecked?: boolean

  onInputAChange?: (value: string) => void;
  onInputBChange?: (value: string) => void;
  onIsCheckedChange?: (value: boolean) => void;
}

const DemoComponent = (props: IDemoComponentProps) => {
  return (
    <>
      <div className={classNames('demoComponent', props.className)}>
        <div>{props.inputA}</div>
        <div>{props.inputB}</div>
        <input type="checkbox" checked={props.isChecked} />
      </div>
      <style jsx>{style}</style>
    </>
  )
}

export default DemoComponent
