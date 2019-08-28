import React from 'react';
import {getYoutubeId} from '../../utils/general';
import {
  youtubeContainer,
  iframeObject,
} from './style.scss';

const YoutubeElement = (props) => {
  const {
    title,
    link,
    videoRef,
  } = props;

  const youtubeId = getYoutubeId(link);
  const youtubeUrl = `https://www.youtube.com/embed/${youtubeId}`;

  return (
    <div className={youtubeContainer}>
      <iframe
        ref={videoRef}
        title={title}
        className={iframeObject}
        width="853"
        height="480"
        src={`${youtubeUrl}?modestbranding=1&color=white`}
        frameBorder="0"
        allowFullScreen
        srcDoc={`
        <style>
          *{margin:0;padding:0}
          html{height:100%}
          body{overflow:hidden;height:100%}
          a{display:block;position:relative;height:100%}
          span{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(47,47,47,0.5)}
          img,svg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}
        </style>
        <a href=${youtubeUrl}?autoplay=1>
          <img src=https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg>
          <span>
            <svg height=170 viewBox='0 0 170 170' width=170 xmlns='http://www.w3.org/2000/svg'><g fill=none fill-rule=evenodd><path d='m85 0c46.871096 0 85 38.1285238 85 85.0000856 0 46.8707064-38.128904 84.9999144-85 84.9999144-46.8712667 0-85-38.129208-85-84.9999144 0-46.8715618 38.1287333-85.0000856 85-85.0000856zm0 7.2510129c-42.8816912 0-77.74880868 34.8674246-77.74880868 77.7490727 0 42.8814764 34.86711748 77.7485594 77.74880868 77.7485594 42.881862 0 77.748638-34.867083 77.748638-77.7485594 0-42.8816481-34.866776-77.7490727-77.748638-77.7490727z'/><path d='m22.351297 33.6528814c-.5406356.6588563-1.0710818 1.3263935-1.5910977 2.0023708-10.5106646 13.662989-16.7601993 30.7740399-16.7601993 49.3447478 0 44.735065 36.2649353 81 81 81 44.735065 0 81-36.264935 81-81 0-44.7350647-36.264935-81-81-81-19.950699 0-38.2167463 7.2128516-52.3327055 19.1731187' stroke=#fff stroke-linecap=round stroke-width='7'/><path d='m118.032155 105.916979h-34.6216539c-3.8659932 0-7 3.134007-7 7h48.0122309c2.76488 0 4.438085-3.05507 2.949156-5.384802l-29.8778767-46.7500003c-1.3763615-2.1535968-4.5219501-2.1535968-5.8983116 0l-31.7626788 49.6991553c3.2575475 2.081896 7.5860211 1.128841 9.6679164-2.128706l25.0439182-39.1862919z' fill=#fff fill-rule=nonzero transform='matrix(0 1 -1 0 179.922704 -7.838746)'/></g></svg>
          </span>
        </a>`}
      />
    </div>
  );
};

export default YoutubeElement;
