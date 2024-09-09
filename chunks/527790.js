n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(47120);
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(876215),
    o = n(481060),
    l = n(100527),
    u = n(906732),
    c = n(379357),
    d = n(26033),
    _ = n(358696),
    E = n(91140),
    f = n(551228),
    h = n(278399),
    p = n(555672),
    I = n(335326),
    m = n(297781),
    T = n(797342),
    S = n(810568),
    g = n(168524),
    A = n(960870),
    N = n(139793),
    O = n(579264),
    R = n(502762),
    v = n(652853),
    C = n(194811),
    y = n(373826),
    L = n(582123),
    D = n(290274),
    b = n(228168),
    M = n(689938),
    P = n(139665);
function U(e) {
    let { user: t, entry: n, header: i, className: l, onClose: d } = e,
        { profileType: f } = (0, v.z)(),
        h = { [P.fullSize]: f === b.y0.FULL_SIZE },
        { largeImage: I } = (0, c.rv)({
            entry: n,
            showCoverImage: !1
        }),
        { appName: O } = (0, T.n)(n),
        C = (0, g.Z)({
            location: 'UserProfileRecentActivityCard',
            applicationId: n.extra.application_id,
            source: S.m1.UserProfile,
            sourceUserId: t.id,
            trackEntryPointImpression: !0
        }),
        { analyticsLocations: L } = (0, u.ZP)(),
        D = (0, A.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: L
        }),
        M = (0, N.Z)({
            userId: t.id,
            onAction: D
        }),
        U = () => (n.content_type === s.s.TOP_GAME ? p.Hs.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t))) : E.W.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t))));
    return null == C
        ? (0, r.jsxs)(R.Z.Overlay, {
              className: a()(P.card, l),
              ref: M,
              children: [
                  i,
                  (0, r.jsx)('div', {
                      className: P.body,
                      children: (0, r.jsxs)('div', {
                          className: a()(P.content, h),
                          children: [
                              (0, r.jsx)(_.E, {
                                  image: I,
                                  size: _.J.SIZE_60
                              }),
                              (0, r.jsxs)('div', {
                                  className: P.details,
                                  children: [
                                      (0, r.jsx)('div', {
                                          children: (0, r.jsx)(y.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: O
                                          })
                                      }),
                                      (0, r.jsx)(m.Gk, {
                                          location: m.Gt.USER_PROFILE,
                                          className: P.badges,
                                          children: U()
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          })
        : (0, r.jsxs)(R.Z.Overlay, {
              className: a()(P.card, l),
              ref: M,
              children: [
                  i,
                  (0, r.jsx)('div', {
                      className: P.body,
                      children: (0, r.jsxs)('div', {
                          className: a()(P.content, h),
                          children: [
                              (0, r.jsx)(_.E, {
                                  image: I,
                                  onClick: () => {
                                      D({ action: 'PRESS_GAME_IMAGE' }), C();
                                  },
                                  size: _.J.SIZE_60
                              }),
                              (0, r.jsxs)('div', {
                                  className: P.details,
                                  children: [
                                      (0, r.jsx)(o.Clickable, {
                                          className: P.clickable,
                                          onClick: () => {
                                              D({ action: 'OPEN_GAME_PROFILE' }), C(), null == d || d();
                                          },
                                          children: (0, r.jsx)(y.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: O
                                          })
                                      }),
                                      (0, r.jsx)(m.Gk, {
                                          location: m.Gt.USER_PROFILE,
                                          className: P.badges,
                                          children: U()
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
}
function w(e) {
    let { user: t, entry: n, header: i, className: s } = e,
        { profileType: o } = (0, v.z)(),
        l = { [P.fullSize]: o === b.y0.FULL_SIZE },
        { largeImage: d } = (0, c.rv)({ entry: n }),
        { analyticsLocations: E } = (0, u.ZP)(),
        f = (0, A.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: E
        }),
        h = (0, N.Z)({
            userId: t.id,
            onAction: f
        });
    return (0, r.jsxs)(R.Z.Overlay, {
        className: a()(P.card, s),
        ref: h,
        children: [
            i,
            (0, r.jsx)('div', {
                className: P.body,
                children: (0, r.jsxs)('div', {
                    className: a()(P.content, l),
                    children: [
                        (0, r.jsx)(_.E, {
                            aspectRatio: 'crunchyroll',
                            image: d,
                            size: _.J.SIZE_60
                        }),
                        (0, r.jsxs)('div', {
                            className: P.details,
                            children: [
                                (0, r.jsxs)('div', {
                                    children: [
                                        (0, r.jsx)(y.Z, {
                                            variant: 'heading-sm/semibold',
                                            text: n.extra.media_title
                                        }),
                                        (0, r.jsx)(y.Z, {
                                            variant: 'text-xs/normal',
                                            text: n.extra.media_subtitle
                                        })
                                    ]
                                }),
                                (0, r.jsx)(m.Gk, {
                                    location: m.Gt.USER_PROFILE,
                                    className: P.badges,
                                    children: I.t.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function x(e) {
    var t, n, i;
    let { user: s, entry: o, header: l, className: d } = e,
        { profileType: E } = (0, v.z)(),
        h = { [P.fullSize]: E === b.y0.FULL_SIZE },
        { largeImage: p } = (0, c.rv)({ entry: o }),
        { analyticsLocations: I } = (0, u.ZP)(),
        T = (0, A.Z)({
            display: 'recent',
            user: s,
            entry: o,
            analyticsLocations: I
        }),
        S = (0, N.Z)({
            userId: s.id,
            onAction: T
        }),
        g = null === (t = o.extra.entries[0]) || void 0 === t ? void 0 : t.media;
    if (null == g) return null;
    let O = null !== (i = null === (n = g.artists[0]) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : g.title;
    return (0, r.jsxs)(R.Z.Overlay, {
        className: a()(P.card, d),
        ref: S,
        children: [
            l,
            (0, r.jsx)('div', {
                className: P.body,
                children: (0, r.jsxs)('div', {
                    className: a()(P.content, h),
                    children: [
                        (0, r.jsx)(_.E, {
                            image: p,
                            size: _.J.SIZE_60
                        }),
                        (0, r.jsxs)('div', {
                            className: P.details,
                            children: [
                                (0, r.jsx)('div', {
                                    children: (0, r.jsx)(y.Z, {
                                        variant: 'heading-sm/semibold',
                                        text: O
                                    })
                                }),
                                (0, r.jsx)(m.Gk, {
                                    location: m.Gt.USER_PROFILE,
                                    className: P.badges,
                                    children: f.te.map((e, t) => (0, r.jsx)(e, { entry: o }, 'entry-'.concat(t)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function G(e) {
    let { user: t, entry: n, header: i, className: s } = e,
        { profileType: o } = (0, v.z)(),
        l = { [P.fullSize]: o === b.y0.FULL_SIZE },
        { largeImage: d } = (0, c.rv)({ entry: n }),
        { analyticsLocations: E } = (0, u.ZP)(),
        f = (0, A.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: E
        }),
        p = (0, N.Z)({
            userId: t.id,
            onAction: f
        });
    return (0, r.jsxs)(R.Z.Overlay, {
        className: a()(P.card, s),
        ref: p,
        children: [
            i,
            (0, r.jsx)('div', {
                className: P.body,
                children: (0, r.jsxs)('div', {
                    className: a()(P.content, l),
                    children: [
                        (0, r.jsx)(_.E, {
                            image: d,
                            size: _.J.SIZE_60
                        }),
                        (0, r.jsxs)('div', {
                            className: P.details,
                            children: [
                                (0, r.jsxs)('div', {
                                    children: [
                                        (0, r.jsx)(y.Z, {
                                            variant: 'heading-sm/semibold',
                                            text: n.extra.media.title
                                        }),
                                        (0, r.jsx)(y.Z, {
                                            variant: 'text-xs/normal',
                                            text: n.extra.artist.name
                                        })
                                    ]
                                }),
                                (0, r.jsx)(m.Gk, {
                                    location: m.Gt.USER_PROFILE,
                                    className: P.badges,
                                    children: h.Ho.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function k(e) {
    let { user: t, entry: n, className: i, onClose: a, hideContextMenu: s = !1 } = e,
        { analyticsLocations: o } = (0, u.ZP)(l.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { profileType: c } = (0, v.z)();
    return (0, O.Z)(n)
        ? (0, r.jsx)(u.Gt, {
              value: o,
              children: (0, r.jsx)(L.Z, {
                  user: t,
                  onClose: a,
                  children: (e) => {
                      let { onAutoDismiss: o } = e,
                          l = (e) =>
                              (0, r.jsx)(C.Z, {
                                  text: c === b.y0.FULL_SIZE ? null : e,
                                  tags: s
                                      ? null
                                      : (0, r.jsx)(D.Z, {
                                            display: 'recent',
                                            entry: n,
                                            user: t,
                                            onClose: a,
                                            onRequestOpen: o
                                        })
                              });
                      return (0, d.dX)(n)
                          ? (0, r.jsx)(U, {
                                header: l(M.Z.Messages.USER_ACTIVITY_RECENTLY_PLAYED),
                                user: t,
                                entry: n,
                                className: i
                            })
                          : (0, d.y0)(n)
                            ? (0, r.jsx)(w, {
                                  header: l(M.Z.Messages.USER_ACTIVITY_RECENTLY_WATCHED),
                                  user: t,
                                  entry: n,
                                  className: i
                              })
                            : (0, d.dU)(n)
                              ? (0, r.jsx)(x, {
                                    header: l(M.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO),
                                    user: t,
                                    entry: n,
                                    className: i
                                })
                              : (0, d.KF)(n)
                                ? (0, r.jsx)(G, {
                                      header: l(M.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO),
                                      user: t,
                                      entry: n,
                                      className: i
                                  })
                                : null;
                  }
              })
          })
        : null;
}
