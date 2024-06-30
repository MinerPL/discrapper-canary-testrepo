o.r(e), o.d(e, {
    default: function () {
        return N;
    }
});
var t = o(735250);
o(470079);
var r = o(481060), i = o(864762), c = o(779341), s = o(642566), l = o(742699), a = o(686494), C = o(573703), u = o(798930), d = o(981631), _ = o(985571);
function N(n) {
    let {
            transitionState: e,
            onClose: o,
            analyticsLocation: N
        } = n, {
            slide: L,
            gotoNext: R,
            gotoError: h,
            handleWaitingForConnection: p,
            handleAuthToken: x,
            expectedCallbackState: O,
            callbackData: T
        } = (0, i.k)(N, d.ABu.CRUNCHYROLL);
    return (0, t.jsx)(r.ModalRoot, {
        className: _.modal,
        transitionState: e,
        disableTrack: !0,
        children: (0, t.jsxs)(r.Slides, {
            activeSlide: L,
            width: 408,
            children: [
                (0, t.jsx)(r.Slide, {
                    id: u.O.LANDING,
                    children: (0, t.jsx)(l.Z, {
                        onContinue: R,
                        onClose: o
                    })
                }),
                (0, t.jsx)(r.Slide, {
                    id: u.O.PRE_CONNECT,
                    children: (0, t.jsx)(a.Z, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: p,
                        onAuthToken: x,
                        onError: h,
                        onClose: o
                    })
                }),
                (0, t.jsx)(r.Slide, {
                    id: u.O.PRE_CONNECT_WAITING,
                    children: (0, t.jsx)(a.Z, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: O,
                        onAuthToken: x,
                        onError: h,
                        onClose: o
                    })
                }),
                (0, t.jsx)(r.Slide, {
                    id: u.O.DISCORD_CONSENT,
                    children: (0, t.jsx)(c.Z, {
                        authToken: T,
                        onContinue: R,
                        onError: h,
                        onClose: o
                    })
                }),
                (0, t.jsx)(r.Slide, {
                    id: u.O.ERROR,
                    children: (0, t.jsx)(s.Z, {
                        onContinue: R,
                        onClose: o
                    })
                }),
                (0, t.jsx)(r.Slide, {
                    id: u.O.SUCCESS,
                    children: (0, t.jsx)(C.Z, { onClose: o })
                })
            ]
        })
    });
}
