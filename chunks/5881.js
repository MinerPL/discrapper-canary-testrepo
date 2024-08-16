n.d(t, {
    T: function () {
        return l;
    }
});
var r = n(259443),
    i = n(818083),
    a = n(231338);
let s = (0, i.B)({
        id: '2024-04_quests_logging',
        kind: 'user',
        label: 'Quests Logging',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Quest logging enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    o = () => s.getCurrentConfig({ location: 'quests_logging' }, { autoTrackExposure: !1 }).enabled;
function l() {
    let { quest: e, location: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = o(),
        i = null == e ? void 0 : e.config.messages.questName,
        s = 'QuestLogger'.concat(null != t ? '-'.concat(t) : '').concat(null != i ? '-'.concat(i, ')') : ''),
        l = new r.Y(s);
    return {
        log: n ? l.log : a.dG,
        warn: n ? l.warn : a.dG,
        error: n ? l.error : a.dG,
        info: n ? l.info : a.dG,
        verbose: n ? l.verbose : a.dG,
        trace: n ? l.trace : a.dG
    };
}
