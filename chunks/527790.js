n.d(t, {
  Z: function() {
return w;
  }
}), n(47120);
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(876215),
  o = n(481060),
  l = n(100527),
  u = n(906732),
  c = n(26033),
  d = n(91140),
  _ = n(551228),
  E = n(278399),
  f = n(555672),
  h = n(335326),
  p = n(297781),
  m = n(797342),
  I = n(810568),
  T = n(168524),
  g = n(502762),
  S = n(652853),
  A = n(194811),
  N = n(60241),
  v = n(373826),
  O = n(582123),
  R = n(290274),
  C = n(228168),
  y = n(689938),
  D = n(692184);
let {
  getAssetImage: L
} = n(81063);

function b(e) {
  let {
user: t,
entry: n,
header: i,
className: l,
onClose: u
  } = e, {
profileType: c
  } = (0, S.z)(), _ = {
[D.fullSize]: c === C.y0.FULL_SIZE
  }, {
iconUrl: E,
appName: h
  } = (0, m.n)(n), A = (0, T.Z)({
location: 'UserProfileRecentActivityCard',
applicationId: n.extra.application_id,
source: I.m1.UserProfile,
sourceUserId: t.id,
trackEntryPointImpression: !0
  }), O = () => n.content_type === s.s.TOP_GAME ? f.Hs.map((e, t) => (0, r.jsx)(e, {
entry: n
  }, 'entry-'.concat(t))) : d.W.map((e, t) => (0, r.jsx)(e, {
entry: n
  }, 'entry-'.concat(t)));
  return null == A ? (0, r.jsxs)(g.Z.Overlay, {
className: a()(D.card, l),
children: [
  i,
  (0, r.jsx)('div', {
    className: D.body,
    children: (0, r.jsxs)('div', {
      className: a()(D.content, _),
      children: [
        (0, r.jsx)(N.Z, {
          src: E
        }),
        (0, r.jsxs)('div', {
          className: D.details,
          children: [
            (0, r.jsx)('div', {
              children: (0, r.jsx)(v.Z, {
                variant: 'heading-sm/semibold',
                text: h
              })
            }),
            (0, r.jsx)(p.Gk, {
              location: p.Gt.USER_PROFILE,
              className: D.badges,
              children: O()
            })
          ]
        })
      ]
    })
  })
]
  }) : (0, r.jsxs)(g.Z.Overlay, {
className: a()(D.card, l),
children: [
  i,
  (0, r.jsx)('div', {
    className: D.body,
    children: (0, r.jsxs)('div', {
      className: a()(D.content, _),
      children: [
        (0, r.jsx)(N.Z, {
          src: E
        }),
        (0, r.jsxs)('div', {
          className: D.details,
          children: [
            (0, r.jsx)(o.Clickable, {
              className: D.clickable,
              onClick: () => {
                A(), null == u || u();
              },
              children: (0, r.jsx)(v.Z, {
                variant: 'heading-sm/semibold',
                text: h
              })
            }),
            (0, r.jsx)(p.Gk, {
              location: p.Gt.USER_PROFILE,
              className: D.badges,
              children: O()
            })
          ]
        })
      ]
    })
  })
]
  });
}

function M(e) {
  let {
entry: t,
header: n,
className: i
  } = e, {
profileType: s
  } = (0, S.z)(), o = {
[D.fullSize]: s === C.y0.FULL_SIZE
  };
  return (0, r.jsxs)(g.Z.Overlay, {
className: a()(D.card, i),
children: [
  n,
  (0, r.jsx)('div', {
    className: D.body,
    children: (0, r.jsxs)('div', {
      className: a()(D.content, o),
      children: [
        (0, r.jsx)(N.Z, {
          src: e => L(t.extra.application_id, t.extra.media_assets_large_image, e)
        }),
        (0, r.jsxs)('div', {
          className: D.details,
          children: [
            (0, r.jsxs)('div', {
              children: [
                (0, r.jsx)(v.Z, {
                  variant: 'heading-sm/semibold',
                  text: t.extra.media_title
                }),
                (0, r.jsx)(v.Z, {
                  variant: 'text-xs/normal',
                  text: t.extra.media_subtitle
                })
              ]
            }),
            (0, r.jsx)(p.Gk, {
              location: p.Gt.USER_PROFILE,
              className: D.badges,
              children: h.td.map((e, n) => (0, r.jsx)(e, {
                entry: t
              }, 'entry-'.concat(n)))
            })
          ]
        })
      ]
    })
  })
]
  });
}

function P(e) {
  var t, n, i;
  let {
entry: s,
header: o,
className: l
  } = e, {
profileType: u
  } = (0, S.z)(), c = {
[D.fullSize]: u === C.y0.FULL_SIZE
  }, d = null === (t = s.extra.entries[0]) || void 0 === t ? void 0 : t.media;
  return null == d ? null : (0, r.jsxs)(g.Z.Overlay, {
className: a()(D.card, l),
children: [
  o,
  (0, r.jsx)('div', {
    className: D.body,
    children: (0, r.jsxs)('div', {
      className: a()(D.content, c),
      children: [
        (0, r.jsx)(N.Z, {
          src: d.image_url
        }),
        (0, r.jsxs)('div', {
          className: D.details,
          children: [
            (0, r.jsx)('div', {
              children: (0, r.jsx)(v.Z, {
                variant: 'heading-sm/semibold',
                text: null !== (i = null === (n = d.artists[0]) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : d.title
              })
            }),
            (0, r.jsx)(p.Gk, {
              location: p.Gt.USER_PROFILE,
              className: D.badges,
              children: _.te.map((e, t) => (0, r.jsx)(e, {
                entry: s
              }, 'entry-'.concat(t)))
            })
          ]
        })
      ]
    })
  })
]
  });
}

function U(e) {
  let {
entry: t,
header: n,
className: i
  } = e, {
profileType: s
  } = (0, S.z)(), o = {
[D.fullSize]: s === C.y0.FULL_SIZE
  };
  return (0, r.jsxs)(g.Z.Overlay, {
className: a()(D.card, i),
children: [
  n,
  (0, r.jsx)('div', {
    className: D.body,
    children: (0, r.jsxs)('div', {
      className: a()(D.content, o),
      children: [
        (0, r.jsx)(N.Z, {
          src: t.extra.media.image_url
        }),
        (0, r.jsxs)('div', {
          className: D.details,
          children: [
            (0, r.jsxs)('div', {
              children: [
                (0, r.jsx)(v.Z, {
                  variant: 'heading-sm/semibold',
                  text: t.extra.media.title
                }),
                (0, r.jsx)(v.Z, {
                  variant: 'text-xs/normal',
                  text: t.extra.artist.name
                })
              ]
            }),
            (0, r.jsx)(p.Gk, {
              location: p.Gt.USER_PROFILE,
              className: D.badges,
              children: E.Ho.map((e, n) => (0, r.jsx)(e, {
                entry: t
              }, 'entry-'.concat(n)))
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
  let {
user: t,
entry: n,
className: i,
onClose: a
  } = e, {
analyticsLocations: o
  } = (0, u.ZP)(l.Z.USER_PROFILE_RECENT_ACTIVITY_CARD), {
profileType: d
  } = (0, S.z)();
  return (0, r.jsx)(u.Gt, {
value: o,
children: (0, r.jsx)(O.Z, {
  user: t,
  onClose: a,
  children: e => {
    let {
      onAutoDismiss: a
    } = e, o = e => (0, r.jsx)(A.Z, {
      text: d === C.y0.FULL_SIZE ? null : e,
      tags: (0, r.jsx)(R.Z, {
        display: 'recent',
        entry: n,
        user: t,
        onRequestOpen: a
      })
    });
    return (0, c.dX)(n) ? (0, r.jsx)(b, {
      header: o(y.Z.Messages.USER_ACTIVITY_RECENTLY_PLAYED),
      user: t,
      entry: n,
      className: i
    }) : (0, c.r5)(n) ? (0, r.jsx)(M, {
      header: o(y.Z.Messages.USER_ACTIVITY_RECENTLY_WATCHED),
      user: t,
      entry: n,
      className: i
    }) : (0, c.kx)(n) ? (0, r.jsx)(P, {
      header: o(y.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO),
      user: t,
      entry: n,
      className: i
    }) : n.content_type === s.s.TOP_ARTIST ? (0, r.jsx)(U, {
      header: o(y.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO),
      user: t,
      entry: n,
      className: i
    }) : null;
  }
})
  });
}