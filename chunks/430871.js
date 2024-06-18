"use strict";
n.d(t, {
  x: function() {
    return a
  }
});
var i = n(594174),
  r = n(130402),
  s = n(174065),
  o = n(353842);
async function a() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
  if (null == i.default.getCurrentUser()) return;
  let {
    isEmojiTextMatchSuggestionsEnabled: t
  } = o.Z.getCurrentConfig({
    location: e
  });
  if (!t) {
    s.Z.hasPersistedState() && s.Z.clear();
    return
  }
  if (s.Z.getIsFetching()) return;
  let n = s.Z.getEmojiCaptionsTTL();
  if (!(null != n && Date.now() < n)) await (0, r.n)()
}