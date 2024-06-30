a.d(s, {
    Z: function () {
        return m;
    }
}), a(47120);
var E = a(735250), _ = a(470079), n = a(120356), r = a.n(n), t = a(392711), L = a.n(t), l = a(866442), i = a(692547), M = a(481060), c = a(893776), T = a(37234), C = a(232567), A = a(820160), o = a(594174), d = a(259580), u = a(350566), R = a(837748), I = a(971401), S = a(306453), D = a(981631), N = a(689938), O = a(846093);
function m(e) {
    let s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], [a, n] = _.useState(''), [r, t] = _.useState(null), [L, l] = _.useState(null), i = (0, R.Z)(e.code);
    _.useEffect(() => {
        (async function e() {
            let e = o.default.getCurrentUser();
            if (null == e)
                try {
                    e = await (0, C.k)();
                } catch (e) {
                    c.Z.verifySSOToken(null);
                }
            null != e && n(i.defaultName.format({ username: e.username }));
        }());
    }, [i.defaultName]);
    (0, I.Z)(e);
    let d = (0, E.jsxs)(E.Fragment, {
            children: [
                s ? (0, E.jsx)(S.Z, { guildTemplate: e }) : null,
                (0, E.jsx)('div', {
                    className: O.icon,
                    children: (0, E.jsx)(A.Z, {
                        icon: r,
                        onChange: t
                    })
                }),
                (0, E.jsx)(M.FormItem, {
                    title: i.nameLabel,
                    children: (0, E.jsx)(M.TextInput, {
                        type: 'text',
                        value: a,
                        maxLength: 100,
                        onChange: n,
                        error: null == L ? void 0 : L.name
                    })
                }),
                (0, E.jsx)(M.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    className: O.guidelines,
                    children: i.terms.format({ guidelinesURL: D.EYA.GUIDELINES })
                })
            ]
        }), m = e.serializedSourceGuild.roles.filter(e => '@everyone' !== e.name);
    return {
        form: d,
        preview: (0, E.jsxs)(E.Fragment, {
            children: [
                (0, E.jsx)('div', { className: O.divider }),
                (0, E.jsxs)(M.FormItem, {
                    className: O.previewSection,
                    title: N.Z.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_HEADER,
                    children: [
                        (0, E.jsx)(U, { channels: e.serializedSourceGuild.channels }),
                        (0, E.jsxs)(M.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: O.protip,
                            children: [
                                (0, E.jsxs)('span', {
                                    className: O.protipText,
                                    children: [
                                        N.Z.Messages.FORM_LABEL_ROLES_PRO_TIP,
                                        ':'
                                    ]
                                }),
                                ' ',
                                N.Z.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_TIP
                            ]
                        })
                    ]
                }),
                m.length > 0 ? (0, E.jsx)(E.Fragment, {
                    children: (0, E.jsx)(M.FormItem, {
                        className: O.previewSection,
                        title: N.Z.Messages.GUILD_TEMPLATE_MODAL_ROLES_HEADER2,
                        children: (0, E.jsx)(Z, { roles: m })
                    })
                }) : null
            ]
        }),
        handleSubmit: () => {
            u.Z.acceptGuildTemplate(e.code, a, r).then(() => {
                (0, M.closeAllModals)(), (0, T.Ou)();
            }).catch(e => l(e));
        }
    };
}
function U(e) {
    let {channels: s} = e, a = L()(s).sortBy(e => null == e.parent_id ? 10000 * Number(e.id) : 10000 * Number(e.parent_id) + e.id).map(e => {
            let s = function (e) {
                let {type: s} = e;
                return s === D.d4z.GUILD_VOICE ? M.VoiceNormalIcon : s === D.d4z.GUILD_CATEGORY ? d.Z : M.TextIcon;
            }(e);
            return (0, E.jsxs)('div', {
                className: r()(O.channel, { [O.category]: e.type === D.d4z.GUILD_CATEGORY }),
                children: [
                    (0, E.jsx)(s, { className: O.channelIcon }),
                    (0, E.jsx)(M.Text, {
                        className: O.channelText,
                        variant: 'text-sm/normal',
                        children: e.name
                    })
                ]
            }, e.id);
        }).value();
    return (0, E.jsx)('div', {
        className: O.channelsWrapper,
        children: a
    });
}
a(418757);
function Z(e) {
    let {roles: s} = e, a = s.slice().reverse().map(e => (0, E.jsx)(g, { role: e }, e.id));
    return (0, E.jsx)('ul', {
        className: O.rolesWrapper,
        children: a
    });
}
function g(e) {
    var s;
    let {role: a} = e, _ = null == a.color ? i.Z.unsafe_rawColors.PRIMARY_300.css : (0, l.Rf)(a.color);
    return (0, E.jsxs)('li', {
        className: O.role,
        style: { borderColor: null !== (s = (0, l.wK)(_, 0.6)) && void 0 !== s ? s : void 0 },
        children: [
            (0, E.jsx)(M.RoleCircle, {
                className: O.roleCircle,
                color: _
            }),
            (0, E.jsx)('div', {
                className: O.roleName,
                children: a.name
            })
        ]
    });
}
