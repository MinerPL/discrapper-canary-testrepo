n.d(t, {
    z: function () {
        return r;
    }
}),
    n(47120);
var i = n(470079),
    a = n(113434),
    s = n(689938);
function r() {
    let [e, t] = i.useState(a.e5.UNCLAIMED),
        n = i.useMemo(
            () => [
                {
                    id: a.e5.UNCLAIMED,
                    label: s.Z.Messages.QUESTS_ALL
                },
                {
                    id: a.e5.CLAIMED,
                    label: s.Z.Messages.QUESTS_CLAIMED
                }
            ],
            []
        );
    return {
        tabs: n,
        selectedTab: e,
        onSelectTab: i.useCallback((e) => {
            t(e);
        }, [])
    };
}
