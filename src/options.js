import OptionsSync from 'webext-options-sync'

new OptionsSync().syncForm('#options-form');

chrome.runtime.getPlatformInfo(info => {
  if (info.os === 'linux') {
    setTimeout(() => {
      document.body.style['min-width'] = '600px';
    }, 50);
  }

});
