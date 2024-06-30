n.d(t, {
    $e: function () {
        return P;
    },
    $w: function () {
        return y;
    },
    Og: function () {
        return k;
    },
    ZY: function () {
        return B;
    },
    sc: function () {
        return j;
    },
    zs: function () {
        return G;
    }
}), n(627341);
var i, a, s = n(735250), l = n(470079), r = n(120356), o = n.n(r), c = n(278074), d = n(481060), u = n(596454), _ = n(44315), E = n(377171), m = n(695346), I = n(261922), T = n(186523), h = n(553826), N = n(506071), f = n(203143), p = n(79390), C = n(839963), g = n(294608), S = n(65145), A = n(981631), x = n(689938), O = n(353452);
function R(e) {
    let {
        className: t,
        children: n
    } = e;
    return (0, s.jsx)('ul', {
        'aria-label': x.Z.Messages.POLL_OPTIONS_ARIA,
        className: t,
        children: n
    });
}
function M(e) {
    let {
        className: t,
        children: n
    } = e;
    return (0, s.jsx)('div', {
        'aria-label': x.Z.Messages.POLL_OPTIONS_ARIA,
        role: 'group',
        className: t,
        children: n
    });
}
function v(e) {
    let {
            className: t,
            children: n
        } = e, i = (0, d.useRadioGroup)({ orientation: 'vertical' });
    return (0, s.jsx)('div', {
        'aria-label': x.Z.Messages.POLL_OPTIONS_ARIA,
        ...i,
        className: t,
        children: n
    });
}
function L(e) {
    let {
            className: t,
            onClick: n,
            isSelected: i,
            isFirstAnswer: a,
            children: l
        } = e, {pollAnswerRef: r} = (0, S.dv)();
    return (0, s.jsx)(d.Clickable, {
        role: 'checkbox',
        className: o()(t, O.enabled),
        onClick: n,
        'aria-checked': i,
        ref: a ? r : void 0,
        children: l
    });
}
function Z(e) {
    let t, {
            className: n,
            children: i,
            onClick: a,
            isSelected: l,
            hasSelectedAnyAnswer: r,
            isFirstAnswer: c
        } = e;
    t = r ? l ? 0 : -1 : c ? 0 : -1;
    let {pollAnswerRef: u} = (0, S.dv)();
    return (0, s.jsx)(d.Clickable, {
        role: 'radio',
        className: o()(n, O.enabled),
        onClick: a,
        'aria-checked': l,
        tabIndex: t,
        ref: c ? u : void 0,
        children: i
    });
}
function P(e) {
    let {
            answers: t,
            answersInteraction: n,
            answerTapAccessibilityLabel: i,
            canTapAnswers: a,
            hasSelectedAnyAnswer: l,
            className: r,
            answerClassName: d,
            renderAnswerContent: u
        } = e, {
            ContainerComponent: _,
            answerElementType: E
        } = (0, c.EQ)({
            canTapAnswers: a,
            answersInteraction: n
        }).with({ answersInteraction: C.Y7.RADIO_BUTTONS }, () => ({
            ContainerComponent: v,
            answerElementType: 1
        })).with({ answersInteraction: C.Y7.CHECKBOXES }, () => ({
            ContainerComponent: M,
            answerElementType: 2
        })).with({
            canTapAnswers: !0,
            answersInteraction: C.Y7.LIST
        }, () => ({
            ContainerComponent: R,
            answerElementType: 3
        })).otherwise(() => ({
            ContainerComponent: R,
            answerElementType: 0
        }));
    return (0, s.jsx)(_, {
        className: r,
        children: t.map((e, t) => (0, s.jsx)(b, {
            className: o()(O.__invalid_answer, d),
            answer: e,
            isFirstAnswer: 0 === t,
            elementType: E,
            answerTapAccessibilityLabel: i,
            hasSelectedAnyAnswer: l,
            children: u(e)
        }, e.answerId))
    });
}
function b(e) {
    let {
            className: t,
            answer: n,
            children: i,
            hasSelectedAnyAnswer: a,
            isFirstAnswer: r,
            elementType: c
        } = e, {
            channelId: d,
            messageId: u
        } = (0, g.pE)(), _ = (0, g.$B)(n.style), E = !0 === n.isSelected, m = l.useCallback(() => {
            f.Z.handlePollAnswerTapped({
                channelId: d,
                messageId: u,
                answerId: n.answerId
            });
        }, [
            d,
            u,
            n.answerId
        ]);
    switch (c) {
    case 0:
    case 3:
        return (0, s.jsx)('li', {
            className: o()(t, _),
            children: i
        });
    case 1:
        return (0, s.jsx)(Z, {
            className: o()(t, _),
            onClick: m,
            isSelected: E,
            hasSelectedAnyAnswer: a,
            isFirstAnswer: r,
            children: i
        });
    case 2:
        return (0, s.jsx)(L, {
            className: o()(t, _),
            onClick: m,
            isSelected: E,
            isFirstAnswer: r,
            children: i
        });
    }
}
function D(e) {
    var t;
    let {
            attachment: n,
            className: i
        } = e, a = (0, N.n)(), l = m.QK.useSetting();
    return (0, s.jsx)(I.Z, {
        className: i,
        imageClassName: O.attachmentImage,
        src: null != n.proxy_url && '' !== n.proxy_url ? n.proxy_url : n.url,
        alt: null !== (t = n.description) && void 0 !== t ? t : (0, p.fw)(n.filename),
        responsive: !0,
        width: 212,
        height: 212,
        autoPlay: l,
        shouldAnimate: a,
        shouldRenderAccessory: !1
    });
}
function j(e) {
    let {
        className: t,
        emoji: n
    } = e;
    return (0, s.jsx)(u.Z, {
        className: t,
        emojiId: n.id,
        emojiName: n.name,
        animated: n.animated
    });
}
function U(e, t) {
    return null != e ? (0, s.jsx)('div', {
        className: e,
        children: t
    }) : (0, s.jsx)(s.Fragment, { children: t });
}
function y(e) {
    let {
            media: t,
            containerClassName: n,
            attachmentClassName: i,
            emojiClassName: a,
            fallback: l
        } = e, {message: r} = (0, g.GF)();
    if (null != t.attachmentIds && t.attachmentIds.length > 0) {
        let e = r.attachments.find(e => {
            var n;
            return e.id === (null === (n = t.attachmentIds) || void 0 === n ? void 0 : n[0]);
        });
        if (null != e)
            return U(n, (0, s.jsx)(D, {
                className: i,
                attachment: e
            }));
    }
    return null != t.emoji ? U(n, (0, s.jsx)(j, {
        className: a,
        emoji: t.emoji
    })) : void 0 !== l ? (0, s.jsx)(s.Fragment, { children: l }) : null;
}
function B(e) {
    let {
            isVictor: t,
            isExpired: n,
            size: i,
            className: a
        } = e, {
            color: l,
            backgroundColor: r
        } = (0, c.EQ)({
            isVictor: t,
            isExpired: n
        }).with({
            isExpired: !0,
            isVictor: !0
        }, () => ({
            color: E.Z.BUTTON_POSITIVE_BACKGROUND,
            backgroundColor: (0, _.Lq)(A.Ilk.WHITE_500)
        })).with({
            isExpired: !0,
            isVictor: !1
        }, () => ({
            color: E.Z.ICON_PRIMARY,
            backgroundColor: E.Z.BG_MOD_FAINT
        })).otherwise(() => ({
            color: (0, _.Lq)(A.Ilk.BRAND_500),
            backgroundColor: (0, _.Lq)(A.Ilk.WHITE_500)
        }));
    return (0, s.jsx)(d.CircleCheckIcon, {
        size: 'custom',
        width: i,
        height: i,
        className: a,
        color: l,
        secondaryColor: r,
        'aria-hidden': !0
    });
}
function k(e) {
    let {
            isSelected: t,
            size: n,
            className: i
        } = e, a = {
            width: n,
            height: n,
            background: O.radioBackground,
            'aria-hidden': !0
        };
    return t ? (0, s.jsx)(h.Z, {
        ...a,
        foreground: O.radioForeground,
        className: i
    }) : (0, s.jsx)(T.Z, {
        ...a,
        className: i
    });
}
function G(e) {
    let {
            isSelected: t,
            size: n,
            className: i
        } = e, a = 0.85 * n;
    return (0, s.jsx)('div', {
        className: o()(O.checkbox, { [O.checkboxSelected]: t }, i),
        style: {
            width: n,
            height: n
        },
        'aria-hidden': !0,
        children: t && (0, s.jsx)(d.CheckmarkLargeIcon, {
            size: 'custom',
            width: a,
            height: a,
            color: (0, _.Lq)(A.Ilk.WHITE_500)
        })
    });
}
(a = i || (i = {}))[a.LIST_ITEM = 0] = 'LIST_ITEM', a[a.RADIO = 1] = 'RADIO', a[a.CHECKBOX = 2] = 'CHECKBOX', a[a.LIST_ITEM_BUTTON = 3] = 'LIST_ITEM_BUTTON';
