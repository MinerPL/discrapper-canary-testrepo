n.d(t, {
    Z: function () {
        return C;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(442837), r = n(481060), l = n(58642), o = n(695346), c = n(490983), d = n(285952), u = n(626135), _ = n(630388), E = n(804739), h = n(957657), I = n(34305), m = n(981631), p = n(689938), g = n(656505);
function T(e) {
    let {
        applicationViewItems: t,
        restoreApplication: n
    } = e;
    if (0 === t.length)
        return null;
    let s = t.map(e => {
        let t = e.libraryApplication.getDistributor();
        return (0, i.jsxs)('div', {
            className: g.hiddenLibraryApplication,
            children: [
                (0, i.jsxs)(d.Z, {
                    direction: d.Z.Direction.VERTICAL,
                    className: g.hiddenLibraryApplicationContent,
                    children: [
                        (0, i.jsx)('div', {
                            className: g.applicationName,
                            children: e.libraryApplication.getBranchedName(e.application)
                        }),
                        null != t ? (0, i.jsx)('div', {
                            className: g.applicationSubText,
                            children: m.EOG[t]
                        }) : null
                    ]
                }),
                (0, i.jsx)(r.Clickable, {
                    className: g.restoreButton,
                    onClick: () => n(e.libraryApplication),
                    children: (0, i.jsx)(r.CloseSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: g.restoreIcon
                    })
                })
            ]
        }, e.key);
    });
    return (0, i.jsxs)(r.FormSection, {
        className: g.hiddenLibraryApplications,
        children: [
            (0, i.jsx)(r.FormTitle, {
                className: g.hiddenLibraryApplicationsTitle,
                children: p.Z.Messages.SETTINGS_GAMES_HIDDEN_LIBRARY_APPLICATIONS_LABEL
            }),
            s
        ]
    });
}
class S extends s.PureComponent {
    handleToggleShortcutDesktop(e) {
        o.Xc.updateSetting(e);
    }
    handleToggleShortcutStartMenu(e) {
        o.Pe.updateSetting(e);
    }
    trackRestoreApplication(e, t) {
        u.default.track(m.rMx.APPLICATION_SETTINGS_UPDATED, {
            hidden_enabled: t,
            ...e.getAnalyticsData()
        });
    }
    renderBody() {
        let {
            hiddenLibraryApplicationViewItems: e,
            installShortcutDesktop: t,
            installShortcutStartMenu: n
        } = this.props;
        return (0, i.jsxs)('div', {
            className: g.body,
            children: [
                (0, E.Q)() ? (0, i.jsxs)(s.Fragment, {
                    children: [
                        (0, i.jsx)(r.FormSwitch, {
                            value: t,
                            onChange: this.handleToggleShortcutDesktop,
                            note: p.Z.Messages.USER_SETTINGS_GAMES_SHORTCUTS_DESKTOP_NOTE,
                            children: p.Z.Messages.USER_SETTINGS_GAMES_SHORTCUTS_DESKTOP
                        }),
                        (0, i.jsx)(r.FormSwitch, {
                            value: n,
                            onChange: this.handleToggleShortcutStartMenu,
                            note: p.Z.Messages.USER_SETTINGS_GAMES_SHORTCUTS_START_MENU_NOTE,
                            children: p.Z.Messages.USER_SETTINGS_GAMES_SHORTCUTS_START_MENU
                        }),
                        (0, i.jsx)(I.Z, {})
                    ]
                }) : null,
                (0, i.jsx)(T, {
                    restoreApplication: this.handleRestoreHiddenLibraryApplication,
                    applicationViewItems: e
                })
            ]
        });
    }
    render() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(h.Z, { currentRoute: m.Z5c.APPLICATION_LIBRARY_SETTINGS }),
                (0, i.jsx)(r.ScrollerAuto, {
                    className: g.scroller,
                    children: this.renderBody()
                })
            ]
        });
    }
    constructor(...e) {
        var t, n, i;
        super(...e), t = this, n = 'handleRestoreHiddenLibraryApplication', i = e => {
            let t = _.x9(e.getFlags(), m.eHb.HIDDEN);
            l.h(e.id, e.branchId, t), this.trackRestoreApplication(e, _.yE(t, m.eHb.HIDDEN));
        }, n in t ? Object.defineProperty(t, n, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = i;
    }
}
function C() {
    let e = {
        installShortcutDesktop: o.Xc.useSetting(),
        installShortcutStartMenu: o.Pe.useSetting(),
        hiddenLibraryApplicationViewItems: (0, a.e7)([c.Z], () => c.Z.hiddenLibraryApplicationViewItems)
    };
    return (0, i.jsx)(S, { ...e });
}
