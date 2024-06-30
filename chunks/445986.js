s.d(t, {
    Q: function () {
        return c;
    }
}), s(653041), s(47120);
var n = s(735250), i = s(470079), a = s(481060), r = s(33122), l = s(761705), o = s(9807), h = s(843445), d = s(981631), u = s(689938);
function c(e) {
    return ''.concat(e.split('?')[0], '?size=').concat(2048);
}
let p = e => {
    let {
            index: t,
            items: s,
            ...i
        } = e, a = s[t], r = 0, o = [];
    for (let e of s)
        if (e.type === d.s9s.IMG) {
            let {
                width: t,
                height: s,
                src: n
            } = e;
            e === a && (r = o.length), o.push({
                src: c(n),
                width: t,
                height: s
            });
        }
    return (0, n.jsx)(l.Z, {
        ...i,
        items: o,
        startWith: r
    });
};
class m extends i.Component {
    render() {
        let {
                pageSize: e,
                ...t
            } = this.props, s = e === h.b.SMALL ? o.Z : r.Z;
        return (0, n.jsx)(s, {
            ...t,
            onCurrentItemClick: this.handleCurrentItemClick
        });
    }
    constructor(...e) {
        var t, s, i;
        super(...e), t = this, s = 'handleCurrentItemClick', i = (e, t) => {
            e.type === d.s9s.IMG && !(0, a.hasAnyModalOpen)() && (0, a.openModal)(e => (0, n.jsx)(a.ModalRoot, {
                size: a.ModalSize.DYNAMIC,
                'aria-label': u.Z.Messages.IMAGE,
                ...e,
                children: (0, n.jsx)(p, {
                    ...e,
                    index: t,
                    items: this.props.items
                })
            }));
        }, s in t ? Object.defineProperty(t, s, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[s] = i;
    }
}
t.Z = m;
