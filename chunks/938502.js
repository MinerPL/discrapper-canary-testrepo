"use strict";
s.r(t), s.d(t, {
  DiscoverySettingsViews: function() {
    return l
  },
  getSettingsView: function() {
    return u
  },
  getSuggestedTags: function() {
    return E
  },
  trackDiscoverySettingsChange: function() {
    return c
  }
}), s("47120"), s("470079"), s("442837"), s("430824");
var a, l, n, i, r = s("626135");
s("59970"), s("946314");
var o = s("731455"),
  d = s("981631");

function u(e, t) {
  let s = e.hasFeature(d.GuildFeatures.VERIFIED),
    a = e.hasFeature(d.GuildFeatures.DISCOVERABLE),
    l = e.hasFeature(d.GuildFeatures.ENABLED_DISCOVERABLE_BEFORE);
  if (s) return "settings";
  if (!a && !l) return "intro";
  if (null == t) return "settings";
  let n = t.sufficientWithoutGracePeriod && null != t.gracePeriodEndDate && t.gracePeriodEndDate > new Date;
  return t.sufficient || n || !a ? t.sufficient || n ? "settings" : "intro" : "disqualified"
}

function c(e, t) {
  let s = !1,
    a = {
      guild_id: e.id,
      automatic: !1
    };
  (null == t || e.discoverySplash !== t.discoverySplash) && (a.discovery_splash_edit_type = null == e.discoverySplash ? "removed" : "uploaded", s = !0), (null == t || e.features.has(d.GuildFeatures.DISCOVERABLE) !== t.features.has(d.GuildFeatures.DISCOVERABLE)) && (a.is_discoverable = e.features.has(d.GuildFeatures.DISCOVERABLE), s = !0), (null == t || e.rulesChannelId !== t.rulesChannelId) && (a.rules_channel_id = e.rulesChannelId, s = !0), s && r.default.track(d.AnalyticEvents.GUILD_SETTINGS_DISCOVERY_UPDATED, a)
}

function E(e) {
  var t, s;
  return null !== (s = null === (t = o.SUGGESTED_TAGS_FOR_CATEGORIES[e]) || void 0 === t ? void 0 : t.map(e => e())) && void 0 !== s ? s : []
}(n = a || (a = {})).UPLOADED = "uploaded", n.REMOVED = "removed", (i = l || (l = {})).INTRO = "intro", i.DISQUALIFIED = "disqualified", i.SETTINGS = "settings"