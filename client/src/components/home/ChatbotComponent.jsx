import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
	{
		id: '0',
		message: 'Hey User!',
		trigger: '1',
	}, {
		id: '1',
		message: 'Please write your username',
		trigger: '2'
	}, {
		id: '2',
		user: true,
		trigger: '3',
	}, {
		id: '3',
		message: " hi {previousValue}, how can I help you?",
		trigger: 4
	}, {
		id: '4',
		options: [
			{ value: 1, label: 'View Product' },
			{ value: 2, label: 'Explore Product' },

		],
		end: true
	}
];

// Creating our own theme
const theme = {
	background: '#C9FF8F',
	headerBgColor: '#197B22',
	headerFontSize: '20px',
	botBubbleColor: '#0F3789',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};

// Set some properties of the bot
const config = {
	botAvatar: "https://cdn.dribbble.com/users/587589/screenshots/11244192/carter_2_300_perc.png",
	floating: true,
};

function ChatbotComponent() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot
					headerTitle="Deal"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default ChatbotComponent;
