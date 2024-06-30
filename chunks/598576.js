o.r(n), o.d(n, {
    default: function () {
        return x;
    }
});
var t = o(735250);
o(470079);
var r = o(481060), s = o(864762), i = o(509340), c = o(135184), a = o(409553), l = o(494801), d = o(319392), u = o(798930), _ = o(981631), C = o(985571);
function x(e) {
    let {
            transitionState: n,
            onClose: o,
            analyticsLocation: x
        } = e, {
            slide: p,
            gotoNext: O,
            gotoError: g,
            handleWaitingForConnection: f,
            handleAuthToken: N,
            expectedCallbackState: h,
            callbackData: A
        } = (0, s.k)(x, _.ABu.XBOX);
    return (0, t.jsx)(r.ModalRoot, {
        className: C.modal,
        transitionState: n,
        disableTrack: !0,
        children: (0, t.jsxs)(r.Slides, {
            activeSlide: p,
            width: 408,
            children: [
                (0, t.jsx)(r.Slide, {
                    id: u.O.LANDING,
                    children: (0, t.jsx)(a.Z, {
                        onContinue: O,
                        onClose: o
                    })
                }),
                (0, t.jsx)(r.Slide, {
                    id: u.O.PRE_CONNECT,
                    children: (0, t.jsx)(l.Z, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: f,
                        onAuthToken: N,
                        onError: g,
                        onClose: o
                    })
                }),
                (0, t.jsx)(r.Slide, {
                    id: u.O.PRE_CONNECT_WAITING,
                    children: (0, t.jsx)(l.Z, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: h,
                        onAuthToken: N,
                        onError: g,
                        onClose: o
                    })
                }),
                (0, t.jsx)(r.Slide, {
                    id: u.O.DISCORD_CONSENT,
                    children: (0, t.jsx)(i.Z, {
                        authToken: A,
                        onContinue: O,
                        onError: g,
                        onClose: o
                    })
                }),
                (0, t.jsx)(r.Slide, {
                    id: u.O.ERROR,
                    children: (0, t.jsx)(c.Z, {
                        onContinue: O,
                        onClose: o
                    })
                }),
                (0, t.jsx)(r.Slide, {
                    id: u.O.SUCCESS,
                    children: (0, t.jsx)(d.Z, { onClose: o })
                })
            ]
        })
    });
}
