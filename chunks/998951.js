var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(481060), s = n(250050);
t.Z = function (e) {
    let {
            className: t,
            compact: n = !1,
            contentOnly: i = !1,
            zalgo: l = !0,
            disableInteraction: u = !1,
            childrenRepliedMessage: c,
            childrenExecutedCommand: d,
            childrenHeader: _,
            childrenSystemMessage: E,
            childrenButtons: f,
            childrenMessageContent: h,
            childrenAccessories: p,
            messageRef: m,
            focusProps: I = {
                offset: {
                    left: 4,
                    right: 4
                }
            },
            hasThread: T,
            isSystemMessage: g,
            hasReply: S,
            ...A
        } = e, N = (0, r.jsx)(o.FocusRing, {
            ...I,
            children: (0, r.jsxs)('div', {
                className: a()(t, {
                    [s.wrapper]: !0,
                    [s.contentOnly]: i,
                    [s.compact]: n,
                    [s.cozy]: !n,
                    [s.zalgo]: l,
                    [s.hasThread]: T,
                    [s.isSystemMessage]: g,
                    [s.hasReply]: S
                }),
                ref: m,
                ...A,
                role: 'article',
                children: [
                    c,
                    d,
                    (0, r.jsxs)('div', {
                        className: s.contents,
                        children: [
                            E,
                            _,
                            null == E && h
                        ]
                    }),
                    p,
                    null != f ? (0, r.jsx)('div', {
                        className: s.buttonContainer,
                        children: f
                    }) : null
                ]
            })
        });
    return u ? (0, r.jsx)(o.FocusBlock, { children: N }) : N;
};
