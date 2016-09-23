import emotionsKey from './api-key.js';

class TalkToApi extends Component {
	// API POST request with photo
	getEmotions() {
		let apiReqUrl = 'https://api.projectoxford.ai/emotion/v1.0/recognize';
		return fetch(apiReqUrl, {
		  method: 'POST',
		  headers: { 
		    'Content-Type': 'application/json',
		    'Ocp-Apim-Subscription-Key': '94d515677e3a410c9ce8792baeb53c6c'
		  },
		  body: JSON.stringify({
		    url: "http://universe.byu.edu/wp-content/uploads/2014/02/SelfiePolice_1.jpg"
		  })
		})
		.then((res) => res.json())
		.then((resJson) => {
		  console.log('RESPONSE', resJson)	// resJson is whole object
		  let scores = createFragment(resJson[0][scores]) // resJson[0][scores] = {...emotions}
		  return scores;
		})
		.catch((error) => {
		  console.error(error);
		})
	}
}



// create onCameraPress handler function to send the photo to Microsoft API

module.exports = GetEmotions;