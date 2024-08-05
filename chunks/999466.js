t.r(n), t.d(n, {
  default: function() {
return g;
  }
});
var a = t(735250);
t(470079);
var s = t(442837),
  u = t(481060),
  r = t(239091),
  o = t(547972),
  i = t(435064),
  l = t(621781),
  c = t(39604),
  S = t(332325),
  d = t(689938);

function g(e) {
  let {
onSelect: n
  } = e, {
clipsLength: t
  } = (0, s.cj)([i.Z], () => i.Z.getSettings()), g = (0, l.Z)();
  return (0, a.jsxs)(u.Menu, {
navId: 'clips-context',
'aria-label': d.Z.Messages.CLIPS_SETTINGS,
onClose: r.Zy,
onSelect: n,
children: [
  (0, a.jsx)(u.MenuGroup, {
    children: (0, a.jsx)(u.MenuItem, {
      id: 'clips-duration',
      label: d.Z.Messages.CLIPS_SETTINGS_LENGTH,
      children: g.map(e => {
        let {
          value: n,
          label: s
        } = e;
        return (0, a.jsx)(u.MenuRadioItem, {
          id: 'clips-duration-'.concat(n),
          group: 'clips-duration',
          label: s,
          action: () => (0, c.eU)(n),
          checked: n === t
        }, n);
      })
    })
  }),
  (0, a.jsx)(u.MenuGroup, {
    children: (0, a.jsx)(u.MenuItem, {
      id: 'clips-settings',
      label: d.Z.Messages.CLIPS_SETTINGS,
      action: () => (0, o.Z)(S.Z.CLIPS)
    })
  })
]
  });
}