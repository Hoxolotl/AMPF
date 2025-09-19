console.log("V18")

let myData = simply.state.signal({ title: "The real title"})

simply.bind({
	root: myData,
	attribute: "data-flow"
})