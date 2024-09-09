n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(570140),
    r = n(71509);
function l() {
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('52030'), n.e('11260'), n.e('33728')]).then(n.bind(n, 266653));
            return (t) => (0, i.jsx)(e, { ...t });
        },
        {
            onCloseCallback: () => {
                s.Z.dispatch({ type: 'CLEAR_AUTHENTICATION_ERRORS' }),
                    s.Z.dispatch({
                        type: 'LOGIN_RESET',
                        isMultiAccount: !0
                    });
            },
            modalKey: r.Ui
        }
    );
}
