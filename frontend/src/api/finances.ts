import { apiCall } from './call'

function getUserFinancesData(userId: number) {
	return apiCall('get', '/getUserFinancesData', {
		userId
	})
}

export { getUserFinancesData }
