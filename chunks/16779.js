n.d(t, {
    Rg: function () {
        return f;
    },
    Xh: function () {
        return E;
    },
    ho: function () {
        return _;
    }
}),
    n(627341);
var r = n(735250);
n(470079);
var i = n(278074),
    a = n(481060),
    s = n(841784),
    o = n(297781),
    l = n(371991),
    u = n(561308),
    c = n(232174),
    d = n(981631);
function _(e) {
    var t, n, u;
    let { activity: _ } = e,
        E = null !== (u = null === (t = _.timestamps) || void 0 === t ? void 0 : t.start) && void 0 !== u ? u : _.created_at;
    if (null == E || (0, c.Z)(_)) return null;
    let f = (0, i.EQ)(_)
        .when(s.Z, () => a.ActivitiesIcon)
        .with({ type: d.IIU.LISTENING }, () => a.RecordPlayerIcon)
        .with({ type: d.IIU.WATCHING }, () => a.TvIcon)
        .otherwise(() => a.GameControllerIcon);
    return (0, r.jsxs)(o.m7, {
        children: [
            (0, r.jsx)(f, {
                size: 'xxs',
                color: a.tokens.colors.TEXT_POSITIVE
            }),
            (0, r.jsx)(l.x3, {
                entry: {
                    start: E,
                    end: null === (n = _.timestamps) || void 0 === n ? void 0 : n.end
                },
                textColor: 'text-positive',
                bold: !0
            })
        ]
    });
}
function E(e) {
    let { activity: t } = e;
    if ((0, s.Z)(t) || null == t.party) return null;
    let n = (0, u.bT)(t.state, t.party);
    return null == n
        ? null
        : (0, r.jsx)(o.ej, {
              Icon: a.GroupIcon,
              text: n
          });
}
function f(e) {
    var t;
    let { activity: n } = e,
        i = (0, u.ap)(null === (t = n.assets) || void 0 === t ? void 0 : t.large_text);
    return null == i
        ? null
        : (0, r.jsx)(o.ej, {
              Icon: a.TopicsIcon,
              text: i
          });
}
