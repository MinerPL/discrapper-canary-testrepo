n.d(t, {
    $s: function () {
        return I;
    },
    Hg: function () {
        return R;
    },
    Kn: function () {
        return T;
    },
    Q_: function () {
        return E;
    },
    bD: function () {
        return g;
    },
    uv: function () {
        return p;
    }
});
var s,
    a,
    r = n(442837),
    i = n(704215),
    l = n(605236),
    o = n(276444),
    c = n(822070),
    d = n(520540),
    _ = n(898997),
    u = n(689938);
((s = a || (a = {}))[(s.NOT_ELIGIBLE = 0)] = 'NOT_ELIGIBLE'), (s[(s.ELIGIBLE = 1)] = 'ELIGIBLE'), (s[(s.QUALIFIED = 2)] = 'QUALIFIED'), (s[(s.COOLDOWN = 3)] = 'COOLDOWN'), (s[(s.UNAPPLIED = 4)] = 'UNAPPLIED');
let E = 3,
    T = (e) => {
        let t = g(e),
            n = (0, l.wE)(i.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
        return t && !n;
    },
    I = (e) => {
        let { referralIncentiveLifecycleState: t, hasSentAll: n, referralsStatuses: s } = e;
        switch (t) {
            case 0:
                return n ? u.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_HEADER_ALL_SHARED : u.Z.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS;
            case 1:
                return u.Z.Messages.REFERRAL_INCENTIVE_FRIEND_PASSES_KEEP_GOING.format({ discountRate: '40%' });
            case 2:
                return s.redeemed === E ? u.Z.Messages.REFERRAL_INCENTIVE_NITRO_FRIEND_PASSES_INCOMING : u.Z.Messages.REFERRAL_INCENTIVE_DISCOUNT_UNLOCKED;
        }
    },
    R = (e) => {
        let { helpdeskArticle: t, referralIncentiveLifecycleState: n, referralsStatuses: s } = e;
        switch (n) {
            case 0:
                return C({
                    hasSentAll: s.sent >= E,
                    hasSentAtLeastOne: s.sent >= 1,
                    numSentUsers: s.sent,
                    helpdeskArticle: t
                });
            case 1:
                let a = {
                    discountRate: '40%',
                    learnMoreLink: 'PLACEHOLDER',
                    subscriptionInterval: u.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
                };
                if (s.redeemed <= 1) return u.Z.Messages.REFERRAL_INCENTIVE_FRIEND_PASSES_CONVERT_GET_INCENTIVE.format(a);
                return u.Z.Messages.REFERRAL_INCENTIVE_FRIEND_PASSES_REDEEMED.format(a);
            case 2:
                return s.redeemed === E
                    ? u.Z.Messages.REFERRAL_INCENTIVE_FRIEND_PASS_COUNTDOWN_HAS_BEGUN.format({
                          learnMoreLink: 'PLACEHOLDER',
                          numberOfTimerPeriods: '',
                          timePeriodInterval: u.Z.Messages.GIFT_CONFIRMATION_NITRO_TIME_FRAME_MONTHS.format({ time: 6 })
                      })
                    : u.Z.Messages.REFERRAL_INCENTIVE_KEEP_SHARING_TO_EARN_ANOTHER_DISCOUNT.format({ learnMoreLink: 'PLACEHOLDER' });
        }
    },
    C = (e) => {
        let { hasSentAll: t, hasSentAtLeastOne: n, numSentUsers: s, helpdeskArticle: a } = e;
        return t
            ? u.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_ALL_SHARED_NO_REFRESH.format({ helpdeskArticle: a })
            : n
              ? u.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_AT_LEAST_ONE_SHARED.format({
                    numFriends: E - s,
                    helpdeskArticle: a
                })
              : u.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER.format({
                    numFriends: E,
                    helpdeskArticle: a
                });
    },
    g = (e) => {
        let { enabled: t, eligibleToFetch: n } = d.g.useExperiment({ location: e }, { autoTrackExposure: !1 });
        (0, _.B)(e, !n);
        let s = (0, r.e7)([o.Z], () => o.Z.getIsEligibleToSendReferrals());
        return t && s;
    },
    p = (e) => {
        let t;
        let { enabled: n, eligibleToFetch: s } = d.g.useExperiment({ location: e }, { autoTrackExposure: !1 }),
            { enabled: a } = c.$.useExperiment({ location: e }, { autoTrackExposure: !1 });
        (0, _.B)(e, !s);
        let { isEligibleForIncentive: i, isQualifiedForIncentive: l } = (0, r.cj)([o.Z], () => ({
            isEligibleForIncentive: o.Z.getIsSenderEligibleForIncentive(),
            isQualifiedForIncentive: o.Z.getIsSenderQualifiedForIncentive()
        }));
        switch (!0) {
            case !a || !n || !i:
                t = 0;
                break;
            case i:
                t = 1;
                break;
            case l:
                t = 2;
                break;
            default:
                t = 0;
        }
        return t;
    };
