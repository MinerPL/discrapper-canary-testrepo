n.d(t, {
    u: function () {
        return I;
    }
});
var s = n(735250), a = n(470079), r = n(512722), i = n.n(r), l = n(399606), o = n(481060), c = n(594174), d = n(933970), _ = n(340453), u = n(292352), E = n(689938), T = n(88876);
function I(e) {
    let {user: t} = e, r = (0, l.e7)([c.default], () => c.default.getCurrentUser()), I = a.useCallback(() => {
            i()(void 0 !== r, 'User must be logged in to accept a link request'), (0, o.openModalLazy)(async () => {
                let {default: e} = await n.e('50872').then(n.bind(n, 442673));
                return n => (0, s.jsx)(e, {
                    ...n,
                    currentUser: r,
                    otherUser: t
                });
            });
        }, [
            r,
            t
        ]);
    return (0, s.jsxs)('div', {
        className: T.container,
        children: [
            (0, s.jsx)('div', {
                className: T.details,
                children: (0, s.jsx)(_.Z, {
                    otherUser: t,
                    status: u.ne.ACTIVE
                })
            }),
            (0, s.jsx)('div', {
                className: T.actions,
                children: (0, s.jsx)(d.Z, {
                    icon: o.CloseSmallIcon,
                    className: T.__invalid_actionDeny,
                    tooltip: E.Z.Messages.FAMILY_CENTER_LINK_ACTION_DISCONNECT,
                    onClick: I
                })
            })
        ]
    });
}
