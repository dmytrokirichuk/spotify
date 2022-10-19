import {
  faStepForward,
  faPlayCircle,
  faStepBackward,
  faEllipsisH,
  faHeart,
  faRandom,
  faRetweet,
  faVolumeDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './_player.scss';

export default function Player() {
  return (
    <div className="player">
      <div className="player__album">
        <span />
        <p>Nothing&apos;s playing</p>
      </div>
      <div className="player__controls">
        <FontAwesomeIcon icon={faStepBackward} />
        <FontAwesomeIcon icon={faPlayCircle} />
        <FontAwesomeIcon icon={faStepForward} />
      </div>
      <div className="player__seekbar" />
      <div className="player__actions">
        <FontAwesomeIcon icon={faEllipsisH} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faRandom} />
        <FontAwesomeIcon icon={faRetweet} />
        <FontAwesomeIcon icon={faVolumeDown} />
      </div>
    </div>
  );
}
