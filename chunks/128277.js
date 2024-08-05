n.d(t, {
  Z: function() {
return D;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(481060),
  l = n(726542),
  u = n(503438),
  c = n(100527),
  d = n(906732),
  _ = n(952164),
  E = n(502762),
  f = n(652853),
  h = n(448980),
  p = n(194811),
  m = n(60241),
  I = n(373826),
  T = n(315324),
  g = n(582123),
  S = n(262210),
  A = n(666984),
  N = n(290274),
  v = n(228168),
  O = n(981631),
  R = n(689938),
  C = n(692184);
let {
  getAssetImage: y
} = n(81063);

function D(e) {
  let {
user: t,
currentUser: n,
activity: a,
guild: D,
channel: L,
className: b,
onAction: M,
onClose: P
  } = e, {
analyticsLocations: U
  } = (0, d.ZP)(c.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), {
profileType: w
  } = (0, f.z)(), x = {
[C.fullSize]: w === v.y0.FULL_SIZE
  };
  if (!(0, u.Z)(a))
return null;
  let G = () => {
  var e, n;
  let l = null !== (n = null === (e = a.state) || void 0 === e ? void 0 : e.split(';')) && void 0 !== n ? n : [];
  return 0 === l.length ? null : null == a.sync_id ? (0, r.jsx)(I.Z, {
    variant: 'text-xs/normal',
    text: l.join(', ')
  }) : (0, r.jsx)(I.Z, {
    variant: 'text-xs/normal',
    text: l.map((e, n) => (0, r.jsxs)(i.Fragment, {
      children: [
        (0, r.jsx)(o.Clickable, {
          className: s()(C.clickable, C.inline),
          onClick: () => (0, _.d$)(a, t.id, n),
          children: e
        }),
        n < l.length - 1 ? ', ' : ''
      ]
    }, n))
  });
},
k = () => {
  let {
    timestamps: e
  } = a;
  if (null == e)
    return null;
  let {
    start: t,
    end: n
  } = e;
  return null == t || null == n ? null : (0, r.jsx)(S.Z, {
    start: t,
    end: n
  });
},
B = () => null == D || null == L ? null : (0, r.jsxs)(r.Fragment, {
  children: [
    (0, r.jsx)('div', {
      className: C.voiceChannelDivider
    }),
    (0, r.jsx)(T.Z, {
      user: t,
      guild: D,
      channel: L,
      onClose: P
    })
  ]
}),
F = () => t.id === n.id ? null : (0, r.jsx)('div', {
  className: s()(C.actions, x),
  children: (0, r.jsx)(A.Z, {
    user: t,
    activity: a,
    onClick: M
  })
});
  return (0, r.jsx)(d.Gt, {
value: U,
children: (0, r.jsx)(g.Z, {
  user: t,
  onClose: P,
  children: e => {
    var n, i;
    let {
      onAutoDismiss: o
    } = e;
    return (0, r.jsxs)(E.Z.Overlay, {
      className: s()(C.card, b),
      children: [
        (0, r.jsx)(p.Z, {
          text: R.Z.Messages.USER_ACTIVITY_LISTENING_TO,
          platform: l.Z.get(O.ABu.SPOTIFY),
          tags: (0, r.jsx)(N.Z, {
            display: 'live',
            user: t,
            activity: a,
            onRequestOpen: o
          })
        }),
        (0, r.jsxs)('div', {
          className: C.body,
          children: [
            (0, r.jsxs)('div', {
              className: s()(C.content, x),
              children: [
                (0, r.jsx)(m.Z, {
                  src: e => {
                    var t;
                    return y(a.application_id, null === (t = a.assets) || void 0 === t ? void 0 : t.large_image, e);
                  },
                  alt: null === (n = a.assets) || void 0 === n ? void 0 : n.large_text,
                  tooltipText: null === (i = a.assets) || void 0 === i ? void 0 : i.large_text,
                  onClick: () => (0, _.Z5)(a, t.id)
                }),
                (0, r.jsxs)('div', {
                  className: C.details,
                  children: [
                    (0, r.jsxs)('div', {
                      children: [
                        (0, r.jsx)(I.Z, {
                          variant: 'heading-sm/semibold',
                          text: a.details,
                          onClick: () => (0, _.aG)(a)
                        }),
                        G()
                      ]
                    }),
                    (0, r.jsx)(h.Z, {
                      user: t,
                      activity: a,
                      className: C.badges
                    }),
                    k()
                  ]
                }),
                w === v.y0.FULL_SIZE && F()
              ]
            }),
            B()
          ]
        }),
        w !== v.y0.FULL_SIZE && F()
      ]
    });
  }
})
  });
}