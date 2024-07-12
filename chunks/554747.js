n.d(t, {
  Vm: function() {
return O;
  },
  ZP: function() {
return I;
  },
  eF: function() {
return v;
  },
  gM: function() {
return L;
  },
  k5: function() {
return M;
  },
  qY: function() {
return h;
  },
  sz: function() {
return A;
  },
  u1: function() {
return m;
  }
}), n(47120), n(724458);
var l = n(470079),
  r = n(442837),
  i = n(241155),
  s = n(592125),
  u = n(984933),
  a = n(430824),
  d = n(496675),
  E = n(70956),
  o = n(823379),
  c = n(924301),
  N = n(658041),
  _ = n(835184),
  T = n(79874),
  f = n(854698),
  Z = n(765305),
  g = n(981631);
let C = [],
  D = 15 * E.Z.Millis.MINUTE;

function I(e, t) {
  return (0, r.Wu)([
a.Z,
i.Z,
c.ZP,
d.Z,
s.Z,
u.ZP
  ], () => {
let n = a.Z.getGuild(e);
if (null == n)
  return C;
if (n.hasFeature(g.oNc.HUB)) {
  var l, r;
  let e = null === (l = u.ZP.getDefaultChannel(n.id)) || void 0 === l ? void 0 : l.id;
  return (null !== (r = i.Z.getEventDirectoryEntries(e)) && void 0 !== r ? r : []).map(e => {
    let t = e.scheduledEventId,
      n = c.ZP.getGuildScheduledEvent(t);
    return null != n ? n : i.Z.getCachedGuildScheduledEventById(t);
  }).filter(o.lm);
}
return c.ZP.getGuildScheduledEventsByIndex(null != t ? t : c.bN.GUILD_EVENT_UPCOMING(n.id)).filter(e => {
  let t = e.channel_id;
  if (null == t)
    return !0;
  let n = s.Z.getChannel(t);
  return d.Z.can(g.Plq.VIEW_CHANNEL, n);
});
  }, [
t,
e
  ]);
}

function h(e) {
  return (0, r.e7)([
c.ZP,
s.Z,
d.Z
  ], () => {
let t = s.Z.getChannel(e);
if (!d.Z.can(g.Plq.VIEW_CHANNEL, t) || null == (null == t ? void 0 : t.guild_id))
  return null;
let n = c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_ACTIVE(e));
return n.length > 0 ? n[0] : null;
  }, [e]);
}

function L(e) {
  let t = (0, r.Wu)([c.ZP], () => c.ZP.getGuildScheduledEventsForGuild(e), [e]);
  return l.useMemo(() => {
let e = new Map();
return t.forEach(t => {
  let n = t.channel_id;
  null != n && e.set(n, t);
}), e;
  }, [t]);
}

function O(e) {
  var t, n;
  let l = (t = e, (0, r.Wu)([
  c.ZP,
  s.Z,
  d.Z
], () => c.ZP.getGuildScheduledEventsByIndex(c.bN.GUILD_EVENT_UPCOMING(t)).filter(e => {
  if (e.entity_type === Z.WX.NONE || e.status !== Z.p1.SCHEDULED)
    return !1;
  if (null == e.channel_id)
    return !0;
  let t = s.Z.getChannel(e.channel_id);
  return d.Z.can(g.Plq.VIEW_CHANNEL, t);
}), [t])),
i = (0, r.cj)([_.Z], () => _.Z.getAllEventDismissals()),
u = (0, r.cj)([_.Z], () => _.Z.getAllUpcomingNoticeSeenTimes()),
E = (0, r.cj)([c.ZP], () => null == l ? {} : l.reduce((e, t) => {
  let n = (0, f.DK)(t);
  return {
    ...e,
    [t.id]: c.ZP.isInterestedInEventRecurrence(t.id, n)
  };
}, {}), [l]),
o = (0, r.e7)([a.Z], () => a.Z.getGuild(e)),
T = null != o && !o.hasFeature(g.oNc.COMMUNITY) && o.hasFeature(g.oNc.INTERNAL_EMPLOYEE_ONLY);
  if (null != l && null != E && T)
for (let e = 0; e < l.length; e++) {
  ;
  let t = l[e],
    r = i[t.id],
    s = u[t.id],
    a = null !== (n = E[t.id]) && void 0 !== n && n,
    d = (0, N.M)(t, r, s, a);
  if (null != d)
    return {
      upcomingEvent: t,
      noticeType: d
    };
}
}

function M(e) {
  return (0, r.e7)([
c.ZP,
s.Z,
d.Z
  ], () => c.ZP.getGuildScheduledEventsByIndex(c.bN.GUILD_EVENT_ACTIVE(e)).find(e => {
if (e.entity_type === Z.WX.NONE || !(0, c.xt)(e))
  return !1;
if (null == e.channel_id)
  return !0;
let t = s.Z.getChannel(e.channel_id);
return d.Z.can(g.Plq.VIEW_CHANNEL, t);
  }), [e]);
}

function m(e) {
  return (0, r.e7)([c.ZP], () => c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_UPCOMING(e)), [e]);
}

function v(e) {
  return (0, r.e7)([
s.Z,
c.ZP
  ], () => {
let t = c.ZP.getGuildScheduledEventsByIndex(c.bN.GUILD_EVENT_ACTIVE(e)).find(e => null != s.Z.getChannel(e.channel_id));
return s.Z.getChannel(null == t ? void 0 : t.channel_id);
  }, [e]);
}

function A(e) {
  let [t, n] = l.useState(() => Date.now());
  l.useEffect(() => {
let e = setInterval(() => {
  n(Date.now());
}, D);
return () => clearInterval(e);
  }, []);
  let i = (0, r.e7)([c.ZP], () => null == e ? [] : c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_UPCOMING(e)), [
e,
t
  ]);
  return l.useMemo(() => i.filter(e => {
let {
  startTime: t,
  endTime: n
} = (0, T.Kq)(e), {
  withinStartWindow: l,
  diffMinutes: r
} = (0, f.ub)(t.toISOString(), null == n ? void 0 : n.toISOString());
return e.status !== Z.p1.ACTIVE && l && r < 15;
  }), [i]);
}