n.d(t, {
  Z: function() {
return T;
  }
});
var i = n(735250);
n(470079);
var a = n(685072),
  s = n(287734),
  r = n(67212),
  l = n(158631),
  o = n(15274),
  c = n(389303),
  d = n(881824),
  u = n(719100),
  _ = n(976401),
  h = n(689938),
  E = n(134137);

function I(e) {
  let {
tooltipText: t,
onClick: n
  } = e, s = (0, a.K)();
  return (0, i.jsx)(_.Z, {
innerClassName: E.button,
tooltipText: t,
onClick: n,
...s.events,
icon: s.Component
  });
}

function m() {
  return (0, i.jsx)(I, {
tooltipText: h.Z.Messages.DISCONNECT_SELF,
onClick: () => {
  (0, r.b_)(), s.default.disconnect();
}
  });
}

function g(e) {
  let {
channel: t
  } = e;
  return (0, i.jsx)(I, {
tooltipText: h.Z.Messages.AUDIENCE_DISCONNECT,
onClick: () => {
  if ((0, u.Z)(t)) {
    (0, d.Us)(t);
    return;
  }
  s.default.disconnect();
}
  });
}

function p(e) {
  let {
channel: t
  } = e;
  return (0, i.jsx)(I, {
tooltipText: h.Z.Messages.DISCONNECT_SELF,
onClick: () => {
  if ((0, c.Z)(t)) {
    (0, o.lC)(t);
    return;
  }
  s.default.disconnect();
}
  });
}

function T(e) {
  let {
channel: t
  } = e, n = (0, l.ZP)();
  return t.isGuildStageVoice() ? (0, i.jsx)(g, {
channel: t
  }) : n && t.isBroadcastChannel() ? (0, i.jsx)(m, {}) : (0, i.jsx)(p, {
channel: t
  });
}