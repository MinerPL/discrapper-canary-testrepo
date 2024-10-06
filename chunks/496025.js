n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    o = n(602715),
    s = n(442837),
    c = n(481060),
    d = n(43267),
    u = n(933557),
    h = n(258732),
    m = n(592125),
    x = n(699516),
    f = n(594174),
    p = n(55589),
    g = n(630388),
    b = n(98357),
    v = n(432877),
    _ = n(246992),
    j = n(128374),
    C = n(219299);
function T() {
    var e;
    let t = (0, s.Wu)([p.Z], () => p.Z.getSortedChannels()[1]),
        [n, l] = a.useState(t.length > 0 ? t[0].channelId : void 0),
        { selectedChannel: i, options: b } = (0, s.cj)([m.Z, f.default, x.Z], () => ({
            selectedChannel: m.Z.getChannel(n),
            options: t.map((e) => {
                let t = m.Z.getChannel(e.channelId);
                return {
                    value: e.channelId,
                    label: null != t ? (0, u.F6)(t, f.default, x.Z) : e.channelId
                };
            })
        })),
        v = a.useCallback(() => {
            var e;
            if (null == i || !i.isPrivate()) return;
            let t = (0, g.x9)(null !== (e = i.recipientFlags) && void 0 !== e ? e : 0, o.V.DISMISSED_IN_GAME_MESSAGE_NUX);
            h.Z.updatePrivateChannelRecipientFlags(i.id, t);
        }, [i]),
        C = null != i && !!i.isPrivate() && (0, g.yE)(null !== (e = i.recipientFlags) && void 0 !== e ? e : 0, o.V.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-md/semibold',
                children: 'In-Game NUX Message for DMs'
            }),
            (0, r.jsxs)('div', {
                className: j.inGameNuxContainer,
                children: [
                    (0, r.jsx)(c.SearchableSelect, {
                        wrapperClassName: j.search,
                        options: b,
                        placeholder: 'Select DM',
                        value: n,
                        onChange: l,
                        renderOptionPrefix: (e) => {
                            if (null == e) return null;
                            let t = m.Z.getChannel(e.value);
                            return null == t
                                ? null
                                : (0, r.jsx)(c.Avatar, {
                                      src: (0, d.x)(t),
                                      'aria-hidden': !0,
                                      size: c.AvatarSizes.SIZE_16
                                  });
                        },
                        popoutLayerContext: _.O$
                    }),
                    (0, r.jsx)(c.Button, {
                        size: c.Button.Sizes.SMALL,
                        onClick: v,
                        disabled: null == n,
                        children: C ? 'Clear NUX Flag' : 'Set NUX Flag'
                    })
                ]
            })
        ]
    });
}
function S() {
    let e = v.ZP.allByCategory(v.zU.MESSAGING).map((e) => {
        let [t, n, { label: a }] = e;
        return (0, r.jsx)(
            c.FormSwitch,
            {
                value: n,
                onChange: (e) => (0, b.Z)(t, e),
                hideBorder: !0,
                className: j.switch,
                children: a
            },
            t
        );
    });
    return (0, r.jsxs)('div', {
        className: i()(C.panel, j.panel),
        children: [e, (0, r.jsx)('div', { className: j.divider }), (0, r.jsx)(T, {})]
    });
}
