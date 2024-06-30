n.d(t, {
    Np: function () {
        return c;
    },
    l8: function () {
        return r;
    },
    mc: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), s = n(822869);
let l = 'forward-modal';
function r(e) {
    let {
        messageId: t,
        channelId: r,
        source: o,
        initialSelectedDestinations: c = [],
        forwardOptions: d,
        onRequestSent: u
    } = e;
    (0, s.Lb)(r, t, o), (0, a.openModalLazy)(async () => {
        let {ForwardModal: e} = await Promise.all([
            n.e('6380'),
            n.e('35494')
        ]).then(n.bind(n, 930864));
        return n => (0, i.jsx)(e, {
            ...n,
            channelId: r,
            messageId: t,
            initialSelectedDestinations: c,
            forwardOptions: d,
            onRequestSent: u
        });
    }, { modalKey: l });
}
function o() {
    (0, a.closeModal)(l);
}
function c(e) {
    let {
        messageId: t,
        channelId: s,
        failedDestinations: l,
        forwardOptions: r
    } = e;
    (0, a.openModalLazy)(async () => {
        let {ForwardFailedAlertModal: e} = await n.e('86590').then(n.bind(n, 384331));
        return n => (0, i.jsx)(e, {
            ...n,
            messageId: t,
            channelId: s,
            failedDestinations: l,
            forwardOptions: r
        });
    });
}
