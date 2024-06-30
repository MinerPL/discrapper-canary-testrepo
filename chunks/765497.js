r.d(e, {
    x: function () {
        return a;
    }
});
var n = r(303155), _ = r(880803);
function a(t) {
    let e = [];
    function r(t) {
        return e.splice(e.indexOf(t), 1)[0];
    }
    return {
        $: e,
        add: function (a) {
            if (!(void 0 === t || e.length < t))
                return (0, _.$2)(new n.b('Not adding Promise because buffer limit was reached.'));
            let i = a();
            return -1 === e.indexOf(i) && e.push(i), i.then(() => r(i)).then(null, () => r(i).then(null, () => {
            })), i;
        },
        drain: function (t) {
            return new _.cW((r, n) => {
                let a = e.length;
                if (!a)
                    return r(!0);
                let i = setTimeout(() => {
                    t && t > 0 && r(!1);
                }, t);
                e.forEach(t => {
                    (0, _.WD)(t).then(() => {
                        !--a && (clearTimeout(i), r(!0));
                    }, n);
                });
            });
        }
    };
}
