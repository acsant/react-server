// the common object model of triton on server and client -sra.

module.exports = {
	Link: require('./components/Link'),
	History: require('./components/History'),
	ClientRequest: require('./ClientRequest'),
	components: {
		FragmentDataCache: require('./components/FragmentDataCache')
	},
	RequestLocalStorage: require('./util/RequestLocalStorage'),
	getCurrentRequestContext: require('./context/RequestContext').getCurrentRequestContext,
	bundleNameUtil: require("./util/bundleNameUtil"),
	PageUtil: require("./util/PageUtil"),
	logging: require("./logging"),
	config: require("./config"),
	TritonAgent: require('./TritonAgent')
}
