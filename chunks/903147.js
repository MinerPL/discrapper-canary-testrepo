"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var i = n("917351"),
  o = n.n(i),
  l = n("379881"),
  u = n("15131"),
  a = n("393027"),
  s = n("42203"),
  d = n("957255"),
  r = n("18494"),
  E = n("677099"),
  c = n("330338"),
  _ = n("722525"),
  A = n("49111"),
  C = o.throttle(function() {
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