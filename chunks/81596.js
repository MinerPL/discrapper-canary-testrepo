e.r(n),
    e.d(n, {
        default: function () {
            return T;
        }
    }),
    e(47120);
var i = e(200651),
    o = e(192379),
    r = e(442837),
    a = e(481060),
    c = e(230711),
    l = e(485267),
    s = e(564990),
    d = e(353647),
    u = e(527790),
    _ = e(540440),
    E = e(365583),
    f = e(388032),
    h = e(121269);
function T(t) {
    let { user: n, entry: e, transitionState: T, onAction: S, onClose: p, onOpenGameSettings: x } = t,
        [N, R] = (0, r.Wu)([d.Z], () => [d.Z.isDeletingEntryHistory, d.Z.deleteOutboxEntryError]);
    return (
        o.useEffect(() => l.Bt, []),
        (0, i.jsxs)(a.ModalRoot, {
            size: a.ModalSize.SMALL,
            transitionState: T,
            children: [
                (0, i.jsxs)(a.ModalContent, {
                    className: h.content,
                    children: [
                        null != R
                            ? (0, i.jsxs)('div', {
                                  className: h.error,
                                  children: [
                                      (0, i.jsx)(a.CircleXIcon, { color: a.tokens.colors.STATUS_DANGER }),
                                      (0, i.jsx)(a.Text, {
                                          variant: 'text-sm/medium',
                                          children: f.intl.string(f.t.FMbL3t)
                                      })
                                  ]
                              })
                            : null,
                        (0, i.jsx)(a.Heading, {
                            variant: 'heading-lg/semibold',
                            children: (0, _.y)(e)
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            tag: 'span',
                            children: f.intl.format(f.t.KV72oa, {
                                settingsHook: (t, n) => {
                                    let o = (0, E.C)({
                                        entry: e,
                                        onOpenGameSettings: x
                                    });
                                    return (0, i.jsx)(
                                        a.Anchor,
                                        {
                                            onClick: () => {
                                                null == S || S({ action: 'PRESS_CLEAR_HISTORY_DISCLAIMER' }), null != o ? o() : c.Z.open(), p();
                                            },
                                            children: t
                                        },
                                        n
                                    );
                                }
                            })
                        }),
                        (0, i.jsx)(u.Z, {
                            user: n,
                            entry: e,
                            className: h.card,
                            hideHeader: !0,
                            hideContextMenu: !0
                        })
                    ]
                }),
                (0, i.jsxs)(a.ModalFooter, {
                    className: h.footer,
                    children: [
                        (0, i.jsx)(a.Button, {
                            disabled: N,
                            color: a.ButtonColors.RED,
                            size: a.ButtonSizes.SMALL,
                            onClick: () => {
                                null == S || S({ action: 'PRESS_CLEAR_HISTORY_BUTTON' }), (0, s.CV)(e, n.id, p);
                            },
                            children: null != R ? f.intl.string(f.t['5911LS']) : f.intl.string(f.t.VkKicX)
                        }),
                        (0, i.jsx)(a.Button, {
                            onClick: p,
                            size: a.ButtonSizes.SMALL,
                            look: a.ButtonLooks.FILLED,
                            color: a.ButtonColors.TRANSPARENT,
                            children: f.intl.string(f.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    );
}
