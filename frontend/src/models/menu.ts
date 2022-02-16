type MenuEntryProps = {
	iconName: string
	label: string
	id: string
}

type MenuProps = {
	entries: MenuEntryProps[]
}

export { type MenuEntryProps, type MenuProps }
