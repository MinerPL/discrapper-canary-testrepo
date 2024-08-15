n.r(t),
	n.d(t, {
		getApplicationPaymentSteps: function () {
			return I;
		}
	}),
	n(47120);
var r = n(735250);
n(470079);
var a = n(409813),
	i = n(276442),
	l = n(961830),
	s = n(721165),
	o = n(519801),
	u = n(589771),
	c = n(883419),
	d = n(689938);
function I(e) {
	let { guildId: t, eligibleApplicationSubscriptionGuilds: n, showBenefitsFirst: I } = e;
	return [
		{
			key: null,
			renderStep: (e) =>
				(0, r.jsx)(u.Z, {
					initialStep: I ? a.h8.BENEFITS : a.h8.REVIEW,
					guildId: t,
					...e
				})
		},
		{
			key: a.h8.BENEFITS,
			renderStep: (e) => (0, r.jsx)(s.Z, { ...e }),
			options: { useBreadcrumbLabel: () => d.Z.Messages.APPLICATION_SUBSCRIPTION_BILLING_STEP_SUBSCRIPTION_DETAILS }
		},
		{
			key: a.h8.ADD_PAYMENT_STEPS,
			renderStep: (e) =>
				(0, r.jsx)(r.Fragment, {
					children: (0, r.jsx)(i.J, {
						...e,
						breadcrumbSteps: [a.h8.ADD_PAYMENT_STEPS, a.h8.REVIEW, a.h8.CONFIRM]
					})
				}),
			options: { renderHeader: !0 }
		},
		...l.yp,
		{
			key: a.h8.REVIEW,
			renderStep: (e) =>
				(0, r.jsx)(c.Z, {
					backButtonEligible: !!I || void 0,
					prevStep: I ? a.h8.BENEFITS : void 0,
					showGuildPicker: null == t,
					eligibleApplicationSubscriptionGuilds: n,
					...e
				}),
			options: {
				renderHeader: !0,
				useBreadcrumbLabel: () => d.Z.Messages.BILLING_STEP_REVIEW
			}
		},
		{
			key: a.h8.CONFIRM,
			renderStep: (e) =>
				(0, r.jsx)(o.Z, {
					showBenefits: !I,
					...e
				})
		}
	];
}
