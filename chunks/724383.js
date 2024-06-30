n.d(t, {
    A: function () {
        return h;
    }
});
var i = n(735250);
n(470079);
var s = n(252618), a = n(823379), r = n(976076), l = n(626426), o = n(916177), c = n(91630), d = n(754420), u = n(49898), _ = n(689938), E = n(738014);
function h() {
    let e = (0, r.Z)(), t = function (e) {
            switch (e) {
            case u.S.SERVERS:
                return (0, i.jsx)(c.U, {});
            case u.S.APPS:
                return (0, i.jsx)(l.z, {});
            case u.S.QUESTS:
                return (0, i.jsx)(o.K, {});
            case u.S.SHOP:
                return (0, i.jsx)(d.t, {});
            default:
                (0, a.vE)(e);
            }
        }(e);
    return (0, i.jsxs)('section', {
        className: E.container,
        children: [
            (0, i.jsx)(s.yY, {
                location: function (e) {
                    switch (e) {
                    case u.S.SERVERS:
                        return _.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TITLE;
                    case u.S.APPS:
                        return _.Z.Messages.GLOBAL_DISCOVERY_APPS_TITLE;
                    case u.S.QUESTS:
                        return _.Z.Messages.GLOBAL_DISCOVERY_QUESTS_TITLE;
                    case u.S.SHOP:
                        return _.Z.Messages.GLOBAL_DISCOVERY_SHOP_TITLE;
                    default:
                        (0, a.vE)(e);
                    }
                }(e)
            }),
            (0, i.jsx)('div', { className: E.dragRegion }),
            t
        ]
    });
}
