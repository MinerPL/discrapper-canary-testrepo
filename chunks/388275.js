n.d(t, {
    n: function () {
        return C;
    }
}),
    n(47120);
var l = n(735250),
    a = n(470079),
    s = n(106351),
    i = n(442837),
    r = n(481060),
    o = n(541716),
    c = n(752305),
    u = n(893718),
    d = n(849522),
    h = n(987509),
    _ = n(131704),
    f = n(592125),
    E = n(823379),
    g = n(784384),
    m = n(822869),
    S = n(912332),
    A = n(646746),
    I = n(689938),
    p = n(463061);
function C(e) {
    let { message: t, forwardOptions: n, sendLabel: C, canSend: N, selectedDestinations: L, isSending: v, onSend: b, showPreview: x } = e,
        T = (0, d.Z)(),
        Z = L.map(h.hl).find(E.lm),
        M = (0, i.e7)([f.Z], () => f.Z.getChannel(Z), [Z]),
        y = a.useMemo(
            () =>
                null != M
                    ? M
                    : (0, _.kt)({
                          id: '1',
                          type: s.d.DM
                      }),
            [M]
        ),
        P = (0, g.y)(L),
        R = (0, m.Ad)(),
        [O, D] = a.useState(() => (0, c.H2)()),
        { textValue: w, richValue: G } = O,
        [j, F] = a.useState(!1),
        U = a.useCallback(() => F(!0), []),
        k = a.useCallback(() => F(!1), []),
        W = a.useCallback(
            (e, n, l) => {
                D({
                    textValue: n,
                    richValue: l
                }),
                    R(t.channel_id, t.id);
            },
            [R, t]
        ),
        H = a.useCallback(() => {
            b(w);
        }, [w, b]),
        B = a.useCallback(
            () =>
                !N || w.length > T
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })
                    : (H(),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })),
            [H, w, T, N]
        );
    return (0, l.jsxs)(r.ModalFooter, {
        className: p.footerWithMessage,
        children: [
            x &&
                (0, l.jsx)('div', {
                    className: p.forwardPreviewWrapper,
                    children: (0, l.jsx)(A.O, {
                        message: t,
                        forwardOptions: n
                    })
                }),
            (0, l.jsxs)('div', {
                className: p.footerWarningWrapper,
                children: [
                    (0, l.jsxs)('div', {
                        className: p.footerButtons,
                        children: [
                            (0, l.jsx)(u.Z, {
                                innerClassName: p.messageInput,
                                onChange: W,
                                placeholder: I.Z.Messages.MESSAGE_FORWARD_MESSAGE_PLACEHOLDER,
                                channel: y,
                                textValue: w,
                                richValue: G,
                                type: o.I.FORWARD_MESSAGE_INPUT,
                                onBlur: k,
                                onFocus: U,
                                focused: j,
                                onSubmit: B,
                                parentModalKey: S.so,
                                autoCompletePosition: 'bottom',
                                emojiPickerCloseOnModalOuterClick: !0
                            }),
                            (0, l.jsx)(r.Button, {
                                className: p.sendWithMessage,
                                submitting: v,
                                disabled: !N || w.length > T,
                                onClick: H,
                                children: C
                            })
                        ]
                    }),
                    P.length > 0 &&
                        w.length > 0 &&
                        (0, l.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-warning',
                            children: I.Z.Messages.MESSAGE_FORWARD_SLOWMODE_WARNING.format({
                                count: P.length,
                                channelNames: P.join(', ')
                            })
                        })
                ]
            })
        ]
    });
}
