r.d(t, {
    Y: function () {
        return E;
    }
});
var n = r(395848);
let a = -1,
    o = () => {
        a = 'hidden' !== n.m.document.visibilityState || n.m.document.prerendering ? 1 / 0 : 0;
    },
    i = (e) => {
        'hidden' === n.m.document.visibilityState && a > -1 && ((a = 'visibilitychange' === e.type ? e.timeStamp : 0), removeEventListener('visibilitychange', i, !0), removeEventListener('prerenderingchange', i, !0));
    },
    _ = () => {
        addEventListener('visibilitychange', i, !0), addEventListener('prerenderingchange', i, !0);
    },
    E = () => (
        n.m.document && a < 0 && (o(), _()),
        {
            get firstHiddenTime() {
                return a;
            }
        }
    );
