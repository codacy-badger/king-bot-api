import fs from 'fs';

class settings {

	assets_folder: string = './assets';
	database_name: string = '/database.json';

	read_credentials(){
		const filename: string = this.assets_folder + '/cred.txt';

		if(!fs.existsSync(filename)) return null;

		let cred: string = fs.readFileSync(filename, 'utf-8');
		let cred_array: string[] = cred.trim().split(';');

		return { email: cred_array[0], password: cred_array[1], gameworld: cred_array[2] };
	}
}

export default new settings();
