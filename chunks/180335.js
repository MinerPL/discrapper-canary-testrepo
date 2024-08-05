n.d(t, {
  Bq: function() {
return m;
  },
  RL: function() {
return h;
  },
  Ym: function() {
return E;
  },
  pB: function() {
return f;
  },
  vu: function() {
return p;
  }
}), n(47120);
var r = n(423875),
  i = n(442837),
  a = n(353647),
  s = n(146282),
  o = n(26033),
  l = n(561308),
  u = n(206583),
  c = n(981631),
  d = n(616922),
  _ = n(728151);

function E(e, t) {
  let n = e.extra;
  return null != n && ('application_id' in t && t.application_id === n.application_id || 'game_name' in n && t.name === n.game_name);
}

function f(e, t) {
  var n, i, a;
  return (null === (i = e.extra.entries[0]) || void 0 === i ? void 0 : null === (n = i.media) || void 0 === n ? void 0 : n.provider) === r.p.SPOTIFY && (0, d.Ps)(null === (a = t.party) || void 0 === a ? void 0 : a.id);
}

function h(e, t) {
  return t.application_id === _.sp && e.extra.application_id === _.sp && e.extra.media_title === t.details;
}

function p(e, t) {
  let n = e.filter(l.kr);
  return t.type === c.IIU.PLAYING ? n.filter(o.dX).find(e => E(e, t)) : t.type === c.IIU.LISTENING ? n.filter(o.kx).find(e => f(e, t)) : t.type === c.IIU.WATCHING ? e.filter(o.r5).find(e => h(e, t)) : void 0;
}

function m(e) {
  let {
activity: t,
user: n
  } = e, r = (0, i.e7)([s.Z], () => s.Z.getMatchingInboxEntry({
activity: t,
userId: n.id,
feedId: u.YN.GLOBAL_FEED
  })), o = (0, i.e7)([a.Z], () => a.Z.getMatchingOutboxEntry({
activity: t,
userId: n.id
  }));
  return null != r ? r : o;
}