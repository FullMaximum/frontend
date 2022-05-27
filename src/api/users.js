import axios from 'axios';

export default axios.create({
	baseURL: 'https://fullmaximum.azurewebsites.net/api/users',
});
