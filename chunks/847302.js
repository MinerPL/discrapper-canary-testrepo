n.d(t, {
    Gg: function () {
        return S;
    },
    KH: function () {
        return I;
    },
    ZP: function () {
        return m;
    }
}), n(47120), n(653041);
var r = n(512722), i = n.n(r), a = n(911969), o = n(998698), s = n(465343), l = n(53529), u = n(341702), c = n(925994), d = n(436660), _ = n(887490);
let E = /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\ |\\\\|\\"|(?!")\w)+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g, f = new Set([
        'emoji',
        'customEmoji',
        'textMention',
        'userMention',
        'roleMention',
        'channelMention',
        'staticRouteLink',
        'soundboard',
        'timestamp'
    ]), h = new Set([
        'line',
        'blockQuote'
    ]), p = new Set(['applicationCommandOption']);
function m(e, t, n) {
    let {
        isInline: r,
        isVoid: i,
        onChange: a
    } = e;
    e.isVoid = e => !!f.has(e.type) || i(e), e.isInline = e => !!f.has(e.type) || r(e);
    let o = null, s = !0;
    return e.onChange = () => {
        let r = _.bN.richValue(e);
        (r !== o || e.previewMarkdown !== s) && (l.T.withMergedEntry(e, () => {
            _.bN.withoutNormalizing(e, () => I(e, t, n));
        }), o = r, s = e.previewMarkdown), a();
    }, e;
}
function I(e, t, n) {
    let r = _.bN.areStylesDisabled(e);
    for (let i of _.bN.blocks(e))
        if (h.has(i[0].type))
            r ? g(e, i, !0, null) : T(e, i, t, n);
        else {
            let [a, o] = i;
            for (let i = a.children.length - 1; i >= 0; i--) {
                let s = a.children[i];
                if (p.has(s.type)) {
                    let a = [
                        s,
                        _.C0.child(o, i)
                    ];
                    r ? g(e, a, !0, null) : T(e, a, t, n);
                }
            }
        }
}
function T(e, t, n, r) {
    var a;
    let o = 'line' === t[0].type && (null === (a = t[0].codeBlockState) || void 0 === a ? void 0 : a.isInCodeBlock) === !0, l = _.q.markdown(t[0], n);
    g(e, t, o, l) && (t = _.q.updateElement(e, t), l = _.q.markdown(t[0], n)), !o && (S(e, t, r, l) && (t = _.q.updateElement(e, t), l = _.q.markdown(t[0], n)), function (e, t, n, r, a) {
        let [o, l] = t, u = !1;
        for (let c = o.children.length - 1; c >= 0; c--) {
            let f;
            let h = o.children[c];
            if (!_.LC.isText(h))
                continue;
            let p = _.C0.child(l, c), m = [];
            for (E.lastIndex = 0; null != (f = E.exec(h.text));) {
                if (0 !== f.index && null == h.text.charAt(f.index - 1).match(/(\t|\s)/)) {
                    E.lastIndex = f.index + 1;
                    continue;
                }
                if (A(e, l, {
                        path: p,
                        offset: f.index
                    }, a))
                    continue;
                let i = (0, s.i)(f[0], n, r);
                null != i && N(r, t[0], i) ? m.push({
                    index: f.index,
                    length: f[0].length,
                    node: i
                }) : E.lastIndex = f.index + 1;
            }
            for (let t of m.reverse())
                (function (e, t, n, r, a) {
                    let [o, s] = t, l = {
                            path: s,
                            offset: n
                        }, u = {
                            path: s,
                            offset: n + r
                        };
                    i()(l.offset >= 0 && l.offset <= o.text.length, 'Failed to find valid start position for raw mention replace'), i()(u.offset >= 0 && u.offset <= o.text.length, 'Failed to find valid end position for raw mention replace'), d.Q.textToVoid(e, a, {
                        anchor: l,
                        focus: u
                    });
                }(e, [
                    h,
                    _.C0.child(l, c)
                ], t.index, t.length, t.node), u = !0);
        }
        ;
    }(e, t, n, r, l));
}
function g(e, t, n, r) {
    let [i, a] = t, o = !1;
    for (let t = i.children.length - 1; t >= 0; t--) {
        let s = i.children[t], l = t < i.children.length - 1 ? i.children[t + 1] : null;
        if (_.LC.isText(s) && !n) {
            if (null == l || !e.isVoid(l))
                continue;
            let n = !1, r = 0;
            for (;;) {
                let e = s.text.indexOf('\\', r);
                if (-1 === e)
                    break;
                if (e === s.text.length - 1) {
                    n = !0;
                    break;
                }
                r = e + 2;
            }
            if (n) {
                let n = _.C0.child(a, t + 1);
                d.Q.voidToText(e, (0, c.sg)(l, {
                    mode: 'plain',
                    preventEmojiSurrogates: !0
                }), n), o = !0;
            }
        } else if (e.isVoid(s)) {
            let i = _.C0.child(a, t), l = {
                    path: _.C0.child(i, 0),
                    offset: 0
                };
            (n || null != r && A(e, a, l, r)) && (d.Q.voidToText(e, (0, c.sg)(s, {
                mode: 'plain',
                preventEmojiSurrogates: !0
            }), i), o = !0);
        }
    }
    return o;
}
function S(e, t, n, r) {
    let i = t[1], a = !1, o = [...r.entries].reverse();
    for (let s = 0; s < o.length; s++) {
        let l;
        let c = o[s], _ = o[s + 1];
        if (null != _ && _.text.endsWith('\\') && c.start === _.start + _.text.length)
            continue;
        switch (c.attributes[0]) {
        case 'emoji':
            l = {
                type: 'emoji',
                emoji: {
                    name: c.data.name,
                    src: c.data.src,
                    surrogate: c.data.surrogate,
                    jumboable: !0 === c.data.jumboable
                },
                children: [{ text: '' }]
            };
            break;
        case 'customEmoji':
            l = {
                type: 'customEmoji',
                emoji: {
                    emojiId: c.data.emojiId,
                    name: c.data.name,
                    animated: c.data.animated,
                    jumboable: !0 === c.data.jumboable
                },
                children: [{ text: '' }]
            };
            break;
        case 'textMention':
            l = {
                type: 'textMention',
                name: c.data.text,
                children: [{ text: '' }]
            };
            break;
        case 'mention':
            l = {
                type: 'userMention',
                userId: c.data.id,
                children: [{ text: '' }]
            };
            break;
        case 'roleMention':
            l = {
                type: 'roleMention',
                roleId: c.data.id,
                children: [{ text: '' }]
            };
            break;
        case 'channelMention':
            l = {
                type: 'channelMention',
                channelId: c.data.id,
                children: [{ text: '' }]
            };
            break;
        case 'staticRouteLink':
            l = {
                type: 'staticRouteLink',
                channelId: c.data.id,
                children: [{ text: '' }]
            };
            break;
        case 'soundboard':
            l = {
                type: 'soundboard',
                soundId: c.data.id,
                children: [{ text: '' }]
            };
            break;
        case 'timestamp':
            l = {
                type: 'timestamp',
                parsed: c.data,
                children: [{ text: '' }]
            };
            break;
        default:
            continue;
        }
        if (!N(n, t[0], l))
            continue;
        let E = (0, u.t)(e, i, r.serializedChildren, c.start), f = (0, u.t)(e, i, r.serializedChildren, c.start + c.text.length);
        d.Q.textToVoid(e, l, {
            anchor: E,
            focus: f
        }), a = !0;
    }
    return a;
}
function A(e, t, n, r) {
    let i = 0;
    for (let [r, a] of _.bN.nodes(e, {
            at: {
                anchor: _.bN.start(e, t),
                focus: n
            },
            mode: 'lowest'
        }))
        _.LC.isText(r) ? _.C0.equals(a, n.path) ? i += n.offset : i += r.text.length : i += 1;
    for (let e of r.entries) {
        if (!e.attributes.includes('codeBlockText') && !e.attributes.includes('inlineCode'))
            continue;
        let t = e.start, n = e.start + e.text.length;
        if (t <= i && n >= i)
            return !0;
    }
    return !1;
}
function N(e, t, n) {
    if ('applicationCommandOption' !== t.type)
        return !0;
    switch (t.optionType) {
    case a.jw.CHANNEL:
        return 'channelMention' === n.type;
    case a.jw.ROLE:
        return 'roleMention' === n.type || 'textMention' === n.type && '@everyone' === n.name;
    case a.jw.USER:
        return 'userMention' === n.type;
    case a.jw.MENTIONABLE:
        return 'roleMention' === n.type || 'userMention' === n.type || 'textMention' === n.type && '@everyone' === n.name;
    case a.jw.STRING: {
            let n = null != e ? o.Z.getOption(e, t.optionName) : null;
            return (null == n ? void 0 : n.choices) == null && (null == n ? void 0 : n.autocomplete) !== !0;
        }
    default:
        return !1;
    }
}
