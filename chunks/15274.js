n.d(t, {
  P3: function() {
return u;
  },
  bO: function() {
return l;
  },
  lC: function() {
return c;
  }
});
var r = n(735250);
n(470079);
var i = n(952265),
  a = n(749210),
  s = n(981631),
  o = n(602091);

function l(e) {
  let {
eventId: t,
parentGuildId: a,
recurrenceId: s
  } = e;
  (0, i.ZD)(async () => {
let {
  default: e
} = await Promise.all([
  n.e('18543'),
  n.e('95393'),
  n.e('53115'),
  n.e('22347'),
  n.e('99452')
]).then(n.bind(n, 697849));
return n => (0, r.jsx)(e, {
  guildScheduledEventId: t,
  parentGuildId: a,
  initialRecurrenceId: s,
  ...n
});
  });
}
async function u(e, t) {
  let {
guild_id: n
  } = e;
  await a.Z.transitionToGuildSync(n, t), l({
eventId: e.id,
event: e
  });
}

function c(e, t) {
  (0, i.ZD)(async () => {
let {
  default: t
} = await Promise.all([
  n.e('53115'),
  n.e('21395')
]).then(n.bind(n, 312757));
return n => (0, r.jsx)(t, {
  ...n,
  channel: e
});
  }, {
contextKey: t === s.IlC.POPOUT ? o.u1 : o.z1
  });
}