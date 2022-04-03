import { User } from '../../models/user.js'

async function getUser(req, res) {
	const { id } = req.query
	if (id !== undefined) {
		const user = await User.findOne({ _id: id })
		if (!user) {
			res.status(404).json({
				success: false,
				message: 'User with given id not found'
			})
		} else {
			res.status(200).json({
				success: true,
				message: 'User found',
				user
			})
		}
	} else {
		res.status(400).json({
			success: false,
			message: 'Id is not specified'
		})
	}
}

export { getUser }
