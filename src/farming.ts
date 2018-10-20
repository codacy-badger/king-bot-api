import { log, find_state_data } from './util';
import { Ifarmlist } from './interfaces';
import external_api from './external_api';
import settings from './settings';

class farming {
	farmlist_ident: string = 'Collection:FarmList:';

	find(name: string, data: any): Ifarmlist {
		const lists = find_state_data(this.farmlist_ident, data);

		const farmlist = lists.find((x: any) => x.data.listName.toLowerCase() == name.toLowerCase());

		if(!farmlist) {
			log(`couldn't find farmlist ${name} !`);
			return null;
		}

		return farmlist.data;
	}

	async find_inactive() {
		external_api.get_inactive_villages(settings.gameworld, 10, 20);
	}
}

export default new farming();
