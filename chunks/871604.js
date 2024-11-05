n.d(t, {
    Z: function () {
        return y;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(580587),
    l = n(499254),
    u = n(827498),
    c = n(311819),
    d = n(541716),
    f = n(433355),
    _ = n(592125),
    h = n(944486),
    p = n(626135),
    m = n(572004),
    g = n(591759),
    E = n(135431),
    v = n(621853),
    I = n(429974),
    S = n(475413),
    T = n(981631),
    b = n(388032);
function y(e) {
    let { user: t, closePopout: n, ...y } = e,
        A = (0, a.e7)([v.Z], () => {
            var e;
            return null === (e = v.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        N = (0, a.e7)([h.Z], () => h.Z.getChannelId()),
        C = (0, a.e7)([_.Z], () => {
            var e;
            return null === (e = _.Z.getChannel(N)) || void 0 === e ? void 0 : e.guild_id;
        }),
        R = (0, o.Z)({ channelId: null != N ? N : void 0 }),
        O = t.id,
        D = i.useCallback(() => {
            if (null != A) {
                if (R) {
                    let e = h.Z.getCurrentlySelectedChannelId(),
                        t = _.Z.getChannel(e),
                        r = null != f.ZP.getSidebarState(e) || (null == t ? void 0 : t.isGuildVocal()) ? d.I.SIDEBAR : d.I.NORMAL;
                    l.__(u._b.TEXT, r, { applicationId: A.id }), (0, s.closeModal)((0, I.z)(O, C)), null == n || n(), p.default.track(T.rMx.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, { application_id: A.id });
                } else
                    (0, E.LO)({
                        applicationId: A.id,
                        ...A
                    });
            }
        }, [R, A, O, C, n]),
        L = R ? b.intl.string(b.t['Cia+Aw']) : b.intl.string(b.t.NgXl3N);
    if (null == A || !(0, E.Eb)(A)) return null;
    let { customInstallUrl: x } = A,
        w = null == x || g.Z.isDiscordUrl(x) ? s.PlusSmallIcon : s.LinkExternalSmallIcon,
        M = R ? void 0 : w;
    return m.wS
        ? (0, r.jsx)(s.Popout, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(s.Menu, {
                      navId: 'user-bot-profile-add-app',
                      onClose: t,
                      'aria-label': b.intl.string(b.t.dbkxVl),
                      onSelect: void 0,
                      children: (0, r.jsx)(s.MenuGroup, {
                          children: (0, r.jsx)(s.MenuItem, {
                              id: 'copy',
                              label: b.intl.string(b.t.XWDiho),
                              action: () => (0, m.JG)((0, c.J)(A))
                          })
                      })
                  });
              },
              children: (e) => {
                  let { onClick: t, ...n } = e;
                  return (0, r.jsx)(S.tG, {
                      action: 'PRESS_ADD_APP',
                      text: L,
                      icon: M,
                      onContextMenu: t,
                      onClick: D,
                      ...n,
                      ...y
                  });
              }
          })
        : (0, r.jsx)(S.tG, {
              action: 'PRESS_ADD_APP',
              text: L,
              icon: M,
              onClick: D,
              ...y
          });
}
