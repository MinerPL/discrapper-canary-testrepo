"use strict";
t.d(s, {
  Z: function() {
    return r
  }
}), t(47120);
var n = t(470079),
  i = t(768581),
  l = t(776155),
  a = t(981631);

function r(e, s, t) {
  var r, o;
  let {
    isLoading: c,
    error: d,
    highlightedCreatorDetails: u
  } = (0, l.Z)(e), E = null == u ? void 0 : u.store_page, _ = n.useMemo(() => {
    var e, s;
    let t = function(e) {
        let s = new Set;
        return null == e || e.forEach(e => {
          var t;
          null === (t = e.subscription_listings) || void 0 === t || t.forEach(e => {
            s.add(e.role_id)
          })
        }), s
      }(null == E ? void 0 : null === (e = E.role_subscription) || void 0 === e ? void 0 : e.group_listings),
      n = null == E ? void 0 : null === (s = E.role_subscription) || void 0 === s ? void 0 : s.benefit_emojis;
    return null == n ? void 0 : n.filter(e => e.roles.some(e => t.has(e)))
  }, [null == E ? void 0 : E.role_subscription]), I = null == E ? void 0 : E.guild.icon_hash, T = i.ZP.getGuildIconURL({
    id: e,
    icon: I,
    size: t
  }), N = n.useMemo(() => null != _ && _.length > s ? _.slice(0, s) : _, [_, s]), m = null != _ && _.length > s ? _.length - s : null, S = null == u ? void 0 : u.slug, h = null != S ? a.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(S) : void 0, g = null == E ? void 0 : null === (r = E.guild) || void 0 === r ? void 0 : r.name, x = null == E ? void 0 : null === (o = E.role_subscription) || void 0 === o ? void 0 : o.subscriber_count, C = !c && null != g && null != I && null != T;
  return C ? {
    hasAllImperativeDetails: C,
    isLoading: c,
    details: {
      guildName: g,
      guildIcon: I,
      guildAvatarUrl: T,
      storePageUrl: h,
      subscriberCount: x,
      emojisToShow: N,
      notShownEmojiCount: m
    }
  } : {
    hasAllImperativeDetails: C,
    isLoading: c,
    error: d
  }
}