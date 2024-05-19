"use strict";
n.r(t), n.d(t, {
  getChannelListSectionFooterHeight: function() {
    return h
  },
  getKeyForSectionFooter: function() {
    return m
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("602623"),
  i = n("934415"),
  r = n("540126"),
  o = n("700026"),
  u = n("301342"),
  d = n("327530"),
  c = n("333960");
let f = a.memo(function(e) {
  let {
    guildChannels: t,
    guildChannelsVersion: n
  } = e, s = a.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
  return null == s ? null : (0, l.jsx)(u.VoiceChannelCategoryButton, {
    category: s
  })
});

function h(e) {
  let {
    sectionIndex: t,
    guildChannels: n,
    voiceStates: l,
    selectedChannelId: a,
    selectedVoiceChannelId: s,
    optInEnabled: i
  } = e;
  if (t === n.voiceChannelsSectionNumber) return 44;
  let {
    hasDivider: u,
    canHaveVoiceSummary: c
  } = (0, o.getSectionFooterConfig)(n, i, t), f = u ? d.HEIGHT_SECTION_DIVIDER : 0;
  if (!c || t === r.SECTION_INDEX_COMMUNITY) return f;
  let h = n.getNamedCategoryFromSection(t);
  return null == h ? f : (0, o.isSectionFooterWithActiveVoiceChannels)({
    category: h,
    selectedChannelId: a,
    selectedVoiceChannelId: s,
    voiceStates: l
  }) ? d.HEIGHT_CHANNEL + f : f
}

function m(e, t, n) {
  if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
  let {
    hasDivider: l,
    canHaveVoiceSummary: a
  } = (0, o.getSectionFooterConfig)(t, n, e);
  return "section-footer-".concat(e).concat(l ? "-divider" : "").concat(a ? "-voice-summary" : "")
}
t.default = a.memo(function(e) {
  let {
    sectionIndex: t,
    guildChannels: n,
    guildChannelsVersion: u,
    voiceStates: d,
    guildId: h,
    selectedChannelId: m,
    selectedVoiceChannelId: C,
    optInEnabled: p
  } = e, {
    hasDivider: g,
    canHaveVoiceSummary: E
  } = a.useMemo(() => (0, o.getSectionFooterConfig)(n, p, t), [n, p, t, u]), _ = a.useMemo(() => t === r.SECTION_INDEX_COMMUNITY ? null : n.getCategoryFromSection(t), [n, t, u]), S = a.useMemo(() => null != _ && _.isCollapsed ? (0, i.computeSummarizedVoiceUsers)({
    channels: _.getChannelRecords(),
    selectedChannelId: m,
    selectedVoiceChannelId: C,
    voiceStates: d
  }) : [], [_, m, C, d]);
  if (t === n.voiceChannelsSectionNumber) return (0, l.jsx)(f, {
    guildChannels: n,
    guildChannelsVersion: u
  });
  let I = g ? (0, l.jsx)("div", {
    className: c.sectionDivider
  }) : null;
  return E && 0 !== S.length ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: c.voiceUserSummary,
      children: (0, l.jsx)(s.default, {
        renderIcon: !0,
        users: S,
        max: 8,
        showUserPopout: !0,
        guildId: h
      })
    }), I]
  }) : I
})