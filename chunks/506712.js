n.d(t, {
  A: function() {
return E;
  },
  q: function() {
return d;
  }
}), n(724458);
var r = n(392711),
  i = n.n(r),
  a = n(131704),
  o = n(592125),
  s = n(580005),
  l = n(650774),
  u = n(70956),
  c = n(789662);

function d(e, t, n, r, i) {
  var a, s, u, d;
  let E = o.Z.getMutableGuildChannelsForGuild(e.id),
f = r.filter(e => e.channel_id in E),
h = null !== (a = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== a ? a : {},
p = l.Z.getMemberCount(e.id),
m = _('year', r, f, e => {
  var t;
  return Number(null !== (t = e.num_year_opens) && void 0 !== t ? t : 0);
}),
I = _('one month', r, f, e => {
  var t;
  return Number(null !== (t = e.num_month_opens) && void 0 !== t ? t : 0);
}),
T = _('three month', r, f, e => {
  var t;
  return Number(null !== (t = e.num_three_month_opens) && void 0 !== t ? t : 0);
}),
g = [
  I,
  T,
  _('six month', r, f, e => {
    var t;
    return Number(null !== (t = e.num_six_month_opens) && void 0 !== t ? t : 0);
  }),
  m
],
S = 0,
A = 0;
  f.forEach(e => {
var t;
S++, A += null !== (t = Number(e.num_messages)) && void 0 !== t ? t : 0;
  });
  let N = '\n**Pain**:\n- Everyones: '.concat(c.XR[null !== (s = h.everyones) && void 0 !== s ? s : 0], '\n- Messages: ').concat(c.XR[null !== (u = h.messages) && void 0 !== u ? u : 0], '\n- Size: ').concat(p, '\n**Remote**:\n- Channels: ').concat(S, '\n- AllVisits: ').concat(g.map(e => e.totalOpensAcrossAllServers).join(' / '), '\n- GuildVisits: ').concat(g.map(e => e.guildOpens).join(' / '), '\n- Biggest Channel (abs): ').concat(g.map(e => e.biggestChannel).join(' / '), '\n- Biggest Channel (%): ').concat(g.map(e => e.biggestChannelFormatted).join(' / '), '\n- Sent Msgs: ').concat(A, '\n'),
v = T.guildOpens >= 0.02 * T.totalOpensAcrossAllServers,
O = (null !== (d = m.guildOpens) && void 0 !== d ? d : 0) > 0;
  if (h.messages === c.XR.High) {
if (!i)
  return [
    c.AR.UseGreyDot,
    v,
    'UseGreyDot' + N
  ];
if (!v && O)
  return [
    c.AR.UseGreyDot,
    v,
    'UseGreyDot' + N
  ];
  }
  return [
c.AR.KeepAsIs,
v,
'KeepAsIs' + N
  ];
}

function _(e, t, n, r) {
  let a = t.reduce((e, t) => e + r(t), 0),
o = n.reduce((e, t) => e + r(t), 0),
s = i().sortBy(n, r).reverse()[0],
l = null == s ? 0 : r(s),
u = (l / o * 100).toFixed(1);
  return {
label: e,
totalOpensAcrossAllServers: a,
guildOpens: o,
biggestChannel: l,
biggestChannelFormatted: u
  };
}

function E(e, t) {
  var n, r;
  let i = null !== (n = t.filter(t => t.guild_id === e.id)[0]) && void 0 !== n ? n : {},
o = null !== (r = l.Z.getMemberCount(e.id)) && void 0 !== r ? r : 0,
d = Date.now() - u.Z.Millis.DAYS_30,
_ = s.Z.getFrequentlyWithoutFetchingLatest().filter(t => t instanceof a.Sf && t.guild_id === e.id),
E = _.filter(e => {
  var t, n;
  let r = null !== (n = null === (t = s.Z.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
  return 0 !== r.length && r[r.length - 1] >= d;
}),
f = E.length >= 5,
h = _.reduce((e, t) => {
  var n, r;
  return e + (null !== (r = null === (n = s.Z.frecencyWithoutFetchingLatest.usageHistory[t.id]) || void 0 === n ? void 0 : n.totalUses) && void 0 !== r ? r : 0);
}, 0),
p = '\n- **Local**:\n    - Guild Visits: '.concat(h, '\n    - Channels: ').concat(_.length, '\n    - Recent Channels: ').concat(E.length, '\n');
  return i.messages === c.XR.High || o > 1000 ? [
c.AR.UseGreyDot,
f,
'SuggestGreyDot' + p
  ] : [
c.AR.KeepAsIs,
f,
'KeepAsIs' + p
  ];
}