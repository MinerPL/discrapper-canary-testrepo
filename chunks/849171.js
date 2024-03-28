"use strict";
n.r(t), n.d(t, {
  Avatars: function() {
    return O
  },
  default: function() {
    return P
  }
}), n("47120");
var a, l, s = n("735250");
n("470079");
var i = n("803997"),
  r = n.n(i),
  o = n("442837"),
  u = n("481060"),
  d = n("2052"),
  c = n("317381"),
  f = n("638880"),
  h = n("527805"),
  m = n("716600"),
  p = n("952561"),
  E = n("778569"),
  C = n("563218"),
  g = n("513202"),
  S = n("719296"),
  _ = n("100527"),
  T = n("906732"),
  I = n("835473"),
  A = n("314897"),
  v = n("594174"),
  N = n("602623"),
  x = n("823379"),
  M = n("5192"),
  R = n("689938"),
  L = n("259975");
(l = a || (a = {}))[l.SMALL = 0] = "SMALL", l[l.MEDIUM = 1] = "MEDIUM", l[l.LARGE = 2] = "LARGE";
let y = ["embedded_background"];

function O(e) {
  let {
    avatarSize: t,
    guildId: n,
    channelId: a,
    users: l
  } = e, i = null != t ? t : u.AvatarSizes.SIZE_32, r = (0, u.getAvatarSize)(i);
  return (0, s.jsx)(N.default, {
    size: r,
    guildId: n,
    users: l,
    max: 4,
    renderUser: e => {
      if (null == e) return null;
      let t = M.default.getName(n, a, e);
      return (0, s.jsx)(u.TooltipContainer, {
        text: t,
        color: u.TooltipColors.GREY,
        children: (0, s.jsx)("img", {
          src: e.getAvatarURL(n, r),
          alt: t,
          className: L.avatar
        }, e.id)
      }, e.id)
    }
  })
}

function j(e) {
  var t, n, a, l;
  let {
    participants: i,
    application: m,
    currentEmbeddedApplication: p,
    channel: E,
    width: C
  } = e;
  let S = (a = C) > 400 ? 2 : a > 300 ? 1 : 0;
  let [_] = (l = C) > 400 ? [u.AvatarSizes.SIZE_56, 56] : l > 300 ? [u.AvatarSizes.SIZE_32, 32] : [u.AvatarSizes.SIZE_24, 24], I = (0, o.useStateFromStoresArray)([v.default, A.default], () => Array.from(i).map(e => A.default.getId() === e ? null : v.default.getUser(e)).filter(x.isNotNullish)), N = (0, o.useStateFromStores)([c.default], () => c.default.getEmbeddedActivitiesForChannel(E.id).find(e => e.applicationId === m.id)), {
    analyticsLocations: y
  } = (0, T.default)(), j = (0, d.useAnalyticsContext)(), P = M.default.getName(E.getGuildId(), E.id, null == I ? void 0 : I[0]), D = (0, h.useEmbeddedActivityJoinability)({
    userId: null === (t = v.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
    channelId: E.id,
    application: m
  }) === h.EmbeddedActivityJoinability.CAN_JOIN, b = null !== (n = E.getGuildId()) && void 0 !== n ? n : void 0;
  return (0, s.jsxs)("div", {
    className: L.splash,
    children: [(0, s.jsx)(O, {
      avatarSize: _,
      guildId: b,
      channelId: E.id,
      users: I
    }), (0, s.jsx)(u.Text, {
      className: r()(L.subheader, {
        [L.small]: 0 === S,
        [L.medium]: 1 === S
      }),
      variant: "text-sm/normal",
      children: I.length > 1 ? R.default.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
        username: P,
        count: I.length - 1
      }) : R.default.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
        username: P
      })
    }), (0, s.jsx)(u.Text, {
      className: r()(L.header, {
        [L.small]: 0 === S,
        [L.medium]: 1 === S
      }),
      variant: "text-sm/normal",
      children: m.name
    }), (0, s.jsx)("div", {
      className: L.buttons,
      children: D ? (0, s.jsx)(u.Button, {
        onClick: function(e) {
          e.stopPropagation(), null != N && (0, f.default)({
            applicationId: N.applicationId,
            currentEmbeddedApplication: p,
            activityChannelId: E.id,
            locationObject: j.location,
            embeddedActivitiesManager: g.default,
            analyticsLocations: y
          })
        },
        size: function(e) {
          switch (e) {
            case 2:
              return u.Button.Sizes.LARGE;
            case 1:
              return u.Button.Sizes.MEDIUM;
            case 0:
              return u.Button.Sizes.SMALL
          }
        }(S),
        className: L.button,
        color: u.Button.Colors.PRIMARY,
        children: R.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
      }) : null
    })]
  })
}

function P(e) {
  let {
    participant: t,
    width: n,
    selected: a,
    interactible: l,
    channel: i
  } = e, {
    analyticsLocations: r
  } = (0, T.default)(_.default.ACTIVITY_TILE), {
    id: o
  } = t, u = (0, m.default)(), d = (null == u ? void 0 : u.channelId) === i.id && u.applicationId === o, c = (0, p.default)(), [f] = (0, I.default)([o]), {
    url: h
  } = (0, E.default)({
    applicationId: o,
    names: y,
    size: 1024
  }), g = !d;
  return (0, s.jsx)(T.AnalyticsLocationProvider, {
    value: r,
    children: (0, s.jsx)("div", {
      className: L.container,
      children: (0, s.jsxs)(s.Fragment, {
        children: [!a && d && (0, s.jsx)(C.default, {
          className: L.iframe,
          embedId: (0, S.default)(i.id, o)
        }), g && null != f && null != h && "" !== h ? (0, s.jsx)("img", {
          className: L.splashImage,
          alt: f.name,
          src: h
        }) : null, !d && !a && null != f && (0, s.jsx)(j, {
          width: n,
          channel: i,
          participants: t.participants,
          application: f,
          currentEmbeddedApplication: c
        }), l || g ? null : (0, s.jsx)("div", {
          className: L.clickShield
        })]
      })
    })
  })
}