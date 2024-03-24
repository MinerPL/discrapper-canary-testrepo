"use strict";
n.r(t), n.d(t, {
  renderMentionBadge: function() {
    return A
  },
  renderUnavailableBadge: function() {
    return L
  },
  renderMediaBadge: function() {
    return v
  },
  renderGuildJoinRequestBadge: function() {
    return x
  }
}), n("222007");
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("449918"),
  r = n("567054"),
  o = n("104359"),
  u = n("943232"),
  d = n("437825"),
  c = n("36694"),
  f = n("945330"),
  h = n("351368"),
  C = n("841811"),
  p = n("267675"),
  m = n("987772"),
  E = n("82636"),
  g = n("368121"),
  I = n("228427"),
  S = n("956089"),
  _ = n("471374"),
  N = n("49111"),
  T = n("853708");

function A(e, t) {
  return (0, l.jsx)(S.NumberBadge, {
    count: e,
    color: t
  })
}

function L() {
  return (0, l.jsx)(S.IconBadge, {
    icon: o.default,
    disableColor: !0,
    className: T.unavailableBadge
  })
}

function v(e) {
  let t, {
      audio: n,
      video: l,
      screenshare: a,
      isCurrentUserConnected: s,
      liveStage: i,
      activeEvent: r,
      activity: o,
      gaming: c
    } = e,
    f = (0, _.isGamingVoiceActivityEnabled)("Guild Icon", !1);
  if (!r && !i && !o && !a && !l && c && _.default.trackExposure({
      location: "Guild Icon"
    }), r) t = u.default;
  else if (i) t = I.default;
  else if (o) t = E.default;
  else if (a) t = p.default;
  else if (l) t = d.default;
  else if (c && f) t = h.default;
  else {
    if (!n) return null;
    t = g.default
  }
  return R({
    icon: t,
    isCurrentUserConnected: s
  })
}

function x(e) {
  let {
    guildJoinRequestStatus: t
  } = e, [n, l] = function(e) {
    switch (e) {
      case r.GuildJoinRequestApplicationStatuses.SUBMITTED:
        return [void 0, C.default];
      case r.GuildJoinRequestApplicationStatuses.REJECTED:
        return [N.Color.RED_400, f.default];
      case r.GuildJoinRequestApplicationStatuses.APPROVED:
        return [N.Color.GREEN_360, c.default];
      default:
        return [void 0, m.default]
    }
  }(t);
  return R({
    icon: l,
    color: n
  })
}

function R(e) {
  let {
    icon: t,
    color: n,
    isCurrentUserConnected: a
  } = e, r = null == n ? {
    disableColor: !0
  } : {
    color: (0, i.getColor)(n)
  };
  return (0, l.jsx)(S.IconBadge, {
    icon: t,
    className: s(T.iconBadge, {
      [T.isCurrentUserConnected]: a
    }),
    ...r
  })
}