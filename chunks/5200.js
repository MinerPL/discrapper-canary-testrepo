n.d(t, {
  Y: function() {
return x;
  }
}), n(47120);
var i, a, l = n(735250),
  s = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(338545),
  d = n(481060),
  u = n(792125),
  h = n(542094),
  p = n(182906),
  m = n(556505),
  _ = n(513202),
  f = n(981631),
  E = n(689938),
  C = n(478880);
let g = ['embedded_cover'],
  I = {
tension: 800,
friction: 24
  };

function x(e) {
  var t;
  let {
channel: n,
activityItem: i,
onClick: a,
aspectRatio: r = 0,
animatedDivClass: x
  } = e, {
onActivityItemSelected: T,
imageBackground: v,
activityAction: N,
labelType: S
  } = (0, h.ZP)({
channel: n,
activityItem: i,
guildId: null !== (t = n.getGuildId()) && void 0 !== t ? t : void 0,
locationObject: {},
onActivityItemSelected: a,
embeddedActivitiesManager: _.Z,
assetNames: g
  }), [Z, A] = s.useState(!1), M = s.useCallback(() => {
A(!0);
  }, [A]), b = s.useCallback(() => {
A(!1);
  }, [A]), R = s.useMemo(() => (0, l.jsx)('div', {
className: C.overlayBadge,
children: (0, l.jsx)('div', {
  className: C.badgeContainer,
  children: (0, l.jsx)(m.Z, {
    name: i.application.name,
    labelType: S
  })
})
  }), [
i.application.name,
S
  ]), j = s.useMemo(() => {
switch (N) {
  case h.JS.JOIN:
    return (0, l.jsx)('div', {
      className: C.activityAction,
      children: (0, l.jsx)('div', {
        className: C.activityActionButton,
        children: (0, l.jsx)(d.Text, {
          variant: 'text-sm/medium',
          color: 'always-white',
          children: E.Z.Messages.JOIN
        })
      })
    });
  case h.JS.LEAVE:
    return (0, l.jsx)('div', {
      className: C.activityAction,
      children: (0, l.jsx)('div', {
        className: o()(C.activityActionButton, C.activityActionButtonDanger),
        children: (0, l.jsx)(d.Text, {
          variant: 'text-sm/medium',
          color: 'always-white',
          children: E.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE
        })
      })
    });
  case h.JS.START:
  default:
    return (0, l.jsx)(l.Fragment, {});
}
  }, [N]);
  return (0, l.jsx)(d.Button, {
onClick: T,
color: 'transparent',
look: d.Button.Looks.BLANK,
size: d.Button.Sizes.NONE,
onFocus: M,
onBlur: b,
onMouseEnter: M,
onMouseLeave: b,
innerClassName: C.activityItemButtonInnerClass,
children: (0, l.jsx)(c.Spring, {
  config: I,
  from: {
    value: 0
  },
  to: {
    value: Z ? 1 : 0
  },
  children: e => {
    let {
      value: t
    } = e;
    return (0, l.jsx)(c.animated.div, {
      className: o()((0, u.Q)(f.BRd.DARK), C.activityItem, x, {
        [C.activityItem_13_11]: 0 === r,
        [C.activityItem_16_9]: 1 === r
      }),
      style: {
        transform: t.to([
          0,
          1
        ], [
          1,
          1.05
        ]).to(e => 'scale('.concat(e, ')'))
      },
      children: (0, l.jsxs)(l.Fragment, {
        children: [
          (0, l.jsx)(p.Z, {
            imageBackground: v,
            applicationName: i.application.name,
            imageClassName: C.activitySuggestionImage,
            imageNotFoundClassName: C.brokenImageIconWrapper
          }),
          R,
          j
        ]
      })
    });
  }
})
  });
}
(a = i || (i = {}))[a.THIRTEEN_BY_ELEVEN = 0] = 'THIRTEEN_BY_ELEVEN', a[a.SIXTEEN_BY_NINE = 1] = 'SIXTEEN_BY_NINE', x.AspectRatio = i;