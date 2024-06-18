e = n.nmd(e), (function() {
  "use strict";
  var r = {
      function: !0,
      object: !0
    },
    i = r[typeof window] && window || this,
    a = r[typeof t] && t,
    o = r.object && e && !e.nodeType && e,
    s = a && o && "object" == typeof n.g && n.g;
  s && (s.global === s || s.window === s || s.self === s) && (i = s);
  var u = 9007199254740991,
    c = /\bOpera/,
    l = Object.prototype,
    d = l.hasOwnProperty,
    f = l.toString;

  function p(e) {
    return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
  }

  function h(e) {
    return e = v(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : p(e)
  }

  function m(e, t) {
    for (var n in e) d.call(e, n) && t(e[n], n, e)
  }

  function g(e) {
    return null == e ? p(e) : f.call(e).slice(8, -1)
  }

  function _(e) {
    return String(e).replace(/([ -])(?!$)/g, "$1?")
  }

  function b(e, t) {
    var n = null;
    return ! function(e, t) {
      var n = -1,
        r = e ? e.length : 0;
      if ("number" == typeof r && r > -1 && r <= u)
        for (; ++n < r;) t(e[n], n, e);
      else m(e, t)
    }(e, function(r, i) {
      n = t(n, r, i, e)
    }), n
  }

  function v(e) {
    return String(e).replace(/^ +| +$/g, "")
  }
  var y = function e(t) {
    var n, r, a, o, s, u = i,
      l = t && "object" == typeof t && "String" != g(t);
    l && (u = t, t = null);
    var d = u.navigator || {},
      p = d.userAgent || "";
    t || (t = p);
    var y = l ? !!d.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test(f.toString()),
      E = "Object",
      S = l ? E : "ScriptBridgingProxyObject",
      x = l ? E : "Environment",
      w = l && u.java ? "JavaPackage" : g(u.java),
      C = l ? E : "RuntimeObject",
      T = /\bJava/.test(w) && u.java,
      D = T && g(u.environment) == x,
      M = T ? "a" : "α",
      O = T ? "b" : "β",
      A = u.document || {},
      k = u.operamini || u.opera,
      R = c.test(R = l && k ? k["[[Class]]"] : g(k)) ? R : k = null,
      N = t,
      I = [],
      L = null,
      P = t == p,
      B = P && k && "function" == typeof k.version && k.version(),
      F = function(e) {
        return b(e, function(e, n) {
          return e || RegExp("\\b" + (n.pattern || _(n)) + "\\b", "i").exec(t) && (n.label || n)
        })
      }([{
        label: "EdgeHTML",
        pattern: "Edge"
      }, "Trident", {
        label: "WebKit",
        pattern: "AppleWebKit"
      }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
      U = function(e) {
        return b(e, function(e, n) {
          return e || RegExp("\\b" + (n.pattern || _(n)) + "\\b", "i").exec(t) && (n.label || n)
        })
      }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
        label: "Microsoft Edge",
        pattern: "Edge"
      }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
        label: "Samsung Internet",
        pattern: "SamsungBrowser"
      }, "SeaMonkey", {
        label: "Silk",
        pattern: "(?:Cloud9|Silk-Accelerated)"
      }, "Sleipnir", "SlimBrowser", {
        label: "SRWare Iron",
        pattern: "Iron"
      }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
        label: "Opera Mini",
        pattern: "OPiOS"
      }, "Opera", {
        label: "Opera",
        pattern: "OPR"
      }, "Chrome", {
        label: "Chrome Mobile",
        pattern: "(?:CriOS|CrMo)"
      }, {
        label: "Firefox",
        pattern: "(?:Firefox|Minefield)"
      }, {
        label: "Firefox for iOS",
        pattern: "FxiOS"
      }, {
        label: "IE",
        pattern: "IEMobile"
      }, {
        label: "IE",
        pattern: "MSIE"
      }, "Safari"]),
      j = H([{
        label: "BlackBerry",
        pattern: "BB10"
      }, "BlackBerry", {
        label: "Galaxy S",
        pattern: "GT-I9000"
      }, {
        label: "Galaxy S2",
        pattern: "GT-I9100"
      }, {
        label: "Galaxy S3",
        pattern: "GT-I9300"
      }, {
        label: "Galaxy S4",
        pattern: "GT-I9500"
      }, {
        label: "Galaxy S5",
        pattern: "SM-G900"
      }, {
        label: "Galaxy S6",
        pattern: "SM-G920"
      }, {
        label: "Galaxy S6 Edge",
        pattern: "SM-G925"
      }, {
        label: "Galaxy S7",
        pattern: "SM-G930"
      }, {
        label: "Galaxy S7 Edge",
        pattern: "SM-G935"
      }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
        label: "Kindle Fire",
        pattern: "(?:Cloud9|Silk-Accelerated)"
      }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
        label: "Wii U",
        pattern: "WiiU"
      }, "Wii", "Xbox One", {
        label: "Xbox 360",
        pattern: "Xbox"
      }, "Xoom"]),
      Y = function(e) {
        return b(e, function(e, n, r) {
          return e || (n[j] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(j)] || RegExp("\\b" + _(r) + "(?:\\b|\\w*\\d)", "i").exec(t)) && r
        })
      }({
        Apple: {
          iPad: 1,
          iPhone: 1,
          iPod: 1
        },
        Archos: {},
        Amazon: {
          Kindle: 1,
          "Kindle Fire": 1
        },
        Asus: {
          Transformer: 1
        },
        "Barnes & Noble": {
          Nook: 1
        },
        BlackBerry: {
          PlayBook: 1
        },
        Google: {
          "Google TV": 1,
          Nexus: 1
        },
        HP: {
          TouchPad: 1
        },
        HTC: {},
        LG: {},
        Microsoft: {
          Xbox: 1,
          "Xbox One": 1
        },
        Motorola: {
          Xoom: 1
        },
        Nintendo: {
          "Wii U": 1,
          Wii: 1
        },
        Nokia: {
          Lumia: 1
        },
        Samsung: {
          "Galaxy S": 1,
          "Galaxy S2": 1,
          "Galaxy S3": 1,
          "Galaxy S4": 1
        },
        Sony: {
          PlayStation: 1,
          "PlayStation Vita": 1
        }
      }),
      z = function(e) {
        return b(e, function(e, n) {
          var r, i, a, o, s = n.pattern || _(n);
          if (!e && (e = RegExp("\\b" + s + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(t))) {
            ;
            r = e, i = s, a = n.label || n, o = {
              "10.0": "10",
              "6.4": "10 Technical Preview",
              "6.3": "8.1",
              "6.2": "8",
              "6.1": "Server 2008 R2 / 7",
              "6.0": "Server 2008 / Vista",
              "5.2": "Server 2003 / XP 64-bit",
              "5.1": "XP",
              "5.01": "2000 SP1",
              "5.0": "2000",
              "4.0": "NT",
              "4.90": "ME"
            }, i && a && /^Win/i.test(r) && !/^Windows Phone /i.test(r) && (o = o[/[\d.]+$/.exec(r)]) && (r = "Windows " + o), r = String(r), i && a && (r = r.replace(RegExp(i, "i"), a)), e = r = h(r.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
          }
          return e
        })
      }(["Windows Phone", "Android", "CentOS", {
        label: "Chrome OS",
        pattern: "CrOS"
      }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);

    function H(e) {
      return b(e, function(e, n) {
        var r = n.pattern || _(n);
        return !e && (e = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(t) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(t) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(t)) && ((e = String(n.label && !RegExp(r, "i").test(n.label) ? n.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), n = n.label || n, e = h(e[0].replace(RegExp(r, "i"), n).replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ").replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"))), e
      })
    }
    if (F && (F = [F]), Y && !j && (j = H([Y])), (o = /\bGoogle TV\b/.exec(j)) && (j = o[0]), /\bSimulator\b/i.test(t) && (j = (j ? j + " " : "") + "Simulator"), "Opera Mini" == U && /\bOPiOS\b/.test(t) && I.push("running in Turbo/Uncompressed mode"), "IE" == U && /\blike iPhone OS\b/.test(t) ? (Y = (o = e(t.replace(/like iPhone OS/, ""))).manufacturer, j = o.product) : /^iP/.test(j) ? (U || (U = "Safari"), z = "iOS" + ((o = / OS ([\d_]+)/i.exec(t)) ? " " + o[1].replace(/_/g, ".") : "")) : "Konqueror" != U || /buntu/i.test(z) ? Y && "Google" != Y && (/Chrome/.test(U) && !/\bMobile Safari\b/i.test(t) || /\bVita\b/.test(j)) || /\bAndroid\b/.test(z) && /^Chrome/.test(U) && /\bVersion\//i.test(t) ? (U = "Android Browser", z = /\bAndroid\b/.test(z) ? z : "Android") : "Silk" == U ? (!/\bMobi/i.test(t) && (z = "Android", I.unshift("desktop mode")), /Accelerated *= *true/i.test(t) && I.unshift("accelerated")) : "PaleMoon" == U && (o = /\bFirefox\/([\d.]+)\b/.exec(t)) ? I.push("identifying as Firefox " + o[1]) : "Firefox" == U && (o = /\b(Mobile|Tablet|TV)\b/i.exec(t)) ? (z || (z = "Firefox OS"), j || (j = o[1])) : !U || (o = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(U)) ? (U && !j && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(o + "/") + 8)) && (U = null), (o = j || Y || z) && (j || Y || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(z)) && (U = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(z) ? z : o) + " Browser")) : "Electron" == U && (o = (/\bChrome\/([\d.]+)\b/.exec(t) || 0)[1]) && I.push("Chromium " + o) : z = "Kubuntu", !B) B = b(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", _(U), "(?:Firefox|Minefield|NetFront)"], function(e, n) {
      return e || (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(t) || 0)[1] || null
    });
    if ((o = "iCab" == F && parseFloat(B) > 3 && "WebKit" || /\bOpera\b/.test(U) && (/\bOPR\b/.test(t) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test(F) && "WebKit" || !F && /\bMSIE\b/i.test(t) && ("Mac OS" == z ? "Tasman" : "Trident") || "WebKit" == F && /\bPlayStation\b(?! Vita\b)/i.test(U) && "NetFront") && (F = [o]), "IE" == U && (o = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1]) ? (U += " Mobile", z = "Windows Phone " + (/\+$/.test(o) ? o : o + ".x"), I.unshift("desktop mode")) : /\bWPDesktop\b/i.test(t) ? (U = "IE Mobile", z = "Windows Phone 8.x", I.unshift("desktop mode"), B || (B = (/\brv:([\d.]+)/.exec(t) || 0)[1])) : "IE" != U && "Trident" == F && (o = /\brv:([\d.]+)/.exec(t)) && (U && I.push("identifying as " + U + (B ? " " + B : "")), U = "IE", B = o[1]), P) {
      ;
      if (r = "global", a = null != (n = u) ? typeof n[r] : "number", /^(?:boolean|number|string|undefined)$/.test(a) || "object" == a && !n[r]) g(o = u.runtime) == S ? (U = "Adobe AIR", z = o.flash.system.Capabilities.os) : g(o = u.phantom) == C ? (U = "PhantomJS", B = (o = o.version || null) && o.major + "." + o.minor + "." + o.patch) : "number" == typeof A.documentMode && (o = /\bTrident\/(\d+)/i.exec(t)) ? (B = [B, A.documentMode], (o = +o[1] + 4) != B[1] && (I.push("IE " + B[1] + " mode"), F && (F[1] = ""), B[1] = o), B = "IE" == U ? String(B[1].toFixed(1)) : B[0]) : "number" == typeof A.documentMode && /^(?:Chrome|Firefox)\b/.test(U) && (I.push("masking as " + U + " " + B), U = "IE", B = "11.0", F = ["Trident"], z = "Windows");
      else if (T && (N = (o = T.lang.System).getProperty("os.arch"), z = z || o.getProperty("os.name") + " " + o.getProperty("os.version")), D) {
        try {
          B = u.require("ringo/engine").version.join("."), U = "RingoJS"
        } catch (e) {
          (o = u.system) && o.global.system == u.system && (U = "Narwhal", z || (z = o[0].os || null))
        }!U && (U = "Rhino")
      } else "object" == typeof u.process && !u.process.browser && (o = u.process) && ("object" == typeof o.versions && ("string" == typeof o.versions.electron ? (I.push("Node " + o.versions.node), U = "Electron", B = o.versions.electron) : "string" == typeof o.versions.nw && (I.push("Chromium " + B, "Node " + o.versions.node), U = "NW.js", B = o.versions.nw)), !U && (U = "Node.js", N = o.arch, z = o.platform, B = (B = /[\d.]+/.exec(o.version)) ? B[0] : null));
      z = z && h(z)
    }
    if (B && (o = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(B) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ";" + (P && d.appMinorVersion)) || /\bMinefield\b/i.test(t) && "a") && (L = /b/i.test(o) ? "beta" : "alpha", B = B.replace(RegExp(o + "\\+?$"), "") + ("beta" == L ? O : M) + (/\d+\+?/.exec(o) || "")), "Fennec" == U || "Firefox" == U && /\b(?:Android|Firefox OS)\b/.test(z)) U = "Firefox Mobile";
    else if ("Maxthon" == U && B) B = B.replace(/\.[\d.]+/, ".x");
    else if (/\bXbox\b/i.test(j)) "Xbox 360" == j && (z = null), "Xbox 360" == j && /\bIEMobile\b/.test(t) && I.unshift("mobile mode");
    else if ((/^(?:Chrome|IE|Opera)$/.test(U) || U && !j && !/Browser|Mobi/.test(U)) && ("Windows CE" == z || /Mobi/i.test(t))) U += " Mobile";
    else if ("IE" == U && P) try {
      null === u.external && I.unshift("platform preview")
    } catch (e) {
      I.unshift("embedded")
    } else(/\bBlackBerry\b/.test(j) || /\bBB10\b/.test(t)) && (o = (RegExp(j.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t) || 0)[1] || B) ? (z = ((o = [o, /BB10/.test(t)])[1] ? (j = null, Y = "BlackBerry") : "Device Software") + " " + o[0], B = null) : this != m && "Wii" != j && (P && k || /Opera/.test(U) && /\b(?:MSIE|Firefox)\b/i.test(t) || "Firefox" == U && /\bOS X (?:\d+\.){2,}/.test(z) || "IE" == U && (z && !/^Win/.test(z) && B > 5.5 || /\bWindows XP\b/.test(z) && B > 8 || 8 == B && !/\bTrident\b/.test(t))) && !c.test(o = e.call(m, t.replace(c, "") + ";")) && o.name && (o = "ing as " + o.name + ((o = o.version) ? " " + o : ""), c.test(U) ? (/\bIE\b/.test(o) && "Mac OS" == z && (z = null), o = "identify" + o) : (o = "mask" + o, U = R ? h(R.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(o) && (z = null), !P && (B = null)), F = ["Presto"], I.push(o));
    (o = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) && (o = [parseFloat(o.replace(/\.(\d)$/, ".0$1")), o], "Safari" == U && "+" == o[1].slice(-1) ? (U = "WebKit Nightly", L = "alpha", B = o[1].slice(0, -1)) : (B == o[1] || B == (o[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1])) && (B = null), o[1] = (/\bChrome\/([\d.]+)/i.exec(t) || 0)[1], 537.36 == o[0] && 537.36 == o[2] && parseFloat(o[1]) >= 28 && "WebKit" == F && (F = ["Blink"]), P && (y || o[1]) ? (F && (F[1] = "like Chrome"), o = o[1] || ((o = o[0]) < 530 ? 1 : o < 532 ? 2 : o < 532.05 ? 3 : o < 533 ? 4 : o < 534.03 ? 5 : o < 534.07 ? 6 : o < 534.1 ? 7 : o < 534.13 ? 8 : o < 534.16 ? 9 : o < 534.24 ? 10 : o < 534.3 ? 11 : o < 535.01 ? 12 : o < 535.02 ? "13+" : o < 535.07 ? 15 : o < 535.11 ? 16 : o < 535.19 ? 17 : o < 536.05 ? 18 : o < 536.1 ? 19 : o < 537.01 ? 20 : o < 537.11 ? "21+" : o < 537.13 ? 23 : o < 537.18 ? 24 : o < 537.24 ? 25 : o < 537.36 ? 26 : "Blink" != F ? "27" : "28")) : (F && (F[1] = "like Safari"), o = (o = o[0]) < 400 ? 1 : o < 500 ? 2 : o < 526 ? 3 : o < 533 ? 4 : o < 534 ? "4+" : o < 535 ? 5 : o < 537 ? 6 : o < 538 ? 7 : o < 601 ? 8 : "8"), F && (F[1] += " " + (o += "number" == typeof o ? ".x" : /[.+]/.test(o) ? "" : "+")), "Safari" == U && (!B || parseInt(B) > 45) && (B = o)), "Opera" == U && (o = /\bzbov|zvav$/.exec(z)) ? (U += " ", I.unshift("desktop mode"), "zvav" == o ? (U += "Mini", B = null) : U += "Mobile", z = z.replace(RegExp(" *" + o + "$"), "")) : "Safari" == U && /\bChrome\b/.exec(F && F[1]) && (I.unshift("desktop mode"), U = "Chrome Mobile", B = null, /\bOS X\b/.test(z) ? (Y = "Apple", z = "iOS 4.3+") : z = null), B && 0 == B.indexOf(o = /[\d.]+$/.exec(z)) && t.indexOf("/" + o + "-") > -1 && (z = v(z.replace(o, ""))), F && !/\b(?:Avant|Nook)\b/.test(U) && (/Browser|Lunascape|Maxthon/.test(U) || "Safari" != U && /^iOS/.test(z) && /\bSafari\b/.test(F[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(U) && F[1]) && (o = F[F.length - 1]) && I.push(o), I.length && (I = ["(" + I.join("; ") + ")"]), Y && j && 0 > j.indexOf(Y) && I.push("on " + Y), j && I.push((/^on /.test(I[I.length - 1]) ? "" : "on ") + j), z && (s = (o = / ([\d.+]+)$/.exec(z)) && "/" == z.charAt(z.length - o[0].length - 1), z = {
      architecture: 32,
      family: o && !s ? z.replace(o[0], "") : z,
      version: o ? o[1] : null,
      toString: function() {
        var e = this.version;
        return this.family + (e && !s ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
      }
    }), (o = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(N)) && !/\bi686\b/i.test(N) ? (z && (z.architecture = 64, z.family = z.family.replace(RegExp(" *" + o), "")), U && (/\bWOW64\b/i.test(t) || P && /\w(?:86|32)$/.test(d.cpuClass || d.platform) && !/\bWin64; x64\b/i.test(t)) && I.unshift("32-bit")) : z && /^OS X/.test(z.family) && "Chrome" == U && parseFloat(B) >= 39 && (z.architecture = 64), t || (t = null);
    var G = {};
    return G.description = t, G.layout = F && F[0], G.manufacturer = Y, G.name = U, G.prerelease = L, G.product = j, G.ua = t, G.version = U && B, G.os = z || {
      architecture: null,
      family: null,
      version: null,
      toString: function() {
        return "null"
      }
    }, G.parse = e, G.toString = function() {
      return this.description || ""
    }, G.version && I.unshift(B), G.name && I.unshift(U), z && U && !(z == String(z).split(" ")[0] && (z == U.split(" ")[0] || j)) && I.push(j ? "(" + z + ")" : "on " + z), I.length && (G.description = I.join(" ")), G
  }();
  "function" == typeof define && "object" == typeof define.amd && define.amd ? (i.platform = y, define(function() {
    return y
  })) : a && o ? m(y, function(e, t) {
    a[t] = e
  }) : i.platform = y
}).call(this)