i.d(n, {
  Z: function() {
return u;
  }
});
var s = i(735250);
i(470079);
var l = i(387903),
  o = i(100849),
  t = i(487922),
  r = i(620648),
  a = i(944546),
  d = i(470900),
  c = i(228168);

function u(e) {
  let {
displayProfile: n,
user: i,
selectedSection: u,
autoFocusNote: I,
onClose: _
  } = e;
  switch (u) {
case c.oh.ACTIVITY:
  return (0, s.jsx)(o.Z, {
    user: i,
    type: l.Y.PROFILE_V2,
    onClose: _
  });
case c.oh.MUTUAL_GUILDS:
  return (0, s.jsx)(d.Z, {
    user: i,
    onClose: _
  });
case c.oh.MUTUAL_FRIENDS:
  return (0, s.jsx)(a.Z, {
    user: i,
    onClose: _
  });
case c.oh.BOT_DATA_ACCESS:
  return (0, s.jsx)(t.Z, {
    user: i
  });
case c.oh.USER_INFO_CONNECTIONS:
case c.oh.USER_INFO:
default:
  return (0, s.jsx)(r.Z, {
    displayProfile: n,
    autoFocusNote: I,
    user: i,
    scrollToConnections: u === c.oh.USER_INFO_CONNECTIONS
  });
  }
}