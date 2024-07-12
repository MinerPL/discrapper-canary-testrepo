var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
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
  C = n(958633),
  f = n(153521);
let N = s.memo(function(e) {
  let {
channel: t
  } = e, {
loaded: n,
error: a,
message: N
  } = (0, g.a)(t), A = (0, c.p)(), Z = (0, l.e7)([I.Z], () => null != N && I.Z.isBlockedForMessage(N), [N]), L = (0, l.e7)([E.Z], () => E.Z.can(p.Plq.MANAGE_MESSAGES, t)), v = h.cC.useSetting(), {
content: O
  } = s.useMemo(() => (null == N ? void 0 : N.content) != null && '' !== N.content ? (0, u.ZP)(N, {
formatInline: !0,
noStyleAndInteraction: !0,
shouldFilterKeywords: A
  }) : {
content: null
  }, [
N,
A
  ]), R = null;
  if (a)
R = (0, i.jsx)(o.Text, {
  className: C.messageReplacement,
  variant: 'text-sm/normal',
  color: 'text-muted',
  children: S.Z.Messages.MESSAGE_REQUESTS_ERROR_LOADING_PREVIEW
});
  else if (n) {
if (null != N && Z)
  R = (0, i.jsx)(o.Text, {
    className: C.messageReplacement,
    variant: 'text-sm/normal',
    color: 'text-muted',
    children: S.Z.Messages.MESSAGE_REQUESTS_BLOCKED_MESSAGE
  });
else if (null != N) {
  let {
    contentPlaceholder: e,
    renderedContent: t
  } = (0, _.f)(N, O, Z, r()(C.messageContent, f.inlineFormat), {
    leadingIconClass: C.messageContentIcon,
    trailingIconClass: C.messageContentIcon,
    iconSize: T.WW
  });
  R = null != t ? (0, i.jsx)(o.Text, {
    variant: 'text-sm/normal',
    color: 'text-muted',
    className: C.messageContent,
    children: t
  }) : (0, i.jsx)(o.Text, {
    tag: 'span',
    variant: 'text-sm/normal',
    color: 'text-muted',
    className: C.messageReplacement,
    children: e
  });
} else
  R = (0, i.jsx)(o.Text, {
    className: C.messageReplacement,
    variant: 'text-sm/normal',
    color: 'text-muted',
    children: S.Z.Messages.MESSAGE_REQUESTS_DELETED_MESSAGE
  });
  } else
R = null;
  return (0, i.jsx)(m.a.Provider, {
value: (0, d.Z)(v, L),
children: (0, i.jsx)(o.FocusBlock, {
  className: C.messageFocusBlock,
  children: R
})
  });
});
t.Z = N;