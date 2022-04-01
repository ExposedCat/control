import { Document, Model } from 'mongoose'

interface User {
	email: string
	password: string
}

interface UserDocument extends User, Document {}

interface UserModel extends Model<UserModel> {
	signUp: (email: string, password: string) => Promise<User>
}

export type { User, UserDocument, UserModel }
