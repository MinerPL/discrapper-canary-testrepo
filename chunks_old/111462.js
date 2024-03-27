"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
}), s("222007");
var a = s("884691"),
  l = s("315102"),
  n = s("458961"),
  i = s("49111");

function r(e, t, s) {
  var r, o;
  let {
    isLoading: d,
    error: u,
    highlightedCreatorDetails: c
  } = (0, n.default)(e), E = null == c ? void 0 : c.store_page, _ = a.useMemo(() => {
    var e, t;
    let s = function(e) {
        let t = new Set;
        return null == e || e.forEach(e => {
          var s;
          null === (s = e.subscription_listings) || void 0 === s || s.forEach(e => {
            t.add(e.role_id)
          })
        }), t
      }(null == E ? void 0 : null === (e = E.role_subscription) || void 0 === e ? void 0 : e.group_listings),
      a = null == E ? void 0 : null === (t = E.role_subscription) || void 0 === t ? void 0 : t.benefit_emojis;
    return null == a ? void 0 : a.filter(e => e.roles.some(e => s.has(e)))
  }, [null == E ? void 0 : E.role_subscription]), I = null == E ? void 0 : E.guild.icon_hash, T = l.default.getGuildIconURL({
    id: e,
    icon: I,
    size: s
  }), S = a.useMemo(() => null != _ && _.length > t ? _.slice(0, t) : _, [_, t]), f = null != _ && _.length > t ? _.length - t : null, m = null == c ? void 0 : c.slug, N = null != m ? i.MarketingURLs.ROLE_SUBSCRIPTION_STORE_PAGE(m) : void 0, g = null == E ? void 0 : null === (r = E.guild) || void 0 === r ? void 0 : r.name, h = null == E ? void 0 : null === (o = E.role_subscription) || void 0 === o ? void 0 : o.subscriber_count, C = !d && null != g && null != I && null != T;
  return C ? {
    hasAllImperativeDetails: C,
    isLoading: d,
    details: {
      guildName: g,
      guildIcon: I,
      guildAvatarUrl: T,
      storePageUrl: N,
      subscriberCount: h,
      emojisToShow: S,
      notShownEmojiCount: f
    }
  } : {
    hasAllImperativeDetails: C,
    isLoading: d,
    error: u
  }
}