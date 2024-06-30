o.d(e, {
    Z: function () {
        return C;
    }
});
var t = o(735250);
o(470079);
var r = o(212598), i = o(728151), c = o(981631), s = o(689938), l = o(344595), a = o(322539);
function C(n) {
    let {
            isWaitingForConnection: e,
            onWaitingForConnection: o,
            expectedCallbackState: C,
            onAuthToken: u,
            onError: d,
            onClose: _
        } = n, N = e ? (0, t.jsx)('img', {
            src: a,
            width: '168',
            height: '124',
            alt: ''
        }) : (0, t.jsx)('img', {
            src: l,
            width: '152',
            height: '123',
            alt: ''
        }), L = e ? s.Z.Messages.CRUNCHYROLL_DETAILS_TITLE_WAITING : s.Z.Messages.CRUNCHYROLL_DETAILS_TITLE, R = e ? s.Z.Messages.CRUNCHYROLL_DETAILS_BODY_WAITING : s.Z.Messages.CRUNCHYROLL_DETAILS_BODY;
    return (0, t.jsx)(r.t, {
        platformType: c.ABu.CRUNCHYROLL,
        isWaitingForConnection: e,
        onWaitingForConnection: o,
        expectedCallbackState: C,
        onAuthToken: u,
        onError: d,
        onClose: _,
        img: N,
        title: L,
        body: R,
        redirectDestination: i.pY
    });
}
