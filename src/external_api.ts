import axios, { AxiosInstance } from 'axios';

class external_api {
	private ax: AxiosInstance;
	private engine_api: string = 'https://api.travian.engin9tools.com/api/v1';

	constructor() {
		this.ax = axios.create();
	}

	async get_inactive_villages(
		gameworld: string, x: number, y: number, 
		max_pop: number = 500, max_player_pop: number = 1500, 
		max_player_villages: number = 5, evolution_max: number = 0, 
		evolution_day: number = 3): Promise<any[]> {

		const base_url: string = 'https://www.gettertools.com';
		const url: string = `/${gameworld}.kingdoms.com/42-Search-inactives`;
		const payload: any = {

		}

		return;
		const gameworldID: number = 209;

		let page: number = 0;
		let res_data: any[] = [];
		const inactive_villages: any[] = [];

		do {
			const page_url: string = `\
				${this.engine_api}\
				/farm-finder?\
				serverId=${gameworldID}&\
				x=${x}&\
				y=${y}&\
				days=${evolution_day}&\
				maxVillages=${max_player_villages}&\
				minPopVillage=1&\
				maxPopVillage=${max_pop}&\
				minPopPlayer=1&\
				maxPopPlayer=${max_player_pop}&\
				maxEvolution=${evolution_max}&\
				onlyNewFarms=false&\
				allowRomans=true&\
				allowGauls=true&\
				allowTeutons=true&\
				allowAlliances=true&\
				allowCapitals=true&\
				page=${page}\
			`.replace(/\s/g, ''); // get rid of all whitespace


			const res: any = await this.ax.get(page_url);

			res_data = res.data.data;
			if(res_data) {
				for(let vill of res_data) {
					inactive_villages.push(vill);
				}
			}

			page++;
			break;
		} while(res_data);

		console.log(inactive_villages);

		return null;
	}

}

export interface Iinactive_village {

}

export default new external_api();
