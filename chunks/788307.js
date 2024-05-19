"use strict";
n.r(t), n.d(t, {
  ActivityEmoji: function() {
    return v
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("844099"),
  l = n("442837"),
  u = n("481060"),
  d = n("596454"),
  _ = n("122810"),
  c = n("74433"),
  E = n("44315"),
  I = n("633302"),
  T = n("574176"),
  f = n("106301"),
  S = n("223135"),
  h = n("695346"),
  A = n("314897"),
  m = n("592125"),
  N = n("496675"),
  p = n("158776"),
  O = n("979651"),
  C = n("6074"),
  R = n("981631"),
  g = n("573731");
let L = "14px";

function v(e) {
  let {
    emoji: t,
    className: n,
    animate: r = !0,
    hideTooltip: a,
    tooltipDelay: o
  } = e, l = h.AnimateEmoji.useSetting(), _ = null != t.id ? ":".concat(t.name, ":") : I.default.translateSurrogatesToInlineEmoji(t.name), c = {
    className: s()(g.emoji, n),
    emojiId: t.id,
    emojiName: t.name,
    autoplay: !0,
    animated: !!(t.animated && l && r)
  };
  return a ? (0, i.jsx)(d.default, {
    ...c
  }) : (0, i.jsx)(u.Tooltip, {
    text: _,
    delay: o,
    children: e => (0, i.jsx)(d.default, {
      ...e,
      ...c
    })
  })
}
let D = e => {
  let {
    className: t,
    text: n
  } = e, a = r.useRef(null), o = r.useRef(null), [l, d] = r.useState(!1);
  return r.useLayoutEffect(() => {
    let {
      current: e
    } = a, {
      current: t
    } = o;
    if (null != e && null != t) d(!(e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight))
  }, [n]), (0, i.jsx)(u.Tooltip, {
    text: l || null == n || "" === n ? null : n,
    delay: 150,
    "aria-label": !1,
    children: e => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("div", {
        ...e,
        className: t,
        ref: a,
        children: n
      }), (0, i.jsx)("div", {
        className: s()(g.textRuler, t),
        ref: o,
        "aria-hidden": !0,
        children: n
      })]
    })
  })
};
t.default = e => {
  var t;
  let {
    activities: n,
    applicationStream: r,
    className: a,
    textClassName: s,
    emojiClassName: u,
    animate: d = !0,
    hideTooltip: I = !1,
    hideEmoji: h = !1,
    user: M,
    hasQuest: y
  } = e, P = null != n ? n.find(e => e.type === R.ActivityTypes.CUSTOM_STATUS) : null, U = (0, l.useStateFromStores)([A.default], () => A.default.getId() === (null == M ? void 0 : M.id)), b = (0, l.useStateFromStores)([f.default], () => U ? f.default.getHangStatusActivity() : null != n ? n.find(e => e.type === R.ActivityTypes.HANG_STATUS) : null), G = (0, l.useStateFromStores)([O.default, m.default], () => {
    var e;
    return null != b && null != M ? m.default.getChannel(null === (e = O.default.getVoiceStateForUser(M.id)) || void 0 === e ? void 0 : e.channelId) : null
  }), {
    enableHangStatus: w
  } = T.HangStatusExperiment.useExperiment({
    guildId: null == G ? void 0 : G.guild_id,
    location: "ActivityStatus"
  }, {
    autoTrackExposure: !1
  }), k = (0, E.useColorValue)(R.Color.BRAND_345), B = null, V = w && null != b && N.default.can(R.Permissions.CONNECT, G);
  V ? B = (0, i.jsx)(S.default, {
    className: u,
    hangStatusActivity: b
  }) : null != P && null != P.emoji && !h && (B = (0, i.jsx)(v, {
    emoji: P.emoji,
    animate: d,
    hideTooltip: I,
    className: u
  }));
  let x = (0, l.useStateFromStores)([p.default], () => null != M ? p.default.getStatus(M.id) : null),
    F = null !== x && [R.StatusTypes.OFFLINE, R.StatusTypes.INVISIBLE].includes(x),
    H = null === (t = (0, c.default)(n, r, void 0, V)) || void 0 === t ? void 0 : t.activityText,
    Y = null != H && H.length > 0;
  return F || null == B && !Y ? null : (0, i.jsxs)("div", {
    className: a,
    children: [B, (0, i.jsx)(D, {
      text: H,
      className: s
    }), y && (0, i.jsx)(o.QuestsIcon, {
      className: g.questsIcon,
      height: L,
      width: L,
      color: k.hex
    }), null != n && n.some(e => (0, _.default)(e, V)) ? (0, i.jsx)(C.default, {
      width: 16,
      height: 16,
      className: g.icon
    }) : null]
  })
}