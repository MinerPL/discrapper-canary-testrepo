n.d(t, {
    Z: function () {
        return s;
    }
}), n(47120);
var r = n(53529), i = n(436660), a = n(887490);
let o = ['applicationCommand'];
function s(e) {
    let {
        insertBreak: t,
        insertText: n
    } = e;
    return e.insertBreak = () => {
        l(e) && t();
    }, e.insertSoftBreak = () => {
        e.insertBreak();
    }, e.insertText = t => {
        if (0 > t.indexOf('\r') && 0 > t.indexOf('\n')) {
            n(t);
            return;
        }
        let a = t.split(/\r\n|\r|\n/);
        if (!l(e)) {
            n(a.join(' '));
            return;
        }
        r.T.withSingleEntry(e, () => {
            let t = !1;
            for (let r of a)
                t && i.Q.splitNodes(e, { always: !0 }), n(r), t = !0;
        });
    }, e;
}
function l(e) {
    let t = a.bN.getCurrentBlock(e);
    return null != t && !o.includes(t[0].type);
}
