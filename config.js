// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Ma&#39;am Honey',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '6cd6c2f4741ee4cb5ee315fcb94b56ac', // Write here your API Key
	weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '13.00000000',
	defaultLongitude: '122.00000000',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Spotify',
			icon: 'music',
			link: 'https://open.spotify.com/',
		},
		{
			id: '2',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
		{
			id: '3',
			name: 'Netflix',
			icon: 'popcorn',
			link: 'https://netflix.com',
		},
		{
			id: '4',
			name: 'Facebook',
			icon: 'facebook',
			link: 'https://www.facebook.com',
		},
		{
			id: '5',
			name: 'Pinterest',
			icon: 'pin',
			link: 'https://pinterest.com',
		},
		{
			id: '6',
			name: 'Instagram',
			icon: 'instagram',
			link: 'https://instagram.com/',
		},
	],
	
	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'list-music',
			id: '1',
			links: [
				{
					name: 'krnb and things',
					link: 'https://open.spotify.com/playlist/7JhoZPW6Jr4x36nZClGXPo',
				},
				{
					name: 'bitchin',
					link: 'https://open.spotify.com/playlist/5YHLdrygNyLTguirxuYJ4i',
				},
			],
		},
		{
			icon: 'book',
			id: '2',
			links : [
				{
					name: 'google docs',
					link: 'https://docs.google.com/document/u/0/?pli=1',
				},
				{
					name: 'canva',
					link: 'https://canva.com',
				},
			],
		},
	],
};
