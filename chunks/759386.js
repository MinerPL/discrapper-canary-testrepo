n.r(t),
    n.d(t, {
        getApplicationPaymentSteps: function () {
            return p;
        }
    }),
    n(47120);
var i = n(200651);
n(192379);
var r = n(409813),
    o = n(276442),
    a = n(961830),
    l = n(721165),
    c = n(519801),
    s = n(589771),
    d = n(883419),
    u = n(388032);
function p(e) {
    let { guildId: t, showBenefitsFirst: n } = e;
    return [
        {
            key: null,
            renderStep: (e) =>
                (0, i.jsx)(s.Z, {
                    initialStep: n ? r.h8.BENEFITS : r.h8.REVIEW,
                    guildId: t,
                    ...e
                })
        },
        {
            key: r.h8.BENEFITS,
            renderStep: (e) => (0, i.jsx)(l.Z, { ...e }),
            options: { useBreadcrumbLabel: () => u.intl.string(u.t['5LD2+P']) }
        },
        {
            key: r.h8.ADD_PAYMENT_STEPS,
            renderStep: (e) =>
                (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(o.J, {
                        ...e,
                        breadcrumbSteps: [r.h8.ADD_PAYMENT_STEPS, r.h8.REVIEW, r.h8.CONFIRM]
                    })
                }),
            options: { renderHeader: !0 }
        },
        ...a.yp,
        {
            key: r.h8.REVIEW,
            renderStep: (e) =>
                (0, i.jsx)(d.Z, {
                    backButtonEligible: !!n || void 0,
                    prevStep: n ? r.h8.BENEFITS : void 0,
                    ...e
                }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: () => u.intl.string(u.t.QBnNHh)
            }
        },
        {
            key: r.h8.CONFIRM,
            renderStep: (e) =>
                (0, i.jsx)(c.Z, {
                    showBenefits: !n,
                    ...e
                })
        }
    ];
}
