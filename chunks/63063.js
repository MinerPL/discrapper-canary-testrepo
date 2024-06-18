"use strict";
n.d(t, {
  w: function() {
    return a
  }
});
var i = n(299379),
  r = n(706454),
  s = n(358085),
  o = n(981631);
let a = "https://".concat(o.xr4),
  l = "https://".concat(o.rxP);

function u(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
  return t + e
}

function _() {
  return r.default.locale.toLowerCase()
}
t.Z = {
  getArticleURL: e => u("/hc/".concat(_(), "/articles/").concat(e)),
  getDevArticleURL: e => u("/hc/".concat(_(), "/articles/").concat(e), l),
  getCreatorSupportArticleURL: e => u("/hc/".concat(_(), "/articles/").concat(e), "https://creator-support.discord.com"),
  getTwitterURL: () => (0, i.Z)(o.RK.TWITTER),
  getCommunityURL: () => u("/hc/".concat(_())),
  getSubmitRequestURL(e) {
    let t = u("/hc/".concat(_(), "/requests/new?platform=").concat(encodeURIComponent((0, s.getPlatformName)())));
    return null != e && (t += "&device_info=".concat(encodeURIComponent(e))), t
  },
  getSearchURL(e) {
    let t = encodeURIComponent(e);
    return u("/hc/".concat(_(), "/search?utf8=%E2%9C%93&query=").concat(t, "&commit=Search"))
  },
  getFeaturedArticlesJsonURL: () => u("/api/v2/help_center/en-us/articles.json?label_names=featured")
}