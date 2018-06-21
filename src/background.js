import OptionsSync from 'webext-options-sync';
import dynamicContentScripts from 'webext-dynamic-content-scripts';

/* Define defaults */
new OptionsSync().define({
	defaults: {
		personalToken: '',
		logging: false
	},
});


// GitHub Enterprise support
dynamicContentScripts.addToFutureTabs();
