n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    r = n(442837),
    l = n(481060),
    o = n(547972),
    c = n(556296),
    d = n(63063),
    u = n(13140),
    _ = n(435064),
    E = n(39604),
    h = n(356659),
    m = n(981631),
    I = n(332325),
    g = n(689938),
    p = n(801245);
function T(e) {
    (0, o.Z)(I.Z.CLIPS), (0, E.UW)(e);
}
function S() {
    let e = (0, r.e7)([c.Z], () => c.Z.getKeybindForAction(m.kg4.SAVE_CLIP));
    if (null == e) return (0, i.jsx)(i.Fragment, { children: g.Z.Messages.CLIPS_USER_EDUCATION_ENABLED_BODY_NO_KEYBIND });
    let t = u.BB(e.shortcut, !0);
    return (0, i.jsx)(i.Fragment, {
        children: g.Z.Messages.CLIPS_USER_EDUCATION_ENABLED_BODY.format({
            keybind: t,
            keybindHook: () =>
                (0, i.jsx)('span', {
                    className: p.keyCombo,
                    children: (0, i.jsx)(l.KeyCombo, { shortcut: t })
                })
        })
    });
}
let f = {
    [h.D5.Error]: {
        textColor: 'text-primary',
        buttonLook: l.Button.Looks.FILLED,
        buttonColor: l.Button.Colors.PRIMARY,
        bodyCopy: () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(l.WarningIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: p.errorWarningIcon
                    }),
                    g.Z.Messages.CLIPS_USER_EDUCATION_ERROR_BODY
                ]
            }),
        buttonCopy: () => g.Z.Messages.CLIPS_USER_EDUCATION_LEARN_MORE,
        ctaOnClick: () => {
            window.open(d.Z.getArticleURL(m.BhN.CLIPS), '_blank');
        },
        containerClass: p.container
    },
    [h.D5.Disabled]: {
        textColor: 'text-primary',
        buttonLook: l.Button.Looks.FILLED,
        buttonColor: l.Button.Colors.BRAND,
        bodyCopy: () => g.Z.Messages.CLIPS_USER_EDUCATION_DISABLED_BODY,
        buttonCopy: () => g.Z.Messages.CLIPS_USER_EDUCATION_MANAGE_CLIPS_SETTINGS,
        ctaOnClick: () => T(h.D5.Disabled),
        containerClass: p.container
    },
    [h.D5.Enabled]: {
        textColor: 'always-white',
        buttonLook: l.Button.Looks.FILLED,
        buttonColor: l.Button.Colors.BRAND_INVERTED,
        bodyCopy: () => (0, i.jsx)(S, {}),
        buttonCopy: () => g.Z.Messages.CLIPS_USER_EDUCATION_MANAGE_CLIPS_SETTINGS,
        ctaOnClick: () => T(h.D5.Enabled),
        containerClass: s()(p.container, p.containerEnabled)
    }
};
function C() {
    var e;
    let { decoupledClipsEnabled: t, clipsError: n } = (0, r.cj)([_.Z], () => ({
        decoupledClipsEnabled: _.Z.getSettings().decoupledClipsEnabled,
        clipsError: _.Z.getLastClipsError()
    }));
    let a = ((e = t), null != n ? h.D5.Error : e ? h.D5.Enabled : h.D5.Disabled),
        { bodyCopy: s, buttonCopy: o, ctaOnClick: c, textColor: d, buttonColor: u, buttonLook: m, containerClass: I } = f[a];
    return (0, i.jsxs)('div', {
        className: I,
        children: [
            (0, i.jsx)(l.Text, {
                color: d,
                variant: 'text-sm/medium',
                children: s()
            }),
            (0, i.jsx)(l.Button, {
                onClick: () => (0, E.UW)(a),
                size: l.Button.Sizes.NONE,
                look: l.Button.Looks.BLANK,
                className: p.buttonClose,
                children: (0, i.jsx)(l.XSmallIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: p.dismissIcon
                })
            }),
            (0, i.jsx)(l.Button, {
                onClick: c,
                className: p.buttonCTA,
                color: u,
                look: m,
                fullWidth: !0,
                size: l.Button.Sizes.SMALL,
                children: o()
            })
        ]
    });
}
