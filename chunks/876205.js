n.d(t, {
  Z: function() {
return p;
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  o = n(442837),
  r = n(481060),
  l = n(556296),
  c = n(13140),
  d = n(981631),
  u = n(404810);
let h = {
  [d.kg4.TOGGLE_MUTE]: {
legacy: {
  slash: r.MicrophoneSlashIcon,
  default: r.MicrophoneIcon
},
new: {
  slash: r.MicrophoneSlashIcon,
  default: r.MicrophoneIcon
}
  }
};

function p(e) {
  let {
value: t,
action: n,
shouldShow: s
  } = e, d = (0, o.e7)([l.Z], () => l.Z.getKeybindForAction(n, !1, !0)), p = (0, r.useRedesignIconContext)().enabled;
  if (null == d || !s)
return null;
  let f = c.BB(d.shortcut),
_ = p ? h[n].new : h[n].legacy,
g = t ? _.slash : _.default;
  return (0, i.jsxs)('div', {
className: u.keybindIndicator,
children: [
  (0, i.jsx)(g, {
    className: u.keybindIcon,
    size: 'xs',
    color: 'currentColor'
  }),
  (0, i.jsx)(r.Text, {
    variant: 'text-xxs/semibold',
    className: a()(u.keybindIndicatorText),
    children: f
  })
]
  });
}