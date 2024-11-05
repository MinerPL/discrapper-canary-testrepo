n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(627341);
var r = n(200651);
n(192379);
var i = n(278074),
    a = n(442837),
    s = n(481060),
    o = n(194359),
    l = n(843931),
    u = n(1596),
    c = n(922611),
    d = n(699516),
    f = n(594174),
    _ = n(981631),
    h = n(388032);
function p(e) {
    let { user: t, color: n, onBlock: p, onUnblock: m, location: g = 'ContextMenu' } = e,
        { id: E } = t,
        v = (0, a.e7)(
            [f.default],
            () => {
                var e;
                return (null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === E;
            },
            [E]
        ),
        I = (0, a.e7)([d.Z], () => d.Z.isBlocked(E), [E]),
        S = (0, c.Do)({ location: 'use-block-user-item-web' }),
        T = (0, i.EQ)({
            isStealthRemediationEnabled: S,
            isBlocked: I
        })
            .with(
                {
                    isStealthRemediationEnabled: !0,
                    isBlocked: !0
                },
                () => 'default'
            )
            .with(
                {
                    isStealthRemediationEnabled: !0,
                    isBlocked: !1
                },
                () => 'danger'
            )
            .otherwise(() => n);
    return v
        ? null
        : (0, r.jsx)(s.MenuItem, {
              id: 'block',
              color: null != T ? T : 'default',
              label: I ? h.intl.string(h.t.XyHpKC) : h.intl.string(h.t.l4EmaW),
              action: I
                  ? () => {
                        null == m || m(), o.Z.unblockUser(E, { location: g });
                    }
                  : () => {
                        (0, s.openModal)((e) =>
                            (0, r.jsx)(s.ConfirmModal, {
                                header: h.intl.formatToPlainString(h.t.x5pOn5, { name: t.username }),
                                confirmText: h.intl.string(h.t.l4EmaW),
                                cancelText: h.intl.string(h.t['ETE/oK']),
                                onConfirm: () => {
                                    null == p || p(),
                                        o.Z.addRelationship({
                                            userId: E,
                                            context: { location: g },
                                            type: _.OGo.BLOCKED
                                        });
                                },
                                ...e,
                                children: (0, l.c)({ location: 'confirm_block_modal' })
                                    ? (0, r.jsx)(u.Z, {})
                                    : (0, r.jsx)(s.Text, {
                                          variant: 'text-md/normal',
                                          children: h.intl.format(h.t.pegItL, { name: t.username })
                                      })
                            })
                        );
                    }
          });
}
