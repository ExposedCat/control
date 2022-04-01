import mongoose from 'mongoose'
const { Schema, model } = mongoose
import { UserDocument, UserModel } from '../types/database.js'

const UserSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
})

UserSchema.statics.signUp = function (email: string, password: string) {
	return this.create({
		email,
		password
	})
}

const User = model<UserDocument, UserModel>('User', UserSchema)

export { User }
