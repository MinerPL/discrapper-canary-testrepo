s.r(n),
    s.d(n, {
        default: function () {
            return x;
        }
    }),
    s(47120);
var a = s(735250),
    t = s(470079),
    i = s(990547),
    l = s(481060),
    o = s(613734),
    r = s(409617),
    c = s(451426),
    d = s(384725),
    _ = s(534044),
    E = s(670199),
    N = s(800530),
    u = s(981631),
    A = s(901030);
function x(e) {
    let { classificationId: n, transitionState: s, initialSlide: x = N.Cs.SPEED_BUMP, onClose: I } = e,
        [m, S] = t.useState(x),
        { classification: C, isDsaEligible: T } = (0, o.YG)(null != n ? n : u.lds),
        h = (null == C ? void 0 : C.is_spam) || !1,
        L = (null == C ? void 0 : C.is_coppa) || !1;
    t.useEffect(() => {
        S(x);
    }, [S, x]);
    let M = t.useCallback(() => {
            d.Z.close(), I();
        }, [I]),
        p = t.useCallback(() => {
            var e;
            let n = null === (e = N.JQ[m]) || void 0 === e ? void 0 : e.next;
            n ? S(n) : M();
        }, [m, M]),
        P = t.useCallback(() => {
            var e;
            let n = null === (e = N.JQ[m]) || void 0 === e ? void 0 : e.prev;
            n ? S(n) : M();
        }, [m, M]);
    return (0, a.jsx)(l.ModalRoot, {
        transitionState: s,
        disableTrack: !0,
        size: l.ModalSize.DYNAMIC,
        children: (0, a.jsx)('div', {
            className: A.container,
            children: (0, a.jsxs)(l.Slides, {
                activeSlide: m,
                width: 500,
                children: [
                    (0, a.jsx)(l.Slide, {
                        id: N.Cs.SPEED_BUMP,
                        impressionName: i.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
                        impressionProperties: N.ZW,
                        children: (0, a.jsx)(E.Z, {
                            classification: C,
                            onClose: M,
                            onNext: p,
                            isSpam: h,
                            isCoppa: L,
                            isDsaEligible: T
                        })
                    }),
                    (0, a.jsx)(l.Slide, {
                        id: N.Cs.COLLECT_SIGNAL,
                        impressionName: i.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
                        impressionProperties: N.ZW,
                        children: (0, a.jsx)(r.Z, {
                            isDsaEligible: T,
                            onClose: M,
                            onNext: p,
                            onBack: P
                        })
                    }),
                    (0, a.jsx)(l.Slide, {
                        id: N.Cs.CONFIRM_SUBMISSION,
                        impressionName: i.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                        impressionProperties: N.ZW,
                        children: (0, a.jsx)(c.Z, {
                            isDsaEligible: T,
                            onClose: M,
                            onNext: p,
                            onBack: P
                        })
                    }),
                    (0, a.jsx)(l.Slide, {
                        id: N.Cs.REQUEST_SENT,
                        impressionName: i.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
                        impressionProperties: N.ZW,
                        children: (0, a.jsx)(_.Z, { onNext: p })
                    })
                ]
            })
        })
    });
}
