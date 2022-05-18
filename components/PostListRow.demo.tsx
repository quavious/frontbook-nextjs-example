import { demo } from 'frontbook-react'

export default demo({
  h: 8,
  controls: {
    title: {
        type: "string",
        defaultValue: "Sed laoreet purus mauris, malesuada.",
    },
    description: {
        type: 'string',
        defaultValue: "Sed vitae ante consequat lectus consequat blandit nec ac urna."
    },
    createdAt: {
        type: "string",
        defaultValue: new Date().toLocaleString()
    },
    author: {
        type: "string",
        defaultValue: "nw.lee"
    }
  },
  renderProps: (props) => {
    //  TODO: Add renderProps
    return { ...props, tags: ["REACT", "TYPESCRIPT", "NEXTJS", "BLOG", "MARKDOWN", "FRONTBOOK"] }
  }
})
