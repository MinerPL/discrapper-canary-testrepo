"use strict";
n.r(t), n.d(t, {
  useShouldShowUserClanTagUpsell: function() {
    return f
  }
}), n("47120");
var a = n("524437"),
  l = n("442837"),
  s = n("645041"),
  i = n("271383"),
  r = n("430824"),
  o = n("594174"),
  u = n("353093"),
  d = n("954138"),
  c = n("981631");

function f(e, t) {
  let n = (0, d.default)(t),
    f = (0, l.useStateFromStores)([o.default, r.default, i.default], () => (function(e) {
      let [t, n, a] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, r.default, i.default];
      if (null == e) return !1;
      let l = n.getGuild(e);
      if (null == l || !(0, u.isGuildAClan)(l) || null == l.clan) return !1;
      let s = t.getCurrentUser();
      if (null == s) return !1;
      let d = a.getMember(e, s.id);
      if (null == s.clan) return !0;
      let c = (null == d ? void 0 : d.joinedAt) != null ? new Date(d.joinedAt) : null,
        f = null != c && Date.now() - c.getTime() > 2592e5,
        {
          identityGuildId: h,
          identityEnabled: m
        } = s.clan;
      return null != h && null == m ? e === h : null == h && null == m ? f : (h !== e || !1 !== m) && null != h && !1 === m && f
    })(e, [o.default, r.default, i.default]), [e]),
    h = (0, s.useIsContentDismissed)(a.DismissibleGuildContent.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : c.EMPTY_STRING_SNOWFLAKE_ID);
  return n && f && !h
}