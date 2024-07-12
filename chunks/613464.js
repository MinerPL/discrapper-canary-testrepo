n.d(t, {
  Z: function() {
return S;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(749210),
  d = n(110924),
  u = n(58540),
  h = n(100527),
  p = n(906732),
  m = n(527379),
  _ = n(484459),
  f = n(318661),
  E = n(502762),
  C = n(271383),
  g = n(594174),
  I = n(189357),
  x = n(718617),
  T = n(327250),
  v = n(228168),
  N = n(204246);

function S(e) {
  let {
userId: t,
guildId: n,
onClose: l,
className: S,
infoPanelClassName: Z,
style: A
  } = e, M = (0, I.ms)(n), b = (0, r.e7)([g.default], () => g.default.getUser(t), [t]), R = (0, r.e7)([C.ZP], () => C.ZP.getMember(n, t), [
n,
t
  ]), [j, L] = a.useState(null == b || null == R), P = (0, d.Z)(R), O = a.useRef(null), {
analyticsLocations: y
  } = (0, p.ZP)(h.Z.GUILD_MEMBER_MOD_VIEW), D = (0, f.ZP)(t, n);
  return (a.useEffect(() => {
!M && l();
  }, [
M,
l
  ]), a.useEffect(() => {
null != P && null == R && !j && l();
  }, [
j,
R,
l,
P
  ]), a.useEffect(() => {
null != b && null != R && L(!1);
  }, [
b,
R
  ]), a.useEffect(() => {
let e = null == R;
return !j && e && (O.current = window.setTimeout(l, 500)), () => {
  null != O.current && window.clearTimeout(O.current);
};
  }, [
j,
R,
l
  ]), (0, u.$)({
[n]: [t]
  }), a.useEffect(() => {
(async function e() {
  let e = [
    c.Z.requestMembersById(n, [t]),
    (0, m.nb)(n, [t]),
    (0, _.W)(t, void 0, {
      guildId: n,
      dispatchWait: !0
    })
  ];
  await Promise.all(e), L(!1);
}());
  }, [
n,
t
  ]), M) ? j || null == b || null == R ? (0, i.jsx)('div', {
className: s()(N.sidebarContianer, N.loadingContainer, S),
style: A,
children: (0, i.jsx)(o.Spinner, {
  animated: !0,
  type: j ? o.Spinner.Type.SPINNING_CIRCLE : o.Spinner.Type.CHASING_DOTS
})
  }) : (0, i.jsx)(p.Gt, {
value: y,
children: (0, i.jsx)('div', {
  className: s()(N.sidebarContianer, S),
  style: A,
  children: (0, i.jsx)(E.Z, {
    user: b,
    displayProfile: D,
    profileType: v.y0.MODAL,
    forceShowPremium: !0,
    className: s()(N.profileThemedContainer),
    children: (0, i.jsxs)('div', {
      className: s()(N.innerContainer),
      children: [
        (0, i.jsx)(T.Z, {
          userId: t,
          guildId: n,
          onClose: l
        }),
        (0, i.jsx)(x.Z, {
          userId: t,
          guildId: n,
          onClose: l,
          className: Z
        })
      ]
    })
  })
})
  }) : null;
}