n.d(t, {
    Z: function () {
        return b;
    },
    d: function () {
        return A;
    }
}),
    n(47120);
var a = n(735250),
    i = n(470079),
    l = n(120356),
    s = n.n(l),
    o = n(468194),
    r = n(442837),
    c = n(477690),
    d = n(481060),
    u = n(100527),
    g = n(906732),
    m = n(430824),
    v = n(594174),
    p = n(115130),
    I = n(566620),
    x = n(127255),
    f = n(880308),
    _ = n(451576),
    T = n(439934),
    h = n(701488),
    C = n(689938),
    E = n(876792);
let S = (0, o.Mg)(c.Z.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP),
    N = (0, o.Mg)(c.Z.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT),
    j = (0, o.Mg)(c.Z.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT);
function b(e) {
    let { channel: t, guildId: n, locationObject: l, onClose: o, onActivityItemVisible: c, scrollerRef: h } = e,
        [b, A] = i.useState(0),
        M = (0, x.Z)({
            guildId: n,
            enableFilter: !0
        }),
        y = (0, r.e7)([v.default], () => v.default.getCurrentUser()),
        Z = (0, r.e7)([m.Z], () => m.Z.getGuild(n), [n]),
        { analyticsLocations: D } = (0, g.ZP)(u.Z.ACTIVITY_DIRECTORY),
        L = (0, _.Z)(null == t ? void 0 : t.id),
        { isDeveloperActivityShelfEnabled: O, filter: B } = (0, r.cj)([p.Z], () => ({
            filter: p.Z.getFilter(),
            isDeveloperActivityShelfEnabled: p.Z.getIsEnabled()
        }));
    if (
        (i.useEffect(() => {
            let e = h.current;
            if (null != e)
                return (
                    e.addEventListener('scroll', t, !1),
                    () => {
                        if (null != e) e.removeEventListener('scroll', t, !1);
                    }
                );
            function t() {
                var e, t;
                A(null !== (t = null === (e = h.current) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0);
            }
        }, [h]),
        i.useEffect(() => {
            (L || null != n) &&
                (0, I.w1)({
                    guildId: n,
                    force: !0
                });
        }, [n, L]),
        (0, f.g)(),
        (null == Z && !L) || null == y)
    )
        return null;
    let R = M.length > 0;
    return (0, a.jsx)(g.Gt, {
        value: D,
        children: (0, a.jsxs)('div', {
            className: E.scrollContainer,
            children: [
                R
                    ? (0, a.jsx)('div', {
                          className: E.scrollBackgroundContainer,
                          style: { top: -b },
                          children: (0, a.jsx)('div', {
                              className: s()(E.scrollTierBackground),
                              style: {
                                  height: ((e) => {
                                      let t = 1 === e.length;
                                      return S + Math.ceil(e.length / 2) * (t ? j : N);
                                  })(M)
                              }
                          })
                      })
                    : null,
                (0, a.jsxs)(d.Scroller, {
                    ref: h,
                    className: E.scroller,
                    children: [
                        null,
                        R
                            ? (0, a.jsx)('div', {
                                  className: E.scrollSection,
                                  children: (0, a.jsx)('div', {
                                      className: s()(E.shelf),
                                      children: M.map((e) =>
                                          (0, a.jsx)(
                                              T.Z,
                                              {
                                                  large: 1 === M.length,
                                                  activityItem: e,
                                                  channel: t,
                                                  guildId: n,
                                                  locationObject: l,
                                                  onActivityItemVisible: c,
                                                  onActivityItemSelected: () => {
                                                      var t;
                                                      (t = e.application.id), o();
                                                  }
                                              },
                                              'activity-shelf-item-'.concat(e.application.id)
                                          )
                                      )
                                  })
                              })
                            : O && B.length > 0
                              ? (0, a.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    className: E.filterError,
                                    children: C.Z.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY_SHELF_FILTER_ERROR.format({ filter: B })
                                })
                              : (0, a.jsx)('div', {
                                    className: E.spinnerContainer,
                                    children: (0, a.jsx)(d.Spinner, {})
                                })
                    ]
                })
            ]
        })
    });
}
function A() {
    return (0, a.jsx)(d.Text, {
        variant: 'text-sm/normal',
        children: C.Z.Messages.EMBEDDED_ACTIVITIES_FEEDBACK_SURVEY.format({ surveyURL: h.Es })
    });
}
