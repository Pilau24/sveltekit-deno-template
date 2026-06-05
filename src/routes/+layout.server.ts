import {load as dotenv} from '@std/dotenv';

export const load = async () => {
  const env = await dotenv({ export: true });

	console.log(env);
	return {
		env: env
	};
};