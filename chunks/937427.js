"use strict";
l.r(t), l.d(t, {
  useIntegrationPermissionChannelSearch: function() {
    return u
  }
}), l("47120"), l("653041"), l("733860");
var n = l("470079"),
  a = l("581364"),
  s = l("984933"),
  i = l("496675"),
  r = l("282923"),
  o = l("981631"),
  d = l("689938");

function u(e) {
  let t = n.useMemo(() => {
      let t = s.default.getChannels(e),
        l = [...t[s.GUILD_SELECTABLE_CHANNELS_KEY]];
      l.push(...t[0, s.GUILD_VOCAL_CHANNELS_KEY].filter(e => e.channel.isGuildVocal()));
      let n = l.map(e => ({
        id: e.channel.id,
        name: e.channel.name,
        canManage: i.default.can(o.Permissions.MANAGE_ROLES, e.channel)
      }));
      return n.unshift({
        id: (0, a.allChannelsSentinel)(e),
        name: d.default.Messages.INTEGRATIONS_APPLICATION_ALL_CHANNELS,
        canManage: !0
      }), n
    }, [e]),
    [l, u] = n.useState(""),
    f = n.useMemo(() => {
      let e = function(e) {
        return e.startsWith("#") ? e.substr(1) : e
      }(l);
      return (0, r.filterPermissionSearchItems)(t, c, e)
    }, [t, l]);
  return {
    query: l,
    results: f,
    setQuery: u,
    unfilteredCount: t.length
  }
}

function c(e) {
  return {
    id: e.id,
    names: [e.name]
  }
}