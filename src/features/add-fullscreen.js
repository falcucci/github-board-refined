import _ from 'lodash'

export const getUrlParameter = name => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};


export const applyFullScreen = () => {
  if (!getUrlParameter('fullscreen')) {
    window.location.href = document.URL + '?fullscreen=true'
  }
};
