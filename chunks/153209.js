n.d(t, {
  Z: function() {
return C;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(524437),
  l = n(481060),
  o = n(140155),
  c = n(497089),
  d = n(178480),
  u = n(11799),
  _ = n(632523),
  E = n(695346),
  I = n(626135),
  m = n(709054),
  T = n(791914),
  h = n(981631),
  N = n(689938),
  f = n(557032);

function p(e) {
  let {
onClick: t
  } = e;
  return (0, i.jsx)(l.CircleIconButton, {
tooltip: N.Z.Messages.MARK_ALL_AS_READ,
color: l.CircleIconButtonColors.SECONDARY,
icon: (0, i.jsx)(l.DoubleCheckmarkLargeIcon, {
  size: 'xs',
  color: 'currentColor'
}),
onClick: t
  });
}

function C(e) {
  let {
setTab: t,
badgeState: n,
closePopout: l
  } = e, {
initialized: N,
items: C,
loading: g,
loadMore: S
  } = (0, u.y6)(), A = (0, s.e7)([o.Z], () => o.Z.localItems), R = a.useMemo(() => [...[
...C,
...A
  ].sort((e, t) => -1 * m.default.compare(e.id, t.id))], [
C,
A
  ]), x = C.length > 0 ? C[0] : null, O = E.d$.useSetting(), M = a.useMemo(() => {
if (null != x && 0 >= m.default.compare(x.id, O))
  return !1;
for (let e of R) {
  if (0 >= m.default.compare(e.id, O))
    break;
  if (!(0, d.r)(e, O))
    return !0;
}
return !1;
  }, [
x,
O,
R
  ]);
  return (0, i.jsxs)('div', {
className: f.container,
children: [
  (0, i.jsx)(T.Z, {
    tab: r.X.FOR_YOU,
    setTab: t,
    badgeState: n,
    closePopout: l,
    children: M ? (0, i.jsx)(p, {
      onClick: () => {
        null != x && (E.d$.updateSetting(x.id), I.default.track(h.rMx.NOTIFICATION_CENTER_ACTION, {
          action_type: c.ud.MARK_ALL_READ
        }));
      }
    }) : null
  }),
  (0, i.jsx)(_.Z, {
    initialized: N,
    items: R,
    loading: g,
    loadMore: S
  })
]
  });
}