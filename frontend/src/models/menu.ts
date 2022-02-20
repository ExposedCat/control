type MenuEntryProps = {
	iconName: string
	label: string
	id: string
	path: string
}

type MenuProps = {
	entries: MenuEntryProps[]
}

export { type MenuEntryProps, type MenuProps }
