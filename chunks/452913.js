"use strict";
n.r(t);
var i = n("392711"),
  o = n.n(i),
  l = n("853856"),
  u = n("706590"),
  a = n("905423"),
  s = n("592125"),
  d = n("496675"),
  r = n("944486"),
  E = n("771845"),
  c = n("774343"),
  _ = n("475468"),
  A = n("981631");
t.default = o().throttle(function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
    t = E.default.getFlattenedGuildIds(),
    n = function(e) {
      let t = a.default.getState().guildId;
      if (null == t) return -2;
      if (t === A.FAVORITES) return -1;
      let n = e.indexOf(t);
      return -1 === n ? -2 : n
    }(t);
  if (-1 === (n += e) && !(0, u.isFavoritesGuildVisible)(l.default, s.default, d.default) && (n += e), -3 === n && (n = t.length - 1), n >= t.length || -2 === n) {
    (0, _.transitionToPage)(c.default.getHomeLink());
    return
  }
  let i = -1 === n ? A.FAVORITES : t[n],
    o = r.default.getChannelId(i);
  (0, _.transitionToChannel)(i, o === i ? null : o, !1)
}, A.NAVIGATION_THROTTLE)