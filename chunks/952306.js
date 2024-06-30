var n = s(735250);
s(470079);
var a = s(481060), i = s(723359), r = s(231338);
t.Z = {
    openNewUserAgeGateModal: e => {
        (0, a.openModalLazy)(async () => {
            let {default: e} = await Promise.all([
                s.e('20727'),
                s.e('97343')
            ]).then(s.bind(s, 298237));
            return t => (0, n.jsx)(e, { ...t });
        }, {
            modalKey: i.$$,
            onCloseRequest: r.dG,
            onCloseCallback: e
        });
    },
    openClaimAccountModal: function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = arguments.length > 1 ? arguments[1] : void 0;
        (0, a.openModalLazy)(async () => {
            let {default: t} = await s.e('1677').then(s.bind(s, 324239));
            return s => (0, n.jsx)(t, {
                claimRequired: e,
                ...s
            });
        }, {
            onCloseRequest: e ? r.dG : null,
            onCloseCallback: t
        });
    }
};
