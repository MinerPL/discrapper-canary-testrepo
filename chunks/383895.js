var a = t(735250),
    r = t(470079),
    s = t(120356),
    i = t.n(s),
    o = t(442837),
    l = t(481060),
    c = t(178762),
    d = t(91140),
    u = t(297781),
    _ = t(592125),
    E = t(944486),
    m = t(594174),
    I = t(5192),
    A = t(810568),
    p = t(689938),
    g = t(501345),
    f = t(51527);
n.Z = (e) => {
    let { entry: n, viewId: t, officialGuildId: s, onClose: T } = e,
        O = (0, o.e7)([E.Z, _.Z], () => _.Z.getChannel(E.Z.getChannelId())),
        N = (0, o.e7)([m.default], () => m.default.getUser(n.author_id)),
        { nick: R, avatar: h } = r.useMemo(() => {
            let e = null == N ? void 0 : N.getAvatarURL(null == O ? void 0 : O.guild_id, 48, !1);
            return {
                nick: I.ZP.getName(null == O ? void 0 : O.guild_id, null == O ? void 0 : O.id, N),
                avatar: e
            };
        }, [N, O]);
    return null == N
        ? null
        : (0, a.jsx)(l.Popout, {
              position: 'right',
              renderPopout: (e) => {
                  let { closePopout: r, updatePosition: i } = e;
                  return (0, a.jsx)(c.J, {
                      entry: n,
                      closePopout: r,
                      updatePopoutPosition: i,
                      onReaction: () => {
                          (0, A.UE)({
                              action: A.as.SendMessageUser,
                              applicationId: n.extra.application_id,
                              gameName: n.extra.game_name,
                              recipientUserId: n.author_id,
                              viewId: t,
                              officialGuildId: s
                          }),
                              T(),
                              r();
                      },
                      onUserPopoutClosed: () => r(),
                      disableGameProfileLinks: !0
                  });
              },
              positionKey: 'game-profile-entry-'.concat(n.id),
              onRequestOpen: () => {
                  (0, A.UE)({
                      action: A.as.ClickMessageUser,
                      applicationId: n.extra.application_id,
                      gameName: n.extra.game_name,
                      recipientUserId: n.author_id,
                      viewId: t,
                      officialGuildId: s
                  });
              },
              children: (e) =>
                  (0, a.jsx)(l.Clickable, {
                      ...e,
                      className: g.profileEntryCard,
                      children: (0, a.jsx)(l.FocusRing, {
                          offset: {
                              top: 4,
                              bottom: 4,
                              left: 4,
                              right: 4
                          },
                          children: (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)('img', {
                                      className: g.avatar,
                                      src: h,
                                      alt: p.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format({ userName: R })
                                  }),
                                  (0, a.jsx)('div', {
                                      className: i()(g.playerInfo),
                                      children: (0, a.jsxs)('div', {
                                          className: i()(f.column, f.gapXs),
                                          children: [
                                              (0, a.jsx)(l.Text, {
                                                  variant: 'text-md/medium',
                                                  color: 'text-primary',
                                                  lineClamp: 1,
                                                  children: R
                                              }),
                                              (0, a.jsx)(u.Gk, {
                                                  location: u.Gt.GAME_PROFILE,
                                                  children: d.W.map((e, t) => (0, a.jsx)(e, { entry: n }, t))
                                              })
                                          ]
                                      })
                                  }),
                                  (0, a.jsx)('div', {
                                      className: g.reactions,
                                      children: (0, a.jsx)(l.ArrowAngleLeftUpIcon, { size: 'sm' })
                                  })
                              ]
                          })
                      })
                  })
          });
};
