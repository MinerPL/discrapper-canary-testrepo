n.d(t, {
    El: function () {
        return a;
    },
    RN: function () {
        return c;
    },
    X2: function () {
        return r;
    },
    Zv: function () {
        return _;
    },
    _e: function () {
        return o;
    },
    fS: function () {
        return d;
    },
    kS: function () {
        return s;
    },
    n4: function () {
        return l;
    },
    oL: function () {
        return u;
    }
});
var i = n(689938);
let a = [
        'XBOX',
        'PLAYSTATION',
        'SWITCH',
        'PC'
    ], s = 25920000, l = 'https://support.discord.com/hc/en-us/articles/9146392276375', r = { FORTNITE: 'FORTNITE' }, o = {
        STREAM_CTA: 'STREAM_CTA',
        LOADING_INITIAL_PROGRESS: 'LOADING_INITIAL_PROGRESS',
        TRACK_PROGRESS: 'TRACK_PROGRESS',
        QUEST_COMPLETION: 'QUEST_COMPLETION'
    }, c = { FORTNITE: ['Fortnite'] }, d = 'YYYY-MM-DD HH:mm', u = '1022633972510752774', _ = {
        [r.FORTNITE]: {
            title: 'Fortnite',
            gameSearchTerm: c[r.FORTNITE],
            assets: {
                iconSrc: n(569655),
                tooltipSrc: n(836110),
                rewardSrc: n(945368)
            },
            dropsQuestId: u,
            dropsGameId: '432980957394370572',
            endDate: '2023-05-22 23:59',
            finalClaimDate: '2023-5-29 08:00',
            dropsNoticeBannerDurationDays: 3,
            articleUrl: l,
            messages: {
                claimTip: () => i.Z.Messages.FORTNITE_REDEMPTION_TIP.format({ learnMoreUrl: 'https://discord.com/blog/fortnite-quest' }),
                giftInfo: () => i.Z.Messages.FORTNITE_GIFT_INVENTORY_INFO.format({
                    guardOutfitName: i.Z.Messages.FORNITE_GUARD_OUTPUT,
                    rewardName: i.Z.Messages.FORTNITE_REWARD_NAME
                }),
                enrollmentTooltip: e => i.Z.Messages.FORTNITE_DROPS_ELIGIBILITY_ENROLLMENT_TOOLTIP.format({
                    rewardName: i.Z.Messages.FORTNITE_REWARD_NAME,
                    streamLengthRequirement: e
                }),
                completionTooltip: e => i.Z.Messages.FORTNITE_DROPS_COMPLETION_TOOLTIP.format({
                    rewardName: i.Z.Messages.FORTNITE_REWARD_NAME,
                    streamLengthRequirement: e
                })
            }
        }
    };
