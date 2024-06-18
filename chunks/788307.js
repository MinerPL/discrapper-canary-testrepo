"use strict";
n.d(t, {
  I: function() {
    return v
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(844099),
  l = n(442837),
  u = n(481060),
  _ = n(596454),
  d = n(122810),
  c = n(74433),
  E = n(44315),
  I = n(633302),
  T = n(574176),
  h = n(106301),
  S = n(223135),
  f = n(695346),
  N = n(314897),
  A = n(592125),
  m = n(496675),
  O = n(158776),
  R = n(979651),
  C = n(6074),
  p = n(981631),
  g = n(573731);
let L = "14px";

function v(e) {
  let {
    emoji: t,
    className: n,
    animate: r = !0,
    hideTooltip: s,
    tooltipDelay: a
  } = e, l = f.Yk.useSetting(), d = null != t.id ? ":".concat(t.name, ":") : I.ZP.translateSurrogatesToInlineEmoji(t.name), c = {
    className: o()(g.emoji, n),
    emojiId: t.id,
    emojiName: t.name,
    autoplay: !0,
    animated: !!(t.animated && l && r)
  };
  return s ? (0, i.jsx)(_.Z, {
    ...c
  }) : (0, i.jsx)(u.Tooltip, {
    text: d,
    delay: a,
    children: e => (0, i.jsx)(_.Z, {
      ...e,
      ...c
    })
  })
}
let D = e => {
  let {
    className: t,
    text: n
  } = e, s = r.useRef(null), a = r.useRef(null), [l, _] = r.useState(!1);
  return r.useLayoutEffect(() => {
    let {
      current: e
    } = s, {
      current: t
    } = a;
    if (null != e && null != t) _(!(e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight))
  }, [n]), (0, i.jsx)(u.Tooltip, {
    text: l || null == n || "" === n ? null : n,
    delay: 150,
    "aria-label": !1,
    children: e => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("div", {
        ...e,
        className: t,
        ref: s,
        children: n
      }), (0, i.jsx)("div", {
        className: o()(g.textRuler, t),
        ref: a,
        "aria-hidden": !0,
        children: n
      })]
    })
  })
};
t.Z = e => {
  var t;
  let {
    activities: n,
    applicationStream: r,
    className: s,
    textClassName: o,
    emojiClassName: u,
    animate: _ = !0,
    hideTooltip: I = !1,
    hideEmoji: f = !1,
    user: M,
    hasQuest: P
  } = e, y = null != n ? n.find(e => e.type === p.IIU.CUSTOM_STATUS) : null, U = (0, l.e7)([N.default], () => N.default.getId() === (null == M ? void 0 : M.id)), b = (0, l.e7)([h.Z], () => U ? h.Z.getHangStatusActivity() : null != n ? n.find(e => e.type === p.IIU.HANG_STATUS) : null), G = (0, l.e7)([R.Z, A.Z], () => {
    var e;
    return null != b && null != M ? A.Z.getChannel(null === (e = R.Z.getVoiceStateForUser(M.id)) || void 0 === e ? void 0 : e.channelId) : null
  }), {
    enableHangStatus: w
  } = T.n.useExperiment({
    guildId: null == G ? void 0 : G.guild_id,
    location: "ActivityStatus"
  }, {
    autoTrackExposure: !1
  }), k = (0, E.Sl)(p.Ilk.BRAND_345), B = null, x = w && null != b && m.Z.can(p.Plq.CONNECT, G);
  x ? B = (0, i.jsx)(S.Z, {
    className: u,
    hangStatusActivity: b
  }) : null != y && null != y.emoji && !f && (B = (0, i.jsx)(v, {
    emoji: y.emoji,
    animate: _,
    hideTooltip: I,
    className: u
  }));
  let V = (0, l.e7)([O.Z], () => null != M ? O.Z.getStatus(M.id) : null),
    Z = null !== V && [p.Skl.OFFLINE, p.Skl.INVISIBLE].includes(V),
    H = null === (t = (0, c.Z)(n, r, void 0, x)) || void 0 === t ? void 0 : t.activityText,
    F = null != H && H.length > 0;
  return Z || null == B && !F ? null : (0, i.jsxs)("div", {
    className: s,
    children: [B, (0, i.jsx)(D, {
      text: H,
      className: o
    }), P && (0, i.jsx)(a.q, {
      className: g.questsIcon,
      height: L,
      width: L,
      color: k.hex
    }), null != n && n.some(e => (0, d.Z)(e, x)) ? (0, i.jsx)(C.Z, {
      width: 16,
      height: 16,
      className: g.icon
    }) : null]
  })
}