import { demo } from 'frontbook-react'

export default demo({
  controls: {
    inputA: {
        type: "string",
        defaultValue: "Hello Frontbook!",
    },
    inputB: {
        type: 'string',
        defaultValue: "Example Text"
    },
    isChecked: {
        type: "boolean",
        defaultValue: false
    }
  },
  renderProps: (props) => {
    //  TODO: Add renderProps
    return { ...props }
  }
})
