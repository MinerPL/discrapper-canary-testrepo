a.d(t, {
  Z: function() {
return p;
  }
}), a(47120);
var n = a(735250),
  l = a(470079),
  i = a(442837),
  r = a(481060),
  o = a(835473),
  s = a(925329),
  u = a(706454),
  d = a(709054),
  c = a(689938),
  m = a(799381);

function p(e) {
  var t, a;
  let {
clip: p
  } = e, [v] = (0, o.Z)([null !== (t = p.applicationId) && void 0 !== t ? t : '']), f = (0, i.e7)([u.default], () => u.default.locale), b = l.useMemo(() => new Date(d.default.extractTimestamp(p.id)), [p.id]);
  return (0, n.jsxs)('div', {
className: m.root,
children: [
  (0, n.jsxs)('div', {
    className: m.nameSection,
    children: [
      (0, n.jsx)(s.Z, {
        game: v
      }),
      (0, n.jsx)(r.Text, {
        className: m.name,
        variant: 'text-md/medium',
        color: 'interactive-active',
        children: null !== (a = null == v ? void 0 : v.name) && void 0 !== a ? a : p.applicationName
      })
    ]
  }),
  (0, n.jsxs)('div', {
    className: m.timeContainer,
    children: [
      (0, n.jsxs)('div', {
        children: [
          (0, n.jsx)(r.FormTitle, {
            className: m.timeTitle,
            children: c.Z.Messages.CLIPS_EDIT_DATE_TITLE
          }),
          (0, n.jsx)(r.Text, {
            variant: 'text-sm/normal',
            color: 'interactive-active',
            children: b.toLocaleDateString(f, {
              year: '2-digit',
              month: '2-digit',
              day: '2-digit'
            })
          })
        ]
      }),
      (0, n.jsxs)('div', {
        children: [
          (0, n.jsx)(r.FormTitle, {
            className: m.timeTitle,
            children: c.Z.Messages.CLIPS_EDIT_TIME_TITLE
          }),
          (0, n.jsx)(r.Text, {
            variant: 'text-sm/normal',
            color: 'interactive-active',
            children: b.toLocaleTimeString(f, {
              hour: 'numeric',
              minute: 'numeric'
            })
          })
        ]
      })
    ]
  })
]
  });
}