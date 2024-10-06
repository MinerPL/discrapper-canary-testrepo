n.d(t, {
    Z: function () {
        return y;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(442837),
    l = n(481060),
    r = n(570140),
    o = n(933557),
    c = n(605436),
    u = n(736052),
    d = n(189156),
    h = n(878857),
    p = n(621853),
    m = n(484459),
    _ = n(131704),
    f = n(984933),
    E = n(496675),
    g = n(594174),
    C = n(51144),
    I = n(7782),
    T = n(967128),
    x = n(320781),
    S = n(269203),
    v = n(753898),
    N = n(734386),
    A = n(184279),
    Z = n(438306),
    M = n(544142),
    b = n(128557),
    R = n(981631),
    L = n(176505),
    j = n(689938),
    P = n(113207);
function O(e) {
    let { canManageRoles: t, channel: n } = e,
        s = t && (0, c.Yk)(n),
        l = (0, a.e7)([f.ZP], () => null != n.guild_id && n === f.ZP.getDefaultChannel(n.guild_id), [n]);
    if ((0, u.Z)(n.id)) return null;
    if (n.isForumPost()) return (0, i.jsx)(x.Z, { channel: n });
    if (_.Ec.has(n.type)) return (0, i.jsx)(M.Z, { channel: n });
    else if (l) return (0, i.jsx)(b.Z, { channel: n });
    else if (s) return (0, i.jsx)(N.Z, { channel: n });
    return (0, i.jsx)(Z.Z, { channel: n });
}
function y(e) {
    var t;
    let { channel: n, showingBanner: c } = e,
        u = (0, o.ZP)(n),
        { type: _ } = n,
        f = (0, a.e7)([g.default], () => (n.isPrivate() ? g.default.getUser(n.getRecipientId()) : null)),
        x = C.ZP.useUserTag(f),
        { canManageRoles: N, canReadMessageHistory: Z } = (0, a.cj)([E.Z], () => ({
            canManageRoles: E.Z.can(R.Plq.MANAGE_ROLES, n),
            canReadMessageHistory: E.Z.can(R.Plq.READ_MESSAGE_HISTORY, n)
        })),
        M = (0, a.e7)([p.Z], () => (_ === R.d4z.DM ? p.Z.getMutualGuilds(n.getRecipientId()) : null), [n, _]),
        { systemDMRedesignEnabled: b } = h.Z.useExperiment({ location: 'bf1a4f_1' }, { autoTrackExposure: null !== (t = n.isSystemDM()) && void 0 !== t && t });
    if (
        (s.useEffect(() => {
            _ === R.d4z.DM && null == M && null != f && r.Z.wait(() => (0, m.Z)(n.getRecipientId(), f.getAvatarURL(null, 80), { withMutualGuilds: !0 }));
        }, [M, _, n, f]),
        n.isSystemDM())
    )
        return b
            ? (0, i.jsx)(A.Z, { channel: n })
            : (0, i.jsx)(v.Z, {
                  channel: n,
                  children: j.Z.Messages.SYSTEM_DM_EMPTY_MESSAGE
              });
    if (_ === R.d4z.DM)
        return (0, i.jsxs)(v.Z, {
            channel: n,
            user: f,
            children: [
                null != f &&
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-xl/medium',
                        className: P.marginBottom20,
                        children: x
                    }),
                j.Z.Messages.BEGINNING_DM.format({ username: u }),
                (null == f ? void 0 : f.isProvisional) && (0, i.jsx)(d.Z, { look: 'channel_header' }),
                (0, i.jsx)(I.Z, {
                    userId: n.getRecipientId(),
                    channel: n,
                    showingBanner: c
                })
            ]
        });
    if (n.isMultiUserDM())
        return n.isManaged()
            ? (0, i.jsxs)(T.ZP, {
                  channelId: n.id,
                  children: [(0, i.jsx)(T.Ot, { children: j.Z.Messages.BEGINNING_CHANNEL_WELCOME.format({ channelName: u }) }), (0, i.jsx)(T.jz, { children: j.Z.Messages.BEGINNING_GROUP_DM_MANAGED })]
              })
            : n.hasFlag(L.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
              ? (0, i.jsx)(S.Z, { channel: n })
              : (0, i.jsx)(v.Z, {
                    channel: n,
                    children: j.Z.Messages.BEGINNING_GROUP_DM.format({ name: u })
                });
    return Z
        ? (0, i.jsx)(O, {
              channel: n,
              canManageRoles: N
          })
        : (0, i.jsx)(T.ZP, {
              channelId: n.id,
              children: (0, i.jsx)(T.jz, { children: j.Z.Messages.BEGINNING_CHANNEL_NO_HISTORY.format({ channelName: u }) })
          });
}
