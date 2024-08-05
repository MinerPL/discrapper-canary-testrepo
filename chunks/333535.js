n.d(t, {
  Z: function() {
return E;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(852229),
  l = n(399606),
  r = n(481060),
  o = n(367907),
  c = n(592125),
  u = n(934415),
  d = n(63063),
  h = n(158222),
  p = n(410992),
  m = n(981631),
  _ = n(689938),
  f = n(13367);

function E(e) {
  let {
threadId: t
  } = e, n = (0, l.e7)([c.Z], () => c.Z.getChannel(t)), E = (0, l.e7)([c.Z], () => c.Z.getChannel(null == n ? void 0 : n.parent_id)), g = a.useCallback(() => {
null != n && null != E && ((0, o.yw)(m.rMx.MEDIA_POST_SHARE_PROMPT_CLICKED, {
  media_post_id: n.id
}), (0, s.J)((0, u.EO)(n, E)));
  }, [
n,
E
  ]);
  return (0, i.jsxs)('div', {
className: f.sharePromptContainer,
children: [
  (0, i.jsx)(p.Z, {}),
  (0, i.jsxs)('div', {
    className: f.sharePromptContent,
    children: [
      (0, i.jsx)(r.Text, {
        variant: 'text-md/semibold',
        color: 'header-primary',
        children: _.Z.Messages.MEDIA_POST_SHARE_PROMPT_TITLE
      }),
      (0, i.jsx)(r.Text, {
        variant: 'text-sm/medium',
        color: 'text-normal',
        children: _.Z.Messages.MEDIA_POST_SHARE_PROMPT_SUBTITLE.format({
          helpArticleUrl: d.Z.getCreatorSupportArticleURL(m.BhN.MEDIA_CHANNEL)
        })
      }),
      (0, i.jsx)(r.Spacer, {
        size: 4
      }),
      (0, i.jsxs)(r.Button, {
        className: f.sharePromptCta,
        innerClassName: f.ctaContent,
        onClick: g,
        children: [
          (0, i.jsx)(r.LinkIcon, {
            color: 'currentColor',
            size: 'xs'
          }),
          (0, i.jsx)(r.Text, {
            variant: 'text-sm/medium',
            color: 'always-white',
            children: _.Z.Messages.MEDIA_POST_SHARE_PROMPT_CTA
          })
        ]
      })
    ]
  }),
  (0, i.jsx)(r.Clickable, {
    className: f.closeButton,
    onClick: () => {
      (0, h.fn)(t);
    },
    'aria-label': _.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
    children: (0, i.jsx)(r.CloseSmallIcon, {
      color: 'currentColor',
      size: 'xs'
    })
  })
]
  });
}