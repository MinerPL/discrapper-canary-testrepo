n.d(t, {
    Z: function () {
        return H;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(570140),
    o = n(384275),
    c = n(763762),
    d = n(933557),
    u = n(605436),
    h = n(736052),
    p = n(189156),
    m = n(878857),
    f = n(621853),
    g = n(484459),
    C = n(131704),
    x = n(881998),
    v = n(984933),
    _ = n(496675),
    I = n(594174),
    E = n(51144),
    b = n(7782),
    N = n(967128),
    Z = n(320781),
    T = n(269203),
    S = n(86863),
    j = n(558756),
    A = n(753898),
    y = n(734386),
    P = n(184279),
    M = n(438306),
    R = n(544142),
    L = n(128557),
    k = n(981631),
    O = n(176505),
    D = n(388032),
    w = n(272312),
    B = n(113207);
function U(e) {
    let { canManageRoles: t, channel: n } = e,
        l = t && (0, u.Yk)(n),
        r = (0, a.e7)([v.ZP], () => null != n.guild_id && n === v.ZP.getDefaultChannel(n.guild_id), [n]);
    if ((0, h.Z)(n.id)) return null;
    if (n.isForumPost()) return (0, i.jsx)(Z.Z, { channel: n });
    if (C.Ec.has(n.type)) return (0, i.jsx)(R.Z, { channel: n });
    else if (r) return (0, i.jsx)(L.Z, { channel: n });
    else if (l) return (0, i.jsx)(y.Z, { channel: n });
    return (0, i.jsx)(M.Z, { channel: n });
}
function H(e) {
    var t, n;
    let { channel: u, showingBanner: h } = e,
        C = (0, d.ZP)(u),
        { type: v } = u,
        Z = (0, a.e7)([I.default], () => (u.isPrivate() ? I.default.getUser(u.getRecipientId()) : null)),
        y = E.ZP.useUserTag(Z),
        { canManageRoles: M, canReadMessageHistory: R } = (0, a.cj)([_.Z], () => ({
            canManageRoles: _.Z.can(k.Plq.MANAGE_ROLES, u),
            canReadMessageHistory: _.Z.can(k.Plq.READ_MESSAGE_HISTORY, u)
        })),
        L = (0, a.e7)([f.Z], () => (v === k.d4z.DM ? f.Z.getMutualGuilds(u.getRecipientId()) : null), [u, v]),
        { systemDMRedesignEnabled: H } = m.Z.useExperiment({ location: 'bf1a4f_1' }, { autoTrackExposure: null !== (t = u.isSystemDM()) && void 0 !== t && t }),
        G = (0, c.Z)(null !== (n = null == Z ? void 0 : Z.id) && void 0 !== n ? n : k.lds),
        { authorizedAppToken: F, authorizedAppsFetchState: V } = (0, a.cj)([x.Z], () => {
            var e;
            return {
                authorizedAppToken: null != G ? (null === (e = x.Z.getApps()) || void 0 === e ? void 0 : e.find((e) => e.application.id === G.id)) : void 0,
                authorizedAppsFetchState: x.Z.getFetchState()
            };
        });
    if (
        (l.useEffect(() => {
            v === k.d4z.DM && null == L && null != Z && s.Z.wait(() => (0, g.Z)(u.getRecipientId(), Z.getAvatarURL(null, 80), { withMutualGuilds: !0 }));
        }, [L, v, u, Z]),
        l.useEffect(() => {
            (null == Z ? void 0 : Z.bot) && V === x.M.NOT_FETCHED && o.Z.fetch();
        }, [null == Z ? void 0 : Z.bot, V]),
        u.isSystemDM())
    )
        return H
            ? (0, i.jsx)(P.Z, { channel: u })
            : (0, i.jsx)(A.Z, {
                  channel: u,
                  children: D.intl.string(D.t.Rzvnio)
              });
    if (v === k.d4z.DM) {
        let e;
        return (
            null != Z && null != G
                ? null != F &&
                  (e = (0, i.jsxs)('div', {
                      className: w.buttonContainer,
                      children: [
                          (0, i.jsx)(j.W, {
                              className: w.firstButton,
                              channel: u,
                              user: Z
                          }),
                          (0, i.jsx)(S.n, {
                              user: Z,
                              application: G,
                              channel: u,
                              oauth2Token: F
                          })
                      ]
                  }))
                : (e = (0, i.jsx)(b.Z, {
                      userId: u.getRecipientId(),
                      channel: u,
                      showingBanner: h
                  })),
            (0, i.jsxs)(A.Z, {
                channel: u,
                user: Z,
                children: [
                    null != Z &&
                        (0, i.jsx)(r.Heading, {
                            variant: 'heading-xl/medium',
                            className: B.marginBottom20,
                            children: y
                        }),
                    D.intl.format(D.t['Qvg+6+'], { username: C }),
                    (null == Z ? void 0 : Z.isProvisional) && (0, i.jsx)(p.Z, { look: 'channel_header' }),
                    e
                ]
            })
        );
    }
    if (u.isMultiUserDM())
        return u.isManaged()
            ? (0, i.jsxs)(N.ZP, {
                  channelId: u.id,
                  children: [(0, i.jsx)(N.Ot, { children: D.intl.format(D.t.I3R7Vl, { channelName: C }) }), (0, i.jsx)(N.jz, { children: D.intl.string(D.t.M8Ao6O) })]
              })
            : u.hasFlag(O.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
              ? (0, i.jsx)(T.Z, { channel: u })
              : (0, i.jsx)(A.Z, {
                    channel: u,
                    children: D.intl.format(D.t.MFwcqK, { name: C })
                });
    return R
        ? (0, i.jsx)(U, {
              channel: u,
              canManageRoles: M
          })
        : (0, i.jsx)(N.ZP, {
              channelId: u.id,
              children: (0, i.jsx)(N.jz, { children: D.intl.format(D.t.hPVEQE, { channelName: C }) })
          });
}
