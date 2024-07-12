n.d(t, {
  Z: function() {
return I;
  }
}), n(653041), n(47120), n(789020), n(724458);
var r = n(392711),
  i = n.n(r),
  a = n(131704),
  o = n(680089),
  s = n(592125),
  l = n(480294),
  u = n(580005),
  c = n(496675),
  d = n(9156),
  _ = n(70956),
  E = n(630388),
  f = n(823379),
  h = n(789662),
  p = n(981631),
  m = n(526761);

function I(e, t, n, r, E) {
  if (t !== h.AR.UseGreyDot)
return [{
  label: 'Setting the guild to a white dot unread',
  apply: (e, t) => {
    T(e, t, !0);
  }
}];
  let m = [],
I = Object.values(s.Z.getMutableGuildChannelsForGuild(e.id)).filter(e => c.Z.can(p.Plq.VIEW_CHANNEL, e));
  return m.push(... function(e, t) {
if (!(d.ZP.isMuted(e.id) && !d.ZP.isTemporarilyMuted(e.id)))
  return [];
let n = [{
    label: 'Unmuting the guild and marking it as read',
    apply: e => {
      e.muted = !1, e.mute_config = null;
    },
    needsMarkedAsRead: !0
  }],
  r = t.filter(t => d.ZP.getChannelMessageNotifications(e.id, t.id) === p.bL.ALL_MESSAGES);
return r.length > 0 && n.push({
  label: 'Setting '.concat(r.length, ' to mentions-only since they were all-messages and we are unmuting the guild'),
  debug: r.map(e => '\n    - #'.concat(e.name)).join(''),
  apply: (e, t) => {
    for (let n of r)
      g(e, t, n.id, e => {
        e.message_notifications = p.bL.ONLY_MENTIONS;
      });
  }
}), n;
  }(e, I)), m.push(function(e) {
if (d.ZP.getMessageNotifications(e.id) === p.bL.ALL_MESSAGES)
  return {
    label: 'Setting the guild to only mentions since it is in care-a-little but was previously all-messages',
    apply: e => {
      e.message_notifications = p.bL.ONLY_MENTIONS;
    }
  };
  }(e)), m.push(function() {
return {
  label: 'Setting the guild to a grey dot unread',
  apply: (e, t) => {
    T(e, t, !1);
  }
};
  }()), m.push(... function(e) {
let t = [],
  [n, r] = i()(e).filter(e => e.type === p.d4z.GUILD_ANNOUNCEMENT).partition(e => d.ZP.isChannelMuted(e.guild_id, e.id) || null != e.parent_id && d.ZP.isChannelMuted(e.guild_id, e.parent_id)).value();
return n.length > 0 && t.push({
  label: 'Not touching '.concat(n.length, ' announcement channels since they are muted'),
  debug: n.map(e => '\n    - #'.concat(e.name)).join('')
}), r.length > 0 && t.push({
  label: 'Setting '.concat(r.length, ' announcement channels to white-dot'),
  debug: r.map(e => '\n    - #'.concat(e.name)).join(''),
  apply: (e, t) => {
    for (let n of r)
      S(e, t, n.id, !0);
  }
}), t;
  }(I)), m.push(... function(e) {
let t = [],
  n = [];
for (let t of e)
  d.ZP.isChannelMuted(t.guild_id, t.id) && t.isCategory() && !o.Z.isCollapsed(t.id) && n.push(t);
return n.length > 0 && t.push({
  label: 'Unmuting '.concat(n.length, ' categories and setting to grey-dot'),
  debug: n.map(e => '\n    - #'.concat(e.name)).join(''),
  apply: (e, t) => {
    for (let r of n)
      S(e, t, r.id, !1), g(e, t, r.id, e => {
        e.muted = !1, e.mute_config = null;
      });
  }
}), t;
  }(I)), m.push(... function(e) {
let t = [],
  n = [],
  r = [];
return e.forEach(e => {
  if (d.ZP.isChannelMuted(e.guild_id, e.id))
    return;
  let t = d.ZP.getChannelMessageNotifications(e.guild_id, e.id);
  t === p.bL.ALL_MESSAGES ? n.push(e) : t === p.bL.ONLY_MENTIONS && r.push(e);
}), n.length > 0 && t.push({
  label: 'Setting '.concat(n.length, ' channels to white-dot since they were explicitly All Messages'),
  debug: n.map(e => '\n    - #'.concat(e.name)).join(''),
  apply: (e, t) => {
    for (let r of n)
      S(e, t, r.id, !0);
  }
}), r.length > 0 && t.push({
  label: 'Setting '.concat(r.length, ' channels to grey-dot since they were explicitly Mentions Only'),
  debug: r.map(e => '\n    - #'.concat(e.name)).join(''),
  apply: (e, t) => {
    for (let n of r)
      S(e, t, n.id, !1);
  }
}), t;
  }(I)), l.Z.hasConsented(p.pjP.PERSONALIZATION) ? m.push(... function(e, t, n, r, a) {
if (d.ZP.isMuted(e.id) && !d.ZP.isTemporarilyMuted(e.id))
  return [];
let o = new Set(t.map(e => e.id)),
  s = r.filter(e => o.has(e.channel_id)),
  l = i().keyBy(s, 'channel_id'),
  u = Math.max(n.messages === h.XR.High ? a.frecency.yearMinOpensLargeServer : a.frecency.yearMinOpensSmallServer, s.reduce((e, t) => {
    var n;
    return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0);
  }, 0) * a.frecency.totalOpensPercent),
  c = Math.max(a.frecency.monthMinOpens, s.reduce((e, t) => {
    var n;
    return e + Number(null !== (n = t.num_three_month_opens) && void 0 !== n ? n : 0);
  }, 0) * a.frecency.totalOpensPercent),
  _ = [],
  E = [];
t.forEach(e => {
  var t, n, r, i;
  let a = null !== (t = l[e.id]) && void 0 !== t ? t : {};
  Number(null !== (n = a.num_year_opens) && void 0 !== n ? n : 0) > u || Number(null !== (r = a.num_month_opens) && void 0 !== r ? r : 0) > c ? _.push(e) : Number(null !== (i = a.num_three_month_opens) && void 0 !== i ? i : 0) > 2 && E.push(e);
});
let f = [];
return _.length > 0 && f.push({
  label: 'Setting '.concat(_.length, ' channels to white-dot since they are recent and frequently viewed'),
  debug: _.map(e => '\n    - #'.concat(e.name, ' (').concat(JSON.stringify(l[e.id]), ')')).join(''),
  apply: (e, t) => {
    for (let n of _)
      S(e, t, n.id, !0);
  }
}), E.length > 0 && f.push({
  label: 'NOT setting '.concat(E.length, ' channels to white-dot because they were only viewed a little.'),
  debug: E.map(e => '\n    - #'.concat(e.name, ' (').concat(JSON.stringify(l[e.id]), ')')).join('')
}), f;
  }(e, I, n, r, E)) : m.push(... function(e, t) {
if (d.ZP.isMuted(e.id) && !d.ZP.isTemporarilyMuted(e.id))
  return [];
let n = [],
  r = new Set(t.map(e => e.id)),
  i = Date.now() - _.Z.Millis.DAYS_30,
  o = u.Z.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof a.Sf && r.has(e.id)).filter(e => {
    var t, n;
    let r = null !== (n = null === (t = u.Z.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
    return 0 !== r.length && r[r.length - 1] >= i;
  });
return o.length > 0 && n.push({
  label: 'Setting '.concat(o.length, ' channels to white-dot since they are recent and frequently viewed'),
  debug: o.map(e => '\n    - #'.concat(e.name)).join(''),
  apply: (e, t) => {
    for (let n of o)
      S(e, t, n.id, !0);
  }
}), n;
  }(e, I)), m.filter(f.lm);
}

function T(e, t, n) {
  var r, i;
  e.flags = (0, E.mB)(null !== (i = null !== (r = e.flags) && void 0 !== r ? r : t.flags) && void 0 !== i ? i : 0, m.vc.UNREADS_ALL_MESSAGES, n), e.flags = (0, E.mB)(e.flags, m.vc.UNREADS_ONLY_MENTIONS, !n);
}

function g(e, t, n, r) {
  var a, o, s, l;
  let u = null !== (s = null === (a = e.channel_overrides) || void 0 === a ? void 0 : a[n]) && void 0 !== s ? s : {};
  r(u, null !== (l = null === (o = t.channel_overrides) || void 0 === o ? void 0 : o[n]) && void 0 !== l ? l : {}), !i().isEmpty(u) && (null == e.channel_overrides && (e.channel_overrides = {}), e.channel_overrides[n] = u);
}

function S(e, t, n, r) {
  g(e, t, n, (e, t) => {
var n, i;
e.flags = (0, E.mB)(null !== (i = null !== (n = e.flags) && void 0 !== n ? n : t.flags) && void 0 !== i ? i : 0, m.ic.UNREADS_ALL_MESSAGES, r), e.flags = (0, E.mB)(e.flags, m.ic.UNREADS_ONLY_MENTIONS, !r);
  });
}