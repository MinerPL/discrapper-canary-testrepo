n.d(t, {
    Z: function () {
        return P;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(392711),
    o = n.n(r),
    c = n(149765),
    u = n(866442),
    d = n(442837),
    h = n(481060),
    m = n(787014),
    p = n(911969),
    _ = n(933557),
    f = n(605436),
    E = n(185413),
    g = n(42311),
    C = n(626786),
    I = n(434404),
    x = n(454585),
    T = n(430824),
    N = n(496675),
    v = n(594174),
    S = n(700785),
    Z = n(51144),
    A = n(396769),
    M = n(967128),
    b = n(318374),
    R = n(981631),
    j = n(689938),
    L = n(123197);
function P(e) {
    let { channel: t } = e,
        [n, s] = a.useState(!1),
        r = (0, _.ZP)(t, !0),
        P = t.guild_id,
        O = (0, d.e7)([T.Z], () => (null != P ? T.Z.getRoles(P) : void 0)),
        y = (0, d.e7)([v.default, T.Z], () => {
            var e;
            return v.default.getUser(null === (e = T.Z.getGuild(P)) || void 0 === e ? void 0 : e.ownerId);
        }),
        D = a.useMemo(
            () =>
                null != P
                    ? o()(O)
                          .sortBy((e) => -e.position)
                          .filter((e) => !(0, f.pM)(P, e.id))
                          .value()
                    : [],
            [P, O]
        ),
        k = a.useMemo(
            () =>
                o()(D)
                    .filter((e) => {
                        if (null == P) return !1;
                        let n = S.I0({
                            forceRoles: { [e.id]: e },
                            context: t
                        });
                        return c.e$(n, R.Plq.ADMINISTRATOR) || c.e$(n, R.Plq.VIEW_CHANNEL);
                    })
                    .value(),
            [t, P, D]
        ),
        U = (0, d.Wu)(
            [v.default],
            () => {
                let e = {};
                for (let n of (null != y && (e[y.id] = y), Object.values(t.permissionOverwrites))) {
                    if (n.type !== p.BN.MEMBER || null != e[n.id]) continue;
                    let t = v.default.getUser(n.id);
                    null != t && (e[t.id] = t);
                }
                return o()(e)
                    .filter((e) => {
                        var n;
                        let i = S.BT({
                                permission: R.Plq.ADMINISTRATOR,
                                user: e,
                                context: t
                            }),
                            a = null !== (n = t.permissionOverwrites[e.id]) && void 0 !== n ? n : S.Hn,
                            s = c.e$(a.allow, R.Plq.VIEW_CHANNEL);
                        return i || s;
                    })
                    .value();
            },
            [t, y]
        ),
        w = N.Z.can(R.Plq.MANAGE_CHANNELS, t) || N.Z.can(R.Plq.MANAGE_ROLES, t);
    function B() {
        m.ZP.open(t.id);
    }
    let H = a.useCallback(() => s(!1), []);
    return (0, i.jsxs)(M.ZP, {
        channelId: t.id,
        children: [
            (0, i.jsx)(M.Kq, {
                locked: !0,
                channelType: t.type
            }),
            (0, i.jsx)(M.Ot, { children: j.Z.Messages.BEGINNING_CHANNEL_WELCOME.format({ channelName: r }) }),
            (0, i.jsx)(M.jz, {
                children: j.Z.Messages.BEGINNING_ROLE_REQUIRED_CHANNEL_DESCRIPTION.format({
                    channelName: r,
                    topicHook: () => x.Z.parseTopic(t.topic, !0, { channelId: t.id })
                })
            }),
            w
                ? (0, i.jsxs)('div', {
                      className: L.channelSettingButtons,
                      children: [
                          (0, i.jsx)(A.Z, {
                              label: j.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE,
                              onClick: () => s(!0),
                              icon: (0, i.jsx)(h.GroupIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          }),
                          (0, i.jsx)(A.Z, {
                              label: j.Z.Messages.EDIT_CHANNEL,
                              onClick: B,
                              icon: (0, i.jsx)(h.PencilIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                      ]
                  })
                : null,
            (0, i.jsxs)('div', {
                className: L.members,
                children: [
                    (function () {
                        if (1 !== U.length || k.length > 0)
                            return (0, i.jsx)(b.Z, {
                                guildId: t.guild_id,
                                className: L.avatars,
                                maxUsers: 5,
                                users: U
                            });
                        let e = U[0],
                            n = Z.ZP.getName(e);
                        return (0, i.jsxs)('div', {
                            className: L.avatars,
                            children: [
                                (0, i.jsx)(h.Avatar, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    'aria-label': n,
                                    size: h.AvatarSizes.SIZE_24
                                }),
                                (0, i.jsx)(h.Text, {
                                    tag: 'span',
                                    className: L.singleUserName,
                                    variant: 'text-md/normal',
                                    children: n
                                }),
                                '\xA0',
                                (0, i.jsx)(h.Text, {
                                    tag: 'span',
                                    variant: 'text-md/normal',
                                    color: 'text-muted',
                                    children: j.Z.Messages.ROLE_REQUIRED_SINGLE_USER_MESSAGE
                                })
                            ]
                        });
                    })(),
                    k.map((e, n) => {
                        var a, s;
                        let r = null !== (s = e.colorString) && void 0 !== s ? s : (0, u.Rf)(R.p6O),
                            o = (null === (a = e.tags) || void 0 === a ? void 0 : a.guild_connections) !== void 0;
                        return w
                            ? (0, i.jsx)(
                                  g.Z,
                                  {
                                      className: l()(L.role, { [L.last]: n === k.length - 1 }),
                                      roleName: e.name,
                                      roleColor: r,
                                      disabled: !w,
                                      verified: o,
                                      onClick: () => {
                                          I.Z.open(t.guild_id, R.pNK.MEMBERS), I.Z.selectRole(e.id);
                                      }
                                  },
                                  e.id
                              )
                            : (0, i.jsx)(
                                  C.Z,
                                  {
                                      className: l()(L.role, { [L.last]: n === k.length - 1 }),
                                      roleName: e.name,
                                      roleColor: r,
                                      verified: o
                                  },
                                  e.id
                              );
                    })
                ]
            }),
            n
                ? (0, i.jsx)(h.Modal, {
                      renderModal: (e) =>
                          (0, i.jsx)(E.default, {
                              ...e,
                              onClose: () => (H(), e.onClose()),
                              channelId: t.id
                          }),
                      onCloseRequest: () => s(!1)
                  })
                : null
        ]
    });
}
