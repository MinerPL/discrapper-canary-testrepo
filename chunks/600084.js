n.d(t, {
    Z: function () {
        return O;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    l = n(481060),
    r = n(570140),
    o = n(933557),
    c = n(605436),
    u = n(736052),
    d = n(878857),
    h = n(621853),
    m = n(484459),
    p = n(131704),
    _ = n(984933),
    f = n(496675),
    E = n(594174),
    g = n(51144),
    C = n(7782),
    I = n(967128),
    x = n(320781),
    T = n(269203),
    N = n(753898),
    v = n(734386),
    S = n(184279),
    Z = n(438306),
    A = n(544142),
    M = n(128557),
    b = n(981631),
    R = n(176505),
    j = n(689938),
    L = n(224499);
function P(e) {
    let { canManageRoles: t, channel: n } = e,
        a = t && (0, c.Yk)(n),
        l = (0, s.e7)([_.ZP], () => null != n.guild_id && n === _.ZP.getDefaultChannel(n.guild_id), [n]);
    if ((0, u.Z)(n.id)) return null;
    if (n.isForumPost()) return (0, i.jsx)(x.Z, { channel: n });
    if (p.Ec.has(n.type)) return (0, i.jsx)(A.Z, { channel: n });
    else if (l) return (0, i.jsx)(M.Z, { channel: n });
    else if (a) return (0, i.jsx)(v.Z, { channel: n });
    return (0, i.jsx)(Z.Z, { channel: n });
}
function O(e) {
    var t;
    let { channel: n, showingBanner: c } = e,
        u = (0, o.ZP)(n),
        { type: p } = n,
        _ = (0, s.e7)([E.default], () => (n.isPrivate() ? E.default.getUser(n.getRecipientId()) : null)),
        x = g.ZP.useUserTag(_),
        { canManageRoles: v, canReadMessageHistory: Z } = (0, s.cj)([f.Z], () => ({
            canManageRoles: f.Z.can(b.Plq.MANAGE_ROLES, n),
            canReadMessageHistory: f.Z.can(b.Plq.READ_MESSAGE_HISTORY, n)
        })),
        A = (0, s.e7)([h.Z], () => (p === b.d4z.DM ? h.Z.getMutualGuilds(n.getRecipientId()) : null), [n, p]),
        { systemDMRedesignEnabled: M } = d.Z.useExperiment({ location: 'bf1a4f_1' }, { autoTrackExposure: null !== (t = n.isSystemDM()) && void 0 !== t && t });
    if (
        (a.useEffect(() => {
            p === b.d4z.DM && null == A && null != _ && r.Z.wait(() => (0, m.Z)(n.getRecipientId(), _.getAvatarURL(null, 80), { withMutualGuilds: !0 }));
        }, [A, p, n, _]),
        n.isSystemDM())
    )
        return M
            ? (0, i.jsx)(S.Z, { channel: n })
            : (0, i.jsx)(N.Z, {
                  channel: n,
                  children: j.Z.Messages.SYSTEM_DM_EMPTY_MESSAGE
              });
    if (p === b.d4z.DM)
        return (0, i.jsxs)(N.Z, {
            channel: n,
            user: _,
            children: [
                null != _ &&
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-xl/medium',
                        className: L.marginBottom20,
                        children: x
                    }),
                j.Z.Messages.BEGINNING_DM.format({ username: u }),
                (0, i.jsx)(C.Z, {
                    userId: n.getRecipientId(),
                    channel: n,
                    showingBanner: c
                })
            ]
        });
    if (n.isMultiUserDM())
        return n.isManaged()
            ? (0, i.jsxs)(I.ZP, {
                  channelId: n.id,
                  children: [(0, i.jsx)(I.Ot, { children: j.Z.Messages.BEGINNING_CHANNEL_WELCOME.format({ channelName: u }) }), (0, i.jsx)(I.jz, { children: j.Z.Messages.BEGINNING_GROUP_DM_MANAGED })]
              })
            : n.hasFlag(R.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
              ? (0, i.jsx)(T.Z, { channel: n })
              : (0, i.jsx)(N.Z, {
                    channel: n,
                    children: j.Z.Messages.BEGINNING_GROUP_DM.format({ name: u })
                });
    return Z
        ? (0, i.jsx)(P, {
              channel: n,
              canManageRoles: v
          })
        : (0, i.jsx)(I.ZP, {
              channelId: n.id,
              children: (0, i.jsx)(I.jz, { children: j.Z.Messages.BEGINNING_CHANNEL_NO_HISTORY.format({ channelName: u }) })
          });
}
