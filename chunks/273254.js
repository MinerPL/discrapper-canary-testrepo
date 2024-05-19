"use strict";
n.r(t), n.d(t, {
  useFakeDiscoveryClanForGuild: function() {
    return d
  }
}), n("47120");
var a = n("470079"),
  s = n("468194"),
  l = n("645896"),
  i = n("316553"),
  r = n("559469"),
  o = n("308083"),
  u = n("689938");

function d(e) {
  let {
    guild: t,
    selectedGame: n
  } = e, d = (0, i.useDiscoveryGameApplicationId)({
    selectedGame: n
  }), c = a.useMemo(() => null == d ? [] : [d], [d]), f = (0, r.useFakeDiscoveryUpsellClans)(d), E = (0, l.useClanInfo)(null == t ? void 0 : t.id), [h, _] = (0, l.useFetchClanInfo)(null == t ? void 0 : t.id);
  return a.useEffect(() => {
    !h && null != t && _()
  }, [t, h, _]), a.useMemo(() => {
    var e;
    return null != E ? E : null == t ? null : {
      ...f[f.length - 1],
      id: t.id,
      name: t.name,
      icon: t.icon,
      description: null !== (e = t.description) && void 0 !== e ? e : u.default.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER,
      memberCount: 0,
      games: c,
      playstyle: o.ClanPlaystyles.CASUAL,
      traits: [],
      tag: (0, s.getAcronym)(t.name),
      wildcardDescriptors: o.CLAN_WILDCARD_PLACEHOLDERS
    }
  }, [c, t, f, E])
}