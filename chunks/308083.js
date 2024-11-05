n.d(t, {
    $N: function () {
        return eo;
    },
    A9: function () {
        return en;
    },
    CT: function () {
        return j;
    },
    DA: function () {
        return ea;
    },
    Dd: function () {
        return ee;
    },
    Du: function () {
        return S;
    },
    HR: function () {
        return W;
    },
    IS: function () {
        return i;
    },
    Id: function () {
        return ei;
    },
    J6: function () {
        return er;
    },
    K_: function () {
        return X;
    },
    LD: function () {
        return J;
    },
    LK: function () {
        return w;
    },
    N: function () {
        return s;
    },
    NC: function () {
        return o;
    },
    O7: function () {
        return l;
    },
    OH: function () {
        return Q;
    },
    Pv: function () {
        return b;
    },
    Sq: function () {
        return C;
    },
    TY: function () {
        return R;
    },
    U6: function () {
        return x;
    },
    Us: function () {
        return O;
    },
    WZ: function () {
        return H;
    },
    Wy: function () {
        return r;
    },
    c4: function () {
        return N;
    },
    cG: function () {
        return T;
    },
    cm: function () {
        return A;
    },
    dt: function () {
        return $;
    },
    f4: function () {
        return P;
    },
    gQ: function () {
        return es;
    },
    gh: function () {
        return Y;
    },
    i1: function () {
        return z;
    },
    i6: function () {
        return K;
    },
    jK: function () {
        return V;
    },
    mv: function () {
        return M;
    },
    nJ: function () {
        return G;
    },
    nt: function () {
        return L;
    },
    q2: function () {
        return y;
    },
    qC: function () {
        return a;
    },
    uw: function () {
        return D;
    },
    xn: function () {
        return B;
    },
    yi: function () {
        return et;
    },
    ym: function () {
        return q;
    },
    zv: function () {
        return v.z;
    }
}),
    n(411104),
    n(47120);
var r,
    i,
    a,
    s,
    o,
    l,
    u,
    c,
    d,
    f,
    _,
    h,
    p = n(392711),
    m = n.n(p),
    g = n(913527),
    E = n.n(g),
    v = n(137920),
    I = n(388032);
let S = 200,
    T = 4,
    b = 'ClanSetupModal',
    y = 'ClanSettingsModal',
    A = 20,
    N = 30,
    C = 24,
    R = 12,
    O = 300,
    D = 3,
    L = 5;
E()('2024-01-01T00:00:00');
let x = '',
    w = ['cozy', 'crunchy', 'chaos'];
function M(e) {
    switch (e) {
        case v.z.SOCIAL:
            return I.intl.string(I.t.cxUHv7);
        case v.z.CASUAL:
            return I.intl.string(I.t.IZZoho);
        case v.z.COMPETITIVE:
            return I.intl.string(I.t.Zo1X5u);
        case v.z.VERY_HARDCORE:
            return I.intl.string(I.t.xfySBw);
        case v.z.CREATIVE:
        case v.z.NONE:
            return null;
        default:
            return e;
    }
}
function P() {
    return {
        [v.z.SOCIAL]: {
            type: v.z.SOCIAL,
            emoji: '\uD83D\uDC4B',
            title: I.intl.string(I.t.cxUHv7),
            subtitle: I.intl.string(I.t.Yd1GgY)
        },
        [v.z.CASUAL]: {
            type: v.z.CASUAL,
            emoji: '\uD83C\uDFAE',
            title: I.intl.string(I.t.IZZoho),
            subtitle: I.intl.string(I.t['2Af/ZW'])
        },
        [v.z.COMPETITIVE]: {
            type: v.z.COMPETITIVE,
            emoji: '\u2694️',
            title: I.intl.string(I.t.Zo1X5u),
            subtitle: I.intl.string(I.t['dnOc/v'])
        },
        [v.z.VERY_HARDCORE]: {
            type: v.z.VERY_HARDCORE,
            emoji: '\uD83D\uDC80',
            title: I.intl.string(I.t.xfySBw),
            subtitle: I.intl.string(I.t.rSwwx8)
        }
    };
}
((u = r || (r = {}))[(u.GAMES = 0)] = 'GAMES'), (u[(u.PLAYSTYLE = 1)] = 'PLAYSTYLE'), (u[(u.UTILITY_TRAITS = 2)] = 'UTILITY_TRAITS'), (u[(u.INTERESTS = 3)] = 'INTERESTS'), (u[(u.DESCRIPTION = 4)] = 'DESCRIPTION'), (u[(u.CUSTOMIZE_TAG_BADGE = 5)] = 'CUSTOMIZE_TAG_BADGE'), (u[(u.CUSTOMIZE_BANNER = 6)] = 'CUSTOMIZE_BANNER'), (u[(u.MEMBER_APPLICATION = 7)] = 'MEMBER_APPLICATION'), ((c = i || (i = {}))[(c.CUSTOMIZE_DISCOVERY = 8)] = 'CUSTOMIZE_DISCOVERY'), (c[(c.THANK_YOU_END = 9)] = 'THANK_YOU_END');
let k = Number(Object.values(r).pop()),
    U = Number(Object.values(i).pop());
if (isNaN(k) || isNaN(U)) throw Error('Failed to get the last step in the ClanSetupSteps enum');
if (k > U) throw Error('Early Signup last step mismatch.');
let G = '700136079562375258',
    B = '762434991303950386',
    Z = ['Server: NA', 'Server: EU', 'Server: LATAM', 'Server: KR', 'Server: AP', 'Voice ON', 'Voice OFF', 'Unrated', 'All Ranks', 'Bronze+', 'Silver+', 'Gold+', 'Platinum+', 'Diamond+'],
    F = new Set([...Z, 'Server: NA', 'Server: EU', 'Server: Asia', 'Server: TW/HK/MO', 'Mondstadt', 'Liyue', 'Inazuma', 'Sumeru', 'Fontaine', 'F2P', 'Spenders', 'Co-op', 'Support']),
    V = ['20+', '30+', '40+', 'All Ages'],
    j = ['Recurring Events', 'Beginner Friendly', 'PUGs', 'Inclusive', 'Parent Friendly', 'Work-life Balance', 'Competitive', 'Streamer', 'Esports'],
    H = new Set([...Z, ...V, ...j]),
    Y = new Set(['Bulgarian', 'Chinese (Simplified)', 'Chinese (Traditional)', 'Croatian', 'Czech', 'Danish', 'Dutch', 'English', 'Finnish', 'French', 'German', 'Greek', 'Hindi', 'Hungarian', 'Italian', 'Japanese', 'Korean', 'Lithuanian', 'Norwegian', 'Polish', 'Portuguese', 'Romanian', 'Russian', 'Spanish', 'Swedish', 'Thai', 'Turkish', 'Ukrainian', 'Vietnamese']);
function W(e, t) {
    var n;
    return m().sortBy(
        e,
        ((n = t),
        (e) => {
            var t;
            return -((((null == n ? void 0 : n.includes(e)) ? 1 : 0) << 4) | ((((t = e), H.has(t) || K.has(t) || Y.has(t)) ? 0 : 1) << 3) | ((F.has(e) ? 1 : 0) << 2) | ((V.includes(e) ? 1 : 0) << 1) | ((j.includes(e) ? 1 : 0) << 0));
        })
    );
}
let K = new Set(['anime', 'fanart', 'venting', 'mudae', 'OwO bot', 'movie nights', 'study together', 'scheduled gaming', 'all day vc', 'slow paced', 'art streams', 'work from home', 'gartic phone', 'fast food reviews', 'dress to impress', 'music production', 'variety shows', 'manga', 'webtoon', 'brainrot', 'topsters', 'dad jokes', 'photography', 'minecraft smp', 'pirate shows', 'skincare', 'microwaved food', 'board games', 'sci-fi books', 'sleeping', 'brunch pics', 'pet pics', 'recipes', 'speedrunning', 'eating on mic', 'k-pop', 'deafened', 'programming', 'study buddies', 'DnD', 'lore dumping', 'sleepy cats', 'podcasts', 'houseplants', 'knitting', 'tech', 'keyboards', 'horses', 'bad movies', 'hiking', 'lo-fi chilling', 'watch together', 'listen alongs', 'late night tacos', 'drip', 'trading', 'travel', 'cups', 'coffee', 'F1', 'roman history', 'ssense doomscrolling', 'skibidi toilet', 'capcut editing', 'tiktok rizz party', 'industrial grade glycine', 'frutiger aero', 'y2k', 'sanrio', 'nuzlockes', 'small form factor pcs', 'esports', 'game modding', 'chiikawa', 'underground rap', 'pc music', 'homestuck', 'horse hoof cleaning', 'analog horror', 'pimple popping', 'asmr', 'ya fiction', 'fanfiction', 'cosplay', 'fanart', 'zines', 'vtubers', 'JRPGs', 'retro gaming', 'collecting', 'coquette', 'true crime', 'critical role', 'cottagecore', 'goblincore', 'renfaire', 'letterboxd', 'tarot readings', 'fortune telling', 'magic tricks', 'ice cold sprite', 'slime', 'soap cutting', 'mukbang', 'premier league', 'NBA', 'hyperpop', 'dance covers', 'photocard trading', 'toploader decorating', 'unboxing', 'decoden', 'jpop', 'mandopop', 'cantopop', 'amapiano', 'ghibli', 'pokemon vgc', 'subway surfers', 'family guy funny moments', 'cranking 90s', 'friday night funkin', 'FNAF']);
function z() {
    let e = Object.keys(a).filter((e) => isNaN(Number(e)));
    return a[e[Math.floor(Math.random() * e.length)]];
}
((d = a || (a = {}))[(d.NIGHT_SKY = 0)] = 'NIGHT_SKY'), (d[(d.CASTLE = 1)] = 'CASTLE'), (d[(d.WORLD_MAP = 2)] = 'WORLD_MAP'), (d[(d.SEA_FOAM = 3)] = 'SEA_FOAM'), (d[(d.WARP_TUNNEL = 4)] = 'WARP_TUNNEL'), (d[(d.HOUSE = 5)] = 'HOUSE'), (d[(d.HEIGHTMAP = 6)] = 'HEIGHTMAP'), (d[(d.MESH = 7)] = 'MESH'), (d[(d.SPATTER = 8)] = 'SPATTER'), ((f = s || (s = {})).BOULDER = 'Boulder'), (f.CASCADE = 'Cascade'), (f.THUNDER = 'Thunder'), (f.SOUL = 'Soul'), (f.MARSH = 'Marsh'), (f.VOLCANO = 'Volcano'), (f.EARTH = 'Earth'), (f.ZEPHYR = 'Zephyr');
let q = [
        {
            name: 'Boulder',
            primary: '#8c8d8d',
            secondary: '#d0d0d1'
        },
        {
            name: 'Cascade',
            primary: '#43abe9',
            secondary: '#8ad3e8'
        },
        {
            name: 'Thunder',
            primary: '#e8c02f',
            secondary: '#e8d387'
        },
        {
            name: 'Soul',
            primary: '#e72282',
            secondary: '#e875ad'
        },
        {
            name: 'Marsh',
            primary: '#e86e1d',
            secondary: '#e89055'
        },
        {
            name: 'Volcano',
            primary: '#e81d1e',
            secondary: '#e86868'
        },
        {
            name: 'Earth',
            primary: '#406601',
            secondary: '#d3e65e'
        },
        {
            name: 'Zephyr',
            primary: '#4892d5',
            secondary: '#78b6f0'
        }
    ],
    Q = q[0].primary,
    X = q[0].secondary,
    J = Object.fromEntries(
        q.map((e) => [
            e.name,
            {
                primary: e.primary,
                secondary: e.secondary
            }
        ])
    );
function $() {
    return q[Math.floor(Math.random() * q.length)];
}
function ee(e, t) {
    return null == e || null == t ? e === t : e.identityGuildId === t.identityGuildId && e.identityEnabled === t.identityEnabled && e.tag === t.tag && e.badge === t.badge;
}
function et(e) {
    return null == e
        ? null
        : 'identityGuildId' in e
          ? e
          : {
                identityGuildId: e.identity_guild_id,
                identityEnabled: e.identity_enabled,
                tag: e.tag,
                badge: e.badge
            };
}
function en(e) {
    return { tag: e.tag };
}
let er = ['363445589247131668', '700136079562375258', '356869127241072640', '356875570916753438', '1158877933042143272', '432980957394370572', '356876176465199104', '356875221078245376', '356875988589740042', '356877880938070016', '1149118246826561609', '356873622985506820', '542075586886107149', '762434991303950386', '946609449680908348', '356876590342340608', '1260340082150346932', '1253061774555611238', '1167674267748540516', '359509007423242240', '1257819671114289184', '1116835216464543946', '357607478105604096', '1137125502985961543', '356888738724446208', '356875762940379136', '1121201675240210523', '1205090671527071784', '357607133254254632', '359508713658253318', '363409643973771264', '359509387670192128', '367827983903490050', '742897755160313986', '1215361187684946010', '1247227126416146462', '477175586805252107', '356943499456937984', '614380482620293151', '1256912167685587034', '356888961353908224', '356954277803065354', '643897785271189524', '356879032584896512', '506950362461110273', '1113966530531704943', '356944273133928458', '363447565905166336', '363413743335374859', '356942674672091136', '426526722322726912', '422772752647323649', '905961880789590076', '356888453796986880', '398632010442211348', '535371564850479134', '1124351715618074634', '356888577310851072', '787443973538971748', '1197827812623650866', '1124349969906815007', '356875890958925834', '356889262362329098', '425778010222886912', '428055627030331402', '1224418065295478955', '1263691812338536570', '372438022647578634', '1129504162200166401', '1238113262969557002', '443159611479031808', '615752773690064908', '1182713227491147776', '358421669603311616', '1174041358995042375', '385538724592746496', '1124358970618953818', '428054228511227914', '422169383972896768', '1234262945350025246', '363430548028522496', '359509332490059776', '358420454764969994', '1124353632758939688', '363413834301571072', '1162076274622222346', '359509759642042378', '477152881196269569', '449806905901056012', '569253958967885828', '940810636273795162', '359510095811444736', '1245451463736692857', '356887282982191114', '1124351876033425529', '363411421553360896', '1162151882039504916', '1067554911358832721', '1140238527980916757', '359801269008859136', '1272842103910699040', '1276737795012165766'],
    ei = ['700136079562375258', '356875570916753438', '356876176465199104', '356875988589740042', '356877880938070016'],
    ea = {
        AGE_OF_EMPIRES_2: '720771660768084008',
        VALORANT: '700136079562375258',
        HELLDIVERS_2: '1205090671527071784',
        APEX: '542075586886107149',
        LETHAL_COMPANY: '1167674267748540516',
        SIMS_4: '359509007423242240',
        ROBLOX: '363445589247131668',
        BALDURS_GATE_3: '1137125502985961543',
        AIMLAB: '506950362461110273',
        HONKAI_STAR_RAIL: '1121201675240210523'
    },
    es = new Map(er.map((e, t, n) => [e, n.length - t]));
((_ = o || (o = {}))[(_.SIZE_12 = 12)] = 'SIZE_12'), (_[(_.SIZE_16 = 16)] = 'SIZE_16'), (_[(_.SIZE_24 = 24)] = 'SIZE_24'), (_[(_.SIZE_32 = 32)] = 'SIZE_32'), (_[(_.SIZE_36 = 36)] = 'SIZE_36'), ((h = l || (l = {})).GAME_SPECIFIC = 'game_specific'), (h.GENERIC = 'generic');
let eo = ['CHILL', 'INCLUSIVE', 'EASYGOING', 'CHAOTIC', 'HOMEY', 'DEGENERATE', 'COMPETITIVE', 'FOCUSED', 'WELCOMING', 'MATURE', 'HELPFUL', 'RAIDING', 'POSITIVE', 'SOUPY', 'DEDICATED', 'COZY', 'SOCIAL', 'SILLY', 'CRUNCHY', 'PRO', 'EPIC', 'CREATIVE', 'LIGHTHEARTED', 'GRINDY', 'INVITING', 'FUNNY', 'FUNLOVING', 'NERDY', 'HYPE', 'MUSICAL', 'BASED', 'BRAINROT', 'HYDRATED', 'INQUISITIVE', 'LIFELONG', 'SLEEPY', 'CASUAL', 'SUPPORTIVE', 'LOUD', 'TOASTY', 'FERAL', 'UPBEAT'];
