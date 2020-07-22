import React, { Fragment } from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import '../App.css';

export default function LaunchItem({ launch: { flight_number, mission_name, launch_date_local, launch_success, details, links } }) {
  return (
    <div className="container mb-5">
      <div className='card card-body py-2 px-3'>
        <div className="row p-3">
          <div className="col-md-7">
            <h4 style={{color: '#fff'}}>Mission: {' '}
              <span className={classNames({
                'text-success': launch_success, 
                'text-danger': !launch_success
                })}>{ mission_name }
               </span>
            </h4>
            <p>Date: <Moment format="YYYY-MM-DD HH:mm">{ launch_date_local }</Moment></p>
          </div>
          <div className="" style={{margin: 'auto', textAlign: 'center'}}>
            <img src={links.mission_patch_small} alt="mission_patch_small" style={{width: '200px'}}/>
          </div>
        </div>
      </div>

      <div className='card card-body mb-3 ' style={{backgroundColor: '#404040'}}>
        <div className="row px-3 py-0">
          <div className="col-md-12">
            <div style={{color: '#fff'}}>
              <h5>Details: </h5> 
              { details ?
                <p>{details}</p> : <p>See info on the links below</p>
              }

              { links.article_link && 
                <button className='btn btn-secondary' style={{backgroundColor:'#A6A6A6'}}><a style={{color: '#000'}} target='_blank' href={`${links.article_link}`}>Read More</a></button>
              }

              { links.wikipedia && 
                <button className='btn btn-white'><a style={{color: '#fff'}} target='_blank' href={`${links.wikipedia}`}>Wikipedia</a></button>
              }

              { links.video_link && 
                <button className='btn btn-danger'><a style={{color: '#fff'}} target='_blank' href={`${links.video_link}`}>Video Launch</a></button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
