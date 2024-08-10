n.d(t, {
  ZP: function() {
return I;
  },
  fO: function() {
return E;
  },
  sF: function() {
return _;
  }
});
var i = n(735250),
  a = n(120356),
  s = n.n(a),
  r = n(330711),
  l = n(481060),
  o = n(377171),
  c = n(951394),
  u = n(364742),
  d = n(172648);

function _(e) {
  let {
label: t,
ariaLabel: n,
tooltipText: a,
tooltipColor: _,
icon: E,
iconProps: I,
onClick: m,
onTooltipShow: T,
onTooltipHide: h,
disabled: N,
dangerous: f,
separator: C,
sparkle: p,
showNewBadge: g,
buttonClassName: S,
children: A,
...R
  } = e, {
canShowReactionsOnMessageHover: x
  } = u.Z.useExperiment({
location: 'HoverBar'
  }, {
autoTrackExposure: !0
  });
  return (0, i.jsx)(l.Tooltip, {
text: null != a ? a : t,
color: null != _ ? _ : l.TooltipColors.PRIMARY,
'aria-label': t,
onTooltipShow: T,
onTooltipHide: h,
hideOnClick: !0,
tooltipClassName: d.tooltip,
children: e => {
  let {
    onMouseEnter: a,
    onMouseLeave: u,
    onClick: _
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsxs)(c.zx, {
        className: s()(S, {
          [d.hoverBarButton]: x
        }),
        onMouseEnter: a,
        onMouseLeave: u,
        onClick: e => {
          null == _ || _(), m(e);
        },
        'aria-label': null != n ? n : t,
        disabled: N,
        dangerous: f,
        ...R,
        children: [
          null != E ? (0, i.jsx)(E, {
            className: d.icon,
            color: 'currentColor',
            ...I
          }) : null,
          null != A ? (0, i.jsx)('div', {
            className: s()(d.icon, d.buttonContent),
            children: A
          }) : null,
          p && (0, i.jsx)(l.LottieSparkle, {}),
          g && (0, i.jsx)(l.TextBadge, {
            text: r.Z.Messages.NEW,
            color: o.Z.BG_BRAND,
            className: d.newBadge
          })
        ]
      }),
      C && (0, i.jsx)(c.Z0, {})
    ]
  });
}
  });
}

function E(e) {
  let {
className: t
  } = e;
  return (0, i.jsx)('div', {
className: s()(d.separator, t)
  });
}

function I(e) {
  let {
children: t,
...n
  } = e, {
canShowReactionsOnMessageHover: a
  } = u.Z.useExperiment({
location: 'HoverBar'
  }, {
autoTrackExposure: !0
  });
  return (0, i.jsx)(c.ZP, {
className: s()(n.className, d.popover, {
  [d.popoverReactionHoverBar]: a
}),
children: t
  });
}