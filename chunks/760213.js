s.d(t, {
    W: function () {
        return n;
    },
    Z: function () {
        return T;
    }
}), s(773603);
var n, r, i = s(735250), a = s(470079), o = s(120356), l = s.n(o), c = s(442837), u = s(481060), d = s(893776), h = s(239091), p = s(598077), m = s(314897), f = s(246946), C = s(594174), g = s(626135), x = s(51144), N = s(480387), v = s(726745), E = s(251423), S = s(981631), A = s(689938), j = s(941439);
function y(e) {
    let {
            actionText: t,
            user: s,
            onAction: n
        } = e, {
            currentUser: r,
            hidePrivateData: a,
            isAuthenticated: o
        } = (0, c.cj)([
            C.default,
            f.Z,
            m.default
        ], () => ({
            currentUser: C.default.getCurrentUser(),
            hidePrivateData: f.Z.hidePersonalInformation,
            isAuthenticated: m.default.isAuthenticated()
        })), E = new p.Z(s), y = o && (null == r ? void 0 : r.id) === E.id, T = s.tokenStatus === v.q.INVALID, I = a || E.isPomelo() ? null : '#'.concat(E.discriminator), Z = null;
    return y ? Z = (0, i.jsx)(u.Text, {
        variant: 'text-sm/semibold',
        className: j.hintText,
        color: 'text-positive',
        children: A.Z.Messages.SWITCH_ACCOUNTS_ACTIVE_ACCOUNT
    }) : T && (Z = (0, i.jsx)(u.Text, {
        variant: 'text-sm/semibold',
        className: j.hintText,
        color: 'text-danger',
        children: A.Z.Messages.SWITCH_ACCOUNTS_INVALID_TOKEN
    })), (0, i.jsx)('div', {
        className: j.accountCard,
        children: (0, i.jsxs)('div', {
            className: j.userDetails,
            children: [
                (0, i.jsx)(u.Avatar, {
                    src: E.getAvatarURL(void 0, 40),
                    size: u.AvatarSizes.SIZE_40,
                    'aria-label': s.username
                }),
                (0, i.jsxs)('div', {
                    className: l()(j.usernameSection, { [j.hasActionMaxWidth]: !y }),
                    children: [
                        (0, i.jsxs)('div', {
                            className: j.username,
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'header-primary',
                                    className: j.textOverflow,
                                    children: x.ZP.getUserTag(E, {
                                        mode: 'username',
                                        identifiable: a ? 'never' : 'always'
                                    })
                                }),
                                (0, i.jsx)(u.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: I
                                })
                            ]
                        }),
                        Z
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: j.userActions,
                    children: [
                        !y && (0, i.jsx)(u.Button, {
                            onClick: function () {
                                if (T) {
                                    n(0, s.id);
                                    return;
                                }
                                g.default.track(S.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, { location: { section: S.jXE.MANAGE_ACCOUNTS_MODAL } }), N.yD(s.id), n(1, s.id);
                            },
                            color: u.Button.Colors.PRIMARY,
                            children: T ? A.Z.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN : t
                        }),
                        (0, i.jsx)(u.Button, {
                            className: j.userActionMenu,
                            onClick: function (e) {
                                (0, h.vq)(e, e => {
                                    let {onSelect: t} = e;
                                    return (0, i.jsx)(u.Menu, {
                                        'aria-label': A.Z.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNT,
                                        navId: 'manage-multi-account',
                                        onClose: h.Zy,
                                        onSelect: t,
                                        children: (0, i.jsx)(u.MenuItem, {
                                            id: 'remove-account',
                                            label: A.Z.Messages.SWITCH_ACCOUNTS_REMOVE_ACCOUNT,
                                            action: () => {
                                                !function () {
                                                    d.Z.logout(null, s.id).finally(() => {
                                                        N.Zd(s.id);
                                                    });
                                                    let e = {};
                                                    null != r ? e.section = S.jXE.MANAGE_ACCOUNTS_MODAL : e.page = S.Usc.LOGIN, g.default.track(S.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE, { location: e }), n(2, s.id);
                                                }(), null != t && t();
                                            },
                                            color: 'danger'
                                        })
                                    });
                                });
                            },
                            size: u.Button.Sizes.ICON,
                            look: u.Button.Looks.BLANK,
                            color: u.Button.Colors.WHITE,
                            'aria-label': A.Z.Messages.MORE_OPTIONS,
                            children: (0, i.jsx)(u.MoreHorizontalIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: j.overflowMenuIcon
                            })
                        })
                    ]
                })
            ]
        })
    });
}
function T(e) {
    let {
            actionText: t,
            onAction: s
        } = e, {
            isLoading: n,
            multiAccountUsers: r
        } = (0, E.L)();
    return (0, i.jsx)('div', {
        className: j.list,
        children: n ? (0, i.jsx)(u.Spinner, {}) : r.map((e, n) => (0, i.jsxs)(a.Fragment, {
            children: [
                (0, i.jsx)(y, {
                    user: e,
                    actionText: t,
                    onAction: s
                }, e.id),
                r.length - 1 !== n && (0, i.jsx)('div', {
                    role: 'separator',
                    className: j.separator
                })
            ]
        }, e.id))
    });
}
(r = n || (n = {}))[r.LOGIN_REQUIRED = 0] = 'LOGIN_REQUIRED', r[r.SWITCHED = 1] = 'SWITCHED', r[r.REMOVED = 2] = 'REMOVED';
