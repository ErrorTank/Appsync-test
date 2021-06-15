import { NextApiHandler } from 'next';
import { favoriteLaunchPast } from './store';

const handler: NextApiHandler = (req, res) => {
    if (req.method === 'GET') {
        return res.status(200).send({ launchesPast: favoriteLaunchPast});
    }
};

export default handler;
