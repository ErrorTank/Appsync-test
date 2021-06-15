import { gql } from '@apollo/client';

export const LAUNCHES_PAST_QUERY = gql`
    query listLaunchesPast($limit: Int!, $offset: Int!) {
      launchesPast(limit: $limit, offset: $offset) {
        id
        mission_name
        links {
          flickr_images
          mission_patch_small
        }
        rocket {
          rocket_name
        }
        launch_date_utc
      }
    }
`;

export const LAUNCH_PAST_QUERY = gql`
    query getLaunchPast($id: ID!) {
      launchesPast(find: {id: $id}) {
        id
        details
        mission_name
        launch_date_utc
        launch_site {
          site_name_long
        }
        links {
          article_link
          flickr_images
          mission_patch_small
        }
        rocket {
          rocket_name
        }
      }
    }
`;
