n.d(t, {
  Z: function() {
return d;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(481060),
  r = n(921944),
  l = n(689938),
  o = n(613885);

function c(e) {
  let {
markAsDismissed: t
  } = e;
  return a.useEffect(() => {
let e = setTimeout(() => {
  t(r.L.AUTO_DISMISS);
}, 8000);
return () => {
  clearTimeout(e);
};
  }, [t]), (0, i.jsxs)(s.Clickable, {
className: o.container,
onClick: () => {
  t(r.L.USER_DISMISS);
},
children: [
  (0, i.jsx)(s.Text, {
    variant: 'text-sm/medium',
    color: 'always-white',
    children: l.Z.Messages.PROFILE_LOOKING_GOOD_TOOLTIP_TEXT
  }),
  (0, i.jsx)('div', {
    className: o.pointer
  })
]
  });
}

function d(e) {
  let {
children: t,
markAsDismissed: n
  } = e, [r, l] = a.useState(!1);
  return a.useEffect(() => {
let e = setTimeout(() => {
  l(!0);
}, 1000);
return () => {
  clearTimeout(e);
};
  }, [l]), (0, i.jsx)(s.Popout, {
position: 'top',
align: 'left',
shouldShow: r,
renderPopout: () => (0, i.jsx)(c, {
  markAsDismissed: n
}),
children: t
  });
}