import { demo } from 'frontbook-react'

export default demo({
  controls: {
    name: {
      type: "select",
      defaultValue: {
        defaultValue: "Hello Frontbook!",
        selectableValues: ["Hello Frontbook!", "A", "B", "C"]
      },
    }
  },
  renderProps: (props) => {
    //  TODO: Add renderProps
    return { ...props }
  }
})
