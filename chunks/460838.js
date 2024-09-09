a.d(n, {
    Q: function () {
        return c;
    },
    Z: function () {
        return B;
    }
});
var t,
    c,
    i = a(735250),
    o = a(470079),
    r = a(120356),
    l = a.n(r),
    d = a(442837),
    s = a(481060),
    u = a(447003),
    _ = a(471445),
    f = a(565138),
    p = a(889161),
    h = a(496675),
    b = a(725436),
    m = a(274311),
    v = a(854698),
    g = a(285784),
    x = a(95291),
    I = a(742593),
    C = a(810561),
    N = a(187443),
    k = a(131154),
    w = a(765305),
    T = a(981631),
    Z = a(689938),
    S = a(453470);
function E(e) {
    let { channel: n, onClick: a } = e,
        { canManageAllEvents: t } = (0, p.XJ)(n),
        c = (0, d.e7)([h.Z], () => !n.isGuildVocal() || h.Z.can(T.Plq.CONNECT, n), [n]),
        r = o.useMemo(() => (0, u.Z)(n), [n]),
        f = (0, _.KS)(n);
    return (0, i.jsx)(s.Tooltip, {
        text: Z.Z.Messages.GUILD_EVENT_CANNOT_CONNECT,
        shouldShow: !c && null != a,
        children: (e) =>
            (0, i.jsxs)(s.Clickable, {
                ...e,
                className: l()(S.inline, S.channelContainer, {
                    [S.channelContainerEnabled]: c && null != a,
                    [S.channelContainerDisabled]: !c && null != a
                }),
                onClick: a,
                children: [
                    (0, i.jsx)(s.Tooltip, {
                        text: Z.Z.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                        shouldShow: t && r && c && null != a,
                        children: (e) =>
                            null != f
                                ? (0, i.jsx)(f, {
                                      ...e,
                                      color: 'currentColor',
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      className: S.icon
                                  })
                                : null
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        className: S.channelLocation,
                        children: n.name
                    })
                ]
            })
    });
}
function j(e) {
    let { guild: n, channel: a, onJoinClick: t, handleLocationClick: c, location: o, isExternal: r, isHub: d } = e;
    if (d)
        return null == n
            ? (0, i.jsx)('div', {})
            : (0, i.jsxs)('div', {
                  className: S.inline,
                  children: [
                      (0, i.jsx)(f.Z, {
                          className: S.guildIcon,
                          size: f.Z.Sizes.MINI,
                          active: !0,
                          guild: n
                      }),
                      (0, i.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          color: 'header-secondary',
                          children: null == n ? void 0 : n.name
                      })
                  ]
              });
    return null != a
        ? (0, i.jsx)(E, {
              channel: a,
              onClick: t
          })
        : (0, i.jsxs)(s.Clickable, {
              className: S.inline,
              onClick: c,
              children: [
                  (0, i.jsx)(s.LocationIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      height: 20,
                      width: 20,
                      className: l()(S.channelContainer, S.icon)
                  }),
                  (0, i.jsx)(s.Text, {
                      className: r ? S.externalLocation : S.channelLocation,
                      variant: 'text-sm/normal',
                      children: (0, b.m)(o, !0)
                  })
              ]
          });
}
function B(e) {
    let { className: n, guild: a, channel: t, creator: c, name: o, entityType: r, description: d, imageLocation: u = 0, imageSource: _, isActive: f, isUserLurking: p, isJoined: h = !1, isMember: b = !1, isHub: T = !1, speakers: Z, speakerCount: E, rsvped: B, canInvite: U, location: y, truncate: R, onContextMenu: L, onJoinClick: P, onJoinGuildClick: A, onGoToGuildClick: M, onRsvpClick: D, onStartClick: G, onInviteClick: H, onEndClick: O, onClick: z, isNew: F, guildEvent: V, eventPreview: X, recurrenceRule: q, recurrenceId: J } = e,
        W = (0, m.Q)(t, r),
        K = r === w.WX.EXTERNAL,
        Q = K ? (e) => e.stopPropagation() : void 0,
        Y = [];
    if (null != q && null != event) {
        let e = (0, v.Ho)(q);
        Y = (0, v.PJ)(4, e, new Date(V.scheduled_start_time));
    }
    let $ = Y.length > 0;
    return (0, i.jsxs)(s.ClickableContainer, {
        'aria-label': o,
        onClick: () => (null == z ? void 0 : z(J)),
        onContextMenu: L,
        className: l()(
            S.card,
            {
                [S.joined]: h,
                [S.lurking]: p
            },
            n
        ),
        children: [
            (0, i.jsxs)('div', {
                className: l()(S.padding, { [S.isRecurring]: $ }),
                children: [
                    0 === u && (0, i.jsx)(x.Z, { source: _ }),
                    (0, i.jsx)(I.ZP, {
                        creator: c,
                        name: o,
                        description: d,
                        imageSource: 1 === u ? _ : null,
                        truncate: R,
                        guildId: null == a ? void 0 : a.id,
                        isHub: T,
                        isNew: F,
                        guildEvent: V,
                        eventPreview: X,
                        recurrenceId: J
                    }),
                    f &&
                        null != a &&
                        null != Z &&
                        E > 0 &&
                        (0, i.jsx)(k.Z, {
                            guild: a,
                            speakers: Z,
                            speakerCount: E,
                            className: S.spacing
                        }),
                    (0, i.jsx)('hr', { className: S.divider }),
                    (0, i.jsxs)('div', {
                        className: l()(S.inline, S.footer),
                        children: [
                            (0, i.jsx)(j, {
                                guild: a,
                                channel: t,
                                onJoinClick: P,
                                handleLocationClick: Q,
                                location: y,
                                isExternal: K,
                                isHub: T
                            }),
                            T
                                ? (0, i.jsx)(N.Z, {
                                      isActive: f,
                                      isUserLurking: p,
                                      isMember: b,
                                      rsvped: B,
                                      onRsvpClick: D,
                                      onJoinGuildClick: A,
                                      onGoToGuildClick: M,
                                      guildName: null == a ? void 0 : a.name,
                                      canInvite: U,
                                      isChannelPublic: W,
                                      onInviteClick: H
                                  })
                                : (0, i.jsx)(g.ZP, {
                                      entityType: r,
                                      isJoined: h,
                                      isActive: f,
                                      isUserLurking: p,
                                      rsvped: B,
                                      canInvite: U,
                                      isChannelPublic: W,
                                      onContextMenu: L,
                                      onJoinClick: P,
                                      onRsvpClick: D,
                                      onStartClick: G,
                                      onInviteClick: H,
                                      onEndClick: O
                                  })
                        ]
                    }),
                    $ && (0, i.jsx)('hr', { className: S.divider })
                ]
            }),
            $ &&
                (0, i.jsx)(C.Z, {
                    guildId: null == a ? void 0 : a.id,
                    recurrenceRule: q,
                    guildEventId: V.id,
                    onRecurrenceClick: z
                })
        ]
    });
}
((t = c || (c = {}))[(t.BANNER = 0)] = 'BANNER'), (t[(t.THUMBNAIL = 1)] = 'THUMBNAIL');
