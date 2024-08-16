o.d(n, {
    Z: function () {
        return d;
    }
});
var t = o(735250);
o(470079);
var s = o(212598),
    r = o(981631),
    i = o(927923),
    c = o(689938),
    a = o(397995),
    l = o(848499);
function d(e) {
    let { isWaitingForConnection: n, onWaitingForConnection: o, expectedCallbackState: d, onAuthToken: u, onError: _, onClose: C } = e,
        x = n
            ? (0, t.jsx)('img', {
                  src: l,
                  width: '168',
                  height: '124',
                  alt: ''
              })
            : (0, t.jsx)('img', {
                  src: a,
                  width: '152',
                  height: '124',
                  alt: ''
              }),
        p = n ? c.Z.Messages.XBOX_DETAILS_TITLE_WAITING : c.Z.Messages.XBOX_DETAILS_TITLE,
        O = n ? c.Z.Messages.XBOX_DETAILS_BODY_WAITING : c.Z.Messages.XBOX_DETAILS_BODY;
    return (0, t.jsx)(s.t, {
        platformType: r.ABu.XBOX,
        isWaitingForConnection: n,
        onWaitingForConnection: o,
        expectedCallbackState: d,
        onAuthToken: u,
        onError: _,
        onClose: C,
        img: x,
        title: p,
        body: O,
        redirectDestination: i.zM
    });
}
