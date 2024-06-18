"use strict";
n.d(t, {
  Z: function() {
    return S
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(481060),
  l = n(872810),
  u = n(199902),
  _ = n(314897),
  d = n(167580),
  c = n(685203),
  E = n(112560),
  I = n(689938),
  T = n(520025);
let h = n(978538);

function S(e) {
  let {
    participant: t,
    width: n,
    noArt: r = !1,
    selected: S = !1
  } = e, f = n < 195, N = (0, o.e7)([u.Z, _.default], () => u.Z.getAllActiveStreams().some(e => {
    let {
      ownerId: t
    } = e;
    return t !== _.default.getId()
  }));
  return (0, i.jsx)("div", {
    className: s()(T.content, T.streamHidden, {
      [T.__invalid_small]: f
    }),
    children: (0, i.jsx)(E.Z, {
      className: T.streamHiddenEmptyState,
      artURL: h,
      noArt: r,
      selected: S,
      size: (0, E.L)(n),
      header: f ? null : I.Z.Messages.STREAM_HIDDEN,
      description: S ? null : (0, i.jsxs)("div", {
        className: s()(T.streamHiddenCTA, {
          [T.largePaddingTop]: !f
        }),
        children: [(0, i.jsx)(c.a, {
          isSmall: f,
          children: (0, i.jsx)(a.Text, {
            variant: f ? "text-sm/semibold" : "text-md/semibold",
            color: "none",
            children: n < 175 ? I.Z.Messages.WATCH : I.Z.Messages.WATCH_STREAM
          })
        }), N ? (0, i.jsx)(c.a, {
          className: T.addCTA,
          tooltip: I.Z.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
          onClick: e => {
            e.stopPropagation(), (0, l.rn)(t.stream, {
              forceMultiple: !0
            })
          },
          isSmall: f,
          children: (0, i.jsx)(d.Z, {
            className: T.addStreamIcon
          })
        }) : null]
      })
    })
  })
}