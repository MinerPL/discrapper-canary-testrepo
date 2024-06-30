var r = n(544891), i = n(433517), a = n(570140), o = n(443684), s = n(663389), l = n(626135), u = n(768581), c = n(546796), d = n(981631), _ = n(792101), E = n(689938);
t.Z = {
    open() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { openWithoutBackstack: !1 };
        (0, o.Z)(e, t, n);
    },
    init: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 ? arguments[2] : void 0;
        a.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_INIT',
            section: e,
            subsection: t,
            ...n
        });
    },
    close() {
        let e = s.Z.onClose;
        a.Z.dispatch({ type: 'USER_SETTINGS_MODAL_CLOSE' }), null != e && e();
    },
    setSection(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        a.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_SET_SECTION',
            section: e,
            subsection: t,
            ...n
        });
    },
    clearSubsection(e) {
        a.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_CLEAR_SUBSECTION',
            forSection: e
        });
    },
    clearScrollPosition(e) {
        a.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION',
            forSection: e
        });
    },
    updateAccount(e) {
        a.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_UPDATE_ACCOUNT',
            settings: e
        });
    },
    submitComplete() {
        a.Z.dispatch({ type: 'USER_SETTINGS_MODAL_SUBMIT_COMPLETE' });
    },
    reset() {
        a.Z.dispatch({ type: 'USER_SETTINGS_MODAL_RESET' });
    },
    saveAccountChanges(e, t) {
        a.Z.dispatch({ type: 'USER_SETTINGS_MODAL_SUBMIT' });
        let {
                username: n,
                email: o,
                emailToken: s,
                password: f,
                avatar: h,
                newPassword: p,
                discriminator: m
            } = e, {close: I} = t;
        return (0, c.Z)(e => {
            let t = {
                    username: n,
                    email: o,
                    email_token: s,
                    password: f,
                    avatar: h,
                    new_password: p,
                    ...e,
                    discriminator: null != m && '' !== m ? m : void 0
                }, a = i.K.get(d.JkL), l = (0, _.xJ)();
            null != l && null != a && (t.push_provider = l, t.push_token = a);
            let u = i.K.get(d.scU);
            return null != _.mv && null != u && (t.push_voip_provider = _.mv, t.push_voip_token = u), r.tn.patch({
                url: d.ANM.ME,
                oldFormErrors: !0,
                body: t
            });
        }, {
            checkEnabled: !1,
            modalProps: { title: E.Z.Messages.TWO_FA_CHANGE_ACCOUNT },
            hooks: {
                onEarlyClose: () => a.Z.dispatch({
                    type: 'USER_SETTINGS_MODAL_SUBMIT_FAILURE',
                    errors: {}
                })
            }
        }).then(e => {
            let t = e.body, n = t.token;
            return l.default.track(d.rMx.USER_AVATAR_UPDATED, { animated: (0, u.xR)(t.avatar) }), delete t.token, a.Z.dispatch({
                type: 'UPDATE_TOKEN',
                token: n,
                userId: t.id
            }), a.Z.dispatch({
                type: 'CURRENT_USER_UPDATE',
                user: t
            }), null != p && a.Z.dispatch({
                type: 'USER_PASSWORD_UPDATE',
                user: t,
                newPassword: p
            }), null != f && null != p && a.Z.dispatch({
                type: 'PASSWORD_UPDATED',
                userId: t.id
            }), I ? this.close() : this.submitComplete(), e;
        }, e => (a.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_SUBMIT_FAILURE',
            errors: e.body
        }), e));
    }
};
