n.d(t, {
    $: function () {
        return i;
    }
});
var s = n(970648), a = n(981631);
async function i(e) {
    let t = s.Z.generateNonce();
    try {
        let n = await s.Z.createHandoffToken(t);
        return a.EYA.DEVELOPER_PORTAL_LOGIN_HANDOFF(t, n, e);
    } catch {
        return '//'.concat(window.GLOBAL_ENV.DEVELOPERS_ENDPOINT, '/').concat(e);
    }
}
