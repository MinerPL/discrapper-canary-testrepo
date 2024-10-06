n.d(t, {
    l: function () {
        return h;
    }
});
var i = n(735250),
    s = n(470079),
    o = n(481060),
    a = n(100527),
    l = n(906732),
    r = n(184301),
    c = n(347475),
    d = n(592125),
    u = n(91047);
function h(e) {
    var t, n;
    let { user: h, channelId: m, guildId: p, messageId: f, stopPropagation: g = !1, ariaLabel: _ } = e,
        { analyticsLocations: T } = (0, l.ZP)(a.Z.USERNAME);
    let v =
        ((t = h),
        (n = m),
        s.useCallback(
            (e) => {
                let i = d.Z.getChannel(n);
                null != i && null != t && (0, u.Pv)(e, t, i);
            },
            [t, n]
        ));
    return s.useCallback(
        (e) => (t, n) => {
            let s = (n) =>
                    (0, i.jsx)(o.NameWithRoleAnchor, {
                        ...(null != n ? n : {}),
                        onContextMenu: v,
                        name: t,
                        color: null == e ? void 0 : e.colorString,
                        roleName: null == e ? void 0 : e.colorRoleName,
                        'aria-label': _
                    }),
                a = (e) => (t) => {
                    g && t.stopPropagation(), e(t);
                };
            return (0, i.jsx)(
                l.Gt,
                {
                    value: T,
                    children:
                        null != h
                            ? (0, i.jsx)(o.Popout, {
                                  position: 'right',
                                  preload: () =>
                                      (0, r.Z)(h.id, h.getAvatarURL(p, 80), {
                                          guildId: p,
                                          channelId: m
                                      }),
                                  renderPopout: (t) =>
                                      (0, i.jsx)(c.Z, {
                                          ...t,
                                          userId: h.id,
                                          guildId: p,
                                          channelId: m,
                                          messageId: f,
                                          roleId: null == e ? void 0 : e.colorRoleId
                                      }),
                                  children: (e) => {
                                      let { onClick: t, ...n } = e;
                                      return s({
                                          onClick: a(t),
                                          ...n
                                      });
                                  }
                              })
                            : s(void 0)
                },
                n
            );
        },
        [T, h, m, p, f, v, g, _]
    );
}
