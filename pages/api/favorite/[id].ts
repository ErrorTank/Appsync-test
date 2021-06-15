import { NextApiHandler } from 'next';
import { favoriteLaunchPast } from './store';

const MAX_FAVORITE_LAUNCH = 10;

const handler: NextApiHandler = (req, res) => {
    if (req.method === 'GET') {
        const { id } = req.query;

        // return if the id is existed
        return res.status(200).send({
            isFavorited: favoriteLaunchPast.findIndex((favorite) => favorite.id === id) !== -1
        });
    }

    if (req.method === 'POST') {
        const body = req.body;
        const index = favoriteLaunchPast.findIndex(({ id }) => id === body.id);
        if (index === -1) {
            // if not exist check the current length
            if (favoriteLaunchPast.length >= MAX_FAVORITE_LAUNCH) {
                return res.status(400).send({ message: 'Cannot favorite more!' });
            }

            // then push the id to the array
            favoriteLaunchPast.push(body);
            return res.status(200).send({ message: 'Favorite success' });
        }

        // if already exist -> remove from the array
        favoriteLaunchPast.splice(index, 1);
        return res.status(200).send({ message: 'Unfavorite success' });
    }

    return res.status(404).send({ message: 'URL Not found!' });
};

export default handler;
