r.d(t, {
  Z: function() {
return p;
  }
}), r(47120);
var a = r(735250),
  n = r(470079),
  i = r(848246),
  o = r(442837),
  l = r(481060),
  c = r(570140),
  s = r(485731),
  d = r(594174),
  u = r(246992),
  h = r(670325);
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
  ];

function p() {
  let e = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
[t, r] = n.useState(!1),
[p, b] = n.useState(!1);
  return (0, a.jsxs)('div', {
className: h.container,
children: [
  (0, a.jsx)(l.FormSection, {
    title: 'Override HQ Streaming: Available',
    className: h.formElement,
    tag: l.FormTitleTags.H3,
    children: (0, a.jsx)(l.SingleSelect, {
      options: m,
      value: t,
      onChange: e => {
        r(e);
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
      value: p,
      onChange: e => {
        b(e);
      },
      popoutLayerContext: u.O$
    })
  }),
  (0, a.jsx)(l.Button, {
    onClick: () => void(c.Z.dispatch({
      type: 'PREMIUM_PERKS_DEMO_OVERRIDE',
      perkType: i.q.STREAM_HIGH_QUALITY,
      user: e,
      available: t,
      activateSuccess: p
    }), (0, s.J1)(!1), (0, s.pM)(!1), (0, s.qA)(!1), (0, s.hP)(!1)),
    children: 'Update'
  })
]
  });
}