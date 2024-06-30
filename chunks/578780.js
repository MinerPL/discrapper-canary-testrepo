t.r(n), t.d(n, {
    default: function () {
        return C;
    }
});
var o = t(735250);
t(470079);
var r = t(100527), a = t(906732), i = t(987209), c = t(598), s = t(409813), l = t(791785), d = t(276442), u = t(793541), f = t(380898), p = t(710094), _ = t(865921), h = t(853872), b = t(806984), g = t(464797), x = t(946211), m = t(231338);
let v = [
    {
        key: null,
        renderStep: e => (0, o.jsx)(_.v, { ...e })
    },
    {
        key: s.h8.ADD_PAYMENT_STEPS,
        renderStep: e => (0, o.jsx)(d.J, {
            ...e,
            onReturn: () => {
                0 === Object.keys(h.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(s.h8.REVIEW, { trackedFromStep: s.h8.ADD_PAYMENT_STEPS });
            }
        })
    },
    {
        key: s.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, o.jsx)(f.Z, {})
    },
    {
        key: s.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, o.jsx)(u.Z, {})
    },
    {
        key: s.h8.REVIEW,
        renderStep: e => (0, o.jsx)(p.l, { ...e })
    },
    {
        key: s.h8.CONFIRM,
        renderStep: e => (0, o.jsx)(b.Z, { ...e })
    }
];
function C(e) {
    let {
            guildProductContext: n,
            sourceAnalyticsLocations: t,
            applicationId: s,
            ...d
        } = e, {analyticsLocations: u} = (0, a.ZP)(t, r.Z.GUILD_PRODUCT_PAYMENT_MODAL);
    return (0, o.jsx)(g.R, {
        ...n,
        children: (0, o.jsx)(a.Gt, {
            value: u,
            children: (0, o.jsx)(c.PaymentContextProvider, {
                stepConfigs: v,
                applicationId: s,
                skuIDs: [d.skuId],
                activeSubscription: null,
                purchaseType: m.GZ.ONE_TIME,
                children: (0, o.jsx)(i.KB, {
                    children: (0, o.jsx)(l.PaymentModal, {
                        initialPlanId: null,
                        analyticsLocations: u,
                        renderHeader: x.L,
                        ...d
                    })
                })
            })
        })
    });
}
