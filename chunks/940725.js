"use strict";
n.r(t), n.d(t, {
  useShouldShowUserClanTagUpsell: function() {
    return c
  }
}), n("47120");
var a = n("524437"),
  l = n("442837"),
  s = n("645041"),
  i = n("430824"),
  r = n("594174"),
  o = n("353093"),
  u = n("169559"),
  d = n("981631");

function c(e, t) {
  let n = (0, u.default)(t),
    c = (0, l.useStateFromStores)([r.default, i.default], () => (function(e) {
      let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, i.default];
      if (null == e) return !1;
      let a = n.getGuild(e);
      if (null == a || !(0, o.isGuildAClan)(a) || null == a.clan) return !1;
      let l = t.getCurrentUser();
      if (null == l) return !1;
      if (null == l.clan) return !0;
      let {
        identityGuildId: s,
        identityEnabled: u
      } = l.clan;
      return null != s && null == u ? e === s : null == s && null == u || (s !== e || !1 !== u) && (null != s && !1 === u || !1)
    })(e, [r.default, i.default]), [e]),
    f = (0, s.useIsContentDismissed)(a.DismissibleGuildContent.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : d.EMPTY_STRING_SNOWFLAKE_ID);
  return n && c && !f
}