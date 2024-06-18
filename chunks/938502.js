"use strict";
t.d(s, {
  P5: function() {
    return E
  },
  TJ: function() {
    return d
  },
  UA: function() {
    return u
  },
  d5: function() {
    return i
  }
}), t(47120), t(470079), t(442837), t(430824);
var n, i, l, a, r = t(626135);
t(59970), t(946314);
var o = t(731455),
  c = t(981631);

function d(e, s) {
  let t = e.hasFeature(c.oNc.VERIFIED),
    n = e.hasFeature(c.oNc.DISCOVERABLE),
    i = e.hasFeature(c.oNc.ENABLED_DISCOVERABLE_BEFORE);
  if (t) return "settings";
  if (!n && !i) return "intro";
  if (null == s) return "settings";
  let l = s.sufficientWithoutGracePeriod && null != s.gracePeriodEndDate && s.gracePeriodEndDate > new Date;
  return s.sufficient || l || !n ? s.sufficient || l ? "settings" : "intro" : "disqualified"
}

function u(e, s) {
  let t = !1,
    n = {
      guild_id: e.id,
      automatic: !1
    };
  (null == s || e.discoverySplash !== s.discoverySplash) && (n.discovery_splash_edit_type = null == e.discoverySplash ? "removed" : "uploaded", t = !0), (null == s || e.features.has(c.oNc.DISCOVERABLE) !== s.features.has(c.oNc.DISCOVERABLE)) && (n.is_discoverable = e.features.has(c.oNc.DISCOVERABLE), t = !0), (null == s || e.rulesChannelId !== s.rulesChannelId) && (n.rules_channel_id = e.rulesChannelId, t = !0), t && r.default.track(c.rMx.GUILD_SETTINGS_DISCOVERY_UPDATED, n)
}

function E(e) {
  var s, t;
  return null !== (t = null === (s = o.U2[e]) || void 0 === s ? void 0 : s.map(e => e())) && void 0 !== t ? t : []
}(l = n || (n = {})).UPLOADED = "uploaded", l.REMOVED = "removed", (a = i || (i = {})).INTRO = "intro", a.DISQUALIFIED = "disqualified", a.SETTINGS = "settings"