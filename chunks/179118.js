n.d(t, {
    Z: function () {
        return R;
    }
}), n(47120);
var s = n(735250), r = n(470079), a = n(120356), o = n.n(a), i = n(392711), l = n.n(i), c = n(442837), d = n(481060), u = n(37234), p = n(194359), g = n(700582), f = n(479446), C = n(93127), m = n(814443), h = n(590783), _ = n(699516), b = n(246946), x = n(594174), E = n(366695), I = n(572004), L = n(669079), S = n(74538), v = n(51144), T = n(981631), N = n(474936), O = n(689938), j = n(557357);
function R(e) {
    let {
            giftCode: t,
            application: n,
            sku: a,
            subscriptionPlan: i,
            selectedGiftStyle: l,
            onClose: u,
            hasSentMessage: p,
            giftRecipient: f,
            giftMessageError: C,
            isSendingMessage: m
        } = e, [_, x] = r.useState(d.CopyInput.Modes.DEFAULT), R = (0, c.e7)([b.Z], () => b.Z.enabled), Z = p || null != l && null != f, k = () => null != i ? i.skuId : null != a ? a.id : null, B = () => {
            let e;
            let t = null != l && N.V4.includes(l);
            return null != C ? O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB : null == i ? null : (e = i.interval === N.rV.MONTH ? Z ? t ? O.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : Z ? t ? O.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
                skuName: (0, S.aq)(i.id),
                intervalCount: i.intervalCount
            });
        }, P = (e, t) => {
            null != a && (0, L.dM)(new h.Z({
                code: t,
                maxUses: 1
            }), a);
            try {
                (0, I.JG)(e), x(d.CopyInput.Modes.SUCCESS);
            } catch (e) {
                x(d.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
                x(d.CopyInput.Modes.DEFAULT);
            }, 1500);
        }, M = () => {
            let e;
            if (null == t)
                return null;
            switch (_) {
            case d.CopyInput.Modes.SUCCESS:
                e = O.Z.Messages.BILLING_GIFT_COPIED;
                break;
            case d.CopyInput.Modes.ERROR:
                e = O.Z.Messages.FAILED;
                break;
            default:
                e = O.Z.Messages.COPY;
            }
            return (0, s.jsxs)('div', {
                className: j.giftCodeSection,
                children: [
                    (0, s.jsx)(d.FormTitle, { children: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK }),
                    null != t && (0, s.jsx)(d.CopyInput, {
                        hideMessage: R ? O.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
                        value: (0, L.Nz)(t),
                        mode: _,
                        text: e,
                        onCopy: e => P(e, t),
                        supportsCopy: I.wS,
                        className: j.__invalid_copyInput,
                        buttonColor: d.ButtonColors.LINK,
                        buttonLook: d.ButtonLooks.LINK
                    }),
                    (0, s.jsx)('div', {
                        className: j.subtext,
                        children: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
                    })
                ]
            });
        };
    if (m)
        return (0, s.jsxs)('div', {
            className: j.confirmation,
            children: [
                null != n ? (0, s.jsx)(E.Z, {
                    game: n,
                    className: j.__invalid_icon,
                    size: E.Z.Sizes.LARGE,
                    skuId: k()
                }) : null,
                (0, s.jsx)(d.Spinner, { type: d.SpinnerTypes.PULSING_ELLIPSIS })
            ]
        });
    let y = (null == a ? void 0 : a.productLine) === T.POd.COLLECTIBLES;
    return (0, s.jsxs)('div', {
        className: j.confirmation,
        children: [
            null != n ? (0, s.jsx)(E.Z, {
                game: n,
                className: j.__invalid_icon,
                size: E.Z.Sizes.LARGE,
                skuId: k()
            }) : null,
            (0, s.jsx)(d.Heading, {
                variant: 'heading-lg/semibold',
                className: o()({
                    [j.header]: null == l && !y,
                    [j.headerCustomGifting]: null != l && !y
                }),
                children: null != f || p && null == C ? O.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != C ? O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : O.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
            }),
            p && null != f && null == C || Z ? (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(g.Z, {
                        user: f,
                        className: j.giftRecipient,
                        size: d.AvatarSizes.SIZE_80
                    }),
                    (0, s.jsx)(d.Heading, {
                        className: j.giftRecipientName,
                        variant: 'heading-md/semibold',
                        children: v.ZP.getName(f)
                    }),
                    (0, s.jsxs)('div', {
                        className: j.giftRecipientTag,
                        children: [
                            ' ',
                            v.ZP.getUserTag(f)
                        ]
                    }),
                    (0, s.jsx)('div', {
                        className: j.giftSentMessage,
                        children: B()
                    })
                ]
            }) : (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)('div', {
                        className: j.blurb,
                        children: B()
                    }),
                    null == C && (0, s.jsx)(A, {
                        giftCode: t,
                        onClose: u
                    }),
                    (0, s.jsx)('div', { className: j.divider }),
                    M()
                ]
            })
        ]
    });
}
let A = e => {
    let {
        giftCode: t,
        onClose: n
    } = e;
    r.useEffect(() => {
        p.Z.fetchRelationships(), (0, C.W)();
    }, []);
    let [a, o] = r.useState(), [i, h] = r.useState(!1), [b, E] = r.useState(!1), {
            userAffinities: I,
            isLoading: L
        } = (0, c.cj)([m.Z], () => ({
            userAffinities: m.Z.getUserAffinitiesUserIds(),
            isLoading: m.Z.getFetching()
        })), S = Array.from(I.values()), T = (0, c.e7)([_.Z], () => _.Z.getFriendIDs()), N = l().difference(T, S), R = [
            ...S,
            ...N
        ], A = (0, c.e7)([x.default], () => x.default.filter(e => R.includes(e.id) && !e.bot), [R]);
    if (null == A || 0 === A.length)
        return null;
    let Z = l().sortBy(A, e => R.indexOf(e.id));
    return (0, s.jsxs)('div', {
        className: j.giftRecipientSection,
        children: [
            (0, s.jsx)(d.FormTitle, { children: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL }),
            (0, s.jsxs)('div', {
                className: j.giftRecipient,
                children: [
                    (0, s.jsx)(d.SearchableSelect, {
                        placeholder: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                        wrapperClassName: j.giftRecipientInputWrapper,
                        className: i ? j.giftRecipientInputError : void 0,
                        renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, s.jsx)(g.Z, {
                            user: e.value,
                            size: d.AvatarSizes.SIZE_20
                        }),
                        renderLeading: () => L ? (0, s.jsx)(d.Spinner, { type: d.SpinnerTypes.PULSING_ELLIPSIS }) : null,
                        value: a,
                        onChange: e => {
                            o(e), h(!1);
                        },
                        options: Z.map(e => ({
                            value: e,
                            label: ''.concat(v.ZP.getUserTag(e))
                        }))
                    }),
                    (0, s.jsx)(d.Button, {
                        disabled: null == a,
                        submitting: b,
                        className: j.sendToRecipientButton,
                        onClick: () => {
                            E(!0), (0, f.Y)(a, t).then(() => {
                                n(), (0, u.Ou)();
                            }).catch(() => {
                                h(!0), E(!1);
                            });
                        },
                        children: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                    })
                ]
            }),
            (0, s.jsx)('div', {
                className: i ? j.subtextError : j.subtext,
                children: i ? O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
            })
        ]
    });
};
