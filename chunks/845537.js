"use strict";
n.d(t, {
  EK: function() {
    return b
  },
  Io: function() {
    return M
  },
  NY: function() {
    return y
  },
  Ox: function() {
    return L
  },
  Vq: function() {
    return D
  },
  Wf: function() {
    return U
  },
  cB: function() {
    return v
  },
  dy: function() {
    return p
  },
  mb: function() {
    return P
  },
  wP: function() {
    return g
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(596454),
  a = n(99690),
  l = n(607070),
  u = n(797610),
  _ = n(754688),
  d = n(699450),
  c = n(763296),
  E = n(592125),
  I = n(430824),
  T = n(246946),
  h = n(594174),
  S = n(797053),
  f = n(934415),
  N = n(5192),
  A = n(51144),
  m = n(377668),
  O = n(689938),
  R = n(640567),
  C = n(946278);

function p(e) {
  let {
    emoji: t
  } = e;
  return (0, i.jsx)(s.Tooltip, {
    text: t.name,
    delay: 750,
    position: "top",
    children: e => (0, i.jsx)(o.Z, {
      src: t.src,
      emojiName: t.name,
      animated: !1,
      ...e
    })
  })
}

function g(e) {
  let {
    emoji: t
  } = e;
  return (0, i.jsx)(s.Tooltip, {
    text: t.name,
    delay: 750,
    position: "top",
    children: e => (0, i.jsx)(o.Z, {
      emojiId: t.emojiId,
      emojiName: t.name,
      animated: t.animated,
      ...e
    })
  })
}

function L(e) {
  let {
    text: t,
    channelId: n,
    guildId: r
  } = e, s = I.Z.getGuild(r), o = E.Z.getChannel(n), a = (0, u.Ib)(s, o) && "@Clyde" === t ? m.jM : null;
  return (0, i.jsx)(S.Z, {
    color: a,
    children: t
  })
}

function v(e) {
  let {
    id: t,
    guildId: n,
    channelId: o
  } = e, l = (0, r.e7)([h.default], () => h.default.getUser(t)), u = (0, r.e7)([T.Z], () => T.Z.hidePersonalInformation), _ = N.ZP.useName(n, o, l), d = (0, i.jsx)(S.Z, {
    children: null == _ ? "<@".concat(t, ">") : "@".concat(_)
  });
  if (null != l) {
    let e = u || l.isPomelo() ? null : "#".concat(l.discriminator);
    return (0, i.jsx)(s.Tooltip, {
      text: (0, i.jsxs)("div", {
        className: R.userTooltip,
        children: [(0, i.jsx)(a.Z, {
          user: l,
          animate: !0,
          size: s.AvatarSizes.SIZE_16,
          className: R.avatar
        }), A.ZP.getUserTag(l, {
          mode: "username",
          identifiable: u ? "never" : "always"
        }), (0, i.jsx)("span", {
          className: R.discriminator,
          children: e
        })]
      }),
      delay: 750,
      position: "top",
      "aria-label": A.ZP.getUserTag(l, {
        decoration: "never"
      }),
      children: e => (0, i.jsx)(s.Clickable, {
        tag: "span",
        ...e,
        children: d
      })
    })
  }
  return d
}

function D(e) {
  let {
    id: t,
    guildId: n
  } = e, o = (0, r.e7)([I.Z], () => null != n ? I.Z.getRole(n, t) : void 0), a = (0, r.e7)([l.Z], () => l.Z.roleStyle);
  if (null == o) return (0, i.jsxs)("span", {
    children: ["@", O.Z.Messages.UNKNOWN_ROLE_PLACEHOLDER]
  });
  let u = null != o.color && 0 !== o.color;
  return (0, i.jsxs)(S.Z, {
    color: "username" === a && u ? o.color : null,
    children: ["dot" === a && (0, i.jsx)(s.RoleDot, {
      color: o.colorString,
      background: !1,
      tooltip: !1
    }), "@", o.name]
  })
}

function M(e) {
  let {
    id: t
  } = e, n = (0, r.e7)([E.Z], () => E.Z.getChannel(t)), s = O.Z.Messages.UNKNOWN_CHANNEL.toLowerCase(), o = "text", a = !0;
  if (null != n) {
    var l;
    s = (0, _.YO)(n) ? n.name : O.Z.Messages.NO_ACCESS, o = (0, _.YO)(n) ? null !== (l = (0, f.wl)(n)) && void 0 !== l ? l : "text" : "locked", a = (0, d.B)(n.type)
  }
  return a ? (0, i.jsx)(S.Z, {
    iconType: o,
    children: s
  }) : (0, i.jsx)("span", {
    children: "#" + s
  })
}

function P(e) {
  var t;
  let {
    id: n
  } = e, s = (0, r.e7)([c.Z], () => c.Z.getSoundById(n));
  return (0, i.jsx)(S.Z, {
    children: null !== (t = null == s ? void 0 : s.name) && void 0 !== t ? t : "Sound"
  })
}

function y(e) {
  let {
    id: t
  } = e, n = {
    home: O.Z.Messages.SERVER_GUIDE,
    guide: O.Z.Messages.SERVER_GUIDE,
    browse: O.Z.Messages.CHANNEL_BROWSER_TITLE,
    customize: O.Z.Messages.CHANNELS_AND_ROLES
  };
  return (0, i.jsx)(S.Z, {
    iconType: t,
    children: n[t]
  })
}

function U(e) {
  let {
    text: t,
    id: n
  } = e;
  return (0, i.jsxs)(S.Z, {
    children: [t, "(", n, ")"]
  })
}

function b(e) {
  let {
    timestamp: t
  } = e;
  return (0, i.jsx)("span", {
    className: C.timestamp,
    children: t.formatted
  })
}