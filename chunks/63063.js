n.d(t, {
	w: function () {
		return o;
	}
});
var r = n(299379),
	i = n(706454),
	a = n(358085),
	s = n(981631);
let o = 'https://'.concat(s.xr4),
	l = 'https://'.concat(s.rxP);
function u(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
	return t + e;
}
function c() {
	return i.default.locale.toLowerCase();
}
t.Z = {
	getArticleURL: (e) => u('/hc/'.concat(c(), '/articles/').concat(e)),
	getDevArticleURL: (e) => u('/hc/'.concat(c(), '/articles/').concat(e), l),
	getCreatorSupportArticleURL: (e) =>
		u('/hc/'.concat(c(), '/articles/').concat(e), 'https://creator-support.discord.com'),
	getTwitterURL: () => (0, r.Z)(s.RK.TWITTER),
	getCommunityURL: () => u('/hc/'.concat(c())),
	getSubmitRequestURL(e) {
		let t = u('/hc/'.concat(c(), '/requests/new?platform=').concat(encodeURIComponent((0, a.getPlatformName)())));
		return null != e && (t += '&device_info='.concat(encodeURIComponent(e))), t;
	},
	getSearchURL(e) {
		let t = encodeURIComponent(e);
		return u('/hc/'.concat(c(), '/search?utf8=%E2%9C%93&query=').concat(t, '&commit=Search'));
	},
	getFeaturedArticlesJsonURL: () => u('/api/v2/help_center/en-us/articles.json?label_names=featured')
};
