t.d(s, {
    b: function () {
        return o;
    }
}),
    t(47120);
var n = t(839469),
    a = t(726985);
let i = [a.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2, a.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2, a.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2, a.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2],
    r = [a.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2, a.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2],
    o = () => {
        let { hasSearchResults: e, searchResults: s } = (0, n.E)();
        if (!e)
            return {
                hideGuildOptions: !1,
                hideGlobalOption: !1
            };
        let t = [...s].some((e) => i.includes(e));
        return {
            hideGuildOptions: !t,
            hideGlobalOption: ![...s].some((e) => r.includes(e))
        };
    };
