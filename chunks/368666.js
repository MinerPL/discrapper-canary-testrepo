n.d(t, {
    eE: function () {
        return E;
    },
    jZ: function () {
        return a;
    }
});
var i, a, s = n(735250);
n(470079);
var l = n(120356), r = n.n(l), o = n(692547), c = n(481060), d = n(689938), u = n(733564);
(i = a || (a = {})).RED = 'RED', i.GRAY = 'GRAY';
let _ = {
        LARGE: u.liveLarge,
        SMALL: u.liveSmall
    }, E = {
        [c.BadgeShapes.ROUND]: u.liveShapeRound,
        [c.BadgeShapes.ROUND_LEFT]: u.liveShapeRoundLeft,
        [c.BadgeShapes.ROUND_RIGHT]: u.liveShapeRoundRight,
        [c.BadgeShapes.SQUARE]: ''
    };
function m(e) {
    let {
        className: t,
        style: n,
        shape: i = c.BadgeShapes.ROUND,
        look: a = 'RED',
        size: l = _.LARGE
    } = e;
    return 'RED' === a ? (0, s.jsx)(c.TextBadge, {
        text: d.Z.Messages.LIVE,
        className: r()(t, u.live, l),
        color: o.Z.unsafe_rawColors.RED_400.css,
        shape: E[i],
        style: n
    }) : (0, s.jsx)(c.TextBadge, {
        text: d.Z.Messages.LIVE,
        className: r()(t, u.live, l, u.grey),
        disableColor: !0,
        shape: E[i],
        style: n
    });
}
m.Looks = a, m.Sizes = _, t.ZP = m;
