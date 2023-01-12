const temp = document.querySelector('.temp')
const locate = document.querySelector('.location')
const condition = document.querySelector('.condit')

//Retrieving api data
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7af9d8dc6dmsha8a77ced0ded8a7p17c3cfjsn2f7d13871da6',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

fetch('https://open-weather13.p.rapidapi.com/city/landon', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

//
condition.addEventListener('click',()=>{
    console.log('ho')
})