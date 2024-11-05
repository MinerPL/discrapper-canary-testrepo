n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    o = n(192379),
    r = n(904245),
    l = n(13245),
    s = n(655687),
    a = n(541716),
    u = n(752305),
    c = n(893718),
    d = n(957730),
    h = n(849522),
    f = n(145597),
    p = n(981631),
    m = n(561990);
function v(e) {
    let { id: t, channel: n, onSend: v } = e,
        g = (0, h.Z)(),
        { placeholder: E, accessibilityLabel: _ } = (0, s.Z)(n),
        [C, S] = o.useState(() => (0, u.H2)()),
        { textValue: x, richValue: Z } = C,
        [I, y] = o.useState(!1),
        b = o.useCallback(() => y(!0), []),
        N = o.useCallback(() => y(!1), []),
        O = o.useCallback((e, t, n) => {
            S({
                textValue: t,
                richValue: n
            });
        }, []),
        T = o.useCallback(
            () =>
                x.length > g
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })
                    : (r.Z.sendMessage(n.id, d.ZP.parse(n, x), !1),
                      l.Z.setInputLocked(!0, (0, f.QF)()),
                      l.Z.updateNotificationStatus(t, p._1z.DISMISSED),
                      null == v || v(x),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })),
            [x, g, n, t, v]
        );
    return (0, i.jsx)(c.Z, {
        innerClassName: m.textArea,
        onChange: O,
        placeholder: E,
        accessibilityLabel: _,
        channel: n,
        textValue: x,
        richValue: Z,
        type: a.I.OVERLAY_INLINE_REPLY,
        onBlur: N,
        onFocus: b,
        focused: I,
        onSubmit: T,
        autoCompletePosition: 'bottom',
        disableThemedBackground: !0
    });
}
