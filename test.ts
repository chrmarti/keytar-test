import * as keytar from 'keytar';

(async function() {
	try {
		console.log(await keytar.getPassword('keytar.test', 'test'));
	} catch (e) {
		console.error(e);
	}
	await keytar.setPassword('keytar.test', 'test', 'secret_' + Date.now());
	try {
		console.log(await keytar.getPassword('keytar.test', 'test'));
	} catch (e) {
		console.error(e);
	}
})().catch(console.error);
