n.d(l, {
    Z: function () {
        return C;
    }
});
var t = n(735250);
n(470079);
var i = n(120356), r = n.n(i), a = n(392711), s = n(481060), u = n(239091), o = n(596454), d = n(911969), c = n(574399), m = n(572004), p = n(49012), f = n(970184), v = n(280501), E = n(689938), N = n(919269);
function h(e) {
    let {
        url: l,
        onSelect: n
    } = e;
    return m.wS && null != l ? (0, t.jsx)(s.Menu, {
        navId: 'component-button',
        onClose: u.Zy,
        'aria-label': E.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_NAME,
        onSelect: n,
        children: (0, t.jsx)(s.MenuGroup, {
            children: (0, t.jsx)(s.MenuItem, {
                id: 'copy',
                label: E.Z.Messages.MESSAGE_BUTTON_COMPONENT_LINK_CONTEXT_MENU_COPY,
                action: () => (0, m.JG)(l)
            })
        })
    }) : null;
}
function C(e) {
    let l;
    let {
            label: n,
            style: i,
            disabled: m,
            emoji: E,
            url: C,
            skuId: I
        } = e, {
            executeStateUpdate: g,
            visualState: x,
            isDisabled: S
        } = (0, f.Ee)(e), j = (0, c.I)(I), T = null != I && i === d.ZJ.PREMIUM, _ = T && (null == j ? void 0 : j.disabled), L = T ? null == j ? void 0 : j.label : n, Z = null != E, M = null != L && L.length > 0, O = i === d.ZJ.LINK && null != C && C.length > 0, A = x === v.gH.LOADING || T && null == j;
    return l = O ? () => {
        (0, p.q)({
            href: null != C ? C : '',
            shouldConfirm: !0
        });
    } : T ? null != j && !1 === j.disabled ? j.onClick : a.noop : () => g(), (0, t.jsxs)(s.Button, {
        color: function (e) {
            switch (e) {
            case d.ZJ.PRIMARY:
            case d.ZJ.PREMIUM:
                return s.Button.Colors.BRAND;
            case d.ZJ.SUCCESS:
                return s.Button.Colors.GREEN;
            case d.ZJ.DESTRUCTIVE:
                return s.Button.Colors.RED;
            default:
                return s.Button.Colors.PRIMARY;
            }
        }(i),
        size: s.Button.Sizes.SMALL,
        disabled: m || x === v.gH.DISABLED || S || _,
        onClick: l,
        onContextMenu: e => {
            O && (0, u.vq)(e, e => (0, t.jsx)(h, {
                ...e,
                url: C
            }));
        },
        role: O ? 'link' : 'button',
        children: [
            (0, t.jsxs)('div', {
                className: r()(N.content, {
                    [N.hidden]: A,
                    [N.premium]: T
                }),
                'aria-hidden': A,
                children: [
                    T ? (0, t.jsx)('div', {
                        className: N.shopIcon,
                        children: (0, t.jsx)(s.ShopIcon, {
                            size: 'xs',
                            color: 'white'
                        })
                    }) : null,
                    Z ? (0, t.jsx)(o.Z, {
                        className: r()({ [N.textEmoji]: M }),
                        src: E.src,
                        emojiId: E.id,
                        emojiName: E.name,
                        animated: E.animated
                    }) : null,
                    M ? (0, t.jsx)('div', {
                        className: N.label,
                        children: L
                    }) : null,
                    O ? (0, t.jsx)(s.WindowLaunchIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: N.launchIcon
                    }) : null
                ]
            }),
            A ? (0, t.jsx)('div', {
                className: N.loading,
                children: (0, t.jsx)(s.Dots, {
                    dotRadius: 3.5,
                    themed: !0
                })
            }) : null
        ]
    });
}
