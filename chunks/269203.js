n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(735250);
n(470079);
var a = n(442837), l = n(481060), s = n(805519), r = n(246364), o = n(705563), c = n(594174), u = n(346656), d = n(967128), h = n(689938), p = n(573475);
function m(e) {
    var t;
    let {
            joinRequest: n,
            guild: s
        } = e, o = (0, a.e7)([c.default], () => c.default.getUser(n.userId));
    return (0, i.jsxs)('div', {
        className: p.summaryContainer,
        children: [
            (0, i.jsxs)('div', {
                className: p.summaryHeader,
                children: [
                    null != s && (0, i.jsxs)('div', {
                        className: p.summaryHeaderClanInfo,
                        children: [
                            (0, i.jsx)(u.Z, {
                                guild: s,
                                active: !0,
                                size: u.Z.Sizes.SMOL,
                                className: p.guildIcon
                            }),
                            (0, i.jsx)(l.Heading, {
                                variant: 'heading-sm/semibold',
                                color: 'header-primary',
                                children: s.name
                            })
                        ]
                    }),
                    null != o && (0, i.jsx)(l.Heading, {
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: h.Z.Messages.MEMBER_VERIFICATION_USERS_APPLICATION.format({ username: o.globalName })
                    })
                ]
            }),
            null === (t = n.formResponses) || void 0 === t ? void 0 : t.filter(e => e.field_type !== r.QJ.TERMS).map(e => {
                let t = e.field_type === r.QJ.MULTIPLE_CHOICE && null != e.response ? e.choices[e.response] : e.response;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)('hr', { className: p.summarySeparator }),
                        (0, i.jsxs)('div', {
                            className: p.formResponseContainer,
                            children: [
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'text-muted',
                                    children: e.label
                                }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-md/medium',
                                    color: 'text-primary',
                                    children: t
                                })
                            ]
                        })
                    ]
                });
            })
        ]
    });
}
function _(e) {
    let {channel: t} = e, {
            loading: n,
            joinRequest: a,
            joinRequestGuild: r
        } = (0, s.Z)(t.id);
    return (0, i.jsx)(d.ZP, {
        channelId: t.id,
        className: p.container,
        children: (0, i.jsx)(d.jz, {
            children: null != a && null != a.formResponses ? (0, i.jsxs)('div', {
                className: p.formContainer,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(m, {
                            guild: r,
                            joinRequest: a
                        })
                    }),
                    (0, i.jsx)(o.Z, {
                        channelId: t.id,
                        showProfile: !0
                    })
                ]
            }) : n ? (0, i.jsx)(l.Spinner, {}) : null
        })
    });
}
