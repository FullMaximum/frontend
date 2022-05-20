import axios from 'axios';

// Since this is a mock API ID and auth secret is left here
export default axios.create({
	baseURL: 'https://fullmaximum.azurewebsites.net/api/shop',
});
