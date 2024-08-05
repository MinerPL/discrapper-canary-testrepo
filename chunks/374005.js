n.d(t, {
  b: function() {
return p;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(393238),
  r = n(540059),
  l = n(720734),
  o = n(840780),
  c = n(235555),
  d = n(746508),
  u = n(210724),
  _ = n(905423),
  h = n(410575),
  E = n(981631),
  I = n(689938),
  m = n(171200);

function g(e) {
  let t = (0, _.Z)(e => {
let {
  guildId: t
} = e;
return t;
  });
  return (0, i.jsx)(o.Z, {
...e,
guildId: t
  });
}

function p() {
  let e = (0, r.Q)('AppPanels'),
t = a.useRef(null);
  return (0, s.P)(t, t => {
let {
  height: n
} = t;
e && document.body.style.setProperty('--custom-app-panels-height', ''.concat(n, 'px'));
  }, []), (0, i.jsxs)('section', {
ref: t,
className: m.panels,
'aria-label': I.Z.Messages.ACCOUNT_A11Y_LABEL,
children: [
  (0, i.jsx)(u.Z, {}),
  (0, i.jsx)(c.Z, {}),
  (0, i.jsx)(h.Z, {
    section: E.jXE.ACTIVITY_PANEL,
    children: (0, i.jsx)(g, {
      className: m.activityPanel
    })
  }),
  (0, i.jsx)(h.Z, {
    section: E.jXE.RTC_CONNECTION_PANEL,
    children: (0, i.jsx)(d.Z, {})
  }),
  (0, i.jsx)(h.Z, {
    section: E.jXE.ACCOUNT_PANEL,
    children: (0, i.jsx)(l.Z, {})
  })
]
  });
}