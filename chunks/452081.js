n.d(t, {
    z: function () {
        return l;
    }
}),
    n(47120);
var i = n(470079),
    a = n(703656),
    s = n(113434),
    r = n(689938);
function l() {
    let [e, t] = i.useState(s.e5.ALL),
        n = i.useMemo(
            () => [
                {
                    id: s.e5.ALL,
                    label: r.Z.Messages.QUESTS_ALL
                },
                {
                    id: s.e5.CLAIMED,
                    label: r.Z.Messages.QUESTS_CLAIMED
                }
            ],
            []
        );
    return {
        tabs: n,
        selectedTab: e,
        onSelectTab: i.useCallback((e) => {
            (0, a.dL)('#'), t(e);
        }, [])
    };
}
