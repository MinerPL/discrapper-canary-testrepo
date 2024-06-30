n.d(t, {
    Z: function () {
        return m;
    }
}), n(47120), n(757143);
var r = n(470079), i = n(519953), a = n(911969), o = n(998698), s = n(91313), l = n(53529), u = n(436660), c = n(887490), d = n(515270), _ = n(847302), E = n(42530);
let f = (e, t, n) => ({
    getSlateEditor: () => e,
    submit(e) {
        e.preventDefault(), n();
    },
    focus() {
        c.bN.focus(e);
    },
    blur() {
        i.F3.blur(e);
    },
    getCurrentWord() {
        let t = e.selection;
        if (null == t || !c.Ew.isValid(e, t) || c.M8.isExpanded(t) || (0, d.L6)(e))
            return {
                word: null,
                isAtStart: !1
            };
        let [n, r] = c.bN.node(e, c.C0.parent(t.anchor.path)), [i, a] = c.bN.node(e, t.anchor.path), o = t.anchor.offset;
        if (!c.C0.hasPrevious(a) && c.LC.isText(i)) {
            let e = i.text.substring(0, o);
            if (c.aj.isType(n, 'applicationCommand') && o < n.command.displayName.length + 2)
                return {
                    word: e,
                    isAtStart: !0
                };
        }
        let s = '', l = !1;
        for (;;) {
            if (--o < 0) {
                if (!c.C0.hasPrevious(a)) {
                    l = !0;
                    break;
                }
                [i, a] = c.bN.node(e, c.C0.previous(a));
            }
            if (!c.LC.isText(i))
                break;
            let t = i.text[o];
            if (E.i$.test(t))
                break;
            s = t + s;
        }
        return {
            word: s,
            isAtStart: l && c.C0.isFirstEditorBlock(r)
        };
    },
    getFirstText() {
        var t, n;
        return null !== (n = null === (t = c.bN.getFirstText(e)) || void 0 === t ? void 0 : t.text) && void 0 !== n ? n : '';
    },
    getCurrentCommandOption() {
        let t = s.HZ(e);
        return null == t ? null : t[0].optionName;
    },
    getCurrentCommandOptionValue() {
        var n;
        let r = s.HZ(e);
        if (null == r)
            return [];
        let i = o.Z.getActiveCommand(t.id), a = null == i ? void 0 : null === (n = i.options) || void 0 === n ? void 0 : n.find(e => e.name === r[0].optionName);
        return null == a ? [] : s.IB(e, a, r[0], t.id);
    },
    getCommandOptionValues() {
        let n = o.Z.getActiveCommand(t.id);
        return null == n ? {} : s.tM(e, n, t.id);
    },
    insertText(n) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        l.T.withSingleEntry(e, () => {
            let a = s.HZ(e), o = null != a && h(t, a[0]);
            if (null != r && o && (u.Q.removeInlineChildren(e, a), i = !1), p(e, n, r, i), null != r && o) {
                let n = s.cr(e);
                if (a = c.q.updateElement(e, a), null != n) {
                    let r = c.q.markdown(n[0], t.guild_id);
                    (0, _.Gg)(e, a, t.id, r) && (a = c.q.updateElement(e, a));
                }
                s.xi(e, t.guild_id, t.id, c.q.updateElement(e, a), !1), u.Q.selectNextCommandOption(e);
            }
        });
    },
    insertAutocomplete(n) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        l.T.withSingleEntry(e, () => {
            let a = s.HZ(e), o = null != a && h(t, a[0]);
            if (o)
                u.Q.removeInlineChildren(e, a), i = !1;
            else {
                let {word: t} = this.getCurrentWord();
                null != t && t.length > 0 && u.Q.delete(e, {
                    distance: t.length,
                    unit: 'character',
                    reverse: !0
                });
            }
            p(e, n, r, i), o && u.Q.selectNextCommandOption(e);
        });
    },
    insertEmoji(t) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        l.T.withSingleEntry(e, () => {
            var r, i;
            let a = t.animated ? 'a' : '', o = null !== (i = null !== (r = t.originalName) && void 0 !== r ? r : t.name) && void 0 !== i ? i : '', s = ':'.concat(t.name, ':');
            p(e, s, null != t.id ? '<'.concat(a, ':').concat(o.replace(/:/g, ''), ':').concat(t.id, '>') : null, n);
        });
    }
});
function h(e, t) {
    var n;
    let r = o.Z.getActiveCommand(e.id), i = null == r ? void 0 : null === (n = r.options) || void 0 === n ? void 0 : n.find(e => e.name === t.optionName);
    return null != i && (i.type !== a.jw.STRING || (null == i ? void 0 : i.choices) != null || (null == i ? void 0 : i.autocomplete));
}
function p(e, t, n, r) {
    let i = c.bN.areStylesDisabled(e) || null == n ? t : n;
    l.T.withSingleEntry(e, () => {
        u.Q.insertText(e, r ? i + ' ' : i);
    });
}
function m(e, t, n, i) {
    r.useImperativeHandle(e, () => f(t, n, i), [
        t,
        n,
        i
    ]);
}
