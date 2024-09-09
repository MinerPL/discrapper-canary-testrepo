n.d(t, {
    q: function () {
        return i;
    }
});
var s = n(735250);
n(470079);
var a = n(952265);
function i(e) {
    let { demonetized: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    (0, a.ZD)(
        async () => {
            let { default: a } = await n.e('90220').then(n.bind(n, 418225));
            return (n) =>
                (0, s.jsx)(a, {
                    guildId: e,
                    demonetized: t,
                    ...n
                });
        },
        {
            onCloseRequest: () => {}
        }
    );
}
