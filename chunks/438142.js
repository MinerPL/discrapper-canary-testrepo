"use strict";
let r, i, s, a, o;
n.d(e, {
  U: function() {
    return nn
  }
});
var u, l, c, d, h, _, f, p, m, g, y, v, b, E, S, w, k = n(876122),
  T = n(703498),
  R = n(392405),
  x = n(138122),
  D = n(24716),
  N = n(10674),
  C = n(442853),
  U = n(829919),
  I = n(529866),
  A = n(862315),
  O = n(793884),
  B = n(336344),
  G = n(868145),
  M = n(50074),
  Y = n(635602),
  L = n(444675);
let z = D.n2,
  $ = "sentryReplaySession",
  P = "Unable to send Replay";
(u = m || (m = {}))[u.Document = 0] = "Document", u[u.DocumentType = 1] = "DocumentType", u[u.Element = 2] = "Element", u[u.Text = 3] = "Text", u[u.CDATA = 4] = "CDATA", u[u.Comment = 5] = "Comment";

function F(t) {
  let e = null == t ? void 0 : t.host;
  return !!(e && e.shadowRoot && e.shadowRoot === t)
}

function j({
  maskInputOptions: t,
  tagName: e,
  type: n
}) {
  "option" === e.toLowerCase() && (e = "select");
  let r = "string" == typeof n ? n.toLowerCase() : void 0;
  return t[e.toLowerCase()] || r && t[r] || "password" === r || "input" === e && !n && t.text
}

function H({
  input: t,
  maskInputSelector: e,
  unmaskInputSelector: n,
  maskInputOptions: r,
  tagName: i,
  type: s,
  value: a,
  maskInputFn: o
}) {
  let u = a || "";
  return n && t.matches(n) ? u : (t.hasAttribute("data-rr-is-password") && (s = "password"), (j({
    maskInputOptions: r,
    tagName: i,
    type: s
  }) || e && t.matches(e)) && (u = o ? o(u) : "*".repeat(u.length)), u)
}
let q = "__rrweb_original__";

function W(t) {
  let e = t.type;
  return t.hasAttribute("data-rr-is-password") ? "password" : e ? e.toLowerCase() : null
}

function Z(t, e, n) {
  return ("string" == typeof n && n.toLowerCase(), "INPUT" === e && ("radio" === n || "checkbox" === n)) ? t.getAttribute("value") || "" : t.value
}
let J = 1,
  V = RegExp("[^a-z0-9-_:]");

function K(t) {
  return t ? t.replace(/[\S]/g, "*") : ""
}

function X(t) {
  try {
    let e = t.rules || t.cssRules;
    return e ? Array.from(e).map(Q).join("") : null
  } catch (t) {
    return null
  }
}

function Q(t) {
  let e = t.cssText;
  if (function(t) {
      return "styleSheet" in t
    }(t)) try {
    e = X(t.styleSheet) || e
  } catch (t) {}
  return tt(e)
}

function tt(t) {
  return t.indexOf(":") > -1 ? t.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2") : t
}
let te = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
  tn = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,
  tr = /^(data:)([^,]*),(.*)/i;

function ti(t, e) {
  return (t || "").replace(te, (t, n, r, i, s, a) => {
    let o = r || s || a,
      u = n || i || "";
    if (!o) return t;
    if (!tn.test(o) || tr.test(o)) return `url(${u}${o}${u})`;
    if ("/" === o[0]) {
      var l;
      let t;
      return `url(${u}${t="",(t=(t=(l=e).indexOf("//")>-1?l.split("/").slice(0,3).join("/"):l.split("/")[0]).split("?")[0])+o}${u})`
    }
    let c = e.split("/"),
      d = o.split("/");
    for (let t of (c.pop(), d)) {
      if ("." !== t) ".." === t ? c.pop() : c.push(t)
    }
    return `url(${u}${c.join("/")}${u})`
  })
}
let ts = /^[^ \t\n\r\u000c]+/,
  ta = /^[, \t\n\r\u000c]+/;

function to(t, e) {
  if (!e || "" === e.trim()) return e;
  let n = t.createElement("a");
  return n.href = e, n.href
}

function tu() {
  let t = document.createElement("a");
  return t.href = "", t.href
}

function tl(t, e, n, r, i, s, a, o) {
  if (!i) return i;
  let u = r.toLowerCase(),
    l = n.toLowerCase();
  if ("src" === u || "href" === u) return to(t, i);
  if ("xlink:href" === u && "#" !== i[0]) return to(t, i);
  if ("background" === u && ("table" === l || "td" === l || "th" === l)) return to(t, i);
  else if ("srcset" === u) return function(t, e) {
    if ("" === e.trim()) return e;
    let n = 0;

    function r(t) {
      let r;
      let i = t.exec(e.substring(n));
      return i ? (r = i[0], n += r.length, r) : ""
    }
    let i = [];
    for (; r(ta), !(n >= e.length);) {
      ;
      let s = r(ts);
      if ("," === s.slice(-1)) s = to(t, s.substring(0, s.length - 1)), i.push(s);
      else {
        let r = "";
        s = to(t, s);
        let a = !1;
        for (;;) {
          let t = e.charAt(n);
          if ("" === t) {
            i.push((s + r).trim());
            break
          }
          if (a) ")" === t && (a = !1);
          else {
            if ("," === t) {
              n += 1, i.push((s + r).trim());
              break
            }
            "(" === t && (a = !0)
          }
          r += t, n += 1
        }
      }
    }
    return i.join(", ")
  }(t, i);
  else if ("style" === u) return ti(i, tu());
  else if ("object" === l && "data" === u) return to(t, i);
  else if (s && function(t, e, n, r) {
      return !(r && t.matches(r)) && (["placeholder", "title", "aria-label"].indexOf(e) > -1 || "input" === n && "value" === e && t.hasAttribute("type") && ["submit", "button"].indexOf(t.getAttribute("type").toLowerCase()) > -1)
    }(e, u, l, a)) return o ? o(i) : K(i);
  return i
}

function tc(t, e, n, r, i) {
  if (!t) return !1;
  if (t.nodeType !== t.ELEMENT_NODE) return tc(t.parentNode, e, n, r, i);
  if (r && (t.matches(r) || t.closest(r))) return !1;
  if (i) return !0;
  if ("string" == typeof e) {
    if (t.classList.contains(e)) return !0
  } else
    for (let n = 0; n < t.classList.length; n++) {
      let r = t.classList[n];
      if (e.test(r)) return !0
    }
  return !!(n && t.matches(n)) || tc(t.parentNode, e, n, r, i)
}

function td(t) {
  return null == t ? "" : t.toLowerCase()
}

function th(t, e) {
  let n;
  let {
    doc: s,
    map: a,
    blockClass: o,
    blockSelector: u,
    unblockSelector: l,
    maskTextClass: c,
    maskTextSelector: d,
    unmaskTextSelector: h,
    skipChild: _ = !1,
    inlineStylesheet: f = !0,
    maskInputSelector: p,
    unmaskInputSelector: g,
    maskAllText: y,
    maskInputOptions: v = {},
    maskTextFn: b,
    maskInputFn: E,
    slimDOMOptions: S,
    dataURLOptions: w = {},
    inlineImages: k = !1,
    recordCanvas: T = !1,
    onSerialize: R,
    onIframeLoad: x,
    iframeLoadTimeout: D = 5e3,
    keepIframeSrcFn: N = () => !1
  } = e, {
    preserveWhiteSpace: C = !0
  } = e, U = function(t, e) {
    var n, s, a;
    let o;
    let {
      doc: u,
      blockClass: l,
      blockSelector: c,
      unblockSelector: d,
      maskTextClass: h,
      maskTextSelector: _,
      unmaskTextSelector: f,
      inlineStylesheet: p,
      maskInputSelector: g,
      unmaskInputSelector: y,
      maskAllText: v,
      maskInputOptions: b = {},
      maskTextFn: E,
      maskInputFn: S,
      dataURLOptions: w = {},
      inlineImages: k,
      recordCanvas: T,
      keepIframeSrcFn: R
    } = e;
    if (u.__sn) {
      let t = u.__sn.id;
      o = 1 === t ? void 0 : t
    }
    switch (t.nodeType) {
      case t.DOCUMENT_NODE:
        if ("CSS1Compat" !== t.compatMode) return {
          type: m.Document,
          childNodes: [],
          compatMode: t.compatMode,
          rootId: o
        };
        return {
          type: m.Document, childNodes: [], rootId: o
        };
      case t.DOCUMENT_TYPE_NODE:
        return {
          type: m.DocumentType, name: t.name, publicId: t.publicId, systemId: t.systemId, rootId: o
        };
      case t.ELEMENT_NODE:
        ;
        let x = function(t, e, n, r) {
            if (r && t.matches(r)) return !1;
            if ("string" == typeof e) {
              if (t.classList.contains(e)) return !0
            } else
              for (let n = 0; n < t.classList.length; n++) {
                let r = t.classList[n];
                if (e.test(r)) return !0
              }
            return !!n && t.matches(n)
          }(t, l, c, d),
          D = function(t) {
            if (t instanceof HTMLFormElement) return "form";
            let e = t.tagName.toLowerCase().trim();
            return V.test(e) ? "div" : e
          }(t),
          N = {};
        for (let {
            name: e,
            value: n
          }
          of Array.from(t.attributes)) ! function(t, e, n) {
          return ("video" === t || "audio" === t) && "autoplay" === e
        }(D, e) && (N[e] = tl(u, t, D, e, n, v, f, E));
        if ("link" === D && p) {
          let e = Array.from(u.styleSheets).find(e => e.href === t.href),
            n = null;
          e && (n = X(e)), n && (delete N.rel, delete N.href, N._cssText = ti(n, e.href))
        }
        if ("style" === D && t.sheet && !(t.innerText || t.textContent || "").trim().length) {
          let e = X(t.sheet);
          e && (N._cssText = ti(e, tu()))
        }
        if ("input" === D || "textarea" === D || "select" === D || "option" === D) {
          let e = W(t),
            n = Z(t, D.toUpperCase(), e),
            r = t.checked;
          "submit" !== e && "button" !== e && n && (N.value = H({
            input: t,
            type: e,
            tagName: D,
            value: n,
            maskInputSelector: g,
            unmaskInputSelector: y,
            maskInputOptions: b,
            maskInputFn: S
          })), r && (N.checked = r)
        }
        if ("option" === D && (t.selected && !b.select ? N.selected = !0 : delete N.selected), "canvas" === D && T) {
          if ("2d" === t.__context) ! function(t) {
            let e = t.getContext("2d");
            if (!e) return !0;
            for (let n = 0; n < t.width; n += 50)
              for (let r = 0; r < t.height; r += 50) {
                let i = e.getImageData;
                if (new Uint32Array((q in i ? i[q] : i).call(e, n, r, Math.min(50, t.width - n), Math.min(50, t.height - r)).data.buffer).some(t => 0 !== t)) return !1
              }
            return !0
          }(t) && (N.rr_dataURL = t.toDataURL(w.type, w.quality));
          else if (!("__context" in t)) {
            let e = t.toDataURL(w.type, w.quality),
              n = document.createElement("canvas");
            n.width = t.width, n.height = t.height, e !== n.toDataURL(w.type, w.quality) && (N.rr_dataURL = e)
          }
        }
        if ("img" === D && k) {
          !r && (i = (r = u.createElement("canvas")).getContext("2d"));
          let e = t.crossOrigin;
          t.crossOrigin = "anonymous";
          let n = () => {
            try {
              r.width = t.naturalWidth, r.height = t.naturalHeight, i.drawImage(t, 0, 0), N.rr_dataURL = r.toDataURL(w.type, w.quality)
            } catch (e) {
              console.warn(`Cannot inline img src=${t.currentSrc}! Error: ${e}`)
            }
            e ? N.crossOrigin = e : delete N.crossOrigin
          };
          t.complete && 0 !== t.naturalWidth ? n() : t.onload = n
        }
        if (("audio" === D || "video" === D) && (N.rr_mediaState = t.paused ? "paused" : "played", N.rr_mediaCurrentTime = t.currentTime), t.scrollLeft && (N.rr_scrollLeft = t.scrollLeft), t.scrollTop && (N.rr_scrollTop = t.scrollTop), x) {
          let {
            width: e,
            height: n
          } = t.getBoundingClientRect();
          N = {
            class: N.class,
            rr_width: `${e}px`,
            rr_height: `${n}px`
          }
        }
        return "iframe" === D && !R(N.src) && (!t.contentDocument && (N.rr_src = N.src), delete N.src), {
          type: m.Element,
          tagName: D,
          attributes: N,
          childNodes: [],
          isSVG: !!("svg" === (s = t).tagName || s.ownerSVGElement) || void 0,
          needBlock: x,
          rootId: o
        };
      case t.TEXT_NODE:
        let C = t.parentNode && t.parentNode.tagName,
          U = t.textContent,
          I = "STYLE" === C || void 0,
          A = "SCRIPT" === C || void 0;
        if (I && U) {
          try {
            if (t.nextSibling || t.previousSibling);
            else if (null === (n = t.parentNode.sheet) || void 0 === n ? void 0 : n.cssRules) {
              ;
              U = (a = t.parentNode.sheet).cssRules ? Array.from(a.cssRules).map(t => t.cssText ? tt(t.cssText) : "").join("") : ""
            }
          } catch (e) {
            console.warn(`Cannot get CSS styles from text's parentNode. Error: ${e}`, t)
          }
          U = ti(U, tu())
        }
        return A && (U = "SCRIPT_PLACEHOLDER"), "TEXTAREA" === C && U ? U = "" : "OPTION" === C && U ? U = H({
          input: t.parentNode,
          type: null,
          tagName: C,
          value: U,
          maskInputSelector: g,
          unmaskInputSelector: y,
          maskInputOptions: b,
          maskInputFn: S
        }) : !I && !A && tc(t, h, _, f, v) && U && (U = E ? E(U) : K(U)), {
          type: m.Text,
          textContent: U || "",
          isStyle: I,
          rootId: o
        };
      case t.CDATA_SECTION_NODE:
        return {
          type: m.CDATA, textContent: "", rootId: o
        };
      case t.COMMENT_NODE:
        return {
          type: m.Comment, textContent: t.textContent || "", rootId: o
        };
      default:
        return !1
    }
  }(t, {
    doc: s,
    blockClass: o,
    blockSelector: u,
    unblockSelector: l,
    maskTextClass: c,
    maskTextSelector: d,
    unmaskTextSelector: h,
    inlineStylesheet: f,
    maskInputSelector: p,
    unmaskInputSelector: g,
    maskAllText: y,
    maskInputOptions: v,
    maskTextFn: b,
    maskInputFn: E,
    dataURLOptions: w,
    inlineImages: k,
    recordCanvas: T,
    keepIframeSrcFn: N
  });
  if (!U) return console.warn(t, "not serialized"), null;
  n = "__sn" in t ? t.__sn.id : ! function(t, e) {
    if (e.comment && t.type === m.Comment) return !0;
    if (t.type === m.Element) {
      if (e.script && ("script" === t.tagName || "link" === t.tagName && ("preload" === t.attributes.rel || "modulepreload" === t.attributes.rel) && "script" === t.attributes.as || "link" === t.tagName && "prefetch" === t.attributes.rel && "string" == typeof t.attributes.href && t.attributes.href.endsWith(".js"))) return !0;
      if (e.headFavicon && ("link" === t.tagName && "shortcut icon" === t.attributes.rel || "meta" === t.tagName && (td(t.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === td(t.attributes.name) || "icon" === td(t.attributes.rel) || "apple-touch-icon" === td(t.attributes.rel) || "shortcut icon" === td(t.attributes.rel)))) return !0;
      else if ("meta" === t.tagName) {
        if (e.headMetaDescKeywords && td(t.attributes.name).match(/^description|keywords$/)) return !0;
        if (e.headMetaSocial && (td(t.attributes.property).match(/^(og|twitter|fb):/) || td(t.attributes.name).match(/^(og|twitter):/) || "pinterest" === td(t.attributes.name))) return !0;
        else if (e.headMetaRobots && ("robots" === td(t.attributes.name) || "googlebot" === td(t.attributes.name) || "bingbot" === td(t.attributes.name))) return !0;
        else if (e.headMetaHttpEquiv && void 0 !== t.attributes["http-equiv"]) return !0;
        else if (e.headMetaAuthorship && ("author" === td(t.attributes.name) || "generator" === td(t.attributes.name) || "framework" === td(t.attributes.name) || "publisher" === td(t.attributes.name) || "progid" === td(t.attributes.name) || td(t.attributes.property).match(/^article:/) || td(t.attributes.property).match(/^product:/))) return !0;
        else if (e.headMetaVerification && ("google-site-verification" === td(t.attributes.name) || "yandex-verification" === td(t.attributes.name) || "csrf-token" === td(t.attributes.name) || "p:domain_verify" === td(t.attributes.name) || "verify-v1" === td(t.attributes.name) || "verification" === td(t.attributes.name) || "shopify-checkout-api-token" === td(t.attributes.name))) return !0
      }
    }
    return !1
  }(U, S) && (C || U.type !== m.Text || U.isStyle || U.textContent.replace(/^\s+|\s+$/gm, "").length) ? J++ : -2;
  let I = Object.assign(U, {
    id: n
  });
  if (t.__sn = I, -2 === n) return null;
  a[n] = t, R && R(t);
  let A = !_;
  if (I.type === m.Element && (A = A && !I.needBlock, delete I.needBlock, t.shadowRoot && (I.isShadowHost = !0)), (I.type === m.Document || I.type === m.Element) && A) {
    var O;
    S.headWhitespace && U.type === m.Element && "head" === U.tagName && (C = !1);
    let e = {
      doc: s,
      map: a,
      blockClass: o,
      blockSelector: u,
      unblockSelector: l,
      maskTextClass: c,
      maskTextSelector: d,
      unmaskTextSelector: h,
      skipChild: _,
      inlineStylesheet: f,
      maskInputSelector: p,
      unmaskInputSelector: g,
      maskAllText: y,
      maskInputOptions: v,
      maskTextFn: b,
      maskInputFn: E,
      slimDOMOptions: S,
      dataURLOptions: w,
      inlineImages: k,
      recordCanvas: T,
      preserveWhiteSpace: C,
      onSerialize: R,
      onIframeLoad: x,
      iframeLoadTimeout: D,
      keepIframeSrcFn: N
    };
    for (let n of Array.from(t.childNodes)) {
      let t = th(n, e);
      t && I.childNodes.push(t)
    }
    if ((O = t).nodeType === O.ELEMENT_NODE && t.shadowRoot)
      for (let n of Array.from(t.shadowRoot.childNodes)) {
        let t = th(n, e);
        t && (t.isShadow = !0, I.childNodes.push(t))
      }
  }
  return t.parentNode && F(t.parentNode) && (I.isShadow = !0), I.type === m.Element && "iframe" === I.tagName && ! function(t, e, n) {
    let r;
    let i = t.contentWindow;
    if (!i) return;
    let s = !1;
    try {
      r = i.document.readyState
    } catch (t) {
      return
    }
    if ("complete" !== r) {
      let r = setTimeout(() => {
        !s && (e(), s = !0)
      }, n);
      t.addEventListener("load", () => {
        clearTimeout(r), s = !0, e()
      });
      return
    }
    let a = "about:blank";
    if (i.location.href !== a || t.src === a || "" === t.src) {
      setTimeout(e, 0);
      return
    }
    t.addEventListener("load", e)
  }(t, () => {
    let e = t.contentDocument;
    if (e && x) {
      let n = th(e, {
        doc: e,
        map: a,
        blockClass: o,
        blockSelector: u,
        unblockSelector: l,
        maskTextClass: c,
        maskTextSelector: d,
        unmaskTextSelector: h,
        skipChild: !1,
        inlineStylesheet: f,
        maskInputSelector: p,
        unmaskInputSelector: g,
        maskAllText: y,
        maskInputOptions: v,
        maskTextFn: b,
        maskInputFn: E,
        slimDOMOptions: S,
        dataURLOptions: w,
        inlineImages: k,
        recordCanvas: T,
        preserveWhiteSpace: C,
        onSerialize: R,
        onIframeLoad: x,
        iframeLoadTimeout: D,
        keepIframeSrcFn: N
      });
      n && x(t, n)
    }
  }, D), I
}

function t_(t, e, n = document) {
  let r = {
    capture: !0,
    passive: !0
  };
  return n.addEventListener(t, e, r), () => n.removeEventListener(t, e, r)
}(l = g || (g = {}))[l.DomContentLoaded = 0] = "DomContentLoaded", l[l.Load = 1] = "Load", l[l.FullSnapshot = 2] = "FullSnapshot", l[l.IncrementalSnapshot = 3] = "IncrementalSnapshot", l[l.Meta = 4] = "Meta", l[l.Custom = 5] = "Custom", l[l.Plugin = 6] = "Plugin", (c = y || (y = {}))[c.Mutation = 0] = "Mutation", c[c.MouseMove = 1] = "MouseMove", c[c.MouseInteraction = 2] = "MouseInteraction", c[c.Scroll = 3] = "Scroll", c[c.ViewportResize = 4] = "ViewportResize", c[c.Input = 5] = "Input", c[c.TouchMove = 6] = "TouchMove", c[c.MediaInteraction = 7] = "MediaInteraction", c[c.StyleSheetRule = 8] = "StyleSheetRule", c[c.CanvasMutation = 9] = "CanvasMutation", c[c.Font = 10] = "Font", c[c.Log = 11] = "Log", c[c.Drag = 12] = "Drag", c[c.StyleDeclaration = 13] = "StyleDeclaration", (d = v || (v = {}))[d.MouseUp = 0] = "MouseUp", d[d.MouseDown = 1] = "MouseDown", d[d.Click = 2] = "Click", d[d.ContextMenu = 3] = "ContextMenu", d[d.DblClick = 4] = "DblClick", d[d.Focus = 5] = "Focus", d[d.Blur = 6] = "Blur", d[d.TouchStart = 7] = "TouchStart", d[d.TouchMove_Departed = 8] = "TouchMove_Departed", d[d.TouchEnd = 9] = "TouchEnd", d[d.TouchCancel = 10] = "TouchCancel", (h = b || (b = {}))[h["2D"] = 0] = "2D", h[h.WebGL = 1] = "WebGL", h[h.WebGL2 = 2] = "WebGL2", (_ = E || (E = {}))[_.Play = 0] = "Play", _[_.Pause = 1] = "Pause", _[_.Seeked = 2] = "Seeked", _[_.VolumeChange = 3] = "VolumeChange", (f = S || (S = {})).Start = "start", f.Pause = "pause", f.Resume = "resume", f.Resize = "resize", f.Finish = "finish", f.FullsnapshotRebuilded = "fullsnapshot-rebuilded", f.LoadStylesheetStart = "load-stylesheet-start", f.LoadStylesheetEnd = "load-stylesheet-end", f.SkipStart = "skip-start", f.SkipEnd = "skip-end", f.MouseInteraction = "mouse-interaction", f.EventCast = "event-cast", f.CustomEvent = "custom-event", f.Flush = "flush", f.StateChange = "state-change", f.PlayBack = "play-back";
let tf = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
  tp = {
    map: {},
    getId: () => (console.error(tf), -1),
    getNode: () => (console.error(tf), null),
    removeNodeFromMap() {
      console.error(tf)
    },
    has: () => (console.error(tf), !1),
    reset() {
      console.error(tf)
    }
  };

function tm(t, e, n = {}) {
  let r = null,
    i = 0;
  return function(s) {
    let a = Date.now();
    !i && !1 === n.leading && (i = a);
    let o = e - (a - i),
      u = this,
      l = arguments;
    o <= 0 || o > e ? (r && (clearTimeout(r), r = null), i = a, t.apply(u, l)) : !r && !1 !== n.trailing && (r = setTimeout(() => {
      i = !1 === n.leading ? 0 : Date.now(), r = null, t.apply(u, l)
    }, o))
  }
}

function tg(t, e, n, r, i = window) {
  let s = i.Object.getOwnPropertyDescriptor(t, e);
  return i.Object.defineProperty(t, e, r ? n : {
    set(t) {
      setTimeout(() => {
        n.set.call(this, t)
      }, 0), s && s.set && s.set.call(this, t)
    }
  }), () => tg(t, e, s || {}, !0)
}

function ty(t, e, n) {
  try {
    if (!(e in t)) return () => {};
    let r = t[e],
      i = n(r);
    return "function" == typeof i && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
      __rrweb_original__: {
        enumerable: !1,
        value: r
      }
    })), t[e] = i, () => {
      t[e] = r
    }
  } catch (t) {
    return () => {}
  }
}

function tv() {
  return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
}

function tb() {
  return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
}

function tE(t, e, n, r) {
  if (!t) return !1;
  if (t.nodeType === t.ELEMENT_NODE) {
    let i = !1,
      s = r && t.matches(r);
    return "string" == typeof e ? i = void 0 !== t.closest ? !s && null !== t.closest("." + e) : !s && t.classList.contains(e) : s || t.classList.forEach(t => {
      e.test(t) && (i = !0)
    }), !i && n && (i = t.matches(n)), !s && i || tE(t.parentNode, e, n, r)
  }
  return t.nodeType, t.TEXT_NODE, tE(t.parentNode, e, n, r)
}

function tS(t) {
  return "__sn" in t && -2 === t.__sn.id
}
"undefined" != typeof window && window.Proxy && window.Reflect && (tp = new Proxy(tp, {
  get: (t, e, n) => ("map" === e && console.error(tf), Reflect.get(t, e, n))
}));

function tw(t) {
  return !!t.changedTouches
}

function tk(t) {
  return "__sn" in t && t.__sn.type === m.Element && "iframe" === t.__sn.tagName
}

function tT(t) {
  return !!(null == t ? void 0 : t.shadowRoot)
}

function tR(t) {
  return "__ln" in t
}
class tx {
  constructor() {
    this.length = 0, this.head = null
  }
  get(t) {
    if (t >= this.length) throw Error("Position outside of list range");
    let e = this.head;
    for (let n = 0; n < t; n++) e = (null == e ? void 0 : e.next) || null;
    return e
  }
  addNode(t) {
    let e = {
      value: t,
      previous: null,
      next: null
    };
    if (t.__ln = e, t.previousSibling && "__ln" in t.previousSibling) {
      let n = t.previousSibling.__ln.next;
      e.next = n, e.previous = t.previousSibling.__ln, t.previousSibling.__ln.next = e, n && (n.previous = e)
    } else if (t.nextSibling && "__ln" in t.nextSibling && t.nextSibling.__ln.previous) {
      let n = t.nextSibling.__ln.previous;
      e.previous = n, e.next = t.nextSibling.__ln, t.nextSibling.__ln.previous = e, n && (n.next = e)
    } else this.head && (this.head.previous = e), e.next = this.head, this.head = e;
    this.length++
  }
  removeNode(t) {
    let e = t.__ln;
    if (!!this.head) e.previous ? (e.previous.next = e.next, e.next && (e.next.previous = e.previous)) : (this.head = e.next, this.head && (this.head.previous = null)), t.__ln && delete t.__ln, this.length--
  }
}
let tD = (t, e) => `${t}@${e}`;

function tN(t) {
  return "__sn" in t
}
class tC {
  constructor() {
    this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = t => {
      t.forEach(this.processMutation), this.emit()
    }, this.emit = () => {
      if (this.frozen || this.locked) return;
      let t = [],
        e = new tx,
        n = t => {
          let e = t,
            n = -2;
          for (; - 2 === n;) n = (e = e && e.nextSibling) && this.mirror.getId(e);
          return n
        },
        r = r => {
          var i, s, a, o, u;
          let l = r.getRootNode ? null === (i = r.getRootNode()) || void 0 === i ? void 0 : i.host : null,
            c = l;
          for (; null === (a = null === (s = null == c ? void 0 : c.getRootNode) || void 0 === s ? void 0 : s.call(c)) || void 0 === a ? void 0 : a.host;) c = (null === (u = null === (o = null == c ? void 0 : c.getRootNode) || void 0 === o ? void 0 : o.call(c)) || void 0 === u ? void 0 : u.host) || null;
          let d = !this.doc.contains(r) && (!c || !this.doc.contains(c));
          if (!r.parentNode || d) return;
          let h = F(r.parentNode) ? this.mirror.getId(l) : this.mirror.getId(r.parentNode),
            _ = n(r);
          if (-1 === h || -1 === _) return e.addNode(r);
          let f = th(r, {
            doc: this.doc,
            map: this.mirror.map,
            blockClass: this.blockClass,
            blockSelector: this.blockSelector,
            unblockSelector: this.unblockSelector,
            maskTextClass: this.maskTextClass,
            maskTextSelector: this.maskTextSelector,
            unmaskTextSelector: this.unmaskTextSelector,
            maskInputSelector: this.maskInputSelector,
            unmaskInputSelector: this.unmaskInputSelector,
            skipChild: !0,
            inlineStylesheet: this.inlineStylesheet,
            maskAllText: this.maskAllText,
            maskInputOptions: this.maskInputOptions,
            maskTextFn: this.maskTextFn,
            maskInputFn: this.maskInputFn,
            slimDOMOptions: this.slimDOMOptions,
            recordCanvas: this.recordCanvas,
            inlineImages: this.inlineImages,
            onSerialize: t => {
              tk(t) && this.iframeManager.addIframe(t), tT(r) && this.shadowDomManager.addShadowRoot(r.shadowRoot, document)
            },
            onIframeLoad: (t, e) => {
              this.iframeManager.attachIframe(t, e), this.shadowDomManager.observeAttachShadow(t)
            }
          });
          f && t.push({
            parentId: h,
            nextId: _,
            node: f
          })
        };
      for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
      for (let t of this.movedSet) {
        if (!tI(this.removes, t, this.mirror) || !!this.movedSet.has(t.parentNode)) r(t)
      }
      for (let t of this.addedSet) tA(this.droppedSet, t) || tI(this.removes, t, this.mirror) ? tA(this.movedSet, t) ? r(t) : this.droppedSet.add(t) : r(t);
      let i = null;
      for (; e.length;) {
        let t = null;
        if (i) {
          let e = this.mirror.getId(i.value.parentNode),
            r = n(i.value); - 1 !== e && -1 !== r && (t = i)
        }
        if (!t)
          for (let r = e.length - 1; r >= 0; r--) {
            let i = e.get(r);
            if (i) {
              let e = this.mirror.getId(i.value.parentNode),
                r = n(i.value);
              if (-1 !== e && -1 !== r) {
                t = i;
                break
              }
            }
          }
        if (!t) {
          for (; e.head;) e.removeNode(e.head.value);
          break
        }
        i = t.previous, e.removeNode(t.value), r(t.value)
      }
      let s = {
        texts: this.texts.map(t => ({
          id: this.mirror.getId(t.node),
          value: t.value
        })).filter(t => this.mirror.has(t.id)),
        attributes: this.attributes.map(t => ({
          id: this.mirror.getId(t.node),
          attributes: t.attributes
        })).filter(t => this.mirror.has(t.id)),
        removes: this.removes,
        adds: t
      };
      if (!!s.texts.length || !!s.attributes.length || !!s.removes.length || !!s.adds.length) this.texts = [], this.attributes = [], this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(s)
    }, this.processMutation = t => {
      if (!tS(t.target)) switch (t.type) {
        case "characterData": {
          let e = t.target.textContent;
          !tE(t.target, this.blockClass, this.blockSelector, this.unblockSelector) && e !== t.oldValue && this.texts.push({
            value: tc(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextSelector, this.maskAllText) && e ? this.maskTextFn ? this.maskTextFn(e) : e.replace(/[\S]/g, "*") : e,
            node: t.target
          });
          break
        }
        case "attributes": {
          let e = t.target,
            n = e.getAttribute(t.attributeName);
          if ("value" === t.attributeName && (n = H({
              input: e,
              maskInputSelector: this.maskInputSelector,
              unmaskInputSelector: this.unmaskInputSelector,
              maskInputOptions: this.maskInputOptions,
              tagName: e.tagName,
              type: e.getAttribute("type"),
              value: n,
              maskInputFn: this.maskInputFn
            })), tE(t.target, this.blockClass, this.blockSelector, this.unblockSelector) || n === t.oldValue) return;
          let r = this.attributes.find(e => e.node === t.target);
          if (!r && (r = {
              node: t.target,
              attributes: {}
            }, this.attributes.push(r)), "type" === t.attributeName && "INPUT" === e.tagName && "password" === (t.oldValue || "").toLowerCase() && e.setAttribute("data-rr-is-password", "true"), "style" === t.attributeName) {
            let n = this.doc.createElement("span");
            t.oldValue && n.setAttribute("style", t.oldValue), (void 0 === r.attributes.style || null === r.attributes.style) && (r.attributes.style = {});
            try {
              let t = r.attributes.style;
              for (let r of Array.from(e.style)) {
                let i = e.style.getPropertyValue(r),
                  s = e.style.getPropertyPriority(r);
                (i !== n.style.getPropertyValue(r) || s !== n.style.getPropertyPriority(r)) && ("" === s ? t[r] = i : t[r] = [i, s])
              }
              for (let r of Array.from(n.style)) "" === e.style.getPropertyValue(r) && (t[r] = !1)
            } catch (t) {
              console.warn("[rrweb] Error when parsing update to style attribute:", t)
            }
          } else {
            let e = t.target;
            r.attributes[t.attributeName] = tl(this.doc, e, e.tagName, t.attributeName, n, this.maskAllText, this.unmaskTextSelector, this.maskTextFn)
          }
          break
        }
        case "childList":
          t.addedNodes.forEach(e => this.genAdds(e, t.target)), t.removedNodes.forEach(e => {
            let n = this.mirror.getId(e),
              r = F(t.target) ? this.mirror.getId(t.target.host) : this.mirror.getId(t.target);
            if (!(tE(t.target, this.blockClass, this.blockSelector, this.unblockSelector) || tS(e))) this.addedSet.has(e) ? (tU(this.addedSet, e), this.droppedSet.add(e)) : this.addedSet.has(t.target) && -1 === n || function t(e, n) {
              if (F(e)) return !1;
              let r = n.getId(e);
              return !n.has(r) || (!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || t(e.parentNode, n))
            }(t.target, this.mirror) || (this.movedSet.has(e) && this.movedMap[tD(n, r)] ? tU(this.movedSet, e) : this.removes.push({
              parentId: r,
              id: n,
              isShadow: !!F(t.target) || void 0
            })), this.mapRemoves.push(e)
          })
      }
    }, this.genAdds = (t, e) => {
      if (!(e && tE(e, this.blockClass, this.blockSelector, this.unblockSelector))) {
        if ("__sn" in t) {
          if (tS(t)) return;
          this.movedSet.add(t);
          let n = null;
          if (e && "__sn" in e) n = e.__sn.id;
          n && (this.movedMap[tD(t.__sn.id, n)] = !0)
        } else this.addedSet.add(t), this.droppedSet.delete(t);
        !tE(t, this.blockClass, this.blockSelector, this.unblockSelector) && t.childNodes.forEach(t => this.genAdds(t))
      }
    }
  }
  init(t) {
    ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskTextClass", "maskTextSelector", "unmaskTextSelector", "maskInputSelector", "unmaskInputSelector", "inlineStylesheet", "maskAllText", "maskInputOptions", "maskTextFn", "maskInputFn", "recordCanvas", "inlineImages", "slimDOMOptions", "doc", "mirror", "iframeManager", "shadowDomManager", "canvasManager"].forEach(e => {
      this[e] = t[e]
    })
  }
  freeze() {
    this.frozen = !0, this.canvasManager.freeze()
  }
  unfreeze() {
    this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
  }
  isFrozen() {
    return this.frozen
  }
  lock() {
    this.locked = !0, this.canvasManager.lock()
  }
  unlock() {
    this.locked = !1, this.canvasManager.unlock(), this.emit()
  }
  reset() {
    this.shadowDomManager.reset(), this.canvasManager.reset()
  }
}

function tU(t, e) {
  t.delete(e), e.childNodes.forEach(e => tU(t, e))
}

function tI(t, e, n) {
  let {
    parentNode: r
  } = e;
  if (!r) return !1;
  let i = n.getId(r);
  return !!t.some(t => t.id === i) || tI(t, r, n)
}

function tA(t, e) {
  let {
    parentNode: n
  } = e;
  return !!n && (!!t.has(n) || tA(t, n))
}
let tO = t => (...e) => {
    try {
      return t(...e)
    } catch (t) {
      try {
        t.__rrweb__ = !0
      } catch (t) {}
      throw t
    }
  },
  tB = [];

function tG(t) {
  try {
    if ("composedPath" in t) {
      let e = t.composedPath();
      if (e.length) return e[0]
    } else if ("path" in t && t.path.length) return t.path[0]
  } catch (t) {}
  return t && t.target
}

function tM(t, e) {
  var n, r;
  let i = new tC;
  tB.push(i), i.init(t);
  let s = window.MutationObserver || window.__rrMutationObserver,
    a = null === (r = null === (n = null == window ? void 0 : window.Zone) || void 0 === n ? void 0 : n.__symbol__) || void 0 === r ? void 0 : r.call(n, "MutationObserver");
  a && window[a] && (s = window[a]);
  let o = new s(tO(e => {
    if (!t.onMutation || !1 !== t.onMutation(e)) i.processMutations(e)
  }));
  return o.observe(e, {
    attributes: !0,
    attributeOldValue: !0,
    characterData: !0,
    characterDataOldValue: !0,
    childList: !0,
    subtree: !0
  }), o
}

function tY({
  scrollCb: t,
  doc: e,
  mirror: n,
  blockClass: r,
  blockSelector: i,
  unblockSelector: s,
  sampling: a
}) {
  let o = tm(a => {
    let o = tG(a);
    if (!o || tE(o, r, i, s)) return;
    let u = n.getId(o);
    if (o === e) {
      let n = e.scrollingElement || e.documentElement;
      tO(t)({
        id: u,
        x: n.scrollLeft,
        y: n.scrollTop
      })
    } else tO(t)({
      id: u,
      x: o.scrollLeft,
      y: o.scrollTop
    })
  }, a.scroll || 100);
  return t_("scroll", tO(o), e)
}

function tL(t, e) {
  let n = Object.assign({}, t);
  return !e && delete n.userTriggered, n
}
let tz = ["INPUT", "TEXTAREA", "SELECT"],
  t$ = new WeakMap;

function tP(t) {
  return function(t, e) {
    if (tj("CSSGroupingRule") && t.parentRule instanceof CSSGroupingRule || tj("CSSMediaRule") && t.parentRule instanceof CSSMediaRule || tj("CSSSupportsRule") && t.parentRule instanceof CSSSupportsRule || tj("CSSConditionRule") && t.parentRule instanceof CSSConditionRule) {
      let n = Array.from(t.parentRule.cssRules).indexOf(t);
      e.unshift(n)
    } else {
      let n = Array.from(t.parentStyleSheet.cssRules).indexOf(t);
      e.unshift(n)
    }
    return e
  }(t, [])
}

function tF(t, e = {}) {
  let n = t.doc.defaultView;
  if (!n) return () => {};
  ! function(t, e) {
    let {
      mutationCb: n,
      mousemoveCb: r,
      mouseInteractionCb: i,
      scrollCb: s,
      viewportResizeCb: a,
      inputCb: o,
      mediaInteractionCb: u,
      styleSheetRuleCb: l,
      styleDeclarationCb: c,
      canvasMutationCb: d,
      fontCb: h
    } = t;
    t.mutationCb = (...t) => {
      e.mutation && e.mutation(...t), n(...t)
    }, t.mousemoveCb = (...t) => {
      e.mousemove && e.mousemove(...t), r(...t)
    }, t.mouseInteractionCb = (...t) => {
      e.mouseInteraction && e.mouseInteraction(...t), i(...t)
    }, t.scrollCb = (...t) => {
      e.scroll && e.scroll(...t), s(...t)
    }, t.viewportResizeCb = (...t) => {
      e.viewportResize && e.viewportResize(...t), a(...t)
    }, t.inputCb = (...t) => {
      e.input && e.input(...t), o(...t)
    }, t.mediaInteractionCb = (...t) => {
      e.mediaInteaction && e.mediaInteaction(...t), u(...t)
    }, t.styleSheetRuleCb = (...t) => {
      e.styleSheetRule && e.styleSheetRule(...t), l(...t)
    }, t.styleDeclarationCb = (...t) => {
      e.styleDeclaration && e.styleDeclaration(...t), c(...t)
    }, t.canvasMutationCb = (...t) => {
      e.canvasMutation && e.canvasMutation(...t), d(...t)
    }, t.fontCb = (...t) => {
      e.font && e.font(...t), h(...t)
    }
  }(t, e);
  let r = tM(t, t.doc),
    i = function({
      mousemoveCb: t,
      sampling: e,
      doc: n,
      mirror: r
    }) {
      let i;
      if (!1 === e.mousemove) return () => {};
      let s = "number" == typeof e.mousemove ? e.mousemove : 50,
        a = "number" == typeof e.mousemoveCallback ? e.mousemoveCallback : 500,
        o = [],
        u = tm(e => {
          let n = Date.now() - i;
          tO(t)(o.map(t => (t.timeOffset -= n, t)), e), o = [], i = null
        }, a),
        l = tm(t => {
          let e = tG(t),
            {
              clientX: n,
              clientY: s
            } = tw(t) ? t.changedTouches[0] : t;
          !i && (i = Date.now()), o.push({
            x: n,
            y: s,
            id: r.getId(e),
            timeOffset: Date.now() - i
          }), u("undefined" != typeof DragEvent && t instanceof DragEvent ? y.Drag : t instanceof MouseEvent ? y.MouseMove : y.TouchMove)
        }, s, {
          trailing: !1
        }),
        c = [t_("mousemove", tO(l), n), t_("touchmove", tO(l), n), t_("drag", tO(l), n)];
      return tO(() => {
        c.forEach(t => t())
      })
    }(t),
    s = function({
      mouseInteractionCb: t,
      doc: e,
      mirror: n,
      blockClass: r,
      blockSelector: i,
      unblockSelector: s,
      sampling: a
    }) {
      if (!1 === a.mouseInteraction) return () => {};
      let o = !0 === a.mouseInteraction || void 0 === a.mouseInteraction ? {} : a.mouseInteraction,
        u = [],
        l = e => a => {
          let o = tG(a);
          if (tE(o, r, i, s)) return;
          let u = tw(a) ? a.changedTouches[0] : a;
          if (!u) return;
          let l = n.getId(o),
            {
              clientX: c,
              clientY: d
            } = u;
          tO(t)({
            type: v[e],
            id: l,
            x: c,
            y: d
          })
        };
      return Object.keys(v).filter(t => Number.isNaN(Number(t)) && !t.endsWith("_Departed") && !1 !== o[t]).forEach(t => {
        let n = t.toLowerCase(),
          r = tO(l(t));
        u.push(t_(n, r, e))
      }), tO(() => {
        u.forEach(t => t())
      })
    }(t),
    a = tY(t),
    o = function({
      viewportResizeCb: t
    }) {
      let e = -1,
        n = -1,
        r = tm(() => {
          let r = tv(),
            i = tb();
          (e !== r || n !== i) && (tO(t)({
            width: Number(i),
            height: Number(r)
          }), e = r, n = i)
        }, 200);
      return t_("resize", tO(r), window)
    }(t),
    u = function({
      inputCb: t,
      doc: e,
      mirror: n,
      blockClass: r,
      blockSelector: i,
      unblockSelector: s,
      ignoreClass: a,
      ignoreSelector: o,
      maskInputSelector: u,
      unmaskInputSelector: l,
      maskInputOptions: c,
      maskInputFn: d,
      sampling: h,
      userTriggeredOnInput: _
    }) {
      function f(t) {
        let n = tG(t),
          h = n && n.tagName,
          f = t.isTrusted;
        if ("OPTION" === h && (n = n.parentElement), !n || !h || 0 > tz.indexOf(h) || tE(n, r, i, s)) return;
        let m = n,
          g = W(m);
        if (m.classList.contains(a) || o && m.matches(o)) return;
        let y = Z(m, h, g),
          v = !1;
        ("radio" === g || "checkbox" === g) && (v = n.checked),
        function({
          tagName: t,
          type: e,
          maskInputOptions: n,
          maskInputSelector: r
        }) {
          return r || j({
            maskInputOptions: n,
            tagName: t,
            type: e
          })
        }({
          maskInputOptions: c,
          maskInputSelector: u,
          tagName: h,
          type: g
        }) && (y = H({
          input: m,
          maskInputOptions: c,
          maskInputSelector: u,
          unmaskInputSelector: l,
          tagName: h,
          type: g,
          value: y,
          maskInputFn: d
        })), p(n, tO(tL)({
          text: y,
          isChecked: v,
          userTriggered: f
        }, _));
        let b = n.name;
        "radio" === g && b && v && e.querySelectorAll(`input[type="radio"][name="${b}"]`).forEach(t => {
          if (t !== n) {
            let e = H({
              input: t,
              maskInputOptions: c,
              maskInputSelector: u,
              unmaskInputSelector: l,
              tagName: h,
              type: g,
              value: Z(t, h, g),
              maskInputFn: d
            });
            p(t, tO(tL)({
              text: e,
              isChecked: !v,
              userTriggered: !1
            }, _))
          }
        })
      }

      function p(e, r) {
        let i = t$.get(e);
        if (!i || i.text !== r.text || i.isChecked !== r.isChecked) {
          t$.set(e, r);
          let i = n.getId(e);
          t(Object.assign(Object.assign({}, r), {
            id: i
          }))
        }
      }
      let m = ("last" === h.input ? ["change"] : ["input", "change"]).map(t => t_(t, tO(f), e)),
        g = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value"),
        y = [
          [HTMLInputElement.prototype, "value"],
          [HTMLInputElement.prototype, "checked"],
          [HTMLSelectElement.prototype, "value"],
          [HTMLTextAreaElement.prototype, "value"],
          [HTMLSelectElement.prototype, "selectedIndex"],
          [HTMLOptionElement.prototype, "selected"]
        ];
      return g && g.set && m.push(...y.map(t => tg(t[0], t[1], {
        set() {
          tO(f)({
            target: this
          })
        }
      }))), tO(() => {
        m.forEach(t => t())
      })
    }(t),
    l = function({
      mediaInteractionCb: t,
      blockClass: e,
      blockSelector: n,
      unblockSelector: r,
      mirror: i,
      sampling: s
    }) {
      let a = a => tm(tO(s => {
          let o = tG(s);
          if (!o || tE(o, e, n, r)) return;
          let {
            currentTime: u,
            volume: l,
            muted: c
          } = o;
          t({
            type: a,
            id: i.getId(o),
            currentTime: u,
            volume: l,
            muted: c
          })
        }), s.media || 500),
        o = [t_("play", a(0)), t_("pause", a(1)), t_("seeked", a(2)), t_("volumechange", a(3))];
      return tO(() => {
        o.forEach(t => t())
      })
    }(t),
    c = function({
      styleSheetRuleCb: t,
      mirror: e
    }, {
      win: n
    }) {
      if (!n.CSSStyleSheet || !n.CSSStyleSheet.prototype) return () => {};
      let r = n.CSSStyleSheet.prototype.insertRule;
      n.CSSStyleSheet.prototype.insertRule = new Proxy(r, {
        apply: tO((n, r, i) => {
          let [s, a] = i, o = e.getId(r.ownerNode);
          return -1 !== o && t({
            id: o,
            adds: [{
              rule: s,
              index: a
            }]
          }), n.apply(r, i)
        })
      });
      let i = n.CSSStyleSheet.prototype.deleteRule;
      n.CSSStyleSheet.prototype.deleteRule = new Proxy(i, {
        apply: tO((n, r, i) => {
          let [s] = i, a = e.getId(r.ownerNode);
          return -1 !== a && t({
            id: a,
            removes: [{
              index: s
            }]
          }), n.apply(r, i)
        })
      });
      let s = {};
      tH("CSSGroupingRule") ? s.CSSGroupingRule = n.CSSGroupingRule : (tH("CSSMediaRule") && (s.CSSMediaRule = n.CSSMediaRule), tH("CSSConditionRule") && (s.CSSConditionRule = n.CSSConditionRule), tH("CSSSupportsRule") && (s.CSSSupportsRule = n.CSSSupportsRule));
      let a = {};
      return Object.entries(s).forEach(([n, r]) => {
        a[n] = {
          insertRule: r.prototype.insertRule,
          deleteRule: r.prototype.deleteRule
        }, r.prototype.insertRule = new Proxy(a[n].insertRule, {
          apply: tO((n, r, i) => {
            let [s, a] = i, o = e.getId(r.parentStyleSheet.ownerNode);
            return -1 !== o && t({
              id: o,
              adds: [{
                rule: s,
                index: [...tP(r), a || 0]
              }]
            }), n.apply(r, i)
          })
        }), r.prototype.deleteRule = new Proxy(a[n].deleteRule, {
          apply: tO((n, r, i) => {
            let [s] = i, a = e.getId(r.parentStyleSheet.ownerNode);
            return -1 !== a && t({
              id: a,
              removes: [{
                index: [...tP(r), s]
              }]
            }), n.apply(r, i)
          })
        })
      }), tO(() => {
        n.CSSStyleSheet.prototype.insertRule = r, n.CSSStyleSheet.prototype.deleteRule = i, Object.entries(s).forEach(([t, e]) => {
          e.prototype.insertRule = a[t].insertRule, e.prototype.deleteRule = a[t].deleteRule
        })
      })
    }(t, {
      win: n
    }),
    d = function({
      styleDeclarationCb: t,
      mirror: e
    }, {
      win: n
    }) {
      let r = n.CSSStyleDeclaration.prototype.setProperty;
      n.CSSStyleDeclaration.prototype.setProperty = new Proxy(r, {
        apply: tO((n, r, i) => {
          var s, a;
          let [o, u, l] = i, c = e.getId(null === (a = null === (s = r.parentRule) || void 0 === s ? void 0 : s.parentStyleSheet) || void 0 === a ? void 0 : a.ownerNode);
          return -1 !== c && t({
            id: c,
            set: {
              property: o,
              value: u,
              priority: l
            },
            index: tP(r.parentRule)
          }), n.apply(r, i)
        })
      });
      let i = n.CSSStyleDeclaration.prototype.removeProperty;
      return n.CSSStyleDeclaration.prototype.removeProperty = new Proxy(i, {
        apply: tO((n, r, i) => {
          var s, a;
          let [o] = i, u = e.getId(null === (a = null === (s = r.parentRule) || void 0 === s ? void 0 : s.parentStyleSheet) || void 0 === a ? void 0 : a.ownerNode);
          return -1 !== u && t({
            id: u,
            remove: {
              property: o
            },
            index: tP(r.parentRule)
          }), n.apply(r, i)
        })
      }), tO(() => {
        n.CSSStyleDeclaration.prototype.setProperty = r, n.CSSStyleDeclaration.prototype.removeProperty = i
      })
    }(t, {
      win: n
    }),
    h = t.collectFonts ? function({
      fontCb: t,
      doc: e
    }) {
      let n = e.defaultView;
      if (!n) return () => {};
      let r = [],
        i = new WeakMap,
        s = n.FontFace;
      n.FontFace = function(t, e, n) {
        let r = new s(t, e, n);
        return i.set(r, {
          family: t,
          buffer: "string" != typeof e,
          descriptors: n,
          fontSource: "string" == typeof e ? e : JSON.stringify(Array.from(new Uint8Array(e)))
        }), r
      };
      let a = ty(e.fonts, "add", function(e) {
        return function(n) {
          return setTimeout(() => {
            let e = i.get(n);
            e && (t(e), i.delete(n))
          }, 0), e.apply(this, [n])
        }
      });
      return r.push(() => {
        n.FontFace = s
      }), r.push(a), tO(() => {
        r.forEach(t => t())
      })
    }(t) : () => {},
    _ = [];
  for (let e of t.plugins) _.push(e.observer(e.callback, n, e.options));
  return tO(() => {
    tB.forEach(t => t.reset()), r.disconnect(), i(), s(), a(), o(), u(), l();
    try {
      c(), d()
    } catch (t) {}
    h(), _.forEach(t => t())
  })
}

function tj(t) {
  return void 0 !== window[t]
}

function tH(t) {
  return !!(void 0 !== window[t] && window[t].prototype && "insertRule" in window[t].prototype && "deleteRule" in window[t].prototype)
}
class tq {
  constructor(t) {
    this.iframes = new WeakMap, this.mutationCb = t.mutationCb
  }
  addIframe(t) {
    this.iframes.set(t, !0)
  }
  addLoadListener(t) {
    this.loadListener = t
  }
  attachIframe(t, e) {
    var n;
    this.mutationCb({
      adds: [{
        parentId: t.__sn.id,
        nextId: null,
        node: e
      }],
      removes: [],
      texts: [],
      attributes: [],
      isAttachIframe: !0
    }), null === (n = this.loadListener) || void 0 === n || n.call(this, t)
  }
}
class tW {
  constructor(t) {
    this.restorePatches = [], this.mutationCb = t.mutationCb, this.scrollCb = t.scrollCb, this.bypassOptions = t.bypassOptions, this.mirror = t.mirror;
    let e = this;
    this.restorePatches.push(ty(HTMLElement.prototype, "attachShadow", function(t) {
      return function() {
        let n = t.apply(this, arguments);
        return this.shadowRoot && e.addShadowRoot(this.shadowRoot, this.ownerDocument), n
      }
    }))
  }
  addShadowRoot(t, e) {
    tM(Object.assign(Object.assign({}, this.bypassOptions), {
      doc: e,
      mutationCb: this.mutationCb,
      mirror: this.mirror,
      shadowDomManager: this
    }), t), tY(Object.assign(Object.assign({}, this.bypassOptions), {
      scrollCb: this.scrollCb,
      doc: t,
      mirror: this.mirror
    }))
  }
  observeAttachShadow(t) {
    if (t.contentWindow) {
      let e = this;
      this.restorePatches.push(ty(t.contentWindow.HTMLElement.prototype, "attachShadow", function(n) {
        return function() {
          let r = n.apply(this, arguments);
          return this.shadowRoot && e.addShadowRoot(this.shadowRoot, t.contentDocument), r
        }
      }))
    }
  }
  reset() {
    this.restorePatches.forEach(t => t())
  }
}
for (var tZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", tJ = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), tV = 0; tV < tZ.length; tV++) tJ[tZ.charCodeAt(tV)] = tV;
var tK = function(t) {
  var e, n = new Uint8Array(t),
    r = n.length,
    i = "";
  for (e = 0; e < r; e += 3) i += tZ[n[e] >> 2] + tZ[(3 & n[e]) << 4 | n[e + 1] >> 4] + tZ[(15 & n[e + 1]) << 2 | n[e + 2] >> 6] + tZ[63 & n[e + 2]];
  return r % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : r % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i
};
let tX = new Map,
  tQ = (t, e, n) => {
    var r, i;
    let s;
    if (!t || !(t1(t, e) || "object" == typeof t)) return;
    let a = t.constructor.name;
    let o = (r = n, i = a, !(s = tX.get(r)) && (s = new Map, tX.set(r, s)), !s.has(i) && s.set(i, []), s.get(i)),
      u = o.indexOf(t);
    return -1 === u && (u = o.length, o.push(t)), u
  },
  t0 = (t, e, n) => [...t].map(t => (function t(e, n, r) {
    if (e instanceof Array) return e.map(e => t(e, n, r));
    if (null === e);
    else if (e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray) return {
      rr_type: e.constructor.name,
      args: [Object.values(e)]
    };
    else if (e instanceof ArrayBuffer) {
      let t = e.constructor.name;
      return {
        rr_type: t,
        base64: tK(e)
      }
    } else if (e instanceof DataView) return {
      rr_type: e.constructor.name,
      args: [t(e.buffer, n, r), e.byteOffset, e.byteLength]
    };
    else if (e instanceof HTMLImageElement) {
      let t = e.constructor.name,
        {
          src: n
        } = e;
      return {
        rr_type: t,
        src: n
      }
    } else if (e instanceof ImageData) return {
      rr_type: e.constructor.name,
      args: [t(e.data, n, r), e.width, e.height]
    };
    else if (t1(e, n) || "object" == typeof e) {
      let t = e.constructor.name;
      return {
        rr_type: t,
        index: tQ(e, n, r)
      }
    }
    return e
  })(t, e, n)),
  t1 = (t, e) => !!["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter(t => "function" == typeof e[t]).find(n => t instanceof e[n]);

function t2(t, e, n, r, i, s, a, o) {
  let u = [];
  for (let l of Object.getOwnPropertyNames(t)) try {
    if ("function" != typeof t[l]) continue;
    let c = ty(t, l, function(u) {
      return function(...c) {
        let d = u.apply(this, c);
        if (tQ(d, o, t), !tE(this.canvas, r, s, i)) {
          a.getId(this.canvas);
          let r = t0([...c], o, t),
            i = {
              type: e,
              property: l,
              args: r
            };
          n(this.canvas, i)
        }
        return d
      }
    });
    u.push(c)
  } catch (i) {
    let r = tg(t, l, {
      set(t) {
        n(this.canvas, {
          type: e,
          property: l,
          args: [t],
          setter: !0
        })
      }
    });
    u.push(r)
  }
  return u
}
class t5 {
  reset() {
    this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers()
  }
  freeze() {
    this.frozen = !0
  }
  unfreeze() {
    this.frozen = !1
  }
  lock() {
    this.locked = !0
  }
  unlock() {
    this.locked = !1
  }
  constructor(t) {
    this.pendingCanvasMutations = new Map, this.rafStamps = {
      latestId: 0,
      invokeId: null
    }, this.frozen = !1, this.locked = !1, this.processMutation = function(t, e) {
      (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), !this.pendingCanvasMutations.has(t) && this.pendingCanvasMutations.set(t, []), this.pendingCanvasMutations.get(t).push(e)
    }, this.mutationCb = t.mutationCb, this.mirror = t.mirror, !0 === t.recordCanvas && this.initCanvasMutationObserver(t.win, t.blockClass, t.blockSelector, t.unblockSelector)
  }
  initCanvasMutationObserver(t, e, n, r) {
    this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
    let i = function(t, e, n, r) {
        let i = [];
        try {
          let s = ty(t.HTMLCanvasElement.prototype, "getContext", function(t) {
            return function(i, ...s) {
              return !tE(this, e, n, r) && !("__context" in this) && (this.__context = i), t.apply(this, [i, ...s])
            }
          });
          i.push(s)
        } catch (t) {
          console.error("failed to patch HTMLCanvasElement.prototype.getContext")
        }
        return () => {
          i.forEach(t => t())
        }
      }(t, e, r, n),
      s = function(t, e, n, r, i, s) {
        let a = [];
        for (let s of Object.getOwnPropertyNames(e.CanvasRenderingContext2D.prototype)) try {
          if ("function" != typeof e.CanvasRenderingContext2D.prototype[s]) continue;
          let o = ty(e.CanvasRenderingContext2D.prototype, s, function(e) {
            return function(...a) {
              return !tE(this.canvas, n, i, r) && setTimeout(() => {
                let e = [...a];
                if ("drawImage" === s && e[0] && e[0] instanceof HTMLCanvasElement) {
                  let t = e[0],
                    n = t.getContext("2d"),
                    r = null == n ? void 0 : n.getImageData(0, 0, t.width, t.height),
                    i = null == r ? void 0 : r.data;
                  e[0] = JSON.stringify(i)
                }
                t(this.canvas, {
                  type: b["2D"],
                  property: s,
                  args: e
                })
              }, 0), e.apply(this, a)
            }
          });
          a.push(o)
        } catch (r) {
          let n = tg(e.CanvasRenderingContext2D.prototype, s, {
            set(e) {
              t(this.canvas, {
                type: b["2D"],
                property: s,
                args: [e],
                setter: !0
              })
            }
          });
          a.push(n)
        }
        return () => {
          a.forEach(t => t())
        }
      }(this.processMutation.bind(this), t, e, r, n, this.mirror),
      a = function(t, e, n, r, i, s) {
        let a = [];
        return a.push(...t2(e.WebGLRenderingContext.prototype, b.WebGL, t, n, r, i, s, e)), void 0 !== e.WebGL2RenderingContext && a.push(...t2(e.WebGL2RenderingContext.prototype, b.WebGL2, t, n, r, i, s, e)), () => {
          a.forEach(t => t())
        }
      }(this.processMutation.bind(this), t, e, r, n, this.mirror);
    this.resetObservers = () => {
      i(), s(), a()
    }
  }
  startPendingCanvasMutationFlusher() {
    requestAnimationFrame(() => this.flushPendingCanvasMutations())
  }
  startRAFTimestamping() {
    let t = e => {
      this.rafStamps.latestId = e, requestAnimationFrame(t)
    };
    requestAnimationFrame(t)
  }
  flushPendingCanvasMutations() {
    this.pendingCanvasMutations.forEach((t, e) => {
      let n = this.mirror.getId(e);
      this.flushPendingCanvasMutationFor(e, n)
    }), requestAnimationFrame(() => this.flushPendingCanvasMutations())
  }
  flushPendingCanvasMutationFor(t, e) {
    if (this.frozen || this.locked) return;
    let n = this.pendingCanvasMutations.get(t);
    if (!n || -1 === e) return;
    let r = n.map(t => (function(t, e) {
        var n = {};
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && 0 > e.indexOf(r) && (n[r] = t[r]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols)
          for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++) 0 > e.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
        return n
      })(t, ["type"])),
      {
        type: i
      } = n[0];
    this.mutationCb({
      id: e,
      type: i,
      commands: r
    }), this.pendingCanvasMutations.delete(t)
  }
}

function t3(t) {
  return Object.assign(Object.assign({}, t), {
    timestamp: Date.now()
  })
}
let t6 = {
  map: {},
  getId: t => t && t.__sn ? t.__sn.id : -1,
  getNode(t) {
    return this.map[t] || null
  },
  removeNodeFromMap(t) {
    let e = t.__sn && t.__sn.id;
    delete this.map[e], t.childNodes && t.childNodes.forEach(t => this.removeNodeFromMap(t))
  },
  has(t) {
    return this.map.hasOwnProperty(t)
  },
  reset() {
    this.map = {}
  }
};

function t4(t = {}) {
  let e;
  let {
    emit: n,
    checkoutEveryNms: r,
    checkoutEveryNth: i,
    blockClass: o = "rr-block",
    blockSelector: u = null,
    unblockSelector: l = null,
    ignoreClass: c = "rr-ignore",
    ignoreSelector: d = null,
    maskTextClass: h = "rr-mask",
    maskTextSelector: _ = null,
    maskInputSelector: f = null,
    unmaskTextSelector: p = null,
    unmaskInputSelector: m = null,
    inlineStylesheet: v = !0,
    maskAllText: b = !1,
    maskAllInputs: E,
    maskInputOptions: S,
    slimDOMOptions: w,
    maskInputFn: k,
    maskTextFn: T,
    hooks: R,
    packFn: x,
    sampling: D = {},
    mousemoveWait: N,
    recordCanvas: C = !1,
    userTriggeredOnInput: U = !1,
    collectFonts: I = !1,
    inlineImages: A = !1,
    plugins: O,
    keepIframeSrcFn: B = () => !1,
    onMutation: G
  } = t;
  if (!n) throw Error("emit function is required");
  void 0 !== N && void 0 === D.mousemove && (D.mousemove = N);
  let M = !0 === E ? {
      color: !0,
      date: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
      textarea: !0,
      select: !0,
      radio: !0,
      checkbox: !0
    } : void 0 !== S ? S : {},
    Y = !0 === w || "all" === w ? {
      script: !0,
      comment: !0,
      headFavicon: !0,
      headWhitespace: !0,
      headMetaSocial: !0,
      headMetaRobots: !0,
      headMetaHttpEquiv: !0,
      headMetaVerification: !0,
      headMetaAuthorship: "all" === w,
      headMetaDescKeywords: "all" === w
    } : w || {};
  ! function(t = window) {
    "NodeList" in t && !t.NodeList.prototype.forEach && (t.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in t && !t.DOMTokenList.prototype.forEach && (t.DOMTokenList.prototype.forEach = Array.prototype.forEach), !Node.prototype.contains && (Node.prototype.contains = function(t) {
      if (!(0 in arguments)) throw TypeError("1 argument is required");
      do
        if (this === t) return !0; while (t = t && t.parentNode);
      return !1
    })
  }();
  let L = 0,
    z = t => {
      for (let e of O || []) e.eventProcessor && (t = e.eventProcessor(t));
      return x && (t = x(t)), t
    };
  s = (t, s) => {
    var o;
    if ((null === (o = tB[0]) || void 0 === o ? void 0 : o.isFrozen()) && t.type !== g.FullSnapshot && !(t.type === g.IncrementalSnapshot && t.data.source === y.Mutation) && tB.forEach(t => t.unfreeze()), n(z(t), s), t.type === g.FullSnapshot) e = t, L = 0;
    else if (t.type === g.IncrementalSnapshot) {
      if (t.data.source === y.Mutation && t.data.isAttachIframe) return;
      L++;
      let n = i && L >= i,
        s = r && t.timestamp - e.timestamp > r;
      (n || s) && a(!0)
    }
  };
  let $ = t => {
      s(t3({
        type: g.IncrementalSnapshot,
        data: Object.assign({
          source: y.Mutation
        }, t)
      }))
    },
    P = t => s(t3({
      type: g.IncrementalSnapshot,
      data: Object.assign({
        source: y.Scroll
      }, t)
    })),
    F = t => s(t3({
      type: g.IncrementalSnapshot,
      data: Object.assign({
        source: y.CanvasMutation
      }, t)
    })),
    j = new tq({
      mutationCb: $
    }),
    H = new t5({
      recordCanvas: C,
      mutationCb: F,
      win: window,
      blockClass: o,
      blockSelector: u,
      unblockSelector: l,
      mirror: t6
    }),
    q = new tW({
      mutationCb: $,
      scrollCb: P,
      bypassOptions: {
        onMutation: G,
        blockClass: o,
        blockSelector: u,
        unblockSelector: l,
        maskTextClass: h,
        maskTextSelector: _,
        unmaskTextSelector: p,
        maskInputSelector: f,
        unmaskInputSelector: m,
        inlineStylesheet: v,
        maskAllText: b,
        maskInputOptions: M,
        maskTextFn: T,
        maskInputFn: k,
        recordCanvas: C,
        inlineImages: A,
        sampling: D,
        slimDOMOptions: Y,
        iframeManager: j,
        canvasManager: H
      },
      mirror: t6
    });
  a = (t = !1) => {
    var e, n, r, i;
    s(t3({
      type: g.Meta,
      data: {
        href: window.location.href,
        width: tb(),
        height: tv()
      }
    }), t), tB.forEach(t => t.lock());
    let [a, c] = function(t, e) {
      let {
        blockClass: n = "rr-block",
        blockSelector: r = null,
        unblockSelector: i = null,
        maskTextClass: s = "rr-mask",
        maskTextSelector: a = null,
        unmaskTextSelector: o = null,
        inlineStylesheet: u = !0,
        inlineImages: l = !1,
        recordCanvas: c = !1,
        maskInputSelector: d = null,
        unmaskInputSelector: h = null,
        maskAllText: _ = !1,
        maskAllInputs: f = !1,
        maskTextFn: p,
        maskInputFn: m,
        slimDOM: g = !1,
        dataURLOptions: y,
        preserveWhiteSpace: v,
        onSerialize: b,
        onIframeLoad: E,
        iframeLoadTimeout: S,
        keepIframeSrcFn: w = () => !1
      } = e || {}, k = {};
      return [th(t, {
        doc: t,
        map: k,
        blockClass: n,
        blockSelector: r,
        unblockSelector: i,
        maskTextClass: s,
        maskTextSelector: a,
        unmaskTextSelector: o,
        skipChild: !1,
        inlineStylesheet: u,
        maskInputSelector: d,
        unmaskInputSelector: h,
        maskAllText: _,
        maskInputOptions: !0 === f ? {
          color: !0,
          date: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
          textarea: !0,
          select: !0
        } : !1 === f ? {} : f,
        maskTextFn: p,
        maskInputFn: m,
        slimDOMOptions: !0 === g || "all" === g ? {
          script: !0,
          comment: !0,
          headFavicon: !0,
          headWhitespace: !0,
          headMetaDescKeywords: "all" === g,
          headMetaSocial: !0,
          headMetaRobots: !0,
          headMetaHttpEquiv: !0,
          headMetaAuthorship: !0,
          headMetaVerification: !0
        } : !1 === g ? {} : g,
        dataURLOptions: y,
        inlineImages: l,
        recordCanvas: c,
        preserveWhiteSpace: v,
        onSerialize: b,
        onIframeLoad: E,
        iframeLoadTimeout: S,
        keepIframeSrcFn: w
      }), k]
    }(document, {
      blockClass: o,
      blockSelector: u,
      unblockSelector: l,
      maskTextClass: h,
      maskTextSelector: _,
      unmaskTextSelector: p,
      maskInputSelector: f,
      unmaskInputSelector: m,
      inlineStylesheet: v,
      maskAllText: b,
      maskAllInputs: M,
      maskTextFn: T,
      slimDOM: Y,
      recordCanvas: C,
      inlineImages: A,
      onSerialize: t => {
        tk(t) && j.addIframe(t), tT(t) && q.addShadowRoot(t.shadowRoot, document)
      },
      onIframeLoad: (t, e) => {
        j.attachIframe(t, e), q.observeAttachShadow(t)
      },
      keepIframeSrcFn: B
    });
    if (!a) return console.warn("Failed to snapshot the document");
    t6.map = c, s(t3({
      type: g.FullSnapshot,
      data: {
        node: a,
        initialOffset: {
          left: void 0 !== window.pageXOffset ? window.pageXOffset : (null == document ? void 0 : document.documentElement.scrollLeft) || (null === (n = null === (e = null == document ? void 0 : document.body) || void 0 === e ? void 0 : e.parentElement) || void 0 === n ? void 0 : n.scrollLeft) || (null == document ? void 0 : document.body.scrollLeft) || 0,
          top: void 0 !== window.pageYOffset ? window.pageYOffset : (null == document ? void 0 : document.documentElement.scrollTop) || (null === (i = null === (r = null == document ? void 0 : document.body) || void 0 === r ? void 0 : r.parentElement) || void 0 === i ? void 0 : i.scrollTop) || (null == document ? void 0 : document.body.scrollTop) || 0
        }
      }
    })), tB.forEach(t => t.unlock())
  };
  try {
    let t = [];
    t.push(t_("DOMContentLoaded", () => {
      s(t3({
        type: g.DomContentLoaded,
        data: {}
      }))
    }));
    let e = t => {
      var e;
      return tO(tF)({
        onMutation: G,
        mutationCb: $,
        mousemoveCb: (t, e) => s(t3({
          type: g.IncrementalSnapshot,
          data: {
            source: e,
            positions: t
          }
        })),
        mouseInteractionCb: t => s(t3({
          type: g.IncrementalSnapshot,
          data: Object.assign({
            source: y.MouseInteraction
          }, t)
        })),
        scrollCb: P,
        viewportResizeCb: t => s(t3({
          type: g.IncrementalSnapshot,
          data: Object.assign({
            source: y.ViewportResize
          }, t)
        })),
        inputCb: t => s(t3({
          type: g.IncrementalSnapshot,
          data: Object.assign({
            source: y.Input
          }, t)
        })),
        mediaInteractionCb: t => s(t3({
          type: g.IncrementalSnapshot,
          data: Object.assign({
            source: y.MediaInteraction
          }, t)
        })),
        styleSheetRuleCb: t => s(t3({
          type: g.IncrementalSnapshot,
          data: Object.assign({
            source: y.StyleSheetRule
          }, t)
        })),
        styleDeclarationCb: t => s(t3({
          type: g.IncrementalSnapshot,
          data: Object.assign({
            source: y.StyleDeclaration
          }, t)
        })),
        canvasMutationCb: F,
        fontCb: t => s(t3({
          type: g.IncrementalSnapshot,
          data: Object.assign({
            source: y.Font
          }, t)
        })),
        blockClass: o,
        ignoreClass: c,
        ignoreSelector: d,
        maskTextClass: h,
        maskTextSelector: _,
        unmaskTextSelector: p,
        maskInputSelector: f,
        unmaskInputSelector: m,
        maskInputOptions: M,
        inlineStylesheet: v,
        sampling: D,
        recordCanvas: C,
        inlineImages: A,
        userTriggeredOnInput: U,
        collectFonts: I,
        doc: t,
        maskAllText: b,
        maskInputFn: k,
        maskTextFn: T,
        blockSelector: u,
        unblockSelector: l,
        slimDOMOptions: Y,
        mirror: t6,
        iframeManager: j,
        shadowDomManager: q,
        canvasManager: H,
        plugins: (null === (e = null == O ? void 0 : O.filter(t => t.observer)) || void 0 === e ? void 0 : e.map(t => ({
          observer: t.observer,
          options: t.options,
          callback: e => s(t3({
            type: g.Plugin,
            data: {
              plugin: t.name,
              payload: e
            }
          }))
        }))) || []
      }, R)
    };
    j.addLoadListener(n => {
      try {
        t.push(e(n.contentDocument))
      } catch (t) {
        console.warn(t)
      }
    });
    let n = () => {
      a(), t.push(e(document))
    };
    return "interactive" === document.readyState || "complete" === document.readyState ? n() : t.push(t_("load", () => {
      s(t3({
        type: g.Load,
        data: {}
      })), n()
    }, window)), () => {
      t.forEach(t => t())
    }
  } catch (t) {
    console.warn(t)
  }
}

function t8(t) {
  return t > 9999999999 ? t : 1e3 * t
}
t4.addCustomEvent = (t, e) => {
  if (!s) throw Error("please add custom event after start recording");
  s(t3({
    type: g.Custom,
    data: {
      tag: t,
      payload: e
    }
  }))
}, t4.freezePage = () => {
  tB.forEach(t => t.freeze())
}, t4.takeFullSnapshot = t => {
  if (!a) throw Error("please take full snapshot after start recording");
  a(t)
}, t4.mirror = t6;

function t9(t, e) {
  if ("sentry.transaction" !== e.category)["ui.click", "ui.input"].includes(e.category) ? t.triggerUserActivity() : t.checkAndHandleExpiredSession(), t.addUpdate(() => (t.throttledAddEvent({
    type: g.Custom,
    timestamp: 1e3 * (e.timestamp || 0),
    data: {
      tag: "breadcrumb",
      payload: (0, N.Fv)(e, 10, 1e3)
    }
  }), "console" === e.category))
}

function t7(t) {
  let e = et(t);
  return e && e instanceof Element && e.closest("button,a") || e
}

function et(t) {
  return function(t) {
    return "object" == typeof t && !!t && "target" in t
  }(t) ? t.target : t
}
class ee {
  __init() {
    this._lastMutation = 0
  }
  __init2() {
    this._lastScroll = 0
  }
  __init3() {
    this._clicks = []
  }
  constructor(t, e, n = t9) {
    ee.prototype.__init.call(this), ee.prototype.__init2.call(this), ee.prototype.__init3.call(this), this._timeout = e.timeout / 1e3, this._threshold = e.threshold / 1e3, this._scollTimeout = e.scrollTimeout / 1e3, this._replay = t, this._ignoreSelector = e.ignoreSelector, this._addBreadcrumbEvent = n
  }
  addListeners() {
    var t;
    let e = () => {
      this._lastScroll = er()
    };
    let n = (t = () => {
        this._lastMutation = er()
      }, !o && (o = [], function() {
        (0, C.hl)(z, "open", function(t) {
          return function(...e) {
            if (o) try {
              o.forEach(t => t())
            } catch (t) {}
            return t.apply(z, e)
          }
        })
      }()), o.push(t), () => {
        let e = o ? o.indexOf(t) : -1;
        e > -1 && o.splice(e, 1)
      }),
      r = t => {
        if (!t.target) return;
        let e = t7(t);
        e && this._handleMultiClick(e)
      },
      i = new MutationObserver(() => {
        this._lastMutation = er()
      });
    i.observe(z.document.documentElement, {
      attributes: !0,
      characterData: !0,
      childList: !0,
      subtree: !0
    }), z.addEventListener("scroll", e, {
      passive: !0
    }), z.addEventListener("click", r, {
      passive: !0
    }), this._teardown = () => {
      z.removeEventListener("scroll", e), z.removeEventListener("click", r), n(), i.disconnect(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0
    }
  }
  removeListeners() {
    this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
  }
  handleClick(t, e) {
    var n;
    if (function(t, e) {
        return !!(!en.includes(t.tagName) || "INPUT" === t.tagName && !["submit", "button"].includes(t.getAttribute("type") || "") || "A" === t.tagName && (t.hasAttribute("download") || t.hasAttribute("target") && "_self" !== t.getAttribute("target")) || e && t.matches(e)) || !1
      }(e, this._ignoreSelector) || ! function(t) {
        return !!(t.data && "number" == typeof t.data.nodeId && t.timestamp)
      }(t)) return;
    let r = {
      timestamp: (n = t.timestamp) > 9999999999 ? n / 1e3 : n,
      clickBreadcrumb: t,
      clickCount: 0,
      node: e
    };
    this._clicks.push(r), 1 === this._clicks.length && this._scheduleCheckClicks()
  }
  _handleMultiClick(t) {
    this._getClicks(t).forEach(t => {
      t.clickCount++
    })
  }
  _getClicks(t) {
    return this._clicks.filter(e => e.node === t)
  }
  _checkClicks() {
    let t = [],
      e = er();
    for (let n of (this._clicks.forEach(n => {
        !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0), !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0), n.timestamp + this._timeout <= e && t.push(n)
      }), t)) {
      let t = this._clicks.indexOf(n);
      t > -1 && (this._generateBreadcrumbs(n), this._clicks.splice(t, 1))
    }
    this._clicks.length && this._scheduleCheckClicks()
  }
  _generateBreadcrumbs(t) {
    let e = this._replay,
      n = t.scrollAfter && t.scrollAfter <= this._scollTimeout,
      r = t.mutationAfter && t.mutationAfter <= this._threshold,
      {
        clickCount: i,
        clickBreadcrumb: s
      } = t;
    if (!n && !r) {
      let n = 1e3 * Math.min(t.mutationAfter || this._timeout, this._timeout),
        r = n < 1e3 * this._timeout ? "mutation" : "timeout",
        a = {
          type: "default",
          message: s.message,
          timestamp: s.timestamp,
          category: "ui.slowClickDetected",
          data: {
            ...s.data,
            url: z.location.href,
            route: e.getCurrentRoute(),
            timeAfterClickMs: n,
            endReason: r,
            clickCount: i || 1
          }
        };
      this._addBreadcrumbEvent(e, a);
      return
    }
    if (i > 1) {
      let t = {
        type: "default",
        message: s.message,
        timestamp: s.timestamp,
        category: "ui.multiClick",
        data: {
          ...s.data,
          url: z.location.href,
          route: e.getCurrentRoute(),
          clickCount: i,
          metric: !0
        }
      };
      this._addBreadcrumbEvent(e, t)
    }
  }
  _scheduleCheckClicks() {
    this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = setTimeout(() => this._checkClicks(), 1e3)
  }
}
let en = ["A", "BUTTON", "INPUT"];

function er() {
  return Date.now() / 1e3
}

function ei(t) {
  return {
    timestamp: Date.now() / 1e3,
    type: "default",
    ...t
  }
}(p = w || (w = {}))[p.Document = 0] = "Document", p[p.DocumentType = 1] = "DocumentType", p[p.Element = 2] = "Element", p[p.Text = 3] = "Text", p[p.CDATA = 4] = "CDATA", p[p.Comment = 5] = "Comment";
let es = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled"]),
  ea = t => e => {
    if (!t.isEnabled()) return;
    let n = function(t) {
      let {
        target: e,
        message: n
      } = function(t) {
        let e;
        let n = "click" === t.name,
          r = null;
        try {
          r = n ? t7(t.event) : et(t.event), e = (0, U.Rt)(r, {
            maxStringLength: 200
          }) || "<unknown>"
        } catch (t) {
          e = "<unknown>"
        }
        return {
          target: r,
          message: e
        }
      }(t);
      return ei({
        category: `ui.${t.name}`,
        ...eo(e, n)
      })
    }(e);
    if (!n) return;
    let r = "click" === e.name,
      i = r && e.event;
    r && t.clickDetector && i && !i.altKey && !i.metaKey && !i.ctrlKey && !i.shiftKey && ! function(t, e, n) {
      t.handleClick(e, n)
    }(t.clickDetector, n, t7(e.event)), t9(t, n)
  };

function eo(t, e) {
  let n = t && function(t) {
    return "__sn" in t
  }(t) && t.__sn.type === w.Element ? t.__sn : null;
  return {
    message: e,
    data: n ? {
      nodeId: n.id,
      node: {
        id: n.id,
        tagName: n.tagName,
        textContent: t ? Array.from(t.childNodes).map(t => "__sn" in t && t.__sn.type === w.Text && t.__sn.textContent).filter(Boolean).map(t => t.trim()).join("") : "",
        attributes: function(t) {
          let e = {};
          for (let n in t)
            if (es.has(n)) {
              let r = n;
              ("data-testid" === n || "data-test-id" === n) && (r = "testId"), e[r] = t[n]
            } return e
        }(n.attributes)
      }
    } : {}
  }
}
let eu = ["name", "type", "startTime", "transferSize", "duration"];

function el(t) {
  return function(e) {
    return eu.every(n => t[n] === e[n])
  }
}
let ec = `/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
function t(t){let e=t.length;for(;--e>=0;)t[e]=0}const e=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),a=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),i=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),n=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=new Array(576);t(s);const r=new Array(60);t(r);const o=new Array(512);t(o);const l=new Array(256);t(l);const h=new Array(29);t(h);const d=new Array(30);function _(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}let f,c,u;function w(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}t(d);const m=t=>t<256?o[t]:o[256+(t>>>7)],b=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},g=(t,e,a)=>{t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,b(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},p=(t,e,a)=>{g(t,a[2*e],a[2*e+1])},k=(t,e)=>{let a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},v=(t,e,a)=>{const i=new Array(16);let n,s,r=0;for(n=1;n<=15;n++)r=r+a[n-1]<<1,i[n]=r;for(s=0;s<=e;s++){let e=t[2*s+1];0!==e&&(t[2*s]=k(i[e]++,e))}},y=t=>{let e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.sym_next=t.matches=0},x=t=>{t.bi_valid>8?b(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},z=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[a]},A=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&z(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!z(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i},E=(t,i,n)=>{let s,r,o,_,f=0;if(0!==t.sym_next)do{s=255&t.pending_buf[t.sym_buf+f++],s+=(255&t.pending_buf[t.sym_buf+f++])<<8,r=t.pending_buf[t.sym_buf+f++],0===s?p(t,r,i):(o=l[r],p(t,o+256+1,i),_=e[o],0!==_&&(r-=h[o],g(t,r,_)),s--,o=m(s),p(t,o,n),_=a[o],0!==_&&(s-=d[o],g(t,s,_)))}while(f<t.sym_next);p(t,256,i)},R=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,s=e.stat_desc.elems;let r,o,l,h=-1;for(t.heap_len=0,t.heap_max=573,r=0;r<s;r++)0!==a[2*r]?(t.heap[++t.heap_len]=h=r,t.depth[r]=0):a[2*r+1]=0;for(;t.heap_len<2;)l=t.heap[++t.heap_len]=h<2?++h:0,a[2*l]=1,t.depth[l]=0,t.opt_len--,n&&(t.static_len-=i[2*l+1]);for(e.max_code=h,r=t.heap_len>>1;r>=1;r--)A(t,a,r);l=s;do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],A(t,a,1),o=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=o,a[2*l]=a[2*r]+a[2*o],t.depth[l]=(t.depth[r]>=t.depth[o]?t.depth[r]:t.depth[o])+1,a[2*r+1]=a[2*o+1]=l,t.heap[1]=l++,A(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,l=e.stat_desc.max_length;let h,d,_,f,c,u,w=0;for(f=0;f<=15;f++)t.bl_count[f]=0;for(a[2*t.heap[t.heap_max]+1]=0,h=t.heap_max+1;h<573;h++)d=t.heap[h],f=a[2*a[2*d+1]+1]+1,f>l&&(f=l,w++),a[2*d+1]=f,d>i||(t.bl_count[f]++,c=0,d>=o&&(c=r[d-o]),u=a[2*d],t.opt_len+=u*(f+c),s&&(t.static_len+=u*(n[2*d+1]+c)));if(0!==w){do{for(f=l-1;0===t.bl_count[f];)f--;t.bl_count[f]--,t.bl_count[f+1]+=2,t.bl_count[l]--,w-=2}while(w>0);for(f=l;0!==f;f--)for(d=t.bl_count[f];0!==d;)_=t.heap[--h],_>i||(a[2*_+1]!==f&&(t.opt_len+=(f-a[2*_+1])*a[2*_],a[2*_+1]=f),d--)}})(t,e),v(a,h,t.bl_count)},Z=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=r,r=e[2*(i+1)+1],++o<l&&n===r||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4))},U=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),i=0;i<=a;i++)if(n=r,r=e[2*(i+1)+1],!(++o<l&&n===r)){if(o<h)do{p(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==s&&(p(t,n,t.bl_tree),o--),p(t,16,t.bl_tree),g(t,o-3,2)):o<=10?(p(t,17,t.bl_tree),g(t,o-3,3)):(p(t,18,t.bl_tree),g(t,o-11,7));o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4)}};let S=!1;const D=(t,e,a,i)=>{g(t,0+(i?1:0),3),x(t),b(t,a),b(t,~a),a&&t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a};var T=(t,e,a,i)=>{let o,l,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),R(t,t.l_desc),R(t,t.d_desc),h=(t=>{let e;for(Z(t,t.dyn_ltree,t.l_desc.max_code),Z(t,t.dyn_dtree,t.d_desc.max_code),R(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*n[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),o=t.opt_len+3+7>>>3,l=t.static_len+3+7>>>3,l<=o&&(o=l)):o=l=a+5,a+4<=o&&-1!==e?D(t,e,a,i):4===t.strategy||l===o?(g(t,2+(i?1:0),3),E(t,s,r)):(g(t,4+(i?1:0),3),((t,e,a,i)=>{let s;for(g(t,e-257,5),g(t,a-1,5),g(t,i-4,4),s=0;s<i;s++)g(t,t.bl_tree[2*n[s]+1],3);U(t,t.dyn_ltree,e-1),U(t,t.dyn_dtree,a-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),E(t,t.dyn_ltree,t.dyn_dtree)),y(t),i&&x(t)},O={_tr_init:t=>{S||((()=>{let t,n,w,m,b;const g=new Array(16);for(w=0,m=0;m<28;m++)for(h[m]=w,t=0;t<1<<e[m];t++)l[w++]=m;for(l[w-1]=m,b=0,m=0;m<16;m++)for(d[m]=b,t=0;t<1<<a[m];t++)o[b++]=m;for(b>>=7;m<30;m++)for(d[m]=b<<7,t=0;t<1<<a[m]-7;t++)o[256+b++]=m;for(n=0;n<=15;n++)g[n]=0;for(t=0;t<=143;)s[2*t+1]=8,t++,g[8]++;for(;t<=255;)s[2*t+1]=9,t++,g[9]++;for(;t<=279;)s[2*t+1]=7,t++,g[7]++;for(;t<=287;)s[2*t+1]=8,t++,g[8]++;for(v(s,287,g),t=0;t<30;t++)r[2*t+1]=5,r[2*t]=k(t,5);f=new _(s,e,257,286,15),c=new _(r,a,0,30,15),u=new _(new Array(0),i,0,19,7)})(),S=!0),t.l_desc=new w(t.dyn_ltree,f),t.d_desc=new w(t.dyn_dtree,c),t.bl_desc=new w(t.bl_tree,u),t.bi_buf=0,t.bi_valid=0,y(t)},_tr_stored_block:D,_tr_flush_block:T,_tr_tally:(t,e,a)=>(t.pending_buf[t.sym_buf+t.sym_next++]=e,t.pending_buf[t.sym_buf+t.sym_next++]=e>>8,t.pending_buf[t.sym_buf+t.sym_next++]=a,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(l[a]+256+1)]++,t.dyn_dtree[2*m(e)]++),t.sym_next===t.sym_end),_tr_align:t=>{g(t,2,3),p(t,256,s),(t=>{16===t.bi_valid?(b(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var F=(t,e,a,i)=>{let n=65535&t|0,s=t>>>16&65535|0,r=0;for(;0!==a;){r=a>2e3?2e3:a,a-=r;do{n=n+e[i++]|0,s=s+n|0}while(--r);n%=65521,s%=65521}return n|s<<16|0};const L=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e})());var N=(t,e,a,i)=>{const n=L,s=i+a;t^=-1;for(let a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t},I={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},B={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:C,_tr_stored_block:H,_tr_flush_block:M,_tr_tally:j,_tr_align:K}=O,{Z_NO_FLUSH:P,Z_PARTIAL_FLUSH:Y,Z_FULL_FLUSH:G,Z_FINISH:X,Z_BLOCK:W,Z_OK:q,Z_STREAM_END:J,Z_STREAM_ERROR:Q,Z_DATA_ERROR:V,Z_BUF_ERROR:$,Z_DEFAULT_COMPRESSION:tt,Z_FILTERED:et,Z_HUFFMAN_ONLY:at,Z_RLE:it,Z_FIXED:nt,Z_DEFAULT_STRATEGY:st,Z_UNKNOWN:rt,Z_DEFLATED:ot}=B,lt=(t,e)=>(t.msg=I[e],e),ht=t=>2*t-(t>4?9:0),dt=t=>{let e=t.length;for(;--e>=0;)t[e]=0},_t=t=>{let e,a,i,n=t.w_size;e=t.hash_size,i=e;do{a=t.head[--i],t.head[i]=a>=n?a-n:0}while(--e);e=n,i=e;do{a=t.prev[--i],t.prev[i]=a>=n?a-n:0}while(--e)};let ft=(t,e,a)=>(e<<t.hash_shift^a)&t.hash_mask;const ct=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},ut=(t,e)=>{M(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,ct(t.strm)},wt=(t,e)=>{t.pending_buf[t.pending++]=e},mt=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},bt=(t,e,a,i)=>{let n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?t.adler=F(t.adler,e,n,a):2===t.state.wrap&&(t.adler=N(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)},gt=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,o=t.nice_match;const l=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+258;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(a=e,h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1]){s+=2,a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(i=258-(f-s),s=f-258,i>r){if(t.match_start=e,r=i,i>=o)break;c=h[s+r-1],u=h[s+r]}}}while((e=_[e&d])>l&&0!=--n);return r<=t.lookahead?r:t.lookahead},pt=t=>{const e=t.w_size;let a,i,n;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-262)&&(t.window.set(t.window.subarray(e,e+e-i),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,t.insert>t.strstart&&(t.insert=t.strstart),_t(t),i+=e),0===t.strm.avail_in)break;if(a=bt(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=a,t.lookahead+t.insert>=3)for(n=t.strstart-t.insert,t.ins_h=t.window[n],t.ins_h=ft(t,t.ins_h,t.window[n+1]);t.insert&&(t.ins_h=ft(t,t.ins_h,t.window[n+3-1]),t.prev[n&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=n,n++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)},kt=(t,e)=>{let a,i,n,s=t.pending_buf_size-5>t.w_size?t.w_size:t.pending_buf_size-5,r=0,o=t.strm.avail_in;do{if(a=65535,n=t.bi_valid+42>>3,t.strm.avail_out<n)break;if(n=t.strm.avail_out-n,i=t.strstart-t.block_start,a>i+t.strm.avail_in&&(a=i+t.strm.avail_in),a>n&&(a=n),a<s&&(0===a&&e!==X||e===P||a!==i+t.strm.avail_in))break;r=e===X&&a===i+t.strm.avail_in?1:0,H(t,0,0,r),t.pending_buf[t.pending-4]=a,t.pending_buf[t.pending-3]=a>>8,t.pending_buf[t.pending-2]=~a,t.pending_buf[t.pending-1]=~a>>8,ct(t.strm),i&&(i>a&&(i=a),t.strm.output.set(t.window.subarray(t.block_start,t.block_start+i),t.strm.next_out),t.strm.next_out+=i,t.strm.avail_out-=i,t.strm.total_out+=i,t.block_start+=i,a-=i),a&&(bt(t.strm,t.strm.output,t.strm.next_out,a),t.strm.next_out+=a,t.strm.avail_out-=a,t.strm.total_out+=a)}while(0===r);return o-=t.strm.avail_in,o&&(o>=t.w_size?(t.matches=2,t.window.set(t.strm.input.subarray(t.strm.next_in-t.w_size,t.strm.next_in),0),t.strstart=t.w_size,t.insert=t.strstart):(t.window_size-t.strstart<=o&&(t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,t.insert>t.strstart&&(t.insert=t.strstart)),t.window.set(t.strm.input.subarray(t.strm.next_in-o,t.strm.next_in),t.strstart),t.strstart+=o,t.insert+=o>t.w_size-t.insert?t.w_size-t.insert:o),t.block_start=t.strstart),t.high_water<t.strstart&&(t.high_water=t.strstart),r?4:e!==P&&e!==X&&0===t.strm.avail_in&&t.strstart===t.block_start?2:(n=t.window_size-t.strstart,t.strm.avail_in>n&&t.block_start>=t.w_size&&(t.block_start-=t.w_size,t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,n+=t.w_size,t.insert>t.strstart&&(t.insert=t.strstart)),n>t.strm.avail_in&&(n=t.strm.avail_in),n&&(bt(t.strm,t.window,t.strstart,n),t.strstart+=n,t.insert+=n>t.w_size-t.insert?t.w_size-t.insert:n),t.high_water<t.strstart&&(t.high_water=t.strstart),n=t.bi_valid+42>>3,n=t.pending_buf_size-n>65535?65535:t.pending_buf_size-n,s=n>t.w_size?t.w_size:n,i=t.strstart-t.block_start,(i>=s||(i||e===X)&&e!==P&&0===t.strm.avail_in&&i<=n)&&(a=i>n?n:i,r=e===X&&0===t.strm.avail_in&&a===i?1:0,H(t,t.block_start,a,r),t.block_start+=a,ct(t.strm)),r?3:1)},vt=(t,e)=>{let a,i;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a)),t.match_length>=3)if(i=j(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=ft(t,t.ins_h,t.window[t.strstart+1]);else i=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2},yt=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a),t.match_length<=5&&(t.strategy===et||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=j(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(ut(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(i=j(t,0,t.window[t.strstart-1]),i&&ut(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=j(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2};function xt(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}const zt=[new xt(0,0,0,0,kt),new xt(4,4,8,4,vt),new xt(4,5,16,8,vt),new xt(4,6,32,32,vt),new xt(4,4,16,16,yt),new xt(8,16,32,32,yt),new xt(8,16,128,128,yt),new xt(8,32,128,256,yt),new xt(32,128,258,1024,yt),new xt(32,258,258,4096,yt)];function At(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ot,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),dt(this.dyn_ltree),dt(this.dyn_dtree),dt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),dt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),dt(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Et=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||42!==e.status&&57!==e.status&&69!==e.status&&73!==e.status&&91!==e.status&&103!==e.status&&113!==e.status&&666!==e.status?1:0},Rt=t=>{if(Et(t))return lt(t,Q);t.total_in=t.total_out=0,t.data_type=rt;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=2===e.wrap?57:e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=-2,C(e),q},Zt=t=>{const e=Rt(t);var a;return e===q&&((a=t.state).window_size=2*a.w_size,dt(a.head),a.max_lazy_match=zt[a.level].max_lazy,a.good_match=zt[a.level].good_length,a.nice_match=zt[a.level].nice_length,a.max_chain_length=zt[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0),e},Ut=(t,e,a,i,n,s)=>{if(!t)return Q;let r=1;if(e===tt&&(e=6),i<0?(r=0,i=-i):i>15&&(r=2,i-=16),n<1||n>9||a!==ot||i<8||i>15||e<0||e>9||s<0||s>nt||8===i&&1!==r)return lt(t,Q);8===i&&(i=9);const o=new At;return t.state=o,o.strm=t,o.status=42,o.wrap=r,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new Uint8Array(2*o.w_size),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=3*(o.lit_bufsize-1),o.level=e,o.strategy=s,o.method=a,Zt(t)};var St={deflateInit:(t,e)=>Ut(t,e,ot,15,8,st),deflateInit2:Ut,deflateReset:Zt,deflateResetKeep:Rt,deflateSetHeader:(t,e)=>Et(t)||2!==t.state.wrap?Q:(t.state.gzhead=e,q),deflate:(t,e)=>{if(Et(t)||e>W||e<0)return t?lt(t,Q):Q;const a=t.state;if(!t.output||0!==t.avail_in&&!t.input||666===a.status&&e!==X)return lt(t,0===t.avail_out?$:Q);const i=a.last_flush;if(a.last_flush=e,0!==a.pending){if(ct(t),0===t.avail_out)return a.last_flush=-1,q}else if(0===t.avail_in&&ht(e)<=ht(i)&&e!==X)return lt(t,$);if(666===a.status&&0!==t.avail_in)return lt(t,$);if(42===a.status&&0===a.wrap&&(a.status=113),42===a.status){let e=ot+(a.w_bits-8<<4)<<8,i=-1;if(i=a.strategy>=at||a.level<2?0:a.level<6?1:6===a.level?2:3,e|=i<<6,0!==a.strstart&&(e|=32),e+=31-e%31,mt(a,e),0!==a.strstart&&(mt(a,t.adler>>>16),mt(a,65535&t.adler)),t.adler=1,a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(57===a.status)if(t.adler=0,wt(a,31),wt(a,139),wt(a,8),a.gzhead)wt(a,(a.gzhead.text?1:0)+(a.gzhead.hcrc?2:0)+(a.gzhead.extra?4:0)+(a.gzhead.name?8:0)+(a.gzhead.comment?16:0)),wt(a,255&a.gzhead.time),wt(a,a.gzhead.time>>8&255),wt(a,a.gzhead.time>>16&255),wt(a,a.gzhead.time>>24&255),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,255&a.gzhead.os),a.gzhead.extra&&a.gzhead.extra.length&&(wt(a,255&a.gzhead.extra.length),wt(a,a.gzhead.extra.length>>8&255)),a.gzhead.hcrc&&(t.adler=N(t.adler,a.pending_buf,a.pending,0)),a.gzindex=0,a.status=69;else if(wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,3),a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q;if(69===a.status){if(a.gzhead.extra){let e=a.pending,i=(65535&a.gzhead.extra.length)-a.gzindex;for(;a.pending+i>a.pending_buf_size;){let n=a.pending_buf_size-a.pending;if(a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex,a.gzindex+n),a.pending),a.pending=a.pending_buf_size,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex+=n,ct(t),0!==a.pending)return a.last_flush=-1,q;e=0,i-=n}let n=new Uint8Array(a.gzhead.extra);a.pending_buf.set(n.subarray(a.gzindex,a.gzindex+i),a.pending),a.pending+=i,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex=0}a.status=73}if(73===a.status){if(a.gzhead.name){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.name.length?255&a.gzhead.name.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),a.gzindex=0}a.status=91}if(91===a.status){if(a.gzhead.comment){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.comment.length?255&a.gzhead.comment.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i))}a.status=103}if(103===a.status){if(a.gzhead.hcrc){if(a.pending+2>a.pending_buf_size&&(ct(t),0!==a.pending))return a.last_flush=-1,q;wt(a,255&t.adler),wt(a,t.adler>>8&255),t.adler=0}if(a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(0!==t.avail_in||0!==a.lookahead||e!==P&&666!==a.status){let i=0===a.level?kt(a,e):a.strategy===at?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(pt(t),0===t.lookahead)){if(e===P)return 1;break}if(t.match_length=0,a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):a.strategy===it?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=258){if(pt(t),t.lookahead<=258&&e===P)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=t.strstart-1,i=r[n],i===r[++n]&&i===r[++n]&&i===r[++n])){s=t.strstart+258;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);t.match_length=258-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=j(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):zt[a.level].func(a,e);if(3!==i&&4!==i||(a.status=666),1===i||3===i)return 0===t.avail_out&&(a.last_flush=-1),q;if(2===i&&(e===Y?K(a):e!==W&&(H(a,0,0,!1),e===G&&(dt(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),ct(t),0===t.avail_out))return a.last_flush=-1,q}return e!==X?q:a.wrap<=0?J:(2===a.wrap?(wt(a,255&t.adler),wt(a,t.adler>>8&255),wt(a,t.adler>>16&255),wt(a,t.adler>>24&255),wt(a,255&t.total_in),wt(a,t.total_in>>8&255),wt(a,t.total_in>>16&255),wt(a,t.total_in>>24&255)):(mt(a,t.adler>>>16),mt(a,65535&t.adler)),ct(t),a.wrap>0&&(a.wrap=-a.wrap),0!==a.pending?q:J)},deflateEnd:t=>{if(Et(t))return Q;const e=t.state.status;return t.state=null,113===e?lt(t,V):q},deflateSetDictionary:(t,e)=>{let a=e.length;if(Et(t))return Q;const i=t.state,n=i.wrap;if(2===n||1===n&&42!==i.status||i.lookahead)return Q;if(1===n&&(t.adler=F(t.adler,e,a,0)),i.wrap=0,a>=i.w_size){0===n&&(dt(i.head),i.strstart=0,i.block_start=0,i.insert=0);let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),e=t,a=i.w_size}const s=t.avail_in,r=t.next_in,o=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,pt(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{i.ins_h=ft(i,i.ins_h,i.window[t+3-1]),i.prev[t&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=t,t++}while(--e);i.strstart=t,i.lookahead=2,pt(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=r,t.input=o,t.avail_in=s,i.wrap=n,q},deflateInfo:"pako deflate (from Nodeca project)"};const Dt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var Tt=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(const e in a)Dt(a,e)&&(t[e]=a[e])}}return t},Ot=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),i+=n.length}return a};let Ft=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Ft=!1}const Lt=new Uint8Array(256);for(let t=0;t<256;t++)Lt[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Lt[254]=Lt[254]=1;var Nt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,i,n,s,r=t.length,o=0;for(n=0;n<r;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),o+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(o),s=0,n=0;s<o;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},It=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue}let r=Lt[e];if(r>4)s[n++]=65533,i+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)e=e<<6|63&t[i++],r--;r>1?s[n++]=65533:e<65536?s[n++]=e:(e-=65536,s[n++]=55296|e>>10&1023,s[n++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&Ft)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a})(s,n)},Bt=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Lt[t[a]]>e?a:e};var Ct=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const Ht=Object.prototype.toString,{Z_NO_FLUSH:Mt,Z_SYNC_FLUSH:jt,Z_FULL_FLUSH:Kt,Z_FINISH:Pt,Z_OK:Yt,Z_STREAM_END:Gt,Z_DEFAULT_COMPRESSION:Xt,Z_DEFAULT_STRATEGY:Wt,Z_DEFLATED:qt}=B;function Jt(t){this.options=Tt({level:Xt,method:qt,chunkSize:16384,windowBits:15,memLevel:8,strategy:Wt},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=St.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==Yt)throw new Error(I[a]);if(e.header&&St.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?Nt(e.dictionary):"[object ArrayBuffer]"===Ht.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=St.deflateSetDictionary(this.strm,t),a!==Yt)throw new Error(I[a]);this._dict_set=!0}}function Qt(t,e){const a=new Jt(e);if(a.push(t,!0),a.err)throw a.msg||I[a.err];return a.result}Jt.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?Pt:Mt,"string"==typeof t?a.input=Nt(t):"[object ArrayBuffer]"===Ht.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;)if(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),(s===jt||s===Kt)&&a.avail_out<=6)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else{if(n=St.deflate(a,s),n===Gt)return a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),n=St.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Yt;if(0!==a.avail_out){if(s>0&&a.next_out>0)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else if(0===a.avail_in)break}else this.onData(a.output)}return!0},Jt.prototype.onData=function(t){this.chunks.push(t)},Jt.prototype.onEnd=function(t){t===Yt&&(this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Vt={Deflate:Jt,deflate:Qt,deflateRaw:function(t,e){return(e=e||{}).raw=!0,Qt(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,Qt(t,e)},constants:B};var $t=function(t,e){let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z,A;const E=t.state;a=t.next_in,z=t.input,i=a+(t.avail_in-5),n=t.next_out,A=t.output,s=n-(e-t.avail_out),r=n+(t.avail_out-257),o=E.dmax,l=E.wsize,h=E.whave,d=E.wnext,_=E.window,f=E.hold,c=E.bits,u=E.lencode,w=E.distcode,m=(1<<E.lenbits)-1,b=(1<<E.distbits)-1;t:do{c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=u[f&m];e:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,0===p)A[n++]=65535&g;else{if(!(16&p)){if(0==(64&p)){g=u[(65535&g)+(f&(1<<p)-1)];continue e}if(32&p){E.mode=16191;break t}t.msg="invalid literal/length code",E.mode=16209;break t}k=65535&g,p&=15,p&&(c<p&&(f+=z[a++]<<c,c+=8),k+=f&(1<<p)-1,f>>>=p,c-=p),c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=w[f&b];a:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,!(16&p)){if(0==(64&p)){g=w[(65535&g)+(f&(1<<p)-1)];continue a}t.msg="invalid distance code",E.mode=16209;break t}if(v=65535&g,p&=15,c<p&&(f+=z[a++]<<c,c+=8,c<p&&(f+=z[a++]<<c,c+=8)),v+=f&(1<<p)-1,v>o){t.msg="invalid distance too far back",E.mode=16209;break t}if(f>>>=p,c-=p,p=n-s,v>p){if(p=v-p,p>h&&E.sane){t.msg="invalid distance too far back",E.mode=16209;break t}if(y=0,x=_,0===d){if(y+=l-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}else if(d<p){if(y+=l+d-p,p-=d,p<k){k-=p;do{A[n++]=_[y++]}while(--p);if(y=0,d<k){p=d,k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}}else if(y+=d-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}for(;k>2;)A[n++]=x[y++],A[n++]=x[y++],A[n++]=x[y++],k-=3;k&&(A[n++]=x[y++],k>1&&(A[n++]=x[y++]))}else{y=n-v;do{A[n++]=A[y++],A[n++]=A[y++],A[n++]=A[y++],k-=3}while(k>2);k&&(A[n++]=A[y++],k>1&&(A[n++]=A[y++]))}break}}break}}while(a<i&&n<r);k=c>>3,a-=k,c-=k<<3,f&=(1<<c)-1,t.next_in=a,t.next_out=n,t.avail_in=a<i?i-a+5:5-(a-i),t.avail_out=n<r?r-n+257:257-(n-r),E.hold=f,E.bits=c};const te=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),ee=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),ae=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),ie=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var ne=(t,e,a,i,n,s,r,o)=>{const l=o.bits;let h,d,_,f,c,u,w=0,m=0,b=0,g=0,p=0,k=0,v=0,y=0,x=0,z=0,A=null;const E=new Uint16Array(16),R=new Uint16Array(16);let Z,U,S,D=null;for(w=0;w<=15;w++)E[w]=0;for(m=0;m<i;m++)E[e[a+m]]++;for(p=l,g=15;g>=1&&0===E[g];g--);if(p>g&&(p=g),0===g)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(b=1;b<g&&0===E[b];b++);for(p<b&&(p=b),y=1,w=1;w<=15;w++)if(y<<=1,y-=E[w],y<0)return-1;if(y>0&&(0===t||1!==g))return-1;for(R[1]=0,w=1;w<15;w++)R[w+1]=R[w]+E[w];for(m=0;m<i;m++)0!==e[a+m]&&(r[R[e[a+m]]++]=m);if(0===t?(A=D=r,u=20):1===t?(A=te,D=ee,u=257):(A=ae,D=ie,u=0),z=0,m=0,w=b,c=s,k=p,v=0,_=-1,x=1<<p,f=x-1,1===t&&x>852||2===t&&x>592)return 1;for(;;){Z=w-v,r[m]+1<u?(U=0,S=r[m]):r[m]>=u?(U=D[r[m]-u],S=A[r[m]-u]):(U=96,S=0),h=1<<w-v,d=1<<k,b=d;do{d-=h,n[c+(z>>v)+d]=Z<<24|U<<16|S|0}while(0!==d);for(h=1<<w-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,m++,0==--E[w]){if(w===g)break;w=e[a+r[m]]}if(w>p&&(z&f)!==_){for(0===v&&(v=p),c+=b,k=w-v,y=1<<k;k+v<g&&(y-=E[k+v],!(y<=0));)k++,y<<=1;if(x+=1<<k,1===t&&x>852||2===t&&x>592)return 1;_=z&f,n[_]=p<<24|k<<16|c-s|0}}return 0!==z&&(n[c+z]=w-v<<24|64<<16|0),o.bits=p,0};const{Z_FINISH:se,Z_BLOCK:re,Z_TREES:oe,Z_OK:le,Z_STREAM_END:he,Z_NEED_DICT:de,Z_STREAM_ERROR:_e,Z_DATA_ERROR:fe,Z_MEM_ERROR:ce,Z_BUF_ERROR:ue,Z_DEFLATED:we}=B,me=16209,be=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function ge(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const pe=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||e.mode<16180||e.mode>16211?1:0},ke=t=>{if(pe(t))return _e;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=16180,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,le},ve=t=>{if(pe(t))return _e;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,ke(t)},ye=(t,e)=>{let a;if(pe(t))return _e;const i=t.state;return e<0?(a=0,e=-e):(a=5+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?_e:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,ve(t))},xe=(t,e)=>{if(!t)return _e;const a=new ge;t.state=a,a.strm=t,a.window=null,a.mode=16180;const i=ye(t,e);return i!==le&&(t.state=null),i};let ze,Ae,Ee=!0;const Re=t=>{if(Ee){ze=new Int32Array(512),Ae=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(ne(1,t.lens,0,288,ze,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;ne(2,t.lens,0,32,Ae,0,t.work,{bits:5}),Ee=!1}t.lencode=ze,t.lenbits=9,t.distcode=Ae,t.distbits=5},Ze=(t,e,a,i)=>{let n;const s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),s.wnext=0,s.whave=s.wsize):(n=s.wsize-s.wnext,n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0};var Ue={inflateReset:ve,inflateReset2:ye,inflateResetKeep:ke,inflateInit:t=>xe(t,15),inflateInit2:xe,inflate:(t,e)=>{let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(pe(t)||!t.output||!t.input&&0!==t.avail_in)return _e;a=t.state,16191===a.mode&&(a.mode=16192),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,_=o,f=l,x=le;t:for(;;)switch(a.mode){case 16180:if(0===a.wrap){a.mode=16192;break}for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(2&a.wrap&&35615===h){0===a.wbits&&(a.wbits=15),a.check=0,A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0),h=0,d=0,a.mode=16181;break}if(a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",a.mode=me;break}if((15&h)!==we){t.msg="unknown compression method",a.mode=me;break}if(h>>>=4,d-=4,y=8+(15&h),0===a.wbits&&(a.wbits=y),y>15||y>a.wbits){t.msg="invalid window size",a.mode=me;break}a.dmax=1<<a.wbits,a.flags=0,t.adler=a.check=1,a.mode=512&h?16189:16191,h=0,d=0;break;case 16181:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.flags=h,(255&a.flags)!==we){t.msg="unknown compression method",a.mode=me;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=me;break}a.head&&(a.head.text=h>>8&1),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16182;case 16182:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.time=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,A[2]=h>>>16&255,A[3]=h>>>24&255,a.check=N(a.check,A,4,0)),h=0,d=0,a.mode=16183;case 16183:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.xflags=255&h,a.head.os=h>>8),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16184;case 16184:if(1024&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length=h,a.head&&(a.head.extra_len=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0}else a.head&&(a.head.extra=null);a.mode=16185;case 16185:if(1024&a.flags&&(c=a.length,c>o&&(c=o),c&&(a.head&&(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,a.length-=c),a.length))break t;a.length=0,a.mode=16186;case 16186:if(2048&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=16187;case 16187:if(4096&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.comment=null);a.mode=16188;case 16188:if(512&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(65535&a.check)){t.msg="header crc mismatch",a.mode=me;break}h=0,d=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=16191;break;case 16189:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}t.adler=a.check=be(h),h=0,d=0,a.mode=16190;case 16190:if(0===a.havedict)return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,de;t.adler=a.check=1,a.mode=16191;case 16191:if(e===re||e===oe)break t;case 16192:if(a.last){h>>>=7&d,d-=7&d,a.mode=16206;break}for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}switch(a.last=1&h,h>>>=1,d-=1,3&h){case 0:a.mode=16193;break;case 1:if(Re(a),a.mode=16199,e===oe){h>>>=2,d-=2;break t}break;case 2:a.mode=16196;break;case 3:t.msg="invalid block type",a.mode=me}h>>>=2,d-=2;break;case 16193:for(h>>>=7&d,d-=7&d;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",a.mode=me;break}if(a.length=65535&h,h=0,d=0,a.mode=16194,e===oe)break t;case 16194:a.mode=16195;case 16195:if(c=a.length,c){if(c>o&&(c=o),c>l&&(c=l),0===c)break t;n.set(i.subarray(s,s+c),r),o-=c,s+=c,l-=c,r+=c,a.length-=c;break}a.mode=16191;break;case 16196:for(;d<14;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.nlen=257+(31&h),h>>>=5,d-=5,a.ndist=1+(31&h),h>>>=5,d-=5,a.ncode=4+(15&h),h>>>=4,d-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=me;break}a.have=0,a.mode=16197;case 16197:for(;a.have<a.ncode;){for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.lens[Z[a.have++]]=7&h,h>>>=3,d-=3}for(;a.have<19;)a.lens[Z[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,E={bits:a.lenbits},x=ne(0,a.lens,0,19,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid code lengths set",a.mode=me;break}a.have=0,a.mode=16198;case 16198:for(;a.have<a.nlen+a.ndist;){for(;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(g<16)h>>>=m,d-=m,a.lens[a.have++]=g;else{if(16===g){for(R=m+2;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h>>>=m,d-=m,0===a.have){t.msg="invalid bit length repeat",a.mode=me;break}y=a.lens[a.have-1],c=3+(3&h),h>>>=2,d-=2}else if(17===g){for(R=m+3;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=3+(7&h),h>>>=3,d-=3}else{for(R=m+7;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=11+(127&h),h>>>=7,d-=7}if(a.have+c>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=me;break}for(;c--;)a.lens[a.have++]=y}}if(a.mode===me)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=me;break}if(a.lenbits=9,E={bits:a.lenbits},x=ne(1,a.lens,0,a.nlen,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid literal/lengths set",a.mode=me;break}if(a.distbits=6,a.distcode=a.distdyn,E={bits:a.distbits},x=ne(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E),a.distbits=E.bits,x){t.msg="invalid distances set",a.mode=me;break}if(a.mode=16199,e===oe)break t;case 16199:a.mode=16200;case 16200:if(o>=6&&l>=258){t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,$t(t,f),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,16191===a.mode&&(a.back=-1);break}for(a.back=0;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(b&&0==(240&b)){for(p=m,k=b,v=g;z=a.lencode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,a.length=g,0===b){a.mode=16205;break}if(32&b){a.back=-1,a.mode=16191;break}if(64&b){t.msg="invalid literal/length code",a.mode=me;break}a.extra=15&b,a.mode=16201;case 16201:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=16202;case 16202:for(;z=a.distcode[h&(1<<a.distbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(0==(240&b)){for(p=m,k=b,v=g;z=a.distcode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,64&b){t.msg="invalid distance code",a.mode=me;break}a.offset=g,a.extra=15&b,a.mode=16203;case 16203:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.offset+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=me;break}a.mode=16204;case 16204:if(0===l)break t;if(c=f-l,a.offset>c){if(c=a.offset-c,c>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=me;break}c>a.wnext?(c-=a.wnext,u=a.wsize-c):u=a.wnext-c,c>a.length&&(c=a.length),w=a.window}else w=n,u=r-a.offset,c=a.length;c>l&&(c=l),l-=c,a.length-=c;do{n[r++]=w[u++]}while(--c);0===a.length&&(a.mode=16200);break;case 16205:if(0===l)break t;n[r++]=a.length,l--,a.mode=16200;break;case 16206:if(a.wrap){for(;d<32;){if(0===o)break t;o--,h|=i[s++]<<d,d+=8}if(f-=l,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,r-f):F(a.check,n,f,r-f)),f=l,4&a.wrap&&(a.flags?h:be(h))!==a.check){t.msg="incorrect data check",a.mode=me;break}h=0,d=0}a.mode=16207;case 16207:if(a.wrap&&a.flags){for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=me;break}h=0,d=0}a.mode=16208;case 16208:x=he;break t;case me:x=fe;break t;case 16210:return ce;default:return _e}return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,(a.wsize||f!==t.avail_out&&a.mode<me&&(a.mode<16206||e!==se))&&Ze(t,t.output,t.next_out,f-t.avail_out),_-=t.avail_in,f-=t.avail_out,t.total_in+=_,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,t.next_out-f):F(a.check,n,f,t.next_out-f)),t.data_type=a.bits+(a.last?64:0)+(16191===a.mode?128:0)+(16199===a.mode||16194===a.mode?256:0),(0===_&&0===f||e===se)&&x===le&&(x=ue),x},inflateEnd:t=>{if(pe(t))return _e;let e=t.state;return e.window&&(e.window=null),t.state=null,le},inflateGetHeader:(t,e)=>{if(pe(t))return _e;const a=t.state;return 0==(2&a.wrap)?_e:(a.head=e,e.done=!1,le)},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return pe(t)?_e:(i=t.state,0!==i.wrap&&16190!==i.mode?_e:16190===i.mode&&(n=1,n=F(n,e,a,0),n!==i.check)?fe:(s=Ze(t,e,a,a),s?(i.mode=16210,ce):(i.havedict=1,le)))},inflateInfo:"pako inflate (from Nodeca project)"};var Se=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const De=Object.prototype.toString,{Z_NO_FLUSH:Te,Z_FINISH:Oe,Z_OK:Fe,Z_STREAM_END:Le,Z_NEED_DICT:Ne,Z_STREAM_ERROR:Ie,Z_DATA_ERROR:Be,Z_MEM_ERROR:Ce}=B;function He(t){this.options=Tt({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=Ue.inflateInit2(this.strm,e.windowBits);if(a!==Fe)throw new Error(I[a]);if(this.header=new Se,Ue.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Nt(e.dictionary):"[object ArrayBuffer]"===De.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(a=Ue.inflateSetDictionary(this.strm,e.dictionary),a!==Fe)))throw new Error(I[a])}He.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,o;if(this.ended)return!1;for(r=e===~~e?e:!0===e?Oe:Te,"[object ArrayBuffer]"===De.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),s=Ue.inflate(a,r),s===Ne&&n&&(s=Ue.inflateSetDictionary(a,n),s===Fe?s=Ue.inflate(a,r):s===Be&&(s=Ne));a.avail_in>0&&s===Le&&a.state.wrap>0&&0!==t[a.next_in];)Ue.inflateReset(a),s=Ue.inflate(a,r);switch(s){case Ie:case Be:case Ne:case Ce:return this.onEnd(s),this.ended=!0,!1}if(o=a.avail_out,a.next_out&&(0===a.avail_out||s===Le))if("string"===this.options.to){let t=Bt(a.output,a.next_out),e=a.next_out-t,n=It(a.output,t);a.next_out=e,a.avail_out=i-e,e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n)}else this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==Fe||0!==o){if(s===Le)return s=Ue.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===a.avail_in)break}}return!0},He.prototype.onData=function(t){this.chunks.push(t)},He.prototype.onEnd=function(t){t===Fe&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};const{Deflate:Me,deflate:je,deflateRaw:Ke,gzip:Pe}=Vt;var Ye=Me,Ge=je,Xe=B;const We=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const e=this._hasEvents?",":"";this.deflate.push(e+t,Xe.Z_SYNC_FLUSH),this._hasEvents=!0}finish(){if(this.deflate.push("]",Xe.Z_FINISH),this.deflate.err)throw this.deflate.err;const t=this.deflate.result;return this._init(),t}_init(){this._hasEvents=!1,this.deflate=new Ye,this.deflate.push("[",Xe.Z_NO_FLUSH)}},qe={clear:()=>{We.clear()},addEvent:t=>We.addEvent(t),finish:()=>We.finish(),compress:t=>function(t){return Ge(t)}(t)};addEventListener("message",(function(t){const e=t.data.method,a=t.data.id,i=t.data.arg;if(e in qe&&"function"==typeof qe[e])try{const t=qe[e](i);postMessage({id:a,method:e,success:!0,response:t})}catch(t){postMessage({id:a,method:e,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});`;
class ed extends Error {
  constructor() {
    super("Event buffer exceeded maximum size of 20000000.")
  }
}
class eh {
  __init() {
    this._totalSize = 0
  }
  constructor() {
    eh.prototype.__init.call(this), this.events = []
  }
  get hasEvents() {
    return this.events.length > 0
  }
  get type() {
    return "sync"
  }
  destroy() {
    this.events = []
  }
  async addEvent(t) {
    let e = JSON.stringify(t).length;
    if (this._totalSize += e, this._totalSize > 2e7) throw new ed;
    this.events.push(t)
  }
  finish() {
    return new Promise(t => {
      let e = this.events;
      this.clear(), t(JSON.stringify(e))
    })
  }
  clear() {
    this.events = [], this._totalSize = 0
  }
  getEarliestTimestamp() {
    let t = this.events.map(t => t.timestamp).sort()[0];
    return t ? t8(t) : null
  }
}
class e_ {
  constructor(t) {
    this._worker = t, this._id = 0
  }
  ensureReady() {
    return this._ensureReadyPromise ? this._ensureReadyPromise : (this._ensureReadyPromise = new Promise((t, e) => {
      this._worker.addEventListener("message", ({
        data: n
      }) => {
        n.success ? t() : e()
      }, {
        once: !0
      }), this._worker.addEventListener("error", t => {
        e(t)
      }, {
        once: !0
      })
    }), this._ensureReadyPromise)
  }
  destroy() {
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.log("[Replay] Destroying compression worker"), this._worker.terminate()
  }
  postMessage(t, e) {
    let n = this._getAndIncrementId();
    return new Promise((r, i) => {
      let s = ({
        data: e
      }) => {
        if (e.method === t && e.id === n) {
          if (this._worker.removeEventListener("message", s), !e.success) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error("[Replay]", e.response), i(Error("Error in compression worker"));
            return
          }
          r(e.response)
        }
      };
      this._worker.addEventListener("message", s), this._worker.postMessage({
        id: n,
        method: t,
        arg: e
      })
    })
  }
  _getAndIncrementId() {
    return this._id++
  }
}
class ef {
  __init() {
    this._totalSize = 0
  }
  constructor(t) {
    ef.prototype.__init.call(this), this._worker = new e_(t), this._earliestTimestamp = null
  }
  get hasEvents() {
    return !!this._earliestTimestamp
  }
  get type() {
    return "worker"
  }
  ensureReady() {
    return this._worker.ensureReady()
  }
  destroy() {
    this._worker.destroy()
  }
  addEvent(t) {
    let e = t8(t.timestamp);
    (!this._earliestTimestamp || e < this._earliestTimestamp) && (this._earliestTimestamp = e);
    let n = JSON.stringify(t);
    return (this._totalSize += n.length, this._totalSize > 2e7) ? Promise.reject(new ed) : this._sendEventToWorker(n)
  }
  finish() {
    return this._finishRequest()
  }
  clear() {
    this._earliestTimestamp = null, this._totalSize = 0, this._worker.postMessage("clear")
  }
  getEarliestTimestamp() {
    return this._earliestTimestamp
  }
  _sendEventToWorker(t) {
    return this._worker.postMessage("addEvent", t)
  }
  async _finishRequest() {
    let t = await this._worker.postMessage("finish");
    return this._earliestTimestamp = null, this._totalSize = 0, t
  }
}
class ep {
  constructor(t) {
    this._fallback = new eh, this._compression = new ef(t), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
  }
  get type() {
    return this._used.type
  }
  get hasEvents() {
    return this._used.hasEvents
  }
  destroy() {
    this._fallback.destroy(), this._compression.destroy()
  }
  clear() {
    return this._used.clear()
  }
  getEarliestTimestamp() {
    return this._used.getEarliestTimestamp()
  }
  addEvent(t) {
    return this._used.addEvent(t)
  }
  async finish() {
    return await this.ensureWorkerIsLoaded(), this._used.finish()
  }
  ensureWorkerIsLoaded() {
    return this._ensureWorkerIsLoadedPromise
  }
  async _ensureWorkerIsLoaded() {
    try {
      await this._compression.ensureReady()
    } catch (t) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.log("[Replay] Failed to load the compression worker, falling back to simple buffer");
      return
    }
    await this._switchToCompressionWorker()
  }
  async _switchToCompressionWorker() {
    let {
      events: t
    } = this._fallback, e = [];
    for (let n of t) e.push(this._compression.addEvent(n));
    this._used = this._compression;
    try {
      await Promise.all(e)
    } catch (t) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.warn("[Replay] Failed to add events when switching buffers.", t)
    }
  }
}

function em() {
  try {
    return "sessionStorage" in z && !!z.sessionStorage
  } catch (t) {
    return !1
  }
}

function eg(t, e, n = +new Date) {
  return null === t || void 0 === e || !!(e < 0) || 0 !== e && t + e <= n
}

function ey(t, e, n = +new Date) {
  return eg(t.started, e.maxSessionLife, n) || eg(t.lastActivity, e.sessionIdleExpire, n)
}

function ev(t) {
  return void 0 !== t && Math.random() < t
}

function eb(t) {
  if (!!em()) try {
    z.sessionStorage.setItem($, JSON.stringify(t))
  } catch (t) {}
}

function eE(t) {
  let e = Date.now(),
    n = t.id || (0, A.DM)(),
    r = t.started || e,
    i = t.lastActivity || e,
    s = t.segmentId || 0;
  return {
    id: n,
    started: r,
    lastActivity: i,
    segmentId: s,
    sampled: t.sampled,
    shouldRefresh: !0
  }
}

function eS({
  timeouts: t,
  currentSession: e,
  stickySession: n,
  sessionSampleRate: r,
  allowBuffering: i
}) {
  let s = e || n && function() {
    if (!em()) return null;
    try {
      let t = z.sessionStorage.getItem($);
      if (!t) return null;
      let e = JSON.parse(t);
      return eE(e)
    } catch (t) {
      return null
    }
  }();
  if (s) {
    if (!ey(s, t) || i && s.shouldRefresh) return {
      type: "saved",
      session: s
    };
    if (!s.shouldRefresh) return {
      type: "new",
      session: eE({
        sampled: !1
      })
    };
    else("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.log("[Replay] Session has expired")
  }
  return {
    type: "new",
    session: function({
      sessionSampleRate: t,
      allowBuffering: e,
      stickySession: n = !1
    }) {
      var r, i;
      let s = eE({
        sampled: (r = t, i = e, ev(r) ? "session" : !!i && "buffer")
      });
      return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.log(`[Replay] Creating new session: ${s.id}`), n && eb(s), s
    }({
      stickySession: n,
      sessionSampleRate: r,
      allowBuffering: i
    })
  }
}
async function ew(t, e, n) {
  if (!t.eventBuffer || t.isPaused() || t8(e.timestamp) + t.timeouts.sessionIdlePause < Date.now()) return null;
  try {
    n && t.eventBuffer.clear();
    let r = t.getOptions(),
      i = function(t, e) {
        try {
          if ("function" == typeof e && t.type === g.Custom) return e(t)
        } catch (t) {
          return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error("[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...", t), null
        }
        return t
      }(e, r.beforeAddRecordingEvent);
    if (!i) return;
    return await t.eventBuffer.addEvent(i)
  } catch (r) {
    let e = r && r instanceof ed ? "addEventSizeExceeded" : "addEvent";
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error(r), await t.stop(e);
    let n = (0, k.Gd)().getClient();
    n && n.recordDroppedEvent("internal_sdk_error", "replay")
  }
}

function ek(t) {
  return !t.type
}

function eT(t) {
  return "transaction" === t.type
}

function eR(t) {
  let e = function() {
    let t = (0, k.Gd)().getClient();
    if (!t) return !1;
    let e = t.getTransport();
    return !!e && (e.send.__sentry__baseTransport__ || !1)
  }();
  return (n, r) => {
    if (n.type && !eT(n)) return;
    let i = r && r.statusCode;
    if (e && (!i || i < 200 || i >= 300)) return;
    if (eT(n) && n.contexts && n.contexts.trace && n.contexts.trace.trace_id) {
      t.getContext().traceIds.add(n.contexts.trace.trace_id);
      return
    }
    if (!n.type) n.event_id && t.getContext().errorIds.add(n.event_id), "buffer" === t.recordingMode && n.tags && n.tags.replayId && setTimeout(() => {
      t.sendBufferedReplayOrFlush()
    })
  }
}

function ex(t, e) {
  return e.map(({
    type: e,
    start: n,
    end: r,
    name: i,
    data: s
  }) => {
    let a = t.throttledAddEvent({
      type: g.Custom,
      timestamp: n,
      data: {
        tag: "performanceSpan",
        payload: {
          op: e,
          description: i,
          startTimestamp: n,
          endTimestamp: r,
          data: s
        }
      }
    });
    return "string" == typeof a ? Promise.resolve(null) : a
  })
}

function eD(t, e) {
  var n, r;
  if (!t.isEnabled() || null === e) return;
  if (n = t, r = e.name, !((!("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) || !n.getOptions()._experiments.traceInternals) && function(t) {
      let e = (0, k.Gd)().getClient(),
        n = e && e.getDsn();
      return !!n && t.includes(n.host)
    }(r))) t.addUpdate(() => (ex(t, [e]), !0))
}
let eN = ["true", "false", "null"];

function eC(t) {
  let e = function(t) {
    let e = [];
    for (let n = 0; n < t.length; n++)(function(t, e, n) {
      let r = t[t.length - 1],
        i = e[n];
      if (!/\s/.test(i)) {
        if ('"' === i && ! function t(e, n) {
            return "\\" === e[n - 1] && !t(e, n - 1)
          }(e, n)) {
          (function(t, e) {
            if (14 === e) {
              t.pop(), t.push(15);
              return
            }
            if (22 === e) {
              t.pop(), t.push(23);
              return
            }
            if (13 === e) {
              t.push(14);
              return
            }
            if (21 === e) {
              t.push(22);
              return
            }
            if (10 === e) {
              t.push(12);
              return
            }
            if (12 === e) {
              t.pop(), t.push(11);
            }
          })(t, r);
          return
        }
        switch (i) {
          case "{":
            (function(t, e) {
              if (!e || 13 === e) {
                t.push(10);
                return
              }
              if (21 === e && t.push(10), 20 === e) {
                t.push(10);
              }
            })(t, r);
            break;
          case "[":
            (function(t, e) {
              if (!e || 13 === e) {
                t.push(20), t.push(21);
                return
              }
              if (21 === e && (t.push(20), t.push(21)), 20 === e) {
                t.push(20), t.push(21);
              }
            })(t, r);
            break;
          case ":":
            (function(t, e) {
              11 === e && (t.pop(), t.push(13))
            })(t, r);
            break;
          case ",":
            (function(t, e) {
              if (13 === e) {
                t.pop();
                return
              }
              if (15 === e) {
                t.pop(), t.pop();
                return
              }
              if (21 !== e) {
                if (23 === e) {
                  t.pop();
                }
              }
            })(t, r);
            break;
          case "}":
            (function(t, e) {
              10 === e && t.pop(), 13 === e && (t.pop(), t.pop()), 15 === e && (t.pop(), t.pop(), t.pop()), 13 === t[t.length - 1] && t.push(15), 21 === t[t.length - 1] && t.push(23)
            })(t, r);
            break;
          case "]":
            (function(t, e) {
              20 === e && t.pop(), 21 === e && (t.pop(), t.pop()), 23 === e && (t.pop(), t.pop(), t.pop()), 13 === t[t.length - 1] && t.push(15), 21 === t[t.length - 1] && t.push(23)
            })(t, r)
        }
      }
    })(e, t, n);
    return e
  }(t);
  return function(t, e) {
    if (!e.length) return t;
    let n = t,
      r = e.length - 1;
    n = function(t, e) {
      switch (e) {
        case 10:
          return `${t}"~~":"~~"`;
        case 11:
          return `${t}:"~~"`;
        case 12:
          return `${t}~~":"~~"`;
        case 13:
          return function(t) {
            let e = t.lastIndexOf(":"),
              n = t.slice(e + 1);
            return eN.includes(n.trim()) ? `${t},"~~":"~~"` : `${t.slice(0,e+1)}"~~"`
          }(t);
        case 14:
        case 22:
          return `${t}~~"`;
        case 15:
          return `${t},"~~":"~~"`;
        case 20:
          return `${t}"~~"`;
        case 21:
          return function(t) {
            let e = function(t) {
              for (let e = t.length - 1; e >= 0; e--) {
                let n = t[e];
                if ("," === n || "[" === n) return e
              }
              return -1
            }(t);
            if (e > -1) {
              let n = t.slice(e + 1);
              return eN.includes(n.trim()) ? `${t},"~~"` : `${t.slice(0,e+1)}"~~"`
            }
            return t
          }(t);
        case 23:
          return `${t},"~~"`
      }
      return t
    }(n, e[r]);
    for (let t = r; t >= 0; t--) switch (e[t]) {
      case 10:
        n = `${n}}`;
        break;
      case 20:
        n = `${n}]`
    }
    return n
  }(t, e)
}

function eU(t, e) {
  if (!!t) try {
    if ("string" == typeof t) return e.encode(t).length;
    if (t instanceof URLSearchParams) return e.encode(t.toString()).length;
    if (t instanceof FormData) {
      let n = eY(t);
      return e.encode(n).length
    }
    if (t instanceof Blob) return t.size;
    if (t instanceof ArrayBuffer) return t.byteLength
  } catch (t) {}
}

function eI(t) {
  if (!t) return;
  let e = parseInt(t, 10);
  return isNaN(e) ? void 0 : e
}

function eA(t) {
  return "string" == typeof t ? t : t instanceof URLSearchParams ? t.toString() : t instanceof FormData ? eY(t) : void 0
}

function eO(t, e) {
  if (!e) return null;
  let {
    startTimestamp: n,
    endTimestamp: r,
    url: i,
    method: s,
    statusCode: a,
    request: o,
    response: u
  } = e;
  return {
    type: t,
    start: n / 1e3,
    end: r / 1e3,
    name: i,
    data: (0, C.Jr)({
      method: s,
      statusCode: a,
      request: o,
      response: u
    })
  }
}

function eB(t) {
  return {
    headers: {},
    size: t,
    _meta: {
      warnings: ["URL_SKIPPED"]
    }
  }
}

function eG(t, e, n) {
  if (!e && 0 === Object.keys(t).length) return;
  if (!e) return {
    headers: t
  };
  if (!n) return {
    headers: t,
    size: e
  };
  let r = {
      headers: t,
      size: e
    },
    {
      body: i,
      warnings: s
    } = function(t) {
      if (!t || "string" != typeof t) return {
        body: t,
        warnings: []
      };
      let e = t.length > 15e4;
      if (function(t) {
          let e = t[0],
            n = t[t.length - 1];
          return "[" === e && "]" === n || "{" === e && "}" === n
        }(t)) try {
        let n = e ? eC(t.slice(0, 15e4)) : t;
        return {
          body: JSON.parse(n),
          warnings: e ? ["JSON_TRUNCATED"] : []
        }
      } catch (n) {
        return {
          body: e ? `${t.slice(0,15e4)}…` : t,
          warnings: e ? ["INVALID_JSON", "TEXT_TRUNCATED"] : ["INVALID_JSON"]
        }
      }
      return {
        body: e ? `${t.slice(0,15e4)}…` : t,
        warnings: e ? ["TEXT_TRUNCATED"] : []
      }
    }(n);
  return r.body = i, s.length > 0 && (r._meta = {
    warnings: s
  }), r
}

function eM(t, e) {
  return Object.keys(t).reduce((n, r) => {
    let i = r.toLowerCase();
    return e.includes(i) && t[r] && (n[i] = t[r]), n
  }, {})
}

function eY(t) {
  return new URLSearchParams(t).toString()
}

function eL(t, e) {
  let n = function(t, e = z.document.baseURI) {
    if (t.startsWith("http://") || t.startsWith("https://") || t.startsWith(z.location.origin)) return t;
    let n = new URL(t, e);
    if (n.origin !== new URL(e).origin) return t;
    let r = n.href;
    return !t.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
  }(t);
  return (0, B.U0)(n, e)
}
async function ez(t, e, n) {
  try {
    let r = await e$(t, e, n),
      i = eO("resource.fetch", r);
    eD(n.replay, i)
  } catch (t) {
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error("[Replay] Failed to capture fetch breadcrumb", t)
  }
}
async function e$(t, e, n) {
  let {
    startTimestamp: r,
    endTimestamp: i
  } = e, {
    url: s,
    method: a,
    status_code: o = 0,
    request_body_size: u,
    response_body_size: l
  } = t.data, c = eL(s, n.networkDetailAllowUrls) && !eL(s, n.networkDetailDenyUrls), d = c ? function({
    networkCaptureBodies: t,
    networkRequestHeaders: e
  }, n, r) {
    let i = function(t, e) {
      return 1 === t.length && "string" != typeof t[0] ? eq(t[0], e) : 2 === t.length ? eq(t[1], e) : {}
    }(n, e);
    return t ? eG(i, r, eA(ej(n))) : eG(i, r, void 0)
  }(n, e.input, u) : eB(u);
  return {
    startTimestamp: r,
    endTimestamp: i,
    url: s,
    method: a,
    statusCode: o,
    request: d,
    response: await eP(c, n, e.response, l)
  }
}
async function eP(t, {
  networkCaptureBodies: e,
  textEncoder: n,
  networkResponseHeaders: r
}, i, s) {
  if (!t && void 0 !== s) return eB(s);
  let a = eH(i.headers, r);
  if (!e && void 0 !== s) return eG(a, s, void 0);
  try {
    let r = i.clone(),
      o = await eF(r),
      u = o && o.length && void 0 === s ? eU(o, n) : s;
    if (!t) return eB(u);
    if (e) return eG(a, u, o);
    return eG(a, u, void 0)
  } catch (t) {
    return eG(a, s, void 0)
  }
}
async function eF(t) {
  try {
    return await t.text()
  } catch (t) {
    return
  }
}

function ej(t = []) {
  if (2 === t.length && "object" == typeof t[1]) return t[1].body
}

function eH(t, e) {
  let n = {};
  return e.forEach(e => {
    t.get(e) && (n[e] = t.get(e))
  }), n
}

function eq(t, e) {
  if (!t) return {};
  let n = t.headers;
  return n ? n instanceof Headers ? eH(n, e) : Array.isArray(n) ? {} : eM(n, e) : {}
}
async function eW(t, e, n) {
  try {
    let r = function(t, e, n) {
        let {
          startTimestamp: r,
          endTimestamp: i,
          input: s,
          xhr: a
        } = e, {
          url: o,
          method: u,
          status_code: l = 0,
          request_body_size: c,
          response_body_size: d
        } = t.data;
        if (!o) return null;
        if (!eL(o, n.networkDetailAllowUrls) || eL(o, n.networkDetailDenyUrls)) {
          let t = eB(c);
          return {
            startTimestamp: r,
            endTimestamp: i,
            url: o,
            method: u,
            statusCode: l,
            request: t,
            response: eB(d)
          }
        }
        let h = a[O.xU],
          _ = h ? eM(h.request_headers, n.networkRequestHeaders) : {},
          f = eM(function(t) {
            let e = t.getAllResponseHeaders();
            return e ? e.split("\r\n").reduce((t, e) => {
              let [n, r] = e.split(": ");
              return t[n.toLowerCase()] = r, t
            }, {}) : {}
          }(a), n.networkResponseHeaders),
          p = eG(_, c, n.networkCaptureBodies ? eA(s) : void 0);
        return {
          startTimestamp: r,
          endTimestamp: i,
          url: o,
          method: u,
          statusCode: l,
          request: p,
          response: eG(f, d, n.networkCaptureBodies ? e.xhr.responseText : void 0)
        }
      }(t, e, n),
      i = eO("resource.xhr", r);
    eD(n.replay, i)
  } catch (t) {
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error("[Replay] Failed to capture fetch breadcrumb", t)
  }
}
let eZ = null,
  eJ = t => e => {
    if (!t.isEnabled()) return;
    let n = function(t) {
      let e = t.getLastBreadcrumb && t.getLastBreadcrumb();
      if (eZ === e || !e) return null;
      return (eZ = e, !e.category || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(e.category) || e.category.startsWith("ui.")) ? null : "console" === e.category ? function(t) {
        let e = t.data && t.data.arguments;
        if (!Array.isArray(e) || 0 === e.length) return ei(t);
        let n = !1,
          r = e.map(t => {
            if (!t) return t;
            if ("string" == typeof t) return t.length > 5e3 ? (n = !0, `${t.slice(0,5e3)}…`) : t;
            if ("object" == typeof t) try {
              let e = (0, N.Fv)(t, 7),
                r = JSON.stringify(e);
              if (r.length > 5e3) {
                let t = eC(r.slice(0, 5e3)),
                  e = JSON.parse(t);
                return n = !0, e
              }
              return e
            } catch (t) {}
            return t
          });
        return ei({
          ...t,
          data: {
            ...t.data,
            arguments: r,
            ...n ? {
              _meta: {
                warnings: ["CONSOLE_ARG_TRUNCATED"]
              }
            } : {}
          }
        })
      }(e) : ei(e)
    }(e);
    if (!!n) t9(t, n)
  };

function eV(t) {
  return !!(t && t.on)
}
async function eK(t) {
  try {
    return Promise.all(ex(t, [function(t) {
      let {
        jsHeapSizeLimit: e,
        totalJSHeapSize: n,
        usedJSHeapSize: r
      } = t, i = Date.now() / 1e3;
      return {
        type: "memory",
        name: "memory",
        start: i,
        end: i,
        data: {
          memory: {
            jsHeapSizeLimit: e,
            totalJSHeapSize: n,
            usedJSHeapSize: r
          }
        }
      }
    }(z.performance.memory)]))
  } catch (t) {
    return []
  }
}
let eX = {
  resource: function(t) {
    let {
      entryType: e,
      initiatorType: n,
      name: r,
      responseEnd: i,
      startTime: s,
      decodedBodySize: a,
      encodedBodySize: o,
      responseStatus: u,
      transferSize: l
    } = t;
    return ["fetch", "xmlhttprequest"].includes(n) ? null : {
      type: `${e}.${n}`,
      start: e0(s),
      end: e0(i),
      name: r,
      data: {
        size: l,
        statusCode: u,
        decodedBodySize: a,
        encodedBodySize: o
      }
    }
  },
  paint: function(t) {
    let {
      duration: e,
      entryType: n,
      name: r,
      startTime: i
    } = t, s = e0(i);
    return {
      type: n,
      name: r,
      start: s,
      end: s + e,
      data: void 0
    }
  },
  navigation: function(t) {
    let {
      entryType: e,
      name: n,
      decodedBodySize: r,
      duration: i,
      domComplete: s,
      encodedBodySize: a,
      domContentLoadedEventStart: o,
      domContentLoadedEventEnd: u,
      domInteractive: l,
      loadEventStart: c,
      loadEventEnd: d,
      redirectCount: h,
      startTime: _,
      transferSize: f,
      type: p
    } = t;
    return 0 === i ? null : {
      type: `${e}.${p}`,
      start: e0(_),
      end: e0(s),
      name: n,
      data: {
        size: f,
        decodedBodySize: r,
        encodedBodySize: a,
        duration: i,
        domInteractive: l,
        domContentLoadedEventStart: o,
        domContentLoadedEventEnd: u,
        loadEventStart: c,
        loadEventEnd: d,
        domComplete: s,
        redirectCount: h
      }
    }
  },
  "largest-contentful-paint": function(t) {
    let {
      entryType: e,
      startTime: n,
      size: r
    } = t, i = 0;
    if (z.performance) {
      let t = z.performance.getEntriesByType("navigation")[0];
      i = t && t.activationStart || 0
    }
    let s = Math.max(n - i, 0),
      a = e0(i) + s / 1e3;
    return {
      type: e,
      name: e,
      start: a,
      end: a,
      data: {
        value: s,
        size: r,
        nodeId: t4.mirror.getId(t.element)
      }
    }
  }
};

function eQ(t) {
  return void 0 === eX[t.entryType] ? null : eX[t.entryType](t)
}

function e0(t) {
  return ((G.Z1 || z.performance.timeOrigin) + t) / 1e3
}
async function e1({
  client: t,
  scope: e,
  replayId: n,
  event: r
}) {
  let i = "object" != typeof t._integrations || null === t._integrations || Array.isArray(t._integrations) ? void 0 : Object.keys(t._integrations),
    s = await (0, R.R)(t.getOptions(), r, {
      event_id: n,
      integrations: i
    }, e);
  if (!s) return null;
  s.platform = s.platform || "javascript";
  let a = t.getSdkMetadata && t.getSdkMetadata(),
    {
      name: o,
      version: u
    } = a && a.sdk || {};
  return s.sdk = {
    ...s.sdk,
    name: o || "sentry.javascript.unknown",
    version: u || "0.0.0"
  }, s
}
async function e2({
  recordingData: t,
  replayId: e,
  segmentId: n,
  eventContext: r,
  timestamp: i,
  session: s
}) {
  var a, o, u, l;
  let c;
  let d = function({
      recordingData: t,
      headers: e
    }) {
      let n;
      let r = `${JSON.stringify(e)}
`;
      if ("string" == typeof t) n = `${r}${t}`;
      else {
        let e = new TextEncoder().encode(r);
        (n = new Uint8Array(e.length + t.length)).set(e), n.set(t, e.length)
      }
      return n
    }({
      recordingData: t,
      headers: {
        segment_id: n
      }
    }),
    {
      urls: h,
      errorIds: _,
      traceIds: f,
      initialTimestamp: p
    } = r,
    m = (0, k.Gd)(),
    g = m.getClient(),
    y = m.getScope(),
    v = g && g.getTransport(),
    b = g && g.getDsn();
  if (!g || !v || !b || !s.sampled) return;
  let E = {
      type: "replay_event",
      replay_start_timestamp: p / 1e3,
      timestamp: i / 1e3,
      error_ids: _,
      trace_ids: f,
      urls: h,
      replay_id: e,
      segment_id: n,
      replay_type: s.sampled
    },
    S = await e1({
      scope: y,
      client: g,
      replayId: e,
      event: E
    });
  if (!S) {
    g.recordDroppedEvent("event_processor", "replay", E), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.log("An event processor returned `null`, will not send event.");
    return
  }
  delete S.sdkProcessingMetadata;
  let w = (a = S, o = d, u = b, l = g.getOptions().tunnel, (0, M.Jd)((0, M.Cd)(a, (0, M.HY)(a), l, u), [
    [{
      type: "replay_event"
    }, a],
    [{
      type: "replay_recording",
      length: "string" == typeof o ? new TextEncoder().encode(o).length : o.length
    }, o]
  ]));
  try {
    c = await v.send(w)
  } catch (e) {
    let t = Error(P);
    try {
      t.cause = e
    } catch (t) {}
    throw t
  }
  if (!c) return c;
  if ("number" == typeof c.statusCode && (c.statusCode < 200 || c.statusCode >= 300)) throw new e5(c.statusCode);
  return c
}
class e5 extends Error {
  constructor(t) {
    super(`Transport returned status code ${t}`)
  }
}
async function e3(t, e = {
  count: 0,
  interval: 5e3
}) {
  let {
    recordingData: n,
    options: r
  } = t;
  if (!!n.length) try {
    return await e2(t), !0
  } catch (n) {
    if (n instanceof e5) throw n;
    if ((0, x.v)("Replays", {
        _retryCount: e.count
      }), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r._experiments && r._experiments.captureExceptions && (0, x.Tb)(n), e.count >= 3) {
      let t = Error(`${P} - max retries exceeded`);
      try {
        t.cause = n
      } catch (t) {}
      throw t
    }
    return e.interval *= ++e.count, new Promise((n, r) => {
      setTimeout(async () => {
        try {
          await e3(t, e), n(!0)
        } catch (t) {
          r(t)
        }
      }, e.interval)
    })
  }
}
let e6 = "__THROTTLED";
class e4 {
  __init() {
    this.eventBuffer = null
  }
  __init2() {
    this.performanceEvents = []
  }
  __init3() {
    this.recordingMode = "session"
  }
  __init4() {
    this.timeouts = {
      sessionIdlePause: 3e5,
      sessionIdleExpire: 9e5,
      maxSessionLife: 36e5
    }
  }
  __init5() {
    this._performanceObserver = null
  }
  __init6() {
    this._flushLock = null
  }
  __init7() {
    this._lastActivity = Date.now()
  }
  __init8() {
    this._isEnabled = !1
  }
  __init9() {
    this._isPaused = !1
  }
  __init10() {
    this._hasInitializedCoreListeners = !1
  }
  __init11() {
    this._stopRecording = null
  }
  __init12() {
    this._context = {
      errorIds: new Set,
      traceIds: new Set,
      urls: [],
      initialTimestamp: Date.now(),
      initialUrl: ""
    }
  }
  constructor({
    options: t,
    recordingOptions: e
  }) {
    e4.prototype.__init.call(this), e4.prototype.__init2.call(this), e4.prototype.__init3.call(this), e4.prototype.__init4.call(this), e4.prototype.__init5.call(this), e4.prototype.__init6.call(this), e4.prototype.__init7.call(this), e4.prototype.__init8.call(this), e4.prototype.__init9.call(this), e4.prototype.__init10.call(this), e4.prototype.__init11.call(this), e4.prototype.__init12.call(this), e4.prototype.__init13.call(this), e4.prototype.__init14.call(this), e4.prototype.__init15.call(this), e4.prototype.__init16.call(this), e4.prototype.__init17.call(this), e4.prototype.__init18.call(this), this._recordingOptions = e, this._options = t, this._debouncedFlush = function(t, e, n) {
      let r, i, s;
      let a = n && n.maxWait ? Math.max(n.maxWait, e) : 0;

      function o() {
        return u(), r = t()
      }

      function u() {
        void 0 !== i && clearTimeout(i), void 0 !== s && clearTimeout(s), i = s = void 0
      }

      function l() {
        return i && clearTimeout(i), i = setTimeout(o, e), a && void 0 === s && (s = setTimeout(o, a)), r
      }
      return l.cancel = u, l.flush = function() {
        return void 0 !== i || void 0 !== s ? o() : r
      }, l
    }(() => this._flush(), this._options.flushMinDelay, {
      maxWait: this._options.flushMaxDelay
    }), this._throttledAddEvent = function(t, e, n) {
      let r = new Map,
        i = t => {
          let e = t - 5;
          r.forEach((t, n) => {
            n < e && r.delete(n)
          })
        },
        s = () => [...r.values()].reduce((t, e) => t + e, 0),
        a = !1;
      return (...e) => {
        let n = Math.floor(Date.now() / 1e3);
        if (i(n), s() >= 300) {
          let t = a;
          return a = !0, t ? "__SKIPPED" : e6
        }
        a = !1;
        let o = r.get(n) || 0;
        return r.set(n, o + 1), t(...e)
      }
    }((t, e) => ew(this, t, e), 300, 5);
    let {
      slowClickTimeout: n,
      slowClickIgnoreSelectors: r
    } = this.getOptions(), i = n ? {
      threshold: Math.min(3e3, n),
      timeout: n,
      scrollTimeout: 300,
      ignoreSelector: r ? r.join(",") : ""
    } : void 0;
    i && (this.clickDetector = new ee(this, i))
  }
  getContext() {
    return this._context
  }
  isEnabled() {
    return this._isEnabled
  }
  isPaused() {
    return this._isPaused
  }
  getOptions() {
    return this._options
  }
  initializeSampling() {
    let {
      errorSampleRate: t,
      sessionSampleRate: e
    } = this._options;
    if ((!(t <= 0) || !(e <= 0)) && !!this._loadAndCheckSession()) {
      if (!this.session) {
        this._handleException(Error("Unable to initialize and create session"));
        return
      }
      this.session.sampled && "session" !== this.session.sampled && (this.recordingMode = "buffer"), this._initializeRecording()
    }
  }
  start() {
    if (this._isEnabled && "session" === this.recordingMode) throw Error("Replay recording is already in progress");
    if (this._isEnabled && "buffer" === this.recordingMode) throw Error("Replay buffering is in progress, call `flush()` to save the replay");
    let t = this.session && this.session.id,
      {
        session: e
      } = eS({
        timeouts: this.timeouts,
        stickySession: !!this._options.stickySession,
        currentSession: this.session,
        sessionSampleRate: 1,
        allowBuffering: !1
      });
    e.previousSessionId = t, this.session = e, this._initializeRecording()
  }
  startBuffering() {
    if (this._isEnabled) throw Error("Replay recording is already in progress");
    let t = this.session && this.session.id,
      {
        session: e
      } = eS({
        timeouts: this.timeouts,
        stickySession: !!this._options.stickySession,
        currentSession: this.session,
        sessionSampleRate: 0,
        allowBuffering: !0
      });
    e.previousSessionId = t, this.session = e, this.recordingMode = "buffer", this._initializeRecording()
  }
  startRecording() {
    try {
      var t;
      let e;
      this._stopRecording = t4({
        ...this._recordingOptions,
        ..."buffer" === this.recordingMode && {
          checkoutEveryNms: 6e4
        },
        emit: (t = this, e = !1, (n, r) => {
          if (!t.checkAndHandleExpiredSession()) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.warn("[Replay] Received replay event after session expired.");
            return
          }
          let i = r || !e;
          e = !0, t.addUpdate(() => {
            if ("buffer" === t.recordingMode && i && t.setInitialState(), ew(t, n, i), !i) return !1;
            if (function(t, e) {
                e && t.session && 0 === t.session.segmentId ? ew(t, function(t) {
                  let e = t.getOptions();
                  return {
                    type: g.Custom,
                    timestamp: Date.now(),
                    data: {
                      tag: "options",
                      payload: {
                        sessionSampleRate: e.sessionSampleRate,
                        errorSampleRate: e.errorSampleRate,
                        useCompressionOption: e.useCompression,
                        blockAllMedia: e.blockAllMedia,
                        maskAllText: e.maskAllText,
                        maskAllInputs: e.maskAllInputs,
                        useCompression: !!t.eventBuffer && "worker" === t.eventBuffer.type,
                        networkDetailHasUrls: e.networkDetailAllowUrls.length > 0,
                        networkCaptureBodies: e.networkCaptureBodies,
                        networkRequestHasHeaders: e.networkRequestHeaders.length > 0,
                        networkResponseHasHeaders: e.networkResponseHeaders.length > 0
                      }
                    }
                  }
                }(t), !1) : Promise.resolve(null)
              }(t, i), t.session && t.session.previousSessionId) return !0;
            if ("buffer" === t.recordingMode && t.session && t.eventBuffer) {
              let e = t.eventBuffer.getEarliestTimestamp();
              if (e) {
                let n = t.getOptions()._experiments.traceInternals ? console.info : I.kg.info;
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n(`[Replay] Updating session start time to earliest event in buffer at ${e}`), t.session.started = e, t.getOptions().stickySession && eb(t.session)
              }
            }
            return "session" === t.recordingMode && t.flush(), !0
          })
        }),
        onMutation: this._onMutationHandler
      })
    } catch (t) {
      this._handleException(t)
    }
  }
  stopRecording() {
    try {
      return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0
    } catch (t) {
      return this._handleException(t), !1
    }
  }
  async stop(t) {
    if (!!this._isEnabled) try {
      var e;
      if ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
        let e = `[Replay] Stopping Replay${t?` triggered by ${t}`:""}`;
        (this.getOptions()._experiments.traceInternals ? console.warn : I.kg.log)(e)
      }
      this._isEnabled = !1, this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), "session" === this.recordingMode && await this._flush({
          force: !0
        }), this.eventBuffer && this.eventBuffer.destroy(), this.eventBuffer = null, e = this,
        function() {
          if (!!em()) try {
            z.sessionStorage.removeItem($)
          } catch (t) {}
        }(), e.session = void 0
    } catch (t) {
      this._handleException(t)
    }
  }
  pause() {
    this._isPaused = !0, this.stopRecording()
  }
  resume() {
    if (!!this._loadAndCheckSession()) this._isPaused = !1, this.startRecording()
  }
  async sendBufferedReplayOrFlush({
    continueRecording: t = !0
  } = {}) {
    if ("session" === this.recordingMode) return this.flushImmediate();
    let e = Date.now(),
      n = this.getOptions()._experiments.traceInternals ? console.info : I.kg.info;
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n(`[Replay] Converting buffer to session, starting at ${e}`), await this.flushImmediate();
    let r = this.stopRecording();
    if (!!t && !!r) this.recordingMode = "session", this.session && (this.session.shouldRefresh = !1, this._updateUserActivity(e), this._updateSessionActivity(e), this.session.started = e, this._maybeSaveSession()), this.startRecording()
  }
  addUpdate(t) {
    let e = t();
    if ("buffer" !== this.recordingMode && !0 !== e) this._debouncedFlush()
  }
  triggerUserActivity() {
    if (this._updateUserActivity(), !this._stopRecording) {
      if (!this._loadAndCheckSession()) return;
      this.resume();
      return
    }
    this.checkAndHandleExpiredSession(), this._updateSessionActivity()
  }
  updateUserActivity() {
    this._updateUserActivity(), this._updateSessionActivity()
  }
  conditionalFlush() {
    return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
  }
  flush() {
    return this._debouncedFlush()
  }
  flushImmediate() {
    return this._debouncedFlush(), this._debouncedFlush.flush()
  }
  cancelFlush() {
    this._debouncedFlush.cancel()
  }
  getSessionId() {
    return this.session && this.session.id
  }
  checkAndHandleExpiredSession() {
    let t = this.getSessionId();
    if (this._lastActivity && eg(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled) {
      this.pause();
      return
    }
    return this._loadAndCheckSession() ? t === this.getSessionId() || (this._triggerFullSnapshot(), !1) : void 0
  }
  setInitialState() {
    let t = `${z.location.pathname}${z.location.hash}${z.location.search}`,
      e = `${z.location.origin}${t}`;
    this.performanceEvents = [], this._clearContext(), this._context.initialUrl = e, this._context.initialTimestamp = Date.now(), this._context.urls.push(e)
  }
  throttledAddEvent(t, e) {
    let n = this._throttledAddEvent(t, e);
    if (n === e6) {
      let t = ei({
        category: "replay.throttled"
      });
      this.addUpdate(() => {
        ew(this, {
          type: g.Custom,
          timestamp: t.timestamp || 0,
          data: {
            tag: "breadcrumb",
            payload: t,
            metric: !0
          }
        })
      })
    }
    return n
  }
  getCurrentRoute() {
    let t = this.lastTransaction || (0, k.Gd)().getScope().getTransaction();
    if (!!t && !!["route", "custom"].includes(t.metadata.source)) return t.name
  }
  _initializeRecording() {
    this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = function({
      useCompression: t
    }) {
      if (t && window.Worker) try {
        let t = function() {
          let t = new Blob([ec]);
          return URL.createObjectURL(t)
        }();
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.log("[Replay] Using compression worker");
        let e = new Worker(t);
        return new ep(e)
      } catch (t) {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.log("[Replay] Failed to create compression worker")
      }
      return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.log("[Replay] Using simple buffer"), new eh
    }({
      useCompression: this._options.useCompression
    }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this.startRecording()
  }
  _handleException(t) {
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error("[Replay]", t), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this._options._experiments && this._options._experiments.captureExceptions && (0, x.Tb)(t)
  }
  _loadAndCheckSession() {
    let {
      type: t,
      session: e
    } = eS({
      timeouts: this.timeouts,
      stickySession: !!this._options.stickySession,
      currentSession: this.session,
      sessionSampleRate: this._options.sessionSampleRate,
      allowBuffering: this._options.errorSampleRate > 0 || "buffer" === this.recordingMode
    });
    "new" === t && this.setInitialState();
    let n = this.getSessionId();
    return e.id !== n && (e.previousSessionId = n), this.session = e, !!this.session.sampled || (this.stop("session unsampled"), !1)
  }
  _addListeners() {
    try {
      z.document.addEventListener("visibilitychange", this._handleVisibilityChange), z.addEventListener("blur", this._handleWindowBlur), z.addEventListener("focus", this._handleWindowFocus), z.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), !this._hasInitializedCoreListeners && (! function(t) {
        var e;
        let n = (0, k.Gd)().getScope(),
          r = (0, k.Gd)().getClient();
        n && n.addScopeListener(eJ(t)), (0, O.oq)("dom", ea(t)), (0, O.oq)("history", (e = t, t => {
            if (!e.isEnabled()) return;
            let n = function(t) {
              let {
                from: e,
                to: n
              } = t, r = Date.now() / 1e3;
              return {
                type: "navigation.push",
                start: r,
                end: r,
                name: n,
                data: {
                  previous: e
                }
              }
            }(t);
            if (null !== n) e.getContext().urls.push(n.name), e.triggerUserActivity(), e.addUpdate(() => (ex(e, [n]), !1))
          })), ! function(t) {
            let e = (0, k.Gd)().getClient();
            try {
              let i = new TextEncoder,
                {
                  networkDetailAllowUrls: s,
                  networkDetailDenyUrls: a,
                  networkCaptureBodies: o,
                  networkRequestHeaders: u,
                  networkResponseHeaders: l
                } = t.getOptions(),
                c = {
                  replay: t,
                  textEncoder: i,
                  networkDetailAllowUrls: s,
                  networkDetailDenyUrls: a,
                  networkCaptureBodies: o,
                  networkRequestHeaders: u,
                  networkResponseHeaders: l
                };
              if (e && e.on) e.on("beforeAddBreadcrumb", (t, e) => (function(t, e, n) {
                if (!!e.data) try {
                  (function(t) {
                    return "xhr" === t.category
                  })(e) && function(t) {
                    return t && t.xhr
                  }(n) && (! function(t, e, n) {
                    let {
                      xhr: r,
                      input: i
                    } = e, s = eU(i, n.textEncoder), a = r.getResponseHeader("content-length") ? eI(r.getResponseHeader("content-length")) : eU(r.response, n.textEncoder);
                    void 0 !== s && (t.data.request_body_size = s), void 0 !== a && (t.data.response_body_size = a)
                  }(e, n, t), eW(e, n, t)),
                  function(t) {
                    return "fetch" === t.category
                  }(e) && function(t) {
                    return t && t.response
                  }(n) && (! function(t, e, n) {
                    let {
                      input: r,
                      response: i
                    } = e, s = eU(ej(r), n.textEncoder), a = i ? eI(i.headers.get("content-length")) : void 0;
                    void 0 !== s && (t.data.request_body_size = s), void 0 !== a && (t.data.response_body_size = a)
                  }(e, n, t), ez(e, n, t))
                } catch (t) {
                  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.warn("Error when enriching network breadcrumb")
                }
              })(c, t, e));
              else {
                var n, r;
                (0, O.oq)("fetch", (n = t, t => {
                  if (!!n.isEnabled()) eD(n, function(t) {
                    let {
                      startTimestamp: e,
                      endTimestamp: n,
                      fetchData: r,
                      response: i
                    } = t;
                    if (!n) return null;
                    let {
                      method: s,
                      url: a
                    } = r;
                    return {
                      type: "resource.fetch",
                      start: e / 1e3,
                      end: n / 1e3,
                      name: a,
                      data: {
                        method: s,
                        statusCode: i ? i.status : void 0
                      }
                    }
                  }(t))
                })), (0, O.oq)("xhr", (r = t, t => {
                  if (!!r.isEnabled()) eD(r, function(t) {
                    let {
                      startTimestamp: e,
                      endTimestamp: n,
                      xhr: r
                    } = t, i = r[O.xU];
                    if (!e || !n || !i) return null;
                    let {
                      method: s,
                      url: a,
                      status_code: o
                    } = i;
                    return void 0 === a ? null : {
                      type: "resource.xhr",
                      name: a,
                      start: e / 1e3,
                      end: n / 1e3,
                      data: {
                        method: s,
                        statusCode: o
                      }
                    }
                  }(t))
                }))
              }
            } catch (t) {}
          }(t), (0, T.c)(function(t, e = !1) {
            let n = e ? eR(t) : void 0;
            return (e, r) => {
              var i, s, a, o;
              if ("replay_event" === e.type) return delete e.breadcrumbs, e;
              if (e.type && !eT(e)) return e;
              if (i = e, s = r, !i.type && i.exception && i.exception.values && i.exception.values.length && (s.originalException && s.originalException.__rrweb__ || i.exception.values.some(t => !!t.stacktrace && !!t.stacktrace.frames && !!t.stacktrace.frames.length && t.stacktrace.frames.some(t => t.filename && t.filename.includes("/rrweb/src/")))) && !t.getOptions()._experiments.captureExceptions) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.log("[Replay] Ignoring error from rrweb internals", e), null;
              return a = t, o = e, ("buffer" === a.recordingMode && o.message !== P && o.exception && !o.type && ev(a.getOptions().errorSampleRate) || "session" === t.recordingMode) && (e.tags = {
                ...e.tags,
                replayId: t.getSessionId()
              }), n && n(e, {
                statusCode: 200
              }), e
            }
          }(t, ! function(t) {
            return !!(t && t.on)
          }(r))),
          function(t) {
            return !!(t && t.on)
          }(r) && (r.on("afterSendEvent", eR(t)), r.on("createDsc", e => {
            let n = t.getSessionId();
            n && t.isEnabled() && "session" === t.recordingMode && (e.replay_id = n)
          }), r.on("startTransaction", e => {
            t.lastTransaction = e
          }), r.on("finishTransaction", e => {
            t.lastTransaction = e
          }))
      }(this), this._hasInitializedCoreListeners = !0)
    } catch (t) {
      this._handleException(t)
    }
    if ("PerformanceObserver" in z) this._performanceObserver = function(t) {
      let e = new PerformanceObserver(e => {
        let n = function(t, e) {
          let [n, r, i] = t.reduce((t, e) => ("navigation" === e.entryType ? t[0].push(e) : "largest-contentful-paint" === e.entryType ? t[1].push(e) : t[2].push(e), t), [
            [],
            [],
            []
          ]), s = [], a = [], o = r.length ? r[r.length - 1] : void 0;
          return e.forEach(t => {
            if ("largest-contentful-paint" === t.entryType) {
              (!o || o.startTime < t.startTime) && (o = t);
              return
            }
            if ("navigation" === t.entryType) {
              t.duration > 0 && !n.find(el(t)) && !a.find(el(t)) && a.push(t);
              return
            }
            s.push(t)
          }), [...o ? [o] : [], ...n, ...i, ...s, ...a].sort((t, e) => t.startTime - e.startTime)
        }(t.performanceEvents, e.getEntries());
        t.performanceEvents = n
      });
      return ["element", "event", "first-input", "largest-contentful-paint", "layout-shift", "longtask", "navigation", "paint", "resource"].forEach(t => {
        try {
          e.observe({
            type: t,
            buffered: !0
          })
        } catch (t) {}
      }), e
    }(this)
  }
  _removeListeners() {
    try {
      z.document.removeEventListener("visibilitychange", this._handleVisibilityChange), z.removeEventListener("blur", this._handleWindowBlur), z.removeEventListener("focus", this._handleWindowFocus), z.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceObserver && (this._performanceObserver.disconnect(), this._performanceObserver = null)
    } catch (t) {
      this._handleException(t)
    }
  }
  __init13() {
    this._handleVisibilityChange = () => {
      "visible" === z.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
    }
  }
  __init14() {
    this._handleWindowBlur = () => {
      let t = ei({
        category: "ui.blur"
      });
      this._doChangeToBackgroundTasks(t)
    }
  }
  __init15() {
    this._handleWindowFocus = () => {
      let t = ei({
        category: "ui.focus"
      });
      this._doChangeToForegroundTasks(t)
    }
  }
  __init16() {
    this._handleKeyboardEvent = t => {
      ! function(t, e) {
        if (!t.isEnabled()) return;
        t.updateUserActivity();
        let n = function(t) {
          let {
            metaKey: e,
            shiftKey: n,
            ctrlKey: r,
            altKey: i,
            key: s,
            target: a
          } = t;
          if (!a || function(t) {
              return "INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable
            }(a) || !s) return null;
          let o = e || r || i,
            u = 1 === s.length;
          if (!o && u) return null;
          let l = (0, U.Rt)(a, {
              maxStringLength: 200
            }) || "<unknown>",
            c = eo(a, l);
          return ei({
            category: "ui.keyDown",
            message: l,
            data: {
              ...c.data,
              metaKey: e,
              shiftKey: n,
              ctrlKey: r,
              altKey: i,
              key: s
            }
          })
        }(e);
        if (!!n) t9(t, n)
      }(this, t)
    }
  }
  _doChangeToBackgroundTasks(t) {
    if (!this.session) return;
    let e = ey(this.session, this.timeouts);
    t && !e && this._createCustomBreadcrumb(t), this.conditionalFlush()
  }
  _doChangeToForegroundTasks(t) {
    if (!!this.session) {
      if (!this.checkAndHandleExpiredSession()) {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.log("[Replay] Document has become active, but session has expired");
        return
      }
      t && this._createCustomBreadcrumb(t)
    }
  }
  _triggerFullSnapshot(t = !0) {
    try {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.log("[Replay] Taking full rrweb snapshot"), t4.takeFullSnapshot(t)
    } catch (t) {
      this._handleException(t)
    }
  }
  _updateUserActivity(t = Date.now()) {
    this._lastActivity = t
  }
  _updateSessionActivity(t = Date.now()) {
    this.session && (this.session.lastActivity = t, this._maybeSaveSession())
  }
  _createCustomBreadcrumb(t) {
    this.addUpdate(() => {
      this.throttledAddEvent({
        type: g.Custom,
        timestamp: t.timestamp || 0,
        data: {
          tag: "breadcrumb",
          payload: t
        }
      })
    })
  }
  _addPerformanceEntries() {
    let t = [...this.performanceEvents];
    return this.performanceEvents = [], Promise.all(ex(this, t.map(eQ).filter(Boolean)))
  }
  _clearContext() {
    this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = []
  }
  _updateInitialTimestampFromEventBuffer() {
    let {
      session: t,
      eventBuffer: e
    } = this;
    if (!t || !e || t.segmentId) return;
    let n = e.getEarliestTimestamp();
    n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n)
  }
  _popEventContext() {
    let t = {
      initialTimestamp: this._context.initialTimestamp,
      initialUrl: this._context.initialUrl,
      errorIds: Array.from(this._context.errorIds),
      traceIds: Array.from(this._context.traceIds),
      urls: this._context.urls
    };
    return this._clearContext(), t
  }
  async _runFlush() {
    if (!this.session || !this.eventBuffer) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error("[Replay] No session or eventBuffer found to flush.");
      return
    }
    if (await this._addPerformanceEntries(), !this.eventBuffer || !this.eventBuffer.hasEvents) return;
    if (await eK(this), !!this.eventBuffer) try {
      this._updateInitialTimestampFromEventBuffer();
      let t = await this.eventBuffer.finish(),
        e = this.session.id,
        n = this._popEventContext(),
        r = this.session.segmentId++;
      this._maybeSaveSession(), await e3({
        replayId: e,
        recordingData: t,
        segmentId: r,
        eventContext: n,
        session: this.session,
        options: this.getOptions(),
        timestamp: Date.now()
      })
    } catch (e) {
      this._handleException(e), this.stop("sendReplay");
      let t = (0, k.Gd)().getClient();
      t && t.recordDroppedEvent("send_error", "replay")
    }
  }
  __init17() {
    this._flush = async ({
      force: t = !1
    } = {}) => {
      if (!this._isEnabled && !t) return;
      if (!this.checkAndHandleExpiredSession()) {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error("[Replay] Attempting to finish replay event after session expired.");
        return
      }
      if (!this.session) {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error("[Replay] No session found to flush.");
        return
      }
      let e = this.session.started,
        n = Date.now() - e;
      if (n < this._options.minReplayDuration || n > this.timeouts.maxSessionLife + 5e3) {
        let t = this.getOptions()._experiments.traceInternals ? console.warn : I.kg.warn;
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && t(`[Replay] Session duration (${Math.floor(n/1e3)}s) is too short or too long, not sending replay.`);
        return
      }
      if (this._debouncedFlush.cancel(), !this._flushLock) {
        this._flushLock = this._runFlush(), await this._flushLock, this._flushLock = null;
        return
      }
      try {
        await this._flushLock
      } catch (t) {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && I.kg.error(t)
      } finally {
        this._debouncedFlush()
      }
    }
  }
  _maybeSaveSession() {
    this.session && this._options.stickySession && eb(this.session)
  }
  __init18() {
    this._onMutationHandler = t => {
      let e = t.length,
        n = this._options.mutationLimit,
        r = this._options.mutationBreadcrumbLimit,
        i = n && e > n;
      if (e > r || i) {
        let t = ei({
          category: "replay.mutations",
          data: {
            count: e,
            limit: i
          }
        });
        this._createCustomBreadcrumb(t)
      }
      return !i || (this.stop("mutationLimit"), !1)
    }
  }
}

function e8(t, e, n, r) {
  let i = [...t, ..."string" == typeof r ? r.split(",") : [], ...e];
  return void 0 !== n && ("string" == typeof n && i.push(`.${n}`), console.warn("[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.")), i.join(",")
}

function e9() {
  return "undefined" != typeof window && (!(0, Y.KV)() || function() {
    return void 0 !== L && "renderer" === L.type
  }())
}
let e7 = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
  nt = ["content-length", "content-type", "accept"],
  ne = !1;
class nn {
  static __initStatic() {
    this.id = "Replay"
  }
  __init() {
    this.name = nn.id
  }
  constructor({
    flushMinDelay: t = 5e3,
    flushMaxDelay: e = 5500,
    minReplayDuration: n = 4999,
    stickySession: r = !0,
    useCompression: i = !0,
    _experiments: s = {},
    sessionSampleRate: a,
    errorSampleRate: o,
    maskAllText: u = !0,
    maskAllInputs: l = !0,
    blockAllMedia: c = !0,
    mutationBreadcrumbLimit: d = 750,
    mutationLimit: h = 1e4,
    slowClickTimeout: _ = 7e3,
    slowClickIgnoreSelectors: f = [],
    networkDetailAllowUrls: p = [],
    networkDetailDenyUrls: m = [],
    networkCaptureBodies: g = !0,
    networkRequestHeaders: y = [],
    networkResponseHeaders: v = [],
    mask: b = [],
    unmask: E = [],
    block: S = [],
    unblock: w = [],
    ignore: k = [],
    maskFn: T,
    beforeAddRecordingEvent: R,
    blockClass: x,
    blockSelector: D,
    maskInputOptions: N,
    maskTextClass: C,
    maskTextSelector: U,
    ignoreClass: I
  } = {}) {
    if (nn.prototype.__init.call(this), this._recordingOptions = {
        maskAllInputs: l,
        maskAllText: u,
        maskInputOptions: {
          ...N || {},
          password: !0
        },
        maskTextFn: T,
        maskInputFn: T,
        ... function({
          mask: t,
          unmask: e,
          block: n,
          unblock: r,
          ignore: i,
          blockClass: s,
          blockSelector: a,
          maskTextClass: o,
          maskTextSelector: u,
          ignoreClass: l
        }) {
          let c = e8(t, [".sentry-mask", "[data-sentry-mask]"], o, u),
            d = e8(e, [".sentry-unmask", "[data-sentry-unmask]"]),
            h = {
              maskTextSelector: c,
              unmaskTextSelector: d,
              maskInputSelector: c,
              unmaskInputSelector: d,
              blockSelector: e8(n, [".sentry-block", "[data-sentry-block]", 'base[href="/"]'], s, a),
              unblockSelector: e8(r, [".sentry-unblock", "[data-sentry-unblock]"]),
              ignoreSelector: e8(i, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'], l)
            };
          return s instanceof RegExp && (h.blockClass = s), o instanceof RegExp && (h.maskTextClass = o), h
        }({
          mask: b,
          unmask: E,
          block: S,
          unblock: w,
          ignore: k,
          blockClass: x,
          blockSelector: D,
          maskTextClass: C,
          maskTextSelector: U,
          ignoreClass: I
        }),
        slimDOMOptions: "all",
        inlineStylesheet: !0,
        inlineImages: !1,
        collectFonts: !0
      }, this._initialOptions = {
        flushMinDelay: t,
        flushMaxDelay: e,
        minReplayDuration: Math.min(n, 15e3),
        stickySession: r,
        sessionSampleRate: a,
        errorSampleRate: o,
        useCompression: i,
        blockAllMedia: c,
        maskAllInputs: l,
        maskAllText: u,
        mutationBreadcrumbLimit: d,
        mutationLimit: h,
        slowClickTimeout: _,
        slowClickIgnoreSelectors: f,
        networkDetailAllowUrls: p,
        networkDetailDenyUrls: m,
        networkCaptureBodies: g,
        networkRequestHeaders: nr(y),
        networkResponseHeaders: nr(v),
        beforeAddRecordingEvent: R,
        _experiments: s
      }, "number" == typeof a && (console.warn(`[Replay] You are passing \`sessionSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysSessionSampleRate: ${a} })`), this._initialOptions.sessionSampleRate = a), "number" == typeof o && (console.warn(`[Replay] You are passing \`errorSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysOnErrorSampleRate: ${o} })`), this._initialOptions.errorSampleRate = o), this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${e7}` : e7), this._isInitialized && e9()) throw Error("Multiple Sentry Session Replay instances are not supported");
    this._isInitialized = !0
  }
  get _isInitialized() {
    return ne
  }
  set _isInitialized(t) {
    ne = t
  }
  setupOnce() {
    if (!!e9()) this._setup(), setTimeout(() => this._initialize())
  }
  start() {
    if (!!this._replay) this._replay.start()
  }
  startBuffering() {
    if (!!this._replay) this._replay.startBuffering()
  }
  stop() {
    return this._replay ? this._replay.stop() : Promise.resolve()
  }
  flush(t) {
    return this._replay && this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(t) : Promise.resolve()
  }
  getReplayId() {
    if (!!this._replay && !!this._replay.isEnabled()) return this._replay.getSessionId()
  }
  _initialize() {
    if (!!this._replay) this._replay.initializeSampling()
  }
  _setup() {
    let t = function(t) {
      let e = (0, k.Gd)().getClient(),
        n = e && e.getOptions(),
        r = {
          sessionSampleRate: 0,
          errorSampleRate: 0,
          ...(0, C.Jr)(t)
        };
      return n ? (null == t.sessionSampleRate && null == t.errorSampleRate && null == n.replaysSessionSampleRate && null == n.replaysOnErrorSampleRate && console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set."), "number" == typeof n.replaysSessionSampleRate && (r.sessionSampleRate = n.replaysSessionSampleRate), "number" == typeof n.replaysOnErrorSampleRate && (r.errorSampleRate = n.replaysOnErrorSampleRate), r) : (console.warn("SDK client is not available."), r)
    }(this._initialOptions);
    this._replay = new e4({
      options: t,
      recordingOptions: this._recordingOptions
    })
  }
}
nn.__initStatic();

function nr(t) {
  return [...nt, ...t.map(t => t.toLowerCase())]
}