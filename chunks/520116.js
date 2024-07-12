n.d(t, {
  Z: function() {
return M;
  }
}), n(653041);
var i = n(735250),
  a = n(470079),
  s = n(913527),
  r = n.n(s),
  l = n(91192),
  o = n(442837),
  c = n(481060),
  d = n(135938),
  u = n(900164),
  _ = n(554838),
  E = n(493892),
  I = n(661824),
  m = n(37772),
  T = n(695346),
  h = n(314897),
  N = n(496675),
  f = n(594174),
  p = n(55935),
  C = n(655354),
  g = n(809780),
  S = n(981631),
  A = n(689938),
  R = n(104219);
let x = {
  left: 4,
  right: -12
};

function O(e) {
  var t;
  let {
channel: n,
message: s,
compact: r,
isGroupStart: o,
treatSpam: d,
gotoChannel: u
  } = e, _ = (0, l.JA)(null !== (t = s.id) && void 0 !== t ? t : ''), E = a.useCallback(e => {
if ('ArrowLeft' === e.key) {
  var t;
  null === (t = document.querySelector('[data-recents-channel="'.concat(n.id, '"]'))) || void 0 === t || t.focus();
}
  }, [n.id]);
  return (0, i.jsx)(c.FocusRing, {
offset: x,
children: (0, i.jsxs)('div', {
  className: R.messageContainer,
  onKeyDown: E,
  ..._,
  children: [
    (0, i.jsx)(C.Z, {
      className: R.jumpButton,
      onJump: e => u(e, s.id)
    }),
    (0, i.jsx)(m.Z, {
      id: s.id,
      message: s,
      channel: n,
      className: R.message,
      compact: r,
      animateAvatar: !1,
      isGroupStart: o,
      onKeyDown: E,
      treatSpam: d
    })
  ]
}, s.id)
  });
}

function M(e) {
  var t, n;
  let {
channel: a,
channelRecord: s,
gotoChannel: l
  } = e, {
enabled: m
  } = d.Z.useExperiment({
location: '20e3b0_1'
  }, {
autoTrackExposure: !1
  }), C = T.jU.useSetting(), x = (0, o.e7)([N.Z], () => N.Z.can(S.Plq.CREATE_INSTANT_INVITE, s)), M = (0, E.P1)(s), v = !1, L = 0 === a.messages.length || r()(a.messages[0].timestamp).isSame(r()(), 'day'), Z = null !== (n = null === (t = f.default.getUser(h.default.getId())) || void 0 === t ? void 0 : t.hasFlag(S.xW$.SPAMMER)) && void 0 !== n && n, P = [];
  if (!a.collapsed) {
let e = null,
  t = null,
  n = a.messages.slice(0, g.hC);
n.forEach(n => {
  if (!(0, u.Z)(n, x)) {
    if (!L && (null == e || !e.isSame(n.timestamp, 'day'))) {
      let t = (0, p.vc)(n.timestamp, 'LL');
      P.push((0, i.jsx)(I.Z, {
        className: R.divider,
        children: t
      }, t)), e = r()(n.timestamp);
    }
    let a = null == t || (0, _.Z)(s, t, n);
    t = n, v = v || (0, E.DQ)(n), P.push((0, i.jsx)(O, {
      channel: s,
      message: n,
      compact: C,
      isGroupStart: a,
      treatSpam: !Z && m && (0, E.DQ)(n) && M,
      gotoChannel: l
    }, n.id));
  }
}), a.messages.length >= g.hC && P.push((0, i.jsxs)(c.Button, {
  color: c.Button.Colors.LINK,
  look: c.Button.Looks.LINK,
  onClick: e => l(e, n[n.length - 1].id),
  children: [
    A.Z.Messages.UNREADS_VIEW_CHANNEL,
    ' \u203A'
  ]
}, 'view-all')), 0 === P.length && (P = [(0, i.jsx)(c.Spinner, {}, 'spinner')]);
  }
  return v && M && d.Z.trackExposure({
location: '20e3b0_2'
  }), (0, i.jsx)('div', {
className: R.messages,
children: P
  });
}