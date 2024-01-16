"use strict";
e.r(E), e.d(E, {
  default: function() {
    return l
  }
}), e("70102");
var I = e("10371"),
  a = e.n(I),
  o = e("773179"),
  R = e.n(o),
  t = e("58539"),
  A = e("891600"),
  T = e("790217"),
  r = e("593251"),
  N = e("130285"),
  i = e("515950");
let {
  Themes: c
} = N._private, {
  SemanticColors: O,
  RawColors: n
} = t._private, {
  Shadows: L
} = T._private, {
  Spacing: D
} = r._private, S = Symbol("semanticColor"), C = {
  themes: c,
  colors: R.mapValues(O, (_, E) => ({
    [S]: E
  })),
  unsafe_rawColors: n,
  shadows: R.mapValues(L, _ => {
    function E(E) {
      return {
        resolve: (e, I) => E(_[e].nativeStyles, I)
      }
    }
    return {
      shadowOffset: E(_ => _.shadowOffset),
      shadowColor: E((_, E) => E ? _.shadowColorAndroid : _.shadowColor),
      shadowOpacity: E(_ => _.shadowOpacity),
      shadowRadius: E(_ => _.shadowRadius),
      elevation: E(_ => _.elevation)
    }
  }),
  radii: A.Radius,
  spacing: D,
  internal: {
    isSemanticColor: _ => "object" == typeof _ && null !== _ && S in _,
    resolveSemanticColor(_, E, e) {
      var I, o;
      _ = function(_) {
        if ("string" == typeof _) {
          let E = _.toUpperCase();
          if (!(E in c)) throw Error("Invalid theme: ".concat(_));
          _ = c[E]
        }
        return _
      }(_);
      let R = O[E[S]],
        {
          category: t
        } = R,
        A = R[_],
        T = n[A.raw],
        r = A.opacity;
      if ((null == e ? void 0 : e.gradient) != null && "gradient" in R) {
        let _ = R.gradient,
          E = _[null == e ? void 0 : e.gradient.theme];
        if (null != E) {
          let _ = a(E.color in n ? n[E.color] : null == e ? void 0 : e.gradient.colors[E.color]);
          "saturation" in E && (_ = _.set("hsl.s", E.saturation)), "lightness" in E && (_ = _.set("hsl.l", E.lightness)), T = _.hex(), r = "opacity" in E ? E.opacity : 1
        }
      }
      let N = null !== (I = null == e ? void 0 : e.contrast) && void 0 !== I ? I : 1,
        L = null !== (o = null == e ? void 0 : e.saturation) && void 0 !== o ? o : 1;
      if (L < 1 && (T = (0, i.transformColorForReducedSaturation)(T, t, L)), 1 !== N && (T = (0, i.transformColorContrast)(T, t, _, N)), 1 === r) return T;
      {
        let _ = a(T);
        return _.alpha(r).hex()
      }
    }
  }
};
var l = C