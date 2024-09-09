n.d(t, {
    dt: function () {
        return _;
    },
    eo: function () {
        return f;
    }
});
var i = n(735250),
    l = n(470079),
    r = n(884338),
    a = n(540059),
    s = n(934415),
    o = n(540126),
    c = n(700026),
    u = n(301342),
    d = n(327530),
    h = n(756901);
let p = l.memo(function (e) {
    let { guildChannels: t, guildChannelsVersion: n } = e,
        r = l.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
    return null == r ? null : (0, i.jsx)(u.Qo, { category: r });
});
function _(e) {
    let { sectionIndex: t, guildChannels: n, voiceStates: i, selectedChannelId: l, selectedVoiceChannelId: r, optInEnabled: a } = e;
    if (t === n.voiceChannelsSectionNumber) return 44;
    let { hasDivider: s, canHaveVoiceSummary: u } = (0, c.ie)(n, a, t),
        h = s ? d.QP : 0;
    if (!u || t === o.wZ) return h;
    let p = n.getNamedCategoryFromSection(t);
    return null == p
        ? h
        : (0, c.V5)({
                category: p,
                selectedChannelId: l,
                selectedVoiceChannelId: r,
                voiceStates: i
            })
          ? d.Vf + h
          : h;
}
function f(e, t, n) {
    if (e === t.voiceChannelsSectionNumber) return 'voice-channels-button';
    let { hasDivider: i, canHaveVoiceSummary: l } = (0, c.ie)(t, n, e);
    return 'section-footer-'
        .concat(e)
        .concat(i ? '-divider' : '')
        .concat(l ? '-voice-summary' : '');
}
t.ZP = l.memo(function (e) {
    let { sectionIndex: t, guildChannels: n, guildChannelsVersion: u, voiceStates: d, guildId: _, selectedChannelId: f, selectedVoiceChannelId: g, optInEnabled: m } = e,
        { hasDivider: C, canHaveVoiceSummary: I } = l.useMemo(() => (0, c.ie)(n, m, t), [n, m, t, u]),
        E = l.useMemo(() => (t === o.wZ ? null : n.getCategoryFromSection(t)), [n, t, u]),
        N = l.useMemo(
            () =>
                null != E && E.isCollapsed
                    ? (0, s.c4)({
                          channels: E.getChannelRecords(),
                          selectedChannelId: f,
                          selectedVoiceChannelId: g,
                          voiceStates: d
                      })
                    : [],
            [E, f, g, d]
        ),
        x = (0, a.Q)('ChannelListSectionFooter');
    if (t === n.voiceChannelsSectionNumber)
        return (0, i.jsx)(p, {
            guildChannels: n,
            guildChannelsVersion: u
        });
    let S = C ? (0, i.jsx)('div', { className: h.sectionDivider }) : null;
    return I && 0 !== N.length
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)('div', {
                      className: h.voiceUserSummary,
                      children: (0, i.jsx)(r.Z, {
                          renderIcon: !0,
                          users: N,
                          max: 8,
                          showUserPopout: !0,
                          guildId: _
                      })
                  }),
                  S
              ]
          })
        : x
          ? null
          : S;
});
