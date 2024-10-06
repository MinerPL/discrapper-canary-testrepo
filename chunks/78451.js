s.d(a, {
    IF: function () {
        return i;
    },
    LJ: function () {
        return l;
    },
    MF: function () {
        return c;
    },
    X7: function () {
        return N;
    },
    c7: function () {
        return u;
    }
});
var t = s(524437);
s(376345);
var n = s(692547),
    _ = s(2150),
    E = s(187819),
    r = s(981631),
    o = s(973005),
    I = s(689938);
function l(e) {
    return e.map((e) => ({
        title: e.name,
        description: e.desc,
        highlightColor: (function (e) {
            switch (e) {
                case R('PRIMARY_400'):
                    return _.q.ACCENT;
                case R('GREEN_360'):
                    return _.q.GREEN;
                case R('YELLOW_360'):
                    return _.q.YELLOW;
                case R('ORANGE_345'):
                    return _.q.ORANGE;
                case R('RED_400'):
                    return _.q.RED;
                default:
                    return _.q.NONE;
            }
        })(e.color),
        value: e.value,
        disabled: e.disabled
    }));
}
function i() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return [
        {
            name: I.Z.Messages.VERIFICATION_LEVEL_NONE,
            desc: I.Z.Messages.VERIFICATION_LEVEL_NONE_CRITERIA,
            value: r.sFg.NONE,
            disabled: e,
            tooltipText: e ? I.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null
        },
        {
            name: I.Z.Messages.VERIFICATION_LEVEL_LOW,
            desc: I.Z.Messages.VERIFICATION_LEVEL_LOW_CRITERIA,
            value: r.sFg.LOW,
            color: a ? void 0 : R('GREEN_360')
        },
        {
            name: I.Z.Messages.VERIFICATION_LEVEL_MEDIUM,
            desc: I.Z.Messages.VERIFICATION_LEVEL_MEDIUM_CRITERIA.format({ min: r.YeM.ACCOUNT_AGE }),
            value: r.sFg.MEDIUM,
            color: a ? void 0 : R('YELLOW_360')
        },
        {
            name: I.Z.Messages.VERIFICATION_LEVEL_HIGH,
            desc: I.Z.Messages.VERIFICATION_LEVEL_HIGH_CRITERIA.format({ min: r.YeM.MEMBER_AGE }),
            value: r.sFg.HIGH,
            color: a ? void 0 : R('ORANGE_345')
        },
        {
            name: I.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH,
            desc: I.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH_CRITERIA,
            value: r.sFg.VERY_HIGH,
            color: a ? void 0 : R('RED_400')
        }
    ];
}
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return [
        {
            name: I.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH_V2,
            desc: I.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH_DESCRIPTION_V2,
            value: r.lxg.ALL_MEMBERS,
            color: R('RED_400')
        },
        {
            name: I.Z.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_V2,
            desc: I.Z.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_DESCRIPTION_V2,
            value: r.lxg.MEMBERS_WITHOUT_ROLES,
            disabled: e,
            tooltipText: e ? I.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null,
            color: R('YELLOW_360')
        },
        {
            name: I.Z.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_V2,
            desc: I.Z.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_DESCRIPTION_V2,
            value: r.lxg.DISABLED,
            disabled: e,
            tooltipText: e ? I.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null,
            color: R('PRIMARY_400')
        }
    ];
}
function u() {
    let e = (0, E.sp)({
        location: 'generate-dm-spam-options',
        autoTrackExposure: !1
    });
    return [
        {
            name: e ? I.Z.Messages.USER_SETTING_DM_SPAM_FILTER_ALL_TITLE : I.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS,
            desc: I.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS_HELP,
            value: t.Xr.FRIENDS_AND_NON_FRIENDS,
            color: R('GREEN_360')
        },
        {
            name: e ? I.Z.Messages.USER_SETTING_DM_SPAM_FILTER_NON_FRIENDS_TITLE : I.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS,
            desc: I.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS_HELP,
            value: t.Xr.NON_FRIENDS,
            color: R('YELLOW_360')
        },
        {
            name: e ? I.Z.Messages.USER_SETTING_DM_SPAM_FILTER_DISABLED_TITLE : I.Z.Messages.USER_DM_SPAM_FILTER_DISABLED,
            desc: I.Z.Messages.USER_DM_SPAM_FILTER_DISABLED_HELP,
            value: t.Xr.DISABLED,
            color: R('RED_400')
        }
    ];
}
function N() {
    return [
        {
            name: I.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_V2,
            desc: I.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_HELP_V2,
            value: o.TI.FRIENDS_AND_NON_FRIENDS,
            color: R('GREEN_360')
        },
        {
            name: I.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_V2,
            desc: I.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_HELP_V2,
            value: o.TI.NON_FRIENDS,
            color: R('YELLOW_360')
        },
        {
            name: I.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_V2,
            desc: I.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_HELP_V2,
            value: o.TI.DISABLED,
            color: R('RED_400')
        }
    ];
}
function R(e) {
    return n.Z.unsafe_rawColors[e].css;
}
