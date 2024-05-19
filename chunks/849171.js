"use strict";
n.r(t), n.d(t, {
  Avatars: function() {
    return j
  },
  default: function() {
    return D
  }
}), n("47120");
var a, l, s = n("735250");
n("470079");
var i = n("120356"),
  r = n.n(i),
  o = n("442837"),
  u = n("481060"),
  d = n("2052"),
  c = n("317381"),
  f = n("638880"),
  h = n("613611"),
  m = n("527805"),
  p = n("716600"),
  E = n("952561"),
  C = n("778569"),
  g = n("563218"),
  S = n("513202"),
  _ = n("719296"),
  T = n("100527"),
  I = n("906732"),
  A = n("835473"),
  N = n("314897"),
  v = n("594174"),
  x = n("602623"),
  M = n("823379"),
  R = n("5192"),
  y = n("689938"),
  L = n("655338");
(l = a || (a = {}))[l.SMALL = 0] = "SMALL", l[l.MEDIUM = 1] = "MEDIUM", l[l.LARGE = 2] = "LARGE";
let O = ["embedded_background"];

function j(e) {
  let {
    avatarSize: t,
    guildId: n,
    channelId: a,
    users: l
  } = e, i = null != t ? t : u.AvatarSizes.SIZE_32, r = (0, u.getAvatarSize)(i);
  return (0, s.jsx)(x.default, {
    size: r,
    guildId: n,
    users: l,
    max: 4,
    renderUser: e => {
      if (null == e) return null;
      let t = R.default.getName(n, a, e);
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

function P(e) {
  var t, n, a, l;
  let {
    participants: i,
    application: p,
    currentEmbeddedApplication: E,
    channel: C,
    width: g
  } = e;
  let _ = (a = g) > 400 ? 2 : a > 300 ? 1 : 0;
  let [T] = (l = g) > 400 ? [u.AvatarSizes.SIZE_56, 56] : l > 300 ? [u.AvatarSizes.SIZE_32, 32] : [u.AvatarSizes.SIZE_24, 24], A = (0, o.useStateFromStoresArray)([v.default, N.default], () => Array.from(i).map(e => (0, h.isActivityParticipantCurrentUserCurrentSession)(e, N.default) ? null : v.default.getUser(e.userId)).filter(M.isNotNullish)), x = (0, o.useStateFromStores)([c.default], () => c.default.getEmbeddedActivitiesForChannel(C.id).find(e => e.applicationId === p.id)), {
    analyticsLocations: O
  } = (0, I.default)(), P = (0, d.useAnalyticsContext)(), D = R.default.getName(C.getGuildId(), C.id, null == A ? void 0 : A[0]), b = (0, m.useEmbeddedActivityJoinability)({
    userId: null === (t = v.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
    channelId: C.id,
    application: p
  }) === m.EmbeddedActivityJoinability.CAN_JOIN, U = null !== (n = C.getGuildId()) && void 0 !== n ? n : void 0;
  return (0, s.jsxs)("div", {
    className: L.splash,
    children: [(0, s.jsx)(j, {
      avatarSize: T,
      guildId: U,
      channelId: C.id,
      users: A
    }), (0, s.jsx)(u.Text, {
      className: r()(L.subheader, {
        [L.small]: 0 === _,
        [L.medium]: 1 === _
      }),
      variant: "text-sm/normal",
      children: A.length > 1 ? y.default.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
        username: D,
        count: A.length - 1
      }) : y.default.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
        username: D
      })
    }), (0, s.jsx)(u.Text, {
      className: r()(L.header, {
        [L.small]: 0 === _,
        [L.medium]: 1 === _
      }),
      variant: "text-sm/normal",
      children: p.name
    }), (0, s.jsx)("div", {
      className: L.buttons,
      children: b ? (0, s.jsx)(u.Button, {
        onClick: function(e) {
          e.stopPropagation(), null != x && (0, f.default)({
            applicationId: x.applicationId,
            currentEmbeddedApplication: E,
            activityChannelId: C.id,
            locationObject: P.location,
            embeddedActivitiesManager: S.default,
            analyticsLocations: O
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
        }(_),
        className: L.button,
        color: u.Button.Colors.PRIMARY,
        children: y.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
      }) : null
    })]
  })
}

function D(e) {
  let {
    participant: t,
    width: n,
    selected: a,
    interactible: l,
    channel: i
  } = e, {
    analyticsLocations: r
  } = (0, I.default)(T.default.ACTIVITY_TILE), {
    id: o
  } = t, u = (0, p.default)(), d = (null == u ? void 0 : u.channelId) === i.id && u.applicationId === o, c = (0, E.default)(), [f] = (0, A.default)([o]), {
    url: h
  } = (0, C.default)({
    applicationId: o,
    names: O,
    size: 1024
  }), m = !d;
  return (0, s.jsx)(I.AnalyticsLocationProvider, {
    value: r,
    children: (0, s.jsx)("div", {
      className: L.container,
      children: (0, s.jsxs)(s.Fragment, {
        children: [!a && d && (0, s.jsx)(g.default, {
          className: L.iframe,
          embedId: (0, _.default)(i.id, o)
        }), m && null != f && null != h && "" !== h ? (0, s.jsx)("img", {
          className: L.splashImage,
          alt: f.name,
          src: h
        }) : null, !d && !a && null != f && (0, s.jsx)(P, {
          width: n,
          channel: i,
          participants: t.participants,
          application: f,
          currentEmbeddedApplication: c
        }), l || m ? null : (0, s.jsx)("div", {
          className: L.clickShield
        })]
      })
    })
  })
}