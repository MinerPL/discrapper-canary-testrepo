var i = n(735250);
n(470079);
var a = n(481060),
  s = n(554300),
  r = n(823379),
  l = n(731455),
  o = n(575501);
let c = e => {
switch (e) {
  case l.fW.Activity:
    return (0, i.jsx)(a.GameControllerIcon, {
      size: 'md',
      color: 'currentColor'
    });
  case l.fW.Discover:
    return (0, i.jsx)(a.CompassIcon, {
      size: 'md',
      color: 'currentColor'
    });
  case l.fW.Education:
    return (0, i.jsx)(a.EducationIcon, {
      size: 'md',
      color: 'currentColor'
    });
  case l.fW.Music:
    return (0, i.jsx)(a.MusicIcon, {
      size: 'md',
      color: 'currentColor'
    });
  case l.fW.Science:
    return (0, i.jsx)(a.ScienceIcon, {
      size: 'md',
      color: 'currentColor'
    });
  case l.fW.Stage:
    return (0, i.jsx)(a.StageIcon, {
      size: 'custom',
      color: 'currentColor',
      height: 22,
      width: 22
    });
  case l.fW.Television:
    return (0, i.jsx)(a.TvIcon, {
      size: 'md',
      color: 'currentColor'
    });
  case l.fW.Server:
    return (0, i.jsx)(a.ServerIcon, {});
  case l.fW.Quest:
    return (0, i.jsx)(a.QuestsIcon, {});
  default:
    (0, r.vE)(e);
}
  },
  d = e => {
let {
  categories: t,
  currentCategoryId: n,
  handleCategorySelect: a,
  shouldDisplaySelectedCategory: r = !0
} = e;
return (0, i.jsx)(i.Fragment, {
  children: t.map(e => (0, i.jsx)(s.Z, {
    avatar: c(e.icon),
    name: e.name,
    focusProps: {
      offset: {
        right: 4,
        top: 1,
        bottom: 1
      }
    },
    onClick: () => a(e.categoryId),
    wrapContent: !0,
    selected: r && e.categoryId === n,
    className: o.categoryItem,
    selectedClassName: o.selectedCategoryItem,
    innerClassName: o.itemInner
  }, e.categoryId))
});
  };
d.Icons = l.fW, t.Z = d;