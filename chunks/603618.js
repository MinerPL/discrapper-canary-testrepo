n.d(t, {
    Z: function () {
        return M;
    },
    i: function () {
        return j;
    }
}),
    n(47120);
var i = n(200651),
    o = n(192379),
    r = n(512722),
    l = n.n(r),
    s = n(442837),
    a = n(481060),
    u = n(278323),
    c = n(988298),
    d = n(493683),
    h = n(13245),
    f = n(99690),
    p = n(620662),
    m = n(194082),
    v = n(297781),
    g = n(656709),
    E = n(567409),
    _ = n(703656),
    C = n(409057),
    S = n(199902),
    x = n(592125),
    Z = n(158776),
    I = n(594174),
    y = n(5192),
    b = n(358085),
    N = n(998502),
    O = n(388627),
    T = n(981631),
    L = n(388032),
    k = n(250145);
function A(e) {
    let { entry: t, currentUserActivity: n, idx: r } = e,
        c = (0, s.e7)([I.default], () => I.default.getUser(t.author_id)),
        [f, m] = o.useState('unsent'),
        [v, E] = o.useState(!1);
    o.useEffect(() => {
        if ('sent' === f) {
            let e = setTimeout(() => E(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [f]);
    let C = null != n && (0, p.Z)(n, T.xjy.JOIN),
        S = async (e) => {
            if (null != c && 'unsent' === f) {
                e.stopPropagation();
                try {
                    if ((m('sending'), C))
                        await u.Z.sendActivityInviteUser({
                            type: T.mFx.JOIN,
                            userId: c.id,
                            activity: n,
                            location: T.Sbl.UNLOCKED_OVERLAY
                        });
                    else {
                        var i;
                        let e = await d.Z.getOrEnsurePrivateChannel(c.id),
                            n = null !== (i = x.Z.getChannel(e)) && void 0 !== i ? i : null;
                        l()(null != n, 'Send channel must be defined'),
                            (0, _.uL)(T.Z5c.CHANNEL(n.guild_id, n.id)),
                            await (0, g.p)({
                                channel: n,
                                content: L.intl.string(L.t.DwAcMz),
                                entry: t,
                                whenReady: !0
                            });
                    }
                    h.Z.track(T.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: c.id,
                        target_content_entry_id: t.id,
                        target_index: r
                    }),
                        m('sent');
                } catch (e) {
                    m('unsent');
                }
            }
        },
        Z = async () => {
            var e;
            if (null == c) return;
            let t = await d.Z.getOrEnsurePrivateChannel(c.id),
                n = null !== (e = x.Z.getChannel(t)) && void 0 !== e ? e : null;
            l()(null != n, 'Send channel must be defined'), (0, _.uL)(T.Z5c.CHANNEL(n.guild_id, n.id)), b.isPlatformEmbedded ? N.ZP.focus() : window.focus();
        },
        y = C ? L.intl.string(L.t['3fRyS0']) : L.intl.string(L.t.y9eo7e),
        O = C
            ? (0, i.jsx)(a.GroupPlusIcon, {
                  color: 'currentColor',
                  size: 'sm'
              })
            : (0, i.jsx)(a.SendMessageIcon, {
                  color: 'currentColor',
                  size: 'sm'
              });
    return (0, i.jsx)(a.Tooltip, {
        text: y,
        'aria-label': y,
        children: (e) =>
            (0, i.jsx)(a.Button, {
                ...e,
                submitting: 'sending' === f,
                onClick: v ? Z : S,
                className: k.inviteButton,
                innerClassName: k.inviteButtonInner,
                color: a.ButtonColors.TRANSPARENT,
                look: 'sent' === f ? a.ButtonLooks.OUTLINED : a.ButtonLooks.FILLED,
                size: a.ButtonSizes.ICON,
                children:
                    'sent' === f
                        ? v
                            ? (0, i.jsx)(a.ChatIcon, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                            : (0, i.jsx)(a.CheckmarkSmallBoldIcon, {
                                  color: 'currentColor',
                                  size: 'sm'
                              })
                        : O
            })
    });
}
function w(e) {
    let { entry: t } = e,
        n = (0, s.e7)([I.default], () => I.default.getUser(t.author_id)),
        r = (0, s.e7)([Z.Z], () => (null != n ? Z.Z.getApplicationActivity(n.id, t.extra.application_id) : null), [t.extra.application_id, n]),
        [l, c] = o.useState('unsent');
    if (!(null != r && (0, p.Z)(r, T.xjy.JOIN))) return null;
    let d = async (e) => {
            if (null != n && 'unsent' === l) {
                e.stopPropagation();
                try {
                    c('sending'),
                        await u.Z.sendActivityInviteUser({
                            type: T.mFx.JOIN_REQUEST,
                            userId: n.id,
                            activity: r,
                            location: T.Sbl.UNLOCKED_OVERLAY
                        }),
                        c('sent');
                } catch (e) {
                    c('unsent');
                }
            }
        },
        h = L.intl.string(L.t.OKsSCQ);
    return (0, i.jsx)(a.Tooltip, {
        text: h,
        'aria-label': h,
        children: (e) =>
            (0, i.jsx)(a.Button, {
                ...e,
                submitting: 'sending' === l,
                onClick: d,
                className: k.inviteButton,
                innerClassName: k.inviteButtonInner,
                color: a.ButtonColors.TRANSPARENT,
                look: 'sent' === l ? a.ButtonLooks.OUTLINED : a.ButtonLooks.FILLED,
                size: a.ButtonSizes.ICON,
                children:
                    'sent' === l
                        ? (0, i.jsx)(a.CheckmarkSmallBoldIcon, {
                              color: 'currentColor',
                              size: 'sm'
                          })
                        : (0, i.jsx)(a.HandRequestSpeakIcon, {
                              color: 'currentColor',
                              size: 'sm'
                          })
            })
    });
}
function R(e) {
    let { entry: t, currentUserActivity: n, idx: o } = e,
        r = (0, s.e7)([I.default], () => I.default.getUser(t.author_id)),
        l = (0, s.e7)([S.Z], () => (null != r ? S.Z.getAnyStreamForUser(r.id) : null), [r]),
        { isMobileOnline: u, status: c } = (0, s.cj)(
            [Z.Z],
            () =>
                null == r
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: Z.Z.isMobileOnline(r.id),
                          status: Z.Z.getStatus(r.id)
                      },
            [r]
        );
    return null == r
        ? null
        : (0, i.jsxs)('div', {
              className: k.row,
              children: [
                  (0, i.jsx)(f.Z, {
                      className: k.avatar,
                      user: r,
                      isMobile: u,
                      status: c
                  }),
                  (0, i.jsxs)('div', {
                      className: k.details,
                      children: [
                          (0, i.jsxs)('div', {
                              className: k.usernameWrapper,
                              children: [
                                  (0, i.jsx)(a.Text, {
                                      className: k.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: y.ZP.getName(void 0, void 0, r)
                                  }),
                                  null != l && (0, i.jsx)(m.ZP, {})
                              ]
                          }),
                          (0, i.jsx)(v.Gk, {
                              location: v.Gt.OVERLAY,
                              children: [v.OV, v.wO, v.f, v.v1, v.pQ].map((e, n) => (0, i.jsx)(e, { entry: t }, 'entry-'.concat(n)))
                          })
                      ]
                  }),
                  (0, i.jsx)(w, {
                      entry: t,
                      currentUserActivity: n,
                      idx: o
                  }),
                  (0, i.jsx)(A, {
                      entry: t,
                      currentUserActivity: n,
                      idx: o
                  })
              ]
          });
}
function j(e) {
    let { entries: t, currentUserActivity: n } = e,
        o = t.slice(0, 5);
    return (0, i.jsx)(i.Fragment, {
        children: o.map((e, t) =>
            (0, i.jsx)(
                R,
                {
                    idx: t,
                    entry: e,
                    currentUserActivity: n
                },
                t
            )
        )
    });
}
function M() {
    var e;
    let t = null === (e = (0, O.II)()) || void 0 === e ? void 0 : e.id,
        n = (0, E.Ns)(t),
        o = (0, s.e7)([I.default], () => I.default.getCurrentUser()),
        r = (0, s.e7)([Z.Z], () => (null != o && null != t ? Z.Z.getApplicationActivity(o.id, t) : null)),
        l = null != r && (0, p.Z)(r, T.xjy.JOIN);
    return 0 === n.length && null == r
        ? null
        : (0, i.jsxs)('div', {
              className: k.container,
              children: [
                  null != r && null != o
                      ? (0, i.jsx)(C.Z, {
                            className: k.activityCard,
                            activity: r,
                            user: o,
                            currentUser: o
                        })
                      : null,
                  l
                      ? (0, i.jsx)(a.Button, {
                            className: k.inviteFriendsButton,
                            onClick: () => (0, c.h7)(r, !1, T.IlC.POPOUT),
                            size: a.ButtonSizes.SMALL,
                            color: a.ButtonColors.PRIMARY,
                            children: L.intl.string(L.t['6Qgren'])
                        })
                      : null,
                  (0, i.jsx)(j, {
                      entries: n,
                      currentUserActivity: r
                  })
              ]
          });
}
