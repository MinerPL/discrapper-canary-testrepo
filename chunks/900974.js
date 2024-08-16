var i = n(735250);
n(470079);
var a = n(481060),
    s = n(570140);
let r = !1,
    l = null;
t.Z = {
    init() {
        s.Z.subscribe('CONNECTION_OPEN', (e) => {
            let { pendingPayments: t } = e;
            if (null != t && t.length > 0) {
                var s;
                if (l === t[0] || null == (l = t[0])) return;
                (s = l),
                    r ||
                        ((r = !0),
                        (0, a.openModalLazy)(async () => {
                            let { default: e } = await n.e('7232').then(n.bind(n, 645586));
                            return (t) => {
                                let { transitionState: n, onClose: a } = t;
                                return (0, i.jsx)(e, {
                                    pendingPayment: s,
                                    transitionState: n,
                                    onClose: () => ((r = !1), a())
                                });
                            };
                        }));
            }
        });
    }
};
