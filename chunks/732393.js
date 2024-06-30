t.d(n, {
    Z: function () {
        return I;
    }
}), t(47120);
var i = t(735250);
t(470079);
var a = t(442837), r = t(481060), d = t(239091), s = t(596454), u = t(339085), l = t(883429), o = t(456269), c = t(665906), Z = t(592125), f = t(710352), h = t(689938), v = t(371601);
function _(e) {
    let {tag: n} = e, {
            name: t,
            emojiId: r,
            emojiName: d
        } = n, l = (0, a.e7)([u.Z], () => null != r ? u.Z.getUsableCustomEmojiById(r) : null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.Z, {
                className: v.emoji,
                emojiId: r,
                emojiName: d,
                animated: !!(null == l ? void 0 : l.animated)
            }),
            t
        ]
    });
}
function I(e) {
    let n = (0, a.e7)([Z.Z], () => Z.Z.getChannel(e), [e]), t = (0, c.C7)(n), s = (0, a.e7)([Z.Z], () => Z.Z.getChannel(null == n ? void 0 : n.parent_id), [n]), u = (0, o.Vm)(s), v = (0, o.eV)(n), I = v.length >= f.Cn, M = (0, c.$R)(n);
    if (null == n)
        return (0, d.Zy)(), null;
    if (!t || __OVERLAY__ || !n.isForumPost() || (null == u ? void 0 : u.length) === 0 || !M)
        return null;
    let T = e => {
            let t = new Set(v);
            if (t.has(e))
                t.delete(e);
            else {
                if (I)
                    return;
                t.add(e);
            }
            let i = Array.from(t).map(e => e.id);
            l.Z.updateForumPostTags(n.id, i);
        }, m = null == u ? void 0 : u.map(e => {
            let n = v.includes(e);
            return (0, i.jsx)(r.MenuCheckboxItem, {
                id: e.id,
                label: (0, i.jsx)(_, { tag: e }),
                disabled: I && !n,
                action: () => T(e),
                checked: n
            }, e.id);
        });
    return (0, i.jsx)(r.MenuItem, {
        id: 'edit-tags',
        label: h.Z.Messages.FORUM_TAG_POST_EDIT,
        children: m
    });
}
