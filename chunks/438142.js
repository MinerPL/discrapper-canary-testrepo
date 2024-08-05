let n, _, a, i, o;
r.d(e, {
  U: function() {
return rr;
  }
});
var E, s, c, I, R, T, u, l, A, N, d, O, S, p, D, f, L = r(876122),
  h = r(703498),
  C = r(392405),
  g = r(138122),
  P = r(24716),
  M = r(10674),
  U = r(442853),
  G = r(829919),
  m = r(529866),
  y = r(862315),
  b = r(793884),
  B = r(336344),
  v = r(868145),
  w = r(50074),
  H = r(635602),
  Y = r(444675);
let K = P.n2,
  k = 'sentryReplaySession',
  V = 'Unable to send Replay';
(E = A || (A = {}))[E.Document = 0] = 'Document', E[E.DocumentType = 1] = 'DocumentType', E[E.Element = 2] = 'Element', E[E.Text = 3] = 'Text', E[E.CDATA = 4] = 'CDATA', E[E.Comment = 5] = 'Comment';

function x(t) {
  let e = null == t ? void 0 : t.host;
  return !!(e && e.shadowRoot && e.shadowRoot === t);
}

function F({
  maskInputOptions: t,
  tagName: e,
  type: r
}) {
  'option' === e.toLowerCase() && (e = 'select');
  let n = 'string' == typeof r ? r.toLowerCase() : void 0;
  return t[e.toLowerCase()] || n && t[n] || 'password' === n || 'input' === e && !r && t.text;
}

function W({
  input: t,
  maskInputSelector: e,
  unmaskInputSelector: r,
  maskInputOptions: n,
  tagName: _,
  type: a,
  value: i,
  maskInputFn: o
}) {
  let E = i || '';
  return r && t.matches(r) ? E : (t.hasAttribute('data-rr-is-password') && (a = 'password'), (F({
maskInputOptions: n,
tagName: _,
type: a
  }) || e && t.matches(e)) && (E = o ? o(E) : '*'.repeat(E.length)), E);
}
let X = '__rrweb_original__';

function j(t) {
  let e = t.type;
  return t.hasAttribute('data-rr-is-password') ? 'password' : e ? e.toLowerCase() : null;
}

function z(t, e, r) {
  return ('string' == typeof r && r.toLowerCase(), 'INPUT' === e && ('radio' === r || 'checkbox' === r)) ? t.getAttribute('value') || '' : t.value;
}
let q = 1,
  $ = RegExp('[^a-z0-9-_:]');

function Z(t) {
  return t ? t.replace(/[\S]/g, '*') : '';
}

function J(t) {
  try {
let e = t.rules || t.cssRules;
return e ? Array.from(e).map(Q).join('') : null;
  } catch (t) {
return null;
  }
}

function Q(t) {
  let e = t.cssText;
  if (function(t) {
  return 'styleSheet' in t;
}(t))
try {
  e = J(t.styleSheet) || e;
} catch (t) {}
  return tt(e);
}

function tt(t) {
  return t.indexOf(':') > -1 ? t.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, '$1\\$2') : t;
}
let te = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
  tr = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,
  tn = /^(data:)([^,]*),(.*)/i;

function t_(t, e) {
  return (t || '').replace(te, (t, r, n, _, a, i) => {
let o = n || a || i,
  E = r || _ || '';
if (!o)
  return t;
if (!tr.test(o) || tn.test(o))
  return `url(${ E }${ o }${ E })`;
if ('/' === o[0]) {
  var s;
  let t;
  return `url(${ E }${ t = '', (t = (t = (s = e).indexOf('//') > -1 ? s.split('/').slice(0, 3).join('/') : s.split('/')[0]).split('?')[0]) + o }${ E })`;
}
let c = e.split('/'),
  I = o.split('/');
for (let t of (c.pop(), I)) {
  if ('.' !== t)
    '..' === t ? c.pop() : c.push(t);
}
return `url(${ E }${ c.join('/') }${ E })`;
  });
}
let ta = /^[^ \t\n\r\u000c]+/,
  ti = /^[, \t\n\r\u000c]+/;

function to(t, e) {
  if (!e || '' === e.trim())
return e;
  let r = t.createElement('a');
  return r.href = e, r.href;
}

function tE() {
  let t = document.createElement('a');
  return t.href = '', t.href;
}

function ts(t, e, r, n, _, a, i, o) {
  if (!_)
return _;
  let E = n.toLowerCase(),
s = r.toLowerCase();
  if ('src' === E || 'href' === E)
return to(t, _);
  if ('xlink:href' === E && '#' !== _[0])
return to(t, _);
  if ('background' === E && ('table' === s || 'td' === s || 'th' === s))
return to(t, _);
  else if ('srcset' === E)
return function(t, e) {
  if ('' === e.trim())
    return e;
  let r = 0;

  function n(t) {
    let n;
    let _ = t.exec(e.substring(r));
    return _ ? (n = _[0], r += n.length, n) : '';
  }
  let _ = [];
  for (; n(ti), !(r >= e.length);) {
    ;
    let a = n(ta);
    if (',' === a.slice(-1))
      a = to(t, a.substring(0, a.length - 1)), _.push(a);
    else {
      let n = '';
      a = to(t, a);
      let i = !1;
      for (;;) {
        let t = e.charAt(r);
        if ('' === t) {
          _.push((a + n).trim());
          break;
        }
        if (i)
          ')' === t && (i = !1);
        else {
          if (',' === t) {
            r += 1, _.push((a + n).trim());
            break;
          }
          '(' === t && (i = !0);
        }
        n += t, r += 1;
      }
    }
  }
  return _.join(', ');
}(t, _);
  else if ('style' === E)
return t_(_, tE());
  else if ('object' === s && 'data' === E)
return to(t, _);
  else if (a && function(t, e, r, n) {
  return !(n && t.matches(n)) && ([
    'placeholder',
    'title',
    'aria-label'
  ].indexOf(e) > -1 || 'input' === r && 'value' === e && t.hasAttribute('type') && [
    'submit',
    'button'
  ].indexOf(t.getAttribute('type').toLowerCase()) > -1);
}(e, E, s, i))
return o ? o(_) : Z(_);
  return _;
}

function tc(t, e, r, n, _) {
  if (!t)
return !1;
  if (t.nodeType !== t.ELEMENT_NODE)
return tc(t.parentNode, e, r, n, _);
  if (n && (t.matches(n) || t.closest(n)))
return !1;
  if (_)
return !0;
  if ('string' == typeof e) {
if (t.classList.contains(e))
  return !0;
  } else
for (let r = 0; r < t.classList.length; r++) {
  let n = t.classList[r];
  if (e.test(n))
    return !0;
}
  return !!(r && t.matches(r)) || tc(t.parentNode, e, r, n, _);
}

function tI(t) {
  return null == t ? '' : t.toLowerCase();
}

function tR(t, e) {
  let r;
  let {
doc: a,
map: i,
blockClass: o,
blockSelector: E,
unblockSelector: s,
maskTextClass: c,
maskTextSelector: I,
unmaskTextSelector: R,
skipChild: T = !1,
inlineStylesheet: u = !0,
maskInputSelector: l,
unmaskInputSelector: N,
maskAllText: d,
maskInputOptions: O = {},
maskTextFn: S,
maskInputFn: p,
slimDOMOptions: D,
dataURLOptions: f = {},
inlineImages: L = !1,
recordCanvas: h = !1,
onSerialize: C,
onIframeLoad: g,
iframeLoadTimeout: P = 5000,
keepIframeSrcFn: M = () => !1
  } = e, {
preserveWhiteSpace: U = !0
  } = e, G = function(t, e) {
var r, a, i;
let o;
let {
  doc: E,
  blockClass: s,
  blockSelector: c,
  unblockSelector: I,
  maskTextClass: R,
  maskTextSelector: T,
  unmaskTextSelector: u,
  inlineStylesheet: l,
  maskInputSelector: N,
  unmaskInputSelector: d,
  maskAllText: O,
  maskInputOptions: S = {},
  maskTextFn: p,
  maskInputFn: D,
  dataURLOptions: f = {},
  inlineImages: L,
  recordCanvas: h,
  keepIframeSrcFn: C
} = e;
if (E.__sn) {
  let t = E.__sn.id;
  o = 1 === t ? void 0 : t;
}
switch (t.nodeType) {
  case t.DOCUMENT_NODE:
    if ('CSS1Compat' !== t.compatMode)
      return {
        type: A.Document,
        childNodes: [],
        compatMode: t.compatMode,
        rootId: o
      };
    return {
      type: A.Document,
        childNodes: [],
        rootId: o
    };
  case t.DOCUMENT_TYPE_NODE:
    return {
      type: A.DocumentType,
        name: t.name,
        publicId: t.publicId,
        systemId: t.systemId,
        rootId: o
    };
  case t.ELEMENT_NODE:
    ;
    let g = function(t, e, r, n) {
        if (n && t.matches(n))
          return !1;
        if ('string' == typeof e) {
          if (t.classList.contains(e))
            return !0;
        } else
          for (let r = 0; r < t.classList.length; r++) {
            let n = t.classList[r];
            if (e.test(n))
              return !0;
          }
        return !!r && t.matches(r);
      }(t, s, c, I),
      P = function(t) {
        if (t instanceof HTMLFormElement)
          return 'form';
        let e = t.tagName.toLowerCase().trim();
        return $.test(e) ? 'div' : e;
      }(t),
      M = {};
    for (let {
        name: e,
        value: r
      }
      of Array.from(t.attributes))
      ! function(t, e, r) {
        return ('video' === t || 'audio' === t) && 'autoplay' === e;
      }(P, e) && (M[e] = ts(E, t, P, e, r, O, u, p));
    if ('link' === P && l) {
      let e = Array.from(E.styleSheets).find(e => e.href === t.href),
        r = null;
      e && (r = J(e)), r && (delete M.rel, delete M.href, M._cssText = t_(r, e.href));
    }
    if ('style' === P && t.sheet && !(t.innerText || t.textContent || '').trim().length) {
      let e = J(t.sheet);
      e && (M._cssText = t_(e, tE()));
    }
    if ('input' === P || 'textarea' === P || 'select' === P || 'option' === P) {
      let e = j(t),
        r = z(t, P.toUpperCase(), e),
        n = t.checked;
      'submit' !== e && 'button' !== e && r && (M.value = W({
        input: t,
        type: e,
        tagName: P,
        value: r,
        maskInputSelector: N,
        unmaskInputSelector: d,
        maskInputOptions: S,
        maskInputFn: D
      })), n && (M.checked = n);
    }
    if ('option' === P && (t.selected && !S.select ? M.selected = !0 : delete M.selected), 'canvas' === P && h) {
      if ('2d' === t.__context)
        ! function(t) {
          let e = t.getContext('2d');
          if (!e)
            return !0;
          for (let r = 0; r < t.width; r += 50)
            for (let n = 0; n < t.height; n += 50) {
              let _ = e.getImageData;
              if (new Uint32Array((X in _ ? _[X] : _).call(e, r, n, Math.min(50, t.width - r), Math.min(50, t.height - n)).data.buffer).some(t => 0 !== t))
                return !1;
            }
          return !0;
        }(t) && (M.rr_dataURL = t.toDataURL(f.type, f.quality));
      else if (!('__context' in t)) {
        let e = t.toDataURL(f.type, f.quality),
          r = document.createElement('canvas');
        r.width = t.width, r.height = t.height, e !== r.toDataURL(f.type, f.quality) && (M.rr_dataURL = e);
      }
    }
    if ('img' === P && L) {
      !n && (_ = (n = E.createElement('canvas')).getContext('2d'));
      let e = t.crossOrigin;
      t.crossOrigin = 'anonymous';
      let r = () => {
        try {
          n.width = t.naturalWidth, n.height = t.naturalHeight, _.drawImage(t, 0, 0), M.rr_dataURL = n.toDataURL(f.type, f.quality);
        } catch (e) {
          console.warn(`Cannot inline img src=${ t.currentSrc }! Error: ${ e }`);
        }
        e ? M.crossOrigin = e : delete M.crossOrigin;
      };
      t.complete && 0 !== t.naturalWidth ? r() : t.onload = r;
    }
    if (('audio' === P || 'video' === P) && (M.rr_mediaState = t.paused ? 'paused' : 'played', M.rr_mediaCurrentTime = t.currentTime), t.scrollLeft && (M.rr_scrollLeft = t.scrollLeft), t.scrollTop && (M.rr_scrollTop = t.scrollTop), g) {
      let {
        width: e,
        height: r
      } = t.getBoundingClientRect();
      M = {
        class: M.class,
        rr_width: `${ e }px`,
        rr_height: `${ r }px`
      };
    }
    return 'iframe' === P && !C(M.src) && (!t.contentDocument && (M.rr_src = M.src), delete M.src), {
      type: A.Element,
      tagName: P,
      attributes: M,
      childNodes: [],
      isSVG: !!('svg' === (a = t).tagName || a.ownerSVGElement) || void 0,
      needBlock: g,
      rootId: o
    };
  case t.TEXT_NODE:
    let U = t.parentNode && t.parentNode.tagName,
      G = t.textContent,
      m = 'STYLE' === U || void 0,
      y = 'SCRIPT' === U || void 0;
    if (m && G) {
      try {
        if (t.nextSibling || t.previousSibling);
        else if (null === (r = t.parentNode.sheet) || void 0 === r ? void 0 : r.cssRules) {
          ;
          G = (i = t.parentNode.sheet).cssRules ? Array.from(i.cssRules).map(t => t.cssText ? tt(t.cssText) : '').join('') : '';
        }
      } catch (e) {
        console.warn(`Cannot get CSS styles from text's parentNode. Error: ${ e }`, t);
      }
      G = t_(G, tE());
    }
    return y && (G = 'SCRIPT_PLACEHOLDER'), 'TEXTAREA' === U && G ? G = '' : 'OPTION' === U && G ? G = W({
      input: t.parentNode,
      type: null,
      tagName: U,
      value: G,
      maskInputSelector: N,
      unmaskInputSelector: d,
      maskInputOptions: S,
      maskInputFn: D
    }) : !m && !y && tc(t, R, T, u, O) && G && (G = p ? p(G) : Z(G)), {
      type: A.Text,
      textContent: G || '',
      isStyle: m,
      rootId: o
    };
  case t.CDATA_SECTION_NODE:
    return {
      type: A.CDATA,
        textContent: '',
        rootId: o
    };
  case t.COMMENT_NODE:
    return {
      type: A.Comment,
        textContent: t.textContent || '',
        rootId: o
    };
  default:
    return !1;
}
  }(t, {
doc: a,
blockClass: o,
blockSelector: E,
unblockSelector: s,
maskTextClass: c,
maskTextSelector: I,
unmaskTextSelector: R,
inlineStylesheet: u,
maskInputSelector: l,
unmaskInputSelector: N,
maskAllText: d,
maskInputOptions: O,
maskTextFn: S,
maskInputFn: p,
dataURLOptions: f,
inlineImages: L,
recordCanvas: h,
keepIframeSrcFn: M
  });
  if (!G)
return console.warn(t, 'not serialized'), null;
  r = '__sn' in t ? t.__sn.id : ! function(t, e) {
if (e.comment && t.type === A.Comment)
  return !0;
if (t.type === A.Element) {
  if (e.script && ('script' === t.tagName || 'link' === t.tagName && ('preload' === t.attributes.rel || 'modulepreload' === t.attributes.rel) && 'script' === t.attributes.as || 'link' === t.tagName && 'prefetch' === t.attributes.rel && 'string' == typeof t.attributes.href && t.attributes.href.endsWith('.js')))
    return !0;
  if (e.headFavicon && ('link' === t.tagName && 'shortcut icon' === t.attributes.rel || 'meta' === t.tagName && (tI(t.attributes.name).match(/^msapplication-tile(image|color)$/) || 'application-name' === tI(t.attributes.name) || 'icon' === tI(t.attributes.rel) || 'apple-touch-icon' === tI(t.attributes.rel) || 'shortcut icon' === tI(t.attributes.rel))))
    return !0;
  else if ('meta' === t.tagName) {
    if (e.headMetaDescKeywords && tI(t.attributes.name).match(/^description|keywords$/))
      return !0;
    if (e.headMetaSocial && (tI(t.attributes.property).match(/^(og|twitter|fb):/) || tI(t.attributes.name).match(/^(og|twitter):/) || 'pinterest' === tI(t.attributes.name)))
      return !0;
    else if (e.headMetaRobots && ('robots' === tI(t.attributes.name) || 'googlebot' === tI(t.attributes.name) || 'bingbot' === tI(t.attributes.name)))
      return !0;
    else if (e.headMetaHttpEquiv && void 0 !== t.attributes['http-equiv'])
      return !0;
    else if (e.headMetaAuthorship && ('author' === tI(t.attributes.name) || 'generator' === tI(t.attributes.name) || 'framework' === tI(t.attributes.name) || 'publisher' === tI(t.attributes.name) || 'progid' === tI(t.attributes.name) || tI(t.attributes.property).match(/^article:/) || tI(t.attributes.property).match(/^product:/)))
      return !0;
    else if (e.headMetaVerification && ('google-site-verification' === tI(t.attributes.name) || 'yandex-verification' === tI(t.attributes.name) || 'csrf-token' === tI(t.attributes.name) || 'p:domain_verify' === tI(t.attributes.name) || 'verify-v1' === tI(t.attributes.name) || 'verification' === tI(t.attributes.name) || 'shopify-checkout-api-token' === tI(t.attributes.name)))
      return !0;
  }
}
return !1;
  }(G, D) && (U || G.type !== A.Text || G.isStyle || G.textContent.replace(/^\s+|\s+$/gm, '').length) ? q++ : -2;
  let m = Object.assign(G, {
id: r
  });
  if (t.__sn = m, -2 === r)
return null;
  i[r] = t, C && C(t);
  let y = !T;
  if (m.type === A.Element && (y = y && !m.needBlock, delete m.needBlock, t.shadowRoot && (m.isShadowHost = !0)), (m.type === A.Document || m.type === A.Element) && y) {
var b;
D.headWhitespace && G.type === A.Element && 'head' === G.tagName && (U = !1);
let e = {
  doc: a,
  map: i,
  blockClass: o,
  blockSelector: E,
  unblockSelector: s,
  maskTextClass: c,
  maskTextSelector: I,
  unmaskTextSelector: R,
  skipChild: T,
  inlineStylesheet: u,
  maskInputSelector: l,
  unmaskInputSelector: N,
  maskAllText: d,
  maskInputOptions: O,
  maskTextFn: S,
  maskInputFn: p,
  slimDOMOptions: D,
  dataURLOptions: f,
  inlineImages: L,
  recordCanvas: h,
  preserveWhiteSpace: U,
  onSerialize: C,
  onIframeLoad: g,
  iframeLoadTimeout: P,
  keepIframeSrcFn: M
};
for (let r of Array.from(t.childNodes)) {
  let t = tR(r, e);
  t && m.childNodes.push(t);
}
if ((b = t).nodeType === b.ELEMENT_NODE && t.shadowRoot)
  for (let r of Array.from(t.shadowRoot.childNodes)) {
    let t = tR(r, e);
    t && (t.isShadow = !0, m.childNodes.push(t));
  }
  }
  return t.parentNode && x(t.parentNode) && (m.isShadow = !0), m.type === A.Element && 'iframe' === m.tagName && ! function(t, e, r) {
let n;
let _ = t.contentWindow;
if (!_)
  return;
let a = !1;
try {
  n = _.document.readyState;
} catch (t) {
  return;
}
if ('complete' !== n) {
  let n = setTimeout(() => {
    !a && (e(), a = !0);
  }, r);
  t.addEventListener('load', () => {
    clearTimeout(n), a = !0, e();
  });
  return;
}
let i = 'about:blank';
if (_.location.href !== i || t.src === i || '' === t.src) {
  setTimeout(e, 0);
  return;
}
t.addEventListener('load', e);
  }(t, () => {
let e = t.contentDocument;
if (e && g) {
  let r = tR(e, {
    doc: e,
    map: i,
    blockClass: o,
    blockSelector: E,
    unblockSelector: s,
    maskTextClass: c,
    maskTextSelector: I,
    unmaskTextSelector: R,
    skipChild: !1,
    inlineStylesheet: u,
    maskInputSelector: l,
    unmaskInputSelector: N,
    maskAllText: d,
    maskInputOptions: O,
    maskTextFn: S,
    maskInputFn: p,
    slimDOMOptions: D,
    dataURLOptions: f,
    inlineImages: L,
    recordCanvas: h,
    preserveWhiteSpace: U,
    onSerialize: C,
    onIframeLoad: g,
    iframeLoadTimeout: P,
    keepIframeSrcFn: M
  });
  r && g(t, r);
}
  }, P), m;
}

function tT(t, e, r = document) {
  let n = {
capture: !0,
passive: !0
  };
  return r.addEventListener(t, e, n), () => r.removeEventListener(t, e, n);
}
(s = N || (N = {}))[s.DomContentLoaded = 0] = 'DomContentLoaded', s[s.Load = 1] = 'Load', s[s.FullSnapshot = 2] = 'FullSnapshot', s[s.IncrementalSnapshot = 3] = 'IncrementalSnapshot', s[s.Meta = 4] = 'Meta', s[s.Custom = 5] = 'Custom', s[s.Plugin = 6] = 'Plugin', (c = d || (d = {}))[c.Mutation = 0] = 'Mutation', c[c.MouseMove = 1] = 'MouseMove', c[c.MouseInteraction = 2] = 'MouseInteraction', c[c.Scroll = 3] = 'Scroll', c[c.ViewportResize = 4] = 'ViewportResize', c[c.Input = 5] = 'Input', c[c.TouchMove = 6] = 'TouchMove', c[c.MediaInteraction = 7] = 'MediaInteraction', c[c.StyleSheetRule = 8] = 'StyleSheetRule', c[c.CanvasMutation = 9] = 'CanvasMutation', c[c.Font = 10] = 'Font', c[c.Log = 11] = 'Log', c[c.Drag = 12] = 'Drag', c[c.StyleDeclaration = 13] = 'StyleDeclaration', (I = O || (O = {}))[I.MouseUp = 0] = 'MouseUp', I[I.MouseDown = 1] = 'MouseDown', I[I.Click = 2] = 'Click', I[I.ContextMenu = 3] = 'ContextMenu', I[I.DblClick = 4] = 'DblClick', I[I.Focus = 5] = 'Focus', I[I.Blur = 6] = 'Blur', I[I.TouchStart = 7] = 'TouchStart', I[I.TouchMove_Departed = 8] = 'TouchMove_Departed', I[I.TouchEnd = 9] = 'TouchEnd', I[I.TouchCancel = 10] = 'TouchCancel', (R = S || (S = {}))[R['2D'] = 0] = '2D', R[R.WebGL = 1] = 'WebGL', R[R.WebGL2 = 2] = 'WebGL2', (T = p || (p = {}))[T.Play = 0] = 'Play', T[T.Pause = 1] = 'Pause', T[T.Seeked = 2] = 'Seeked', T[T.VolumeChange = 3] = 'VolumeChange', (u = D || (D = {})).Start = 'start', u.Pause = 'pause', u.Resume = 'resume', u.Resize = 'resize', u.Finish = 'finish', u.FullsnapshotRebuilded = 'fullsnapshot-rebuilded', u.LoadStylesheetStart = 'load-stylesheet-start', u.LoadStylesheetEnd = 'load-stylesheet-end', u.SkipStart = 'skip-start', u.SkipEnd = 'skip-end', u.MouseInteraction = 'mouse-interaction', u.EventCast = 'event-cast', u.CustomEvent = 'custom-event', u.Flush = 'flush', u.StateChange = 'state-change', u.PlayBack = 'play-back';
let tu = 'Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.',
  tl = {
map: {},
getId: () => (console.error(tu), -1),
getNode: () => (console.error(tu), null),
removeNodeFromMap() {
  console.error(tu);
},
has: () => (console.error(tu), !1),
reset() {
  console.error(tu);
}
  };

function tA(t, e, r = {}) {
  let n = null,
_ = 0;
  return function(a) {
let i = Date.now();
!_ && !1 === r.leading && (_ = i);
let o = e - (i - _),
  E = this,
  s = arguments;
o <= 0 || o > e ? (n && (clearTimeout(n), n = null), _ = i, t.apply(E, s)) : !n && !1 !== r.trailing && (n = setTimeout(() => {
  _ = !1 === r.leading ? 0 : Date.now(), n = null, t.apply(E, s);
}, o));
  };
}

function tN(t, e, r, n, _ = window) {
  let a = _.Object.getOwnPropertyDescriptor(t, e);
  return _.Object.defineProperty(t, e, n ? r : {
set(t) {
  setTimeout(() => {
    r.set.call(this, t);
  }, 0), a && a.set && a.set.call(this, t);
}
  }), () => tN(t, e, a || {}, !0);
}

function td(t, e, r) {
  try {
if (!(e in t))
  return () => {};
let n = t[e],
  _ = r(n);
return 'function' == typeof _ && (_.prototype = _.prototype || {}, Object.defineProperties(_, {
  __rrweb_original__: {
    enumerable: !1,
    value: n
  }
})), t[e] = _, () => {
  t[e] = n;
};
  } catch (t) {
return () => {};
  }
}

function tO() {
  return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
}

function tS() {
  return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
}

function tp(t, e, r, n) {
  if (!t)
return !1;
  if (t.nodeType === t.ELEMENT_NODE) {
let _ = !1,
  a = n && t.matches(n);
return 'string' == typeof e ? _ = void 0 !== t.closest ? !a && null !== t.closest('.' + e) : !a && t.classList.contains(e) : a || t.classList.forEach(t => {
  e.test(t) && (_ = !0);
}), !_ && r && (_ = t.matches(r)), !a && _ || tp(t.parentNode, e, r, n);
  }
  return t.nodeType, t.TEXT_NODE, tp(t.parentNode, e, r, n);
}

function tD(t) {
  return '__sn' in t && -2 === t.__sn.id;
}
'undefined' != typeof window && window.Proxy && window.Reflect && (tl = new Proxy(tl, {
  get: (t, e, r) => ('map' === e && console.error(tu), Reflect.get(t, e, r))
}));

function tf(t) {
  return !!t.changedTouches;
}

function tL(t) {
  return '__sn' in t && t.__sn.type === A.Element && 'iframe' === t.__sn.tagName;
}

function th(t) {
  return !!(null == t ? void 0 : t.shadowRoot);
}

function tC(t) {
  return '__ln' in t;
}
class tg {
  constructor() {
this.length = 0, this.head = null;
  }
  get(t) {
if (t >= this.length)
  throw Error('Position outside of list range');
let e = this.head;
for (let r = 0; r < t; r++)
  e = (null == e ? void 0 : e.next) || null;
return e;
  }
  addNode(t) {
let e = {
  value: t,
  previous: null,
  next: null
};
if (t.__ln = e, t.previousSibling && '__ln' in t.previousSibling) {
  let r = t.previousSibling.__ln.next;
  e.next = r, e.previous = t.previousSibling.__ln, t.previousSibling.__ln.next = e, r && (r.previous = e);
} else if (t.nextSibling && '__ln' in t.nextSibling && t.nextSibling.__ln.previous) {
  let r = t.nextSibling.__ln.previous;
  e.previous = r, e.next = t.nextSibling.__ln, t.nextSibling.__ln.previous = e, r && (r.next = e);
} else
  this.head && (this.head.previous = e), e.next = this.head, this.head = e;
this.length++;
  }
  removeNode(t) {
let e = t.__ln;
if (!!this.head)
  e.previous ? (e.previous.next = e.next, e.next && (e.next.previous = e.previous)) : (this.head = e.next, this.head && (this.head.previous = null)), t.__ln && delete t.__ln, this.length--;
  }
}
let tP = (t, e) => `${ t }@${ e }`;

function tM(t) {
  return '__sn' in t;
}
class tU {
  constructor() {
this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set(), this.movedSet = new Set(), this.droppedSet = new Set(), this.processMutations = t => {
  t.forEach(this.processMutation), this.emit();
}, this.emit = () => {
  if (this.frozen || this.locked)
    return;
  let t = [],
    e = new tg(),
    r = t => {
      let e = t,
        r = -2;
      for (; - 2 === r;)
        r = (e = e && e.nextSibling) && this.mirror.getId(e);
      return r;
    },
    n = n => {
      var _, a, i, o, E;
      let s = n.getRootNode ? null === (_ = n.getRootNode()) || void 0 === _ ? void 0 : _.host : null,
        c = s;
      for (; null === (i = null === (a = null == c ? void 0 : c.getRootNode) || void 0 === a ? void 0 : a.call(c)) || void 0 === i ? void 0 : i.host;)
        c = (null === (E = null === (o = null == c ? void 0 : c.getRootNode) || void 0 === o ? void 0 : o.call(c)) || void 0 === E ? void 0 : E.host) || null;
      let I = !this.doc.contains(n) && (!c || !this.doc.contains(c));
      if (!n.parentNode || I)
        return;
      let R = x(n.parentNode) ? this.mirror.getId(s) : this.mirror.getId(n.parentNode),
        T = r(n);
      if (-1 === R || -1 === T)
        return e.addNode(n);
      let u = tR(n, {
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
          tL(t) && this.iframeManager.addIframe(t), th(n) && this.shadowDomManager.addShadowRoot(n.shadowRoot, document);
        },
        onIframeLoad: (t, e) => {
          this.iframeManager.attachIframe(t, e), this.shadowDomManager.observeAttachShadow(t);
        }
      });
      u && t.push({
        parentId: R,
        nextId: T,
        node: u
      });
    };
  for (; this.mapRemoves.length;)
    this.mirror.removeNodeFromMap(this.mapRemoves.shift());
  for (let t of this.movedSet) {
    if (!tm(this.removes, t, this.mirror) || !!this.movedSet.has(t.parentNode))
      n(t);
  }
  for (let t of this.addedSet)
    ty(this.droppedSet, t) || tm(this.removes, t, this.mirror) ? ty(this.movedSet, t) ? n(t) : this.droppedSet.add(t) : n(t);
  let _ = null;
  for (; e.length;) {
    let t = null;
    if (_) {
      let e = this.mirror.getId(_.value.parentNode),
        n = r(_.value); -
      1 !== e && -1 !== n && (t = _);
    }
    if (!t)
      for (let n = e.length - 1; n >= 0; n--) {
        let _ = e.get(n);
        if (_) {
          let e = this.mirror.getId(_.value.parentNode),
            n = r(_.value);
          if (-1 !== e && -1 !== n) {
            t = _;
            break;
          }
        }
      }
    if (!t) {
      for (; e.head;)
        e.removeNode(e.head.value);
      break;
    }
    _ = t.previous, e.removeNode(t.value), n(t.value);
  }
  let a = {
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
  if (!!a.texts.length || !!a.attributes.length || !!a.removes.length || !!a.adds.length)
    this.texts = [], this.attributes = [], this.removes = [], this.addedSet = new Set(), this.movedSet = new Set(), this.droppedSet = new Set(), this.movedMap = {}, this.mutationCb(a);
}, this.processMutation = t => {
  if (!tD(t.target))
    switch (t.type) {
      case 'characterData': {
        let e = t.target.textContent;
        !tp(t.target, this.blockClass, this.blockSelector, this.unblockSelector) && e !== t.oldValue && this.texts.push({
          value: tc(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextSelector, this.maskAllText) && e ? this.maskTextFn ? this.maskTextFn(e) : e.replace(/[\S]/g, '*') : e,
          node: t.target
        });
        break;
      }
      case 'attributes': {
        let e = t.target,
          r = e.getAttribute(t.attributeName);
        if ('value' === t.attributeName && (r = W({
            input: e,
            maskInputSelector: this.maskInputSelector,
            unmaskInputSelector: this.unmaskInputSelector,
            maskInputOptions: this.maskInputOptions,
            tagName: e.tagName,
            type: e.getAttribute('type'),
            value: r,
            maskInputFn: this.maskInputFn
          })), tp(t.target, this.blockClass, this.blockSelector, this.unblockSelector) || r === t.oldValue)
          return;
        let n = this.attributes.find(e => e.node === t.target);
        if (!n && (n = {
            node: t.target,
            attributes: {}
          }, this.attributes.push(n)), 'type' === t.attributeName && 'INPUT' === e.tagName && 'password' === (t.oldValue || '').toLowerCase() && e.setAttribute('data-rr-is-password', 'true'), 'style' === t.attributeName) {
          let r = this.doc.createElement('span');
          t.oldValue && r.setAttribute('style', t.oldValue), (void 0 === n.attributes.style || null === n.attributes.style) && (n.attributes.style = {});
          try {
            let t = n.attributes.style;
            for (let n of Array.from(e.style)) {
              let _ = e.style.getPropertyValue(n),
                a = e.style.getPropertyPriority(n);
              (_ !== r.style.getPropertyValue(n) || a !== r.style.getPropertyPriority(n)) && ('' === a ? t[n] = _ : t[n] = [
                _,
                a
              ]);
            }
            for (let n of Array.from(r.style))
              '' === e.style.getPropertyValue(n) && (t[n] = !1);
          } catch (t) {
            console.warn('[rrweb] Error when parsing update to style attribute:', t);
          }
        } else {
          let e = t.target;
          n.attributes[t.attributeName] = ts(this.doc, e, e.tagName, t.attributeName, r, this.maskAllText, this.unmaskTextSelector, this.maskTextFn);
        }
        break;
      }
      case 'childList':
        t.addedNodes.forEach(e => this.genAdds(e, t.target)), t.removedNodes.forEach(e => {
          let r = this.mirror.getId(e),
            n = x(t.target) ? this.mirror.getId(t.target.host) : this.mirror.getId(t.target);
          if (!(tp(t.target, this.blockClass, this.blockSelector, this.unblockSelector) || tD(e)))
            this.addedSet.has(e) ? (tG(this.addedSet, e), this.droppedSet.add(e)) : this.addedSet.has(t.target) && -1 === r || function t(e, r) {
              if (x(e))
                return !1;
              let n = r.getId(e);
              return !r.has(n) || (!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || t(e.parentNode, r));
            }(t.target, this.mirror) || (this.movedSet.has(e) && this.movedMap[tP(r, n)] ? tG(this.movedSet, e) : this.removes.push({
              parentId: n,
              id: r,
              isShadow: !!x(t.target) || void 0
            })), this.mapRemoves.push(e);
        });
    }
}, this.genAdds = (t, e) => {
  if (!(e && tp(e, this.blockClass, this.blockSelector, this.unblockSelector))) {
    if ('__sn' in t) {
      if (tD(t))
        return;
      this.movedSet.add(t);
      let r = null;
      if (e && '__sn' in e)
        r = e.__sn.id;
      r && (this.movedMap[tP(t.__sn.id, r)] = !0);
    } else
      this.addedSet.add(t), this.droppedSet.delete(t);
    !tp(t, this.blockClass, this.blockSelector, this.unblockSelector) && t.childNodes.forEach(t => this.genAdds(t));
  }
};
  }
  init(t) {
[
  'mutationCb',
  'blockClass',
  'blockSelector',
  'unblockSelector',
  'maskTextClass',
  'maskTextSelector',
  'unmaskTextSelector',
  'maskInputSelector',
  'unmaskInputSelector',
  'inlineStylesheet',
  'maskAllText',
  'maskInputOptions',
  'maskTextFn',
  'maskInputFn',
  'recordCanvas',
  'inlineImages',
  'slimDOMOptions',
  'doc',
  'mirror',
  'iframeManager',
  'shadowDomManager',
  'canvasManager'
].forEach(e => {
  this[e] = t[e];
});
  }
  freeze() {
this.frozen = !0, this.canvasManager.freeze();
  }
  unfreeze() {
this.frozen = !1, this.canvasManager.unfreeze(), this.emit();
  }
  isFrozen() {
return this.frozen;
  }
  lock() {
this.locked = !0, this.canvasManager.lock();
  }
  unlock() {
this.locked = !1, this.canvasManager.unlock(), this.emit();
  }
  reset() {
this.shadowDomManager.reset(), this.canvasManager.reset();
  }
}

function tG(t, e) {
  t.delete(e), e.childNodes.forEach(e => tG(t, e));
}

function tm(t, e, r) {
  let {
parentNode: n
  } = e;
  if (!n)
return !1;
  let _ = r.getId(n);
  return !!t.some(t => t.id === _) || tm(t, n, r);
}

function ty(t, e) {
  let {
parentNode: r
  } = e;
  return !!r && (!!t.has(r) || ty(t, r));
}
let tb = t => (...e) => {
try {
  return t(...e);
} catch (t) {
  try {
    t.__rrweb__ = !0;
  } catch (t) {}
  throw t;
}
  },
  tB = [];

function tv(t) {
  try {
if ('composedPath' in t) {
  let e = t.composedPath();
  if (e.length)
    return e[0];
} else if ('path' in t && t.path.length)
  return t.path[0];
  } catch (t) {}
  return t && t.target;
}

function tw(t, e) {
  var r, n;
  let _ = new tU();
  tB.push(_), _.init(t);
  let a = window.MutationObserver || window.__rrMutationObserver,
i = null === (n = null === (r = null == window ? void 0 : window.Zone) || void 0 === r ? void 0 : r.__symbol__) || void 0 === n ? void 0 : n.call(r, 'MutationObserver');
  i && window[i] && (a = window[i]);
  let o = new a(tb(e => {
if (!t.onMutation || !1 !== t.onMutation(e))
  _.processMutations(e);
  }));
  return o.observe(e, {
attributes: !0,
attributeOldValue: !0,
characterData: !0,
characterDataOldValue: !0,
childList: !0,
subtree: !0
  }), o;
}

function tH({
  scrollCb: t,
  doc: e,
  mirror: r,
  blockClass: n,
  blockSelector: _,
  unblockSelector: a,
  sampling: i
}) {
  let o = tA(i => {
let o = tv(i);
if (!o || tp(o, n, _, a))
  return;
let E = r.getId(o);
if (o === e) {
  let r = e.scrollingElement || e.documentElement;
  tb(t)({
    id: E,
    x: r.scrollLeft,
    y: r.scrollTop
  });
} else
  tb(t)({
    id: E,
    x: o.scrollLeft,
    y: o.scrollTop
  });
  }, i.scroll || 100);
  return tT('scroll', tb(o), e);
}

function tY(t, e) {
  let r = Object.assign({}, t);
  return !e && delete r.userTriggered, r;
}
let tK = [
'INPUT',
'TEXTAREA',
'SELECT'
  ],
  tk = new WeakMap();

function tV(t) {
  return function(t, e) {
if (tF('CSSGroupingRule') && t.parentRule instanceof CSSGroupingRule || tF('CSSMediaRule') && t.parentRule instanceof CSSMediaRule || tF('CSSSupportsRule') && t.parentRule instanceof CSSSupportsRule || tF('CSSConditionRule') && t.parentRule instanceof CSSConditionRule) {
  let r = Array.from(t.parentRule.cssRules).indexOf(t);
  e.unshift(r);
} else {
  let r = Array.from(t.parentStyleSheet.cssRules).indexOf(t);
  e.unshift(r);
}
return e;
  }(t, []);
}

function tx(t, e = {}) {
  let r = t.doc.defaultView;
  if (!r)
return () => {};
  ! function(t, e) {
let {
  mutationCb: r,
  mousemoveCb: n,
  mouseInteractionCb: _,
  scrollCb: a,
  viewportResizeCb: i,
  inputCb: o,
  mediaInteractionCb: E,
  styleSheetRuleCb: s,
  styleDeclarationCb: c,
  canvasMutationCb: I,
  fontCb: R
} = t;
t.mutationCb = (...t) => {
  e.mutation && e.mutation(...t), r(...t);
}, t.mousemoveCb = (...t) => {
  e.mousemove && e.mousemove(...t), n(...t);
}, t.mouseInteractionCb = (...t) => {
  e.mouseInteraction && e.mouseInteraction(...t), _(...t);
}, t.scrollCb = (...t) => {
  e.scroll && e.scroll(...t), a(...t);
}, t.viewportResizeCb = (...t) => {
  e.viewportResize && e.viewportResize(...t), i(...t);
}, t.inputCb = (...t) => {
  e.input && e.input(...t), o(...t);
}, t.mediaInteractionCb = (...t) => {
  e.mediaInteaction && e.mediaInteaction(...t), E(...t);
}, t.styleSheetRuleCb = (...t) => {
  e.styleSheetRule && e.styleSheetRule(...t), s(...t);
}, t.styleDeclarationCb = (...t) => {
  e.styleDeclaration && e.styleDeclaration(...t), c(...t);
}, t.canvasMutationCb = (...t) => {
  e.canvasMutation && e.canvasMutation(...t), I(...t);
}, t.fontCb = (...t) => {
  e.font && e.font(...t), R(...t);
};
  }(t, e);
  let n = tw(t, t.doc),
_ = function({
  mousemoveCb: t,
  sampling: e,
  doc: r,
  mirror: n
}) {
  let _;
  if (!1 === e.mousemove)
    return () => {};
  let a = 'number' == typeof e.mousemove ? e.mousemove : 50,
    i = 'number' == typeof e.mousemoveCallback ? e.mousemoveCallback : 500,
    o = [],
    E = tA(e => {
      let r = Date.now() - _;
      tb(t)(o.map(t => (t.timeOffset -= r, t)), e), o = [], _ = null;
    }, i),
    s = tA(t => {
      let e = tv(t),
        {
          clientX: r,
          clientY: a
        } = tf(t) ? t.changedTouches[0] : t;
      !_ && (_ = Date.now()), o.push({
        x: r,
        y: a,
        id: n.getId(e),
        timeOffset: Date.now() - _
      }), E('undefined' != typeof DragEvent && t instanceof DragEvent ? d.Drag : t instanceof MouseEvent ? d.MouseMove : d.TouchMove);
    }, a, {
      trailing: !1
    }),
    c = [
      tT('mousemove', tb(s), r),
      tT('touchmove', tb(s), r),
      tT('drag', tb(s), r)
    ];
  return tb(() => {
    c.forEach(t => t());
  });
}(t),
a = function({
  mouseInteractionCb: t,
  doc: e,
  mirror: r,
  blockClass: n,
  blockSelector: _,
  unblockSelector: a,
  sampling: i
}) {
  if (!1 === i.mouseInteraction)
    return () => {};
  let o = !0 === i.mouseInteraction || void 0 === i.mouseInteraction ? {} : i.mouseInteraction,
    E = [],
    s = e => i => {
      let o = tv(i);
      if (tp(o, n, _, a))
        return;
      let E = tf(i) ? i.changedTouches[0] : i;
      if (!E)
        return;
      let s = r.getId(o),
        {
          clientX: c,
          clientY: I
        } = E;
      tb(t)({
        type: O[e],
        id: s,
        x: c,
        y: I
      });
    };
  return Object.keys(O).filter(t => Number.isNaN(Number(t)) && !t.endsWith('_Departed') && !1 !== o[t]).forEach(t => {
    let r = t.toLowerCase(),
      n = tb(s(t));
    E.push(tT(r, n, e));
  }), tb(() => {
    E.forEach(t => t());
  });
}(t),
i = tH(t),
o = function({
  viewportResizeCb: t
}) {
  let e = -1,
    r = -1,
    n = tA(() => {
      let n = tO(),
        _ = tS();
      (e !== n || r !== _) && (tb(t)({
        width: Number(_),
        height: Number(n)
      }), e = n, r = _);
    }, 200);
  return tT('resize', tb(n), window);
}(t),
E = function({
  inputCb: t,
  doc: e,
  mirror: r,
  blockClass: n,
  blockSelector: _,
  unblockSelector: a,
  ignoreClass: i,
  ignoreSelector: o,
  maskInputSelector: E,
  unmaskInputSelector: s,
  maskInputOptions: c,
  maskInputFn: I,
  sampling: R,
  userTriggeredOnInput: T
}) {
  function u(t) {
    let r = tv(t),
      R = r && r.tagName,
      u = t.isTrusted;
    if ('OPTION' === R && (r = r.parentElement), !r || !R || 0 > tK.indexOf(R) || tp(r, n, _, a))
      return;
    let A = r,
      N = j(A);
    if (A.classList.contains(i) || o && A.matches(o))
      return;
    let d = z(A, R, N),
      O = !1;
    ('radio' === N || 'checkbox' === N) && (O = r.checked),
    function({
      tagName: t,
      type: e,
      maskInputOptions: r,
      maskInputSelector: n
    }) {
      return n || F({
        maskInputOptions: r,
        tagName: t,
        type: e
      });
    }({
      maskInputOptions: c,
      maskInputSelector: E,
      tagName: R,
      type: N
    }) && (d = W({
      input: A,
      maskInputOptions: c,
      maskInputSelector: E,
      unmaskInputSelector: s,
      tagName: R,
      type: N,
      value: d,
      maskInputFn: I
    })), l(r, tb(tY)({
      text: d,
      isChecked: O,
      userTriggered: u
    }, T));
    let S = r.name;
    'radio' === N && S && O && e.querySelectorAll(`input[type="radio"][name="${ S }"]`).forEach(t => {
      if (t !== r) {
        let e = W({
          input: t,
          maskInputOptions: c,
          maskInputSelector: E,
          unmaskInputSelector: s,
          tagName: R,
          type: N,
          value: z(t, R, N),
          maskInputFn: I
        });
        l(t, tb(tY)({
          text: e,
          isChecked: !O,
          userTriggered: !1
        }, T));
      }
    });
  }

  function l(e, n) {
    let _ = tk.get(e);
    if (!_ || _.text !== n.text || _.isChecked !== n.isChecked) {
      tk.set(e, n);
      let _ = r.getId(e);
      t(Object.assign(Object.assign({}, n), {
        id: _
      }));
    }
  }
  let A = ('last' === R.input ? ['change'] : [
      'input',
      'change'
    ]).map(t => tT(t, tb(u), e)),
    N = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value'),
    d = [
      [
        HTMLInputElement.prototype,
        'value'
      ],
      [
        HTMLInputElement.prototype,
        'checked'
      ],
      [
        HTMLSelectElement.prototype,
        'value'
      ],
      [
        HTMLTextAreaElement.prototype,
        'value'
      ],
      [
        HTMLSelectElement.prototype,
        'selectedIndex'
      ],
      [
        HTMLOptionElement.prototype,
        'selected'
      ]
    ];
  return N && N.set && A.push(...d.map(t => tN(t[0], t[1], {
    set() {
      tb(u)({
        target: this
      });
    }
  }))), tb(() => {
    A.forEach(t => t());
  });
}(t),
s = function({
  mediaInteractionCb: t,
  blockClass: e,
  blockSelector: r,
  unblockSelector: n,
  mirror: _,
  sampling: a
}) {
  let i = i => tA(tb(a => {
      let o = tv(a);
      if (!o || tp(o, e, r, n))
        return;
      let {
        currentTime: E,
        volume: s,
        muted: c
      } = o;
      t({
        type: i,
        id: _.getId(o),
        currentTime: E,
        volume: s,
        muted: c
      });
    }), a.media || 500),
    o = [
      tT('play', i(0)),
      tT('pause', i(1)),
      tT('seeked', i(2)),
      tT('volumechange', i(3))
    ];
  return tb(() => {
    o.forEach(t => t());
  });
}(t),
c = function({
  styleSheetRuleCb: t,
  mirror: e
}, {
  win: r
}) {
  if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype)
    return () => {};
  let n = r.CSSStyleSheet.prototype.insertRule;
  r.CSSStyleSheet.prototype.insertRule = new Proxy(n, {
    apply: tb((r, n, _) => {
      let [a, i] = _, o = e.getId(n.ownerNode);
      return -1 !== o && t({
        id: o,
        adds: [{
          rule: a,
          index: i
        }]
      }), r.apply(n, _);
    })
  });
  let _ = r.CSSStyleSheet.prototype.deleteRule;
  r.CSSStyleSheet.prototype.deleteRule = new Proxy(_, {
    apply: tb((r, n, _) => {
      let [a] = _, i = e.getId(n.ownerNode);
      return -1 !== i && t({
        id: i,
        removes: [{
          index: a
        }]
      }), r.apply(n, _);
    })
  });
  let a = {};
  tW('CSSGroupingRule') ? a.CSSGroupingRule = r.CSSGroupingRule : (tW('CSSMediaRule') && (a.CSSMediaRule = r.CSSMediaRule), tW('CSSConditionRule') && (a.CSSConditionRule = r.CSSConditionRule), tW('CSSSupportsRule') && (a.CSSSupportsRule = r.CSSSupportsRule));
  let i = {};
  return Object.entries(a).forEach(([r, n]) => {
    i[r] = {
      insertRule: n.prototype.insertRule,
      deleteRule: n.prototype.deleteRule
    }, n.prototype.insertRule = new Proxy(i[r].insertRule, {
      apply: tb((r, n, _) => {
        let [a, i] = _, o = e.getId(n.parentStyleSheet.ownerNode);
        return -1 !== o && t({
          id: o,
          adds: [{
            rule: a,
            index: [
              ...tV(n),
              i || 0
            ]
          }]
        }), r.apply(n, _);
      })
    }), n.prototype.deleteRule = new Proxy(i[r].deleteRule, {
      apply: tb((r, n, _) => {
        let [a] = _, i = e.getId(n.parentStyleSheet.ownerNode);
        return -1 !== i && t({
          id: i,
          removes: [{
            index: [
              ...tV(n),
              a
            ]
          }]
        }), r.apply(n, _);
      })
    });
  }), tb(() => {
    r.CSSStyleSheet.prototype.insertRule = n, r.CSSStyleSheet.prototype.deleteRule = _, Object.entries(a).forEach(([t, e]) => {
      e.prototype.insertRule = i[t].insertRule, e.prototype.deleteRule = i[t].deleteRule;
    });
  });
}(t, {
  win: r
}),
I = function({
  styleDeclarationCb: t,
  mirror: e
}, {
  win: r
}) {
  let n = r.CSSStyleDeclaration.prototype.setProperty;
  r.CSSStyleDeclaration.prototype.setProperty = new Proxy(n, {
    apply: tb((r, n, _) => {
      var a, i;
      let [o, E, s] = _, c = e.getId(null === (i = null === (a = n.parentRule) || void 0 === a ? void 0 : a.parentStyleSheet) || void 0 === i ? void 0 : i.ownerNode);
      return -1 !== c && t({
        id: c,
        set: {
          property: o,
          value: E,
          priority: s
        },
        index: tV(n.parentRule)
      }), r.apply(n, _);
    })
  });
  let _ = r.CSSStyleDeclaration.prototype.removeProperty;
  return r.CSSStyleDeclaration.prototype.removeProperty = new Proxy(_, {
    apply: tb((r, n, _) => {
      var a, i;
      let [o] = _, E = e.getId(null === (i = null === (a = n.parentRule) || void 0 === a ? void 0 : a.parentStyleSheet) || void 0 === i ? void 0 : i.ownerNode);
      return -1 !== E && t({
        id: E,
        remove: {
          property: o
        },
        index: tV(n.parentRule)
      }), r.apply(n, _);
    })
  }), tb(() => {
    r.CSSStyleDeclaration.prototype.setProperty = n, r.CSSStyleDeclaration.prototype.removeProperty = _;
  });
}(t, {
  win: r
}),
R = t.collectFonts ? function({
  fontCb: t,
  doc: e
}) {
  let r = e.defaultView;
  if (!r)
    return () => {};
  let n = [],
    _ = new WeakMap(),
    a = r.FontFace;
  r.FontFace = function(t, e, r) {
    let n = new a(t, e, r);
    return _.set(n, {
      family: t,
      buffer: 'string' != typeof e,
      descriptors: r,
      fontSource: 'string' == typeof e ? e : JSON.stringify(Array.from(new Uint8Array(e)))
    }), n;
  };
  let i = td(e.fonts, 'add', function(e) {
    return function(r) {
      return setTimeout(() => {
        let e = _.get(r);
        e && (t(e), _.delete(r));
      }, 0), e.apply(this, [r]);
    };
  });
  return n.push(() => {
    r.FontFace = a;
  }), n.push(i), tb(() => {
    n.forEach(t => t());
  });
}(t) : () => {},
T = [];
  for (let e of t.plugins)
T.push(e.observer(e.callback, r, e.options));
  return tb(() => {
tB.forEach(t => t.reset()), n.disconnect(), _(), a(), i(), o(), E(), s();
try {
  c(), I();
} catch (t) {}
R(), T.forEach(t => t());
  });
}

function tF(t) {
  return void 0 !== window[t];
}

function tW(t) {
  return !!(void 0 !== window[t] && window[t].prototype && 'insertRule' in window[t].prototype && 'deleteRule' in window[t].prototype);
}
class tX {
  constructor(t) {
this.iframes = new WeakMap(), this.mutationCb = t.mutationCb;
  }
  addIframe(t) {
this.iframes.set(t, !0);
  }
  addLoadListener(t) {
this.loadListener = t;
  }
  attachIframe(t, e) {
var r;
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
}), null === (r = this.loadListener) || void 0 === r || r.call(this, t);
  }
}
class tj {
  constructor(t) {
this.restorePatches = [], this.mutationCb = t.mutationCb, this.scrollCb = t.scrollCb, this.bypassOptions = t.bypassOptions, this.mirror = t.mirror;
let e = this;
this.restorePatches.push(td(HTMLElement.prototype, 'attachShadow', function(t) {
  return function() {
    let r = t.apply(this, arguments);
    return this.shadowRoot && e.addShadowRoot(this.shadowRoot, this.ownerDocument), r;
  };
}));
  }
  addShadowRoot(t, e) {
tw(Object.assign(Object.assign({}, this.bypassOptions), {
  doc: e,
  mutationCb: this.mutationCb,
  mirror: this.mirror,
  shadowDomManager: this
}), t), tH(Object.assign(Object.assign({}, this.bypassOptions), {
  scrollCb: this.scrollCb,
  doc: t,
  mirror: this.mirror
}));
  }
  observeAttachShadow(t) {
if (t.contentWindow) {
  let e = this;
  this.restorePatches.push(td(t.contentWindow.HTMLElement.prototype, 'attachShadow', function(r) {
    return function() {
      let n = r.apply(this, arguments);
      return this.shadowRoot && e.addShadowRoot(this.shadowRoot, t.contentDocument), n;
    };
  }));
}
  }
  reset() {
this.restorePatches.forEach(t => t());
  }
}
for (var tz = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', tq = 'undefined' == typeof Uint8Array ? [] : new Uint8Array(256), t$ = 0; t$ < tz.length; t$++)
  tq[tz.charCodeAt(t$)] = t$;
var tZ = function(t) {
  var e, r = new Uint8Array(t),
n = r.length,
_ = '';
  for (e = 0; e < n; e += 3)
_ += tz[r[e] >> 2] + tz[(3 & r[e]) << 4 | r[e + 1] >> 4] + tz[(15 & r[e + 1]) << 2 | r[e + 2] >> 6] + tz[63 & r[e + 2]];
  return n % 3 == 2 ? _ = _.substring(0, _.length - 1) + '=' : n % 3 == 1 && (_ = _.substring(0, _.length - 2) + '=='), _;
};
let tJ = new Map(),
  tQ = (t, e, r) => {
var n, _;
let a;
if (!t || !(t1(t, e) || 'object' == typeof t))
  return;
let i = t.constructor.name;
let o = (n = r, _ = i, !(a = tJ.get(n)) && (a = new Map(), tJ.set(n, a)), !a.has(_) && a.set(_, []), a.get(_)),
  E = o.indexOf(t);
return -1 === E && (E = o.length, o.push(t)), E;
  },
  t0 = (t, e, r) => [...t].map(t => function t(e, r, n) {
if (e instanceof Array)
  return e.map(e => t(e, r, n));
if (null === e);
else if (e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray)
  return {
    rr_type: e.constructor.name,
    args: [Object.values(e)]
  };
else if (e instanceof ArrayBuffer) {
  let t = e.constructor.name;
  return {
    rr_type: t,
    base64: tZ(e)
  };
} else if (e instanceof DataView)
  return {
    rr_type: e.constructor.name,
    args: [
      t(e.buffer, r, n),
      e.byteOffset,
      e.byteLength
    ]
  };
else if (e instanceof HTMLImageElement) {
  let t = e.constructor.name,
    {
      src: r
    } = e;
  return {
    rr_type: t,
    src: r
  };
} else if (e instanceof ImageData)
  return {
    rr_type: e.constructor.name,
    args: [
      t(e.data, r, n),
      e.width,
      e.height
    ]
  };
else if (t1(e, r) || 'object' == typeof e) {
  let t = e.constructor.name;
  return {
    rr_type: t,
    index: tQ(e, r, n)
  };
}
return e;
  }(t, e, r)),
  t1 = (t, e) => !![
'WebGLActiveInfo',
'WebGLBuffer',
'WebGLFramebuffer',
'WebGLProgram',
'WebGLRenderbuffer',
'WebGLShader',
'WebGLShaderPrecisionFormat',
'WebGLTexture',
'WebGLUniformLocation',
'WebGLVertexArrayObject',
'WebGLVertexArrayObjectOES'
  ].filter(t => 'function' == typeof e[t]).find(r => t instanceof e[r]);

function t2(t, e, r, n, _, a, i, o) {
  let E = [];
  for (let s of Object.getOwnPropertyNames(t))
try {
  if ('function' != typeof t[s])
    continue;
  let c = td(t, s, function(E) {
    return function(...c) {
      let I = E.apply(this, c);
      if (tQ(I, o, t), !tp(this.canvas, n, a, _)) {
        i.getId(this.canvas);
        let n = t0([...c], o, t),
          _ = {
            type: e,
            property: s,
            args: n
          };
        r(this.canvas, _);
      }
      return I;
    };
  });
  E.push(c);
} catch (_) {
  let n = tN(t, s, {
    set(t) {
      r(this.canvas, {
        type: e,
        property: s,
        args: [t],
        setter: !0
      });
    }
  });
  E.push(n);
}
  return E;
}
class t3 {
  reset() {
this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers();
  }
  freeze() {
this.frozen = !0;
  }
  unfreeze() {
this.frozen = !1;
  }
  lock() {
this.locked = !0;
  }
  unlock() {
this.locked = !1;
  }
  constructor(t) {
this.pendingCanvasMutations = new Map(), this.rafStamps = {
  latestId: 0,
  invokeId: null
}, this.frozen = !1, this.locked = !1, this.processMutation = function(t, e) {
  (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), !this.pendingCanvasMutations.has(t) && this.pendingCanvasMutations.set(t, []), this.pendingCanvasMutations.get(t).push(e);
}, this.mutationCb = t.mutationCb, this.mirror = t.mirror, !0 === t.recordCanvas && this.initCanvasMutationObserver(t.win, t.blockClass, t.blockSelector, t.unblockSelector);
  }
  initCanvasMutationObserver(t, e, r, n) {
this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
let _ = function(t, e, r, n) {
    let _ = [];
    try {
      let a = td(t.HTMLCanvasElement.prototype, 'getContext', function(t) {
        return function(_, ...a) {
          return !tp(this, e, r, n) && !('__context' in this) && (this.__context = _), t.apply(this, [
            _,
            ...a
          ]);
        };
      });
      _.push(a);
    } catch (t) {
      console.error('failed to patch HTMLCanvasElement.prototype.getContext');
    }
    return () => {
      _.forEach(t => t());
    };
  }(t, e, n, r),
  a = function(t, e, r, n, _, a) {
    let i = [];
    for (let a of Object.getOwnPropertyNames(e.CanvasRenderingContext2D.prototype))
      try {
        if ('function' != typeof e.CanvasRenderingContext2D.prototype[a])
          continue;
        let o = td(e.CanvasRenderingContext2D.prototype, a, function(e) {
          return function(...i) {
            return !tp(this.canvas, r, _, n) && setTimeout(() => {
              let e = [...i];
              if ('drawImage' === a && e[0] && e[0] instanceof HTMLCanvasElement) {
                let t = e[0],
                  r = t.getContext('2d'),
                  n = null == r ? void 0 : r.getImageData(0, 0, t.width, t.height),
                  _ = null == n ? void 0 : n.data;
                e[0] = JSON.stringify(_);
              }
              t(this.canvas, {
                type: S['2D'],
                property: a,
                args: e
              });
            }, 0), e.apply(this, i);
          };
        });
        i.push(o);
      } catch (n) {
        let r = tN(e.CanvasRenderingContext2D.prototype, a, {
          set(e) {
            t(this.canvas, {
              type: S['2D'],
              property: a,
              args: [e],
              setter: !0
            });
          }
        });
        i.push(r);
      }
    return () => {
      i.forEach(t => t());
    };
  }(this.processMutation.bind(this), t, e, n, r, this.mirror),
  i = function(t, e, r, n, _, a) {
    let i = [];
    return i.push(...t2(e.WebGLRenderingContext.prototype, S.WebGL, t, r, n, _, a, e)), void 0 !== e.WebGL2RenderingContext && i.push(...t2(e.WebGL2RenderingContext.prototype, S.WebGL2, t, r, n, _, a, e)), () => {
      i.forEach(t => t());
    };
  }(this.processMutation.bind(this), t, e, n, r, this.mirror);
this.resetObservers = () => {
  _(), a(), i();
};
  }
  startPendingCanvasMutationFlusher() {
requestAnimationFrame(() => this.flushPendingCanvasMutations());
  }
  startRAFTimestamping() {
let t = e => {
  this.rafStamps.latestId = e, requestAnimationFrame(t);
};
requestAnimationFrame(t);
  }
  flushPendingCanvasMutations() {
this.pendingCanvasMutations.forEach((t, e) => {
  let r = this.mirror.getId(e);
  this.flushPendingCanvasMutationFor(e, r);
}), requestAnimationFrame(() => this.flushPendingCanvasMutations());
  }
  flushPendingCanvasMutationFor(t, e) {
if (this.frozen || this.locked)
  return;
let r = this.pendingCanvasMutations.get(t);
if (!r || -1 === e)
  return;
let n = r.map(t => function(t, e) {
    var r = {};
    for (var n in t)
      Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (r[n] = t[n]);
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols)
      for (var _ = 0, n = Object.getOwnPropertySymbols(t); _ < n.length; _++)
        0 > e.indexOf(n[_]) && Object.prototype.propertyIsEnumerable.call(t, n[_]) && (r[n[_]] = t[n[_]]);
    return r;
  }(t, ['type'])),
  {
    type: _
  } = r[0];
this.mutationCb({
  id: e,
  type: _,
  commands: n
}), this.pendingCanvasMutations.delete(t);
  }
}

function t6(t) {
  return Object.assign(Object.assign({}, t), {
timestamp: Date.now()
  });
}
let t5 = {
  map: {},
  getId: t => t && t.__sn ? t.__sn.id : -1,
  getNode(t) {
return this.map[t] || null;
  },
  removeNodeFromMap(t) {
let e = t.__sn && t.__sn.id;
delete this.map[e], t.childNodes && t.childNodes.forEach(t => this.removeNodeFromMap(t));
  },
  has(t) {
return this.map.hasOwnProperty(t);
  },
  reset() {
this.map = {};
  }
};

function t4(t = {}) {
  let e;
  let {
emit: r,
checkoutEveryNms: n,
checkoutEveryNth: _,
blockClass: o = 'rr-block',
blockSelector: E = null,
unblockSelector: s = null,
ignoreClass: c = 'rr-ignore',
ignoreSelector: I = null,
maskTextClass: R = 'rr-mask',
maskTextSelector: T = null,
maskInputSelector: u = null,
unmaskTextSelector: l = null,
unmaskInputSelector: A = null,
inlineStylesheet: O = !0,
maskAllText: S = !1,
maskAllInputs: p,
maskInputOptions: D,
slimDOMOptions: f,
maskInputFn: L,
maskTextFn: h,
hooks: C,
packFn: g,
sampling: P = {},
mousemoveWait: M,
recordCanvas: U = !1,
userTriggeredOnInput: G = !1,
collectFonts: m = !1,
inlineImages: y = !1,
plugins: b,
keepIframeSrcFn: B = () => !1,
onMutation: v
  } = t;
  if (!r)
throw Error('emit function is required');
  void 0 !== M && void 0 === P.mousemove && (P.mousemove = M);
  let w = !0 === p ? {
  color: !0,
  date: !0,
  'datetime-local': !0,
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
} : void 0 !== D ? D : {},
H = !0 === f || 'all' === f ? {
  script: !0,
  comment: !0,
  headFavicon: !0,
  headWhitespace: !0,
  headMetaSocial: !0,
  headMetaRobots: !0,
  headMetaHttpEquiv: !0,
  headMetaVerification: !0,
  headMetaAuthorship: 'all' === f,
  headMetaDescKeywords: 'all' === f
} : f || {};
  ! function(t = window) {
'NodeList' in t && !t.NodeList.prototype.forEach && (t.NodeList.prototype.forEach = Array.prototype.forEach), 'DOMTokenList' in t && !t.DOMTokenList.prototype.forEach && (t.DOMTokenList.prototype.forEach = Array.prototype.forEach), !Node.prototype.contains && (Node.prototype.contains = function(t) {
  if (!(0 in arguments))
    throw TypeError('1 argument is required');
  do
    if (this === t)
      return !0;
  while (t = t && t.parentNode);
  return !1;
});
  }();
  let Y = 0,
K = t => {
  for (let e of b || [])
    e.eventProcessor && (t = e.eventProcessor(t));
  return g && (t = g(t)), t;
};
  a = (t, a) => {
var o;
if ((null === (o = tB[0]) || void 0 === o ? void 0 : o.isFrozen()) && t.type !== N.FullSnapshot && !(t.type === N.IncrementalSnapshot && t.data.source === d.Mutation) && tB.forEach(t => t.unfreeze()), r(K(t), a), t.type === N.FullSnapshot)
  e = t, Y = 0;
else if (t.type === N.IncrementalSnapshot) {
  if (t.data.source === d.Mutation && t.data.isAttachIframe)
    return;
  Y++;
  let r = _ && Y >= _,
    a = n && t.timestamp - e.timestamp > n;
  (r || a) && i(!0);
}
  };
  let k = t => {
  a(t6({
    type: N.IncrementalSnapshot,
    data: Object.assign({
      source: d.Mutation
    }, t)
  }));
},
V = t => a(t6({
  type: N.IncrementalSnapshot,
  data: Object.assign({
    source: d.Scroll
  }, t)
})),
x = t => a(t6({
  type: N.IncrementalSnapshot,
  data: Object.assign({
    source: d.CanvasMutation
  }, t)
})),
F = new tX({
  mutationCb: k
}),
W = new t3({
  recordCanvas: U,
  mutationCb: x,
  win: window,
  blockClass: o,
  blockSelector: E,
  unblockSelector: s,
  mirror: t5
}),
X = new tj({
  mutationCb: k,
  scrollCb: V,
  bypassOptions: {
    onMutation: v,
    blockClass: o,
    blockSelector: E,
    unblockSelector: s,
    maskTextClass: R,
    maskTextSelector: T,
    unmaskTextSelector: l,
    maskInputSelector: u,
    unmaskInputSelector: A,
    inlineStylesheet: O,
    maskAllText: S,
    maskInputOptions: w,
    maskTextFn: h,
    maskInputFn: L,
    recordCanvas: U,
    inlineImages: y,
    sampling: P,
    slimDOMOptions: H,
    iframeManager: F,
    canvasManager: W
  },
  mirror: t5
});
  i = (t = !1) => {
var e, r, n, _;
a(t6({
  type: N.Meta,
  data: {
    href: window.location.href,
    width: tS(),
    height: tO()
  }
}), t), tB.forEach(t => t.lock());
let [i, c] = function(t, e) {
  let {
    blockClass: r = 'rr-block',
    blockSelector: n = null,
    unblockSelector: _ = null,
    maskTextClass: a = 'rr-mask',
    maskTextSelector: i = null,
    unmaskTextSelector: o = null,
    inlineStylesheet: E = !0,
    inlineImages: s = !1,
    recordCanvas: c = !1,
    maskInputSelector: I = null,
    unmaskInputSelector: R = null,
    maskAllText: T = !1,
    maskAllInputs: u = !1,
    maskTextFn: l,
    maskInputFn: A,
    slimDOM: N = !1,
    dataURLOptions: d,
    preserveWhiteSpace: O,
    onSerialize: S,
    onIframeLoad: p,
    iframeLoadTimeout: D,
    keepIframeSrcFn: f = () => !1
  } = e || {}, L = {};
  return [
    tR(t, {
      doc: t,
      map: L,
      blockClass: r,
      blockSelector: n,
      unblockSelector: _,
      maskTextClass: a,
      maskTextSelector: i,
      unmaskTextSelector: o,
      skipChild: !1,
      inlineStylesheet: E,
      maskInputSelector: I,
      unmaskInputSelector: R,
      maskAllText: T,
      maskInputOptions: !0 === u ? {
        color: !0,
        date: !0,
        'datetime-local': !0,
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
      } : !1 === u ? {} : u,
      maskTextFn: l,
      maskInputFn: A,
      slimDOMOptions: !0 === N || 'all' === N ? {
        script: !0,
        comment: !0,
        headFavicon: !0,
        headWhitespace: !0,
        headMetaDescKeywords: 'all' === N,
        headMetaSocial: !0,
        headMetaRobots: !0,
        headMetaHttpEquiv: !0,
        headMetaAuthorship: !0,
        headMetaVerification: !0
      } : !1 === N ? {} : N,
      dataURLOptions: d,
      inlineImages: s,
      recordCanvas: c,
      preserveWhiteSpace: O,
      onSerialize: S,
      onIframeLoad: p,
      iframeLoadTimeout: D,
      keepIframeSrcFn: f
    }),
    L
  ];
}(document, {
  blockClass: o,
  blockSelector: E,
  unblockSelector: s,
  maskTextClass: R,
  maskTextSelector: T,
  unmaskTextSelector: l,
  maskInputSelector: u,
  unmaskInputSelector: A,
  inlineStylesheet: O,
  maskAllText: S,
  maskAllInputs: w,
  maskTextFn: h,
  slimDOM: H,
  recordCanvas: U,
  inlineImages: y,
  onSerialize: t => {
    tL(t) && F.addIframe(t), th(t) && X.addShadowRoot(t.shadowRoot, document);
  },
  onIframeLoad: (t, e) => {
    F.attachIframe(t, e), X.observeAttachShadow(t);
  },
  keepIframeSrcFn: B
});
if (!i)
  return console.warn('Failed to snapshot the document');
t5.map = c, a(t6({
  type: N.FullSnapshot,
  data: {
    node: i,
    initialOffset: {
      left: void 0 !== window.pageXOffset ? window.pageXOffset : (null == document ? void 0 : document.documentElement.scrollLeft) || (null === (r = null === (e = null == document ? void 0 : document.body) || void 0 === e ? void 0 : e.parentElement) || void 0 === r ? void 0 : r.scrollLeft) || (null == document ? void 0 : document.body.scrollLeft) || 0,
      top: void 0 !== window.pageYOffset ? window.pageYOffset : (null == document ? void 0 : document.documentElement.scrollTop) || (null === (_ = null === (n = null == document ? void 0 : document.body) || void 0 === n ? void 0 : n.parentElement) || void 0 === _ ? void 0 : _.scrollTop) || (null == document ? void 0 : document.body.scrollTop) || 0
    }
  }
})), tB.forEach(t => t.unlock());
  };
  try {
let t = [];
t.push(tT('DOMContentLoaded', () => {
  a(t6({
    type: N.DomContentLoaded,
    data: {}
  }));
}));
let e = t => {
  var e;
  return tb(tx)({
    onMutation: v,
    mutationCb: k,
    mousemoveCb: (t, e) => a(t6({
      type: N.IncrementalSnapshot,
      data: {
        source: e,
        positions: t
      }
    })),
    mouseInteractionCb: t => a(t6({
      type: N.IncrementalSnapshot,
      data: Object.assign({
        source: d.MouseInteraction
      }, t)
    })),
    scrollCb: V,
    viewportResizeCb: t => a(t6({
      type: N.IncrementalSnapshot,
      data: Object.assign({
        source: d.ViewportResize
      }, t)
    })),
    inputCb: t => a(t6({
      type: N.IncrementalSnapshot,
      data: Object.assign({
        source: d.Input
      }, t)
    })),
    mediaInteractionCb: t => a(t6({
      type: N.IncrementalSnapshot,
      data: Object.assign({
        source: d.MediaInteraction
      }, t)
    })),
    styleSheetRuleCb: t => a(t6({
      type: N.IncrementalSnapshot,
      data: Object.assign({
        source: d.StyleSheetRule
      }, t)
    })),
    styleDeclarationCb: t => a(t6({
      type: N.IncrementalSnapshot,
      data: Object.assign({
        source: d.StyleDeclaration
      }, t)
    })),
    canvasMutationCb: x,
    fontCb: t => a(t6({
      type: N.IncrementalSnapshot,
      data: Object.assign({
        source: d.Font
      }, t)
    })),
    blockClass: o,
    ignoreClass: c,
    ignoreSelector: I,
    maskTextClass: R,
    maskTextSelector: T,
    unmaskTextSelector: l,
    maskInputSelector: u,
    unmaskInputSelector: A,
    maskInputOptions: w,
    inlineStylesheet: O,
    sampling: P,
    recordCanvas: U,
    inlineImages: y,
    userTriggeredOnInput: G,
    collectFonts: m,
    doc: t,
    maskAllText: S,
    maskInputFn: L,
    maskTextFn: h,
    blockSelector: E,
    unblockSelector: s,
    slimDOMOptions: H,
    mirror: t5,
    iframeManager: F,
    shadowDomManager: X,
    canvasManager: W,
    plugins: (null === (e = null == b ? void 0 : b.filter(t => t.observer)) || void 0 === e ? void 0 : e.map(t => ({
      observer: t.observer,
      options: t.options,
      callback: e => a(t6({
        type: N.Plugin,
        data: {
          plugin: t.name,
          payload: e
        }
      }))
    }))) || []
  }, C);
};
F.addLoadListener(r => {
  try {
    t.push(e(r.contentDocument));
  } catch (t) {
    console.warn(t);
  }
});
let r = () => {
  i(), t.push(e(document));
};
return 'interactive' === document.readyState || 'complete' === document.readyState ? r() : t.push(tT('load', () => {
  a(t6({
    type: N.Load,
    data: {}
  })), r();
}, window)), () => {
  t.forEach(t => t());
};
  } catch (t) {
console.warn(t);
  }
}

function t8(t) {
  return t > 9999999999 ? t : 1000 * t;
}
t4.addCustomEvent = (t, e) => {
  if (!a)
throw Error('please add custom event after start recording');
  a(t6({
type: N.Custom,
data: {
  tag: t,
  payload: e
}
  }));
}, t4.freezePage = () => {
  tB.forEach(t => t.freeze());
}, t4.takeFullSnapshot = t => {
  if (!i)
throw Error('please take full snapshot after start recording');
  i(t);
}, t4.mirror = t5;

function t7(t, e) {
  if ('sentry.transaction' !== e.category)
[
  'ui.click',
  'ui.input'
].includes(e.category) ? t.triggerUserActivity() : t.checkAndHandleExpiredSession(), t.addUpdate(() => (t.throttledAddEvent({
  type: N.Custom,
  timestamp: 1000 * (e.timestamp || 0),
  data: {
    tag: 'breadcrumb',
    payload: (0, M.Fv)(e, 10, 1000)
  }
}), 'console' === e.category));
}

function t9(t) {
  let e = et(t);
  return e && e instanceof Element && e.closest('button,a') || e;
}

function et(t) {
  return function(t) {
return 'object' == typeof t && !!t && 'target' in t;
  }(t) ? t.target : t;
}
class ee {
  __init() {
this._lastMutation = 0;
  }
  __init2() {
this._lastScroll = 0;
  }
  __init3() {
this._clicks = [];
  }
  constructor(t, e, r = t7) {
ee.prototype.__init.call(this), ee.prototype.__init2.call(this), ee.prototype.__init3.call(this), this._timeout = e.timeout / 1000, this._threshold = e.threshold / 1000, this._scollTimeout = e.scrollTimeout / 1000, this._replay = t, this._ignoreSelector = e.ignoreSelector, this._addBreadcrumbEvent = r;
  }
  addListeners() {
var t;
let e = () => {
  this._lastScroll = en();
};
let r = (t = () => {
    this._lastMutation = en();
  }, !o && (o = [], function() {
    (0, U.hl)(K, 'open', function(t) {
      return function(...e) {
        if (o)
          try {
            o.forEach(t => t());
          } catch (t) {}
        return t.apply(K, e);
      };
    });
  }()), o.push(t), () => {
    let e = o ? o.indexOf(t) : -1;
    e > -1 && o.splice(e, 1);
  }),
  n = t => {
    if (!t.target)
      return;
    let e = t9(t);
    e && this._handleMultiClick(e);
  },
  _ = new MutationObserver(() => {
    this._lastMutation = en();
  });
_.observe(K.document.documentElement, {
  attributes: !0,
  characterData: !0,
  childList: !0,
  subtree: !0
}), K.addEventListener('scroll', e, {
  passive: !0
}), K.addEventListener('click', n, {
  passive: !0
}), this._teardown = () => {
  K.removeEventListener('scroll', e), K.removeEventListener('click', n), r(), _.disconnect(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0;
};
  }
  removeListeners() {
this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout);
  }
  handleClick(t, e) {
var r;
if (function(t, e) {
    return !!(!er.includes(t.tagName) || 'INPUT' === t.tagName && ![
      'submit',
      'button'
    ].includes(t.getAttribute('type') || '') || 'A' === t.tagName && (t.hasAttribute('download') || t.hasAttribute('target') && '_self' !== t.getAttribute('target')) || e && t.matches(e)) || !1;
  }(e, this._ignoreSelector) || ! function(t) {
    return !!(t.data && 'number' == typeof t.data.nodeId && t.timestamp);
  }(t))
  return;
let n = {
  timestamp: (r = t.timestamp) > 9999999999 ? r / 1000 : r,
  clickBreadcrumb: t,
  clickCount: 0,
  node: e
};
this._clicks.push(n), 1 === this._clicks.length && this._scheduleCheckClicks();
  }
  _handleMultiClick(t) {
this._getClicks(t).forEach(t => {
  t.clickCount++;
});
  }
  _getClicks(t) {
return this._clicks.filter(e => e.node === t);
  }
  _checkClicks() {
let t = [],
  e = en();
for (let r of (this._clicks.forEach(r => {
    !r.mutationAfter && this._lastMutation && (r.mutationAfter = r.timestamp <= this._lastMutation ? this._lastMutation - r.timestamp : void 0), !r.scrollAfter && this._lastScroll && (r.scrollAfter = r.timestamp <= this._lastScroll ? this._lastScroll - r.timestamp : void 0), r.timestamp + this._timeout <= e && t.push(r);
  }), t)) {
  let t = this._clicks.indexOf(r);
  t > -1 && (this._generateBreadcrumbs(r), this._clicks.splice(t, 1));
}
this._clicks.length && this._scheduleCheckClicks();
  }
  _generateBreadcrumbs(t) {
let e = this._replay,
  r = t.scrollAfter && t.scrollAfter <= this._scollTimeout,
  n = t.mutationAfter && t.mutationAfter <= this._threshold,
  {
    clickCount: _,
    clickBreadcrumb: a
  } = t;
if (!r && !n) {
  let r = 1000 * Math.min(t.mutationAfter || this._timeout, this._timeout),
    n = r < 1000 * this._timeout ? 'mutation' : 'timeout',
    i = {
      type: 'default',
      message: a.message,
      timestamp: a.timestamp,
      category: 'ui.slowClickDetected',
      data: {
        ...a.data,
        url: K.location.href,
        route: e.getCurrentRoute(),
        timeAfterClickMs: r,
        endReason: n,
        clickCount: _ || 1
      }
    };
  this._addBreadcrumbEvent(e, i);
  return;
}
if (_ > 1) {
  let t = {
    type: 'default',
    message: a.message,
    timestamp: a.timestamp,
    category: 'ui.multiClick',
    data: {
      ...a.data,
      url: K.location.href,
      route: e.getCurrentRoute(),
      clickCount: _,
      metric: !0
    }
  };
  this._addBreadcrumbEvent(e, t);
}
  }
  _scheduleCheckClicks() {
this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = setTimeout(() => this._checkClicks(), 1000);
  }
}
let er = [
  'A',
  'BUTTON',
  'INPUT'
];

function en() {
  return Date.now() / 1000;
}

function e_(t) {
  return {
timestamp: Date.now() / 1000,
type: 'default',
...t
  };
}
(l = f || (f = {}))[l.Document = 0] = 'Document', l[l.DocumentType = 1] = 'DocumentType', l[l.Element = 2] = 'Element', l[l.Text = 3] = 'Text', l[l.CDATA = 4] = 'CDATA', l[l.Comment = 5] = 'Comment';
let ea = new Set([
'id',
'class',
'aria-label',
'role',
'name',
'alt',
'title',
'data-test-id',
'data-testid',
'disabled',
'aria-disabled'
  ]),
  ei = t => e => {
if (!t.isEnabled())
  return;
let r = function(t) {
  let {
    target: e,
    message: r
  } = function(t) {
    let e;
    let r = 'click' === t.name,
      n = null;
    try {
      n = r ? t9(t.event) : et(t.event), e = (0, G.Rt)(n, {
        maxStringLength: 200
      }) || '<unknown>';
    } catch (t) {
      e = '<unknown>';
    }
    return {
      target: n,
      message: e
    };
  }(t);
  return e_({
    category: `ui.${ t.name }`,
    ...eo(e, r)
  });
}(e);
if (!r)
  return;
let n = 'click' === e.name,
  _ = n && e.event;
n && t.clickDetector && _ && !_.altKey && !_.metaKey && !_.ctrlKey && !_.shiftKey && ! function(t, e, r) {
  t.handleClick(e, r);
}(t.clickDetector, r, t9(e.event)), t7(t, r);
  };

function eo(t, e) {
  let r = t && function(t) {
return '__sn' in t;
  }(t) && t.__sn.type === f.Element ? t.__sn : null;
  return {
message: e,
data: r ? {
  nodeId: r.id,
  node: {
    id: r.id,
    tagName: r.tagName,
    textContent: t ? Array.from(t.childNodes).map(t => '__sn' in t && t.__sn.type === f.Text && t.__sn.textContent).filter(Boolean).map(t => t.trim()).join('') : '',
    attributes: function(t) {
      let e = {};
      for (let r in t)
        if (ea.has(r)) {
          let n = r;
          ('data-testid' === r || 'data-test-id' === r) && (n = 'testId'), e[n] = t[r];
        }
      return e;
    }(r.attributes)
  }
} : {}
  };
}
let eE = [
  'name',
  'type',
  'startTime',
  'transferSize',
  'duration'
];

function es(t) {
  return function(e) {
return eE.every(r => t[r] === e[r]);
  };
}
let ec = `/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
function t(t){let e=t.length;for(;--e>=0;)t[e]=0}const e=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),a=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),i=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),n=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=new Array(576);t(s);const r=new Array(60);t(r);const o=new Array(512);t(o);const l=new Array(256);t(l);const h=new Array(29);t(h);const d=new Array(30);function _(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}let f,c,u;function w(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}t(d);const m=t=>t<256?o[t]:o[256+(t>>>7)],b=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},g=(t,e,a)=>{t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,b(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},p=(t,e,a)=>{g(t,a[2*e],a[2*e+1])},k=(t,e)=>{let a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},v=(t,e,a)=>{const i=new Array(16);let n,s,r=0;for(n=1;n<=15;n++)r=r+a[n-1]<<1,i[n]=r;for(s=0;s<=e;s++){let e=t[2*s+1];0!==e&&(t[2*s]=k(i[e]++,e))}},y=t=>{let e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.sym_next=t.matches=0},x=t=>{t.bi_valid>8?b(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},z=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[a]},A=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&z(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!z(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i},E=(t,i,n)=>{let s,r,o,_,f=0;if(0!==t.sym_next)do{s=255&t.pending_buf[t.sym_buf+f++],s+=(255&t.pending_buf[t.sym_buf+f++])<<8,r=t.pending_buf[t.sym_buf+f++],0===s?p(t,r,i):(o=l[r],p(t,o+256+1,i),_=e[o],0!==_&&(r-=h[o],g(t,r,_)),s--,o=m(s),p(t,o,n),_=a[o],0!==_&&(s-=d[o],g(t,s,_)))}while(f<t.sym_next);p(t,256,i)},R=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,s=e.stat_desc.elems;let r,o,l,h=-1;for(t.heap_len=0,t.heap_max=573,r=0;r<s;r++)0!==a[2*r]?(t.heap[++t.heap_len]=h=r,t.depth[r]=0):a[2*r+1]=0;for(;t.heap_len<2;)l=t.heap[++t.heap_len]=h<2?++h:0,a[2*l]=1,t.depth[l]=0,t.opt_len--,n&&(t.static_len-=i[2*l+1]);for(e.max_code=h,r=t.heap_len>>1;r>=1;r--)A(t,a,r);l=s;do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],A(t,a,1),o=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=o,a[2*l]=a[2*r]+a[2*o],t.depth[l]=(t.depth[r]>=t.depth[o]?t.depth[r]:t.depth[o])+1,a[2*r+1]=a[2*o+1]=l,t.heap[1]=l++,A(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,l=e.stat_desc.max_length;let h,d,_,f,c,u,w=0;for(f=0;f<=15;f++)t.bl_count[f]=0;for(a[2*t.heap[t.heap_max]+1]=0,h=t.heap_max+1;h<573;h++)d=t.heap[h],f=a[2*a[2*d+1]+1]+1,f>l&&(f=l,w++),a[2*d+1]=f,d>i||(t.bl_count[f]++,c=0,d>=o&&(c=r[d-o]),u=a[2*d],t.opt_len+=u*(f+c),s&&(t.static_len+=u*(n[2*d+1]+c)));if(0!==w){do{for(f=l-1;0===t.bl_count[f];)f--;t.bl_count[f]--,t.bl_count[f+1]+=2,t.bl_count[l]--,w-=2}while(w>0);for(f=l;0!==f;f--)for(d=t.bl_count[f];0!==d;)_=t.heap[--h],_>i||(a[2*_+1]!==f&&(t.opt_len+=(f-a[2*_+1])*a[2*_],a[2*_+1]=f),d--)}})(t,e),v(a,h,t.bl_count)},Z=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=r,r=e[2*(i+1)+1],++o<l&&n===r||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4))},U=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),i=0;i<=a;i++)if(n=r,r=e[2*(i+1)+1],!(++o<l&&n===r)){if(o<h)do{p(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==s&&(p(t,n,t.bl_tree),o--),p(t,16,t.bl_tree),g(t,o-3,2)):o<=10?(p(t,17,t.bl_tree),g(t,o-3,3)):(p(t,18,t.bl_tree),g(t,o-11,7));o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4)}};let S=!1;const D=(t,e,a,i)=>{g(t,0+(i?1:0),3),x(t),b(t,a),b(t,~a),a&&t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a};var T=(t,e,a,i)=>{let o,l,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),R(t,t.l_desc),R(t,t.d_desc),h=(t=>{let e;for(Z(t,t.dyn_ltree,t.l_desc.max_code),Z(t,t.dyn_dtree,t.d_desc.max_code),R(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*n[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),o=t.opt_len+3+7>>>3,l=t.static_len+3+7>>>3,l<=o&&(o=l)):o=l=a+5,a+4<=o&&-1!==e?D(t,e,a,i):4===t.strategy||l===o?(g(t,2+(i?1:0),3),E(t,s,r)):(g(t,4+(i?1:0),3),((t,e,a,i)=>{let s;for(g(t,e-257,5),g(t,a-1,5),g(t,i-4,4),s=0;s<i;s++)g(t,t.bl_tree[2*n[s]+1],3);U(t,t.dyn_ltree,e-1),U(t,t.dyn_dtree,a-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),E(t,t.dyn_ltree,t.dyn_dtree)),y(t),i&&x(t)},O={_tr_init:t=>{S||((()=>{let t,n,w,m,b;const g=new Array(16);for(w=0,m=0;m<28;m++)for(h[m]=w,t=0;t<1<<e[m];t++)l[w++]=m;for(l[w-1]=m,b=0,m=0;m<16;m++)for(d[m]=b,t=0;t<1<<a[m];t++)o[b++]=m;for(b>>=7;m<30;m++)for(d[m]=b<<7,t=0;t<1<<a[m]-7;t++)o[256+b++]=m;for(n=0;n<=15;n++)g[n]=0;for(t=0;t<=143;)s[2*t+1]=8,t++,g[8]++;for(;t<=255;)s[2*t+1]=9,t++,g[9]++;for(;t<=279;)s[2*t+1]=7,t++,g[7]++;for(;t<=287;)s[2*t+1]=8,t++,g[8]++;for(v(s,287,g),t=0;t<30;t++)r[2*t+1]=5,r[2*t]=k(t,5);f=new _(s,e,257,286,15),c=new _(r,a,0,30,15),u=new _(new Array(0),i,0,19,7)})(),S=!0),t.l_desc=new w(t.dyn_ltree,f),t.d_desc=new w(t.dyn_dtree,c),t.bl_desc=new w(t.bl_tree,u),t.bi_buf=0,t.bi_valid=0,y(t)},_tr_stored_block:D,_tr_flush_block:T,_tr_tally:(t,e,a)=>(t.pending_buf[t.sym_buf+t.sym_next++]=e,t.pending_buf[t.sym_buf+t.sym_next++]=e>>8,t.pending_buf[t.sym_buf+t.sym_next++]=a,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(l[a]+256+1)]++,t.dyn_dtree[2*m(e)]++),t.sym_next===t.sym_end),_tr_align:t=>{g(t,2,3),p(t,256,s),(t=>{16===t.bi_valid?(b(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var F=(t,e,a,i)=>{let n=65535&t|0,s=t>>>16&65535|0,r=0;for(;0!==a;){r=a>2e3?2e3:a,a-=r;do{n=n+e[i++]|0,s=s+n|0}while(--r);n%=65521,s%=65521}return n|s<<16|0};const L=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e})());var N=(t,e,a,i)=>{const n=L,s=i+a;t^=-1;for(let a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t},I={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},B={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:C,_tr_stored_block:H,_tr_flush_block:M,_tr_tally:j,_tr_align:K}=O,{Z_NO_FLUSH:P,Z_PARTIAL_FLUSH:Y,Z_FULL_FLUSH:G,Z_FINISH:X,Z_BLOCK:W,Z_OK:q,Z_STREAM_END:J,Z_STREAM_ERROR:Q,Z_DATA_ERROR:V,Z_BUF_ERROR:$,Z_DEFAULT_COMPRESSION:tt,Z_FILTERED:et,Z_HUFFMAN_ONLY:at,Z_RLE:it,Z_FIXED:nt,Z_DEFAULT_STRATEGY:st,Z_UNKNOWN:rt,Z_DEFLATED:ot}=B,lt=(t,e)=>(t.msg=I[e],e),ht=t=>2*t-(t>4?9:0),dt=t=>{let e=t.length;for(;--e>=0;)t[e]=0},_t=t=>{let e,a,i,n=t.w_size;e=t.hash_size,i=e;do{a=t.head[--i],t.head[i]=a>=n?a-n:0}while(--e);e=n,i=e;do{a=t.prev[--i],t.prev[i]=a>=n?a-n:0}while(--e)};let ft=(t,e,a)=>(e<<t.hash_shift^a)&t.hash_mask;const ct=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},ut=(t,e)=>{M(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,ct(t.strm)},wt=(t,e)=>{t.pending_buf[t.pending++]=e},mt=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},bt=(t,e,a,i)=>{let n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?t.adler=F(t.adler,e,n,a):2===t.state.wrap&&(t.adler=N(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)},gt=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,o=t.nice_match;const l=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+258;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(a=e,h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1]){s+=2,a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(i=258-(f-s),s=f-258,i>r){if(t.match_start=e,r=i,i>=o)break;c=h[s+r-1],u=h[s+r]}}}while((e=_[e&d])>l&&0!=--n);return r<=t.lookahead?r:t.lookahead},pt=t=>{const e=t.w_size;let a,i,n;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-262)&&(t.window.set(t.window.subarray(e,e+e-i),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,t.insert>t.strstart&&(t.insert=t.strstart),_t(t),i+=e),0===t.strm.avail_in)break;if(a=bt(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=a,t.lookahead+t.insert>=3)for(n=t.strstart-t.insert,t.ins_h=t.window[n],t.ins_h=ft(t,t.ins_h,t.window[n+1]);t.insert&&(t.ins_h=ft(t,t.ins_h,t.window[n+3-1]),t.prev[n&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=n,n++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)},kt=(t,e)=>{let a,i,n,s=t.pending_buf_size-5>t.w_size?t.w_size:t.pending_buf_size-5,r=0,o=t.strm.avail_in;do{if(a=65535,n=t.bi_valid+42>>3,t.strm.avail_out<n)break;if(n=t.strm.avail_out-n,i=t.strstart-t.block_start,a>i+t.strm.avail_in&&(a=i+t.strm.avail_in),a>n&&(a=n),a<s&&(0===a&&e!==X||e===P||a!==i+t.strm.avail_in))break;r=e===X&&a===i+t.strm.avail_in?1:0,H(t,0,0,r),t.pending_buf[t.pending-4]=a,t.pending_buf[t.pending-3]=a>>8,t.pending_buf[t.pending-2]=~a,t.pending_buf[t.pending-1]=~a>>8,ct(t.strm),i&&(i>a&&(i=a),t.strm.output.set(t.window.subarray(t.block_start,t.block_start+i),t.strm.next_out),t.strm.next_out+=i,t.strm.avail_out-=i,t.strm.total_out+=i,t.block_start+=i,a-=i),a&&(bt(t.strm,t.strm.output,t.strm.next_out,a),t.strm.next_out+=a,t.strm.avail_out-=a,t.strm.total_out+=a)}while(0===r);return o-=t.strm.avail_in,o&&(o>=t.w_size?(t.matches=2,t.window.set(t.strm.input.subarray(t.strm.next_in-t.w_size,t.strm.next_in),0),t.strstart=t.w_size,t.insert=t.strstart):(t.window_size-t.strstart<=o&&(t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,t.insert>t.strstart&&(t.insert=t.strstart)),t.window.set(t.strm.input.subarray(t.strm.next_in-o,t.strm.next_in),t.strstart),t.strstart+=o,t.insert+=o>t.w_size-t.insert?t.w_size-t.insert:o),t.block_start=t.strstart),t.high_water<t.strstart&&(t.high_water=t.strstart),r?4:e!==P&&e!==X&&0===t.strm.avail_in&&t.strstart===t.block_start?2:(n=t.window_size-t.strstart,t.strm.avail_in>n&&t.block_start>=t.w_size&&(t.block_start-=t.w_size,t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,n+=t.w_size,t.insert>t.strstart&&(t.insert=t.strstart)),n>t.strm.avail_in&&(n=t.strm.avail_in),n&&(bt(t.strm,t.window,t.strstart,n),t.strstart+=n,t.insert+=n>t.w_size-t.insert?t.w_size-t.insert:n),t.high_water<t.strstart&&(t.high_water=t.strstart),n=t.bi_valid+42>>3,n=t.pending_buf_size-n>65535?65535:t.pending_buf_size-n,s=n>t.w_size?t.w_size:n,i=t.strstart-t.block_start,(i>=s||(i||e===X)&&e!==P&&0===t.strm.avail_in&&i<=n)&&(a=i>n?n:i,r=e===X&&0===t.strm.avail_in&&a===i?1:0,H(t,t.block_start,a,r),t.block_start+=a,ct(t.strm)),r?3:1)},vt=(t,e)=>{let a,i;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a)),t.match_length>=3)if(i=j(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=ft(t,t.ins_h,t.window[t.strstart+1]);else i=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2},yt=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a),t.match_length<=5&&(t.strategy===et||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=j(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(ut(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(i=j(t,0,t.window[t.strstart-1]),i&&ut(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=j(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2};function xt(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}const zt=[new xt(0,0,0,0,kt),new xt(4,4,8,4,vt),new xt(4,5,16,8,vt),new xt(4,6,32,32,vt),new xt(4,4,16,16,yt),new xt(8,16,32,32,yt),new xt(8,16,128,128,yt),new xt(8,32,128,256,yt),new xt(32,128,258,1024,yt),new xt(32,258,258,4096,yt)];function At(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ot,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),dt(this.dyn_ltree),dt(this.dyn_dtree),dt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),dt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),dt(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Et=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||42!==e.status&&57!==e.status&&69!==e.status&&73!==e.status&&91!==e.status&&103!==e.status&&113!==e.status&&666!==e.status?1:0},Rt=t=>{if(Et(t))return lt(t,Q);t.total_in=t.total_out=0,t.data_type=rt;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=2===e.wrap?57:e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=-2,C(e),q},Zt=t=>{const e=Rt(t);var a;return e===q&&((a=t.state).window_size=2*a.w_size,dt(a.head),a.max_lazy_match=zt[a.level].max_lazy,a.good_match=zt[a.level].good_length,a.nice_match=zt[a.level].nice_length,a.max_chain_length=zt[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0),e},Ut=(t,e,a,i,n,s)=>{if(!t)return Q;let r=1;if(e===tt&&(e=6),i<0?(r=0,i=-i):i>15&&(r=2,i-=16),n<1||n>9||a!==ot||i<8||i>15||e<0||e>9||s<0||s>nt||8===i&&1!==r)return lt(t,Q);8===i&&(i=9);const o=new At;return t.state=o,o.strm=t,o.status=42,o.wrap=r,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new Uint8Array(2*o.w_size),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=3*(o.lit_bufsize-1),o.level=e,o.strategy=s,o.method=a,Zt(t)};var St={deflateInit:(t,e)=>Ut(t,e,ot,15,8,st),deflateInit2:Ut,deflateReset:Zt,deflateResetKeep:Rt,deflateSetHeader:(t,e)=>Et(t)||2!==t.state.wrap?Q:(t.state.gzhead=e,q),deflate:(t,e)=>{if(Et(t)||e>W||e<0)return t?lt(t,Q):Q;const a=t.state;if(!t.output||0!==t.avail_in&&!t.input||666===a.status&&e!==X)return lt(t,0===t.avail_out?$:Q);const i=a.last_flush;if(a.last_flush=e,0!==a.pending){if(ct(t),0===t.avail_out)return a.last_flush=-1,q}else if(0===t.avail_in&&ht(e)<=ht(i)&&e!==X)return lt(t,$);if(666===a.status&&0!==t.avail_in)return lt(t,$);if(42===a.status&&0===a.wrap&&(a.status=113),42===a.status){let e=ot+(a.w_bits-8<<4)<<8,i=-1;if(i=a.strategy>=at||a.level<2?0:a.level<6?1:6===a.level?2:3,e|=i<<6,0!==a.strstart&&(e|=32),e+=31-e%31,mt(a,e),0!==a.strstart&&(mt(a,t.adler>>>16),mt(a,65535&t.adler)),t.adler=1,a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(57===a.status)if(t.adler=0,wt(a,31),wt(a,139),wt(a,8),a.gzhead)wt(a,(a.gzhead.text?1:0)+(a.gzhead.hcrc?2:0)+(a.gzhead.extra?4:0)+(a.gzhead.name?8:0)+(a.gzhead.comment?16:0)),wt(a,255&a.gzhead.time),wt(a,a.gzhead.time>>8&255),wt(a,a.gzhead.time>>16&255),wt(a,a.gzhead.time>>24&255),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,255&a.gzhead.os),a.gzhead.extra&&a.gzhead.extra.length&&(wt(a,255&a.gzhead.extra.length),wt(a,a.gzhead.extra.length>>8&255)),a.gzhead.hcrc&&(t.adler=N(t.adler,a.pending_buf,a.pending,0)),a.gzindex=0,a.status=69;else if(wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,3),a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q;if(69===a.status){if(a.gzhead.extra){let e=a.pending,i=(65535&a.gzhead.extra.length)-a.gzindex;for(;a.pending+i>a.pending_buf_size;){let n=a.pending_buf_size-a.pending;if(a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex,a.gzindex+n),a.pending),a.pending=a.pending_buf_size,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex+=n,ct(t),0!==a.pending)return a.last_flush=-1,q;e=0,i-=n}let n=new Uint8Array(a.gzhead.extra);a.pending_buf.set(n.subarray(a.gzindex,a.gzindex+i),a.pending),a.pending+=i,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex=0}a.status=73}if(73===a.status){if(a.gzhead.name){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.name.length?255&a.gzhead.name.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),a.gzindex=0}a.status=91}if(91===a.status){if(a.gzhead.comment){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.comment.length?255&a.gzhead.comment.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i))}a.status=103}if(103===a.status){if(a.gzhead.hcrc){if(a.pending+2>a.pending_buf_size&&(ct(t),0!==a.pending))return a.last_flush=-1,q;wt(a,255&t.adler),wt(a,t.adler>>8&255),t.adler=0}if(a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(0!==t.avail_in||0!==a.lookahead||e!==P&&666!==a.status){let i=0===a.level?kt(a,e):a.strategy===at?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(pt(t),0===t.lookahead)){if(e===P)return 1;break}if(t.match_length=0,a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):a.strategy===it?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=258){if(pt(t),t.lookahead<=258&&e===P)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=t.strstart-1,i=r[n],i===r[++n]&&i===r[++n]&&i===r[++n])){s=t.strstart+258;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);t.match_length=258-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=j(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):zt[a.level].func(a,e);if(3!==i&&4!==i||(a.status=666),1===i||3===i)return 0===t.avail_out&&(a.last_flush=-1),q;if(2===i&&(e===Y?K(a):e!==W&&(H(a,0,0,!1),e===G&&(dt(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),ct(t),0===t.avail_out))return a.last_flush=-1,q}return e!==X?q:a.wrap<=0?J:(2===a.wrap?(wt(a,255&t.adler),wt(a,t.adler>>8&255),wt(a,t.adler>>16&255),wt(a,t.adler>>24&255),wt(a,255&t.total_in),wt(a,t.total_in>>8&255),wt(a,t.total_in>>16&255),wt(a,t.total_in>>24&255)):(mt(a,t.adler>>>16),mt(a,65535&t.adler)),ct(t),a.wrap>0&&(a.wrap=-a.wrap),0!==a.pending?q:J)},deflateEnd:t=>{if(Et(t))return Q;const e=t.state.status;return t.state=null,113===e?lt(t,V):q},deflateSetDictionary:(t,e)=>{let a=e.length;if(Et(t))return Q;const i=t.state,n=i.wrap;if(2===n||1===n&&42!==i.status||i.lookahead)return Q;if(1===n&&(t.adler=F(t.adler,e,a,0)),i.wrap=0,a>=i.w_size){0===n&&(dt(i.head),i.strstart=0,i.block_start=0,i.insert=0);let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),e=t,a=i.w_size}const s=t.avail_in,r=t.next_in,o=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,pt(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{i.ins_h=ft(i,i.ins_h,i.window[t+3-1]),i.prev[t&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=t,t++}while(--e);i.strstart=t,i.lookahead=2,pt(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=r,t.input=o,t.avail_in=s,i.wrap=n,q},deflateInfo:"pako deflate (from Nodeca project)"};const Dt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var Tt=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(const e in a)Dt(a,e)&&(t[e]=a[e])}}return t},Ot=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),i+=n.length}return a};let Ft=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Ft=!1}const Lt=new Uint8Array(256);for(let t=0;t<256;t++)Lt[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Lt[254]=Lt[254]=1;var Nt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,i,n,s,r=t.length,o=0;for(n=0;n<r;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),o+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(o),s=0,n=0;s<o;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},It=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue}let r=Lt[e];if(r>4)s[n++]=65533,i+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)e=e<<6|63&t[i++],r--;r>1?s[n++]=65533:e<65536?s[n++]=e:(e-=65536,s[n++]=55296|e>>10&1023,s[n++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&Ft)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a})(s,n)},Bt=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Lt[t[a]]>e?a:e};var Ct=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const Ht=Object.prototype.toString,{Z_NO_FLUSH:Mt,Z_SYNC_FLUSH:jt,Z_FULL_FLUSH:Kt,Z_FINISH:Pt,Z_OK:Yt,Z_STREAM_END:Gt,Z_DEFAULT_COMPRESSION:Xt,Z_DEFAULT_STRATEGY:Wt,Z_DEFLATED:qt}=B;function Jt(t){this.options=Tt({level:Xt,method:qt,chunkSize:16384,windowBits:15,memLevel:8,strategy:Wt},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=St.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==Yt)throw new Error(I[a]);if(e.header&&St.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?Nt(e.dictionary):"[object ArrayBuffer]"===Ht.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=St.deflateSetDictionary(this.strm,t),a!==Yt)throw new Error(I[a]);this._dict_set=!0}}function Qt(t,e){const a=new Jt(e);if(a.push(t,!0),a.err)throw a.msg||I[a.err];return a.result}Jt.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?Pt:Mt,"string"==typeof t?a.input=Nt(t):"[object ArrayBuffer]"===Ht.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;)if(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),(s===jt||s===Kt)&&a.avail_out<=6)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else{if(n=St.deflate(a,s),n===Gt)return a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),n=St.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Yt;if(0!==a.avail_out){if(s>0&&a.next_out>0)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else if(0===a.avail_in)break}else this.onData(a.output)}return!0},Jt.prototype.onData=function(t){this.chunks.push(t)},Jt.prototype.onEnd=function(t){t===Yt&&(this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Vt={Deflate:Jt,deflate:Qt,deflateRaw:function(t,e){return(e=e||{}).raw=!0,Qt(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,Qt(t,e)},constants:B};var $t=function(t,e){let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z,A;const E=t.state;a=t.next_in,z=t.input,i=a+(t.avail_in-5),n=t.next_out,A=t.output,s=n-(e-t.avail_out),r=n+(t.avail_out-257),o=E.dmax,l=E.wsize,h=E.whave,d=E.wnext,_=E.window,f=E.hold,c=E.bits,u=E.lencode,w=E.distcode,m=(1<<E.lenbits)-1,b=(1<<E.distbits)-1;t:do{c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=u[f&m];e:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,0===p)A[n++]=65535&g;else{if(!(16&p)){if(0==(64&p)){g=u[(65535&g)+(f&(1<<p)-1)];continue e}if(32&p){E.mode=16191;break t}t.msg="invalid literal/length code",E.mode=16209;break t}k=65535&g,p&=15,p&&(c<p&&(f+=z[a++]<<c,c+=8),k+=f&(1<<p)-1,f>>>=p,c-=p),c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=w[f&b];a:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,!(16&p)){if(0==(64&p)){g=w[(65535&g)+(f&(1<<p)-1)];continue a}t.msg="invalid distance code",E.mode=16209;break t}if(v=65535&g,p&=15,c<p&&(f+=z[a++]<<c,c+=8,c<p&&(f+=z[a++]<<c,c+=8)),v+=f&(1<<p)-1,v>o){t.msg="invalid distance too far back",E.mode=16209;break t}if(f>>>=p,c-=p,p=n-s,v>p){if(p=v-p,p>h&&E.sane){t.msg="invalid distance too far back",E.mode=16209;break t}if(y=0,x=_,0===d){if(y+=l-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}else if(d<p){if(y+=l+d-p,p-=d,p<k){k-=p;do{A[n++]=_[y++]}while(--p);if(y=0,d<k){p=d,k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}}else if(y+=d-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}for(;k>2;)A[n++]=x[y++],A[n++]=x[y++],A[n++]=x[y++],k-=3;k&&(A[n++]=x[y++],k>1&&(A[n++]=x[y++]))}else{y=n-v;do{A[n++]=A[y++],A[n++]=A[y++],A[n++]=A[y++],k-=3}while(k>2);k&&(A[n++]=A[y++],k>1&&(A[n++]=A[y++]))}break}}break}}while(a<i&&n<r);k=c>>3,a-=k,c-=k<<3,f&=(1<<c)-1,t.next_in=a,t.next_out=n,t.avail_in=a<i?i-a+5:5-(a-i),t.avail_out=n<r?r-n+257:257-(n-r),E.hold=f,E.bits=c};const te=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),ee=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),ae=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),ie=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var ne=(t,e,a,i,n,s,r,o)=>{const l=o.bits;let h,d,_,f,c,u,w=0,m=0,b=0,g=0,p=0,k=0,v=0,y=0,x=0,z=0,A=null;const E=new Uint16Array(16),R=new Uint16Array(16);let Z,U,S,D=null;for(w=0;w<=15;w++)E[w]=0;for(m=0;m<i;m++)E[e[a+m]]++;for(p=l,g=15;g>=1&&0===E[g];g--);if(p>g&&(p=g),0===g)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(b=1;b<g&&0===E[b];b++);for(p<b&&(p=b),y=1,w=1;w<=15;w++)if(y<<=1,y-=E[w],y<0)return-1;if(y>0&&(0===t||1!==g))return-1;for(R[1]=0,w=1;w<15;w++)R[w+1]=R[w]+E[w];for(m=0;m<i;m++)0!==e[a+m]&&(r[R[e[a+m]]++]=m);if(0===t?(A=D=r,u=20):1===t?(A=te,D=ee,u=257):(A=ae,D=ie,u=0),z=0,m=0,w=b,c=s,k=p,v=0,_=-1,x=1<<p,f=x-1,1===t&&x>852||2===t&&x>592)return 1;for(;;){Z=w-v,r[m]+1<u?(U=0,S=r[m]):r[m]>=u?(U=D[r[m]-u],S=A[r[m]-u]):(U=96,S=0),h=1<<w-v,d=1<<k,b=d;do{d-=h,n[c+(z>>v)+d]=Z<<24|U<<16|S|0}while(0!==d);for(h=1<<w-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,m++,0==--E[w]){if(w===g)break;w=e[a+r[m]]}if(w>p&&(z&f)!==_){for(0===v&&(v=p),c+=b,k=w-v,y=1<<k;k+v<g&&(y-=E[k+v],!(y<=0));)k++,y<<=1;if(x+=1<<k,1===t&&x>852||2===t&&x>592)return 1;_=z&f,n[_]=p<<24|k<<16|c-s|0}}return 0!==z&&(n[c+z]=w-v<<24|64<<16|0),o.bits=p,0};const{Z_FINISH:se,Z_BLOCK:re,Z_TREES:oe,Z_OK:le,Z_STREAM_END:he,Z_NEED_DICT:de,Z_STREAM_ERROR:_e,Z_DATA_ERROR:fe,Z_MEM_ERROR:ce,Z_BUF_ERROR:ue,Z_DEFLATED:we}=B,me=16209,be=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function ge(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const pe=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||e.mode<16180||e.mode>16211?1:0},ke=t=>{if(pe(t))return _e;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=16180,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,le},ve=t=>{if(pe(t))return _e;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,ke(t)},ye=(t,e)=>{let a;if(pe(t))return _e;const i=t.state;return e<0?(a=0,e=-e):(a=5+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?_e:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,ve(t))},xe=(t,e)=>{if(!t)return _e;const a=new ge;t.state=a,a.strm=t,a.window=null,a.mode=16180;const i=ye(t,e);return i!==le&&(t.state=null),i};let ze,Ae,Ee=!0;const Re=t=>{if(Ee){ze=new Int32Array(512),Ae=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(ne(1,t.lens,0,288,ze,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;ne(2,t.lens,0,32,Ae,0,t.work,{bits:5}),Ee=!1}t.lencode=ze,t.lenbits=9,t.distcode=Ae,t.distbits=5},Ze=(t,e,a,i)=>{let n;const s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),s.wnext=0,s.whave=s.wsize):(n=s.wsize-s.wnext,n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0};var Ue={inflateReset:ve,inflateReset2:ye,inflateResetKeep:ke,inflateInit:t=>xe(t,15),inflateInit2:xe,inflate:(t,e)=>{let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(pe(t)||!t.output||!t.input&&0!==t.avail_in)return _e;a=t.state,16191===a.mode&&(a.mode=16192),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,_=o,f=l,x=le;t:for(;;)switch(a.mode){case 16180:if(0===a.wrap){a.mode=16192;break}for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(2&a.wrap&&35615===h){0===a.wbits&&(a.wbits=15),a.check=0,A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0),h=0,d=0,a.mode=16181;break}if(a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",a.mode=me;break}if((15&h)!==we){t.msg="unknown compression method",a.mode=me;break}if(h>>>=4,d-=4,y=8+(15&h),0===a.wbits&&(a.wbits=y),y>15||y>a.wbits){t.msg="invalid window size",a.mode=me;break}a.dmax=1<<a.wbits,a.flags=0,t.adler=a.check=1,a.mode=512&h?16189:16191,h=0,d=0;break;case 16181:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.flags=h,(255&a.flags)!==we){t.msg="unknown compression method",a.mode=me;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=me;break}a.head&&(a.head.text=h>>8&1),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16182;case 16182:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.time=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,A[2]=h>>>16&255,A[3]=h>>>24&255,a.check=N(a.check,A,4,0)),h=0,d=0,a.mode=16183;case 16183:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.xflags=255&h,a.head.os=h>>8),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16184;case 16184:if(1024&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length=h,a.head&&(a.head.extra_len=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0}else a.head&&(a.head.extra=null);a.mode=16185;case 16185:if(1024&a.flags&&(c=a.length,c>o&&(c=o),c&&(a.head&&(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,a.length-=c),a.length))break t;a.length=0,a.mode=16186;case 16186:if(2048&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=16187;case 16187:if(4096&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.comment=null);a.mode=16188;case 16188:if(512&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(65535&a.check)){t.msg="header crc mismatch",a.mode=me;break}h=0,d=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=16191;break;case 16189:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}t.adler=a.check=be(h),h=0,d=0,a.mode=16190;case 16190:if(0===a.havedict)return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,de;t.adler=a.check=1,a.mode=16191;case 16191:if(e===re||e===oe)break t;case 16192:if(a.last){h>>>=7&d,d-=7&d,a.mode=16206;break}for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}switch(a.last=1&h,h>>>=1,d-=1,3&h){case 0:a.mode=16193;break;case 1:if(Re(a),a.mode=16199,e===oe){h>>>=2,d-=2;break t}break;case 2:a.mode=16196;break;case 3:t.msg="invalid block type",a.mode=me}h>>>=2,d-=2;break;case 16193:for(h>>>=7&d,d-=7&d;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",a.mode=me;break}if(a.length=65535&h,h=0,d=0,a.mode=16194,e===oe)break t;case 16194:a.mode=16195;case 16195:if(c=a.length,c){if(c>o&&(c=o),c>l&&(c=l),0===c)break t;n.set(i.subarray(s,s+c),r),o-=c,s+=c,l-=c,r+=c,a.length-=c;break}a.mode=16191;break;case 16196:for(;d<14;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.nlen=257+(31&h),h>>>=5,d-=5,a.ndist=1+(31&h),h>>>=5,d-=5,a.ncode=4+(15&h),h>>>=4,d-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=me;break}a.have=0,a.mode=16197;case 16197:for(;a.have<a.ncode;){for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.lens[Z[a.have++]]=7&h,h>>>=3,d-=3}for(;a.have<19;)a.lens[Z[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,E={bits:a.lenbits},x=ne(0,a.lens,0,19,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid code lengths set",a.mode=me;break}a.have=0,a.mode=16198;case 16198:for(;a.have<a.nlen+a.ndist;){for(;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(g<16)h>>>=m,d-=m,a.lens[a.have++]=g;else{if(16===g){for(R=m+2;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h>>>=m,d-=m,0===a.have){t.msg="invalid bit length repeat",a.mode=me;break}y=a.lens[a.have-1],c=3+(3&h),h>>>=2,d-=2}else if(17===g){for(R=m+3;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=3+(7&h),h>>>=3,d-=3}else{for(R=m+7;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=11+(127&h),h>>>=7,d-=7}if(a.have+c>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=me;break}for(;c--;)a.lens[a.have++]=y}}if(a.mode===me)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=me;break}if(a.lenbits=9,E={bits:a.lenbits},x=ne(1,a.lens,0,a.nlen,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid literal/lengths set",a.mode=me;break}if(a.distbits=6,a.distcode=a.distdyn,E={bits:a.distbits},x=ne(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E),a.distbits=E.bits,x){t.msg="invalid distances set",a.mode=me;break}if(a.mode=16199,e===oe)break t;case 16199:a.mode=16200;case 16200:if(o>=6&&l>=258){t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,$t(t,f),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,16191===a.mode&&(a.back=-1);break}for(a.back=0;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(b&&0==(240&b)){for(p=m,k=b,v=g;z=a.lencode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,a.length=g,0===b){a.mode=16205;break}if(32&b){a.back=-1,a.mode=16191;break}if(64&b){t.msg="invalid literal/length code",a.mode=me;break}a.extra=15&b,a.mode=16201;case 16201:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=16202;case 16202:for(;z=a.distcode[h&(1<<a.distbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(0==(240&b)){for(p=m,k=b,v=g;z=a.distcode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,64&b){t.msg="invalid distance code",a.mode=me;break}a.offset=g,a.extra=15&b,a.mode=16203;case 16203:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.offset+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=me;break}a.mode=16204;case 16204:if(0===l)break t;if(c=f-l,a.offset>c){if(c=a.offset-c,c>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=me;break}c>a.wnext?(c-=a.wnext,u=a.wsize-c):u=a.wnext-c,c>a.length&&(c=a.length),w=a.window}else w=n,u=r-a.offset,c=a.length;c>l&&(c=l),l-=c,a.length-=c;do{n[r++]=w[u++]}while(--c);0===a.length&&(a.mode=16200);break;case 16205:if(0===l)break t;n[r++]=a.length,l--,a.mode=16200;break;case 16206:if(a.wrap){for(;d<32;){if(0===o)break t;o--,h|=i[s++]<<d,d+=8}if(f-=l,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,r-f):F(a.check,n,f,r-f)),f=l,4&a.wrap&&(a.flags?h:be(h))!==a.check){t.msg="incorrect data check",a.mode=me;break}h=0,d=0}a.mode=16207;case 16207:if(a.wrap&&a.flags){for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=me;break}h=0,d=0}a.mode=16208;case 16208:x=he;break t;case me:x=fe;break t;case 16210:return ce;default:return _e}return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,(a.wsize||f!==t.avail_out&&a.mode<me&&(a.mode<16206||e!==se))&&Ze(t,t.output,t.next_out,f-t.avail_out),_-=t.avail_in,f-=t.avail_out,t.total_in+=_,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,t.next_out-f):F(a.check,n,f,t.next_out-f)),t.data_type=a.bits+(a.last?64:0)+(16191===a.mode?128:0)+(16199===a.mode||16194===a.mode?256:0),(0===_&&0===f||e===se)&&x===le&&(x=ue),x},inflateEnd:t=>{if(pe(t))return _e;let e=t.state;return e.window&&(e.window=null),t.state=null,le},inflateGetHeader:(t,e)=>{if(pe(t))return _e;const a=t.state;return 0==(2&a.wrap)?_e:(a.head=e,e.done=!1,le)},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return pe(t)?_e:(i=t.state,0!==i.wrap&&16190!==i.mode?_e:16190===i.mode&&(n=1,n=F(n,e,a,0),n!==i.check)?fe:(s=Ze(t,e,a,a),s?(i.mode=16210,ce):(i.havedict=1,le)))},inflateInfo:"pako inflate (from Nodeca project)"};var Se=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const De=Object.prototype.toString,{Z_NO_FLUSH:Te,Z_FINISH:Oe,Z_OK:Fe,Z_STREAM_END:Le,Z_NEED_DICT:Ne,Z_STREAM_ERROR:Ie,Z_DATA_ERROR:Be,Z_MEM_ERROR:Ce}=B;function He(t){this.options=Tt({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=Ue.inflateInit2(this.strm,e.windowBits);if(a!==Fe)throw new Error(I[a]);if(this.header=new Se,Ue.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Nt(e.dictionary):"[object ArrayBuffer]"===De.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(a=Ue.inflateSetDictionary(this.strm,e.dictionary),a!==Fe)))throw new Error(I[a])}He.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,o;if(this.ended)return!1;for(r=e===~~e?e:!0===e?Oe:Te,"[object ArrayBuffer]"===De.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),s=Ue.inflate(a,r),s===Ne&&n&&(s=Ue.inflateSetDictionary(a,n),s===Fe?s=Ue.inflate(a,r):s===Be&&(s=Ne));a.avail_in>0&&s===Le&&a.state.wrap>0&&0!==t[a.next_in];)Ue.inflateReset(a),s=Ue.inflate(a,r);switch(s){case Ie:case Be:case Ne:case Ce:return this.onEnd(s),this.ended=!0,!1}if(o=a.avail_out,a.next_out&&(0===a.avail_out||s===Le))if("string"===this.options.to){let t=Bt(a.output,a.next_out),e=a.next_out-t,n=It(a.output,t);a.next_out=e,a.avail_out=i-e,e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n)}else this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==Fe||0!==o){if(s===Le)return s=Ue.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===a.avail_in)break}}return!0},He.prototype.onData=function(t){this.chunks.push(t)},He.prototype.onEnd=function(t){t===Fe&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};const{Deflate:Me,deflate:je,deflateRaw:Ke,gzip:Pe}=Vt;var Ye=Me,Ge=je,Xe=B;const We=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const e=this._hasEvents?",":"";this.deflate.push(e+t,Xe.Z_SYNC_FLUSH),this._hasEvents=!0}finish(){if(this.deflate.push("]",Xe.Z_FINISH),this.deflate.err)throw this.deflate.err;const t=this.deflate.result;return this._init(),t}_init(){this._hasEvents=!1,this.deflate=new Ye,this.deflate.push("[",Xe.Z_NO_FLUSH)}},qe={clear:()=>{We.clear()},addEvent:t=>We.addEvent(t),finish:()=>We.finish(),compress:t=>function(t){return Ge(t)}(t)};addEventListener("message",(function(t){const e=t.data.method,a=t.data.id,i=t.data.arg;if(e in qe&&"function"==typeof qe[e])try{const t=qe[e](i);postMessage({id:a,method:e,success:!0,response:t})}catch(t){postMessage({id:a,method:e,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});`;
class eI extends Error {
  constructor() {
super('Event buffer exceeded maximum size of 20000000.');
  }
}
class eR {
  __init() {
this._totalSize = 0;
  }
  constructor() {
eR.prototype.__init.call(this), this.events = [];
  }
  get hasEvents() {
return this.events.length > 0;
  }
  get type() {
return 'sync';
  }
  destroy() {
this.events = [];
  }
  async addEvent(t) {
let e = JSON.stringify(t).length;
if (this._totalSize += e, this._totalSize > 20000000)
  throw new eI();
this.events.push(t);
  }
  finish() {
return new Promise(t => {
  let e = this.events;
  this.clear(), t(JSON.stringify(e));
});
  }
  clear() {
this.events = [], this._totalSize = 0;
  }
  getEarliestTimestamp() {
let t = this.events.map(t => t.timestamp).sort()[0];
return t ? t8(t) : null;
  }
}
class eT {
  constructor(t) {
this._worker = t, this._id = 0;
  }
  ensureReady() {
return this._ensureReadyPromise ? this._ensureReadyPromise : (this._ensureReadyPromise = new Promise((t, e) => {
  this._worker.addEventListener('message', ({
    data: r
  }) => {
    r.success ? t() : e();
  }, {
    once: !0
  }), this._worker.addEventListener('error', t => {
    e(t);
  }, {
    once: !0
  });
}), this._ensureReadyPromise);
  }
  destroy() {
('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.log('[Replay] Destroying compression worker'), this._worker.terminate();
  }
  postMessage(t, e) {
let r = this._getAndIncrementId();
return new Promise((n, _) => {
  let a = ({
    data: e
  }) => {
    if (e.method === t && e.id === r) {
      if (this._worker.removeEventListener('message', a), !e.success) {
        ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.error('[Replay]', e.response), _(Error('Error in compression worker'));
        return;
      }
      n(e.response);
    }
  };
  this._worker.addEventListener('message', a), this._worker.postMessage({
    id: r,
    method: t,
    arg: e
  });
});
  }
  _getAndIncrementId() {
return this._id++;
  }
}
class eu {
  __init() {
this._totalSize = 0;
  }
  constructor(t) {
eu.prototype.__init.call(this), this._worker = new eT(t), this._earliestTimestamp = null;
  }
  get hasEvents() {
return !!this._earliestTimestamp;
  }
  get type() {
return 'worker';
  }
  ensureReady() {
return this._worker.ensureReady();
  }
  destroy() {
this._worker.destroy();
  }
  addEvent(t) {
let e = t8(t.timestamp);
(!this._earliestTimestamp || e < this._earliestTimestamp) && (this._earliestTimestamp = e);
let r = JSON.stringify(t);
return (this._totalSize += r.length, this._totalSize > 20000000) ? Promise.reject(new eI()) : this._sendEventToWorker(r);
  }
  finish() {
return this._finishRequest();
  }
  clear() {
this._earliestTimestamp = null, this._totalSize = 0, this._worker.postMessage('clear');
  }
  getEarliestTimestamp() {
return this._earliestTimestamp;
  }
  _sendEventToWorker(t) {
return this._worker.postMessage('addEvent', t);
  }
  async _finishRequest() {
let t = await this._worker.postMessage('finish');
return this._earliestTimestamp = null, this._totalSize = 0, t;
  }
}
class el {
  constructor(t) {
this._fallback = new eR(), this._compression = new eu(t), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded();
  }
  get type() {
return this._used.type;
  }
  get hasEvents() {
return this._used.hasEvents;
  }
  destroy() {
this._fallback.destroy(), this._compression.destroy();
  }
  clear() {
return this._used.clear();
  }
  getEarliestTimestamp() {
return this._used.getEarliestTimestamp();
  }
  addEvent(t) {
return this._used.addEvent(t);
  }
  async finish() {
return await this.ensureWorkerIsLoaded(), this._used.finish();
  }
  ensureWorkerIsLoaded() {
return this._ensureWorkerIsLoadedPromise;
  }
  async _ensureWorkerIsLoaded() {
try {
  await this._compression.ensureReady();
} catch (t) {
  ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.log('[Replay] Failed to load the compression worker, falling back to simple buffer');
  return;
}
await this._switchToCompressionWorker();
  }
  async _switchToCompressionWorker() {
let {
  events: t
} = this._fallback, e = [];
for (let r of t)
  e.push(this._compression.addEvent(r));
this._used = this._compression;
try {
  await Promise.all(e);
} catch (t) {
  ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.warn('[Replay] Failed to add events when switching buffers.', t);
}
  }
}

function eA() {
  try {
return 'sessionStorage' in K && !!K.sessionStorage;
  } catch (t) {
return !1;
  }
}

function eN(t, e, r = +new Date()) {
  return null === t || void 0 === e || !!(e < 0) || 0 !== e && t + e <= r;
}

function ed(t, e, r = +new Date()) {
  return eN(t.started, e.maxSessionLife, r) || eN(t.lastActivity, e.sessionIdleExpire, r);
}

function eO(t) {
  return void 0 !== t && Math.random() < t;
}

function eS(t) {
  if (!!eA())
try {
  K.sessionStorage.setItem(k, JSON.stringify(t));
} catch (t) {}
}

function ep(t) {
  let e = Date.now(),
r = t.id || (0, y.DM)(),
n = t.started || e,
_ = t.lastActivity || e,
a = t.segmentId || 0;
  return {
id: r,
started: n,
lastActivity: _,
segmentId: a,
sampled: t.sampled,
shouldRefresh: !0
  };
}

function eD({
  timeouts: t,
  currentSession: e,
  stickySession: r,
  sessionSampleRate: n,
  allowBuffering: _
}) {
  let a = e || r && function() {
if (!eA())
  return null;
try {
  let t = K.sessionStorage.getItem(k);
  if (!t)
    return null;
  let e = JSON.parse(t);
  return ep(e);
} catch (t) {
  return null;
}
  }();
  if (a) {
if (!ed(a, t) || _ && a.shouldRefresh)
  return {
    type: 'saved',
    session: a
  };
if (!a.shouldRefresh)
  return {
    type: 'new',
    session: ep({
      sampled: !1
    })
  };
else
  ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.log('[Replay] Session has expired');
  }
  return {
type: 'new',
session: function({
  sessionSampleRate: t,
  allowBuffering: e,
  stickySession: r = !1
}) {
  var n, _;
  let a = ep({
    sampled: (n = t, _ = e, eO(n) ? 'session' : !!_ && 'buffer')
  });
  return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.log(`[Replay] Creating new session: ${ a.id }`), r && eS(a), a;
}({
  stickySession: r,
  sessionSampleRate: n,
  allowBuffering: _
})
  };
}
async function ef(t, e, r) {
  if (!t.eventBuffer || t.isPaused() || t8(e.timestamp) + t.timeouts.sessionIdlePause < Date.now())
return null;
  try {
r && t.eventBuffer.clear();
let n = t.getOptions(),
  _ = function(t, e) {
    try {
      if ('function' == typeof e && t.type === N.Custom)
        return e(t);
    } catch (t) {
      return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.error('[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...', t), null;
    }
    return t;
  }(e, n.beforeAddRecordingEvent);
if (!_)
  return;
return await t.eventBuffer.addEvent(_);
  } catch (n) {
let e = n && n instanceof eI ? 'addEventSizeExceeded' : 'addEvent';
('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.error(n), await t.stop(e);
let r = (0, L.Gd)().getClient();
r && r.recordDroppedEvent('internal_sdk_error', 'replay');
  }
}

function eL(t) {
  return !t.type;
}

function eh(t) {
  return 'transaction' === t.type;
}

function eC(t) {
  let e = function() {
let t = (0, L.Gd)().getClient();
if (!t)
  return !1;
let e = t.getTransport();
return !!e && (e.send.__sentry__baseTransport__ || !1);
  }();
  return (r, n) => {
if (r.type && !eh(r))
  return;
let _ = n && n.statusCode;
if (e && (!_ || _ < 200 || _ >= 300))
  return;
if (eh(r) && r.contexts && r.contexts.trace && r.contexts.trace.trace_id) {
  t.getContext().traceIds.add(r.contexts.trace.trace_id);
  return;
}
if (!r.type)
  r.event_id && t.getContext().errorIds.add(r.event_id), 'buffer' === t.recordingMode && r.tags && r.tags.replayId && setTimeout(() => {
    t.sendBufferedReplayOrFlush();
  });
  };
}

function eg(t, e) {
  return e.map(({
type: e,
start: r,
end: n,
name: _,
data: a
  }) => {
let i = t.throttledAddEvent({
  type: N.Custom,
  timestamp: r,
  data: {
    tag: 'performanceSpan',
    payload: {
      op: e,
      description: _,
      startTimestamp: r,
      endTimestamp: n,
      data: a
    }
  }
});
return 'string' == typeof i ? Promise.resolve(null) : i;
  });
}

function eP(t, e) {
  var r, n;
  if (!t.isEnabled() || null === e)
return;
  if (r = t, n = e.name, !((!('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) || !r.getOptions()._experiments.traceInternals) && function(t) {
  let e = (0, L.Gd)().getClient(),
    r = e && e.getDsn();
  return !!r && t.includes(r.host);
}(n)))
t.addUpdate(() => (eg(t, [e]), !0));
}
let eM = [
  'true',
  'false',
  'null'
];

function eU(t) {
  let e = function(t) {
let e = [];
for (let r = 0; r < t.length; r++)
  (function(t, e, r) {
    let n = t[t.length - 1],
      _ = e[r];
    if (!/\s/.test(_)) {
      if ('"' === _ && ! function t(e, r) {
          return '\\' === e[r - 1] && !t(e, r - 1);
        }(e, r)) {
        (function(t, e) {
          if (14 === e) {
            t.pop(), t.push(15);
            return;
          }
          if (22 === e) {
            t.pop(), t.push(23);
            return;
          }
          if (13 === e) {
            t.push(14);
            return;
          }
          if (21 === e) {
            t.push(22);
            return;
          }
          if (10 === e) {
            t.push(12);
            return;
          }
          if (12 === e) {
            t.pop(), t.push(11);
          }
        }(t, n));
        return;
      }
      switch (_) {
        case '{':
          (function(t, e) {
            if (!e || 13 === e) {
              t.push(10);
              return;
            }
            if (21 === e && t.push(10), 20 === e) {
              t.push(10);
            }
          }(t, n));
          break;
        case '[':
          (function(t, e) {
            if (!e || 13 === e) {
              t.push(20), t.push(21);
              return;
            }
            if (21 === e && (t.push(20), t.push(21)), 20 === e) {
              t.push(20), t.push(21);
            }
          }(t, n));
          break;
        case ':':
          (function(t, e) {
            11 === e && (t.pop(), t.push(13));
          }(t, n));
          break;
        case ',':
          (function(t, e) {
            if (13 === e) {
              t.pop();
              return;
            }
            if (15 === e) {
              t.pop(), t.pop();
              return;
            }
            if (21 !== e) {
              if (23 === e) {
                t.pop();
              }
            }
          }(t, n));
          break;
        case '}':
          (function(t, e) {
            10 === e && t.pop(), 13 === e && (t.pop(), t.pop()), 15 === e && (t.pop(), t.pop(), t.pop()), 13 === t[t.length - 1] && t.push(15), 21 === t[t.length - 1] && t.push(23);
          }(t, n));
          break;
        case ']':
          (function(t, e) {
            20 === e && t.pop(), 21 === e && (t.pop(), t.pop()), 23 === e && (t.pop(), t.pop(), t.pop()), 13 === t[t.length - 1] && t.push(15), 21 === t[t.length - 1] && t.push(23);
          }(t, n));
      }
    }
  }(e, t, r));
return e;
  }(t);
  return function(t, e) {
if (!e.length)
  return t;
let r = t,
  n = e.length - 1;
r = function(t, e) {
  switch (e) {
    case 10:
      return `${ t }"~~":"~~"`;
    case 11:
      return `${ t }:"~~"`;
    case 12:
      return `${ t }~~":"~~"`;
    case 13:
      return function(t) {
        let e = t.lastIndexOf(':'),
          r = t.slice(e + 1);
        return eM.includes(r.trim()) ? `${ t },"~~":"~~"` : `${ t.slice(0, e + 1) }"~~"`;
      }(t);
    case 14:
    case 22:
      return `${ t }~~"`;
    case 15:
      return `${ t },"~~":"~~"`;
    case 20:
      return `${ t }"~~"`;
    case 21:
      return function(t) {
        let e = function(t) {
          for (let e = t.length - 1; e >= 0; e--) {
            let r = t[e];
            if (',' === r || '[' === r)
              return e;
          }
          return -1;
        }(t);
        if (e > -1) {
          let r = t.slice(e + 1);
          return eM.includes(r.trim()) ? `${ t },"~~"` : `${ t.slice(0, e + 1) }"~~"`;
        }
        return t;
      }(t);
    case 23:
      return `${ t },"~~"`;
  }
  return t;
}(r, e[n]);
for (let t = n; t >= 0; t--)
  switch (e[t]) {
    case 10:
      r = `${ r }}`;
      break;
    case 20:
      r = `${ r }]`;
  }
return r;
  }(t, e);
}

function eG(t, e) {
  if (!!t)
try {
  if ('string' == typeof t)
    return e.encode(t).length;
  if (t instanceof URLSearchParams)
    return e.encode(t.toString()).length;
  if (t instanceof FormData) {
    let r = eH(t);
    return e.encode(r).length;
  }
  if (t instanceof Blob)
    return t.size;
  if (t instanceof ArrayBuffer)
    return t.byteLength;
} catch (t) {}
}

function em(t) {
  if (!t)
return;
  let e = parseInt(t, 10);
  return isNaN(e) ? void 0 : e;
}

function ey(t) {
  return 'string' == typeof t ? t : t instanceof URLSearchParams ? t.toString() : t instanceof FormData ? eH(t) : void 0;
}

function eb(t, e) {
  if (!e)
return null;
  let {
startTimestamp: r,
endTimestamp: n,
url: _,
method: a,
statusCode: i,
request: o,
response: E
  } = e;
  return {
type: t,
start: r / 1000,
end: n / 1000,
name: _,
data: (0, U.Jr)({
  method: a,
  statusCode: i,
  request: o,
  response: E
})
  };
}

function eB(t) {
  return {
headers: {},
size: t,
_meta: {
  warnings: ['URL_SKIPPED']
}
  };
}

function ev(t, e, r) {
  if (!e && 0 === Object.keys(t).length)
return;
  if (!e)
return {
  headers: t
};
  if (!r)
return {
  headers: t,
  size: e
};
  let n = {
  headers: t,
  size: e
},
{
  body: _,
  warnings: a
} = function(t) {
  if (!t || 'string' != typeof t)
    return {
      body: t,
      warnings: []
    };
  let e = t.length > 150000;
  if (function(t) {
      let e = t[0],
        r = t[t.length - 1];
      return '[' === e && ']' === r || '{' === e && '}' === r;
    }(t))
    try {
      let r = e ? eU(t.slice(0, 150000)) : t;
      return {
        body: JSON.parse(r),
        warnings: e ? ['JSON_TRUNCATED'] : []
      };
    } catch (r) {
      return {
        body: e ? `${ t.slice(0, 150000) }…` : t,
        warnings: e ? [
          'INVALID_JSON',
          'TEXT_TRUNCATED'
        ] : ['INVALID_JSON']
      };
    }
  return {
    body: e ? `${ t.slice(0, 150000) }…` : t,
    warnings: e ? ['TEXT_TRUNCATED'] : []
  };
}(r);
  return n.body = _, a.length > 0 && (n._meta = {
warnings: a
  }), n;
}

function ew(t, e) {
  return Object.keys(t).reduce((r, n) => {
let _ = n.toLowerCase();
return e.includes(_) && t[n] && (r[_] = t[n]), r;
  }, {});
}

function eH(t) {
  return new URLSearchParams(t).toString();
}

function eY(t, e) {
  let r = function(t, e = K.document.baseURI) {
if (t.startsWith('http://') || t.startsWith('https://') || t.startsWith(K.location.origin))
  return t;
let r = new URL(t, e);
if (r.origin !== new URL(e).origin)
  return t;
let n = r.href;
return !t.endsWith('/') && n.endsWith('/') ? n.slice(0, -1) : n;
  }(t);
  return (0, B.U0)(r, e);
}
async function eK(t, e, r) {
  try {
let n = await ek(t, e, r),
  _ = eb('resource.fetch', n);
eP(r.replay, _);
  } catch (t) {
('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.error('[Replay] Failed to capture fetch breadcrumb', t);
  }
}
async function ek(t, e, r) {
  let {
startTimestamp: n,
endTimestamp: _
  } = e, {
url: a,
method: i,
status_code: o = 0,
request_body_size: E,
response_body_size: s
  } = t.data, c = eY(a, r.networkDetailAllowUrls) && !eY(a, r.networkDetailDenyUrls), I = c ? function({
networkCaptureBodies: t,
networkRequestHeaders: e
  }, r, n) {
let _ = function(t, e) {
  return 1 === t.length && 'string' != typeof t[0] ? eX(t[0], e) : 2 === t.length ? eX(t[1], e) : {};
}(r, e);
return t ? ev(_, n, ey(eF(r))) : ev(_, n, void 0);
  }(r, e.input, E) : eB(E);
  return {
startTimestamp: n,
endTimestamp: _,
url: a,
method: i,
statusCode: o,
request: I,
response: await eV(c, r, e.response, s)
  };
}
async function eV(t, {
  networkCaptureBodies: e,
  textEncoder: r,
  networkResponseHeaders: n
}, _, a) {
  if (!t && void 0 !== a)
return eB(a);
  let i = eW(_.headers, n);
  if (!e && void 0 !== a)
return ev(i, a, void 0);
  try {
let n = _.clone(),
  o = await ex(n),
  E = o && o.length && void 0 === a ? eG(o, r) : a;
if (!t)
  return eB(E);
if (e)
  return ev(i, E, o);
return ev(i, E, void 0);
  } catch (t) {
return ev(i, a, void 0);
  }
}
async function ex(t) {
  try {
return await t.text();
  } catch (t) {
return;
  }
}

function eF(t = []) {
  if (2 === t.length && 'object' == typeof t[1])
return t[1].body;
}

function eW(t, e) {
  let r = {};
  return e.forEach(e => {
t.get(e) && (r[e] = t.get(e));
  }), r;
}

function eX(t, e) {
  if (!t)
return {};
  let r = t.headers;
  return r ? r instanceof Headers ? eW(r, e) : Array.isArray(r) ? {} : ew(r, e) : {};
}
async function ej(t, e, r) {
  try {
let n = function(t, e, r) {
    let {
      startTimestamp: n,
      endTimestamp: _,
      input: a,
      xhr: i
    } = e, {
      url: o,
      method: E,
      status_code: s = 0,
      request_body_size: c,
      response_body_size: I
    } = t.data;
    if (!o)
      return null;
    if (!eY(o, r.networkDetailAllowUrls) || eY(o, r.networkDetailDenyUrls)) {
      let t = eB(c);
      return {
        startTimestamp: n,
        endTimestamp: _,
        url: o,
        method: E,
        statusCode: s,
        request: t,
        response: eB(I)
      };
    }
    let R = i[b.xU],
      T = R ? ew(R.request_headers, r.networkRequestHeaders) : {},
      u = ew(function(t) {
        let e = t.getAllResponseHeaders();
        return e ? e.split('\r\n').reduce((t, e) => {
          let [r, n] = e.split(': ');
          return t[r.toLowerCase()] = n, t;
        }, {}) : {};
      }(i), r.networkResponseHeaders),
      l = ev(T, c, r.networkCaptureBodies ? ey(a) : void 0);
    return {
      startTimestamp: n,
      endTimestamp: _,
      url: o,
      method: E,
      statusCode: s,
      request: l,
      response: ev(u, I, r.networkCaptureBodies ? e.xhr.responseText : void 0)
    };
  }(t, e, r),
  _ = eb('resource.xhr', n);
eP(r.replay, _);
  } catch (t) {
('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.error('[Replay] Failed to capture fetch breadcrumb', t);
  }
}
let ez = null,
  eq = t => e => {
if (!t.isEnabled())
  return;
let r = function(t) {
  let e = t.getLastBreadcrumb && t.getLastBreadcrumb();
  if (ez === e || !e)
    return null;
  return (ez = e, !e.category || [
    'fetch',
    'xhr',
    'sentry.event',
    'sentry.transaction'
  ].includes(e.category) || e.category.startsWith('ui.')) ? null : 'console' === e.category ? function(t) {
    let e = t.data && t.data.arguments;
    if (!Array.isArray(e) || 0 === e.length)
      return e_(t);
    let r = !1,
      n = e.map(t => {
        if (!t)
          return t;
        if ('string' == typeof t)
          return t.length > 5000 ? (r = !0, `${ t.slice(0, 5000) }…`) : t;
        if ('object' == typeof t)
          try {
            let e = (0, M.Fv)(t, 7),
              n = JSON.stringify(e);
            if (n.length > 5000) {
              let t = eU(n.slice(0, 5000)),
                e = JSON.parse(t);
              return r = !0, e;
            }
            return e;
          } catch (t) {}
        return t;
      });
    return e_({
      ...t,
      data: {
        ...t.data,
        arguments: n,
        ...r ? {
          _meta: {
            warnings: ['CONSOLE_ARG_TRUNCATED']
          }
        } : {}
      }
    });
  }(e) : e_(e);
}(e);
if (!!r)
  t7(t, r);
  };

function e$(t) {
  return !!(t && t.on);
}
async function eZ(t) {
  try {
return Promise.all(eg(t, [function(t) {
  let {
    jsHeapSizeLimit: e,
    totalJSHeapSize: r,
    usedJSHeapSize: n
  } = t, _ = Date.now() / 1000;
  return {
    type: 'memory',
    name: 'memory',
    start: _,
    end: _,
    data: {
      memory: {
        jsHeapSizeLimit: e,
        totalJSHeapSize: r,
        usedJSHeapSize: n
      }
    }
  };
}(K.performance.memory)]));
  } catch (t) {
return [];
  }
}
let eJ = {
  resource: function(t) {
let {
  entryType: e,
  initiatorType: r,
  name: n,
  responseEnd: _,
  startTime: a,
  decodedBodySize: i,
  encodedBodySize: o,
  responseStatus: E,
  transferSize: s
} = t;
return [
  'fetch',
  'xmlhttprequest'
].includes(r) ? null : {
  type: `${ e }.${ r }`,
  start: e0(a),
  end: e0(_),
  name: n,
  data: {
    size: s,
    statusCode: E,
    decodedBodySize: i,
    encodedBodySize: o
  }
};
  },
  paint: function(t) {
let {
  duration: e,
  entryType: r,
  name: n,
  startTime: _
} = t, a = e0(_);
return {
  type: r,
  name: n,
  start: a,
  end: a + e,
  data: void 0
};
  },
  navigation: function(t) {
let {
  entryType: e,
  name: r,
  decodedBodySize: n,
  duration: _,
  domComplete: a,
  encodedBodySize: i,
  domContentLoadedEventStart: o,
  domContentLoadedEventEnd: E,
  domInteractive: s,
  loadEventStart: c,
  loadEventEnd: I,
  redirectCount: R,
  startTime: T,
  transferSize: u,
  type: l
} = t;
return 0 === _ ? null : {
  type: `${ e }.${ l }`,
  start: e0(T),
  end: e0(a),
  name: r,
  data: {
    size: u,
    decodedBodySize: n,
    encodedBodySize: i,
    duration: _,
    domInteractive: s,
    domContentLoadedEventStart: o,
    domContentLoadedEventEnd: E,
    loadEventStart: c,
    loadEventEnd: I,
    domComplete: a,
    redirectCount: R
  }
};
  },
  'largest-contentful-paint': function(t) {
let {
  entryType: e,
  startTime: r,
  size: n
} = t, _ = 0;
if (K.performance) {
  let t = K.performance.getEntriesByType('navigation')[0];
  _ = t && t.activationStart || 0;
}
let a = Math.max(r - _, 0),
  i = e0(_) + a / 1000;
return {
  type: e,
  name: e,
  start: i,
  end: i,
  data: {
    value: a,
    size: n,
    nodeId: t4.mirror.getId(t.element)
  }
};
  }
};

function eQ(t) {
  return void 0 === eJ[t.entryType] ? null : eJ[t.entryType](t);
}

function e0(t) {
  return ((v.Z1 || K.performance.timeOrigin) + t) / 1000;
}
async function e1({
  client: t,
  scope: e,
  replayId: r,
  event: n
}) {
  let _ = 'object' != typeof t._integrations || null === t._integrations || Array.isArray(t._integrations) ? void 0 : Object.keys(t._integrations),
a = await (0, C.R)(t.getOptions(), n, {
  event_id: r,
  integrations: _
}, e);
  if (!a)
return null;
  a.platform = a.platform || 'javascript';
  let i = t.getSdkMetadata && t.getSdkMetadata(),
{
  name: o,
  version: E
} = i && i.sdk || {};
  return a.sdk = {
...a.sdk,
name: o || 'sentry.javascript.unknown',
version: E || '0.0.0'
  }, a;
}
async function e2({
  recordingData: t,
  replayId: e,
  segmentId: r,
  eventContext: n,
  timestamp: _,
  session: a
}) {
  var i, o, E, s;
  let c;
  let I = function({
  recordingData: t,
  headers: e
}) {
  let r;
  let n = `${ JSON.stringify(e) }
`;
  if ('string' == typeof t)
    r = `${ n }${ t }`;
  else {
    let e = new TextEncoder().encode(n);
    (r = new Uint8Array(e.length + t.length)).set(e), r.set(t, e.length);
  }
  return r;
}({
  recordingData: t,
  headers: {
    segment_id: r
  }
}),
{
  urls: R,
  errorIds: T,
  traceIds: u,
  initialTimestamp: l
} = n,
A = (0, L.Gd)(),
N = A.getClient(),
d = A.getScope(),
O = N && N.getTransport(),
S = N && N.getDsn();
  if (!N || !O || !S || !a.sampled)
return;
  let p = {
  type: 'replay_event',
  replay_start_timestamp: l / 1000,
  timestamp: _ / 1000,
  error_ids: T,
  trace_ids: u,
  urls: R,
  replay_id: e,
  segment_id: r,
  replay_type: a.sampled
},
D = await e1({
  scope: d,
  client: N,
  replayId: e,
  event: p
});
  if (!D) {
N.recordDroppedEvent('event_processor', 'replay', p), ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.log('An event processor returned `null`, will not send event.');
return;
  }
  delete D.sdkProcessingMetadata;
  let f = (i = D, o = I, E = S, s = N.getOptions().tunnel, (0, w.Jd)((0, w.Cd)(i, (0, w.HY)(i), s, E), [
[{
    type: 'replay_event'
  },
  i
],
[{
    type: 'replay_recording',
    length: 'string' == typeof o ? new TextEncoder().encode(o).length : o.length
  },
  o
]
  ]));
  try {
c = await O.send(f);
  } catch (e) {
let t = Error(V);
try {
  t.cause = e;
} catch (t) {}
throw t;
  }
  if (!c)
return c;
  if ('number' == typeof c.statusCode && (c.statusCode < 200 || c.statusCode >= 300))
throw new e3(c.statusCode);
  return c;
}
class e3 extends Error {
  constructor(t) {
super(`Transport returned status code ${ t }`);
  }
}
async function e6(t, e = {
  count: 0,
  interval: 5000
}) {
  let {
recordingData: r,
options: n
  } = t;
  if (!!r.length)
try {
  return await e2(t), !0;
} catch (r) {
  if (r instanceof e3)
    throw r;
  if ((0, g.v)('Replays', {
      _retryCount: e.count
    }), ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n._experiments && n._experiments.captureExceptions && (0, g.Tb)(r), e.count >= 3) {
    let t = Error(`${ V } - max retries exceeded`);
    try {
      t.cause = r;
    } catch (t) {}
    throw t;
  }
  return e.interval *= ++e.count, new Promise((r, n) => {
    setTimeout(async () => {
      try {
        await e6(t, e), r(!0);
      } catch (t) {
        n(t);
      }
    }, e.interval);
  });
}
}
let e5 = '__THROTTLED';
class e4 {
  __init() {
this.eventBuffer = null;
  }
  __init2() {
this.performanceEvents = [];
  }
  __init3() {
this.recordingMode = 'session';
  }
  __init4() {
this.timeouts = {
  sessionIdlePause: 300000,
  sessionIdleExpire: 900000,
  maxSessionLife: 3600000
};
  }
  __init5() {
this._performanceObserver = null;
  }
  __init6() {
this._flushLock = null;
  }
  __init7() {
this._lastActivity = Date.now();
  }
  __init8() {
this._isEnabled = !1;
  }
  __init9() {
this._isPaused = !1;
  }
  __init10() {
this._hasInitializedCoreListeners = !1;
  }
  __init11() {
this._stopRecording = null;
  }
  __init12() {
this._context = {
  errorIds: new Set(),
  traceIds: new Set(),
  urls: [],
  initialTimestamp: Date.now(),
  initialUrl: ''
};
  }
  constructor({
options: t,
recordingOptions: e
  }) {
e4.prototype.__init.call(this), e4.prototype.__init2.call(this), e4.prototype.__init3.call(this), e4.prototype.__init4.call(this), e4.prototype.__init5.call(this), e4.prototype.__init6.call(this), e4.prototype.__init7.call(this), e4.prototype.__init8.call(this), e4.prototype.__init9.call(this), e4.prototype.__init10.call(this), e4.prototype.__init11.call(this), e4.prototype.__init12.call(this), e4.prototype.__init13.call(this), e4.prototype.__init14.call(this), e4.prototype.__init15.call(this), e4.prototype.__init16.call(this), e4.prototype.__init17.call(this), e4.prototype.__init18.call(this), this._recordingOptions = e, this._options = t, this._debouncedFlush = function(t, e, r) {
  let n, _, a;
  let i = r && r.maxWait ? Math.max(r.maxWait, e) : 0;

  function o() {
    return E(), n = t();
  }

  function E() {
    void 0 !== _ && clearTimeout(_), void 0 !== a && clearTimeout(a), _ = a = void 0;
  }

  function s() {
    return _ && clearTimeout(_), _ = setTimeout(o, e), i && void 0 === a && (a = setTimeout(o, i)), n;
  }
  return s.cancel = E, s.flush = function() {
    return void 0 !== _ || void 0 !== a ? o() : n;
  }, s;
}(() => this._flush(), this._options.flushMinDelay, {
  maxWait: this._options.flushMaxDelay
}), this._throttledAddEvent = function(t, e, r) {
  let n = new Map(),
    _ = t => {
      let e = t - 5;
      n.forEach((t, r) => {
        r < e && n.delete(r);
      });
    },
    a = () => [...n.values()].reduce((t, e) => t + e, 0),
    i = !1;
  return (...e) => {
    let r = Math.floor(Date.now() / 1000);
    if (_(r), a() >= 300) {
      let t = i;
      return i = !0, t ? '__SKIPPED' : e5;
    }
    i = !1;
    let o = n.get(r) || 0;
    return n.set(r, o + 1), t(...e);
  };
}((t, e) => ef(this, t, e), 300, 5);
let {
  slowClickTimeout: r,
  slowClickIgnoreSelectors: n
} = this.getOptions(), _ = r ? {
  threshold: Math.min(3000, r),
  timeout: r,
  scrollTimeout: 300,
  ignoreSelector: n ? n.join(',') : ''
} : void 0;
_ && (this.clickDetector = new ee(this, _));
  }
  getContext() {
return this._context;
  }
  isEnabled() {
return this._isEnabled;
  }
  isPaused() {
return this._isPaused;
  }
  getOptions() {
return this._options;
  }
  initializeSampling() {
let {
  errorSampleRate: t,
  sessionSampleRate: e
} = this._options;
if ((!(t <= 0) || !(e <= 0)) && !!this._loadAndCheckSession()) {
  if (!this.session) {
    this._handleException(Error('Unable to initialize and create session'));
    return;
  }
  this.session.sampled && 'session' !== this.session.sampled && (this.recordingMode = 'buffer'), this._initializeRecording();
}
  }
  start() {
if (this._isEnabled && 'session' === this.recordingMode)
  throw Error('Replay recording is already in progress');
if (this._isEnabled && 'buffer' === this.recordingMode)
  throw Error('Replay buffering is in progress, call `flush()` to save the replay');
let t = this.session && this.session.id,
  {
    session: e
  } = eD({
    timeouts: this.timeouts,
    stickySession: !!this._options.stickySession,
    currentSession: this.session,
    sessionSampleRate: 1,
    allowBuffering: !1
  });
e.previousSessionId = t, this.session = e, this._initializeRecording();
  }
  startBuffering() {
if (this._isEnabled)
  throw Error('Replay recording is already in progress');
let t = this.session && this.session.id,
  {
    session: e
  } = eD({
    timeouts: this.timeouts,
    stickySession: !!this._options.stickySession,
    currentSession: this.session,
    sessionSampleRate: 0,
    allowBuffering: !0
  });
e.previousSessionId = t, this.session = e, this.recordingMode = 'buffer', this._initializeRecording();
  }
  startRecording() {
try {
  var t;
  let e;
  this._stopRecording = t4({
    ...this._recordingOptions,
    ...'buffer' === this.recordingMode && {
      checkoutEveryNms: 60000
    },
    emit: (t = this, e = !1, (r, n) => {
      if (!t.checkAndHandleExpiredSession()) {
        ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.warn('[Replay] Received replay event after session expired.');
        return;
      }
      let _ = n || !e;
      e = !0, t.addUpdate(() => {
        if ('buffer' === t.recordingMode && _ && t.setInitialState(), ef(t, r, _), !_)
          return !1;
        if (function(t, e) {
            e && t.session && 0 === t.session.segmentId ? ef(t, function(t) {
              let e = t.getOptions();
              return {
                type: N.Custom,
                timestamp: Date.now(),
                data: {
                  tag: 'options',
                  payload: {
                    sessionSampleRate: e.sessionSampleRate,
                    errorSampleRate: e.errorSampleRate,
                    useCompressionOption: e.useCompression,
                    blockAllMedia: e.blockAllMedia,
                    maskAllText: e.maskAllText,
                    maskAllInputs: e.maskAllInputs,
                    useCompression: !!t.eventBuffer && 'worker' === t.eventBuffer.type,
                    networkDetailHasUrls: e.networkDetailAllowUrls.length > 0,
                    networkCaptureBodies: e.networkCaptureBodies,
                    networkRequestHasHeaders: e.networkRequestHeaders.length > 0,
                    networkResponseHasHeaders: e.networkResponseHeaders.length > 0
                  }
                }
              };
            }(t), !1) : Promise.resolve(null);
          }(t, _), t.session && t.session.previousSessionId)
          return !0;
        if ('buffer' === t.recordingMode && t.session && t.eventBuffer) {
          let e = t.eventBuffer.getEarliestTimestamp();
          if (e) {
            let r = t.getOptions()._experiments.traceInternals ? console.info : m.kg.info;
            ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r(`[Replay] Updating session start time to earliest event in buffer at ${ e }`), t.session.started = e, t.getOptions().stickySession && eS(t.session);
          }
        }
        return 'session' === t.recordingMode && t.flush(), !0;
      });
    }),
    onMutation: this._onMutationHandler
  });
} catch (t) {
  this._handleException(t);
}
  }
  stopRecording() {
try {
  return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0;
} catch (t) {
  return this._handleException(t), !1;
}
  }
  async stop(t) {
if (!!this._isEnabled)
  try {
    var e;
    if ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
      let e = `[Replay] Stopping Replay${ t ? ` triggered by ${ t }` : '' }`;
      (this.getOptions()._experiments.traceInternals ? console.warn : m.kg.log)(e);
    }
    this._isEnabled = !1, this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), 'session' === this.recordingMode && await this._flush({
        force: !0
      }), this.eventBuffer && this.eventBuffer.destroy(), this.eventBuffer = null, e = this,
      function() {
        if (!!eA())
          try {
            K.sessionStorage.removeItem(k);
          } catch (t) {}
      }(), e.session = void 0;
  } catch (t) {
    this._handleException(t);
  }
  }
  pause() {
this._isPaused = !0, this.stopRecording();
  }
  resume() {
if (!!this._loadAndCheckSession())
  this._isPaused = !1, this.startRecording();
  }
  async sendBufferedReplayOrFlush({
continueRecording: t = !0
  } = {}) {
if ('session' === this.recordingMode)
  return this.flushImmediate();
let e = Date.now(),
  r = this.getOptions()._experiments.traceInternals ? console.info : m.kg.info;
('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r(`[Replay] Converting buffer to session, starting at ${ e }`), await this.flushImmediate();
let n = this.stopRecording();
if (!!t && !!n)
  this.recordingMode = 'session', this.session && (this.session.shouldRefresh = !1, this._updateUserActivity(e), this._updateSessionActivity(e), this.session.started = e, this._maybeSaveSession()), this.startRecording();
  }
  addUpdate(t) {
let e = t();
if ('buffer' !== this.recordingMode && !0 !== e)
  this._debouncedFlush();
  }
  triggerUserActivity() {
if (this._updateUserActivity(), !this._stopRecording) {
  if (!this._loadAndCheckSession())
    return;
  this.resume();
  return;
}
this.checkAndHandleExpiredSession(), this._updateSessionActivity();
  }
  updateUserActivity() {
this._updateUserActivity(), this._updateSessionActivity();
  }
  conditionalFlush() {
return 'buffer' === this.recordingMode ? Promise.resolve() : this.flushImmediate();
  }
  flush() {
return this._debouncedFlush();
  }
  flushImmediate() {
return this._debouncedFlush(), this._debouncedFlush.flush();
  }
  cancelFlush() {
this._debouncedFlush.cancel();
  }
  getSessionId() {
return this.session && this.session.id;
  }
  checkAndHandleExpiredSession() {
let t = this.getSessionId();
if (this._lastActivity && eN(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && 'session' === this.session.sampled) {
  this.pause();
  return;
}
return this._loadAndCheckSession() ? t === this.getSessionId() || (this._triggerFullSnapshot(), !1) : void 0;
  }
  setInitialState() {
let t = `${ K.location.pathname }${ K.location.hash }${ K.location.search }`,
  e = `${ K.location.origin }${ t }`;
this.performanceEvents = [], this._clearContext(), this._context.initialUrl = e, this._context.initialTimestamp = Date.now(), this._context.urls.push(e);
  }
  throttledAddEvent(t, e) {
let r = this._throttledAddEvent(t, e);
if (r === e5) {
  let t = e_({
    category: 'replay.throttled'
  });
  this.addUpdate(() => {
    ef(this, {
      type: N.Custom,
      timestamp: t.timestamp || 0,
      data: {
        tag: 'breadcrumb',
        payload: t,
        metric: !0
      }
    });
  });
}
return r;
  }
  getCurrentRoute() {
let t = this.lastTransaction || (0, L.Gd)().getScope().getTransaction();
if (!!t && !![
    'route',
    'custom'
  ].includes(t.metadata.source))
  return t.name;
  }
  _initializeRecording() {
this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = function({
  useCompression: t
}) {
  if (t && window.Worker)
    try {
      let t = function() {
        let t = new Blob([ec]);
        return URL.createObjectURL(t);
      }();
      ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.log('[Replay] Using compression worker');
      let e = new Worker(t);
      return new el(e);
    } catch (t) {
      ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.log('[Replay] Failed to create compression worker');
    }
  return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.log('[Replay] Using simple buffer'), new eR();
}({
  useCompression: this._options.useCompression
}), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this.startRecording();
  }
  _handleException(t) {
('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.error('[Replay]', t), ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this._options._experiments && this._options._experiments.captureExceptions && (0, g.Tb)(t);
  }
  _loadAndCheckSession() {
let {
  type: t,
  session: e
} = eD({
  timeouts: this.timeouts,
  stickySession: !!this._options.stickySession,
  currentSession: this.session,
  sessionSampleRate: this._options.sessionSampleRate,
  allowBuffering: this._options.errorSampleRate > 0 || 'buffer' === this.recordingMode
});
'new' === t && this.setInitialState();
let r = this.getSessionId();
return e.id !== r && (e.previousSessionId = r), this.session = e, !!this.session.sampled || (this.stop('session unsampled'), !1);
  }
  _addListeners() {
try {
  K.document.addEventListener('visibilitychange', this._handleVisibilityChange), K.addEventListener('blur', this._handleWindowBlur), K.addEventListener('focus', this._handleWindowFocus), K.addEventListener('keydown', this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), !this._hasInitializedCoreListeners && (! function(t) {
    var e;
    let r = (0, L.Gd)().getScope(),
      n = (0, L.Gd)().getClient();
    r && r.addScopeListener(eq(t)), (0, b.oq)('dom', ei(t)), (0, b.oq)('history', (e = t, t => {
        if (!e.isEnabled())
          return;
        let r = function(t) {
          let {
            from: e,
            to: r
          } = t, n = Date.now() / 1000;
          return {
            type: 'navigation.push',
            start: n,
            end: n,
            name: r,
            data: {
              previous: e
            }
          };
        }(t);
        if (null !== r)
          e.getContext().urls.push(r.name), e.triggerUserActivity(), e.addUpdate(() => (eg(e, [r]), !1));
      })), ! function(t) {
        let e = (0, L.Gd)().getClient();
        try {
          let _ = new TextEncoder(),
            {
              networkDetailAllowUrls: a,
              networkDetailDenyUrls: i,
              networkCaptureBodies: o,
              networkRequestHeaders: E,
              networkResponseHeaders: s
            } = t.getOptions(),
            c = {
              replay: t,
              textEncoder: _,
              networkDetailAllowUrls: a,
              networkDetailDenyUrls: i,
              networkCaptureBodies: o,
              networkRequestHeaders: E,
              networkResponseHeaders: s
            };
          if (e && e.on)
            e.on('beforeAddBreadcrumb', (t, e) => function(t, e, r) {
              if (!!e.data)
                try {
                  (function(t) {
                    return 'xhr' === t.category;
                  }(e) && function(t) {
                    return t && t.xhr;
                  }(r) && (! function(t, e, r) {
                    let {
                      xhr: n,
                      input: _
                    } = e, a = eG(_, r.textEncoder), i = n.getResponseHeader('content-length') ? em(n.getResponseHeader('content-length')) : eG(n.response, r.textEncoder);
                    void 0 !== a && (t.data.request_body_size = a), void 0 !== i && (t.data.response_body_size = i);
                  }(e, r, t), ej(e, r, t)), function(t) {
                    return 'fetch' === t.category;
                  }(e) && function(t) {
                    return t && t.response;
                  }(r) && (! function(t, e, r) {
                    let {
                      input: n,
                      response: _
                    } = e, a = eG(eF(n), r.textEncoder), i = _ ? em(_.headers.get('content-length')) : void 0;
                    void 0 !== a && (t.data.request_body_size = a), void 0 !== i && (t.data.response_body_size = i);
                  }(e, r, t), eK(e, r, t)));
                } catch (t) {
                  ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.warn('Error when enriching network breadcrumb');
                }
            }(c, t, e));
          else {
            var r, n;
            (0, b.oq)('fetch', (r = t, t => {
              if (!!r.isEnabled())
                eP(r, function(t) {
                  let {
                    startTimestamp: e,
                    endTimestamp: r,
                    fetchData: n,
                    response: _
                  } = t;
                  if (!r)
                    return null;
                  let {
                    method: a,
                    url: i
                  } = n;
                  return {
                    type: 'resource.fetch',
                    start: e / 1000,
                    end: r / 1000,
                    name: i,
                    data: {
                      method: a,
                      statusCode: _ ? _.status : void 0
                    }
                  };
                }(t));
            })), (0, b.oq)('xhr', (n = t, t => {
              if (!!n.isEnabled())
                eP(n, function(t) {
                  let {
                    startTimestamp: e,
                    endTimestamp: r,
                    xhr: n
                  } = t, _ = n[b.xU];
                  if (!e || !r || !_)
                    return null;
                  let {
                    method: a,
                    url: i,
                    status_code: o
                  } = _;
                  return void 0 === i ? null : {
                    type: 'resource.xhr',
                    name: i,
                    start: e / 1000,
                    end: r / 1000,
                    data: {
                      method: a,
                      statusCode: o
                    }
                  };
                }(t));
            }));
          }
        } catch (t) {}
      }(t), (0, h.c)(function(t, e = !1) {
        let r = e ? eC(t) : void 0;
        return (e, n) => {
          var _, a, i, o;
          if ('replay_event' === e.type)
            return delete e.breadcrumbs, e;
          if (e.type && !eh(e))
            return e;
          if (_ = e, a = n, !_.type && _.exception && _.exception.values && _.exception.values.length && (a.originalException && a.originalException.__rrweb__ || _.exception.values.some(t => !!t.stacktrace && !!t.stacktrace.frames && !!t.stacktrace.frames.length && t.stacktrace.frames.some(t => t.filename && t.filename.includes('/rrweb/src/')))) && !t.getOptions()._experiments.captureExceptions)
            return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.log('[Replay] Ignoring error from rrweb internals', e), null;
          return i = t, o = e, ('buffer' === i.recordingMode && o.message !== V && o.exception && !o.type && eO(i.getOptions().errorSampleRate) || 'session' === t.recordingMode) && (e.tags = {
            ...e.tags,
            replayId: t.getSessionId()
          }), r && r(e, {
            statusCode: 200
          }), e;
        };
      }(t, ! function(t) {
        return !!(t && t.on);
      }(n))),
      function(t) {
        return !!(t && t.on);
      }(n) && (n.on('afterSendEvent', eC(t)), n.on('createDsc', e => {
        let r = t.getSessionId();
        r && t.isEnabled() && 'session' === t.recordingMode && (e.replay_id = r);
      }), n.on('startTransaction', e => {
        t.lastTransaction = e;
      }), n.on('finishTransaction', e => {
        t.lastTransaction = e;
      }));
  }(this), this._hasInitializedCoreListeners = !0);
} catch (t) {
  this._handleException(t);
}
if ('PerformanceObserver' in K)
  this._performanceObserver = function(t) {
    let e = new PerformanceObserver(e => {
      let r = function(t, e) {
        let [r, n, _] = t.reduce((t, e) => ('navigation' === e.entryType ? t[0].push(e) : 'largest-contentful-paint' === e.entryType ? t[1].push(e) : t[2].push(e), t), [
          [],
          [],
          []
        ]), a = [], i = [], o = n.length ? n[n.length - 1] : void 0;
        return e.forEach(t => {
          if ('largest-contentful-paint' === t.entryType) {
            (!o || o.startTime < t.startTime) && (o = t);
            return;
          }
          if ('navigation' === t.entryType) {
            t.duration > 0 && !r.find(es(t)) && !i.find(es(t)) && i.push(t);
            return;
          }
          a.push(t);
        }), [
          ...o ? [o] : [],
          ...r,
          ..._,
          ...a,
          ...i
        ].sort((t, e) => t.startTime - e.startTime);
      }(t.performanceEvents, e.getEntries());
      t.performanceEvents = r;
    });
    return [
      'element',
      'event',
      'first-input',
      'largest-contentful-paint',
      'layout-shift',
      'longtask',
      'navigation',
      'paint',
      'resource'
    ].forEach(t => {
      try {
        e.observe({
          type: t,
          buffered: !0
        });
      } catch (t) {}
    }), e;
  }(this);
  }
  _removeListeners() {
try {
  K.document.removeEventListener('visibilitychange', this._handleVisibilityChange), K.removeEventListener('blur', this._handleWindowBlur), K.removeEventListener('focus', this._handleWindowFocus), K.removeEventListener('keydown', this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceObserver && (this._performanceObserver.disconnect(), this._performanceObserver = null);
} catch (t) {
  this._handleException(t);
}
  }
  __init13() {
this._handleVisibilityChange = () => {
  'visible' === K.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks();
};
  }
  __init14() {
this._handleWindowBlur = () => {
  let t = e_({
    category: 'ui.blur'
  });
  this._doChangeToBackgroundTasks(t);
};
  }
  __init15() {
this._handleWindowFocus = () => {
  let t = e_({
    category: 'ui.focus'
  });
  this._doChangeToForegroundTasks(t);
};
  }
  __init16() {
this._handleKeyboardEvent = t => {
  ! function(t, e) {
    if (!t.isEnabled())
      return;
    t.updateUserActivity();
    let r = function(t) {
      let {
        metaKey: e,
        shiftKey: r,
        ctrlKey: n,
        altKey: _,
        key: a,
        target: i
      } = t;
      if (!i || function(t) {
          return 'INPUT' === t.tagName || 'TEXTAREA' === t.tagName || t.isContentEditable;
        }(i) || !a)
        return null;
      let o = e || n || _,
        E = 1 === a.length;
      if (!o && E)
        return null;
      let s = (0, G.Rt)(i, {
          maxStringLength: 200
        }) || '<unknown>',
        c = eo(i, s);
      return e_({
        category: 'ui.keyDown',
        message: s,
        data: {
          ...c.data,
          metaKey: e,
          shiftKey: r,
          ctrlKey: n,
          altKey: _,
          key: a
        }
      });
    }(e);
    if (!!r)
      t7(t, r);
  }(this, t);
};
  }
  _doChangeToBackgroundTasks(t) {
if (!this.session)
  return;
let e = ed(this.session, this.timeouts);
t && !e && this._createCustomBreadcrumb(t), this.conditionalFlush();
  }
  _doChangeToForegroundTasks(t) {
if (!!this.session) {
  if (!this.checkAndHandleExpiredSession()) {
    ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.log('[Replay] Document has become active, but session has expired');
    return;
  }
  t && this._createCustomBreadcrumb(t);
}
  }
  _triggerFullSnapshot(t = !0) {
try {
  ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.log('[Replay] Taking full rrweb snapshot'), t4.takeFullSnapshot(t);
} catch (t) {
  this._handleException(t);
}
  }
  _updateUserActivity(t = Date.now()) {
this._lastActivity = t;
  }
  _updateSessionActivity(t = Date.now()) {
this.session && (this.session.lastActivity = t, this._maybeSaveSession());
  }
  _createCustomBreadcrumb(t) {
this.addUpdate(() => {
  this.throttledAddEvent({
    type: N.Custom,
    timestamp: t.timestamp || 0,
    data: {
      tag: 'breadcrumb',
      payload: t
    }
  });
});
  }
  _addPerformanceEntries() {
let t = [...this.performanceEvents];
return this.performanceEvents = [], Promise.all(eg(this, t.map(eQ).filter(Boolean)));
  }
  _clearContext() {
this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = [];
  }
  _updateInitialTimestampFromEventBuffer() {
let {
  session: t,
  eventBuffer: e
} = this;
if (!t || !e || t.segmentId)
  return;
let r = e.getEarliestTimestamp();
r && r < this._context.initialTimestamp && (this._context.initialTimestamp = r);
  }
  _popEventContext() {
let t = {
  initialTimestamp: this._context.initialTimestamp,
  initialUrl: this._context.initialUrl,
  errorIds: Array.from(this._context.errorIds),
  traceIds: Array.from(this._context.traceIds),
  urls: this._context.urls
};
return this._clearContext(), t;
  }
  async _runFlush() {
if (!this.session || !this.eventBuffer) {
  ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.error('[Replay] No session or eventBuffer found to flush.');
  return;
}
if (await this._addPerformanceEntries(), !this.eventBuffer || !this.eventBuffer.hasEvents)
  return;
if (await eZ(this), !!this.eventBuffer)
  try {
    this._updateInitialTimestampFromEventBuffer();
    let t = await this.eventBuffer.finish(),
      e = this.session.id,
      r = this._popEventContext(),
      n = this.session.segmentId++;
    this._maybeSaveSession(), await e6({
      replayId: e,
      recordingData: t,
      segmentId: n,
      eventContext: r,
      session: this.session,
      options: this.getOptions(),
      timestamp: Date.now()
    });
  } catch (e) {
    this._handleException(e), this.stop('sendReplay');
    let t = (0, L.Gd)().getClient();
    t && t.recordDroppedEvent('send_error', 'replay');
  }
  }
  __init17() {
this._flush = async ({
  force: t = !1
} = {}) => {
  if (!this._isEnabled && !t)
    return;
  if (!this.checkAndHandleExpiredSession()) {
    ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.error('[Replay] Attempting to finish replay event after session expired.');
    return;
  }
  if (!this.session) {
    ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.error('[Replay] No session found to flush.');
    return;
  }
  let e = this.session.started,
    r = Date.now() - e;
  if (r < this._options.minReplayDuration || r > this.timeouts.maxSessionLife + 5000) {
    let t = this.getOptions()._experiments.traceInternals ? console.warn : m.kg.warn;
    ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && t(`[Replay] Session duration (${ Math.floor(r / 1000) }s) is too short or too long, not sending replay.`);
    return;
  }
  if (this._debouncedFlush.cancel(), !this._flushLock) {
    this._flushLock = this._runFlush(), await this._flushLock, this._flushLock = null;
    return;
  }
  try {
    await this._flushLock;
  } catch (t) {
    ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && m.kg.error(t);
  } finally {
    this._debouncedFlush();
  }
};
  }
  _maybeSaveSession() {
this.session && this._options.stickySession && eS(this.session);
  }
  __init18() {
this._onMutationHandler = t => {
  let e = t.length,
    r = this._options.mutationLimit,
    n = this._options.mutationBreadcrumbLimit,
    _ = r && e > r;
  if (e > n || _) {
    let t = e_({
      category: 'replay.mutations',
      data: {
        count: e,
        limit: _
      }
    });
    this._createCustomBreadcrumb(t);
  }
  return !_ || (this.stop('mutationLimit'), !1);
};
  }
}

function e8(t, e, r, n) {
  let _ = [
...t,
...'string' == typeof n ? n.split(',') : [],
...e
  ];
  return void 0 !== r && ('string' == typeof r && _.push(`.${ r }`), console.warn('[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.')), _.join(',');
}

function e7() {
  return 'undefined' != typeof window && (!(0, H.KV)() || function() {
return void 0 !== Y && 'renderer' === Y.type;
  }());
}
let e9 = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
  rt = [
'content-length',
'content-type',
'accept'
  ],
  re = !1;
class rr {
  static __initStatic() {
this.id = 'Replay';
  }
  __init() {
this.name = rr.id;
  }
  constructor({
flushMinDelay: t = 5000,
flushMaxDelay: e = 5500,
minReplayDuration: r = 4999,
stickySession: n = !0,
useCompression: _ = !0,
_experiments: a = {},
sessionSampleRate: i,
errorSampleRate: o,
maskAllText: E = !0,
maskAllInputs: s = !0,
blockAllMedia: c = !0,
mutationBreadcrumbLimit: I = 750,
mutationLimit: R = 10000,
slowClickTimeout: T = 7000,
slowClickIgnoreSelectors: u = [],
networkDetailAllowUrls: l = [],
networkDetailDenyUrls: A = [],
networkCaptureBodies: N = !0,
networkRequestHeaders: d = [],
networkResponseHeaders: O = [],
mask: S = [],
unmask: p = [],
block: D = [],
unblock: f = [],
ignore: L = [],
maskFn: h,
beforeAddRecordingEvent: C,
blockClass: g,
blockSelector: P,
maskInputOptions: M,
maskTextClass: U,
maskTextSelector: G,
ignoreClass: m
  } = {}) {
if (rr.prototype.__init.call(this), this._recordingOptions = {
    maskAllInputs: s,
    maskAllText: E,
    maskInputOptions: {
      ...M || {},
      password: !0
    },
    maskTextFn: h,
    maskInputFn: h,
    ... function({
      mask: t,
      unmask: e,
      block: r,
      unblock: n,
      ignore: _,
      blockClass: a,
      blockSelector: i,
      maskTextClass: o,
      maskTextSelector: E,
      ignoreClass: s
    }) {
      let c = e8(t, [
          '.sentry-mask',
          '[data-sentry-mask]'
        ], o, E),
        I = e8(e, [
          '.sentry-unmask',
          '[data-sentry-unmask]'
        ]),
        R = {
          maskTextSelector: c,
          unmaskTextSelector: I,
          maskInputSelector: c,
          unmaskInputSelector: I,
          blockSelector: e8(r, [
            '.sentry-block',
            '[data-sentry-block]',
            'base[href="/"]'
          ], a, i),
          unblockSelector: e8(n, [
            '.sentry-unblock',
            '[data-sentry-unblock]'
          ]),
          ignoreSelector: e8(_, [
            '.sentry-ignore',
            '[data-sentry-ignore]',
            'input[type="file"]'
          ], s)
        };
      return a instanceof RegExp && (R.blockClass = a), o instanceof RegExp && (R.maskTextClass = o), R;
    }({
      mask: S,
      unmask: p,
      block: D,
      unblock: f,
      ignore: L,
      blockClass: g,
      blockSelector: P,
      maskTextClass: U,
      maskTextSelector: G,
      ignoreClass: m
    }),
    slimDOMOptions: 'all',
    inlineStylesheet: !0,
    inlineImages: !1,
    collectFonts: !0
  }, this._initialOptions = {
    flushMinDelay: t,
    flushMaxDelay: e,
    minReplayDuration: Math.min(r, 15000),
    stickySession: n,
    sessionSampleRate: i,
    errorSampleRate: o,
    useCompression: _,
    blockAllMedia: c,
    maskAllInputs: s,
    maskAllText: E,
    mutationBreadcrumbLimit: I,
    mutationLimit: R,
    slowClickTimeout: T,
    slowClickIgnoreSelectors: u,
    networkDetailAllowUrls: l,
    networkDetailDenyUrls: A,
    networkCaptureBodies: N,
    networkRequestHeaders: rn(d),
    networkResponseHeaders: rn(O),
    beforeAddRecordingEvent: C,
    _experiments: a
  }, 'number' == typeof i && (console.warn(`[Replay] You are passing \`sessionSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysSessionSampleRate: ${ i } })`), this._initialOptions.sessionSampleRate = i), 'number' == typeof o && (console.warn(`[Replay] You are passing \`errorSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysOnErrorSampleRate: ${ o } })`), this._initialOptions.errorSampleRate = o), this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${ this._recordingOptions.blockSelector },${ e9 }` : e9), this._isInitialized && e7())
  throw Error('Multiple Sentry Session Replay instances are not supported');
this._isInitialized = !0;
  }
  get _isInitialized() {
return re;
  }
  set _isInitialized(t) {
re = t;
  }
  setupOnce() {
if (!!e7())
  this._setup(), setTimeout(() => this._initialize());
  }
  start() {
if (!!this._replay)
  this._replay.start();
  }
  startBuffering() {
if (!!this._replay)
  this._replay.startBuffering();
  }
  stop() {
return this._replay ? this._replay.stop() : Promise.resolve();
  }
  flush(t) {
return this._replay && this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(t) : Promise.resolve();
  }
  getReplayId() {
if (!!this._replay && !!this._replay.isEnabled())
  return this._replay.getSessionId();
  }
  _initialize() {
if (!!this._replay)
  this._replay.initializeSampling();
  }
  _setup() {
let t = function(t) {
  let e = (0, L.Gd)().getClient(),
    r = e && e.getOptions(),
    n = {
      sessionSampleRate: 0,
      errorSampleRate: 0,
      ...(0, U.Jr)(t)
    };
  return r ? (null == t.sessionSampleRate && null == t.errorSampleRate && null == r.replaysSessionSampleRate && null == r.replaysOnErrorSampleRate && console.warn('Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.'), 'number' == typeof r.replaysSessionSampleRate && (n.sessionSampleRate = r.replaysSessionSampleRate), 'number' == typeof r.replaysOnErrorSampleRate && (n.errorSampleRate = r.replaysOnErrorSampleRate), n) : (console.warn('SDK client is not available.'), n);
}(this._initialOptions);
this._replay = new e4({
  options: t,
  recordingOptions: this._recordingOptions
});
  }
}
rr.__initStatic();

function rn(t) {
  return [
...rt,
...t.map(t => t.toLowerCase())
  ];
}