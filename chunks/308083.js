"use strict";
n.r(t), n.d(t, {
  AGE_TRAITS: function() {
    return U
  },
  ALL_TRAITS_SET: function() {
    return G
  },
  CLAN_BRAND_PALETTE_PRESETS: function() {
    return V
  },
  CLAN_BRAND_PALETTE_PRESETS_BY_NAME: function() {
    return H
  },
  CLAN_BRAND_PRIMARY_DEFAULT: function() {
    return x
  },
  CLAN_BRAND_SECONDARY_DEFAULT: function() {
    return F
  },
  CLAN_SETTINGS_MODAL_LAYER_KEY: function() {
    return S
  },
  CLAN_SETUP_MODAL_LAYER_KEY: function() {
    return f
  },
  CLAN_WILDCARD_PLACEHOLDERS: function() {
    return g
  },
  ClanBannerKind: function() {
    return r
  },
  ClanBrandPresets: function() {
    return a
  },
  ClanPlaystyles: function() {
    return E.ClanPlaystyles
  },
  ClanSetupSteps: function() {
    return i
  },
  ClanTagBadgeSize: function() {
    return s
  },
  EMPTY_WILDCARD: function() {
    return R
  },
  FAKE_CLAN_APP_IDS: function() {
    return K
  },
  GENSHIN_ID: function() {
    return M
  },
  GENSHIN_TRAITS: function() {
    return P
  },
  HOISTED_SEARCH_APPLICATION_IDS_BY_PRIORITY: function() {
    return z
  },
  IDENTITY_TRAITS: function() {
    return b
  },
  LANGUAGES_SET: function() {
    return w
  },
  MAX_DESCRIPTION_LENGTH: function() {
    return p
  },
  MAX_GAMES_TO_DISPLAY: function() {
    return O
  },
  MAX_INTEREST_LENGTH: function() {
    return m
  },
  MAX_NUM_INTERESTS: function() {
    return A
  },
  MAX_NUM_SELECTED_GAMES: function() {
    return h
  },
  MAX_TAG_LENGTH: function() {
    return T
  },
  MAX_TRAITS_TO_DISPLAY: function() {
    return C
  },
  MAX_WILDCARD_LENGTH: function() {
    return N
  },
  SUGGESTED_TRAITS_SET: function() {
    return k
  },
  VALORANT_ID: function() {
    return D
  },
  VALORANT_TRAITS: function() {
    return y
  },
  ensureUserClanData: function() {
    return j
  },
  getPlaystyleOptions: function() {
    return v
  },
  getPlaystyleTitle: function() {
    return L
  },
  getRandomClanBannerKind: function() {
    return B
  },
  getRandomClanBrandPreset: function() {
    return Y
  },
  getSortedTraits: function() {
    return function e(t, n) {
      let i = null != n ? e(t.filter(e => null == n ? void 0 : n.includes(e))) : [];
      for (let e of y) !i.includes(e) && t.includes(e) && i.push(e);
      for (let e of U) !i.includes(e) && t.includes(e) && i.push(e);
      for (let e of b) !i.includes(e) && t.includes(e) && i.push(e);
      for (let e of t) !i.includes(e) && i.push(e);
      return i
    }
  },
  toServerClanData: function() {
    return W
  }
}), n("47120"), n("653041");
var i, r, a, s, o, l, u, d, _ = n("913527"),
  c = n.n(_),
  E = n("137920"),
  I = n("689938");
let T = 4,
  f = "ClanSetupModal",
  S = "ClanSettingsModal",
  h = 20,
  A = 30,
  m = 24,
  N = 12,
  p = 160,
  O = 3,
  C = 5;
c()("2024-01-01T00:00:00");
let R = "",
  g = ["cozy", "crunchy", "chaos"];

function L(e) {
  switch (e) {
    case E.ClanPlaystyles.SOCIAL:
      return I.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_TITLE;
    case E.ClanPlaystyles.CASUAL:
      return I.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_TITLE;
    case E.ClanPlaystyles.COMPETITIVE:
      return I.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_TITLE;
    case E.ClanPlaystyles.VERY_HARDCORE:
      return I.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_TITLE;
    case E.ClanPlaystyles.CREATIVE:
    case E.ClanPlaystyles.NONE:
    default:
      return null
  }
}

function v() {
  return {
    [E.ClanPlaystyles.SOCIAL]: {
      type: E.ClanPlaystyles.SOCIAL,
      emoji: "\uD83D\uDC4B",
      title: I.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_TITLE,
      subtitle: I.default.Messages.CLAN_SETUP_PLAYSTYLE_SOCIAL_SUBTITLE
    },
    [E.ClanPlaystyles.CASUAL]: {
      type: E.ClanPlaystyles.CASUAL,
      emoji: "\uD83C\uDFAE",
      title: I.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_TITLE,
      subtitle: I.default.Messages.CLAN_SETUP_PLAYSTYLE_CASUAL_SUBTITLE
    },
    [E.ClanPlaystyles.COMPETITIVE]: {
      type: E.ClanPlaystyles.COMPETITIVE,
      emoji: "⚔️",
      title: I.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_TITLE,
      subtitle: I.default.Messages.CLAN_SETUP_PLAYSTYLE_COMPETITIVE_SUBTITLE
    },
    [E.ClanPlaystyles.VERY_HARDCORE]: {
      type: E.ClanPlaystyles.VERY_HARDCORE,
      emoji: "\uD83D\uDC80",
      title: I.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_TITLE,
      subtitle: I.default.Messages.CLAN_SETUP_PLAYSTYLE_VERY_HARDCORE_SUBTITLE
    }
  }
}(o = i || (i = {}))[o.GAMES = 0] = "GAMES", o[o.PLAYSTYLE = 1] = "PLAYSTYLE", o[o.UTILITY_TRAITS = 2] = "UTILITY_TRAITS", o[o.INTERESTS = 3] = "INTERESTS", o[o.DESCRIPTION = 4] = "DESCRIPTION", o[o.CUSTOMIZE_TAG_BADGE = 5] = "CUSTOMIZE_TAG_BADGE", o[o.CUSTOMIZE_BANNER = 6] = "CUSTOMIZE_BANNER", o[o.MEMBER_APPLICATION = 7] = "MEMBER_APPLICATION";
let D = "700136079562375258",
  M = "762434991303950386",
  y = ["Server: NA", "Server: EU", "Server: LATAM", "Server: KR", "Server: AP", "Voice ON", "Voice OFF", "Unrated", "All Ranks", "Bronze+", "Silver+", "Gold+", "Platinum+", "Diamond+"],
  P = ["Server: NA", "Server: EU", "Server: Asia", "Server: TW/HK/MO", "Mondstadt", "Liyue", "Inazuma", "Sumeru", "Fontaine", "F2P", "Spenders", "Co-op", "Support"],
  U = ["20+", "30+", "40+", "All Ages"],
  b = ["Beginner Friendly", "PUGs", "Inclusive", "Parent Friendly", "Work-life Balance", "Streamers"],
  G = new Set([...y, ...U, ...b]),
  w = new Set(["Bulgarian", "Chinese (Simplified)", "Chinese (Traditional)", "Croatian", "Czech", "Danish", "Dutch", "English", "Finnish", "French", "German", "Greek", "Hindi", "Hungarian", "Italian", "Japanese", "Korean", "Lithuanian", "Norwegian", "Polish", "Portuguese", "Romanian", "Russian", "Spanish", "Swedish", "Thai", "Turkish", "Ukrainian", "Vietnamese"]),
  k = new Set(["anime", "fanart", "venting", "movie nights", "pirate shows", "skincare", "microwaved food", "board games", "sci-fi books", "sleeping", "brunch pics", "pet pics", "recipes", "speedrunning", "eating on mic", "k-pop", "deafened", "programming", "study buddies", "DnD", "lore dumping", "sleepy cats", "podcasts", "houseplants", "knitting", "tech", "keyboards", "horses", "bad movies", "hiking", "lo-fi chilling", "watch together", "listen alongs", "late night tacos", "drip", "trading", "travel", "cups", "coffee", "F1", "roman history", "ssense doomscrolling", "skibidi toilet", "capcut editing", "tiktok rizz party", "industrial grade glycine", "frutiger aero", "y2k", "sanrio", "nuzlockes", "small form factor pcs", "esports", "game modding", "chiikawa", "underground rap", "pc music", "homestuck", "horse hoof cleaning", "analog horror", "pimple popping", "asmr", "ya fiction", "fanfiction", "cosplay", "fanart", "zines", "vtubers", "jrpgs", "retro gaming", "collecting", "coquette", "true crime", "critical role", "cottagecore", "goblincore", "renfaire", "letterboxd"]);

function B() {
  let e = Object.keys(r).filter(e => isNaN(Number(e)));
  return r[e[Math.round(Math.random() * e.length - 1)]]
}(l = r || (r = {}))[l.NIGHT_SKY = 0] = "NIGHT_SKY", l[l.CASTLE = 1] = "CASTLE", l[l.WORLD_MAP = 2] = "WORLD_MAP", l[l.SEA_FOAM = 3] = "SEA_FOAM", l[l.WARP_TUNNEL = 4] = "WARP_TUNNEL", l[l.HOUSE = 5] = "HOUSE", l[l.HEIGHTMAP = 6] = "HEIGHTMAP", l[l.MESH = 7] = "MESH", l[l.SPATTER = 8] = "SPATTER", (u = a || (a = {})).BOULDER = "Boulder", u.CASCADE = "Cascade", u.THUNDER = "Thunder", u.SOUL = "Soul", u.MARSH = "Marsh", u.VOLCANO = "Volcano", u.EARTH = "Earth", u.ZEPHYR = "Zephyr";
let V = [{
    name: "Boulder",
    primary: "#8c8d8d",
    secondary: "#d0d0d1"
  }, {
    name: "Cascade",
    primary: "#43abe9",
    secondary: "#8ad3e8"
  }, {
    name: "Thunder",
    primary: "#e8c02f",
    secondary: "#e8d387"
  }, {
    name: "Soul",
    primary: "#e72282",
    secondary: "#e875ad"
  }, {
    name: "Marsh",
    primary: "#e86e1d",
    secondary: "#e89055"
  }, {
    name: "Volcano",
    primary: "#e81d1e",
    secondary: "#e86868"
  }, {
    name: "Earth",
    primary: "#406601",
    secondary: "#d3e65e"
  }, {
    name: "Zephyr",
    primary: "#4892d5",
    secondary: "#78b6f0"
  }],
  x = V[0].primary,
  F = V[0].secondary,
  H = Object.fromEntries(V.map(e => [e.name, {
    primary: e.primary,
    secondary: e.secondary
  }]));

function Y() {
  return V[Math.floor(Math.random() * V.length)]
}

function j(e) {
  return null == e ? null : "identityGuildId" in e ? e : {
    identityGuildId: e.identity_guild_id,
    identityEnabled: e.identity_enabled,
    tag: e.tag,
    badge: e.badge
  }
}

function W(e) {
  return {
    tag: e.tag
  }
}
let K = {
    AGE_OF_EMPIRES_2: "720771660768084008",
    VALORANT: "700136079562375258",
    HELLDIVERS_2: "1205090671527071784",
    APEX: "542075586886107149",
    LETHAL_COMPANY: "1167674267748540516",
    SIMS_4: "359509007423242240",
    ROBLOX: "363445589247131668",
    BALDURS_GATE_3: "1137125502985961543",
    AIMLAB: "506950362461110273",
    HONKAI_STAR_RAIL: "1121201675240210523"
  },
  z = new Map(["432980957394370572", "363445589247131668", "356869127241072640", "700136079562375258", "356875570916753438", "1158877933042143272", "1197827812623650866", "356876176465199104", "1167674267748540516", "542075586886107149", "356875221078245376", "1149118246826561609", "356877880938070016", "356875988589740042", "762434991303950386", "356873622985506820", "356876590342340608", "1205090671527071784", "1182713227491147776", "631914894446297148", "1137125502985961543", "357607478105604096", "359509007423242240", "1121201675240210523", "643897785271189524", "742897755160313986", "356888738724446208", "1199745463918788740", "1116835216464543946", "406637848297472017", "356888961353908224", "905961880789590076", "367827983903490050", "356944273133928458", "356942674672091136", "946609449680908348", "356875762940379136", "615752773690064908", "357607133254254632", "356943499456937984", "477175586805252107", "787443973538971748", "359508713658253318", "356877880938070016", "422772752647323649", "356954277803065354", "359509387670192128", "428055627030331402", "363447565905166336", "372438022647578634", "614380482620293151", "506950362461110273", "356879032584896512", "1161772875901051042", "535371564850479134", "363413743335374859", "385538724592746496", "426526722322726912", "1174041358995042375", "1124351876033425529", "477152881196269569", "1113966530531704943", "425778010222886912", "356875890958925834", "1124358970618953818", "356888577310851072", "398632010442211348", "1124349969906815007", "770314100885422095", "1080277149623271444", "428054228511227914", "358420454764969994", "358421669603311616", "363430548028522496", "1129504162200166401", "1200228630245159032", "356889262362329098", "356887282982191114", "363409643973771264", "1164697075582238730", "940810636273795162", "982316905262120990", "359510095811444736", "363411421553360896", "359509332490059776", "1162076274622222346", "1162085521816813721", "359507724196773888", "359801269008859136", "569253958967885828", "457301824110723113", "1140238527980916757", "1124353632758939688", "542075586886107149", "512699108809637890", "653432003798106122"].map((e, t, n) => [e, n.length - t]));
(d = s || (s = {}))[d.SIZE_12 = 12] = "SIZE_12", d[d.SIZE_16 = 16] = "SIZE_16", d[d.SIZE_24 = 24] = "SIZE_24", d[d.SIZE_32 = 32] = "SIZE_32", d[d.SIZE_36 = 36] = "SIZE_36"