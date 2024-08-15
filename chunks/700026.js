n.d(t, {
  V5: function() {
return c;
  },
  ie: function() {
return o;
  }
});
var i = n(680089),
  l = n(496675),
  r = n(540126),
  a = n(443063),
  s = n(981631);

function o(e, t, n) {
  var i, l, s, o, c;
  return {
hasDivider: (i = e, l = t, ! function(e, t) {
  if (t === r.wZ) {
    let t = e.getGuildActionSection().getRows();
    return 1 === t.length && t[0] === a.z.GUILD_PREMIUM_PROGRESS_BAR || e.getGuildActionSection().isEmpty();
  }
  return 0 === e.getSections(!1)[t];
}(i, s = n) && (s === r.wZ || !!l && (s === r.p2 || s !== r.wd && (s === i.recentsSectionNumber || (i.voiceChannelsSectionNumber, !1))))),
canHaveVoiceSummary: (o = e, !((c = n) === r.wZ || c === r.p2 || c === r.wd || c === o.recentsSectionNumber || c === o.voiceChannelsSectionNumber))
  };
}

function c(e) {
  let {
category: t,
voiceStates: n,
selectedChannelId: r,
selectedVoiceChannelId: a
  } = e;
  return function(e) {
let {
  category: t,
  voiceStates: n,
  selectedChannelId: r,
  selectedVoiceChannelId: a
} = e;
return !0 !== i.Z.isCollapsed(t.record.id) ? [] : t.getChannelRecords().filter(e => {
  var t;
  if (!l.Z.can(s.Plq.VIEW_CHANNEL, e))
    return !1;
  let i = null !== (t = n[e.id]) && void 0 !== t ? t : [];
  return e.id !== a && e.id !== r && i.length > 0;
});
  }({
category: t,
selectedChannelId: r,
selectedVoiceChannelId: a,
voiceStates: n
  }).length > 0;
}