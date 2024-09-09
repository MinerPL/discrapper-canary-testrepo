t.r(n);
var a = t(735250);
t(470079);
var l = t(481060),
    i = t(493683),
    r = t(239091),
    u = t(883385),
    o = t(108843),
    s = t(947440),
    d = t(100527),
    c = t(299206),
    _ = t(895563),
    M = t(212205),
    I = t(62420),
    f = t(122074),
    E = t(314897),
    N = t(858687),
    C = t(461535),
    h = t(776568),
    T = t(981631),
    x = t(689938);
n.default = (0, o.Z)(
    (0, u.Z)(
        function (e) {
            let { channel: n, selected: u, onSelect: o } = e,
                d = n.isOwner(E.default.getId()),
                O = (0, C.Z)(n),
                m = (0, h.ZP)(n),
                A = (0, f.Uf)(T.aIL, n.id, 'top'),
                g = (0, N.Z)(n, u),
                Z = (0, c.Z)({
                    id: n.id,
                    label: x.Z.Messages.COPY_ID_CHANNEL
                }),
                v = (0, s.Z)(n),
                U = (0, _.l)(n),
                S = (0, _.P)(n),
                p = (0, M.Z)(n),
                j = (0, I.Z)(n);
            return null == n || n.isManaged()
                ? null
                : (0, a.jsxs)(l.Menu, {
                      navId: 'gdm-context',
                      'aria-label': x.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                      onClose: r.Zy,
                      onSelect: o,
                      children: [
                          (0, a.jsx)(l.MenuGroup, { children: O }),
                          (0, a.jsxs)(l.MenuGroup, {
                              children: [U, p, j]
                          }),
                          (0, a.jsxs)(l.MenuGroup, {
                              children: [
                                  d
                                      ? (0, a.jsx)(l.MenuItem, {
                                            id: 'instant-invites',
                                            label: x.Z.Messages.INSTANT_INVITES,
                                            action: () =>
                                                (0, l.openModalLazy)(async () => {
                                                    let { default: e } = await t.e('97573').then(t.bind(t, 892382));
                                                    return (t) =>
                                                        (0, a.jsx)(e, {
                                                            channelId: n.id,
                                                            ...t
                                                        });
                                                })
                                        })
                                      : null,
                                  (0, a.jsx)(l.MenuControlItem, {
                                      id: 'change-icon',
                                      showDefaultFocus: !0,
                                      control: (e, t) =>
                                          (0, a.jsx)(l.MenuImageUploadControl, {
                                              onChange: (t) => {
                                                  var a;
                                                  i.Z.setIcon(n.id, t), null === (a = e.onClose) || void 0 === a || a.call(e);
                                              },
                                              multiple: !1,
                                              'aria-label': x.Z.Messages.CHANGE_ICON,
                                              ...e,
                                              ref: t
                                          }),
                                      label: x.Z.Messages.CHANGE_ICON
                                  }),
                                  null != n.icon
                                      ? (0, a.jsx)(l.MenuItem, {
                                            id: 'remove-icon',
                                            label: x.Z.Messages.REMOVE_ICON,
                                            action: () => i.Z.setIcon(n.id, null)
                                        })
                                      : null
                              ]
                          }),
                          (0, a.jsx)(l.MenuGroup, { children: v }),
                          (0, a.jsxs)(l.MenuGroup, {
                              children: [m, A]
                          }),
                          (0, a.jsx)(l.MenuGroup, { children: g }),
                          (0, a.jsx)(l.MenuGroup, { children: S }),
                          (0, a.jsx)(l.MenuGroup, { children: Z })
                      ]
                  });
        },
        { object: T.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.GROUP_DM_MENU]
);
