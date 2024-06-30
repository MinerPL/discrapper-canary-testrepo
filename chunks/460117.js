t.d(n, {
    Z: function () {
        return c;
    }
});
var s = t(735250);
t(470079);
var o = t(481060), i = t(596454), l = t(907040), a = t(273039), r = t(401227), d = t(185923);
function c(e) {
    let {
            className: n,
            emojiClassName: t,
            emoji: c,
            setEmoji: u,
            channel: m
        } = e, N = e => (n, t) => {
            var s, o;
            null != n && (null == n.id ? u({ name: null !== (s = n.optionallyDiverseSequence) && void 0 !== s ? s : '' }) : u({
                id: n.id,
                name: null !== (o = n.originalName) && void 0 !== o ? o : n.name,
                animated: n.animated
            }), t && e());
        }, _ = null == c || null == c.name ? null : () => {
            var e;
            return (0, s.jsx)(i.Z, {
                className: t,
                animated: null !== (e = c.animated) && void 0 !== e && e,
                emojiId: c.id,
                emojiName: c.name
            });
        };
    return (0, s.jsx)(a.Z, {
        hasSetEmoji: null != c && null != c.name,
        onClick: () => {
            u(null);
        },
        children: (0, s.jsx)(o.Popout, {
            position: 'bottom',
            renderPopout: e => {
                let {closePopout: n} = e;
                return (0, s.jsx)(l.Z, {
                    closePopout: n,
                    onSelectEmoji: N(n),
                    pickerIntention: d.Hz.COMMUNITY_CONTENT,
                    channel: m
                });
            },
            children: (e, t) => {
                let {isShown: o} = t;
                return (0, s.jsx)(r.Z, {
                    ...e,
                    tabIndex: 0,
                    active: o,
                    className: n,
                    renderButtonContents: _
                });
            }
        })
    });
}
