n.d(t, {
    w: function () {
        return s;
    }
});
var r = n(299379), i = n(706454), a = n(358085), o = n(981631);
let s = 'https://'.concat(o.xr4), l = 'https://'.concat(o.rxP);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
    return t + e;
}
function c() {
    return i.default.locale.toLowerCase();
}
t.Z = {
    getArticleURL: e => u('/hc/'.concat(c(), '/articles/').concat(e)),
    getDevArticleURL: e => u('/hc/'.concat(c(), '/articles/').concat(e), l),
    getCreatorSupportArticleURL: e => u('/hc/'.concat(c(), '/articles/').concat(e), 'https://creator-support.discord.com'),
    getTwitterURL: () => (0, r.Z)(o.RK.TWITTER),
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
