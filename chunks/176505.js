var r, i, a, o;
n.d(t, {
  $x: function() {
return _;
  },
  AB: function() {
return l;
  },
  EC: function() {
return f;
  },
  HY: function() {
return i;
  },
  ME: function() {
return c;
  },
  Qk: function() {
return u;
  },
  V: function() {
return h;
  },
  Vg: function() {
return s;
  },
  Z7: function() {
return E;
  },
  oC: function() {
return r;
  },
  zZ: function() {
return d;
  }
}), n(47120), (a = r || (r = {})).ROLE_SUBSCRIPTIONS = 'role-subscriptions', a.GUILD_SHOP = 'shop', a.MEMBER_APPLICATIONS = 'member-applications', a.GUILD_HOME = '@home', a.CHANNEL_BROWSER = 'channel-browser', a.GUILD_ONBOARDING = 'onboarding', a.CUSTOMIZE_COMMUNITY = 'customize-community', a.MEMBER_SAFETY = 'member-safety';
let s = new Set(Object.values(r));

function l(e) {
  return s.has(e);
}

function u(e, t) {
  return ''.concat(e, '-').concat(t);
}

function c(e) {
  return !!(null == e ? void 0 : e.includes('@home'));
}
let d = Object.freeze({
GUILD_FEED_REMOVED: 1,
PINNED: 2,
ACTIVE_CHANNELS_REMOVED: 4,
REQUIRE_TAG: 16,
IS_SPAM: 32,
IS_GUILD_RESOURCE_CHANNEL: 128,
CLYDE_AI: 256,
IS_SCHEDULED_FOR_DELETION: 512,
IS_MEDIA_CHANNEL: 1024,
SUMMARIES_DISABLED: 2048,
IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL: 8192,
IS_BROADCASTING: 16384,
HIDE_MEDIA_DOWNLOAD_OPTIONS: 32768,
IS_JOIN_REQUEST_INTERVIEW_CHANNEL: 65536
  }),
  _ = 1024,
  E = 4096;
(o = i || (i = {})).GUILD_HOME = 'home', o.SERVER_GUIDE = 'guide', o.CHANNEL_BROWSER = 'browse', o.CUSTOMIZE_COMMUNITY = 'customize';
let f = new Set(Object.values(i)),
  h = '131';