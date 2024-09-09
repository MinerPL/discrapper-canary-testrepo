n.d(t, {
    $s: function () {
        return h;
    },
    AV: function () {
        return T;
    },
    Hg: function () {
        return M;
    },
    Kn: function () {
        return S;
    },
    Nq: function () {
        return u;
    },
    Q_: function () {
        return E;
    },
    TW: function () {
        return g;
    },
    bD: function () {
        return R;
    },
    pn: function () {
        return C;
    },
    uv: function () {
        return p;
    },
    vx: function () {
        return N;
    },
    wG: function () {
        return f;
    }
});
var s = n(442837),
    a = n(704215),
    r = n(605236),
    i = n(276444),
    l = n(822070),
    o = n(520540),
    c = n(898997),
    d = n(981631),
    _ = n(689938);
let u = '40%',
    E = 3,
    T = 8,
    I = (e) => {
        let { hasSentAll: t, hasSentAtLeastOne: n, numSentUsers: s, helpdeskArticle: a } = e;
        return t
            ? _.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_ALL_SHARED_NO_REFRESH.format({ helpdeskArticle: a })
            : n
              ? _.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_AT_LEAST_ONE_SHARED.format({
                    numFriends: E - s,
                    helpdeskArticle: a
                })
              : _.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER.format({
                    numFriends: E,
                    helpdeskArticle: a
                });
    },
    R = (e) => {
        let { enabled: t, eligibleToFetch: n } = o.g.useExperiment({ location: e }, { autoTrackExposure: !1 });
        (0, c.B)(e, !n);
        let a = (0, s.e7)([i.Z], () => i.Z.getIsEligibleToSendReferrals());
        return t && a;
    },
    g = (e) => {
        let t = p(e);
        return null != t && t !== d.g2L.NOT_ELIGIBLE;
    },
    C = (e) => {
        let t = g(e),
            n = R('PremiumManagementSettings'),
            a = (0, s.e7)([i.Z], () => i.Z.getRecipientStatus());
        if (!t) return !1;
        if (!n) return !!(a.size > 0) || !1;
        return !0;
    },
    N = (e) => {
        let t = m(e),
            n = (0, r.wE)(a.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR);
        return t && !n;
    },
    m = (e) => {
        let { enabled: t } = o.g.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            { enabled: n } = l.$.useExperiment({ location: e }, { autoTrackExposure: !0 }),
            a = (0, s.e7)([i.Z], () => i.Z.getIsSenderEligibleForIncentive());
        return t && n && a;
    },
    p = (e) => {
        let { enabled: t } = o.g.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            { enabled: n } = l.$.useExperiment({ location: e }, { autoTrackExposure: !0 }),
            a = (0, s.e7)([i.Z], () => i.Z.getIsFetchingReferralIncentiveEligibility()),
            r = (0, s.e7)([i.Z], () => i.Z.getSenderIncentiveState());
        return a ? d.g2L.NOT_ELIGIBLE : n && t ? r : d.g2L.NOT_ELIGIBLE;
    },
    A = (e) => {
        let t = p(e);
        return t === d.g2L.COOLDOWN || t === d.g2L.UNAPPLIED || t === d.g2L.QUALIFIED;
    },
    f = (e) => {
        let t = A(e),
            n = (0, r.wE)(a.z.REFERRAL_INCENTIVE_AWARDED_INFO);
        return t && !n;
    },
    S = (e) => {
        let t = g(e),
            n = R(e),
            s = (0, r.wE)(a.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
        return !t && n && !s;
    },
    h = (e) => {
        let { referralIncentiveLifecycleState: t, hasSentAll: n, referralsStatuses: s } = e;
        switch (t) {
            case d.g2L.NOT_ELIGIBLE:
                return n ? _.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_HEADER_ALL_SHARED : _.Z.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS;
            case d.g2L.ELIGIBLE:
                if (s.sent < 2) return _.Z.Messages.REFERRAL_INCENTIVE_SHARE_NITRO_GET_DISCOUNT.format({ discountRate: u });
                if (s.redeemed === E) return _.Z.Messages.REFERRAL_INCENTIVE_NITRO_FRIEND_PASSES_INCOMING;
                return _.Z.Messages.REFERRAL_INCENTIVE_FRIEND_PASSES_KEEP_GOING.format({ discountRate: u });
            case d.g2L.QUALIFIED:
            case d.g2L.COOLDOWN:
            case d.g2L.UNAPPLIED:
                return s.redeemed === E ? _.Z.Messages.REFERRAL_INCENTIVE_NITRO_FRIEND_PASSES_INCOMING : _.Z.Messages.REFERRAL_INCENTIVE_DISCOUNT_UNLOCKED;
        }
    },
    M = (e) => {
        let { helpdeskArticle: t, referralIncentiveLifecycleState: n, referralsStatuses: s, isWithinCountdownRange: a } = e;
        switch (n) {
            case d.g2L.NOT_ELIGIBLE:
                return I({
                    hasSentAll: s.sent >= E,
                    hasSentAtLeastOne: s.sent >= 1,
                    numSentUsers: s.sent,
                    helpdeskArticle: t
                });
            case d.g2L.ELIGIBLE:
                let r = {
                    discountRate: u,
                    learnMoreLink: t,
                    subscriptionInterval: _.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
                };
                if (s.redeemed <= 1) return _.Z.Messages.REFERRAL_INCENTIVE_FRIEND_PASSES_CONVERT_GET_INCENTIVE.format(r);
                return _.Z.Messages.REFERRAL_INCENTIVE_FRIEND_PASSES_REDEEMED.format(r);
            case d.g2L.QUALIFIED:
            case d.g2L.COOLDOWN:
            case d.g2L.UNAPPLIED:
                if (s.redeemed < E) return _.Z.Messages.REFERRAL_INCENTIVE_KEEP_SHARING_TO_EARN_ANOTHER_DISCOUNT.format({ learnMoreLink: t });
                if (!a)
                    return _.Z.Messages.REFERRAL_INCENTIVE_FRIEND_PASS_COUNTDOWN_HAS_BEGUN.format({
                        learnMoreLink: t,
                        numberOfTimerPeriods: '',
                        timePeriodInterval: _.Z.Messages.GIFT_CONFIRMATION_NITRO_TIME_FRAME_MONTHS.format({ time: 6 })
                    });
                return _.Z.Messages.REFERRAL_INCENTIVE_MORE_FRIEND_PASSES_ALMOST_HERE.format({ learnMoreLink: t });
        }
    };
