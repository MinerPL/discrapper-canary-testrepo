n.r(t),
    n.d(t, {
        transitionToGlobalDiscovery: function () {
            return d;
        }
    }),
    n(411104);
var r = n(207796),
    i = n(859921),
    a = n(341907),
    s = n(703656),
    o = n(836768),
    l = n(49898),
    u = n(981631),
    c = n(128449);
function d(e) {
    let t = e.tab;
    switch ((o.Z.setState({ selectedTab: t }), t)) {
        case l.F$.SERVERS:
            var n, d;
            let f = e.selectedServersTab;
            null != f
                ? i.Z.setState({
                      selectedTab: f,
                      entrypoint: null !== (n = e.entrypoint) && void 0 !== n ? n : c.Qq.UNKNOWN
                  })
                : i.Z.setState({ entrypoint: null !== (d = e.entrypoint) && void 0 !== d ? d : c.Qq.UNKNOWN });
            let _ = (function (e) {
                let { extra: t } = e,
                    n = {},
                    i = r.GN.getState().entrypointGameId;
                return (
                    null != i && (n.search = '?game='.concat(i)),
                    null != t &&
                        (n = {
                            ...t,
                            ...n
                        }),
                    n
                );
            })({ extra: e.extra });
            return (0, s.uL)(u.Z5c.GLOBAL_DISCOVERY_SERVERS, _);
        case l.F$.APPS:
            return (0, s.uL)(u.Z5c.GLOBAL_DISCOVERY_APPS);
        case l.F$.QUESTS:
            return (0, a.navigateToQuestHome)(e.location, e.questContent, e.questId);
        default:
            throw Error('[transitionToGlobalDiscovery] Unhandled tab type: '.concat(t));
    }
}
