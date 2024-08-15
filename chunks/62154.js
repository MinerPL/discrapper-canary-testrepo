n.d(s, {
  Z: function() {
return u;
  }
});
var i = n(735250);
n(470079);
var t = n(387903),
  l = n(100849),
  o = n(487922),
  a = n(620648),
  r = n(944546),
  d = n(470900),
  c = n(228168);

function u(e) {
  let {
displayProfile: s,
user: n,
selectedSection: u,
autoFocusNote: _,
onClose: I
  } = e;
  switch (u) {
case c.oh.ACTIVITY:
  return (0, i.jsx)(l.Z, {
    user: n,
    type: t.Y.PROFILE_V2,
    onClose: I
  });
case c.oh.MUTUAL_GUILDS:
  return (0, i.jsx)(d.Z, {
    user: n,
    onClose: I
  });
case c.oh.MUTUAL_FRIENDS:
  return (0, i.jsx)(r.Z, {
    user: n,
    onClose: I
  });
case c.oh.BOT_DATA_ACCESS:
  return (0, i.jsx)(o.Z, {
    user: n
  });
case c.oh.USER_INFO_CONNECTIONS:
case c.oh.USER_INFO:
default:
  return (0, i.jsx)(a.Z, {
    displayProfile: s,
    autoFocusNote: _,
    user: n,
    scrollToConnections: u === c.oh.USER_INFO_CONNECTIONS
  });
  }
}