_(47120);
var I = _(253923),
  N = _(230711),
  R = _(581364),
  O = _(797610),
  A = _(200876),
  P = _(456269),
  t = _(228392),
  e = _(676317),
  T = _(467138),
  M = _(434404),
  i = _(71275),
  l = _(60222),
  s = _(665906),
  n = _(131704),
  r = _(430824),
  C = _(63063),
  D = _(981631),
  o = _(71080),
  L = _(689938);

function a(E) {
  let S = (0, l.A)(E),
_ = (0, P.Eg)(E),
I = (0, T.P)(E),
t = r.Z.getGuild(E),
e = null != t && (0, A.l)(t),
M = (0, O.M9)(t),
i = (0, R.vC)(E, {
  location: 'get_permission_options'
});
  return {
PRIORITY_SPEAKER_DESCRIPTION: L.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_APP.format({
  keybind: L.Z.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
  onClick: () => {
    N.Z.open(D.oAB.KEYBINDS);
  }
}),
SOUNDBOARD_DESCRIPTION: L.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_LEARN_MORE.format({
  helpCenterArticle: C.Z.getArticleURL(D.BhN.SOUNDBOARD)
}),
showStageChannelPermissions: S,
showExperimental: !0,
showForumPermissions: _,
showMembershipManualApprovalPermissions: I,
showCreatorMonetizationAnalyticsPermission: e,
showClydeAIPermissions: M,
externalAppsEnabled: i
  };
}

function U(E, S) {
  return E ? [S()] : [];
}
S.Z = {
  generateChannelPermissionSpec: function(E, S, _, N) {
var R, A, T, l, C, U;
let g = (0, P.Eg)(E),
  G = (0, o.IG)(S, _, g, N),
  u = a(E),
  c = s.tM.getCurrentConfig({
    guildId: E,
    location: '3ad37d_1'
  }).enabled && n.Um.has(S.type),
  p = (0, i.tu)(E),
  f = (0, e.ze)(E),
  d = S.isMediaChannel(),
  V = r.Z.getGuild(E),
  H = (0, O.M9)(V);
switch (S.type) {
  case D.d4z.GUILD_CATEGORY:
    ;
    return [
      I.zO(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CATEGORY),
      I.Ny(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP),
      I.vq(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
        showPrivateThreads: !0,
        showCreateThreads: !0,
        showClydeAIPermissions: H
      }),
      I.WV(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE),
      I.xU(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_APPS),
      ...(R = u.showStageChannelPermissions, A = () => I.kv(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_STAGE), R ? [A()] : []),
      I.uu(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)
    ];
  case D.d4z.GUILD_VOICE:
    return [
      I.zO(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
        showManageWebhooks: !0
      }),
      I.Ny(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP),
      I.WV(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE),
      I.aW(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
        sectionDescription: f ? L.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
          setUpAutomod: () => {
            M.Z.open(E, D.pNK.GUILD_AUTOMOD);
          }
        }) : void 0
      }),
      I.uu(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS),
      I.xU(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_APPS)
    ];
  case D.d4z.GUILD_STAGE_VOICE:
    return [
      I.zO(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
        showManageWebhooks: !1
      }),
      I.Ny(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP),
      I.FX(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE, p),
      I.kv(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_STAGE),
      I.uu(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS),
      I.aW(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
        sectionDescription: f ? L.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
          setUpAutomod: () => {
            M.Z.open(E, D.pNK.GUILD_AUTOMOD);
          }
        }) : void 0
      })
    ];
  case D.d4z.GUILD_FORUM:
  case D.d4z.GUILD_MEDIA:
    ;
    let h = d ? L.Z.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL : L.Z.Messages.ROLE_PERMISSIONS_SECTION_FORUMS,
      B = d ? L.Z.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL_DESCRIPTION : L.Z.Messages.ROLE_PERMISSIONS_SECTION_FORUMS_DESCRIPTION;
    return [
      I.zO(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL),
      I.Ny(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP),
      I.vq(G, h, {
        showPrivateThreads: !1,
        showCreateThreads: !1,
        sectionDescription: f ? B.format({
          setUpAutomod: () => {
            !d && (0, t.MO)(), M.Z.open(E, D.pNK.GUILD_AUTOMOD);
          }
        }) : void 0,
        showClydeAIPermissions: H
      }),
      I.xU(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_APPS),
      ...(T = c, l = () => I.WV(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE), T ? [l()] : [])
    ];
  default:
    ;
    return [
      I.zO(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL),
      I.Ny(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP),
      I.vq(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
        showPrivateThreads: S.type !== D.d4z.GUILD_ANNOUNCEMENT,
        showCreateThreads: !0,
        showClydeAIPermissions: H
      }),
      I.xU(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_APPS),
      ...(C = c, U = () => I.WV(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE), C ? [U()] : [])
    ];
}
  },
  generateGuildPermissionSpec: function(E) {
var S, _;
let N = new Set();
return !E.hasFeature(D.oNc.COMMUNITY) && N.add(D.Plq.VIEW_GUILD_ANALYTICS.toString()), S = I.s4(L.Z.Messages, a(E.id)), 0 === (_ = N).size ? S : S.map(E => ({
  ...E,
  permissions: E.permissions.filter(E => !_.has(E.flag.toString()))
}));
  },
  getGuildPermissionSpecMap: function(E) {
return I.WW(L.Z.Messages, a(E.id));
  }
};