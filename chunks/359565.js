n.d(t, {
  q: function() {
return f;
  },
  s: function() {
return _;
  }
});
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(481060),
  o = n(367907),
  c = n(626135),
  d = n(346479),
  u = n(665906),
  h = n(981631),
  p = n(689938),
  m = n(585431);

function _(e) {
  let {
channel: t,
narrow: n
  } = e, l = (0, u.tc)(t);
  return a.useEffect(() => {
c.default.track(h.rMx.CHANNEL_BANNER_VIEWED, {
  ...(0, o.hH)(t.getGuildId()),
  ...(0, o.v_)(t),
  banner_type: 'thread'
});
  }, [t]), (0, i.jsxs)('div', {
className: s()(m.chatHeaderBar, {
  [m.narrow]: n
}),
children: [
  (0, i.jsx)(r.Text, {
    className: m.chatHeaderBarText,
    variant: 'text-sm/normal',
    color: 'header-secondary',
    children: t.isForumPost() ? p.Z.Messages.FORUM_POST_HEADER_NOTICE_LOCKED : p.Z.Messages.THREAD_HEADER_NOTICE_LOCKED
  }),
  l ? (0, i.jsx)(r.Button, {
    size: n ? r.Button.Sizes.SMALL : r.Button.Sizes.TINY,
    className: m.chatHeaderBarButton,
    color: r.Button.Colors.PRIMARY,
    onClick: () => {
      c.default.track(h.rMx.CHANNEL_BANNER_CTA_CLICKED, {
        ...(0, o.hH)(t.getGuildId()),
        ...(0, o.v_)(t),
        banner_type: 'thread',
        cta_type: 'unarchive'
      }), d.Z.unarchiveThread(t, !1);
    },
    children: p.Z.Messages.UNARCHIVE
  }) : null
]
  });
}

function f(e) {
  let {
channel: t,
narrow: n
  } = e, l = (0, u.Xb)(t);
  return a.useEffect(() => {
c.default.track(h.rMx.CHANNEL_BANNER_VIEWED, {
  ...(0, o.hH)(t.getGuildId()),
  ...(0, o.v_)(t),
  banner_type: 'thread'
});
  }, [t]), (0, i.jsxs)('div', {
className: s()(m.chatHeaderBar, {
  [m.narrow]: n
}),
children: [
  (0, i.jsx)(r.Text, {
    className: m.chatHeaderBarText,
    variant: 'text-sm/normal',
    color: 'header-secondary',
    children: t.isForumPost() ? p.Z.Messages.FORUM_POST_HEADER_NOTICE_ACTIVE_LOCKED : p.Z.Messages.THREAD_HEADER_NOTICE_ACTIVE_LOCKED
  }),
  l ? (0, i.jsx)(r.Button, {
    size: n ? r.Button.Sizes.SMALL : r.Button.Sizes.TINY,
    className: m.chatHeaderBarButton,
    color: r.Button.Colors.PRIMARY,
    onClick: () => {
      c.default.track(h.rMx.CHANNEL_BANNER_CTA_CLICKED, {
        ...(0, o.hH)(t.getGuildId()),
        ...(0, o.v_)(t),
        banner_type: 'thread',
        cta_type: 'unlock'
      }), d.Z.unlockThread(t);
    },
    children: p.Z.Messages.UNLOCK
  }) : null
]
  });
}