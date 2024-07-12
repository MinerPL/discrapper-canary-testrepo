n.d(t, {
  Z: function() {
return p;
  }
});
var i = n(735250);
n(470079);
var s = n(685072),
  a = n(287734),
  r = n(67212),
  l = n(158631),
  o = n(15274),
  c = n(389303),
  d = n(881824),
  u = n(719100),
  _ = n(976401),
  h = n(689938);

function E(e) {
  let {
tooltipText: t,
onClick: n
  } = e, a = (0, s.K)();
  return (0, i.jsx)(_.Z, {
tooltipText: t,
onClick: n,
...a.events,
icon: a.Component
  });
}

function I() {
  return (0, i.jsx)(E, {
tooltipText: h.Z.Messages.DISCONNECT_SELF,
onClick: () => {
  (0, r.b_)(), a.default.disconnect();
}
  });
}

function m(e) {
  let {
channel: t
  } = e;
  return (0, i.jsx)(E, {
tooltipText: h.Z.Messages.AUDIENCE_DISCONNECT,
onClick: () => {
  if ((0, u.Z)(t)) {
    (0, d.Us)(t);
    return;
  }
  a.default.disconnect();
}
  });
}

function g(e) {
  let {
channel: t
  } = e;
  return (0, i.jsx)(E, {
tooltipText: h.Z.Messages.DISCONNECT_SELF,
onClick: () => {
  if ((0, c.Z)(t)) {
    (0, o.lC)(t);
    return;
  }
  a.default.disconnect();
}
  });
}

function p(e) {
  let {
channel: t
  } = e, n = (0, l.ZP)();
  return t.isGuildStageVoice() ? (0, i.jsx)(m, {
channel: t
  }) : n && t.isBroadcastChannel() ? (0, i.jsx)(I, {}) : (0, i.jsx)(g, {
channel: t
  });
}