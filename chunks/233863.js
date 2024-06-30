r.d(e, {
    Y: function () {
        return E;
    }
});
var n = r(607190), _ = r(527475);
let a = -1, i = () => 'hidden' !== n.m.document.visibilityState || n.m.document.prerendering ? 1 / 0 : 0, o = () => {
        (0, _.u)(({timeStamp: t}) => {
            a = t;
        }, !0);
    }, E = () => (a < 0 && (a = i(), o()), {
        get firstHiddenTime() {
            return a;
        }
    });
