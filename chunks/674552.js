"use strict";
n.r(t), n.d(t, {
  renderGuildJoinRequestBadge: function() {
    return x
  },
  renderMediaBadge: function() {
    return v
  },
  renderMentionBadge: function() {
    return A
  },
  renderUnavailableBadge: function() {
    return L
  }
}), n("47120");
var l = n("735250");
n("470079");
var a = n("803997"),
  s = n.n(a),
  i = n("44315"),
  r = n("246364"),
  o = n("460562"),
  u = n("305878"),
  d = n("119828"),
  c = n("263704"),
  f = n("465670"),
  h = n("737688"),
  C = n("497309"),
  p = n("169278"),
  m = n("185403"),
  g = n("944581"),
  E = n("632184"),
  S = n("170039"),
  _ = n("26290"),
  I = n("510601"),
  N = n("981631"),
  T = n("196581");

function A(e, t) {
  return (0, l.jsx)(_.NumberBadge, {
    count: e,
    color: t
  })
}

function L() {
  return (0, l.jsx)(_.IconBadge, {
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
    f = (0, I.isGamingVoiceActivityEnabled)("Guild Icon", !1);
  if (!r && !i && !o && !a && !l && c && I.default.trackExposure({
      location: "Guild Icon"
    }), r) t = u.default;
  else if (i) t = S.default;
  else if (o) t = g.default;
  else if (a) t = p.default;
  else if (l) t = d.default;
  else if (c && f) t = h.default;
  else {
    if (!n) return null;
    t = E.default
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
  return (0, l.jsx)(_.IconBadge, {
    icon: t,
    className: s()(T.iconBadge, {
      [T.isCurrentUserConnected]: a
    }),
    ...r
  })
}