t.d(s, {
    Z: function () {
        return U;
    }
}),
    t(47120);
var a = t(735250),
    n = t(470079),
    i = t(120356),
    r = t.n(i),
    l = t(392711),
    o = t.n(l),
    c = t(442837),
    u = t(481060),
    _ = t(37234),
    I = t(194359),
    d = t(700582),
    m = t(925329),
    C = t(479446),
    E = t(522489),
    N = t(857039),
    T = t(93127),
    S = t(814443),
    A = t(590783),
    p = t(699516),
    L = t(246946),
    x = t(594174),
    R = t(572004),
    f = t(669079),
    M = t(74538),
    O = t(51144),
    g = t(598),
    h = t(981631),
    P = t(474936),
    j = t(689938),
    Z = t(524254);
function U(e) {
    let { giftCode: s, application: t, sku: i, subscriptionPlan: l, selectedGiftStyle: o, onClose: _, hasSentMessage: I, giftRecipient: C, giftMessageError: T, isSendingMessage: S, halloweenDecoPurchase: p } = e,
        [x, U] = n.useState(u.CopyInput.Modes.DEFAULT),
        b = (0, c.e7)([L.Z], () => L.Z.enabled),
        F = I || (null != o && null != C),
        G = (null == i ? void 0 : i.productLine) === h.POd.COLLECTIBLES,
        { selectedPlan: y } = (0, g.usePaymentContext)(),
        B = (0, N.Z)({ location: 'Gift purchase confirm' }) && (null == y ? void 0 : y.skuId) === P.Si.TIER_2 && null != p,
        D = () => (null != l ? l.skuId : null != i ? i.id : null),
        H = () => {
            let e;
            let s = null != o && P.V4.includes(o);
            if (null != T) return j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB;
            if (null == l) return null;
            if (l.interval === P.rV.MONTH) {
                if (B) return j.Z.Messages.NITROWEEN_DESKTOP_GIFT_CONFIRMATION_TITLE_MONTH;
                e = F ? (s ? j.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY) : j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY;
            } else {
                if (B) return j.Z.Messages.NITROWEEN_DESKTOP_GIFT_CONFIRMATION_TITLE_YEAR;
                e = F ? (s ? j.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY) : j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY;
            }
            return e.format({
                skuName: (0, M.aq)(l.id),
                intervalCount: l.intervalCount
            });
        },
        k = (e, s) => {
            null != i &&
                (0, f.dM)(
                    new A.Z({
                        code: s,
                        maxUses: 1
                    }),
                    i
                );
            try {
                (0, R.JG)(e), U(u.CopyInput.Modes.SUCCESS);
            } catch (e) {
                U(u.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
                U(u.CopyInput.Modes.DEFAULT);
            }, 1500);
        },
        z = () => {
            let e;
            if (null == s) return null;
            switch (x) {
                case u.CopyInput.Modes.SUCCESS:
                    e = j.Z.Messages.BILLING_GIFT_COPIED;
                    break;
                case u.CopyInput.Modes.ERROR:
                    e = j.Z.Messages.FAILED;
                    break;
                default:
                    e = j.Z.Messages.COPY;
            }
            return (0, a.jsxs)('div', {
                className: Z.giftCodeSection,
                children: [
                    (0, a.jsx)(u.FormTitle, { children: j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK }),
                    null != s &&
                        (0, a.jsx)(u.CopyInput, {
                            hideMessage: b ? j.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
                            value: (0, f.Nz)(s),
                            mode: x,
                            text: e,
                            onCopy: (e) => k(e, s),
                            supportsCopy: R.wS,
                            className: Z.__invalid_copyInput,
                            buttonColor: u.ButtonColors.LINK,
                            buttonLook: u.ButtonLooks.LINK
                        }),
                    (0, a.jsx)('div', {
                        className: Z.subtext,
                        children: j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
                    })
                ]
            });
        };
    return S
        ? (0, a.jsxs)('div', {
              className: Z.confirmation,
              children: [
                  null != t
                      ? (0, a.jsx)(m.Z, {
                            game: t,
                            className: Z.__invalid_icon,
                            size: m.Z.Sizes.LARGE,
                            skuId: D()
                        })
                      : null,
                  (0, a.jsx)(u.Spinner, { type: u.SpinnerTypes.PULSING_ELLIPSIS })
              ]
          })
        : (0, a.jsxs)('div', {
              className: Z.confirmation,
              children: [
                  null != t
                      ? (0, a.jsx)(m.Z, {
                            game: t,
                            className: Z.__invalid_icon,
                            size: m.Z.Sizes.LARGE,
                            skuId: D()
                        })
                      : null,
                  (0, a.jsx)(u.Heading, {
                      variant: 'heading-lg/semibold',
                      className: r()({
                          [Z.header]: null == o && !G,
                          [Z.headerCustomGifting]: null != o && !G
                      }),
                      children: null != C || (I && null == T) ? j.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != T ? j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : j.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
                  }),
                  (I && null != C && null == T) || F
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(d.Z, {
                                    user: C,
                                    className: Z.giftRecipient,
                                    size: u.AvatarSizes.SIZE_80
                                }),
                                (0, a.jsx)(u.Heading, {
                                    className: Z.giftRecipientName,
                                    variant: 'heading-md/semibold',
                                    children: O.ZP.getName(C)
                                }),
                                (0, a.jsxs)('div', {
                                    className: Z.giftRecipientTag,
                                    children: [' ', O.ZP.getUserTag(C)]
                                }),
                                (0, a.jsx)('div', {
                                    className: Z.giftSentMessage,
                                    children: H()
                                })
                            ]
                        })
                      : (() => {
                            let e = (0, f.MY)(C, G),
                                { removeGiftRecipientUI: t } = E.m.getCurrentConfig(
                                    { location: 'GiftPurchaseConfirmation' },
                                    {
                                        autoTrackExposure: !1,
                                        disable: __BILLING_STANDALONE__ || e !== f.xr.CUSTOM_STYLE
                                    }
                                );
                            return (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)('div', {
                                        className: Z.blurb,
                                        children: H()
                                    }),
                                    !t &&
                                        null == T &&
                                        (0, a.jsx)(v, {
                                            giftCode: s,
                                            onClose: _
                                        }),
                                    (0, a.jsx)('div', { className: Z.divider }),
                                    z()
                                ]
                            });
                        })()
              ]
          });
}
let v = (e) => {
    let { giftCode: s, onClose: t } = e;
    n.useEffect(() => {
        I.Z.fetchRelationships(), (0, T.W)();
    }, []);
    let [i, r] = n.useState(),
        [l, m] = n.useState(!1),
        [E, N] = n.useState(!1),
        { userAffinities: A, isLoading: L } = (0, c.cj)([S.Z], () => ({
            userAffinities: S.Z.getUserAffinitiesUserIds(),
            isLoading: S.Z.getFetching()
        })),
        R = Array.from(A.values()),
        f = (0, c.e7)([p.Z], () => p.Z.getFriendIDs()),
        M = o().difference(f, R),
        g = [...R, ...M],
        h = (0, c.e7)([x.default], () => x.default.filter((e) => g.includes(e.id) && !e.bot), [g]);
    if (null == h || 0 === h.length) return null;
    let P = o().sortBy(h, (e) => g.indexOf(e.id));
    return (0, a.jsxs)('div', {
        className: Z.giftRecipientSection,
        children: [
            (0, a.jsx)(u.FormTitle, { children: j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL }),
            (0, a.jsxs)('div', {
                className: Z.giftRecipient,
                children: [
                    (0, a.jsx)(u.SearchableSelect, {
                        placeholder: j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                        wrapperClassName: Z.giftRecipientInputWrapper,
                        className: l ? Z.giftRecipientInputError : void 0,
                        renderOptionPrefix: (e) =>
                            (null == e ? void 0 : e.value) == null
                                ? null
                                : (0, a.jsx)(d.Z, {
                                      user: e.value,
                                      size: u.AvatarSizes.SIZE_20
                                  }),
                        renderLeading: () => (L ? (0, a.jsx)(u.Spinner, { type: u.SpinnerTypes.PULSING_ELLIPSIS }) : null),
                        value: i,
                        onChange: (e) => {
                            r(e), m(!1);
                        },
                        options: P.map((e) => ({
                            value: e,
                            label: ''.concat(O.ZP.getUserTag(e))
                        }))
                    }),
                    (0, a.jsx)(u.Button, {
                        disabled: null == i,
                        submitting: E,
                        className: Z.sendToRecipientButton,
                        onClick: () => {
                            N(!0),
                                (0, C.YD)(i, s)
                                    .then(() => {
                                        t(), (0, _.Ou)();
                                    })
                                    .catch(() => {
                                        m(!0), N(!1);
                                    });
                        },
                        children: j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: l ? Z.subtextError : Z.subtext,
                children: l ? j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
            })
        ]
    });
};
