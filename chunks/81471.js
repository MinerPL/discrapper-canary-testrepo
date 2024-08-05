var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(442837),
  o = n(481060),
  c = n(905405),
  d = n(255269),
  u = n(937889),
  _ = n(267128),
  h = n(695346),
  E = n(496675),
  I = n(699516),
  m = n(68588),
  g = n(868807),
  p = n(981631),
  T = n(217702),
  S = n(689938),
  f = n(958633),
  C = n(153521);
let N = a.memo(function(e) {
  let {
channel: t
  } = e, {
loaded: n,
error: s,
message: N
  } = (0, g.a)(t), A = (0, c.p)(), v = (0, l.e7)([I.Z], () => null != N && I.Z.isBlockedForMessage(N), [N]), Z = (0, l.e7)([E.Z], () => E.Z.can(p.Plq.MANAGE_MESSAGES, t)), L = h.cC.useSetting(), {
content: O
  } = a.useMemo(() => (null == N ? void 0 : N.content) != null && '' !== N.content ? (0, u.ZP)(N, {
formatInline: !0,
noStyleAndInteraction: !0,
shouldFilterKeywords: A
  }) : {
content: null
  }, [
N,
A
  ]), R = null;
  if (s)
R = (0, i.jsx)(o.Text, {
  className: f.messageReplacement,
  variant: 'text-sm/normal',
  color: 'text-muted',
  children: S.Z.Messages.MESSAGE_REQUESTS_ERROR_LOADING_PREVIEW
});
  else if (n) {
if (null != N && v)
  R = (0, i.jsx)(o.Text, {
    className: f.messageReplacement,
    variant: 'text-sm/normal',
    color: 'text-muted',
    children: S.Z.Messages.MESSAGE_REQUESTS_BLOCKED_MESSAGE
  });
else if (null != N) {
  let {
    contentPlaceholder: e,
    renderedContent: t
  } = (0, _.f)(N, O, v, r()(f.messageContent, C.inlineFormat), {
    leadingIconClass: f.messageContentIcon,
    trailingIconClass: f.messageContentIcon,
    iconSize: T.WW
  });
  R = null != t ? (0, i.jsx)(o.Text, {
    variant: 'text-sm/normal',
    color: 'text-muted',
    className: f.messageContent,
    children: t
  }) : (0, i.jsx)(o.Text, {
    tag: 'span',
    variant: 'text-sm/normal',
    color: 'text-muted',
    className: f.messageReplacement,
    children: e
  });
} else
  R = (0, i.jsx)(o.Text, {
    className: f.messageReplacement,
    variant: 'text-sm/normal',
    color: 'text-muted',
    children: S.Z.Messages.MESSAGE_REQUESTS_DELETED_MESSAGE
  });
  } else
R = null;
  return (0, i.jsx)(m.a.Provider, {
value: (0, d.Z)(L, Z),
children: (0, i.jsx)(o.FocusBlock, {
  className: f.messageFocusBlock,
  children: R
})
  });
});
t.Z = N;