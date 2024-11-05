r.d(t, {
    x: function () {
        return _;
    }
});
var n = r(116698),
    a = r(928541);
function _(e) {
    let t = [];
    function r(e) {
        return t.splice(t.indexOf(e), 1)[0] || Promise.resolve(void 0);
    }
    return {
        $: t,
        add: function (_) {
            if (!(void 0 === e || t.length < e)) return (0, a.$2)(new n.b('Not adding Promise because buffer limit was reached.'));
            let o = _();
            return -1 === t.indexOf(o) && t.push(o), o.then(() => r(o)).then(null, () => r(o).then(null, () => {})), o;
        },
        drain: function (e) {
            return new a.cW((r, n) => {
                let _ = t.length;
                if (!_) return r(!0);
                let o = setTimeout(() => {
                    e && e > 0 && r(!1);
                }, e);
                t.forEach((e) => {
                    (0, a.WD)(e).then(() => {
                        !--_ && (clearTimeout(o), r(!0));
                    }, n);
                });
            });
        }
    };
}
