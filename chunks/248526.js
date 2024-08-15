t.d(r, {
  Z: function() {
return b;
  }
}), t(47120);
var a = t(735250),
  n = t(470079),
  i = t(848246),
  o = t(442837),
  l = t(481060),
  c = t(570140),
  s = t(746599),
  d = t(594174),
  u = t(246992),
  h = t(700768);
let m = [{
  label: 'No Override',
  value: !1
},
{
  label: 'Available: true',
  value: !0
}
  ],
  g = [{
  label: 'No Override',
  value: !1
},
{
  label: 'Success',
  value: !0
}
  ],
  p = [{
  label: '1 day',
  value: 1
},
{
  label: '7 days',
  value: 7
}
  ];

function b() {
  let e = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
[r, t] = n.useState(!1),
[b, f] = n.useState(!1),
[y, x] = n.useState(1);
  return (0, a.jsxs)('div', {
className: h.container,
children: [
  (0, a.jsx)(l.FormSection, {
    title: 'Override HQ Streaming: Available',
    className: h.formElement,
    tag: l.FormTitleTags.H3,
    children: (0, a.jsx)(l.SingleSelect, {
      options: m,
      value: r,
      onChange: e => {
        t(e);
      },
      popoutLayerContext: u.O$
    })
  }),
  (0, a.jsx)(l.FormSection, {
    title: 'Override HQ Streaming: Activate',
    className: h.formElement,
    tag: l.FormTitleTags.H3,
    children: (0, a.jsx)(l.SingleSelect, {
      options: g,
      value: b,
      onChange: e => {
        f(e);
      },
      popoutLayerContext: u.O$
    })
  }),
  (0, a.jsx)(l.FormSection, {
    title: 'Override Demo Duration',
    className: h.formElement,
    tag: l.FormTitleTags.H3,
    children: (0, a.jsx)(l.SingleSelect, {
      options: p,
      value: y,
      onChange: e => {
        x(e);
      },
      popoutLayerContext: u.O$
    })
  }),
  (0, a.jsx)(l.Button, {
    onClick: () => void(c.Z.dispatch({
      type: 'PREMIUM_PERKS_DEMO_OVERRIDE',
      perkType: i.q.STREAM_HIGH_QUALITY,
      user: e,
      available: r,
      activateSuccess: b,
      demoDuration: y
    }), (0, s.Vk)()),
    children: 'Update'
  })
]
  });
}