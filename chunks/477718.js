n.d(t, {
    Z: function () {
        return M;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(913527),
    o = n.n(r),
    c = n(399606),
    u = n(481060),
    d = n(480137),
    h = n(906732),
    p = n(376923),
    m = n(472596),
    _ = n(987707),
    f = n(909746),
    E = n(501801),
    g = n(271383),
    C = n(430824),
    I = n(5192),
    T = n(776767),
    x = n(981631),
    S = n(689938),
    v = n(759486),
    N = n(722029),
    A = n(194898);
function Z(e) {
    var t;
    let { log: n, member: a, guild: r } = e,
        { analyticsLocations: d } = (0, h.ZP)(),
        _ = f.nm(n),
        C = f.QM(n),
        T = null === (t = f.V$(x.zUn.REASON, n)) || void 0 === t ? void 0 : t.newValue,
        A = f.J5(n),
        Z = (0, p.LJ)(n.id),
        M = (0, c.e7)([g.ZP], () => (null != n.userId ? g.ZP.getMember(a.guildId, n.userId) : null), [a.guildId, n.userId]),
        b = s.useCallback(
            (e) => (t) => {
                t.preventDefault(), t.stopPropagation(), null != e && (0, m.RE)(e, d);
            },
            [d]
        ),
        R = s.useCallback(
            () =>
                null == n.user
                    ? null
                    : (0, i.jsx)(u.Tooltip, {
                          text: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_AUDIT_LOG_SOURCE_USER,
                          children: (e) => {
                              var t;
                              let { onMouseEnter: s, onMouseLeave: l } = e;
                              return (0, i.jsx)(u.Clickable, {
                                  tag: 'span',
                                  className: v.username,
                                  onClick: b(M),
                                  onMouseEnter: s,
                                  onMouseLeave: l,
                                  children: (0, i.jsxs)(u.Text, {
                                      variant: 'text-sm/medium',
                                      tag: 'span',
                                      children: [
                                          '@',
                                          (0, i.jsx)(u.NameWithRole, {
                                              name: I.ZP.getName(a.guildId, null, n.user),
                                              color: null !== (t = null == M ? void 0 : M.colorString) && void 0 !== t ? t : void 0
                                          })
                                      ]
                                  })
                              });
                          }
                      }),
            [b, n.user, a.guildId, M]
        )();
    return (0, i.jsxs)('div', {
        className: l()(N.modInfoItem, v.auditLogItem),
        children: [
            (0, i.jsxs)('div', {
                className: v.auditLogItemTitleContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: v.auditLogItemTitle,
                        children: [
                            null != _ &&
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'header-primary',
                                    children: _
                                }),
                            null != C &&
                                (0, i.jsxs)(u.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: ['(', 'string' == typeof C ? C : o()(C).fromNow(), ')']
                                })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: v.auditLogItemDate,
                        children: (0, i.jsx)(u.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-primary',
                            children: Z
                        })
                    })
                ]
            }),
            null != T &&
                (0, i.jsx)('div', {
                    className: v.auditLogSecondaryContainer,
                    children: (0, i.jsxs)('div', {
                        className: v.auditLogReason,
                        children: [
                            R,
                            (0, i.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                tag: 'span',
                                children: T
                            })
                        ]
                    })
                }),
            null == T &&
                null != A &&
                (0, i.jsx)('div', {
                    className: v.auditLogSecondaryContainer,
                    children: (0, i.jsxs)('div', {
                        className: v.auditLogSecondary,
                        children: [
                            R,
                            (0, i.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                tag: 'span',
                                children: A
                            })
                        ]
                    })
                }),
            null == T &&
                null == A &&
                (0, i.jsx)('div', {
                    className: v.auditLogSecondaryContainer,
                    children: (0, i.jsx)('div', {
                        className: v.auditLogSecondary,
                        children: (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            tag: 'span',
                            children: (0, i.jsx)(E.tP, {
                                log: n,
                                guild: r,
                                onContentClick: () => {},
                                className: v.auditLogExpandedChangeDetails
                            })
                        })
                    })
                })
        ]
    });
}
function M(e) {
    let { member: t } = e,
        n = (0, c.e7)([C.Z], () => C.Z.getGuild(t.guildId), [t.guildId]),
        a = (0, c.e7)(
            [_.Z],
            () => {
                let e = _.Z.logs;
                return null == e || null == n ? [] : f._$(e, n);
            },
            [n]
        );
    return (s.useEffect(() => {
        (async function e(e, t) {
            await d.gV(t, e);
        })(t.guildId, t.userId);
    }, [t.guildId, t.userId]),
    null == n || 0 === a.length)
        ? null
        : (0, i.jsx)(u.FormItem, {
              title: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_RECENT_AUDIT_LOG,
              titleClassName: A.infoTitle,
              children:
                  a.length > 0
                      ? (0, i.jsx)(T.WM, {
                            children: a.map((e) =>
                                (0, i.jsx)(
                                    Z,
                                    {
                                        log: e,
                                        member: t,
                                        guild: n
                                    },
                                    e.id
                                )
                            )
                        })
                      : null
          });
}
