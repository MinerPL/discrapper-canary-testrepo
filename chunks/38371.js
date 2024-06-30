n.d(t, {
    M9: function () {
        return C;
    },
    Pb: function () {
        return E;
    },
    XX: function () {
        return _;
    },
    ZP: function () {
        return g;
    },
    ZT: function () {
        return h;
    },
    iv: function () {
        return f;
    },
    pk: function () {
        return m;
    }
});
var i = n(735250);
n(470079);
var a = n(120356), l = n.n(a), s = n(392711), r = n.n(s), o = n(481060), c = n(230953);
function u(e) {
    return ''.concat(e / 16, 'rem');
}
function d() {
    return (0, i.jsx)('div', {
        className: c.avatar,
        style: { opacity: 0.08 }
    });
}
function h(e) {
    let {
        width: t,
        opacity: n,
        className: a
    } = e;
    return (0, i.jsx)('div', {
        className: l()(a, { [c.blob]: !0 }),
        style: {
            width: u(t),
            opacity: null != n ? n : r().random(0.02, 0.08)
        }
    });
}
function p(e) {
    let t, {
            groupStart: n = !1,
            compact: a = !1,
            attachmentSpecs: s,
            usernameWidth: u,
            usernameOpacity: p,
            className: m,
            style: _
        } = e, f = a ? 50 : r().random(40, 50);
    return !a && n ? t = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d, {}),
            (0, i.jsx)(o.H, {
                className: c.header,
                children: (0, i.jsx)(h, {
                    width: u,
                    opacity: p,
                    className: c.__invalid_username
                })
            })
        ]
    }) : a && (t = (0, i.jsxs)(i.Fragment, {
        children: [
            a && (0, i.jsx)(h, {
                width: f,
                className: l()({
                    [c.compactTimestamp]: !0,
                    [c.hidden]: !n
                })
            }),
            (0, i.jsx)(o.H, {
                className: c.header,
                children: (0, i.jsx)(h, {
                    width: u,
                    opacity: p
                })
            })
        ]
    })), (0, i.jsxs)('div', {
        'aria-hidden': !0,
        className: l()(m, {
            [c.wrapper]: !0,
            [c.compact]: a,
            [c.cozy]: !a
        }),
        style: _,
        children: [
            (0, i.jsxs)('div', {
                className: c.contents,
                children: [
                    t,
                    (0, i.jsx)('div', {
                        className: c.content,
                        children: Array(r().random(3, 8)).fill(null).map(() => r().random(30, 80)).map((e, t) => (0, i.jsx)(h, {
                            width: e,
                            opacity: 0.06
                        }, t))
                    })
                ]
            }),
            null != s && (0, i.jsx)('div', {
                className: c.attachmentContainer,
                children: (0, i.jsx)('div', {
                    className: c.attachment,
                    style: {
                        opacity: 0.03,
                        ...s
                    }
                })
            })
        ]
    });
}
let m = 44, _ = 22, f = 26, E = 26, C = 6;
function g(e) {
    let {
            messages: t,
            groupSpacing: n = 0,
            compact: a = !1,
            attachmentSpecs: l,
            className: s
        } = e, o = null != l ? l.last ? t - 1 : r().random(0, t - 1) : -1, c = r().random(80, 120), d = r().random(0.1, 0.2);
    return (0, i.jsx)(i.Fragment, {
        children: Array(t).fill(null).map((e, t) => (0, i.jsx)(p, {
            compact: a,
            className: s,
            usernameWidth: c,
            usernameOpacity: d,
            groupStart: 0 === t,
            attachmentSpecs: t === o ? l : void 0,
            style: 0 === t ? { marginTop: u(n) } : void 0
        }, t))
    });
}
