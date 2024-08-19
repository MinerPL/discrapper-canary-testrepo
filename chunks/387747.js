t.d(s, {
    Z: function () {
        return C;
    }
});
var n = t(735250);
t(470079);
var a = t(410575),
    i = t(100527),
    r = t(89057),
    o = t(347475),
    l = t(471985),
    c = t(625252),
    d = t(97926),
    _ = t(921801),
    E = t(541540),
    u = t(206339),
    I = t(726985),
    T = t(981631),
    S = t(46140),
    N = t(600777);
function C() {
    let e = (0, l.Z)(S.dr.USER_SETTINGS_GIFT_INVENTORY);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(_.F, {
                setting: I.s6.GIFT_NITRO,
                children: (0, n.jsx)(o.Z, {
                    location: i.Z.USER_SETTINGS_GIFT_INVENTORY,
                    className: N.giftNitro,
                    imageClassName: N.giftNitroImage,
                    textContainerOverrideStyles: {
                        padding: '32px',
                        width: '360px'
                    },
                    analyticsLocation: {
                        page: T.ZY5.GIFTING_SETTINGS,
                        section: T.jXE.GIFT_BANNER
                    }
                })
            }),
            (0, n.jsx)(_.F, {
                setting: I.s6.GIFT_CODE_REDEMPTION,
                children: (0, n.jsx)(a.Z, {
                    section: T.jXE.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    children: (0, n.jsx)(E.Z, {})
                })
            }),
            (0, n.jsx)(_.F, {
                setting: I.s6.GIFT_INVENTORY_QUESTS,
                children: (0, n.jsx)(a.Z, {
                    section: T.jXE.QUESTS,
                    children: e ? (0, n.jsx)(c.Z, {}) : (0, n.jsx)(d.Z, {})
                })
            }),
            (0, n.jsx)(_.F, {
                setting: I.s6.GIFT_INVENTORY_LIST,
                children: (0, n.jsx)(a.Z, {
                    section: T.jXE.LIBRARY_INVENTORY_GIFTS_LIST,
                    children: (0, n.jsx)(u.Z, {})
                })
            }),
            (0, n.jsx)(_.F, {
                setting: I.s6.GIFT_BLOCKED_PAYMENTS,
                children: (0, n.jsx)(r.c8, {})
            })
        ]
    });
}
