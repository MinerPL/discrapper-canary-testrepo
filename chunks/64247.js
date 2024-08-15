n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(438536),
  r = n(214906),
  l = n(346479),
  o = n(723170),
  c = n(124368);

function u(e) {
  let {
channel: t,
closePopout: n,
onSelect: u,
navId: d,
label: _
  } = e, E = (0, s.Z)(t, 'Notifications Bell'), I = (0, r.Z)(t), m = (0, o.B)(t);
  return (0, i.jsxs)(a.Menu, {
navId: d,
onClose: n,
'aria-label': _,
onSelect: u,
children: [
  (0, i.jsxs)(a.MenuGroup, {
    children: [
      t.isForumPost() ? E : null,
      I
    ]
  }),
  (0, i.jsx)(a.MenuGroup, {
    children: (0, c.zb)().map(e => {
      let {
        setting: n,
        label: s
      } = e;
      return (0, i.jsx)(a.MenuRadioItem, {
        group: 'thread-notifications',
        id: ''.concat(n),
        label: s,
        action: () => l.Z.setNotificationSettings(t, {
          flags: n
        }),
        checked: n === m
      }, n);
    })
  })
]
  });
}