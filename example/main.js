
createComponent("example-component",
	["bg-color", "text-color"],
	(attrs) => `
		<div style="background-color: ${attrs.bgColor}; color: ${attrs.textColor};">
            <h1><slot name="title"></slot></h1>
			<slot></slot>
		</div>
	`
);