export type TRocketLaunch = {
    rocket_name: string;
};

export type TLaunchPast = {
    id: string,
    launch_date_utc: string,
    links: {
        flickr_images: string[],
        mission_patch_small: string,
    },
    mission_name: string,
    rocket: TRocketLaunch;
};

export type TQueryLaunchesPast = {
    launchesPast: TLaunchPast[];
};

export type TDetailLaunchPast = {
    id: string;
    details: string;
    mission_name: string;
    launch_date_utc: string;
    launch_site: {
        site_name_long: string;
    };
    links: {
        article_link: string;
        flickr_images: string[];
        mission_patch_small: string;
    };
    rocket: {
        rocket_name: string
    }
};

export type TQueryDetailLaunchPast = { launchesPast: TDetailLaunchPast[] };
