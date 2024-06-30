s.r(t), s.d(t, {
    SafetyToolsSlides: function () {
        return o;
    }
}), s(47120);
var o, T, n = s(735250), a = s(470079), l = s(481060), i = s(285952), r = s(367408), _ = s(473092), S = s(419672), c = s(858597), E = s(486213), O = s(689938), d = s(20022);
(T = o || (o = {})).ACTIONS = 'ACTIONS', T.SAFETY_TIPS = 'SAFETY_TIPS', T.ABOUT_SAFETY_ALERTS = 'ABOUT_SAFETY_ALERTS';
t.default = e => {
    let {
            onClose: t,
            channelId: s,
            warningId: o,
            warningType: T,
            otherUserId: u,
            transitionState: A
        } = e, I = null != (0, r.M)(s), [L, C] = a.useState('ACTIONS'), N = a.useCallback(e => {
            (0, _.qc)({
                channelId: s,
                warningId: o,
                warningType: T,
                senderId: u,
                cta: e,
                isNudgeWarning: I
            });
        }, [
            s,
            o,
            T,
            u,
            I
        ]), R = a.useCallback(e => {
            let {
                text: t,
                onClick: s
            } = e;
            return (0, n.jsx)(l.Button, {
                look: l.Button.Looks.LINK,
                size: l.Button.Sizes.MIN,
                onClick: s,
                color: l.Button.Colors.CUSTOM,
                className: d.footerLink,
                children: t
            });
        }, []), x = a.useCallback(() => {
            switch (L) {
            case 'SAFETY_TIPS':
            case 'ABOUT_SAFETY_ALERTS':
                return (0, n.jsx)(R, {
                    text: O.Z.Messages.BACK,
                    onClick: () => C('ACTIONS')
                });
            default:
                return null;
            }
        }, [
            L,
            R
        ]), M = a.useCallback(() => {
            switch (L) {
            case 'SAFETY_TIPS':
                return O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_SAFETY_TIPS_TITLE;
            case 'ABOUT_SAFETY_ALERTS':
                return O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_TITLE;
            default:
                return O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER;
            }
        }, [L]), F = a.useCallback(e => {
            C(e);
        }, [C]);
    return (0, n.jsxs)(l.ModalRoot, {
        transitionState: A,
        'aria-label': O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_HEADER,
        size: l.ModalSize.SMALL,
        children: [
            (0, n.jsx)(l.ModalHeader, {
                separator: !1,
                className: d.modalHeader,
                justify: i.Z.Justify.CENTER,
                children: (0, n.jsx)(l.Heading, {
                    variant: 'heading-xl/semibold',
                    children: M()
                })
            }),
            (0, n.jsx)(l.Scroller, {
                children: (0, n.jsxs)(l.Slides, {
                    activeSlide: L,
                    width: 440,
                    children: [
                        (0, n.jsx)(l.Slide, {
                            id: 'ACTIONS',
                            children: (0, n.jsx)(c.Z, {
                                otherUserId: u,
                                channelId: s,
                                warningId: o,
                                warningType: T,
                                transitionToSlide: F
                            })
                        }),
                        (0, n.jsx)(l.Slide, {
                            id: 'ABOUT_SAFETY_ALERTS',
                            children: (0, n.jsx)(S.Z, {
                                channelId: s,
                                onClose: () => {
                                    t(), N(_.NM.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS);
                                }
                            })
                        }),
                        (0, n.jsx)(l.Slide, {
                            id: 'SAFETY_TIPS',
                            children: (0, n.jsx)(E.Z, {})
                        })
                    ]
                })
            }),
            (0, n.jsxs)(l.ModalFooter, {
                justify: i.Z.Justify.BETWEEN,
                children: [
                    (0, n.jsx)(R, {
                        text: O.Z.Messages.CLOSE,
                        onClick: () => {
                            t(), N(_.NM.USER_SAFETY_TOOLS_DISMISS);
                        }
                    }),
                    x()
                ]
            })
        ]
    });
};
