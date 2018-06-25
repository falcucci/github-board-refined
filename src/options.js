import OptionsSync from 'webext-options-sync'
import _ from 'lodash'

new OptionsSync().syncForm('#options-form');

const chromeVersion = /Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1];

chrome.runtime.getPlatformInfo(info => {
  if (info.os === 'linux' && !_.isEmpty(chromeVersion)) {
    setTimeout(() => {
      document.body.style['min-width'] = '600px';
    }, 50);
  }

});
