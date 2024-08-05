i.d(s, {
  Z: function() {
return u;
  }
});
var n = i(735250);
i(470079);
var l = i(387903),
  t = i(100849),
  o = i(487922),
  a = i(620648),
  r = i(944546),
  d = i(470900),
  c = i(228168);

function u(e) {
  let {
displayProfile: s,
user: i,
selectedSection: u,
autoFocusNote: I,
onClose: _
  } = e;
  switch (u) {
case c.oh.ACTIVITY:
  return (0, n.jsx)(t.Z, {
    user: i,
    type: l.Y.PROFILE_V2,
    onClose: _
  });
case c.oh.MUTUAL_GUILDS:
  return (0, n.jsx)(d.Z, {
    user: i,
    onClose: _
  });
case c.oh.MUTUAL_FRIENDS:
  return (0, n.jsx)(r.Z, {
    user: i,
    onClose: _
  });
case c.oh.BOT_DATA_ACCESS:
  return (0, n.jsx)(o.Z, {
    user: i
  });
case c.oh.USER_INFO_CONNECTIONS:
case c.oh.USER_INFO:
default:
  return (0, n.jsx)(a.Z, {
    displayProfile: s,
    autoFocusNote: I,
    user: i,
    scrollToConnections: u === c.oh.USER_INFO_CONNECTIONS
  });
  }
}