n(47120);
var s, r, i = n(735250),
  a = n(470079),
  l = n(120356),
  o = n.n(l),
  c = n(536285),
  u = n(857458),
  d = n(388905),
  h = n(703656),
  _ = n(689938),
  E = n(549856);
(r = s || (s = {}))[r.INITIAL = 0] = 'INITIAL', r[r.RPC_CONNECTED = 1] = 'RPC_CONNECTED', r[r.APP_OPENING = 2] = 'APP_OPENING', r[r.APP_OPENED = 3] = 'APP_OPENED';
t.Z = function(e) {
  let {
match: t,
location: n,
attemptDeepLink: s
  } = e, [r, l] = a.useState(0);
  a.useEffect(() => {
c.default.once('connected', () => {
  l(1);
}), c.default.once('disconnected', () => {
  (0, h.uL)((0, u.M)());
}), c.default.connect();
  }, []), a.useEffect(() => {
if (0 !== r)
  return;
let e = setTimeout(() => (0, h.uL)((0, u.M)()), 3000);
return () => clearTimeout(e);
  }, [r]);
  let g = a.useCallback(async (e, t) => {
try {
  l(2), await s(e, t), l(3);
} catch (e) {
  console.error('Error opening deeplink', e);
}
  }, [s]);
  if ((0, h.DB)())
return null;
  switch (r) {
case 1:
  return (0, i.jsxs)(d.ZP, {
    children: [
      (0, i.jsx)(d.Dx, {
        className: E.marginBottom8,
        children: _.Z.Messages.DEEPLINK_BROWSER_TITLE
      }),
      (0, i.jsx)(d.DK, {
        children: _.Z.Messages.DEEPLINK_BROWSER_PROMPT
      }),
      (0, i.jsx)(d.zx, {
        className: E.marginTop40,
        onClick: () => g(t, n),
        children: _.Z.Messages.OPEN_IN_APP
      }),
      (0, i.jsx)(d.zx, {
        className: o()(E.marginTop8, E.marginCenterHorz),
        color: d.zx.Colors.LINK,
        look: d.zx.Looks.LINK,
        onClick: () => (0, h.uL)((0, u.M)()),
        children: _.Z.Messages.CONTINUE_IN_BROWSER
      })
    ]
  });
case 0:
case 2:
  return (0, i.jsxs)(d.ZP, {
    children: [
      (0, i.jsx)(d.Dx, {
        children: _.Z.Messages.APP_OPENING
      }),
      (0, i.jsx)(d.Hh, {})
    ]
  });
case 3:
  return (0, i.jsxs)(d.ZP, {
    children: [
      (0, i.jsx)(d.Dx, {
        className: E.marginBottom8,
        children: _.Z.Messages.APP_OPENED_TITLE
      }),
      (0, i.jsx)(d.DK, {
        children: _.Z.Messages.DEEPLINK_BROWSER_APP_OPENED
      })
    ]
  });
  }
};