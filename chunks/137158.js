t.d(n, {
  Z: function() {
return x;
  }
}), t(47120);
var a = t(735250),
  r = t(470079),
  i = t(120356),
  s = t.n(i),
  o = t(392711),
  l = t(225857),
  c = t(290843),
  d = t(692547),
  u = t(481060),
  m = t(689938),
  _ = t(672060);

function C(e) {
  let {
title: n,
children: t,
onEdit: r,
onRemove: i,
canRemove: o,
actionsLocation: l
  } = e;
  return (0, a.jsxs)('div', {
className: _.backgroundContainer,
children: [
  (0, a.jsxs)('div', {
    className: _.containerPadding,
    children: [
      (0, a.jsx)(u.FormTitle, {
        tag: 'h3',
        className: _.containerTitle,
        children: n
      }),
      t
    ]
  }),
  'footer' === l && (0, a.jsxs)(u.FormSection, {
    className: _.containerFooter,
    children: [
      (0, a.jsx)(u.Tooltip, {
        text: m.Z.Messages.CLAN_APPLICATION_CANT_REMOVE_FIELD,
        shouldShow: !o,
        children: e => (0, a.jsx)(u.Button, {
          ...e,
          className: s()(_.removeButton, _.button),
          size: u.Button.Sizes.SMALL,
          look: u.Button.Looks.BLANK,
          onClick: i,
          disabled: !o,
          children: m.Z.Messages.REMOVE
        })
      }),
      (0, a.jsx)(u.Button, {
        className: _.button,
        size: u.Button.Sizes.SMALL,
        color: u.Button.Colors.PRIMARY,
        onClick: r,
        children: m.Z.Messages.EDIT
      })
    ]
  })
]
  });
}
let f = 'FORM_FIELD';

function h(e) {
  let {
index: n,
field: t,
isDropHovered: i,
onDrop: m
  } = e, h = (0, o.debounce)(async (e, n, t) => {
await m(e, n, t);
  }), x = r.useRef(null), [, g] = (0, l.c)({
type: f,
item: {
  index: n,
  field: t
},
end: (e, n) => {
  null != e && !n.didDrop() && h(e.field, null, !0);
}
  }), [, p] = (0, c.L)({
accept: f,
hover: (e, t) => {
  var a;
  let {
    index: r
  } = e, i = null === (a = x.current) || void 0 === a ? void 0 : a.getBoundingClientRect(), s = t.getClientOffset();
  if (null == i || null == s)
    return;
  let o = (i.bottom - i.top) / 2,
    l = s.y - i.top;
  (!(r < n) || !(l < o)) && (!(r > n) || !(l < o)) && r !== n && h(e.field, n, !1);
},
drop: e => {
  h(e.field, n, !0);
}
  });
  return r.useLayoutEffect(() => (g(p(x)), () => {
p(null), g(null);
  }), [
g,
p
  ]), (0, a.jsxs)('div', {
ref: x,
'data-dnd-name': 'field-'.concat(n),
className: s()(_.dragContainer, {
  [_.dropHovered]: i
}),
children: [
  (0, a.jsx)('div', {
    className: _.dragIconContainer,
    children: (0, a.jsx)(u.DragIcon, {
      size: 'xs',
      className: _.dragIcon,
      color: d.Z.unsafe_rawColors.PRIMARY_400.css
    })
  }),
  (0, a.jsx)(C, {
    ...e
  })
]
  });
}

function x(e) {
  return (0, a.jsxs)('div', {
className: _.formFieldContainer,
children: [
  (0, a.jsx)('div', {
    className: _.spacingContainer,
    children: e.isDragEnabled ? (0, a.jsx)(h, {
      ...e
    }) : (0, a.jsx)(C, {
      ...e
    })
  }),
  'side' === e.actionsLocation && (0, a.jsxs)('div', {
    className: _.actionButtonsContainer,
    children: [
      (0, a.jsx)(u.Clickable, {
        className: _.actionButton,
        onClick: e.onEdit,
        'aria-label': m.Z.Messages.EDIT,
        children: (0, a.jsx)(u.PencilIcon, {
          size: 'xs'
        })
      }),
      e.canRemove && (0, a.jsx)(u.Clickable, {
        className: _.actionButton,
        onClick: e.onRemove,
        'aria-label': m.Z.Messages.REMOVE,
        children: (0, a.jsx)(u.TrashIcon, {
          size: 'xs'
        })
      })
    ]
  })
]
  });
}