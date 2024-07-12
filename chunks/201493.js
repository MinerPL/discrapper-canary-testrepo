n(47120);
var i = n(735250),
  a = n(470079),
  l = n(442837),
  s = n(481060),
  r = n(570140),
  o = n(45114),
  c = n(147754),
  d = n(306680),
  u = n(626135),
  h = n(597),
  p = n(99325),
  m = n(866112),
  _ = n(273387),
  f = n(683818),
  E = n(102888),
  C = n(65839),
  g = n(453879),
  I = n(408310),
  x = n(486527),
  T = n(981631),
  v = n(476375);
t.Z = e => {
  var t;
  let {
channel: N,
guild: S
  } = e, {
currentCategoryId: Z,
directoryEntries: A,
categoryCounts: M,
allEntriesCount: b,
isLoading: R
  } = (0, l.cj)([_.Z], () => {
let e = _.Z.getCurrentCategoryId(N.id),
  t = _.Z.getDirectoryEntries(N.id, e === x.AR.ALL ? null : e),
  n = _.Z.getDirectoryCategoryCounts(N.id),
  i = _.Z.getDirectoryAllEntriesCount(N.id);
return {
  currentCategoryId: e,
  directoryEntries: t,
  categoryCounts: n,
  allEntriesCount: i,
  isLoading: _.Z.isFetching()
};
  });
  a.useEffect(() => () => {
let e = d.ZP.lastMessageId(N.id);
if (null != e)
  r.Z.wait(() => {
    (0, o.In)(N.id, !0, !0, e);
  });
  }, [N.id]);
  let j = a.useMemo(() => null != A ? (0, g.v)(Object.values(A), Z) : null, [
  A,
  Z
]),
{
  mostRecentQuery: L,
  searchFetching: P,
  searchResults: O
} = (0, l.cj)([m.Z], () => {
  let {
    mostRecentQuery: e,
    fetching: t
  } = m.Z.getSearchState(N.id);
  return {
    mostRecentQuery: e,
    searchFetching: t,
    searchResults: m.Z.getSearchResults(N.id, e)
  };
}),
[y, D] = a.useState(L),
k = '' !== L,
{
  showHubEventsList: U
} = c.Z.useExperiment({
  guildId: null !== (t = S.id) && void 0 !== t ? t : '',
  location: '6f7fb0_1'
}, {
  autoTrackExposure: !1
});
  a.useEffect(() => {
p.c$(N.id), p.YZ(N.id), U && h.c(N.id), D(L);
  }, [N.id]), a.useEffect(() => {
u.default.track(T.rMx.GUILD_DIRECTORY_CHANNEL_VIEWED, {
  directory_channel_id: N.id,
  directory_guild_id: S.id,
  primary_category_id: Z
});
  }, [
N.id,
S.id,
Z
  ]);
  let w = (0, f.G)(N) ? () => {
  (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('79764').then(n.bind(n, 533202));
    return t => (0, i.jsx)(e, {
      ...t,
      directoryGuildName: S.name,
      directoryGuildId: S.id,
      directoryChannelId: N.id,
      currentCategoryId: Z === x.AR.ALL ? null : Z
    });
  });
} : void 0,
B = e => {
  0 !== y.trim().length && e.charCode === T.yXg.ENTER && (p.Rq(N.id, y), u.default.track(T.rMx.GUILD_DIRECTORY_SEARCH, {
    directory_channel_id: N.id,
    directory_guild_id: S.id
  }));
},
H = () => {
  D(''), p.So(N.id);
};
  return k ? (0, i.jsx)(I.Z, {
searchQuery: y,
setSearchQuery: D,
mostRecentQuery: L,
handleSearchKeyPress: B,
handleClearSearch: H,
handleCreateOrAddGuild: w,
searchResults: O,
searchFetching: P
  }) : null == j && null == Z ? (0, i.jsx)('div', {
className: v.pageContainer,
children: (0, i.jsx)(s.Spinner, {
  className: v.spinner
})
  }) : (null == j ? void 0 : j.length) === 0 && null == Z ? (0, i.jsx)('div', {
className: v.pageContainer,
children: (0, i.jsx)(E.Z, {
  guild: S,
  onAddGuild: w
})
  }) : (0, i.jsx)(C.Z, {
channel: N,
searchQuery: y,
setSearchQuery: D,
handleSearchKeyPress: B,
handleClearSearch: H,
handleCreateOrAddGuild: w,
currentCategoryId: Z,
handleSelectCategory: e => {
  p.Su(N.id, e);
},
directoryEntries: j,
categoryCounts: M,
allEntriesCount: b,
isLoading: R
  });
};