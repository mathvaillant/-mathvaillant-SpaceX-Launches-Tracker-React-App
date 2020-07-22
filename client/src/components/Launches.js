import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from "./LaunchItem";
import MissionKey from './MissionKey';
import Spinner from '../spinner.gif';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery{
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
      details
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
      links {
        mission_patch_small
        article_link
        wikipedia
        video_link
      }
    }
  }
`;

export class Launches extends Component {
  render() {
    return (
      <div className='container' style={{textAlign: 'center'}}>
        <h3 className='my-3' >Launches</h3>
        <MissionKey />
        <Query query={LAUNCHES_QUERY}>
          {
            ({loading, error, data}) => {
              if(loading) return <img style={{textAlign:'center', margin: 'auto'}} src={Spinner}/>
              if(error) console.log(error);

              console.log(data);
              return <Fragment>
                {
                  data.launches.map(launch => (
                    <LaunchItem key={launch.flight_number} launch={launch}/>
                  ))
                }
              </Fragment>;
            }
          }
        </Query>
      </div>
    )
  }
}

export default Launches
