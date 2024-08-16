n(653041);
var r = n(97613),
    i = n.n(r),
    a = n(570140),
    s = n(777639),
    o = n(272423),
    l = n(808663),
    u = n(178535),
    c = n(981631);
t.Z = {
    push(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i()('modal'),
            r = arguments.length > 3 ? arguments[3] : void 0,
            s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : c.IlC.APP;
        return (
            (0, o.Ll)({
                key: n,
                modal: (0, u.Z)(e, {}, t, n),
                ...r
            }),
            a.Z.dispatch({
                type: 'MODAL_PUSH',
                modal: e,
                props: t,
                key: n,
                appContext: s
            }),
            n
        );
    },
    pushLazy(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i()('modal'),
            r = arguments.length > 3 ? arguments[3] : void 0,
            a = (0, s.D)();
        return null != a && a.isReady()
            ? (e instanceof Promise
                  ? e.then((e) => {
                        let { default: t } = e;
                        return t;
                    })
                  : e()
              ).then((e) => this.push(e, t, n, r))
            : new Promise((i) => l.Z.enqueue(() => i(this.pushLazy(e, t, n, r))));
    },
    updateAnimation(e, t) {
        a.Z.dispatch({
            type: 'MODAL_UPDATE',
            key: e,
            props: {},
            partial: !0,
            animation: t
        });
    },
    pop() {
        (0, o.GZ)(), a.Z.dispatch({ type: 'MODAL_POP' });
    },
    popWithKey(e, t) {
        (0, o.GZ)(e, t),
            a.Z.dispatch({
                type: 'MODAL_POP',
                key: e,
                onExited: t
            });
    },
    popAll() {
        (0, o.lE)(),
            a.Z.dispatch({ type: 'MODAL_POP_ALL' }),
            a.Z.dispatch({ type: 'CHANNEL_SETTINGS_CLOSE' }),
            a.Z.dispatch({ type: 'EMAIL_VERIFICATION_MODAL_CLOSE' }),
            a.Z.dispatch({ type: 'GUILD_SETTINGS_CLOSE' }),
            a.Z.dispatch({ type: 'HIDE_ACTION_SHEET' }),
            a.Z.dispatch({ type: 'DISPLAYED_INVITE_CLEAR' }),
            a.Z.dispatch({
                type: 'DRAWER_CLOSE',
                animated: !0
            }),
            a.Z.dispatch({ type: 'NOTIFICATION_SETTINGS_MODAL_CLOSE' }),
            a.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' }),
            a.Z.dispatch({ type: 'MENTION_MODAL_CLOSE' }),
            a.Z.dispatch({ type: 'USER_SETTINGS_MODAL_CLOSE' }),
            a.Z.dispatch({ type: 'SEARCH_MODAL_CLOSE' }),
            a.Z.dispatch({ type: 'CONNECTIONS_GRID_MODAL_HIDE' });
    }
};
