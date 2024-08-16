let r, i, a;
n.d(t, {
    AS: function () {
        return _;
    },
    Dw: function () {
        return E;
    },
    KF: function () {
        return c;
    },
    OU: function () {
        return u;
    },
    li: function () {
        return d;
    }
}),
    n(757143),
    n(47120),
    n(512722);
var s = n(911969),
    o = n(93725),
    l = n(226951);
function u(e) {
    return null == e ? [] : e.filter((t, n) => 'text' !== t.type || (n > 0 && n < e.length - 1 ? '' !== t.text : '' !== t.text.trim()));
}
function c(e, t) {
    let n = e[t],
        r = '';
    for (let e of n)
        switch (e.type) {
            case 'text':
            case 'textMention':
                r += e.text;
                break;
            case 'userMention':
                r += '<@'.concat(e.userId, '>');
                break;
            case 'channelMention':
                r += '<#'.concat(e.channelId, '>');
                break;
            case 'roleMention':
                r += '<@&'.concat(e.roleId, '>');
                break;
            case 'emoji':
                r += e.surrogate;
                break;
            case 'customEmoji':
                r += '<'
                    .concat(e.animated ? 'a' : '', ':')
                    .concat(e.name.replace(/:/g, '').split('~')[0], ':')
                    .concat(e.emojiId, '>');
        }
    return r;
}
function d(e, t) {
    return null == e[t] ? null : c(e, t);
}
function _(e, t) {
    if (e !== a) {
        var n;
        a = e;
        let { group: t, decimal: s } = null !== (n = o.L[e]) && void 0 !== n ? n : o.L['en-US'];
        (r = RegExp(l.Z.escape(t), 'g')), (i = RegExp(l.Z.escape(s), 'g'));
    }
    return t.replace(r, '').replace(i, '.');
}
function E(e, t) {
    let n = {};
    for (let i of t) {
        var r;
        let t = null === (r = e.options) || void 0 === r ? void 0 : r.find((e) => e.name === i.name);
        if (i.type !== s.jw.ATTACHMENT && (null == t ? !void 0 : !t.autocomplete)) n[i.name] = i;
    }
    return n;
}
n(689079);
