n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(39604),
  r = n(176127),
  l = n(689938),
  o = n(380806);

function c(e) {
  let {
onOpenClipsGallery: t,
clipIconRef: n,
lastClipsSession: c
  } = e;
  return (0, i.jsxs)(s.TooltipLayer, {
tooltipClassName: o.reminderTooltip,
tooltipContentClassName: o.tooltipContent,
targetElementRef: {
  current: n
},
position: 'bottom',
color: s.TooltipColors.PRIMARY,
children: [
  (0, i.jsx)(r.Z, {}),
  (0, i.jsx)(s.Heading, {
    variant: 'heading-md/extrabold',
    children: l.Z.Messages.CLIPS_YOU_HAVE_NEW_CLIPS.format({
      count: c.newClipIds.length
    })
  }),
  (0, i.jsxs)('div', {
    className: o.buttonContainer,
    children: [
      (0, i.jsx)(s.Button, {
        color: s.Button.Colors.TRANSPARENT,
        onClick: a.eL,
        children: l.Z.Messages.DISMISS
      }),
      (0, i.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        onClick: t,
        children: l.Z.Messages.CLIPS_REVIEW_NOW
      })
    ]
  })
]
  });
}