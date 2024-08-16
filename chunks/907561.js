t.d(n, {
    Km: function () {
        return i;
    },
    bC: function () {
        return o;
    },
    md: function () {
        return s;
    }
});
var a = t(470079),
    r = t(772848);
let i = 262,
    s = 100;
function o(e, n) {
    let t = a.useMemo(() => 'clan-banner-container-'.concat((0, r.Z)()), []);
    return {
        styleContent: a.useMemo(() => {
            let a = e.map((e, n) => '--primary-'.concat(n, ': ').concat(e, ';')).join('\n'),
                r = n.map((e, n) => '--secondary-'.concat(n, ': ').concat(e, ';')).join('\n');
            return '#'.concat(t, ' {\n        ').concat(a, '\n        ').concat(r, '\n      }');
        }, [t, e, n]),
        containerId: t
    };
}
