import crypto from 'crypto'

function encode(secret: string) {
	return crypto.createHash('sha256').update(secret).digest('hex')
}

export { encode }
