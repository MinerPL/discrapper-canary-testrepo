"use strict";
n.d(t, {
  C1: function() {
    return O
  },
  Mo: function() {
    return R
  },
  QG: function() {
    return C
  },
  XQ: function() {
    return N
  },
  _U: function() {
    return L
  },
  dM: function() {
    return p
  },
  k$: function() {
    return A
  }
}), n(47120);
var i = n(392711),
  r = n(524437),
  s = n(570140),
  o = n(92114),
  a = n(367907),
  l = n(962086),
  u = n(160404),
  _ = n(149071),
  d = n(675478),
  c = n(592125),
  E = n(9156),
  I = n(626135),
  T = n(630388),
  h = n(621600),
  S = n(981631),
  f = n(526761);

function N(e, t, n, i) {
  if (null == e) return;
  if (u.Z.isFullServerPreview(e)) {
    (0, l.zS)(e, n ? [t] : [], n ? [] : [t]);
    return
  }
  let r = E.ZP.getChannelIdFlags(e, t);
  !n && (r = (0, T.mB)(r, f.ic.FAVORITED, !1));
  let o = (0, h.I)(e, t),
    d = {
      flags: (0, T.mB)(r, f.ic.OPT_IN_ENABLED, n)
    };
  _.Z.saveUserGuildSettingsBulk({
    [e]: {
      channel_overrides: {
        [t]: d
      }
    }
  }), s.Z.dispatch({
    type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
    guildId: e,
    channelId: t,
    settings: d
  }), (0, h.jz)(e, t, d, o, h.UE.optedIn(n), i), g(e), I.default.track(S.rMx.CHANNEL_LIST_UPDATED, {
    ...(0, a.hH)(e),
    ...(0, a.v_)(c.Z.getChannel(t)),
    action_type: n ? "add" : "remove",
    location: i
  })
}

function A(e, t, n, i) {
  if (null == e) return;
  if (u.Z.isFullServerPreview(e)) {
    (0, l.zS)(e, n ? [t] : [], n ? [] : [t]), (0, l.aq)(e, {
      optInEnabled: !0
    });
    return
  }
  let r = E.ZP.getChannelIdFlags(e, t);
  !n && (r = (0, T.mB)(r, f.ic.FAVORITED, !1));
  let o = (0, h.I)(e, t),
    d = {
      flags: (0, T.mB)(r, f.ic.OPT_IN_ENABLED, n)
    };
  if (!E.ZP.isOptInEnabled(e)) {
    let n = (0, T.mB)(E.ZP.getGuildFlags(e), f.vc.OPT_IN_CHANNELS_ON, !0);
    _.Z.saveUserGuildSettingsBulk({
      [e]: {
        channel_overrides: {
          [t]: d
        },
        flags: n
      }
    })
  }
  s.Z.dispatch({
    type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
    guildId: e,
    channelId: t,
    settings: d
  }), (0, h.jz)(e, t, d, o, h.UE.optedIn(n), i), g(e), I.default.track(S.rMx.CHANNEL_LIST_UPDATED, {
    ...(0, a.hH)(e),
    ...(0, a.v_)(c.Z.getChannel(t)),
    action_type: n ? "add" : "remove",
    location: i
  })
}
async function m(e, t) {
  if (!(null == e || u.Z.isFullServerPreview(e))) await _.Z.saveUserGuildSettingsBulk({
    [e]: {
      channel_overrides: t
    }
  }), s.Z.dispatch({
    type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES",
    guildId: e,
    updates: t
  })
}
let O = (0, i.debounce)((e, t) => m(e, t), 1e3);

function R(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = arguments.length > 3 ? arguments[3] : void 0;
  if (null == e) return;
  if (u.Z.isFullServerPreview(e)) {
    (0, l.zS)(e, t, []), n && (0, l.aq)(e, {
      optInEnabled: !0
    });
    return
  }
  let r = {};
  if (t.forEach(t => {
      let n = E.ZP.getChannelIdFlags(e, t);
      r[t] = {
        flags: (0, T.mB)(n, f.ic.OPT_IN_ENABLED, !0)
      }
    }), n) {
    let t = (0, T.mB)(E.ZP.getGuildFlags(e), f.vc.OPT_IN_CHANNELS_ON, !0);
    o.Z.updateGuildAndChannelNotificationSettings(e, {
      flags: t,
      channel_overrides: r
    }, h.ZB.OptedIn), I.default.track(S.rMx.CHANNEL_LIST_UPDATED, {
      ...(0, a.hH)(e),
      action_type: "add_many_and_enable_guild",
      location: i
    })
  } else o.Z.updateChannelOverrideSettingsBulk(e, r, h.ZB.OptedIn), I.default.track(S.rMx.CHANNEL_LIST_UPDATED, {
    ...(0, a.hH)(e),
    action_type: "add_many",
    location: i
  })
}

function C(e, t, n) {
  if (u.Z.isFullServerPreview(e)) {
    (0, l.aq)(e, {
      optInEnabled: t
    });
    return
  }
  let i = E.ZP.getGuildFlags(e);
  o.Z.updateGuildNotificationSettings(e, {
    flags: (0, T.mB)(i, f.vc.OPT_IN_CHANNELS_ON, t)
  }, h.UE.optedIn(t)), I.default.track(S.rMx.CHANNEL_LIST_UPDATED, {
    ...(0, a.hH)(e),
    action_type: t ? "guild_enabled" : "guild_disabled",
    location: n
  })
}

function p(e, t, n, i) {
  if (null == e || u.Z.isFullServerPreview(e)) return;
  let r = E.ZP.getChannelIdFlags(e, t);
  !(0, T.yE)(r, f.ic.OPT_IN_ENABLED) && n && (r = (0, T.mB)(r, f.ic.OPT_IN_ENABLED, !0)), o.Z.updateChannelOverrideSettings(e, t, {
    flags: (0, T.mB)(r, f.ic.FAVORITED, n)
  }, h.UE.favorited(n)), I.default.track(S.rMx.CHANNEL_LIST_UPDATED, {
    ...(0, a.hH)(e),
    action_type: n ? "favorited" : "unfavorited",
    location: i
  })
}

function g(e) {
  (0, d.PS)(e, e => (!(0, T.yE)(e.guildOnboardingProgress, r.nI.GUILD_NOTICE_CLEARED) || !!(0, T.yE)(e.guildOnboardingProgress, r.nI.GUILD_NOTICE_SHOWN)) && (e.guildOnboardingProgress = (0, T.pj)(e.guildOnboardingProgress, r.nI.GUILD_NOTICE_CLEARED), e.guildOnboardingProgress = (0, T.mB)(e.guildOnboardingProgress, r.nI.GUILD_NOTICE_SHOWN, !1), !0), d.fy.INFREQUENT_USER_ACTION)
}

function L(e, t) {
  s.Z.dispatch({
    type: "DISMISS_FAVORITE_SUGGESTION",
    guildId: e,
    channelId: t
  })
}