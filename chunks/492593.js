var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(438379);
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
        } = e,
        N = (0, r.jsx)(s.FocusRing, {
            ...I,
            children: (0, r.jsxs)('div', {
                className: a()(t, {
                    [o.wrapper]: !0,
                    [o.contentOnly]: i,
                    [o.compact]: n,
                    [o.cozy]: !n,
                    [o.zalgo]: l,
                    [o.hasThread]: T,
                    [o.isSystemMessage]: g,
                    [o.hasReply]: S
                }),
                ref: m,
                ...A,
                role: 'article',
                children: [
                    c,
                    d,
                    (0, r.jsxs)('div', {
                        className: o.contents,
                        children: [E, _, null == E && h]
                    }),
                    p,
                    null != f
                        ? (0, r.jsx)('div', {
                              className: o.buttonContainer,
                              children: f
                          })
                        : null
                ]
            })
        });
    return u ? (0, r.jsx)(s.FocusBlock, { children: N }) : N;
};
