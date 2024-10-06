n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(318374),
    s = n(522289),
    o = n(565138),
    l = n(697927),
    u = n(200634),
    c = n(708108),
    d = n(146078),
    _ = n(228168),
    E = n(182294),
    f = n(352235);
function h(e) {
    let { user: t, onOpenProfile: n } = e,
        { mutualFriends: h } = (0, l.Z)(t.id),
        { mutualGuilds: p } = (0, u.Z)(t.id),
        I = null != h && h.length > 0,
        m = null != p && p.length > 0,
        T = I && m ? 'text-xs/normal' : 'text-sm/normal';
    return I || m
        ? (0, r.jsxs)('div', {
              className: f.mutuals,
              children: [
                  I
                      ? (0, r.jsxs)(i.Clickable, {
                            className: f.section,
                            onClick: () => (null == n ? void 0 : n(_.oh.MUTUAL_FRIENDS)),
                            children: [
                                (0, r.jsx)(a.Z, {
                                    maxUsers: 3,
                                    users: h.map((e) => {
                                        let { user: t } = e;
                                        return t;
                                    }),
                                    size: E.EF.SIZE_16,
                                    hideOverflowCount: !0,
                                    disableUsernameTooltip: !0
                                }),
                                (0, r.jsx)(i.Text, {
                                    className: f.text,
                                    variant: T,
                                    color: 'interactive-normal',
                                    children: (0, c.Z)(h.length)
                                })
                            ]
                        })
                      : null,
                  I && m
                      ? (0, r.jsx)('div', {
                            'aria-hidden': 'true',
                            className: f.spacer
                        })
                      : null,
                  m
                      ? (0, r.jsxs)(i.Clickable, {
                            className: f.section,
                            onClick: () => (null == n ? void 0 : n(_.oh.MUTUAL_GUILDS)),
                            children: [
                                !I &&
                                    (0, r.jsx)(s.Z, {
                                        maxGuilds: 3,
                                        guilds: p.map((e) => {
                                            let { guild: t } = e;
                                            return t;
                                        }),
                                        size: o.Z.Sizes.SMOL,
                                        hideOverflowCount: !0,
                                        disableGuildNameTooltip: !0
                                    }),
                                (0, r.jsx)(i.Text, {
                                    className: f.text,
                                    variant: T,
                                    color: 'interactive-normal',
                                    children: (0, d.Z)(p.length)
                                })
                            ]
                        })
                      : null
              ]
          })
        : null;
}
