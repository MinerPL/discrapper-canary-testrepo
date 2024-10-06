n(411104);
var r = n(544891),
    i = n(433517),
    a = n(570140),
    s = n(187819),
    o = n(663389),
    l = n(626135),
    u = n(768581),
    c = n(546796),
    d = n(37234),
    _ = n(981631),
    E = n(792101),
    f = n(689938);
t.Z = {
    open() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { openWithoutBackstack: !1 };
        (0, s.sp)({
            location: 'modal-action-creators-open',
            autoTrackExposure: !1
        }) &&
            e === _.oAB.PRIVACY_AND_SAFETY &&
            (e = _.oAB.PRIVACY_AND_SAFETY_V2),
            a.Z.dispatch({
                type: 'USER_SETTINGS_MODAL_OPEN',
                section: e,
                subsection: t,
                ...n
            });
        (0, d.jN)(_.S9g.USER_SETTINGS);
    },
    init: function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 ? arguments[2] : void 0;
        a.Z.dispatch({
            type: 'USER_SETTINGS_MODAL_INIT',
            section: e,
            subsection: t,
            ...n
        });
    },
    close() {
        let e = o.Z.onClose;
        a.Z.dispatch({ type: 'USER_SETTINGS_MODAL_CLOSE' }), null != e && e();
    },
    setSection(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
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
        let { username: n, email: s, emailToken: o, password: d, avatar: h, newPassword: p, discriminator: I } = e,
            { close: m } = t;
        return (0, c.Z)(
            (e) => {
                let t = {
                        username: n,
                        email: s,
                        email_token: o,
                        password: d,
                        avatar: h,
                        new_password: p,
                        ...e,
                        discriminator: null != I && '' !== I ? I : void 0
                    },
                    a = i.K.get(_.JkL),
                    l = (0, E.xJ)();
                null != l && null != a && ((t.push_provider = l), (t.push_token = a));
                let u = i.K.get(_.scU);
                return (
                    null != E.mv && null != u && ((t.push_voip_provider = E.mv), (t.push_voip_token = u)),
                    r.tn.patch({
                        url: _.ANM.ME,
                        oldFormErrors: !0,
                        body: t
                    })
                );
            },
            {
                checkEnabled: !1,
                modalProps: { title: f.Z.Messages.TWO_FA_CHANGE_ACCOUNT },
                hooks: {
                    onEarlyClose: () =>
                        a.Z.dispatch({
                            type: 'USER_SETTINGS_MODAL_SUBMIT_FAILURE',
                            errors: {}
                        })
                }
            }
        ).then(
            (e) => {
                let t = e.body,
                    n = t.token;
                return (
                    l.default.track(_.rMx.USER_AVATAR_UPDATED, { animated: (0, u.xR)(t.avatar) }),
                    delete t.token,
                    a.Z.dispatch({
                        type: 'UPDATE_TOKEN',
                        token: n,
                        userId: t.id
                    }),
                    a.Z.dispatch({
                        type: 'CURRENT_USER_UPDATE',
                        user: t
                    }),
                    null != p &&
                        a.Z.dispatch({
                            type: 'USER_PASSWORD_UPDATE',
                            user: t,
                            newPassword: p
                        }),
                    null != d &&
                        null != p &&
                        a.Z.dispatch({
                            type: 'PASSWORD_UPDATED',
                            userId: t.id
                        }),
                    m ? this.close() : this.submitComplete(),
                    e
                );
            },
            (e) => (
                a.Z.dispatch({
                    type: 'USER_SETTINGS_MODAL_SUBMIT_FAILURE',
                    errors: e.body
                }),
                e
            )
        );
    }
};
