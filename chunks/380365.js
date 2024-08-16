var n = l(735250),
    s = l(470079),
    i = l(442837),
    o = l(481060),
    t = l(271383),
    r = l(430824),
    d = l(594174),
    c = l(5192),
    u = l(645896),
    _ = l(979264),
    m = l(308083),
    v = l(689938),
    x = l(748988);
a.Z = s.memo(function (e) {
    var a, l, s, C, g, A;
    let { guildId: N, isTagAdopted: h, onChangeUseTag: S } = e,
        T = (0, u.Cc)(N),
        f = (0, i.e7)([r.Z], () => r.Z.getGuild(N)),
        L = null !== (C = null == T ? void 0 : null === (a = T.badge) || void 0 === a ? void 0 : a.imageHash) && void 0 !== C ? C : null == f ? void 0 : null === (l = f.clan) || void 0 === l ? void 0 : l.badge,
        M = null !== (g = null == T ? void 0 : T.tag) && void 0 !== g ? g : null == f ? void 0 : null === (s = f.clan) || void 0 === s ? void 0 : s.tag,
        E = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
        j = (0, i.e7)([t.ZP], () => (null != E ? t.ZP.getMember(N, E.id) : null));
    return null == f || null == E || null == j || null == L
        ? null
        : (0, n.jsxs)('div', {
              className: x.previewSection,
              children: [
                  (0, n.jsxs)('div', {
                      className: x.chatPreview,
                      children: [
                          (0, n.jsx)(o.Avatar, {
                              src: E.getAvatarURL(N, 40),
                              size: o.AvatarSizes.SIZE_40,
                              'aria-hidden': !0
                          }),
                          (0, n.jsxs)('div', {
                              className: x.previewText,
                              children: [
                                  (0, n.jsxs)('div', {
                                      className: x.userName,
                                      children: [
                                          (0, n.jsx)(o.NameWithRole, {
                                              className: x.userName,
                                              name: c.ZP.getName(N, null, E),
                                              color: null !== (A = j.colorString) && void 0 !== A ? A : void 0
                                          }),
                                          h &&
                                              (0, n.jsx)(_.aG, {
                                                  guildId: N,
                                                  clanBadge: L,
                                                  clanTag: M,
                                                  badgeSize: m.NC.SIZE_12,
                                                  textVariant: 'text-xs/semibold'
                                              })
                                      ]
                                  }),
                                  (0, n.jsx)('div', {
                                      className: x.fakeMessage,
                                      style: { width: '80%' }
                                  }),
                                  (0, n.jsx)('div', {
                                      className: x.fakeMessage,
                                      style: { width: '50%' }
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, n.jsx)('div', { className: x.divider }),
                  (0, n.jsxs)('div', {
                      className: x.settingSection,
                      children: [
                          (0, n.jsxs)('div', {
                              children: [
                                  (0, n.jsx)(o.Text, {
                                      variant: 'text-md/normal',
                                      color: 'header-primary',
                                      children: v.Z.Messages.CLAN_SUCCESS_USE_TAG_TEXT
                                  }),
                                  (0, n.jsx)(o.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-muted',
                                      children: v.Z.Messages.CLAN_SUCCESS_USE_TAG_HELP
                                  })
                              ]
                          }),
                          (0, n.jsx)(o.Switch, {
                              onChange: S,
                              checked: h
                          })
                      ]
                  })
              ]
          });
});
