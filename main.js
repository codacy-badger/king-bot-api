import kingbot from './dist';

const gameworld = '';
const email = '';
const password = '';

async function main(){
	// await kingbot.login(gameworld, email, password);

	// place bot action below
	// kingbot.add_building_queue({clay: [10], iron: [10], crop:[10], wood: [10]}, '-01-');
	kingbot.inactive_test();
}

async function scout() {
	await kingbot.login(gameworld, email, password);

	// farmlists which should be send when using npm run scout
}

if(process.argv[2] == '--scout') scout();
else main();

export {};

