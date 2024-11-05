n.d(t, {
    n: function () {
        return I;
    }
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(430742),
    o = n(541716),
    c = n(752305),
    u = n(893718),
    d = n(849522),
    h = n(703558),
    f = n(784384),
    _ = n(822869),
    g = n(912332),
    m = n(646746),
    p = n(388032),
    E = n(463061);
function I(e) {
    let { message: t, forwardOptions: n, sendLabel: I, canSend: S, selectedDestinations: A, isSending: C, onSend: v, showPreview: b } = e,
        x = (0, d.Z)(),
        N = (0, f.nm)(A),
        L = (0, f.y)(A),
        T = (0, _.Ad)(),
        y = (0, a.e7)([h.Z], () => h.Z.getDraft(t.channel_id, h.d.ForwardContextMessage)),
        [P, Z] = i.useState(() => (0, c.eK)(y)),
        { textValue: w, richValue: R } = P,
        [O, D] = i.useState(!1),
        j = i.useCallback(() => D(!0), []),
        M = i.useCallback(() => D(!1), []),
        k = i.useCallback(
            (e, n, l) => {
                Z({
                    textValue: n,
                    richValue: l
                }),
                    s.Z.saveDraft(t.channel_id, n, h.d.ForwardContextMessage),
                    T(t.channel_id, t.id);
            },
            [T, t]
        ),
        F = i.useCallback(() => {
            s.Z.clearDraft(t.channel_id, h.d.ForwardContextMessage), v(w);
        }, [t.channel_id, v, w]),
        G = i.useCallback(
            () =>
                !S || w.length > x
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })
                    : (F(),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })),
            [F, w, x, S]
        );
    return (0, l.jsxs)(r.ModalFooter, {
        className: E.footerWithMessage,
        children: [
            b &&
                (0, l.jsx)('div', {
                    className: E.forwardPreviewWrapper,
                    children: (0, l.jsx)(m.O, {
                        message: t,
                        forwardOptions: n,
                        channel: N
                    })
                }),
            (0, l.jsxs)('div', {
                className: E.footerWarningWrapper,
                children: [
                    (0, l.jsxs)('div', {
                        className: E.footerButtons,
                        children: [
                            (0, l.jsx)(u.Z, {
                                innerClassName: E.messageInput,
                                onChange: k,
                                placeholder: p.intl.string(p.t.ZroO3N),
                                channel: N,
                                textValue: w,
                                richValue: R,
                                type: o.I.FORWARD_MESSAGE_INPUT,
                                onBlur: M,
                                onFocus: j,
                                focused: O,
                                onSubmit: G,
                                parentModalKey: g.so,
                                autoCompletePosition: 'bottom',
                                emojiPickerCloseOnModalOuterClick: !0,
                                disableThemedBackground: !0
                            }),
                            (0, l.jsx)(r.Button, {
                                className: E.sendWithMessage,
                                submitting: C,
                                disabled: !S || w.length > x,
                                onClick: F,
                                children: I
                            })
                        ]
                    }),
                    L.length > 0 &&
                        w.length > 0 &&
                        (0, l.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-warning',
                            children: p.intl.format(p.t.xJFpio, {
                                count: L.length,
                                channelNames: L.join(', ')
                            })
                        })
                ]
            })
        ]
    });
}
