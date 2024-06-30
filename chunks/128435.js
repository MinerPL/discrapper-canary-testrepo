n.d(t, {
    Z: function () {
        return C;
    }
}), n(627341);
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(278074), o = n(263568), c = n(481060), d = n(203143), u = n(365206), _ = n(294608), E = n(65145), m = n(920557), I = n(355957);
function T(e) {
    let {media: t} = e;
    return (0, i.jsx)(c.Heading, {
        variant: 'text-md/medium',
        className: I.question,
        scaleFontToUserSetting: !0,
        children: t.text
    });
}
function h(e) {
    let {
        children: t,
        onClick: n,
        variant: a = 'text-sm/medium',
        color: s = 'interactive-active',
        className: r,
        buttonRef: o
    } = e;
    return (0, i.jsx)(c.Button, {
        onClick: n,
        className: l()(I.__invalid_textButton, r),
        look: c.Button.Looks.BLANK,
        size: c.Button.Sizes.NONE,
        buttonRef: o,
        children: (0, i.jsx)(c.Text, {
            variant: a,
            color: s,
            scaleFontToUserSetting: !0,
            children: t
        })
    });
}
function N(e) {
    let {
        buttonLabel: t,
        secondaryLabel: n,
        handleClick: a,
        isInteractive: s,
        className: r
    } = e;
    return (0, i.jsxs)('div', {
        className: l()(I.detailsText, r),
        children: [
            s ? (0, i.jsx)(h, {
                onClick: a,
                variant: 'text-sm/normal',
                color: 'none',
                className: l()(I.detailsTextButton, I.interactive),
                children: t
            }) : (0, i.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                scaleFontToUserSetting: !0,
                children: t
            }),
            null != n && (0, i.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                scaleFontToUserSetting: !0,
                children: n
            })
        ]
    });
}
function f(e) {
    let {
            action: t,
            channelId: n,
            messageId: s,
            isInteractive: r,
            className: o
        } = e, {
            actionButtonRef: u,
            manageFocusOnAction: _
        } = (0, E.dv)(), m = a.useCallback(async () => {
            if ((null == t ? void 0 : t.type) != null)
                await d.Z.handlePollActionTapped({
                    channelId: n,
                    messageId: s,
                    type: t.type
                }), _(t.type);
        }, [
            null == t ? void 0 : t.type,
            n,
            s,
            _
        ]);
    return null == t ? null : 'button' === t.presentation || 'secondaryButton' === t.presentation ? (0, i.jsx)(c.Button, {
        buttonRef: u,
        onClick: m,
        disabled: !t.enabled,
        color: 'secondaryButton' === t.presentation ? c.Button.Colors.CUSTOM : c.Button.Colors.BRAND,
        size: c.Button.Sizes.SMALL,
        className: l()(o, I.buttonPresentation, 'secondaryButton' === t.presentation && I.secondaryButtonPresentation),
        children: (0, i.jsx)(c.Text, {
            variant: 'text-sm/medium',
            color: 'none',
            scaleFontToUserSetting: !0,
            children: t.label
        })
    }, t.presentation) : 'textButton' === t.presentation ? (0, i.jsx)(h, {
        buttonRef: u,
        onClick: m,
        className: o,
        children: t.label
    }) : (0, i.jsx)(N, {
        buttonLabel: t.label,
        secondaryLabel: t.secondaryLabel,
        handleClick: m,
        isInteractive: r,
        className: o
    });
}
function p(e) {
    let {
            message: t,
            poll: n,
            className: a
        } = e, s = (0, _.$B)(n.containerStyle), d = function (e, t) {
            let n = {
                answers: t.answers,
                answersInteraction: t.answersInteraction,
                answerTapAccessibilityLabel: t.answerTapAccessibilityLabel,
                isExpired: t.isExpired,
                canTapAnswers: t.canTapAnswers,
                hasSelectedAnyAnswer: t.hasSelectedAnswer,
                myAvatarUrl: t.myAvatarUrl,
                canShowVoteCounts: t.canShowVoteCounts
            };
            return (0, r.EQ)(t.layoutType).with(o.C.DEFAULT, () => (0, i.jsx)(m.K, { ...n })).with(o.C.IMAGE_ONLY_ANSWERS, () => (0, i.jsx)(u.Z, { ...n })).otherwise(() => null);
        }(0, n);
    return null == d ? null : (0, i.jsx)('div', {
        className: l()(I.container, s, a),
        children: (0, i.jsxs)(c.HeadingLevel, {
            children: [
                (0, i.jsxs)('div', {
                    className: I.header,
                    children: [
                        (0, i.jsx)(T, { media: n.question }),
                        null != n.promptLabel && (0, i.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            className: I.prompt,
                            scaleFontToUserSetting: !0,
                            children: n.promptLabel
                        })
                    ]
                }),
                d,
                (0, i.jsxs)('div', {
                    className: I.bottomBar,
                    children: [
                        (0, i.jsx)(f, {
                            channelId: t.getChannelId(),
                            messageId: t.id,
                            action: n.secondaryAction,
                            className: I.secondaryAction,
                            isInteractive: n.isInteractive
                        }),
                        (0, i.jsx)(f, {
                            channelId: t.getChannelId(),
                            messageId: t.id,
                            action: n.tertiaryAction,
                            className: I.tertiaryAction
                        }),
                        (0, i.jsx)(f, {
                            channelId: t.getChannelId(),
                            messageId: t.id,
                            action: n.primaryAction
                        })
                    ]
                })
            ]
        })
    });
}
function C(e) {
    let {
        message: t,
        poll: n,
        className: a
    } = e;
    return (0, i.jsx)(_.XL, {
        message: t,
        poll: n,
        children: (0, i.jsx)(E.Pk, {
            children: (0, i.jsx)(p, {
                message: t,
                poll: n,
                className: a
            })
        })
    });
}
