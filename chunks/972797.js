t.d(A, {
  Z: function() {
return c;
  }
}), t(47120);
var a = t(735250),
  n = t(470079),
  r = t(120356),
  s = t.n(r),
  o = t(481060),
  l = t(153124),
  i = t(689938),
  d = t(406732);

function c(e) {
  let {
disabled: A = !1,
disabledTooltip: t,
published: r,
submitting: c = !1,
onClick: u
  } = e, C = (0, l.Dt)(), [g, T] = n.useState(r);
  return n.useEffect(() => {
T(e => e || r);
  }, [r]), (0, a.jsxs)('div', {
className: s()({
  [d.publishable]: !A && !r,
  [d.wasEverPublished]: g
}, d.container),
children: [
  (0, a.jsxs)('div', {
    className: d.explanationColumn,
    children: [
      (0, a.jsx)(o.Heading, {
        variant: 'text-sm/semibold',
        color: 'header-primary',
        children: r ? i.Z.Messages.GUILD_PRODUCT_UNPUBLISH_TITLE : i.Z.Messages.GUILD_PRODUCT_PUBLISH_TITLE
      }),
      (0, a.jsx)(o.Text, {
        id: C,
        variant: 'text-sm/normal',
        color: 'text-normal',
        children: r ? i.Z.Messages.GUILD_PRODUCT_UNPUBLISH_DESCRIPTION : i.Z.Messages.GUILD_PRODUCT_PUBLISH_DESCRIPTION
      })
    ]
  }),
  (0, a.jsx)(o.Tooltip, {
    text: A ? t : void 0,
    children: e => (0, a.jsxs)(o.Button, {
      ...e,
      className: s()(d.button, {
        [d.wasEverPublished]: g,
        [d.publishButton]: !r,
        [d.disabledPublishButton]: A
      }),
      innerClassName: d.buttonContents,
      color: r ? o.Button.Colors.RED : o.Button.Colors.CUSTOM,
      'aria-describedby': C,
      'aria-disabled': A,
      grow: !1,
      onClick: A ? void 0 : u,
      submitting: c,
      children: [
        r ? i.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_UNPUBLISH_BUTTON : i.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_PUBLISH_BUTTON,
        r ? (0, a.jsx)(o.EyeSlashIcon, {
          size: 'md',
          className: d.buttonIcon,
          color: 'currentColor'
        }) : (0, a.jsx)(o.SparklesIcon, {
          size: 'xs',
          color: 'currentColor',
          className: d.buttonIcon
        })
      ]
    })
  })
]
  });
}