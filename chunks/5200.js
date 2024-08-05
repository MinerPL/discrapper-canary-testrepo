n.d(t, {
  Y: function() {
return x;
  }
}), n(47120);
var i, a, s = n(735250),
  l = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(338545),
  u = n(481060),
  d = n(792125),
  h = n(542094),
  p = n(182906),
  m = n(556505),
  _ = n(513202),
  f = n(981631),
  E = n(689938),
  g = n(478880);
let C = ['embedded_cover'],
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
imageBackground: N,
activityAction: v,
labelType: S
  } = (0, h.ZP)({
channel: n,
activityItem: i,
guildId: null !== (t = n.getGuildId()) && void 0 !== t ? t : void 0,
locationObject: {},
onActivityItemSelected: a,
embeddedActivitiesManager: _.Z,
assetNames: C
  }), [Z, A] = l.useState(!1), M = l.useCallback(() => {
A(!0);
  }, [A]), b = l.useCallback(() => {
A(!1);
  }, [A]), R = l.useMemo(() => (0, s.jsx)('div', {
className: g.overlayBadge,
children: (0, s.jsx)('div', {
  className: g.badgeContainer,
  children: (0, s.jsx)(m.Z, {
    name: i.application.name,
    labelType: S
  })
})
  }), [
i.application.name,
S
  ]), j = l.useMemo(() => {
switch (v) {
  case h.JS.JOIN:
    return (0, s.jsx)('div', {
      className: g.activityAction,
      children: (0, s.jsx)('div', {
        className: g.activityActionButton,
        children: (0, s.jsx)(u.Text, {
          variant: 'text-sm/medium',
          color: 'always-white',
          children: E.Z.Messages.JOIN
        })
      })
    });
  case h.JS.LEAVE:
    return (0, s.jsx)('div', {
      className: g.activityAction,
      children: (0, s.jsx)('div', {
        className: o()(g.activityActionButton, g.activityActionButtonDanger),
        children: (0, s.jsx)(u.Text, {
          variant: 'text-sm/medium',
          color: 'always-white',
          children: E.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE
        })
      })
    });
  case h.JS.START:
  default:
    return (0, s.jsx)(s.Fragment, {});
}
  }, [v]);
  return (0, s.jsx)(u.Button, {
onClick: T,
color: 'transparent',
look: u.Button.Looks.BLANK,
size: u.Button.Sizes.NONE,
onFocus: M,
onBlur: b,
onMouseEnter: M,
onMouseLeave: b,
innerClassName: g.activityItemButtonInnerClass,
children: (0, s.jsx)(u.Spring, {
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
    return (0, s.jsx)(c.animated.div, {
      className: o()((0, d.Q)(f.BRd.DARK), g.activityItem, x, {
        [g.activityItem_13_11]: 0 === r,
        [g.activityItem_16_9]: 1 === r
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
      children: (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)(p.Z, {
            imageBackground: N,
            applicationName: i.application.name,
            imageClassName: g.activitySuggestionImage,
            imageNotFoundClassName: g.brokenImageIconWrapper
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