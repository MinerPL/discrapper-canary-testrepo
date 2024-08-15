l(47120);
var n = l(735250),
  a = l(470079),
  o = l(120356),
  s = l.n(o),
  i = l(954955),
  r = l.n(i),
  C = l(498607),
  c = l.n(C),
  d = l(149765),
  u = l(399606),
  m = l(780384),
  _ = l(481060),
  E = l(102560),
  h = l(210887),
  M = l(496675),
  x = l(910693),
  b = l(588215),
  T = l(893966),
  L = l(527379),
  g = l(855935),
  I = l(231338),
  p = l(689938),
  H = l(960841);
let f = a.forwardRef(function(e, t) {
  let {
guild: l
  } = e, o = (0, u.e7)([T.Z], () => T.Z.hasDefaultSearchStateByGuildId(l.id), [l.id]), i = (0, u.e7)([h.Z], () => (0, m.wj)(h.Z.theme)), C = (0, u.e7)([M.Z], () => M.Z.can(d.$e(I.Pl.MANAGE_GUILD, I.Pl.KICK_MEMBERS), l)), f = a.useCallback(() => {
if (null != l && !!C)
  (0, _.openModalLazy)(async () => e => (0, n.jsx)(E.Z, {
    ...e,
    guild: l
  }));
  }, [
l,
C
  ]), N = (0, u.e7)([T.Z], () => T.Z.getSearchStateByGuildId(l.id), [l.id], c()), R = (0, x.gm)(l.id), [A, S] = a.useState(N.query), Z = null != N.selectedSort && N.selectedSort !== b.d$.ORDER_BY_GUILD_JOINED_AT_DESC && N.selectedSort !== b.d$.ORDER_BY_UNSPECIFIED, j = a.useCallback(e => {
let t = e.trim();
t.length > 0 && R(), (0, L.Dr)(l.id, {
  query: t
});
  }, [
l.id,
R
  ]), v = a.useCallback(r()(j, 300), [j]), D = a.useCallback(e => {
S(e), v(e);
  }, [v]), O = a.useCallback(() => {
S(''), j('');
  }, [j]);
  return a.useImperativeHandle(t, () => ({
resetSearchText() {
  S('');
}
  })), (0, n.jsxs)('div', {
className: s()(H.searchHeaderContainer),
children: [
  (0, n.jsx)('div', {
    className: s()(H.searchHeader),
    children: o ? (0, n.jsx)(_.Heading, {
      variant: 'heading-md/medium',
      children: p.Z.Messages.MEMBER_SAFETY_TABLE_TITLE
    }) : (0, n.jsx)(_.Heading, {
      variant: 'heading-md/medium',
      children: p.Z.Messages.MEMBER_SAFETY_TABLE_TITLE_SEARCH
    })
  }),
  (0, n.jsx)('div', {
    className: s()(H.searchInput),
    children: (0, n.jsx)('div', {
      className: s()(H.searchHeader),
      children: (0, n.jsx)(_.SearchBar, {
        className: H.searchBar,
        query: A,
        placeholder: p.Z.Messages.MEMBER_SAFETY_TABLE_SEARCH_PLACEHOLDER,
        onChange: D,
        onClear: O,
        autoComplete: 'off',
        inputProps: {
          autoCapitalize: 'none',
          autoCorrect: 'off',
          spellCheck: 'false'
        }
      })
    })
  }),
  (0, n.jsx)('div', {
    children: (0, n.jsx)(_.Popout, {
      animation: _.Popout.Animation.FADE,
      position: 'bottom',
      spacing: 4,
      align: 'left',
      renderPopout: () => (0, n.jsx)(g.Z, {
        guildId: l.id,
        onClose: void 0
      }),
      children: e => {
        let {
          onClick: t,
          ...l
        } = e;
        return (0, n.jsx)(_.Button, {
          ...l,
          onClick: t,
          'aria-label': p.Z.Messages.SORT,
          color: i ? _.Button.Colors.PRIMARY : _.Button.Colors.TRANSPARENT,
          look: i ? _.Button.Looks.FILLED : _.Button.Looks.OUTLINED,
          size: _.Button.Sizes.SMALL,
          children: (0, n.jsxs)('div', {
            className: H.sortButton,
            children: [
              (0, n.jsx)(_.ArrowsUpDownIcon, {
                size: 'xs',
                color: Z ? _.tokens.colors.INTERACTIVE_ACTIVE.css : _.tokens.colors.HEADER_SECONDARY.css
              }),
              (0, n.jsx)(_.Text, {
                variant: 'text-sm/medium',
                color: Z ? 'interactive-active' : 'header-secondary',
                className: H.sortText,
                children: p.Z.Messages.SORT
              })
            ]
          })
        });
      }
    })
  }),
  (0, n.jsx)('div', {
    className: s()(H.tableOptions),
    children: C && (0, n.jsx)(_.Button, {
      className: s()(H.__invalid_pruneButton),
      onClick: f,
      'aria-label': p.Z.Messages.PRUNE_MEMBERS,
      color: _.Button.Colors.RED,
      look: _.Button.Looks.OUTLINED,
      size: _.Button.Sizes.SMALL,
      children: p.Z.Messages.PRUNE
    })
  })
]
  });
});
t.Z = f;