t.d(n, {
    Np: function () {
        return u;
    },
    l8: function () {
        return o;
    },
    mc: function () {
        return s;
    },
    so: function () {
        return l;
    }
});
var a = t(200651);
t(192379);
var r = t(481060),
    i = t(822869);
let l = 'forward-modal';
function o(e) {
    let { messageId: n, channelId: o, message: s, source: u, initialSelectedDestinations: c = [], forwardOptions: d, onRequestSent: f } = e;
    (0, i.Lb)(o, n, u),
        (0, r.openModalLazy)(
            async () => {
                let { ForwardModal: e } = await Promise.all([t.e('6380'), t.e('99452')]).then(t.bind(t, 930864));
                return (t) =>
                    (0, a.jsx)(e, {
                        ...t,
                        channelId: o,
                        messageId: n,
                        message: s,
                        initialSelectedDestinations: c,
                        forwardOptions: d,
                        onRequestSent: f
                    });
            },
            { modalKey: l }
        );
}
function s() {
    (0, r.closeModal)(l);
}
function u(e) {
    let { messageId: n, channelId: i, message: l, failedDestinations: o, forwardOptions: s } = e;
    (0, r.openModalLazy)(async () => {
        let { ForwardFailedAlertModal: e } = await t.e('86590').then(t.bind(t, 384331));
        return (t) =>
            (0, a.jsx)(e, {
                ...t,
                messageId: n,
                channelId: i,
                message: l,
                failedDestinations: o,
                forwardOptions: s
            });
    });
}
