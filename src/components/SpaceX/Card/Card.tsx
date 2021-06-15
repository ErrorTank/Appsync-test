import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { AxiosResponse } from 'axios';

import { TLaunchPast } from '../../../@types';
import { Item, RocketImg } from '../../common';
import { axios } from '../../../helpers';

interface ICard {
    launch: TLaunchPast
}

const Card: FC<ICard> = ({ launch }) => {
    const { links, rocket, id } = launch;
    const [isFavorited, setIsFavorited] = useState(false);

    const checkFavorited = async () => {
        const response = await axios({
            method: 'GET',
            url: `/api/favorite/${id}`
        });
        setIsFavorited((response as AxiosResponse).data.isFavorited);
    };

    useEffect(() => {
        (async () => {
            await checkFavorited();
        })();
    }, [id]);

    const handleCheck = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        try {
            await axios({
                method: 'POST',
                url: `/api/favorite/${id}`,
                data: launch,
            }).then(checkFavorited);
        } catch(err) {
            alert(err.response.data.message);
        }
    };

    return (
        <Link href={`/launch-past/${id}`}>
            <Item>
                <RocketImg src={links.mission_patch_small || 'https://via.placeholder.com/256'} alt="space_x" />
                <div>
                    {rocket.rocket_name}
                    <br />
                    <button type="button" onClick={handleCheck}>{isFavorited ? 'Unfavorite' : 'Favorite'}</button>
                </div>
            </Item>
        </Link>
    );
};

export default Card;
