n(47120), n(653041);
var r = n(913527),
    i = n.n(r),
    a = n(627420),
    s = n(375964),
    o = n.n(s),
    l = n(924658),
    u = n.n(l),
    c = n(539590),
    d = n.n(c);
let _ = (e) => ({
        ...u(),
        ...d(),
        ...e
    }),
    E = new a.ZP({
        getMessages: (e) => {
            if ('en-US' === e) return _(o());
            return n(385007)('./'.concat(e, '.jsona'))
                .then((e) => {
                    let { default: t } = e;
                    return t;
                })
                .then(_);
        },
        getLanguages: () => n(515297)
    });
function f(e) {
    n(763747)
        .q[e]()
        .then((t) => {
            let { default: r } = t;
            {
                let { registerLocale: t } = n(578807);
                t(e, r);
            }
        });
}
E.addListener('locale', (e) => {
    !(function (e, t) {
        let n = [],
            r = ('no' === e ? 'nb' : e).split('-');
        for (; r.length > 0; ) n.push(r.join('-')), r.pop();
        n.push(t), i().locale(n);
    })(e, 'en-US');
    let { setTags: t } = n(960048).Z;
    t({ locale: e });
});
E.addListener('locale', f), f(E.getLocale()), (t.Z = E);
