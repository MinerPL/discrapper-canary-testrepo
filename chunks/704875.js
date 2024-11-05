n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(628692),
    o = n(845537),
    l = n(653309),
    u = n(631853),
    c = n(896061),
    d = n(554034);
function f(e, t, n) {
    var i, c;
    let { attributes: f, children: h, element: p, decorations: m } = e,
        g = (function (e) {
            return Object.entries(e)
                .filter((e) => {
                    let [t] = e;
                    return 'anchor' !== t && 'focus' !== t;
                })
                .map((e) => {
                    let [t, n] = e;
                    return !0 === n && t in l.U ? l.U[t] : null;
                })
                .filter((e) => null != e)
                .join(' ');
        })(null !== (i = null == m ? void 0 : m[0]) && void 0 !== i ? i : {});
    switch (p.type) {
        case 'line':
            if (null === (c = p.codeBlockState) || void 0 === c ? void 0 : c.isInCodeBlock)
                return (0, r.jsx)('div', {
                    className: u.codeLine,
                    spellCheck: null == p.codeBlockState || null == p.codeBlockState.lang,
                    ...f,
                    children: h
                });
            return (0, r.jsx)('div', {
                ...f,
                children: h
            });
        case 'blockQuote': {
            let e = a()(d.blockquoteContainer, d.slateBlockquoteContainer);
            return (0, r.jsxs)('div', {
                ...f,
                className: e,
                children: [
                    (0, r.jsx)('span', {
                        contentEditable: !1,
                        className: d.blockquoteDivider
                    }),
                    (0, r.jsx)('blockquote', { children: h })
                ]
            });
        }
        case 'emoji':
            return (0, r.jsxs)(_, {
                attributes: f,
                className: g,
                children: [(0, r.jsx)(o.dy, { emoji: p.emoji }), h]
            });
        case 'customEmoji':
            return (0, r.jsxs)(_, {
                attributes: f,
                className: g,
                children: [(0, r.jsx)(o.wP, { emoji: p.emoji }), h]
            });
        case 'textMention':
            return (0, r.jsxs)(_, {
                attributes: f,
                className: g,
                children: [
                    (0, r.jsx)(o.Ox, {
                        text: p.name,
                        channelId: n,
                        guildId: t
                    }),
                    h
                ]
            });
        case 'userMention':
            return (0, r.jsxs)(_, {
                attributes: f,
                className: g,
                children: [
                    (0, r.jsx)(o.cB, {
                        id: p.userId,
                        channelId: n,
                        guildId: t
                    }),
                    h
                ]
            });
        case 'roleMention':
            return (0, r.jsxs)(_, {
                attributes: f,
                className: g,
                children: [
                    (0, r.jsx)(o.Vq, {
                        id: p.roleId,
                        guildId: t
                    }),
                    h
                ]
            });
        case 'channelMention':
            return (0, r.jsxs)(_, {
                attributes: f,
                className: g,
                children: [(0, r.jsx)(o.Io, { id: p.channelId }), h]
            });
        case 'staticRouteLink':
            return (0, r.jsxs)(_, {
                attributes: f,
                className: g,
                children: [
                    (0, r.jsx)(o.NY, {
                        id: p.id,
                        itemId: p.itemId,
                        guildId: t
                    }),
                    h
                ]
            });
        case 'soundboard':
            return (0, r.jsxs)(_, {
                attributes: f,
                className: g,
                children: [(0, r.jsx)(s.mv, { soundId: p.soundId }), h]
            });
        case 'commandMention':
            return (0, r.jsxs)(_, {
                attributes: f,
                className: g,
                children: [
                    (0, r.jsx)(o.Wf, {
                        text: p.commandName,
                        id: p.commandId
                    }),
                    h
                ]
            });
        case 'timestamp':
            return (0, r.jsxs)(_, {
                attributes: f,
                className: g,
                children: [(0, r.jsx)(o.EK, { timestamp: p.parsed }), h]
            });
        default:
            return null;
    }
}
let _ = (e) => {
    let { className: t, attributes: n, children: i } = e,
        s = a()(c.inlineElement, c.inlineVoid, t);
    return (0, r.jsx)('span', {
        ...n,
        className: s,
        contentEditable: !1,
        children: i
    });
};
