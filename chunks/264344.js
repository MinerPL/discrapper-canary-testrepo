e = n.nmd(e),
  function() {
var r = {
    function: !0,
    object: !0
  },
  i = r[typeof window] && window || this,
  a = r[typeof t] && t,
  s = r.object && e && !e.nodeType && e,
  o = a && s && 'object' == typeof n.g && n.g;
o && (o.global === o || o.window === o || o.self === o) && (i = o);
var l = 9007199254740991,
  u = /\bOpera/,
  c = Object.prototype,
  d = c.hasOwnProperty,
  _ = c.toString;

function E(e) {
  return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
}

function f(e) {
  return e = T(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : E(e);
}

function h(e, t) {
  for (var n in e)
    d.call(e, n) && t(e[n], n, e);
}

function p(e) {
  return null == e ? E(e) : _.call(e).slice(8, -1);
}

function m(e) {
  return String(e).replace(/([ -])(?!$)/g, '$1?');
}

function I(e, t) {
  var n = null;
  return ! function(e, t) {
    var n = -1,
      r = e ? e.length : 0;
    if ('number' == typeof r && r > -1 && r <= l)
      for (; ++n < r;)
        t(e[n], n, e);
    else
      h(e, t);
  }(e, function(r, i) {
    n = t(n, r, i, e);
  }), n;
}

function T(e) {
  return String(e).replace(/^ +| +$/g, '');
}
var g = function e(t) {
  var n, r, a, s, o, l = i,
    c = t && 'object' == typeof t && 'String' != p(t);
  c && (l = t, t = null);
  var d = l.navigator || {},
    E = d.userAgent || '';
  t || (t = E);
  var g = c ? !!d.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test(_.toString()),
    S = 'Object',
    A = c ? S : 'ScriptBridgingProxyObject',
    N = c ? S : 'Environment',
    v = c && l.java ? 'JavaPackage' : p(l.java),
    O = c ? S : 'RuntimeObject',
    R = /\bJava/.test(v) && l.java,
    C = R && p(l.environment) == N,
    y = R ? 'a' : 'α',
    D = R ? 'b' : 'β',
    L = l.document || {},
    b = l.operamini || l.opera,
    M = u.test(M = c && b ? b['[[Class]]'] : p(b)) ? M : b = null,
    P = t,
    U = [],
    w = null,
    x = t == E,
    G = x && b && 'function' == typeof b.version && b.version(),
    k = function(e) {
      return I(e, function(e, n) {
        return e || RegExp('\\b' + (n.pattern || m(n)) + '\\b', 'i').exec(t) && (n.label || n);
      });
    }([{
        label: 'EdgeHTML',
        pattern: 'Edge'
      },
      'Trident',
      {
        label: 'WebKit',
        pattern: 'AppleWebKit'
      },
      'iCab',
      'Presto',
      'NetFront',
      'Tasman',
      'KHTML',
      'Gecko'
    ]),
    B = function(e) {
      return I(e, function(e, n) {
        return e || RegExp('\\b' + (n.pattern || m(n)) + '\\b', 'i').exec(t) && (n.label || n);
      });
    }([
      'Adobe AIR',
      'Arora',
      'Avant Browser',
      'Breach',
      'Camino',
      'Electron',
      'Epiphany',
      'Fennec',
      'Flock',
      'Galeon',
      'GreenBrowser',
      'iCab',
      'Iceweasel',
      'K-Meleon',
      'Konqueror',
      'Lunascape',
      'Maxthon',
      {
        label: 'Microsoft Edge',
        pattern: '(?:Edge|Edg|EdgA|EdgiOS)'
      },
      'Midori',
      'Nook Browser',
      'PaleMoon',
      'PhantomJS',
      'Raven',
      'Rekonq',
      'RockMelt',
      {
        label: 'Samsung Internet',
        pattern: 'SamsungBrowser'
      },
      'SeaMonkey',
      {
        label: 'Silk',
        pattern: '(?:Cloud9|Silk-Accelerated)'
      },
      'Sleipnir',
      'SlimBrowser',
      {
        label: 'SRWare Iron',
        pattern: 'Iron'
      },
      'Sunrise',
      'Swiftfox',
      'Vivaldi',
      'Waterfox',
      'WebPositive',
      {
        label: 'Yandex Browser',
        pattern: 'YaBrowser'
      },
      {
        label: 'UC Browser',
        pattern: 'UCBrowser'
      },
      'Opera Mini',
      {
        label: 'Opera Mini',
        pattern: 'OPiOS'
      },
      'Opera',
      {
        label: 'Opera',
        pattern: 'OPR'
      },
      'Chromium',
      'Chrome',
      {
        label: 'Chrome',
        pattern: '(?:HeadlessChrome)'
      },
      {
        label: 'Chrome Mobile',
        pattern: '(?:CriOS|CrMo)'
      },
      {
        label: 'Firefox',
        pattern: '(?:Firefox|Minefield)'
      },
      {
        label: 'Firefox for iOS',
        pattern: 'FxiOS'
      },
      {
        label: 'IE',
        pattern: 'IEMobile'
      },
      {
        label: 'IE',
        pattern: 'MSIE'
      },
      'Safari'
    ]),
    F = Z([{
        label: 'BlackBerry',
        pattern: 'BB10'
      },
      'BlackBerry',
      {
        label: 'Galaxy S',
        pattern: 'GT-I9000'
      },
      {
        label: 'Galaxy S2',
        pattern: 'GT-I9100'
      },
      {
        label: 'Galaxy S3',
        pattern: 'GT-I9300'
      },
      {
        label: 'Galaxy S4',
        pattern: 'GT-I9500'
      },
      {
        label: 'Galaxy S5',
        pattern: 'SM-G900'
      },
      {
        label: 'Galaxy S6',
        pattern: 'SM-G920'
      },
      {
        label: 'Galaxy S6 Edge',
        pattern: 'SM-G925'
      },
      {
        label: 'Galaxy S7',
        pattern: 'SM-G930'
      },
      {
        label: 'Galaxy S7 Edge',
        pattern: 'SM-G935'
      },
      'Google TV',
      'Lumia',
      'iPad',
      'iPod',
      'iPhone',
      'Kindle',
      {
        label: 'Kindle Fire',
        pattern: '(?:Cloud9|Silk-Accelerated)'
      },
      'Nexus',
      'Nook',
      'PlayBook',
      'PlayStation Vita',
      'PlayStation',
      'TouchPad',
      'Transformer',
      {
        label: 'Wii U',
        pattern: 'WiiU'
      },
      'Wii',
      'Xbox One',
      {
        label: 'Xbox 360',
        pattern: 'Xbox'
      },
      'Xoom'
    ]),
    V = function(e) {
      return I(e, function(e, n, r) {
        return e || (n[F] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(F)] || RegExp('\\b' + m(r) + '(?:\\b|\\w*\\d)', 'i').exec(t)) && r;
      });
    }({
      Apple: {
        iPad: 1,
        iPhone: 1,
        iPod: 1
      },
      Alcatel: {},
      Archos: {},
      Amazon: {
        Kindle: 1,
        'Kindle Fire': 1
      },
      Asus: {
        Transformer: 1
      },
      'Barnes & Noble': {
        Nook: 1
      },
      BlackBerry: {
        PlayBook: 1
      },
      Google: {
        'Google TV': 1,
        Nexus: 1
      },
      HP: {
        TouchPad: 1
      },
      HTC: {},
      Huawei: {},
      Lenovo: {},
      LG: {},
      Microsoft: {
        Xbox: 1,
        'Xbox One': 1
      },
      Motorola: {
        Xoom: 1
      },
      Nintendo: {
        'Wii U': 1,
        Wii: 1
      },
      Nokia: {
        Lumia: 1
      },
      Oppo: {},
      Samsung: {
        'Galaxy S': 1,
        'Galaxy S2': 1,
        'Galaxy S3': 1,
        'Galaxy S4': 1
      },
      Sony: {
        PlayStation: 1,
        'PlayStation Vita': 1
      },
      Xiaomi: {
        Mi: 1,
        Redmi: 1
      }
    }),
    H = function(e) {
      return I(e, function(e, n) {
        var r, i, a, s, o = n.pattern || m(n);
        if (!e && (e = RegExp('\\b' + o + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(t))) {
          ;
          r = e, i = o, a = n.label || n, s = {
            '10.0': '10',
            '6.4': '10 Technical Preview',
            '6.3': '8.1',
            '6.2': '8',
            '6.1': 'Server 2008 R2 / 7',
            '6.0': 'Server 2008 / Vista',
            '5.2': 'Server 2003 / XP 64-bit',
            '5.1': 'XP',
            '5.01': '2000 SP1',
            '5.0': '2000',
            '4.0': 'NT',
            '4.90': 'ME'
          }, i && a && /^Win/i.test(r) && !/^Windows Phone /i.test(r) && (s = s[/[\d.]+$/.exec(r)]) && (r = 'Windows ' + s), r = String(r), i && a && (r = r.replace(RegExp(i, 'i'), a)), e = r = f(r.replace(/ ce$/i, ' CE').replace(/\bhpw/i, 'web').replace(/\bMacintosh\b/, 'Mac OS').replace(/_PowerPC\b/i, ' OS').replace(/\b(OS X) [^ \d]+/i, '$1').replace(/\bMac (OS X)\b/, '$1').replace(/\/(\d)/, ' $1').replace(/_/g, '.').replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '').replace(/\bx86\.64\b/gi, 'x86_64').replace(/\b(Windows Phone) OS\b/, '$1').replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1').split(' on ')[0]);
        }
        return e;
      });
    }([
      'Windows Phone',
      'KaiOS',
      'Android',
      'CentOS',
      {
        label: 'Chrome OS',
        pattern: 'CrOS'
      },
      'Debian',
      {
        label: 'DragonFly BSD',
        pattern: 'DragonFly'
      },
      'Fedora',
      'FreeBSD',
      'Gentoo',
      'Haiku',
      'Kubuntu',
      'Linux Mint',
      'OpenBSD',
      'Red Hat',
      'SuSE',
      'Ubuntu',
      'Xubuntu',
      'Cygwin',
      'Symbian OS',
      'hpwOS',
      'webOS ',
      'webOS',
      'Tablet OS',
      'Tizen',
      'Linux',
      'Mac OS X',
      'Macintosh',
      'Mac',
      'Windows 98;',
      'Windows '
    ]);

  function Z(e) {
    return I(e, function(e, n) {
      var r = n.pattern || m(n);
      return !e && (e = RegExp('\\b' + r + ' *\\d+[.\\w_]*', 'i').exec(t) || RegExp('\\b' + r + ' *\\w+-[\\w]*', 'i').exec(t) || RegExp('\\b' + r + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(t)) && ((e = String(n.label && !RegExp(r, 'i').test(n.label) ? n.label : e).split('/'))[1] && !/[\d.]+/.test(e[0]) && (e[0] += ' ' + e[1]), n = n.label || n, e = f(e[0].replace(RegExp(r, 'i'), n).replace(RegExp('; *(?:' + n + '[_-])?', 'i'), ' ').replace(RegExp('(' + n + ')[-_.]?(\\w)', 'i'), '$1 $2'))), e;
    });
  }

  function Y(e) {
    return I(e, function(e, n) {
      return e || (RegExp(n + '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(t) || 0)[1] || null;
    });
  }
  if (k && (k = [k]), /\bAndroid\b/.test(H) && !F && (s = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(t)) && (F = T(s[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, '') || null), V && !F ? F = Z([V]) : V && F && (F = F.replace(RegExp('^(' + m(V) + ')[-_.\\s]', 'i'), V + ' ').replace(RegExp('^(' + m(V) + ')[-_.]?(\\w)', 'i'), V + ' $2')), (s = /\bGoogle TV\b/.exec(F)) && (F = s[0]), /\bSimulator\b/i.test(t) && (F = (F ? F + ' ' : '') + 'Simulator'), 'Opera Mini' == B && /\bOPiOS\b/.test(t) && U.push('running in Turbo/Uncompressed mode'), 'IE' == B && /\blike iPhone OS\b/.test(t) ? (V = (s = e(t.replace(/like iPhone OS/, ''))).manufacturer, F = s.product) : /^iP/.test(F) ? (B || (B = 'Safari'), H = 'iOS' + ((s = / OS ([\d_]+)/i.exec(t)) ? ' ' + s[1].replace(/_/g, '.') : '')) : 'Konqueror' == B && /^Linux\b/i.test(H) ? H = 'Kubuntu' : V && 'Google' != V && (/Chrome/.test(B) && !/\bMobile Safari\b/i.test(t) || /\bVita\b/.test(F)) || /\bAndroid\b/.test(H) && /^Chrome/.test(B) && /\bVersion\//i.test(t) ? (B = 'Android Browser', H = /\bAndroid\b/.test(H) ? H : 'Android') : 'Silk' == B ? (!/\bMobi/i.test(t) && (H = 'Android', U.unshift('desktop mode')), /Accelerated *= *true/i.test(t) && U.unshift('accelerated')) : 'UC Browser' == B && /\bUCWEB\b/.test(t) ? U.push('speed mode') : 'PaleMoon' == B && (s = /\bFirefox\/([\d.]+)\b/.exec(t)) ? U.push('identifying as Firefox ' + s[1]) : 'Firefox' == B && (s = /\b(Mobile|Tablet|TV)\b/i.exec(t)) ? (H || (H = 'Firefox OS'), F || (F = s[1])) : !B || (s = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(B)) ? (B && !F && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(s + '/') + 8)) && (B = null), (s = F || V || H) && (F || V || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(H)) && (B = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(H) ? H : s) + ' Browser')) : 'Electron' == B && (s = (/\bChrome\/([\d.]+)\b/.exec(t) || 0)[1]) && U.push('Chromium ' + s), !G && (G = Y([
      '(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)',
      'Version',
      m(B),
      '(?:Firefox|Minefield|NetFront)'
    ])), (s = 'iCab' == k && parseFloat(G) > 3 && 'WebKit' || /\bOpera\b/.test(B) && (/\bOPR\b/.test(t) ? 'Blink' : 'Presto') || /\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test(k) && 'WebKit' || !k && /\bMSIE\b/i.test(t) && ('Mac OS' == H ? 'Tasman' : 'Trident') || 'WebKit' == k && /\bPlayStation\b(?! Vita\b)/i.test(B) && 'NetFront') && (k = [s]), 'IE' == B && (s = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1]) ? (B += ' Mobile', H = 'Windows Phone ' + (/\+$/.test(s) ? s : s + '.x'), U.unshift('desktop mode')) : /\bWPDesktop\b/i.test(t) ? (B = 'IE Mobile', H = 'Windows Phone 8.x', U.unshift('desktop mode'), G || (G = (/\brv:([\d.]+)/.exec(t) || 0)[1])) : 'IE' != B && 'Trident' == k && (s = /\brv:([\d.]+)/.exec(t)) && (B && U.push('identifying as ' + B + (G ? ' ' + G : '')), B = 'IE', G = s[1]), x) {
    ;
    if (r = 'global', a = null != (n = l) ? typeof n[r] : 'number', /^(?:boolean|number|string|undefined)$/.test(a) || 'object' == a && !n[r])
      p(s = l.runtime) == A ? (B = 'Adobe AIR', H = s.flash.system.Capabilities.os) : p(s = l.phantom) == O ? (B = 'PhantomJS', G = (s = s.version || null) && s.major + '.' + s.minor + '.' + s.patch) : 'number' == typeof L.documentMode && (s = /\bTrident\/(\d+)/i.exec(t)) ? (G = [
        G,
        L.documentMode
      ], (s = +s[1] + 4) != G[1] && (U.push('IE ' + G[1] + ' mode'), k && (k[1] = ''), G[1] = s), G = 'IE' == B ? String(G[1].toFixed(1)) : G[0]) : 'number' == typeof L.documentMode && /^(?:Chrome|Firefox)\b/.test(B) && (U.push('masking as ' + B + ' ' + G), B = 'IE', G = '11.0', k = ['Trident'], H = 'Windows');
    else if (R && (P = (s = R.lang.System).getProperty('os.arch'), H = H || s.getProperty('os.name') + ' ' + s.getProperty('os.version')), C) {
      try {
        G = l.require('ringo/engine').version.join('.'), B = 'RingoJS';
      } catch (e) {
        (s = l.system) && s.global.system == l.system && (B = 'Narwhal', H || (H = s[0].os || null));
      }!B && (B = 'Rhino');
    } else
      'object' == typeof l.process && !l.process.browser && (s = l.process) && ('object' == typeof s.versions && ('string' == typeof s.versions.electron ? (U.push('Node ' + s.versions.node), B = 'Electron', G = s.versions.electron) : 'string' == typeof s.versions.nw && (U.push('Chromium ' + G, 'Node ' + s.versions.node), B = 'NW.js', G = s.versions.nw)), !B && (B = 'Node.js', P = s.arch, H = s.platform, G = (G = /[\d.]+/.exec(s.version)) ? G[0] : null));
    H = H && f(H);
  }
  if (G && (s = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(G) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ';' + (x && d.appMinorVersion)) || /\bMinefield\b/i.test(t) && 'a') && (w = /b/i.test(s) ? 'beta' : 'alpha', G = G.replace(RegExp(s + '\\+?$'), '') + ('beta' == w ? D : y) + (/\d+\+?/.exec(s) || '')), 'Fennec' == B || 'Firefox' == B && /\b(?:Android|Firefox OS|KaiOS)\b/.test(H))
    B = 'Firefox Mobile';
  else if ('Maxthon' == B && G)
    G = G.replace(/\.[\d.]+/, '.x');
  else if (/\bXbox\b/i.test(F))
    'Xbox 360' == F && (H = null), 'Xbox 360' == F && /\bIEMobile\b/.test(t) && U.unshift('mobile mode');
  else if ((/^(?:Chrome|IE|Opera)$/.test(B) || B && !F && !/Browser|Mobi/.test(B)) && ('Windows CE' == H || /Mobi/i.test(t)))
    B += ' Mobile';
  else if ('IE' == B && x)
    try {
      null === l.external && U.unshift('platform preview');
    } catch (e) {
      U.unshift('embedded');
    }
  else
    (/\bBlackBerry\b/.test(F) || /\bBB10\b/.test(t)) && (s = (RegExp(F.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(t) || 0)[1] || G) ? (H = ((s = [
      s,
      /BB10/.test(t)
    ])[1] ? (F = null, V = 'BlackBerry') : 'Device Software') + ' ' + s[0], G = null) : this != h && 'Wii' != F && (x && b || /Opera/.test(B) && /\b(?:MSIE|Firefox)\b/i.test(t) || 'Firefox' == B && /\bOS X (?:\d+\.){2,}/.test(H) || 'IE' == B && (H && !/^Win/.test(H) && G > 5.5 || /\bWindows XP\b/.test(H) && G > 8 || 8 == G && !/\bTrident\b/.test(t))) && !u.test(s = e.call(h, t.replace(u, '') + ';')) && s.name && (s = 'ing as ' + s.name + ((s = s.version) ? ' ' + s : ''), u.test(B) ? (/\bIE\b/.test(s) && 'Mac OS' == H && (H = null), s = 'identify' + s) : (s = 'mask' + s, B = M ? f(M.replace(/([a-z])([A-Z])/g, '$1 $2')) : 'Opera', /\bIE\b/.test(s) && (H = null), !x && (G = null)), k = ['Presto'], U.push(s));
  (s = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) && (s = [
    parseFloat(s.replace(/\.(\d)$/, '.0$1')),
    s
  ], 'Safari' == B && '+' == s[1].slice(-1) ? (B = 'WebKit Nightly', w = 'alpha', G = s[1].slice(0, -1)) : (G == s[1] || G == (s[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1])) && (G = null), s[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(t) || 0)[1], 537.36 == s[0] && 537.36 == s[2] && parseFloat(s[1]) >= 28 && 'WebKit' == k && (k = ['Blink']), x && (g || s[1]) ? (k && (k[1] = 'like Chrome'), s = s[1] || ((s = s[0]) < 530 ? 1 : s < 532 ? 2 : s < 532.05 ? 3 : s < 533 ? 4 : s < 534.03 ? 5 : s < 534.07 ? 6 : s < 534.1 ? 7 : s < 534.13 ? 8 : s < 534.16 ? 9 : s < 534.24 ? 10 : s < 534.3 ? 11 : s < 535.01 ? 12 : s < 535.02 ? '13+' : s < 535.07 ? 15 : s < 535.11 ? 16 : s < 535.19 ? 17 : s < 536.05 ? 18 : s < 536.1 ? 19 : s < 537.01 ? 20 : s < 537.11 ? '21+' : s < 537.13 ? 23 : s < 537.18 ? 24 : s < 537.24 ? 25 : s < 537.36 ? 26 : 'Blink' != k ? '27' : '28')) : (k && (k[1] = 'like Safari'), s = (s = s[0]) < 400 ? 1 : s < 500 ? 2 : s < 526 ? 3 : s < 533 ? 4 : s < 534 ? '4+' : s < 535 ? 5 : s < 537 ? 6 : s < 538 ? 7 : s < 601 ? 8 : s < 602 ? 9 : s < 604 ? 10 : s < 606 ? 11 : s < 608 ? 12 : '12'), k && (k[1] += ' ' + (s += 'number' == typeof s ? '.x' : /[.+]/.test(s) ? '' : '+')), 'Safari' == B && (!G || parseInt(G) > 45) ? G = s : 'Chrome' == B && /\bHeadlessChrome/i.test(t) && U.unshift('headless')), 'Opera' == B && (s = /\bzbov|zvav$/.exec(H)) ? (B += ' ', U.unshift('desktop mode'), 'zvav' == s ? (B += 'Mini', G = null) : B += 'Mobile', H = H.replace(RegExp(' *' + s + '$'), '')) : 'Safari' == B && /\bChrome\b/.exec(k && k[1]) ? (U.unshift('desktop mode'), B = 'Chrome Mobile', G = null, /\bOS X\b/.test(H) ? (V = 'Apple', H = 'iOS 4.3+') : H = null) : /\bSRWare Iron\b/.test(B) && !G && (G = Y('Chrome')), G && 0 == G.indexOf(s = /[\d.]+$/.exec(H)) && t.indexOf('/' + s + '-') > -1 && (H = T(H.replace(s, ''))), H && -1 != H.indexOf(B) && !RegExp(B + ' OS').test(H) && (H = H.replace(RegExp(' *' + m(B) + ' *'), '')), k && !/\b(?:Avant|Nook)\b/.test(B) && (/Browser|Lunascape|Maxthon/.test(B) || 'Safari' != B && /^iOS/.test(H) && /\bSafari\b/.test(k[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(B) && k[1]) && (s = k[k.length - 1]) && U.push(s), U.length && (U = ['(' + U.join('; ') + ')']), V && F && 0 > F.indexOf(V) && U.push('on ' + V), F && U.push((/^on /.test(U[U.length - 1]) ? '' : 'on ') + F), H && (o = (s = / ([\d.+]+)$/.exec(H)) && '/' == H.charAt(H.length - s[0].length - 1), H = {
    architecture: 32,
    family: s && !o ? H.replace(s[0], '') : H,
    version: s ? s[1] : null,
    toString: function() {
      var e = this.version;
      return this.family + (e && !o ? ' ' + e : '') + (64 == this.architecture ? ' 64-bit' : '');
    }
  }), (s = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(P)) && !/\bi686\b/i.test(P) ? (H && (H.architecture = 64, H.family = H.family.replace(RegExp(' *' + s), '')), B && (/\bWOW64\b/i.test(t) || x && /\w(?:86|32)$/.test(d.cpuClass || d.platform) && !/\bWin64; x64\b/i.test(t)) && U.unshift('32-bit')) : H && /^OS X/.test(H.family) && 'Chrome' == B && parseFloat(G) >= 39 && (H.architecture = 64), t || (t = null);
  var j = {};
  return j.description = t, j.layout = k && k[0], j.manufacturer = V, j.name = B, j.prerelease = w, j.product = F, j.ua = t, j.version = B && G, j.os = H || {
    architecture: null,
    family: null,
    version: null,
    toString: function() {
      return 'null';
    }
  }, j.parse = e, j.toString = function() {
    return this.description || '';
  }, j.version && U.unshift(G), j.name && U.unshift(B), H && B && !(H == String(H).split(' ')[0] && (H == B.split(' ')[0] || F)) && U.push(F ? '(' + H + ')' : 'on ' + H), U.length && (j.description = U.join(' ')), j;
}();
'function' == typeof define && 'object' == typeof define.amd && define.amd ? (i.platform = g, define(function() {
  return g;
})) : a && s ? h(g, function(e, t) {
  a[t] = e;
}) : i.platform = g;
  }.call(this);