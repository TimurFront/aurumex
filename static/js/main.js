"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (C, e) {
  "use strict";

  var t = [],
    E = C.document,
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.concat,
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function m(e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    x = function x(e) {
      return null != e && e === e.window;
    },
    c = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }
  var f = "3.4.1",
    k = function k(e, t) {
      return new k.fn.init(e, t);
    },
    p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function d(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }
  k.fn = k.prototype = {
    jquery: f,
    constructor: k,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = k.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return k.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(k.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, k.extend = k.fn.extend = function () {
    var e,
      t,
      n,
      r,
      i,
      o,
      a = arguments[0] || {},
      s = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }
    return a;
  }, k.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;
      for (t in e) {
        return !1;
      }
      return !0;
    },
    globalEval: function globalEval(e, t) {
      b(e, {
        nonce: t && t.nonce
      });
    },
    each: function each(e, t) {
      var n,
        r = 0;
      if (d(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }
      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : (e + "").replace(p, "");
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }
      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }
      return r;
    },
    map: function map(e, t, n) {
      var r,
        i,
        o = 0,
        a = [];
      if (d(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g.apply([], a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });
  var h = function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      k = "sizzle" + 1 * new Date(),
      m = n.document,
      S = 0,
      r = 0,
      p = ue(),
      x = ue(),
      N = ue(),
      A = ue(),
      D = function D(e, t) {
        return e === t && (l = !0), 0;
      },
      j = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function P(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
          if (e[n] === t) return n;
        }
        return -1;
      },
      R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
      $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
      F = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp($),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + $),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      ne = function ne(e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function ie(e, t) {
        return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
      oe = function oe() {
        T();
      },
      ae = be(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
            r = 0;
          while (e[n++] = t[r++]) {
            ;
          }
          e.length = n - 1;
        }
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
      if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }
        if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && U.test(t)) {
            (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k), o = (l = h(t)).length;
            while (o--) {
              l[o] = "#" + s + " " + xe(l[o]);
            }
            c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e;
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            A(t, !0);
          } finally {
            s === k && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace(B, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }
    function le(e) {
      return e[k] = !0, e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }
    function pe(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
            r = a([], e.length, o),
            i = r.length;
          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e.namespaceURI,
        n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
        n,
        r = e ? e.ownerDocument || e : m;
      return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
            r,
            i,
            o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;
            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }
          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
          r = [],
          i = 0,
          o = t.getElementsByTagName(e);
        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }
          return r;
        }
        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
          r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
          r = 0,
          i = e.parentNode,
          o = t.parentNode,
          a = [e],
          s = [t];
        if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;
        while (n = n.parentNode) {
          a.unshift(n);
        }
        n = t;
        while (n = n.parentNode) {
          s.unshift(n);
        }
        while (a[r] === s[r]) {
          r++;
        }
        return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        A(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }
        while (r--) {
          e.splice(n[r], 1);
        }
      }
      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
        n = "",
        r = 0,
        i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }
      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
            n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = p[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
            m = "last" !== h.slice(-4),
            x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              l = y !== m ? "nextSibling" : "previousSibling",
              c = e.parentNode,
              f = x && e.nodeName.toLowerCase(),
              p = !n && !x,
              d = !1;
            if (c) {
              if (y) {
                while (l) {
                  a = e;
                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }
                  u = l = "only" === h && !u && "nextSibling";
                }
                return !0;
              }
              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];
                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [S, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
              }
              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
            a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
              r = a(e, o),
              i = r.length;
            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
            i = [],
            s = f(e.replace(B, "$1"));
          return s[k] ? le(function (e, t, n, r) {
            var i,
              o = s(e, null, r, []),
              a = e.length;
            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;
            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);
            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }
          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }
          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }
          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }
          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }
          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }
    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }
        return !1;
      } : function (e, t, n) {
        var r,
          i,
          o,
          a = [S, p];
        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }
        return !1;
      };
    }
    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;
        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }
        return !0;
      } : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
          o,
          a,
          s = [],
          u = [],
          l = t.length,
          c = e || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) {
              se(e, t[r], n);
            }
            return n;
          }(h || "*", n.nodeType ? [n] : n, []),
          f = !d || !e && h ? c : Te(c, s, d, n, r),
          p = g ? y || (e ? d : l || v) ? [] : t : f;
        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;
          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }
        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;
              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }
              y(null, p = [], i, r);
            }
            o = p.length;
            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }
    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
          return e === i;
        }, a, !0), l = be(function (e) {
          return -1 < P(i, e);
        }, a, !0), c = [function (e, t, n) {
          var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
          return i = null, r;
        }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }
            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }
          c.push(t);
        }
      }
      return we(c);
    }
    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;
      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(B, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }
        if (!n) break;
      }
      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
        v,
        y,
        m,
        x,
        r,
        i = [],
        o = [],
        a = N[e + " "];
      if (!a) {
        t || (t = h(e)), n = t.length;
        while (n--) {
          (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
        }
        (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
            a,
            s,
            u = 0,
            l = "0",
            c = e && [],
            f = [],
            p = w,
            d = e || x && b.find.TAG("*", i),
            h = S += null == p ? 1 : Math.random() || .1,
            g = d.length;
          for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument === C || (T(o), n = !E);
              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);
                  break;
                }
              }
              i && (S = h);
            }
            m && ((o = !s && o) && u--, e && c.push(o));
          }
          if (u += l, m && l !== u) {
            a = 0;
            while (s = y[a++]) {
              s(c, f, t, n);
            }
            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }
            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }
          return i && (S = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }
      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = "function" == typeof e && e,
        c = !r && h(e = l.selector || e);
      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }
        i = G.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;
          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }
      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);
  k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;
  var T = function T(e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType) {
        if (1 === e.nodeType) {
          if (i && k(e).is(n)) break;
          r.push(e);
        }
      }
      return r;
    },
    S = function S(e, t) {
      for (var n = []; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && n.push(e);
      }
      return n;
    },
    N = k.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n) ? k.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? k.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? k.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : k.filter(n, e, r);
  }
  k.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, k.fn.extend({
    find: function find(e) {
      var t,
        n,
        r = this.length,
        i = this;
      if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (k.contains(i[t], this)) return !0;
        }
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) {
        k.find(e, i[t], n);
      }
      return 1 < r ? k.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length;
    }
  });
  var q,
    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (k.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (n = n || q, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }
      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
  }).prototype = k.fn, q = k(E);
  var H = /^(?:parents|prev(?:Until|All))/,
    O = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }
    return e;
  }
  k.fn.extend({
    has: function has(e) {
      var t = k(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (k.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && k(e);
      if (!N.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), k.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return T(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return T(e, "parentNode", n);
    },
    next: function next(e) {
      return P(e, "nextSibling");
    },
    prev: function prev(e) {
      return P(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return T(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return T(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return T(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return T(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return S(e.firstChild);
    },
    contents: function contents(e) {
      return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes));
    }
  }, function (r, i) {
    k.fn[r] = function (e, t) {
      var n = k.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var R = /[^\x20\t\r\n\f]+/g;
  function M(e) {
    return e;
  }
  function I(e) {
    throw e;
  }
  function W(e, t, n, r) {
    var i;
    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  k.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function (e, t) {
      n[t] = !0;
    }), n) : k.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function c() {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length) {
            !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
          }
        }
        r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
      },
      f = {
        add: function add() {
          return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
            k.each(e, function (e, t) {
              m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
            });
          }(arguments), t && !i && c()), this;
        },
        remove: function remove() {
          return k.each(arguments, function (e, t) {
            var n;
            while (-1 < (n = k.inArray(t, s, n))) {
              s.splice(n, 1), n <= l && l--;
            }
          }), this;
        },
        has: function has(e) {
          return e ? -1 < k.inArray(e, s) : 0 < s.length;
        },
        empty: function empty() {
          return s && (s = []), this;
        },
        disable: function disable() {
          return a = u = [], s = t = "", this;
        },
        disabled: function disabled() {
          return !s;
        },
        lock: function lock() {
          return a = u = [], t || i || (s = t = ""), this;
        },
        locked: function locked() {
          return !!a;
        },
        fireWith: function fireWith(e, t) {
          return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
        },
        fire: function fire() {
          return f.fireWith(this, arguments), this;
        },
        fired: function fired() {
          return !!o;
        }
      };
    return f;
  }, k.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
        i = "pending",
        a = {
          state: function state() {
            return i;
          },
          always: function always() {
            return s.done(arguments).fail(arguments), this;
          },
          "catch": function _catch(e) {
            return a.then(null, e);
          },
          pipe: function pipe() {
            var i = arguments;
            return k.Deferred(function (r) {
              k.each(o, function (e, t) {
                var n = m(i[t[4]]) && i[t[4]];
                s[t[1]](function () {
                  var e = n && n.apply(this, arguments);
                  e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                });
              }), i = null;
            }).promise();
          },
          then: function then(t, n, r) {
            var u = 0;
            function l(i, o, a, s) {
              return function () {
                var n = this,
                  r = arguments,
                  e = function e() {
                    var e, t;
                    if (!(i < u)) {
                      if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                      t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                    }
                  },
                  t = s ? e : function () {
                    try {
                      e();
                    } catch (e) {
                      k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r));
                    }
                  };
                i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t));
              };
            }
            return k.Deferred(function (e) {
              o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I));
            }).promise();
          },
          promise: function promise(e) {
            return null != e ? k.extend(e, a) : a;
          }
        },
        s = {};
      return k.each(o, function (e, t) {
        var n = t[2],
          r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
        t = n,
        r = Array(t),
        i = s.call(arguments),
        o = k.Deferred(),
        a = function a(t) {
          return function (e) {
            r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
          };
        };
      if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
      while (t--) {
        W(i[t], a(t), o.reject);
      }
      return o.promise();
    }
  });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  k.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, k.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = k.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready();
  }
  k.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      k.readyException(e);
    }), this;
  }, k.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k]);
    }
  }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
  var _ = function _(e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n)) for (s in i = !0, n) {
        _(e, t, s, n[s], !0, o, a);
      } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
        return l.call(k(e), n);
      })), t)) for (; s < u; s++) {
        t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      }
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    z = /^-ms-/,
    U = /-([a-z])/g;
  function X(e, t) {
    return t.toUpperCase();
  }
  function V(e) {
    return e.replace(z, "ms-").replace(U, X);
  }
  var G = function G(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Y() {
    this.expando = k.expando + Y.uid++;
  }
  Y.uid = 1, Y.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
        i = this.cache(e);
      if ("string" == typeof t) i[V(t)] = n;else for (r in t) {
        i[V(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
        r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;
          while (n--) {
            delete r[t[n]];
          }
        }
        (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !k.isEmptyObject(t);
    }
  };
  var Q = new Y(),
    J = new Y(),
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;
  function ee(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i);
      } catch (e) {}
      J.set(e, t, n);
    } else n = void 0;
    return n;
  }
  k.extend({
    hasData: function hasData(e) {
      return J.hasData(e) || Q.hasData(e);
    },
    data: function data(e, t, n) {
      return J.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      J.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Q.remove(e, t);
    }
  }), k.fn.extend({
    data: function data(n, e) {
      var t,
        r,
        i,
        o = this[0],
        a = o && o.attributes;
      if (void 0 === n) {
        if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
          t = a.length;
          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
          }
          Q.set(o, "hasDataAttrs", !0);
        }
        return i;
      }
      return "object" == _typeof(n) ? this.each(function () {
        J.set(this, n);
      }) : _(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
        this.each(function () {
          J.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        J.remove(this, e);
      });
    }
  }), k.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";
      var n = k.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = k._queueHooks(e, t);
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        k.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Q.get(e, n) || Q.access(e, n, {
        empty: k.Callbacks("once memory").add(function () {
          Q.remove(e, [t + "queue", n]);
        })
      });
    }
  }), k.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = k.queue(this, t, n);
        k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        k.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
        r = 1,
        i = k.Deferred(),
        o = this,
        a = this.length,
        s = function s() {
          --r || i.resolveWith(o, [o]);
        };
      "string" != typeof e && (t = e, e = void 0), e = e || "fx";
      while (a--) {
        (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }
      return s(), i.promise(t);
    }
  });
  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
    re = ["Top", "Right", "Bottom", "Left"],
    ie = E.documentElement,
    oe = function oe(e) {
      return k.contains(e.ownerDocument, e);
    },
    ae = {
      composed: !0
    };
  ie.getRootNode && (oe = function oe(e) {
    return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
  });
  var se = function se(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display");
    },
    ue = function ue(e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) {
        a[o] = e.style[o], e.style[o] = t[o];
      }
      for (o in i = n.apply(e, r || []), t) {
        e.style[o] = a[o];
      }
      return i;
    };
  function le(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r ? function () {
        return r.cur();
      } : function () {
        return k.css(e, t, "");
      },
      u = s(),
      l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
      c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;
      while (a--) {
        k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }
      c *= 2, k.style(e, t, c + l), n = n || [];
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }
  var ce = {};
  function fe(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
    }
    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }
    return e;
  }
  k.fn.extend({
    show: function show() {
      return fe(this, !0);
    },
    hide: function hide() {
      return fe(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        se(this) ? k(this).show() : k(this).hide();
      });
    }
  });
  var pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n;
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
    }
  }
  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
  var me,
    xe,
    be = /<|&#?\w+;/;
  function we(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);else if (be.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];
        while (c--) {
          a = a.lastChild;
        }
        k.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }
    f.textContent = "", d = 0;
    while (o = p[d++]) {
      if (r && -1 < k.inArray(o, r)) i && i.push(o);else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;
        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }
    return f;
  }
  me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
  var Te = /^key/,
    Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ee = /^([^.]*)(?:\.(.+)|)/;
  function ke() {
    return !0;
  }
  function Se() {
    return !1;
  }
  function Ne(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }
  function Ae(e, t, n, r, i, o) {
    var a, s;
    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        Ae(e, s, n, r, t[s], o);
      }
      return e;
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return k().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = k.guid++)), e.each(function () {
      k.event.add(this, t, i, r, n);
    });
  }
  function De(e, i, o) {
    o ? (Q.set(e, i, !1), k.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
          n,
          r = Q.get(this, i);
        if (1 & e.isTrigger && this[i]) {
          if (r.length) (k.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
        } else r.length && (Q.set(this, i, {
          value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
  }
  k.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Q.get(t);
      if (v) {
        n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(R) || [""]).length;
        while (l--) {
          d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && k.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Q.hasData(e) && Q.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(R) || [""]).length;
        while (l--) {
          if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }
            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            k.event.remove(e, d + t[l], n, r, !0);
          }
        }
        k.isEmptyObject(u) && Q.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = k.event.fix(e),
        u = new Array(arguments.length),
        l = (Q.get(this, "events") || {})[s.type] || [],
        c = k.event.special[s.type] || {};
      for (u[0] = s, t = 1; t < arguments.length; t++) {
        u[t] = arguments[t];
      }
      if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
        a = k.event.handlers.call(this, s, l), t = 0;
        while ((i = a[t++]) && !s.isPropagationStopped()) {
          s.currentTarget = i.elem, n = 0;
          while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) {
            s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
          }
        }
        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
          }
          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(k.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[k.expando] ? e : new k.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, k.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, k.Event = function (e, t) {
    if (!(this instanceof k.Event)) return new k.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0;
  }, k.Event.prototype = {
    constructor: k.Event,
    isDefaultPrevented: Se,
    isPropagationStopped: Se,
    isImmediatePropagationStopped: Se,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, k.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, k.event.addProp), k.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    k.event.special[e] = {
      setup: function setup() {
        return De(this, e, Ne), !1;
      },
      trigger: function trigger() {
        return De(this, e), !0;
      },
      delegateType: t
    };
  }), k.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    k.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
          n = e.relatedTarget,
          r = e.handleObj;
        return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), k.fn.extend({
    on: function on(e, t, n, r) {
      return Ae(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return Ae(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }
        return this;
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () {
        k.event.remove(this, e, n, t);
      });
    }
  });
  var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    qe = /<script|<style|<link/i,
    Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
    He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Oe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e;
  }
  function Pe(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }
  function Re(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }
  function Me(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) {
        for (n = 0, r = l[i].length; n < r; n++) {
          k.event.add(t, i, l[i][n]);
        }
      }
      J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u));
    }
  }
  function Ie(n, r, i, o) {
    r = g.apply([], r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
    });
    if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) {
        u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }
      if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }) : b(u.textContent.replace(He, ""), u, l));
      }
    }
    return n;
  }
  function We(e, t, n) {
    for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }
    return e;
  }
  k.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(je, "<$1></$2>");
    },
    clone: function clone(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = oe(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Me(o[r], a[r]);
      } else Me(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (G(n)) {
          if (t = n[Q.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
            }
            n[Q.expando] = void 0;
          }
          n[J.expando] && (n[J.expando] = void 0);
        }
      }
    }
  }), k.fn.extend({
    detach: function detach(e) {
      return We(this, e, !0);
    },
    remove: function remove(e) {
      return We(this, e);
    },
    text: function text(e) {
      return _(this, function (e) {
        return void 0 === e ? k.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Ie(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Ie(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Oe(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = "");
      }
      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return k.clone(this, e, t);
      });
    },
    html: function html(e) {
      return _(this, function (e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = k.htmlPrefilter(e);
          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
            }
            t = 0;
          } catch (e) {}
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return Ie(this, arguments, function (e) {
        var t = this.parentNode;
        k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), k.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    k.fn[e] = function (e) {
      for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
      }
      return this.pushStack(n);
    };
  });
  var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
    Fe = function Fe(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = C), t.getComputedStyle(e);
    },
    Be = new RegExp(re.join("|"), "i");
  function _e(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }
  function ze(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  !function () {
    function e() {
      if (u) {
        s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
        var e = C.getComputedStyle(u);
        n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null;
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s = E.createElement("div"),
      u = E.createElement("div");
    u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), a;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      }
    }));
  }();
  var Ue = ["Webkit", "Moz", "ms"],
    Xe = E.createElement("div").style,
    Ve = {};
  function Ge(e) {
    var t = k.cssProps[e] || Ve[e];
    return t || (e in Xe ? e : Ve[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
        n = Ue.length;
      while (n--) {
        if ((e = Ue[n] + t) in Xe) return e;
      }
    }(e) || e);
  }
  var Ye = /^(none|table(?!-c[ea]).+)/,
    Qe = /^--/,
    Je = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Ke = {
      letterSpacing: "0",
      fontWeight: "400"
    };
  function Ze(e, t, n) {
    var r = ne.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function et(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2) {
      "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
    }
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }
  function tt(e, t, n) {
    var r = Fe(e),
      i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
      o = i,
      a = _e(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if ($e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }
  function nt(e, t, n, r, i) {
    return new nt.prototype.init(e, t, n, r, i);
  }
  k.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = _e(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = V(t),
          u = Qe.test(t),
          l = e.style;
        if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
        o,
        a,
        s = V(t);
      return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), k.each(["height", "width"], function (e, u) {
    k.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function () {
          return tt(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
          i = Fe(e),
          o = !y.scrollboxSize() && "absolute" === i.position,
          a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
          s = n ? et(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s);
      }
    };
  }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), k.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    k.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
        }
        return n;
      }
    }, "margin" !== i && (k.cssHooks[i + o].set = Ze);
  }), k.fn.extend({
    css: function css(e, t) {
      return _(this, function (e, t, n) {
        var r,
          i,
          o = {},
          a = 0;
        if (Array.isArray(t)) {
          for (r = Fe(e), i = t.length; a < i; a++) {
            o[t[a]] = k.css(e, t[a], !1, r);
          }
          return o;
        }
        return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((k.Tween = nt).prototype = {
    constructor: nt,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = nt.propHooks[this.prop];
      return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
        n = nt.propHooks[this.prop];
      return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this;
    }
  }).init.prototype = nt.prototype, (nt.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = nt.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, k.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, k.fx = nt.prototype.init, k.fx.step = {};
  var rt,
    it,
    ot,
    at,
    st = /^(?:toggle|show|hide)$/,
    ut = /queueHooks$/;
  function lt() {
    it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick());
  }
  function ct() {
    return C.setTimeout(function () {
      rt = void 0;
    }), rt = Date.now();
  }
  function ft(e, t) {
    var n,
      r = 0,
      i = {
        height: e
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = re[r])] = i["padding" + n] = e;
    }
    return t && (i.opacity = i.width = e), i;
  }
  function pt(e, t, n) {
    for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }
  function dt(o, e, t) {
    var n,
      a,
      r = 0,
      i = dt.prefilters.length,
      s = k.Deferred().always(function () {
        delete u.elem;
      }),
      u = function u() {
        if (a) return !1;
        for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
          l.tweens[r].run(n);
        }
        return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
      },
      l = s.promise({
        elem: o,
        props: k.extend({}, e),
        opts: k.extend(!0, {
          specialEasing: {},
          easing: k.easing._default
        }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: rt || ct(),
        duration: t.duration,
        tweens: [],
        createTween: function createTween(e, t) {
          var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
          return l.tweens.push(n), n;
        },
        stop: function stop(e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) {
            l.tweens[t].run(1);
          }
          return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
        }
      }),
      c = l.props;
    for (!function (e, t) {
      var n, r, i, o, a;
      for (n in e) {
        if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }
    return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }
  k.Animation = k.extend(dt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return le(n.elem, e, ne.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(R);
      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && se(e),
        v = Q.get(e, "fxshow");
      for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], st.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }
          d[r] = v && v[r] || k.style(e, r);
        }
      }
      if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && fe([e], !0), p.done(function () {
          for (r in g || fe([e]), Q.remove(e, "fxshow"), d) {
            k.style(e, r, d[r]);
          }
        })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    }
  }), k.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? k.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
    }, r;
  }, k.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(se).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = k.isEmptyObject(t),
        o = k.speed(e, n, r),
        a = function a() {
          var e = dt(this, k.extend({}, t), o);
          (i || Q.get(this, "finish")) && e.stop(!0);
        };
      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };
      return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
          t = null != i && i + "queueHooks",
          n = k.timers,
          r = Q.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && ut.test(t) && a(r[t]);
        }
        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }
        !e && o || k.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
          t = Q.get(this),
          n = t[a + "queue"],
          r = t[a + "queueHooks"],
          i = k.timers,
          o = n ? n.length : 0;
        for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }
        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }
        delete t.finish;
      });
    }
  }), k.each(["toggle", "show", "hide"], function (e, r) {
    var i = k.fn[r];
    k.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n);
    };
  }), k.each({
    slideDown: ft("show"),
    slideUp: ft("hide"),
    slideToggle: ft("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    k.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), k.timers = [], k.fx.tick = function () {
    var e,
      t = 0,
      n = k.timers;
    for (rt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }
    n.length || k.fx.stop(), rt = void 0;
  }, k.fx.timer = function (e) {
    k.timers.push(e), k.fx.start();
  }, k.fx.interval = 13, k.fx.start = function () {
    it || (it = !0, lt());
  }, k.fx.stop = function () {
    it = null;
  }, k.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, k.fn.delay = function (r, e) {
    return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);
      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
  var ht,
    gt = k.expr.attrHandle;
  k.fn.extend({
    attr: function attr(e, t) {
      return _(this, k.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        k.removeAttr(this, e);
      });
    }
  }), k.extend({
    attr: function attr(e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
        r = 0,
        i = t && t.match(R);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), ht = {
    set: function set(e, t, n) {
      return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = gt[t] || k.find.attr;
    gt[t] = function (e, t, n) {
      var r,
        i,
        o = t.toLowerCase();
      return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r;
    };
  });
  var vt = /^(?:input|select|textarea|button)$/i,
    yt = /^(?:a|area)$/i;
  function mt(e) {
    return (e.match(R) || []).join(" ");
  }
  function xt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }
  function bt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [];
  }
  k.fn.extend({
    prop: function prop(e, t) {
      return _(this, k.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[k.propFix[e] || e];
      });
    }
  }), k.extend({
    prop: function prop(e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = k.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (k.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    k.propFix[this.toLowerCase()] = this;
  }), k.fn.extend({
    addClass: function addClass(t) {
      var e,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).addClass(t.call(this, e, xt(this)));
      });
      if ((e = bt(t)).length) while (n = this[u++]) {
        if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
          a = 0;
          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }
          i !== (s = mt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).removeClass(t.call(this, e, xt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = bt(t)).length) while (n = this[u++]) {
        if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
          a = 0;
          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }
          i !== (s = mt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
        a = "string" === o || Array.isArray(i);
      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        k(this).toggleClass(i.call(this, e, xt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;
        if (a) {
          t = 0, n = k(this), r = bt(i);
          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
        n,
        r = 0;
      t = " " + e + " ";
      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
      }
      return !1;
    }
  });
  var wt = /\r/g;
  k.fn.extend({
    val: function val(n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0;
    }
  }), k.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = k.find.attr(e, "value");
          return null != t ? t : mt(k.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
            n,
            r,
            i = e.options,
            o = e.selectedIndex,
            a = "select-one" === e.type,
            s = a ? null : [],
            u = a ? o + 1 : i.length;
          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = k(n).val(), a) return t;
              s.push(t);
            }
          }
          return s;
        },
        set: function set(e, t) {
          var n,
            r,
            i = e.options,
            o = k.makeArray(t),
            a = i.length;
          while (a--) {
            ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
          }
          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), k.each(["radio", "checkbox"], function () {
    k.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t);
      }
    }, y.checkOn || (k.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;
  var Tt = /^(?:focusinfocus|focusoutblur)$/,
    Ct = function Ct(e) {
      e.stopPropagation();
    };
  k.extend(k.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }
          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }
        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = k.extend(new k.Event(), n, {
        type: e,
        isSimulated: !0
      });
      k.event.trigger(r, null, t);
    }
  }), k.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        k.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return k.event.trigger(e, t, n, !0);
    }
  }), y.focusin || k.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      k.event.simulate(r, e.target, k.event.fix(e));
    };
    k.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this,
          t = Q.access(e, r);
        t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this,
          t = Q.access(e, r) - 1;
        t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r));
      }
    };
  });
  var Et = C.location,
    kt = Date.now(),
    St = /\?/;
  k.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t;
  };
  var Nt = /\[\]$/,
    At = /\r?\n/g,
    Dt = /^(?:submit|button|image|reset|file)$/i,
    jt = /^(?:input|select|textarea|keygen)/i;
  function qt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) k.each(e, function (e, t) {
      r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      qt(n + "[" + t + "]", e[t], r, i);
    }
  }
  k.param = function (e, t) {
    var n,
      r = [],
      i = function i(e, t) {
        var n = m(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      qt(n, e[n], t, i);
    }
    return r.join("&");
  }, k.fn.extend({
    serialize: function serialize() {
      return k.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = k.prop(this, "elements");
        return e ? k.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = k(this).val();
        return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(At, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(At, "\r\n")
        };
      }).get();
    }
  });
  var Lt = /%20/g,
    Ht = /#.*$/,
    Ot = /([?&])_=[^&]*/,
    Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Rt = /^(?:GET|HEAD)$/,
    Mt = /^\/\//,
    It = {},
    Wt = {},
    $t = "*/".concat("*"),
    Ft = E.createElement("a");
  function Bt(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
        r = 0,
        i = e.toLowerCase().match(R) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }
  function _t(t, i, o, a) {
    var s = {},
      u = t === Wt;
    function l(e) {
      var r;
      return s[e] = !0, k.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }
    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }
  function zt(e, t) {
    var n,
      r,
      i = k.ajaxSettings.flatOptions || {};
    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }
    return r && k.extend(!0, e, r), e;
  }
  Ft.href = Et.href, k.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Et.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": k.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
    },
    ajaxPrefilter: Bt(It),
    ajaxTransport: Bt(Wt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
        f,
        p,
        n,
        d,
        r,
        h,
        g,
        i,
        o,
        v = k.ajaxSetup({}, t),
        y = v.context || v,
        m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
        x = k.Deferred(),
        b = k.Callbacks("once memory"),
        w = v.statusCode || {},
        a = {},
        s = {},
        u = "canceled",
        T = {
          readyState: 0,
          getResponseHeader: function getResponseHeader(e) {
            var t;
            if (h) {
              if (!n) {
                n = {};
                while (t = Pt.exec(p)) {
                  n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                }
              }
              t = n[e.toLowerCase() + " "];
            }
            return null == t ? null : t.join(", ");
          },
          getAllResponseHeaders: function getAllResponseHeaders() {
            return h ? p : null;
          },
          setRequestHeader: function setRequestHeader(e, t) {
            return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
          },
          overrideMimeType: function overrideMimeType(e) {
            return null == h && (v.mimeType = e), this;
          },
          statusCode: function statusCode(e) {
            var t;
            if (e) if (h) T.always(e[T.status]);else for (t in e) {
              w[t] = [w[t], e[t]];
            }
            return this;
          },
          abort: function abort(e) {
            var t = e || u;
            return c && c.abort(t), l(0, t), this;
          }
        };
      if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) {
        r = E.createElement("a");
        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }
      if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;
      for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }
      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));
        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");
      function l(e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.contents,
            u = e.dataTypes;
          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }
          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }
              a || (a = i);
            }
            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), s = function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();
          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }
          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")));
      }
      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return k.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return k.get(e, void 0, t, "script");
    }
  }), k.each(["get", "post"], function (e, i) {
    k[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, k.isPlainObject(e) && e));
    };
  }), k._evalUrl = function (e, t) {
    return k.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        k.globalEval(e, t);
      }
    });
  }, k.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;
        while (e.firstElementChild) {
          e = e.firstElementChild;
        }
        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        k(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = k(this),
          t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        k(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        k(this).replaceWith(this.childNodes);
      }), this;
    }
  }), k.expr.pseudos.hidden = function (e) {
    return !k.expr.pseudos.visible(e);
  }, k.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, k.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var Ut = {
      0: 200,
      1223: 204
    },
    Xt = k.ajaxSettings.xhr();
  y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function (i) {
    var _o, a;
    if (y.cors || Xt && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
          r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }
        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }
        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");
        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), k.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), k.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return k.globalEval(e), e;
      }
    }
  }), k.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), k.ajaxTransport("script", function (n) {
    var r, _i;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = k("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });
  var Vt,
    Gt = [],
    Yt = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Gt.pop() || k.expando + "_" + kt++;
      return this[e] = !0, e;
    }
  }), k.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
      i,
      o,
      a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || k.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
    var r, i, o;
  }, k.fn.load = function (e, t, n) {
    var r,
      i,
      o,
      a = this,
      s = e.indexOf(" ");
    return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && k.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    k.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), k.expr.pseudos.animated = function (t) {
    return k.grep(k.timers, function (e) {
      return t === e.elem;
    }).length;
  }, k.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l = k.css(e, "position"),
        c = k(e),
        f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, k.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        k.offset.setOffset(this, t, e);
      });
      var e,
        n,
        r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
          t,
          n,
          r = this[0],
          i = {
            top: 0,
            left: 0
          };
        if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
          while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) {
            e = e.parentNode;
          }
          e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - k.css(r, "marginTop", !0),
          left: t.left - i.left - k.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;
        while (e && "static" === k.css(e, "position")) {
          e = e.offsetParent;
        }
        return e || ie;
      });
    }
  }), k.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;
    k.fn[t] = function (e) {
      return _(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), k.each(["top", "left"], function (e, n) {
    k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
      if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t;
    });
  }), k.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    k.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      k.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
          i = r || (!0 === e || !0 === t ? "margin" : "border");
        return _(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    k.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  }), k.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), k.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), k.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || k.guid++, i;
  }, k.holdReady = function (e) {
    e ? k.readyWait++ : k.ready(!0);
  }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function (e) {
    var t = k.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return k;
  });
  var Qt = C.jQuery,
    Jt = C.$;
  return k.noConflict = function (e) {
    return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k;
  }, e || (C.jQuery = C.$ = k), k;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/* == jquery mousewheel plugin == Version: 3.1.13, License: MIT License (MIT) */
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = a : a(jQuery);
}(function (a) {
  function b(b) {
    var g = b || window.event,
      h = i.call(arguments, 1),
      j = 0,
      l = 0,
      m = 0,
      n = 0,
      o = 0,
      p = 0;
    if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
      if (1 === g.deltaMode) {
        var q = a.data(this, "mousewheel-line-height");
        j *= q, m *= q, l *= q;
      } else if (2 === g.deltaMode) {
        var r = a.data(this, "mousewheel-page-height");
        j *= r, m *= r, l *= r;
      }
      if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
        var s = this.getBoundingClientRect();
        o = b.clientX - s.left, p = b.clientY - s.top;
      }
      return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h);
    }
  }
  function c() {
    f = null;
  }
  function d(a, b) {
    return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0;
  }
  var e,
    f,
    g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
    i = Array.prototype.slice;
  if (a.event.fixHooks) for (var j = g.length; j;) {
    a.event.fixHooks[g[--j]] = a.event.mouseHooks;
  }
  var k = a.event.special.mousewheel = {
    version: "3.1.12",
    setup: function setup() {
      if (this.addEventListener) for (var c = h.length; c;) {
        this.addEventListener(h[--c], b, !1);
      } else this.onmousewheel = b;
      a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
    },
    teardown: function teardown() {
      if (this.removeEventListener) for (var c = h.length; c;) {
        this.removeEventListener(h[--c], b, !1);
      } else this.onmousewheel = null;
      a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
    },
    getLineHeight: function getLineHeight(b) {
      var c = a(b),
        d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
      return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
    },
    getPageHeight: function getPageHeight(b) {
      return a(b).height();
    },
    settings: {
      adjustOldDeltas: !0,
      normalizeOffset: !0
    }
  };
  a.fn.extend({
    mousewheel: function mousewheel(a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
    },
    unmousewheel: function unmousewheel(a) {
      return this.unbind("mousewheel", a);
    }
  });
});
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = a : a(jQuery);
}(function (a) {
  function b(b) {
    var g = b || window.event,
      h = i.call(arguments, 1),
      j = 0,
      l = 0,
      m = 0,
      n = 0,
      o = 0,
      p = 0;
    if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
      if (1 === g.deltaMode) {
        var q = a.data(this, "mousewheel-line-height");
        j *= q, m *= q, l *= q;
      } else if (2 === g.deltaMode) {
        var r = a.data(this, "mousewheel-page-height");
        j *= r, m *= r, l *= r;
      }
      if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
        var s = this.getBoundingClientRect();
        o = b.clientX - s.left, p = b.clientY - s.top;
      }
      return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h);
    }
  }
  function c() {
    f = null;
  }
  function d(a, b) {
    return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0;
  }
  var e,
    f,
    g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
    i = Array.prototype.slice;
  if (a.event.fixHooks) for (var j = g.length; j;) {
    a.event.fixHooks[g[--j]] = a.event.mouseHooks;
  }
  var k = a.event.special.mousewheel = {
    version: "3.1.12",
    setup: function setup() {
      if (this.addEventListener) for (var c = h.length; c;) {
        this.addEventListener(h[--c], b, !1);
      } else this.onmousewheel = b;
      a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
    },
    teardown: function teardown() {
      if (this.removeEventListener) for (var c = h.length; c;) {
        this.removeEventListener(h[--c], b, !1);
      } else this.onmousewheel = null;
      a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
    },
    getLineHeight: function getLineHeight(b) {
      var c = a(b),
        d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
      return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
    },
    getPageHeight: function getPageHeight(b) {
      return a(b).height();
    },
    settings: {
      adjustOldDeltas: !0,
      normalizeOffset: !0
    }
  };
  a.fn.extend({
    mousewheel: function mousewheel(a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
    },
    unmousewheel: function unmousewheel(a) {
      return this.unbind("mousewheel", a);
    }
  });
});
/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
!function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document);
}(function (e) {
  !function (t) {
    var o = "function" == typeof define && define.amd,
      a = "undefined" != typeof module && module.exports,
      n = "https:" == document.location.protocol ? "https:" : "http:",
      i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
    o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))), t();
  }(function () {
    var t,
      o = "mCustomScrollbar",
      a = "mCS",
      n = ".mCustomScrollbar",
      i = {
        setTop: 0,
        setLeft: 0,
        axis: "y",
        scrollbarPosition: "inside",
        scrollInertia: 950,
        autoDraggerLength: !0,
        alwaysShowScrollbar: 0,
        snapOffset: 0,
        mouseWheel: {
          enable: !0,
          scrollAmount: "auto",
          axis: "y",
          deltaFactor: "auto",
          disableOver: ["select", "option", "keygen", "datalist", "textarea"]
        },
        scrollButtons: {
          scrollType: "stepless",
          scrollAmount: "auto"
        },
        keyboard: {
          enable: !0,
          scrollType: "stepless",
          scrollAmount: "auto"
        },
        contentTouchScroll: 25,
        documentTouchScroll: !0,
        advanced: {
          autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
          updateOnContentResize: !0,
          updateOnImageLoad: "auto",
          autoUpdateTimeout: 60
        },
        theme: "light",
        callbacks: {
          onTotalScrollOffset: 0,
          onTotalScrollBackOffset: 0,
          alwaysTriggerOffsets: !0
        }
      },
      r = 0,
      l = {},
      s = window.attachEvent && !window.addEventListener ? 1 : 0,
      c = !1,
      d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
      u = {
        init: function init(t) {
          var t = e.extend(!0, {}, i, t),
            o = f.call(this);
          if (t.live) {
            var s = t.liveSelector || this.selector || n,
              c = e(s);
            if ("off" === t.live) return void m(s);
            l[s] = setTimeout(function () {
              c.mCustomScrollbar(t), "once" === t.live && c.length && m(s);
            }, 500);
          } else m(s);
          return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : p(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != _typeof(t.mouseWheel) && 1 == t.mouseWheel && (t.mouseWheel = {
            enable: !0,
            scrollAmount: "auto",
            axis: "y",
            preventDefault: !1,
            deltaFactor: "auto",
            normalizeDelta: !1,
            invert: !1
          }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), h(t), e(o).each(function () {
            var o = e(this);
            if (!o.data(a)) {
              o.data(a, {
                idx: ++r,
                opt: t,
                scrollRatio: {
                  y: null,
                  x: null
                },
                overflowed: null,
                contentReset: {
                  y: null,
                  x: null
                },
                bindEvents: !1,
                tweenRunning: !1,
                sequential: {},
                langDir: o.css("direction"),
                cbOffsets: null,
                trigger: null,
                poll: {
                  size: {
                    o: 0,
                    n: 0
                  },
                  img: {
                    o: 0,
                    n: 0
                  },
                  change: {
                    o: 0,
                    n: 0
                  }
                }
              });
              var n = o.data(a),
                i = n.opt,
                l = o.data("mcs-axis"),
                s = o.data("mcs-scrollbar-position"),
                c = o.data("mcs-theme");
              l && (i.axis = l), s && (i.scrollbarPosition = s), c && (i.theme = c, h(i)), v.call(this), n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this), e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o);
            }
          });
        },
        update: function update(t, o) {
          var n = t || f.call(this);
          return e(n).each(function () {
            var t = e(this);
            if (t.data(a)) {
              var n = t.data(a),
                i = n.opt,
                r = e("#mCSB_" + n.idx + "_container"),
                l = e("#mCSB_" + n.idx),
                s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
              if (!r.length) return;
              n.tweenRunning && Q(t), o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), l.css("max-height", "none"), l.height() !== t.height() && l.css("max-height", t.height()), _.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)), n.overflowed = y.call(this), M.call(this), i.autoDraggerLength && S.call(this), b.call(this), T.call(this);
              var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
              "x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (G(t, c[0].toString(), {
                dir: "y",
                dur: 0,
                overwrite: "none"
              }), n.contentReset.y = null) : (B.call(this), "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && G(t, c[1].toString(), {
                dir: "x",
                dur: 0,
                overwrite: "none"
              }))), "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (G(t, c[1].toString(), {
                dir: "x",
                dur: 0,
                overwrite: "none"
              }), n.contentReset.x = null) : (B.call(this), "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && G(t, c[0].toString(), {
                dir: "y",
                dur: 0,
                overwrite: "none"
              }))), o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), N.call(this);
            }
          });
        },
        scrollTo: function scrollTo(t, o) {
          if ("undefined" != typeof t && null != t) {
            var n = f.call(this);
            return e(n).each(function () {
              var n = e(this);
              if (n.data(a)) {
                var i = n.data(a),
                  r = i.opt,
                  l = {
                    trigger: "external",
                    scrollInertia: r.scrollInertia,
                    scrollEasing: "mcsEaseInOut",
                    moveDragger: !1,
                    timeout: 60,
                    callbacks: !0,
                    onStart: !0,
                    onUpdate: !0,
                    onComplete: !0
                  },
                  s = e.extend(!0, {}, l, o),
                  c = Y.call(this, t),
                  d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                c[0] = X.call(this, c[0], "y"), c[1] = X.call(this, c[1], "x"), s.moveDragger && (c[0] *= i.scrollRatio.y, c[1] *= i.scrollRatio.x), s.dur = ne() ? 0 : d, setTimeout(function () {
                  null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y", s.overwrite = "all", G(n, c[0].toString(), s)), null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x", s.overwrite = "none", G(n, c[1].toString(), s));
                }, s.timeout);
              }
            });
          }
        },
        stop: function stop() {
          var t = f.call(this);
          return e(t).each(function () {
            var t = e(this);
            t.data(a) && Q(t);
          });
        },
        disable: function disable(t) {
          var o = f.call(this);
          return e(o).each(function () {
            var o = e(this);
            if (o.data(a)) {
              o.data(a);
              N.call(this, "remove"), k.call(this), t && B.call(this), M.call(this, !0), o.addClass(d[3]);
            }
          });
        },
        destroy: function destroy() {
          var t = f.call(this);
          return e(t).each(function () {
            var n = e(this);
            if (n.data(a)) {
              var i = n.data(a),
                r = i.opt,
                l = e("#mCSB_" + i.idx),
                s = e("#mCSB_" + i.idx + "_container"),
                c = e(".mCSB_" + i.idx + "_scrollbar");
              r.live && m(r.liveSelector || e(t).selector), N.call(this, "remove"), k.call(this), B.call(this), n.removeData(a), $(this, "mcs"), c.remove(), s.find("img." + d[2]).removeClass(d[2]), l.replaceWith(s.contents()), n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4]);
            }
          });
        }
      },
      f = function f() {
        return "object" != _typeof(e(this)) || e(this).length < 1 ? n : this;
      },
      h = function h(t) {
        var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
          a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
          n = ["minimal", "minimal-dark"],
          i = ["minimal", "minimal-dark"],
          r = ["minimal", "minimal-dark"];
        t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition;
      },
      m = function m(e) {
        l[e] && (clearTimeout(l[e]), $(l, e));
      },
      p = function p(e) {
        return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y";
      },
      g = function g(e) {
        return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless";
      },
      v = function v() {
        var t = e(this),
          n = t.data(a),
          i = n.opt,
          r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
          l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
          s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical",
          c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0],
          u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
          f = i.autoHideScrollbar ? " " + d[6] : "",
          h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
        i.setWidth && t.css("width", i.setWidth), i.setHeight && t.css("height", i.setHeight), i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft, t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + n.langDir + "' /></div>");
        var m = e("#mCSB_" + n.idx),
          p = e("#mCSB_" + n.idx + "_container");
        "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)), "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), p.wrap(u)), w.call(this);
        var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
        g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width());
      },
      x = function x(t) {
        var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function () {
            return e(this).outerWidth(!0);
          }).get())],
          a = t.parent().width();
        return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%";
      },
      _ = function _() {
        var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = e("#mCSB_" + o.idx + "_container");
        if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
          i.css({
            width: "auto",
            "min-width": 0,
            "overflow-x": "scroll"
          });
          var r = Math.ceil(i[0].scrollWidth);
          3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width() ? i.css({
            width: r,
            "min-width": "100%",
            "overflow-x": "inherit"
          }) : i.css({
            "overflow-x": "inherit",
            position: "absolute"
          }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
            width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left),
            "min-width": "100%",
            position: "relative"
          }).unwrap();
        }
      },
      w = function w() {
        var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = e(".mCSB_" + o.idx + "_scrollbar:first"),
          r = oe(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "",
          l = ["<a href='#' class='" + d[13] + "' " + r + " />", "<a href='#' class='" + d[14] + "' " + r + " />", "<a href='#' class='" + d[15] + "' " + r + " />", "<a href='#' class='" + d[16] + "' " + r + " />"],
          s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];
        n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3]);
      },
      S = function S() {
        var t = e(this),
          o = t.data(a),
          n = e("#mCSB_" + o.idx),
          i = e("#mCSB_" + o.idx + "_container"),
          r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
          l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)],
          c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())],
          d = s && c[1] < c[0] ? c[0] : c[1],
          u = s && c[3] < c[2] ? c[2] : c[3];
        r[0].css({
          height: d,
          "max-height": r[0].parent().height() - 10
        }).find(".mCSB_dragger_bar").css({
          "line-height": c[0] + "px"
        }), r[1].css({
          width: u,
          "max-width": r[1].parent().width() - 10
        });
      },
      b = function b() {
        var t = e(this),
          o = t.data(a),
          n = e("#mCSB_" + o.idx),
          i = e("#mCSB_" + o.idx + "_container"),
          r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
          l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()],
          s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
        o.scrollRatio = {
          y: s[0],
          x: s[1]
        };
      },
      C = function C(e, t, o) {
        var a = o ? d[0] + "_expanded" : "",
          n = e.closest(".mCSB_scrollTools");
        "active" === t ? (e.toggleClass(d[0] + " " + a), n.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), n.removeClass(d[1])) : (e.addClass(d[0]), n.addClass(d[1])));
      },
      y = function y() {
        var t = e(this),
          o = t.data(a),
          n = e("#mCSB_" + o.idx),
          i = e("#mCSB_" + o.idx + "_container"),
          r = null == o.overflowed ? i.height() : i.outerHeight(!1),
          l = null == o.overflowed ? i.width() : i.outerWidth(!1),
          s = i[0].scrollHeight,
          c = i[0].scrollWidth;
        return s > r && (r = s), c > l && (l = c), [r > n.height(), l > n.width()];
      },
      B = function B() {
        var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = e("#mCSB_" + o.idx),
          r = e("#mCSB_" + o.idx + "_container"),
          l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
        if (Q(t), ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0), G(t, "_resetY")), "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) {
          var s = dx = 0;
          "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1), dx = Math.abs(s / o.scrollRatio.x)), r.css("left", s), l[1].css("left", dx), G(t, "_resetX");
        }
      },
      T = function T() {
        function t() {
          r = setTimeout(function () {
            e.event.special.mousewheel ? (clearTimeout(r), W.call(o[0])) : t();
          }, 100);
        }
        var o = e(this),
          n = o.data(a),
          i = n.opt;
        if (!n.bindEvents) {
          if (I.call(this), i.contentTouchScroll && D.call(this), E.call(this), i.mouseWheel.enable) {
            var r;
            t();
          }
          P.call(this), U.call(this), i.advanced.autoScrollOnFocus && H.call(this), i.scrollButtons.enable && F.call(this), i.keyboard.enable && q.call(this), n.bindEvents = !0;
        }
      },
      k = function k() {
        var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = a + "_" + o.idx,
          r = ".mCSB_" + o.idx + "_scrollbar",
          l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a"),
          s = e("#mCSB_" + o.idx + "_container");
        n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)), n.advanced.extraDraggableSelectors && l.add(e(n.advanced.extraDraggableSelectors)), o.bindEvents && (e(document).add(e(!A() || top.document)).unbind("." + i), l.each(function () {
          e(this).unbind("." + i);
        }), clearTimeout(t[0]._focusTimeout), $(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), $(o.sequential, "step"), clearTimeout(s[0].onCompleteTimeout), $(s[0], "onCompleteTimeout"), o.bindEvents = !1);
      },
      M = function M(t) {
        var o = e(this),
          n = o.data(a),
          i = n.opt,
          r = e("#mCSB_" + n.idx + "_container_wrapper"),
          l = r.length ? r : e("#mCSB_" + n.idx + "_container"),
          s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")],
          c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
        "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"), l.removeClass(d[10])) : (s[0].css("display", "none"), l.addClass(d[10])), l.addClass(d[8]))), "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"), l.removeClass(d[11])) : (s[1].css("display", "none"), l.addClass(d[11])), l.addClass(d[9]))), n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5]);
      },
      O = function O(t) {
        var o = t.type,
          a = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null,
          n = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
        switch (o) {
          case "pointerdown":
          case "MSPointerDown":
          case "pointermove":
          case "MSPointerMove":
          case "pointerup":
          case "MSPointerUp":
            return a ? [t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
          case "touchstart":
          case "touchmove":
          case "touchend":
            var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
              r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
            return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];
          default:
            return a ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1] : [t.pageY, t.pageX, !1];
        }
      },
      I = function I() {
        function t(e, t, a, n) {
          if (h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0, o.attr("id") === f[1]) var i = "x",
            s = (o[0].offsetLeft - t + n) * l.scrollRatio.x;else var i = "y",
            s = (o[0].offsetTop - e + a) * l.scrollRatio.y;
          G(r, s.toString(), {
            dir: i,
            drag: !0
          });
        }
        var o,
          n,
          i,
          r = e(this),
          l = r.data(a),
          d = l.opt,
          u = a + "_" + l.idx,
          f = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"],
          h = e("#mCSB_" + l.idx + "_container"),
          m = e("#" + f[0] + ",#" + f[1]),
          p = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m,
          g = d.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!A() || top.document);
        m.bind("contextmenu." + u, function (e) {
          e.preventDefault();
        }).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function (t) {
          if (t.stopImmediatePropagation(), t.preventDefault(), ee(t)) {
            c = !0, s && (document.onselectstart = function () {
              return !1;
            }), L.call(h, !1), Q(r), o = e(this);
            var a = o.offset(),
              l = O(t)[0] - a.top,
              u = O(t)[1] - a.left,
              f = o.height() + a.top,
              m = o.width() + a.left;
            f > l && l > 0 && m > u && u > 0 && (n = l, i = u), C(o, "active", d.autoExpandScrollbar);
          }
        }).bind("touchmove." + u, function (e) {
          e.stopImmediatePropagation(), e.preventDefault();
          var a = o.offset(),
            r = O(e)[0] - a.top,
            l = O(e)[1] - a.left;
          t(n, i, r, l);
        }), e(document).add(g).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function (e) {
          if (o) {
            var a = o.offset(),
              r = O(e)[0] - a.top,
              l = O(e)[1] - a.left;
            if (n === r && i === l) return;
            t(n, i, r, l);
          }
        }).add(p).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function () {
          o && (C(o, "active", d.autoExpandScrollbar), o = null), c = !1, s && (document.onselectstart = null), L.call(h, !0);
        });
      },
      D = function D() {
        function o(e) {
          if (!te(e) || c || O(e)[2]) return void (t = 0);
          t = 1, b = 0, C = 0, d = 1, y.removeClass("mCS_touch_action");
          var o = I.offset();
          u = O(e)[0] - o.top, f = O(e)[1] - o.left, z = [O(e)[0], O(e)[1]];
        }
        function n(e) {
          if (te(e) && !c && !O(e)[2] && (T.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!C || b) && d)) {
            g = K();
            var t = M.offset(),
              o = O(e)[0] - t.top,
              a = O(e)[1] - t.left,
              n = "mcsLinearOut";
            if (E.push(o), W.push(a), z[2] = Math.abs(O(e)[0] - z[0]), z[3] = Math.abs(O(e)[1] - z[1]), B.overflowed[0]) var i = D[0].parent().height() - D[0].height(),
              r = u - o > 0 && o - u > -(i * B.scrollRatio.y) && (2 * z[3] < z[2] || "yx" === T.axis);
            if (B.overflowed[1]) var l = D[1].parent().width() - D[1].width(),
              h = f - a > 0 && a - f > -(l * B.scrollRatio.x) && (2 * z[2] < z[3] || "yx" === T.axis);
            r || h ? (U || e.preventDefault(), b = 1) : (C = 1, y.addClass("mCS_touch_action")), U && e.preventDefault(), w = "yx" === T.axis ? [u - o, f - a] : "x" === T.axis ? [null, f - a] : [u - o, null], I[0].idleTimer = 250, B.overflowed[0] && s(w[0], R, n, "y", "all", !0), B.overflowed[1] && s(w[1], R, n, "x", L, !0);
          }
        }
        function i(e) {
          if (!te(e) || c || O(e)[2]) return void (t = 0);
          t = 1, e.stopImmediatePropagation(), Q(y), p = K();
          var o = M.offset();
          h = O(e)[0] - o.top, m = O(e)[1] - o.left, E = [], W = [];
        }
        function r(e) {
          if (te(e) && !c && !O(e)[2]) {
            d = 0, e.stopImmediatePropagation(), b = 0, C = 0, v = K();
            var t = M.offset(),
              o = O(e)[0] - t.top,
              a = O(e)[1] - t.left;
            if (!(v - g > 30)) {
              _ = 1e3 / (v - p);
              var n = "mcsEaseOut",
                i = 2.5 > _,
                r = i ? [E[E.length - 2], W[W.length - 2]] : [0, 0];
              x = i ? [o - r[0], a - r[1]] : [o - h, a - m];
              var u = [Math.abs(x[0]), Math.abs(x[1])];
              _ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _];
              var f = [Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]), Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1])];
              w = "yx" === T.axis ? [f[0], f[1]] : "x" === T.axis ? [null, f[1]] : [f[0], null], S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia];
              var y = parseInt(T.contentTouchScroll) || 0;
              w[0] = u[0] > y ? w[0] : 0, w[1] = u[1] > y ? w[1] : 0, B.overflowed[0] && s(w[0], S[0], n, "y", L, !1), B.overflowed[1] && s(w[1], S[1], n, "x", L, !1);
            }
          }
        }
        function l(e, t) {
          var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
          return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3];
        }
        function s(e, t, o, a, n, i) {
          e && G(y, e.toString(), {
            dur: t,
            scrollEasing: o,
            dir: a,
            overwrite: n,
            drag: i
          });
        }
        var d,
          u,
          f,
          h,
          m,
          p,
          g,
          v,
          x,
          _,
          w,
          S,
          b,
          C,
          y = e(this),
          B = y.data(a),
          T = B.opt,
          k = a + "_" + B.idx,
          M = e("#mCSB_" + B.idx),
          I = e("#mCSB_" + B.idx + "_container"),
          D = [e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal")],
          E = [],
          W = [],
          R = 0,
          L = "yx" === T.axis ? "none" : "all",
          z = [],
          P = I.find("iframe"),
          H = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k],
          U = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
        I.bind(H[0], function (e) {
          o(e);
        }).bind(H[1], function (e) {
          n(e);
        }), M.bind(H[0], function (e) {
          i(e);
        }).bind(H[2], function (e) {
          r(e);
        }), P.length && P.each(function () {
          e(this).bind("load", function () {
            A(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function (e) {
              o(e), i(e);
            }).bind(H[1], function (e) {
              n(e);
            }).bind(H[2], function (e) {
              r(e);
            });
          });
        });
      },
      E = function E() {
        function o() {
          return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0;
        }
        function n(e, t, o) {
          d.type = o && i ? "stepped" : "stepless", d.scrollAmount = 10, j(r, e, t, "mcsLinearOut", o ? 60 : null);
        }
        var i,
          r = e(this),
          l = r.data(a),
          s = l.opt,
          d = l.sequential,
          u = a + "_" + l.idx,
          f = e("#mCSB_" + l.idx + "_container"),
          h = f.parent();
        f.bind("mousedown." + u, function () {
          t || i || (i = 1, c = !0);
        }).add(document).bind("mousemove." + u, function (e) {
          if (!t && i && o()) {
            var a = f.offset(),
              r = O(e)[0] - a.top + f[0].offsetTop,
              c = O(e)[1] - a.left + f[0].offsetLeft;
            r > 0 && r < h.height() && c > 0 && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)), "y" !== s.axis && l.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39)));
          }
        }).bind("mouseup." + u + " dragend." + u, function () {
          t || (i && (i = 0, n("off", null)), c = !1);
        });
      },
      W = function W() {
        function t(t, a) {
          if (Q(o), !z(o, t.target)) {
            var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
              d = i.scrollInertia;
            if ("x" === i.axis || "x" === i.mouseWheel.axis) var u = "x",
              f = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)],
              h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.width() ? .9 * l.width() : f[0],
              m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft),
              p = c[1][0].offsetLeft,
              g = c[1].parent().width() - c[1].width(),
              v = "y" === i.mouseWheel.axis ? t.deltaY || a : t.deltaX;else var u = "y",
              f = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)],
              h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.height() ? .9 * l.height() : f[0],
              m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop),
              p = c[0][0].offsetTop,
              g = c[0].parent().height() - c[0].height(),
              v = t.deltaY || a;
            "y" === u && !n.overflowed[0] || "x" === u && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v), i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== p || 0 > v && p !== g || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && (h = t.deltaFactor, d = 17), G(o, (m - v * h).toString(), {
              dir: u,
              dur: d
            }));
          }
        }
        if (e(this).data(a)) {
          var o = e(this),
            n = o.data(a),
            i = n.opt,
            r = a + "_" + n.idx,
            l = e("#mCSB_" + n.idx),
            c = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
            d = e("#mCSB_" + n.idx + "_container").find("iframe");
          d.length && d.each(function () {
            e(this).bind("load", function () {
              A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function (e, o) {
                t(e, o);
              });
            });
          }), l.bind("mousewheel." + r, function (e, o) {
            t(e, o);
          });
        }
      },
      R = new Object(),
      A = function A(t) {
        var o = !1,
          a = !1,
          n = null;
        if (void 0 === t ? a = "#empty" : void 0 !== e(t).attr("id") && (a = e(t).attr("id")), a !== !1 && void 0 !== R[a]) return R[a];
        if (t) {
          try {
            var i = t.contentDocument || t.contentWindow.document;
            n = i.body.innerHTML;
          } catch (r) {}
          o = null !== n;
        } else {
          try {
            var i = top.document;
            n = i.body.innerHTML;
          } catch (r) {}
          o = null !== n;
        }
        return a !== !1 && (R[a] = o), o;
      },
      L = function L(e) {
        var t = this.find("iframe");
        if (t.length) {
          var o = e ? "auto" : "none";
          t.css("pointer-events", o);
        }
      },
      z = function z(t, o) {
        var n = o.nodeName.toLowerCase(),
          i = t.data(a).opt.mouseWheel.disableOver,
          r = ["select", "textarea"];
        return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"));
      },
      P = function P() {
        var t,
          o = e(this),
          n = o.data(a),
          i = a + "_" + n.idx,
          r = e("#mCSB_" + n.idx + "_container"),
          l = r.parent(),
          s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]);
        s.bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, function (o) {
          c = !0, e(o.target).hasClass("mCSB_dragger") || (t = 1);
        }).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, function () {
          c = !1;
        }).bind("click." + i, function (a) {
          if (t && (t = 0, e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail"))) {
            Q(o);
            var i = e(this),
              s = i.find(".mCSB_dragger");
            if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
              if (!n.overflowed[1]) return;
              var c = "x",
                u = a.pageX > s.offset().left ? -1 : 1,
                f = Math.abs(r[0].offsetLeft) - u * (.9 * l.width());
            } else {
              if (!n.overflowed[0]) return;
              var c = "y",
                u = a.pageY > s.offset().top ? -1 : 1,
                f = Math.abs(r[0].offsetTop) - u * (.9 * l.height());
            }
            G(o, f.toString(), {
              dir: c,
              scrollEasing: "mcsEaseInOut"
            });
          }
        });
      },
      H = function H() {
        var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = a + "_" + o.idx,
          r = e("#mCSB_" + o.idx + "_container"),
          l = r.parent();
        r.bind("focusin." + i, function () {
          var o = e(document.activeElement),
            a = r.find(".mCustomScrollBox").length,
            i = 0;
          o.is(n.advanced.autoScrollOnFocus) && (Q(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = a ? (i + 17) * a : 0, t[0]._focusTimeout = setTimeout(function () {
            var e = [ae(o)[0], ae(o)[1]],
              a = [r[0].offsetTop, r[0].offsetLeft],
              s = [a[0] + e[0] >= 0 && a[0] + e[0] < l.height() - o.outerHeight(!1), a[1] + e[1] >= 0 && a[0] + e[1] < l.width() - o.outerWidth(!1)],
              c = "yx" !== n.axis || s[0] || s[1] ? "all" : "none";
            "x" === n.axis || s[0] || G(t, e[0].toString(), {
              dir: "y",
              scrollEasing: "mcsEaseInOut",
              overwrite: c,
              dur: i
            }), "y" === n.axis || s[1] || G(t, e[1].toString(), {
              dir: "x",
              scrollEasing: "mcsEaseInOut",
              overwrite: c,
              dur: i
            });
          }, t[0]._focusTimer));
        });
      },
      U = function U() {
        var t = e(this),
          o = t.data(a),
          n = a + "_" + o.idx,
          i = e("#mCSB_" + o.idx + "_container").parent();
        i.bind("scroll." + n, function () {
          0 === i.scrollTop() && 0 === i.scrollLeft() || e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden");
        });
      },
      F = function F() {
        var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = o.sequential,
          r = a + "_" + o.idx,
          l = ".mCSB_" + o.idx + "_scrollbar",
          s = e(l + ">a");
        s.bind("contextmenu." + r, function (e) {
          e.preventDefault();
        }).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function (a) {
          function r(e, o) {
            i.scrollAmount = n.scrollButtons.scrollAmount, j(t, e, o);
          }
          if (a.preventDefault(), ee(a)) {
            var l = e(this).attr("class");
            switch (i.type = n.scrollButtons.scrollType, a.type) {
              case "mousedown":
              case "touchstart":
              case "pointerdown":
              case "MSPointerDown":
                if ("stepped" === i.type) return;
                c = !0, o.tweenRunning = !1, r("on", l);
                break;
              case "mouseup":
              case "touchend":
              case "pointerup":
              case "MSPointerUp":
              case "mouseout":
              case "pointerout":
              case "MSPointerOut":
                if ("stepped" === i.type) return;
                c = !1, i.dir && r("off", l);
                break;
              case "click":
                if ("stepped" !== i.type || o.tweenRunning) return;
                r("on", l);
            }
          }
        });
      },
      q = function q() {
        function t(t) {
          function a(e, t) {
            r.type = i.keyboard.scrollType, r.scrollAmount = i.keyboard.scrollAmount, "stepped" === r.type && n.tweenRunning || j(o, e, t);
          }
          switch (t.type) {
            case "blur":
              n.tweenRunning && r.dir && a("off", null);
              break;
            case "keydown":
            case "keyup":
              var l = t.keyCode ? t.keyCode : t.which,
                s = "on";
              if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) {
                if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1]) return;
                "keyup" === t.type && (s = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), a(s, l));
              } else if (33 === l || 34 === l) {
                if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                  Q(o);
                  var f = 34 === l ? -1 : 1;
                  if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                    m = Math.abs(c[0].offsetLeft) - f * (.9 * d.width());else var h = "y",
                    m = Math.abs(c[0].offsetTop) - f * (.9 * d.height());
                  G(o, m.toString(), {
                    dir: h,
                    scrollEasing: "mcsEaseInOut"
                  });
                }
              } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
                if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                  m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;else var h = "y",
                  m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                G(o, m.toString(), {
                  dir: h,
                  scrollEasing: "mcsEaseInOut"
                });
              }
          }
        }
        var o = e(this),
          n = o.data(a),
          i = n.opt,
          r = n.sequential,
          l = a + "_" + n.idx,
          s = e("#mCSB_" + n.idx),
          c = e("#mCSB_" + n.idx + "_container"),
          d = c.parent(),
          u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
          f = c.find("iframe"),
          h = ["blur." + l + " keydown." + l + " keyup." + l];
        f.length && f.each(function () {
          e(this).bind("load", function () {
            A(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function (e) {
              t(e);
            });
          });
        }), s.attr("tabindex", "0").bind(h[0], function (e) {
          t(e);
        });
      },
      j = function j(t, o, n, i, r) {
        function l(e) {
          u.snapAmount && (f.scrollAmount = u.snapAmount instanceof Array ? "x" === f.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount);
          var o = "stepped" !== f.type,
            a = r ? r : e ? o ? p / 1.5 : g : 1e3 / 60,
            n = e ? o ? 7.5 : 40 : 2.5,
            s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
            d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
            m = "x" === f.dir[0] ? s[1] + f.dir[1] * (d[1] * n) : s[0] + f.dir[1] * (d[0] * n),
            v = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount),
            x = "auto" !== f.scrollAmount ? v : m,
            _ = i ? i : e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
            w = !!e;
          return e && 17 > a && (x = "x" === f.dir[0] ? s[1] : s[0]), G(t, x.toString(), {
            dir: f.dir[0],
            scrollEasing: _,
            dur: a,
            onComplete: w
          }), e ? void (f.dir = !1) : (clearTimeout(f.step), void (f.step = setTimeout(function () {
            l();
          }, a)));
        }
        function s() {
          clearTimeout(f.step), $(f, "step"), Q(t);
        }
        var c = t.data(a),
          u = c.opt,
          f = c.sequential,
          h = e("#mCSB_" + c.idx + "_container"),
          m = "stepped" === f.type,
          p = u.scrollInertia < 26 ? 26 : u.scrollInertia,
          g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
        switch (o) {
          case "on":
            if (f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1], Q(t), oe(n) && "stepped" === f.type) return;
            l(m);
            break;
          case "off":
            s(), (m || c.tweenRunning && f.dir) && l(!0);
        }
      },
      Y = function Y(t) {
        var o = e(this).data(a).opt,
          n = [];
        return "function" == typeof t && (t = t()), t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n;
      },
      X = function X(t, o) {
        if (null != t && "undefined" != typeof t) {
          var n = e(this),
            i = n.data(a),
            r = i.opt,
            l = e("#mCSB_" + i.idx + "_container"),
            s = l.parent(),
            c = _typeof(t);
          o || (o = "x" === r.axis ? "x" : "y");
          var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height(),
            f = "x" === o ? l[0].offsetLeft : l[0].offsetTop,
            h = "x" === o ? "left" : "top";
          switch (c) {
            case "function":
              return t();
            case "object":
              var m = t.jquery ? t : e(t);
              if (!m.length) return;
              return "x" === o ? ae(m)[1] : ae(m)[0];
            case "string":
            case "number":
              if (oe(t)) return Math.abs(t);
              if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
              if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1]));
              if (-1 !== t.indexOf("+=")) {
                var p = f + parseInt(t.split("+=")[1]);
                return p >= 0 ? 0 : Math.abs(p);
              }
              if (-1 !== t.indexOf("px") && oe(t.split("px")[0])) return Math.abs(t.split("px")[0]);
              if ("top" === t || "left" === t) return 0;
              if ("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1));
              if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1));
              if ("first" === t || "last" === t) {
                var m = l.find(":" + t);
                return "x" === o ? ae(m)[1] : ae(m)[0];
              }
              return e(t).length ? "x" === o ? ae(e(t))[1] : ae(e(t))[0] : (l.css(h, t), void u.update.call(null, n[0]));
          }
        }
      },
      N = function N(t) {
        function o() {
          return clearTimeout(f[0].autoUpdate), 0 === l.parents("html").length ? void (l = null) : void (f[0].autoUpdate = setTimeout(function () {
            return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(), s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n, void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight + l[0].offsetWidth, s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n, void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = f.find("img").length, s.poll.img.n === s.poll.img.o) ? void ((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n, void f.find("img").each(function () {
              n(this);
            }));
          }, c.advanced.autoUpdateTimeout));
        }
        function n(t) {
          function o(e, t) {
            return function () {
              return t.apply(e, arguments);
            };
          }
          function a() {
            this.onload = null, e(t).addClass(d[2]), r(2);
          }
          if (e(t).hasClass(d[2])) return void r();
          var n = new Image();
          n.onload = o(n, a), n.src = t.src;
        }
        function i() {
          c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*");
          var e = 0,
            t = f.find(c.advanced.updateOnSelectorChange);
          return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function () {
            e += this.offsetHeight + this.offsetWidth;
          }), e;
        }
        function r(e) {
          clearTimeout(f[0].autoUpdate), u.update.call(null, l[0], e);
        }
        var l = e(this),
          s = l.data(a),
          c = s.opt,
          f = e("#mCSB_" + s.idx + "_container");
        return t ? (clearTimeout(f[0].autoUpdate), void $(f[0], "autoUpdate")) : void o();
      },
      V = function V(e, t, o) {
        return Math.round(e / t) * t - o;
      },
      Q = function Q(t) {
        var o = t.data(a),
          n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");
        n.each(function () {
          Z.call(this);
        });
      },
      G = function G(t, o, n) {
        function i(e) {
          return s && c.callbacks[e] && "function" == typeof c.callbacks[e];
        }
        function r() {
          return [c.callbacks.alwaysTriggerOffsets || w >= S[0] + y, c.callbacks.alwaysTriggerOffsets || -B >= w];
        }
        function l() {
          var e = [h[0].offsetTop, h[0].offsetLeft],
            o = [x[0].offsetTop, x[0].offsetLeft],
            a = [h.outerHeight(!1), h.outerWidth(!1)],
            i = [f.height(), f.width()];
          t[0].mcs = {
            content: h,
            top: e[0],
            left: e[1],
            draggerTop: o[0],
            draggerLeft: o[1],
            topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])),
            leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])),
            direction: n.dir
          };
        }
        var s = t.data(a),
          c = s.opt,
          d = {
            trigger: "internal",
            dir: "y",
            scrollEasing: "mcsEaseOut",
            drag: !1,
            dur: c.scrollInertia,
            overwrite: "all",
            callbacks: !0,
            onStart: !0,
            onUpdate: !0,
            onComplete: !0
          },
          n = e.extend(d, n),
          u = [n.dur, n.drag ? 0 : n.dur],
          f = e("#mCSB_" + s.idx),
          h = e("#mCSB_" + s.idx + "_container"),
          m = h.parent(),
          p = c.callbacks.onTotalScrollOffset ? Y.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
          g = c.callbacks.onTotalScrollBackOffset ? Y.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
        if (s.trigger = n.trigger, 0 === m.scrollTop() && 0 === m.scrollLeft() || (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)), "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), s.contentReset.y = 1), "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), s.contentReset.x = 1), "_resetY" !== o && "_resetX" !== o) {
          if (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), s.contentReset.x = null), !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), s.contentReset.x = null), c.snapAmount) {
            var v = c.snapAmount instanceof Array ? "x" === n.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
            o = V(o, v, c.snapOffset);
          }
          switch (n.dir) {
            case "x":
              var x = e("#mCSB_" + s.idx + "_dragger_horizontal"),
                _ = "left",
                w = h[0].offsetLeft,
                S = [f.width() - h.outerWidth(!1), x.parent().width() - x.width()],
                b = [o, 0 === o ? 0 : o / s.scrollRatio.x],
                y = p[1],
                B = g[1],
                T = y > 0 ? y / s.scrollRatio.x : 0,
                k = B > 0 ? B / s.scrollRatio.x : 0;
              break;
            case "y":
              var x = e("#mCSB_" + s.idx + "_dragger_vertical"),
                _ = "top",
                w = h[0].offsetTop,
                S = [f.height() - h.outerHeight(!1), x.parent().height() - x.height()],
                b = [o, 0 === o ? 0 : o / s.scrollRatio.y],
                y = p[0],
                B = g[0],
                T = y > 0 ? y / s.scrollRatio.y : 0,
                k = B > 0 ? B / s.scrollRatio.y : 0;
          }
          b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= S[1] ? b = [S[0], S[1]] : b[0] = -b[0], t[0].mcs || (l(), i("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(h[0].onCompleteTimeout), J(x[0], _, Math.round(b[1]), u[1], n.scrollEasing), !s.tweenRunning && (0 === w && b[0] >= 0 || w === S[0] && b[0] <= S[0]) || J(h[0], _, Math.round(b[0]), u[0], n.scrollEasing, n.overwrite, {
            onStart: function onStart() {
              n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(), c.callbacks.onScrollStart.call(t[0])), s.tweenRunning = !0, C(x), s.cbOffsets = r());
            },
            onUpdate: function onUpdate() {
              n.callbacks && n.onUpdate && i("whileScrolling") && (l(), c.callbacks.whileScrolling.call(t[0]));
            },
            onComplete: function onComplete() {
              if (n.callbacks && n.onComplete) {
                "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
                var e = h[0].idleTimer || 0;
                h[0].onCompleteTimeout = setTimeout(function () {
                  i("onScroll") && (l(), c.callbacks.onScroll.call(t[0])), i("onTotalScroll") && b[1] >= S[1] - T && s.cbOffsets[0] && (l(), c.callbacks.onTotalScroll.call(t[0])), i("onTotalScrollBack") && b[1] <= k && s.cbOffsets[1] && (l(), c.callbacks.onTotalScrollBack.call(t[0])), s.tweenRunning = !1, h[0].idleTimer = 0, C(x, "hide");
                }, e);
              }
            }
          });
        }
      },
      J = function J(e, t, o, a, n, i, r) {
        function l() {
          S.stop || (x || m.call(), x = K() - v, s(), x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1, S.time < x + 1 && (S.time = x + 1)), S.time < a ? S.id = h(l) : g.call());
        }
        function s() {
          a > 0 ? (S.currVal = u(S.time, _, b, a, n), w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px", p.call();
        }
        function c() {
          f = 1e3 / 60, S.time = x + f, h = window.requestAnimationFrame ? window.requestAnimationFrame : function (e) {
            return s(), setTimeout(e, .01);
          }, S.id = h(l);
        }
        function d() {
          null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id), S.id = null);
        }
        function u(e, t, o, a, n) {
          switch (n) {
            case "linear":
            case "mcsLinear":
              return o * e / a + t;
            case "mcsLinearOut":
              return e /= a, e--, o * Math.sqrt(1 - e * e) + t;
            case "easeInOutSmooth":
              return e /= a / 2, 1 > e ? o / 2 * e * e + t : (e--, -o / 2 * (e * (e - 2) - 1) + t);
            case "easeInOutStrong":
              return e /= a / 2, 1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (-Math.pow(2, -10 * e) + 2) + t);
            case "easeInOut":
            case "mcsEaseInOut":
              return e /= a / 2, 1 > e ? o / 2 * e * e * e + t : (e -= 2, o / 2 * (e * e * e + 2) + t);
            case "easeOutSmooth":
              return e /= a, e--, -o * (e * e * e * e - 1) + t;
            case "easeOutStrong":
              return o * (-Math.pow(2, -10 * e / a) + 1) + t;
            case "easeOut":
            case "mcsEaseOut":
            default:
              var i = (e /= a) * e,
                r = i * e;
              return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e);
          }
        }
        e._mTween || (e._mTween = {
          top: {},
          left: {}
        });
        var f,
          h,
          r = r || {},
          m = r.onStart || function () {},
          p = r.onUpdate || function () {},
          g = r.onComplete || function () {},
          v = K(),
          x = 0,
          _ = e.offsetTop,
          w = e.style,
          S = e._mTween[t];
        "left" === t && (_ = e.offsetLeft);
        var b = o - _;
        S.stop = 0, "none" !== i && d(), c();
      },
      K = function K() {
        return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : new Date().getTime();
      },
      Z = function Z() {
        var e = this;
        e._mTween || (e._mTween = {
          top: {},
          left: {}
        });
        for (var t = ["top", "left"], o = 0; o < t.length; o++) {
          var a = t[o];
          e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id), e._mTween[a].id = null, e._mTween[a].stop = 1);
        }
      },
      $ = function $(e, t) {
        try {
          delete e[t];
        } catch (o) {
          e[t] = null;
        }
      },
      ee = function ee(e) {
        return !(e.which && 1 !== e.which);
      },
      te = function te(e) {
        var t = e.originalEvent.pointerType;
        return !(t && "touch" !== t && 2 !== t);
      },
      oe = function oe(e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      },
      ae = function ae(e) {
        var t = e.parents(".mCSB_container");
        return [e.offset().top - t.offset().top, e.offset().left - t.offset().left];
      },
      ne = function ne() {
        function e() {
          var e = ["webkit", "moz", "ms", "o"];
          if ("hidden" in document) return "hidden";
          for (var t = 0; t < e.length; t++) {
            if (e[t] + "Hidden" in document) return e[t] + "Hidden";
          }
          return null;
        }
        var t = e();
        return t ? document[t] : !1;
      };
    e.fn[o] = function (t) {
      return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != _typeof(t) && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments);
    }, e[o] = function (t) {
      return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != _typeof(t) && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments);
    }, e[o].defaults = i, window[o] = !0, e(window).bind("load", function () {
      e(n)[o](), e.extend(e.expr[":"], {
        mcsInView: e.expr[":"].mcsInView || function (t) {
          var o,
            a,
            n = e(t),
            i = n.parents(".mCSB_container");
          if (i.length) return o = i.parent(), a = [i[0].offsetTop, i[0].offsetLeft], a[0] + ae(n)[0] >= 0 && a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) && a[1] + ae(n)[1] >= 0 && a[1] + ae(n)[1] < o.width() - n.outerWidth(!1);
        },
        mcsInSight: e.expr[":"].mcsInSight || function (t, o, a) {
          var n,
            i,
            r,
            l,
            s = e(t),
            c = s.parents(".mCSB_container"),
            d = "exact" === a[3] ? [[1, 0], [1, 0]] : [[.9, .1], [.6, .4]];
          if (c.length) return n = [s.outerHeight(!1), s.outerWidth(!1)], r = [c[0].offsetTop + ae(s)[0], c[0].offsetLeft + ae(s)[1]], i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], l = [n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1]], r[0] - i[0] * l[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0;
        },
        mcsOverflow: e.expr[":"].mcsOverflow || function (t) {
          var o = e(t).data(a);
          if (o) return o.overflowed[0] || o.overflowed[1];
        }
      });
    });
  });
});
"use strict";

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!function (e) {
  e.fn.niceSelect = function (t) {
    function s(t) {
      t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
      var s = t.next(),
        n = t.find("option"),
        i = t.find("option:selected");
      s.find(".current").html(i.data("display") || i.text()), n.each(function (t) {
        var n = e(this),
          i = n.data("display");
        s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()));
      });
    }
    if ("string" == typeof t) return "update" == t ? this.each(function () {
      var t = e(this),
        n = e(this).next(".nice-select"),
        i = n.hasClass("open");
      n.length && (n.remove(), s(t), i && t.next().trigger("click"));
    }) : "destroy" == t ? (this.each(function () {
      var t = e(this),
        s = e(this).next(".nice-select");
      s.length && (s.remove(), t.css("display", ""));
    }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;
    this.hide(), this.each(function () {
      var t = e(this);
      t.next().hasClass("nice-select") || s(t);
    }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) {
      var s = e(this);
      e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus();
    }), e(document).on("click.nice_select", function (t) {
      0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option");
    }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
      var s = e(this),
        n = s.closest(".nice-select");
      n.find(".selected").removeClass("selected"), s.addClass("selected");
      var i = s.data("display") || s.text();
      n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change");
    }), e(document).on("keydown.nice_select", ".nice-select", function (t) {
      var s = e(this),
        n = e(s.find(".focus") || s.find(".list .option.selected"));
      if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;
      if (40 == t.keyCode) {
        if (s.hasClass("open")) {
          var i = n.nextAll(".option:not(.disabled)").first();
          i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"));
        } else s.trigger("click");
        return !1;
      }
      if (38 == t.keyCode) {
        if (s.hasClass("open")) {
          var l = n.prevAll(".option:not(.disabled)").first();
          l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"));
        } else s.trigger("click");
        return !1;
      }
      if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");else if (9 == t.keyCode && s.hasClass("open")) return !1;
    });
    var n = document.createElement("a").style;
    return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this;
  };
}(jQuery);
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Swiper 5.2.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 16, 2019
 */

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t();
}(void 0, function () {
  "use strict";

  var e = "undefined" == typeof document ? {
      body: {},
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      activeElement: {
        blur: function blur() {},
        nodeName: ""
      },
      querySelector: function querySelector() {
        return null;
      },
      querySelectorAll: function querySelectorAll() {
        return [];
      },
      getElementById: function getElementById() {
        return null;
      },
      createEvent: function createEvent() {
        return {
          initEvent: function initEvent() {}
        };
      },
      createElement: function createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function setAttribute() {},
          getElementsByTagName: function getElementsByTagName() {
            return [];
          }
        };
      },
      location: {
        hash: ""
      }
    } : document,
    t = "undefined" == typeof window ? {
      document: e,
      navigator: {
        userAgent: ""
      },
      location: {},
      history: {},
      CustomEvent: function CustomEvent() {
        return this;
      },
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      getComputedStyle: function getComputedStyle() {
        return {
          getPropertyValue: function getPropertyValue() {
            return "";
          }
        };
      },
      Image: function Image() {},
      Date: function Date() {},
      screen: {},
      setTimeout: function setTimeout() {},
      clearTimeout: function clearTimeout() {}
    } : window,
    i = function i(e) {
      for (var t = 0; t < e.length; t += 1) {
        this[t] = e[t];
      }
      return this.length = e.length, this;
    };
  function s(s, a) {
    var r = [],
      n = 0;
    if (s && !a && s instanceof i) return s;
    if (s) if ("string" == typeof s) {
      var o,
        l,
        d = s.trim();
      if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
        var h = "div";
        for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1) {
          r.push(l.childNodes[n]);
        }
      } else for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], n = 0; n < o.length; n += 1) {
        o[n] && r.push(o[n]);
      }
    } else if (s.nodeType || s === t || s === e) r.push(s);else if (s.length > 0 && s[0].nodeType) for (n = 0; n < s.length; n += 1) {
      r.push(s[n]);
    }
    return new i(r);
  }
  function a(e) {
    for (var t = [], i = 0; i < e.length; i += 1) {
      -1 === t.indexOf(e[i]) && t.push(e[i]);
    }
    return t;
  }
  s.fn = i.prototype, s.Class = i, s.Dom7 = i;
  var r = {
    addClass: function addClass(e) {
      if (void 0 === e) return this;
      for (var t = e.split(" "), i = 0; i < t.length; i += 1) {
        for (var s = 0; s < this.length; s += 1) {
          void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
        }
      }
      return this;
    },
    removeClass: function removeClass(e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1) {
        for (var s = 0; s < this.length; s += 1) {
          void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
        }
      }
      return this;
    },
    hasClass: function hasClass(e) {
      return !!this[0] && this[0].classList.contains(e);
    },
    toggleClass: function toggleClass(e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1) {
        for (var s = 0; s < this.length; s += 1) {
          void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
        }
      }
      return this;
    },
    attr: function attr(e, t) {
      var i = arguments;
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
      for (var s = 0; s < this.length; s += 1) {
        if (2 === i.length) this[s].setAttribute(e, t);else for (var a in e) {
          this[s][a] = e[a], this[s].setAttribute(a, e[a]);
        }
      }
      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].removeAttribute(e);
      }
      return this;
    },
    data: function data(e, t) {
      var i;
      if (void 0 !== t) {
        for (var s = 0; s < this.length; s += 1) {
          (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
        }
        return this;
      }
      if (i = this[0]) {
        if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
        var a = i.getAttribute("data-" + e);
        return a || void 0;
      }
    },
    transform: function transform(e) {
      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;
        i.webkitTransform = e, i.transform = e;
      }
      return this;
    },
    transition: function transition(e) {
      "string" != typeof e && (e += "ms");
      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;
        i.webkitTransitionDuration = e, i.transitionDuration = e;
      }
      return this;
    },
    on: function on() {
      for (var e, t = [], i = arguments.length; i--;) {
        t[i] = arguments[i];
      }
      var a = t[0],
        r = t[1],
        n = t[2],
        o = t[3];
      function l(e) {
        var t = e.target;
        if (t) {
          var i = e.target.dom7EventData || [];
          if (i.indexOf(e) < 0 && i.unshift(e), s(t).is(r)) n.apply(t, i);else for (var a = s(t).parents(), o = 0; o < a.length; o += 1) {
            s(a[o]).is(r) && n.apply(a[o], i);
          }
        }
      }
      function d(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
      }
      "function" == typeof t[1] && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1);
      for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
        var u = this[c];
        if (r) for (h = 0; h < p.length; h += 1) {
          var v = p[h];
          u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []), u.dom7LiveListeners[v].push({
            listener: n,
            proxyListener: l
          }), u.addEventListener(v, l, o);
        } else for (h = 0; h < p.length; h += 1) {
          var f = p[h];
          u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({
            listener: n,
            proxyListener: d
          }), u.addEventListener(f, d, o);
        }
      }
      return this;
    },
    off: function off() {
      for (var e, t = [], i = arguments.length; i--;) {
        t[i] = arguments[i];
      }
      var s = t[0],
        a = t[1],
        r = t[2],
        n = t[3];
      "function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);
      for (var o = s.split(" "), l = 0; l < o.length; l += 1) {
        for (var d = o[l], h = 0; h < this.length; h += 1) {
          var p = this[h],
            c = void 0;
          if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]), c && c.length) for (var u = c.length - 1; u >= 0; u -= 1) {
            var v = c[u];
            r && v.listener === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1));
          }
        }
      }
      return this;
    },
    trigger: function trigger() {
      for (var i = [], s = arguments.length; s--;) {
        i[s] = arguments[s];
      }
      for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1) {
        for (var o = a[n], l = 0; l < this.length; l += 1) {
          var d = this[l],
            h = void 0;
          try {
            h = new t.CustomEvent(o, {
              detail: r,
              bubbles: !0,
              cancelable: !0
            });
          } catch (t) {
            (h = e.createEvent("Event")).initEvent(o, !0, !0), h.detail = r;
          }
          d.dom7EventData = i.filter(function (e, t) {
            return t > 0;
          }), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData;
        }
      }
      return this;
    },
    transitionEnd: function transitionEnd(e) {
      var t,
        i = ["webkitTransitionEnd", "transitionend"],
        s = this;
      function a(r) {
        if (r.target === this) for (e.call(this, r), t = 0; t < i.length; t += 1) {
          s.off(i[t], a);
        }
      }
      if (e) for (t = 0; t < i.length; t += 1) {
        s.on(i[t], a);
      }
      return this;
    },
    outerWidth: function outerWidth(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    offset: function offset() {
      if (this.length > 0) {
        var i = this[0],
          s = i.getBoundingClientRect(),
          a = e.body,
          r = i.clientTop || a.clientTop || 0,
          n = i.clientLeft || a.clientLeft || 0,
          o = i === t ? t.scrollY : i.scrollTop,
          l = i === t ? t.scrollX : i.scrollLeft;
        return {
          top: s.top + o - r,
          left: s.left + l - n
        };
      }
      return null;
    },
    css: function css(e, i) {
      var s;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (s = 0; s < this.length; s += 1) {
            for (var a in e) {
              this[s].style[a] = e[a];
            }
          }
          return this;
        }
        if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (s = 0; s < this.length; s += 1) {
          this[s].style[e] = i;
        }
        return this;
      }
      return this;
    },
    each: function each(e) {
      if (!e) return this;
      for (var t = 0; t < this.length; t += 1) {
        if (!1 === e.call(this[t], t, this[t])) return this;
      }
      return this;
    },
    html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
      for (var t = 0; t < this.length; t += 1) {
        this[t].innerHTML = e;
      }
      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (var t = 0; t < this.length; t += 1) {
        this[t].textContent = e;
      }
      return this;
    },
    is: function is(a) {
      var r,
        n,
        o = this[0];
      if (!o || void 0 === a) return !1;
      if ("string" == typeof a) {
        if (o.matches) return o.matches(a);
        if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
        if (o.msMatchesSelector) return o.msMatchesSelector(a);
        for (r = s(a), n = 0; n < r.length; n += 1) {
          if (r[n] === o) return !0;
        }
        return !1;
      }
      if (a === e) return o === e;
      if (a === t) return o === t;
      if (a.nodeType || a instanceof i) {
        for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1) {
          if (r[n] === o) return !0;
        }
        return !1;
      }
      return !1;
    },
    index: function index() {
      var e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }
        return e;
      }
    },
    eq: function eq(e) {
      if (void 0 === e) return this;
      var t,
        s = this.length;
      return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]]);
    },
    append: function append() {
      for (var t, s = [], a = arguments.length; a--;) {
        s[a] = arguments[a];
      }
      for (var r = 0; r < s.length; r += 1) {
        t = s[r];
        for (var n = 0; n < this.length; n += 1) {
          if ("string" == typeof t) {
            var o = e.createElement("div");
            for (o.innerHTML = t; o.firstChild;) {
              this[n].appendChild(o.firstChild);
            }
          } else if (t instanceof i) for (var l = 0; l < t.length; l += 1) {
            this[n].appendChild(t[l]);
          } else this[n].appendChild(t);
        }
      }
      return this;
    },
    prepend: function prepend(t) {
      var s, a;
      for (s = 0; s < this.length; s += 1) {
        if ("string" == typeof t) {
          var r = e.createElement("div");
          for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1) {
            this[s].insertBefore(r.childNodes[a], this[s].childNodes[0]);
          }
        } else if (t instanceof i) for (a = 0; a < t.length; a += 1) {
          this[s].insertBefore(t[a], this[s].childNodes[0]);
        } else this[s].insertBefore(t, this[s].childNodes[0]);
      }
      return this;
    },
    next: function next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([]);
    },
    nextAll: function nextAll(e) {
      var t = [],
        a = this[0];
      if (!a) return new i([]);
      for (; a.nextElementSibling;) {
        var r = a.nextElementSibling;
        e ? s(r).is(e) && t.push(r) : t.push(r), a = r;
      }
      return new i(t);
    },
    prev: function prev(e) {
      if (this.length > 0) {
        var t = this[0];
        return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([]);
      }
      return new i([]);
    },
    prevAll: function prevAll(e) {
      var t = [],
        a = this[0];
      if (!a) return new i([]);
      for (; a.previousElementSibling;) {
        var r = a.previousElementSibling;
        e ? s(r).is(e) && t.push(r) : t.push(r), a = r;
      }
      return new i(t);
    },
    parent: function parent(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
      }
      return s(a(t));
    },
    parents: function parents(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        for (var r = this[i].parentNode; r;) {
          e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
        }
      }
      return s(a(t));
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      for (var t = [], s = 0; s < this.length; s += 1) {
        for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) {
          t.push(a[r]);
        }
      }
      return new i(t);
    },
    children: function children(e) {
      for (var t = [], r = 0; r < this.length; r += 1) {
        for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) {
          e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
        }
      }
      return new i(a(t));
    },
    filter: function filter(e) {
      for (var t = [], s = 0; s < this.length; s += 1) {
        e.call(this[s], s, this[s]) && t.push(this[s]);
      }
      return new i(t);
    },
    remove: function remove() {
      for (var e = 0; e < this.length; e += 1) {
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      }
      return this;
    },
    add: function add() {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }
      var i, a;
      for (i = 0; i < e.length; i += 1) {
        var r = s(e[i]);
        for (a = 0; a < r.length; a += 1) {
          this[this.length] = r[a], this.length += 1;
        }
      }
      return this;
    },
    styles: function styles() {
      return this[0] ? t.getComputedStyle(this[0], null) : {};
    }
  };
  Object.keys(r).forEach(function (e) {
    s.fn[e] = s.fn[e] || r[e];
  });
  var n = {
      deleteProps: function deleteProps(e) {
        var t = e;
        Object.keys(t).forEach(function (e) {
          try {
            t[e] = null;
          } catch (e) {}
          try {
            delete t[e];
          } catch (e) {}
        });
      },
      nextTick: function nextTick(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      },
      now: function now() {
        return Date.now();
      },
      getTranslate: function getTranslate(e, i) {
        var s, a, r;
        void 0 === i && (i = "x");
        var n = t.getComputedStyle(e, null);
        return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function (e) {
          return e.replace(",", ".");
        }).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0;
      },
      parseUrlQuery: function parseUrlQuery(e) {
        var i,
          s,
          a,
          r,
          n = {},
          o = e || t.location.href;
        if ("string" == typeof o && o.length) for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
          return "" !== e;
        })).length, i = 0; i < r; i += 1) {
          a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
        }
        return n;
      },
      isObject: function isObject(e) {
        return "object" == _typeof(e) && null !== e && e.constructor && e.constructor === Object;
      },
      extend: function extend() {
        for (var e = [], t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
          var a = e[s];
          if (null != a) for (var r = Object.keys(Object(a)), o = 0, l = r.length; o < l; o += 1) {
            var d = r[o],
              h = Object.getOwnPropertyDescriptor(a, d);
            void 0 !== h && h.enumerable && (n.isObject(i[d]) && n.isObject(a[d]) ? n.extend(i[d], a[d]) : !n.isObject(i[d]) && n.isObject(a[d]) ? (i[d] = {}, n.extend(i[d], a[d])) : i[d] = a[d]);
          }
        }
        return i;
      }
    },
    o = {
      touch: t.Modernizr && !0 === t.Modernizr.touch || !!(t.navigator.maxTouchPoints > 0 || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
      pointerEvents: !!t.PointerEvent && "maxTouchPoints" in t.navigator && t.navigator.maxTouchPoints > 0,
      observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
      passiveListener: function () {
        var e = !1;
        try {
          var i = Object.defineProperty({}, "passive", {
            get: function get() {
              e = !0;
            }
          });
          t.addEventListener("testPassiveListener", null, i);
        } catch (e) {}
        return e;
      }(),
      gestures: "ongesturestart" in t
    },
    l = function l(e) {
      void 0 === e && (e = {});
      var t = this;
      t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
        t.on(e, t.params.on[e]);
      });
    },
    d = {
      components: {
        configurable: !0
      }
    };
  l.prototype.on = function (e, t, i) {
    var s = this;
    if ("function" != typeof t) return s;
    var a = i ? "unshift" : "push";
    return e.split(" ").forEach(function (e) {
      s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
    }), s;
  }, l.prototype.once = function (e, t, i) {
    var s = this;
    if ("function" != typeof t) return s;
    function a() {
      for (var i = [], r = arguments.length; r--;) {
        i[r] = arguments[r];
      }
      s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i);
    }
    return a.f7proxy = t, s.on(e, a, i);
  }, l.prototype.off = function (e, t) {
    var i = this;
    return i.eventsListeners ? (e.split(" ").forEach(function (e) {
      void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach(function (s, a) {
        (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1);
      });
    }), i) : i;
  }, l.prototype.emit = function () {
    for (var e = [], t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var i,
      s,
      a,
      r = this;
    if (!r.eventsListeners) return r;
    "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r);
    var n = Array.isArray(i) ? i : i.split(" ");
    return n.forEach(function (e) {
      if (r.eventsListeners && r.eventsListeners[e]) {
        var t = [];
        r.eventsListeners[e].forEach(function (e) {
          t.push(e);
        }), t.forEach(function (e) {
          e.apply(a, s);
        });
      }
    }), r;
  }, l.prototype.useModulesParams = function (e) {
    var t = this;
    t.modules && Object.keys(t.modules).forEach(function (i) {
      var s = t.modules[i];
      s.params && n.extend(e, s.params);
    });
  }, l.prototype.useModules = function (e) {
    void 0 === e && (e = {});
    var t = this;
    t.modules && Object.keys(t.modules).forEach(function (i) {
      var s = t.modules[i],
        a = e[i] || {};
      s.instance && Object.keys(s.instance).forEach(function (e) {
        var i = s.instance[e];
        t[e] = "function" == typeof i ? i.bind(t) : i;
      }), s.on && t.on && Object.keys(s.on).forEach(function (e) {
        t.on(e, s.on[e]);
      }), s.create && s.create.bind(t)(a);
    });
  }, d.components.set = function (e) {
    this.use && this.use(e);
  }, l.installModule = function (e) {
    for (var t = [], i = arguments.length - 1; i-- > 0;) {
      t[i] = arguments[i + 1];
    }
    var s = this;
    s.prototype.modules || (s.prototype.modules = {});
    var a = e.name || Object.keys(s.prototype.modules).length + "_" + n.now();
    return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach(function (t) {
      s.prototype[t] = e.proto[t];
    }), e.static && Object.keys(e.static).forEach(function (t) {
      s[t] = e.static[t];
    }), e.install && e.install.apply(s, t), s;
  }, l.use = function (e) {
    for (var t = [], i = arguments.length - 1; i-- > 0;) {
      t[i] = arguments[i + 1];
    }
    var s = this;
    return Array.isArray(e) ? (e.forEach(function (e) {
      return s.installModule(e);
    }), s) : s.installModule.apply(s, [e].concat(t));
  }, Object.defineProperties(l, d);
  var h = {
    updateSize: function updateSize() {
      var e,
        t,
        i = this.$el;
      e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), n.extend(this, {
        width: e,
        height: t,
        size: this.isHorizontal() ? e : t
      }));
    },
    updateSlides: function updateSlides() {
      var e = this.params,
        i = this.$wrapperEl,
        s = this.size,
        a = this.rtlTranslate,
        r = this.wrongRTL,
        o = this.virtual && e.virtual.enabled,
        l = o ? this.virtual.slides.length : this.slides.length,
        d = i.children("." + this.params.slideClass),
        h = o ? this.virtual.slides.length : d.length,
        p = [],
        c = [],
        u = [];
      function v(t) {
        return !e.cssMode || t !== d.length - 1;
      }
      var f = e.slidesOffsetBefore;
      "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
      var m = e.slidesOffsetAfter;
      "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
      var g = this.snapGrid.length,
        b = this.snapGrid.length,
        w = e.spaceBetween,
        y = -f,
        x = 0,
        T = 0;
      if (void 0 !== s) {
        var E, S;
        "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s), this.virtualSize = -w, a ? d.css({
          marginLeft: "",
          marginTop: ""
        }) : d.css({
          marginRight: "",
          marginBottom: ""
        }), e.slidesPerColumn > 1 && (E = Math.floor(h / e.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
        for (var C, M = e.slidesPerColumn, P = E / M, z = Math.floor(h / e.slidesPerColumn), k = 0; k < h; k += 1) {
          S = 0;
          var $ = d.eq(k);
          if (e.slidesPerColumn > 1) {
            var L = void 0,
              I = void 0,
              D = void 0;
            if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
              var O = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn)),
                A = k - e.slidesPerColumn * e.slidesPerGroup * O,
                G = 0 === O ? e.slidesPerGroup : Math.min(Math.ceil((h - O * M * e.slidesPerGroup) / M), e.slidesPerGroup);
              L = (I = A - (D = Math.floor(A / G)) * G + O * e.slidesPerGroup) + D * E / M, $.css({
                "-webkit-box-ordinal-group": L,
                "-moz-box-ordinal-group": L,
                "-ms-flex-order": L,
                "-webkit-order": L,
                order: L
              });
            } else "column" === e.slidesPerColumnFill ? (D = k - (I = Math.floor(k / M)) * M, (I > z || I === z && D === M - 1) && (D += 1) >= M && (D = 0, I += 1)) : I = k - (D = Math.floor(k / P)) * P;
            $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px");
          }
          if ("none" !== $.css("display")) {
            if ("auto" === e.slidesPerView) {
              var B = t.getComputedStyle($[0], null),
                H = $[0].style.transform,
                N = $[0].style.webkitTransform;
              if (H && ($[0].style.transform = "none"), N && ($[0].style.webkitTransform = "none"), e.roundLengths) S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);else if (this.isHorizontal()) {
                var X = parseFloat(B.getPropertyValue("width")),
                  V = parseFloat(B.getPropertyValue("padding-left")),
                  Y = parseFloat(B.getPropertyValue("padding-right")),
                  F = parseFloat(B.getPropertyValue("margin-left")),
                  W = parseFloat(B.getPropertyValue("margin-right")),
                  R = B.getPropertyValue("box-sizing");
                S = R && "border-box" === R ? X + F + W : X + V + Y + F + W;
              } else {
                var q = parseFloat(B.getPropertyValue("height")),
                  j = parseFloat(B.getPropertyValue("padding-top")),
                  K = parseFloat(B.getPropertyValue("padding-bottom")),
                  U = parseFloat(B.getPropertyValue("margin-top")),
                  _ = parseFloat(B.getPropertyValue("margin-bottom")),
                  Z = B.getPropertyValue("box-sizing");
                S = Z && "border-box" === Z ? q + U + _ : q + j + K + U + _;
              }
              H && ($[0].style.transform = H), N && ($[0].style.webkitTransform = N), e.roundLengths && (S = Math.floor(S));
            } else S = (s - (e.slidesPerView - 1) * w) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), d[k] && (this.isHorizontal() ? d[k].style.width = S + "px" : d[k].style.height = S + "px");
            d[k] && (d[k].swiperSlideSize = S), u.push(S), e.centeredSlides ? (y = y + S / 2 + x / 2 + w, 0 === x && 0 !== k && (y = y - s / 2 - w), 0 === k && (y = y - s / 2 - w), Math.abs(y) < .001 && (y = 0), e.roundLengths && (y = Math.floor(y)), T % e.slidesPerGroup == 0 && p.push(y), c.push(y)) : (e.roundLengths && (y = Math.floor(y)), T % e.slidesPerGroup == 0 && p.push(y), c.push(y), y = y + S + w), this.virtualSize += S + w, x = S, T += 1;
          }
        }
        if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
          width: this.virtualSize + e.spaceBetween + "px"
        }), e.setWrapperSize && (this.isHorizontal() ? i.css({
          width: this.virtualSize + e.spaceBetween + "px"
        }) : i.css({
          height: this.virtualSize + e.spaceBetween + "px"
        })), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({
          width: this.virtualSize + e.spaceBetween + "px"
        }) : i.css({
          height: this.virtualSize + e.spaceBetween + "px"
        }), e.centeredSlides)) {
          C = [];
          for (var Q = 0; Q < p.length; Q += 1) {
            var J = p[Q];
            e.roundLengths && (J = Math.floor(J)), p[Q] < this.virtualSize + p[0] && C.push(J);
          }
          p = C;
        }
        if (!e.centeredSlides) {
          C = [];
          for (var ee = 0; ee < p.length; ee += 1) {
            var te = p[ee];
            e.roundLengths && (te = Math.floor(te)), p[ee] <= this.virtualSize - s && C.push(te);
          }
          p = C, Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s);
        }
        if (0 === p.length && (p = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? d.filter(v).css({
          marginLeft: w + "px"
        }) : d.filter(v).css({
          marginRight: w + "px"
        }) : d.filter(v).css({
          marginBottom: w + "px"
        })), e.centeredSlides && e.centeredSlidesBounds) {
          var ie = 0;
          u.forEach(function (t) {
            ie += t + (e.spaceBetween ? e.spaceBetween : 0);
          });
          var se = (ie -= e.spaceBetween) - s;
          p = p.map(function (e) {
            return e < 0 ? -f : e > se ? se + m : e;
          });
        }
        if (e.centerInsufficientSlides) {
          var ae = 0;
          if (u.forEach(function (t) {
            ae += t + (e.spaceBetween ? e.spaceBetween : 0);
          }), (ae -= e.spaceBetween) < s) {
            var re = (s - ae) / 2;
            p.forEach(function (e, t) {
              p[t] = e - re;
            }), c.forEach(function (e, t) {
              c[t] = e + re;
            });
          }
        }
        n.extend(this, {
          slides: d,
          snapGrid: p,
          slidesGrid: c,
          slidesSizesGrid: u
        }), h !== l && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), c.length !== b && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset();
      }
    },
    updateAutoHeight: function updateAutoHeight(e) {
      var t,
        i = [],
        s = 0;
      if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
        var a = this.activeIndex + t;
        if (a > this.slides.length) break;
        i.push(this.slides.eq(a)[0]);
      } else i.push(this.slides.eq(this.activeIndex)[0]);
      for (t = 0; t < i.length; t += 1) {
        if (void 0 !== i[t]) {
          var r = i[t].offsetHeight;
          s = r > s ? r : s;
        }
      }
      s && this.$wrapperEl.css("height", s + "px");
    },
    updateSlidesOffset: function updateSlidesOffset() {
      for (var e = this.slides, t = 0; t < e.length; t += 1) {
        e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
      }
    },
    updateSlidesProgress: function updateSlidesProgress(e) {
      void 0 === e && (e = this && this.translate || 0);
      var t = this.params,
        i = this.slides,
        a = this.rtlTranslate;
      if (0 !== i.length) {
        void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
        var r = -e;
        a && (r = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
        for (var n = 0; n < i.length; n += 1) {
          var o = i[n],
            l = (r + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);
          if (t.watchSlidesVisibility) {
            var d = -(r - o.swiperSlideOffset),
              h = d + this.slidesSizesGrid[n];
            (d >= 0 && d < this.size - 1 || h > 1 && h <= this.size || d <= 0 && h >= this.size) && (this.visibleSlides.push(o), this.visibleSlidesIndexes.push(n), i.eq(n).addClass(t.slideVisibleClass));
          }
          o.progress = a ? -l : l;
        }
        this.visibleSlides = s(this.visibleSlides);
      }
    },
    updateProgress: function updateProgress(e) {
      if (void 0 === e) {
        var t = this.rtlTranslate ? -1 : 1;
        e = this && this.translate && this.translate * t || 0;
      }
      var i = this.params,
        s = this.maxTranslate() - this.minTranslate(),
        a = this.progress,
        r = this.isBeginning,
        o = this.isEnd,
        l = r,
        d = o;
      0 === s ? (a = 0, r = !0, o = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, o = a >= 1), n.extend(this, {
        progress: a,
        isBeginning: r,
        isEnd: o
      }), (i.watchSlidesProgress || i.watchSlidesVisibility) && this.updateSlidesProgress(e), r && !l && this.emit("reachBeginning toEdge"), o && !d && this.emit("reachEnd toEdge"), (l && !r || d && !o) && this.emit("fromEdge"), this.emit("progress", a);
    },
    updateSlidesClasses: function updateSlidesClasses() {
      var e,
        t = this.slides,
        i = this.params,
        s = this.$wrapperEl,
        a = this.activeIndex,
        r = this.realIndex,
        n = this.virtual && i.virtual.enabled;
      t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
      var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
      i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
      var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
      i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass));
    },
    updateActiveIndex: function updateActiveIndex(e) {
      var t,
        i = this.rtlTranslate ? this.translate : -this.translate,
        s = this.slidesGrid,
        a = this.snapGrid,
        r = this.params,
        o = this.activeIndex,
        l = this.realIndex,
        d = this.snapIndex,
        h = e;
      if (void 0 === h) {
        for (var p = 0; p < s.length; p += 1) {
          void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
        }
        r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0);
      }
      if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(h / r.slidesPerGroup)) >= a.length && (t = a.length - 1), h !== o) {
        var c = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
        n.extend(this, {
          snapIndex: t,
          realIndex: c,
          previousIndex: o,
          activeIndex: h
        }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== c && this.emit("realIndexChange"), (this.initialized || this.runCallbacksOnInit) && this.emit("slideChange");
      } else t !== d && (this.snapIndex = t, this.emit("snapIndexChange"));
    },
    updateClickedSlide: function updateClickedSlide(e) {
      var t = this.params,
        i = s(e.target).closest("." + t.slideClass)[0],
        a = !1;
      if (i) for (var r = 0; r < this.slides.length; r += 1) {
        this.slides[r] === i && (a = !0);
      }
      if (!i || !a) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
      this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
    }
  };
  var p = {
    getTranslate: function getTranslate(e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      var t = this.params,
        i = this.rtlTranslate,
        s = this.translate,
        a = this.$wrapperEl;
      if (t.virtualTranslate) return i ? -s : s;
      if (t.cssMode) return s;
      var r = n.getTranslate(a[0], e);
      return i && (r = -r), r || 0;
    },
    setTranslate: function setTranslate(e, t) {
      var i = this.rtlTranslate,
        s = this.params,
        a = this.$wrapperEl,
        r = this.wrapperEl,
        n = this.progress,
        o = 0,
        l = 0;
      this.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
      var d = this.maxTranslate() - this.minTranslate();
      (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
    },
    minTranslate: function minTranslate() {
      return -this.snapGrid[0];
    },
    maxTranslate: function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function translateTo(e, t, i, s, a) {
      var r;
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
      var n = this,
        o = n.params,
        l = n.wrapperEl;
      if (n.animating && o.preventInteractionOnTransition) return !1;
      var d,
        h = n.minTranslate(),
        p = n.maxTranslate();
      if (d = s && e > h ? h : s && e < p ? p : e, n.updateProgress(d), o.cssMode) {
        var c = n.isHorizontal();
        return 0 === t ? l[c ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo(((r = {})[c ? "left" : "top"] = -d, r.behavior = "smooth", r)) : l[c ? "scrollLeft" : "scrollTop"] = -d, !0;
      }
      return 0 === t ? (n.setTransition(0), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (e) {
        n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"));
      }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0;
    }
  };
  var c = {
    setTransition: function setTransition(e, t) {
      this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
    },
    transitionStart: function transitionStart(e, t) {
      void 0 === e && (e = !0);
      var i = this.activeIndex,
        s = this.params,
        a = this.previousIndex;
      if (!s.cssMode) {
        s.autoHeight && this.updateAutoHeight();
        var r = t;
        if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
          if ("reset" === r) return void this.emit("slideResetTransitionStart");
          this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
        }
      }
    },
    transitionEnd: function transitionEnd(e, t) {
      void 0 === e && (e = !0);
      var i = this.activeIndex,
        s = this.previousIndex,
        a = this.params;
      if (this.animating = !1, !a.cssMode) {
        this.setTransition(0);
        var r = t;
        if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
          if ("reset" === r) return void this.emit("slideResetTransitionEnd");
          this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
        }
      }
    }
  };
  var u = {
    slideTo: function slideTo(e, t, i, s) {
      var a;
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
      var r = this,
        n = e;
      n < 0 && (n = 0);
      var o = r.params,
        l = r.snapGrid,
        d = r.slidesGrid,
        h = r.previousIndex,
        p = r.activeIndex,
        c = r.rtlTranslate,
        u = r.wrapperEl;
      if (r.animating && o.preventInteractionOnTransition) return !1;
      var v = Math.floor(n / o.slidesPerGroup);
      v >= l.length && (v = l.length - 1), (p || o.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
      var f,
        m = -l[v];
      if (r.updateProgress(m), o.normalizeSlideIndex) for (var g = 0; g < d.length; g += 1) {
        -Math.floor(100 * m) >= Math.floor(100 * d[g]) && (n = g);
      }
      if (r.initialized && n !== p) {
        if (!r.allowSlideNext && m < r.translate && m < r.minTranslate()) return !1;
        if (!r.allowSlidePrev && m > r.translate && m > r.maxTranslate() && (p || 0) !== n) return !1;
      }
      if (f = n > p ? "next" : n < p ? "prev" : "reset", c && -m === r.translate || !c && m === r.translate) return r.updateActiveIndex(n), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(m), "reset" !== f && (r.transitionStart(i, f), r.transitionEnd(i, f)), !1;
      if (o.cssMode) {
        var b = r.isHorizontal();
        return 0 === t ? u[b ? "scrollLeft" : "scrollTop"] = -m : u.scrollTo ? u.scrollTo(((a = {})[b ? "left" : "top"] = -m, a.behavior = "smooth", a)) : u[b ? "scrollLeft" : "scrollTop"] = -m, !0;
      }
      return 0 === t ? (r.setTransition(0), r.setTranslate(m), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, f), r.transitionEnd(i, f)) : (r.setTransition(t), r.setTranslate(m), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, f), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, f));
      }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0;
    },
    slideToLoop: function slideToLoop(e, t, i, s) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
      var a = e;
      return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s);
    },
    slideNext: function slideNext(e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var s = this.params,
        a = this.animating;
      return s.loop ? !a && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i);
    },
    slidePrev: function slidePrev(e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var s = this.params,
        a = this.animating,
        r = this.snapGrid,
        n = this.slidesGrid,
        o = this.rtlTranslate;
      if (s.loop) {
        if (a) return !1;
        this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
      }
      function l(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      var d,
        h = l(o ? this.translate : -this.translate),
        p = r.map(function (e) {
          return l(e);
        }),
        c = (n.map(function (e) {
          return l(e);
        }), r[p.indexOf(h)], r[p.indexOf(h) - 1]);
      return void 0 === c && s.cssMode && r.forEach(function (e) {
        !c && h >= e && (c = e);
      }), void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i);
    },
    slideReset: function slideReset(e, t, i) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
    },
    slideToClosest: function slideToClosest(e, t, i, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
      var a = this.activeIndex,
        r = Math.floor(a / this.params.slidesPerGroup),
        n = this.rtlTranslate ? this.translate : -this.translate;
      if (n >= this.snapGrid[r]) {
        var o = this.snapGrid[r];
        n - o > (this.snapGrid[r + 1] - o) * s && (a += this.params.slidesPerGroup);
      } else {
        var l = this.snapGrid[r - 1];
        n - l <= (this.snapGrid[r] - l) * s && (a -= this.params.slidesPerGroup);
      }
      return a = Math.max(a, 0), a = Math.min(a, this.snapGrid.length - 1), this.slideTo(a, e, t, i);
    },
    slideToClickedSlide: function slideToClickedSlide() {
      var e,
        t = this,
        i = t.params,
        a = t.$wrapperEl,
        r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
        o = t.clickedIndex;
      if (i.loop) {
        if (t.animating) return;
        e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? o < t.loopedSlides - r / 2 || o > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick(function () {
          t.slideTo(o);
        })) : t.slideTo(o) : o > t.slides.length - r ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick(function () {
          t.slideTo(o);
        })) : t.slideTo(o);
      } else t.slideTo(o);
    }
  };
  var v = {
    loopCreate: function loopCreate() {
      var t = this,
        i = t.params,
        a = t.$wrapperEl;
      a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
      var r = a.children("." + i.slideClass);
      if (i.loopFillGroupWithBlank) {
        var n = i.slidesPerGroup - r.length % i.slidesPerGroup;
        if (n !== i.slidesPerGroup) {
          for (var o = 0; o < n; o += 1) {
            var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
            a.append(l);
          }
          r = a.children("." + i.slideClass);
        }
      }
      "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
      var d = [],
        h = [];
      r.each(function (e, i) {
        var a = s(i);
        e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e);
      });
      for (var p = 0; p < h.length; p += 1) {
        a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
      }
      for (var c = d.length - 1; c >= 0; c -= 1) {
        a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
      }
    },
    loopFix: function loopFix() {
      this.emit("beforeLoopFix");
      var e,
        t = this.activeIndex,
        i = this.slides,
        s = this.loopedSlides,
        a = this.allowSlidePrev,
        r = this.allowSlideNext,
        n = this.snapGrid,
        o = this.rtlTranslate;
      this.allowSlidePrev = !0, this.allowSlideNext = !0;
      var l = -n[t] - this.getTranslate();
      if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);else if (t >= i.length - s) {
        e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
      }
      this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix");
    },
    loopDestroy: function loopDestroy() {
      var e = this.$wrapperEl,
        t = this.params,
        i = this.slides;
      e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
    }
  };
  var f = {
    setGrabCursor: function setGrabCursor(e) {
      if (!(o.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
        var t = this.el;
        t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
      }
    },
    unsetGrabCursor: function unsetGrabCursor() {
      o.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "");
    }
  };
  var m,
    g,
    b,
    w,
    y,
    x,
    T,
    E,
    S,
    C,
    M,
    P,
    z,
    k,
    $,
    L = {
      appendSlide: function appendSlide(e) {
        var t = this.$wrapperEl,
          i = this.params;
        if (i.loop && this.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var s = 0; s < e.length; s += 1) {
          e[s] && t.append(e[s]);
        } else t.append(e);
        i.loop && this.loopCreate(), i.observer && o.observer || this.update();
      },
      prependSlide: function prependSlide(e) {
        var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;
        t.loop && this.loopDestroy();
        var a = s + 1;
        if ("object" == _typeof(e) && "length" in e) {
          for (var r = 0; r < e.length; r += 1) {
            e[r] && i.prepend(e[r]);
          }
          a = s + e.length;
        } else i.prepend(e);
        t.loop && this.loopCreate(), t.observer && o.observer || this.update(), this.slideTo(a, 0, !1);
      },
      addSlide: function addSlide(e, t) {
        var i = this.$wrapperEl,
          s = this.params,
          a = this.activeIndex;
        s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
        var r = this.slides.length;
        if (e <= 0) this.prependSlide(t);else if (e >= r) this.appendSlide(t);else {
          for (var n = a > e ? a + 1 : a, l = [], d = r - 1; d >= e; d -= 1) {
            var h = this.slides.eq(d);
            h.remove(), l.unshift(h);
          }
          if ("object" == _typeof(t) && "length" in t) {
            for (var p = 0; p < t.length; p += 1) {
              t[p] && i.append(t[p]);
            }
            n = a > e ? a + t.length : a;
          } else i.append(t);
          for (var c = 0; c < l.length; c += 1) {
            i.append(l[c]);
          }
          s.loop && this.loopCreate(), s.observer && o.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1);
        }
      },
      removeSlide: function removeSlide(e) {
        var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;
        t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
        var a,
          r = s;
        if ("object" == _typeof(e) && "length" in e) {
          for (var n = 0; n < e.length; n += 1) {
            a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
          }
          r = Math.max(r, 0);
        } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
        t.loop && this.loopCreate(), t.observer && o.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
      },
      removeAllSlides: function removeAllSlides() {
        for (var e = [], t = 0; t < this.slides.length; t += 1) {
          e.push(t);
        }
        this.removeSlide(e);
      }
    },
    I = (m = t.navigator.platform, g = t.navigator.userAgent, b = {
      ios: !1,
      android: !1,
      androidChrome: !1,
      desktop: !1,
      iphone: !1,
      ipod: !1,
      ipad: !1,
      edge: !1,
      ie: !1,
      firefox: !1,
      macos: !1,
      windows: !1,
      cordova: !(!t.cordova && !t.phonegap),
      phonegap: !(!t.cordova && !t.phonegap),
      electron: !1
    }, w = t.screen.width, y = t.screen.height, x = g.match(/(Android);?[\s\/]+([\d.]+)?/), T = g.match(/(iPad).*OS\s([\d_]+)/), E = g.match(/(iPod)(.*OS\s([\d_]+))?/), S = !T && g.match(/(iPhone\sOS|iOS)\s([\d_]+)/), C = g.indexOf("MSIE ") >= 0 || g.indexOf("Trident/") >= 0, M = g.indexOf("Edge/") >= 0, P = g.indexOf("Gecko/") >= 0 && g.indexOf("Firefox/") >= 0, z = "Win32" === m, k = g.toLowerCase().indexOf("electron") >= 0, $ = "MacIntel" === m, !T && $ && o.touch && (1024 === w && 1366 === y || 834 === w && 1194 === y || 834 === w && 1112 === y || 768 === w && 1024 === y) && (T = g.match(/(Version)\/([\d.]+)/), $ = !1), b.ie = C, b.edge = M, b.firefox = P, x && !z && (b.os = "android", b.osVersion = x[2], b.android = !0, b.androidChrome = g.toLowerCase().indexOf("chrome") >= 0), (T || S || E) && (b.os = "ios", b.ios = !0), S && !E && (b.osVersion = S[2].replace(/_/g, "."), b.iphone = !0), T && (b.osVersion = T[2].replace(/_/g, "."), b.ipad = !0), E && (b.osVersion = E[3] ? E[3].replace(/_/g, ".") : null, b.ipod = !0), b.ios && b.osVersion && g.indexOf("Version/") >= 0 && "10" === b.osVersion.split(".")[0] && (b.osVersion = g.toLowerCase().split("version/")[1].split(" ")[0]), b.webView = !(!(S || T || E) || !g.match(/.*AppleWebKit(?!.*Safari)/i) && !t.navigator.standalone) || t.matchMedia && t.matchMedia("(display-mode: standalone)").matches, b.webview = b.webView, b.standalone = b.webView, b.desktop = !(b.ios || b.android) || k, b.desktop && (b.electron = k, b.macos = $, b.windows = z, b.macos && (b.os = "macos"), b.windows && (b.os = "windows")), b.pixelRatio = t.devicePixelRatio || 1, b);
  function D(i) {
    var a = this.touchEventsData,
      r = this.params,
      o = this.touches;
    if (!this.animating || !r.preventInteractionOnTransition) {
      var l = i;
      l.originalEvent && (l = l.originalEvent);
      var d = s(l.target);
      if (("wrapper" !== r.touchEventsTarget || d.closest(this.wrapperEl).length) && (a.isTouchEvent = "touchstart" === l.type, (a.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!a.isTouchEvent && "button" in l && l.button > 0 || a.isTouched && a.isMoved))) if (r.noSwiping && d.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;else if (!r.swipeHandler || d.closest(r.swipeHandler)[0]) {
        o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
        var h = o.currentX,
          p = o.currentY,
          c = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
          u = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
        if (!c || !(h <= u || h >= t.screen.width - u)) {
          if (n.extend(a, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
          }), o.startX = h, o.startY = p, a.touchStartTime = n.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== l.type) {
            var v = !0;
            d.is(a.formElements) && (v = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== d[0] && e.activeElement.blur();
            var f = v && this.allowTouchMove && r.touchStartPreventDefault;
            (r.touchStartForcePreventDefault || f) && l.preventDefault();
          }
          this.emit("touchStart", l);
        }
      }
    }
  }
  function O(t) {
    var i = this.touchEventsData,
      a = this.params,
      r = this.touches,
      o = this.rtlTranslate,
      l = t;
    if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
      if (!i.isTouchEvent || "mousemove" !== l.type) {
        var d = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
          h = "touchmove" === l.type ? d.pageX : l.pageX,
          p = "touchmove" === l.type ? d.pageY : l.pageY;
        if (l.preventedByNestedSwiper) return r.startX = h, void (r.startY = p);
        if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (n.extend(r, {
          startX: h,
          startY: p,
          currentX: h,
          currentY: p
        }), i.touchStartTime = n.now()));
        if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop) if (this.isVertical()) {
          if (p < r.startY && this.translate <= this.maxTranslate() || p > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
        } else if (h < r.startX && this.translate <= this.maxTranslate() || h > r.startX && this.translate >= this.minTranslate()) return;
        if (i.isTouchEvent && e.activeElement && l.target === e.activeElement && s(l.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);
        if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
          r.currentX = h, r.currentY = p;
          var c = r.currentX - r.startX,
            u = r.currentY - r.startY;
          if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold)) {
            var v;
            if (void 0 === i.isScrolling) this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (v = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? v > a.touchAngle : 90 - v > a.touchAngle);
            if (i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
              this.allowClick = !1, a.cssMode || l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
              var f = this.isHorizontal() ? c : u;
              r.diff = f, f *= a.touchRatio, o && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
              var m = !0,
                g = a.resistanceRatio;
              if (a.touchReleaseOnEdges && (g = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (m = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, g))) : f < 0 && i.currentTranslate < this.maxTranslate() && (m = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, g))), m && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                if (!(Math.abs(f) > a.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
              }
              a.followFinger && !a.cssMode && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({
                position: r[this.isHorizontal() ? "startX" : "startY"],
                time: i.touchStartTime
              }), i.velocities.push({
                position: r[this.isHorizontal() ? "currentX" : "currentY"],
                time: n.now()
              })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate));
            }
          }
        }
      }
    } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l);
  }
  function A(e) {
    var t = this,
      i = t.touchEventsData,
      s = t.params,
      a = t.touches,
      r = t.rtlTranslate,
      o = t.$wrapperEl,
      l = t.slidesGrid,
      d = t.snapGrid,
      h = e;
    if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
    s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var p,
      c = n.now(),
      u = c - i.touchStartTime;
    if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap click", h), u < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)), i.lastClickTime = n.now(), n.nextTick(function () {
      t.destroyed || (t.allowClick = !0);
    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
    if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode) if (s.freeMode) {
      if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
      if (p > -t.maxTranslate()) return void (t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
      if (s.freeModeMomentum) {
        if (i.velocities.length > 1) {
          var v = i.velocities.pop(),
            f = i.velocities.pop(),
            m = v.position - f.position,
            g = v.time - f.time;
          t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || n.now() - v.time > 300) && (t.velocity = 0);
        } else t.velocity = 0;
        t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
        var b = 1e3 * s.freeModeMomentumRatio,
          w = t.velocity * b,
          y = t.translate + w;
        r && (y = -y);
        var x,
          T,
          E = !1,
          S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
        if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (T = !0);else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (T = !0);else if (s.freeModeSticky) {
          for (var C, M = 0; M < d.length; M += 1) {
            if (d[M] > -y) {
              C = M;
              break;
            }
          }
          y = -(y = Math.abs(d[C] - y) < Math.abs(d[C - 1] - y) || "next" === t.swipeDirection ? d[C] : d[C - 1]);
        }
        if (T && t.once("transitionEnd", function () {
          t.loopFix();
        }), 0 !== t.velocity) {
          if (b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), s.freeModeSticky) {
            var P = Math.abs((r ? -y : y) - t.translate),
              z = t.slidesSizesGrid[t.activeIndex];
            b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed;
          }
        } else if (s.freeModeSticky) return void t.slideToClosest();
        s.freeModeMomentumBounce && E ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd(function () {
          t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), o.transitionEnd(function () {
            t && !t.destroyed && t.transitionEnd();
          }));
        })) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd(function () {
          t && !t.destroyed && t.transitionEnd();
        }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses();
      } else if (s.freeModeSticky) return void t.slideToClosest();
      (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
    } else {
      for (var k = 0, $ = t.slidesSizesGrid[0], L = 0; L < l.length; L += s.slidesPerGroup) {
        void 0 !== l[L + s.slidesPerGroup] ? p >= l[L] && p < l[L + s.slidesPerGroup] && (k = L, $ = l[L + s.slidesPerGroup] - l[L]) : p >= l[L] && (k = L, $ = l[l.length - 1] - l[l.length - 2]);
      }
      var I = (p - l[k]) / $;
      if (u > s.longSwipesMs) {
        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection && (I >= s.longSwipesRatio ? t.slideTo(k + s.slidesPerGroup) : t.slideTo(k)), "prev" === t.swipeDirection && (I > 1 - s.longSwipesRatio ? t.slideTo(k + s.slidesPerGroup) : t.slideTo(k));
      } else {
        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(k + s.slidesPerGroup) : t.slideTo(k) : ("next" === t.swipeDirection && t.slideTo(k + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(k));
      }
    }
  }
  function G() {
    var e = this.params,
      t = this.el;
    if (!t || 0 !== t.offsetWidth) {
      e.breakpoints && this.setBreakpoint();
      var i = this.allowSlideNext,
        s = this.allowSlidePrev,
        a = this.snapGrid;
      this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow();
    }
  }
  function B(e) {
    this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
  }
  function H() {
    var e = this.wrapperEl;
    this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? -e.scrollLeft : -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
    var t = this.maxTranslate() - this.minTranslate();
    (0 === t ? 0 : (this.translate - this.minTranslate()) / t) !== this.progress && this.updateProgress(this.translate), this.emit("setTranslate", this.translate, !1);
  }
  var N = !1;
  function X() {}
  var V = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      preventInteractionOnTransition: !1,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: .02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0
    },
    Y = {
      update: h,
      translate: p,
      transition: c,
      slide: u,
      loop: v,
      grabCursor: f,
      manipulation: L,
      events: {
        attachEvents: function attachEvents() {
          var t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl;
          this.onTouchStart = D.bind(this), this.onTouchMove = O.bind(this), this.onTouchEnd = A.bind(this), t.cssMode && (this.onScroll = H.bind(this)), this.onClick = B.bind(this);
          var r = !!t.nested;
          if (!o.touch && o.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, r), e.addEventListener(i.end, this.onTouchEnd, !1);else {
            if (o.touch) {
              var n = !("touchstart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              s.addEventListener(i.start, this.onTouchStart, n), s.addEventListener(i.move, this.onTouchMove, o.passiveListener ? {
                passive: !1,
                capture: r
              } : r), s.addEventListener(i.end, this.onTouchEnd, n), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, n), N || (e.addEventListener("touchstart", X), N = !0);
            }
            (t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, r), e.addEventListener("mouseup", this.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : this.on("observerUpdate", G, !0);
        },
        detachEvents: function detachEvents() {
          var t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl,
            r = !!t.nested;
          if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, r), e.removeEventListener(i.end, this.onTouchEnd, !1);else {
            if (o.touch) {
              var n = !("onTouchStart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              s.removeEventListener(i.start, this.onTouchStart, n), s.removeEventListener(i.move, this.onTouchMove, r), s.removeEventListener(i.end, this.onTouchEnd, n), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, n);
            }
            (t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, r), e.removeEventListener("mouseup", this.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G);
        }
      },
      breakpoints: {
        setBreakpoint: function setBreakpoint() {
          var e = this.activeIndex,
            t = this.initialized,
            i = this.loopedSlides;
          void 0 === i && (i = 0);
          var s = this.params,
            a = this.$el,
            r = s.breakpoints;
          if (r && (!r || 0 !== Object.keys(r).length)) {
            var o = this.getBreakpoint(r);
            if (o && this.currentBreakpoint !== o) {
              var l = o in r ? r[o] : void 0;
              l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerColumn"].forEach(function (e) {
                var t = l[e];
                void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
              });
              var d = l || this.originalParams,
                h = s.slidesPerColumn > 1,
                p = d.slidesPerColumn > 1;
              h && !p ? a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !h && p && (a.addClass(s.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"));
              var c = d.direction && d.direction !== s.direction,
                u = s.loop && (d.slidesPerView !== s.slidesPerView || c);
              c && t && this.changeDirection(), n.extend(this.params, d), n.extend(this, {
                allowTouchMove: this.params.allowTouchMove,
                allowSlideNext: this.params.allowSlideNext,
                allowSlidePrev: this.params.allowSlidePrev
              }), this.currentBreakpoint = o, u && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", d);
            }
          }
        },
        getBreakpoint: function getBreakpoint(e) {
          if (e) {
            var i = !1,
              s = [];
            Object.keys(e).forEach(function (e) {
              s.push(e);
            }), s.sort(function (e, t) {
              return parseInt(e, 10) - parseInt(t, 10);
            });
            for (var a = 0; a < s.length; a += 1) {
              var r = s[a];
              r <= t.innerWidth && (i = r);
            }
            return i || "max";
          }
        }
      },
      checkOverflow: {
        checkOverflow: function checkOverflow() {
          var e = this.params,
            t = this.isLocked,
            i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
          e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation.update());
        }
      },
      classes: {
        addClasses: function addClasses() {
          var e = this.classNames,
            t = this.params,
            i = this.rtl,
            s = this.$el,
            a = [];
          a.push("initialized"), a.push(t.direction), t.freeMode && a.push("free-mode"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && (a.push("multirow"), "column" === t.slidesPerColumnFill && a.push("multirow-column")), I.android && a.push("android"), I.ios && a.push("ios"), t.cssMode && a.push("css-mode"), a.forEach(function (i) {
            e.push(t.containerModifierClass + i);
          }), s.addClass(e.join(" "));
        },
        removeClasses: function removeClasses() {
          var e = this.$el,
            t = this.classNames;
          e.removeClass(t.join(" "));
        }
      },
      images: {
        loadImage: function loadImage(e, i, s, a, r, n) {
          var o;
          function l() {
            n && n();
          }
          e.complete && r ? l() : i ? ((o = new t.Image()).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l();
        },
        preloadImages: function preloadImages() {
          var e = this;
          function t() {
            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (var i = 0; i < e.imagesToLoad.length; i += 1) {
            var s = e.imagesToLoad[i];
            e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
          }
        }
      }
    },
    F = {},
    W = function (e) {
      function t() {
        for (var i, a, r, l = [], d = arguments.length; d--;) {
          l[d] = arguments[d];
        }
        1 === l.length && l[0].constructor && l[0].constructor === Object ? r = l[0] : (a = (i = l)[0], r = i[1]), r || (r = {}), r = n.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), Object.keys(Y).forEach(function (e) {
          Object.keys(Y[e]).forEach(function (i) {
            t.prototype[i] || (t.prototype[i] = Y[e][i]);
          });
        });
        var h = this;
        void 0 === h.modules && (h.modules = {}), Object.keys(h.modules).forEach(function (e) {
          var t = h.modules[e];
          if (t.params) {
            var i = Object.keys(t.params)[0],
              s = t.params[i];
            if ("object" != _typeof(s) || null === s) return;
            if (!(i in r && "enabled" in s)) return;
            !0 === r[i] && (r[i] = {
              enabled: !0
            }), "object" != _typeof(r[i]) || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {
              enabled: !1
            });
          }
        });
        var p = n.extend({}, V);
        h.useModulesParams(p), h.params = n.extend({}, p, F, r), h.originalParams = n.extend({}, h.params), h.passedParams = n.extend({}, r), h.$ = s;
        var c = s(h.params.el);
        if (a = c[0]) {
          if (c.length > 1) {
            var u = [];
            return c.each(function (e, i) {
              var s = n.extend({}, r, {
                el: i
              });
              u.push(new t(s));
            }), u;
          }
          var v, f, m;
          return a.swiper = h, c.data("swiper", h), a && a.shadowRoot && a.shadowRoot.querySelector ? (v = s(a.shadowRoot.querySelector("." + h.params.wrapperClass))).children = function (e) {
            return c.children(e);
          } : v = c.children("." + h.params.wrapperClass), n.extend(h, {
            $el: c,
            el: a,
            $wrapperEl: v,
            wrapperEl: v[0],
            classNames: [],
            slides: s(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: function isHorizontal() {
              return "horizontal" === h.params.direction;
            },
            isVertical: function isVertical() {
              return "vertical" === h.params.direction;
            },
            rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
            rtlTranslate: "horizontal" === h.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
            wrongRTL: "-webkit-box" === v.css("display"),
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: h.params.allowSlideNext,
            allowSlidePrev: h.params.allowSlidePrev,
            touchEvents: (f = ["touchstart", "touchmove", "touchend", "touchcancel"], m = ["mousedown", "mousemove", "mouseup"], o.pointerEvents && (m = ["pointerdown", "pointermove", "pointerup"]), h.touchEventsTouch = {
              start: f[0],
              move: f[1],
              end: f[2],
              cancel: f[3]
            }, h.touchEventsDesktop = {
              start: m[0],
              move: m[1],
              end: m[2]
            }, o.touch || !h.params.simulateTouch ? h.touchEventsTouch : h.touchEventsDesktop),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              formElements: "input, select, option, textarea, button, video",
              lastClickTime: n.now(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: h.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), h.useModules(), h.params.init && h.init(), h;
        }
      }
      e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
      var i = {
        extendedDefaults: {
          configurable: !0
        },
        defaults: {
          configurable: !0
        },
        Class: {
          configurable: !0
        },
        $: {
          configurable: !0
        }
      };
      return t.prototype.slidesPerViewDynamic = function () {
        var e = this.params,
          t = this.slides,
          i = this.slidesGrid,
          s = this.size,
          a = this.activeIndex,
          r = 1;
        if (e.centeredSlides) {
          for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) {
            t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
          }
          for (var d = a - 1; d >= 0; d -= 1) {
            t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0));
          }
        } else for (var h = a + 1; h < t.length; h += 1) {
          i[h] - i[a] < s && (r += 1);
        }
        return r;
      }, t.prototype.update = function () {
        var e = this;
        if (e && !e.destroyed) {
          var t = e.snapGrid,
            i = e.params;
          i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
        }
        function s() {
          var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
        }
      }, t.prototype.changeDirection = function (e, t) {
        void 0 === t && (t = !0);
        var i = this.params.direction;
        return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e ? this : (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.params.direction = e, this.slides.each(function (t, i) {
          "vertical" === e ? i.style.width = "" : i.style.height = "";
        }), this.emit("changeDirection"), t && this.update(), this);
      }, t.prototype.init = function () {
        this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"));
      }, t.prototype.destroy = function (e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        var i = this,
          s = i.params,
          a = i.$el,
          r = i.$wrapperEl,
          o = i.slides;
        return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
          i.off(e);
        }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), n.deleteProps(i)), i.destroyed = !0, null);
      }, t.extendDefaults = function (e) {
        n.extend(F, e);
      }, i.extendedDefaults.get = function () {
        return F;
      }, i.defaults.get = function () {
        return V;
      }, i.Class.get = function () {
        return e;
      }, i.$.get = function () {
        return s;
      }, Object.defineProperties(t, i), t;
    }(l),
    R = {
      name: "device",
      proto: {
        device: I
      },
      static: {
        device: I
      }
    },
    q = {
      name: "support",
      proto: {
        support: o
      },
      static: {
        support: o
      }
    },
    j = {
      isEdge: !!t.navigator.userAgent.match(/Edge/g),
      isSafari: function () {
        var e = t.navigator.userAgent.toLowerCase();
        return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
      }(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
    },
    K = {
      name: "browser",
      proto: {
        browser: j
      },
      static: {
        browser: j
      }
    },
    U = {
      name: "resize",
      create: function create() {
        var e = this;
        n.extend(e, {
          resize: {
            resizeHandler: function resizeHandler() {
              e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function orientationChangeHandler() {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            }
          }
        });
      },
      on: {
        init: function init() {
          t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler);
        },
        destroy: function destroy() {
          t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
        }
      }
    },
    _ = {
      func: t.MutationObserver || t.WebkitMutationObserver,
      attach: function attach(e, i) {
        void 0 === i && (i = {});
        var s = this,
          a = new (0, _.func)(function (e) {
            if (1 !== e.length) {
              var i = function i() {
                s.emit("observerUpdate", e[0]);
              };
              t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0);
            } else s.emit("observerUpdate", e[0]);
          });
        a.observe(e, {
          attributes: void 0 === i.attributes || i.attributes,
          childList: void 0 === i.childList || i.childList,
          characterData: void 0 === i.characterData || i.characterData
        }), s.observer.observers.push(a);
      },
      init: function init() {
        if (o.observer && this.params.observer) {
          if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) {
            this.observer.attach(e[t]);
          }
          this.observer.attach(this.$el[0], {
            childList: this.params.observeSlideChildren
          }), this.observer.attach(this.$wrapperEl[0], {
            attributes: !1
          });
        }
      },
      destroy: function destroy() {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }), this.observer.observers = [];
      }
    },
    Z = {
      name: "observer",
      params: {
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
      },
      create: function create() {
        n.extend(this, {
          observer: {
            init: _.init.bind(this),
            attach: _.attach.bind(this),
            destroy: _.destroy.bind(this),
            observers: []
          }
        });
      },
      on: {
        init: function init() {
          this.observer.init();
        },
        destroy: function destroy() {
          this.observer.destroy();
        }
      }
    },
    Q = {
      update: function update(e) {
        var t = this,
          i = t.params,
          s = i.slidesPerView,
          a = i.slidesPerGroup,
          r = i.centeredSlides,
          o = t.params.virtual,
          l = o.addSlidesBefore,
          d = o.addSlidesAfter,
          h = t.virtual,
          p = h.from,
          c = h.to,
          u = h.slides,
          v = h.slidesGrid,
          f = h.renderSlide,
          m = h.offset;
        t.updateActiveIndex();
        var g,
          b,
          w,
          y = t.activeIndex || 0;
        g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (b = Math.floor(s / 2) + a + l, w = Math.floor(s / 2) + a + d) : (b = s + (a - 1) + l, w = a + d);
        var x = Math.max((y || 0) - w, 0),
          T = Math.min((y || 0) + b, u.length - 1),
          E = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);
        function S() {
          t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
        }
        if (n.extend(t.virtual, {
          from: x,
          to: T,
          offset: E,
          slidesGrid: t.slidesGrid
        }), p === x && c === T && !e) return t.slidesGrid !== v && E !== m && t.slides.css(g, E + "px"), void t.updateProgress();
        if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
          offset: E,
          from: x,
          to: T,
          slides: function () {
            for (var e = [], t = x; t <= T; t += 1) {
              e.push(u[t]);
            }
            return e;
          }()
        }), void S();
        var C = [],
          M = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var P = p; P <= c; P += 1) {
          (P < x || P > T) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + P + '"]').remove();
        }
        for (var z = 0; z < u.length; z += 1) {
          z >= x && z <= T && (void 0 === c || e ? M.push(z) : (z > c && M.push(z), z < p && C.push(z)));
        }
        M.forEach(function (e) {
          t.$wrapperEl.append(f(u[e], e));
        }), C.sort(function (e, t) {
          return t - e;
        }).forEach(function (e) {
          t.$wrapperEl.prepend(f(u[e], e));
        }), t.$wrapperEl.children(".swiper-slide").css(g, E + "px"), S();
      },
      renderSlide: function renderSlide(e, t) {
        var i = this.params.virtual;
        if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
        var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
        return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a;
      },
      appendSlide: function appendSlide(e) {
        if ("object" == _typeof(e) && "length" in e) for (var t = 0; t < e.length; t += 1) {
          e[t] && this.virtual.slides.push(e[t]);
        } else this.virtual.slides.push(e);
        this.virtual.update(!0);
      },
      prependSlide: function prependSlide(e) {
        var t = this.activeIndex,
          i = t + 1,
          s = 1;
        if (Array.isArray(e)) {
          for (var a = 0; a < e.length; a += 1) {
            e[a] && this.virtual.slides.unshift(e[a]);
          }
          i = t + e.length, s = e.length;
        } else this.virtual.slides.unshift(e);
        if (this.params.virtual.cache) {
          var r = this.virtual.cache,
            n = {};
          Object.keys(r).forEach(function (e) {
            var t = r[e],
              i = t.attr("data-swiper-slide-index");
            i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t;
          }), this.virtual.cache = n;
        }
        this.virtual.update(!0), this.slideTo(i, 0);
      },
      removeSlide: function removeSlide(e) {
        if (null != e) {
          var t = this.activeIndex;
          if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) {
            this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);
          } else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
          this.virtual.update(!0), this.slideTo(t, 0);
        }
      },
      removeAllSlides: function removeAllSlides() {
        this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0);
      }
    },
    J = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      },
      create: function create() {
        n.extend(this, {
          virtual: {
            update: Q.update.bind(this),
            appendSlide: Q.appendSlide.bind(this),
            prependSlide: Q.prependSlide.bind(this),
            removeSlide: Q.removeSlide.bind(this),
            removeAllSlides: Q.removeAllSlides.bind(this),
            renderSlide: Q.renderSlide.bind(this),
            slides: this.params.virtual.slides,
            cache: {}
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          if (this.params.virtual.enabled) {
            this.classNames.push(this.params.containerModifierClass + "virtual");
            var e = {
              watchSlidesProgress: !0
            };
            n.extend(this.params, e), n.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update();
          }
        },
        setTranslate: function setTranslate() {
          this.params.virtual.enabled && this.virtual.update();
        }
      }
    },
    ee = {
      handle: function handle(i) {
        var s = this.rtlTranslate,
          a = i;
        a.originalEvent && (a = a.originalEvent);
        var r = a.keyCode || a.charCode;
        if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r || 34 === r)) return !1;
        if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r || 33 === r)) return !1;
        if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
          if (this.params.keyboard.onlyInViewport && (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)) {
            var n = !1;
            if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
            var o = t.innerWidth,
              l = t.innerHeight,
              d = this.$el.offset();
            s && (d.left -= this.$el[0].scrollLeft);
            for (var h = [[d.left, d.top], [d.left + this.width, d.top], [d.left, d.top + this.height], [d.left + this.width, d.top + this.height]], p = 0; p < h.length; p += 1) {
              var c = h[p];
              c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0);
            }
            if (!n) return;
          }
          this.isHorizontal() ? (33 !== r && 34 !== r && 37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (34 !== r && 39 !== r || s) && (33 !== r && 37 !== r || !s) || this.slideNext(), (33 !== r && 37 !== r || s) && (34 !== r && 39 !== r || !s) || this.slidePrev()) : (33 !== r && 34 !== r && 38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 34 !== r && 40 !== r || this.slideNext(), 33 !== r && 38 !== r || this.slidePrev()), this.emit("keyPress", r);
        }
      },
      enable: function enable() {
        this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
      },
      disable: function disable() {
        this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
      }
    },
    te = {
      name: "keyboard",
      params: {
        keyboard: {
          enabled: !1,
          onlyInViewport: !0
        }
      },
      create: function create() {
        n.extend(this, {
          keyboard: {
            enabled: !1,
            enable: ee.enable.bind(this),
            disable: ee.disable.bind(this),
            handle: ee.handle.bind(this)
          }
        });
      },
      on: {
        init: function init() {
          this.params.keyboard.enabled && this.keyboard.enable();
        },
        destroy: function destroy() {
          this.keyboard.enabled && this.keyboard.disable();
        }
      }
    };
  var ie = {
      lastScrollTime: n.now(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: function event() {
        return t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
          var t = ("onwheel" in e);
          if (!t) {
            var i = e.createElement("div");
            i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel;
          }
          return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t;
        }() ? "wheel" : "mousewheel";
      },
      normalize: function normalize(e) {
        var t = 0,
          i = 0,
          s = 0,
          a = 0;
        return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
          spinX: t,
          spinY: i,
          pixelX: s,
          pixelY: a
        };
      },
      handleMouseEnter: function handleMouseEnter() {
        this.mouseEntered = !0;
      },
      handleMouseLeave: function handleMouseLeave() {
        this.mouseEntered = !1;
      },
      handle: function handle(e) {
        var t = e,
          i = this,
          s = i.params.mousewheel;
        if (i.params.cssMode && t.preventDefault(), !i.mouseEntered && !s.releaseOnEdges) return !0;
        t.originalEvent && (t = t.originalEvent);
        var a = 0,
          r = i.rtlTranslate ? -1 : 1,
          o = ie.normalize(t);
        if (s.forceToAxis) {
          if (i.isHorizontal()) {
            if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
            a = o.pixelX * r;
          } else {
            if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
            a = o.pixelY;
          }
        } else a = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * r : -o.pixelY;
        if (0 === a) return !0;
        if (s.invert && (a = -a), i.params.freeMode) {
          var l = {
              time: n.now(),
              delta: Math.abs(a),
              direction: Math.sign(a)
            },
            d = i.mousewheel.lastEventBeforeSnap,
            h = d && l.time < d.time + 500 && l.delta <= d.delta && l.direction === d.direction;
          if (!h) {
            i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
            var p = i.getTranslate() + a * s.sensitivity,
              c = i.isBeginning,
              u = i.isEnd;
            if (p >= i.minTranslate() && (p = i.minTranslate()), p <= i.maxTranslate() && (p = i.maxTranslate()), i.setTransition(0), i.setTranslate(p), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!c && i.isBeginning || !u && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
              clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
              var v = i.mousewheel.recentWheelEvents;
              v.length >= 15 && v.shift();
              var f = v.length ? v[v.length - 1] : void 0,
                m = v[0];
              if (v.push(l), f && (l.delta > f.delta || l.direction !== f.direction)) v.splice(0);else if (v.length >= 15 && l.time - m.time < 500 && m.delta - l.delta >= 1 && l.delta <= 6) {
                var g = a > 0 ? .8 : .2;
                i.mousewheel.lastEventBeforeSnap = l, v.splice(0), i.mousewheel.timeout = n.nextTick(function () {
                  i.slideToClosest(i.params.speed, !0, void 0, g);
                }, 0);
              }
              i.mousewheel.timeout || (i.mousewheel.timeout = n.nextTick(function () {
                i.mousewheel.lastEventBeforeSnap = l, v.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5);
              }, 500));
            }
            if (h || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), p === i.minTranslate() || p === i.maxTranslate()) return !0;
          }
        } else {
          var b = {
              time: n.now(),
              delta: Math.abs(a),
              direction: Math.sign(a),
              raw: e
            },
            w = i.mousewheel.recentWheelEvents;
          w.length >= 2 && w.shift();
          var y = w.length ? w[w.length - 1] : void 0;
          if (w.push(b), y ? (b.direction !== y.direction || b.delta > y.delta) && i.mousewheel.animateSlider(b) : i.mousewheel.animateSlider(b), i.mousewheel.releaseScroll(b)) return !0;
        }
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
      },
      animateSlider: function animateSlider(e) {
        return e.delta >= 6 && n.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = new t.Date().getTime(), !1);
      },
      releaseScroll: function releaseScroll(e) {
        var t = this.params.mousewheel;
        if (e.direction < 0) {
          if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
        } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
        return !1;
      },
      enable: function enable() {
        var e = ie.event();
        if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
        if (!e) return !1;
        if (this.mousewheel.enabled) return !1;
        var t = this.$el;
        return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0;
      },
      disable: function disable() {
        var e = ie.event();
        if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
        if (!e) return !1;
        if (!this.mousewheel.enabled) return !1;
        var t = this.$el;
        return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0;
      }
    },
    se = {
      update: function update() {
        var e = this.params.navigation;
        if (!this.params.loop) {
          var t = this.navigation,
            i = t.$nextEl,
            s = t.$prevEl;
          s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
        }
      },
      onPrevClick: function onPrevClick(e) {
        e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev();
      },
      onNextClick: function onNextClick(e) {
        e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext();
      },
      init: function init() {
        var e,
          t,
          i = this.params.navigation;
        (i.nextEl || i.prevEl) && (i.nextEl && (e = s(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = s(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), n.extend(this.navigation, {
          $nextEl: e,
          nextEl: e && e[0],
          $prevEl: t,
          prevEl: t && t[0]
        }));
      },
      destroy: function destroy() {
        var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;
        t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass));
      }
    },
    ae = {
      update: function update() {
        var e = this.rtl,
          t = this.params.pagination;
        if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var i,
            a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            r = this.pagination.$el,
            n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
          if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
            var o,
              l,
              d,
              h = this.pagination.bullets;
            if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) h.each(function (e, a) {
              var r = s(a),
                n = r.index();
              n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"), n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"));
            });else {
              var p = h.eq(i),
                c = p.index();
              if (p.addClass(t.bulletActiveClass), t.dynamicBullets) {
                for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1) {
                  h.eq(f).addClass(t.bulletActiveClass + "-main");
                }
                if (this.params.loop) {
                  if (c >= h.length - t.dynamicMainBullets) {
                    for (var m = t.dynamicMainBullets; m >= 0; m -= 1) {
                      h.eq(h.length - m).addClass(t.bulletActiveClass + "-main");
                    }
                    h.eq(h.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev");
                  } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
              }
            }
            if (t.dynamicBullets) {
              var g = Math.min(h.length, t.dynamicMainBullets + 4),
                b = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                w = e ? "right" : "left";
              h.css(this.isHorizontal() ? w : "top", b + "px");
            }
          }
          if ("fraction" === t.type && (r.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), r.find("." + t.totalClass).text(t.formatFractionTotal(n))), "progressbar" === t.type) {
            var y;
            y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
            var x = (i + 1) / n,
              T = 1,
              E = 1;
            "horizontal" === y ? T = x : E = x, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + E + ")").transition(this.params.speed);
          }
          "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
        }
      },
      render: function render() {
        var e = this.params.pagination;
        if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            i = this.pagination.$el,
            s = "";
          if ("bullets" === e.type) {
            for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) {
              e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
            }
            i.html(s), this.pagination.bullets = i.find("." + e.bulletClass);
          }
          "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
        }
      },
      init: function init() {
        var e = this,
          t = e.params.pagination;
        if (t.el) {
          var i = s(t.el);
          0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function (t) {
            t.preventDefault();
            var i = s(this).index() * e.params.slidesPerGroup;
            e.params.loop && (i += e.loopedSlides), e.slideTo(i);
          }), n.extend(e.pagination, {
            $el: i,
            el: i[0]
          }));
        }
      },
      destroy: function destroy() {
        var e = this.params.pagination;
        if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var t = this.pagination.$el;
          t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass);
        }
      }
    },
    re = {
      setTranslate: function setTranslate() {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
            t = this.rtlTranslate,
            i = this.progress,
            s = e.dragSize,
            a = e.trackSize,
            r = e.$dragEl,
            n = e.$el,
            o = this.params.scrollbar,
            l = s,
            d = (a - s) * i;
          t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
            n[0].style.opacity = 0, n.transition(400);
          }, 1e3));
        }
      },
      setTransition: function setTransition(e) {
        this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
      },
      updateSize: function updateSize() {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
            t = e.$dragEl,
            i = e.$el;
          t[0].style.width = "", t[0].style.height = "";
          var s,
            a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            r = this.size / this.virtualSize,
            o = r * (a / this.size);
          s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), n.extend(e, {
            trackSize: a,
            divider: r,
            moveDivider: o,
            dragSize: s
          }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
        }
      },
      getPointerPosition: function getPointerPosition(e) {
        return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
      },
      setDragPosition: function setDragPosition(e) {
        var t,
          i = this.scrollbar,
          s = this.rtlTranslate,
          a = i.$el,
          r = i.dragSize,
          n = i.trackSize,
          o = i.dragStartPos;
        t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
        var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
        this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses();
      },
      onDragStart: function onDragStart(e) {
        var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el,
          r = i.$dragEl;
        this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e);
      },
      onDragMove: function onDragMove(e) {
        var t = this.scrollbar,
          i = this.$wrapperEl,
          s = t.$el,
          a = t.$dragEl;
        this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
      },
      onDragEnd: function onDragEnd(e) {
        var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el;
        this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = n.nextTick(function () {
          a.css("opacity", 0), a.transition(400);
        }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest());
      },
      enableDraggable: function enableDraggable() {
        if (this.params.scrollbar.el) {
          var t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            r = t.$el[0],
            n = !(!o.passiveListener || !a.passiveListeners) && {
              passive: !1,
              capture: !1
            },
            l = !(!o.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1
            };
          o.touch ? (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, l));
        }
      },
      disableDraggable: function disableDraggable() {
        if (this.params.scrollbar.el) {
          var t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            r = t.$el[0],
            n = !(!o.passiveListener || !a.passiveListeners) && {
              passive: !1,
              capture: !1
            },
            l = !(!o.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1
            };
          o.touch ? (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, l));
        }
      },
      init: function init() {
        if (this.params.scrollbar.el) {
          var e = this.scrollbar,
            t = this.$el,
            i = this.params.scrollbar,
            a = s(i.el);
          this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
          var r = a.find("." + this.params.scrollbar.dragClass);
          0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), n.extend(e, {
            $el: a,
            el: a[0],
            $dragEl: r,
            dragEl: r[0]
          }), i.draggable && e.enableDraggable();
        }
      },
      destroy: function destroy() {
        this.scrollbar.disableDraggable();
      }
    },
    ne = {
      setTransform: function setTransform(e, t) {
        var i = this.rtl,
          a = s(e),
          r = i ? -1 : 1,
          n = a.attr("data-swiper-parallax") || "0",
          o = a.attr("data-swiper-parallax-x"),
          l = a.attr("data-swiper-parallax-y"),
          d = a.attr("data-swiper-parallax-scale"),
          h = a.attr("data-swiper-parallax-opacity");
        if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != h) {
          var p = h - (h - 1) * (1 - Math.abs(t));
          a[0].style.opacity = p;
        }
        if (null == d) a.transform("translate3d(" + o + ", " + l + ", 0px)");else {
          var c = d - (d - 1) * (1 - Math.abs(t));
          a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")");
        }
      },
      setTranslate: function setTranslate() {
        var e = this,
          t = e.$el,
          i = e.slides,
          a = e.progress,
          r = e.snapGrid;
        t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t, i) {
          e.parallax.setTransform(i, a);
        }), i.each(function (t, i) {
          var n = i.progress;
          e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t, i) {
            e.parallax.setTransform(i, n);
          });
        });
      },
      setTransition: function setTransition(e) {
        void 0 === e && (e = this.params.speed);
        this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t, i) {
          var a = s(i),
            r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
          0 === e && (r = 0), a.transition(r);
        });
      }
    },
    oe = {
      getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
      },
      onGestureStart: function onGestureStart(e) {
        var t = this.params.zoom,
          i = this.zoom,
          a = i.gesture;
        if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !o.gestures) {
          if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
          i.fakeGestureTouched = !0, a.scaleStart = oe.getDistanceBetweenTouches(e);
        }
        a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0;
      },
      onGestureChange: function onGestureChange(e) {
        var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;
        if (!o.gestures) {
          if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
          i.fakeGestureMoved = !0, s.scaleMove = oe.getDistanceBetweenTouches(e);
        }
        s.$imageEl && 0 !== s.$imageEl.length && (o.gestures ? i.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
      },
      onGestureEnd: function onGestureEnd(e) {
        var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;
        if (!o.gestures) {
          if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
          if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !I.android) return;
          i.fakeGestureTouched = !1, i.fakeGestureMoved = !1;
        }
        s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0));
      },
      onTouchStart: function onTouchStart(e) {
        var t = this.zoom,
          i = t.gesture,
          s = t.image;
        i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (I.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
      },
      onTouchMove: function onTouchMove(e) {
        var t = this.zoom,
          i = t.gesture,
          s = t.image,
          a = t.velocity;
        if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
          s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = n.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = n.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
          var r = s.width * t.scale,
            o = s.height * t.scale;
          if (!(r < i.slideWidth && o < i.slideHeight)) {
            if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
              if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
              if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
            }
            e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
          }
        }
      },
      onTouchEnd: function onTouchEnd() {
        var e = this.zoom,
          t = e.gesture,
          i = e.image,
          s = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
          i.isTouched = !1, i.isMoved = !1;
          var a = 300,
            r = 300,
            n = s.x * a,
            o = i.currentX + n,
            l = s.y * r,
            d = i.currentY + l;
          0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
          var h = Math.max(a, r);
          i.currentX = o, i.currentY = d;
          var p = i.width * e.scale,
            c = i.height * e.scale;
          i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
        }
      },
      onTransitionEnd: function onTransitionEnd() {
        var e = this.zoom,
          t = e.gesture;
        t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0);
      },
      toggle: function toggle(e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in: function _in(e) {
        var t,
          i,
          a,
          r,
          n,
          o,
          l,
          d,
          h,
          p,
          c,
          u,
          v,
          f,
          m,
          g,
          b = this.zoom,
          w = this.params.zoom,
          y = b.gesture,
          x = b.image;
        (y.$slideEl || (y.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (m = y.$slideEl[0].offsetWidth, g = y.$slideEl[0].offsetHeight, a = y.$slideEl.offset().left + m / 2 - t, r = y.$slideEl.offset().top + g / 2 - i, l = y.$imageEl[0].offsetWidth, d = y.$imageEl[0].offsetHeight, h = l * b.scale, p = d * b.scale, v = -(c = Math.min(m / 2 - h / 2, 0)), f = -(u = Math.min(g / 2 - p / 2, 0)), (n = a * b.scale) < c && (n = c), n > v && (n = v), (o = r * b.scale) < u && (o = u), o > f && (o = f)) : (n = 0, o = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"));
      },
      out: function out() {
        var e = this.zoom,
          t = this.params.zoom,
          i = e.gesture;
        i.$slideEl || (i.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0);
      },
      enable: function enable() {
        var e = this.zoom;
        if (!e.enabled) {
          e.enabled = !0;
          var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
              passive: !0,
              capture: !1
            },
            i = !o.passiveListener || {
              passive: !1,
              capture: !0
            };
          o.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i);
        }
      },
      disable: function disable() {
        var e = this.zoom;
        if (e.enabled) {
          this.zoom.enabled = !1;
          var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
              passive: !0,
              capture: !1
            },
            i = !o.passiveListener || {
              passive: !1,
              capture: !0
            };
          o.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i);
        }
      }
    },
    le = {
      loadInSlide: function loadInSlide(e, t) {
        void 0 === t && (t = !0);
        var i = this,
          a = i.params.lazy;
        if (void 0 !== e && 0 !== i.slides.length) {
          var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
            n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
          !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function (e, n) {
            var o = s(n);
            o.addClass(a.loadingClass);
            var l = o.attr("data-background"),
              d = o.attr("data-src"),
              h = o.attr("data-srcset"),
              p = o.attr("data-sizes");
            i.loadImage(o[0], d || l, h, p, !1, function () {
              if (null != i && i && (!i || i.params) && !i.destroyed) {
                if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && t) {
                  var e = r.attr("data-swiper-slide-index");
                  if (r.hasClass(i.params.slideDuplicateClass)) {
                    var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                    i.lazy.loadInSlide(s.index(), !1);
                  } else {
                    var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                    i.lazy.loadInSlide(n.index(), !1);
                  }
                }
                i.emit("lazyImageReady", r[0], o[0]);
              }
            }), i.emit("lazyImageLoad", r[0], o[0]);
          });
        }
      },
      load: function load() {
        var e = this,
          t = e.$wrapperEl,
          i = e.params,
          a = e.slides,
          r = e.activeIndex,
          n = e.virtual && i.virtual.enabled,
          o = i.lazy,
          l = i.slidesPerView;
        function d(e) {
          if (n) {
            if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
          } else if (a[e]) return !0;
          return !1;
        }
        function h(e) {
          return n ? s(e).attr("data-swiper-slide-index") : s(e).index();
        }
        if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (t, i) {
          var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
          e.lazy.loadInSlide(a);
        });else if (l > 1) for (var p = r; p < r + l; p += 1) {
          d(p) && e.lazy.loadInSlide(p);
        } else e.lazy.loadInSlide(r);
        if (o.loadPrevNext) if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
          for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1) {
            d(m) && e.lazy.loadInSlide(m);
          }
          for (var g = f; g < r; g += 1) {
            d(g) && e.lazy.loadInSlide(g);
          }
        } else {
          var b = t.children("." + i.slideNextClass);
          b.length > 0 && e.lazy.loadInSlide(h(b));
          var w = t.children("." + i.slidePrevClass);
          w.length > 0 && e.lazy.loadInSlide(h(w));
        }
      }
    },
    de = {
      LinearSpline: function LinearSpline(e, t) {
        var i,
          s,
          a,
          r,
          n,
          o = function o(e, t) {
            for (s = -1, i = e.length; i - s > 1;) {
              e[a = i + s >> 1] <= t ? s = a : i = a;
            }
            return i;
          };
        return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
          return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
        }, this;
      },
      getInterpolateFunction: function getInterpolateFunction(e) {
        this.controller.spline || (this.controller.spline = this.params.loop ? new de.LinearSpline(this.slidesGrid, e.slidesGrid) : new de.LinearSpline(this.snapGrid, e.snapGrid));
      },
      setTranslate: function setTranslate(e, t) {
        var i,
          s,
          a = this,
          r = a.controller.control;
        function n(e) {
          var t = a.rtlTranslate ? -a.translate : a.translate;
          "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) {
          r[o] !== t && r[o] instanceof W && n(r[o]);
        } else r instanceof W && t !== r && n(r);
      },
      setTransition: function setTransition(e, t) {
        var i,
          s = this,
          a = s.controller.control;
        function r(t) {
          t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && n.nextTick(function () {
            t.updateAutoHeight();
          }), t.$wrapperEl.transitionEnd(function () {
            a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
          }));
        }
        if (Array.isArray(a)) for (i = 0; i < a.length; i += 1) {
          a[i] !== t && a[i] instanceof W && r(a[i]);
        } else a instanceof W && t !== a && r(a);
      }
    },
    he = {
      makeElFocusable: function makeElFocusable(e) {
        return e.attr("tabIndex", "0"), e;
      },
      addElRole: function addElRole(e, t) {
        return e.attr("role", t), e;
      },
      addElLabel: function addElLabel(e, t) {
        return e.attr("aria-label", t), e;
      },
      disableEl: function disableEl(e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function enableEl(e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterKey: function onEnterKey(e) {
        var t = this.params.a11y;
        if (13 === e.keyCode) {
          var i = s(e.target);
          this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click();
        }
      },
      notify: function notify(e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function updateNavigation() {
        if (!this.params.loop && this.navigation) {
          var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
          i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t));
        }
      },
      updatePagination: function updatePagination() {
        var e = this,
          t = e.params.a11y;
        e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (i, a) {
          var r = s(a);
          e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1));
        });
      },
      init: function init() {
        this.$el.append(this.a11y.liveRegion);
        var e,
          t,
          i = this.params.a11y;
        this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
      },
      destroy: function destroy() {
        var e, t;
        this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
      }
    },
    pe = {
      init: function init() {
        if (this.params.history) {
          if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
          var e = this.history;
          e.initialized = !0, e.paths = pe.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState));
        }
      },
      destroy: function destroy() {
        this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState);
      },
      setHistoryPopState: function setHistoryPopState() {
        this.history.paths = pe.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
      },
      getPathValues: function getPathValues() {
        var e = t.location.pathname.slice(1).split("/").filter(function (e) {
            return "" !== e;
          }),
          i = e.length;
        return {
          key: e[i - 2],
          value: e[i - 1]
        };
      },
      setHistory: function setHistory(e, i) {
        if (this.history.initialized && this.params.history.enabled) {
          var s = this.slides.eq(i),
            a = pe.slugify(s.attr("data-history"));
          t.location.pathname.includes(e) || (a = e + "/" + a);
          var r = t.history.state;
          r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({
            value: a
          }, null, a) : t.history.pushState({
            value: a
          }, null, a));
        }
      },
      slugify: function slugify(e) {
        return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
      },
      scrollToSlide: function scrollToSlide(e, t, i) {
        if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) {
          var r = this.slides.eq(s);
          if (pe.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
            var n = r.index();
            this.slideTo(n, e, i);
          }
        } else this.slideTo(0, e, i);
      }
    },
    ce = {
      onHashCange: function onHashCange() {
        var t = e.location.hash.replace("#", "");
        if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
          var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
          if (void 0 === i) return;
          this.slideTo(i);
        }
      },
      setHash: function setHash() {
        if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");else {
          var i = this.slides.eq(this.activeIndex),
            s = i.attr("data-hash") || i.attr("data-history");
          e.location.hash = s || "";
        }
      },
      init: function init() {
        if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
          this.hashNavigation.initialized = !0;
          var i = e.location.hash.replace("#", "");
          if (i) for (var a = 0, r = this.slides.length; a < r; a += 1) {
            var n = this.slides.eq(a);
            if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
              var o = n.index();
              this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
            }
          }
          this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange);
        }
      },
      destroy: function destroy() {
        this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange);
      }
    },
    ue = {
      run: function run() {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          i = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = n.nextTick(function () {
          e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run();
        }, i);
      },
      start: function start() {
        return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0);
      },
      stop: function stop() {
        return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0);
      },
      pause: function pause(e) {
        this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())));
      }
    },
    ve = {
      setTranslate: function setTranslate() {
        for (var e = this.slides, t = 0; t < e.length; t += 1) {
          var i = this.slides.eq(t),
            s = -i[0].swiperSlideOffset;
          this.params.virtualTranslate || (s -= this.translate);
          var a = 0;
          this.isHorizontal() || (a = s, s = 0);
          var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({
            opacity: r
          }).transform("translate3d(" + s + "px, " + a + "px, 0px)");
        }
      },
      setTransition: function setTransition(e) {
        var t = this,
          i = t.slides,
          s = t.$wrapperEl;
        if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
          var a = !1;
          i.transitionEnd(function () {
            if (!a && t && !t.destroyed) {
              a = !0, t.animating = !1;
              for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) {
                s.trigger(e[i]);
              }
            }
          });
        }
      }
    },
    fe = {
      setTranslate: function setTranslate() {
        var e,
          t = this.$el,
          i = this.$wrapperEl,
          a = this.slides,
          r = this.width,
          n = this.height,
          o = this.rtlTranslate,
          l = this.size,
          d = this.params.cubeEffect,
          h = this.isHorizontal(),
          p = this.virtual && this.params.virtual.enabled,
          c = 0;
        d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
          height: r + "px"
        })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));
        for (var u = 0; u < a.length; u += 1) {
          var v = a.eq(u),
            f = u;
          p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
          var m = 90 * f,
            g = Math.floor(m / 360);
          o && (m = -m, g = Math.floor(-m / 360));
          var b = Math.max(Math.min(v[0].progress, 1), -1),
            w = 0,
            y = 0,
            x = 0;
          f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
          var T = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
          if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
            var E = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
              S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
            0 === E.length && (E = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0));
          }
        }
        if (i.css({
          "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
          "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
          "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
          "transform-origin": "50% 50% -" + l / 2 + "px"
        }), d.shadow) if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");else {
          var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
            M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
            P = d.shadowScale,
            z = d.shadowScale / M,
            k = d.shadowOffset;
          e.transform("scale3d(" + P + ", 1, " + z + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / z + "px) rotateX(-90deg)");
        }
        var $ = j.isSafari || j.isUiWebView ? -l / 2 : 0;
        i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)");
      },
      setTransition: function setTransition(e) {
        var t = this.$el;
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
      }
    },
    me = {
      setTranslate: function setTranslate() {
        for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
          var a = e.eq(i),
            r = a[0].progress;
          this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
          var n = -180 * r,
            o = 0,
            l = -a[0].swiperSlideOffset,
            d = 0;
          if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
            var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
              p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
            0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(h)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0));
          }
          a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
        }
      },
      setTransition: function setTransition(e) {
        var t = this,
          i = t.slides,
          s = t.activeIndex,
          a = t.$wrapperEl;
        if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
          var r = !1;
          i.eq(s).transitionEnd(function () {
            if (!r && t && !t.destroyed) {
              r = !0, t.animating = !1;
              for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) {
                a.trigger(e[i]);
              }
            }
          });
        }
      }
    },
    ge = {
      setTranslate: function setTranslate() {
        for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, l = this.isHorizontal(), d = this.translate, h = l ? e / 2 - d : t / 2 - d, p = l ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) {
          var f = i.eq(u),
            m = r[u],
            g = (h - f[0].swiperSlideOffset - m / 2) / m * n.modifier,
            b = l ? p * g : 0,
            w = l ? 0 : p * g,
            y = -c * Math.abs(g),
            x = l ? 0 : n.stretch * g,
            T = l ? n.stretch * g : 0;
          Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
          var E = "translate3d(" + T + "px," + x + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
          if (f.transform(E), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
            var S = l ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
              C = l ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
            0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), f.append(S)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), f.append(C)), S.length && (S[0].style.opacity = g > 0 ? g : 0), C.length && (C[0].style.opacity = -g > 0 ? -g : 0);
          }
        }
        (o.pointerEvents || o.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = h + "px 50%");
      },
      setTransition: function setTransition(e) {
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
      }
    },
    be = {
      init: function init() {
        var e = this.params.thumbs,
          t = this.constructor;
        e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, n.extend(this.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), n.extend(this.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })) : n.isObject(e.swiper) && (this.thumbs.swiper = new t(n.extend({}, e.swiper, {
          watchSlidesVisibility: !0,
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick);
      },
      onThumbClick: function onThumbClick() {
        var e = this.thumbs.swiper;
        if (e) {
          var t = e.clickedIndex,
            i = e.clickedSlide;
          if (!(i && s(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
            var a;
            if (a = e.params.loop ? parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
              var r = this.activeIndex;
              this.slides.eq(r).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, r = this.activeIndex);
              var n = this.slides.eq(r).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index(),
                o = this.slides.eq(r).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index();
              a = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n;
            }
            this.slideTo(a);
          }
        }
      },
      update: function update(e) {
        var t = this.thumbs.swiper;
        if (t) {
          var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView;
          if (this.realIndex !== t.realIndex) {
            var s,
              a = t.activeIndex;
            if (t.params.loop) {
              t.slides.eq(a).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, a = t.activeIndex);
              var r = t.slides.eq(a).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                n = t.slides.eq(a).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
              s = void 0 === r ? n : void 0 === n ? r : n - a == a - r ? a : n - a < a - r ? n : r;
            } else s = this.realIndex;
            t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(s) < 0 && (t.params.centeredSlides ? s = s > a ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : s > a && (s = s - i + 1), t.slideTo(s, e ? 0 : void 0));
          }
          var o = 1,
            l = this.params.thumbs.slideThumbActiveClass;
          if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (o = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (o = 1), o = Math.floor(o), t.slides.removeClass(l), t.params.loop || t.params.virtual && t.params.virtual.enabled) for (var d = 0; d < o; d += 1) {
            t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + d) + '"]').addClass(l);
          } else for (var h = 0; h < o; h += 1) {
            t.slides.eq(this.realIndex + h).addClass(l);
          }
        }
      }
    },
    we = [R, q, K, U, Z, J, te, {
      name: "mousewheel",
      params: {
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarged: "container"
        }
      },
      create: function create() {
        n.extend(this, {
          mousewheel: {
            enabled: !1,
            enable: ie.enable.bind(this),
            disable: ie.disable.bind(this),
            handle: ie.handle.bind(this),
            handleMouseEnter: ie.handleMouseEnter.bind(this),
            handleMouseLeave: ie.handleMouseLeave.bind(this),
            animateSlider: ie.animateSlider.bind(this),
            releaseScroll: ie.releaseScroll.bind(this),
            lastScrollTime: n.now(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: []
          }
        });
      },
      on: {
        init: function init() {
          !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable();
        },
        destroy: function destroy() {
          this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable();
        }
      }
    }, {
      name: "navigation",
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock"
        }
      },
      create: function create() {
        n.extend(this, {
          navigation: {
            init: se.init.bind(this),
            update: se.update.bind(this),
            destroy: se.destroy.bind(this),
            onNextClick: se.onNextClick.bind(this),
            onPrevClick: se.onPrevClick.bind(this)
          }
        });
      },
      on: {
        init: function init() {
          this.navigation.init(), this.navigation.update();
        },
        toEdge: function toEdge() {
          this.navigation.update();
        },
        fromEdge: function fromEdge() {
          this.navigation.update();
        },
        destroy: function destroy() {
          this.navigation.destroy();
        },
        click: function click(e) {
          var t,
            i = this.navigation,
            a = i.$nextEl,
            r = i.$prevEl;
          !this.params.navigation.hideOnClick || s(e.target).is(r) || s(e.target).is(a) || (a ? t = a.hasClass(this.params.navigation.hiddenClass) : r && (t = r.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), a && a.toggleClass(this.params.navigation.hiddenClass), r && r.toggleClass(this.params.navigation.hiddenClass));
        }
      }
    }, {
      name: "pagination",
      params: {
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: function formatFractionCurrent(e) {
            return e;
          },
          formatFractionTotal: function formatFractionTotal(e) {
            return e;
          },
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          modifierClass: "swiper-pagination-",
          currentClass: "swiper-pagination-current",
          totalClass: "swiper-pagination-total",
          hiddenClass: "swiper-pagination-hidden",
          progressbarFillClass: "swiper-pagination-progressbar-fill",
          progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
          clickableClass: "swiper-pagination-clickable",
          lockClass: "swiper-pagination-lock"
        }
      },
      create: function create() {
        n.extend(this, {
          pagination: {
            init: ae.init.bind(this),
            render: ae.render.bind(this),
            update: ae.update.bind(this),
            destroy: ae.destroy.bind(this),
            dynamicBulletIndex: 0
          }
        });
      },
      on: {
        init: function init() {
          this.pagination.init(), this.pagination.render(), this.pagination.update();
        },
        activeIndexChange: function activeIndexChange() {
          this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update();
        },
        snapIndexChange: function snapIndexChange() {
          this.params.loop || this.pagination.update();
        },
        slidesLengthChange: function slidesLengthChange() {
          this.params.loop && (this.pagination.render(), this.pagination.update());
        },
        snapGridLengthChange: function snapGridLengthChange() {
          this.params.loop || (this.pagination.render(), this.pagination.update());
        },
        destroy: function destroy() {
          this.pagination.destroy();
        },
        click: function click(e) {
          this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass));
        }
      }
    }, {
      name: "scrollbar",
      params: {
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag"
        }
      },
      create: function create() {
        n.extend(this, {
          scrollbar: {
            init: re.init.bind(this),
            destroy: re.destroy.bind(this),
            updateSize: re.updateSize.bind(this),
            setTranslate: re.setTranslate.bind(this),
            setTransition: re.setTransition.bind(this),
            enableDraggable: re.enableDraggable.bind(this),
            disableDraggable: re.disableDraggable.bind(this),
            setDragPosition: re.setDragPosition.bind(this),
            getPointerPosition: re.getPointerPosition.bind(this),
            onDragStart: re.onDragStart.bind(this),
            onDragMove: re.onDragMove.bind(this),
            onDragEnd: re.onDragEnd.bind(this),
            isTouched: !1,
            timeout: null,
            dragTimeout: null
          }
        });
      },
      on: {
        init: function init() {
          this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
        },
        update: function update() {
          this.scrollbar.updateSize();
        },
        resize: function resize() {
          this.scrollbar.updateSize();
        },
        observerUpdate: function observerUpdate() {
          this.scrollbar.updateSize();
        },
        setTranslate: function setTranslate() {
          this.scrollbar.setTranslate();
        },
        setTransition: function setTransition(e) {
          this.scrollbar.setTransition(e);
        },
        destroy: function destroy() {
          this.scrollbar.destroy();
        }
      }
    }, {
      name: "parallax",
      params: {
        parallax: {
          enabled: !1
        }
      },
      create: function create() {
        n.extend(this, {
          parallax: {
            setTransform: ne.setTransform.bind(this),
            setTranslate: ne.setTranslate.bind(this),
            setTransition: ne.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
        },
        init: function init() {
          this.params.parallax.enabled && this.parallax.setTranslate();
        },
        setTranslate: function setTranslate() {
          this.params.parallax.enabled && this.parallax.setTranslate();
        },
        setTransition: function setTransition(e) {
          this.params.parallax.enabled && this.parallax.setTransition(e);
        }
      }
    }, {
      name: "zoom",
      params: {
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed"
        }
      },
      create: function create() {
        var e = this,
          t = {
            enabled: !1,
            scale: 1,
            currentScale: 1,
            isScaling: !1,
            gesture: {
              $slideEl: void 0,
              slideWidth: void 0,
              slideHeight: void 0,
              $imageEl: void 0,
              $imageWrapEl: void 0,
              maxRatio: 3
            },
            image: {
              isTouched: void 0,
              isMoved: void 0,
              currentX: void 0,
              currentY: void 0,
              minX: void 0,
              minY: void 0,
              maxX: void 0,
              maxY: void 0,
              width: void 0,
              height: void 0,
              startX: void 0,
              startY: void 0,
              touchesStart: {},
              touchesCurrent: {}
            },
            velocity: {
              x: void 0,
              y: void 0,
              prevPositionX: void 0,
              prevPositionY: void 0,
              prevTime: void 0
            }
          };
        "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (i) {
          t[i] = oe[i].bind(e);
        }), n.extend(e, {
          zoom: t
        });
        var i = 1;
        Object.defineProperty(e.zoom, "scale", {
          get: function get() {
            return i;
          },
          set: function set(t) {
            if (i !== t) {
              var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
              e.emit("zoomChange", t, s, a);
            }
            i = t;
          }
        });
      },
      on: {
        init: function init() {
          this.params.zoom.enabled && this.zoom.enable();
        },
        destroy: function destroy() {
          this.zoom.disable();
        },
        touchStart: function touchStart(e) {
          this.zoom.enabled && this.zoom.onTouchStart(e);
        },
        touchEnd: function touchEnd(e) {
          this.zoom.enabled && this.zoom.onTouchEnd(e);
        },
        doubleTap: function doubleTap(e) {
          this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
        },
        transitionEnd: function transitionEnd() {
          this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
        },
        slideChange: function slideChange() {
          this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd();
        }
      }
    }, {
      name: "lazy",
      params: {
        lazy: {
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader"
        }
      },
      create: function create() {
        n.extend(this, {
          lazy: {
            initialImageLoaded: !1,
            load: le.load.bind(this),
            loadInSlide: le.loadInSlide.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
        },
        init: function init() {
          this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
        },
        scroll: function scroll() {
          this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
        },
        resize: function resize() {
          this.params.lazy.enabled && this.lazy.load();
        },
        scrollbarDragMove: function scrollbarDragMove() {
          this.params.lazy.enabled && this.lazy.load();
        },
        transitionStart: function transitionStart() {
          this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load();
        },
        transitionEnd: function transitionEnd() {
          this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
        },
        slideChange: function slideChange() {
          this.params.lazy.enabled && this.params.cssMode && this.lazy.load();
        }
      }
    }, {
      name: "controller",
      params: {
        controller: {
          control: void 0,
          inverse: !1,
          by: "slide"
        }
      },
      create: function create() {
        n.extend(this, {
          controller: {
            control: this.params.controller.control,
            getInterpolateFunction: de.getInterpolateFunction.bind(this),
            setTranslate: de.setTranslate.bind(this),
            setTransition: de.setTransition.bind(this)
          }
        });
      },
      on: {
        update: function update() {
          this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
        },
        resize: function resize() {
          this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
        },
        observerUpdate: function observerUpdate() {
          this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
        },
        setTranslate: function setTranslate(e, t) {
          this.controller.control && this.controller.setTranslate(e, t);
        },
        setTransition: function setTransition(e, t) {
          this.controller.control && this.controller.setTransition(e, t);
        }
      }
    }, {
      name: "a11y",
      params: {
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}"
        }
      },
      create: function create() {
        var e = this;
        n.extend(e, {
          a11y: {
            liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
          }
        }), Object.keys(he).forEach(function (t) {
          e.a11y[t] = he[t].bind(e);
        });
      },
      on: {
        init: function init() {
          this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
        },
        toEdge: function toEdge() {
          this.params.a11y.enabled && this.a11y.updateNavigation();
        },
        fromEdge: function fromEdge() {
          this.params.a11y.enabled && this.a11y.updateNavigation();
        },
        paginationUpdate: function paginationUpdate() {
          this.params.a11y.enabled && this.a11y.updatePagination();
        },
        destroy: function destroy() {
          this.params.a11y.enabled && this.a11y.destroy();
        }
      }
    }, {
      name: "history",
      params: {
        history: {
          enabled: !1,
          replaceState: !1,
          key: "slides"
        }
      },
      create: function create() {
        n.extend(this, {
          history: {
            init: pe.init.bind(this),
            setHistory: pe.setHistory.bind(this),
            setHistoryPopState: pe.setHistoryPopState.bind(this),
            scrollToSlide: pe.scrollToSlide.bind(this),
            destroy: pe.destroy.bind(this)
          }
        });
      },
      on: {
        init: function init() {
          this.params.history.enabled && this.history.init();
        },
        destroy: function destroy() {
          this.params.history.enabled && this.history.destroy();
        },
        transitionEnd: function transitionEnd() {
          this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
        },
        slideChange: function slideChange() {
          this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex);
        }
      }
    }, {
      name: "hash-navigation",
      params: {
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1
        }
      },
      create: function create() {
        n.extend(this, {
          hashNavigation: {
            initialized: !1,
            init: ce.init.bind(this),
            destroy: ce.destroy.bind(this),
            setHash: ce.setHash.bind(this),
            onHashCange: ce.onHashCange.bind(this)
          }
        });
      },
      on: {
        init: function init() {
          this.params.hashNavigation.enabled && this.hashNavigation.init();
        },
        destroy: function destroy() {
          this.params.hashNavigation.enabled && this.hashNavigation.destroy();
        },
        transitionEnd: function transitionEnd() {
          this.hashNavigation.initialized && this.hashNavigation.setHash();
        },
        slideChange: function slideChange() {
          this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash();
        }
      }
    }, {
      name: "autoplay",
      params: {
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1
        }
      },
      create: function create() {
        var e = this;
        n.extend(e, {
          autoplay: {
            running: !1,
            paused: !1,
            run: ue.run.bind(e),
            start: ue.start.bind(e),
            stop: ue.stop.bind(e),
            pause: ue.pause.bind(e),
            onVisibilityChange: function onVisibilityChange() {
              "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1);
            },
            onTransitionEnd: function onTransitionEnd(t) {
              e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
            }
          }
        });
      },
      on: {
        init: function init() {
          this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange));
        },
        beforeTransitionStart: function beforeTransitionStart(e, t) {
          this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
        },
        sliderFirstMove: function sliderFirstMove() {
          this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
        },
        touchEnd: function touchEnd() {
          this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run();
        },
        destroy: function destroy() {
          this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange);
        }
      }
    }, {
      name: "effect-fade",
      params: {
        fadeEffect: {
          crossFade: !1
        }
      },
      create: function create() {
        n.extend(this, {
          fadeEffect: {
            setTranslate: ve.setTranslate.bind(this),
            setTransition: ve.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          if ("fade" === this.params.effect) {
            this.classNames.push(this.params.containerModifierClass + "fade");
            var e = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            n.extend(this.params, e), n.extend(this.originalParams, e);
          }
        },
        setTranslate: function setTranslate() {
          "fade" === this.params.effect && this.fadeEffect.setTranslate();
        },
        setTransition: function setTransition(e) {
          "fade" === this.params.effect && this.fadeEffect.setTransition(e);
        }
      }
    }, {
      name: "effect-cube",
      params: {
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: .94
        }
      },
      create: function create() {
        n.extend(this, {
          cubeEffect: {
            setTranslate: fe.setTranslate.bind(this),
            setTransition: fe.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          if ("cube" === this.params.effect) {
            this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
            var e = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0
            };
            n.extend(this.params, e), n.extend(this.originalParams, e);
          }
        },
        setTranslate: function setTranslate() {
          "cube" === this.params.effect && this.cubeEffect.setTranslate();
        },
        setTransition: function setTransition(e) {
          "cube" === this.params.effect && this.cubeEffect.setTransition(e);
        }
      }
    }, {
      name: "effect-flip",
      params: {
        flipEffect: {
          slideShadows: !0,
          limitRotation: !0
        }
      },
      create: function create() {
        n.extend(this, {
          flipEffect: {
            setTranslate: me.setTranslate.bind(this),
            setTransition: me.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          if ("flip" === this.params.effect) {
            this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
            var e = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            n.extend(this.params, e), n.extend(this.originalParams, e);
          }
        },
        setTranslate: function setTranslate() {
          "flip" === this.params.effect && this.flipEffect.setTranslate();
        },
        setTransition: function setTransition(e) {
          "flip" === this.params.effect && this.flipEffect.setTransition(e);
        }
      }
    }, {
      name: "effect-coverflow",
      params: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: !0
        }
      },
      create: function create() {
        n.extend(this, {
          coverflowEffect: {
            setTranslate: ge.setTranslate.bind(this),
            setTransition: ge.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
        },
        setTranslate: function setTranslate() {
          "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
        },
        setTransition: function setTransition(e) {
          "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
        }
      }
    }, {
      name: "thumbs",
      params: {
        thumbs: {
          multipleActiveThumbs: !0,
          swiper: null,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-container-thumbs"
        }
      },
      create: function create() {
        n.extend(this, {
          thumbs: {
            swiper: null,
            init: be.init.bind(this),
            update: be.update.bind(this),
            onThumbClick: be.onThumbClick.bind(this)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var e = this.params.thumbs;
          e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
        },
        slideChange: function slideChange() {
          this.thumbs.swiper && this.thumbs.update();
        },
        update: function update() {
          this.thumbs.swiper && this.thumbs.update();
        },
        resize: function resize() {
          this.thumbs.swiper && this.thumbs.update();
        },
        observerUpdate: function observerUpdate() {
          this.thumbs.swiper && this.thumbs.update();
        },
        setTransition: function setTransition(e) {
          var t = this.thumbs.swiper;
          t && t.setTransition(e);
        },
        beforeDestroy: function beforeDestroy() {
          var e = this.thumbs.swiper;
          e && this.thumbs.swiperCreated && e && e.destroy();
        }
      }
    }];
  return void 0 === W.use && (W.use = W.Class.use, W.installModule = W.Class.installModule), W.use(we), W;
});
"use strict";

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
$(document).ready(function () {
  sliders();
  selects();
  initMap();
  tabs();
  showMapInOrder();
  modals();
  togglePassword();
  copyLink();
  openSearch();
  mobileMenu();
  openSeoText();
  replaceSymbols();

  // jQuery Mask Plugin v1.14.15
  // github.com/igorescobar/jQuery-Mask-Plugin
  var $jscomp = {
    scope: {},
    findInternal: function findInternal(a, l, d) {
      a instanceof String && (a = String(a));
      for (var p = a.length, h = 0; h < p; h++) {
        var b = a[h];
        if (l.call(d, b, h, a)) return {
          i: h,
          v: b
        };
      }
      return {
        i: -1,
        v: void 0
      };
    }
  };
  $jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, l, d) {
    if (d.get || d.set) throw new TypeError("ES3 does not support getters and setters.");
    a != Array.prototype && a != Object.prototype && (a[l] = d.value);
  };
  $jscomp.getGlobal = function (a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a;
  };
  $jscomp.global = $jscomp.getGlobal(this);
  $jscomp.polyfill = function (a, l, d, p) {
    if (l) {
      d = $jscomp.global;
      a = a.split(".");
      for (p = 0; p < a.length - 1; p++) {
        var h = a[p];
        h in d || (d[h] = {});
        d = d[h];
      }
      a = a[a.length - 1];
      p = d[a];
      l = l(p);
      l != p && null != l && $jscomp.defineProperty(d, a, {
        configurable: !0,
        writable: !0,
        value: l
      });
    }
  };
  $jscomp.polyfill("Array.prototype.find", function (a) {
    return a ? a : function (a, d) {
      return $jscomp.findInternal(this, a, d).v;
    };
  }, "es6-impl", "es3");
  (function (a, l, d) {
    "function" === typeof define && define.amd ? define(["jquery"], a) : "object" === (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = a(require("jquery")) : a(l || d);
  })(function (a) {
    var l = function l(b, e, f) {
      var c = {
        invalid: [],
        getCaret: function getCaret() {
          try {
            var a,
              r = 0,
              g = b.get(0),
              e = document.selection,
              f = g.selectionStart;
            if (e && -1 === navigator.appVersion.indexOf("MSIE 10")) a = e.createRange(), a.moveStart("character", -c.val().length), r = a.text.length;else if (f || "0" === f) r = f;
            return r;
          } catch (C) {}
        },
        setCaret: function setCaret(a) {
          try {
            if (b.is(":focus")) {
              var c,
                g = b.get(0);
              g.setSelectionRange ? g.setSelectionRange(a, a) : (c = g.createTextRange(), c.collapse(!0), c.moveEnd("character", a), c.moveStart("character", a), c.select());
            }
          } catch (B) {}
        },
        events: function events() {
          b.on("keydown.mask", function (a) {
            b.data("mask-keycode", a.keyCode || a.which);
            b.data("mask-previus-value", b.val());
            b.data("mask-previus-caret-pos", c.getCaret());
            c.maskDigitPosMapOld = c.maskDigitPosMap;
          }).on(a.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", c.behaviour).on("paste.mask drop.mask", function () {
            setTimeout(function () {
              b.keydown().keyup();
            }, 100);
          }).on("change.mask", function () {
            b.data("changed", !0);
          }).on("blur.mask", function () {
            d === c.val() || b.data("changed") || b.trigger("change");
            b.data("changed", !1);
          }).on("blur.mask", function () {
            d = c.val();
          }).on("focus.mask", function (b) {
            !0 === f.selectOnFocus && a(b.target).select();
          }).on("focusout.mask", function () {
            f.clearIfNotMatch && !h.test(c.val()) && c.val("");
          });
        },
        getRegexMask: function getRegexMask() {
          for (var a = [], b, c, f, n, d = 0; d < e.length; d++) {
            (b = m.translation[e.charAt(d)]) ? (c = b.pattern.toString().replace(/.{1}$|^.{1}/g, ""), f = b.optional, (b = b.recursive) ? (a.push(e.charAt(d)), n = {
              digit: e.charAt(d),
              pattern: c
            }) : a.push(f || b ? c + "?" : c)) : a.push(e.charAt(d).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
          }
          a = a.join("");
          n && (a = a.replace(new RegExp("(" + n.digit + "(.*" + n.digit + ")?)"), "($1)?").replace(new RegExp(n.digit, "g"), n.pattern));
          return new RegExp(a);
        },
        destroyEvents: function destroyEvents() {
          b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "));
        },
        val: function val(a) {
          var c = b.is("input") ? "val" : "text";
          if (0 < arguments.length) {
            if (b[c]() !== a) b[c](a);
            c = b;
          } else c = b[c]();
          return c;
        },
        calculateCaretPosition: function calculateCaretPosition() {
          var a = b.data("mask-previus-value") || "",
            e = c.getMasked(),
            g = c.getCaret();
          if (a !== e) {
            var f = b.data("mask-previus-caret-pos") || 0,
              e = e.length,
              d = a.length,
              m = a = 0,
              h = 0,
              l = 0,
              k;
            for (k = g; k < e && c.maskDigitPosMap[k]; k++) {
              m++;
            }
            for (k = g - 1; 0 <= k && c.maskDigitPosMap[k]; k--) {
              a++;
            }
            for (k = g - 1; 0 <= k; k--) {
              c.maskDigitPosMap[k] && h++;
            }
            for (k = f - 1; 0 <= k; k--) {
              c.maskDigitPosMapOld[k] && l++;
            }
            g > d ? g = 10 * e : f >= g && f !== d ? c.maskDigitPosMapOld[g] || (f = g, g = g - (l - h) - a, c.maskDigitPosMap[g] && (g = f)) : g > f && (g = g + (h - l) + m);
          }
          return g;
        },
        behaviour: function behaviour(f) {
          f = f || window.event;
          c.invalid = [];
          var e = b.data("mask-keycode");
          if (-1 === a.inArray(e, m.byPassKeys)) {
            var e = c.getMasked(),
              g = c.getCaret();
            setTimeout(function () {
              c.setCaret(c.calculateCaretPosition());
            }, a.jMaskGlobals.keyStrokeCompensation);
            c.val(e);
            c.setCaret(g);
            return c.callbacks(f);
          }
        },
        getMasked: function getMasked(a, b) {
          var g = [],
            d = void 0 === b ? c.val() : b + "",
            n = 0,
            h = e.length,
            q = 0,
            l = d.length,
            k = 1,
            r = "push",
            p = -1,
            t = 0,
            y = [],
            v,
            z;
          f.reverse ? (r = "unshift", k = -1, v = 0, n = h - 1, q = l - 1, z = function z() {
            return -1 < n && -1 < q;
          }) : (v = h - 1, z = function z() {
            return n < h && q < l;
          });
          for (var A; z();) {
            var x = e.charAt(n),
              w = d.charAt(q),
              u = m.translation[x];
            if (u) w.match(u.pattern) ? (g[r](w), u.recursive && (-1 === p ? p = n : n === v && n !== p && (n = p - k), v === p && (n -= k)), n += k) : w === A ? (t--, A = void 0) : u.optional ? (n += k, q -= k) : u.fallback ? (g[r](u.fallback), n += k, q -= k) : c.invalid.push({
              p: q,
              v: w,
              e: u.pattern
            }), q += k;else {
              if (!a) g[r](x);
              w === x ? (y.push(q), q += k) : (A = x, y.push(q + t), t++);
              n += k;
            }
          }
          d = e.charAt(v);
          h !== l + 1 || m.translation[d] || g.push(d);
          g = g.join("");
          c.mapMaskdigitPositions(g, y, l);
          return g;
        },
        mapMaskdigitPositions: function mapMaskdigitPositions(a, b, e) {
          a = f.reverse ? a.length - e : 0;
          c.maskDigitPosMap = {};
          for (e = 0; e < b.length; e++) {
            c.maskDigitPosMap[b[e] + a] = 1;
          }
        },
        callbacks: function callbacks(a) {
          var h = c.val(),
            g = h !== d,
            m = [h, a, b, f],
            q = function q(a, b, c) {
              "function" === typeof f[a] && b && f[a].apply(this, c);
            };
          q("onChange", !0 === g, m);
          q("onKeyPress", !0 === g, m);
          q("onComplete", h.length === e.length, m);
          q("onInvalid", 0 < c.invalid.length, [h, a, b, c.invalid, f]);
        }
      };
      b = a(b);
      var m = this,
        d = c.val(),
        h;
      e = "function" === typeof e ? e(c.val(), void 0, b, f) : e;
      m.mask = e;
      m.options = f;
      m.remove = function () {
        var a = c.getCaret();
        m.options.placeholder && b.removeAttr("placeholder");
        b.data("mask-maxlength") && b.removeAttr("maxlength");
        c.destroyEvents();
        c.val(m.getCleanVal());
        c.setCaret(a);
        return b;
      };
      m.getCleanVal = function () {
        return c.getMasked(!0);
      };
      m.getMaskedVal = function (a) {
        return c.getMasked(!1, a);
      };
      m.init = function (d) {
        d = d || !1;
        f = f || {};
        m.clearIfNotMatch = a.jMaskGlobals.clearIfNotMatch;
        m.byPassKeys = a.jMaskGlobals.byPassKeys;
        m.translation = a.extend({}, a.jMaskGlobals.translation, f.translation);
        m = a.extend(!0, {}, m, f);
        h = c.getRegexMask();
        if (d) c.events(), c.val(c.getMasked());else {
          f.placeholder && b.attr("placeholder", f.placeholder);
          b.data("mask") && b.attr("autocomplete", "off");
          d = 0;
          for (var l = !0; d < e.length; d++) {
            var g = m.translation[e.charAt(d)];
            if (g && g.recursive) {
              l = !1;
              break;
            }
          }
          l && b.attr("maxlength", e.length).data("mask-maxlength", !0);
          c.destroyEvents();
          c.events();
          d = c.getCaret();
          c.val(c.getMasked());
          c.setCaret(d);
        }
      };
      m.init(!b.is("input"));
    };
    a.maskWatchers = {};
    var d = function d() {
        var b = a(this),
          e = {},
          f = b.attr("data-mask");
        b.attr("data-mask-reverse") && (e.reverse = !0);
        b.attr("data-mask-clearifnotmatch") && (e.clearIfNotMatch = !0);
        "true" === b.attr("data-mask-selectonfocus") && (e.selectOnFocus = !0);
        if (p(b, f, e)) return b.data("mask", new l(this, f, e));
      },
      p = function p(b, e, f) {
        f = f || {};
        var c = a(b).data("mask"),
          d = JSON.stringify;
        b = a(b).val() || a(b).text();
        try {
          return "function" === typeof e && (e = e(b)), "object" !== _typeof(c) || d(c.options) !== d(f) || c.mask !== e;
        } catch (t) {}
      },
      h = function h(a) {
        var b = document.createElement("div"),
          d;
        a = "on" + a;
        d = a in b;
        d || (b.setAttribute(a, "return;"), d = "function" === typeof b[a]);
        return d;
      };
    a.fn.mask = function (b, d) {
      d = d || {};
      var e = this.selector,
        c = a.jMaskGlobals,
        h = c.watchInterval,
        c = d.watchInputs || c.watchInputs,
        t = function t() {
          if (p(this, b, d)) return a(this).data("mask", new l(this, b, d));
        };
      a(this).each(t);
      e && "" !== e && c && (clearInterval(a.maskWatchers[e]), a.maskWatchers[e] = setInterval(function () {
        a(document).find(e).each(t);
      }, h));
      return this;
    };
    a.fn.masked = function (a) {
      return this.data("mask").getMaskedVal(a);
    };
    a.fn.unmask = function () {
      clearInterval(a.maskWatchers[this.selector]);
      delete a.maskWatchers[this.selector];
      return this.each(function () {
        var b = a(this).data("mask");
        b && b.remove().removeData("mask");
      });
    };
    a.fn.cleanVal = function () {
      return this.data("mask").getCleanVal();
    };
    a.applyDataMask = function (b) {
      b = b || a.jMaskGlobals.maskElements;
      (b instanceof a ? b : a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(d);
    };
    h = {
      maskElements: "input,td,span,div",
      dataMaskAttr: "*[data-mask]",
      dataMask: !0,
      watchInterval: 300,
      watchInputs: !0,
      keyStrokeCompensation: 10,
      useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && h("input"),
      watchDataMask: !1,
      byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
      translation: {
        0: {
          pattern: /\d/
        },
        9: {
          pattern: /\d/,
          optional: !0
        },
        "#": {
          pattern: /\d/,
          recursive: !0
        },
        A: {
          pattern: /[a-zA-Z0-9]/
        },
        S: {
          pattern: /[a-zA-Z]/
        }
      }
    };
    a.jMaskGlobals = a.jMaskGlobals || {};
    h = a.jMaskGlobals = a.extend(!0, {}, h, a.jMaskGlobals);
    h.dataMask && a.applyDataMask();
    setInterval(function () {
      a.jMaskGlobals.watchDataMask && a.applyDataMask();
    }, h.watchInterval);
  }, window.jQuery, window.Zepto);
  $('.phone-mask').mask("+ 0 000 000 00 00");
  $('#up').on('click', function () {
    toUp();
  });
  $(".scroll").mCustomScrollbar({
    axis: "y"
  });
});

/*!
 * jQuery Validation Plugin v1.17.0
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2017 Jörn Zaefferer
 * Released under the MIT license
 */
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
})(function ($) {
  $.extend($.fn, {
    // https://jqueryvalidation.org/validate/
    validate: function validate(options) {
      // If nothing is selected, return nothing; can't chain anyway
      if (!this.length) {
        if (options && options.debug && window.console) {
          console.warn("Nothing selected, can't validate, returning nothing.");
        }
        return;
      }

      // Check if a validator for this form was already created
      var validator = $.data(this[0], "validator");
      if (validator) {
        return validator;
      }

      // Add novalidate tag if HTML5.
      this.attr("novalidate", "novalidate");
      validator = new $.validator(options, this[0]);
      $.data(this[0], "validator", validator);
      if (validator.settings.onsubmit) {
        this.on("click.validate", ":submit", function (event) {
          // Track the used submit button to properly handle scripted
          // submits later.
          validator.submitButton = event.currentTarget;

          // Allow suppressing validation by adding a cancel class to the submit button
          if ($(this).hasClass("cancel")) {
            validator.cancelSubmit = true;
          }

          // Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
          if ($(this).attr("formnovalidate") !== undefined) {
            validator.cancelSubmit = true;
          }
        });

        // Validate the form on submit
        this.on("submit.validate", function (event) {
          if (validator.settings.debug) {
            // Prevent form submit to be able to see console output
            event.preventDefault();
          }
          function handle() {
            var hidden, result;

            // Insert a hidden input as a replacement for the missing submit button
            // The hidden input is inserted in two cases:
            //   - A user defined a `submitHandler`
            //   - There was a pending request due to `remote` method and `stopRequest()`
            //     was called to submit the form in case it's valid
            if (validator.submitButton && (validator.settings.submitHandler || validator.formSubmitted)) {
              hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm);
            }
            if (validator.settings.submitHandler) {
              result = validator.settings.submitHandler.call(validator, validator.currentForm, event);
              if (hidden) {
                // And clean up afterwards; thanks to no-block-scope, hidden can be referenced
                hidden.remove();
              }
              if (result !== undefined) {
                return result;
              }
              return false;
            }
            return true;
          }

          // Prevent submit for invalid forms or custom submit handlers
          if (validator.cancelSubmit) {
            validator.cancelSubmit = false;
            return handle();
          }
          if (validator.form()) {
            if (validator.pendingRequest) {
              validator.formSubmitted = true;
              return false;
            }
            return handle();
          } else {
            validator.focusInvalid();
            return false;
          }
        });
      }
      return validator;
    },
    // https://jqueryvalidation.org/valid/
    valid: function valid() {
      var valid, validator, errorList;
      if ($(this[0]).is("form")) {
        valid = this.validate().form();
      } else {
        errorList = [];
        valid = true;
        validator = $(this[0].form).validate();
        this.each(function () {
          valid = validator.element(this) && valid;
          if (!valid) {
            errorList = errorList.concat(validator.errorList);
          }
        });
        validator.errorList = errorList;
      }
      return valid;
    },
    // https://jqueryvalidation.org/rules/
    rules: function rules(command, argument) {
      var element = this[0],
        settings,
        staticRules,
        existingRules,
        data,
        param,
        filtered;

      // If nothing is selected, return empty object; can't chain anyway
      if (element == null) {
        return;
      }
      if (!element.form && element.hasAttribute("contenteditable")) {
        element.form = this.closest("form")[0];
        element.name = this.attr("name");
      }
      if (element.form == null) {
        return;
      }
      if (command) {
        settings = $.data(element.form, "validator").settings;
        staticRules = settings.rules;
        existingRules = $.validator.staticRules(element);
        switch (command) {
          case "add":
            $.extend(existingRules, $.validator.normalizeRule(argument));

            // Remove messages from rules, but allow them to be set separately
            delete existingRules.messages;
            staticRules[element.name] = existingRules;
            if (argument.messages) {
              settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
            }
            break;
          case "remove":
            if (!argument) {
              delete staticRules[element.name];
              return existingRules;
            }
            filtered = {};
            $.each(argument.split(/\s/), function (index, method) {
              filtered[method] = existingRules[method];
              delete existingRules[method];
            });
            return filtered;
        }
      }
      data = $.validator.normalizeRules($.extend({}, $.validator.classRules(element), $.validator.attributeRules(element), $.validator.dataRules(element), $.validator.staticRules(element)), element);

      // Make sure required is at front
      if (data.required) {
        param = data.required;
        delete data.required;
        data = $.extend({
          required: param
        }, data);
      }

      // Make sure remote is at back
      if (data.remote) {
        param = data.remote;
        delete data.remote;
        data = $.extend(data, {
          remote: param
        });
      }
      return data;
    }
  });

  // Custom selectors
  $.extend($.expr.pseudos || $.expr[":"], {
    // '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

    // https://jqueryvalidation.org/blank-selector/
    blank: function blank(a) {
      return !$.trim("" + $(a).val());
    },
    // https://jqueryvalidation.org/filled-selector/
    filled: function filled(a) {
      var val = $(a).val();
      return val !== null && !!$.trim("" + val);
    },
    // https://jqueryvalidation.org/unchecked-selector/
    unchecked: function unchecked(a) {
      return !$(a).prop("checked");
    }
  });

  // Constructor for validator
  $.validator = function (options, form) {
    this.settings = $.extend(true, {}, $.validator.defaults, options);
    this.currentForm = form;
    this.init();
  };

  // https://jqueryvalidation.org/jQuery.validator.format/
  $.validator.format = function (source, params) {
    if (arguments.length === 1) {
      return function () {
        var args = $.makeArray(arguments);
        args.unshift(source);
        return $.validator.format.apply(this, args);
      };
    }
    if (params === undefined) {
      return source;
    }
    if (arguments.length > 2 && params.constructor !== Array) {
      params = $.makeArray(arguments).slice(1);
    }
    if (params.constructor !== Array) {
      params = [params];
    }
    $.each(params, function (i, n) {
      source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function () {
        return n;
      });
    });
    return source;
  };
  $.extend($.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      pendingClass: "pending",
      validClass: "valid",
      errorElement: "label",
      focusCleanup: false,
      focusInvalid: true,
      errorContainer: $([]),
      errorLabelContainer: $([]),
      onsubmit: true,
      ignore: ":hidden",
      ignoreTitle: false,
      onfocusin: function onfocusin(element) {
        this.lastActive = element;

        // Hide error label and remove error class on focus if enabled
        if (this.settings.focusCleanup) {
          if (this.settings.unhighlight) {
            this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
          }
          this.hideThese(this.errorsFor(element));
        }
      },
      onfocusout: function onfocusout(element) {
        if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
          this.element(element);
        }
      },
      onkeyup: function onkeyup(element, event) {
        // Avoid revalidate the field when pressing one of the following keys
        // Shift       => 16
        // Ctrl        => 17
        // Alt         => 18
        // Caps lock   => 20
        // End         => 35
        // Home        => 36
        // Left arrow  => 37
        // Up arrow    => 38
        // Right arrow => 39
        // Down arrow  => 40
        // Insert      => 45
        // Num lock    => 144
        // AltGr key   => 225
        var excludedKeys = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
        if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
          return;
        } else if (element.name in this.submitted || element.name in this.invalid) {
          this.element(element);
        }
      },
      onclick: function onclick(element) {
        // Click on selects, radiobuttons and checkboxes
        if (element.name in this.submitted) {
          this.element(element);

          // Or option elements, check parent select in that case
        } else if (element.parentNode.name in this.submitted) {
          this.element(element.parentNode);
        }
      },
      highlight: function highlight(element, errorClass, validClass) {
        if (element.type === "radio") {
          this.findByName(element.name).addClass(errorClass).removeClass(validClass);
        } else {
          $(element).addClass(errorClass).removeClass(validClass);
        }
      },
      unhighlight: function unhighlight(element, errorClass, validClass) {
        if (element.type === "radio") {
          this.findByName(element.name).removeClass(errorClass).addClass(validClass);
        } else {
          $(element).removeClass(errorClass).addClass(validClass);
        }
      }
    },
    // https://jqueryvalidation.org/jQuery.validator.setDefaults/
    setDefaults: function setDefaults(settings) {
      $.extend($.validator.defaults, settings);
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      equalTo: "Please enter the same value again.",
      maxlength: $.validator.format("Please enter no more than {0} characters."),
      minlength: $.validator.format("Please enter at least {0} characters."),
      rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
      range: $.validator.format("Please enter a value between {0} and {1}."),
      max: $.validator.format("Please enter a value less than or equal to {0}."),
      min: $.validator.format("Please enter a value greater than or equal to {0}."),
      step: $.validator.format("Please enter a multiple of {0}.")
    },
    autoCreateRanges: false,
    prototype: {
      init: function init() {
        this.labelContainer = $(this.settings.errorLabelContainer);
        this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
        this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
        this.submitted = {};
        this.valueCache = {};
        this.pendingRequest = 0;
        this.pending = {};
        this.invalid = {};
        this.reset();
        var groups = this.groups = {},
          rules;
        $.each(this.settings.groups, function (key, value) {
          if (typeof value === "string") {
            value = value.split(/\s/);
          }
          $.each(value, function (index, name) {
            groups[name] = key;
          });
        });
        rules = this.settings.rules;
        $.each(rules, function (key, value) {
          rules[key] = $.validator.normalizeRule(value);
        });
        function delegate(event) {
          // Set form expando on contenteditable
          if (!this.form && this.hasAttribute("contenteditable")) {
            this.form = $(this).closest("form")[0];
            this.name = $(this).attr("name");
          }
          var validator = $.data(this.form, "validator"),
            eventType = "on" + event.type.replace(/^validate/, ""),
            settings = validator.settings;
          if (settings[eventType] && !$(this).is(settings.ignore)) {
            settings[eventType].call(validator, this, event);
          }
        }
        $(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " + "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " + "[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate)

        // Support: Chrome, oldIE
        // "select" is provided as event.target when clicking a option
        .on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);
        if (this.settings.invalidHandler) {
          $(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
        }
      },
      // https://jqueryvalidation.org/Validator.form/
      form: function form() {
        this.checkForm();
        $.extend(this.submitted, this.errorMap);
        this.invalid = $.extend({}, this.errorMap);
        if (!this.valid()) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
        }
        this.showErrors();
        return this.valid();
      },
      checkForm: function checkForm() {
        this.prepareForm();
        for (var i = 0, elements = this.currentElements = this.elements(); elements[i]; i++) {
          this.check(elements[i]);
        }
        return this.valid();
      },
      // https://jqueryvalidation.org/Validator.element/
      element: function element(_element) {
        var cleanElement = this.clean(_element),
          checkElement = this.validationTargetFor(cleanElement),
          v = this,
          result = true,
          rs,
          group;
        if (checkElement === undefined) {
          delete this.invalid[cleanElement.name];
        } else {
          this.prepareElement(checkElement);
          this.currentElements = $(checkElement);

          // If this element is grouped, then validate all group elements already
          // containing a value
          group = this.groups[checkElement.name];
          if (group) {
            $.each(this.groups, function (name, testgroup) {
              if (testgroup === group && name !== checkElement.name) {
                cleanElement = v.validationTargetFor(v.clean(v.findByName(name)));
                if (cleanElement && cleanElement.name in v.invalid) {
                  v.currentElements.push(cleanElement);
                  result = v.check(cleanElement) && result;
                }
              }
            });
          }
          rs = this.check(checkElement) !== false;
          result = result && rs;
          if (rs) {
            this.invalid[checkElement.name] = false;
          } else {
            this.invalid[checkElement.name] = true;
          }
          if (!this.numberOfInvalids()) {
            // Hide error containers on last error
            this.toHide = this.toHide.add(this.containers);
          }
          this.showErrors();

          // Add aria-invalid status for screen readers
          $(_element).attr("aria-invalid", !rs);
        }
        return result;
      },
      // https://jqueryvalidation.org/Validator.showErrors/
      showErrors: function showErrors(errors) {
        if (errors) {
          var validator = this;

          // Add items to error list and map
          $.extend(this.errorMap, errors);
          this.errorList = $.map(this.errorMap, function (message, name) {
            return {
              message: message,
              element: validator.findByName(name)[0]
            };
          });

          // Remove items from success list
          this.successList = $.grep(this.successList, function (element) {
            return !(element.name in errors);
          });
        }
        if (this.settings.showErrors) {
          this.settings.showErrors.call(this, this.errorMap, this.errorList);
        } else {
          this.defaultShowErrors();
        }
      },
      // https://jqueryvalidation.org/Validator.resetForm/
      resetForm: function resetForm() {
        if ($.fn.resetForm) {
          $(this.currentForm).resetForm();
        }
        this.invalid = {};
        this.submitted = {};
        this.prepareForm();
        this.hideErrors();
        var elements = this.elements().removeData("previousValue").removeAttr("aria-invalid");
        this.resetElements(elements);
      },
      resetElements: function resetElements(elements) {
        var i;
        if (this.settings.unhighlight) {
          for (i = 0; elements[i]; i++) {
            this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, "");
            this.findByName(elements[i].name).removeClass(this.settings.validClass);
          }
        } else {
          elements.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
        }
      },
      numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      },
      objectLength: function objectLength(obj) {
        /* jshint unused: false */
        var count = 0,
          i;
        for (i in obj) {
          // This check allows counting elements with empty error
          // message as invalid elements
          if (obj[i] !== undefined && obj[i] !== null && obj[i] !== false) {
            count++;
          }
        }
        return count;
      },
      hideErrors: function hideErrors() {
        this.hideThese(this.toHide);
      },
      hideThese: function hideThese(errors) {
        errors.not(this.containers).text("");
        this.addWrapper(errors).hide();
      },
      valid: function valid() {
        return this.size() === 0;
      },
      size: function size() {
        return this.errorList.length;
      },
      focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) {
          try {
            $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus()

            // Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
            .trigger("focusin");
          } catch (e) {

            // Ignore IE throwing errors when focusing hidden elements
          }
        }
      },
      findLastActive: function findLastActive() {
        var lastActive = this.lastActive;
        return lastActive && $.grep(this.errorList, function (n) {
          return n.element.name === lastActive.name;
        }).length === 1 && lastActive;
      },
      elements: function elements() {
        var validator = this,
          rulesCache = {};

        // Select all valid inputs inside the form (no submit or reset buttons)
        return $(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          var name = this.name || $(this).attr("name"); // For contenteditable
          if (!name && validator.settings.debug && window.console) {
            console.error("%o has no name assigned", this);
          }

          // Set form expando on contenteditable
          if (this.hasAttribute("contenteditable")) {
            this.form = $(this).closest("form")[0];
            this.name = name;
          }

          // Select only the first element for each name, and only those with rules specified
          if (name in rulesCache || !validator.objectLength($(this).rules())) {
            return false;
          }
          rulesCache[name] = true;
          return true;
        });
      },
      clean: function clean(selector) {
        return $(selector)[0];
      },
      errors: function errors() {
        var errorClass = this.settings.errorClass.split(" ").join(".");
        return $(this.settings.errorElement + "." + errorClass, this.errorContext);
      },
      resetInternals: function resetInternals() {
        this.successList = [];
        this.errorList = [];
        this.errorMap = {};
        this.toShow = $([]);
        this.toHide = $([]);
      },
      reset: function reset() {
        this.resetInternals();
        this.currentElements = $([]);
      },
      prepareForm: function prepareForm() {
        this.reset();
        this.toHide = this.errors().add(this.containers);
      },
      prepareElement: function prepareElement(element) {
        this.reset();
        this.toHide = this.errorsFor(element);
      },
      elementValue: function elementValue(element) {
        var $element = $(element),
          type = element.type,
          val,
          idx;
        if (type === "radio" || type === "checkbox") {
          return this.findByName(element.name).filter(":checked").val();
        } else if (type === "number" && typeof element.validity !== "undefined") {
          return element.validity.badInput ? "NaN" : $element.val();
        }
        if (element.hasAttribute("contenteditable")) {
          val = $element.text();
        } else {
          val = $element.val();
        }
        if (type === "file") {
          // Modern browser (chrome & safari)
          if (val.substr(0, 12) === "C:\\fakepath\\") {
            return val.substr(12);
          }

          // Legacy browsers
          // Unix-based path
          idx = val.lastIndexOf("/");
          if (idx >= 0) {
            return val.substr(idx + 1);
          }

          // Windows-based path
          idx = val.lastIndexOf("\\");
          if (idx >= 0) {
            return val.substr(idx + 1);
          }

          // Just the file name
          return val;
        }
        if (typeof val === "string") {
          return val.replace(/\r/g, "");
        }
        return val;
      },
      check: function check(element) {
        element = this.validationTargetFor(this.clean(element));
        var rules = $(element).rules(),
          rulesCount = $.map(rules, function (n, i) {
            return i;
          }).length,
          dependencyMismatch = false,
          val = this.elementValue(element),
          result,
          method,
          rule,
          normalizer;

        // Prioritize the local normalizer defined for this element over the global one
        // if the former exists, otherwise user the global one in case it exists.
        if (typeof rules.normalizer === "function") {
          normalizer = rules.normalizer;
        } else if (typeof this.settings.normalizer === "function") {
          normalizer = this.settings.normalizer;
        }

        // If normalizer is defined, then call it to retreive the changed value instead
        // of using the real one.
        // Note that `this` in the normalizer is `element`.
        if (normalizer) {
          val = normalizer.call(element, val);
          if (typeof val !== "string") {
            throw new TypeError("The normalizer should return a string value.");
          }

          // Delete the normalizer from rules to avoid treating it as a pre-defined method.
          delete rules.normalizer;
        }
        for (method in rules) {
          rule = {
            method: method,
            parameters: rules[method]
          };
          try {
            result = $.validator.methods[method].call(this, val, element, rule.parameters);

            // If a method indicates that the field is optional and therefore valid,
            // don't mark it as valid when there are no other rules
            if (result === "dependency-mismatch" && rulesCount === 1) {
              dependencyMismatch = true;
              continue;
            }
            dependencyMismatch = false;
            if (result === "pending") {
              this.toHide = this.toHide.not(this.errorsFor(element));
              return;
            }
            if (!result) {
              this.formatAndAdd(element, rule);
              return false;
            }
          } catch (e) {
            if (this.settings.debug && window.console) {
              console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
            }
            if (e instanceof TypeError) {
              e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
            }
            throw e;
          }
        }
        if (dependencyMismatch) {
          return;
        }
        if (this.objectLength(rules)) {
          this.successList.push(element);
        }
        return true;
      },
      // Return the custom message for the given element and validation method
      // specified in the element's HTML5 data attribute
      // return the generic message if present and no method specific message is present
      customDataMessage: function customDataMessage(element, method) {
        return $(element).data("msg" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase()) || $(element).data("msg");
      },
      // Return the custom message for the given element name and validation method
      customMessage: function customMessage(name, method) {
        var m = this.settings.messages[name];
        return m && (m.constructor === String ? m : m[method]);
      },
      // Return the first defined argument, allowing empty strings
      findDefined: function findDefined() {
        for (var i = 0; i < arguments.length; i++) {
          if (arguments[i] !== undefined) {
            return arguments[i];
          }
        }
        return undefined;
      },
      // The second parameter 'rule' used to be a string, and extended to an object literal
      // of the following form:
      // rule = {
      //     method: "method name",
      //     parameters: "the given method parameters"
      // }
      //
      // The old behavior still supported, kept to maintain backward compatibility with
      // old code, and will be removed in the next major release.
      defaultMessage: function defaultMessage(element, rule) {
        if (typeof rule === "string") {
          rule = {
            method: rule
          };
        }
        var message = this.findDefined(this.customMessage(element.name, rule.method), this.customDataMessage(element, rule.method),
          // 'title' is never undefined, so handle empty string as undefined
          !this.settings.ignoreTitle && element.title || undefined, $.validator.messages[rule.method], "<strong>Warning: No message defined for " + element.name + "</strong>"),
          theregex = /\$?\{(\d+)\}/g;
        if (typeof message === "function") {
          message = message.call(this, rule.parameters, element);
        } else if (theregex.test(message)) {
          message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
        }
        return message;
      },
      formatAndAdd: function formatAndAdd(element, rule) {
        var message = this.defaultMessage(element, rule);
        this.errorList.push({
          message: message,
          element: element,
          method: rule.method
        });
        this.errorMap[element.name] = message;
        this.submitted[element.name] = message;
      },
      addWrapper: function addWrapper(toToggle) {
        if (this.settings.wrapper) {
          toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
        }
        return toToggle;
      },
      defaultShowErrors: function defaultShowErrors() {
        var i, elements, error;
        for (i = 0; this.errorList[i]; i++) {
          error = this.errorList[i];
          if (this.settings.highlight) {
            this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
          }
          this.showLabel(error.element, error.message);
        }
        if (this.errorList.length) {
          this.toShow = this.toShow.add(this.containers);
        }
        if (this.settings.success) {
          for (i = 0; this.successList[i]; i++) {
            this.showLabel(this.successList[i]);
          }
        }
        if (this.settings.unhighlight) {
          for (i = 0, elements = this.validElements(); elements[i]; i++) {
            this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
          }
        }
        this.toHide = this.toHide.not(this.toShow);
        this.hideErrors();
        this.addWrapper(this.toShow).show();
      },
      validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      },
      invalidElements: function invalidElements() {
        return $(this.errorList).map(function () {
          return this.element;
        });
      },
      showLabel: function showLabel(element, message) {
        var place,
          group,
          errorID,
          v,
          error = this.errorsFor(element),
          elementID = this.idOrName(element),
          describedBy = $(element).attr("aria-describedby");
        if (error.length) {
          // Refresh error/success class
          error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);

          // Replace message on existing label
          error.html(message);
        } else {
          // Create error element
          error = $("<" + this.settings.errorElement + ">").attr("id", elementID + "-error").addClass(this.settings.errorClass).html(message || "");

          // Maintain reference to the element to be placed into the DOM
          place = error;
          if (this.settings.wrapper) {
            // Make sure the element is visible, even in IE
            // actually showing the wrapped element is handled elsewhere
            place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
          }
          if (this.labelContainer.length) {
            this.labelContainer.append(place);
          } else if (this.settings.errorPlacement) {
            this.settings.errorPlacement.call(this, place, $(element));
          } else {
            place.insertAfter(element);
          }

          // Link error back to the element
          if (error.is("label")) {
            // If the error is a label, then associate using 'for'
            error.attr("for", elementID);

            // If the element is not a child of an associated label, then it's necessary
            // to explicitly apply aria-describedby
          } else if (error.parents("label[for='" + this.escapeCssMeta(elementID) + "']").length === 0) {
            errorID = error.attr("id");

            // Respect existing non-error aria-describedby
            if (!describedBy) {
              describedBy = errorID;
            } else if (!describedBy.match(new RegExp("\\b" + this.escapeCssMeta(errorID) + "\\b"))) {
              // Add to end of list if not already present
              describedBy += " " + errorID;
            }
            $(element).attr("aria-describedby", describedBy);

            // If this element is grouped, then assign to all elements in the same group
            group = this.groups[element.name];
            if (group) {
              v = this;
              $.each(v.groups, function (name, testgroup) {
                if (testgroup === group) {
                  $("[name='" + v.escapeCssMeta(name) + "']", v.currentForm).attr("aria-describedby", error.attr("id"));
                }
              });
            }
          }
        }
        if (!message && this.settings.success) {
          error.text("");
          if (typeof this.settings.success === "string") {
            error.addClass(this.settings.success);
          } else {
            this.settings.success(error, element);
          }
        }
        this.toShow = this.toShow.add(error);
      },
      errorsFor: function errorsFor(element) {
        var name = this.escapeCssMeta(this.idOrName(element)),
          describer = $(element).attr("aria-describedby"),
          selector = "label[for='" + name + "'], label[for='" + name + "'] *";

        // 'aria-describedby' should directly reference the error element
        if (describer) {
          selector = selector + ", #" + this.escapeCssMeta(describer).replace(/\s+/g, ", #");
        }
        return this.errors().filter(selector);
      },
      // See https://api.jquery.com/category/selectors/, for CSS
      // meta-characters that should be escaped in order to be used with JQuery
      // as a literal part of a name/id or any selector.
      escapeCssMeta: function escapeCssMeta(string) {
        return string.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
      },
      idOrName: function idOrName(element) {
        return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
      },
      validationTargetFor: function validationTargetFor(element) {
        // If radio/checkbox, validate first element in group instead
        if (this.checkable(element)) {
          element = this.findByName(element.name);
        }

        // Always apply ignore filter
        return $(element).not(this.settings.ignore)[0];
      },
      checkable: function checkable(element) {
        return /radio|checkbox/i.test(element.type);
      },
      findByName: function findByName(name) {
        return $(this.currentForm).find("[name='" + this.escapeCssMeta(name) + "']");
      },
      getLength: function getLength(value, element) {
        switch (element.nodeName.toLowerCase()) {
          case "select":
            return $("option:selected", element).length;
          case "input":
            if (this.checkable(element)) {
              return this.findByName(element.name).filter(":checked").length;
            }
        }
        return value.length;
      },
      depend: function depend(param, element) {
        return this.dependTypes[_typeof(param)] ? this.dependTypes[_typeof(param)](param, element) : true;
      },
      dependTypes: {
        "boolean": function boolean(param) {
          return param;
        },
        "string": function string(param, element) {
          return !!$(param, element.form).length;
        },
        "function": function _function(param, element) {
          return param(element);
        }
      },
      optional: function optional(element) {
        var val = this.elementValue(element);
        return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
      },
      startRequest: function startRequest(element) {
        if (!this.pending[element.name]) {
          this.pendingRequest++;
          $(element).addClass(this.settings.pendingClass);
          this.pending[element.name] = true;
        }
      },
      stopRequest: function stopRequest(element, valid) {
        this.pendingRequest--;

        // Sometimes synchronization fails, make sure pendingRequest is never < 0
        if (this.pendingRequest < 0) {
          this.pendingRequest = 0;
        }
        delete this.pending[element.name];
        $(element).removeClass(this.settings.pendingClass);
        if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
          $(this.currentForm).submit();

          // Remove the hidden input that was used as a replacement for the
          // missing submit button. The hidden input is added by `handle()`
          // to ensure that the value of the used submit button is passed on
          // for scripted submits triggered by this method
          if (this.submitButton) {
            $("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove();
          }
          this.formSubmitted = false;
        } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
          this.formSubmitted = false;
        }
      },
      previousValue: function previousValue(element, method) {
        method = typeof method === "string" && method || "remote";
        return $.data(element, "previousValue") || $.data(element, "previousValue", {
          old: null,
          valid: true,
          message: this.defaultMessage(element, {
            method: method
          })
        });
      },
      // Cleans up all forms and elements, removes validator-specific events
      destroy: function destroy() {
        this.resetForm();
        $(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
      }
    },
    classRuleSettings: {
      required: {
        required: true
      },
      email: {
        email: true
      },
      url: {
        url: true
      },
      date: {
        date: true
      },
      dateISO: {
        dateISO: true
      },
      number: {
        number: true
      },
      digits: {
        digits: true
      },
      creditcard: {
        creditcard: true
      }
    },
    addClassRules: function addClassRules(className, rules) {
      if (className.constructor === String) {
        this.classRuleSettings[className] = rules;
      } else {
        $.extend(this.classRuleSettings, className);
      }
    },
    classRules: function classRules(element) {
      var rules = {},
        classes = $(element).attr("class");
      if (classes) {
        $.each(classes.split(" "), function () {
          if (this in $.validator.classRuleSettings) {
            $.extend(rules, $.validator.classRuleSettings[this]);
          }
        });
      }
      return rules;
    },
    normalizeAttributeRule: function normalizeAttributeRule(rules, type, method, value) {
      // Convert the value to a number for number inputs, and for text for backwards compability
      // allows type="date" and others to be compared as strings
      if (/min|max|step/.test(method) && (type === null || /number|range|text/.test(type))) {
        value = Number(value);

        // Support Opera Mini, which returns NaN for undefined minlength
        if (isNaN(value)) {
          value = undefined;
        }
      }
      if (value || value === 0) {
        rules[method] = value;
      } else if (type === method && type !== "range") {
        // Exception: the jquery validate 'range' method
        // does not test for the html5 'range' type
        rules[method] = true;
      }
    },
    attributeRules: function attributeRules(element) {
      var rules = {},
        $element = $(element),
        type = element.getAttribute("type"),
        method,
        value;
      for (method in $.validator.methods) {
        // Support for <input required> in both html5 and older browsers
        if (method === "required") {
          value = element.getAttribute(method);

          // Some browsers return an empty string for the required attribute
          // and non-HTML5 browsers might have required="" markup
          if (value === "") {
            value = true;
          }

          // Force non-HTML5 browsers to return bool
          value = !!value;
        } else {
          value = $element.attr(method);
        }
        this.normalizeAttributeRule(rules, type, method, value);
      }

      // 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
      if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
        delete rules.maxlength;
      }
      return rules;
    },
    dataRules: function dataRules(element) {
      var rules = {},
        $element = $(element),
        type = element.getAttribute("type"),
        method,
        value;
      for (method in $.validator.methods) {
        value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());
        this.normalizeAttributeRule(rules, type, method, value);
      }
      return rules;
    },
    staticRules: function staticRules(element) {
      var rules = {},
        validator = $.data(element.form, "validator");
      if (validator.settings.rules) {
        rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
      }
      return rules;
    },
    normalizeRules: function normalizeRules(rules, element) {
      // Handle dependency check
      $.each(rules, function (prop, val) {
        // Ignore rule when param is explicitly false, eg. required:false
        if (val === false) {
          delete rules[prop];
          return;
        }
        if (val.param || val.depends) {
          var keepRule = true;
          switch (_typeof(val.depends)) {
            case "string":
              keepRule = !!$(val.depends, element.form).length;
              break;
            case "function":
              keepRule = val.depends.call(element, element);
              break;
          }
          if (keepRule) {
            rules[prop] = val.param !== undefined ? val.param : true;
          } else {
            $.data(element.form, "validator").resetElements($(element));
            delete rules[prop];
          }
        }
      });

      // Evaluate parameters
      $.each(rules, function (rule, parameter) {
        rules[rule] = $.isFunction(parameter) && rule !== "normalizer" ? parameter(element) : parameter;
      });

      // Clean number parameters
      $.each(["minlength", "maxlength"], function () {
        if (rules[this]) {
          rules[this] = Number(rules[this]);
        }
      });
      $.each(["rangelength", "range"], function () {
        var parts;
        if (rules[this]) {
          if ($.isArray(rules[this])) {
            rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
          } else if (typeof rules[this] === "string") {
            parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
            rules[this] = [Number(parts[0]), Number(parts[1])];
          }
        }
      });
      if ($.validator.autoCreateRanges) {
        // Auto-create ranges
        if (rules.min != null && rules.max != null) {
          rules.range = [rules.min, rules.max];
          delete rules.min;
          delete rules.max;
        }
        if (rules.minlength != null && rules.maxlength != null) {
          rules.rangelength = [rules.minlength, rules.maxlength];
          delete rules.minlength;
          delete rules.maxlength;
        }
      }
      return rules;
    },
    // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
    normalizeRule: function normalizeRule(data) {
      if (typeof data === "string") {
        var transformed = {};
        $.each(data.split(/\s/), function () {
          transformed[this] = true;
        });
        data = transformed;
      }
      return data;
    },
    // https://jqueryvalidation.org/jQuery.validator.addMethod/
    addMethod: function addMethod(name, method, message) {
      $.validator.methods[name] = method;
      $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
      if (method.length < 3) {
        $.validator.addClassRules(name, $.validator.normalizeRule(name));
      }
    },
    // https://jqueryvalidation.org/jQuery.validator.methods/
    methods: {
      // https://jqueryvalidation.org/required-method/
      required: function required(value, element, param) {
        // Check if dependency is met
        if (!this.depend(param, element)) {
          return "dependency-mismatch";
        }
        if (element.nodeName.toLowerCase() === "select") {
          // Could be an array for select-multiple or a string, both are fine this way
          var val = $(element).val();
          return val && val.length > 0;
        }
        if (this.checkable(element)) {
          return this.getLength(value, element) > 0;
        }
        return value.length > 0;
      },
      // https://jqueryvalidation.org/email-method/
      email: function email(value, element) {
        // From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
        // Retrieved 2014-01-14
        // If you have a problem with this implementation, report a bug against the above spec
        // Or use custom methods to implement your own email validation
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
      },
      // https://jqueryvalidation.org/url-method/
      url: function url(value, element) {
        // Copyright (c) 2010-2013 Diego Perini, MIT licensed
        // https://gist.github.com/dperini/729294
        // see also https://mathiasbynens.be/demo/url-regex
        // modified to allow protocol-relative URLs
        return this.optional(element) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
      },
      // https://jqueryvalidation.org/date-method/
      date: function date(value, element) {
        return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
      },
      // https://jqueryvalidation.org/dateISO-method/
      dateISO: function dateISO(value, element) {
        return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
      },
      // https://jqueryvalidation.org/number-method/
      number: function number(value, element) {
        return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
      },
      // https://jqueryvalidation.org/digits-method/
      digits: function digits(value, element) {
        return this.optional(element) || /^\d+$/.test(value);
      },
      // https://jqueryvalidation.org/minlength-method/
      minlength: function minlength(value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length >= param;
      },
      // https://jqueryvalidation.org/maxlength-method/
      maxlength: function maxlength(value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length <= param;
      },
      // https://jqueryvalidation.org/rangelength-method/
      rangelength: function rangelength(value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length >= param[0] && length <= param[1];
      },
      // https://jqueryvalidation.org/min-method/
      min: function min(value, element, param) {
        return this.optional(element) || value >= param;
      },
      // https://jqueryvalidation.org/max-method/
      max: function max(value, element, param) {
        return this.optional(element) || value <= param;
      },
      // https://jqueryvalidation.org/range-method/
      range: function range(value, element, param) {
        return this.optional(element) || value >= param[0] && value <= param[1];
      },
      // https://jqueryvalidation.org/step-method/
      step: function step(value, element, param) {
        var type = $(element).attr("type"),
          errorMessage = "Step attribute on input type " + type + " is not supported.",
          supportedTypes = ["text", "number", "range"],
          re = new RegExp("\\b" + type + "\\b"),
          notSupported = type && !re.test(supportedTypes.join()),
          decimalPlaces = function decimalPlaces(num) {
            var match = ("" + num).match(/(?:\.(\d+))?$/);
            if (!match) {
              return 0;
            }

            // Number of digits right of decimal point.
            return match[1] ? match[1].length : 0;
          },
          toInt = function toInt(num) {
            return Math.round(num * Math.pow(10, decimals));
          },
          valid = true,
          decimals;

        // Works only for text, number and range input types
        // TODO find a way to support input types date, datetime, datetime-local, month, time and week
        if (notSupported) {
          throw new Error(errorMessage);
        }
        decimals = decimalPlaces(param);

        // Value can't have too many decimals
        if (decimalPlaces(value) > decimals || toInt(value) % toInt(param) !== 0) {
          valid = false;
        }
        return this.optional(element) || valid;
      },
      // https://jqueryvalidation.org/equalTo-method/
      equalTo: function equalTo(value, element, param) {
        // Bind to the blur event of the target in order to revalidate whenever the target field is updated
        var target = $(param);
        if (this.settings.onfocusout && target.not(".validate-equalTo-blur").length) {
          target.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
            $(element).valid();
          });
        }
        return value === target.val();
      },
      // https://jqueryvalidation.org/remote-method/
      remote: function remote(value, element, param, method) {
        if (this.optional(element)) {
          return "dependency-mismatch";
        }
        method = typeof method === "string" && method || "remote";
        var previous = this.previousValue(element, method),
          validator,
          data,
          optionDataString;
        if (!this.settings.messages[element.name]) {
          this.settings.messages[element.name] = {};
        }
        previous.originalMessage = previous.originalMessage || this.settings.messages[element.name][method];
        this.settings.messages[element.name][method] = previous.message;
        param = typeof param === "string" && {
          url: param
        } || param;
        optionDataString = $.param($.extend({
          data: value
        }, param.data));
        if (previous.old === optionDataString) {
          return previous.valid;
        }
        previous.old = optionDataString;
        validator = this;
        this.startRequest(element);
        data = {};
        data[element.name] = value;
        $.ajax($.extend(true, {
          mode: "abort",
          port: "validate" + element.name,
          dataType: "json",
          data: data,
          context: validator.currentForm,
          success: function success(response) {
            var valid = response === true || response === "true",
              errors,
              message,
              submitted;
            validator.settings.messages[element.name][method] = previous.originalMessage;
            if (valid) {
              submitted = validator.formSubmitted;
              validator.resetInternals();
              validator.toHide = validator.errorsFor(element);
              validator.formSubmitted = submitted;
              validator.successList.push(element);
              validator.invalid[element.name] = false;
              validator.showErrors();
            } else {
              errors = {};
              message = response || validator.defaultMessage(element, {
                method: method,
                parameters: value
              });
              errors[element.name] = previous.message = message;
              validator.invalid[element.name] = true;
              validator.showErrors(errors);
            }
            previous.valid = valid;
            validator.stopRequest(element, valid);
          }
        }, param));
        return "pending";
      }
    }
  });

  // Ajax mode: abort
  // usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
  // if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

  var pendingRequests = {},
    ajax;

  // Use a prefilter if available (1.5+)
  if ($.ajaxPrefilter) {
    $.ajaxPrefilter(function (settings, _, xhr) {
      var port = settings.port;
      if (settings.mode === "abort") {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
        }
        pendingRequests[port] = xhr;
      }
    });
  } else {
    // Proxy ajax
    ajax = $.ajax;
    $.ajax = function (settings) {
      var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
        port = ("port" in settings ? settings : $.ajaxSettings).port;
      if (mode === "abort") {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
        }
        pendingRequests[port] = ajax.apply(this, arguments);
        return pendingRequests[port];
      }
      return ajax.apply(this, arguments);
    };
  }
  return $;
});
$('form').each(function () {
  var it = $(this);
  it.validate({
    rules: _defineProperty({
      name: {
        required: true
      },
      phone: {
        required: true
      },
      email: {
        required: true
      },
      check: {
        required: true
      },
      password: {
        required: true
      },
      password2: {
        required: true
      }
    }, "check", {
      required: true
    }),
    errorPlacement: function errorPlacement(error, element) {},
    submitHandler: function submitHandler() {
      $.ajax({
        success: function success() {
          $(".thanx-trigger").trigger("click");
        }
      });
    }
  });
});
function toUp() {
  $('html, body').stop().animate({
    scrollTop: 0
  }, 1000);
}
function selects() {
  $('.nice').each(function () {
    $(this).niceSelect();
  });
}
$(".m-bg-cont").each(function () {
  var img = $(this).find("img:first-of-type").attr("src");
  $(this).css("background-image", "url(" + img + ")");
});
function sliders() {
  var sertificate = new Swiper('.slider-container', {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        centeredSlides: true
      },
      768: {
        slidesPerView: 4
      }
    }
  });
  var productThumbs = new Swiper('.product-thumbs', {
    slidesPerView: 'auto',
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    allowTouchMove: false
  });
  var product = new Swiper('.product-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    thumbs: {
      swiper: productThumbs
    }
  });
  var lrt1 = new Swiper('.lrt-slider1', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.slider-next1',
      prevEl: '.slider-prev1'
    }
  });
  var lrt4 = new Swiper('.lrt-slider4', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.slider-next4',
      prevEl: '.slider-prev4'
    }
  });
  var lrt7 = new Swiper('.lrt-slider7', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.slider-next7',
      prevEl: '.slider-prev7'
    }
  });
  var tser = new Swiper('.tser-slider', {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: '.tser-next',
      prevEl: '.tser-prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      580: {
        slidesPerView: 2
      },
      841: {
        slidesPerView: 3
      }
    }
  });
}
$(".tque-item").click(function () {
  var idd = $(this).attr('data-idt');
  var o = $(this).attr('data-o');
  $('#' + idd).toggleClass('active');
  $('#' + o).toggleClass('active');
});
$(".tall").click(function () {
  $('.card').toggleClass('active');
  $(this).css({
    "display": "none"
  });
});
$(window).scroll(function () {
  if ($(window).scrollTop() > 6000) {
    $('.sixt-item').addClass('active');
  }
});
function initMap() {
  if ($('#map').is('#map')) {
    var init = function init() {
      var map = new ymaps.Map('map', {
        center: [lat, lng],
        zoom: zoom,
        controls: []
      });
      var placemark = new ymaps.Placemark([lng, lat], {
        hintContent: ''
      }, {
        iconLayout: 'default#image',
        iconImageSize: [32, 32]
      });
      map.geoObjects.add(placemark);
    };
    ymaps.ready(init);
    var lat = $('#map').data('lat');
    var lng = $('#map').data('lng');
    var zoom = $('#map').data('zoom');
  }
  if ($('#map2').is('#map2')) {
    var _init = function _init() {
      var map = new ymaps.Map('map2', {
        center: [lat, lng],
        zoom: zoom,
        controls: []
      });
      var placemark = new ymaps.Placemark([lng, lat], {
        hintContent: ''
      }, {
        iconLayout: 'default#image',
        iconImageSize: [32, 32]
      });
      map.geoObjects.add(placemark);
    };
    ymaps.ready(_init);
    var lat = $('#map2').data('lat');
    var lng = $('#map2').data('lng');
    var zoom = $('#map2').data('zoom');
  }
}
function tabs() {
  $('.product-list').on('click', 'a:not(.active)', function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active').closest('.product').find('.tab').removeClass('active').eq($(this).index()).addClass('active');
  });
  $('.delivery-list').on('click', 'a:not(.active)', function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active').closest('.delivery-map').find('.tab').removeClass('active').eq($(this).index()).addClass('active');
  });
  $('.modal-list').on('click', 'a:not(.active)', function (e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active').closest('.modal').find('.modal-tab').removeClass('active').eq($(this).index()).addClass('active');
  });
}
function showMapInOrder() {
  $('.sposob').each(function (index, el) {
    $(this).change(function () {
      if ($(this).attr('id') === 'deliv') {
        $('#deliv-map').addClass('active');
      } else {
        $('#deliv-map').removeClass('active');
      }
    });
  });
}
var modal = $('.modal');
var overlay = $('.overlay');
var close = $('.modal-close');
var width = $(window).width();
function modals() {
  close.on('click', function (event) {
    event.preventDefault();
    modalClose();
  });
  overlay.on('mousedown', function (event) {
    if (event.target !== modal && modal.has(event.target).length === 0) {
      modalClose();
    }
  });
  $('body').on('click', '[data-open]', function (e) {
    e.preventDefault();
    var modalName = $(this).data('open');
    modalOpen(modalName);
  });
}
function modalOpen(modalName) {
  $('body').css('width', width);
  $('body').addClass('no-scroll');
  overlay.addClass('active');
  modal.removeClass('active');
  $('.' + modalName).addClass('active');
}
function modalClose() {
  modal.removeClass('active');
  overlay.removeClass('active');
  $('body').removeClass('no-scroll');
}
function togglePassword() {
  $('.input-icon').each(function () {
    $(this).on('click', function () {
      var type = $(this).siblings('input').attr('type') == "text" ? "password" : "text";
      $(this).siblings('input').attr('type', type);
    });
  });
}
function copyLink() {
  var input = $('#input-link');
  var btn = $('#copy-link');
  input.val(window.location.href);
  btn.on('click', function () {
    input.select();
    document.execCommand("copy");
  });
}
function openSearch() {
  var btn = $('#search-btn');
  var back = $('.back');
  var search = $('.event-search');
  var close = $('.event-close');
  btn.on('click', function () {
    $('body').css('width', width);
    $('body').toggleClass('no-scroll');
    search.toggleClass('active');
    back.toggleClass('active');
    $('.event-search input').focus();
  });
  function closeSearch() {
    $('body').removeClass('no-scroll');
    search.removeClass('active');
    back.removeClass('active');
  }
  back.on('click', function () {
    closeSearch();
  });
  close.on('click', function () {
    closeSearch();
  });
}
function mobileMenu() {
  var btn = $('.burger');
  var menu = $('.mobile-menu');
  var close = $('.mobile-menu-close');
  btn.on('click', function () {
    menu.addClass('active');
  });
  close.on('click', function () {
    menu.removeClass('active');
  });
}
function openSeoText() {
  $('.seo .more').on('click', function (e) {
    e.preventDefault();
    $('.seo .text').toggleClass('active');
  });
}
function replaceSymbols() {
  var numberInput = $('.number-input');
  numberInput.each(function () {
    $(this).bind('change keyup input click', function () {
      if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
      }
    });
  });
}