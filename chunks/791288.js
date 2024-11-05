n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(493683),
    d = n(13245),
    u = n(99690),
    h = n(835473),
    p = n(194082),
    f = n(442550),
    g = n(297781),
    m = n(371991),
    v = n(656709),
    _ = n(561308),
    E = n(593481),
    x = n(703656),
    Z = n(199902),
    I = n(592125),
    S = n(158776),
    C = n(594174),
    y = n(5192),
    N = n(312839),
    T = n(981631),
    b = n(701488),
    O = n(987650),
    j = n(388032),
    A = n(810489);
function P(e) {
    let { game: t } = e,
        n = (0, h.q)(t.id);
    if (null == n) return null;
    let r = n.getIconURL(b.Si.LARGE);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: A.header,
            children: [
                (0, i.jsx)(f.f, {
                    src: r,
                    size: 32
                }),
                (0, i.jsx)(o.Text, {
                    className: A.gameInfo,
                    variant: 'text-md/semibold',
                    color: 'header-primary',
                    children: n.name
                })
            ]
        })
    });
}
function R(e) {
    let { entry: t, idx: n } = e,
        s = (0, l.e7)([C.default], () => C.default.getUser(t.author_id)),
        h = (0, _.kr)(t),
        f = h ? o.tokens.colors.TEXT_POSITIVE : o.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
        [E, N] = r.useState('unsent'),
        [b, O] = r.useState(!1),
        P = (0, l.e7)([Z.Z], () => (null != s ? Z.Z.getAnyStreamForUser(s.id) : null), [s]),
        { isMobileOnline: R, status: L } = (0, l.cj)(
            [S.Z],
            () =>
                null == s
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: S.Z.isMobileOnline(s.id),
                          status: S.Z.getStatus(s.id)
                      },
            [s]
        );
    r.useEffect(() => {
        if ('sent' === E) {
            let e = setTimeout(() => O(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [E]);
    let w = async (e) => {
            if (null != s && 'unsent' === E) {
                e.stopPropagation();
                try {
                    var i;
                    N('sending');
                    let e = await c.Z.getOrEnsurePrivateChannel(s.id),
                        r = null !== (i = I.Z.getChannel(e)) && void 0 !== i ? i : null;
                    a()(null != r, 'Send channel must be defined'),
                        (0, x.uL)(T.Z5c.CHANNEL(r.guild_id, r.id)),
                        await (0, v.p)({
                            channel: r,
                            content: j.intl.string(j.t.DwAcMz),
                            entry: t,
                            whenReady: !0
                        }),
                        d.Z.track(T.rMx.OVERLAY_GAME_INVITE_SENT, {
                            target_user_id: s.id,
                            target_content_entry_id: t.id,
                            target_index: n
                        }),
                        N('sent');
                } catch (e) {
                    N('unsent');
                }
            }
        },
        M = async () => {
            var e;
            if (null == s) return;
            let t = await c.Z.getOrEnsurePrivateChannel(s.id),
                n = null !== (e = I.Z.getChannel(t)) && void 0 !== e ? e : null;
            a()(null != n, 'Send channel must be defined'), (0, x.uL)(T.Z5c.CHANNEL(n.guild_id, n.id));
        };
    return null == s
        ? null
        : (0, i.jsxs)('div', {
              className: A.userRow,
              children: [
                  (0, i.jsx)(u.Z, {
                      className: A.avatarContainer,
                      user: s,
                      isMobile: R,
                      status: L
                  }),
                  (0, i.jsxs)('div', {
                      className: A.userInfo,
                      children: [
                          (0, i.jsxs)('div', {
                              className: A.usernameWrapper,
                              children: [
                                  (0, i.jsx)(o.Text, {
                                      className: A.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: y.ZP.getName(void 0, void 0, s)
                                  }),
                                  null != P && (0, i.jsx)(p.ZP, {})
                              ]
                          }),
                          (0, i.jsxs)(g.m7, {
                              children: [
                                  (0, i.jsx)(o.GameControllerIcon, {
                                      size: 'xxs',
                                      color: f
                                  }),
                                  (0, i.jsx)(m.ZP, {
                                      entry: t,
                                      textColor: h ? 'text-positive' : 'content-inventory-overlay-text-secondary',
                                      bold: !0
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      className: A.inviteButtonWrapper,
                      children: (0, i.jsx)(o.Button, {
                          submitting: 'sending' === E,
                          onClick: b ? M : w,
                          className: A.inviteButton,
                          color: o.ButtonColors.PRIMARY,
                          look: 'sent' === E ? o.ButtonLooks.OUTLINED : o.ButtonLooks.FILLED,
                          size: o.ButtonSizes.MAX,
                          children:
                              'sent' === E
                                  ? b
                                      ? (0, i.jsx)(o.ChatIcon, { size: 'sm' })
                                      : (0, i.jsx)(o.CheckmarkSmallBoldIcon, {
                                            size: 'sm',
                                            color: o.tokens.colors.WHITE
                                        })
                                  : (0, i.jsx)(o.SendMessageIcon, { size: 'sm' })
                      })
                  })
              ]
          });
}
function L(e) {
    let { entries: t } = e,
        n = t.slice(0, 5);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(E.iz, {}),
            (0, i.jsxs)(o.Text, {
                className: A.helpText,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: [(0, i.jsx)(o.ChatPlusIcon, { size: 'xxs' }), j.intl.string(j.t.y9eo7e)]
            }),
            n.map((e, t) =>
                (0, i.jsx)(
                    R,
                    {
                        idx: t,
                        entry: e
                    },
                    t
                )
            )
        ]
    });
}
function w(e, t) {
    let { trackView: n, trackClick: r } = (0, N.R)(O.n0.SendGameInvitesNotification, { notif_type: O.n0.SendGameInvitesNotification });
    return (
        a()(t.length > 0, 'Some entries must be present'),
        {
            icon: null,
            title: (0, i.jsx)(P, { game: e }),
            body: (0, i.jsx)(L, { entries: t }),
            onNotificationShow: () => {
                n(),
                    d.Z.track(T.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: t.map((e) => e.author_id),
                        entry_ids: t.map((e) => e.id)
                    });
            },
            onNotificationClick: (e, t) => {
                r('unlock'), d.Z.setInstanceLocked(!1);
            },
            onDismissClick: () => {
                r('dismiss');
            }
        }
    );
}
