"use strict";
I.r(E), I.d(E, {
  Color: function() {
    return _t.Color
  },
  ThemeColor: function() {
    return _A.ThemeColor
  },
  ThemeTypes: function() {
    return _a.default
  },
  ThemeExtends: function() {
    return _a.ThemeExtends
  },
  PRIMARY_DOMAIN: function() {
    return _N
  },
  SUPPORT_DOMAIN: function() {
    return _i
  },
  SUPPORT_DEV_DOMAIN: function() {
    return _c
  },
  EMAIL_DOMAIN: function() {
    return _O
  },
  StatusTypes: function() {
    return a
  },
  HangStatusTypes: function() {
    return o
  },
  ClientTypes: function() {
    return R
  },
  RECAPTCHA_SITE_KEY: function() {
    return _n
  },
  OAuth2Scopes: function() {
    return t
  },
  PaymentGateways: function() {
    return A
  },
  PaymentGatewayToFriendlyName: function() {
    return _L
  },
  PaymentSettings: function() {
    return _D
  },
  PaymentSourceTypes: function() {
    return T
  },
  ADYEN_PAYMENT_SOURCES: function() {
    return _S
  },
  STRIPE_PAYMENT_SOURCES: function() {
    return _C
  },
  IRREDEEMABLE_PAYMENT_SOURCES: function() {
    return _l
  },
  PREPAID_PAYMENT_SOURCES: function() {
    return _s
  },
  VAULTABLE_PAYMENT_SOURCES: function() {
    return _P
  },
  REDIRECTED_PAYMENT_SOURCES: function() {
    return _M
  },
  DELAYED_PAYMENTS: function() {
    return _G
  },
  PROACTIVE_FULFILLMENT: function() {
    return _U
  },
  PaymentSourceFlags: function() {
    return r
  },
  PaymentStatusTypes: function() {
    return N
  },
  SubscriptionTypes: function() {
    return i
  },
  BraintreeErrors: function() {
    return c
  },
  RevenueSurfaces: function() {
    return O
  },
  PurchaseTypes: function() {
    return n
  },
  PurchaseTypeToAnalyticsPaymentType: function() {
    return _d
  },
  BasicPermissions: function() {
    return L
  },
  Permissions: function() {
    return Permissions
  },
  NOOP: function() {
    return _u
  },
  NOOP_NULL: function() {
    return _p
  },
  ElevatedPermissionsList: function() {
    return _B
  },
  ElevatedPermissions: function() {
    return _g
  },
  RPC_VERSION: function() {
    return _H
  },
  RPC_STARTING_PORT: function() {
    return _f
  },
  RPC_PORT_RANGE: function() {
    return _h
  },
  RPC_APPLICATION_LOGGING_CATEGORY: function() {
    return _y
  },
  RPCCommands: function() {
    return D
  },
  RPCEvents: function() {
    return S
  },
  RPCCloseCodes: function() {
    return C
  },
  ROUGH_COUNT_MILLION_PLAYERS: function() {
    return _Y
  },
  TOKEN_KEY: function() {
    return _w
  },
  TOKENS_KEY: function() {
    return _b
  },
  STATUS_PAGE_ENDPOINT: function() {
    return _m
  },
  Links: function() {
    return _K
  },
  LocalizedLinks: function() {
    return _V
  },
  AppRoutes: function() {
    return _W
  },
  WebRoutes: function() {
    return _v
  },
  SOCIAL_LINKS: function() {
    return _k
  },
  WebAnalyticsEvents: function() {
    return s
  },
  CurrencyCodes: function() {
    return M
  },
  FallbackCurrencyCountry: function() {
    return _x
  },
  SKUFeatureTypes: function() {
    return U
  },
  SKUGenres: function() {
    return d
  },
  PriceTierTypes: function() {
    return u
  },
  UserMediaErrors: function() {
    return p
  },
  NavigateEventSource: function() {
    return B
  },
  RoleFlags: function() {
    return g
  },
  DiscoveryBannedSearchWords: function() {
    return _X
  }
}), I("222007");
var e, a, o, R, t, A, T, r, N, i, c, O, n, L, D, S, C, l, s, P, M, G, U, d, u, p, B, g, H, f, h, y, Y, w, b, m, K, V, F, W, v, k, x, X, Q, J, Z, j, z, q, $, __, _E, _I, _e, _a = I("543721"),
  _o = I("316693"),
  _R = I("447669");
I("927003");
var _t = I("368979"),
  _A = I("232775");
I("733724");
let _T = location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT,
  _r = location.protocol + "//discord.gg",
  _N = "discord.com",
  _i = "support.discord.com",
  _c = "support-dev.discord.com",
  _O = "discord.com";
Object.freeze({
  HINT_PURPLE: "#c9d2f0",
  DARK_PURPLE: "#697ec4",
  MODAL_GREY: "#EFEFF4",
  ORANGE: "#f57731",
  GUILDS_GREY: "#1e2124",
  ACCOUNT_GREY: "#282b30",
  CHAT_GREY: "#36393e",
  UNREAD_GREY: "#8a8e94",
  HIGHLIGHT_GREY: "#25282c",
  AVATAR_GREY: "#747F8C",
  WHITE2: "#f3f3f3",
  WHITE3: "#f0f0f0",
  WHITE7: "#dbdde1",
  WHITE8: "#cdcdcd",
  GREY1: "#99aab5",
  GREY2: "#87909c",
  GREY3: "#737f8d",
  GREY4: "#949494",
  GREY5: "#535559",
  GREY6: "#4f545c",
  GREY7: "#1c242b",
  GREY9: "#202226"
}), (H = e || (e = {})).PRIMARY_NORMAL = "ggsans-Normal, NotoSans-Normal", H.PRIMARY_MEDIUM = "ggsans-Medium, NotoSans-Medium", H.PRIMARY_SEMIBOLD = "ggsans-Semibold, NotoSans-Semibold", H.PRIMARY_BOLD = "ggsans-Bold, NotoSans-Bold", H.DISPLAY_NORMAL = "ggsans-Normal, NotoSans-Normal", H.DISPLAY_MEDIUM = "ggsans-Medium, NotoSans-Medium", H.DISPLAY_SEMIBOLD = "ggsans-Semibold, NotoSans-Semibold", H.DISPLAY_BOLD = "ggsans-Bold, NotoSans-Bold", H.DISPLAY_EXTRABOLD = "ggsans-ExtraBold, NotoSans-ExtraBold", H.CODE_SEMIBOLD = "SourceCodePro-Semibold", (f = a || (a = {})).ONLINE = "online", f.OFFLINE = "offline", f.IDLE = "idle", f.DND = "dnd", f.INVISIBLE = "invisible", f.STREAMING = "streaming", f.UNKNOWN = "unknown", (h = o || (o = {})).CHILLING = "chilling", h.GAMING = "gaming", h.FOCUSING = "focusing", h.BRB = "brb", h.EATING = "eating", h.IN_TRANSIT = "in-transit", h.WATCHING = "watching", h.CUSTOM = "custom", (y = R || (R = {})).DESKTOP = "desktop", y.WEB = "web", y.MOBILE = "mobile", y.UNKNOWN = "unknown";
let _n = "6Lef5iQTAAAAAKeIvIY-DeexoO3gj7ryl9rLMEnn";
(Y = t || (t = {})).IDENTIFY = "identify", Y.EMAIL = "email", Y.CONNECTIONS = "connections", Y.GUILDS = "guilds", Y.GUILDS_JOIN = "guilds.join", Y.GUILDS_MEMBERS_READ = "guilds.members.read", Y.GDM_JOIN = "gdm.join", Y.RPC = "rpc", Y.RPC_NOTIFICATIONS_READ = "rpc.notifications.read", Y.RPC_VOICE_READ = "rpc.voice.read", Y.RPC_VOICE_WRITE = "rpc.voice.write", Y.RPC_VIDEO_READ = "rpc.video.read", Y.RPC_VIDEO_WRITE = "rpc.video.write", Y.RPC_SCREENSHARE_READ = "rpc.screenshare.read", Y.RPC_SCREENSHARE_WRITE = "rpc.screenshare.write", Y.RPC_ACTIVITIES_WRITE = "rpc.activities.write", Y.BOT = "bot", Y.WEBHOOK_INCOMING = "webhook.incoming", Y.MESSAGES_READ = "messages.read", Y.APPLICATIONS_BUILDS_UPLOAD = "applications.builds.upload", Y.APPLICATIONS_BUILDS_READ = "applications.builds.read", Y.APPLICATIONS_COMMANDS = "applications.commands", Y.APPLICATIONS_COMMANDS_UPDATE = "applications.commands.update", Y.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE = "applications.commands.permissions.update", Y.APPLICATIONS_STORE_UPDATE = "applications.store.update", Y.APPLICATIONS_ENTITLEMENTS = "applications.entitlements", Y.ACTIVITIES_READ = "activities.read", Y.ACTIVITIES_WRITE = "activities.write", Y.RELATIONSHIPS_READ = "relationships.read", Y.VOICE = "voice", Y.DM_CHANNELS_READ = "dm_channels.read", Y.ROLE_CONNECTIONS_WRITE = "role_connections.write", (w = A || (A = {}))[w.STRIPE = 1] = "STRIPE", w[w.BRAINTREE = 2] = "BRAINTREE", w[w.APPLE = 3] = "APPLE", w[w.GOOGLE = 4] = "GOOGLE", w[w.ADYEN = 5] = "ADYEN", w[w.APPLE_PARTNER = 6] = "APPLE_PARTNER";
let _L = Object.freeze({
    1: "Stripe",
    2: "Braintree",
    3: "Apple",
    4: "Google",
    5: "Adyen",
    6: "Apple Partner"
  }),
  _D = Object.freeze({
    BRAINTREE: {
      KEY: window.GLOBAL_ENV.BRAINTREE_KEY,
      PAYMENT_GATEWAY: "braintree"
    },
    STRIPE: {
      KEY: window.GLOBAL_ENV.STRIPE_KEY,
      PAYMENT_GATEWAY: "stripe"
    },
    ADYEN: {
      KEY: window.GLOBAL_ENV.ADYEN_KEY,
      PAYMENT_GATEWAY: "adyen"
    }
  });
(b = T || (T = {}))[b.UNKNOWN = 0] = "UNKNOWN", b[b.CARD = 1] = "CARD", b[b.PAYPAL = 2] = "PAYPAL", b[b.GIROPAY = 3] = "GIROPAY", b[b.SOFORT = 4] = "SOFORT", b[b.PRZELEWY24 = 5] = "PRZELEWY24", b[b.SEPA_DEBIT = 6] = "SEPA_DEBIT", b[b.PAYSAFE_CARD = 7] = "PAYSAFE_CARD", b[b.GCASH = 8] = "GCASH", b[b.GRABPAY_MY = 9] = "GRABPAY_MY", b[b.MOMO_WALLET = 10] = "MOMO_WALLET", b[b.VENMO = 11] = "VENMO", b[b.GOPAY_WALLET = 12] = "GOPAY_WALLET", b[b.KAKAOPAY = 13] = "KAKAOPAY", b[b.BANCONTACT = 14] = "BANCONTACT", b[b.EPS = 15] = "EPS", b[b.IDEAL = 16] = "IDEAL", b[b.CASH_APP = 17] = "CASH_APP", b[b.PAYMENT_REQUEST = 99] = "PAYMENT_REQUEST";
let _S = new Map([
    [7, "paysafecard"],
    [8, "gcash"],
    [9, "grabpay_MY"],
    [10, "momo_wallet"],
    [13, "kakaopay"],
    [12, "gopay_wallet"],
    [17, "cashapp"]
  ]),
  _C = new Map([
    [14, "bancontact"],
    [3, "giropay"],
    [16, "ideal"]
  ]),
  _l = new Set([7, 8, 9, 12, 10, 13, 14, 15, 16, 4, 3, 5, 17]),
  _s = new Set([7, 9, 3, 5, 4, 14, 15, 16]),
  _P = new Set([1, 2, 6, 8, 10, 11, 13, 12, 17]),
  _M = new Set([3, 4, 5, 14, 15, 16, 7, 9, 12]),
  _G = new Set([6]),
  _U = new Set([4]);
(m = r || (r = {}))[m.NEW = 1] = "NEW", (K = N || (N = {}))[K.PENDING = 0] = "PENDING", K[K.COMPLETED = 1] = "COMPLETED", K[K.FAILED = 2] = "FAILED", K[K.REVERSED = 3] = "REVERSED", K[K.REFUNDED = 4] = "REFUNDED", K[K.CANCELED = 5] = "CANCELED", (V = i || (i = {}))[V.PREMIUM = 1] = "PREMIUM", V[V.GUILD = 2] = "GUILD", V[V.APPLICATION = 3] = "APPLICATION", (F = c || (c = {})).PAYPAL_POPUP_CLOSED = "PAYPAL_POPUP_CLOSED", F.VENMO_APP_CANCELED = "VENMO_APP_CANCELED", F.VENMO_CANCELED = "VENMO_CANCELED", Object.freeze({
  CONSTANT: 1,
  APPLE_STICKER: 2
}), (W = O || (O = {}))[W.DISCOVERY = 0] = "DISCOVERY", W[W.CHECKOUT = 1] = "CHECKOUT", (v = n || (n = {}))[v.SUBSCRIPTION = 0] = "SUBSCRIPTION", v[v.ONE_TIME = 1] = "ONE_TIME";
let _d = Object.freeze({
  0: "subscription",
  1: "sku"
});
(k = L || (L = {}))[k.VIEW_CHANNEL = 1024] = "VIEW_CHANNEL", k[k.READ_MESSAGE_HISTORY = 65536] = "READ_MESSAGE_HISTORY", k[k.CONNECT = 1048576] = "CONNECT";
let Permissions = Object.freeze({
    CREATE_INSTANT_INVITE: _o.default.getFlag(0),
    KICK_MEMBERS: _o.default.getFlag(1),
    BAN_MEMBERS: _o.default.getFlag(2),
    ADMINISTRATOR: _o.default.getFlag(3),
    MANAGE_CHANNELS: _o.default.getFlag(4),
    MANAGE_GUILD: _o.default.getFlag(5),
    CHANGE_NICKNAME: _o.default.getFlag(26),
    MANAGE_NICKNAMES: _o.default.getFlag(27),
    MANAGE_ROLES: _o.default.getFlag(28),
    MANAGE_WEBHOOKS: _o.default.getFlag(29),
    MANAGE_GUILD_EXPRESSIONS: _o.default.getFlag(30),
    CREATE_GUILD_EXPRESSIONS: _o.default.getFlag(43),
    VIEW_AUDIT_LOG: _o.default.getFlag(7),
    VIEW_CHANNEL: _o.default.getFlag(10),
    VIEW_GUILD_ANALYTICS: _o.default.getFlag(19),
    VIEW_CREATOR_MONETIZATION_ANALYTICS: _o.default.getFlag(41),
    MODERATE_MEMBERS: _o.default.getFlag(40),
    USE_EMBEDDED_ACTIVITIES: _o.default.getFlag(39),
    SEND_MESSAGES: _o.default.getFlag(11),
    SEND_TTS_MESSAGES: _o.default.getFlag(12),
    MANAGE_MESSAGES: _o.default.getFlag(13),
    EMBED_LINKS: _o.default.getFlag(14),
    ATTACH_FILES: _o.default.getFlag(15),
    READ_MESSAGE_HISTORY: _o.default.getFlag(16),
    MENTION_EVERYONE: _o.default.getFlag(17),
    USE_EXTERNAL_EMOJIS: _o.default.getFlag(18),
    ADD_REACTIONS: _o.default.getFlag(6),
    USE_APPLICATION_COMMANDS: _o.default.getFlag(31),
    MANAGE_THREADS: _o.default.getFlag(34),
    CREATE_PUBLIC_THREADS: _o.default.getFlag(35),
    CREATE_PRIVATE_THREADS: _o.default.getFlag(36),
    USE_EXTERNAL_STICKERS: _o.default.getFlag(37),
    SEND_MESSAGES_IN_THREADS: _o.default.getFlag(38),
    SEND_VOICE_MESSAGES: _o.default.getFlag(46),
    USE_CLYDE_AI: _o.default.getFlag(47),
    CONNECT: _o.default.getFlag(20),
    SPEAK: _o.default.getFlag(21),
    MUTE_MEMBERS: _o.default.getFlag(22),
    DEAFEN_MEMBERS: _o.default.getFlag(23),
    MOVE_MEMBERS: _o.default.getFlag(24),
    USE_VAD: _o.default.getFlag(25),
    PRIORITY_SPEAKER: _o.default.getFlag(8),
    STREAM: _o.default.getFlag(9),
    USE_SOUNDBOARD: _o.default.getFlag(42),
    USE_EXTERNAL_SOUNDS: _o.default.getFlag(45),
    SET_VOICE_CHANNEL_STATUS: _o.default.getFlag(48),
    REQUEST_TO_SPEAK: _o.default.getFlag(32),
    MANAGE_EVENTS: _o.default.getFlag(33),
    CREATE_EVENTS: _o.default.getFlag(44)
  }),
  _u = function() {
    for (var _ = arguments.length, E = Array(_), I = 0; I < _; I++) E[I] = arguments[I]
  },
  _p = () => null,
  _B = [Permissions.KICK_MEMBERS, Permissions.BAN_MEMBERS, Permissions.ADMINISTRATOR, Permissions.MANAGE_CHANNELS, Permissions.MANAGE_GUILD, Permissions.MANAGE_ROLES, Permissions.MANAGE_MESSAGES, Permissions.MANAGE_THREADS, Permissions.MODERATE_MEMBERS],
  _g = _o.default.combine(..._B),
  _H = 1,
  _f = 6463,
  _h = 10,
  _y = "RpcApplicationLogger";
(x = D || (D = {})).DISPATCH = "DISPATCH", x.SET_CONFIG = "SET_CONFIG", x.AUTHORIZE = "AUTHORIZE", x.AUTHENTICATE = "AUTHENTICATE", x.GET_GUILD = "GET_GUILD", x.GET_GUILDS = "GET_GUILDS", x.GET_CHANNEL = "GET_CHANNEL", x.GET_CHANNELS = "GET_CHANNELS", x.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", x.CREATE_CHANNEL_INVITE = "CREATE_CHANNEL_INVITE", x.GET_RELATIONSHIPS = "GET_RELATIONSHIPS", x.GET_USER = "GET_USER", x.SUBSCRIBE = "SUBSCRIBE", x.UNSUBSCRIBE = "UNSUBSCRIBE", x.SET_USER_VOICE_SETTINGS = "SET_USER_VOICE_SETTINGS", x.SET_USER_VOICE_SETTINGS_2 = "SET_USER_VOICE_SETTINGS_2", x.PUSH_TO_TALK = "PUSH_TO_TALK", x.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", x.GET_SELECTED_VOICE_CHANNEL = "GET_SELECTED_VOICE_CHANNEL", x.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", x.GET_VOICE_SETTINGS = "GET_VOICE_SETTINGS", x.SET_VOICE_SETTINGS_2 = "SET_VOICE_SETTINGS_2", x.SET_VOICE_SETTINGS = "SET_VOICE_SETTINGS", x.SET_ACTIVITY = "SET_ACTIVITY", x.SEND_ACTIVITY_JOIN_INVITE = "SEND_ACTIVITY_JOIN_INVITE", x.CLOSE_ACTIVITY_JOIN_REQUEST = "CLOSE_ACTIVITY_JOIN_REQUEST", x.ACTIVITY_INVITE_USER = "ACTIVITY_INVITE_USER", x.ACCEPT_ACTIVITY_INVITE = "ACCEPT_ACTIVITY_INVITE", x.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", x.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", x.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", x.CREATE_ACTIVITY_INSTANCE = "CREATE_ACTIVITY_INSTANCE", x.JOIN_ACTIVITY_INSTANCE = "JOIN_ACTIVITY_INSTANCE", x.LEAVE_ACTIVITY_INSTANCE = "LEAVE_ACTIVITY_INSTANCE", x.INVITE_BROWSER = "INVITE_BROWSER", x.DEEP_LINK = "DEEP_LINK", x.CONNECTIONS_CALLBACK = "CONNECTIONS_CALLBACK", x.BILLING_POPUP_BRIDGE_CALLBACK = "BILLING_POPUP_BRIDGE_CALLBACK", x.BRAINTREE_POPUP_BRIDGE_CALLBACK = "BRAINTREE_POPUP_BRIDGE_CALLBACK", x.GIFT_CODE_BROWSER = "GIFT_CODE_BROWSER", x.GUILD_TEMPLATE_BROWSER = "GUILD_TEMPLATE_BROWSER", x.OVERLAY = "OVERLAY", x.BROWSER_HANDOFF = "BROWSER_HANDOFF", x.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", x.GET_IMAGE = "GET_IMAGE", x.CREATE_LOBBY = "CREATE_LOBBY", x.UPDATE_LOBBY = "UPDATE_LOBBY", x.DELETE_LOBBY = "DELETE_LOBBY", x.UPDATE_LOBBY_MEMBER = "UPDATE_LOBBY_MEMBER", x.CONNECT_TO_LOBBY = "CONNECT_TO_LOBBY", x.DISCONNECT_FROM_LOBBY = "DISCONNECT_FROM_LOBBY", x.SEND_TO_LOBBY = "SEND_TO_LOBBY", x.SEARCH_LOBBIES = "SEARCH_LOBBIES", x.CONNECT_TO_LOBBY_VOICE = "CONNECT_TO_LOBBY_VOICE", x.DISCONNECT_FROM_LOBBY_VOICE = "DISCONNECT_FROM_LOBBY_VOICE", x.SET_OVERLAY_LOCKED = "SET_OVERLAY_LOCKED", x.OPEN_OVERLAY_ACTIVITY_INVITE = "OPEN_OVERLAY_ACTIVITY_INVITE", x.OPEN_OVERLAY_GUILD_INVITE = "OPEN_OVERLAY_GUILD_INVITE", x.OPEN_OVERLAY_VOICE_SETTINGS = "OPEN_OVERLAY_VOICE_SETTINGS", x.VALIDATE_APPLICATION = "VALIDATE_APPLICATION", x.GET_ENTITLEMENT_TICKET = "GET_ENTITLEMENT_TICKET", x.GET_APPLICATION_TICKET = "GET_APPLICATION_TICKET", x.START_PURCHASE = "START_PURCHASE", x.START_PREMIUM_PURCHASE = "START_PREMIUM_PURCHASE", x.GET_SKUS = "GET_SKUS", x.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", x.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", x.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", x.GET_NETWORKING_CONFIG = "GET_NETWORKING_CONFIG", x.NETWORKING_SYSTEM_METRICS = "NETWORKING_SYSTEM_METRICS", x.NETWORKING_PEER_METRICS = "NETWORKING_PEER_METRICS", x.NETWORKING_CREATE_TOKEN = "NETWORKING_CREATE_TOKEN", x.SET_USER_ACHIEVEMENT = "SET_USER_ACHIEVEMENT", x.GET_USER_ACHIEVEMENTS = "GET_USER_ACHIEVEMENTS", x.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", x.SEND_GENERIC_EVENT = "SEND_GENERIC_EVENT", x.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", x.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", x.CAPTURE_LOG = "CAPTURE_LOG", x.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", x.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", x.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", x.GET_SOUNDBOARD_SOUNDS = "GET_SOUNDBOARD_SOUNDS", x.PLAY_SOUNDBOARD_SOUND = "PLAY_SOUNDBOARD_SOUND", x.TOGGLE_VIDEO = "TOGGLE_VIDEO", x.TOGGLE_SCREENSHARE = "TOGGLE_SCREENSHARE", x.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS", (X = S || (S = {})).CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", X.GUILD_STATUS = "GUILD_STATUS", X.GUILD_CREATE = "GUILD_CREATE", X.CHANNEL_CREATE = "CHANNEL_CREATE", X.RELATIONSHIP_UPDATE = "RELATIONSHIP_UPDATE", X.VOICE_CHANNEL_SELECT = "VOICE_CHANNEL_SELECT", X.VOICE_STATE_CREATE = "VOICE_STATE_CREATE", X.VOICE_STATE_DELETE = "VOICE_STATE_DELETE", X.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", X.VOICE_SETTINGS_UPDATE = "VOICE_SETTINGS_UPDATE", X.VOICE_SETTINGS_UPDATE_2 = "VOICE_SETTINGS_UPDATE_2", X.VOICE_CONNECTION_STATUS = "VOICE_CONNECTION_STATUS", X.SPEAKING_START = "SPEAKING_START", X.SPEAKING_STOP = "SPEAKING_STOP", X.GAME_JOIN = "GAME_JOIN", X.GAME_SPECTATE = "GAME_SPECTATE", X.ACTIVITY_JOIN = "ACTIVITY_JOIN", X.ACTIVITY_JOIN_REQUEST = "ACTIVITY_JOIN_REQUEST", X.ACTIVITY_SPECTATE = "ACTIVITY_SPECTATE", X.ACTIVITY_INVITE = "ACTIVITY_INVITE", X.ACTIVITY_PIP_MODE_UPDATE = "ACTIVITY_PIP_MODE_UPDATE", X.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", X.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", X.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", X.ACTIVITY_INSTANCE_UPDATE = "ACTIVITY_INSTANCE_UPDATE", X.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE", X.NOTIFICATION_CREATE = "NOTIFICATION_CREATE", X.MESSAGE_CREATE = "MESSAGE_CREATE", X.MESSAGE_UPDATE = "MESSAGE_UPDATE", X.MESSAGE_DELETE = "MESSAGE_DELETE", X.LOBBY_DELETE = "LOBBY_DELETE", X.LOBBY_UPDATE = "LOBBY_UPDATE", X.LOBBY_MEMBER_CONNECT = "LOBBY_MEMBER_CONNECT", X.LOBBY_MEMBER_DISCONNECT = "LOBBY_MEMBER_DISCONNECT", X.LOBBY_MEMBER_UPDATE = "LOBBY_MEMBER_UPDATE", X.LOBBY_MESSAGE = "LOBBY_MESSAGE", X.OVERLAY = "OVERLAY", X.OVERLAY_UPDATE = "OVERLAY_UPDATE", X.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", X.ENTITLEMENT_DELETE = "ENTITLEMENT_DELETE", X.USER_ACHIEVEMENT_UPDATE = "USER_ACHIEVEMENT_UPDATE", X.VOICE_CHANNEL_EFFECT_SEND = "VOICE_CHANNEL_EFFECT_SEND", X.VOICE_CHANNEL_EFFECT_RECENT_EMOJI = "VOICE_CHANNEL_EFFECT_RECENT_EMOJI", X.VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE = "VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE", X.SCREENSHARE_STATE_UPDATE = "SCREENSHARE_STATE_UPDATE", X.VIDEO_STATE_UPDATE = "VIDEO_STATE_UPDATE", X.READY = "READY", X.ERROR = "ERROR", (Q = C || (C = {}))[Q.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", Q[Q.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", Q[Q.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", Q[Q.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", Q[Q.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", Q[Q.RATELIMITED = 4002] = "RATELIMITED", Q[Q.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", Q[Q.INVALID_VERSION = 4004] = "INVALID_VERSION", Q[Q.INVALID_ENCODING = 4005] = "INVALID_ENCODING";
let _Y = 250,
  _w = "token",
  _b = "tokens",
  _m = "https://".concat("status.discord.com"),
  _K = {
    PRESSKIT: "https://app.box.com/s/5puqm5ijahrrdao7yldi7fr3zah5i1am",
    REBRAND_PRESSKIT: "https://www.dropbox.com/sh/nabhhaq7kt59exr/AAB7U3f2pW-Jmvdul0yy7o-ia?dl=1",
    STATUS: "https://discordstatus.com",
    HELP_AND_SUPPORT: "//".concat(_i, "/hc/en-us"),
    FEEDBACK: "//".concat("feedback.discord.com"),
    EMAIL_SUPPORT: "mailto:support@".concat(_O),
    EMAIL_LAW_ENFORCEMENT: "mailto:lawenforcement@".concat(_O),
    EMAIL_HYPESQUAD: "mailto:hypesquad@".concat(_O),
    DEV_PERKS_FORM: "https://goo.gl/forms/oZfKBStV3sR8GHdU2",
    VERIFICATION_REQUIREMENTS: "https://dis.gd/vfqual",
    BASE_URL: "https://".concat(_N),
    PRESS_INQUIRIES: "mailto:press@".concat(_O),
    CONTACT_US: "https://dis.gd/contact",
    DEV_LANDING: "/build",
    DEV_PORTAL: "/developers",
    DEV_PORTAL_APPLICATIONS: "/developers/applications",
    DEV_PORTAL_DOCUMENTATION: "/developers/docs",
    DEV_PORTAL_SELF_SERVE_MODAL: "/developers/?store_signup=true",
    PARTNER_CODE_OF_CONDUCT: "https://".concat(_i, "/hc/en-us/articles/360024871991"),
    SUBMIT_TNS_REPORT: "https://dis.gd/request",
    MERCH_STORE: "https://discordmerch.com",
    MOD_ACADEMY_EXAM: "https://dis.gd/exam",
    OFFICIAL_3RD_PARTY_MERCH: "https://discordmerch.com/evergreenfooter",
    COMMUNITY: "/community",
    TWITTER_SUPPORT: "https://twitter.com/discord_support"
  },
  _V = Object.freeze({
    TWITTER: Object.freeze({
      default: "https://twitter.com/discord",
      ja: "https://twitter.com/discord_jp"
    })
  }),
  _F = Object.freeze({
    WELCOME: "".concat(_T, "/welcome/"),
    ME: "".concat(_T, "/channels/@me"),
    SETTINGS: (_, E) => "".concat(_T, "/settings/").concat(_).concat(E ? "/".concat(E) : ""),
    CONNECTION: _ => "".concat(_T, "/connections/").concat(_),
    CHANGELOGS: "".concat(_T, "/settings/changelogs"),
    LOGIN: "".concat(_T, "/login"),
    LOGIN_WITH_REDIRECT: _ => "".concat(_T, "/login?redirect_to=").concat(_),
    REGISTER: "".concat(_T, "/register"),
    REGISTER_WITH_REDIRECT: _ => "".concat(_T, "/register?redirect_to=").concat(_),
    CREATE_GUILD: "".concat(_T, "/guilds/create"),
    VANITY_INVITE: _ => "".concat(_r, "/").concat(_),
    HYPESQUAD_ONLINE: "".concat(_T, "/settings/hypesquad-online"),
    BROWSE_NITRO_TITLES: "".concat(_T, "/store/browse?type=nitro"),
    SKU_DETAILS: (_, E) => "".concat(_T, "/store/skus/").concat(_).concat(null != E ? "?store_listing_id=".concat(E) : ""),
    MESSAGE: (_, E, I) => "/channels/".concat(_, "/").concat(E, "/").concat(I),
    CHANNEL: (_, E) => "/channels/".concat(_, "/").concat(E),
    REPORT: "".concat(_T, "/report")
  });
(J = l || (l = {})).INDEX = "/", J.INDEX_WORD = "/index", J.INDEX_BUCKET = "/index/:bucketId", J.TV = "/tv", J.CHANGELOGS = "/changelogs/:date", J.COMMUNITY = "/community", J.COMPANY = "/company", J.COMPANY_INFORMATION = "/company-information", J.CREATORS = "/creators", J.DOWNLOADS = "/downloads", J.DOWNLOAD = "/download", J.GAMING = "/gaming", J.PRIVACY = "/privacy", J.TOS = "/tos", J.TERMS = "/terms", J.STORE_TERMS = "/store-terms", J.ACKNOWLEDGEMENTS = "/acknowledgements", J.LICENSES = "/licenses", J.PARTNERS = "/partners", J.HYPESQUAD = "/hypesquad", J.HYPESQUAD_RIOT = "/hypesquad-riot", J.BRANDING = "/branding", J.ERROR_404 = "/404", J.JOBS = "/jobs", J.JOB = "/jobs/:jobId", J.STREAMKIT = "/streamkit", J.SECURITY = "/security", J.NITRO = "/nitro", J.DISCOVER = "/servers", J.GUIDELINES = "/guidelines", J.RICH_PRESENCE = "/rich-presence", J.VERIFICATION = "/verification", J.OPEN_SOURCE = "/open-source", J.WARFRAME = "/warframe", J.REMOTE_AUTH = "/ra/:remoteAuthFingerprint", J.SAFETY_LANDING = "/safetycenter", J.SAFETY_ARTICLE_ROOT = "/safety", J.SAFETY_ARTICLE = "/safety/:article", J.NEWSROOM = "/newsroom", J.INSPIRATION = "/inspiration", J.MOD_ACADEMY_LANDING = "/moderation", J.MOD_ACADEMY_EXAM = "/moderation/exam", J.MOD_ACADEMY_ARTICLE = "/moderation/:article", J.BLOG = "/blog", J.APP_DIRECTORY = "/application-directory", J.REFRESH_INDEX = "/new", J.REFRESH_INDEX_WORD = "/new/index", J.REFRESH_COMPANY = "/new/company", J.REFRESH_DOWNLOAD = "/new/download", J.REFRESH_PRIVACY = "/new/privacy", J.REFRESH_TERMS = "/new/terms", J.REFRESH_ACKNOWLEDGEMENTS = "/new/acknowledgements", J.REFRESH_LICENSES = "/new/licenses", J.REFRESH_BRANDING = "/new/branding", J.REFRESH_JOBS = "/new/jobs", J.REFRESH_JOB = "/new/jobs/:jobId", J.REFRESH_STREAMKIT = "/new/streamkit", J.REFRESH_NITRO = "/new/nitro", J.REFRESH_GUIDELINES = "/new/guidelines", J.REFRESH_SAFETY_LANDING = "/new/safety", J.REFRESH_SAFETY_ARTICLE = "/new/safety/:article", J.COLLEGE = "/college", J.LEAGUE_CLUBS = "/league-communities", J.DISCORD_RECRUITING_SCAMS = "/discord-recruitment-scams", J.DEV_NEWSLETTER_SIGNUP = "/dev-newsletter", J.LEGACY_DEV_NEWSLETTER = "/newsletter", J.LEGAL_ARCHIVE = "/archive/", J.TERMS_MAY_2020 = "/archive/terms/may-2020", J.PRIVACY_JUNE_2020 = "/archive/privacy/june-2020", J.GUIDELINES_MAY_2020 = "/archive/guidelines/may-2020", J.FALL_RELEASE_2023 = "/fallrelease", J.MOBILE_REDESIGN_2023 = "/mobile", J.REFRESH_XBOX_OFFER = "/new/discord-xbox-offer-2019", J.REFRESH_WHY_DISCORD = "/why-discord-is-different", J.WHY_DISCORD = "/why-discord", J.XBOX_OFFER = "/discord-xbox-offer-2020", J.COLLEGE_BRUINS = "/bruins", J.COLLEGE_ANTEATERS = "/anteaters", J.COLLEGE_GAUCHOS = "/gauchos", J.COLLEGE_BEARS = "/bears", J.COLLEGE_SLUGS = "/slugs", J.BACK_TO_SCHOOL_GIVEAWAY_INSTAGRAM = "/terms/back-to-school-2020/instagram", J.BACK_TO_SCHOOL_GIVEAWAY_TWITTER = "/terms/back-to-school-2020/twitter", J.SNOWSGIVING_GIVEAWAY_INSTAGRAM = "/terms/snowsgiving-2020/instagram", J.SNOWSGIVING_GIVEAWAY_TWITTER = "/terms/snowsgiving-2020/twitter";
let _W = (0, _R.wrapPaths)(_F),
  _v = (0, _R.wrapPaths)(l),
  _k = Object.freeze({
    FACEBOOK_URL: "https://www.facebook.com/discord/",
    INSTAGRAM_URL: "https://www.instagram.com/discord/",
    YOUTUBE_URL: "https://www.youtube.com/discord/",
    TIKTOK_URL: "https://www.tiktok.com/@discord"
  });
(Z = s || (s = {})).EXPERIMENT_USER_TRIGGERED = "experiment_user_triggered", Z.EXPERIMENT_GUILD_TRIGGERED = "experiment_guild_triggered", Z.MKTG_PAGE_VIEWED = "mktg_page_viewed", Z.CLICK_LANDING_CTA = "click_landing_cta", Z.DOWNLOAD_APP = "download_app", Z.MKTG_HYPESQUAD_FORM_SUBMITTED = "mktg_hypesquad_form_submitted", Z.MKTG_HYPESQUAD_FORM_OPENED = "mktg_hypesquad_form_opened", Z.CHANGE_MARKETING_LOCALE = "change_marketing_locale", Z.GAME_CLICKED_LANDING = "game_clicked_landing", Z.MAIN_NAVIGATION_MENU = "main_navigation_menu", Z.MKTG_APPLICATION_STEP = "mktg_application_step", Z.MKTG_WARFRAME_CTA_CLICKED = "mktg_warframe_cta_clicked", Z.MKTG_PAGE_CTA_CLICKED = "mktg_page_cta_clicked", Z.MKTG_VIDEO_PLAYED = "mktg_video_played", Z.DEEP_LINK_CLICKED = "deep_link_clicked", Z.SEO_PAGE_VIEWED = "seo_server_landing_page_viewed", Z.SEO_PAGE_CTA_CLICKED = "seo_server_landing_page_cta_clicked", Z.SEO_AGGREGATOR_PAGE_VIEWED = "seo_aggregator_page_viewed", Z.SEO_AGGREGATOR_CTA_CLICKED = "seo_aggregator_page_cta_clicked", Z.LOCATION_STACK_METADATA = "location_stack_metadata", Z.CREATOR_STORE_PAGE_VIEWED = "creator_store_page_viewed", Z.CREATOR_STORE_PAGE_CTA_CLICKED = "creator_store_page_cta_clicked", (P || (P = {})).MKTG_ACKNOWLEDGEMENTS_MODAL_OPEN = "mktg_ack_modal_open", (j = M || (M = {})).AED = "aed", j.AFN = "afn", j.ALL = "all", j.AMD = "amd", j.ANG = "ang", j.AOA = "aoa", j.ARS = "ars", j.AUD = "aud", j.AWG = "awg", j.AZN = "azn", j.BAM = "bam", j.BBD = "bbd", j.BDT = "bdt", j.BGN = "bgn", j.BHD = "bhd", j.BIF = "bif", j.BMD = "bmd", j.BND = "bnd", j.BOB = "bob", j.BOV = "bov", j.BRL = "brl", j.BSD = "bsd", j.BTN = "btn", j.BWP = "bwp", j.BYN = "byn", j.BYR = "byr", j.BZD = "bzd", j.CAD = "cad", j.CDF = "cdf", j.CHE = "che", j.CHF = "chf", j.CHW = "chw", j.CLF = "clf", j.CLP = "clp", j.CNY = "cny", j.COP = "cop", j.COU = "cou", j.CRC = "crc", j.CUC = "cuc", j.CUP = "cup", j.CVE = "cve", j.CZK = "czk", j.DJF = "djf", j.DKK = "dkk", j.DOP = "dop", j.DZD = "dzd", j.EGP = "egp", j.ERN = "ern", j.ETB = "etb", j.EUR = "eur", j.FJD = "fjd", j.FKP = "fkp", j.GBP = "gbp", j.GEL = "gel", j.GHS = "ghs", j.GIP = "gip", j.GMD = "gmd", j.GNF = "gnf", j.GTQ = "gtq", j.GYD = "gyd", j.HKD = "hkd", j.HNL = "hnl", j.HRK = "hrk", j.HTG = "htg", j.HUF = "huf", j.IDR = "idr", j.ILS = "ils", j.INR = "inr", j.IQD = "iqd", j.IRR = "irr", j.ISK = "isk", j.JMD = "jmd", j.JOD = "jod", j.JPY = "jpy", j.KES = "kes", j.KGS = "kgs", j.KHR = "khr", j.KMF = "kmf", j.KPW = "kpw", j.KRW = "krw", j.KWD = "kwd", j.KYD = "kyd", j.KZT = "kzt", j.LAK = "lak", j.LBP = "lbp", j.LKR = "lkr", j.LRD = "lrd", j.LSL = "lsl", j.LTL = "ltl", j.LVL = "lvl", j.LYD = "lyd", j.MAD = "mad", j.MDL = "mdl", j.MGA = "mga", j.MKD = "mkd", j.MMK = "mmk", j.MNT = "mnt", j.MOP = "mop", j.MRO = "mro", j.MUR = "mur", j.MVR = "mvr", j.MWK = "mwk", j.MXN = "mxn", j.MXV = "mxv", j.MYR = "myr", j.MZN = "mzn", j.NAD = "nad", j.NGN = "ngn", j.NIO = "nio", j.NOK = "nok", j.NPR = "npr", j.NZD = "nzd", j.OMR = "omr", j.PAB = "pab", j.PEN = "pen", j.PGK = "pgk", j.PHP = "php", j.PKR = "pkr", j.PLN = "pln", j.PYG = "pyg", j.QAR = "qar", j.RON = "ron", j.RSD = "rsd", j.RUB = "rub", j.RWF = "rwf", j.SAR = "sar", j.SBD = "sbd", j.SCR = "scr", j.SDG = "sdg", j.SEK = "sek", j.SGD = "sgd", j.SHP = "shp", j.SLL = "sll", j.SOS = "sos", j.SRD = "srd", j.SSP = "ssp", j.STD = "std", j.SVC = "svc", j.SYP = "syp", j.SZL = "szl", j.THB = "thb", j.TJS = "tjs", j.TMT = "tmt", j.TND = "tnd", j.TOP = "top", j.TRY = "try", j.TTD = "ttd", j.TWD = "twd", j.TZS = "tzs", j.UAH = "uah", j.UGX = "ugx", j.USD = "usd", j.USN = "usn", j.USS = "uss", j.UYI = "uyi", j.UYU = "uyu", j.UZS = "uzs", j.VEF = "vef", j.VND = "vnd", j.VUV = "vuv", j.WST = "wst", j.XAF = "xaf", j.XAG = "xag", j.XAU = "xau", j.XBA = "xba", j.XBB = "xbb", j.XBC = "xbc", j.XBD = "xbd", j.XCD = "xcd", j.XDR = "xdr", j.XFU = "xfu", j.XOF = "xof", j.XPD = "xpd", j.XPF = "xpf", j.XPT = "xpt", j.XSU = "xsu", j.XTS = "xts", j.XUA = "xua", j.YER = "yer", j.ZAR = "zar", j.ZMW = "zmw", j.ZWL = "zwl";
let _x = "US";
(z = G || (G = {})).COUNTRY = "US", z.CURRENCY = "usd", (q = U || (U = {}))[q.SINGLE_PLAYER = 1] = "SINGLE_PLAYER", q[q.ONLINE_MULTIPLAYER = 2] = "ONLINE_MULTIPLAYER", q[q.LOCAL_MULTIPLAYER = 3] = "LOCAL_MULTIPLAYER", q[q.PVP = 4] = "PVP", q[q.LOCAL_COOP = 5] = "LOCAL_COOP", q[q.CROSS_PLATFORM = 6] = "CROSS_PLATFORM", q[q.RICH_PRESENCE = 7] = "RICH_PRESENCE", q[q.DISCORD_GAME_INVITES = 8] = "DISCORD_GAME_INVITES", q[q.SPECTATOR_MODE = 9] = "SPECTATOR_MODE", q[q.CONTROLLER_SUPPORT = 10] = "CONTROLLER_SUPPORT", q[q.CLOUD_SAVES = 11] = "CLOUD_SAVES", q[q.ONLINE_COOP = 12] = "ONLINE_COOP", q[q.SECURE_NETWORKING = 13] = "SECURE_NETWORKING", ($ = d || (d = {}))[$.ACTION = 1] = "ACTION", $[$.ACTION_RPG = 2] = "ACTION_RPG", $[$.BRAWLER = 3] = "BRAWLER", $[$.HACK_AND_SLASH = 4] = "HACK_AND_SLASH", $[$.PLATFORMER = 5] = "PLATFORMER", $[$.STEALTH = 6] = "STEALTH", $[$.SURVIVAL = 7] = "SURVIVAL", $[$.ADVENTURE = 8] = "ADVENTURE", $[$.ACTION_ADVENTURE = 9] = "ACTION_ADVENTURE", $[$.METROIDVANIA = 10] = "METROIDVANIA", $[$.OPEN_WORLD = 11] = "OPEN_WORLD", $[$.PSYCHOLOGICAL_HORROR = 12] = "PSYCHOLOGICAL_HORROR", $[$.SANDBOX = 13] = "SANDBOX", $[$.SURVIVAL_HORROR = 14] = "SURVIVAL_HORROR", $[$.VISUAL_NOVEL = 15] = "VISUAL_NOVEL", $[$.DRIVING_RACING = 16] = "DRIVING_RACING", $[$.VEHICULAR_COMBAT = 17] = "VEHICULAR_COMBAT", $[$.MASSIVELY_MULTIPLAYER = 18] = "MASSIVELY_MULTIPLAYER", $[$.MMORPG = 19] = "MMORPG", $[$.ROLE_PLAYING = 20] = "ROLE_PLAYING", $[$.DUNGEON_CRAWLER = 21] = "DUNGEON_CRAWLER", $[$.ROGUELIKE = 22] = "ROGUELIKE", $[$.SHOOTER = 23] = "SHOOTER", $[$.LIGHT_GUN = 24] = "LIGHT_GUN", $[$.SHOOT_EM_UP = 25] = "SHOOT_EM_UP", $[$.FPS = 26] = "FPS", $[$.DUAL_JOYSTICK_SHOOTER = 27] = "DUAL_JOYSTICK_SHOOTER", $[$.SIMULATION = 28] = "SIMULATION", $[$.FLIGHT_SIMULATOR = 29] = "FLIGHT_SIMULATOR", $[$.TRAIN_SIMULATOR = 30] = "TRAIN_SIMULATOR", $[$.LIFE_SIMULATOR = 31] = "LIFE_SIMULATOR", $[$.FISHING = 32] = "FISHING", $[$.SPORTS = 33] = "SPORTS", $[$.BASEBALL = 34] = "BASEBALL", $[$.BASKETBALL = 35] = "BASKETBALL", $[$.BILLIARDS = 36] = "BILLIARDS", $[$.BOWLING = 37] = "BOWLING", $[$.BOXING = 38] = "BOXING", $[$.FOOTBALL = 39] = "FOOTBALL", $[$.GOLF = 40] = "GOLF", $[$.HOCKEY = 41] = "HOCKEY", $[$.SKATEBOARDING_SKATING = 42] = "SKATEBOARDING_SKATING", $[$.SNOWBOARDING_SKIING = 43] = "SNOWBOARDING_SKIING", $[$.SOCCER = 44] = "SOCCER", $[$.TRACK_FIELD = 45] = "TRACK_FIELD", $[$.SURFING_WAKEBOARDING = 46] = "SURFING_WAKEBOARDING", $[$.WRESTLING = 47] = "WRESTLING", $[$.STRATEGY = 48] = "STRATEGY", $[$.FOUR_X = 49] = "FOUR_X", $[$.ARTILLERY = 50] = "ARTILLERY", $[$.RTS = 51] = "RTS", $[$.TOWER_DEFENSE = 52] = "TOWER_DEFENSE", $[$.TURN_BASED_STRATEGY = 53] = "TURN_BASED_STRATEGY", $[$.WARGAME = 54] = "WARGAME", $[$.MOBA = 55] = "MOBA", $[$.FIGHTING = 56] = "FIGHTING", $[$.PUZZLE = 57] = "PUZZLE", $[$.CARD_GAME = 58] = "CARD_GAME", $[$.EDUCATION = 59] = "EDUCATION", $[$.FITNESS = 60] = "FITNESS", $[$.GAMBLING = 61] = "GAMBLING", $[$.MUSIC_RHYTHM = 62] = "MUSIC_RHYTHM", $[$.PARTY_MINI_GAME = 63] = "PARTY_MINI_GAME", $[$.PINBALL = 64] = "PINBALL", $[$.TRIVIA_BOARD_GAME = 65] = "TRIVIA_BOARD_GAME", (__ = u || (u = {}))[__.GUILD_ROLE_SUBSCRIPTIONS = 1] = "GUILD_ROLE_SUBSCRIPTIONS", __[__.GUILD_PRODUCTS = 2] = "GUILD_PRODUCTS", (_E = p || (p = {})).PERMISSION_DENIED = "PERMISSION_DENIED", _E.PERMISSION_DISMISSED = "PERMISSION_DISMISSED", _E.NO_DEVICES_FOUND = "NO_DEVICES_FOUND", (_I = B || (B = {})).SWIPE = "SWIPE", _I.BROWSER = "BROWSER", _I.KEYBIND = "KEYBIND", (_e = g || (g = {}))[_e.IN_PROMPT = 1] = "IN_PROMPT";
let _X = ["pepe", "nude", "nsfw", "18+", "hentai", "sex", "porn", "shit", "rape", "fuck", "penis", "pussy", "incest", "cum", "jizz", "cuck", "kkk", "terrorism"]