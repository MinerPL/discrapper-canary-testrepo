let t = "[A-Za-z$_][0-9A-Za-z$_]*",
  n = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
  r = ["true", "false", "null", "undefined", "NaN", "Infinity"],
  i = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
  a = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
  o = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
  s = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"],
  u = [].concat(o, i, a);
e.exports = function(e) {
  var c;
  let l = e.regex,
    d = (e, {
      after: t
    }) => {
      let n = "</" + e[0].slice(1);
      return -1 !== e.input.indexOf(n, t)
    },
    f = "<>",
    p = "</>",
    h = /<[A-Za-z0-9\\._:-]+/,
    m = /\/[A-Za-z0-9\\._:-]+>|\/>/,
    g = (e, t) => {
      let n;
      let r = e[0].length + e.index,
        i = e.input[r];
      if ("<" === i || "," === i) {
        t.ignoreMatch();
        return
      }
      ">" === i && !d(e, {
        after: r
      }) && t.ignoreMatch();
      let a = e.input.substring(r);
      if ((n = a.match(/^\s*=/)) || (n = a.match(/^\s+extends\s+/)) && 0 === n.index) {
        t.ignoreMatch();
        return
      }
    },
    _ = {
      $pattern: t,
      keyword: n,
      literal: r,
      built_in: u,
      "variable.language": s
    },
    b = "[0-9](_?[0-9])*",
    v = `\\.(${b})`,
    y = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
    E = {
      className: "number",
      variants: [{
        begin: `(\\b(${y})((${v})|\\.)?|(${v}))[eE][+-]?(${b})\\b`
      }, {
        begin: `\\b(${y})\\b((${v})\\b|\\.)?|(${v})\\b`
      }, {
        begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
      }, {
        begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
      }, {
        begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
      }, {
        begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
      }, {
        begin: "\\b0[0-7]+n?\\b"
      }],
      relevance: 0
    },
    S = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: _,
      contains: []
    },
    x = {
      begin: "html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [e.BACKSLASH_ESCAPE, S],
        subLanguage: "xml"
      }
    },
    w = {
      begin: "css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [e.BACKSLASH_ESCAPE, S],
        subLanguage: "css"
      }
    },
    C = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [e.BACKSLASH_ESCAPE, S]
    },
    T = {
      className: "comment",
      variants: [e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
        relevance: 0,
        contains: [{
          begin: "(?=@[A-Za-z]+)",
          relevance: 0,
          contains: [{
            className: "doctag",
            begin: "@[A-Za-z]+"
          }, {
            className: "type",
            begin: "\\{",
            end: "\\}",
            excludeEnd: !0,
            excludeBegin: !0,
            relevance: 0
          }, {
            className: "variable",
            begin: t + "(?=\\s*(-)|$)",
            endsParent: !0,
            relevance: 0
          }, {
            begin: /(?=[^\n])\s/,
            relevance: 0
          }]
        }]
      }), e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]
    },
    D = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, x, w, C, {
      match: /\$\d+/
    }, E];
  S.contains = D.concat({
    begin: /\{/,
    end: /\}/,
    keywords: _,
    contains: ["self"].concat(D)
  });
  let M = [].concat(T, S.contains),
    O = M.concat([{
      begin: /\(/,
      end: /\)/,
      keywords: _,
      contains: ["self"].concat(M)
    }]),
    A = {
      className: "params",
      begin: /\(/,
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: _,
      contains: O
    },
    k = {
      variants: [{
        match: [/class/, /\s+/, t, /\s+/, /extends/, /\s+/, l.concat(t, "(", l.concat(/\./, t), ")*")],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      }, {
        match: [/class/, /\s+/, t],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }]
    },
    R = {
      relevance: 0,
      match: l.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
      className: "title.class",
      keywords: {
        _: [...i, ...a]
      }
    };
  let N = {
      match: l.concat(/\b/, (c = [...o, "super", "import"], l.concat("(?!", c.join("|"), ")")), t, l.lookahead(/\(/)),
      className: "title.function",
      relevance: 0
    },
    I = {
      begin: l.concat(/\./, l.lookahead(l.concat(t, /(?![0-9A-Za-z$_(])/))),
      end: t,
      excludeBegin: !0,
      keywords: "prototype",
      className: "property",
      relevance: 0
    },
    L = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>",
    P = {
      match: [/const|var|let/, /\s+/, t, /\s*/, /=\s*/, /(async\s*)?/, l.lookahead(L)],
      keywords: "async",
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [A]
    };
  return {
    name: "Javascript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: _,
    exports: {
      PARAMS_CONTAINS: O,
      CLASS_REFERENCE: R
    },
    illegal: /#(?![$_A-z])/,
    contains: [e.SHEBANG({
      label: "shebang",
      binary: "node",
      relevance: 5
    }), {
      label: "use_strict",
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/
    }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, x, w, C, T, {
      match: /\$\d+/
    }, E, R, {
      className: "attr",
      begin: t + l.lookahead(":"),
      relevance: 0
    }, P, {
      begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
      keywords: "return throw case",
      relevance: 0,
      contains: [T, e.REGEXP_MODE, {
        className: "function",
        begin: L,
        returnBegin: !0,
        end: "\\s*=>",
        contains: [{
          className: "params",
          variants: [{
            begin: e.UNDERSCORE_IDENT_RE,
            relevance: 0
          }, {
            className: null,
            begin: /\(\s*\)/,
            skip: !0
          }, {
            begin: /\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: _,
            contains: O
          }]
        }]
      }, {
        begin: /,/,
        relevance: 0
      }, {
        match: /\s+/,
        relevance: 0
      }, {
        variants: [{
          begin: f,
          end: p
        }, {
          match: /<[A-Za-z0-9\\._:-]+\s*\/>/
        }, {
          begin: h,
          "on:begin": g,
          end: m
        }],
        subLanguage: "xml",
        contains: [{
          begin: h,
          end: m,
          skip: !0,
          contains: ["self"]
        }]
      }]
    }, {
      variants: [{
        match: [/function/, /\s+/, t, /(?=\s*\()/]
      }, {
        match: [/function/, /\s*(?=\()/]
      }],
      className: {
        1: "keyword",
        3: "title.function"
      },
      label: "func.def",
      contains: [A],
      illegal: /%/
    }, {
      beginKeywords: "while if switch catch for"
    }, {
      begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
      returnBegin: !0,
      label: "func.def",
      contains: [A, e.inherit(e.TITLE_MODE, {
        begin: t,
        className: "title.function"
      })]
    }, {
      match: /\.\.\./,
      relevance: 0
    }, I, {
      match: "\\$" + t,
      relevance: 0
    }, {
      match: [/\bconstructor(?=\s*\()/],
      className: {
        1: "title.function"
      },
      contains: [A]
    }, N, {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: "variable.constant"
    }, k, {
      match: [/get|set/, /\s+/, t, /(?=\()/],
      className: {
        1: "keyword",
        3: "title.function"
      },
      contains: [{
        begin: /\(\)/
      }, A]
    }, {
      match: /\$[(.]/
    }]
  }
}