var a = t(735250);
t(470079);
var n = t(442837), l = t(481060), s = t(594174), r = t(429239);
i.Z = function (e) {
    let {
            recipients: i,
            size: t,
            status: c,
            isTyping: d,
            className: o,
            ...u
        } = e, A = l.AvatarSizeSpecs[t], I = (0, n.Wu)([s.default], () => i.slice(0, 2).map(e => {
            let i = s.default.getUser(e);
            if (null != i)
                return i.getAvatarURL(void 0, A.size, !1);
        }), [
            i,
            A.size
        ]);
    return (0, a.jsx)(r.Z, {
        'aria-label': u['aria-label'],
        'aria-hidden': u['aria-hidden'],
        backSrc: I[0],
        frontSrc: I[1],
        size: t,
        status: c,
        isTyping: null != d && d,
        className: o
    });
};
