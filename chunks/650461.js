E.d(_, {
  Wg: function() {
return M;
  }
}), E(47120);
var s, T = E(470079),
  I = E(392711),
  n = E.n(I),
  A = E(442837),
  t = E(570140),
  a = E(944163),
  r = E(709054),
  N = E(116175),
  L = E(308083);

function S(e, _, E) {
  return _ in e ? Object.defineProperty(e, _, {
value: E,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[_] = E, e;
}
let D = new Map(),
  l = new Map(),
  U = !1,
  G = Object.freeze({
gameApplicationIds: new Set(),
playstyle: L.zv.NONE,
interests: new Set(),
description: '',
wildcardDescriptors: [
  L.U6,
  L.U6,
  L.U6
],
tag: '',
verificationForm: {
  ...a.t
},
badgeKind: N.ZD.SWORD,
badgePrimaryColor: void 0,
badgeSecondaryColor: void 0,
banner: L.qC.NIGHT_SKY,
brandPrimaryColor: void 0,
brandSecondaryColor: void 0,
currentStep: L.Wy.GAMES,
furthestStep: L.Wy.GAMES,
requiredGameId: void 0
  });

function O() {
  let e = n().cloneDeep(G);
  return e.badgeKind = (0, N.lP)(), e.banner = (0, L.i1)(), e;
}

function M() {
  return T.useState(() => O())[0];
}

function i(e) {
  var _;
  return null !== (_ = D.get(e)) && void 0 !== _ ? _ : O();
}

function R(e, _) {
  let E = i(e);
  D.set(e, {
...E,
..._
  });
  let s = l.get(e);
  if (null != s) {
let E = {
  ...s
};
Object.keys(_).forEach(e => {
  delete E[e];
}), l.set(e, E);
  }
}
class u extends(s = A.ZP.PersistedStore) {
  initialize(e) {
null != e && r.default.keys(e.progressByGuild).forEach(_ => {
  var E, s, T, I, n;
  D.set(_, {
    gameApplicationIds: new Set((E = e.progressByGuild[_]).gameApplicationIds),
    playstyle: E.playstyle,
    interests: new Set(E.interests),
    description: E.description,
    wildcardDescriptors: null !== (s = E.wildcardDescriptors) && void 0 !== s ? s : [
      L.U6,
      L.U6,
      L.U6
    ],
    tag: E.tag,
    verificationForm: null !== (T = E.verificationForm) && void 0 !== T ? T : {
      ...a.t
    },
    badgeKind: null !== (I = E.badgeKind) && void 0 !== I ? I : N.ZD.SWORD,
    badgePrimaryColor: E.badgePrimaryColor,
    badgeSecondaryColor: E.badgeSecondaryColor,
    banner: null !== (n = E.banner) && void 0 !== n ? n : L.qC.NIGHT_SKY,
    brandPrimaryColor: E.brandPrimaryColor,
    brandSecondaryColor: E.brandSecondaryColor,
    currentStep: E.currentStep,
    furthestStep: E.furthestStep,
    requiredGameId: E.requiredGameId
  });
});
  }
  getState() {
let e = {};
return D.forEach((_, E) => {
  var s;
  e[E] = {
    gameApplicationIds: Array.from((s = _).gameApplicationIds),
    playstyle: s.playstyle,
    interests: Array.from(s.interests),
    description: s.description,
    wildcardDescriptors: s.wildcardDescriptors,
    tag: s.tag,
    verificationForm: s.verificationForm,
    badgeKind: s.badgeKind,
    badgePrimaryColor: s.badgePrimaryColor,
    badgeSecondaryColor: s.badgeSecondaryColor,
    banner: s.banner,
    brandPrimaryColor: s.brandPrimaryColor,
    brandSecondaryColor: s.brandSecondaryColor,
    currentStep: s.currentStep,
    furthestStep: s.furthestStep,
    requiredGameId: s.requiredGameId
  };
}), {
  progressByGuild: e
};
  }
  getStateForGuild(e) {
return {
  progress: D.get(e),
  errors: l.get(e),
  submitting: U
};
  }
  getGuildIds() {
return [...D.keys()];
  }
}
S(u, 'displayName', 'ClanSetupStore'), S(u, 'persistKey', 'ClanSetupStore'), _.ZP = new u(t.Z, {
  CLAN_SETUP_RESET: function() {
D.clear(), l.clear();
  },
  CLAN_SETUP_UPDATE: function(e) {
let {
  guildId: _,
  updates: E
} = e;
R(_, E);
  },
  CLAN_SETUP_SUBMIT: function(e) {
let {
  guildId: _
} = e;
U = !0, l.delete(_);
  },
  CLAN_SETUP_SUCCESS: function(e) {
let {
  guildId: _
} = e;
U = !1, D.delete(_), l.delete(_);
  },
  CLAN_SETUP_ERROR: function(e) {
let {
  guildId: _,
  error: E
} = e;
U = !1, l.set(_, {
  gameApplicationIds: E.getFirstFieldErrorMessage('game_application_ids'),
  playstyle: E.getFirstFieldErrorMessage('play_style'),
  description: E.getFirstFieldErrorMessage('description'),
  wildcardDescriptors: E.getFirstFieldErrorMessage('wildcard_descriptors'),
  interests: E.getFirstFieldErrorMessage('search_terms'),
  tag: E.getFirstFieldErrorMessage('tag'),
  verificationForm: E.getFirstFieldErrorMessage([
    'verification_form',
    'form_fields'
  ])
});
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
let _;
let {
  form: E,
  guildId: s,
  isLocalUpdate: T
} = e;
T && (_ = null == E ? a.t : {
  ...i(s).verificationForm,
  ...E
}, R(s, {
  verificationForm: _
}));
  }
});