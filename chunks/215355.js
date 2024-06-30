n.d(t, {
    LI: function () {
        return _;
    }
}), n(470079), n(902704);
var r = n(433517), i = n(353926), a = n(159626), o = n(893638), s = n(57132);
let l = {
        mergeTabs: !1,
        hideLabels: !1,
        roundedCorners: !1,
        blurTabBar: !1
    }, u = !1, c = l, d = (0, a.Z)({
        kind: 'user',
        id: '2024-04_merged_tabs',
        label: 'Mobile Redesign - Merge Tabs Last Stand Experiment',
        defaultConfig: l,
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: {
                    mergeTabs: !1,
                    hideLabels: !1,
                    roundedCorners: !1,
                    blurTabBar: !1
                }
            },
            {
                id: 1,
                label: 'Merged Tabs, Labels',
                config: {
                    mergeTabs: !0,
                    hideLabels: !1,
                    roundedCorners: !1,
                    blurTabBar: !1
                }
            },
            {
                id: 2,
                label: 'Merged Tabs, No Labels',
                config: {
                    mergeTabs: !0,
                    hideLabels: !0,
                    roundedCorners: !1,
                    blurTabBar: !1
                }
            },
            {
                id: 3,
                label: 'Merged Tabs, Labels, Rounded Corners',
                config: {
                    mergeTabs: !0,
                    hideLabels: !1,
                    roundedCorners: !0,
                    blurTabBar: !1
                }
            },
            {
                id: 4,
                label: 'Merged Tabs, No Labels, Rounded Corners',
                config: {
                    mergeTabs: !0,
                    hideLabels: !0,
                    roundedCorners: !0,
                    blurTabBar: !1
                }
            },
            {
                id: 5,
                label: 'Merged Tabs, Labels, Blurred Tab Bar',
                config: {
                    mergeTabs: !0,
                    hideLabels: !1,
                    roundedCorners: !1,
                    blurTabBar: !0
                }
            },
            {
                id: 6,
                label: 'Merged Tabs, No Labels, Blurred Tab Bar',
                config: {
                    mergeTabs: !0,
                    hideLabels: !0,
                    roundedCorners: !1,
                    blurTabBar: !0
                }
            },
            {
                id: 7,
                label: 'Merged Tabs, Labels, Rounded Corners, Blurred Tab Bar',
                config: {
                    mergeTabs: !0,
                    hideLabels: !1,
                    roundedCorners: !0,
                    blurTabBar: !0
                }
            },
            {
                id: 8,
                label: 'Merged Tabs, No Labels, Rounded Corners, Blurred Tab Bar',
                config: {
                    mergeTabs: !0,
                    hideLabels: !0,
                    roundedCorners: !0,
                    blurTabBar: !0
                }
            }
        ]
    });
function _(e, t) {
    var n, a;
    let _ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !(0, s.cn)(), E = !!_ || (null == t ? void 0 : t.disable);
    return i.Z.hasLoadedExperiments || E ? (0, o.P)(d.existingUsers, d.newUsers, e, {
        ...t,
        disable: E,
        autoTrackExposure: !_ && (null === (a = null == t ? void 0 : t.autoTrackExposure) || void 0 === a || a)
    }) : (!u && (c = null !== (n = r.K.get('--merged-tabs-experiment-cached-config')) && void 0 !== n ? n : l, u = !0), c);
}
