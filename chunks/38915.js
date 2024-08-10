t.d(s, {
  Z: function() {
return c;
  }
}), t(47120);
var n = t(735250);
t(470079);
var a = t(442837),
  i = t(481060),
  r = t(536442),
  o = t(242395);

function l(e) {
  let {
hotspotLocation: s
  } = e, [t, l] = (0, a.Wu)([r.qc], () => [
r.qc.hasHotspot(s, !0),
r.qc.getHotspotOverride(s)
  ]);
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsxs)(i.FormItem, {
    title: s,
    className: o.hotspotSwitch,
    children: [
      t ? (0, n.jsx)(i.TooltipContainer, {
        className: o.iconContainer,
        element: 'span',
        text: 'Active',
        children: (0, n.jsx)(i.CheckmarkLargeIcon, {
          size: 'md',
          color: 'currentColor',
          className: o.checkmark
        })
      }) : (0, n.jsx)(i.TooltipContainer, {
        className: o.iconContainer,
        element: 'span',
        text: 'Inactive',
        children: (0, n.jsx)(i.XSmallIcon, {
          size: 'md',
          color: 'currentColor',
          className: o.xmark
        })
      }),
      (0, n.jsx)(i.SingleSelect, {
        className: o.overrideSelect,
        value: l,
        options: [{
            value: void 0,
            label: 'No Override'
          },
          {
            value: !0,
            label: 'Force Active'
          },
          {
            value: !1,
            label: 'Force Inactive'
          }
        ],
        onChange: e => null != e ? (0, r.hv)(s, e) : (0, r.Po)(s)
      })
    ]
  }),
  (0, n.jsx)(i.FormDivider, {})
]
  });
}

function c(e) {
  let {
className: s
  } = e;
  return (0, n.jsxs)(i.FormSection, {
title: 'Hotspots',
tag: i.FormTitleTags.H1,
className: s,
children: [
  (0, n.jsx)(i.Text, {
    className: o.helpText,
    tag: 'p',
    variant: 'text-sm/normal',
    children: 'All the "hotspots" in app, and their current status. Use the select menu to override them on or off.'
  }),
  Object.keys(r.v6).sort((e, s) => e.localeCompare(s)).map(e => (0, n.jsx)(l, {
    hotspotLocation: e
  }, e))
]
  });
}