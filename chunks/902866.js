n.d(t, {
    Y: function () {
        return s;
    }
});
var r = n(912860),
    i = n(873546);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = '' !== e.Messages.XSSDefenses ? e.Messages.XSSDefenses : e.Messages;
    null != n.SELF_XSS_HEADER && (console.log('%c'.concat(n.SELF_XSS_HEADER), 'color: #5865f2; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;'), console.log('%c'.concat(n.SELF_XSS_LINE_1), 'font-size: 16px;'), console.log('%c'.concat(n.SELF_XSS_LINE_2), 'font-size: 18px; font-weight: bold; color: red;'), t >= 4 ? (console.log('%c'.concat(n.SELF_XSS_LINE_3), 'font-size: 16px;'), console.log('%c'.concat(n.SELF_XSS_LINE_4.format({ url: ''.concat(location.protocol).concat(window.GLOBAL_ENV.MARKETING_ENDPOINT, '/jobs') })), 'font-size: 16px;')) : setTimeout(() => a(e, t + 1), 1000));
}
function s(e, t, n) {
    if (null != n && '0.0.0' === n.remoteApp.getVersion()) return;
    let s = new r.b();
    if (null != n) {
        if (null != n.window.setDevtoolsCallbacks)
            n.window.setDevtoolsCallbacks(
                () => {
                    t.hideToken(), a(e);
                },
                () => {
                    t.showToken();
                }
            );
        else {
            let r = n.window.webContents;
            r.removeAllListeners('devtools-opened'),
                r.on('devtools-opened', () => {
                    t.hideToken(), a(e);
                }),
                r.on('devtools-closed', t.showToken);
        }
    } else
        !i.tq &&
            !i.Em &&
            s.on('changed', (n) => {
                let { open: r } = n;
                r ? (t.hideToken(), a(e)) : t.showToken();
            });
    window.addEventListener('beforeunload', (e) => {
        e.isTrusted && t.showToken();
    });
}
