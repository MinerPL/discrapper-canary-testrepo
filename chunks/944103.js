"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("470079"),
  l = n("442837"),
  s = n("131704"),
  i = n("9156"),
  r = n("423589"),
  o = n("674190"),
  u = n("624617"),
  d = n("490897");
let c = Object.freeze({
  NOTICE_RENDER: {
    MAX: 1,
    PER_SECONDS: 600
  },
  CHANNEL_VISTS: {
    MIN: 2,
    PER_SECONDS: 86400
  }
});

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = (0, r.useShouldUseNewNotificationSystem)("useShouldRenderBanner"),
    f = (0, l.useStateFromStores)([u.default, i.default], () => {
      let {
        guild_id: t,
        id: n
      } = e;
      if (!s.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING.has(e.type)) return !1;
      let a = i.default.resolveUnreadSetting(e),
        l = i.default.getChannelUnreadSetting(t, n),
        r = u.default.getNumberOfRendersSince(c.NOTICE_RENDER.PER_SECONDS),
        o = u.default.getNumberOfChannelVisitsSince(t, n, c.CHANNEL_VISTS.PER_SECONDS);
      return l === d.UnreadSetting.UNSET && a !== d.UnreadSetting.ALL_MESSAGES && r <= c.NOTICE_RENDER.MAX && o >= c.CHANNEL_VISTS.MIN
    }, [e]);
  return a.useEffect(() => {
    t && f && (0, o.recordBannerRender)(e.guild_id, e.id)
  }, [t, f, e.guild_id, e.id]), a.useEffect(() => {
    s.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING.has(e.type) && (0, o.recordChannelVisit)(e.guild_id, e.id)
  }, [e.guild_id, e.id, e.type]), {
    canRenderNotice: f && n,
    recordNoticeRender: () => (0, o.recordBannerRender)(e.guild_id, e.id)
  }
}