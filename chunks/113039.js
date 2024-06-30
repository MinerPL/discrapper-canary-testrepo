n.d(t, {
    HR: function () {
        return m;
    },
    L5: function () {
        return p;
    }
});
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(653603), l = n.n(s), u = n(902704), c = n(453687), d = n(534761), _ = n(981631), E = n(689938), f = n(622322), h = n(250050);
function p(e, t) {
    return e.type === _.uaV.VOICE_HANGOUT_INVITE ? '' : e.hasFlag(_.iLy.SOURCE_MESSAGE_DELETED) ? E.Z.Messages.SOURCE_MESSAGE_DELETED : t;
}
function m(e, t) {
    var n, r;
    let {message: i} = t, {message: a} = e;
    return (0, u.Z)(e, t, ['message']) && i.content === a.content && i.state === a.state && (null === (n = i.editedTimestamp) || void 0 === n ? void 0 : n.toString()) === (null === (r = a.editedTimestamp) || void 0 === r ? void 0 : r.toString());
}
t.ZP = i.memo(function (e) {
    var t;
    let {
            className: n,
            message: a,
            children: s,
            content: u,
            onUpdate: m,
            contentRef: I
        } = e, T = a.isEdited(), g = a.state === _.yb.SEND_FAILED, S = a.state === _.yb.SENDING, A = a.isCommandType(), N = null === (t = a.editedTimestamp) || void 0 === t ? void 0 : t.toString(), v = i.useRef(!1);
    return i.useLayoutEffect(() => {
        v.current ? null != m && m() : v.current = !0;
    }, [
        m,
        a.content,
        u,
        N,
        s
    ]), (0, r.jsxs)('div', {
        id: (0, c.ut)(a),
        ref: I,
        className: o()(n, f.markup, {
            [h.messageContent]: !0,
            [h.isSending]: S && !A,
            [h.markupRtl]: 'rtl' === l()(a.content),
            [h.isFailed]: g,
            [h.isUnsupported]: a.isUnsupported
        }),
        children: [
            null != s ? s : p(a, u),
            T && null != a.editedTimestamp && (0, r.jsxs)(r.Fragment, {
                children: [
                    ' ',
                    (0, r.jsx)(d.Z, {
                        timestamp: a.editedTimestamp,
                        isEdited: !0,
                        isInline: !1,
                        children: (0, r.jsxs)('span', {
                            className: h.edited,
                            children: [
                                '(',
                                E.Z.Messages.MESSAGE_EDITED,
                                ')'
                            ]
                        })
                    })
                ]
            })
        ]
    });
}, m);
