import { demo } from 'frontbook-react'

export default demo({
  controls: {
    selectMenu: {
        type: "select",
        defaultValue: {
            defaultValue: "XY",
            selectableValues: ["YZ", "ZX"]
        }
    }
  },
  renderProps: (props) => {
    //  TODO: Add renderProps
    return { ...props }
  }
})
