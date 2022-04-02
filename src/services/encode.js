import crypto from 'crypto'

function encode(secret) {
	return crypto.createHash('sha256').update(secret).digest('hex')
}

export { encode }
