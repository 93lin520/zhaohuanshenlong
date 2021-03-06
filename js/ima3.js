// Copyright 2011 Google Inc. All Rights Reserved.
(function() {
	/*

	 Copyright The Closure Library Authors.
	 SPDX-License-Identifier: Apache-2.0
	*/
	var k, aa = function(a) {
			var b = 0;
			return function() {
				return b < a.length ? {
					done: !1,
					value: a[b++]
				} : {
					done: !0
				}
			}
		},
		ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
			if (a == Array.prototype || a == Object.prototype) return a;
			a[b] = c.value;
			return a
		},
		da = function(a) {
			a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" ==
				typeof self && self, "object" == typeof global && global
			];
			for (var b = 0; b < a.length; ++b) {
				var c = a[b];
				if (c && c.Math == Math) return c
			}
			throw Error("Cannot find global object");
		},
		ea = da(this),
		p = function(a, b) {
			if (b) a: {
				var c = ea;a = a.split(".");
				for (var d = 0; d < a.length - 1; d++) {
					var e = a[d];
					if (!(e in c)) break a;
					c = c[e]
				}
				a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ca(c, a, {
					configurable: !0,
					writable: !0,
					value: b
				})
			}
		};
	p("Symbol", function(a) {
		if (a) return a;
		var b = function(f, g) {
			this.h = f;
			ca(this, "description", {
				configurable: !0,
				writable: !0,
				value: g
			})
		};
		b.prototype.toString = function() {
			return this.h
		};
		var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
			d = 0,
			e = function(f) {
				if (this instanceof e) throw new TypeError("Symbol is not a constructor");
				return new b(c + (f || "") + "_" + d++, f)
			};
		return e
	});
	p("Symbol.iterator", function(a) {
		if (a) return a;
		a = Symbol("Symbol.iterator");
		for (var b =
				"Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array"
				.split(" "), c = 0; c < b.length; c++) {
			var d = ea[b[c]];
			"function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
				configurable: !0,
				writable: !0,
				value: function() {
					return fa(aa(this))
				}
			})
		}
		return a
	});
	var fa = function(a) {
			a = {
				next: a
			};
			a[Symbol.iterator] = function() {
				return this
			};
			return a
		},
		q = function(a) {
			return a.raw = a
		},
		r = function(a) {
			var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
			return b ? b.call(a) : {
				next: aa(a)
			}
		},
		ha = function(a) {
			if (!(a instanceof Array)) {
				a = r(a);
				for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
				a = c
			}
			return a
		},
		ka = function(a, b) {
			return Object.prototype.hasOwnProperty.call(a, b)
		},
		la = "function" == typeof Object.assign ? Object.assign : function(a, b) {
			for (var c = 1; c < arguments.length; c++) {
				var d =
					arguments[c];
				if (d)
					for (var e in d) ka(d, e) && (a[e] = d[e])
			}
			return a
		};
	p("Object.assign", function(a) {
		return a || la
	});
	var ma = "function" == typeof Object.create ? Object.create : function(a) {
			var b = function() {};
			b.prototype = a;
			return new b
		},
		na = function() {
			function a() {
				function c() {}
				new c;
				Reflect.construct(c, [], function() {});
				return new c instanceof c
			}
			if ("undefined" != typeof Reflect && Reflect.construct) {
				if (a()) return Reflect.construct;
				var b = Reflect.construct;
				return function(c, d, e) {
					c = b(c, d);
					e && Reflect.setPrototypeOf(c, e.prototype);
					return c
				}
			}
			return function(c, d, e) {
				void 0 === e && (e = c);
				e = ma(e.prototype || Object.prototype);
				return Function.prototype.apply.call(c,
					e, d) || e
			}
		}(),
		oa;
	if ("function" == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf;
	else {
		var pa;
		a: {
			var qa = {
					a: !0
				},
				ra = {};
			try {
				ra.__proto__ = qa;
				pa = ra.a;
				break a
			} catch (a) {}
			pa = !1
		}
		oa = pa ? function(a, b) {
			a.__proto__ = b;
			if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
			return a
		} : null
	}
	var sa = oa,
		t = function(a, b) {
			a.prototype = ma(b.prototype);
			a.prototype.constructor = a;
			if (sa) sa(a, b);
			else
				for (var c in b)
					if ("prototype" != c)
						if (Object.defineProperties) {
							var d = Object.getOwnPropertyDescriptor(b, c);
							d && Object.defineProperty(a, c, d)
						} else a[c] = b[c];
			a.ya = b.prototype
		},
		ta = function() {
			this.B = !1;
			this.o = null;
			this.C = void 0;
			this.h = 1;
			this.I = this.l = 0;
			this.A = null
		},
		va = function(a) {
			if (a.B) throw new TypeError("Generator is already running");
			a.B = !0
		};
	ta.prototype.D = function(a) {
		this.C = a
	};
	var wa = function(a, b) {
		a.A = {
			ud: b,
			Ue: !0
		};
		a.h = a.l || a.I
	};
	ta.prototype.return = function(a) {
		this.A = {
			return: a
		};
		this.h = this.I
	};
	var xa = function(a, b, c) {
			a.h = c;
			return {
				value: b
			}
		},
		ya = function(a) {
			a.l = 0;
			var b = a.A.ud;
			a.A = null;
			return b
		},
		za = function(a) {
			this.h = new ta;
			this.l = a
		},
		Ca = function(a, b) {
			va(a.h);
			var c = a.h.o;
			if (c) return Aa(a, "return" in c ? c["return"] : function(d) {
				return {
					value: d,
					done: !0
				}
			}, b, a.h.return);
			a.h.return(b);
			return Ba(a)
		},
		Aa = function(a, b, c, d) {
			try {
				var e = b.call(a.h.o, c);
				if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
				if (!e.done) return a.h.B = !1, e;
				var f = e.value
			} catch (g) {
				return a.h.o = null,
					wa(a.h, g), Ba(a)
			}
			a.h.o = null;
			d.call(a.h, f);
			return Ba(a)
		},
		Ba = function(a) {
			for (; a.h.h;) try {
				var b = a.l(a.h);
				if (b) return a.h.B = !1, {
					value: b.value,
					done: !1
				}
			} catch (c) {
				a.h.C = void 0, wa(a.h, c)
			}
			a.h.B = !1;
			if (a.h.A) {
				b = a.h.A;
				a.h.A = null;
				if (b.Ue) throw b.ud;
				return {
					value: b.return,
					done: !0
				}
			}
			return {
				value: void 0,
				done: !0
			}
		},
		Da = function(a) {
			this.next = function(b) {
				va(a.h);
				a.h.o ? b = Aa(a, a.h.o.next, b, a.h.D) : (a.h.D(b), b = Ba(a));
				return b
			};
			this.throw = function(b) {
				va(a.h);
				a.h.o ? b = Aa(a, a.h.o["throw"], b, a.h.D) : (wa(a.h, b), b = Ba(a));
				return b
			};
			this.return = function(b) {
				return Ca(a, b)
			};
			this[Symbol.iterator] = function() {
				return this
			}
		},
		Ea = function(a) {
			function b(d) {
				return a.next(d)
			}

			function c(d) {
				return a.throw(d)
			}
			return new Promise(function(d, e) {
				function f(g) {
					g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
				}
				f(a.next())
			})
		},
		Fa = function(a) {
			return Ea(new Da(new za(a)))
		},
		Ga = function() {
			for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
			return b
		};
	p("Reflect", function(a) {
		return a ? a : {}
	});
	p("Reflect.construct", function() {
		return na
	});
	p("Reflect.setPrototypeOf", function(a) {
		return a ? a : sa ? function(b, c) {
			try {
				return sa(b, c), !0
			} catch (d) {
				return !1
			}
		} : null
	});
	p("Promise", function(a) {
		function b() {
			this.h = null
		}

		function c(g) {
			return g instanceof e ? g : new e(function(h) {
				h(g)
			})
		}
		if (a) return a;
		b.prototype.l = function(g) {
			if (null == this.h) {
				this.h = [];
				var h = this;
				this.o(function() {
					h.B()
				})
			}
			this.h.push(g)
		};
		var d = ea.setTimeout;
		b.prototype.o = function(g) {
			d(g, 0)
		};
		b.prototype.B = function() {
			for (; this.h && this.h.length;) {
				var g = this.h;
				this.h = [];
				for (var h = 0; h < g.length; ++h) {
					var l = g[h];
					g[h] = null;
					try {
						l()
					} catch (n) {
						this.A(n)
					}
				}
			}
			this.h = null
		};
		b.prototype.A = function(g) {
			this.o(function() {
				throw g;
			})
		};
		var e = function(g) {
			this.h = 0;
			this.o = void 0;
			this.l = [];
			this.D = !1;
			var h = this.A();
			try {
				g(h.resolve, h.reject)
			} catch (l) {
				h.reject(l)
			}
		};
		e.prototype.A = function() {
			function g(n) {
				return function(m) {
					l || (l = !0, n.call(h, m))
				}
			}
			var h = this,
				l = !1;
			return {
				resolve: g(this.J),
				reject: g(this.B)
			}
		};
		e.prototype.J = function(g) {
			if (g === this) this.B(new TypeError("A Promise cannot resolve to itself"));
			else if (g instanceof e) this.M(g);
			else {
				a: switch (typeof g) {
					case "object":
						var h = null != g;
						break a;
					case "function":
						h = !0;
						break a;
					default:
						h = !1
				}
				h ?
				this.H(g) : this.C(g)
			}
		};
		e.prototype.H = function(g) {
			var h = void 0;
			try {
				h = g.then
			} catch (l) {
				this.B(l);
				return
			}
			"function" == typeof h ? this.N(h, g) : this.C(g)
		};
		e.prototype.B = function(g) {
			this.I(2, g)
		};
		e.prototype.C = function(g) {
			this.I(1, g)
		};
		e.prototype.I = function(g, h) {
			if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h +
				"): Promise already settled in state" + this.h);
			this.h = g;
			this.o = h;
			2 === this.h && this.K();
			this.L()
		};
		e.prototype.K = function() {
			var g = this;
			d(function() {
					if (g.F()) {
						var h = ea.console;
						"undefined" !== typeof h && h.error(g.o)
					}
				},
				1)
		};
		e.prototype.F = function() {
			if (this.D) return !1;
			var g = ea.CustomEvent,
				h = ea.Event,
				l = ea.dispatchEvent;
			if ("undefined" === typeof l) return !0;
			"function" === typeof g ? g = new g("unhandledrejection", {
				cancelable: !0
			}) : "function" === typeof h ? g = new h("unhandledrejection", {
				cancelable: !0
			}) : (g = ea.document.createEvent("CustomEvent"), g.initCustomEvent(
				"unhandledrejection", !1, !0, g));
			g.promise = this;
			g.reason = this.o;
			return l(g)
		};
		e.prototype.L = function() {
			if (null != this.l) {
				for (var g = 0; g < this.l.length; ++g) f.l(this.l[g]);
				this.l =
					null
			}
		};
		var f = new b;
		e.prototype.M = function(g) {
			var h = this.A();
			g.Nb(h.resolve, h.reject)
		};
		e.prototype.N = function(g, h) {
			var l = this.A();
			try {
				g.call(h, l.resolve, l.reject)
			} catch (n) {
				l.reject(n)
			}
		};
		e.prototype.then = function(g, h) {
			function l(u, A) {
				return "function" == typeof u ? function(z) {
					try {
						n(u(z))
					} catch (O) {
						m(O)
					}
				} : A
			}
			var n, m, x = new e(function(u, A) {
				n = u;
				m = A
			});
			this.Nb(l(g, n), l(h, m));
			return x
		};
		e.prototype.catch = function(g) {
			return this.then(void 0, g)
		};
		e.prototype.Nb = function(g, h) {
			function l() {
				switch (n.h) {
					case 1:
						g(n.o);
						break;
					case 2:
						h(n.o);
						break;
					default:
						throw Error("Unexpected state: " + n.h);
				}
			}
			var n = this;
			null == this.l ? f.l(l) : this.l.push(l);
			this.D = !0
		};
		e.resolve = c;
		e.reject = function(g) {
			return new e(function(h, l) {
				l(g)
			})
		};
		e.race = function(g) {
			return new e(function(h, l) {
				for (var n = r(g), m = n.next(); !m.done; m = n.next()) c(m.value).Nb(h, l)
			})
		};
		e.all = function(g) {
			var h = r(g),
				l = h.next();
			return l.done ? c([]) : new e(function(n, m) {
				function x(z) {
					return function(O) {
						u[z] = O;
						A--;
						0 == A && n(u)
					}
				}
				var u = [],
					A = 0;
				do u.push(void 0), A++, c(l.value).Nb(x(u.length -
					1), m), l = h.next(); while (!l.done)
			})
		};
		return e
	});
	p("Object.setPrototypeOf", function(a) {
		return a || sa
	});
	p("Array.prototype.find", function(a) {
		return a ? a : function(b, c) {
			a: {
				var d = this;d instanceof String && (d = String(d));
				for (var e = d.length, f = 0; f < e; f++) {
					var g = d[f];
					if (b.call(c, g, f, d)) {
						b = g;
						break a
					}
				}
				b = void 0
			}
			return b
		}
	});
	p("WeakMap", function(a) {
		function b() {}

		function c(l) {
			var n = typeof l;
			return "object" === n && null !== l || "function" === n
		}

		function d(l) {
			if (!ka(l, f)) {
				var n = new b;
				ca(l, f, {
					value: n
				})
			}
		}

		function e(l) {
			var n = Object[l];
			n && (Object[l] = function(m) {
				if (m instanceof b) return m;
				Object.isExtensible(m) && d(m);
				return n(m)
			})
		}
		if (function() {
				if (!a || !Object.seal) return !1;
				try {
					var l = Object.seal({}),
						n = Object.seal({}),
						m = new a([
							[l, 2],
							[n, 3]
						]);
					if (2 != m.get(l) || 3 != m.get(n)) return !1;
					m.delete(l);
					m.set(n, 4);
					return !m.has(l) && 4 == m.get(n)
				} catch (x) {
					return !1
				}
			}()) return a;
		var f = "$jscomp_hidden_" + Math.random();
		e("freeze");
		e("preventExtensions");
		e("seal");
		var g = 0,
			h = function(l) {
				this.h = (g += Math.random() + 1).toString();
				if (l) {
					l = r(l);
					for (var n; !(n = l.next()).done;) n = n.value, this.set(n[0], n[1])
				}
			};
		h.prototype.set = function(l, n) {
			if (!c(l)) throw Error("Invalid WeakMap key");
			d(l);
			if (!ka(l, f)) throw Error("WeakMap key fail: " + l);
			l[f][this.h] = n;
			return this
		};
		h.prototype.get = function(l) {
			return c(l) && ka(l, f) ? l[f][this.h] : void 0
		};
		h.prototype.has = function(l) {
			return c(l) && ka(l, f) && ka(l[f],
				this.h)
		};
		h.prototype.delete = function(l) {
			return c(l) && ka(l, f) && ka(l[f], this.h) ? delete l[f][this.h] : !1
		};
		return h
	});
	p("Map", function(a) {
		if (function() {
				if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object
					.seal) return !1;
				try {
					var h = Object.seal({
							x: 4
						}),
						l = new a(r([
							[h, "s"]
						]));
					if ("s" != l.get(h) || 1 != l.size || l.get({
							x: 4
						}) || l.set({
							x: 4
						}, "t") != l || 2 != l.size) return !1;
					var n = l.entries(),
						m = n.next();
					if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
					m = n.next();
					return m.done || 4 != m.value[0].x || "t" != m.value[1] || !n.next().done ? !1 : !0
				} catch (x) {
					return !1
				}
			}()) return a;
		var b = new WeakMap,
			c = function(h) {
				this.l = {};
				this.h = f();
				this.size = 0;
				if (h) {
					h = r(h);
					for (var l; !(l = h.next()).done;) l = l.value, this.set(l[0], l[1])
				}
			};
		c.prototype.set = function(h, l) {
			h = 0 === h ? 0 : h;
			var n = d(this, h);
			n.list || (n.list = this.l[n.id] = []);
			n.entry ? n.entry.value = l : (n.entry = {
					next: this.h,
					previous: this.h.previous,
					head: this.h,
					key: h,
					value: l
				}, n.list.push(n.entry), this.h.previous.next = n.entry, this.h.previous = n.entry,
				this.size++);
			return this
		};
		c.prototype.delete = function(h) {
			h = d(this, h);
			return h.entry && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.l[h.id],
				h.entry.previous.next = h.entry.next, h.entry.next.previous = h.entry.previous, h
				.entry.head = null, this.size--, !0) : !1
		};
		c.prototype.clear = function() {
			this.l = {};
			this.h = this.h.previous = f();
			this.size = 0
		};
		c.prototype.has = function(h) {
			return !!d(this, h).entry
		};
		c.prototype.get = function(h) {
			return (h = d(this, h).entry) && h.value
		};
		c.prototype.entries = function() {
			return e(this, function(h) {
				return [h.key, h.value]
			})
		};
		c.prototype.keys = function() {
			return e(this, function(h) {
				return h.key
			})
		};
		c.prototype.values = function() {
			return e(this,
				function(h) {
					return h.value
				})
		};
		c.prototype.forEach = function(h, l) {
			for (var n = this.entries(), m; !(m = n.next()).done;) m = m.value, h.call(l, m[1], m[0],
				this)
		};
		c.prototype[Symbol.iterator] = c.prototype.entries;
		var d = function(h, l) {
				var n = l && typeof l;
				"object" == n || "function" == n ? b.has(l) ? n = b.get(l) : (n = "" + ++g, b.set(l, n)) :
					n = "p_" + l;
				var m = h.l[n];
				if (m && ka(h.l, n))
					for (h = 0; h < m.length; h++) {
						var x = m[h];
						if (l !== l && x.key !== x.key || l === x.key) return {
							id: n,
							list: m,
							index: h,
							entry: x
						}
					}
				return {
					id: n,
					list: m,
					index: -1,
					entry: void 0
				}
			},
			e = function(h,
				l) {
				var n = h.h;
				return fa(function() {
					if (n) {
						for (; n.head != h.h;) n = n.previous;
						for (; n.next != n.head;) return n = n.next, {
							done: !1,
							value: l(n)
						};
						n = null
					}
					return {
						done: !0,
						value: void 0
					}
				})
			},
			f = function() {
				var h = {};
				return h.previous = h.next = h.head = h
			},
			g = 0;
		return c
	});
	var Ha = function(a, b) {
		a instanceof String && (a += "");
		var c = 0,
			d = !1,
			e = {
				next: function() {
					if (!d && c < a.length) {
						var f = c++;
						return {
							value: b(f, a[f]),
							done: !1
						}
					}
					d = !0;
					return {
						done: !0,
						value: void 0
					}
				}
			};
		e[Symbol.iterator] = function() {
			return e
		};
		return e
	};
	p("Array.prototype.entries", function(a) {
		return a ? a : function() {
			return Ha(this, function(b, c) {
				return [b, c]
			})
		}
	});
	var Ia = function(a, b, c) {
		if (null == a) throw new TypeError("The 'this' value for String.prototype." + c +
			" must not be null or undefined");
		if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c +
			" must not be a regular expression");
		return a + ""
	};
	p("String.prototype.repeat", function(a) {
		return a ? a : function(b) {
			var c = Ia(this, null, "repeat");
			if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
			b |= 0;
			for (var d = ""; b;)
				if (b & 1 && (d += c), b >>>= 1) c += c;
			return d
		}
	});
	p("Object.entries", function(a) {
		return a ? a : function(b) {
			var c = [],
				d;
			for (d in b) ka(b, d) && c.push([d, b[d]]);
			return c
		}
	});
	p("Array.prototype.keys", function(a) {
		return a ? a : function() {
			return Ha(this, function(b) {
				return b
			})
		}
	});
	p("Object.is", function(a) {
		return a ? a : function(b, c) {
			return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
		}
	});
	p("Array.prototype.includes", function(a) {
		return a ? a : function(b, c) {
			var d = this;
			d instanceof String && (d = String(d));
			var e = d.length;
			c = c || 0;
			for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
				var f = d[c];
				if (f === b || Object.is(f, b)) return !0
			}
			return !1
		}
	});
	p("String.prototype.includes", function(a) {
		return a ? a : function(b, c) {
			return -1 !== Ia(this, b, "includes").indexOf(b, c || 0)
		}
	});
	p("Array.from", function(a) {
		return a ? a : function(b, c, d) {
			c = null != c ? c : function(h) {
				return h
			};
			var e = [],
				f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
			if ("function" == typeof f) {
				b = f.call(b);
				for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
			} else
				for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
			return e
		}
	});
	p("Math.trunc", function(a) {
		return a ? a : function(b) {
			b = Number(b);
			if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
			var c = Math.floor(Math.abs(b));
			return 0 > b ? -c : c
		}
	});
	p("Array.prototype.fill", function(a) {
		return a ? a : function(b, c, d) {
			var e = this.length || 0;
			0 > c && (c = Math.max(0, e + c));
			if (null == d || d > e) d = e;
			d = Number(d);
			0 > d && (d = Math.max(0, e + d));
			for (c = Number(c || 0); c < d; c++) this[c] = b;
			return this
		}
	});
	var Ja = function(a) {
		return a ? a : Array.prototype.fill
	};
	p("Int8Array.prototype.fill", Ja);
	p("Uint8Array.prototype.fill", Ja);
	p("Uint8ClampedArray.prototype.fill", Ja);
	p("Int16Array.prototype.fill", Ja);
	p("Uint16Array.prototype.fill", Ja);
	p("Int32Array.prototype.fill", Ja);
	p("Uint32Array.prototype.fill", Ja);
	p("Float32Array.prototype.fill", Ja);
	p("Float64Array.prototype.fill", Ja);
	p("Array.prototype.values", function(a) {
		return a ? a : function() {
			return Ha(this, function(b, c) {
				return c
			})
		}
	});
	p("String.prototype.padStart", function(a) {
		return a ? a : function(b, c) {
			var d = Ia(this, null, "padStart");
			b -= d.length;
			c = void 0 !== c ? String(c) : " ";
			return (0 < b && c ? c.repeat(Math.ceil(b / c.length)).substring(0, b) : "") + d
		}
	});
	p("Math.imul", function(a) {
		return a ? a : function(b, c) {
			b = Number(b);
			c = Number(c);
			var d = b & 65535,
				e = c & 65535;
			return d * e + ((b >>> 16 & 65535) * e + d * (c >>> 16 & 65535) << 16 >>> 0) | 0
		}
	});
	p("Object.values", function(a) {
		return a ? a : function(b) {
			var c = [],
				d;
			for (d in b) ka(b, d) && c.push(b[d]);
			return c
		}
	});
	var Ka = Ka || {},
		v = this || self,
		w = function(a, b, c) {
			a = a.split(".");
			c = c || v;
			a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
			for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[
				d] ? c = c[d] : c = c[d] = {} : c[d] = b
		},
		Ma = function(a, b) {
			a = a.split(".");
			b = b || v;
			for (var c = 0; c < a.length; c++)
				if (b = b[a[c]], null == b) return null;
			return b
		},
		Na = function() {},
		Oa = function(a) {
			var b = typeof a;
			b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
			return "array" == b || "object" == b && "number" == typeof a.length
		},
		Pa = function(a) {
			var b = typeof a;
			return "object" == b && null != a || "function" == b
		},
		Sa = function(a) {
			return Object.prototype.hasOwnProperty.call(a, Qa) && a[Qa] || (a[Qa] = ++Ra)
		},
		Ta = function(a) {
			null !== a && "removeAttribute" in a && a.removeAttribute(Qa);
			try {
				delete a[Qa]
			} catch (b) {}
		},
		Qa = "closure_uid_" + (1E9 * Math.random() >>> 0),
		Ra = 0,
		Ua = function(a, b, c) {
			return a.call.apply(a.bind, arguments)
		},
		Va = function(a, b, c) {
			if (!a) throw Error();
			if (2 < arguments.length) {
				var d = Array.prototype.slice.call(arguments, 2);
				return function() {
					var e = Array.prototype.slice.call(arguments);
					Array.prototype.unshift.apply(e, d);
					return a.apply(b, e)
				}
			}
			return function() {
				return a.apply(b, arguments)
			}
		},
		Wa = function(a, b, c) {
			Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Wa = Ua :
				Wa = Va;
			return Wa.apply(null, arguments)
		},
		Xa = function(a, b) {
			var c = Array.prototype.slice.call(arguments, 1);
			return function() {
				var d = c.slice();
				d.push.apply(d, arguments);
				return a.apply(this, d)
			}
		},
		Ya = function() {
			return Date.now()
		},
		Za = function(a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.ya = b.prototype;
			a.prototype = new c;
			a.prototype.constructor = a;
			a.yh = function(d, e, f) {
				for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] =
					arguments[h];
				return b.prototype[e].apply(d, g)
			}
		},
		$a = function(a) {
			return a
		};

	function ab(a) {
		if (Error.captureStackTrace) Error.captureStackTrace(this, ab);
		else {
			var b = Error().stack;
			b && (this.stack = b)
		}
		a && (this.message = String(a))
	}
	Za(ab, Error);
	ab.prototype.name = "CustomError";
	var bb;
	var cb, db = "undefined" !== typeof TextEncoder;

	function eb(a) {
		if (db) a = (cb || (cb = new TextEncoder)).encode(a);
		else {
			var b = void 0;
			b = void 0 === b ? !1 : b;
			for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
				var f = a.charCodeAt(e);
				if (128 > f) d[c++] = f;
				else {
					if (2048 > f) d[c++] = f >> 6 | 192;
					else {
						if (55296 <= f && 57343 >= f) {
							if (56319 >= f && e < a.length) {
								var g = a.charCodeAt(++e);
								if (56320 <= g && 57343 >= g) {
									f = 1024 * (f - 55296) + g - 56320 + 65536;
									d[c++] = f >> 18 | 240;
									d[c++] = f >> 12 & 63 | 128;
									d[c++] = f >> 6 & 63 | 128;
									d[c++] = f & 63 | 128;
									continue
								} else e--
							}
							if (b) throw Error("Found an unpaired surrogate");
							f = 65533
						}
						d[c++] =
							f >> 12 | 224;
						d[c++] = f >> 6 & 63 | 128
					}
					d[c++] = f & 63 | 128
				}
			}
			a = d.subarray(0, c)
		}
		return a
	};
	var fb = function(a) {
		return Array.prototype.map.call(a, function(b) {
			b = b.toString(16);
			return 1 < b.length ? b : "0" + b
		}).join("")
	};
	var gb = function(a, b) {
			var c = a.length - b.length;
			return 0 <= c && a.indexOf(b, c) == c
		},
		ib = function(a) {
			return /^[\s\xa0]*$/.test(a)
		},
		jb = String.prototype.trim ? function(a) {
			return a.trim()
		} : function(a) {
			return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
		},
		kb = /&/g,
		lb = /</g,
		nb = />/g,
		ob = /"/g,
		pb = /'/g,
		qb = /\x00/g,
		rb = /[\x00&<>"']/,
		sb = function(a, b) {
			return -1 != a.toLowerCase().indexOf(b.toLowerCase())
		},
		ub = function(a, b) {
			var c = 0;
			a = jb(String(a)).split(".");
			b = jb(String(b)).split(".");
			for (var d = Math.max(a.length, b.length), e = 0; 0 == c &&
				e < d; e++) {
				var f = a[e] || "",
					g = b[e] || "";
				do {
					f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
					g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
					if (0 == f[0].length && 0 == g[0].length) break;
					c = tb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) ||
						tb(0 == f[2].length, 0 == g[2].length) || tb(f[2], g[2]);
					f = f[3];
					g = g[3]
				} while (0 == c)
			}
			return c
		},
		tb = function(a, b) {
			return a < b ? -1 : a > b ? 1 : 0
		};

	function vb() {
		var a = v.navigator;
		return a && (a = a.userAgent) ? a : ""
	}

	function y(a) {
		return -1 != vb().indexOf(a)
	};

	function wb() {
		return y("Trident") || y("MSIE")
	}

	function xb() {
		return y("Firefox") || y("FxiOS")
	}

	function yb() {
		return y("Safari") && !(zb() || y("Coast") || y("Opera") || y("Edge") || y("Edg/") || y("OPR") || xb() || y(
			"Silk") || y("Android"))
	}

	function zb() {
		return (y("Chrome") || y("CriOS")) && !y("Edge") || y("Silk")
	};

	function Ab() {
		return y("iPhone") && !y("iPod") && !y("iPad")
	};
	var Bb = function(a, b) {
			if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
			for (var c = 0; c < a.length; c++)
				if (c in a && a[c] === b) return c;
			return -1
		},
		B = function(a, b) {
			for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(
				void 0, d[e], e, a)
		};

	function Cb(a, b) {
		for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(
			void 0, c[d], d, a)
	}
	var Db = function(a, b) {
			for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
				if (g in f) {
					var h = f[g];
					b.call(void 0, h, g, a) && (d[e++] = h)
				} return d
		},
		Eb = function(a, b) {
			for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++)
				f in e && (d[f] = b.call(void 0, e[f], f, a));
			return d
		},
		Fb = function(a, b, c) {
			var d = c;
			B(a, function(e, f) {
				d = b.call(void 0, d, e, f, a)
			});
			return d
		},
		Gb = function(a, b) {
			for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
				if (e in d && b.call(void 0, d[e],
						e, a)) return !0;
			return !1
		};

	function Hb(a, b) {
		b = Ib(a, b, void 0);
		return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
	}

	function Ib(a, b, c) {
		for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
			if (f in e && b.call(c, e[f], f, a)) return f;
		return -1
	}

	function Jb(a, b) {
		for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
			if (d in c && b.call(void 0, c[d], d, a)) return d;
		return -1
	}

	function Kb(a, b) {
		return 0 <= Bb(a, b)
	}

	function Lb(a, b) {
		b = Bb(a, b);
		var c;
		(c = 0 <= b) && Mb(a, b);
		return c
	}

	function Mb(a, b) {
		return 1 == Array.prototype.splice.call(a, b, 1).length
	}

	function Nb(a, b) {
		var c = 0;
		Cb(a, function(d, e) {
			b.call(void 0, d, e, a) && Mb(a, e) && c++
		})
	}

	function Ob(a) {
		return Array.prototype.concat.apply([], arguments)
	}

	function Pb(a) {
		var b = a.length;
		if (0 < b) {
			for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
			return c
		}
		return []
	}

	function Qb(a) {
		for (var b = 0, c = 0, d = {}; c < a.length;) {
			var e = a[c++],
				f = Pa(e) ? "o" + Sa(e) : (typeof e).charAt(0) + e;
			Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
		}
		a.length = b
	}

	function Rb(a, b) {
		a.sort(b || Sb)
	}

	function Sb(a, b) {
		return a > b ? 1 : a < b ? -1 : 0
	}

	function Tb(a) {
		for (var b = [], c = 0; c < a; c++) b[c] = "";
		return b
	};
	var Ub = function(a) {
		Ub[" "](a);
		return a
	};
	Ub[" "] = Na;
	var Vb = function(a, b) {
			try {
				return Ub(a[b]), !0
			} catch (c) {}
			return !1
		},
		Xb = function(a, b) {
			var c = Wb;
			return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
		};
	var Yb = y("Opera"),
		Zb = wb(),
		$b = y("Edge"),
		ac = y("Gecko") && !(sb(vb(), "WebKit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge"),
		bc = sb(vb(), "WebKit") && !y("Edge"),
		cc = y("Macintosh"),
		dc = y("Android"),
		ec = Ab(),
		fc = y("iPad"),
		gc = y("iPod"),
		hc = Ab() || y("iPad") || y("iPod"),
		ic = function() {
			var a = v.document;
			return a ? a.documentMode : void 0
		},
		jc;
	a: {
		var kc = "",
			mc = function() {
				var a = vb();
				if (ac) return /rv:([^\);]+)(\)|;)/.exec(a);
				if ($b) return /Edge\/([\d\.]+)/.exec(a);
				if (Zb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
				if (bc) return /WebKit\/(\S+)/.exec(a);
				if (Yb) return /(?:Version)[ \/]?(\S+)/.exec(a)
			}();mc && (kc = mc ? mc[1] : "");
		if (Zb) {
			var nc = ic();
			if (null != nc && nc > parseFloat(kc)) {
				jc = String(nc);
				break a
			}
		}
		jc = kc
	}
	var oc = jc,
		Wb = {},
		pc = function(a) {
			return Xb(a, function() {
				return 0 <= ub(oc, a)
			})
		},
		qc;
	if (v.document && Zb) {
		var rc = ic();
		qc = rc ? rc : parseInt(oc, 10) || void 0
	} else qc = void 0;
	var sc = qc;
	var tc = xb(),
		uc = y("Android") && !(zb() || xb() || y("Opera") || y("Silk")),
		vc = zb();
	yb();
	var wc = {},
		xc = null,
		zc = function(a, b) {
			void 0 === b && (b = 0);
			yc();
			b = wc[b];
			for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
				var g = a[e],
					h = a[e + 1],
					l = a[e + 2],
					n = b[g >> 2];
				g = b[(g & 3) << 4 | h >> 4];
				h = b[(h & 15) << 2 | l >> 6];
				l = b[l & 63];
				c[f++] = "" + n + g + h + l
			}
			n = 0;
			l = d;
			switch (a.length - e) {
				case 2:
					n = a[e + 1], l = b[(n & 15) << 2] || d;
				case 1:
					a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | n >> 4] + l + d
			}
			return c.join("")
		},
		Ac = function(a) {
			for (var b = [], c = 0, d = 0; d < a.length; d++) {
				var e = a.charCodeAt(d);
				255 < e && (b[c++] = e & 255, e >>= 8);
				b[c++] = e
			}
			return zc(b,
				3)
		},
		Cc = function(a) {
			var b = [];
			Bc(a, function(c) {
				b.push(c)
			});
			return b
		},
		Bc = function(a, b) {
			function c(l) {
				for (; d < a.length;) {
					var n = a.charAt(d++),
						m = xc[n];
					if (null != m) return m;
					if (!ib(n)) throw Error("Unknown base64 encoding at char: " + n);
				}
				return l
			}
			yc();
			for (var d = 0;;) {
				var e = c(-1),
					f = c(0),
					g = c(64),
					h = c(64);
				if (64 === h && -1 === e) break;
				b(e << 2 | f >> 4);
				64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
			}
		},
		yc = function() {
			if (!xc) {
				xc = {};
				for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=",
						"+/",
						"-_=", "-_.", "-_"
					], c = 0; 5 > c; c++) {
					var d = a.concat(b[c].split(""));
					wc[c] = d;
					for (var e = 0; e < d.length; e++) {
						var f = d[e];
						void 0 === xc[f] && (xc[f] = e)
					}
				}
			}
		};
	var Dc = "function" === typeof Uint8Array,
		Ec;
	var Fc = "function" === typeof Uint8Array.prototype.slice,
		Gc = 0,
		Hc = 0;

	function Ic(a) {
		var b = 0 > a;
		a = Math.abs(a);
		var c = a >>> 0;
		a = Math.floor((a - c) / 4294967296);
		a >>>= 0;
		b && (a = ~a >>> 0, c = (~c >>> 0) + 1, 4294967295 < c && (c = 0, a++, 4294967295 < a && (a = 0)));
		Gc = c;
		Hc = a
	};
	var Jc = function() {
		this.l = new Uint8Array(64);
		this.h = 0
	};
	Jc.prototype.push = function(a) {
		var b = this.l,
			c = b.length;
		this.h + 1 < c || (this.l = new Uint8Array(Math.max(1 + c, c + (c >> 1))), this.l.set(b));
		this.l[this.h++] = a
	};
	Jc.prototype.length = function() {
		return this.h
	};
	Jc.prototype.end = function() {
		var a = this.l,
			b = this.h;
		this.h = 0;
		return 0 === b ? Ec || (Ec = new Uint8Array(0)) : Fc ? a.slice(0, b) : new Uint8Array(a.subarray(0, b))
	};
	var Kc = function(a) {
			for (var b = Gc, c = Hc; 0 < c || 127 < b;) a.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>=
				7;
			a.push(b)
		},
		Lc = function(a, b) {
			for (; 127 < b;) a.push(b & 127 | 128), b >>>= 7;
			a.push(b)
		},
		Mc = function(a, b) {
			a.push(b >>> 0 & 255);
			a.push(b >>> 8 & 255);
			a.push(b >>> 16 & 255);
			a.push(b >>> 24 & 255)
		};
	var Nc = function() {
			this.o = [];
			this.l = 0;
			this.h = new Jc
		},
		Oc = function(a, b) {
			0 !== b.length && (a.o.push(b), a.l += b.length)
		},
		Pc = function(a) {
			Oc(a, a.h.end())
		},
		Rc = function(a, b) {
			Qc(a, b, 2);
			Pc(a);
			return {
				We: a.l,
				te: a.o.length - 1
			}
		},
		Sc = function(a, b) {
			Pc(a);
			Lc(a.h, a.l + a.h.length() - b.We);
			var c = a.h.end();
			a.l += c.length;
			a.o.splice(1 + b.te, 0, c)
		},
		Qc = function(a, b, c) {
			Lc(a.h, 8 * b + c)
		},
		Tc = function(a, b, c) {
			if (null != c && null != c)
				if (Qc(a, b, 0), a = a.h, 0 <= c) Lc(a, c);
				else {
					for (b = 0; 9 > b; b++) a.push(c & 127 | 128), c >>= 7;
					a.push(1)
				}
		},
		Uc = function(a, b, c) {
			null !=
				c && null != c && (Qc(a, b, 0), a = a.h, Ic(c), Kc(a))
		},
		Vc = function(a, b, c) {
			null != c && null != c && (Qc(a, b, 0), a = a.h, Ic(c), Kc(a))
		},
		Wc = function(a, b, c) {
			Qc(a, b, 2);
			Lc(a.h, c.length);
			Pc(a);
			Oc(a, c)
		},
		Xc = function(a, b, c, d) {
			if (null != c)
				for (var e = 0; e < c.length; e++) {
					var f = Rc(a, b);
					d(c[e], a);
					Sc(a, f)
				}
		};
	var Yc = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(void 0) : void 0;

	function Zc(a) {
		Object.isFrozen(a) || (Yc ? a[Yc] |= 1 : void 0 !== a.h ? a.h |= 1 : Object.defineProperties(a, {
			h: {
				value: 1,
				configurable: !0,
				writable: !0,
				enumerable: !1
			}
		}));
		return a
	};

	function $c(a) {
		return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
	}
	var ad;

	function bd(a) {
		switch (typeof a) {
			case "number":
				return isFinite(a) ? a : String(a);
			case "object":
				if (a && !Array.isArray(a) && Dc && null != a && a instanceof Uint8Array) return zc(a)
		}
		return a
	};

	function cd(a, b) {
		if (null != a) return Array.isArray(a) || $c(a) ? dd(a, b) : b(a)
	}

	function dd(a, b) {
		if (Array.isArray(a)) {
			for (var c = Array(a.length), d = 0; d < a.length; d++) c[d] = cd(a[d], b);
			if (b = Array.isArray(a)) {
				var e;
				Yc ? e = a[Yc] : e = a.h;
				b = (null == e ? 0 : e) & 1
			}
			b && Zc(c);
			return c
		}
		e = {};
		for (c in a) e[c] = cd(a[c], b);
		return e
	}

	function ed(a) {
		if (a && "object" == typeof a && a.toJSON) return a.toJSON();
		a = bd(a);
		return Array.isArray(a) ? dd(a, ed) : a
	};
	var gd;

	function hd(a, b) {
		gd = b;
		a = new a(b);
		gd = null;
		return a
	};
	var C = function(a, b, c) {
			var d = gd;
			gd = null;
			a || (a = d);
			d = this.constructor.messageId;
			a || (a = d ? [d] : []);
			this.o = (d ? 0 : -1) - (this.constructor.Bh || 0);
			this.h = null;
			this.pa = a;
			a: {
				d = this.pa.length;a = d - 1;
				if (d && (d = this.pa[a], $c(d))) {
					this.A = a - this.o;
					this.l = d;
					break a
				}
				void 0 !== b && -1 < b ? (this.A = Math.max(b, a + 1 - this.o), this.l = null) : this.A = Number
					.MAX_VALUE
			}
			if (c)
				for (b = 0; b < c.length; b++) a = c[b], a < this.A ? (a += this.o, (d = this.pa[a]) ? Array
					.isArray(d) && Zc(d) : this.pa[a] = id) : (jd(this), (d = this.l[a]) ? Array.isArray(d) &&
					Zc(d) : this.l[a] = id)
		},
		id =
		Object.freeze(Zc([])),
		jd = function(a) {
			var b = a.A + a.o;
			a.pa[b] || (a.l = a.pa[b] = {})
		},
		D = function(a, b, c) {
			return -1 === b ? null : b >= a.A ? a.l ? a.l[b] : void 0 : (void 0 === c ? 0 : c) && a.l && (c = a.l[
				b], null != c) ? c : a.pa[b + a.o]
		},
		ld = function(a, b, c) {
			c = void 0 === c ? !1 : c;
			var d = D(a, b, c);
			null == d && (d = id);
			d === id && (d = Zc(d.slice()), kd(a, b, d, c));
			return d
		},
		md = function(a, b) {
			a = D(a, b);
			return null == a ? a : +a
		},
		nd = function(a, b) {
			a = D(a, b);
			return null == a ? a : !!a
		},
		od = function(a, b, c) {
			a = D(a, b);
			return null == a ? c : a
		},
		pd = function(a, b) {
			a = nd(a, b);
			return null == a ? !1 : a
		},
		kd = function(a, b, c, d) {
			(void 0 === d ? 0 : d) || b >= a.A ? (jd(a), a.l[b] = c) : a.pa[b + a.o] = c;
			return a
		},
		qd = function(a, b, c) {
			var d = void 0 === d ? !1 : d;
			return kd(a, b, null == c ? Zc([]) : Array.isArray(c) ? Zc(c) : c, d)
		};

	function rd(a, b, c, d) {
		c !== d ? kd(a, b, c) : kd(a, b, void 0, !1);
		return a
	}
	var sd = function(a, b) {
			for (var c = 0, d = 0; d < b.length; d++) {
				var e = b[d];
				null != D(a, e) && (0 !== c && kd(a, c, void 0, !1), c = e)
			}
			return c
		},
		td = function(a, b, c) {
			if (-1 === c) return null;
			a.h || (a.h = {});
			var d = a.h[c];
			if (d) return d;
			var e = D(a, c, !1);
			if (null == e) return d;
			b = new b(e);
			return a.h[c] = b
		},
		ud = function(a, b, c, d) {
			a.h || (a.h = {});
			var e = a.h[c];
			if (!e) {
				d = ld(a, c, void 0 === d ? !1 : d);
				e = [];
				for (var f = 0; f < d.length; f++) e[f] = new b(d[f]);
				a.h[c] = e
			}
			return e
		},
		vd = function(a, b, c) {
			var d;
			a.h || (a.h = {});
			var e = c ? c.pa : c;
			a.h[b] = c;
			return kd(a, b, e, void 0 ===
				d ? !1 : d)
		};
	C.prototype.toJSON = function() {
		var a = this.pa;
		return ad ? a : dd(a, ed)
	};

	function wd(a, b) {
		return bd(b)
	}
	var xd = function(a) {
		ad = !0;
		try {
			return JSON.stringify(a.toJSON(), wd)
		} finally {
			ad = !1
		}
	};
	C.prototype.toString = function() {
		return this.pa.toString()
	};
	var yd = function(a, b, c) {
		b = sd(a, c) === b ? b : -1;
		return od(a, b, 0)
	};
	var zd = function(a, b) {
			if (a = a.B) {
				Pc(b);
				for (var c = 0; c < a.length; c++) Oc(b, a[c])
			}
		},
		Ad = function(a, b) {
			var c = new Nc;
			b(a, c);
			a = c.l + c.h.length();
			if (0 === a) c = new Uint8Array(0);
			else {
				a = new Uint8Array(a);
				for (var d = c.o, e = d.length, f = b = 0; f < e; f++) {
					var g = d[f];
					0 !== g.length && (a.set(g, b), b += g.length)
				}
				d = c.h;
				e = d.h;
				0 !== e && (a.set(d.l.subarray(0, e), b), d.h = 0);
				c.o = [a];
				c = a
			}
			return c
		};
	var Bd = document,
		E = window;
	var Ed = function(a, b) {
		this.h = a === Cd && b || "";
		this.l = Dd
	};
	Ed.prototype.Sa = !0;
	Ed.prototype.Ga = function() {
		return this.h
	};
	var Fd = function(a) {
			return a instanceof Ed && a.constructor === Ed && a.l === Dd ? a.h : "type_error:Const"
		},
		Gd = function(a) {
			return new Ed(Cd, a)
		},
		Dd = {},
		Cd = {};

	function Hd(a, b, c) {
		for (var d in a) b.call(c, a[d], d, a)
	}

	function Id(a, b) {
		var c = {},
			d;
		for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
		return c
	}

	function Jd(a) {
		var b = Kd,
			c;
		for (c in b)
			if (a.call(void 0, b[c], c, b)) return !0;
		return !1
	}

	function Ld(a) {
		var b = Md,
			c;
		for (c in b)
			if (!a.call(void 0, b[c], c, b)) return !1;
		return !0
	}

	function Nd(a) {
		var b = [],
			c = 0,
			d;
		for (d in a) b[c++] = a[d];
		return b
	}

	function Od(a) {
		var b = [],
			c = 0,
			d;
		for (d in a) b[c++] = d;
		return b
	}

	function Pd(a, b) {
		var c = Oa(b),
			d = c ? b : arguments;
		for (c = c ? 0 : 1; c < d.length; c++) {
			if (null == a) return;
			a = a[d[c]]
		}
		return a
	}

	function Qd(a, b) {
		return null !== a && b in a
	}

	function Rd(a, b) {
		for (var c in a)
			if (a[c] == b) return !0;
		return !1
	}

	function Sd(a) {
		var b = Td,
			c;
		for (c in b)
			if (a.call(void 0, b[c], c, b)) return c
	}

	function Ud(a) {
		for (var b in a) return !1;
		return !0
	}

	function Vd(a) {
		for (var b in a) delete a[b]
	}

	function Wd(a, b, c) {
		return null !== a && b in a ? a[b] : c
	}
	var Xd = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
		" ");

	function Yd(a, b) {
		for (var c, d, e = 1; e < arguments.length; e++) {
			d = arguments[e];
			for (c in d) a[c] = d[c];
			for (var f = 0; f < Xd.length; f++) c = Xd[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[
				c])
		}
	};
	var Zd, $d = function() {
		if (void 0 === Zd) {
			var a = null,
				b = v.trustedTypes;
			if (b && b.createPolicy) {
				try {
					a = b.createPolicy("goog#html", {
						createHTML: $a,
						createScript: $a,
						createScriptURL: $a
					})
				} catch (c) {
					v.console && v.console.error(c.message)
				}
				Zd = a
			} else Zd = a
		}
		return Zd
	};
	var be = function(a, b) {
		this.h = b === ae ? a : ""
	};
	k = be.prototype;
	k.Sa = !0;
	k.Ga = function() {
		return this.h.toString()
	};
	k.Ac = !0;
	k.wc = function() {
		return 1
	};
	k.toString = function() {
		return this.h + ""
	};
	var ce = function(a) {
			return a instanceof be && a.constructor === be ? a.h : "type_error:TrustedResourceUrl"
		},
		ae = {},
		de = function(a) {
			var b = $d();
			a = b ? b.createScriptURL(a) : a;
			return new be(a, ae)
		};
	var fe = function(a, b) {
		this.h = b === ee ? a : ""
	};
	k = fe.prototype;
	k.Sa = !0;
	k.Ga = function() {
		return this.h.toString()
	};
	k.Ac = !0;
	k.wc = function() {
		return 1
	};
	k.toString = function() {
		return this.h.toString()
	};
	var ge = function(a) {
			return a instanceof fe && a.constructor === fe ? a.h : "type_error:SafeUrl"
		},
		he = RegExp(
			'^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$',
			"i"),
		ie = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
		je = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		ee = {},
		ke = new fe("about:invalid#zClosurez", ee);
	var le = {},
		me = function(a, b) {
			this.h = b === le ? a : "";
			this.Sa = !0
		};
	me.prototype.Ga = function() {
		return this.h
	};
	me.prototype.toString = function() {
		return this.h.toString()
	};
	var ne = new me("", le);
	var oe = {},
		pe = function(a, b, c) {
			this.h = c === oe ? a : "";
			this.l = b;
			this.Sa = this.Ac = !0
		};
	pe.prototype.wc = function() {
		return this.l
	};
	pe.prototype.Ga = function() {
		return this.h.toString()
	};
	pe.prototype.toString = function() {
		return this.h.toString()
	};
	var qe = function(a) {
			return a instanceof pe && a.constructor === pe ? a.h : "type_error:SafeHtml"
		},
		re = function(a, b) {
			var c = $d();
			a = c ? c.createHTML(a) : a;
			return new pe(a, b, oe)
		};
	/*

	 SPDX-License-Identifier: Apache-2.0
	*/
	var se = {};

	function te() {
		var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
		return null !== a && void 0 !== a ? a : null
	}
	var ue;

	function ve() {
		var a, b;
		if (void 0 === ue) try {
			ue = null !== (b = null === (a = te()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
				createHTML: function(c) {
					return c
				},
				createScript: function(c) {
					return c
				},
				createScriptURL: function(c) {
					return c
				}
			})) && void 0 !== b ? b : null
		} catch (c) {
			ue = null
		}
		return ue
	};
	var we = function() {},
		xe = function(a) {
			this.h = a
		};
	t(xe, we);
	xe.prototype.toString = function() {
		return this.h.toString()
	};

	function ye(a) {
		var b, c = null === (b = ve()) || void 0 === b ? void 0 : b.createScriptURL(a);
		return new xe(null !== c && void 0 !== c ? c : a, se)
	}

	function ze(a) {
		if (a instanceof xe) return a.h;
		throw Error("");
	}

	function Ae(a) {
		var b;
		a = ze(a);
		return (null === (b = te()) || void 0 === b ? 0 : b.isScriptURL(a)) ? TrustedScriptURL.prototype.toString
			.apply(a) : a
	};
	var Be = function() {},
		Ce = function(a) {
			this.h = a
		};
	t(Ce, Be);
	Ce.prototype.toString = function() {
		return this.h
	};
	var De = new Ce("about:invalid#zTSz", se);
	var Ee = function(a) {
		this.isValid = a
	};

	function Fe(a) {
		return new Ee(function(b) {
			return b.substr(0, a.length + 1).toLowerCase() === a + ":"
		})
	}
	var Ge = [Fe("data"), Fe("http"), Fe("https"), Fe("mailto"), Fe("ftp"), new Ee(function(a) {
		return /^[^:]*([/?#]|$)/.test(a)
	})];

	function F(a) {
		var b = Ga.apply(1, arguments);
		if (0 === b.length) return ye(a[0]);
		for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
		return ye(c.join(""))
	}

	function He(a, b) {
		var c = Ae(a);
		if (/#/.test(c)) throw Error("");
		var d = /\?/.test(c) ? "&" : "?";
		b.forEach(function(e, f) {
			e = e instanceof Array ? e : [e];
			for (var g = 0; g < e.length; g++) {
				var h = e[g];
				null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(
					String(h)), d = "&")
			}
		});
		return ye(c)
	};

	function Ie(a) {
		return a instanceof we ? ze(a) : ce(a)
	}

	function Je(a) {
		if (a instanceof Be)
			if (a instanceof Ce) a = a.h;
			else throw Error("");
		else a = ge(a);
		return a
	};

	function Ke(a, b) {
		if (null !== a && void 0 !== a.tagName) {
			if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
			if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
		}
		a.innerHTML = qe(b)
	};

	function Le(a) {
		var b, c = (a.ownerDocument && a.ownerDocument.defaultView || window).document,
			d = null === (b = c.querySelector) || void 0 === b ? void 0 : b.call(c, "script[nonce]");
		(b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
	};

	function Me(a, b) {
		a.write(qe(b))
	};
	var Ne = function(a) {
			return function() {
				return a
			}
		},
		Oe = function() {},
		Pe = function(a) {
			var b = !1,
				c;
			return function() {
				b || (c = a(), b = !0);
				return c
			}
		},
		Qe = function(a) {
			var b = a;
			return function() {
				if (b) {
					var c = b;
					b = null;
					c()
				}
			}
		},
		Re = function(a) {
			var b = 0,
				c = !1,
				d = [],
				e = function() {
					b = 0;
					c && (c = !1, f())
				},
				f = function() {
					b = v.setTimeout(e, 1E3);
					var g = d;
					d = [];
					a.apply(void 0, g)
				};
			return function(g) {
				d = arguments;
				b ? c = !0 : f()
			}
		};
	var Se = Pe(function() {
		var a = !1;
		try {
			var b = Object.defineProperty({}, "passive", {
				get: function() {
					a = !0
				}
			});
			v.addEventListener("test", null, b)
		} catch (c) {}
		return a
	});

	function Te(a) {
		return a ? a.passive && Se() ? a : a.capture || !1 : !1
	}
	var Ue = function(a, b, c, d) {
			return a.addEventListener ? (a.addEventListener(b, c, Te(d)), !0) : !1
		},
		Ve = function(a, b, c) {
			a.removeEventListener && a.removeEventListener(b, c, Te(void 0))
		},
		We = function(a) {
			var b = void 0 === b ? {} : b;
			if ("function" === typeof window.CustomEvent) var c = new CustomEvent("rum_blp", b);
			else c = document.createEvent("CustomEvent"), c.initCustomEvent("rum_blp", !!b.bubbles, !!b.cancelable,
				b.detail);
			a.dispatchEvent(c)
		};
	try {
		(new self.OffscreenCanvas(0, 0)).getContext("2d")
	} catch (a) {}
	var Xe = Zb || bc;
	var Ye = /^[\w+/_-]+[=]{0,2}$/,
		Ze = function(a, b) {
			b = (b || v).document;
			return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && Ye
				.test(a) ? a : "" : ""
		};
	var $e = function(a, b) {
		this.x = void 0 !== a ? a : 0;
		this.y = void 0 !== b ? b : 0
	};
	$e.prototype.ceil = function() {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		return this
	};
	$e.prototype.floor = function() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this
	};
	$e.prototype.round = function() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this
	};
	$e.prototype.scale = function(a, b) {
		this.x *= a;
		this.y *= "number" === typeof b ? b : a;
		return this
	};
	var af = function(a, b) {
		this.width = a;
		this.height = b
	};
	k = af.prototype;
	k.aspectRatio = function() {
		return this.width / this.height
	};
	k.isEmpty = function() {
		return !(this.width * this.height)
	};
	k.ceil = function() {
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this
	};
	k.floor = function() {
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this
	};
	k.round = function() {
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this
	};
	k.scale = function(a, b) {
		this.width *= a;
		this.height *= "number" === typeof b ? b : a;
		return this
	};
	var bf = function(a) {
			return decodeURIComponent(a.replace(/\+/g, " "))
		},
		cf = function(a, b) {
			a.length > b && (a = a.substring(0, b - 3) + "...");
			return a
		},
		df = String.prototype.repeat ? function(a, b) {
			return a.repeat(b)
		} : function(a, b) {
			return Array(b + 1).join(a)
		},
		ef = function(a) {
			return null == a ? "" : String(a)
		},
		ff = 2147483648 * Math.random() | 0,
		gf = function(a) {
			return String(a).replace(/\-([a-z])/g, function(b, c) {
				return c.toUpperCase()
			})
		},
		hf = function() {
			return "googleAvInapp".replace(/([A-Z])/g, "-$1").toLowerCase()
		},
		jf = function(a) {
			return a.replace(RegExp("(^|[\\s]+)([a-z])",
				"g"), function(b, c, d) {
				return c + d.toUpperCase()
			})
		},
		kf = function(a) {
			isFinite(a) && (a = String(a));
			return "string" === typeof a ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN
		};
	var nf = function(a) {
			return a ? new lf(mf(a)) : bb || (bb = new lf)
		},
		of = function(a) {
			var b = document;
			return "string" === typeof a ? b.getElementById(a) : a
		},
		pf = function() {
			var a = document;
			return a.querySelectorAll && a.querySelector ? a.querySelectorAll("SCRIPT") : a.getElementsByTagName(
				"SCRIPT")
		},
		rf = function(a, b) {
			Hd(b, function(c, d) {
				c && "object" == typeof c && c.Sa && (c = c.Ga());
				"style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a
					.htmlFor = c : qf.hasOwnProperty(d) ? a.setAttribute(qf[d], c) : 0 == d.lastIndexOf(
						"aria-", 0) || 0 ==
					d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
			})
		},
		qf = {
			cellpadding: "cellPadding",
			cellspacing: "cellSpacing",
			colspan: "colSpan",
			frameborder: "frameBorder",
			height: "height",
			maxlength: "maxLength",
			nonce: "nonce",
			role: "role",
			rowspan: "rowSpan",
			type: "type",
			usemap: "useMap",
			valign: "vAlign",
			width: "width"
		},
		sf = function(a) {
			a = a.document;
			a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
			return new af(a.clientWidth, a.clientHeight)
		},
		tf = function(a) {
			var b = a.scrollingElement ? a.scrollingElement : bc || "CSS1Compat" != a.compatMode ?
				a.body || a.documentElement : a.documentElement;
			a = a.parentWindow || a.defaultView;
			return Zb && pc("10") && a.pageYOffset != b.scrollTop ? new $e(b.scrollLeft, b.scrollTop) : new $e(a
				.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
		},
		G = function(a) {
			return a ? a.parentWindow || a.defaultView : window
		},
		wf = function(a, b, c) {
			var d = arguments,
				e = document,
				f = d[1],
				g = uf(e, String(d[0]));
			f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : rf(g,
			f));
			2 < d.length && vf(e, g, d, 2);
			return g
		},
		vf = function(a, b, c, d) {
			function e(h) {
				h &&
					b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
			}
			for (; d < c.length; d++) {
				var f = c[d];
				if (!Oa(f) || Pa(f) && 0 < f.nodeType) e(f);
				else {
					a: {
						if (f && "number" == typeof f.length) {
							if (Pa(f)) {
								var g = "function" == typeof f.item || "string" == typeof f.item;
								break a
							}
							if ("function" === typeof f) {
								g = "function" == typeof f.item;
								break a
							}
						}
						g = !1
					}
					B(g ? Pb(f) : f, e)
				}
			}
		},
		uf = function(a, b) {
			b = String(b);
			"application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
			return a.createElement(b)
		},
		xf = function(a) {
			a && a.parentNode && a.parentNode.removeChild(a)
		},
		yf = function(a) {
			var b;
			if (Xe && !(Zb && pc("9") && !pc("10") && v.SVGElement && a instanceof v.SVGElement) && (b = a
					.parentElement)) return b;
			b = a.parentNode;
			return Pa(b) && 1 == b.nodeType ? b : null
		},
		zf = function(a, b) {
			if (!a || !b) return !1;
			if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
			if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) &
				16);
			for (; b && a != b;) b = b.parentNode;
			return b == a
		},
		mf = function(a) {
			return 9 == a.nodeType ? a : a.ownerDocument || a.document
		},
		Af = function(a) {
			try {
				return a.contentWindow ||
					(a.contentDocument ? G(a.contentDocument) : null)
			} catch (b) {}
			return null
		},
		Bf = function(a, b) {
			a && (a = a.parentNode);
			for (var c = 0; a;) {
				if (b(a)) return a;
				a = a.parentNode;
				c++
			}
			return null
		},
		lf = function(a) {
			this.h = a || v.document || document
		};
	k = lf.prototype;
	k.getElementsByTagName = function(a, b) {
		return (b || this.h).getElementsByTagName(String(a))
	};
	k.createElement = function(a) {
		return uf(this.h, a)
	};
	k.appendChild = function(a, b) {
		a.appendChild(b)
	};
	k.append = function(a, b) {
		vf(mf(a), a, arguments, 1)
	};
	k.canHaveChildren = function(a) {
		if (1 != a.nodeType) return !1;
		switch (a.tagName) {
			case "APPLET":
			case "AREA":
			case "BASE":
			case "BR":
			case "COL":
			case "COMMAND":
			case "EMBED":
			case "FRAME":
			case "HR":
			case "IMG":
			case "INPUT":
			case "IFRAME":
			case "ISINDEX":
			case "KEYGEN":
			case "LINK":
			case "NOFRAMES":
			case "NOSCRIPT":
			case "META":
			case "OBJECT":
			case "PARAM":
			case "SCRIPT":
			case "SOURCE":
			case "STYLE":
			case "TRACK":
			case "WBR":
				return !1
		}
		return !0
	};
	var Df = function() {
			return !Cf() && (y("iPod") || y("iPhone") || y("Android") || y("IEMobile"))
		},
		Cf = function() {
			return y("iPad") || y("Android") && !y("Mobile") || y("Silk")
		};
	var Ef = RegExp(
			"^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
			),
		Ff = function(a) {
			var b = a.match(Ef);
			a = b[1];
			var c = b[3];
			b = b[4];
			var d = "";
			a && (d += a + ":");
			c && (d = d + "//" + c, b && (d += ":" + b));
			return d
		},
		Gf = function(a, b) {
			if (a) {
				a = a.split("&");
				for (var c = 0; c < a.length; c++) {
					var d = a[c].indexOf("="),
						e = null;
					if (0 <= d) {
						var f = a[c].substring(0, d);
						e = a[c].substring(d + 1)
					} else f = a[c];
					b(f, e ? bf(e) : "")
				}
			}
		},
		Hf = /#|$/,
		If = function(a, b) {
			var c = a.search(Hf);
			a: {
				var d =
					0;
				for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
					var f = a.charCodeAt(d - 1);
					if (38 == f || 63 == f)
						if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
					d += e + 1
				}
				d = -1
			}
			if (0 > d) return null;
			e = a.indexOf("&", d);
			if (0 > e || e > c) e = c;
			d += b.length + 1;
			return bf(a.substr(d, e - d))
		};
	var Jf = function(a) {
			try {
				return !!a && null != a.location.href && Vb(a, "foo")
			} catch (b) {
				return !1
			}
		},
		Lf = function(a) {
			for (var b = v, c = 0; b && 40 > c++ && (!Jf(b) || !a(b));) b = Kf(b)
		},
		Mf = function() {
			var a, b = a = void 0 === a ? v : a;
			Lf(function(c) {
				b = c;
				return !1
			});
			return b
		},
		Kf = function(a) {
			try {
				var b = a.parent;
				if (b && b != a) return b
			} catch (c) {}
			return null
		},
		Nf = function(a, b) {
			if (a)
				for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
		},
		Of = /https?:\/\/[^\/]+/,
		Pf = function(a) {
			return (a = Of.exec(a)) && a[0] || ""
		},
		Qf = function() {
			var a =
				v;
			var b = void 0 === b ? !0 : b;
			try {
				for (var c = null; c != a; c = a, a = a.parent) switch (a.location.protocol) {
					case "https:":
						return !0;
					case "file:":
						return b;
					case "http:":
						return !1
				}
			} catch (d) {}
			return !0
		},
		Sf = function() {
			var a = Rf;
			if (!a) return "";
			var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
			try {
				var c = b.exec(decodeURIComponent(a));
				if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
			} catch (d) {}
			return ""
		},
		Tf = function(a, b) {
			try {
				return !(!a.frames || !a.frames[b])
			} catch (c) {
				return !1
			}
		},
		Uf = function(a, b) {
			for (var c = 0; 50 > c; ++c) {
				if (Tf(a,
						b)) return a;
				if (!(a = Kf(a))) break
			}
			return null
		},
		Xf = function(a) {
			var b = Vf;
			a = void 0 === a ? window.document : a;
			0 != b.length && a.head && b.forEach(function(c) {
				if (c) {
					var d = a;
					d = void 0 === d ? window.document : d;
					if (c && d.head) {
						var e = Wf("META");
						d.head.appendChild(e);
						e.httpEquiv = "origin-trial";
						e.content = c
					}
				}
			})
		},
		Yf = function() {
			var a = window;
			if ("number" !== typeof a.goog_pvsid) try {
				Object.defineProperty(a, "goog_pvsid", {
					value: Math.floor(Math.random() * Math.pow(2, 52)),
					configurable: !1
				})
			} catch (b) {}
			return Number(a.goog_pvsid) || -1
		},
		Wf = function(a,
			b) {
			b = void 0 === b ? document : b;
			return b.createElement(String(a).toLowerCase())
		},
		Zf = function(a) {
			for (var b = a; a && a != a.parent;) a = a.parent, Jf(a) && (b = a);
			return b
		};
	var H = function(a, b, c, d) {
		this.top = a;
		this.right = b;
		this.bottom = c;
		this.left = d
	};
	H.prototype.getWidth = function() {
		return this.right - this.left
	};
	H.prototype.getHeight = function() {
		return this.bottom - this.top
	};
	var $f = function(a) {
		return new H(a.top, a.right, a.bottom, a.left)
	};
	H.prototype.expand = function(a, b, c, d) {
		Pa(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this
			.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
		return this
	};
	H.prototype.ceil = function() {
		this.top = Math.ceil(this.top);
		this.right = Math.ceil(this.right);
		this.bottom = Math.ceil(this.bottom);
		this.left = Math.ceil(this.left);
		return this
	};
	H.prototype.floor = function() {
		this.top = Math.floor(this.top);
		this.right = Math.floor(this.right);
		this.bottom = Math.floor(this.bottom);
		this.left = Math.floor(this.left);
		return this
	};
	H.prototype.round = function() {
		this.top = Math.round(this.top);
		this.right = Math.round(this.right);
		this.bottom = Math.round(this.bottom);
		this.left = Math.round(this.left);
		return this
	};
	var ag = function(a, b, c) {
		b instanceof $e ? (a.left += b.x, a.right += b.x, a.top += b.y, a.bottom += b.y) : (a.left += b, a
			.right += b, "number" === typeof c && (a.top += c, a.bottom += c));
		return a
	};
	H.prototype.scale = function(a, b) {
		b = "number" === typeof b ? b : a;
		this.left *= a;
		this.right *= a;
		this.top *= b;
		this.bottom *= b;
		return this
	};
	var bg = function(a, b, c, d) {
			this.left = a;
			this.top = b;
			this.width = c;
			this.height = d
		},
		cg = function(a) {
			return new H(a.top, a.left + a.width, a.top + a.height, a.left)
		};
	k = bg.prototype;
	k.distance = function(a) {
		var b = a.x < this.left ? this.left - a.x : Math.max(a.x - (this.left + this.width), 0);
		a = a.y < this.top ? this.top - a.y : Math.max(a.y - (this.top + this.height), 0);
		return Math.sqrt(b * b + a * a)
	};
	k.ceil = function() {
		this.left = Math.ceil(this.left);
		this.top = Math.ceil(this.top);
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this
	};
	k.floor = function() {
		this.left = Math.floor(this.left);
		this.top = Math.floor(this.top);
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this
	};
	k.round = function() {
		this.left = Math.round(this.left);
		this.top = Math.round(this.top);
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this
	};
	k.scale = function(a, b) {
		b = "number" === typeof b ? b : a;
		this.left *= a;
		this.width *= a;
		this.top *= b;
		this.height *= b;
		return this
	};
	var dg = function(a) {
		a = void 0 === a ? v : a;
		var b = a.context || a.AMP_CONTEXT_DATA;
		if (!b) try {
			b = a.parent.context || a.parent.AMP_CONTEXT_DATA
		} catch (c) {}
		try {
			if (b && b.pageViewId && b.canonicalUrl) return b
		} catch (c) {}
		return null
	};
	var eg = function(a, b) {
			a.google_image_requests || (a.google_image_requests = []);
			var c = Wf("IMG", a.document);
			c.src = b;
			a.google_image_requests.push(c)
		},
		gg = function(a, b) {
			var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
			Nf(a, function(d, e) {
				d && (c += "&" + e + "=" + encodeURIComponent(d))
			});
			fg(c)
		},
		fg = function(a) {
			var b = window;
			b.fetch ? b.fetch(a, {
				keepalive: !0,
				credentials: "include",
				redirect: "follow",
				method: "get",
				mode: "no-cors"
			}) : eg(b, a)
		};
	var ig = function(a, b) {
			if ("string" === typeof b)(b = hg(a, b)) && (a.style[b] = void 0);
			else
				for (var c in b) {
					var d = a,
						e = b[c],
						f = hg(d, c);
					f && (d.style[f] = e)
				}
		},
		jg = {},
		hg = function(a, b) {
			var c = jg[b];
			if (!c) {
				var d = gf(b);
				c = d;
				void 0 === a.style[d] && (d = (bc ? "Webkit" : ac ? "Moz" : Zb ? "ms" : null) + jf(d), void 0 !== a
					.style[d] && (c = d));
				jg[b] = c
			}
			return c
		},
		kg = function(a, b) {
			var c = a.style[gf(b)];
			return "undefined" !== typeof c ? c : a.style[hg(a, b)] || ""
		},
		lg = function(a) {
			try {
				return a.getBoundingClientRect()
			} catch (b) {
				return {
					left: 0,
					top: 0,
					right: 0,
					bottom: 0
				}
			}
		},
		mg = function(a) {
			var b = mf(a),
				c = new $e(0, 0);
			var d = b ? mf(b) : document;
			d = !Zb || 9 <= Number(sc) || "CSS1Compat" == nf(d).h.compatMode ? d.documentElement : d.body;
			if (a == d) return c;
			a = lg(a);
			b = tf(nf(b).h);
			c.x = a.left + b.x;
			c.y = a.top + b.y;
			return c
		},
		ng = function(a, b) {
			var c = new $e(0, 0),
				d = G(mf(a));
			if (!Vb(d, "parent")) return c;
			do {
				if (d == b) var e = mg(a);
				else e = lg(a), e = new $e(e.left, e.top);
				c.x += e.x;
				c.y += e.y
			} while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
			return c
		},
		og = function() {
			var a = "100%";
			"number" == typeof a && (a = Math.round(a) +
				"px");
			return a
		},
		qg = function(a) {
			var b = pg;
			a: {
				var c = mf(a);
				if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a,
						null))) {
					c = c.display || c.getPropertyValue("display") || "";
					break a
				}
				c = ""
			}
			c || (c = a.currentStyle ? a.currentStyle.display : null);
			if ("none" != (c || a.style && a.style.display)) return b(a);
			c = a.style;
			var d = c.display,
				e = c.visibility,
				f = c.position;
			c.visibility = "hidden";
			c.position = "absolute";
			c.display = "inline";
			a = b(a);
			c.display = d;
			c.position = f;
			c.visibility = e;
			return a
		},
		pg = function(a) {
			var b =
				a.offsetWidth,
				c = a.offsetHeight,
				d = bc && !b && !c;
			return (void 0 === b || d) && a.getBoundingClientRect ? (a = lg(a), new af(a.right - a.left, a.bottom -
				a.top)) : new af(b, c)
		};
	var rg = !!window.google_async_iframe_id,
		sg = rg && window.parent || window,
		tg = function() {
			if (rg && !Jf(sg)) {
				var a = "." + Bd.domain;
				try {
					for (; 2 < a.split(".").length && !Jf(sg);) Bd.domain = a = a.substr(a.indexOf(".") + 1), sg =
						window.parent
				} catch (b) {}
				Jf(sg) || (sg = window)
			}
			sg !== window && .01 > Math.random() && gg({
				stack: Error().stack,
				aswift: window.google_async_iframe_id
			}, "badpubwin");
			return sg
		};
	var ug = function(a, b) {
			this.flag = a;
			this.defaultValue = void 0 === b ? !1 : b
		},
		vg = function(a, b) {
			this.flag = a;
			this.defaultValue = void 0 === b ? 0 : b
		};
	var wg = new ug(1930),
		xg = new vg(360261971),
		yg = new vg(1921, 72),
		zg = new vg(1920, 24),
		Ag = new vg(1917, 300),
		Bg = new vg(1916, .001),
		Cg = new ug(1959),
		Dg = new ug(1954),
		Eg = new ug(1948, !0),
		Fg = new ug(370946349),
		Gg = new vg(406149835);
	var Hg = function() {
		var a;
		this.h = a = void 0 === a ? {} : a
	};
	Hg.prototype.reset = function() {
		this.h = {}
	};
	var Ig = function() {
			this.S = {}
		},
		Lg = function() {
			if (Jg) var a = Jg;
			else {
				a = ((a = dg()) ? Jf(a.master) ? a.master : null : null) || tg();
				var b = a.google_persistent_state_async;
				a = null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Jg = b : a
					.google_persistent_state_async = Jg = new Ig
			}
			b = tg();
			var c = dg(b);
			c ? ((c = c || dg()) ? (b = c.pageViewId, c = c.clientId, "string" === typeof c && (b += c.replace(
				/\D/g, "").substr(0, 6))) : b = null, b = +b) : (b = Zf(b), (c = b.google_global_correlator) ||
				(b.google_global_correlator = c = 1 + Math.floor(Math.random() * Math.pow(2,
					43))), b = c);
			c = Kg[7] || "google_ps_7";
			a = a.S;
			var d = a[c];
			a = void 0 === d ? a[c] = b : d;
			return a
		},
		Jg = null,
		Mg = {},
		Kg = (Mg[8] = "google_prev_ad_formats_by_region", Mg[9] = "google_prev_ad_slotnames_by_region", Mg);
	var I = function(a) {
		var b = "Cc";
		if (a.Cc && a.hasOwnProperty(b)) return a.Cc;
		b = new a;
		return a.Cc = b
	};
	var Ng = function() {
			var a = {};
			this.h = function(b, c) {
				return null != a[b] ? a[b] : c
			};
			this.l = function(b, c) {
				return null != a[b] ? a[b] : c
			}
		},
		Og = function(a) {
			return I(Ng).h(a.flag, a.defaultValue)
		},
		Pg = function(a) {
			return I(Ng).l(a.flag, a.defaultValue)
		};
	var Qg = function(a, b, c) {
			c = void 0 === c ? {} : c;
			this.error = a;
			this.context = b.context;
			this.msg = b.message || "";
			this.id = b.id || "jserror";
			this.meta = c
		},
		Rg = function(a) {
			return !!(a.error && a.meta && a.id)
		};
	var Sg = null;
	var Tg = function() {
			var a = void 0 === a ? v : a;
			return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Ya()
		},
		Ug = function() {
			var a = void 0 === a ? v : a;
			return (a = a.performance) && a.now ? a.now() : null
		},
		Vg = function(a, b) {
			b = void 0 === b ? v : b;
			var c, d;
			return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
		},
		Wg = function() {
			var a = void 0 === a ? v : a;
			var b = Math.min(Vg("domLoading", a) || Infinity, Vg("domInteractive", a) || Infinity);
			return Infinity == b ? Math.max(Vg("responseEnd", a), Vg("navigationStart",
				a)) : b
		};
	var Xg = function(a, b, c, d, e) {
		this.label = a;
		this.type = b;
		this.value = c;
		this.duration = void 0 === d ? 0 : d;
		this.uniqueId = Math.random();
		this.slotId = e
	};
	var Yg = v.performance,
		Zg = !!(Yg && Yg.mark && Yg.measure && Yg.clearMarks),
		$g = Pe(function() {
			var a;
			if (a = Zg) {
				var b;
				if (null === Sg) {
					Sg = "";
					try {
						a = "";
						try {
							a = v.top.location.hash
						} catch (c) {
							a = v.location.hash
						}
						a && (Sg = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
					} catch (c) {}
				}
				b = Sg;
				a = !!b.indexOf && 0 <= b.indexOf("1337")
			}
			return a
		}),
		ah = function(a, b) {
			this.events = [];
			this.h = b || v;
			var c = null;
			b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b
				.google_js_reporting_queue, c = b.google_measure_js_timing);
			this.o = $g() || (null !=
				c ? c : Math.random() < a)
		};
	ah.prototype.D = function() {
		this.o = !1;
		this.events != this.h.google_js_reporting_queue && ($g() && B(this.events, bh), this.events.length = 0)
	};
	ah.prototype.I = function(a) {
		!this.o || 2048 < this.events.length || this.events.push(a)
	};
	var bh = function(a) {
		a && Yg && $g() && (Yg.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Yg.clearMarks(
			"goog_" + a.label + "_" + a.uniqueId + "_end"))
	};
	ah.prototype.start = function(a, b) {
		if (!this.o) return null;
		a = new Xg(a, b, Ug() || Tg());
		b = "goog_" + a.label + "_" + a.uniqueId + "_start";
		Yg && $g() && Yg.mark(b);
		return a
	};
	ah.prototype.end = function(a) {
		if (this.o && "number" === typeof a.value) {
			a.duration = (Ug() || Tg()) - a.value;
			var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
			Yg && $g() && Yg.mark(b);
			this.I(a)
		}
	};
	var ch = q(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
		dh = function() {
			this.l = "jserror";
			this.o = !1;
			this.h = null;
			this.A = !1;
			this.C = Math.random();
			this.B = this.La;
			this.D = null
		};
	k = dh.prototype;
	k.Rc = function(a) {
		this.l = a
	};
	k.ec = function(a) {
		this.h = a
	};
	k.Sc = function(a) {
		this.o = a
	};
	k.Tc = function(a) {
		this.A = a
	};
	k.La = function(a, b, c, d, e) {
		e = void 0 === e ? this.l : e;
		if ((this.A ? this.C : Math.random()) > (void 0 === c ? .01 : c)) return this.o;
		Rg(b) || (b = new Qg(b, {
			context: a,
			id: e
		}));
		if (d || this.h) b.meta = {}, this.h && this.h(b.meta), d && d(b.meta);
		v.google_js_errors = v.google_js_errors || [];
		v.google_js_errors.push(b);
		if (!v.error_rep_loaded) {
			c = F(ch);
			var f;
			a = v.document;
			b = null != (f = this.D) ? f : de(Ie(c).toString());
			f = Wf("SCRIPT", a);
			f.src = Ie(b);
			Le(f);
			(a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(f, a);
			v.error_rep_loaded = !0
		}
		return this.o
	};
	k.ab = function(a, b, c) {
		try {
			var d = b()
		} catch (e) {
			if (!this.B(a, e, .01, c, this.l)) throw e;
		}
		return d
	};
	k.Nc = function(a, b, c, d) {
		var e = this;
		return function() {
			var f = Ga.apply(0, arguments);
			return e.ab(a, function() {
				return b.apply(c, f)
			}, d)
		}
	};
	var eh = function(a) {
			return Og(Cg) && a.prerendering ? 3 : {
				visible: 1,
				hidden: 2,
				prerender: 3,
				preview: 4,
				unloaded: 5
			} [a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
		},
		fh = function(a) {
			var b;
			a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a
				.webkitVisibilityState && (b = "webkitvisibilitychange");
			return b
		};
	var gh = function(a) {
		a = a._google_rum_ns_ = a._google_rum_ns_ || {};
		return a.pq = a.pq || []
	};
	var hh = function(a, b, c) {
			Nf(b, function(d, e) {
				var f = c && c[e];
				!d && 0 !== d || f || (a += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(
					d)), c && (c[e] = !0))
			});
			return a
		},
		ph = function(a, b, c, d, e, f, g, h) {
			f = void 0 === f ? Infinity : f;
			g = void 0 === g ? !1 : g;
			ah.call(this, a, h);
			var l = this;
			this.L = 0;
			this.M = f;
			this.Z = b;
			this.K = c;
			this.X = d;
			this.$ = e;
			a = this.h.navigator;
			this.V = !("csi.gstatic.com" !== this.K || !a || !a.sendBeacon);
			this.B = {};
			this.J = {};
			this.h.performance && this.h.performance.now || ih(this, "dat", 1);
			a && a.deviceMemory && ih(this, "dmc",
				a.deviceMemory);
			this.h === this.h.top && ih(this, "top", 1);
			this.U = !g;
			this.N = function() {
				l.h.setTimeout(function() {
					return jh(l)
				}, 1100)
			};
			this.ga = [];
			this.W = function() {
				kh(l, 1)
			};
			this.R = function() {
				kh(l, 2)
			};
			this.na = Re(function() {
				jh(l)
			});
			this.ra = function() {
				var m = l.h.document;
				(null != m.hidden ? m.hidden : null != m.mozHidden ? m.mozHidden : null != m.webkitHidden && m
					.webkitHidden) && l.na()
			};
			this.F = this.h.setTimeout(function() {
				return jh(l)
			}, 5E3);
			this.C = {};
			this.A = b.length + c.length + d.length + e.length + 3;
			this.l = 0;
			B(this.events, function(m) {
				return lh(l,
					m)
			});
			this.H = [];
			b = gh(this.h);
			var n = function(m) {
				var x = m[0];
				m = m[1];
				var u = x.length + m.length + 2;
				8E3 < l.A + l.l + u && jh(l);
				l.H.push([x, m]);
				l.l += u;
				mh(l);
				return 0
			};
			B(b, function(m) {
				return n(m)
			});
			b.length = 0;
			b.push = n;
			nh(this);
			oh(this)
		};
	t(ph, ah);
	var oh = function(a) {
			"complete" === a.h.document.readyState ? a.h.setTimeout(function() {
				return jh(a)
			}, 0) : Ue(a.h, "load", a.N);
			var b = fh(a.h.document);
			"undefined" !== typeof b && Ue(a.h, b, a.ra);
			Og(Dg) || Ue(a.h, "unload", a.W);
			Ue(a.h, "pagehide", a.R)
		},
		ih = function(a, b, c) {
			c = String(c);
			a.A = null != a.B[b] ? a.A + (c.length - a.B[b].length) : a.A + (b.length + c.length + 2);
			a.B[b] = c
		},
		qh = function(a) {
			null != a.B.uet && (a.A -= 3 + a.B.uet.length + 2, delete a.B.uet)
		},
		th = function(a, b, c, d, e) {
			e = void 0 === e ? "" : e;
			var f = rh(a, b, c, d, e);
			8E3 < a.A + a.l + f && (jh(a),
				f = b.length + c.length + 2);
			sh(a, b, c, d, e);
			a.l += f;
			mh(a)
		},
		rh = function(a, b, c, d, e) {
			return null == a.C[b] ? b.length + c.length + 2 : d ? c.length + (void 0 === e ? "" : e).length : c
				.length - a.C[b].length
		},
		sh = function(a, b, c, d, e) {
			a.C[b] = d && null != a.C[b] ? a.C[b] + ("" + (void 0 === e ? "" : e) + c) : c
		},
		mh = function(a) {
			6E3 <= a.A + a.l && jh(a)
		},
		jh = function(a) {
			if (a.o && a.U) {
				try {
					if (a.l) {
						var b = a.C;
						a.L++;
						var c = uh(a, b);
						b = !1;
						try {
							b = !!(a.V && a.h.navigator && a.h.navigator.sendBeacon(c, null))
						} catch (d) {
							a.V = !1
						}
						b || eg(a.h, c);
						nh(a);
						a.L === a.M && a.D()
					}
				} catch (d) {
					(new dh).La(358,
						d)
				}
				a.C = {};
				a.l = 0;
				a.events.length = 0;
				a.h.clearTimeout(a.F);
				a.F = 0
			}
		},
		uh = function(a, b) {
			var c = a.Z + "//" + a.K + a.X + a.$,
				d = {};
			c = hh(c, a.B, d);
			c = hh(c, b, d);
			a.h.google_timing_params && (c = hh(c, a.h.google_timing_params, d), a.h.google_timing_params = void 0);
			B(a.H, function(e) {
				var f = r(e);
				e = f.next().value;
				f = f.next().value;
				var g = {};
				c = hh(c, (g[e] = f, g))
			});
			a.H.length = 0;
			return c
		},
		nh = function(a) {
			ih(a, "puid", (a.L + 1).toString(36) + "~" + Ya().toString(36))
		},
		lh = function(a, b) {
			var c = "met." + b.type,
				d = "number" === typeof b.value ? Math.round(b.value).toString(36) :
				b.value,
				e = Math.round(b.duration);
			b = "" + b.label + (null != b.slotId ? "_" + b.slotId : "") + ("." + d) + (0 < e ? "_" + e.toString(
				36) : "");
			th(a, c, b, !0, "~")
		};
	ph.prototype.I = function(a) {
		this.o && this.L < this.M && (ah.prototype.I.call(this, a), lh(this, a))
	};
	ph.prototype.D = function() {
		ah.prototype.D.call(this);
		this.h.clearTimeout(this.F);
		this.l = this.F = 0;
		this.C = {};
		Vd(this.J);
		Vd(this.B);
		Ve(this.h, "load", this.N);
		Og(Dg) || Ve(this.h, "unload", this.W);
		Ve(this.h, "pagehide", this.R)
	};
	var kh = function(a, b) {
		ih(a, "uet", b);
		B(a.ga, function(c) {
			try {
				c()
			} catch (d) {}
		});
		We(a.h);
		jh(a);
		qh(a)
	};
	var vh = function(a) {
		var b = [],
			c = [],
			d = {},
			e = function(f, g) {
				var h = g + "  ";
				try {
					if (void 0 === f) b.push("undefined");
					else if (null === f) b.push("NULL");
					else if ("string" === typeof f) b.push('"' + f.replace(/\n/g, "\n" + g) + '"');
					else if ("function" === typeof f) b.push(String(f).replace(/\n/g, "\n" + g));
					else if (Pa(f)) {
						f[Qa] || c.push(f);
						var l = Sa(f);
						if (d[l]) b.push("*** reference loop detected (id=" + l + ") ***");
						else {
							d[l] = !0;
							b.push("{");
							for (var n in f) "function" !== typeof f[n] && (b.push("\n"), b.push(h), b.push(n +
								" = "), e(f[n], h));
							b.push("\n" +
								g + "}");
							delete d[l]
						}
					} else b.push(f)
				} catch (m) {
					b.push("*** " + m + " ***")
				}
			};
		e(a, "");
		for (a = 0; a < c.length; a++) Ta(c[a]);
		return b.join("")
	};
	var wh = function() {
		this.h = new ph(1, "https:", "csi.gstatic.com", "/csi?v=2&s=", "ima", void 0, !0);
		var a = Lg();
		null != a && ih(this.h, "c", a);
		a = parseInt(this.h.B.c, 10) / 2;
		null != a && ih(this.h, "slotId", a)
	};
	wh.prototype.isLoggingEnabled = function() {
		return this.h.o
	};
	var J = function(a, b, c) {
			if (null != c) {
				a = a.h;
				var d = b + "=" + c;
				a.J[d] || (th(a, b, c, !1), 1E3 > d.length && (a.J[d] = !0))
			}
		},
		xh = function(a, b) {
			for (var c in b) b[c] = "object" === typeof b[c] ? encodeURIComponent(JSON.stringify(b[c])) :
				encodeURIComponent(String(b[c]));
			a = a.h;
			c = !1;
			var d = 0,
				e;
			for (e in b) null != a.C[e] && (c = !0), d += rh(a, e, b[e], !1);
			(8E3 < a.A + a.l + d || c) && jh(a);
			for (var f in b) sh(a, f, b[f], !1);
			a.l += d;
			mh(a)
		},
		yh = function(a) {
			var b = K().h,
				c = Tg() - 0;
			b.o && b.I(new Xg(a, 4, c, 0, void 0))
		},
		K = function() {
			return I(wh)
		};
	var zh = function(a) {
			return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@")
				.replace(
					/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
					"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
		},
		Ah = function(a) {
			try {
				return v.JSON.parse(a)
			} catch (b) {}
			a = String(a);
			if (zh(a)) try {
				return eval("(" + a + ")")
			} catch (b) {}
			throw Error("Invalid JSON string: " + a);
		},
		Bh = function(a) {
			this.h = a
		},
		Dh = function(a, b) {
			var c = [];
			Ch(a, b, c);
			return c.join("")
		},
		Ch = function(a, b, c) {
			if (null == b) c.push("null");
			else {
				if ("object" == typeof b) {
					if (Array.isArray(b)) {
						var d = b;
						b = d.length;
						c.push("[");
						for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], Ch(a, a.h ? a.h.call(d, String(f),
							e) : e, c), e = ",";
						c.push("]");
						return
					}
					if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
					else {
						c.push("{");
						f = "";
						for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" !=
							typeof e && (c.push(f), Eh(d, c), c.push(":"), Ch(a, a.h ? a.h.call(b, d,
								e) : e, c), f = ","));
						c.push("}");
						return
					}
				}
				switch (typeof b) {
					case "string":
						Eh(b, c);
						break;
					case "number":
						c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
						break;
					case "boolean":
						c.push(String(b));
						break;
					case "function":
						c.push("null");
						break;
					default:
						throw Error("Unknown type: " + typeof b);
				}
			}
		},
		Fh = {
			'"': '\\"',
			"\\": "\\\\",
			"/": "\\/",
			"\b": "\\b",
			"\f": "\\f",
			"\n": "\\n",
			"\r": "\\r",
			"\t": "\\t",
			"\x0B": "\\u000b"
		},
		Gh = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
		Eh = function(a, b) {
			b.push('"', a.replace(Gh,
				function(c) {
					var d = Fh[c];
					d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), Fh[c] = d);
					return d
				}), '"')
		};
	var Hh = function() {
			this.o = null;
			this.h = "missing-id";
			this.l = !1
		},
		Ih = function(a) {
			var b = null;
			try {
				b = document.getElementsByClassName("lima-exp-data")
			} catch (c) {
				return a.onError("missing-element", a.h), null
			}
			if (1 < b.length) return a.onError("multiple-elements", a.h), null;
			b = b[0];
			return b ? b.innerHTML : (a.onError("missing-element", a.h), null)
		},
		Kh = function() {
			var a = Jh,
				b = Ih(a);
			if (null !== b)
				if (zh(b)) {
					var c = JSON.parse(b);
					b = c.experimentIds;
					var d = c.binaryIdentifier;
					c = c.adEventId;
					var e = "string" === typeof d;
					if ("string" == typeof c) {
						var f =
							K();
						null != c && ih(f.h, "qqid", c)
					}
					e && (a.h = d);
					if ("string" !== typeof b) a.onError("missing-flags", a.h);
					else {
						if (!e) a.onError("missing-binary-id", a.h);
						a.o = b
					}
				} else a.onError("invalid-json", a.h)
		};
	Hh.prototype.reset = function() {
		this.o = null;
		this.h = "missing-id"
	};
	var Mh = function(a, b, c, d, e) {
		this.id = a;
		this.G = b;
		this.A = c;
		this.h = !1;
		this.o = d;
		this.l = e;
		this.A && Lh(this)
	};
	Mh.prototype.isSelected = function() {
		return this.h || this.A
	};
	var Lh = function(a) {
			if (a.o && a.l) {
				var b = a.o;
				b && Object.assign(a.l.h, b)
			}
		},
		Nh = function() {
			this.h = []
		},
		Oh = function() {
			this.h = new Map;
			this.l = !1;
			this.B = new Nh;
			this.C = new Mh(0, 0, !1);
			this.o = [this.B];
			this.A = new Hg
		},
		L = function(a) {
			var b = Ph;
			if (b.l || b.h.has(a.id) || null == a.G && null == a.control || 0 == a.condition) return b.C;
			var c = b.B;
			if (null != a.control)
				for (var d = r(b.o), e = d.next(); !e.done; e = d.next()) {
					if (e = e.value, e.h.includes(a.control)) {
						c = e;
						break
					}
				} else null != a.layer && (c = a.layer);
			d = 0;
			null != a.control ? d = a.control.G : null != a.G &&
				(d = a.G);
			a = new Mh(a.id, d, !!a.Ah, a.flags, b.A);
			c.h.push(a);
			b.o.includes(c) || b.o.push(c);
			b.h.set(a.id, a);
			return a
		},
		Qh = function() {
			var a = Ph;
			return [].concat(ha(a.h.keys())).filter(function(b) {
				return this.h.get(b).isSelected()
			}, a)
		},
		Rh = function(a) {
			var b = Ph;
			b.l || (a.h(b.o, b.h), b.l = !0)
		};
	Oh.prototype.reset = function() {
		for (var a = r(this.h), b = a.next(); !b.done; b = a.next()) b = r(b.value), b.next(), b.next().value
			.h = !1;
		this.l = !1;
		this.A.reset()
	};
	var Ph = new Oh,
		Th = function() {
			return Sh.h.filter(function(a) {
				return a.isSelected()
			}).map(function(a) {
				return a.id
			})
		};
	var Uh = function() {};
	Uh.prototype.h = function(a) {
		a = r(a);
		for (var b = a.next(); !b.done; b = a.next()) {
			var c = 0,
				d = Math.floor(1E3 * Math.random());
			b = r(b.value.h);
			for (var e = b.next(); !e.done; e = b.next())
				if (e = e.value, c += e.G, d < c) {
					e.h = !0;
					Lh(e);
					break
				}
		}
	};
	var Wh = function(a) {
		C.call(this, a, -1, Vh)
	};
	t(Wh, C);
	var Vh = [2, 8],
		Xh = [3, 4, 5];
	var Zh = function(a) {
		C.call(this, a, -1, Yh)
	};
	t(Zh, C);
	var Yh = [4];
	var ai = function(a) {
		C.call(this, a, -1, $h)
	};
	t(ai, C);
	var $h = [5],
		bi = [1, 2, 3, 6, 7];
	var di = function(a) {
		C.call(this, a, -1, ci)
	};
	t(di, C);
	di.prototype.getId = function() {
		return od(this, 1, 0)
	};
	var ci = [2];
	var fi = function(a) {
		C.call(this, a, -1, ei)
	};
	t(fi, C);
	var ei = [2];
	var hi = function(a) {
		C.call(this, a, -1, gi)
	};
	t(hi, C);
	var ji = function(a) {
		C.call(this, a, -1, ii)
	};
	t(ji, C);
	var gi = [1, 4, 2, 3],
		ii = [2];
	var ki = function(a, b) {
			switch (b) {
				case 1:
					return yd(a, 1, bi);
				case 2:
					return yd(a, 2, bi);
				case 3:
					return yd(a, 3, bi);
				case 6:
					return yd(a, 6, bi);
				default:
					return null
			}
		},
		li = function(a, b) {
			if (!a) return null;
			switch (b) {
				case 1:
					return pd(a, 1);
				case 7:
					return od(a, 3, "");
				case 2:
					return a = md(a, 2), null == a ? 0 : a;
				case 3:
					return od(a, 3, "");
				case 6:
					return ld(a, 4);
				default:
					return null
			}
		};
	var mi = {},
		ni = (mi[47] = tc, mi);

	function oi() {
		var a = pi,
			b = ud(new hi(qi), ji, 2);
		1 == b.length && 16 == od(b[0], 1, 0) && ud(b[0], fi, 2).forEach(function(c) {
			var d = od(c, 1, 0),
				e = td(c, Wh, 3),
				f = a[od(c, 4, 0)];
			ud(c, di, 2).forEach(function(g) {
				var h = d || od(g, 4, 0),
					l = g.getId(),
					n = e || td(g, Wh, 3);
				n = n ? yd(n, 3, Xh) : null;
				n = ni[n];
				g = ri(ud(g, ai, 2));
				L({
					id: l,
					G: h,
					layer: f,
					condition: n,
					flags: g
				})
			})
		})
	}

	function ri(a) {
		if (a.length) {
			var b = {};
			a.forEach(function(c) {
				var d = sd(c, bi),
					e = td(c, Zh, 4);
				e && (c = ki(c, d), d = li(e, d), b[c] = d)
			});
			return b
		}
	};
	var si = function(a) {
		this.ids = a
	};
	si.prototype.h = function(a, b) {
		a = r(this.ids);
		for (var c = a.next(); !c.done; c = a.next())
			if (c = b.get(c.value)) c.h = !0, Lh(c)
	};
	var ti = function(a, b) {
		this.ids = a;
		this.l = b
	};
	t(ti, si);
	ti.prototype.h = function(a, b) {
		si.prototype.h.call(this, a, b);
		var c = [];
		a = [];
		for (var d = r(this.ids), e = d.next(); !e.done; e = d.next()) e = e.value, b.get(e) ? c.push(e) : a
			.push(e);
		b = c.map(String).join(",") || "0";
		a = a.map(String).join(",") || "0";
		J(K(), "sei", b);
		J(K(), "nsei", a);
		J(K(), "bi", this.l)
	};
	var ui = function() {
		Hh.apply(this, arguments)
	};
	t(ui, Hh);
	ui.prototype.onError = function(a, b) {
		var c = K();
		J(c, "eee", a);
		J(c, "bi", b)
	};

	function vi() {
		return wi.split(",").map(function(a) {
			return parseInt(a, 10)
		}).filter(function(a) {
			return !isNaN(a)
		})
	};
	var Sh = new Nh,
		xi = new Nh,
		yi = new Nh,
		zi = new Nh,
		Ai = new Nh,
		Bi = new Nh;
	L({
		id: 318475490,
		G: 0
	});
	L({
		id: 324123032,
		G: 0
	});
	L({
		id: 418572103,
		G: 0
	});
	L({
		id: 420706097,
		G: 10
	});
	L({
		id: 420706098,
		G: 10
	});
	L({
		id: 21062100,
		G: 0
	});
	L({
		id: 21062347,
		G: 0
	});
	L({
		id: 21063070,
		G: 0
	});
	L({
		id: 21063072,
		G: 0
	});
	L({
		id: 21063100,
		G: 0
	});
	L({
		id: 420706105,
		G: 0
	});
	L({
		id: 420706106,
		G: 0
	});
	L({
		id: 21064018,
		G: 0
	});
	L({
		id: 21064020,
		G: 0
	});
	L({
		id: 21064022,
		G: 0
	});
	L({
		id: 21064024,
		G: 0
	});
	L({
		id: 21064075,
		G: 0
	});
	L({
		id: 21064201,
		G: 50
	});
	var Ci = L({
		id: 210640812,
		G: 10
	});
	L({
		id: 420706142,
		G: 0
	});
	L({
		id: 21064347,
		G: 0
	});
	L({
		id: 44745813,
		G: 0
	});
	L({
		id: 44746068,
		G: 0
	});
	L({
		id: 21064565,
		G: 0
	});
	L({
		id: 21064567,
		G: 0
	});
	L({
		id: 418572006,
		G: 10
	});
	var Di = L({
			id: 44744588,
			G: 10
		}),
		Ei = L({
			id: 44747319,
			G: 10
		});
	L({
		id: 44740339,
		G: 10
	});
	var Fi = L({
		id: 44740340,
		G: 10
	});
	L({
		id: 44749839,
		G: 0
	});
	var Gi = L({
		id: 44749840,
		G: 0
	});
	L({
		id: 44749841,
		G: 0
	});
	var Hi = L({
		id: 44749842,
		G: 0
	});
	L({
		id: 44749843,
		G: 1
	});
	var Ii = L({
		id: 44749844,
		G: 1
	});
	L({
		id: 44749845,
		G: 1
	});
	var Ji = L({
		id: 44749846,
		G: 1
	});
	L({
		id: 44714743,
		G: 0
	});
	L({
		id: 44719216,
		G: 0
	});
	L({
		id: 44730895,
		G: 10
	});
	L({
		id: 44730896,
		G: 10
	});
	L({
		id: 44736292,
		G: 10
	});
	L({
		id: 44736293,
		G: 10
	});
	L({
		id: 668123728,
		G: 10,
		layer: Sh
	});
	L({
		id: 668123729,
		G: 10,
		layer: Sh
	});
	L({
		id: 31061774,
		G: 10
	});
	var Ki = L({
		id: 31061775,
		G: 10
	});
	L({
		id: 44750603,
		G: 0,
		layer: zi
	});
	L({
		id: 44750604,
		G: 1E3,
		layer: zi
	});
	L({
		id: 44715336,
		G: 10
	});
	L({
		id: 44729309,
		G: 10
	});
	L({
		id: 44721472,
		G: 0
	});
	L({
		id: 75259410,
		G: 0
	});
	L({
		id: 75259412,
		G: 0
	});
	L({
		id: 75259413,
		G: 0
	});
	L({
		id: 44725355,
		G: 50,
		layer: yi
	});
	var Li = L({
		id: 44725356,
		G: 50,
		layer: yi
	});
	L({
		id: 44724516,
		G: 0
	});
	L({
		id: 44726389,
		G: 10
	});
	L({
		id: 44752711,
		G: 50
	});
	L({
		id: 44752052,
		G: 50
	});
	L({
		id: 44752657,
		G: 50
	});
	L({
		id: 44726393,
		G: 10
	});
	L({
		id: 44730464,
		G: 10
	});
	L({
		id: 44730465,
		G: 10
	});
	L({
		id: 44733378,
		G: 10
	});
	L({
		id: 44727953,
		G: 0
	});
	L({
		id: 44729911,
		G: 0
	});
	L({
		id: 44730425,
		G: 0
	});
	L({
		id: 44730426,
		G: 0
	});
	L({
		id: 447304389,
		G: 0
	});
	L({
		id: 44733246,
		G: 10
	});
	L({
		id: 44750823,
		G: 100,
		layer: Bi
	});
	L({
		id: 44750824,
		G: 100,
		layer: Bi
	});
	L({
		id: 44750822,
		G: 100,
		layer: Bi
	});
	L({
		id: 44754419,
		G: 10
	});
	L({
		id: 44754420,
		G: 10
	});
	L({
		id: 44737473,
		G: 100,
		layer: xi
	});
	L({
		id: 44737475,
		G: 100,
		layer: xi
	});
	L({
		id: 44751785,
		G: 10
	});
	L({
		id: 44751786,
		G: 10
	});
	L({
		id: 44751889,
		G: 10
	});
	L({
		id: 44751890,
		G: 10
	});
	L({
		id: 44738437,
		G: 0
	});
	var Mi = L({
		id: 44738438,
		G: 0
	});
	L({
		id: 44750813,
		G: 10
	});
	L({
		id: 44750814,
		G: 10
	});
	L({
		id: 44752995,
		G: 10
	});
	L({
		id: 44752996,
		G: 10
	});
	L({
		id: 44753925,
		G: 10
	});
	L({
		id: 44753926,
		G: 10
	});
	L({
		id: 44748968,
		G: 0
	});
	var Ni = L({
		id: 44748969,
		G: 0
	});
	L({
		id: 44752538,
		G: 0
	});
	L({
		id: 44754608,
		G: 10
	});
	L({
		id: 44754609,
		G: 10
	});
	var Oi = {},
		pi = (Oi[32] = Sh, Oi[35] = Ai, Oi);
	pi = void 0 === pi ? {} : pi;
	if (!/^\{+IMA_EXPERIMENT_STATE_JSPB\}+$/.test("{{IMA_EXPERIMENT_STATE_JSPB}}")) try {
		var qi = JSON.parse("{{IMA_EXPERIMENT_STATE_JSPB}}");
		qi instanceof Array && oi()
	} catch (a) {
		J(K(), "espe", a.message)
	}
	if ("undefined" === typeof window.v8_flag_map) {
		var Jh = I(ui);
		Jh.l || (Kh(), Jh.l = !0);
		var wi = Jh.o,
			Pi;
		Jh.l || (Kh(), Jh.l = !0);
		Pi = Jh.h;
		if (null != wi) {
			var Qi = new ti(vi(), Pi);
			Rh(Qi)
		}
	};
	Ph.reset();
	Rh(new Uh);
	v.console && "function" === typeof v.console.log && Wa(v.console.log, v.console);
	var Ri = function(a) {
		for (var b = [], c = a = G(a.ownerDocument); c != a.top; c = c.parent)
			if (c.frameElement) b.push(c.frameElement);
			else break;
		return b
	};

	function Si(a) {
		a && "function" == typeof a.dispose && a.dispose()
	};
	var M = function() {
		this.L = this.L;
		this.I = this.I
	};
	M.prototype.L = !1;
	M.prototype.Ia = function() {
		return this.L
	};
	M.prototype.dispose = function() {
		this.L || (this.L = !0, this.O())
	};
	var Ui = function(a, b) {
			Ti(a, Xa(Si, b))
		},
		Ti = function(a, b) {
			a.L ? b() : (a.I || (a.I = []), a.I.push(b))
		};
	M.prototype.O = function() {
		if (this.I)
			for (; this.I.length;) this.I.shift()()
	};
	var Vi = function(a, b) {
		this.type = a;
		this.currentTarget = this.target = b;
		this.defaultPrevented = this.l = !1
	};
	Vi.prototype.stopPropagation = function() {
		this.l = !0
	};
	Vi.prototype.preventDefault = function() {
		this.defaultPrevented = !0
	};
	var Wi = function() {
		if (!v.addEventListener || !Object.defineProperty) return !1;
		var a = !1,
			b = Object.defineProperty({}, "passive", {
				get: function() {
					a = !0
				}
			});
		try {
			v.addEventListener("test", Na, b), v.removeEventListener("test", Na, b)
		} catch (c) {}
		return a
	}();
	var Xi = function(a, b) {
		Vi.call(this, a ? a.type : "");
		this.relatedTarget = this.currentTarget = this.target = null;
		this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
		this.key = "";
		this.keyCode = 0;
		this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
		this.state = null;
		this.pointerId = 0;
		this.pointerType = "";
		this.h = null;
		a && this.init(a, b)
	};
	Za(Xi, Vi);
	var Yi = {
		2: "touch",
		3: "pen",
		4: "mouse"
	};
	Xi.prototype.init = function(a, b) {
		var c = this.type = a.type,
			d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
		this.target = a.target || a.srcElement;
		this.currentTarget = b;
		(b = a.relatedTarget) ? ac && (Vb(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement :
			"mouseout" == c && (b = a.toElement);
		this.relatedTarget = b;
		d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d
			.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this
			.clientX = void 0 !== a.clientX ?
			a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a
			.screenX || 0, this.screenY = a.screenY || 0);
		this.button = a.button;
		this.keyCode = a.keyCode || 0;
		this.key = a.key || "";
		this.ctrlKey = a.ctrlKey;
		this.altKey = a.altKey;
		this.shiftKey = a.shiftKey;
		this.metaKey = a.metaKey;
		this.pointerId = a.pointerId || 0;
		this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Yi[a.pointerType] || "";
		this.state = a.state;
		this.h = a;
		a.defaultPrevented && Xi.ya.preventDefault.call(this)
	};
	Xi.prototype.stopPropagation = function() {
		Xi.ya.stopPropagation.call(this);
		this.h.stopPropagation ? this.h.stopPropagation() : this.h.cancelBubble = !0
	};
	Xi.prototype.preventDefault = function() {
		Xi.ya.preventDefault.call(this);
		var a = this.h;
		a.preventDefault ? a.preventDefault() : a.returnValue = !1
	};
	var Zi = "closure_listenable_" + (1E6 * Math.random() | 0),
		$i = function(a) {
			return !(!a || !a[Zi])
		};
	var aj = 0;
	var bj = function(a, b, c, d, e) {
			this.listener = a;
			this.proxy = null;
			this.src = b;
			this.type = c;
			this.capture = !!d;
			this.Sb = e;
			this.key = ++aj;
			this.Fb = this.Mb = !1
		},
		cj = function(a) {
			a.Fb = !0;
			a.listener = null;
			a.proxy = null;
			a.src = null;
			a.Sb = null
		};
	var dj = function(a) {
		this.src = a;
		this.listeners = {};
		this.h = 0
	};
	dj.prototype.add = function(a, b, c, d, e) {
		var f = a.toString();
		a = this.listeners[f];
		a || (a = this.listeners[f] = [], this.h++);
		var g = ej(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Mb = !1)) : (b = new bj(b, this.src, f, !!d, e), b
			.Mb = c, a.push(b));
		return b
	};
	dj.prototype.remove = function(a, b, c, d) {
		a = a.toString();
		if (!(a in this.listeners)) return !1;
		var e = this.listeners[a];
		b = ej(e, b, c, d);
		return -1 < b ? (cj(e[b]), Mb(e, b), 0 == e.length && (delete this.listeners[a], this.h--), !0) : !1
	};
	var fj = function(a, b) {
		var c = b.type;
		c in a.listeners && Lb(a.listeners[c], b) && (cj(b), 0 == a.listeners[c].length && (delete a.listeners[
			c], a.h--))
	};
	dj.prototype.zb = function(a, b, c, d) {
		a = this.listeners[a.toString()];
		var e = -1;
		a && (e = ej(a, b, c, d));
		return -1 < e ? a[e] : null
	};
	var ej = function(a, b, c, d) {
		for (var e = 0; e < a.length; ++e) {
			var f = a[e];
			if (!f.Fb && f.listener == b && f.capture == !!c && f.Sb == d) return e
		}
		return -1
	};
	var gj = "closure_lm_" + (1E6 * Math.random() | 0),
		hj = {},
		ij = 0,
		kj = function(a, b, c, d, e) {
			if (d && d.once) return jj(a, b, c, d, e);
			if (Array.isArray(b)) {
				for (var f = 0; f < b.length; f++) kj(a, b[f], c, d, e);
				return null
			}
			c = lj(c);
			return $i(a) ? a.T(b, c, Pa(d) ? !!d.capture : !!d, e) : mj(a, b, c, !1, d, e)
		},
		mj = function(a, b, c, d, e, f) {
			if (!b) throw Error("Invalid event type");
			var g = Pa(e) ? !!e.capture : !!e,
				h = nj(a);
			h || (a[gj] = h = new dj(a));
			c = h.add(b, c, d, g, f);
			if (c.proxy) return c;
			d = oj();
			c.proxy = d;
			d.src = a;
			d.listener = c;
			if (a.addEventListener) Wi || (e = g), void 0 ===
				e && (e = !1), a.addEventListener(b.toString(), d, e);
			else if (a.attachEvent) a.attachEvent(pj(b.toString()), d);
			else if (a.addListener && a.removeListener) a.addListener(d);
			else throw Error("addEventListener and attachEvent are unavailable.");
			ij++;
			return c
		},
		oj = function() {
			var a = qj,
				b = function(c) {
					return a.call(b.src, b.listener, c)
				};
			return b
		},
		jj = function(a, b, c, d, e) {
			if (Array.isArray(b)) {
				for (var f = 0; f < b.length; f++) jj(a, b[f], c, d, e);
				return null
			}
			c = lj(c);
			return $i(a) ? a.Db(b, c, Pa(d) ? !!d.capture : !!d, e) : mj(a, b, c, !0, d, e)
		},
		rj =
		function(a, b, c, d, e) {
			if (Array.isArray(b))
				for (var f = 0; f < b.length; f++) rj(a, b[f], c, d, e);
			else d = Pa(d) ? !!d.capture : !!d, c = lj(c), $i(a) ? a.Va(b, c, d, e) : a && (a = nj(a)) && (b = a.zb(
				b, c, d, e)) && sj(b)
		},
		sj = function(a) {
			if ("number" !== typeof a && a && !a.Fb) {
				var b = a.src;
				if ($i(b)) fj(b.A, a);
				else {
					var c = a.type,
						d = a.proxy;
					b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(
						pj(c), d) : b.addListener && b.removeListener && b.removeListener(d);
					ij--;
					(c = nj(b)) ? (fj(c, a), 0 == c.h && (c.src = null, b[gj] = null)) : cj(a)
				}
			}
		},
		pj = function(a) {
			return a in hj ? hj[a] : hj[a] = "on" + a
		},
		qj = function(a, b) {
			if (a.Fb) a = !0;
			else {
				b = new Xi(b, this);
				var c = a.listener,
					d = a.Sb || a.src;
				a.Mb && sj(a);
				a = c.call(d, b)
			}
			return a
		},
		nj = function(a) {
			a = a[gj];
			return a instanceof dj ? a : null
		},
		tj = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
		lj = function(a) {
			if ("function" === typeof a) return a;
			a[tj] || (a[tj] = function(b) {
				return a.handleEvent(b)
			});
			return a[tj]
		};
	var N = function() {
		M.call(this);
		this.A = new dj(this);
		this.Lb = this;
		this.na = null
	};
	Za(N, M);
	N.prototype[Zi] = !0;
	k = N.prototype;
	k.addEventListener = function(a, b, c, d) {
		kj(this, a, b, c, d)
	};
	k.removeEventListener = function(a, b, c, d) {
		rj(this, a, b, c, d)
	};
	k.dispatchEvent = function(a) {
		var b, c = this.na;
		if (c)
			for (b = []; c; c = c.na) b.push(c);
		c = this.Lb;
		var d = a.type || a;
		if ("string" === typeof a) a = new Vi(a, c);
		else if (a instanceof Vi) a.target = a.target || c;
		else {
			var e = a;
			a = new Vi(d, c);
			Yd(a, e)
		}
		e = !0;
		if (b)
			for (var f = b.length - 1; !a.l && 0 <= f; f--) {
				var g = a.currentTarget = b[f];
				e = uj(g, d, !0, a) && e
			}
		a.l || (g = a.currentTarget = c, e = uj(g, d, !0, a) && e, a.l || (e = uj(g, d, !1, a) && e));
		if (b)
			for (f = 0; !a.l && f < b.length; f++) g = a.currentTarget = b[f], e = uj(g, d, !1, a) && e;
		return e
	};
	k.O = function() {
		N.ya.O.call(this);
		if (this.A) {
			var a = this.A,
				b = 0,
				c;
			for (c in a.listeners) {
				for (var d = a.listeners[c], e = 0; e < d.length; e++) ++b, cj(d[e]);
				delete a.listeners[c];
				a.h--
			}
		}
		this.na = null
	};
	k.T = function(a, b, c, d) {
		return this.A.add(String(a), b, !1, c, d)
	};
	k.Db = function(a, b, c, d) {
		return this.A.add(String(a), b, !0, c, d)
	};
	k.Va = function(a, b, c, d) {
		this.A.remove(String(a), b, c, d)
	};
	var uj = function(a, b, c, d) {
		b = a.A.listeners[String(b)];
		if (!b) return !0;
		b = b.concat();
		for (var e = !0, f = 0; f < b.length; ++f) {
			var g = b[f];
			if (g && !g.Fb && g.capture == c) {
				var h = g.listener,
					l = g.Sb || g.src;
				g.Mb && fj(a.A, g);
				e = !1 !== h.call(l, d) && e
			}
		}
		return e && !d.defaultPrevented
	};
	N.prototype.zb = function(a, b, c, d) {
		return this.A.zb(String(a), b, c, d)
	};
	var vj = function(a, b) {
		this.o = a;
		this.A = b;
		this.l = 0;
		this.h = null
	};
	vj.prototype.get = function() {
		if (0 < this.l) {
			this.l--;
			var a = this.h;
			this.h = a.next;
			a.next = null
		} else a = this.o();
		return a
	};
	var wj = function(a, b) {
		a.A(b);
		100 > a.l && (a.l++, b.next = a.h, a.h = b)
	};
	var xj, yj = function() {
		var a = v.MessageChannel;
		"undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window
			.addEventListener && !y("Presto") && (a = function() {
				var e = uf(document, "IFRAME");
				e.style.display = "none";
				document.documentElement.appendChild(e);
				var f = e.contentWindow;
				e = f.document;
				e.open();
				e.close();
				var g = "callImmediate" + Math.random(),
					h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
				e = Wa(function(l) {
						if (("*" == h || l.origin == h) && l.data == g) this.port1.onmessage()
					},
					this);
				f.addEventListener("message", e, !1);
				this.port1 = {};
				this.port2 = {
					postMessage: function() {
						f.postMessage(g, h)
					}
				}
			});
		if ("undefined" !== typeof a && !wb()) {
			var b = new a,
				c = {},
				d = c;
			b.port1.onmessage = function() {
				if (void 0 !== c.next) {
					c = c.next;
					var e = c.pd;
					c.pd = null;
					e()
				}
			};
			return function(e) {
				d.next = {
					pd: e
				};
				d = d.next;
				b.port2.postMessage(0)
			}
		}
		return function(e) {
			v.setTimeout(e, 0)
		}
	};

	function zj(a) {
		v.setTimeout(function() {
			throw a;
		}, 0)
	};
	var Aj = function() {
		this.l = this.h = null
	};
	Aj.prototype.add = function(a, b) {
		var c = Bj.get();
		c.set(a, b);
		this.l ? this.l.next = c : this.h = c;
		this.l = c
	};
	Aj.prototype.remove = function() {
		var a = null;
		this.h && (a = this.h, this.h = this.h.next, this.h || (this.l = null), a.next = null);
		return a
	};
	var Bj = new vj(function() {
			return new Cj
		}, function(a) {
			return a.reset()
		}),
		Cj = function() {
			this.next = this.scope = this.h = null
		};
	Cj.prototype.set = function(a, b) {
		this.h = a;
		this.scope = b;
		this.next = null
	};
	Cj.prototype.reset = function() {
		this.next = this.scope = this.h = null
	};
	var Hj = function(a, b) {
			Dj || Ej();
			Fj || (Dj(), Fj = !0);
			Gj.add(a, b)
		},
		Dj, Ej = function() {
			if (v.Promise && v.Promise.resolve) {
				var a = v.Promise.resolve(void 0);
				Dj = function() {
					a.then(Ij)
				}
			} else Dj = function() {
				var b = Ij;
				"function" !== typeof v.setImmediate || v.Window && v.Window.prototype && !y("Edge") && v.Window
					.prototype.setImmediate == v.setImmediate ? (xj || (xj = yj()), xj(b)) : v.setImmediate(b)
			}
		},
		Fj = !1,
		Gj = new Aj,
		Ij = function() {
			for (var a; a = Gj.remove();) {
				try {
					a.h.call(a.scope)
				} catch (b) {
					zj(b)
				}
				wj(Bj, a)
			}
			Fj = !1
		};
	var Jj = function(a) {
		if (!a) return !1;
		try {
			return !!a.$goog_Thenable
		} catch (b) {
			return !1
		}
	};
	var Lj = function(a) {
			this.h = 0;
			this.D = void 0;
			this.A = this.l = this.o = null;
			this.B = this.C = !1;
			if (a != Na) try {
				var b = this;
				a.call(void 0, function(c) {
					Kj(b, 2, c)
				}, function(c) {
					Kj(b, 3, c)
				})
			} catch (c) {
				Kj(this, 3, c)
			}
		},
		Mj = function() {
			this.next = this.context = this.onRejected = this.l = this.h = null;
			this.o = !1
		};
	Mj.prototype.reset = function() {
		this.context = this.onRejected = this.l = this.h = null;
		this.o = !1
	};
	var Nj = new vj(function() {
			return new Mj
		}, function(a) {
			a.reset()
		}),
		Oj = function(a, b, c) {
			var d = Nj.get();
			d.l = a;
			d.onRejected = b;
			d.context = c;
			return d
		};
	Lj.prototype.then = function(a, b, c) {
		return Pj(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
	};
	Lj.prototype.$goog_Thenable = !0;
	Lj.prototype.I = function(a, b) {
		return Pj(this, null, a, b)
	};
	Lj.prototype.catch = Lj.prototype.I;
	Lj.prototype.cancel = function(a) {
		if (0 == this.h) {
			var b = new Qj(a);
			Hj(function() {
				Rj(this, b)
			}, this)
		}
	};
	var Rj = function(a, b) {
			if (0 == a.h)
				if (a.o) {
					var c = a.o;
					if (c.l) {
						for (var d = 0, e = null, f = null, g = c.l; g && (g.o || (d++, g.h == a && (e = g), !(e &&
								1 < d))); g = g.next) e || (f = g);
						e && (0 == c.h && 1 == d ? Rj(c, b) : (f ? (d = f, d.next == c.A && (c.A = d), d.next = d
							.next.next) : Sj(c), Tj(c, e, 3, b)))
					}
					a.o = null
				} else Kj(a, 3, b)
		},
		Vj = function(a, b) {
			a.l || 2 != a.h && 3 != a.h || Uj(a);
			a.A ? a.A.next = b : a.l = b;
			a.A = b
		},
		Pj = function(a, b, c, d) {
			var e = Oj(null, null, null);
			e.h = new Lj(function(f, g) {
				e.l = b ? function(h) {
					try {
						var l = b.call(d, h);
						f(l)
					} catch (n) {
						g(n)
					}
				} : f;
				e.onRejected = c ? function(h) {
					try {
						var l =
							c.call(d, h);
						void 0 === l && h instanceof Qj ? g(h) : f(l)
					} catch (n) {
						g(n)
					}
				} : g
			});
			e.h.o = a;
			Vj(a, e);
			return e.h
		};
	Lj.prototype.F = function(a) {
		this.h = 0;
		Kj(this, 2, a)
	};
	Lj.prototype.H = function(a) {
		this.h = 0;
		Kj(this, 3, a)
	};
	var Kj = function(a, b, c) {
			if (0 == a.h) {
				a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
				a.h = 1;
				a: {
					var d = c,
						e = a.F,
						f = a.H;
					if (d instanceof Lj) {
						Vj(d, Oj(e || Na, f || null, a));
						var g = !0
					} else if (Jj(d)) d.then(e, f, a),
					g = !0;
					else {
						if (Pa(d)) try {
							var h = d.then;
							if ("function" === typeof h) {
								Wj(d, h, e, f, a);
								g = !0;
								break a
							}
						} catch (l) {
							f.call(a, l);
							g = !0;
							break a
						}
						g = !1
					}
				}
				g || (a.D = c, a.h = b, a.o = null, Uj(a), 3 != b || c instanceof Qj || Xj(a, c))
			}
		},
		Wj = function(a, b, c, d, e) {
			var f = !1,
				g = function(l) {
					f || (f = !0, c.call(e, l))
				},
				h = function(l) {
					f || (f = !0, d.call(e,
						l))
				};
			try {
				b.call(a, g, h)
			} catch (l) {
				h(l)
			}
		},
		Uj = function(a) {
			a.C || (a.C = !0, Hj(a.L, a))
		},
		Sj = function(a) {
			var b = null;
			a.l && (b = a.l, a.l = b.next, b.next = null);
			a.l || (a.A = null);
			return b
		};
	Lj.prototype.L = function() {
		for (var a; a = Sj(this);) Tj(this, a, this.h, this.D);
		this.C = !1
	};
	var Tj = function(a, b, c, d) {
			if (3 == c && b.onRejected && !b.o)
				for (; a && a.B; a = a.o) a.B = !1;
			if (b.h) b.h.o = null, Yj(b, c, d);
			else try {
				b.o ? b.l.call(b.context) : Yj(b, c, d)
			} catch (e) {
				Zj.call(null, e)
			}
			wj(Nj, b)
		},
		Yj = function(a, b, c) {
			2 == b ? a.l.call(a.context, c) : a.onRejected && a.onRejected.call(a.context, c)
		},
		Xj = function(a, b) {
			a.B = !0;
			Hj(function() {
				a.B && Zj.call(null, b)
			})
		},
		Zj = zj,
		Qj = function(a) {
			ab.call(this, a)
		};
	Za(Qj, ab);
	Qj.prototype.name = "cancel";
	var ak = function(a, b) {
		N.call(this);
		this.l = a || 1;
		this.h = b || v;
		this.o = Wa(this.nf, this);
		this.B = Ya()
	};
	Za(ak, N);
	k = ak.prototype;
	k.enabled = !1;
	k.Da = null;
	k.nf = function() {
		if (this.enabled) {
			var a = Ya() - this.B;
			0 < a && a < .8 * this.l ? this.Da = this.h.setTimeout(this.o, this.l - a) : (this.Da && (this.h
				.clearTimeout(this.Da), this.Da = null), this.dispatchEvent("tick"), this.enabled && (
				this.stop(), this.start()))
		}
	};
	k.start = function() {
		this.enabled = !0;
		this.Da || (this.Da = this.h.setTimeout(this.o, this.l), this.B = Ya())
	};
	k.stop = function() {
		this.enabled = !1;
		this.Da && (this.h.clearTimeout(this.Da), this.Da = null)
	};
	k.O = function() {
		ak.ya.O.call(this);
		this.stop();
		delete this.h
	};
	var bk = function(a, b, c) {
			if ("function" === typeof a) c && (a = Wa(a, c));
			else if (a && "function" == typeof a.handleEvent) a = Wa(a.handleEvent, a);
			else throw Error("Invalid listener argument");
			return 2147483647 < Number(b) ? -1 : v.setTimeout(a, b || 0)
		},
		ck = function() {
			var a = null;
			return (new Lj(function(b, c) {
				a = bk(function() {
					b("timed out")
				}, 200); - 1 == a && c(Error("Failed to schedule timer."))
			})).I(function(b) {
				v.clearTimeout(a);
				throw b;
			})
		};
	var dk = function() {
		return Math.round(Date.now() / 1E3)
	};
	var ek = function() {
		this.h = {};
		return this
	};
	ek.prototype.remove = function(a) {
		var b = this.h;
		a in b && delete b[a]
	};
	ek.prototype.set = function(a, b) {
		this.h[a] = b
	};
	var fk = function(a, b) {
		a.h.eb = Wd(a.h, "eb", 0) | b
	};
	ek.prototype.get = function(a) {
		return Wd(this.h, a, null)
	};
	var gk = null,
		hk = function() {
			this.h = {};
			this.l = 0
		},
		ik = function() {
			gk || (gk = new hk);
			return gk
		},
		jk = function(a, b) {
			a.h[b.getName()] = b
		},
		kk = function(a, b) {
			this.A = a;
			this.o = !0;
			this.h = b
		};
	kk.prototype.getName = function() {
		return this.A
	};
	kk.prototype.l = function() {
		return String(this.h)
	};
	var lk = function(a, b) {
		kk.call(this, String(a), b);
		this.B = a;
		this.h = !!b
	};
	t(lk, kk);
	lk.prototype.l = function() {
		return this.h ? "1" : "0"
	};
	var mk = function(a, b) {
		kk.call(this, a, b)
	};
	t(mk, kk);
	mk.prototype.l = function() {
		return this.h ? Math.round(this.h.top) + "." + Math.round(this.h.left) + "." + (Math.round(this.h.top) +
			Math.round(this.h.height)) + "." + (Math.round(this.h.left) + Math.round(this.h.width)) : ""
	};
	var nk = function(a) {
		if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
			a = a.split(".");
			var b = Number(a[0]),
				c = Number(a[1]);
			return new mk("", new bg(c, b, Number(a[3]) - c, Number(a[2]) - b))
		}
		return new mk("", new bg(0, 0, 0, 0))
	};
	var ok = function(a) {
			var b = new bg(-Number.MAX_VALUE / 2, -Number.MAX_VALUE / 2, Number.MAX_VALUE, Number.MAX_VALUE),
				c = new bg(0, 0, 0, 0);
			if (!a || 0 == a.length) return c;
			for (var d = 0; d < a.length; d++) {
				a: {
					var e = b;
					var f = a[d],
						g = Math.max(e.left, f.left),
						h = Math.min(e.left + e.width, f.left + f.width);
					if (g <= h) {
						var l = Math.max(e.top, f.top);
						f = Math.min(e.top + e.height, f.top + f.height);
						if (l <= f) {
							e.left = g;
							e.top = l;
							e.width = h - g;
							e.height = f - l;
							e = !0;
							break a
						}
					}
					e = !1
				}
				if (!e) return c
			}
			return b
		},
		pk = function(a, b) {
			var c = a.getBoundingClientRect();
			a = ng(a,
				b);
			return new bg(Math.round(a.x), Math.round(a.y), Math.round(c.right - c.left), Math.round(c.bottom - c
				.top))
		},
		qk = function(a, b, c) {
			if (b && c) {
				a: {
					var d = Math.max(b.left, c.left);
					var e = Math.min(b.left + b.width, c.left + c.width);
					if (d <= e) {
						var f = Math.max(b.top, c.top),
							g = Math.min(b.top + b.height, c.top + c.height);
						if (f <= g) {
							d = new bg(d, f, e - d, g - f);
							break a
						}
					}
					d = null
				}
				e = d ? d.height * d.width : 0;f = d ? b.height * b.width : 0;d = d && f ? Math.round(e / f * 100) :
				0;jk(a, new kk("vp", d));d && 0 < d ? (e = cg(b), f = cg(c), e = e.top >= f.top && e.top < f
				.bottom) : e = !1;jk(a, new lk(512,
					e));d && 0 < d ? (e = cg(b), f = cg(c), e = e.bottom <= f.bottom && e.bottom > f.top) : e = !
				1;jk(a, new lk(1024, e));d && 0 < d ? (e = cg(b), f = cg(c), e = e.left >= f.left && e.left < f
					.right) : e = !1;jk(a, new lk(2048, e));d && 0 < d ? (b = cg(b), c = cg(c), c = b.right <= c
					.right && b.right > c.left) : c = !1;jk(a, new lk(4096, c))
			}
		};
	var rk = function(a, b) {
		var c = 0;
		Pd(G(), "ima", "video", "client", "tagged") && (c = 1);
		var d = null;
		a && (d = a());
		if (d) {
			a = ik();
			a.h = {};
			var e = new lk(32, !0);
			e.o = !1;
			jk(a, e);
			e = G().document;
			e = e.visibilityState || e.webkitVisibilityState || e.mozVisibilityState || e.msVisibilityState ||
				"";
			jk(a, new lk(64, "hidden" != e.toLowerCase().substring(e.length - 6) ? !0 : !1));
			try {
				var f = G().top;
				try {
					var g = !!f.location.href || "" === f.location.href
				} catch (m) {
					g = !1
				}
				if (g) {
					var h = Ri(d);
					var l = h && 0 != h.length ? "1" : "0"
				} else l = "2"
			} catch (m) {
				l = "2"
			}
			jk(a, new lk(256,
				"2" == l));
			jk(a, new lk(128, "1" == l));
			h = g = G().top;
			"2" == l && (h = G());
			f = pk(d, h);
			jk(a, new mk("er", f));
			try {
				var n = h.document && !h.document.body ? null : sf(h || window)
			} catch (m) {
				n = null
			}
			n ? (h = tf(nf(h.document).h), jk(a, new lk(16384, !!h)), n = h ? new bg(h.x, h.y, n.width, n
				.height) : null) : n = null;
			jk(a, new mk("vi", n));
			if (n && "1" == l) {
				l = Ri(d);
				d = [];
				for (h = 0; h < l.length; h++)(e = pk(l[h], g)) && d.push(e);
				d.push(n);
				n = ok(d)
			}
			qk(a, f, n);
			a.l && jk(a, new kk("ts", dk() - a.l));
			a.l = dk()
		} else a = ik(), a.h = {}, a.l = dk(), jk(a, new lk(32, !1));
		this.o = a;
		this.h = new ek;
		this.h.set("ve", 4);
		c && fk(this.h, 1);
		Pd(G(), "ima", "video", "client", "crossdomainTag") && fk(this.h, 4);
		Pd(G(), "ima", "video", "client", "sdkTag") && fk(this.h, 8);
		Pd(G(), "ima", "video", "client", "jsTag") && fk(this.h, 2);
		b && Wd(b, "fullscreen", !1) && fk(this.h, 16);
		this.l = b = null;
		if (c && (c = Pd(G(), "ima", "video", "client"), c.getEData)) {
			this.l = c.getEData();
			if (c = Pd(G(), "ima", "video", "client", "getLastSnapshotFromTop"))
				if (a = c()) this.l.extendWithDataFromTopIframe(a.tagstamp, a.playstamp, a.lactstamp), c = this
					.o, b = a.er, a = a.vi, b && a &&
					(b = nk(b).h, a = nk(a).h, l = null, Wd(c.h, "er", null) && (l = Wd(c.h, "er", null).h, l
						.top += b.top, l.left += b.left, jk(c, new mk("er", l))), Wd(c.h, "vi", null) && (
						n = Wd(c.h, "vi", null).h, n.top += b.top, n.left += b.left, d = [], d.push(n), d
						.push(b), d.push(a), b = ok(d), qk(c, l, b), jk(c, new mk("vi", a))));
			a: {
				if (this.l) {
					if (this.l.getTagLoadTimestamp) {
						b = this.l.getTagLoadTimestamp();
						break a
					}
					if (this.l.getTimeSinceTagLoadSeconds) {
						b = this.l.getTimeSinceTagLoadSeconds();
						break a
					}
				}
				b = null
			}
		}
		c = this.h;
		a = window.performance && window.performance.timing &&
			window.performance.timing.domLoading && 0 < window.performance.timing.domLoading ? Math.round(window
				.performance.timing.domLoading / 1E3) : null;
		c.set.call(c, "td", dk() - (null != a ? a : null != b ? b : dk()))
	};
	var sk = new ak(200),
		tk = function(a, b) {
			try {
				var c = new rk(a, b);
				a = [];
				var d = Number(c.h.get("eb"));
				c.h.remove("eb");
				var e, f = c.h;
				b = [];
				for (var g in f.h) b.push(g + f.h[g]);
				(e = b.join("_")) && a.push(e);
				if (c.l) {
					var h = c.l.serialize();
					h && a.push(h)
				}
				var l, n = c.o;
				e = d;
				f = [];
				e || (e = 0);
				for (var m in n.h) {
					var x = n.h[m];
					if (x instanceof lk) x.h && (e |= x.B);
					else {
						var u, A = n.h[m];
						(u = A.o ? A.l() : "") && f.push(m + u)
					}
				}
				f.push("eb" + String(e));
				(l = f.join("_")) && a.push(l);
				c.h.set("eb", d);
				return a.join("_")
			} catch (z) {
				return "tle;" + cf(z.name, 12) + ";" + cf(z.message,
					40)
			}
		},
		uk = function(a, b) {
			kj(sk, "tick", function() {
				var c = tk(b);
				a(c)
			});
			sk.start();
			sk.dispatchEvent("tick")
		};
	var wk = function(a) {
		C.call(this, a, -1, vk)
	};
	t(wk, C);
	var Bk = function(a, b) {
			var c = xk;
			Xc(b, 1, ud(a, yk, 1), c);
			c = zk;
			Xc(b, 2, ud(a, Ak, 2), c);
			zd(a, b)
		},
		yk = function(a) {
			C.call(this, a)
		};
	t(yk, C);
	var xk = function(a, b) {
			Vc(b, 1, D(a, 1));
			var c = Ck,
				d = td(a, Dk, 2);
			if (null != d) {
				var e = Rc(b, 2);
				c(d, b);
				Sc(b, e)
			}
			c = Ck;
			d = td(a, Dk, 3);
			null != d && (e = Rc(b, 3), c(d, b), Sc(b, e));
			c = D(a, 4);
			null != c && Wc(b, 4, eb(c));
			c = D(a, 5);
			null != c && Wc(b, 5, eb(c));
			c = D(a, 6);
			null != c && (Qc(b, 6, 0), b.h.push(c ? 1 : 0));
			zd(a, b)
		},
		Dk = function(a) {
			C.call(this, a)
		};
	t(Dk, C);
	var Ck = function(a, b) {
			Vc(b, 1, D(a, 1));
			Vc(b, 2, D(a, 2));
			Vc(b, 3, D(a, 3));
			zd(a, b)
		},
		Ak = function(a) {
			C.call(this, a)
		};
	t(Ak, C);
	var zk = function(a, b) {
			var c = D(a, 1);
			null != c && Wc(b, 1, eb(c));
			c = D(a, 2);
			null != c && Wc(b, 2, eb(c));
			Uc(b, 3, D(a, 3));
			Uc(b, 7, D(a, 7));
			var d = D(a, 8);
			if (null != d) {
				Qc(b, 8, 5);
				c = b.h;
				var e = d;
				e = (d = 0 > e ? 1 : 0) ? -e : e;
				if (0 === e) 0 < 1 / e ? Gc = Hc = 0 : (Hc = 0, Gc = 2147483648);
				else if (isNaN(e)) Hc = 0, Gc = 2147483647;
				else if (3.4028234663852886E38 < e) Hc = 0, Gc = (d << 31 | 2139095040) >>> 0;
				else if (1.1754943508222875E-38 > e) e = Math.round(e / Math.pow(2, -149)), Hc = 0, Gc = (d << 31 |
					e) >>> 0;
				else {
					var f = Math.floor(Math.log(e) / Math.LN2);
					e *= Math.pow(2, -f);
					e = Math.round(8388608 *
						e);
					16777216 <= e && ++f;
					Hc = 0;
					Gc = (d << 31 | f + 127 << 23 | e & 8388607) >>> 0
				}
				Mc(c, Gc)
			}
			Tc(b, 4, D(a, 4));
			Tc(b, 5, D(a, 5));
			Tc(b, 6, D(a, 6));
			c = D(a, 9);
			null != c && (Qc(b, 9, 0), b.h.push(c ? 1 : 0));
			zd(a, b)
		},
		vk = [1, 2];
	var Ek = function(a) {
		C.call(this, a)
	};
	t(Ek, C);
	Ek.prototype.setValue = function(a) {
		return kd(this, 1, a)
	};
	Ek.prototype.getVersion = function() {
		return D(this, 5)
	};
	var Fk;
	Fk = ["av.default", "js", "unreleased"].slice(-1)[0];
	var Gk = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"),
		Kk = function(a) {
			a = a || Hk();
			for (var b = new Ik(v.location.href, !1), c = null, d = a.length - 1, e = d; 0 <= e; --e) {
				var f = a[e];
				!c && Gk.test(f.url) && (c = f);
				if (f.url && !f.Dc) {
					b = f;
					break
				}
			}
			e = null;
			f = a.length && a[d].url;
			0 != b.depth && f && (e = a[d]);
			return new Jk(b, e, c)
		},
		Hk = function() {
			var a = v,
				b = [],
				c = null;
			do {
				var d = a;
				if (Jf(d)) {
					var e = d.location.href;
					c = d.document && d.document.referrer || null
				} else e = c, c = null;
				b.push(new Ik(e || ""));
				try {
					a = d.parent
				} catch (f) {
					a = null
				}
			} while (a &&
				d != a);
			d = 0;
			for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
			d = v;
			if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
				for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "",
					e.Dc = !0);
			return b
		},
		Jk = function(a, b, c) {
			this.h = a;
			this.l = b;
			this.o = c
		},
		Ik = function(a, b) {
			this.url = a;
			this.Dc = !!b;
			this.depth = null
		};
	var Lk = function() {
			this.o = "&";
			this.l = {};
			this.A = 0;
			this.h = []
		},
		Mk = function(a, b) {
			var c = {};
			c[a] = b;
			return [c]
		},
		Ok = function(a, b, c, d, e) {
			var f = [];
			Nf(a, function(g, h) {
				(g = Nk(g, b, c, d, e)) && f.push(h + "=" + g)
			});
			return f.join(b)
		},
		Nk = function(a, b, c, d, e) {
			if (null == a) return "";
			b = b || "&";
			c = c || ",$";
			"string" == typeof c && (c = c.split(""));
			if (a instanceof Array) {
				if (d = d || 0, d < c.length) {
					for (var f = [], g = 0; g < a.length; g++) f.push(Nk(a[g], b, c, d + 1, e));
					return f.join(c[d])
				}
			} else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Ok(a,
				b, c, d, e + 1)) : "...";
			return encodeURIComponent(String(a))
		},
		Pk = function(a, b, c) {
			a.h.push(b);
			a.l[b] = c
		},
		Qk = function(a, b, c, d) {
			a.h.push(b);
			a.l[b] = Mk(c, d)
		},
		Sk = function(a, b, c) {
			b = b + "//pagead2.googlesyndication.com" + c;
			var d = Rk(a) - c.length;
			if (0 > d) return "";
			a.h.sort(function(m, x) {
				return m - x
			});
			c = null;
			for (var e = "", f = 0; f < a.h.length; f++)
				for (var g = a.h[f], h = a.l[g], l = 0; l < h.length; l++) {
					if (!d) {
						c = null == c ? g : c;
						break
					}
					var n = Ok(h[l], a.o, ",$");
					if (n) {
						n = e + n;
						if (d >= n.length) {
							d -= n.length;
							b += n;
							e = a.o;
							break
						}
						c = null == c ? g : c
					}
				}
			a = "";
			null != c &&
				(a = e + "trn=" + c);
			return b + a + ""
		},
		Rk = function(a) {
			var b = 1,
				c;
			for (c in a.l) b = c.length > b ? c.length : b;
			return 3997 - b - a.o.length - 1
		};
	var Tk = function() {
			var a = void 0 === a ? E : a;
			this.l = "http:" === a.location.protocol ? "http:" : "https:";
			this.h = Math.random()
		},
		Wk = function() {
			var a = Uk,
				b = Vk.google_srt;
			0 <= b && 1 >= b && (a.h = b)
		},
		Xk = function(a, b, c, d, e) {
			if ((d ? a.h : Math.random()) < (e || .01)) try {
				if (c instanceof Lk) var f = c;
				else f = new Lk, Nf(c, function(h, l) {
					var n = f,
						m = n.A++;
					Pk(n, m, Mk(l, h))
				});
				var g = Sk(f, a.l, "/pagead/gen_204?id=" + b + "&");
				g && eg(v, g)
			} catch (h) {}
		};
	var Zk = function() {
		var a = Yk;
		this.C = Uk;
		this.B = "jserror";
		this.o = !0;
		this.l = null;
		this.D = this.La;
		this.h = void 0 === a ? null : a;
		this.A = !1
	};
	k = Zk.prototype;
	k.ec = function(a) {
		this.l = a
	};
	k.Rc = function(a) {
		this.B = a
	};
	k.Sc = function(a) {
		this.o = a
	};
	k.Tc = function(a) {
		this.A = a
	};
	k.ab = function(a, b, c) {
		try {
			if (this.h && this.h.o) {
				var d = this.h.start(a.toString(), 3);
				var e = b();
				this.h.end(d)
			} else e = b()
		} catch (l) {
			b = this.o;
			try {
				bh(d);
				var f = new Qg(l, {
					message: $k(l)
				});
				b = this.D(a, f, void 0, c)
			} catch (n) {
				this.La(217, n)
			}
			if (b) {
				var g, h;
				null == (g = window.console) || null == (h = g.error) || h.call(g, l)
			} else throw l;
		}
		return e
	};
	k.Nc = function(a, b, c, d) {
		var e = this;
		return function() {
			var f = Ga.apply(0, arguments);
			return e.ab(a, function() {
				return b.apply(c, f)
			}, d)
		}
	};
	k.La = function(a, b, c, d, e) {
		e = e || this.B;
		try {
			var f = new Lk;
			Qk(f, 1, "context", a);
			Rg(b) || (b = new Qg(b, {
				message: $k(b)
			}));
			b.msg && Qk(f, 2, "msg", b.msg.substring(0, 512));
			var g = b.meta || {};
			if (this.l) try {
				this.l(g)
			} catch (l) {}
			if (d) try {
				d(g)
			} catch (l) {}
			Pk(f, 3, [g]);
			var h = Kk();
			h.l && Qk(f, 4, "top", h.l.url || "");
			Pk(f, 5, [{
				url: h.h.url || ""
			}, {
				url: h.h.url ? Ff(h.h.url) : ""
			}]);
			Xk(this.C, e, f, this.A, c)
		} catch (l) {
			try {
				Xk(this.C, e, {
					context: "ecmserr",
					rctx: a,
					msg: $k(l),
					url: h && h.h.url
				}, this.A, c)
			} catch (n) {}
		}
		return this.o
	};
	var $k = function(a) {
		var b = a.toString();
		a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
		a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
		if (a.stack) {
			a = a.stack;
			var c = b;
			try {
				-1 == a.indexOf(c) && (a = c + "\n" + a);
				for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
				b = a.replace(/\n */g, "\n")
			} catch (e) {
				b = c
			}
		}
		return b
	};
	var al = function() {
		this.h = function() {
			return []
		}
	};
	var Uk, bl, Vk = tg(),
		Yk = new ah(1, Vk);
	(function(a) {
		Uk = null != a ? a : new Tk;
		"number" !== typeof Vk.google_srt && (Vk.google_srt = Math.random());
		Wk();
		bl = new Zk;
		bl.ec(function() {});
		bl.Tc(!0);
		"complete" == Vk.document.readyState ? Vk.google_measure_js_timing || Yk.D() : Yk.o && Ue(Vk, "load",
			function() {
				Vk.google_measure_js_timing || Yk.D()
			})
	})();
	var cl = function() {
		this.blockSize = -1
	};
	var dl = [0, 2, 1],
		el = null;
	document.addEventListener && document.addEventListener("mousedown", function(a) {
		el = a
	}, !0);
	window.mb = function(a) {
		if (a) {
			var b;
			if (b = window.event || el) {
				var c;
				(c = b.which ? 1 << dl[b.which - 1] : b.button) && b.shiftKey && (c |= 8);
				c && b.altKey && (c |= 16);
				c && b.ctrlKey && (c |= 32);
				b = c
			} else b = null;
			if (c = b)
				if (window.css) window.css(a.id, "mb", c, void 0, void 0);
				else if (a) {
				b = a.href;
				var d = b.indexOf("&mb=");
				if (0 > d) c = b + "&mb=" + c;
				else {
					d += 4;
					var e = b.indexOf("&", d);
					c = 0 <= e ? b.substring(0, d) + c + b.substring(e) : b.substring(0, d) + c
				}
				a.href = 2E3 < c.length ? b : c
			}
		}
	};
	var fl = function(a) {
		var b = {};
		B(a, function(c) {
			var d = c.event,
				e = b[d];
			b.hasOwnProperty(d) ? null !== e && (c.h(e) || (b[d] = null)) : b[d] = c
		});
		Nb(a, function(c) {
			return null === b[c.event]
		})
	};
	var gl = {
			NONE: 0,
			Qf: 1
		},
		hl = {
			Of: 0,
			Ug: 1,
			Tg: 2,
			Vg: 3
		};
	var il = function() {
		this.Y = 0;
		this.h = !1;
		this.l = -1;
		this.Za = !1;
		this.ma = 0
	};
	il.prototype.isVisible = function() {
		return this.Za ? .3 <= this.Y : .5 <= this.Y
	};
	var jl = {
			Nf: 0,
			Uf: 1
		},
		kl = {
			668123728: 0,
			668123729: 1
		},
		ll = {
			44731964: 0,
			44731965: 1
		},
		ml = {
			NONE: 0,
			vg: 1,
			Yf: 2
		},
		nl = {
			480596784: 0,
			480596785: 1,
			21063355: 2
		};
	var ol = function() {
			this.h = null;
			this.o = !1;
			this.l = null
		},
		pl = function(a) {
			a.o = !0;
			return a
		},
		ql = function(a, b) {
			a.l && B(b, function(c) {
				c = a.l[c];
				void 0 !== c && a.setValue(c)
			})
		},
		rl = function(a) {
			ol.call(this);
			this.A = a
		};
	t(rl, ol);
	rl.prototype.setValue = function(a) {
		if (null !== this.h || !Rd(this.A, a)) return !1;
		this.h = a;
		return !0
	};
	var sl = function() {
		ol.call(this)
	};
	t(sl, ol);
	sl.prototype.setValue = function(a) {
		if (null !== this.h || "number" !== typeof a) return !1;
		this.h = a;
		return !0
	};
	var tl = function() {
		ol.call(this)
	};
	t(tl, ol);
	tl.prototype.setValue = function(a) {
		if (null !== this.h || "string" !== typeof a) return !1;
		this.h = a;
		return !0
	};
	var ul = function() {
		this.h = {};
		this.l = !0;
		this.o = {}
	};
	ul.prototype.enable = function() {
		this.l = !0
	};
	ul.prototype.isEnabled = function() {
		return this.l
	};
	ul.prototype.reset = function() {
		this.h = {};
		this.l = !0;
		this.o = {}
	};
	var vl = function(a, b, c) {
			a.h[b] || (a.h[b] = new rl(c));
			return a.h[b]
		},
		wl = function(a) {
			a.h.queryid || (a.h.queryid = new tl)
		},
		xl = function(a, b, c) {
			(a = a.h[b]) && a.setValue(c)
		},
		yl = function(a, b) {
			if (Qd(a.o, b)) return a.o[b];
			if (a = a.h[b]) return a.h
		},
		zl = function(a) {
			var b = {},
				c = Id(a.h, function(d) {
					return d.o
				});
			Hd(c, function(d, e) {
				d = void 0 !== a.o[e] ? String(a.o[e]) : d.o && null !== d.h ? String(d.h) : "";
				0 < d.length && (b[e] = d)
			}, a);
			return b
		},
		Al = function(a) {
			a = zl(a);
			var b = [];
			Hd(a, function(c, d) {
				d in Object.prototype || "undefined" != typeof c &&
					b.push([d, ":", c].join(""))
			});
			return b
		},
		Bl = function() {
			var a = P().featureSet,
				b = Th();
			a.l && B(Nd(a.h), function(c) {
				return ql(c, b)
			})
		};
	var Cl = !Zb && !yb();
	var Dl = function() {
		this.h = this.Ta = null
	};
	var El = function() {};
	El.prototype.now = function() {
		return 0
	};
	El.prototype.l = function() {
		return 0
	};
	El.prototype.o = function() {
		return 0
	};
	El.prototype.h = function() {
		return 0
	};
	var Gl = function() {
		if (!Fl()) throw Error();
	};
	t(Gl, El);
	var Fl = function() {
		return !(!E || !E.performance)
	};
	Gl.prototype.now = function() {
		return Fl() && E.performance.now ? E.performance.now() : El.prototype.now.call(this)
	};
	Gl.prototype.l = function() {
		return Fl() && E.performance.memory ? E.performance.memory.totalJSHeapSize || 0 : El.prototype.l.call(
			this)
	};
	Gl.prototype.o = function() {
		return Fl() && E.performance.memory ? E.performance.memory.usedJSHeapSize || 0 : El.prototype.o.call(
			this)
	};
	Gl.prototype.h = function() {
		return Fl() && E.performance.memory ? E.performance.memory.jsHeapSizeLimit || 0 : El.prototype.h.call(
			this)
	};
	var Hl = function() {};
	Hl.prototype.isVisible = function() {
		return 1 === eh(Bd)
	};
	var Il = function(a, b) {
			this.h = a;
			this.depth = b
		},
		Kl = function(a) {
			a = a || Hk();
			var b = Math.max(a.length - 1, 0),
				c = Kk(a);
			a = c.h;
			var d = c.l,
				e = c.o,
				f = [];
			c = function(h, l) {
				return null == h ? l : h
			};
			e && f.push(new Il([e.url, e.Dc ? 2 : 0], c(e.depth, 1)));
			d && d != e && f.push(new Il([d.url, 2], 0));
			a.url && a != e && f.push(new Il([a.url, 0], c(a.depth, b)));
			var g = Eb(f, function(h, l) {
				return f.slice(0, f.length - l)
			});
			!a.url || (e || d) && a != e || (d = Pf(a.url)) && g.push([new Il([d, 1], c(a.depth, b))]);
			g.push([]);
			return Eb(g, function(h) {
				return Jl(b, h)
			})
		};

	function Jl(a, b) {
		var c = Fb(b, function(e, f) {
				return Math.max(e, f.depth)
			}, -1),
			d = Tb(c + 2);
		d[0] = a;
		B(b, function(e) {
			return d[e.depth + 1] = e.h
		});
		return d
	}
	var Ll = function() {
		var a = Kl();
		return Eb(a, function(b) {
			return Nk(b)
		})
	};
	var Ml = function() {
			this.l = new Hl;
			this.h = Fl() ? new Gl : new El
		},
		Ol = function() {
			Nl();
			var a = E.document;
			return !!(a && a.body && a.body.getBoundingClientRect && "function" === typeof E.setInterval &&
				"function" === typeof E.clearInterval && "function" === typeof E.setTimeout && "function" ===
				typeof E.clearTimeout)
		};
	Ml.prototype.setTimeout = function(a, b) {
		return E.setTimeout(a, b)
	};
	Ml.prototype.clearTimeout = function(a) {
		E.clearTimeout(a)
	};
	var Pl = function(a) {
			Nl();
			var b = tg() || E;
			eg(b, a)
		},
		Ql = function() {
			Nl();
			return Ll()
		};
	var Rl = function() {};
	Rl.prototype.getContext = function() {
		if (!this.h) {
			if (!E) throw Error("Context has not been set and window is undefined.");
			this.h = I(Ml)
		}
		return this.h
	};
	var Nl = function() {
		return I(Rl).getContext()
	};
	var Sl = function(a) {
		C.call(this, a)
	};
	t(Sl, C);
	var Tl = function(a, b) {
		var c = D(a, 1);
		if (null != c) {
			Qc(b, 1, 1);
			var d = b.h,
				e = c;
			e = (c = 0 > e ? 1 : 0) ? -e : e;
			if (0 === e) Hc = 0 < 1 / e ? 0 : 2147483648, Gc = 0;
			else if (isNaN(e)) Hc = 2147483647, Gc = 4294967295;
			else if (1.7976931348623157E308 < e) Hc = (c << 31 | 2146435072) >>> 0, Gc = 0;
			else if (2.2250738585072014E-308 > e) {
				var f = e / Math.pow(2, -1074);
				Hc = (c << 31 | f / 4294967296) >>> 0;
				Gc = f >>> 0
			} else {
				var g = e;
				f = 0;
				if (2 <= g)
					for (; 2 <= g && 1023 > f;) f++, g /= 2;
				else
					for (; 1 > g && -1022 < f;) g *= 2, f--;
				e *= Math.pow(2, -f);
				Hc = (c << 31 | f + 1023 << 20 | 1048576 * e & 1048575) >>> 0;
				Gc = 4503599627370496 * e >>>
					0
			}
			Mc(d, Gc);
			Mc(d, Hc)
		}
		Uc(b, 2, D(a, 2));
		Uc(b, 3, D(a, 3));
		Uc(b, 4, D(a, 4));
		Tc(b, 5, D(a, 5));
		zd(a, b)
	};
	var Ul = function(a) {
			this.o = a;
			this.h = -1;
			this.l = this.A = 0
		},
		Vl = function(a, b) {
			return function() {
				var c = Ga.apply(0, arguments);
				if (-1 < a.h) return b.apply(null, ha(c));
				try {
					return a.h = a.o.h.now(), b.apply(null, ha(c))
				} finally {
					a.A += a.o.h.now() - a.h, a.h = -1, a.l += 1
				}
			}
		};
	var Wl = function(a, b) {
		this.l = a;
		this.o = b;
		this.h = new Ul(a)
	};
	var Xl = function() {};
	var Yl = {
		mh: 0,
		ug: 1,
		ph: 2,
		Pf: 3,
		uh: 4,
		Af: 5
	};
	var Zl = {
		Pg: 1,
		vh: 2,
		Dg: 3
	};
	de(Fd(Gd("https://pagead2.googlesyndication.com/pagead/osd.js")));
	var $l = function() {
		this.A = void 0;
		this.l = this.D = 0;
		this.C = -1;
		this.featureSet = new ul;
		pl(vl(this.featureSet, "mv", ml)).l = void 0 === nl ? null : nl;
		vl(this.featureSet, "omid", jl);
		pl(vl(this.featureSet, "epoh", jl));
		pl(vl(this.featureSet, "epph", jl));
		pl(vl(this.featureSet, "umt", jl)).l = void 0 === kl ? null : kl;
		pl(vl(this.featureSet, "phel", jl));
		pl(vl(this.featureSet, "phell", jl));
		pl(vl(this.featureSet, "oseid", Zl));
		var a = this.featureSet;
		a.h.sloi || (a.h.sloi = new sl);
		pl(a.h.sloi);
		vl(this.featureSet, "mm", Yl);
		pl(vl(this.featureSet,
			"ovms", hl));
		pl(vl(this.featureSet, "xdi", jl));
		pl(vl(this.featureSet, "amp", jl));
		pl(vl(this.featureSet, "prf", jl));
		pl(vl(this.featureSet, "gtx", jl));
		pl(vl(this.featureSet, "mvp_lv", jl));
		pl(vl(this.featureSet, "ssmol", jl)).l = void 0 === ll ? null : ll;
		this.h = new Wl(Nl(), this.featureSet);
		this.B = this.o = !1;
		this.flags = new Xl
	};
	$l.prototype.Mc = function(a) {
		if ("string" === typeof a && 0 != a.length) {
			var b = this.featureSet;
			if (b.l) {
				a = a.split("&");
				for (var c = a.length - 1; 0 <= c; c--) {
					var d = a[c].split("="),
						e = decodeURIComponent(d[0]);
					1 < d.length ? (d = decodeURIComponent(d[1]), d = /^[0-9]+$/g.exec(d) ? parseInt(d, 10) :
						d) : d = 1;
					(e = b.h[e]) && e.setValue(d)
				}
			}
		}
	};
	var P = function() {
		return I($l)
	};
	var am = function() {
			var a = "https:";
			E && E.location && "http:" === E.location.protocol && (a = "http:");
			this.l = a;
			this.h = .01;
			this.o = Math.random()
		},
		bm = function(a, b, c, d, e) {
			if ((d ? a.o : Math.random()) < (e || a.h)) try {
				if (c instanceof Lk) var f = c;
				else f = new Lk, Nf(c, function(h, l) {
					var n = f,
						m = n.A++;
					Pk(n, m, Mk(l, h))
				});
				var g = Sk(f, a.l, "/pagead/gen_204?id=" + b + "&");
				g && Pl(g)
			} catch (h) {}
		};
	var em = function() {
		var a = cm;
		this.C = dm;
		this.B = "jserror";
		this.o = !0;
		this.l = null;
		this.D = this.La;
		this.h = void 0 === a ? null : a;
		this.A = !1
	};
	k = em.prototype;
	k.ec = function(a) {
		this.l = a
	};
	k.Rc = function(a) {
		this.B = a
	};
	k.Sc = function(a) {
		this.o = a
	};
	k.Tc = function(a) {
		this.A = a
	};
	k.ab = function(a, b, c) {
		var d = this;
		return Vl(P().h.h, function() {
			try {
				if (d.h && d.h.o) {
					var e = d.h.start(a.toString(), 3);
					var f = b();
					d.h.end(e)
				} else f = b()
			} catch (l) {
				var g = d.o;
				try {
					bh(e);
					var h = new fm(gm(l));
					g = d.D(a, h, void 0, c)
				} catch (n) {
					d.La(217, n)
				}
				if (!g) throw l;
			}
			return f
		})()
	};
	k.Nc = function(a, b, c, d) {
		var e = this;
		return Vl(P().h.h, function() {
			var f = Ga.apply(0, arguments);
			return e.ab(a, function() {
				return b.apply(c, f)
			}, d)
		})
	};
	k.La = function(a, b, c, d, e) {
		e = e || this.B;
		try {
			var f = new Lk;
			Qk(f, 1, "context", a);
			Rg(b) || (b = new fm(gm(b)));
			b.msg && Qk(f, 2, "msg", b.msg.substring(0, 512));
			var g = b.meta || {};
			if (this.l) try {
				this.l(g)
			} catch (l) {}
			if (d) try {
				d(g)
			} catch (l) {}
			Pk(f, 3, [g]);
			var h = Kk();
			h.l && Qk(f, 4, "top", h.l.url || "");
			Pk(f, 5, [{
				url: h.h.url || ""
			}, {
				url: h.h.url ? Ff(h.h.url) : ""
			}]);
			bm(this.C, e, f, this.A, c)
		} catch (l) {
			try {
				bm(this.C, e, {
					context: "ecmserr",
					rctx: a,
					msg: gm(l),
					url: h && h.h.url
				}, this.A, c)
			} catch (n) {}
		}
		return this.o
	};
	var gm = function(a) {
			var b = a.toString();
			a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
			a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
			if (a.stack) {
				a = a.stack;
				var c = b;
				try {
					-1 == a.indexOf(c) && (a = c + "\n" + a);
					for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
					b = a.replace(/\n */g, "\n")
				} catch (e) {
					b = c
				}
			}
			return b
		},
		fm = function(a) {
			Qg.call(this, Error(a), {
				message: a
			})
		};
	t(fm, Qg);
	var dm, hm, cm = new ah(1, tg()),
		im = function() {
			var a = tg();
			a && "undefined" != typeof a.google_measure_js_timing && (a.google_measure_js_timing || cm.D())
		};
	(function() {
		dm = new am;
		hm = new em;
		var a = tg();
		a && a.document && ("complete" == a.document.readyState ? im() : cm.o && Ue(a, "load", function() {
			im()
		}))
	})();
	var jm = function(a) {
			hm.ec(function(b) {
				B(a, function(c) {
					c(b)
				})
			})
		},
		km = function(a, b) {
			return hm.ab(a, b, void 0)
		},
		lm = function(a, b, c, d) {
			return hm.Nc(a, b, c, d)
		},
		mm = function(a, b, c, d) {
			hm.La(a, b, c, d)
		};
	var nm = Date.now(),
		om = -1,
		pm = -1,
		qm, rm = -1,
		sm = !1,
		tm = function() {
			return Date.now() - nm
		},
		um = function() {
			var a = P().A,
				b = 0 <= pm ? tm() - pm : -1,
				c = sm ? tm() - om : -1,
				d = 0 <= rm ? tm() - rm : -1;
			if (947190542 == a) return 100;
			if (79463069 == a) return 200;
			a = [2E3, 4E3];
			var e = [250, 500, 1E3];
			mm(637, Error(), .001);
			var f = b; - 1 != c && c < b && (f = c);
			for (b = 0; b < a.length; ++b)
				if (f < a[b]) {
					var g = e[b];
					break
				} void 0 === g && (g = e[a.length]);
			return -1 != d && 1500 < d && 4E3 > d ? 500 : g
		};
	var vm = function(a, b, c) {
		var d = new H(0, 0, 0, 0);
		this.time = a;
		this.volume = null;
		this.o = b;
		this.h = d;
		this.l = c
	};
	var wm = function(a, b, c, d, e, f, g) {
		this.o = a;
		this.l = b;
		this.B = c;
		this.h = d;
		this.A = e;
		this.D = f;
		this.C = g
	};
	wm.prototype.getTimestamp = function() {
		return this.D
	};
	var xm = {
			currentTime: 1,
			duration: 2,
			isVpaid: 4,
			volume: 8,
			isYouTube: 16,
			isPlaying: 32
		},
		Td = {
			qc: "start",
			FIRST_QUARTILE: "firstquartile",
			MIDPOINT: "midpoint",
			THIRD_QUARTILE: "thirdquartile",
			COMPLETE: "complete",
			ce: "metric",
			lc: "pause",
			hd: "resume",
			SKIPPED: "skip",
			VIEWABLE_IMPRESSION: "viewable_impression",
			de: "mute",
			oe: "unmute",
			FULLSCREEN: "fullscreen",
			Yd: "exitfullscreen",
			$c: "bufferstart",
			Zc: "bufferfinish",
			cd: "fully_viewable_audible_half_duration_impression",
			gd: "measurable_impression",
			Qd: "abandon",
			bd: "engagedview",
			IMPRESSION: "impression",
			Vd: "creativeview",
			LOADED: "loaded",
			Rg: "progress",
			Ff: "close",
			Gf: "collapse",
			ee: "overlay_resize",
			fe: "overlay_unmeasurable_impression",
			ge: "overlay_unviewable_impression",
			ie: "overlay_viewable_immediate_impression",
			he: "overlay_viewable_end_of_session_impression",
			Wd: "custom_metric_viewable",
			Ig: "verification_debug",
			Rd: "audio_audible",
			Td: "audio_measurable",
			Sd: "audio_impression"
		},
		ym = "start firstquartile midpoint thirdquartile resume loaded".split(" "),
		zm = ["start", "firstquartile", "midpoint", "thirdquartile"],
		Am = ["abandon"],
		Bm = {
			lh: -1,
			qc: 0,
			FIRST_QUARTILE: 1,
			MIDPOINT: 2,
			THIRD_QUARTILE: 3,
			COMPLETE: 4,
			ce: 5,
			lc: 6,
			hd: 7,
			SKIPPED: 8,
			VIEWABLE_IMPRESSION: 9,
			de: 10,
			oe: 11,
			FULLSCREEN: 12,
			Yd: 13,
			cd: 14,
			gd: 15,
			Qd: 16,
			bd: 17,
			IMPRESSION: 18,
			Vd: 19,
			LOADED: 20,
			Wd: 21,
			$c: 22,
			Zc: 23,
			Sd: 24,
			Td: 25,
			Rd: 26
		};
	var Md = {
			wf: "addEventListener",
			Zf: "getMaxSize",
			$f: "getScreenSize",
			ag: "getState",
			bg: "getVersion",
			Sg: "removeEventListener",
			wg: "isViewable"
		},
		Cm = function(a) {
			var b = a !== a.top,
				c = a.top === Zf(a),
				d = -1,
				e = 0;
			if (b && c && a.top.mraid) {
				d = 3;
				var f = a.top.mraid
			} else d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
			f && (f.IS_GMA_SDK || (e = 2), Ld(function(g) {
				return "function" === typeof f[g]
			}) || (e = 1));
			return {
				wa: f,
				compatibility: e,
				lf: d
			}
		};
	var Dm = function(a) {
		return (a = a.document) && "function" === typeof a.elementFromPoint
	};
	if (Bd && Bd.URL) {
		var Em, Rf = Bd.URL;
		Em = !!Rf && 0 < Sf().length;
		hm.Sc(!Em)
	}
	var Fm = function(a, b, c, d) {
		var e = void 0 === e ? !1 : e;
		c = lm(d, c);
		Ue(a, b, c, {
			capture: e
		})
	};
	var Gm = function(a, b, c) {
		try {
			a && (b = b.top);
			var d = void 0;
			var e = b;
			c = void 0 === c ? !1 : c;
			a && null !== e && e != e.top && (e = e.top);
			try {
				d = (void 0 === c ? 0 : c) ? (new af(e.innerWidth, e.innerHeight)).round() : sf(e || window)
					.round()
			} catch (l) {
				d = new af(-12245933, -12245933)
			}
			a = d;
			var f = tf(nf(b.document).h);
			if (-12245933 == a.width) {
				var g = a.width;
				var h = new H(g, g, g, g)
			} else h = new H(f.y, f.x + a.width, f.y + a.height, f.x);
			return h
		} catch (l) {
			return new H(-12245933, -12245933, -12245933, -12245933)
		}
	};
	var Hm = function(a, b) {
		b = Math.pow(10, b);
		return Math.floor(a * b) / b
	};

	function Im(a, b, c, d) {
		if (!a) return {
			value: d,
			done: !1
		};
		d = b(d, a);
		var e = c(d, a);
		return !e && Vb(a, "parentElement") ? Im(yf(a), b, c, d) : {
			done: e,
			value: d
		}
	}
	var Jm = function(a, b, c, d) {
		if (!a) return d;
		d = Im(a, b, c, d);
		if (!d.done) try {
			var e = mf(a),
				f = e && G(e);
			return Jm(f && f.frameElement, b, c, d.value)
		} catch (g) {}
		return d.value
	};

	function Km(a) {
		var b = !Zb || pc(8);
		return Jm(a, function(c, d) {
			c = Vb(d, "style") && d.style && kg(d, "visibility");
			return {
				hidden: "hidden" === c,
				visible: b && "visible" === c
			}
		}, function(c) {
			return c.hidden || c.visible
		}, {
			hidden: !1,
			visible: !1
		}).hidden
	}
	var Lm = function(a) {
			return Jm(a, function(b, c) {
				return !(!Vb(c, "style") || !c.style || "none" !== kg(c, "display"))
			}, function(b) {
				return b
			}, !1) ? !0 : Km(a)
		},
		Mm = function(a) {
			return new H(a.top, a.right, a.bottom, a.left)
		},
		Nm = function(a) {
			var b = a.top || 0,
				c = a.left || 0;
			return new H(b, c + (a.width || 0), b + (a.height || 0), c)
		},
		Om = function(a) {
			return null != a && 0 <= a && 1 >= a
		};

	function Pm() {
		var a = vb();
		return a ? Gb(
				"Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX"
				.split(";"),
				function(b) {
					return sb(a, b)
				}) || sb(a, "OMI/") && !sb(a, "XiaoMi/") ? !0 : sb(a, "Presto") && sb(a, "Linux") && !sb(a,
			"X11") && !sb(a, "Android") && !sb(a, "Mobi") : !1
	}

	function Qm() {
		var a = vb();
		return sb(a, "AppleTV") || sb(a, "Apple TV") || sb(a, "CFNetwork") || sb(a, "tvOS")
	}

	function Rm() {
		var a;
		(a = sb(vb(), "CrKey") || sb(vb(), "PlayStation") || sb(vb(), "Roku") || Pm() || sb(vb(), "Xbox") ||
	Qm()) || (a = vb(), a = sb(a, "sdk_google_atv_x86") || sb(a, "Android TV"));
		return a
	};
	var Sm = function() {
			this.I = !1;
			this.o = !Jf(E.top);
			this.isMobileDevice = Cf() || Df();
			var a = Hk();
			a = 0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url ? ((a = a[a.length - 1].url
				.match(Ef)[3] || null) ? decodeURI(a) : a) || "" : "";
			this.domain = a;
			this.h = new H(0, 0, 0, 0);
			this.B = new af(0, 0);
			this.A = new af(0, 0);
			this.D = new H(0, 0, 0, 0);
			this.C = 0;
			this.L = !1;
			this.l = !(!E || !Cm(E).wa);
			this.update(E)
		},
		Tm = function(a, b) {
			b && b.screen && (a.B = new af(b.screen.width, b.screen.height))
		},
		Um = function(a, b) {
			var c = a.h ? new af(a.h.getWidth(), a.h.getHeight()) :
				new af(0, 0);
			b = void 0 === b ? E : b;
			null !== b && b != b.top && (b = b.top);
			var d = 0,
				e = 0;
			try {
				var f = b.document,
					g = f.body,
					h = f.documentElement;
				if ("CSS1Compat" == f.compatMode && h.scrollHeight) d = h.scrollHeight != c.height ? h
					.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
				else {
					var l = h.scrollHeight,
						n = h.scrollWidth,
						m = h.offsetHeight,
						x = h.offsetWidth;
					h.clientHeight != m && (l = g.scrollHeight, n = g.scrollWidth, m = g.offsetHeight, x = g
						.offsetWidth);
					l > c.height ? l > m ? (d = l, e = n) : (d = m, e = x) : l < m ? (d = l, e = n) : (d = m, e = x)
				}
				var u =
					new af(e, d)
			} catch (A) {
				u = new af(-12245933, -12245933)
			}
			a.A = u
		};
	Sm.prototype.update = function(a) {
		a && a.document && (this.D = Gm(!1, a, this.isMobileDevice), this.h = Gm(!0, a, this.isMobileDevice),
			Um(this, a), Tm(this, a))
	};
	var Vm = function() {
			var a = Q();
			if (0 < a.C || a.L) return !0;
			a = Nl().l.isVisible();
			var b = 0 === eh(Bd);
			return a || b
		},
		Q = function() {
			return I(Sm)
		};
	var Wm = function(a) {
		this.o = a;
		this.l = 0;
		this.h = null
	};
	Wm.prototype.cancel = function() {
		Nl().clearTimeout(this.h);
		this.h = null
	};
	Wm.prototype.schedule = function() {
		var a = this;
		this.h = Nl().setTimeout(Vl(P().h.h, lm(143, function() {
			a.l++;
			a.o.sample()
		})), um())
	};
	var Xm = function(a, b, c) {
		this.o = a;
		this.na = void 0 === c ? "na" : c;
		this.C = [];
		this.isInitialized = !1;
		this.A = new vm(-1, !0, this);
		this.h = this;
		this.L = b;
		this.J = this.F = !1;
		this.V = "uk";
		this.N = !1;
		this.B = !0
	};
	Xm.prototype.H = function() {
		return !1
	};
	Xm.prototype.initialize = function() {
		return this.isInitialized = !0
	};
	Xm.prototype.lb = function() {
		return this.h.V
	};
	Xm.prototype.Ab = function() {
		return this.h.J
	};
	var Zm = function(a, b, c) {
		if (!a.J || (void 0 === c ? 0 : c)) a.J = !0, a.V = b, a.L = 0, a.h != a || Ym(a)
	};
	Xm.prototype.getName = function() {
		return this.h.na
	};
	Xm.prototype.Qa = function() {
		return this.h.W()
	};
	Xm.prototype.W = function() {
		return {}
	};
	Xm.prototype.Ha = function() {
		return this.h.L
	};
	var $m = function(a, b) {
		Kb(a.C, b) || (a.C.push(b), b.ob(a.h), b.Ra(a.A), b.Ca() && (a.F = !0))
	};
	Xm.prototype.R = function() {
		var a = Q();
		a.h = Gm(!0, this.o, a.isMobileDevice)
	};
	Xm.prototype.U = function() {
		Tm(Q(), this.o)
	};
	Xm.prototype.X = function() {
		return this.A.h
	};
	var an = function(a) {
		a = a.h;
		a.U();
		a.R();
		var b = Q();
		b.D = Gm(!1, a.o, b.isMobileDevice);
		Um(Q(), a.o);
		a.A.h = a.X()
	};
	Xm.prototype.sample = function() {};
	var bn = function(a, b) {
		a.h != a ? bn(a.h, b) : a.B !== b && (a.B = b, Ym(a))
	};
	Xm.prototype.isActive = function() {
		return this.h.B
	};
	var cn = function(a) {
			a.F = a.C.length ? Gb(a.C, function(b) {
				return b.Ca()
			}) : !1
		},
		dn = function(a) {
			var b = Pb(a.C);
			B(b, function(c) {
				c.Ra(a.A)
			})
		},
		Ym = function(a) {
			var b = Pb(a.C);
			B(b, function(c) {
				c.ob(a.h)
			});
			a.h != a || dn(a)
		};
	k = Xm.prototype;
	k.ob = function(a) {
		var b = this.h;
		this.h = a.Ha() >= this.L ? a : this;
		b !== this.h ? (this.B = this.h.B, Ym(this)) : this.B !== this.h.B && (this.B = this.h.B, Ym(this))
	};
	k.Ra = function(a) {
		if (a.l === this.h) {
			var b = this.A,
				c = this.F;
			if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.o == a.o) b = b.h, c = a.h, c = b ==
				c ? !0 : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c
				.left : !1;
			this.A = a;
			!c && dn(this)
		}
	};
	k.Ca = function() {
		return this.F
	};
	k.dispose = function() {
		this.N = !0
	};
	k.Ia = function() {
		return this.N
	};
	var en = function(a, b, c, d) {
		this.element = a;
		this.h = new H(0, 0, 0, 0);
		this.A = new H(0, 0, 0, 0);
		this.l = b;
		this.featureSet = c;
		this.H = d;
		this.F = !1;
		this.timestamp = -1;
		this.D = new wm(b.A, this.h, new H(0, 0, 0, 0), 0, 0, tm(), 0)
	};
	k = en.prototype;
	k.kc = function() {
		return !0
	};
	k.Hb = function() {};
	k.dispose = function() {
		if (!this.Ia()) {
			var a = this.l;
			Lb(a.C, this);
			a.F && this.Ca() && cn(a);
			this.Hb();
			this.F = !0
		}
	};
	k.Ia = function() {
		return this.F
	};
	k.Qa = function() {
		return this.l.Qa()
	};
	k.Ha = function() {
		return this.l.Ha()
	};
	k.lb = function() {
		return this.l.lb()
	};
	k.Ab = function() {
		return this.l.Ab()
	};
	k.ob = function() {};
	k.Ra = function() {
		this.Pa()
	};
	k.Ca = function() {
		return this.H
	};
	var fn = function(a) {
		this.B = !1;
		this.h = a;
		this.A = Na
	};
	k = fn.prototype;
	k.Ha = function() {
		return this.h.Ha()
	};
	k.lb = function() {
		return this.h.lb()
	};
	k.Ab = function() {
		return this.h.Ab()
	};
	k.create = function(a, b, c) {
		var d = null;
		this.h && (d = this.Ib(a, b, c), $m(this.h, d));
		return d
	};
	k.dd = function() {
		return this.vb()
	};
	k.vb = function() {
		return !1
	};
	k.init = function(a) {
		return this.h.initialize() ? ($m(this.h, this), this.A = a, !0) : !1
	};
	k.ob = function(a) {
		0 == a.Ha() && this.A(a.lb(), this)
	};
	k.Ra = function() {};
	k.Ca = function() {
		return !1
	};
	k.dispose = function() {
		this.B = !0
	};
	k.Ia = function() {
		return this.B
	};
	k.Qa = function() {
		return {}
	};
	var gn = function(a, b, c) {
			this.o = void 0 === c ? 0 : c;
			this.l = a;
			this.h = null == b ? "" : b
		},
		kn = function(a) {
			switch (Math.trunc(a.o)) {
				case -16:
					return -16;
				case -8:
					return -8;
				case 0:
					return 0;
				case 8:
					return 8;
				case 16:
					return 16;
				default:
					return 16
			}
		},
		ln = function(a, b) {
			return a.o < b.o ? !0 : a.o > b.o ? !1 : a.l < b.l ? !0 : a.l > b.l ? !1 : typeof a.h < typeof b.h ? !
				0 : typeof a.h > typeof b.h ? !1 : a.h < b.h
		};
	var mn = function() {
		this.o = 0;
		this.h = [];
		this.l = !1
	};
	mn.prototype.add = function(a, b, c) {
		++this.o;
		a = new gn(a, b, c);
		this.h.push(new gn(a.l, a.h, a.o + this.o / 4096));
		this.l = !0;
		return this
	};
	var nn = function(a, b) {
			B(b.h, function(c) {
				a.add(c.l, c.h, kn(c))
			})
		},
		on = function(a, b) {
			var c = void 0 === c ? 0 : c;
			var d = void 0 === d ? !0 : d;
			Nf(b, function(e, f) {
				d && void 0 === e || a.add(f, e, c)
			});
			return a
		},
		qn = function(a) {
			var b = pn;
			a.l && (Rb(a.h, function(c, d) {
				return ln(d, c) ? 1 : ln(c, d) ? -1 : 0
			}), a.l = !1);
			return Fb(a.h, function(c, d) {
				d = b(d);
				return "" + c + ("" != c && "" != d ? "&" : "") + d
			}, "")
		};
	var pn = function(a) {
		var b = a.l;
		a = a.h;
		return "" === a ? b : "boolean" === typeof a ? a ? b : "" : Array.isArray(a) ? 0 === a.length ? b : b +
			"=" + a.join() : b + "=" + (Kb(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
	};
	var rn = function(a) {
		var b = void 0 === b ? !0 : b;
		this.h = new mn;
		void 0 !== a && nn(this.h, a);
		b && this.h.add("v", Fk, -16)
	};
	rn.prototype.toString = function() {
		var a = "//pagead2.googlesyndication.com//pagead/gen_204",
			b = qn(this.h);
		0 < b.length && (a += "?" + b);
		return a
	};
	var sn = function(a) {
			var b = [],
				c = [];
			Hd(a, function(d, e) {
				if (!(e in Object.prototype) && "undefined" != typeof d) switch (Array.isArray(d) && (d = d
					.join(",")), d = [e, "=", d].join(""), e) {
					case "adk":
					case "r":
					case "tt":
					case "error":
					case "mtos":
					case "tos":
					case "p":
					case "bs":
						b.unshift(d);
						break;
					case "req":
					case "url":
					case "referrer":
					case "iframe_loc":
						c.push(d);
						break;
					default:
						b.push(d)
				}
			});
			return b.concat(c)
		},
		tn = function() {
			if (Fk && "unreleased" !== Fk) return Fk
		},
		un = function(a) {
			var b = void 0 === b ? 4E3 : b;
			a = a.toString();
			if (!/&v=[^&]+/.test(a)) {
				var c =
					tn();
				a = c ? a + "&v=" + encodeURIComponent(c) : a
			}
			a = a.substring(0, b);
			Pl(a)
		};
	var vn = function() {
		this.h = 0
	};
	var wn = function(a, b, c) {
		B(a.o, function(d) {
			var e = a.h;
			if (!d.h && (d.o(b, c), d.A())) {
				d.h = !0;
				var f = d.l(),
					g = new mn;
				g.add("id", "av-js");
				g.add("type", "verif");
				g.add("vtype", d.B);
				d = I(vn);
				g.add("i", d.h++);
				g.add("adk", e);
				on(g, f);
				e = new rn(g);
				un(e)
			}
		})
	};
	var xn = function() {
		this.l = this.o = this.A = this.h = 0
	};
	xn.prototype.update = function(a, b, c) {
		a && (this.h += b, this.l += b, this.A += b, this.o = Math.max(this.o, this.A));
		if (void 0 === c ? !a : c) this.A = 0
	};
	var yn = [1, .75, .5, .3, 0],
		zn = function(a) {
			this.l = a = void 0 === a ? yn : a;
			this.h = Eb(this.l, function() {
				return new xn
			})
		},
		Bn = function(a, b) {
			return An(a, function(c) {
				return c.h
			}, void 0 === b ? !0 : b)
		},
		Dn = function(a, b) {
			return Cn(a, b, function(c) {
				return c.h
			})
		},
		En = function(a, b) {
			return An(a, function(c) {
				return c.o
			}, void 0 === b ? !0 : b)
		},
		Fn = function(a, b) {
			return Cn(a, b, function(c) {
				return c.o
			})
		},
		Gn = function(a, b) {
			return Cn(a, b, function(c) {
				return c.l
			})
		},
		Hn = function(a) {
			B(a.h, function(b) {
				b.l = 0
			})
		};
	zn.prototype.update = function(a, b, c, d, e, f) {
		f = void 0 === f ? !0 : f;
		b = e ? Math.min(a, b) : b;
		for (e = 0; e < this.l.length; e++) {
			var g = this.l[e],
				h = 0 < b && b >= g;
			g = !(0 < a && a >= g) || c;
			this.h[e].update(f && h, d, !f || g)
		}
	};
	var An = function(a, b, c) {
			a = Eb(a.h, function(d) {
				return b(d)
			});
			return c ? a : In(a)
		},
		Cn = function(a, b, c) {
			var d = Jb(a.l, function(e) {
				return b <= e
			});
			return -1 == d ? 0 : c(a.h[d])
		},
		In = function(a) {
			return Eb(a, function(b, c, d) {
				return 0 < c ? d[c] - d[c - 1] : d[c]
			})
		};
	var Jn = function() {
			this.l = new zn;
			this.U = new xn;
			this.H = this.D = -1;
			this.X = 1E3;
			this.Z = new zn([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0]);
			this.M = this.J = -1
		},
		Kn = function(a, b) {
			return En(a.l, void 0 === b ? !0 : b)
		};
	Jn.prototype.update = function(a, b, c, d) {
		this.D = -1 != this.D ? Math.min(this.D, b.Y) : b.Y;
		this.H = Math.max(this.H, b.Y);
		this.J = -1 != this.J ? Math.min(this.J, b.ma) : b.ma;
		this.M = Math.max(this.M, b.ma);
		this.Z.update(b.ma, c.ma, b.h, a, d);
		this.l.update(b.Y, c.Y, b.h, a, d);
		c = d || c.Za != b.Za ? c.isVisible() && b.isVisible() : c.isVisible();
		b = !b.isVisible() || b.h;
		this.U.update(c, a, b)
	};
	Jn.prototype.Ka = function() {
		return this.U.o >= this.X
	};
	var Ln = new H(0, 0, 0, 0);

	function Mn(a, b) {
		b = Nn(b);
		return 0 === b ? 0 : Nn(a) / b
	}

	function Nn(a) {
		return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
	}

	function On(a, b) {
		if (!a || !b) return !1;
		for (var c = 0; null !== a && 100 > c++;) {
			if (a === b) return !0;
			try {
				if (a = yf(a) || a) {
					var d = mf(a),
						e = d && G(d),
						f = e && e.frameElement;
					f && (a = f)
				}
			} catch (g) {
				break
			}
		}
		return !1
	}

	function Pn(a, b, c) {
		if (!a || !b) return !1;
		b = ag($f(a), -b.left, -b.top);
		a = (b.left + b.right) / 2;
		b = (b.top + b.bottom) / 2;
		var d = tg();
		Jf(d.top) && d.top && d.top.document && (d = d.top);
		if (!Dm(d)) return !1;
		a = d.document.elementFromPoint(a, b);
		if (!a) return !1;
		b = (b = (b = mf(c)) && b.defaultView && b.defaultView.frameElement) && On(b, a);
		d = a === c;
		a = !d && a && Bf(a, function(e) {
			return e === c
		});
		return !(b || d || a)
	}

	function Qn(a, b, c, d) {
		return Q().o ? !1 : 0 >= a.getWidth() || 0 >= a.getHeight() ? !0 : c && d ? km(208, function() {
			return Pn(a, b, c)
		}) : !1
	};
	var Rn = new H(0, 0, 0, 0),
		Sn = function(a, b, c) {
			M.call(this);
			this.position = $f(Rn);
			this.Xb = this.Rb();
			this.Fc = -2;
			this.qf = Date.now();
			this.Nd = -1;
			this.lastUpdateTime = b;
			this.Tb = null;
			this.Pb = !1;
			this.cc = null;
			this.opacity = -1;
			this.requestSource = c;
			this.Od = this.Hc = Na;
			this.oa = new Dl;
			this.oa.Ta = a;
			this.oa.h = a;
			this.Ja = !1;
			this.Xa = {
				Jc: null,
				Ic: null
			};
			this.Ld = !0;
			this.Gb = null;
			this.pb = this.Ve = !1;
			P().D++;
			this.la = this.yc();
			this.Md = -1;
			this.aa = null;
			this.Qe = !1;
			a = this.featureSet = new ul;
			vl(a, "od", gl);
			pl(vl(a, "opac", jl));
			pl(vl(a, "sbeos",
				jl));
			pl(vl(a, "prf", jl));
			pl(vl(a, "mwt", jl));
			vl(a, "iogeo", jl);
			(a = this.oa.Ta) && a.getAttribute && !/-[a-z]/.test("googleAvInapp") && (Cl && a.dataset ?
				"googleAvInapp" in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + hf()) : a.getAttribute(
					"data-" + hf())) && (Q().l = !0);
			1 == this.requestSource ? xl(this.featureSet, "od", 1) : xl(this.featureSet, "od", 0)
		};
	t(Sn, M);
	k = Sn.prototype;
	k.O = function() {
		this.oa.h && (this.Xa.Jc && (Ve(this.oa.h, "mouseover", this.Xa.Jc), this.Xa.Jc = null), this.Xa.Ic && (
			Ve(this.oa.h, "mouseout", this.Xa.Ic), this.Xa.Ic = null));
		this.Gb && this.Gb.dispose();
		this.aa && this.aa.dispose();
		delete this.Xb;
		delete this.Hc;
		delete this.Od;
		delete this.oa.Ta;
		delete this.oa.h;
		delete this.Xa;
		delete this.Gb;
		delete this.aa;
		delete this.featureSet;
		M.prototype.O.call(this)
	};
	k.Ya = function() {
		return this.aa ? this.aa.h : this.position
	};
	k.Mc = function(a) {
		P().Mc(a)
	};
	k.Ca = function() {
		return !1
	};
	k.Rb = function() {
		return new Jn
	};
	k.ka = function() {
		return this.Xb
	};
	var Tn = function(a, b) {
			b != a.pb && (a.pb = b, a = Q(), b ? a.C++ : 0 < a.C && a.C--)
		},
		Un = function(a, b) {
			if (a.aa) {
				if (b.getName() === a.aa.getName()) return;
				a.aa.dispose();
				a.aa = null
			}
			b = b.create(a.oa.h, a.featureSet, a.Ca());
			if (b = null != b && b.kc() ? b : null) a.aa = b
		},
		Vn = function(a, b, c) {
			if (!a.Tb || -1 == a.lastUpdateTime || -1 === b.getTimestamp() || -1 === a.Tb.getTimestamp()) return 0;
			a = b.getTimestamp() - a.Tb.getTimestamp();
			return a > c ? 0 : a
		};
	Sn.prototype.zd = function(a) {
		return Vn(this, a, 1E4)
	};
	var Wn = function(a, b, c) {
			if (a.aa) {
				a.aa.Pa();
				var d = a.aa.D,
					e = d.o,
					f = e.h;
				if (null != d.B) {
					var g = d.l;
					a.cc = new $e(g.left - f.left, g.top - f.top)
				}
				f = a.fc() ? Math.max(d.h, d.A) : d.h;
				g = {};
				null !== e.volume && (g.volume = e.volume);
				e = a.zd(d);
				a.Tb = d;
				a.Wc(f, b, c, !1, g, e, d.C)
			}
		},
		Xn = function(a) {
			if (a.Pb && a.Gb) {
				var b = 1 == yl(a.featureSet, "od"),
					c = Q().h,
					d = a.Gb,
					e = a.aa ? a.aa.getName() : "ns",
					f = new af(c.getWidth(), c.getHeight());
				c = a.fc();
				a = {
					mf: e,
					cc: a.cc,
					vf: f,
					fc: c,
					Y: a.la.Y,
					rf: b
				};
				if (b = d.l) {
					b.Pa();
					e = b.D;
					f = e.o.h;
					var g = null,
						h = null;
					null != e.B && f && (g =
						e.l, g = new $e(g.left - f.left, g.top - f.top), h = new af(f.right - f.left, f.bottom -
							f.top));
					e = c ? Math.max(e.h, e.A) : e.h;
					c = {
						mf: b.getName(),
						cc: g,
						vf: h,
						fc: c,
						rf: !1,
						Y: e
					}
				} else c = null;
				c && wn(d, a, c)
			}
		};
	k = Sn.prototype;
	k.Wc = function(a, b, c, d, e, f, g) {
		this.Ja || (this.Pb && (a = this.rc(a, c, e, g), d = d && this.la.Y >= (this.Za() ? .3 : .5), this.Xc(f,
				a, d), this.lastUpdateTime = b, 0 < a.Y && -1 === this.Md && (this.Md = b), -1 == this
			.Nd && this.Ka() && (this.Nd = b), -2 == this.Fc && (this.Fc = Nn(this.Ya()) ? a.Y : -1),
			this.la = a), this.Hc(this))
	};
	k.Xc = function(a, b, c) {
		this.ka().update(a, b, this.la, c)
	};
	k.yc = function() {
		return new il
	};
	k.rc = function(a, b, c, d) {
		c = this.yc();
		c.h = b;
		b = Nl().l;
		b = 0 === eh(Bd) ? -1 : b.isVisible() ? 0 : 1;
		c.l = b;
		c.Y = this.tc(a);
		c.Za = this.Za();
		c.ma = d;
		return c
	};
	k.tc = function(a) {
		return 0 === this.opacity && 1 === yl(this.featureSet, "opac") ? 0 : a
	};
	k.Za = function() {
		return !1
	};
	k.fc = function() {
		return this.Qe || this.Ve
	};
	k.sa = function() {
		return 0
	};
	k.Ka = function() {
		return this.Xb.Ka()
	};
	k.Cd = function() {
		return this.Ja ? 2 : this.Ka() ? 4 : 3
	};
	k.xd = function() {
		return 0
	};
	var Yn = function(a, b, c) {
		b && (a.Hc = b);
		c && (a.Od = c)
	};
	var Zn = "StopIteration" in v ? v.StopIteration : {
			message: "StopIteration",
			stack: ""
		},
		$n = function() {};
	$n.prototype.bc = function() {
		throw Zn;
	};
	$n.prototype.next = function() {
		return ao
	};
	var ao = {
		done: !0,
		value: void 0
	};
	$n.prototype.gb = function() {
		return this
	};
	var bo = function() {
			this.A = this.h = this.o = this.l = this.B = 0
		},
		co = function(a) {
			var b = {};
			b = (b.ptlt = Ya() - a.B, b);
			var c = a.l;
			c && (b.pnk = c);
			(c = a.o) && (b.pnc = c);
			(c = a.A) && (b.pnmm = c);
			(a = a.h) && (b.pns = a);
			return b
		};
	var eo = function() {
		il.call(this);
		this.fullscreen = !1;
		this.volume = void 0;
		this.paused = !1;
		this.mediaTime = -1
	};
	t(eo, il);
	var fo = function(a) {
		return Om(a.volume) && 0 < a.volume
	};
	var go = function() {
			var a = {};
			this.l = (a.vs = [1, 0], a.vw = [0, 1], a.am = [2, 2], a.a = [4, 4], a.f = [8, 8], a.bm = [16, 16], a
				.b = [32, 32], a.avw = [0, 64], a.avs = [64, 0], a.pv = [256, 256], a.gdr = [0, 512], a.p = [0,
					1024
				], a.r = [0, 2048], a.m = [0, 4096], a.um = [0, 8192], a.ef = [0, 16384], a.s = [0, 32768], a
				.pmx = [0, 16777216], a);
			this.h = {};
			for (var b in this.l) 0 < this.l[b][1] && (this.h[b] = 0);
			this.o = 0
		},
		ho = function(a, b) {
			var c = a.l[b],
				d = c[1];
			a.o += c[0];
			0 < d && 0 == a.h[b] && (a.h[b] = 1)
		},
		io = function(a) {
			var b = Od(a.l),
				c = 0,
				d;
			for (d in a.h) Kb(b, d) && 1 == a.h[d] && (c += a.l[d][1], a.h[d] =
				2);
			return c
		},
		jo = function(a) {
			var b = 0,
				c;
			for (c in a.h) {
				var d = a.h[c];
				if (1 == d || 2 == d) b += a.l[c][1]
			}
			return b
		};
	var ko = function() {
		this.l = this.h = 0
	};
	ko.prototype.update = function(a, b) {
		32 <= a || (this.l & 1 << a && !b ? this.h &= ~(1 << a) : this.l & 1 << a || !b || (this.h |= 1 << a),
			this.l |= 1 << a)
	};
	var lo = function() {
		Jn.call(this);
		this.o = new xn;
		this.R = this.L = this.K = 0;
		this.I = -1;
		this.$ = new xn;
		this.B = new xn;
		this.h = new zn;
		this.C = this.A = -1;
		this.F = new xn;
		this.X = 2E3;
		this.N = new ko;
		this.W = new ko;
		this.V = new ko
	};
	t(lo, Jn);
	var mo = function(a, b, c) {
		var d = a.R;
		sm || c || -1 == a.I || (d += b - a.I);
		return d
	};
	lo.prototype.update = function(a, b, c, d) {
		if (!b.paused) {
			Jn.prototype.update.call(this, a, b, c, d);
			var e = fo(b) && fo(c),
				f = .5 <= (d ? Math.min(b.Y, c.Y) : c.Y);
			Om(b.volume) && (this.A = -1 != this.A ? Math.min(this.A, b.volume) : b.volume, this.C = Math.max(
				this.C, b.volume));
			f && (this.K += a, this.L += e ? a : 0);
			this.h.update(b.Y, c.Y, b.h, a, d, e);
			this.o.update(!0, a);
			this.B.update(e, a);
			this.F.update(c.fullscreen, a);
			this.$.update(e && !f, a);
			a = Math.floor(b.mediaTime / 1E3);
			this.N.update(a, b.isVisible());
			this.W.update(a, 1 <= b.Y);
			this.V.update(a, fo(b))
		}
	};
	var no = function() {
		this.l = !1
	};
	no.prototype.B = function(a) {
		this.l || (this.h(a) ? (a = this.L.report(this.o, a), this.A |= a, a = 0 == a) : a = !1, this.l = a)
	};
	var oo = function(a, b) {
		this.l = !1;
		this.o = a;
		this.L = b;
		this.A = 0
	};
	t(oo, no);
	oo.prototype.h = function() {
		return !0
	};
	oo.prototype.C = function() {
		return !1
	};
	oo.prototype.getId = function() {
		var a = this,
			b = Sd(function(c) {
				return c == a.o
			});
		return Bm[b].toString()
	};
	oo.prototype.toString = function() {
		var a = "";
		this.C() && (a += "c");
		this.l && (a += "s");
		0 < this.A && (a += ":" + this.A);
		return this.getId() + a
	};
	var po = function(a, b) {
		oo.call(this, a, b);
		this.D = []
	};
	t(po, oo);
	po.prototype.B = function(a, b) {
		b = void 0 === b ? null : b;
		null != b && this.D.push(b);
		oo.prototype.B.call(this, a)
	};
	var qo = function(a, b, c, d) {
		en.call(this, a, b, c, d)
	};
	t(qo, en);
	k = qo.prototype;
	k.sc = function() {
		if (this.element) {
			var a = this.element,
				b = this.l.h.o;
			try {
				try {
					var c = Mm(a.getBoundingClientRect())
				} catch (n) {
					c = new H(0, 0, 0, 0)
				}
				var d = c.right - c.left,
					e = c.bottom - c.top,
					f = ng(a, b),
					g = f.x,
					h = f.y;
				var l = new H(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g))
			} catch (n) {
				l = $f(Ln)
			}
			this.h = l
		}
	};
	k.md = function() {
		this.A = this.l.A.h
	};
	k.Dd = function(a) {
		return Qn(a, this.A, this.element, 1 == yl(this.featureSet, "od"))
	};
	k.nd = function() {
		this.timestamp = tm()
	};
	k.Pa = function() {
		this.nd();
		this.sc();
		if (this.element && "number" === typeof this.element.videoWidth && "number" === typeof this.element
			.videoHeight) {
			var a = this.element;
			var b = new af(a.videoWidth, a.videoHeight);
			a = this.h;
			var c = a.getWidth(),
				d = a.getHeight(),
				e = b.width;
			b = b.height;
			0 >= e || 0 >= b || 0 >= c || 0 >= d || (e /= b, a = $f(a), e > c / d ? (c /= e, d = (d - c) / 2,
				0 < d && (d = a.top + d, a.top = Math.round(d), a.bottom = Math.round(d + c))) : (d *=
				e, c = Math.round((c - d) / 2), 0 < c && (c = a.left + c, a.left = Math.round(c), a
					.right = Math.round(c + d))));
			this.h = a
		}
		this.md();
		a =
			this.h;
		c = this.A;
		a = a.left <= c.right && c.left <= a.right && a.top <= c.bottom && c.top <= a.bottom ? new H(Math.max(a
			.top, c.top), Math.min(a.right, c.right), Math.min(a.bottom, c.bottom), Math.max(a.left, c
			.left)) : new H(0, 0, 0, 0);
		c = a.top >= a.bottom || a.left >= a.right ? new H(0, 0, 0, 0) : a;
		a = this.l.A;
		b = e = d = 0;
		0 < (this.h.bottom - this.h.top) * (this.h.right - this.h.left) && (this.Dd(c) ? c = new H(0, 0, 0, 0) :
			(d = Q().B, b = new H(0, d.height, d.width, 0), d = Mn(c, this.h), e = Mn(c, Q().h), b = Mn(c,
				b)));
		c = c.top >= c.bottom || c.left >= c.right ? new H(0, 0, 0, 0) : ag(c, -this.h.left,
			-this.h.top);
		Vm() || (e = d = 0);
		this.D = new wm(a, this.h, c, d, e, this.timestamp, b)
	};
	k.getName = function() {
		return this.l.getName()
	};
	var ro = new H(0, 0, 0, 0),
		so = function(a, b, c) {
			en.call(this, null, a, b, c);
			this.C = a.isActive();
			this.B = 0
		};
	t(so, qo);
	k = so.prototype;
	k.kc = function() {
		this.o();
		return !0
	};
	k.Ra = function() {
		qo.prototype.Pa.call(this)
	};
	k.nd = function() {};
	k.sc = function() {};
	k.Pa = function() {
		this.o();
		qo.prototype.Pa.call(this)
	};
	k.ob = function(a) {
		a = a.isActive();
		a !== this.C && (a ? this.o() : (Q().h = new H(0, 0, 0, 0), this.h = new H(0, 0, 0, 0), this.A = new H(
			0, 0, 0, 0), this.timestamp = -1));
		this.C = a
	};

	function to(a) {
		return [a.top, a.left, a.bottom, a.right]
	}
	var uo = {},
		vo = (uo.firstquartile = 0, uo.midpoint = 1, uo.thirdquartile = 2, uo.complete = 3, uo),
		wo = function(a, b, c, d, e, f) {
			e = void 0 === e ? null : e;
			f = void 0 === f ? [] : f;
			Sn.call(this, b, c, d);
			this.vc = 0;
			this.ea = {};
			this.da = new go;
			this.Pd = {};
			this.fa = "";
			this.Ua = null;
			this.ra = !1;
			this.h = [];
			this.$a = e;
			this.C = f;
			this.B = null;
			this.o = -1;
			this.V = this.H = void 0;
			this.K = this.J = 0;
			this.R = -1;
			this.$ = this.Z = !1;
			this.N = this.F = this.l = this.sb = this.ga = 0;
			new zn;
			this.U = this.W = 0;
			this.X = -1;
			this.ca = 0;
			this.D = Oe;
			this.M = [this.Rb()];
			this.Ea = 2;
			this.bb = {};
			this.bb.pause =
				"p";
			this.bb.resume = "r";
			this.bb.skip = "s";
			this.bb.mute = "m";
			this.bb.unmute = "um";
			this.bb.exitfullscreen = "ef";
			this.A = null;
			this.na = !1
		};
	t(wo, Sn);
	wo.prototype.Ca = function() {
		return !0
	};
	var xo = function(a) {
		return void 0 === a ? a : Number(a) ? Hm(a, 3) : 0
	};
	k = wo.prototype;
	k.zd = function(a) {
		return Vn(this, a, Math.max(1E4, this.o / 3))
	};
	k.Wc = function(a, b, c, d, e, f, g) {
		var h = this,
			l = this.D(this) || {};
		Yd(l, e);
		this.o = l.duration || this.o;
		this.H = l.isVpaid || this.H;
		this.V = l.isYouTube || this.V;
		e = yo(this, b);
		1 === zo(this) && (f = e);
		Sn.prototype.Wc.call(this, a, b, c, d, l, f, g);
		this.$a && this.$a.l && B(this.C, function(n) {
			n.B(h)
		})
	};
	k.Xc = function(a, b, c) {
		Sn.prototype.Xc.call(this, a, b, c);
		Ao(this).update(a, b, this.la, c);
		this.$ = fo(this.la) && fo(b); - 1 == this.R && this.Z && (this.R = this.ka().o.h);
		this.da.o = 0;
		a = this.Ka();
		b.isVisible() && ho(this.da, "vs");
		a && ho(this.da, "vw");
		Om(b.volume) && ho(this.da, "am");
		fo(b) && ho(this.da, "a");
		this.pb && ho(this.da, "f"); - 1 != b.l && (ho(this.da, "bm"), 1 == b.l && ho(this.da, "b"));
		fo(b) && b.isVisible() && ho(this.da, "avs");
		this.$ && a && ho(this.da, "avw");
		0 < b.Y && ho(this.da, "pv");
		Bo(this, this.ka().o.h, !0) && ho(this.da, "gdr");
		2E3 <=
			Fn(this.ka().l, 1) && ho(this.da, "pmx")
	};
	k.Rb = function() {
		return new lo
	};
	k.ka = function() {
		return this.Xb
	};
	var Ao = function(a, b) {
		return a.M[null != b && b < a.M.length ? b : a.M.length - 1]
	};
	wo.prototype.yc = function() {
		return new eo
	};
	wo.prototype.rc = function(a, b, c, d) {
		a = Sn.prototype.rc.call(this, a, b, c, void 0 === d ? -1 : d);
		a.fullscreen = this.pb;
		a.paused = 2 == this.ca;
		a.volume = c.volume;
		Om(a.volume) || (this.ga++, b = this.la, Om(b.volume) && (a.volume = b.volume));
		c = c.currentTime;
		a.mediaTime = void 0 !== c && 0 <= c ? c : -1;
		return a
	};
	var zo = function(a) {
			var b = !!yl(P().featureSet, "umt");
			return a.H || !b && !a.V ? 0 : 1
		},
		yo = function(a, b) {
			2 == a.ca ? b = 0 : -1 == a.lastUpdateTime ? b = 0 : (b -= a.lastUpdateTime, b = b > Math.max(1E4, a.o /
				3) ? 0 : b);
			var c = a.D(a) || {};
			c = void 0 !== c.currentTime ? c.currentTime : a.J;
			var d = c - a.J,
				e = 0;
			0 <= d ? (a.K += b, a.U += Math.max(b - d, 0), e = Math.min(d, a.K)) : a.W += Math.abs(d);
			0 != d && (a.K = 0); - 1 == a.X && 0 < d && (a.X = 0 <= rm ? tm() - rm : -1);
			a.J = c;
			return e
		};
	wo.prototype.tc = function(a) {
		return Q().I ? 0 : this.pb ? 1 : Sn.prototype.tc.call(this, a)
	};
	wo.prototype.sa = function() {
		return 1
	};
	wo.prototype.getDuration = function() {
		return this.o
	};
	var Co = function(a, b) {
			Gb(a.C, function(c) {
				return c.o == b.o
			}) || a.C.push(b)
		},
		Do = function(a) {
			var b = Dn(a.ka().h, 1);
			return Bo(a, b)
		},
		Bo = function(a, b, c) {
			return 15E3 <= b ? !0 : a.Z ? (void 0 === c ? 0 : c) ? !0 : 0 < a.o ? b >= a.o / 2 : 0 < a.R ? b >= a
				.R : !1 : !1
		},
		Eo = function(a) {
			var b = {},
				c = Q();
			b.insideIframe = c.o;
			b.unmeasurable = a.Ja;
			b.position = a.Ya();
			b.exposure = a.la.Y;
			b.documentSize = c.A;
			b.viewportSize = new af(c.h.getWidth(), c.h.getHeight());
			null != a.A && (b.presenceData = a.A);
			b.screenShare = a.la.ma;
			return b
		},
		Fo = function(a) {
			var b = Hm(a.la.Y, 2),
				c = a.da.o,
				d = a.la,
				e = Ao(a),
				f = xo(e.A),
				g = xo(e.C),
				h = xo(d.volume),
				l = Hm(e.D, 2),
				n = Hm(e.H, 2),
				m = Hm(d.Y, 2),
				x = Hm(e.J, 2),
				u = Hm(e.M, 2);
			d = Hm(d.ma, 2);
			a = $f(a.Ya());
			a.round();
			e = Kn(e, !1);
			return {
				uf: b,
				Bb: c,
				Yb: f,
				Ub: g,
				wb: h,
				Zb: l,
				Vb: n,
				Y: m,
				$b: x,
				Wb: u,
				ma: d,
				position: a,
				ac: e
			}
		},
		Ho = function(a, b) {
			Go(a.h, b, function() {
				return {
					uf: 0,
					Bb: void 0,
					Yb: -1,
					Ub: -1,
					wb: -1,
					Zb: -1,
					Vb: -1,
					Y: -1,
					$b: -1,
					Wb: -1,
					ma: -1,
					position: void 0,
					ac: []
				}
			});
			a.h[b] = Fo(a)
		},
		Go = function(a, b, c) {
			for (var d = a.length; d < b + 1;) a.push(c()), d++
		},
		Ko = function(a, b, c) {
			var d = a.Pd[b];
			if (null != d) return d;
			d = Io(a, b);
			var e = Sd(function(f) {
				return f == b
			});
			a = Jo(a, d, d, c, vo[Td[e]]);
			"fully_viewable_audible_half_duration_impression" == b && (a.std = "csm");
			return a
		},
		Lo = function(a, b, c) {
			var d = [b];
			if (a != b || c != b) d.unshift(a), d.push(c);
			return d
		},
		Jo = function(a, b, c, d, e) {
			if (a.Ja) return {
				"if": 0,
				vs: 0
			};
			var f = $f(a.Ya());
			f.round();
			var g = Q(),
				h = P(),
				l = a.ka(),
				n = a.aa ? a.aa.getName() : "ns",
				m = {};
			m["if"] = g.o ? 1 : void 0;
			m.sdk = a.B ? a.B : void 0;
			m.t = a.qf;
			m.p = [f.top, f.left, f.bottom, f.right];
			m.tos = Bn(l.l, !1);
			m.mtos = Kn(l);
			m.mcvt = l.U.o;
			m.ps = void 0;
			m.vht =
				mo(l, tm(), 2 == a.ca);
			m.mut = l.$.o;
			m.a = xo(a.la.volume);
			m.mv = xo(l.C);
			m.fs = a.pb ? 1 : 0;
			m.ft = l.F.h;
			m.at = l.B.h;
			m.as = 0 < l.A ? 1 : 0;
			m.atos = Bn(l.h);
			m.ssb = Bn(l.Z, !1);
			m.amtos = En(l.h, !1);
			m.uac = a.ga;
			m.vpt = l.o.h;
			"nio" == n && (m.nio = 1, m.avms = "nio");
			m.gmm = "4";
			m.gdr = Bo(a, l.o.h, !0) ? 1 : 0;
			m.efpf = a.Ea;
			if ("gsv" == n || "nis" == n) f = a.aa, 0 < f.B && (m.nnut = f.B);
			m.tcm = zo(a);
			m.nmt = a.W;
			m.bt = a.U;
			m.pst = a.X;
			m.vpaid = a.H;
			m.dur = a.o;
			m.vmtime = a.J;
			m.is = a.da.o;
			1 <= a.h.length && (m.i0 = a.h[0].Bb, m.a0 = [a.h[0].wb], m.c0 = [a.h[0].Y], m.ss0 = [a.h[0].ma], f = a
				.h[0].position,
				m.p0 = f ? to(f) : void 0);
			2 <= a.h.length && (m.i1 = a.h[1].Bb, m.a1 = Lo(a.h[1].Yb, a.h[1].wb, a.h[1].Ub), m.c1 = Lo(a.h[1].Zb, a
					.h[1].Y, a.h[1].Vb), m.ss1 = Lo(a.h[1].$b, a.h[1].ma, a.h[1].Wb), f = a.h[1].position, m
				.p1 = f ? to(f) : void 0, m.mtos1 = a.h[1].ac);
			3 <= a.h.length && (m.i2 = a.h[2].Bb, m.a2 = Lo(a.h[2].Yb, a.h[2].wb, a.h[2].Ub), m.c2 = Lo(a.h[2].Zb, a
					.h[2].Y, a.h[2].Vb), m.ss2 = Lo(a.h[2].$b, a.h[2].ma, a.h[2].Wb), f = a.h[2].position, m
				.p2 = f ? to(f) : void 0, m.mtos2 = a.h[2].ac);
			4 <= a.h.length && (m.i3 = a.h[3].Bb, m.a3 = Lo(a.h[3].Yb, a.h[3].wb, a.h[3].Ub),
				m.c3 = Lo(a.h[3].Zb, a.h[3].Y, a.h[3].Vb), m.ss3 = Lo(a.h[3].$b, a.h[3].ma, a.h[3].Wb), f = a.h[
					3].position, m.p3 = f ? to(f) : void 0, m.mtos3 = a.h[3].ac);
			m.cs = jo(a.da);
			b && (m.ic = io(a.da), m.dvpt = l.o.l, m.dvs = Gn(l.l, .5), m.dfvs = Gn(l.l, 1), m.davs = Gn(l.h, .5), m
				.dafvs = Gn(l.h, 1), c && (l.o.l = 0, Hn(l.l), Hn(l.h)), a.Ka() && (m.dtos = l.K, m.dav = l.L, m
					.dtoss = a.vc + 1, c && (l.K = 0, l.L = 0, a.vc++)), m.dat = l.B.l, m.dft = l.F.l, c && (l.B
					.l = 0, l.F.l = 0));
			m.ps = [g.A.width, g.A.height];
			m.bs = [g.h.getWidth(), g.h.getHeight()];
			m.scs = [g.B.width, g.B.height];
			m.dom = g.domain;
			a.sb && (m.vds = a.sb);
			if (0 < a.C.length || a.$a) b = Pb(a.C), a.$a && b.push(a.$a), m.pings = Eb(b, function(x) {
				return x.toString()
			});
			b = Eb(Db(a.C, function(x) {
				return x.C()
			}), function(x) {
				return x.getId()
			});
			Qb(b);
			m.ces = b;
			a.l && (m.vmer = a.l);
			a.F && (m.vmmk = a.F);
			a.N && (m.vmiec = a.N);
			m.avms = a.aa ? a.aa.getName() : "ns";
			a.aa && Yd(m, a.aa.Qa());
			d ? (m.c = Hm(a.la.Y, 2), m.ss = Hm(a.la.ma, 2)) : m.tth = tm() - qm;
			m.mc = Hm(l.H, 2);
			m.nc = Hm(l.D, 2);
			m.mv = xo(l.C);
			m.nv = xo(l.A);
			m.lte = Hm(a.Fc, 2);
			d = Ao(a, e);
			Kn(l);
			m.qmtos = Kn(d);
			m.qnc = Hm(d.D, 2);
			m.qmv = xo(d.C);
			m.qnv =
				xo(d.A);
			m.qas = 0 < d.A ? 1 : 0;
			m.qi = a.fa;
			m.avms || (m.avms = "geo");
			m.psm = l.N.l;
			m.psv = l.N.h;
			m.psfv = l.W.h;
			m.psa = l.V.h;
			h = Al(h.featureSet);
			h.length && (m.veid = h);
			a.A && Yd(m, co(a.A));
			m.avas = a.xd();
			m.vs = a.Cd();
			return m
		},
		Io = function(a, b) {
			if (Kb(Am, b)) return !0;
			var c = a.ea[b];
			return void 0 !== c ? (a.ea[b] = !0, !c) : !1
		};
	wo.prototype.Cd = function() {
		return this.Ja ? 2 : Do(this) ? 5 : this.Ka() ? 4 : 3
	};
	wo.prototype.xd = function() {
		return this.na ? 2E3 <= Fn(this.ka().h, 0) ? 4 : 3 : 2
	};
	var Mo = Ya(),
		Po = function() {
			this.h = {};
			var a = G();
			No(this, a, document);
			var b = Oo();
			try {
				if ("1" == b) {
					for (var c = a.parent; c != a.top; c = c.parent) No(this, c, c.document);
					No(this, a.top, a.top.document)
				}
			} catch (d) {}
		},
		Oo = function() {
			var a = document.documentElement;
			try {
				if (!Jf(G().top)) return "2";
				var b = [],
					c = G(a.ownerDocument);
				for (a = c; a != c.top; a = a.parent)
					if (a.frameElement) b.push(a.frameElement);
					else break;
				return b && 0 != b.length ? "1" : "0"
			} catch (d) {
				return "2"
			}
		},
		No = function(a, b, c) {
			Fm(c, "mousedown", function() {
				return Qo(a)
			}, 301);
			Fm(b,
				"scroll",
				function() {
					return Ro(a)
				}, 302);
			Fm(c, "touchmove", function() {
				return So(a)
			}, 303);
			Fm(c, "mousemove", function() {
				return To(a)
			}, 304);
			Fm(c, "keydown", function() {
				return Uo(a)
			}, 305)
		},
		Qo = function(a) {
			Hd(a.h, function(b) {
				1E5 < b.o || ++b.o
			})
		},
		Ro = function(a) {
			Hd(a.h, function(b) {
				1E5 < b.h || ++b.h
			})
		},
		So = function(a) {
			Hd(a.h, function(b) {
				1E5 < b.h || ++b.h
			})
		},
		Uo = function(a) {
			Hd(a.h, function(b) {
				1E5 < b.l || ++b.l
			})
		},
		To = function(a) {
			Hd(a.h, function(b) {
				1E5 < b.A || ++b.A
			})
		};
	var Vo = function() {
			this.h = [];
			this.l = []
		},
		Wo = function(a, b) {
			return Hb(a.h, function(c) {
				return c.fa == b
			})
		},
		Xo = function(a, b) {
			return b ? Hb(a.h, function(c) {
				return c.oa.Ta == b
			}) : null
		},
		Yo = function(a, b) {
			return Hb(a.l, function(c) {
				return 2 == c.sa() && c.fa == b
			})
		},
		$o = function() {
			var a = Zo;
			return 0 == a.h.length ? a.l : 0 == a.l.length ? a.h : Ob(a.l, a.h)
		};
	Vo.prototype.reset = function() {
		this.h = [];
		this.l = []
	};
	var ap = function(a, b) {
			a = 1 == b.sa() ? a.h : a.l;
			var c = Ib(a, function(d) {
				return d == b
			});
			return -1 != c ? (a.splice(c, 1), b.aa && b.aa.Hb(), b.dispose(), !0) : !1
		},
		bp = function(a) {
			var b = Zo;
			if (ap(b, a)) {
				switch (a.sa()) {
					case 0:
						var c = function() {
							return null
						};
					case 2:
						c = function() {
							return Yo(b, a.fa)
						};
						break;
					case 1:
						c = function() {
							return Wo(b, a.fa)
						}
				}
				for (var d = c(); d; d = c()) ap(b, d)
			}
		},
		cp = function(a) {
			var b = Zo;
			a = Db(a, function(c) {
				return !Xo(b, c.oa.Ta)
			});
			b.h.push.apply(b.h, ha(a))
		},
		dp = function(a) {
			var b = Zo,
				c = [];
			B(a, function(d) {
				Gb(b.h, function(e) {
					return e.oa.Ta ===
						d.oa.Ta && e.fa === d.fa
				}) || (b.h.push(d), c.push(d))
			})
		},
		Zo = I(Vo);
	var ep = function() {
			this.h = this.l = null
		},
		fp = function(a, b) {
			if (null == a.l) return !1;
			var c = function(d, e) {
				b(d, e)
			};
			a.h = Hb(a.l, function(d) {
				return null != d && d.dd()
			});
			a.h && (a.h.init(c) ? an(a.h.h) : b(a.h.h.lb(), a.h));
			return null != a.h
		};
	var hp = function(a) {
		a = gp(a);
		fn.call(this, a.length ? a[a.length - 1] : new Xm(E, 0));
		this.o = a;
		this.l = null
	};
	t(hp, fn);
	k = hp.prototype;
	k.getName = function() {
		return (this.l ? this.l : this.h).getName()
	};
	k.Qa = function() {
		return (this.l ? this.l : this.h).Qa()
	};
	k.Ha = function() {
		return (this.l ? this.l : this.h).Ha()
	};
	k.init = function(a) {
		var b = !1;
		B(this.o, function(c) {
			c.initialize() && (b = !0)
		});
		b && (this.A = a, $m(this.h, this));
		return b
	};
	k.dispose = function() {
		B(this.o, function(a) {
			a.dispose()
		});
		fn.prototype.dispose.call(this)
	};
	k.dd = function() {
		return Gb(this.o, function(a) {
			return a.H()
		})
	};
	k.vb = function() {
		return Gb(this.o, function(a) {
			return a.H()
		})
	};
	k.Ib = function(a, b, c) {
		return new qo(a, this.h, b, c)
	};
	k.Ra = function(a) {
		this.l = a.l
	};
	var gp = function(a) {
		if (!a.length) return [];
		a = Db(a, function(c) {
			return null != c && c.H()
		});
		for (var b = 1; b < a.length; b++) $m(a[b - 1], a[b]);
		return a
	};
	var ip = {
			threshold: [0, .3, .5, .75, 1]
		},
		jp = function(a, b, c, d) {
			en.call(this, a, b, c, d);
			this.L = this.I = this.B = this.C = this.o = null
		};
	t(jp, qo);
	jp.prototype.kc = function() {
		var a = this;
		this.L || (this.L = tm());
		if (km(298, function() {
				return kp(a)
			})) return !0;
		Zm(this.l, "msf");
		return !1
	};
	jp.prototype.Hb = function() {
		if (this.o && this.element) try {
			this.o.unobserve(this.element), this.C ? (this.C.unobserve(this.element), this.C = null) : this
				.B && (this.B.disconnect(), this.B = null)
		} catch (a) {}
	};
	var lp = function(a) {
			return a.o && a.o.takeRecords ? a.o.takeRecords() : []
		},
		kp = function(a) {
			if (!a.element) return !1;
			var b = a.element,
				c = a.l.h.o,
				d = P().h.h;
			a.o = new c.IntersectionObserver(Vl(d, function(e) {
				return mp(a, e)
			}), ip);
			d = Vl(d, function() {
				a.o.unobserve(b);
				a.o.observe(b);
				mp(a, lp(a))
			});
			c.ResizeObserver ? (a.C = new c.ResizeObserver(d), a.C.observe(b)) : c.MutationObserver && (a.B = new v
				.MutationObserver(d), a.B.observe(b, {
					attributes: !0,
					childList: !0,
					characterData: !0,
					subtree: !0
				}));
			a.o.observe(b);
			mp(a, lp(a));
			return !0
		},
		mp =
		function(a, b) {
			try {
				if (b.length) {
					a.I || (a.I = tm());
					var c = np(b),
						d = ng(a.element, a.l.h.o),
						e = d.x,
						f = d.y;
					a.h = new H(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c
						.boundingClientRect.height, Math.round(e));
					var g = Mm(c.intersectionRect);
					a.A = ag(g, a.h.left - g.left, a.h.top - g.top)
				}
			} catch (h) {
				a.Hb(), mm(299, h)
			}
		},
		np = function(a) {
			return Fb(a, function(b, c) {
				return b.time > c.time ? b : c
			}, a[0])
		};
	k = jp.prototype;
	k.Pa = function() {
		var a = lp(this);
		0 < a.length && mp(this, a);
		qo.prototype.Pa.call(this)
	};
	k.sc = function() {};
	k.Dd = function() {
		return !1
	};
	k.md = function() {};
	k.Qa = function() {
		var a = {};
		return Object.assign(this.l.Qa(), (a.niot_obs = this.L, a.niot_cbk = this.I, a))
	};
	k.getName = function() {
		return "nio"
	};
	var op = function(a) {
		a = void 0 === a ? E : a;
		fn.call(this, new Xm(a, 2))
	};
	t(op, fn);
	op.prototype.getName = function() {
		return "nio"
	};
	op.prototype.vb = function() {
		return !Q().l && null != this.h.h.o.IntersectionObserver
	};
	op.prototype.Ib = function(a, b, c) {
		return new jp(a, this.h, b, c)
	};
	var qp = function() {
		var a = pp();
		Xm.call(this, E.top, a, "geo")
	};
	t(qp, Xm);
	qp.prototype.X = function() {
		return Q().h
	};
	qp.prototype.H = function() {
		var a = pp();
		this.L !== a && (this.h != this && a > this.h.L && (this.h = this, Ym(this)), this.L = a);
		return 2 == a
	};
	var pp = function() {
		P();
		var a = Q();
		return a.o || a.l ? 0 : 2
	};
	var rp = function() {};
	var sp = function() {
			this.done = !1;
			this.h = {
				qe: 0,
				jd: 0,
				Dh: 0,
				td: 0,
				Bc: -1,
				xe: 0,
				we: 0,
				ye: 0
			};
			this.B = null;
			this.C = !1;
			this.o = null;
			this.D = 0;
			this.l = new Wm(this)
		},
		vp = function() {
			var a = tp;
			a.C || (a.C = !0, up(a, function() {
				return a.A.apply(a, ha(Ga.apply(0, arguments)))
			}), a.A())
		};
	sp.prototype.sample = function() {
		wp(this, $o(), !1)
	};
	var xp = function() {
			I(rp);
			var a = I(ep);
			null != a.h && a.h.h ? an(a.h.h) : Q().update(E)
		},
		wp = function(a, b, c) {
			if (!a.done && (a.l.cancel(), 0 != b.length)) {
				a.o = null;
				try {
					xp();
					var d = tm(),
						e = P();
					e.C = d;
					if (null != I(ep).h)
						for (e = 0; e < b.length; e++) Wn(b[e], d, c);
					else bm(dm, "", {
						strategy_not_selected: 1,
						bin: e.l
					}, !0, void 0);
					for (d = 0; d < b.length; d++) Xn(b[d]);
					++a.h.td;
					P()
				} finally {
					c ? B(b, function(f) {
						f.la.Y = 0
					}) : a.l.schedule()
				}
			}
		},
		up = function(a, b) {
			if (!a.B) {
				b = lm(142, b);
				Nl();
				var c = fh(Bd);
				c && Ue(Bd, c, b, {
					capture: !1
				}) && (a.B = b)
			}
		};
	sp.prototype.A = function() {
		var a = Vm(),
			b = tm();
		a ? (sm || (om = b, B(Zo.h, function(c) {
			var d = c.ka();
			d.R = mo(d, b, 1 != c.ca)
		})), sm = !0) : (this.D = yp(this, b), sm = !1, qm = b, B(Zo.h, function(c) {
			c.Pb && (c.ka().I = b)
		}));
		wp(this, $o(), !a)
	};
	var zp = function() {
			var a = I(ep);
			if (null != a.h) {
				var b = a.h;
				B($o(), function(c) {
					return Un(c, b)
				})
			}
		},
		yp = function(a, b) {
			a = a.D;
			sm && (a += b - om);
			return a
		},
		Ap = function(a) {
			var b = tp;
			a = void 0 === a ? function() {
				return {}
			} : a;
			hm.Rc("av-js");
			dm.h = .01;
			jm([function(c) {
				var d = P(),
					e = {};
				e = (e.bin = d.l, e.type = "error", e);
				d = zl(d.featureSet);
				if (!b.o) {
					var f = E.document,
						g = 0 <= pm ? tm() - pm : -1,
						h = tm(); - 1 == b.h.Bc && (g = h);
					var l = Q(),
						n = P(),
						m = zl(n.featureSet),
						x = $o();
					try {
						if (0 < x.length) {
							var u = l.h;
							u && (m.bs = [u.getWidth(), u.getHeight()]);
							var A = l.A;
							A && (m.ps = [A.width, A.height]);
							E.screen && (m.scs = [E.screen.width, E.screen.height])
						} else m.url = encodeURIComponent(E.location.href.substring(0, 512)), f
							.referrer && (m.referrer = encodeURIComponent(f.referrer.substring(0,
							512)));
						m.tt = g;
						m.pt = pm;
						m.bin = n.l;
						void 0 !== E.google_osd_load_pub_page_exp && (m.olpp = E
							.google_osd_load_pub_page_exp);
						m.deb = [1, b.h.qe, b.h.jd, b.h.td, b.h.Bc, 0, b.l.l, b.h.xe, b.h.we, b.h.ye]
							.join("-");
						m.tvt = yp(b, h);
						l.l && (m.inapp = 1);
						if (null !== E && E != E.top) {
							0 < x.length && (m.iframe_loc = encodeURIComponent(E.location.href
								.substring(0,
									512)));
							var z = l.D;
							m.is = [z.getWidth(), z.getHeight()]
						}
					} catch (T) {
						m.error = 1
					}
					b.o = m
				}
				A = b.o;
				u = {};
				for (var O in A) u[O] = A[O];
				O = P().h;
				1 == yl(O.o, "prf") ? (A = new Sl, z = O.h, f = 0, -1 < z.h && (f = z.o.h.now() - z.h),
					A = rd(A, 1, z.A + f, 0), z = O.h, A = rd(A, 5, -1 < z.h ? z.l + 1 : z.l, 0),
					A = rd(A, 2, O.l.h.o(), 0), A = rd(A, 3, O.l.h.l(), 0), O = rd(A, 4, O.l.h.h(),
						0), A = {}, O = (A.pf = zc(Ad(O, Tl)), A)) : O = {};
				Yd(u, O);
				Yd(c, e, d, u, a());
				if (e = tn()) d = {}, Yd(c, (d.v = encodeURIComponent(e), d))
			}])
		},
		tp = I(sp);
	var Bp = null,
		Cp = "",
		Dp = !1,
		Ep = function() {
			var a = Bp || E;
			if (!a) return "";
			var b = [];
			if (!a.location || !a.location.href) return "";
			b.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
			a.document && a.document.referrer && b.push("referrer=" + encodeURIComponent(a.document.referrer
				.substring(0, 512)));
			return b.join("&")
		};
	var Fp = function(a) {
			return function(b) {
				return void 0 === b[a] ? 0 : b[a]
			}
		},
		Hp = function() {
			var a = [0, 2, 4];
			return function(b) {
				b = b.tos;
				if (Array.isArray(b)) {
					for (var c = Array(b.length), d = 0; d < b.length; d++) c[d] = 0 < d ? c[d - 1] + b[d] : b[
						d];
					return void 0 !== a ? Gp(c, a) : c
				}
			}
		},
		Ip = function(a, b, c, d) {
			c = void 0 === c ? !0 : c;
			d = void 0 === d ? function() {
				return !0
			} : d;
			return function(e) {
				var f = e[a];
				if (Array.isArray(f) && d(e)) return Gp(f, b, c)
			}
		},
		Jp = function(a, b) {
			return function(c) {
				return b(c) ? c[a] : void 0
			}
		},
		Kp = function(a) {
			return function(b) {
				for (var c =
						0; c < a.length; c++)
					if (a[c] === b.e || void 0 === a[c] && !b.hasOwnProperty("e")) return !0;
				return !1
			}
		},
		Gp = function(a, b, c) {
			return void 0 === c || c ? Db(a, function(d, e) {
				return Kb(b, e)
			}) : Eb(b, function(d, e, f) {
				return a.slice(0 < e ? f[e - 1] + 1 : 0, d + 1).reduce(function(g, h) {
					return g + h
				}, 0)
			})
		};
	var Lp = Kp([void 0, 1, 2, 3, 4, 8, 16]),
		Mp = Kp([void 0, 4, 8, 16]),
		Np = {
			sv: "sv",
			cb: "cb",
			e: "e",
			nas: "nas",
			msg: "msg",
			"if": "if",
			sdk: "sdk",
			p: "p",
			p0: Jp("p0", Mp),
			p1: Jp("p1", Mp),
			p2: Jp("p2", Mp),
			p3: Jp("p3", Mp),
			cp: "cp",
			tos: "tos",
			mtos: "mtos",
			amtos: "amtos",
			mtos1: Ip("mtos1", [0, 2, 4], !1, Mp),
			mtos2: Ip("mtos2", [0, 2, 4], !1, Mp),
			mtos3: Ip("mtos3", [0, 2, 4], !1, Mp),
			mcvt: "mcvt",
			ps: "ps",
			scs: "scs",
			bs: "bs",
			vht: "vht",
			mut: "mut",
			a: "a",
			a0: Jp("a0", Mp),
			a1: Jp("a1", Mp),
			a2: Jp("a2", Mp),
			a3: Jp("a3", Mp),
			ft: "ft",
			dft: "dft",
			at: "at",
			dat: "dat",
			as: "as",
			vpt: "vpt",
			gmm: "gmm",
			std: "std",
			efpf: "efpf",
			swf: "swf",
			nio: "nio",
			px: "px",
			nnut: "nnut",
			vmer: "vmer",
			vmmk: "vmmk",
			vmiec: "vmiec",
			nmt: "nmt",
			tcm: "tcm",
			bt: "bt",
			pst: "pst",
			vpaid: "vpaid",
			dur: "dur",
			vmtime: "vmtime",
			dtos: "dtos",
			dtoss: "dtoss",
			dvs: "dvs",
			dfvs: "dfvs",
			dvpt: "dvpt",
			fmf: "fmf",
			vds: "vds",
			is: "is",
			i0: "i0",
			i1: "i1",
			i2: "i2",
			i3: "i3",
			ic: "ic",
			cs: "cs",
			c: "c",
			c0: Jp("c0", Mp),
			c1: Jp("c1", Mp),
			c2: Jp("c2", Mp),
			c3: Jp("c3", Mp),
			mc: "mc",
			nc: "nc",
			mv: "mv",
			nv: "nv",
			qmt: Jp("qmtos", Lp),
			qnc: Jp("qnc", Lp),
			qmv: Jp("qmv", Lp),
			qnv: Jp("qnv", Lp),
			raf: "raf",
			rafc: "rafc",
			lte: "lte",
			ces: "ces",
			tth: "tth",
			femt: "femt",
			femvt: "femvt",
			emc: "emc",
			emuc: "emuc",
			emb: "emb",
			avms: "avms",
			nvat: "nvat",
			qi: "qi",
			psm: "psm",
			psv: "psv",
			psfv: "psfv",
			psa: "psa",
			pnk: "pnk",
			pnc: "pnc",
			pnmm: "pnmm",
			pns: "pns",
			ptlt: "ptlt",
			pngs: "pings",
			veid: "veid",
			ssb: "ssb",
			ss0: Jp("ss0", Mp),
			ss1: Jp("ss1", Mp),
			ss2: Jp("ss2", Mp),
			ss3: Jp("ss3", Mp),
			dc_rfl: "urlsigs",
			obd: "obd",
			omidp: "omidp",
			omidr: "omidr",
			omidv: "omidv",
			omida: "omida",
			omids: "omids",
			omidpv: "omidpv",
			omidam: "omidam",
			omidct: "omidct",
			omidia: "omidia"
		};
	Object.assign({}, Np, {
		avid: Ne("audio"),
		avas: "avas",
		vs: "vs"
	});
	var Op = {
			c: Fp("c"),
			at: "at",
			atos: Ip("atos", [0, 2, 4]),
			ta: function(a, b) {
				return function(c) {
					if (void 0 === c[a]) return b
				}
			}("tth", "1"),
			a: "a",
			dur: "dur",
			p: "p",
			tos: Hp(),
			j: "dom",
			mtos: Ip("mtos", [0, 2, 4]),
			gmm: "gmm",
			gdr: "gdr",
			ss: Fp("ss"),
			vsv: Ne("w2"),
			t: "t"
		},
		Pp = {
			atos: "atos",
			avt: Ip("atos", [2]),
			davs: "davs",
			dafvs: "dafvs",
			dav: "dav",
			ss: Fp("ss"),
			t: "t"
		},
		Qp = {
			a: "a",
			tos: Hp(),
			at: "at",
			c: Fp("c"),
			mtos: Ip("mtos", [0, 2, 4]),
			dur: "dur",
			fs: "fs",
			p: "p",
			vpt: "vpt",
			vsv: Ne("ias_w2"),
			dom: "dom",
			gmm: "gmm",
			gdr: "gdr",
			t: "t"
		},
		Rp = {
			tos: Hp(),
			at: "at",
			c: Fp("c"),
			mtos: Ip("mtos", [0, 2, 4]),
			p: "p",
			vpt: "vpt",
			vsv: Ne("dv_w4"),
			gmm: "gmm",
			gdr: "gdr",
			dom: "dom",
			t: "t",
			mv: "mv",
			qmpt: Ip("qmtos", [0, 2, 4]),
			qvs: function(a, b) {
				return function(c) {
					var d = c[a];
					if ("number" === typeof d) return Eb(b, function(e) {
						return 0 < d && d >= e ? 1 : 0
					})
				}
			}("qnc", [1, .5, 0]),
			qmv: "qmv",
			qa: "qas",
			a: "a"
		};

	function Sp() {
		var a = "av.default_js_unreleased_RCxx".match(/_(\d{8})_RC\d+$/) || "av.default_js_unreleased_RCxx".match(
				/_(\d{8})_\d+_\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+\.\d+$/) ||
			"av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_RC\d+$/),
			b;
		if (2 == (null == (b = a) ? void 0 : b.length)) return a[1];
		a = "av.default_js_unreleased_RCxx".match(/.*_(\d{2})\.(\d{4})\.\d+_RC\d+$/);
		var c;
		return 3 == (null == (c = a) ? void 0 : c.length) ? "20" + a[1] + a[2] : "914"
	}
	var Tp = function() {
			return "ima_html5_sdk".includes("ima_html5_sdk") ? {
				Aa: "ima",
				version: "914"
			} : "ima_html5_sdk".includes("ima_native_sdk") ? {
				Aa: "nima",
				version: "914"
			} : "ima_html5_sdk".includes("admob-native-video-javascript") ? {
				Aa: "an",
				version: "914"
			} : "av.default_js_unreleased_RCxx".includes("cast_js_sdk") ? {
				Aa: "cast",
				version: Sp()
			} : "av.default_js_unreleased_RCxx".includes("youtube.player.web") ? {
				Aa: "yw",
				version: Sp()
			} : "av.default_js_unreleased_RCxx".includes("outstream_web_client") ? {
				Aa: "out",
				version: Sp()
			} : "av.default_js_unreleased_RCxx".includes("drx_rewarded_web") ? {
				Aa: "r",
				version: Sp()
			} : "av.default_js_unreleased_RCxx".includes("gam_native_web_video") ? {
				Aa: "n",
				version: Sp()
			} : "av.default_js_unreleased_RCxx".includes("admob_interstitial_video") ? {
				Aa: "int",
				version: Sp()
			} : {
				Aa: "j",
				version: "914"
			}
		},
		Up = Tp().Aa,
		Vp = Tp().version;
	var Xp = function(a, b) {
			var c = {
				sv: Vp,
				cb: Up
			};
			c.nas = Zo.h.length;
			c.msg = a;
			void 0 !== b && (a = Wp(b)) && (c.e = Bm[a]);
			return c
		},
		Yp = function(a) {
			return 0 == a.lastIndexOf("custom_metric_viewable", 0)
		},
		Wp = function(a) {
			var b = Yp(a) ? "custom_metric_viewable" : a.toLowerCase();
			return Sd(function(c) {
				return c == b
			})
		};
	var Zp = {
			Vf: "visible",
			Bf: "audible",
			fh: "time",
			hh: "timetype"
		},
		$p = {
			visible: function(a) {
				return /^(100|[0-9]{1,2})$/.test(a)
			},
			audible: function(a) {
				return "0" == a || "1" == a
			},
			timetype: function(a) {
				return "mtos" == a || "tos" == a
			},
			time: function(a) {
				return /^(100|[0-9]{1,2})%$/.test(a) || /^([0-9])+ms$/.test(a)
			}
		},
		aq = function() {
			this.h = void 0;
			this.l = !1;
			this.o = 0;
			this.A = -1;
			this.B = "tos"
		},
		bq = function(a) {
			try {
				var b = a.split(",");
				return b.length > Od(Zp).length ? null : Fb(b, function(c, d) {
					d = d.toLowerCase().split("=");
					if (2 != d.length || void 0 ===
						$p[d[0]] || !$p[d[0]](d[1])) throw Error("Entry (" + d[0] + ", " + d[1] +
						") is invalid.");
					c[d[0]] = d[1];
					return c
				}, {})
			} catch (c) {
				return null
			}
		},
		cq = function(a, b) {
			if (void 0 == a.h) return 0;
			switch (a.B) {
				case "mtos":
					return a.l ? Fn(b.h, a.h) : Fn(b.l, a.h);
				case "tos":
					return a.l ? Dn(b.h, a.h) : Dn(b.l, a.h)
			}
			return 0
		};
	var dq = function(a, b, c, d) {
		oo.call(this, b, d);
		this.D = a;
		this.I = c
	};
	t(dq, oo);
	dq.prototype.getId = function() {
		return this.D
	};
	dq.prototype.C = function() {
		return !0
	};
	dq.prototype.h = function(a) {
		var b = a.ka(),
			c = a.getDuration();
		return Gb(this.I, function(d) {
			if (void 0 != d.h) var e = cq(d, b);
			else b: {
				switch (d.B) {
					case "mtos":
						e = d.l ? b.B.o : b.o.h;
						break b;
					case "tos":
						e = d.l ? b.B.h : b.o.h;
						break b
				}
				e = 0
			}
			0 == e ? d = !1 : (d = -1 != d.o ? d.o : void 0 !== c && 0 < c ? d.A * c : -1, d = -1 !=
				d && e >= d);
			return d
		})
	};
	var eq = function() {};
	var fq = function() {};
	t(fq, eq);
	fq.prototype.l = function() {
		return null
	};
	fq.prototype.o = function() {
		return []
	};
	var gq = function() {
		this.l = this.A = this.C = this.B = this.o = this.h = ""
	};
	var hq = function() {},
		iq = function(a, b, c, d, e) {
			var f = {};
			if (void 0 !== a)
				if (null != b)
					for (var g in b) {
						var h = b[g];
						g in Object.prototype || null != h && (f[g] = "function" === typeof h ? h(a) : a[h])
					} else Yd(f, a);
			void 0 !== c && Yd(f, c);
			a = qn(on(new mn, f));
			0 < a.length && void 0 !== d && void 0 !== e && (e = e(a), a += "&" + d + "=" + e);
			return a
		};
	var jq = function() {};
	t(jq, hq);
	jq.prototype.h = function(a) {
		var b = new gq;
		b.h = iq(a, Np);
		b.o = iq(a, Pp);
		return b
	};
	var kq = function(a) {
		oo.call(this, "fully_viewable_audible_half_duration_impression", a)
	};
	t(kq, oo);
	kq.prototype.h = function(a) {
		return Do(a)
	};
	var lq = function(a) {
		this.h = a
	};
	t(lq, eq);
	var mq = function(a, b) {
		oo.call(this, a, b)
	};
	t(mq, oo);
	mq.prototype.h = function(a) {
		return a.ka().Ka()
	};
	var nq = function(a) {
		po.call(this, "measurable_impression", a)
	};
	t(nq, po);
	nq.prototype.h = function(a) {
		var b = Kb(this.D, yl(P().featureSet, "ovms"));
		return !a.Ja && (0 != a.ca || b)
	};
	var oq = function() {
		lq.apply(this, arguments)
	};
	t(oq, lq);
	oq.prototype.l = function() {
		return new nq(this.h)
	};
	oq.prototype.o = function() {
		return [new mq("viewable_impression", this.h), new kq(this.h)]
	};
	var pq = function(a, b, c) {
		so.call(this, a, b, c)
	};
	t(pq, so);
	pq.prototype.o = function() {
		var a = Ma("ima.admob.getViewability"),
			b = yl(this.featureSet, "queryid");
		"function" === typeof a && b && a(b)
	};
	pq.prototype.getName = function() {
		return "gsv"
	};
	var qq = function(a) {
		a = void 0 === a ? E : a;
		fn.call(this, new Xm(a, 2))
	};
	t(qq, fn);
	qq.prototype.getName = function() {
		return "gsv"
	};
	qq.prototype.vb = function() {
		var a = Q();
		P();
		return a.l && !1
	};
	qq.prototype.Ib = function(a, b, c) {
		return new pq(this.h, b, c)
	};
	var rq = function(a, b, c) {
		so.call(this, a, b, c)
	};
	t(rq, so);
	rq.prototype.o = function() {
		var a = this,
			b = Ma("ima.bridge.getNativeViewability"),
			c = yl(this.featureSet, "queryid");
		"function" === typeof b && c && b(c, function(d) {
			Ud(d) && a.B++;
			var e = d.opt_nativeViewVisibleBounds || {},
				f = d.opt_nativeViewHidden;
			a.h = Nm(d.opt_nativeViewBounds || {});
			var g = a.l.A;
			g.h = f ? $f(ro) : Nm(e);
			a.timestamp = d.opt_nativeTime || -1;
			Q().h = g.h;
			d = d.opt_nativeVolume;
			void 0 !== d && (g.volume = d)
		})
	};
	rq.prototype.getName = function() {
		return "nis"
	};
	var sq = function(a) {
		a = void 0 === a ? E : a;
		fn.call(this, new Xm(a, 2))
	};
	t(sq, fn);
	sq.prototype.getName = function() {
		return "nis"
	};
	sq.prototype.vb = function() {
		var a = Q();
		P();
		return a.l && !1
	};
	sq.prototype.Ib = function(a, b, c) {
		return new rq(this.h, b, c)
	};
	var tq = function() {
		Xm.call(this, E, 2, "mraid");
		this.Z = 0;
		this.K = this.M = !1;
		this.I = null;
		this.l = Cm(this.o);
		this.A.h = new H(0, 0, 0, 0);
		this.$ = !1
	};
	t(tq, Xm);
	tq.prototype.H = function() {
		return null != this.l.wa
	};
	tq.prototype.W = function() {
		var a = {};
		this.Z && (a.mraid = this.Z);
		this.M && (a.mlc = 1);
		a.mtop = this.l.lf;
		this.I && (a.mse = this.I);
		this.$ && (a.msc = 1);
		a.mcp = this.l.compatibility;
		return a
	};
	tq.prototype.D = function(a) {
		var b = Ga.apply(1, arguments);
		try {
			return this.l.wa[a].apply(this.l.wa, b)
		} catch (c) {
			mm(538, c, .01, function(d) {
				d.method = a
			})
		}
	};
	var uq = function(a, b, c) {
		a.D("addEventListener", b, c)
	};
	tq.prototype.initialize = function() {
		var a = this;
		if (this.isInitialized) return !this.Ab();
		this.isInitialized = !0;
		if (2 === this.l.compatibility) return this.I = "ng", Zm(this, "w"), !1;
		if (1 === this.l.compatibility) return this.I = "mm", Zm(this, "w"), !1;
		Q().L = !0;
		this.o.document.readyState && "complete" == this.o.document.readyState ? vq(this) : Fm(this.o, "load",
			function() {
				Nl().setTimeout(lm(292, function() {
					return vq(a)
				}), 100)
			}, 292);
		return !0
	};
	var vq = function(a) {
			P().B = !!a.D("isViewable");
			uq(a, "viewableChange", wq);
			"loading" === a.D("getState") ? uq(a, "ready", xq) : yq(a)
		},
		yq = function(a) {
			"string" === typeof a.l.wa.AFMA_LIDAR ? (a.M = !0, zq(a)) : (a.l.compatibility = 3, a.I = "nc", Zm(a,
				"w"))
		},
		zq = function(a) {
			a.K = !1;
			var b = 1 == yl(P().featureSet, "rmmt"),
				c = !!a.D("isViewable");
			(b ? !c : 1) && Nl().setTimeout(lm(524, function() {
				a.K || (Aq(a), mm(540, Error()), a.I = "mt", Zm(a, "w"))
			}), 500);
			Bq(a);
			uq(a, a.l.wa.AFMA_LIDAR, Cq)
		},
		Bq = function(a) {
			var b = 1 == yl(P().featureSet, "sneio"),
				c = void 0 !==
				a.l.wa.AFMA_LIDAR_EXP_1,
				d = void 0 !== a.l.wa.AFMA_LIDAR_EXP_2;
			(b = b && d) && (a.l.wa.AFMA_LIDAR_EXP_2 = !0);
			c && (a.l.wa.AFMA_LIDAR_EXP_1 = !b)
		},
		Aq = function(a) {
			a.D("removeEventListener", a.l.wa.AFMA_LIDAR, Cq);
			a.M = !1
		};
	tq.prototype.R = function() {
		var a = Q(),
			b = Dq(this, "getMaxSize");
		a.h = new H(0, b.width, b.height, 0)
	};
	tq.prototype.U = function() {
		Q().B = Dq(this, "getScreenSize")
	};
	var Dq = function(a, b) {
		if ("loading" === a.D("getState")) return new af(-1, -1);
		b = a.D(b);
		if (!b) return new af(-1, -1);
		a = parseInt(b.width, 10);
		b = parseInt(b.height, 10);
		return isNaN(a) || isNaN(b) ? new af(-1, -1) : new af(a, b)
	};
	tq.prototype.dispose = function() {
		Aq(this);
		Xm.prototype.dispose.call(this)
	};
	var xq = function() {
			try {
				var a = I(tq);
				a.D("removeEventListener", "ready", xq);
				yq(a)
			} catch (b) {
				mm(541, b)
			}
		},
		Cq = function(a, b) {
			try {
				var c = I(tq);
				c.K = !0;
				var d = a ? new H(a.y, a.x + a.width, a.y + a.height, a.x) : new H(0, 0, 0, 0);
				var e = tm(),
					f = Vm();
				var g = new vm(e, f, c);
				g.h = d;
				g.volume = b;
				c.Ra(g)
			} catch (h) {
				mm(542, h)
			}
		},
		wq = function(a) {
			var b = P(),
				c = I(tq);
			a && !b.B && (b.B = !0, c.$ = !0, c.I && Zm(c, "w", !0))
		};
	var Fq = function() {
		this.o = this.isInitialized = !1;
		this.h = this.F = this.l = null;
		var a = {};
		this.M = (a.start = this.Oe, a.firstquartile = this.Je, a.midpoint = this.Le, a.thirdquartile = this.Pe,
			a.complete = this.He, a.pause = this.Lc, a.resume = this.Kd, a.skip = this.Ne, a
			.viewable_impression = this.Ba, a.mute = this.rb, a.unmute = this.rb, a.fullscreen = this.Ke, a
			.exitfullscreen = this.Ie, a.fully_viewable_audible_half_duration_impression = this.Ba, a
			.measurable_impression = this.Ba, a.abandon = this.Lc, a.engagedview = this.Ba, a.impression =
			this.Ba, a.creativeview =
			this.Ba, a.progress = this.rb, a.custom_metric_viewable = this.Ba, a.bufferstart = this.Lc, a
			.bufferfinish = this.Kd, a.audio_measurable = this.Ba, a.audio_audible = this.Ba, a);
		a = {};
		this.R = (a.overlay_resize = this.Me, a.abandon = this.zc, a.close = this.zc, a.collapse = this.zc, a
			.overlay_unmeasurable_impression = function(b) {
				return Ko(b, "overlay_unmeasurable_impression", Vm())
			}, a.overlay_viewable_immediate_impression = function(b) {
				return Ko(b, "overlay_viewable_immediate_impression", Vm())
			}, a.overlay_unviewable_impression = function(b) {
				return Ko(b,
					"overlay_unviewable_impression", Vm())
			}, a.overlay_viewable_end_of_session_impression = function(b) {
				return Ko(b, "overlay_viewable_end_of_session_impression", Vm())
			}, a);
		P().l = 3;
		Eq(this)
	};
	Fq.prototype.B = function(a) {
		Tn(a, !1);
		bp(a)
	};
	Fq.prototype.D = function() {};
	var Gq = function(a, b, c, d) {
		a = a.C(null, d, !0, b);
		a.B = c;
		cp([a]);
		return a
	};
	Fq.prototype.C = function(a, b, c, d) {
		var e = this;
		b = c ? b : -1;
		c = this.qd();
		a = new wo(E, a, b, 7, c.l(), c.o());
		a.fa = d;
		wl(a.featureSet);
		xl(a.featureSet, "queryid", a.fa);
		a.Mc("");
		Yn(a, function() {
			return e.K.apply(e, ha(Ga.apply(0, arguments)))
		}, function() {
			return e.N.apply(e, ha(Ga.apply(0, arguments)))
		});
		(d = I(ep).h) && Un(a, d);
		a.oa.Ta && I(rp);
		return a
	};
	var Hq = function(a, b, c) {
			fl(b);
			var d = a.h;
			B(b, function(e) {
				var f = Eb(e.criteria, function(g) {
					var h = bq(g);
					if (null == h) g = null;
					else if (g = new aq, null != h.visible && (g.h = h.visible / 100), null != h
						.audible && (g.l = 1 == h.audible), null != h.time) {
						var l = "mtos" == h.timetype ? "mtos" : "tos",
							n = gb(h.time, "%") ? "%" : "ms";
						h = parseInt(h.time, 10);
						"%" == n && (h /= 100);
						"ms" == n ? (g.o = h, g.A = -1) : (g.o = -1, g.A = h);
						g.B = void 0 === l ? "tos" : l
					}
					return g
				});
				Gb(f, function(g) {
					return null == g
				}) || Co(c, new dq(e.id, e.event, f, d))
			})
		},
		Iq = function() {
			var a = [],
				b = P();
			a.push(I(qp));
			yl(b.featureSet, "mvp_lv") && a.push(I(tq));
			b = [new qq, new sq];
			b.push(new hp(a));
			b.push(new op(E));
			return b
		},
		Kq = function(a) {
			if (!a.isInitialized) {
				a.isInitialized = !0;
				try {
					var b = tm(),
						c = P(),
						d = Q();
					pm = b;
					c.A = 79463069;
					"o" !== a.l && (Bp = Zf(E));
					if (Ol()) {
						tp.h.jd = 0;
						tp.h.Bc = tm() - b;
						var e = Iq(),
							f = I(ep);
						f.l = e;
						fp(f, function() {
							Jq()
						}) ? tp.done || (zp(), $m(f.h.h, a), vp()) : d.o ? Jq() : vp()
					} else Dp = !0
				} catch (g) {
					throw Zo.reset(), g;
				}
			}
		},
		Lq = function(a) {
			tp.l.cancel();
			Cp = a;
			tp.done = !0
		},
		Mq = function(a) {
			if (a.l) return a.l;
			var b = I(ep).h;
			if (b) switch (b.getName()) {
				case "nis":
					a.l =
						"n";
					break;
				case "gsv":
					a.l = "m"
			}
			a.l || (a.l = "h");
			return a.l
		},
		Nq = function(a, b, c) {
			if (null == a.h) return b.sb |= 4, !1;
			a = a.h.report(c, b);
			b.sb |= a;
			return 0 == a
		};
	Fq.prototype.ob = function(a) {
		switch (a.Ha()) {
			case 0:
				if (a = I(ep).h) a = a.h, Lb(a.C, this), a.F && this.Ca() && cn(a);
				Jq();
				break;
			case 2:
				vp()
		}
	};
	Fq.prototype.Ra = function() {};
	Fq.prototype.Ca = function() {
		return !1
	};
	var Jq = function() {
		var a = [new op(E)],
			b = I(ep);
		b.l = a;
		fp(b, function() {
			Lq("i")
		}) ? tp.done || (zp(), vp()) : Lq("i")
	};
	Fq.prototype.N = function(a, b) {
		a.Ja = !0;
		switch (a.sa()) {
			case 1:
				Oq(this, a, b);
				break;
			case 2:
				this.Pc(a)
		}
		this.Qc(a)
	};
	var Oq = function(a, b, c) {
		if (!b.ra) {
			var d = Ko(b, "start", Vm());
			a = Pq(a).h(d).h;
			var e = {
				id: "lidarv"
			};
			e.r = c;
			e.v = Vp + "v";
			Gf(a, function(f, g) {
				return e[f] = "mtos" == f || "tos" == f ? g : encodeURIComponent(g)
			});
			c = Ep();
			Gf(c, function(f, g) {
				return e[f] = encodeURIComponent(g)
			});
			c = "//pagead2.googlesyndication.com/pagead/gen_204?" + qn(on(new mn, e));
			un(c);
			b.ra = !0
		}
	};
	k = Fq.prototype;
	k.Oe = function(a) {
		var b = a.D(a);
		b && (b = b.volume, a.na = Om(b) && 0 < b);
		Ho(a, 0);
		return Ko(a, "start", Vm())
	};
	k.rb = function(a, b, c) {
		wp(tp, [a], !Vm());
		return this.Ba(a, b, c)
	};
	k.Ba = function(a, b, c) {
		return Ko(a, c, Vm())
	};
	k.Je = function(a) {
		return Qq(a, "firstquartile", 1)
	};
	k.Le = function(a) {
		a.Z = !0;
		return Qq(a, "midpoint", 2)
	};
	k.Pe = function(a) {
		return Qq(a, "thirdquartile", 3)
	};
	k.He = function(a) {
		var b = Qq(a, "complete", 4);
		0 != a.ca && (a.ca = 3);
		return b
	};
	var Qq = function(a, b, c) {
		wp(tp, [a], !Vm());
		Ho(a, c);
		4 != c && Go(a.M, c, a.Rb);
		return Ko(a, b, Vm())
	};
	k = Fq.prototype;
	k.Kd = function(a, b, c) {
		b = Vm();
		2 != a.ca || b || (a.ka().I = tm());
		wp(tp, [a], !b);
		2 == a.ca && (a.ca = 1);
		return Ko(a, c, b)
	};
	k.Ne = function(a, b) {
		b = this.rb(a, b || {}, "skip");
		0 != a.ca && (a.ca = 3);
		return b
	};
	k.Ke = function(a, b) {
		Tn(a, !0);
		return this.rb(a, b || {}, "fullscreen")
	};
	k.Ie = function(a, b) {
		Tn(a, !1);
		return this.rb(a, b || {}, "exitfullscreen")
	};
	k.Lc = function(a, b, c) {
		b = a.ka();
		b.R = mo(b, tm(), 1 != a.ca);
		wp(tp, [a], !Vm());
		1 == a.ca && (a.ca = 2);
		return Ko(a, c, Vm())
	};
	k.Me = function(a) {
		wp(tp, [a], !Vm());
		return a.l()
	};
	k.zc = function(a) {
		wp(tp, [a], !Vm());
		this.Id(a);
		0 != a.ca && (a.ca = 3);
		return a.l()
	};
	var Eq = function(a) {
			Ap(function() {
				var b = Rq();
				null != a.l && (b.sdk = a.l);
				var c = I(ep);
				null != c.h && (b.avms = c.h.getName());
				return b
			})
		},
		Sq = function(a, b, c, d) {
			var e = Xo(Zo, c);
			null !== e && e.fa !== b && (a.B(e), e = null);
			e || (b = a.C(c, tm(), !1, b), 0 == Zo.l.length && (P().A = 79463069), dp([b]), e = b, e.B = Mq(a), d &&
				(e.Ua = d));
			return e
		};
	Fq.prototype.K = function() {};
	var Uq = function(a, b) {
		b.F = 0;
		for (var c in xm) null == a[c] && (b.F |= xm[c]);
		Tq(a, "currentTime");
		Tq(a, "duration")
	};
	k = Fq.prototype;
	k.Pc = function() {};
	k.Id = function() {};
	k.ed = function() {};
	k.Qc = function() {};
	k.uc = function() {};
	k.qd = function() {
		this.h || (this.h = this.uc());
		return null == this.h || this.o ? new fq : new oq(this.h)
	};
	k.rd = function() {
		return new jq
	};
	var Pq = function(a) {
			a.F || (a.F = a.rd());
			return a.F
		},
		Tq = function(a, b) {
			var c = a[b];
			void 0 !== c && 0 < c && (a[b] = Math.floor(1E3 * c))
		},
		Rq = function() {
			var a = Q(),
				b = {};
			return b.sv = Vp, b["if"] = a.o ? "1" : "0", b.nas = String(Zo.h.length), b
		};
	var Vq = Ya(),
		Wq = !1,
		Xq = !1,
		Yq = !1,
		Zq = function(a) {
			return !a || "function" !== typeof a || 0 > String(Function.prototype.toString).indexOf(
				"[native code]") ? !1 : 0 <= String(a).indexOf("[native code]") && !0 || !1
		},
		$q = function(a) {
			return !!(1 << a & Vq)
		},
		ar = [function(a) {
				return !(!a.chrome || !a.chrome.webstore)
			}, function(a) {
				return !!a.document.documentMode
			}, function(a) {
				return !!a.document.fonts.ready
			}, function() {
				return $q(0)
			}, function(a) {
				return !!a.ActiveXObject
			}, function(a) {
				return !!a.chrome
			}, function(a) {
				return !!a.navigator.serviceWorker
			},
			function(a) {
				return !!a.opera
			},
			function(a) {
				return !!a.sidebar
			},
			function() {
				return !+"\v1"
			},
			function() {
				return $q(1)
			},
			function(a) {
				return !a.ActiveXObject
			},
			function(a) {
				return "-ms-ime-align" in a.document.documentElement.style
			},
			function(a) {
				return "-ms-scroll-limit" in a.document.documentElement.style
			},
			function(a) {
				return "-webkit-font-feature-settings" in a.document.body.style
			},
			function() {
				return $q(2)
			},
			function(a) {
				return "ActiveXObject" in a
			},
			function(a) {
				return "MozAppearance" in a.document.documentElement.style
			},
			function(a) {
				return "_phantom" in
					a
			},
			function(a) {
				return "callPhantom" in a
			},
			function(a) {
				return "content" in a.document.createElement("template")
			},
			function(a) {
				return "getEntriesByType" in a.performance
			},
			function() {
				return $q(3)
			},
			function(a) {
				return "image-rendering" in a.document.body.style
			},
			function(a) {
				return "object-fit" in a.document.body.style
			},
			function(a) {
				return "open" in a.document.createElement("details")
			},
			function(a) {
				return "orientation" in a.screen
			},
			function(a) {
				return "performance" in a
			},
			function(a) {
				return "shape-image-threshold" in a.document.body.style
			},
			function() {
				return $q(4)
			},
			function(a) {
				return "srcset" in a.document.createElement("img")
			},
			function() {
				return Xq
			},
			function() {
				return Yq
			},
			function() {
				return $q(5)
			},
			function(a) {
				a = a.document.createElement("div");
				a.style.width = "1px";
				a.style.width = "-webkit-min-content";
				a.style.width = "min-content";
				return "1px" != a.style.width
			},
			function(a) {
				a = a.document.createElement("div");
				a.style.width = "1px";
				a.style.width = "calc(1px - 1px)";
				a.style.width = "-webkit-calc(1px - 1px)";
				return "1px" != a.style.width
			},
			function() {
				var a = !1;
				eval('var DummyFunction1 = function(x){ "use strict"; var a = 12; b = a + x*35; }');
				try {
					DummyFunction1()
				} catch (b) {
					a = !0
				}
				return a
			},
			function() {
				var a = !1;
				try {
					DummyFunction2()
				} catch (b) {
					a = !0
				}
				return a
			},
			function() {
				return !1
			},
			function() {
				return $q(6)
			},
			function(a) {
				var b = a.document.createElement("canvas");
				b.width = b.height = 1;
				b = b.getContext("2d");
				b.globalCompositeOperation = "multiply";
				b.fillStyle = "rgb(0,255,255)";
				b.fillRect(0, 0, 1, 1);
				b.fill();
				b.fillStyle = "rgb(255,255,0)";
				b.fillRect(0, 0, 1, 1);
				b.fill();
				b = b.getImageData(0, 0, 1, 1).data;
				return b[0] == b[2] && b[1] == b[3] || Zq(a.navigator.vibrate)
			},
			function(a) {
				a =
					a.document.createElement("canvas");
				a.width = a.height = 1;
				a = a.getContext("2d");
				a.globalCompositeOperation = "multiply";
				a.fillStyle = "rgb(0,255,255)";
				a.fillRect(0, 0, 1, 1);
				a.fill();
				a.fillStyle = "rgb(255,255,0)";
				a.fillRect(0, 0, 1, 1);
				a.fill();
				a = a.getImageData(0, 0, 1, 1).data;
				return a[0] == a[2] && a[1] == a[3]
			},
			function(a) {
				return Zq(a.document.createElement("div").matches)
			},
			function(a) {
				a = a.document.createElement("input");
				a.setAttribute("type", "range");
				return "text" !== a.type
			},
			function(a) {
				return a.CSS.supports("image-rendering",
					"pixelated")
			},
			function(a) {
				return a.CSS.supports("object-fit", "contain")
			},
			function() {
				return $q(7)
			},
			function(a) {
				return a.CSS.supports("object-fit", "inherit")
			},
			function(a) {
				return a.CSS.supports("shape-image-threshold", "0.9")
			},
			function(a) {
				return a.CSS.supports("word-break", "keep-all")
			},
			function() {
				return eval("1 == [for (item of [1,2,3]) item][0]")
			},
			function(a) {
				return Zq(a.CSS.supports)
			},
			function() {
				return Zq(Intl.Collator)
			},
			function(a) {
				return Zq(a.document.createElement("dialog").show)
			},
			function() {
				return $q(8)
			},
			function(a) {
				return Zq(a.document.createElement("div").animate([{
					transform: "scale(1)",
					easing: "ease-in"
				}, {
					transform: "scale(1.3)",
					easing: "ease-in"
				}], {
					duration: 1300,
					iterations: 1
				}).reverse)
			},
			function(a) {
				return Zq(a.document.createElement("div").animate)
			},
			function(a) {
				return Zq(a.document.documentElement.webkitRequestFullScreen)
			},
			function(a) {
				return Zq(a.navigator.getBattery)
			},
			function(a) {
				return Zq(a.navigator.permissions.query)
			},
			function() {
				return !1
			},
			function() {
				return $q(9)
			},
			function() {
				return Zq(webkitRequestAnimationFrame)
			},
			function(a) {
				return Zq(a.BroadcastChannel.call)
			},
			function(a) {
				return Zq(a.FontFace)
			},
			function(a) {
				return Zq(a.Gamepad)
			},
			function() {
				return $q(10)
			},
			function(a) {
				return Zq(a.MutationEvent)
			},
			function(a) {
				return Zq(a.MutationObserver)
			},
			function(a) {
				return Zq(a.crypto.getRandomValues)
			},
			function(a) {
				return Zq(a.document.body.createShadowRoot)
			},
			function(a) {
				return Zq(a.document.body.webkitCreateShadowRoot)
			},
			function(a) {
				return Zq(a.fetch)
			},
			function() {
				return $q(11)
			},
			function(a) {
				return Zq(a.navigator.serviceWorker.register)
			},
			function(a) {
				return Zq(a.navigator.webkitGetGamepads)
			},
			function(a) {
				return Zq(a.speechSynthesis.speak)
			},
			function(a) {
				return Zq(a.webkitRTCPeerConnection)
			},
			function(a) {
				return a.CSS.supports("--fake-var", "0")
			},
			function() {
				return $q(12)
			},
			function(a) {
				return a.CSS.supports("cursor", "grab")
			},
			function(a) {
				return a.CSS.supports("cursor", "zoom-in")
			},
			function(a) {
				return a.CSS.supports("image-orientation", "270deg")
			},
			function() {
				return $q(13)
			},
			function(a) {
				return a.CSS.supports("position", "sticky")
			},
			function(a) {
				return void 0 ===
					a.document.createElement("style").scoped
			},
			function(a) {
				return a.performance.getEntriesByType("resource") instanceof Array
			},
			function() {
				return "undefined" == typeof InstallTrigger
			},
			function() {
				return "object" == typeof(new Intl.Collator).resolvedOptions()
			},
			function(a) {
				return "boolean" == typeof a.navigator.onLine
			},
			function() {
				return $q(14)
			},
			function(a) {
				return "undefined" == typeof a.navigator.Fh
			},
			function(a) {
				return "number" == typeof a.performance.now()
			},
			function() {
				return 0 == (new Uint16Array(1))[0]
			},
			function(a) {
				return -1 ==
					a.ActiveXObject.toString().indexOf("native")
			},
			function(a) {
				return -1 == Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor")
			}
		],
		br = [function(a) {
				a = a.document.createElement("div");
				var b = null,
					c = ["{45EA75A0-A269-11D1-B5BF-0000F8051515}", "{3AF36230-A269-11D1-B5BF-0000F8051515}",
						"{89820200-ECBD-11CF-8B85-00AA005B4383}"
					];
				try {
					a.style.behavior = "url(#default#clientcaps)"
				} catch (e) {}
				for (var d = 0; d < c.length; d++) {
					try {
						b = a.getComponentVersion(c[d], "componentid").replace(/,/g, ".")
					} catch (e) {}
					if (b) return b.split(".")[0]
				}
				return !1
			},
			function() {
				return (new Date).getTimezoneOffset()
			},
			function(a) {
				return (a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth) / (a
					.innerHeight || a.document.documentElement.clientHeight || a.document.body.clientHeight)
			},
			function(a) {
				return (a.outerWidth || a.document && a.document.body && a.document.body.offsetWidth) / (a
					.outerHeight || a.document && a.document.body && a.document.body.offsetHeight)
			},
			function(a) {
				return a.screen.availWidth / a.screen.availHeight
			},
			function(a) {
				return a.screen.width /
					a.screen.height
			}
		],
		cr = [function(a) {
			return a.navigator.userAgent
		}, function(a) {
			return a.navigator.platform
		}, function(a) {
			return a.navigator.vendor
		}],
		er = function() {
			try {
				dr()
			} catch (d) {}
			var a = "a=1&b=" + Vq + "&",
				b = [],
				c = 99;
			B(ar, function(d, e) {
				var f = !1;
				try {
					f = d(E)
				} catch (g) {}
				b[e / 32 >>> 0] |= f << e % 32
			});
			B(b, function(d, e) {
				a += String.fromCharCode(c + e) + "=" + (d >>> 0).toString(16) + "&"
			});
			c = 105;
			B(br, function(d) {
				var e = "false";
				try {
					e = d(E)
				} catch (f) {}
				a += String.fromCharCode(c++) + "=" + e + "&"
			});
			B(cr, function(d) {
				var e = "";
				try {
					e = Ac(d(E))
				} catch (f) {}
				a +=
					String.fromCharCode(c++) + "=" + e + "&"
			});
			return a.slice(0, -1)
		},
		dr = function() {
			if (!Wq) {
				var a = function() {
					Xq = !0;
					E.document.removeEventListener("webdriver-evaluate", a, !0)
				};
				E.document.addEventListener("webdriver-evaluate", a, !0);
				var b = function() {
					Yq = !0;
					E.document.removeEventListener("webdriver-evaluate-response", b, !0)
				};
				E.document.addEventListener("webdriver-evaluate-response", b, !0);
				Wq = !0
			}
		};
	var fr = function() {
		this.blockSize = -1;
		this.blockSize = 64;
		this.h = Array(4);
		this.A = Array(this.blockSize);
		this.o = this.l = 0;
		this.reset()
	};
	Za(fr, cl);
	fr.prototype.reset = function() {
		this.h[0] = 1732584193;
		this.h[1] = 4023233417;
		this.h[2] = 2562383102;
		this.h[3] = 271733878;
		this.o = this.l = 0
	};
	var gr = function(a, b, c) {
		c || (c = 0);
		var d = Array(16);
		if ("string" === typeof b)
			for (var e = 0; 16 > e; ++e) d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(
				c++) << 16 | b.charCodeAt(c++) << 24;
		else
			for (e = 0; 16 > e; ++e) d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
		b = a.h[0];
		c = a.h[1];
		e = a.h[2];
		var f = a.h[3];
		var g = b + (f ^ c & (e ^ f)) + d[0] + 3614090360 & 4294967295;
		b = c + (g << 7 & 4294967295 | g >>> 25);
		g = f + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
		f = b + (g << 12 & 4294967295 | g >>> 20);
		g = e + (c ^ f & (b ^ c)) + d[2] + 606105819 & 4294967295;
		e = f + (g << 17 & 4294967295 | g >>>
			15);
		g = c + (b ^ e & (f ^ b)) + d[3] + 3250441966 & 4294967295;
		c = e + (g << 22 & 4294967295 | g >>> 10);
		g = b + (f ^ c & (e ^ f)) + d[4] + 4118548399 & 4294967295;
		b = c + (g << 7 & 4294967295 | g >>> 25);
		g = f + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
		f = b + (g << 12 & 4294967295 | g >>> 20);
		g = e + (c ^ f & (b ^ c)) + d[6] + 2821735955 & 4294967295;
		e = f + (g << 17 & 4294967295 | g >>> 15);
		g = c + (b ^ e & (f ^ b)) + d[7] + 4249261313 & 4294967295;
		c = e + (g << 22 & 4294967295 | g >>> 10);
		g = b + (f ^ c & (e ^ f)) + d[8] + 1770035416 & 4294967295;
		b = c + (g << 7 & 4294967295 | g >>> 25);
		g = f + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
		f = b + (g << 12 & 4294967295 |
			g >>> 20);
		g = e + (c ^ f & (b ^ c)) + d[10] + 4294925233 & 4294967295;
		e = f + (g << 17 & 4294967295 | g >>> 15);
		g = c + (b ^ e & (f ^ b)) + d[11] + 2304563134 & 4294967295;
		c = e + (g << 22 & 4294967295 | g >>> 10);
		g = b + (f ^ c & (e ^ f)) + d[12] + 1804603682 & 4294967295;
		b = c + (g << 7 & 4294967295 | g >>> 25);
		g = f + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
		f = b + (g << 12 & 4294967295 | g >>> 20);
		g = e + (c ^ f & (b ^ c)) + d[14] + 2792965006 & 4294967295;
		e = f + (g << 17 & 4294967295 | g >>> 15);
		g = c + (b ^ e & (f ^ b)) + d[15] + 1236535329 & 4294967295;
		c = e + (g << 22 & 4294967295 | g >>> 10);
		g = b + (e ^ f & (c ^ e)) + d[1] + 4129170786 & 4294967295;
		b = c + (g <<
			5 & 4294967295 | g >>> 27);
		g = f + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
		f = b + (g << 9 & 4294967295 | g >>> 23);
		g = e + (b ^ c & (f ^ b)) + d[11] + 643717713 & 4294967295;
		e = f + (g << 14 & 4294967295 | g >>> 18);
		g = c + (f ^ b & (e ^ f)) + d[0] + 3921069994 & 4294967295;
		c = e + (g << 20 & 4294967295 | g >>> 12);
		g = b + (e ^ f & (c ^ e)) + d[5] + 3593408605 & 4294967295;
		b = c + (g << 5 & 4294967295 | g >>> 27);
		g = f + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
		f = b + (g << 9 & 4294967295 | g >>> 23);
		g = e + (b ^ c & (f ^ b)) + d[15] + 3634488961 & 4294967295;
		e = f + (g << 14 & 4294967295 | g >>> 18);
		g = c + (f ^ b & (e ^ f)) + d[4] + 3889429448 & 4294967295;
		c =
			e + (g << 20 & 4294967295 | g >>> 12);
		g = b + (e ^ f & (c ^ e)) + d[9] + 568446438 & 4294967295;
		b = c + (g << 5 & 4294967295 | g >>> 27);
		g = f + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
		f = b + (g << 9 & 4294967295 | g >>> 23);
		g = e + (b ^ c & (f ^ b)) + d[3] + 4107603335 & 4294967295;
		e = f + (g << 14 & 4294967295 | g >>> 18);
		g = c + (f ^ b & (e ^ f)) + d[8] + 1163531501 & 4294967295;
		c = e + (g << 20 & 4294967295 | g >>> 12);
		g = b + (e ^ f & (c ^ e)) + d[13] + 2850285829 & 4294967295;
		b = c + (g << 5 & 4294967295 | g >>> 27);
		g = f + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
		f = b + (g << 9 & 4294967295 | g >>> 23);
		g = e + (b ^ c & (f ^ b)) + d[7] + 1735328473 & 4294967295;
		e = f + (g << 14 & 4294967295 | g >>> 18);
		g = c + (f ^ b & (e ^ f)) + d[12] + 2368359562 & 4294967295;
		c = e + (g << 20 & 4294967295 | g >>> 12);
		g = b + (c ^ e ^ f) + d[5] + 4294588738 & 4294967295;
		b = c + (g << 4 & 4294967295 | g >>> 28);
		g = f + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
		f = b + (g << 11 & 4294967295 | g >>> 21);
		g = e + (f ^ b ^ c) + d[11] + 1839030562 & 4294967295;
		e = f + (g << 16 & 4294967295 | g >>> 16);
		g = c + (e ^ f ^ b) + d[14] + 4259657740 & 4294967295;
		c = e + (g << 23 & 4294967295 | g >>> 9);
		g = b + (c ^ e ^ f) + d[1] + 2763975236 & 4294967295;
		b = c + (g << 4 & 4294967295 | g >>> 28);
		g = f + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
		f = b + (g << 11 & 4294967295 |
			g >>> 21);
		g = e + (f ^ b ^ c) + d[7] + 4139469664 & 4294967295;
		e = f + (g << 16 & 4294967295 | g >>> 16);
		g = c + (e ^ f ^ b) + d[10] + 3200236656 & 4294967295;
		c = e + (g << 23 & 4294967295 | g >>> 9);
		g = b + (c ^ e ^ f) + d[13] + 681279174 & 4294967295;
		b = c + (g << 4 & 4294967295 | g >>> 28);
		g = f + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
		f = b + (g << 11 & 4294967295 | g >>> 21);
		g = e + (f ^ b ^ c) + d[3] + 3572445317 & 4294967295;
		e = f + (g << 16 & 4294967295 | g >>> 16);
		g = c + (e ^ f ^ b) + d[6] + 76029189 & 4294967295;
		c = e + (g << 23 & 4294967295 | g >>> 9);
		g = b + (c ^ e ^ f) + d[9] + 3654602809 & 4294967295;
		b = c + (g << 4 & 4294967295 | g >>> 28);
		g = f + (b ^ c ^ e) + d[12] +
			3873151461 & 4294967295;
		f = b + (g << 11 & 4294967295 | g >>> 21);
		g = e + (f ^ b ^ c) + d[15] + 530742520 & 4294967295;
		e = f + (g << 16 & 4294967295 | g >>> 16);
		g = c + (e ^ f ^ b) + d[2] + 3299628645 & 4294967295;
		c = e + (g << 23 & 4294967295 | g >>> 9);
		g = b + (e ^ (c | ~f)) + d[0] + 4096336452 & 4294967295;
		b = c + (g << 6 & 4294967295 | g >>> 26);
		g = f + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
		f = b + (g << 10 & 4294967295 | g >>> 22);
		g = e + (b ^ (f | ~c)) + d[14] + 2878612391 & 4294967295;
		e = f + (g << 15 & 4294967295 | g >>> 17);
		g = c + (f ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
		c = e + (g << 21 & 4294967295 | g >>> 11);
		g = b + (e ^ (c | ~f)) + d[12] + 1700485571 &
			4294967295;
		b = c + (g << 6 & 4294967295 | g >>> 26);
		g = f + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
		f = b + (g << 10 & 4294967295 | g >>> 22);
		g = e + (b ^ (f | ~c)) + d[10] + 4293915773 & 4294967295;
		e = f + (g << 15 & 4294967295 | g >>> 17);
		g = c + (f ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
		c = e + (g << 21 & 4294967295 | g >>> 11);
		g = b + (e ^ (c | ~f)) + d[8] + 1873313359 & 4294967295;
		b = c + (g << 6 & 4294967295 | g >>> 26);
		g = f + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
		f = b + (g << 10 & 4294967295 | g >>> 22);
		g = e + (b ^ (f | ~c)) + d[6] + 2734768916 & 4294967295;
		e = f + (g << 15 & 4294967295 | g >>> 17);
		g = c + (f ^ (e | ~b)) + d[13] + 1309151649 &
			4294967295;
		c = e + (g << 21 & 4294967295 | g >>> 11);
		g = b + (e ^ (c | ~f)) + d[4] + 4149444226 & 4294967295;
		b = c + (g << 6 & 4294967295 | g >>> 26);
		g = f + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
		f = b + (g << 10 & 4294967295 | g >>> 22);
		g = e + (b ^ (f | ~c)) + d[2] + 718787259 & 4294967295;
		e = f + (g << 15 & 4294967295 | g >>> 17);
		g = c + (f ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
		a.h[0] = a.h[0] + b & 4294967295;
		a.h[1] = a.h[1] + (e + (g << 21 & 4294967295 | g >>> 11)) & 4294967295;
		a.h[2] = a.h[2] + e & 4294967295;
		a.h[3] = a.h[3] + f & 4294967295
	};
	fr.prototype.update = function(a, b) {
		void 0 === b && (b = a.length);
		for (var c = b - this.blockSize, d = this.A, e = this.l, f = 0; f < b;) {
			if (0 == e)
				for (; f <= c;) gr(this, a, f), f += this.blockSize;
			if ("string" === typeof a)
				for (; f < b;) {
					if (d[e++] = a.charCodeAt(f++), e == this.blockSize) {
						gr(this, d);
						e = 0;
						break
					}
				} else
					for (; f < b;)
						if (d[e++] = a[f++], e == this.blockSize) {
							gr(this, d);
							e = 0;
							break
						}
		}
		this.l = e;
		this.o += b
	};
	var hr = function() {
		this.l = null
	};
	t(hr, jq);
	hr.prototype.h = function(a) {
		var b = jq.prototype.h.call(this, a);
		var c = Vq = Ya();
		var d = $q(5);
		c = (Xq ? !d : d) ? c | 2 : c & -3;
		d = $q(2);
		c = (Yq ? !d : d) ? c | 8 : c & -9;
		c = {
			s1: (c >>> 0).toString(16)
		};
		this.l || (this.l = er());
		b.B = this.l;
		b.C = iq(a, Op, c, "h", ir("kArwaWEsTs"));
		b.A = iq(a, Qp, {}, "h", ir("b96YPMzfnx"));
		b.l = iq(a, Rp, {}, "h", ir("yb8Wev6QDg"));
		return b
	};
	var ir = function(a) {
		return function(b) {
			var c = new fr;
			c.update(b + a);
			var d = Array((56 > c.l ? c.blockSize : 2 * c.blockSize) - c.l);
			d[0] = 128;
			for (b = 1; b < d.length - 8; ++b) d[b] = 0;
			var e = 8 * c.o;
			for (b = d.length - 8; b < d.length; ++b) d[b] = e & 255, e /= 256;
			c.update(d);
			d = Array(16);
			for (b = e = 0; 4 > b; ++b)
				for (var f = 0; 32 > f; f += 8) d[e++] = c.h[b] >>> f & 255;
			return fb(d).slice(-8)
		}
	};
	var jr = function(a, b) {
		this.o = a;
		this.A = b
	};
	jr.prototype.report = function(a, b) {
		var c = this.h(b);
		if ("function" === typeof c) {
			var d = {};
			d = (d.sv = Vp, d.cb = Up, d.e = kr(a), d);
			var e = Ko(b, a, Vm());
			Yd(d, e);
			b.Pd[a] = e;
			d = 2 == b.sa() ? sn(d).join("&") : this.A.h(d).h;
			try {
				return c(b.fa, d, a), 0
			} catch (f) {
				return 2
			}
		} else return 1
	};
	var kr = function(a) {
		var b = Yp(a) ? "custom_metric_viewable" : a;
		a = Sd(function(c) {
			return c == b
		});
		return Bm[a]
	};
	jr.prototype.h = function() {
		return Ma(this.o)
	};
	var lr = function(a, b, c) {
		jr.call(this, a, b);
		this.l = c
	};
	t(lr, jr);
	lr.prototype.h = function(a) {
		if (!a.Ua) return jr.prototype.h.call(this, a);
		if (this.l[a.Ua]) return function() {};
		mm(393, Error());
		return null
	};
	var mr = function() {
		Fq.call(this);
		this.L = void 0;
		this.H = null;
		this.I = !1;
		this.A = {};
		this.J = 0
	};
	t(mr, Fq);
	mr.prototype.D = function(a, b) {
		var c = this,
			d = I(ep);
		if (null != d.h) switch (d.h.getName()) {
			case "nis":
				var e = nr(this, a, b);
				break;
			case "gsv":
				e = or(this, a, b);
				break;
			case "exc":
				e = pr(this, a)
		}
		e || (b.opt_overlayAdElement ? e = void 0 : b.opt_adElement && (e = Sq(this, a, b.opt_adElement, b
			.opt_osdId)));
		e && 1 == e.sa() && (e.D == Oe && (e.D = function(f) {
			return c.ed(f)
		}), qr(this, e, b));
		return e
	};
	var qr = function(a, b, c) {
		c = c.opt_configurable_tracking_events;
		null != a.h && Array.isArray(c) && Hq(a, c, b)
	};
	mr.prototype.ed = function(a) {
		a.l = 0;
		a.N = 0;
		if ("h" == a.B || "n" == a.B) {
			if (P().o) var b = Ma("ima.bridge.getVideoMetadata");
			else if (a.Ua && rr(this)) {
				var c = this.A[a.Ua];
				c ? b = function(e) {
					return sr(c, e)
				} : null !== c && mm(379, Error())
			} else b = Ma("ima.common.getVideoMetadata");
			if ("function" === typeof b) try {
				var d = b(a.fa)
			} catch (e) {
				a.l |= 4
			} else a.l |= 2
		} else if ("b" == a.B)
			if (b = Ma("ytads.bulleit.getVideoMetadata"), "function" === typeof b) try {
				d = b(a.fa)
			} catch (e) {
				a.l |= 4
			} else a.l |= 2;
			else if ("ml" == a.B)
			if (b = Ma("ima.common.getVideoMetadata"),
				"function" === typeof b) try {
				d = b(a.fa)
			} catch (e) {
				a.l |= 4
			} else a.l |= 2;
			else a.l |= 1;
		a.l || (void 0 === d ? a.l |= 8 : null === d ? a.l |= 16 : Ud(d) ? a.l |= 32 : null != d.errorCode && (a
			.N = d.errorCode, a.l |= 64));
		null == d && (d = {});
		Uq(d, a);
		Om(d.volume) && Om(this.L) && (d.volume *= this.L);
		return d
	};
	var or = function(a, b, c) {
			var d = Wo(Zo, b);
			d || (d = c.opt_nativeTime || -1, d = Gq(a, b, Mq(a), d), c.opt_osdId && (d.Ua = c.opt_osdId));
			return d
		},
		nr = function(a, b, c) {
			var d = Wo(Zo, b);
			d || (d = Gq(a, b, "n", c.opt_nativeTime || -1));
			return d
		},
		pr = function(a, b) {
			var c = Wo(Zo, b);
			c || (c = Gq(a, b, "h", -1));
			return c
		};
	mr.prototype.uc = function() {
		if (rr(this)) return new lr("ima.common.triggerExternalActivityEvent", Pq(this), this.A);
		var a = tr(this);
		return null != a ? new jr(a, Pq(this)) : null
	};
	var tr = function(a) {
		var b = P();
		switch (Mq(a)) {
			case "b":
				return "ytads.bulleit.triggerExternalActivityEvent";
			case "n":
				return "ima.bridge.triggerExternalActivityEvent";
			case "h":
				if (b.o) return "ima.bridge.triggerExternalActivityEvent";
			case "m":
			case "ml":
				return "ima.common.triggerExternalActivityEvent"
		}
		return null
	};
	mr.prototype.Pc = function(a) {
		!a.h && a.Ja && Nq(this, a, "overlay_unmeasurable_impression") && (a.h = !0)
	};
	mr.prototype.Id = function(a) {
		a.Ld && (a.Ka() ? Nq(this, a, "overlay_viewable_end_of_session_impression") : Nq(this, a,
			"overlay_unviewable_impression"), a.Ld = !1)
	};
	var ur = function(a, b, c, d) {
		c = void 0 === c ? {} : c;
		var e = {};
		Yd(e, {
			opt_adElement: void 0,
			opt_fullscreen: void 0
		}, c);
		if (e.opt_bounds) return Pq(a).h(Xp("ol", d));
		if (void 0 !== d)
			if (void 0 !== Wp(d))
				if (Dp) b = Xp("ue", d);
				else if (Kq(a), "i" == Cp) b = Xp("i", d), b["if"] = 0;
		else if (b = a.D(b, e)) {
			b: {
				"i" == Cp && (b.Ja = !0, a.Qc(b));c = e.opt_fullscreen;void 0 !== c && Tn(b, !!c);
				var f;
				if (c = !Q().l && !Rm()) Nl(),
				c = 0 === eh(Bd);
				if (f = c) {
					switch (b.sa()) {
						case 1:
							Oq(a, b, "pv");
							break;
						case 2:
							a.Pc(b)
					}
					Lq("pv")
				}
				c = d.toLowerCase();
				if (f = !f) c: {
					if (yl(P().featureSet, "ssmol") &&
						(f = a.o, "loaded" === c)) break c;f = Kb(ym, c)
				}
				if (f && 0 == b.ca) {
					"i" != Cp && (tp.done = !1);
					f = void 0 !== e ? e.opt_nativeTime : void 0;
					rm = f = "number" === typeof f ? f : tm();
					b.Pb = !0;
					var g = Vm();
					b.ca = 1;
					b.ea = {};
					b.ea.start = !1;
					b.ea.firstquartile = !1;
					b.ea.midpoint = !1;
					b.ea.thirdquartile = !1;
					b.ea.complete = !1;
					b.ea.resume = !1;
					b.ea.pause = !1;
					b.ea.skip = !1;
					b.ea.mute = !1;
					b.ea.unmute = !1;
					b.ea.viewable_impression = !1;
					b.ea.measurable_impression = !1;
					b.ea.fully_viewable_audible_half_duration_impression = !1;
					b.ea.fullscreen = !1;
					b.ea.exitfullscreen = !1;
					b.vc =
						0;
					g || (b.ka().I = f);
					wp(tp, [b], !g)
				}(f = b.bb[c]) && ho(b.da, f);Kb(zm, c) && b.$a && b.$a.B(b, null);
				switch (b.sa()) {
					case 1:
						var h = Yp(c) ? a.M.custom_metric_viewable : a.M[c];
						break;
					case 2:
						h = a.R[c]
				}
				if (h && (d = h.call(a, b, e, d), void 0 !== d)) {
					e = Xp(void 0, c);
					Yd(e, d);
					d = e;
					break b
				}
				d = void 0
			}
			3 == b.ca && a.B(b);b = d
		}
		else b = Xp("nf", d);
		else b = void 0;
		else Dp ? b = Xp("ue") : (b = a.D(b, e)) ? (d = Xp(), Yd(d, Jo(b, !0, !1, !1)), b = d) : b = Xp("nf");
		return "string" === typeof b ? Pq(a).h(void 0) : Pq(a).h(b)
	};
	mr.prototype.K = function(a) {
		this.o && 1 == a.sa() && vr(this, a)
	};
	mr.prototype.Qc = function(a) {
		this.o && 1 == a.sa() && vr(this, a)
	};
	var vr = function(a, b) {
			var c;
			if (b.Ua && rr(a)) {
				var d = a.A[b.Ua];
				d ? c = function(f, g) {
					wr(d, f, g)
				} : null !== d && mm(379, Error())
			} else c = Ma("ima.common.triggerViewabilityMeasurementUpdate");
			if ("function" === typeof c) {
				var e = Eo(b);
				e.nativeVolume = a.L;
				c(b.fa, e)
			}
		},
		xr = function(a, b, c) {
			a.A[b] = c
		},
		rr = function(a) {
			return P().o || "h" != Mq(a) && "m" != Mq(a) ? !1 : 0 != a.J
		};
	mr.prototype.C = function(a, b, c, d) {
		a = Fq.prototype.C.call(this, a, b, c, d);
		this.I && (b = this.H, null == a.A && (a.A = new bo), b.h[a.fa] = a.A, a.A.B = Mo);
		return a
	};
	mr.prototype.B = function(a) {
		a && 1 == a.sa() && this.I && delete this.H.h[a.fa];
		return Fq.prototype.B.call(this, a)
	};
	mr.prototype.qd = function() {
		this.h || (this.h = this.uc());
		return null == this.h || this.o ? new fq : new oq(this.h)
	};
	mr.prototype.rd = function() {
		return new hr
	};
	var yr = function(a) {
			var b = {};
			return b.viewability = a.h, b.googleViewability = a.o, b.moatInit = a.B, b.moatViewability = a.C, b
				.integralAdsViewability = a.A, b.doubleVerifyViewability = a.l, b
		},
		zr = function(a, b, c) {
			c = void 0 === c ? {} : c;
			a = ur(I(mr), b, c, a);
			return yr(a)
		},
		Ar = new gq;
	Ar.B = "stopped";
	Ar.h = "stopped";
	Ar.o = "stopped";
	Ar.C = "stopped";
	Ar.A = "stopped";
	Ar.l = "stopped";
	Object.freeze(Ar);
	var Br = lm(193, zr, void 0, Rq);
	w("Goog_AdSense_Lidar_sendVastEvent", Br, void 0);
	var Cr = lm(194, function(a, b) {
		b = void 0 === b ? {} : b;
		a = ur(I(mr), a, b);
		return yr(a)
	});
	w("Goog_AdSense_Lidar_getViewability", Cr, void 0);
	var Dr = lm(195, function() {
		return Ql()
	});
	w("Goog_AdSense_Lidar_getUrlSignalsArray", Dr, void 0);
	var Er = lm(196, function() {
		return JSON.stringify(Ql())
	});
	w("Goog_AdSense_Lidar_getUrlSignalsList", Er, void 0);
	var Gr = function(a) {
		C.call(this, a, -1, Fr)
	};
	t(Gr, C);
	var Fr = [3];
	var Ir = function(a) {
		C.call(this, a, -1, Hr)
	};
	t(Ir, C);
	var Jr = function(a, b) {
			return qd(a, 1, b)
		},
		Kr = function(a, b) {
			return qd(a, 2, b)
		},
		Lr = function(a, b) {
			return qd(a, 3, b)
		},
		Mr = function(a, b) {
			qd(a, 4, b)
		},
		Hr = [1, 2, 3, 4];
	var Nr = function(a) {
		C.call(this, a)
	};
	t(Nr, C);
	var Pr = function(a) {
		C.call(this, a, -1, Or)
	};
	t(Pr, C);
	Pr.prototype.getVersion = function() {
		return od(this, 1, 0)
	};
	var Qr = function(a, b) {
			return rd(a, 1, b, 0)
		},
		Rr = function(a, b) {
			return vd(a, 2, b)
		},
		Sr = function(a, b) {
			return vd(a, 3, b)
		},
		Tr = function(a, b) {
			return rd(a, 4, b, 0)
		},
		Ur = function(a, b) {
			return rd(a, 5, b, 0)
		},
		Vr = function(a, b) {
			return rd(a, 6, b, 0)
		},
		Wr = function(a, b) {
			return rd(a, 7, b, "")
		},
		Xr = function(a, b) {
			return rd(a, 8, b, 0)
		},
		Yr = function(a, b) {
			return rd(a, 9, b, 0)
		},
		Zr = function(a, b) {
			return rd(a, 10, b, !1)
		},
		$r = function(a, b) {
			return rd(a, 11, b, !1)
		},
		as = function(a, b) {
			return qd(a, 12, b)
		},
		bs = function(a, b) {
			return qd(a, 13, b)
		},
		cs = function(a, b) {
			return qd(a,
				14, b)
		},
		ds = function(a, b) {
			return rd(a, 15, b, !1)
		},
		es = function(a, b) {
			return rd(a, 16, b, "")
		},
		fs = function(a, b) {
			return qd(a, 17, b)
		},
		gs = function(a, b) {
			return qd(a, 18, b)
		},
		hs = function(a, b) {
			var c = void 0 === c ? !1 : c;
			if (b) {
				var d = Zc([]);
				for (var e = 0; e < b.length; e++) d[e] = b[e].pa;
				a.h || (a.h = {});
				a.h[19] = b
			} else a.h && (a.h[19] = void 0), d = id;
			return kd(a, 19, d, c)
		},
		Or = [12, 13, 14, 17, 18, 19];
	var is = function(a) {
		C.call(this, a)
	};
	t(is, C);
	var js = "a".charCodeAt(),
		ks = Nd({
			qg: 0,
			pg: 1,
			mg: 2,
			hg: 3,
			ng: 4,
			ig: 5,
			og: 6,
			kg: 7,
			lg: 8,
			gg: 9,
			jg: 10
		}),
		ls = Nd({
			sg: 0,
			tg: 1,
			rg: 2
		});
	var ms = function(a) {
			if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
			this.l = a;
			this.h = 0
		},
		os = function(a) {
			a = ns(a, 36);
			var b = new Nr;
			b = rd(b, 1, Math.floor(a / 10), 0);
			return rd(b, 2, a % 10 * 1E8, 0)
		},
		ps = function(a) {
			return String.fromCharCode(js + ns(a, 6)) + String.fromCharCode(js + ns(a, 6))
		},
		ts = function(a) {
			var b = ns(a, 16);
			return !0 === !!ns(a, 1) ? (a = qs(a), a.forEach(function(c) {
				if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
			}), a) : rs(a, b)
		},
		us = function(a) {
			for (var b = [], c = ns(a, 12); c--;) {
				var d = ns(a,
						6),
					e = ns(a, 2),
					f = qs(a),
					g = b,
					h = g.push,
					l = new Gr;
				d = rd(l, 1, d, 0);
				e = rd(d, 2, e, 0);
				f = qd(e, 3, f);
				h.call(g, f)
			}
			return b
		},
		qs = function(a) {
			for (var b = ns(a, 12), c = []; b--;) {
				var d = !0 === !!ns(a, 1),
					e = ns(a, 16);
				if (d)
					for (d = ns(a, 16); e <= d; e++) c.push(e);
				else c.push(e)
			}
			c.sort(function(f, g) {
				return f - g
			});
			return c
		},
		rs = function(a, b, c) {
			for (var d = [], e = 0; e < b; e++)
				if (ns(a, 1)) {
					var f = e + 1;
					if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
					d.push(f)
				} return d
		},
		ns = function(a, b) {
			if (a.h + b > a.l.length) throw Error("Requested length " +
				b + " is past end of string.");
			var c = a.l.substring(a.h, a.h + b);
			a.h += b;
			return parseInt(c, 2)
		};
	ms.prototype.skip = function(a) {
		this.h += a
	};
	var vs = function(a) {
		try {
			var b = Cc(a).map(function(f) {
					return f.toString(2).padStart(8, "0")
				}).join(""),
				c = new ms(b);
			if (3 !== ns(c, 3)) return null;
			var d = Kr(Jr(new Ir, rs(c, 24, ks)), rs(c, 24, ks)),
				e = ns(c, 6);
			0 !== e && Mr(Lr(d, rs(c, e)), rs(c, e));
			return d
		} catch (f) {
			return null
		}
	};
	var ws = function(a) {
		try {
			var b = Cc(a).map(function(d) {
					return d.toString(2).padStart(8, "0")
				}).join(""),
				c = new ms(b);
			return hs(gs(fs(es(ds(cs(bs(as($r(Zr(Yr(Xr(Wr(Vr(Ur(Tr(Sr(Rr(Qr(new Pr, ns(c, 6)), os(c)), os(c)),
					ns(c, 12)), ns(c, 12)), ns(c, 6)), ps(
				c)), ns(c, 12)), ns(c, 6)), !!ns(c, 1)), !!ns(c, 1)), rs(c,
				12, ls)), rs(c, 24, ks)), rs(c, 24, ks)), !!ns(c, 1)), ps(c)), ts(c)), ts(c)), us(c))
		} catch (d) {
			return null
		}
	};
	var ys = function(a) {
			if (!a) return null;
			var b = a.split(".");
			if (4 < b.length) return null;
			a = ws(b[0]);
			if (!a) return null;
			var c = new is;
			a = vd(c, 1, a);
			b.shift();
			b = r(b);
			for (c = b.next(); !c.done; c = b.next()) switch (c = c.value, xs(c)) {
				case 1:
				case 2:
					break;
				case 3:
					c = vs(c);
					if (!c) return null;
					vd(a, 2, c);
					break;
				default:
					return null
			}
			return a
		},
		xs = function(a) {
			try {
				var b = Cc(a).map(function(c) {
					return c.toString(2).padStart(8, "0")
				}).join("");
				return ns(new ms(b), 3)
			} catch (c) {
				return -1
			}
		};
	var zs = function(a, b) {
		var c = {};
		if (Array.isArray(b) && 0 !== b.length) {
			b = r(b);
			for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d)
		} else
			for (a = r(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
		delete c[0];
		return c
	};
	var Bs = function(a) {
		C.call(this, a, -1, As)
	};
	t(Bs, C);
	var As = [6];
	var Cs = /^((market|itms|intent|itms-appss):\/\/)/i;
	var Ds = function(a, b) {
		this.l = this.C = this.A = "";
		this.I = null;
		this.L = this.h = "";
		this.B = !1;
		var c;
		a instanceof Ds ? (this.B = void 0 !== b ? b : a.B, Es(this, a.A), this.C = a.C, this.l = a.l, Fs(this,
				a.I), this.h = a.h, Gs(this, Hs(a.o)), this.L = a.F()) : a && (c = String(a).match(Ef)) ? (this
				.B = !!b, Es(this, c[1] || "", !0), this.C = Is(c[2] || ""), this.l = Is(c[3] || "", !0), Fs(
					this, c[4]), this.h = Is(c[5] || "", !0), Gs(this, c[6] || "", !0), this.L = Is(c[7] || "")
				) : (this.B = !!b, this.o = new Js(null, this.B))
	};
	Ds.prototype.toString = function() {
		var a = [],
			b = this.A;
		b && a.push(Ks(b, Ls, !0), ":");
		var c = this.l;
		if (c || "file" == b) a.push("//"), (b = this.C) && a.push(Ks(b, Ls, !0), "@"), a.push(
				encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.I, null != c &&
			a.push(":", String(c));
		if (c = this.h) this.l && "/" != c.charAt(0) && a.push("/"), a.push(Ks(c, "/" == c.charAt(0) ? Ms : Ns,
			!0));
		(c = this.o.toString()) && a.push("?", c);
		(c = this.F()) && a.push("#", Ks(c, Os));
		return a.join("")
	};
	Ds.prototype.resolve = function(a) {
		var b = this.H(),
			c = !!a.A;
		c ? Es(b, a.A) : c = !!a.C;
		c ? b.C = a.C : c = !!a.l;
		c ? b.l = a.l : c = null != a.I;
		var d = a.h;
		if (c) Fs(b, a.I);
		else if (c = !!a.h) {
			if ("/" != d.charAt(0))
				if (this.l && !this.h) d = "/" + d;
				else {
					var e = b.h.lastIndexOf("/"); - 1 != e && (d = b.h.substr(0, e + 1) + d)
				} e = d;
			if (".." == e || "." == e) d = "";
			else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
				d = 0 == e.lastIndexOf("/", 0);
				e = e.split("/");
				for (var f = [], g = 0; g < e.length;) {
					var h = e[g++];
					"." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length &&
						"" !=
						f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0)
				}
				d = f.join("/")
			} else d = e
		}
		c ? b.h = d : c = "" !== a.o.toString();
		c ? Gs(b, Hs(a.o)) : c = !!a.L;
		c && (b.L = a.F());
		return b
	};
	Ds.prototype.H = function() {
		return new Ds(this)
	};
	var Es = function(a, b, c) {
			a.A = c ? Is(b, !0) : b;
			a.A && (a.A = a.A.replace(/:$/, ""))
		},
		Fs = function(a, b) {
			if (b) {
				b = Number(b);
				if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
				a.I = b
			} else a.I = null
		},
		Gs = function(a, b, c) {
			b instanceof Js ? (a.o = b, Ps(a.o, a.B)) : (c || (b = Ks(b, Qs)), a.o = new Js(b, a.B))
		},
		Rs = function(a, b, c) {
			a.o.set(b, c);
			return a
		};
	Ds.prototype.F = function() {
		return this.L
	};
	var Ss = function(a) {
			return a instanceof Ds ? a.H() : new Ds(a, void 0)
		},
		Is = function(a, b) {
			return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
		},
		Ks = function(a, b, c) {
			return "string" === typeof a ? (a = encodeURI(a).replace(b, Ts), c && (a = a.replace(
				/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
		},
		Ts = function(a) {
			a = a.charCodeAt(0);
			return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
		},
		Ls = /[#\/\?@]/g,
		Ns = /[#\?:]/g,
		Ms = /[#\?]/g,
		Qs = /[#\?@]/g,
		Os = /#/g,
		Js = function(a, b) {
			this.l = this.h = null;
			this.o = a || null;
			this.A = !!b
		},
		Us =
		function(a) {
			a.h || (a.h = new Map, a.l = 0, a.o && Gf(a.o, function(b, c) {
				a.add(bf(b), c)
			}))
		};
	Js.prototype.add = function(a, b) {
		Us(this);
		this.o = null;
		a = Vs(this, a);
		var c = this.h.get(a);
		c || this.h.set(a, c = []);
		c.push(b);
		this.l += 1;
		return this
	};
	Js.prototype.remove = function(a) {
		Us(this);
		a = Vs(this, a);
		return this.h.has(a) ? (this.o = null, this.l -= this.h.get(a).length, this.h.delete(a)) : !1
	};
	Js.prototype.clear = function() {
		this.h = this.o = null;
		this.l = 0
	};
	Js.prototype.isEmpty = function() {
		Us(this);
		return 0 == this.l
	};
	var Ws = function(a, b) {
		Us(a);
		b = Vs(a, b);
		return a.h.has(b)
	};
	k = Js.prototype;
	k.forEach = function(a, b) {
		Us(this);
		this.h.forEach(function(c, d) {
			c.forEach(function(e) {
				a.call(b, e, d, this)
			}, this)
		}, this)
	};
	k.Qb = function() {
		Us(this);
		for (var a = Array.from(this.h.values()), b = Array.from(this.h.keys()), c = [], d = 0; d < b
			.length; d++)
			for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
		return c
	};
	k.nb = function(a) {
		Us(this);
		var b = [];
		if ("string" === typeof a) Ws(this, a) && (b = b.concat(this.h.get(Vs(this, a))));
		else {
			a = Array.from(this.h.values());
			for (var c = 0; c < a.length; c++) b = b.concat(a[c])
		}
		return b
	};
	k.set = function(a, b) {
		Us(this);
		this.o = null;
		a = Vs(this, a);
		Ws(this, a) && (this.l -= this.h.get(a).length);
		this.h.set(a, [b]);
		this.l += 1;
		return this
	};
	k.get = function(a, b) {
		if (!a) return b;
		a = this.nb(a);
		return 0 < a.length ? String(a[0]) : b
	};
	k.toString = function() {
		if (this.o) return this.o;
		if (!this.h) return "";
		for (var a = [], b = Array.from(this.h.keys()), c = 0; c < b.length; c++) {
			var d = b[c],
				e = encodeURIComponent(String(d));
			d = this.nb(d);
			for (var f = 0; f < d.length; f++) {
				var g = e;
				"" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
				a.push(g)
			}
		}
		return this.o = a.join("&")
	};
	var Hs = function(a) {
			var b = new Js;
			b.o = a.o;
			a.h && (b.h = new Map(a.h), b.l = a.l);
			return b
		},
		Vs = function(a, b) {
			b = String(b);
			a.A && (b = b.toLowerCase());
			return b
		},
		Ps = function(a, b) {
			b && !a.A && (Us(a), a.o = null, a.h.forEach(function(c, d) {
				var e = d.toLowerCase();
				d != e && (this.remove(d), this.remove(e), 0 < c.length && (this.o = null, this.h.set(
					Vs(this, e), Pb(c)), this.l += c.length))
			}, a));
			a.A = b
		};
	var Xs =
		"://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav"
		.split(" "),
		Ys = /\bocr\b/,
		Zs = 0,
		$s = {};

	function at(a) {
		if (ib(ef(a))) return !1;
		if (0 <= a.indexOf("://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&")) return !0;
		try {
			var b = new Ds(a)
		} catch (c) {
			return null != Hb(Xs, function(d) {
				return 0 < a.search(d)
			})
		}
		return b.F().match(Ys) ? !0 : null != Hb(Xs, function(c) {
			return null != a.match(c)
		})
	}

	function bt(a, b) {
		if (a && (a = ct(a), !ib(a))) {
			var c = 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"';
			b ? dt(function(d) {
				et(d ? c : 'javascript:"<body><object data=\\""+' + a +
					'+"\\" type=\\"text/html\\" width=1 height=1 style=\\"visibility:hidden;\\"></body>"'
					)
			}) : et(c)
		}
	}

	function et(a) {
		var b = wf("IFRAME", {
			src: a,
			style: "display:none"
		});
		a = mf(b).body;
		var c = bk(function() {
			sj(d);
			xf(b)
		}, 15E3);
		var d = jj(b, ["load", "error"], function() {
			bk(function() {
				v.clearTimeout(c);
				xf(b)
			}, 5E3)
		});
		a.appendChild(b)
	}

	function dt(a) {
		var b = $s.imageLoadingEnabled;
		if (null != b) a(b);
		else {
			var c = !1;
			ft(function(d, e) {
				delete $s[e];
				c || (c = !0, null == $s.imageLoadingEnabled && ($s.imageLoadingEnabled = d), a(d))
			})
		}
	}

	function ft(a) {
		var b = new Image,
			c = "" + Zs++;
		$s[c] = b;
		b.onload = function() {
			clearTimeout(d);
			a(!0, c)
		};
		var d = setTimeout(function() {
			a(!1, c)
		}, 300);
		b.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
	}

	function gt(a) {
		if (a) {
			var b = uf(document, "OBJECT");
			b.data = a;
			b.width = "1";
			b.height = "1";
			b.style.visibility = "hidden";
			var c = "" + Zs++;
			$s[c] = b;
			b.onload = b.onerror = function() {
				delete $s[c]
			};
			document.body.appendChild(b)
		}
	}

	function ht(a) {
		if (a) {
			var b = new Image,
				c = "" + Zs++;
			$s[c] = b;
			b.onload = b.onerror = function() {
				delete $s[c]
			};
			b.src = a
		}
	}

	function it(a, b) {
		a && (b ? dt(function(c) {
			c ? ht(a) : gt(a)
		}) : ht(a))
	}

	function ct(a) {
		if (!(a instanceof fe))
			if (a = "object" == typeof a && a.Sa ? a.Ga() : String(a), je.test(a)) a = new fe(a, ee);
			else {
				a = String(a);
				a = a.replace(/(%0A|%0D)/g, "");
				var b = a.match(ie);
				a = b && he.test(b[1]) ? new fe(a, ee) : null
			} b = ge(a || ke);
		if ("about:invalid#zClosurez" === b) return "";
		if (b instanceof pe) a = b;
		else {
			var c = "object" == typeof b;
			a = null;
			c && b.Ac && (a = b.wc());
			b = c && b.Sa ? b.Ga() : String(b);
			rb.test(b) && (-1 != b.indexOf("&") && (b = b.replace(kb, "&amp;")), -1 != b.indexOf("<") && (b = b
				.replace(lb, "&lt;")), -1 != b.indexOf(">") && (b = b.replace(nb,
				"&gt;")), -1 != b.indexOf('"') && (b = b.replace(ob, "&quot;")), -1 != b.indexOf("'") && (
				b = b.replace(pb, "&#39;")), -1 != b.indexOf("\x00") && (b = b.replace(qb, "&#0;")));
			a = re(b, a)
		}
		a = qe(a).toString();
		return encodeURIComponent(String(Dh(new Bh(void 0), a)))
	};
	var jt = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
	var kt = function(a) {
		var b = a.Oa,
			c = a.height,
			d = a.width,
			e = void 0 === a.xa ? !1 : a.xa;
		this.Wa = a.Wa;
		this.Oa = b;
		this.height = c;
		this.width = d;
		this.xa = e
	};
	kt.prototype.getHeight = function() {
		return this.height
	};
	kt.prototype.getWidth = function() {
		return this.width
	};
	var lt = function(a) {
		var b = a.tf,
			c = a.se,
			d = a.sf,
			e = a.re;
		kt.call(this, {
			Wa: a.Wa,
			Oa: a.Oa,
			height: a.height,
			width: a.width,
			xa: void 0 === a.xa ? !1 : a.xa
		});
		this.A = b;
		this.l = c;
		this.o = d;
		this.h = e
	};
	t(lt, kt);
	var mt = function(a) {
		var b = a.Xe;
		kt.call(this, {
			Wa: a.Wa,
			Oa: a.Oa,
			height: a.height,
			width: a.width,
			xa: void 0 === a.xa ? !1 : a.xa
		});
		this.h = b
	};
	t(mt, kt);
	mt.prototype.getMediaUrl = function() {
		return this.h
	};
	/*

	Math.uuid.js (v1.4)
	http://www.broofa.com
	mailto:robert@broofa.com
	Copyright (c) 2010 Robert Kieffer
	Dual licensed under the MIT and GPL licenses.
	*/
	var nt = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
		ot = function() {
			for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] =
				"-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15,
					b >>= 4, a[d] = nt[19 == d ? c & 3 | 8 : c]);
			return a.join("")
		};

	function pt(a) {
		return new(Function.prototype.bind.apply(a, [null].concat(ha(Ga.apply(1, arguments)))))
	};
	var R = {},
		qt = (R[18] = -1, R[22] = -1, R[43] = 350, R[44] = 350, R[45] = 350, R[59] = -1, R[133] = 350, R[134] = 350,
			R[135] = 350, R[136] = 350, R[139] = 50, R[140] = 50, R[141] = 50, R[160] = 350, R[242] = 150, R[243] =
			150, R[244] = 150, R[245] = 150, R[249] = 50, R[250] = 50, R[251] = 50, R[278] = 150, R[342] = -1, R[
				343] = -1, R[344] = -1, R[345] = -1, R[346] = -1, R[347] = -1, R[396] = -1, R[398] = -1, R),
		S = {},
		rt = (S[18] = !1, S[22] = !1, S[43] = !0, S[44] = !0, S[45] = !0, S[59] = !1, S[133] = !0, S[134] = !0, S[
				135] = !0, S[136] = !0, S[139] = !0, S[140] = !0, S[141] = !0, S[160] = !0, S[242] = !0, S[243] = !
			0, S[244] = !0, S[245] = !0, S[249] = !0, S[250] = !0, S[251] = !0, S[278] = !0, S[342] = !1, S[343] = !
			1, S[344] = !1, S[345] = !1, S[346] = !1, S[347] = !1, S[396] = !0, S[398] = !0, S),
		U = {},
		tt = (U[18] = "video/mp4", U[22] = "video/mp4", U[43] = "video/webm", U[44] = "video/webm", U[45] =
			"video/webm", U[59] = "video/mp4", U[133] = "video/mp4", U[134] = "video/mp4", U[135] = "video/mp4", U[
				136] = "video/mp4", U[139] = "audio/mp4", U[140] = "audio/mp4", U[141] = "audio/mp4", U[160] =
			"video/mp4", U[242] = "video/webm", U[243] = "video/webm", U[244] = "video/webm", U[245] = "video/webm",
			U[249] = "audio/webm", U[250] =
			"audio/webm", U[251] = "audio/webm", U[278] = "video/webm", U[342] = "video/mp4", U[343] = "video/mp4",
			U[344] = "video/mp4", U[345] = "video/mp4", U[346] = "video/mp4", U[347] = "video/mp4", U[396] =
			"video/mp4", U[398] = "video/mp4", U),
		V = {},
		ut = (V[18] = "avc1.42001E, mp4a.40.2", V[22] = "avc1.64001F, mp4a.40.2", V[43] = "vp8, vorbis", V[44] =
			"vp8, vorbis", V[45] = "vp8, vorbis", V[59] = "avc1.4D001F, mp4a.40.2", V[133] = "avc1.4D401E", V[134] =
			"avc1.4D401E", V[135] = "avc1.4D401E", V[136] = "avc1.4D401E", V[139] = "mp4a.40.2", V[140] =
			"mp4a.40.2", V[141] = "mp4a.40.2",
			V[160] = "avc1.4D401E", V[242] = "vp9", V[243] = "vp9", V[244] = "vp9", V[245] = "vp9", V[249] = "opus",
			V[250] = "opus", V[251] = "opus", V[278] = "vp9", V[342] = "avc1.42E01E, mp4a.40.2", V[343] =
			"avc1.42E01E, mp4a.40.2", V[344] = "avc1.42E01E, mp4a.40.2", V[345] = "avc1.42E01E, mp4a.40.2", V[346] =
			"avc1.42E01E, mp4a.40.2", V[347] = "avc1.4D001F, mp4a.40.2", V[396] = "av01.0.05M.08", V[398] =
			"av01.0.05M.08", V);
	var vt = function() {};
	vt.prototype.h = null;
	var xt = function(a) {
		var b;
		(b = a.h) || (b = {}, wt(a) && (b[0] = !0, b[1] = !0), b = a.h = b);
		return b
	};
	var yt, zt = function() {};
	Za(zt, vt);
	var At = function(a) {
			return (a = wt(a)) ? new ActiveXObject(a) : new XMLHttpRequest
		},
		wt = function(a) {
			if (!a.l && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
				for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"],
						c = 0; c < b.length; c++) {
					var d = b[c];
					try {
						return new ActiveXObject(d), a.l = d
					} catch (e) {}
				}
				throw Error(
					"Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"
					);
			}
			return a.l
		};
	yt = new zt;
	var Bt = function(a) {
		N.call(this);
		this.headers = new Map;
		this.J = a || null;
		this.l = !1;
		this.H = this.h = null;
		this.N = "";
		this.B = 0;
		this.o = this.M = this.C = this.K = !1;
		this.F = 0;
		this.D = null;
		this.Z = "";
		this.U = this.V = !1;
		this.R = null
	};
	Za(Bt, N);
	var Ct = /^https?$/i,
		Dt = ["POST", "PUT"];
	Bt.prototype.W = function(a) {
		this.R = a
	};
	var Ht = function(a, b, c, d) {
			if (a.h) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.N + "; newUri=" + b);
			c = c ? c.toUpperCase() : "GET";
			a.N = b;
			a.B = 0;
			a.K = !1;
			a.l = !0;
			a.h = a.J ? At(a.J) : At(yt);
			a.H = a.J ? xt(a.J) : xt(yt);
			a.h.onreadystatechange = Wa(a.X, a);
			try {
				a.M = !0, a.h.open(c, String(b), !0), a.M = !1
			} catch (g) {
				Et(a);
				return
			}
			b = d || "";
			d = new Map(a.headers);
			var e = Array.from(d.keys()).find(function(g) {
					return "content-type" == g.toLowerCase()
				}),
				f = v.FormData && b instanceof v.FormData;
			!Kb(Dt, c) || e || f || d.set("Content-Type",
				"application/x-www-form-urlencoded;charset=utf-8");
			c = r(d);
			for (d = c.next(); !d.done; d = c.next()) e = r(d.value), d = e.next().value, e = e.next().value, a.h
				.setRequestHeader(d, e);
			a.Z && (a.h.responseType = a.Z);
			"withCredentials" in a.h && a.h.withCredentials !== a.V && (a.h.withCredentials = a.V);
			if ("setTrustToken" in a.h && a.R) try {
				a.h.setTrustToken(a.R)
			} catch (g) {}
			try {
				Ft(a), 0 < a.F && (a.U = Gt(a.h), a.U ? (a.h.timeout = a.F, a.h.ontimeout = Wa(a.$, a)) : a.D = bk(a
					.$, a.F, a)), a.C = !0, a.h.send(b), a.C = !1
			} catch (g) {
				Et(a)
			}
		},
		Gt = function(a) {
			return Zb &&
				pc(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
		};
	Bt.prototype.$ = function() {
		"undefined" != typeof Ka && this.h && (this.B = 8, this.dispatchEvent("timeout"), this.abort(8))
	};
	var Et = function(a) {
			a.l = !1;
			a.h && (a.o = !0, a.h.abort(), a.o = !1);
			a.B = 5;
			It(a);
			Jt(a)
		},
		It = function(a) {
			a.K || (a.K = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
		};
	Bt.prototype.abort = function(a) {
		this.h && this.l && (this.l = !1, this.o = !0, this.h.abort(), this.o = !1, this.B = a || 7, this
			.dispatchEvent("complete"), this.dispatchEvent("abort"), Jt(this))
	};
	Bt.prototype.O = function() {
		this.h && (this.l && (this.l = !1, this.o = !0, this.h.abort(), this.o = !1), Jt(this, !0));
		Bt.ya.O.call(this)
	};
	Bt.prototype.X = function() {
		this.Ia() || (this.M || this.C || this.o ? Kt(this) : this.ga())
	};
	Bt.prototype.ga = function() {
		Kt(this)
	};
	var Kt = function(a) {
			if (a.l && "undefined" != typeof Ka && (!a.H[1] || 4 != (a.h ? a.h.readyState : 0) || 2 != Lt(a)))
				if (a.C && 4 == (a.h ? a.h.readyState : 0)) bk(a.X, 0, a);
				else if (a.dispatchEvent("readystatechange"), a.isComplete()) {
				a.l = !1;
				try {
					var b = Lt(a);
					a: switch (b) {
						case 200:
						case 201:
						case 202:
						case 204:
						case 206:
						case 304:
						case 1223:
							var c = !0;
							break a;
						default:
							c = !1
					}
					var d;
					if (!(d = c)) {
						var e;
						if (e = 0 === b) {
							var f = String(a.N).match(Ef)[1] || null;
							if (!f && v.self && v.self.location) {
								var g = v.self.location.protocol;
								f = g.substr(0, g.length - 1)
							}
							e = !Ct.test(f ?
								f.toLowerCase() : "")
						}
						d = e
					}
					d ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : (a.B = 6, It(a))
				} finally {
					Jt(a)
				}
			}
		},
		Jt = function(a, b) {
			if (a.h) {
				Ft(a);
				var c = a.h,
					d = a.H[0] ? Na : null;
				a.h = null;
				a.H = null;
				b || a.dispatchEvent("ready");
				try {
					c.onreadystatechange = d
				} catch (e) {}
			}
		},
		Ft = function(a) {
			a.h && a.U && (a.h.ontimeout = null);
			a.D && (v.clearTimeout(a.D), a.D = null)
		};
	Bt.prototype.isActive = function() {
		return !!this.h
	};
	Bt.prototype.isComplete = function() {
		return 4 == (this.h ? this.h.readyState : 0)
	};
	var Lt = function(a) {
			try {
				return 2 < (a.h ? a.h.readyState : 0) ? a.h.status : -1
			} catch (b) {
				return -1
			}
		},
		Mt = function(a) {
			try {
				return a.h ? a.h.responseText : ""
			} catch (b) {
				return ""
			}
		},
		Nt = function(a) {
			if (a.h) {
				a: {
					a = a.h.responseText;
					if (v.JSON) try {
						var b = v.JSON.parse(a);
						break a
					} catch (c) {}
					b = Ah(a)
				}
				return b
			}
		},
		Ot = function(a, b) {
			if (a.h && a.isComplete()) return a = a.h.getResponseHeader(b), null === a ? void 0 : a
		};
	var Pt = RegExp("/itag/(\\d+)/");

	function Qt(a) {
		var b = parseInt(If(a, "itag"), 10);
		return b ? b : (a = a.match(Pt)) && 2 == a.length ? parseInt(a[1], 10) : null
	}

	function Rt(a) {
		var b = tt[a];
		a = ut[a];
		b ? (b = ef(b).toLowerCase(), b = a ? b + '; codecs="' + ef(a) + '"' : b) : b = "";
		return b
	}

	function St(a, b) {
		if ("function" === typeof CustomEvent) return new CustomEvent(a, {
			detail: b
		});
		var c = document.createEvent("CustomEvent");
		c.initCustomEvent(a, !1, !0, b);
		return c
	};
	var Tt = -1;
	var Ut = function() {
		this.h = Date.now()
	};
	Ut.prototype.reset = function() {
		this.h = Date.now()
	};
	var Vt = function(a) {
		a = a.h + 5E3 - Date.now();
		return 0 < a ? a : 0
	};
	var Wt =
		"ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com"
		.split(" "),
		Xt = ["c.googlesyndication.com"];

	function Yt(a, b) {
		b = void 0 === b ? window.location.protocol : b;
		var c = !1;
		Zt(a, Xt) ? c = !1 : b.includes("https") && Zt(a, Wt) && (c = !0);
		if (c) {
			b = new Ds(a);
			if ("https" == b.A) return a;
			J(K(), "htp", "1");
			Es(b, "https");
			return b.toString()
		}
		return a
	}

	function Zt(a, b) {
		return (new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") +
			")(:[0-9]+)?([/?#]|$)", "i")).test(a)
	};
	var $t = /OS (\S+) like/,
		au = /Android ([\d\.]+)/;

	function bu(a, b) {
		a = (a = a.exec(vb())) ? a[1] : "";
		a = a.replace(/_/g, ".");
		return 0 <= ub(a, b)
	}
	var cu = function() {
			return cc && "ontouchstart" in document.documentElement
		},
		du = function(a) {
			return hc && bu($t, a)
		},
		eu = function(a) {
			return (a = void 0 === a ? null : a) && "function" === typeof a.getAttribute ? a.getAttribute(
				"playsinline") ? !0 : !1 : !1
		};
	var fu = function(a, b) {
		var c = Error.call(this, a);
		this.message = c.message;
		"stack" in c && (this.stack = c.stack);
		this.errorCode = a;
		this.httpStatus = b
	};
	t(fu, Error);
	var hu = function(a) {
			gu();
			return re(a, null)
		},
		gu = Na;
	var iu = function() {
			if (!Zb) return !1;
			try {
				return new ActiveXObject("MSXML2.DOMDocument"), !0
			} catch (a) {
				return !1
			}
		},
		ju = Zb && iu();
	var ku = function(a) {
		M.call(this);
		this.A = a;
		this.l = {}
	};
	Za(ku, M);
	var lu = [];
	ku.prototype.T = function(a, b, c, d) {
		return mu(this, a, b, c, d)
	};
	var mu = function(a, b, c, d, e, f) {
		Array.isArray(c) || (c && (lu[0] = c.toString()), c = lu);
		for (var g = 0; g < c.length; g++) {
			var h = kj(b, c[g], d || a.handleEvent, e || !1, f || a.A || a);
			if (!h) break;
			a.l[h.key] = h
		}
		return a
	};
	ku.prototype.Db = function(a, b, c, d) {
		return nu(this, a, b, c, d)
	};
	var nu = function(a, b, c, d, e, f) {
		if (Array.isArray(c))
			for (var g = 0; g < c.length; g++) nu(a, b, c[g], d, e, f);
		else {
			b = jj(b, c, d || a.handleEvent, e, f || a.A || a);
			if (!b) return a;
			a.l[b.key] = b
		}
		return a
	};
	ku.prototype.Va = function(a, b, c, d, e) {
		if (Array.isArray(b))
			for (var f = 0; f < b.length; f++) this.Va(a, b[f], c, d, e);
		else c = c || this.handleEvent, d = Pa(d) ? !!d.capture : !!d, e = e || this.A || this, c = lj(c), d = !
			!d, b = $i(a) ? a.zb(b, c, d, e) : a ? (a = nj(a)) ? a.zb(b, c, d, e) : null : null, b && (sj(b),
				delete this.l[b.key])
	};
	var ou = function(a) {
		Hd(a.l, function(b, c) {
			this.l.hasOwnProperty(c) && sj(b)
		}, a);
		a.l = {}
	};
	ku.prototype.O = function() {
		ku.ya.O.call(this);
		ou(this)
	};
	ku.prototype.handleEvent = function() {
		throw Error("EventHandler.handleEvent not implemented");
	};
	var pu = function() {};
	pu.prototype.get = function(a) {
		return qu({
			url: a.url,
			timeout: a.timeout,
			withCredentials: void 0 === a.withCredentials ? !0 : a.withCredentials,
			method: "GET",
			Na: void 0 === a.Na ? void 0 : a.Na
		})
	};
	pu.prototype.post = function(a) {
		var b = a.timeout,
			c = void 0 === a.withCredentials ? !0 : a.withCredentials,
			d = void 0 === a.headers ? {} : a.headers,
			e = void 0 === a.content ? void 0 : a.content;
		a = new Ds(a.url);
		e || (e = a.o.toString(), Gs(a, ""));
		return qu({
			url: a.toString(),
			timeout: b,
			withCredentials: c,
			method: "POST",
			content: e,
			headers: d
		})
	};
	var qu = function(a) {
			var b = a.url,
				c = a.timeout,
				d = a.withCredentials,
				e = a.method,
				f = void 0 === a.content ? void 0 : a.content,
				g = void 0 === a.Na ? void 0 : a.Na,
				h = void 0 === a.headers ? {} : a.headers;
			return ru({
				url: b,
				timeout: c,
				withCredentials: d,
				method: e,
				content: f,
				Na: g,
				headers: h
			}).then(function(l) {
				return Promise.resolve(l)
			}, function(l) {
				return l instanceof Error && 6 == l.message && d ? ru({
					url: b,
					timeout: c,
					withCredentials: !d,
					method: e,
					content: f,
					Na: g,
					headers: h
				}) : Promise.reject(l)
			})
		},
		ru = function(a) {
			var b = a.url,
				c = a.timeout,
				d = a.withCredentials,
				e = a.method,
				f = void 0 === a.content ? void 0 : a.content,
				g = void 0 === a.Na ? void 0 : a.Na;
			a = void 0 === a.headers ? {} : a.headers;
			var h = new Bt;
			h.V = d;
			h.F = Math.max(0, Vt(c));
			h.W && g && h.W(g);
			for (var l in a) h.headers.set(l, a[l]);
			var n = new ku;
			return new Promise(function(m, x) {
				n.Db(h, "success", function() {
					a: {
						if (Qm()) try {
							Nt(h);
							var u = "application/json";
							break a
						} catch (ia) {
							u = "application/xml";
							break a
						}
						u = Ot(h, "Content-Type") || ""
					}
					if (-1 != u.indexOf("application/json")) m(Nt(h) || {});
					else {
						try {
							var A = h.h ? h.h.responseXML : null
						} catch (ia) {
							A = null
						}
						if (null ==
							A)
							if (A = Mt(h), "undefined" != typeof DOMParser) u = new DOMParser, A =
								hu(A), A = u.parseFromString(qe(A), "application/xml");
							else if (ju) {
							u = new ActiveXObject("MSXML2.DOMDocument");
							u.resolveExternals = !1;
							u.validateOnParse = !1;
							try {
								u.setProperty("ProhibitDTD", !0), u.setProperty("MaxXMLSize", 2048),
									u.setProperty("MaxElementDepth", 256)
							} catch (ia) {}
							u.loadXML(A);
							A = u
						} else throw Error("Your browser does not support loading xml documents");
						u = Ci.isSelected();
						var z;
						if (z = A && A.documentElement)(z = A.documentElement) && "VAST" != !z
							.nodeName ?
							(z = z.getAttribute("version")) ? (z = parseInt(z, 10), z = null == z ||
								isNaN(z) ? null : z) : z = null : z = null, z = null == z || 2 >
							z || 4 < z ? !1 : !0;
						if (!z && u) {
							u = {
								vastUrl: b.substring(0, 200),
								responseText: Mt(h).substring(0, 200),
								status: Lt(h),
								origin: window.location.origin
							};
							Qm() || (u.contentType = Ot(h, "Content-Type"), u.acao = Ot(h,
								"Access-Control-Allow-Origin"), u.acac = Ot(h,
								"Access-Control-Allow-Credentials"));
							z = K();
							for (var O = r(Object.keys(u)), T = O.next(); !T.done; T = O.next()) T =
								T.value, J(z, T, u[T])
						}
						m(A)
					}
					n.dispose();h.dispose()
				});
				n.Db(h, ["error",
					"timeout"
				], function() {
					x(new fu(h.B, Lt(h)));
					n.dispose();
					h.dispose()
				});
				Ht(h, Yt(b), e, f)
			})
		};

	function tu(a, b) {
		return ib(b) ? !1 : (new RegExp(a)).test(b)
	}

	function uu(a) {
		var b = {};
		a.split(",").forEach(function(c) {
			var d = c.split("=");
			2 == d.length && (c = jb(d[0]), d = jb(d[1]), 0 < c.length && (b[c] = d))
		});
		return b
	}

	function vu(a) {
		var b =
			"af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu"
			.split(" ");
		if (!a) return null;
		a = a.toLowerCase().replace("-", "_");
		if (b.includes(a)) return a;
		a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "";
		return b.includes(a) ? a : null
	};
	var xu = function(a) {
		Ds.call(this, a);
		this.D = new Map;
		a = this.h;
		var b = a.indexOf(";"),
			c = null;
		0 <= b ? (this.h = a.substring(0, b), c = a.substring(b + 1)) : this.h = a;
		wu(this, c)
	};
	t(xu, Ds);
	xu.prototype.toString = function() {
		return yu(this, Ds.prototype.toString.call(this))
	};
	xu.prototype.F = function() {
		return ""
	};
	var wu = function(a, b) {
			ib(ef(b)) || b.split(";").forEach(function(c) {
				var d = c.indexOf("=");
				if (!(0 >= d)) {
					var e = bf(c.substring(0, d));
					c = bf(c.substring(d + 1));
					d = a.D.get(e);
					null != d ? d.includes(c) || d.push(c) : d = [ef(c)];
					a.D.set(e, d)
				}
			}, a)
		},
		zu = function(a) {
			if (ib(ef("ord"))) return null;
			a = a.D.get("ord");
			return null != a ? a : null
		},
		Au = function(a, b) {
			ib(ef("ord")) || (b = b.map(ef), a.D.set("ord", b))
		},
		yu = function(a, b) {
			b = [ef(b)];
			b.push.apply(b, ha(Bu(a)));
			return b.join(";")
		},
		Bu = function(a) {
			var b = zu(a);
			null == b ? b = [ef(Date.now())] : ib(ef("ord")) ||
				a.D.delete("ord");
			var c = [];
			a.D.forEach(function(d, e) {
				d.forEach(function(f) {
					c.push(e + "=" + f)
				})
			});
			c.push("ord=" + b[0]);
			Au(a, b);
			return c
		};
	xu.prototype.H = function() {
		return new xu(this.toString())
	};
	var Cu, Du, Eu, Fu = function() {
			return v.navigator ? v.navigator.userAgent : ""
		},
		Gu = -1 != Fu().indexOf("(iPad") || -1 != Fu().indexOf("(Macintosh") || -1 != Fu().indexOf("(iPod") || -1 !=
		Fu().indexOf("(iPhone");

	function Hu(a, b) {
		b = null != b ? b : "";
		Zb && (b = "");
		if (!ib(ef(a))) {
			var c = a instanceof fe || !Cs.test(a) ? a : new fe(a, ee);
			if (c instanceof fe) a = c;
			else {
				var d = void 0 === d ? Ge : d;
				a: {
					d = void 0 === d ? Ge : d;
					for (c = 0; c < d.length; ++c) {
						var e = d[c];
						if (e instanceof Ee && e.isValid(a)) {
							a = new Ce(a, se);
							break a
						}
					}
					a = void 0
				}
				a = a || De
			}
			window.open(Je(a), "_blank", b)
		}
	};
	var Iu = function(a) {
		N.call(this);
		this.h = a;
		this.B = this.C = !1;
		this.D = this.F = 0;
		this.l = new ak(1E3);
		Ui(this, this.l);
		kj(this.l, "tick", this.H, !1, this);
		kj(this.h, "pause", this.o, !1, this);
		kj(this.h, "playing", this.o, !1, this);
		kj(this.h, "ended", this.o, !1, this);
		kj(this.h, "timeupdate", this.o, !1, this)
	};
	t(Iu, N);
	Iu.prototype.o = function(a) {
		switch (a.type) {
			case "playing":
				Ju(this);
				break;
			case "pause":
			case "ended":
				this.l.enabled && this.l.stop();
				break;
			case "timeupdate":
				!this.C && 0 < this.h.currentTime && (this.C = !0, Ju(this))
		}
	};
	var Ju = function(a) {
		!a.l.enabled && a.C && (a.F = 1E3 * a.h.currentTime, a.D = Date.now(), a.B = !1, a.l.start())
	};
	Iu.prototype.H = function() {
		var a = Date.now(),
			b = 1E3 * this.h.currentTime;
		b - this.F < .5 * (a - this.D) ? this.B || (this.B = !0, this.dispatchEvent("playbackStalled")) : this
			.B = !1;
		this.F = b;
		this.D = a
	};
	var Ku = new Map,
		Lu = function() {
			this.l = this.h = null
		};

	function Mu(a, b, c, d) {
		var e = qg(a);
		b.width <= e.width && b.height <= e.height ? (Nu(d), c(e)) : (e = setTimeout(function() {
			return Mu(a, b, c, d)
		}, 200), d.l = e)
	}

	function Ou(a, b) {
		b = void 0 === b ? new af(1, 1) : b;
		var c = new Lu,
			d = new Promise(function(e) {
				var f = qg(a);
				if (b.width <= f.width && b.height <= f.height) return e(f);
				"ResizeObserver" in window ? (f = new ResizeObserver(function(g) {
					window.requestAnimationFrame(function() {
						for (var h = new af(0, 0), l = r(g), n = l.next(); !n.done; n = l
							.next())
							if (n = n.value, n.contentBoxSize ? (n = Array.isArray(n
										.contentBoxSize) ? n.contentBoxSize[0] : n
									.contentBoxSize, h.width = Math.floor(n.inlineSize), h
									.height = Math.floor(n.blockSize)) : (h.width = Math
									.floor(n.contentRect.width),
									h.height = Math.floor(n.contentRect.height)), b.width <=
								h.width && b.height <= h.height) return Nu(c), e(h)
					})
				}), c.h = f, f.observe(a)) : Mu(a, b, e, c)
			});
		Ku.set(d, c);
		return d
	}

	function Nu(a) {
		a.l && window.clearTimeout(a.l);
		a.h && (a.h.disconnect(), a.h = null)
	};
	var Qu = {
		AUTOPLAY_DISALLOWED: "autoplayDisallowed",
		Cf: "beginFullscreen",
		Df: "canPlay",
		Ef: "canPlayThrough",
		CLICK: "click",
		DURATION_CHANGE: "durationChange",
		Rf: "end",
		Sf: "endFullscreen",
		Tf: "error",
		Xf: "focusSkipButton",
		be: "loadStart",
		LOADED: "loaded",
		Ag: "mediaLoadTimeout",
		Bg: "mediaPlaybackTimeout",
		lc: "pause",
		Mg: "play",
		Og: "playing",
		Wg: "seeked",
		Xg: "seeking",
		Yg: "skip",
		le: "skipShown",
		$g: "stalled",
		qc: "start",
		ih: "timeUpdate",
		gh: "timedMetadata",
		pe: "volumeChange",
		wh: "waiting"
	};
	var Su = function(a) {
			this.h = a;
			this.l = Ru(a)
		},
		Ru = function(a) {
			return new Map(a.h.split("/").reduce(function(b, c, d) {
				d % 2 ? b[b.length - 1].push(c) : b.push([c]);
				return b
			}, []))
		};
	Su.prototype.getId = function() {
		return Tu(this, "id")
	};
	var Tu = function(a, b) {
		var c = a.h.o.get(b);
		return c ? c : (a = a.l.get(b)) ? a : null
	};
	var Uu = function() {};
	var Vu = ["doubleclick.net"];

	function Wu() {
		if (Ab() || y("iPad") || y("iPod")) return !1;
		if (y("Android")) {
			if (void 0 === Eu) {
				a: {
					if (void 0 === Cu) {
						if (Gu) {
							var a = -1 != Fu().indexOf("Safari");
							var b = (new Ds(window.location.href)).o.nb("js");
							b: {
								if ((b = b.length ? b[0] : "") && 0 == b.lastIndexOf("afma-", 0)) {
									var c = b.lastIndexOf("v");
									if (-1 < c && (b = b.substr(c + 1).match(
											/^(\d+\.\d+\.\d+|^\d+\.\d+|^\d+)(-.*)?$/))) {
										b = b[1];
										break b
									}
								}
								b = "0.0.0"
							}
							if (!a || "0.0.0" !== b) {
								a = Cu = !0;
								break a
							}
						}
						Cu = !1
					}
					a = Cu
				}
				a || (void 0 === Du && (Du = -1 != Fu().indexOf("afma-sdk-a") ? !0 : !1), a = Du);Eu = a
			}
			return Eu ?
				!0 : Cf() ? !1 : Xu()
		}
		a = y("Macintosh") || y("Linux") || y("Windows") || y("CrOS");
		return (Fi.isSelected() || Di.isSelected() || Ei.isSelected()) && a && zb() ? Xu() : !1
	}

	function Xu() {
		var a = !1,
			b = (new Ds(window.location.href)).l;
		Vu.forEach(function(c) {
			b.includes(c) && (a = !0)
		});
		return a
	}

	function Yu(a) {
		for (var b = 0, c = 0; c < a.length; c++) b = Math.imul(31, b) + a.charCodeAt(c) | 0;
		return b.toString()
	};
	var Zu, bv = function(a, b, c) {
		if ("number" === typeof a) var d = {
			name: $u(a)
		};
		else d = a, a = av(a.name);
		this.code = a;
		this.h = d;
		b = "Error " + b + ": " + this.getName();
		c && (b += ", " + c);
		ab.call(this, b)
	};
	Za(bv, ab);
	bv.prototype.getName = function() {
		return this.h.name || ""
	};
	var cv = {
			ne: 1,
			Gg: 2,
			NOT_FOUND_ERR: 3,
			Ud: 4,
			Xd: 5,
			Hg: 6,
			me: 7,
			ABORT_ERR: 8,
			ke: 9,
			kh: 10,
			TIMEOUT_ERR: 11,
			je: 12,
			INVALID_ACCESS_ERR: 13,
			INVALID_STATE_ERR: 14
		},
		dv = (v.h || v.l || cv).ne,
		ev = (v.h || v.l || cv).NOT_FOUND_ERR,
		fv = (v.h || v.l || cv).Ud,
		gv = (v.h || v.l || cv).Xd,
		hv = (v.h || v.l || cv).me,
		iv = (v.h || v.l || cv).ABORT_ERR,
		jv = (v.h || v.l || cv).ke,
		kv = (v.h || v.l || cv).TIMEOUT_ERR,
		lv = (v.h || v.l || cv).je,
		mv = (v.DOMException || cv).INVALID_ACCESS_ERR,
		nv = (v.DOMException || cv).INVALID_STATE_ERR,
		av = function(a) {
			switch (a) {
				case "UnknownError":
					return dv;
				case "NotFoundError":
					return ev;
				case "ConstraintError":
					return fv;
				case "DataError":
					return gv;
				case "TransactionInactiveError":
					return hv;
				case "AbortError":
					return iv;
				case "ReadOnlyError":
					return jv;
				case "TimeoutError":
					return kv;
				case "QuotaExceededError":
					return lv;
				case "InvalidAccessError":
					return mv;
				case "InvalidStateError":
					return nv;
				default:
					return dv
			}
		},
		$u = function(a) {
			switch (a) {
				case dv:
					return "UnknownError";
				case ev:
					return "NotFoundError";
				case fv:
					return "ConstraintError";
				case gv:
					return "DataError";
				case hv:
					return "TransactionInactiveError";
				case iv:
					return "AbortError";
				case jv:
					return "ReadOnlyError";
				case kv:
					return "TimeoutError";
				case lv:
					return "QuotaExceededError";
				case mv:
					return "InvalidAccessError";
				case nv:
					return "InvalidStateError";
				default:
					return "UnknownError"
			}
		},
		ov = function(a, b) {
			return "error" in a ? new bv(a.error, b) : new bv({
				name: "UnknownError"
			}, b)
		},
		pv = function(a, b) {
			if ("name" in a) return b = b + ": " + a.message, new bv(a, b);
			if ("code" in a) {
				var c = $u(a.code);
				b = b + ": " + a.message;
				return new bv({
					name: c
				}, b)
			}
			return new bv({
				name: "UnknownError"
			}, b)
		};
	var qv = function(a) {
			this.h = a
		},
		rv = v.IDBKeyRange || v.webkitIDBKeyRange;
	qv.prototype.range = function() {
		return this.h
	};
	/*

	 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
	 Copyright The Closure Library Authors.
	 SPDX-License-Identifier: MIT
	*/
	var tv = function() {
		this.B = [];
		this.A = this.o = !1;
		this.l = void 0;
		this.L = this.H = this.D = !1;
		this.C = 0;
		this.h = null;
		this.I = 0
	};
	tv.prototype.cancel = function(a) {
		if (this.o) this.l instanceof tv && this.l.cancel();
		else {
			if (this.h) {
				var b = this.h;
				delete this.h;
				a ? b.cancel(a) : (b.I--, 0 >= b.I && b.cancel())
			}
			this.L = !0;
			this.o || uv(this, new vv(this))
		}
	};
	tv.prototype.F = function(a, b) {
		this.D = !1;
		wv(this, a, b)
	};
	var wv = function(a, b, c) {
			a.o = !0;
			a.l = c;
			a.A = !b;
			xv(a)
		},
		zv = function(a) {
			if (a.o) {
				if (!a.L) throw new yv(a);
				a.L = !1
			}
		};
	tv.prototype.callback = function(a) {
		zv(this);
		wv(this, !0, a)
	};
	var uv = function(a, b) {
			zv(a);
			wv(a, !1, b)
		},
		Bv = function(a, b) {
			return Av(a, b, null, void 0)
		},
		Av = function(a, b, c, d) {
			a.B.push([b, c, d]);
			a.o && xv(a);
			return a
		};
	tv.prototype.then = function(a, b, c) {
		var d, e, f = new Lj(function(g, h) {
			e = g;
			d = h
		});
		Av(this, e, function(g) {
			g instanceof vv ? f.cancel() : d(g)
		});
		return f.then(a, b, c)
	};
	tv.prototype.$goog_Thenable = !0;
	tv.prototype.isError = function(a) {
		return a instanceof Error
	};
	var Cv = function(a) {
			return Gb(a.B, function(b) {
				return "function" === typeof b[1]
			})
		},
		xv = function(a) {
			if (a.C && a.o && Cv(a)) {
				var b = a.C,
					c = Dv[b];
				c && (v.clearTimeout(c.h), delete Dv[b]);
				a.C = 0
			}
			a.h && (a.h.I--, delete a.h);
			b = a.l;
			for (var d = c = !1; a.B.length && !a.D;) {
				var e = a.B.shift(),
					f = e[0],
					g = e[1];
				e = e[2];
				if (f = a.A ? g : f) try {
					var h = f.call(e || null, b);
					void 0 !== h && (a.A = a.A && (h == b || a.isError(h)), a.l = b = h);
					if (Jj(b) || "function" === typeof v.Promise && b instanceof v.Promise) d = !0, a.D = !0
				} catch (l) {
					b = l, a.A = !0, Cv(a) || (c = !0)
				}
			}
			a.l = b;
			d && (h = Wa(a.F,
				a, !0), d = Wa(a.F, a, !1), b instanceof tv ? (Av(b, h, d), b.H = !0) : b.then(h, d));
			c && (b = new Ev(b), Dv[b.h] = b, a.C = b.h)
		},
		yv = function() {
			ab.call(this)
		};
	Za(yv, ab);
	yv.prototype.message = "Deferred has already fired";
	yv.prototype.name = "AlreadyCalledError";
	var vv = function() {
		ab.call(this)
	};
	Za(vv, ab);
	vv.prototype.message = "Deferred was canceled";
	vv.prototype.name = "CanceledError";
	var Ev = function(a) {
		this.h = v.setTimeout(Wa(this.o, this), 0);
		this.l = a
	};
	Ev.prototype.o = function() {
		delete Dv[this.h];
		throw this.l;
	};
	var Dv = {};
	var Fv = function() {
		N.call(this)
	};
	Za(Fv, N);
	Fv.prototype.h = null;
	Fv.prototype.next = function(a) {
		if (a) this.h["continue"](a);
		else this.h["continue"]()
	};
	Fv.prototype.update = function(a) {
		var b = "updating via cursor with value ",
			c = new tv;
		try {
			var d = this.h.update(a)
		} catch (e) {
			return b += vh(a), uv(c, pv(e, b)), c
		}
		d.onsuccess = function() {
			c.callback()
		};
		d.onerror = function(e) {
			b += vh(a);
			uv(c, ov(e.target, b))
		};
		return c
	};
	Fv.prototype.remove = function() {
		var a = new tv;
		try {
			var b = this.h["delete"]()
		} catch (c) {
			return uv(a, pv(c, "deleting via cursor")), a
		}
		b.onsuccess = function() {
			a.callback()
		};
		b.onerror = function(c) {
			uv(a, ov(c.target, "deleting via cursor"))
		};
		return a
	};
	var Gv = function(a, b) {
		var c = new Fv;
		try {
			var d = b ? b.range() : null;
			var e = a.openCursor(d)
		} catch (f) {
			throw c.dispose(), pv(f, a.name);
		}
		e.onsuccess = function(f) {
			c.h = f.target.result || null;
			c.h ? c.dispatchEvent("n") : c.dispatchEvent("c")
		};
		e.onerror = function() {
			c.dispatchEvent("e")
		};
		return c
	};
	var Hv = function(a) {
		this.h = a
	};
	Hv.prototype.getName = function() {
		return this.h.name
	};
	var Iv = function(a, b, c) {
		var d = new tv;
		try {
			var e = a.h.get(c)
		} catch (f) {
			return b += " with key " + vh(c), uv(d, pv(f, b)), d
		}
		e.onsuccess = function(f) {
			d.callback(f.target.result)
		};
		e.onerror = function(f) {
			b += " with key " + vh(c);
			uv(d, ov(f.target, b))
		};
		return d
	};
	Hv.prototype.get = function(a) {
		return Iv(this, "getting from index " + this.getName(), a)
	};
	var Jv = function(a, b) {
		return Gv(a.h, b)
	};
	var Kv = function(a) {
		this.h = a
	};
	Kv.prototype.getName = function() {
		return this.h.name
	};
	var Lv = function(a, b, c, d, e) {
			var f = new tv;
			try {
				var g = e ? a.h[b](d, e) : a.h[b](d)
			} catch (h) {
				return c += vh(d), e && (c += ", with key " + vh(e)), uv(f, pv(h, c)), f
			}
			g.onsuccess = function(h) {
				f.callback(h.target.result)
			};
			g.onerror = function(h) {
				c += vh(d);
				e && (c += ", with key " + vh(e));
				uv(f, ov(h.target, c))
			};
			return f
		},
		Mv = function(a, b) {
			return Lv(a, "put", "putting into " + a.getName() + " with value", b, void 0)
		};
	Kv.prototype.add = function(a, b) {
		return Lv(this, "add", "adding into " + this.getName() + " with value ", a, b)
	};
	Kv.prototype.remove = function(a) {
		var b = new tv;
		try {
			var c = this.h["delete"](a instanceof qv ? a.range() : a)
		} catch (e) {
			return c = "removing from " + this.getName() + " with key " + vh(a), uv(b, pv(e, c)), b
		}
		c.onsuccess = function() {
			b.callback()
		};
		var d = this;
		c.onerror = function(e) {
			var f = "removing from " + d.getName() + " with key " + vh(a);
			uv(b, ov(e.target, f))
		};
		return b
	};
	Kv.prototype.get = function(a) {
		var b = new tv;
		try {
			var c = this.h.get(a)
		} catch (e) {
			return c = "getting from " + this.getName() + " with key " + vh(a), uv(b, pv(e, c)), b
		}
		c.onsuccess = function(e) {
			b.callback(e.target.result)
		};
		var d = this;
		c.onerror = function(e) {
			var f = "getting from " + d.getName() + " with key " + vh(a);
			uv(b, ov(e.target, f))
		};
		return b
	};
	Kv.prototype.clear = function() {
		var a = "clearing store " + this.getName(),
			b = new tv;
		try {
			var c = this.h.clear()
		} catch (d) {
			return uv(b, pv(d, a)), b
		}
		c.onsuccess = function() {
			b.callback()
		};
		c.onerror = function(d) {
			uv(b, ov(d.target, a))
		};
		return b
	};
	var Nv = function(a) {
		try {
			return new Hv(a.h.index("timestamp"))
		} catch (b) {
			throw pv(b, "getting index timestamp");
		}
	};
	Kv.prototype.count = function(a) {
		var b = new tv;
		try {
			var c = a ? a.range() : null,
				d = this.h.count(c);
			d.onsuccess = function(f) {
				b.callback(f.target.result)
			};
			var e = this;
			d.onerror = function(f) {
				uv(b, ov(f.target, e.getName()))
			}
		} catch (f) {
			uv(b, pv(f, this.getName()))
		}
		return b
	};
	var Ov = function(a, b) {
		N.call(this);
		this.h = a;
		this.o = b;
		this.l = new ku(this);
		this.l.T(this.h, "complete", Wa(this.dispatchEvent, this, "complete"));
		this.l.T(this.h, "abort", Wa(this.dispatchEvent, this, "abort"));
		this.l.T(this.h, "error", this.Zd)
	};
	Za(Ov, N);
	k = Ov.prototype;
	k.Zd = function(a) {
		a.target instanceof bv ? this.dispatchEvent({
			type: "error",
			target: a.target
		}) : this.dispatchEvent({
			type: "error",
			target: ov(a.target, "in transaction")
		})
	};
	k.objectStore = function(a) {
		try {
			return new Kv(this.h.objectStore(a))
		} catch (b) {
			throw pv(b, "getting object store " + a);
		}
	};
	k.commit = function(a) {
		if (this.h.commit || !a) try {
			this.h.commit()
		} catch (b) {
			throw pv(b, "cannot commit the transaction");
		}
	};
	k.wait = function() {
		var a = new tv;
		jj(this, "complete", Wa(a.callback, a));
		var b = jj(this, "abort", function() {
			sj(c);
			uv(a, new bv(iv, "waiting for transaction to complete"))
		});
		var c = jj(this, "error", function(e) {
			sj(b);
			uv(a, e.target)
		});
		var d = this.o;
		return Bv(a, function() {
			return d
		})
	};
	k.abort = function() {
		this.h.abort()
	};
	k.O = function() {
		Ov.ya.O.call(this);
		this.l.dispose()
	};
	var Pv = function(a) {
		N.call(this);
		this.h = a;
		this.l = new ku(this);
		this.l.T(this.h, "abort", Wa(this.dispatchEvent, this, "abort"));
		this.l.T(this.h, "error", this.$d);
		this.l.T(this.h, "versionchange", this.Ae);
		this.l.T(this.h, "close", Wa(this.dispatchEvent, this, "close"))
	};
	Za(Pv, N);
	k = Pv.prototype;
	k.Kc = !0;
	k.$d = function(a) {
		a = (a = a.target) && a.error;
		this.dispatchEvent({
			type: "error",
			errorCode: a && a.severity
		})
	};
	k.Ae = function(a) {
		this.dispatchEvent(new Qv(a.oldVersion, a.newVersion))
	};
	k.close = function() {
		this.Kc && (this.h.close(), this.Kc = !1)
	};
	k.getName = function() {
		return this.h.name
	};
	k.getVersion = function() {
		return Number(this.h.version)
	};
	var Rv = function(a) {
		var b = ["MediaSourceVideoChunk"];
		try {
			var c = a.h.transaction(b, "readwrite");
			return new Ov(c, a)
		} catch (d) {
			throw pv(d, "creating transaction");
		}
	};
	Pv.prototype.O = function() {
		Pv.ya.O.call(this);
		this.l.dispose()
	};
	var Qv = function(a, b) {
		Vi.call(this, "versionchange");
		this.oldVersion = a;
		this.newVersion = b
	};
	Za(Qv, Vi);
	var Sv = function(a) {
		var b = new tv;
		void 0 == Zu && (Zu = v.indexedDB || v.mozIndexedDB || v.webkitIndexedDB || v.moz_indexedDB);
		var c = Zu.open("VideoChunkPersistentStorage", 5);
		c.onsuccess = function(d) {
			d = new Pv(d.target.result);
			b.callback(d)
		};
		c.onerror = function(d) {
			uv(b, ov(d.target, "opening database VideoChunkPersistentStorage"))
		};
		c.onupgradeneeded = function(d) {
			if (a) {
				var e = new Pv(d.target.result);
				a(new Qv(d.oldVersion, d.newVersion), e, new Ov(d.target.transaction, e))
			}
		};
		c.onblocked = function() {};
		return b
	};
	var Tv = {
			th: "videoId",
			xg: "itag",
			Zg: "source",
			ah: "startIndex"
		},
		Uv = function() {
			N.call(this);
			this.h = null
		};
	t(Uv, N);
	Uv.prototype.initialize = function() {
		var a = this;
		return Promise.resolve(Sv(this.l)).then(function(b) {
			return a.h = b
		}, function(b) {
			J(K(), "codf", b.message)
		})
	};
	var Vv = function(a) {
		return null !== a.h && a.h.Kc
	};
	Uv.prototype.close = function() {
		var a = this;
		return (new Promise(function(b) {
			return Wv(a, b)
		})).then(function() {
			return Xv()
		}).then(function() {
			return a.h.close()
		})
	};
	var Xv = function() {
			return "storage" in navigator && "estimate" in navigator.storage ? navigator.storage.estimate().then(
				function(a) {
					J(K(), "csue", String(a.usage))
				}) : Promise.resolve(void 0)
		},
		aw = function(a, b) {
			b = Yv(b);
			if (!b) return Promise.resolve(null);
			var c = Zv(b);
			return $v(a, c, b.lmt)
		},
		cw = function(a, b, c, d) {
			if (c = Yv(c)) {
				var e = Zv(c),
					f = c.startIndex;
				bw(a, {
					cacheId: e,
					startIndex: f,
					endIndex: f + b.byteLength - 1,
					lmt: c.lmt,
					timestamp: new Date(Date.now()),
					isLastVideoChunk: d,
					video: b
				})
			} else Promise.resolve(void 0)
		};
	Uv.prototype.l = function(a, b) {
		if (b.h.objectStoreNames.contains("MediaSourceVideoChunk")) try {
			b.h.deleteObjectStore("MediaSourceVideoChunk")
		} catch (d) {
			throw pv(d, "deleting object store MediaSourceVideoChunk");
		}
		a = {
			keyPath: "cacheId"
		};
		try {
			var c = new Kv(b.h.createObjectStore("MediaSourceVideoChunk", a))
		} catch (d) {
			throw pv(d, "creating object store MediaSourceVideoChunk");
		}
		b = {
			unique: !1
		};
		try {
			c.h.createIndex("timestamp", "timestamp", b)
		} catch (d) {
			throw pv(d, "creating new index timestamp with key path timestamp");
		}
	};
	var Wv = function(a, b) {
			var c = new Date(Date.now());
			c.setDate(c.getDate() - 30);
			c = new qv(rv.upperBound(c, void 0));
			var d = Jv(Nv(Rv(a.h).objectStore("MediaSourceVideoChunk")), c),
				e = d.T("n", function() {
					d.remove();
					d.next()
				});
			jj(d, "c", function() {
				sj(e);
				b()
			})
		},
		Yv = function(a) {
			var b = new Su(a);
			a = b.getId();
			var c = Tu(b, "itag"),
				d = Tu(b, "source"),
				e = Tu(b, "lmt");
			(b = b.h.o.get("range")) ? (b = b.split("-")[0], b = !b || isNaN(b) ? null : parseInt(b, 10)) : b =
			null;
			var f = [];
			a ? c ? d ? e ? null === b && f.push("startIndex") : f.push("lmt") : f.push("source") :
				f.push("itag") : f.push("videoId");
			return 0 < f.length ? (J(K(), "civp", f.join("-")), null) : {
				videoId: a,
				itag: c,
				source: d,
				lmt: e,
				startIndex: b + 0
			}
		},
		Zv = function(a) {
			var b = Object.keys(Tv).sort().map(function(c) {
				return a[Tv[c]]
			}).join(",");
			return Yu(b)
		},
		$v = function(a, b, c) {
			var d = Rv(a.h).objectStore("MediaSourceVideoChunk");
			return Promise.resolve(d.get(b)).then(function(e) {
				if (!e) return J(K(), "cenf", "1"), null;
				if (e.lmt !== c) return J(K(), "cdl", "1"), d.remove(b).then(null, function(f) {
					J(K(), "crdlvf", f.message)
				}), null;
				J(K(),
					"cefml", "1");
				return {
					endIndex: e.endIndex,
					isLastVideoChunk: e.isLastVideoChunk,
					video: e.video
				}
			}, function(e) {
				J(K(), "cgvf", e.message)
			})
		},
		bw = function(a, b) {
			a = Rv(a.h).objectStore("MediaSourceVideoChunk");
			Promise.resolve(Mv(a, b)).then(function() {
				J(K(), "cavs", "1")
			}, function(c) {
				J(K(), "cavf", c.message)
			})
		};
	var dw = function(a) {
		N.call(this);
		var b = this;
		this.F = new Ds(a);
		this.H = this.h = this.o = this.l = 0;
		this.B = (this.D = Wu()) ? pt(Uv) : null;
		Ti(this, function() {
			Si(b.B)
		});
		this.J = this.D ? this.B.initialize() : null;
		this.C = null
	};
	t(dw, N);
	dw.prototype.isComplete = function() {
		return 3 === this.h
	};
	var fw = function(a) {
			Fa(function(b) {
				if (1 == b.h) return 2 === a.h && (a.h = 1), xa(b, ew(a), 4);
				var c = 3 < a.H;
				if (c && null !== a.C) {
					var d = St("media_source_error", {
						code: 0 < a.o ? MediaError.MEDIA_ERR_NETWORK : MediaError
							.MEDIA_ERR_SRC_NOT_SUPPORTED,
						message: 'Response code "' + a.C + '" with ' + a.l +
							" bytes requested and " + a.o + " bytes loaded"
					});
					a.dispatchEvent(d)
				}
				a.o < a.l && 3 !== a.h && !c ? b.h = 1 : (3 !== a.h && (a.h = 0), b.h = 0)
			})
		},
		ew = function(a) {
			var b;
			return Fa(function(c) {
				switch (c.h) {
					case 1:
						b = a.o + "-" + (a.l - 1);
						Rs(a.F, "range", b);
						if (!a.D) {
							c.h = 2;
							break
						}
						return xa(c,
							a.J, 3);
					case 3:
						return c.return(gw(a));
					case 2:
						return c.l = 4, xa(c, hw(a), 6);
					case 6:
						c.h = 0;
						c.l = 0;
						break;
					case 4:
						ya(c), a.H++, c.h = 0
				}
			})
		},
		gw = function(a) {
			var b;
			return Fa(function(c) {
				switch (c.h) {
					case 1:
						return xa(c, aw(a.B, a.F), 2);
					case 2:
						if (b = c.C) {
							b.isLastVideoChunk && (a.h = 3);
							iw(a, b.video, 0);
							c.h = 0;
							break
						}
						c.l = 4;
						return xa(c, hw(a), 6);
					case 6:
						c.h = 0;
						c.l = 0;
						break;
					case 4:
						ya(c), a.H++, c.h = 0
				}
			})
		},
		hw = function(a) {
			return new Promise(function(b, c) {
				var d = new XMLHttpRequest,
					e = 0,
					f = a.l - a.o;
				d.addEventListener("load", function() {
					yh("lvlcl");
					if (400 <= d.status) return J(K(), "lvlxes", d.status.toString()), a.C = d
						.status, c();
					var g = d.response;
					g.byteLength < f && (a.h = 3);
					var h = iw(a, g, e);
					e += h;
					a.D && 0 < g.byteLength && cw(a.B, g, a.F, g.byteLength < f);
					b()
				});
				d.addEventListener("timeout", function() {
					yh("lvlct");
					a.C = d.status;
					c()
				});
				d.addEventListener("error", function() {
					yh("lvlce");
					a.C = d.status;
					c()
				});
				d.addEventListener("progress", function() {
					if (400 <= d.status) a.C = d.status;
					else {
						var g = iw(a, d.response, e);
						e += g
					}
				});
				d.responseType = "arraybuffer";
				d.open("get", a.F.toString());
				d.send(null)
			})
		},
		iw = function(a, b, c) {
			if (null === b) return 0;
			b = b.slice(c);
			a.o += b.byteLength;
			a.dispatchEvent({
				type: "progress",
				ue: b
			});
			return b.byteLength
		};
	dw.prototype.O = function() {
		this.D && Vv(this.B) && this.B.close();
		N.prototype.O.call(this)
	};

	function jw() {
		return !!window.MediaSource
	}

	function kw(a) {
		return [43, 44, 45].includes(a) && tc ? !1 : rt[a] ? (a = Rt(a), !!a && jw() && MediaSource.isTypeSupported(
			a)) : !1
	};
	var lw = function() {};
	lw.prototype.h = function(a, b, c) {
		return 0 === c ? 1E6 : 5E3 > b - a ? 3E5 : 0
	};
	var mw = function(a, b, c, d) {
		this.url = a;
		this.mimeType = b;
		this.chunkSize = c;
		this.h = void 0 === d ? null : d
	};
	var pw = function(a) {
		N.call(this);
		var b = this;
		this.l = a;
		this.B = this.l.map(function(c) {
			return pt(dw, c.url)
		});
		this.ba = pt(MediaSource);
		this.h = [];
		this.o = window.URL.createObjectURL(this.ba);
		this.H = 0;
		this.F = !1;
		this.D = function() {
			return nw(b)
		};
		this.ba.addEventListener("sourceopen", this.D);
		this.J = ow(this);
		this.C = 0
	};
	t(pw, N);
	var ow = function(a) {
			for (var b = [], c = 0; c < a.l.length; ++c) b.push(new lw);
			return b
		},
		nw = function(a) {
			yh("msms_oso");
			for (var b = {}, c = 0; c < a.l.length; b = {
					ub: b.ub,
					tb: b.tb
				}, ++c) {
				var d = a.l[c];
				J(K(), "msms_mime" + c, d.mimeType);
				J(K(), "msms_cs" + c, d.chunkSize.toString());
				b.ub = a.ba.addSourceBuffer(d.mimeType);
				b.tb = a.B[c];
				b.tb.T("progress", function(e) {
					return function(f) {
						var g = e.tb;
						f = f.ue;
						0 !== f.byteLength && e.ub.appendBuffer(f);
						g.isComplete() && (a.H++, a.H === a.h.length && qw(a))
					}
				}(b));
				b.tb.T("media_source_error", function(e) {
					a.dispatchEvent(e)
				});
				b.ub ? a.h.push(b.ub) : yh("msms_sbf" + c)
			}
			J(K(), "msms_ns", a.h.length.toString());
			a.F = !0;
			rw(a)
		},
		qw = function(a) {
			Promise.all(a.h.map(function(b) {
				return new Promise(function(c) {
					b.updating ? b.addEventListener("updateend", function() {
						c()
					}) : c()
				})
			})).then(function() {
				return a.ba.endOfStream()
			})
		},
		rw = function(a) {
			if (a.F)
				for (var b = 0; b < a.l.length; ++b) {
					var c = a.B[b],
						d = a.h[b];
					d = 0 === d.buffered.length ? 0 : 1E3 * d.buffered.end(0);
					d = a.J[b].h(a.C, d, c.l);
					0 !== d && (1 === c.h ? (c.l += d, c.h = 2) : 0 === c.h && (c.l += d, c.h = 1, fw(c)))
				}
		};
	pw.prototype.O = function() {
		this.o && window.URL.revokeObjectURL(this.o);
		for (var a = r(this.B), b = a.next(); !b.done; b = a.next()) b.value.dispose();
		this.ba.removeEventListener("sourceopen", this.D);
		N.prototype.O.call(this)
	};
	var tw = RegExp(
			"/pagead/conversion|/pagead/adview|/pagead/gen_204|/activeview?|csi.gstatic.com/csi|google.com/pagead/xsul|google.com/ads/measurement/l|googleads.g.doubleclick.net/pagead/ide_cookie|googleads.g.doubleclick.net/xbbe/pixel"
			),
		uw = RegExp("outstream.min.js"),
		vw = RegExp("outstream.min.css"),
		ww = RegExp("fonts.gstatic.com"),
		xw = RegExp("googlevideo.com/videoplayback|c.2mdn.net/videoplayback|gcdn.2mdn.net/videoplayback"),
		yw = RegExp("custom.elements.min.js");

	function zw(a, b) {
		var c = 0,
			d = 0,
			e = 0,
			f = 0,
			g = 0,
			h = 0,
			l = 0,
			n = !1,
			m = !1;
		if ("function" === typeof Ma("performance.getEntriesByType", v) && "transferSize" in v
			.PerformanceResourceTiming.prototype) {
			var x = v.performance.getEntriesByType("resource");
			x = r(x);
			for (var u = x.next(); !u.done; u = x.next()) u = u.value, tw.test(u.name) || (f += 1, u.transferSize ?
				(c += u.transferSize, u.encodedBodySize && u.transferSize < u.encodedBodySize && (h += 1, e += u
					.encodedBodySize, uw.test(u.name) && (n = !0), vw.test(u.name) && (m = !0)), xw.test(u
					.name) && (d += u.transferSize)) :
				0 == u.transferSize && 0 == u.encodedBodySize ? yw.test(u.name) ? c += 6686 : ww.test(u.name) ||
				(l += 1, xh(K(), {
					event_name: "unmeasurable_asset",
					resource_name: u.name,
					encoded_body_size: u.encodedBodySize,
					transfer_size: u.transferSize
				})) : (g += 1, e += u.encodedBodySize, uw.test(u.name) && (n = !0), vw.test(u.name) && (m = !0))
				);
			x = 0;
			if (a.duration) {
				for (u = 0; u < a.buffered.length; u++) x += a.buffered.end(u) - a.buffered.start(u);
				x = Math.min(x, a.duration)
			}
			xh(K(), {
				event_name: b,
				asset_bytes: c,
				video_bytes: d,
				cached_data_bytes: e,
				js_cached: n,
				css_cached: m,
				num_assets: f,
				num_assets_cached: g,
				num_assets_cache_validated: h,
				num_assets_unmeasurable: l,
				video_played_seconds: a.currentTime.toFixed(2),
				video_muted: a.muted,
				video_seconds_loaded: x.toFixed(2)
			})
		} else J(K(), "error", "reporting_timing_not_supported")
	};

	function Aw(a) {
		var b = K(),
			c = a.getVideoPlaybackQuality && a.getVideoPlaybackQuality();
		c ? (a = a.currentTime, J(b, "vqdf", String(c.droppedVideoFrames)), J(b, "vqtf", String(c
			.totalVideoFrames)), J(b, "vqfr", String(Math.round(c.totalVideoFrames / a)))) : J(b, "vqu", "1")
	};
	var Bw = function() {};
	Bw.prototype.toString = function() {
		return "video_mute"
	};
	var Cw = new Bw;
	var Dw = function(a) {
		M.call(this);
		this.C = 1;
		this.o = [];
		this.A = 0;
		this.h = [];
		this.l = {};
		this.F = !!a
	};
	Za(Dw, M);
	var Ew = function(a, b, c) {
			var d = Cw.toString(),
				e = a.l[d];
			e || (e = a.l[d] = []);
			var f = a.C;
			a.h[f] = d;
			a.h[f + 1] = b;
			a.h[f + 2] = c;
			a.C = f + 3;
			e.push(f)
		},
		Fw = function(a, b, c) {
			var d = a.l[Cw.toString()];
			if (d) {
				var e = a.h;
				(d = d.find(function(f) {
					return e[f + 1] == b && e[f + 2] == c
				})) && a.B(d)
			}
		};
	Dw.prototype.B = function(a) {
		var b = this.h[a];
		if (b) {
			var c = this.l[b];
			0 != this.A ? (this.o.push(a), this.h[a + 1] = Na) : (c && Lb(c, a), delete this.h[a], delete this
				.h[a + 1], delete this.h[a + 2])
		}
		return !!b
	};
	Dw.prototype.D = function(a, b) {
		var c = this.l[a];
		if (c) {
			for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] =
				arguments[e];
			if (this.F)
				for (e = 0; e < c.length; e++) {
					var g = c[e];
					Gw(this.h[g + 1], this.h[g + 2], d)
				} else {
					this.A++;
					try {
						for (e = 0, f = c.length; e < f && !this.Ia(); e++) g = c[e], this.h[g + 1].apply(this
							.h[g + 2], d)
					} finally {
						if (this.A--, 0 < this.o.length && 0 == this.A)
							for (; c = this.o.pop();) this.B(c)
					}
				}
		}
	};
	var Gw = function(a, b, c) {
		Hj(function() {
			a.apply(b, c)
		})
	};
	Dw.prototype.clear = function(a) {
		if (a) {
			var b = this.l[a];
			b && (b.forEach(this.B, this), delete this.l[a])
		} else this.h.length = 0, this.l = {}
	};
	Dw.prototype.O = function() {
		Dw.ya.O.call(this);
		this.clear();
		this.o.length = 0
	};
	var Hw = function(a) {
		M.call(this);
		this.h = new Dw(a);
		Ui(this, this.h)
	};
	Za(Hw, M);
	Hw.prototype.clear = function(a) {
		this.h.clear(void 0 !== a ? a.toString() : void 0)
	};
	var Iw = function(a) {
		a = void 0 === a ? null : a;
		M.call(this);
		this.h = new ku(this);
		Ui(this, this.h);
		this.qb = a
	};
	t(Iw, M);
	var Jw = function(a, b, c) {
		a.qb && (Ew(a.qb.h, b, c), Ti(a, function() {
			Fw(a.qb.h, b, c)
		}))
	};
	var Kw = function(a, b) {
		Iw.call(this, b);
		Jw(this, function(c) {
			c ? a.show() : a.hide()
		}, this)
	};
	t(Kw, Iw);
	var Lw = function() {
		N.call(this);
		this.element = null;
		this.l = new ku(this);
		Ui(this, this.l)
	};
	t(Lw, N);
	var Nw = function(a, b, c) {
		c = void 0 === c ? !0 : c;
		Lw.call(this);
		a.setAttribute("crossorigin", "anonymous");
		var d = wf("TRACK");
		d.setAttribute("kind", "captions");
		d.setAttribute("src", b);
		d.setAttribute("default", "");
		a.appendChild(d);
		this.h = a.textTracks[0];
		Mw(this);
		c ? this.show() : this.hide()
	};
	t(Nw, Lw);
	var Mw = function(a) {
		var b = a.h;
		b.addEventListener("cuechange", function() {
			for (var c = b.cues, d = 0; d < c.length; d++) {
				var e = c[d];
				e.align = "center";
				e.position = "auto"
			}
		}, {
			once: !0
		})
	};
	Nw.prototype.show = function() {
		this.h.mode = "showing"
	};
	Nw.prototype.hide = function() {
		this.h.mode = "hidden"
	};

	function Ow(a, b) {
		if ("undefined" !== typeof ReportingObserver) {
			var c = function(e) {
					e = r(e);
					for (var f = e.next(); !f.done; f = e.next()) f = f.value, a(f) && b(f)
				},
				d = new ReportingObserver(c, {
					buffered: !0
				});
			v.addEventListener("unload", function() {
				c(d.takeRecords(), d);
				d.disconnect()
			});
			d.observe()
		}
	}

	function Pw(a) {
		a = void 0 === a ? null : a;
		Ow(function(b) {
			return b.body && "HeavyAdIntervention" === b.body.id
		}, function(b) {
			var c = b.body.message,
				d = K();
			J(d, "ham", c);
			c.includes("CPU") ? J(d, "hacpu", "true") : c.includes("network") && J(d, "habytes", "true");
			a && a(b)
		})
	};
	var Qw =
		"autoplay controls crossorigin demuxedaudiosrc demuxedvideosrc loop muted playsinline poster preload src webkit-playsinline x-webkit-airplay"
		.split(" "),
		Rw =
		"autoplay buffered controls crossOrigin currentSrc currentTime defaultMuted defaultPlaybackRate disableRemotePlayback duration ended loop muted networkState onerror onwaitingforkey paused played playsinline poster preload preservesPitch mozPreservesPitch webkitPreservesPitch readyState seekable videoWidth videoHeight volume textTracks canPlayType captureStream getVideoPlaybackQuality load pause play setSinkId oncanplay oncanplaythrough onload onplay onpause onended onfullscreenchange onfullscreenerror addEventListener dispatchEvent removeEventListener requestFullscreen"
		.split(" "),
		Sw = {
			childList: !0
		},
		Tw = !RegExp("^\\s*class\\s*\\{\\s*\\}\\s*$").test(function() {}.toString()),
		Uw = HTMLElement;
	Tw && (Uw = function() {
		return v.Reflect.construct(HTMLElement, [], this.__proto__.constructor)
	}, Object.setPrototypeOf(Uw, HTMLElement), Object.setPrototypeOf(Uw.prototype, HTMLElement.prototype));
	var Vw = function(a) {
			if (null !== a) {
				a = r(a);
				for (var b = a.next(); !b.done; b = a.next())
					if (b = b.value, b.nodeName === "TRACK".toString()) return b
			}
			return null
		},
		Ww = function(a, b) {
			this.code = a;
			this.message = void 0 === b ? "" : b
		},
		Xw = function(a) {
			Ww.call(this, MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED, void 0 === a ? "" : a)
		};
	t(Xw, Ww);
	var ax = function() {
		var a = Uw.call(this) || this;
		J(K(), "ulv", "1");
		a.ba = null;
		a.Hd = "";
		a.kd = null;
		a.P = wf("VIDEO");
		Yw(a);
		a.qb = new Hw;
		Zw(a);
		a.Ob = null;
		$w(a);
		a.attachShadow({
			mode: "open"
		});
		a.shadowRoot.appendChild(a.P);
		Pw(function() {
			J(K(), "has", a.src || a.kb);
			J(K(), "hat", String(a.P.currentTime))
		});
		a.dc = !1;
		a.Jd = !1;
		a.Eb = null;
		a.Ma = null;
		return a
	};
	t(ax, Uw);
	ax.prototype.attributeChangedCallback = function(a, b, c) {
		switch (a) {
			case "src":
				bx(this, c);
				break;
			case "demuxedaudiosrc":
			case "demuxedvideosrc":
				cx(this);
				break;
			case "muted":
				this.P[a] = "" === c ? !0 : !!c;
				dx(this, a, c);
				break;
			default:
				dx(this, a, c)
		}
	};
	var dx = function(a, b, c) {
			c !== a.P.getAttribute(b) && (null === c ? a.P.removeAttribute(b) : a.P.setAttribute(b, c))
		},
		ex = function(a) {
			a.ba && (a.P.removeEventListener("timeupdate", a.Eb), a.ba.dispose(), a.ba = null)
		},
		fx = function(a, b) {
			a.kd = b;
			a.P.dispatchEvent(new Event("error"))
		},
		Yw = function(a) {
			gx(a);
			hx(a);
			a.P.addEventListener("loadedmetadata", function() {
				a.Ma = Ou(a);
				a.Ma.then(function(b) {
					var c = a.P.videoWidth,
						d = a.P.videoHeight,
						e = b.width,
						f = b.height;
					0 < c && 0 < d && 0 < e && 0 < f && (b = b.width / b.height, c /= d, .97 <= Math
						.min(c, b) / Math.max(c,
							b) ? ig(a.P, {
							"object-fit": "cover"
						}) : ig(a.P, {
							"object-fit": "contain"
						}))
				})
			});
			a.P.addEventListener("play", function() {
				a.Jd || (zw(a.P, "first_play"), a.Jd = !0)
			});
			a.P.addEventListener("pause", function() {
				a.dc || (zw(a.P, "first_pause"), Aw(a.P), a.dc = !0)
			});
			kj(v, "unload", function() {
				a.dc || (zw(a.P, "first_pause"), Aw(a.P), a.dc = !0)
			});
			a.P.addEventListener("stalled", function() {
				J(K(), "ves", "1")
			});
			(new Iu(a.P)).T("playbackStalled", function() {
				return J(K(), "pbs", "1")
			});
			a.P.addEventListener("media_source_error", function(b) {
				ex(a);
				b = b.detail;
				fx(a, new Ww(b.code, b.message))
			});
			ix(a)
		},
		$w = function(a) {
			var b = Vw(a.childNodes);
			b && jx(a, b);
			null === a.Ob && kx(a)
		},
		kx = function(a) {
			if (v.MutationObserver) {
				var b = new MutationObserver(function(c) {
					c = r(c);
					for (var d = c.next(); !d.done; d = c.next())
						if (d = d.value, "childList" === d.type && (d = Vw(d.addedNodes))) {
							jx(a, d);
							b.disconnect();
							break
						}
				});
				b.observe(a, Sw)
			}
		},
		Zw = function(a) {
			a.P.addEventListener("volumechange", function() {
				a.qb.h.D(Cw.toString(), a.P.muted)
			})
		},
		jx = function(a, b) {
			if (null === a.Ob && b.hasAttribute("src")) {
				var c =
					b.getAttribute("src");
				a.Ob = new Nw(a.P, c, b.hasAttribute("default"));
				new Kw(a.Ob, a.qb);
				c.includes("kind=asr") && J(K(), "act", "1")
			}
		},
		bx = function(a, b) {
			if (b !== a.Hd) {
				var c = (a.Hd = b) ? Qt(b) : null,
					d = !!c && kw(c);
				J(K(), "umsem", d ? "1" : "0");
				d ? (b = pt(mw, b, Rt(c), 1E3 * qt[c], null), a.ba = pt(pw, [b]), a.ba.T("media_source_error",
					function(e) {
						e = St("media_source_error", e.detail);
						a.P.dispatchEvent(e)
					}), a.Eb = function() {
					var e = a.ba;
					e.C = 1E3 * a.P.currentTime;
					rw(e)
				}, a.P.addEventListener("timeupdate", a.Eb), a.P.src = a.ba.o) : (ex(a), a.P.src =
					b);
				a.P.load()
			}
		},
		cx = function(a) {
			a.src && fx(a, new Ww(MediaError.MEDIA_ERR_ABORTED, "Setting demuxed src after src is already set."));
			if (!a.yb && !a.kb && a.ba) ex(a), a.P.src = "about:blank", a.P.load();
			else if (a.yb && a.kb) {
				var b = Qt(a.yb),
					c = Qt(a.kb);
				if (c && kw(c))
					if (b && kw(b)) {
						var d = !!c && kw(c) && !!b && kw(b);
						J(K(), "umsed", d ? "1" : "0");
						c = pt(mw, a.kb, Rt(c), -1, null);
						b = pt(mw, a.yb, Rt(b), -1, null);
						a.ba = pt(pw, [c, b]);
						a.ba.T("media_source_error", function(e) {
							e = St("media_source_error", e.detail);
							a.P.dispatchEvent(e)
						});
						a.Eb = function() {
							var e =
								a.ba;
							e.C = 1E3 * a.P.currentTime;
							rw(e)
						};
						a.P.addEventListener("timeupdate", a.Eb);
						a.P.src = a.ba.o;
						a.P.load()
					} else fx(a, new Xw('Audio itag "' + b + '" not supported.'));
				else fx(a, new Xw('Video itag "' + c + '" not supported.'))
			}
		},
		gx = function(a) {
			for (var b = {}, c = r(Rw), d = c.next(); !d.done; b = {
					za: b.za,
					jc: b.jc
				}, d = c.next()) b.za = d.value, b.za in a.P && ("function" === typeof a.P[b.za] ? (b.jc = a.P[b.za]
					.bind(a.P), Object.defineProperty(a, b.za, {
						set: function(e) {
							return function(f) {
								a.P[e.za] = f
							}
						}(b),
						get: function(e) {
							return function() {
								return e.jc
							}
						}(b)
					})) :
				Object.defineProperty(a, b.za, {
					set: function(e) {
						return function(f) {
							a.P[e.za] = f
						}
					}(b),
					get: function(e) {
						return function() {
							return a.P[e.za]
						}
					}(b)
				}))
		},
		hx = function(a) {
			Object.defineProperty(a, "error", {
				set: function() {},
				get: function() {
					return a.P.error ? a.P.error : a.kd
				}
			})
		},
		ix = function(a) {
			a.P.style.width = og();
			a.P.style.height = og()
		};
	ax.prototype.disconnectedCallback = function() {
		if (this.Ma) {
			var a = Ku.get(this.Ma);
			Nu(a)
		}
		Uw.prototype.disconnectedCallback && Uw.prototype.disconnectedCallback.call(this)
	};
	ea.Object.defineProperties(ax.prototype, {
		yb: {
			configurable: !0,
			enumerable: !0,
			set: function(a) {
				this.setAttribute("demuxedaudiosrc", a)
			},
			get: function() {
				return this.getAttribute("demuxedaudiosrc")
			}
		},
		kb: {
			configurable: !0,
			enumerable: !0,
			set: function(a) {
				this.setAttribute("demuxedvideosrc", a)
			},
			get: function() {
				return this.getAttribute("demuxedvideosrc")
			}
		},
		src: {
			configurable: !0,
			enumerable: !0,
			set: function(a) {
				this.setAttribute("src", a)
			},
			get: function() {
				return this.getAttribute("src")
			}
		}
	});
	ea.Object.defineProperties(ax, {
		observedAttributes: {
			configurable: !0,
			enumerable: !0,
			get: function() {
				return Qw
			}
		}
	});
	v.customElements && (v.customElements.get("lima-video") || v.customElements.define("lima-video", ax));

	function lx() {
		var a = pt(Uv);
		a.initialize().then(function(b) {
			b && (b = St("initialized"), a.dispatchEvent(b))
		});
		return a
	}
	var nx = function(a, b, c, d, e) {
		M.call(this);
		this.K = a;
		this.R = new Ds(b.url);
		this.l = c;
		this.A = e;
		this.J = b.chunkSize;
		this.ra = d;
		(this.V = b.h) || this.R.o.remove("alr");
		J(K(), "sl_dv" + this.A, (null != this.V).toString());
		this.W = !this.V;
		this.Lb = 0;
		this.h = new XMLHttpRequest;
		this.Z = this.U = this.jb = this.F = this.o = 0;
		this.X = .1;
		this.D = [];
		this.N = !1;
		this.$ = this.ga = this.na = null;
		this.Ea = !1;
		this.sd = this.M = this.C = this.fb = this.ib = null;
		this.H = !1;
		if (this.B = Wu()) this.C = lx(), Ui(this, this.C);
		mx(this)
	};
	t(nx, M);
	var ox = function(a, b) {
			b = St("media_source_error", b);
			a.K.dispatchEvent(b)
		},
		px = function(a, b) {
			ox(a, {
				code: 1 < a.o ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
				message: b
			})
		},
		mx = function(a) {
			a.na = function() {
				qx(a);
				if (a.W) {
					var b = a.h.responseText;
					a.N = !b || b.length < a.J;
					a.U = 0;
					yh("sl_cc" + a.A + "_" + a.o);
					a.F++;
					rx(a)
				}
			};
			a.ga = function() {
				return qx(a)
			};
			a.$ = function() {
				yh("sl_ec" + a.A + "_" + a.o);
				px(a, "Failed to load chunk " + a.o + " for stream " + a.A)
			};
			a.h.addEventListener("load", a.na);
			a.h.addEventListener("progress",
				a.ga);
			a.h.addEventListener("error", a.$);
			a.l.addEventListener("updateend", function() {
				a.l.buffered.length && (a.jb = a.l.buffered.end(0), a.B ? a.H && !a.l.updating && a.o === a
					.F && (yh("sl_lc" + a.A), a.ra()) : a.N && !a.l.updating && a.o === a.F && (yh(
						"sl_lc" + a.A), a.ra()));
				!a.Ea && 1 < a.K.buffered.length && (J(K(), "dbr", "1"), a.Ea = !0)
			});
			a.l.addEventListener("update", function() {
				a.D.length && !a.l.updating && a.l.appendBuffer(a.D.shift())
			});
			a.l.addEventListener("error", function() {
				yh("msb_err" + a.A);
				ox(a, {
					code: MediaError.MEDIA_ERR_DECODE,
					message: "Error on SourceBuffer " + a.A
				})
			});
			a.B ? (Vv(a.C) ? sx(a) : a.ib = kj(a.C, "initialized", function() {
				sx(a)
			}), a.fb = kj(a.C, "get_video_succeeded", function() {
				rx(a)
			})) : sx(a)
		},
		ux = function(a) {
			yh("sl_rc" + a.A + "-" + a.o);
			var b = tx(a);
			a.h.open("get", b);
			a.h.overrideMimeType("text/plain; charset=x-user-defined");
			a.h.send(null);
			a.B && (a.M = null, a.sd = b)
		},
		qx = function(a) {
			if (400 <= a.h.status) px(a, 'Response code "' + a.h.status + '" on loading chunk ' + a.o +
				" for stream " + a.A);
			else {
				if (!a.W) {
					var b = a.h.getResponseHeader("content-type");
					if (b && 0 <= b.indexOf("text/plain")) {
						a.h.readyState === XMLHttpRequest.DONE && (a.R = new Ds(a.h.response), a.o = 0, a.F = 0, a
							.Lb++, sx(a));
						return
					}
					a.W = !0;
					yh("sl_redc" + a.A);
					J(K(), "sl_tr" + a.A, a.Lb.toString())
				}
				a.R.o.remove("alr");
				if (a.h.readyState === XMLHttpRequest.LOADING || a.h.readyState === XMLHttpRequest.DONE) b = vx(a, a
					.U), a.U = a.h.response.length, a.Z += b.byteLength, wx(a, b);
				if (a.B && a.h.readyState === XMLHttpRequest.DONE && (b = vx(a, 0), 0 < b.byteLength)) {
					var c = a.h.responseText;
					a.H = !c || c.length < a.J;
					cw(a.C, b, new Ds(a.sd), a.H)
				}
			}
		},
		wx = function(a, b) {
			0 < b.byteLength && (a.l.updating || a.D.length ? a.D.push(b) : a.l.appendBuffer(b))
		},
		vx = function(a, b) {
			a = a.h.response;
			for (var c = new Uint8Array(a.length - b), d = 0; d < c.length; d++) c[d] = a.charCodeAt(d + b) & 255;
			return c.buffer
		},
		rx = function(a) {
			var b = Tt; - 1 != b && b < a.Z + a.J ? (a.K.pause(), Tt = -1, b = !1) : (b = a.F === a.o && !a.l
				.updating && !a.D.length, b = a.B ? !a.H && b && a.K.currentTime >= a.X : !a.N && b && a.K
				.currentTime >= a.X);
			b && (a.X = a.jb + .1, sx(a))
		},
		tx = function(a) {
			var b = a.B && a.M ? a.M + 1 : a.o * a.J;
			return Rs(a.R, "range", b + "-" + (b + a.J -
				1)).toString()
		},
		sx = function(a) {
			if (a.B) {
				var b = new Ds(tx(a));
				aw(a.C, b).then(function(c) {
					c ? (a.M = parseInt(c.endIndex, 10), a.H = c.isLastVideoChunk, wx(a, c.video), c = St(
						"get_video_succeeded"), a.C.dispatchEvent(c), a.F++) : ux(a);
					a.o++
				})
			} else ux(a), a.o++
		};
	nx.prototype.isComplete = function() {
		return this.B ? this.H && !this.l.updating && !this.D.length : this.N && !this.l.updating && !this.D
			.length
	};
	nx.prototype.O = function() {
		this.B && Vv(this.C) && this.C.close();
		this.h.removeEventListener("load", this.na);
		this.h.removeEventListener("progress", this.ga);
		this.h.removeEventListener("error", this.$);
		sj(this.ib);
		sj(this.fb);
		M.prototype.O.call(this)
	};
	var yx = function(a, b) {
		M.call(this);
		var c = this;
		this.A = a;
		this.F = b;
		this.ba = new MediaSource;
		this.D = [];
		this.l = [];
		this.h = this.o = null;
		this.B = !1;
		this.C = function() {
			return xx(c)
		};
		this.ba.addEventListener("sourceopen", this.C)
	};
	t(yx, M);
	var zx = function(a) {
			a.o && a.A.removeEventListener("timeupdate", a.o)
		},
		xx = function(a) {
			yh("msmsw_oso");
			a.o = function() {
				if (!a.B)
					for (var e = r(a.l), f = e.next(); !f.done; f = e.next()) rx(f.value)
			};
			a.A.addEventListener("timeupdate", a.o);
			for (var b = 0; b < a.F.length; b++) {
				var c = a.F[b];
				J(K(), "msmsw_mime" + b, c.mimeType);
				J(K(), "msmsw_cs" + b, c.chunkSize.toString());
				var d = a.ba.addSourceBuffer(c.mimeType);
				d ? (a.D.push(d), c = pt(nx, a.A, c, d, function() {
					a: if (!a.B) {
						for (var e = r(a.l), f = e.next(); !f.done; f = e.next())
							if (!f.value.isComplete()) break a;
						a.ba.endOfStream();
						a.B = !0;
						zx(a)
					}
				}, b), a.l.push(c)) : yh("msmsw_sbf" + b)
			}
			J(K(), "msmsw_ns", a.D.length.toString())
		};
	yx.prototype.O = function() {
		this.h && window.URL.revokeObjectURL(this.h);
		for (var a = r(this.l), b = a.next(); !b.done; b = a.next()) b.value.dispose();
		zx(this);
		this.ba.removeEventListener("sourceopen", this.C);
		M.prototype.O.call(this)
	};
	var Ax = function() {
		throw Error("Do not instantiate directly");
	};
	Ax.prototype.h = null;
	Ax.prototype.getContent = function() {
		return this.content
	};
	Ax.prototype.toString = function() {
		return this.content
	};
	var Bx = function() {
		Ax.call(this)
	};
	Za(Bx, Ax);
	var Cx = function(a) {
		function b(c) {
			this.content = c
		}
		b.prototype = a.prototype;
		return function(c, d) {
			c = new b(String(c));
			void 0 !== d && (c.h = d);
			return c
		}
	}(Bx);
	/*
	 Copyright The Closure Library Authors.
	 SPDX-License-Identifier: Apache-2.0
	*/
	var Dx = function() {
		if (window.MutationObserver) {
			var a = [];
			(new MutationObserver(function() {
				a.forEach(function(b) {
					return b()
				});
				a = []
			})).observe(document.createTextNode(""), {
				characterData: !0
			})
		}
	};
	"function" === typeof Promise && -1 < String(Promise).indexOf("[native code]") || Dx();
	var Ex = function(a) {
			this.h = a
		},
		Fx = function(a, b) {
			return Qd(a.h, b) && (a = a.h[b], "boolean" === typeof a) ? a : !1
		},
		Gx = function(a) {
			if (Qd(a.h, "forceExperimentIds")) {
				a = a.h.forceExperimentIds;
				var b = [],
					c = 0;
				Array.isArray(a) && a.forEach(function(d) {
					"number" === typeof d && (b[c++] = d)
				});
				return b
			}
			return null
		};
	var W = function() {
			this.F = "always";
			this.N = 4;
			this.C = 1;
			this.h = 0;
			this.L = !0;
			this.A = "en";
			this.M = !1;
			this.V = this.U = "";
			this.B = null;
			this.X = this.R = -1;
			this.W = this.K = this.I = "";
			this.H = !1;
			this.l = !0;
			this.D = ot();
			this.J = {};
			try {
				this.$ = Kl(void 0)[0]
			} catch (a) {}
		},
		Hx = function(a) {
			a = ef(a);
			ib(a) || (a = a.substring(0, 20));
			return a
		};
	k = W.prototype;
	k.setCompanionBackfill = function(a) {
		this.F = a
	};
	k.getCompanionBackfill = function() {
		return this.F
	};
	k.setNumRedirects = function(a) {
		this.N = a
	};
	k.getNumRedirects = function() {
		return this.N
	};
	k.setPpid = function(a) {
		this.Z = a
	};
	k.getPpid = function() {
		return this.Z
	};
	k.setVpaidAllowed = function(a) {
		"boolean" === typeof a && (this.C = a ? 1 : 0)
	};
	k.setVpaidMode = function(a) {
		this.C = a
	};
	k.getVpaidMode = function() {
		return this.C
	};
	k.setAutoPlayAdBreaks = function(a) {
		this.L = a
	};
	k.isAutoPlayAdBreaks = function() {
		return this.L
	};
	k.setIsVpaidAdapter = function(a) {
		this.M = a
	};
	k.Cb = function() {
		return this.M
	};
	k.setLocale = function(a) {
		if (a = vu(a)) this.A = a
	};
	k.De = function() {
		return this.A
	};
	k.setPlayerType = function(a) {
		this.U = Hx(a)
	};
	k.getPlayerType = function() {
		return this.U
	};
	k.setPlayerVersion = function(a) {
		this.V = Hx(a)
	};
	k.getPlayerVersion = function() {
		return this.V
	};
	var Ix = function(a) {
		if (null == a.B) {
			var b = {},
				c = (new Ds(G().location.href)).o;
			if (Ws(c, "tcnfp")) try {
				b = JSON.parse(c.get("tcnfp"))
			} catch (d) {}
			a.B = new Ex(b)
		}
		return a.B
	};
	k = W.prototype;
	k.setPageCorrelator = function(a) {
		this.R = a
	};
	k.setStreamCorrelator = function(a) {
		this.X = a
	};
	k.setDisableCustomPlaybackForIOS10Plus = function(a) {
		this.H = a
	};
	k.getDisableCustomPlaybackForIOS10Plus = function() {
		return this.H
	};
	k.Re = function() {
		return this.l
	};
	k.setCookiesEnabled = function(a) {
		null != a && (this.l = a)
	};
	k.setSessionId = function(a) {
		this.D = a
	};
	k.setDisableFlashAds = function() {};
	k.getDisableFlashAds = function() {
		return !0
	};
	k.setFeatureFlags = function(a) {
		this.J = a
	};
	k.getFeatureFlags = function() {
		return this.J
	};
	W.prototype.getFeatureFlags = W.prototype.getFeatureFlags;
	W.prototype.setFeatureFlags = W.prototype.setFeatureFlags;
	W.prototype.getDisableFlashAds = W.prototype.getDisableFlashAds;
	W.prototype.setDisableFlashAds = W.prototype.setDisableFlashAds;
	W.prototype.setSessionId = W.prototype.setSessionId;
	W.prototype.setCookiesEnabled = W.prototype.setCookiesEnabled;
	W.prototype.isCookiesEnabled = W.prototype.Re;
	W.prototype.getDisableCustomPlaybackForIOS10Plus = W.prototype.getDisableCustomPlaybackForIOS10Plus;
	W.prototype.setDisableCustomPlaybackForIOS10Plus = W.prototype.setDisableCustomPlaybackForIOS10Plus;
	W.prototype.setStreamCorrelator = W.prototype.setStreamCorrelator;
	W.prototype.setPageCorrelator = W.prototype.setPageCorrelator;
	W.prototype.getPlayerVersion = W.prototype.getPlayerVersion;
	W.prototype.setPlayerVersion = W.prototype.setPlayerVersion;
	W.prototype.getPlayerType = W.prototype.getPlayerType;
	W.prototype.setPlayerType = W.prototype.setPlayerType;
	W.prototype.getLocale = W.prototype.De;
	W.prototype.setLocale = W.prototype.setLocale;
	W.prototype.isVpaidAdapter = W.prototype.Cb;
	W.prototype.setIsVpaidAdapter = W.prototype.setIsVpaidAdapter;
	W.prototype.isAutoPlayAdBreaks = W.prototype.isAutoPlayAdBreaks;
	W.prototype.setAutoPlayAdBreaks = W.prototype.setAutoPlayAdBreaks;
	W.prototype.getVpaidMode = W.prototype.getVpaidMode;
	W.prototype.setVpaidMode = W.prototype.setVpaidMode;
	W.prototype.setVpaidAllowed = W.prototype.setVpaidAllowed;
	W.prototype.getPpid = W.prototype.getPpid;
	W.prototype.setPpid = W.prototype.setPpid;
	W.prototype.getNumRedirects = W.prototype.getNumRedirects;
	W.prototype.setNumRedirects = W.prototype.setNumRedirects;
	W.prototype.getCompanionBackfill = W.prototype.getCompanionBackfill;
	W.prototype.setCompanionBackfill = W.prototype.setCompanionBackfill;
	var Jx = new W;
	var Kx = function(a) {
		C.call(this, a)
	};
	t(Kx, C);
	var Lx = function(a) {
			void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
			void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
			return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId &&
				"number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
		},
		Mx = function(a, b) {
			b = void 0 === b ? 500 : b;
			M.call(this);
			this.l = a;
			this.h = null;
			this.B = {};
			this.C = 0;
			this.A = b;
			this.o = null
		};
	t(Mx, M);
	Mx.prototype.O = function() {
		this.B = {};
		this.o && (Ve(this.l, "message", this.o), delete this.o);
		delete this.B;
		delete this.l;
		delete this.h;
		M.prototype.O.call(this)
	};
	var Ox = function(a) {
			return "function" === typeof a.l.__tcfapi || null != Nx(a)
		},
		Rx = function(a, b) {
			var c = {
					internalErrorState: 0
				},
				d = Qe(function() {
					return b(c)
				}),
				e = 0; - 1 !== a.A && (e = setTimeout(function() {
				e = 0;
				c.tcString = "tcunavailable";
				c.internalErrorState = 1;
				d()
			}, a.A));
			Px(a, "addEventListener", function(f) {
				f && (c = f, c.internalErrorState = Lx(c), Qx(c) && (0 != c.internalErrorState && (c
					.tcString = "tcunavailable"), Px(a, "removeEventListener", null, c
					.listenerId), e && (clearTimeout(e), e = 0), d()))
			})
		};
	Mx.prototype.addEventListener = function(a) {
		var b = {},
			c = Qe(function() {
				return a(b)
			}),
			d = 0; - 1 !== this.A && (d = setTimeout(function() {
			b.tcString = "tcunavailable";
			b.internalErrorState = 1;
			c()
		}, this.A));
		var e = function(f, g) {
			clearTimeout(d);
			f ? (b = f, b.internalErrorState = Lx(b), g && 0 === b.internalErrorState || (b.tcString =
				"tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b
				.internalErrorState = 3);
			a(b)
		};
		try {
			Px(this, "addEventListener", e)
		} catch (f) {
			b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
				d = 0), c()
		}
	};
	Mx.prototype.removeEventListener = function(a) {
		a && a.listenerId && Px(this, "removeEventListener", null, a.listenerId)
	};
	var Px = function(a, b, c, d) {
			c || (c = function() {});
			if ("function" === typeof a.l.__tcfapi) a = a.l.__tcfapi, a(b, 2, c, d);
			else if (Nx(a)) {
				Sx(a);
				var e = ++a.C;
				a.B[e] = c;
				a.h && (c = {}, a.h.postMessage((c.__tcfapiCall = {
					command: b,
					version: 2,
					callId: e,
					parameter: d
				}, c), "*"))
			} else c({}, !1)
		},
		Nx = function(a) {
			if (a.h) return a.h;
			a.h = Uf(a.l, "__tcfapiLocator");
			return a.h
		},
		Sx = function(a) {
			a.o || (a.o = function(b) {
				try {
					var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
					a.B[c.callId](c.returnValue, c.success)
				} catch (d) {}
			}, Ue(a.l,
				"message", a.o))
		},
		Qx = function(a) {
			if (!1 === a.gdprApplies) return !0;
			void 0 === a.internalErrorState && (a.internalErrorState = Lx(a));
			return "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && (
				"tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1
		};

	function Tx(a) {
		var b = {};
		(new Ds(a)).o.forEach(function(c, d) {
			b[d] = c
		});
		return b
	}
	var Ux = function(a) {
			this.Ed = a.isGdprLoader || !1;
			this.uspString = a.uspString || "";
			var b = a.gdprApplies;
			this.l = "boolean" == typeof b ? b ? "1" : "0" : "number" != typeof b || 1 !== b && 0 !== b ?
				"string" != typeof b || "1" !== b && "0" !== b ? "" : "1" == b ? "1" : "0" : 1 == b ? "1" : "0";
			this.h = a.tcString || "";
			/^[\.\w_-]*$/.test(this.h) || (this.h = encodeURIComponent(this.h))
		},
		Vx = function(a, b) {
			a = void 0 === a ? {} : a;
			b = void 0 === b ? {} : b;
			this.h = a;
			this.l = new Ux(b)
		},
		Wx = function(a, b) {
			var c = new Ds(a);
			var d = c.h;
			(c = gb(c.l, "googleads.g.doubleclick.net") && tu("/pagead/(live/)?ads",
				d)) || (d = new xu(a), c = d.l, d = yu(d, d.h), c = !gb(c, ".g.doubleclick.net") && gb(c,
				"doubleclick.net") && tu("/(ad|pfad)[x|i|j]?/", d));
			c || (c = new Ds(a), d = c.h, c = gb(c.l, "doubleclick.net") && tu("/gampad/(live/)?ads", d));
			(c = c || "bid.g.doubleclick.net" == (new Ds(a)).l) || (c = new Ds(a), d = c.h, c =
				"ad.doubleclick.net" === c.l && tu("/dv3/adv", d));
			c || (c = new Ds(a), d = c.h, "pubads.g.doubleclick.net" === c.l && (tu("/ssai/", d) || tu("/ondemand/",
				d)));
			return new Vx(Tx(a), b)
		},
		Xx = function(a, b) {
			if (a.h.hasOwnProperty(b)) return a.h[b]
		},
		Yx = function(a) {
			var b,
				c;
			if (!(b = "1" == (null == (c = Xx(a, "ltd")) ? void 0 : c.toString()))) {
				var d;
				b = null == (d = Xx(a, "gdpr")) ? void 0 : d.toString();
				d = a.l.l;
				d = ("1" == d || "0" == d ? d : void 0 != b ? b : "").toLowerCase();
				if ("true" === d || "1" === d)
					if (d = a.l.h, a = Xx(a, "gdpr_consent"), a = d && "tcunavailable" != d ? d : "tcunavailable" ==
						d ? a || d : a || "", "tcunavailable" === a) var e = !1;
					else {
						if ((d = ys(a)) && a) {
							var f = td(d, Pr, 1);
							d = td(d, Ir, 2) || new Ir;
							b = od(f, 9, 0);
							c = od(f, 4, 0);
							var g = od(f, 5, 0),
								h = pd(f, 10),
								l = pd(f, 11),
								n = od(f, 16, ""),
								m = pd(f, 15),
								x = {
									consents: zs(ld(f, 13), ks),
									legitimateInterests: zs(ld(f,
										14), ks)
								},
								u = {
									consents: zs(ld(f, 17), void 0),
									legitimateInterests: zs(ld(f, 18), void 0)
								},
								A = zs(ld(f, 12), ls),
								z = ud(f, Gr, 19);
							f = {};
							z = r(z);
							for (var O = z.next(); !O.done; O = z.next()) {
								O = O.value;
								var T = od(O, 1, 0);
								f[T] = f[T] || {};
								for (var ia = r(ld(O, 3)), La = ia.next(); !La.done; La = ia.next()) f[T][La
									.value] = od(O, 2, 0)
							}
							a = {
								tcString: a,
								tcfPolicyVersion: b,
								gdprApplies: !0,
								cmpId: c,
								cmpVersion: g,
								isServiceSpecific: h,
								useNonStandardStacks: l,
								publisherCC: n,
								purposeOneTreatment: m,
								purpose: x,
								vendor: u,
								specialFeatureOptins: A,
								publisher: {
									restrictions: f,
									consents: zs(ld(d, 1), ks),
									legitimateInterests: zs(ld(d, 2), ks),
									customPurposes: {
										consents: zs(ld(d, 3)),
										legitimateInterests: zs(ld(d, 4))
									}
								}
							}
						} else a = null;
						if (a) {
							var ua = void 0 === ua ? !1 : ua;
							if (Qx(a))
								if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a
									.gdprApplies && !ua || "string" !== typeof a.tcString || !a.tcString.length)
									e = !0;
								else {
									e = void 0 === e ? "755" : e;
									c: {
										if (a.publisher && a.publisher.restrictions && (ua = a.publisher
												.restrictions["1"], void 0 !== ua)) {
											ua = ua[void 0 === e ? "755" : e];
											break c
										}
										ua = void 0
									}
									0 === ua ? e = !1 : a.purpose &&
										a.vendor ? (ua = a.vendor.consents, (e = !(!ua || !ua[void 0 === e ? "755" :
												e])) && a.purposeOneTreatment && "CH" === a.publisherCC ? e = !0 :
											e && (e = a.purpose.consents, e = !(!e || !e["1"]))) : e = !0
								}
							else e = !1
						} else e = !1
					}
				else e = !0;
				b = !e
			}
			return b
		};
	var Zx = "platform platformVersion architecture model uaFullVersion bitness".split(" ");

	function $x() {
		var a = window,
			b, c;
		return "function" !== typeof(null === (c = null === (b = null === a || void 0 === a ? void 0 : a
				.navigator) || void 0 === b ? void 0 : b.userAgentData) || void 0 === c ? void 0 : c
			.getHighEntropyValues) ? null : a.navigator.userAgentData.getHighEntropyValues(Zx).then(function(
		d) {
			var e = new Bs;
			e = kd(e, 1, d.platform);
			e = kd(e, 2, d.platformVersion);
			e = kd(e, 3, d.architecture);
			e = kd(e, 4, d.model);
			e = kd(e, 5, d.uaFullVersion);
			return kd(e, 9, d.bitness)
		})
	};
	var by = function() {
			this.adBlock = 1;
			this.appName = null;
			new Vx;
			ot();
			this.deviceId = "";
			this.h = this.referrer = null;
			ay(this)
		},
		cy = function() {
			I(by);
			var a = "h.3.494.0";
			Jx.Cb() && (a += "/vpaid_adapter");
			return a
		},
		ay = function(a) {
			var b = $x();
			b && b.then(function(c) {
				a.h = null == c ? null : Ac(xd(c))
			})
		};
	var dy =
		"abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting"
		.split(" ");
	var fy = function(a) {
			var b = Ix(Jx);
			if (b && Fx(b, "forceCustomPlayback") || Jx.Cb()) return !0;
			if ((fc || cu()) && a) return !1;
			a = a && (fc || cu() || du(10)) && Jx.getDisableCustomPlaybackForIOS10Plus();
			return (ec || gc) && !a || dc && (!dc || !bu(au, 4)) || ey() ? !0 : !1
		},
		gy = function(a) {
			return null == a ? !1 : Jx.Cb() ? !0 : hc || fc || cu() ? eu(a) ? fc || cu() || du(10) && Jx
				.getDisableCustomPlaybackForIOS10Plus() ? !1 : !0 : !0 : dc && (!dc || !bu(au, 4)) || ey() ? !0 : !1
		},
		hy = function() {
			var a = Ix(Jx);
			return a && Fx(a, "disableOnScreenDetection") ? !1 : !Qm()
		},
		ey = function() {
			return Rm() ||
				(I(by), !1)
		};
	var iy = function() {
			this.allowCustom = !0;
			this.creativeType = this.resourceType = "All";
			this.sizeCriteria = "SelectExactMatch";
			this.nearMatchPercent = 90;
			this.adSlotIds = []
		},
		jy = {
			IMAGE: "Image",
			FLASH: "Flash",
			ALL: "All"
		};
	w("module$contents$ima$CompanionAdSelectionSettings_CompanionAdSelectionSettings.CreativeType", jy, void 0);
	var ky = {
		HTML: "Html",
		IFRAME: "IFrame",
		STATIC: "Static",
		ALL: "All"
	};
	w("module$contents$ima$CompanionAdSelectionSettings_CompanionAdSelectionSettings.ResourceType", ky, void 0);
	var ly = {
		IGNORE: "IgnoreSize",
		SELECT_EXACT_MATCH: "SelectExactMatch",
		SELECT_NEAR_MATCH: "SelectNearMatch"
	};
	w("module$contents$ima$CompanionAdSelectionSettings_CompanionAdSelectionSettings.SizeCriteria", ly, void 0);
	var ny = function(a, b) {
			b = void 0 === b ? new iy : b;
			this.l = a;
			this.h = b ? b : new iy;
			this.C = my(ky, this.h.resourceType) ? this.h.resourceType : "All";
			this.o = my(jy, this.h.creativeType) ? this.h.creativeType : "All";
			this.D = my(ly, this.h.sizeCriteria) ? this.h.sizeCriteria : "SelectExactMatch";
			this.A = null != this.h.adSlotIds ? this.h.adSlotIds : [];
			this.B = "number" === typeof this.h.nearMatchPercent && 0 < this.h.nearMatchPercent && 100 >= this.h
				.nearMatchPercent ? this.h.nearMatchPercent : 90
		},
		qy = function(a, b) {
			var c = [];
			b.forEach(function(d) {
				a.h.allowCustom &&
					(!ib(d.getContent()) && (isNaN(d.h.sequenceNumber) || isNaN(d.h.mainAdSequenceNumber) ||
						d.h.mainAdSequenceNumber == d.h.sequenceNumber) && oy(a, d) ? c.push(d) : (d =
						py(a, d), null != d && !ib(d.getContent()) && c.push(d)))
			});
			return c
		},
		oy = function(a, b) {
			var c;
			if (c = "Flash" != b.getContentType()) {
				if (c = "All" == a.C || a.C == b.h.resourceType) c = b.getContentType(), c = null == c ? !0 :
					"All" == a.o || a.o == c;
				c && (c = b.wd(), c = 0 == a.A.length ? !0 : null != c ? a.A.includes(c) : !1)
			}
			if (c)
				if (b = b.h.size, (c = "IgnoreSize" == a.D) || (c = a.l, c = c == b ? !0 : c && b ? c.width == b
						.width &&
						c.height == b.height : !1), c) a = !0;
				else {
					if (c = "SelectNearMatch" == a.D) c = b.width, b = b.height, c = c > a.l.width || b > a.l
						.height || c < a.B / 100 * a.l.width || b < a.B / 100 * a.l.height ? !1 : !0;
					a = c
				}
			else a = !1;
			return a
		},
		py = function(a, b) {
			b = ry(b);
			return null == b ? null : b.find(function(c) {
				return oy(a, c)
			}) || null
		},
		my = function(a, b) {
			return null != b && Rd(a, b)
		};
	var X = {},
		sy = (X.creativeView = "creativeview", X.start = "start", X.midpoint = "midpoint", X.firstQuartile =
			"firstquartile", X.thirdQuartile = "thirdquartile", X.complete = "complete", X.mute = "mute", X.unmute =
			"unmute", X.pause = "pause", X.rewind = "rewind", X.resume = "resume", X.fullscreen = "fullscreen", X
			.exitFullscreen = "exitfullscreen", X.expand = "expand", X.collapse = "collapse", X.close = "close", X
			.acceptInvitation = "acceptinvitation", X.userInteraction = "userInteraction", X.adCanPlay =
			"adCanPlay", X.adStarted = "adStarted", X.abandon = "abandon",
			X.acceptInvitationLinear = "acceptinvitationlinear", X.engagedView = "engagedview", X
			.instreamAdComplete = "instreamAdComplete", X.skipShown = "skipshown", X.skippableStateChanged =
			"skippableStateChanged", X.skip = "skip", X.progress = "progress", X.publisher_invoked_skip =
			"PUBLISHER_INVOKED_SKIP", X.annotation_start = "annotation_start", X.annotation_click =
			"annotation_click", X.annotation_close = "annotation_close", X.cta_annotation_shown =
			"cta_annotation_shown", X.cta_annotation_clicked = "cta_annotation_clicked", X.cta_annotation_closed =
			"cta_annotation_closed", X.replay = "replay", X.stop = "stop", X.autoplayDisallowed =
			"autoplayDisallowed", X.error = "error", X.mediaLoadTimeout = "mediaLoadTimeout", X.linearChanged =
			"linearChanged", X.click = "click", X.contentPauseRequested = "contentPauseRequested", X
			.contentResumeRequested = "contentResumeRequested", X.discardAdBreak = "discardAdBreak", X
			.updateAdsRenderingSettings = "updateAdsRenderingSettings", X.durationChange = "durationChange", X
			.expandedChanged = "expandedChanged", X.autoClose = "autoClose", X.userClose = "userClose",
			X.userRecall = "userRecall", X.prefetched = "prefetched", X.loaded = "loaded", X.init = "init", X
			.allAdsCompleted = "allAdsCompleted", X.adMetadata = "adMetadata", X.adBreakReady = "adBreakReady", X
			.adBreakFetchError = "adBreakFetchError", X.log = "log", X.volumeChange = "volumeChange", X
			.companionBackfill = "companionBackfill", X.companionInitialized = "companionInitialized", X
			.companionImpression = "companionImpression", X.companionClick = "companionClick", X.impression =
			"impression", X.interaction = "interaction", X.adProgress = "adProgress",
			X.adBuffering = "adBuffering", X.trackingUrlPinged = "trackingUrlPinged", X.measurable_impression =
			"measurable_impression", X.custom_metric_viewable = "custom_metric_viewable", X.viewable_impression =
			"viewable_impression", X.fully_viewable_audible_half_duration_impression =
			"fully_viewable_audible_half_duration_impression", X.overlay_resize = "overlay_resize", X
			.overlay_unmeasurable_impression = "overlay_unmeasurable_impression", X.overlay_unviewable_impression =
			"overlay_unviewable_impression", X.overlay_viewable_immediate_impression =
			"overlay_viewable_immediate_impression", X.overlay_viewable_end_of_session_impression =
			"overlay_viewable_end_of_session_impression", X.externalActivityEvent = "externalActivityEvent", X
			.adEvent = "adEvent", X.configure = "configure", X.remainingTime = "remainingTime", X.destroy =
			"destroy", X.resize = "resize", X.volume = "volume", X.authorIconClicked = "videoAuthorIconClicked", X
			.authorNameClicked = "videoAuthorClicked", X.videoClicked = "videoClicked", X.videoIconClicked =
			"videoIconClicked", X.learnMoreClicked = "videoLearnMoreClicked",
			X.muteClicked = "videoMuteClicked", X.titleClicked = "videoTitleClicked", X.skipShown = "SKIP_SHOWN", X
			.videoSkipClicked = "SKIPPED", X.unmuteClicked = "videoUnmuteClicked", X.vpaidEvent = "vpaidEvent", X
			.show_ad = "show_ad", X.video_card_endcap_collapse = "video_card_endcap_collapse", X
			.video_card_endcap_dismiss = "video_card_endcap_dismiss", X.video_card_endcap_impression =
			"video_card_endcap_impression", X.mediaUrlPinged = "mediaUrlPinged", X.breakStart = "breakstart", X
			.breakEnd = "breakend", X.omidReady = "omidReady", X.omidUnavailable =
			"omidUnavailable", X.omidAdSessionCompleted = "omidAdSessionCompleted", X.omidAdSessionAbandoned =
			"omidAdSessionAbandoned", X.verificationNotExecuted = "verificationNotExecuted", X.loadStart =
			"loadStart", X.seeked = "seeked", X.seeking = "seeking", X);
	var ty = function(a) {
		N.call(this);
		this.sessionId = a || "goog_" + ff++;
		this.o = [];
		this.l = !1
	};
	t(ty, N);
	ty.prototype.connect = function() {
		for (this.l = !0; 0 != this.o.length;) {
			var a = this.o.shift();
			this.sendMessage(a.name, a.type, a.data)
		}
	};
	var uy = function(a, b, c, d) {
		a.l ? a.sendMessage(b, c, d) : a.o.push({
			name: b,
			type: c,
			data: d
		})
	};
	ty.prototype.sendMessage = function() {};
	var vy = {
		ff: function(a, b) {
			a && (at(a) ? bt(a, b) : it(a, b))
		}
	};

	function wy(a) {
		a = Yt(a, Qm() ? "https" : window.location.protocol);
		if (Qm()) yy(a);
		else try {
			vy.ff(a, !0)
		} catch (b) {}
	}

	function yy(a) {
		(new pu).get({
			url: a,
			timeout: new Ut
		}).then(function() {}, function() {})
	};
	var zy = function(a, b, c) {
		var d = Error.call(this);
		this.message = d.message;
		"stack" in d && (this.stack = d.stack);
		this.o = b;
		this.h = c;
		this.A = a
	};
	t(zy, Error);
	k = zy.prototype;
	k.getAd = function() {
		return this.B
	};
	k.getInnerError = function() {
		return this.l
	};
	k.getMessage = function() {
		return this.o
	};
	k.getErrorCode = function() {
		return this.h
	};
	k.Bd = function() {
		return 1E3 > this.h ? this.h : 900
	};
	k.getType = function() {
		return this.A
	};
	k.toString = function() {
		return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (null != this.getInnerError() ?
			" Caused by: " + this.getInnerError() : "")
	};
	var Ay = function(a, b) {
		this.message = a;
		this.errorCode = b
	};
	Ay.prototype.getErrorCode = function() {
		return this.errorCode
	};
	Ay.prototype.getMessage = function() {
		return this.message
	};
	var By = new Ay("Failed to initialize ad playback element before starting ad playback.", 400),
		Cy = new Ay("The provided {0} information: {1} is invalid.", 1101);

	function Dy(a, b, c) {
		var d = void 0 === b ? null : b;
		if (!(d instanceof zy)) {
			var e = a.errorCode,
				f = a.message,
				g = Array.prototype.slice.call(arguments, 2);
			if (0 < g.length)
				for (var h = 0; h < g.length; h++) f = f.replace(new RegExp("\\{" + h + "\\}", "ig"), g[h]);
			e = new zy("adPlayError", f, e);
			e.l = d;
			d = e
		}
		return d
	};
	var Ey = function() {
			this.errorMessage = this.info = this.error = this.Vc = null
		},
		Fy = function(a, b) {
			a.Vc = b;
			return a
		};
	Ey.prototype.getError = function() {
		return this.error
	};
	var Gy = function(a, b) {
		a.errorMessage = b;
		return a
	};
	Ey.prototype.getErrorMessage = function() {
		return this.errorMessage
	};
	var Hy = function() {
			this.cache = {}
		},
		Ly = function() {
			Iy || (Jy = Pg(zg), Ky = Pg(yg), Iy = new Hy);
			return Iy
		},
		My = function(a) {
			var b = D(a, 3);
			if (!b) return 3;
			if (void 0 === D(a, 2)) return 4;
			a = Date.now();
			return a > b + 36E5 * Ky ? 2 : a > b + 36E5 * Jy ? 1 : 0
		};
	Hy.prototype.get = function(a, b) {
		var c = new Ey;
		if (this.cache[a]) return Fy(c, this.cache[a]);
		var d = "";
		try {
			d = b.getItem("_GESPSK-" + a)
		} catch (e) {
			return c.error = 6, Gy(c, e.message)
		}
		if (!d) return new Ey;
		b = null;
		try {
			b = hd(Ak, d ? JSON.parse(d) : null)
		} catch (e) {
			return a = new Ey, a.error = 5, Gy(a, e.message)
		}
		b && (this.cache[a] = b);
		return Fy(new Ey, b)
	};
	Hy.prototype.set = function(a, b) {
		var c = D(a, 1),
			d = "_GESPSK-" + c,
			e = Fy(new Ey, a);
		try {
			b.setItem(d, xd(a))
		} catch (f) {
			e.info = 7, Gy(e, f.message)
		}
		this.cache[c] = a;
		return e
	};
	var Iy = null,
		Jy = 24,
		Ky = 72;

	function Ny(a, b, c, d) {
		c = void 0 === c ? null : c;
		d = void 0 === d ? {} : d;
		if (Math.random() < Pg(Bg)) {
			var e = {};
			gg(Object.assign((e.c = String(a), e.pc = String(Yf()), e.em = c, e.lid = b, e.eids = I(al).h().join(),
				e), d), "esp")
		}
	};

	function Oy(a) {
		if (!a) return null;
		var b = new wk,
			c = Pg(Ag),
			d = [],
			e = RegExp("^_GESPSK-(.+)$");
		try {
			for (var f = 0; f < a.length; f++) {
				var g = (e.exec(a.key(f)) || [])[1];
				g && d.push(g)
			}
		} catch (l) {}
		d = r(d);
		for (e = d.next(); !e.done; e = d.next())
			if (e = e.value, f = Ly().get(e, a), f.getError()) Ny(f.getError(), e, f.getErrorMessage());
			else if (f = f.Vc)
			if (g = My(f), 0 === g || 1 === g)
				if (g = D(f, 2), 0 <= c && g && g.length > c) Ny(12, e);
				else {
					g = void 0;
					var h = Ak;
					g = void 0 === g ? !1 : g;
					g = ud(b, h, 2, g);
					f = f ? f : new h;
					h = ld(b, 2);
					g.push(f);
					h.push(f.pa);
					Ny(19, e)
				} return ud(b, Ak,
			2).length ? zc(Ad(b, Bk), 2) : null
	};
	var Py = function() {
		M.apply(this, arguments);
		this.h = [];
		this.dependencies = [];
		this.l = []
	};
	t(Py, M);
	Py.prototype.O = function() {
		this.h.length = 0;
		this.l.length = 0;
		this.dependencies.length = 0;
		M.prototype.O.call(this)
	};
	var Qy = function() {
		var a = this;
		this.promise = new Promise(function(b, c) {
			a.resolve = b;
			a.reject = c
		})
	};
	var Ry = function(a) {
		a = Error.call(this, a);
		this.message = a.message;
		"stack" in a && (this.stack = a.stack);
		Object.setPrototypeOf(this, Ry.prototype);
		this.name = "InputError"
	};
	t(Ry, Error);
	var Sy = function() {
			var a = this;
			this.D = this.A = null;
			this.B = -1;
			this.l = new Qy;
			this.h = !1;
			this.l.promise.then(function() {
				-1 !== a.B && (a.D = Tg() - a.B)
			}, function() {})
		},
		Ty = function() {
			Sy.apply(this, arguments)
		};
	t(Ty, Sy);
	var Uy = function(a, b) {
			a.h || (a.h = !0, a.A = b, a.l.resolve(b))
		},
		Vy = function(a) {
			a.h || (a.h = !0, a.A = null, a.l.resolve(null))
		};
	ea.Object.defineProperties(Ty.prototype, {
		promise: {
			configurable: !0,
			enumerable: !0,
			get: function() {
				return this.l.promise
			}
		},
		resolved: {
			configurable: !0,
			enumerable: !0,
			get: function() {
				return this.h
			}
		}
	});
	var Wy = function(a) {
		Sy.call(this);
		this.o = a
	};
	t(Wy, Sy);
	ea.Object.defineProperties(Wy.prototype, {
		error: {
			configurable: !0,
			enumerable: !0,
			get: function() {
				return this.o.C
			}
		}
	});
	var Xy = function(a) {
		Wy.call(this, a);
		this.o = a
	};
	t(Xy, Wy);
	ea.Object.defineProperties(Xy.prototype, {
		value: {
			configurable: !0,
			enumerable: !0,
			get: function() {
				return this.o.A
			}
		}
	});

	function Yy(a, b) {
		var c, d, e;
		return Fa(function(f) {
			if (1 == f.h) return c = 0 < b ? a.filter(function(g) {
				return !g.ld
			}) : a, xa(f, Promise.all(c.map(function(g) {
				return g.dependency.promise
			})), 2);
			if (3 != f.h) {
				if (a.length === c.length) return f.return(0);
				d = a.filter(function(g) {
					return g.ld
				});
				e = Tg();
				return xa(f, Promise.race([Promise.all(d.map(function(g) {
					return g.dependency.promise
				})), new Promise(function(g) {
					return void setTimeout(g, b)
				})]), 3)
			}
			return f.return(Tg() - e)
		})
	}
	var Zy = function(a, b) {
		b = void 0 === b ? 0 : b;
		M.call(this);
		this.id = a;
		this.timeoutMs = b;
		this.h = new Py;
		this.started = !1;
		this.F = -1;
		Ui(this, this.h)
	};
	t(Zy, M);
	Zy.prototype.start = function() {
		var a = this,
			b, c, d, e, f;
		return Fa(function(g) {
			switch (g.h) {
				case 1:
					if (a.started) return g.return();
					a.started = !0;
					g.l = 2;
					b = a;
					return xa(g, Yy(a.h.dependencies, a.timeoutMs), 4);
				case 4:
					b.F = g.C;
					if (a.Ia()) {
						g.h = 5;
						break
					}
					for (var h = 0, l = r(a.h.l), n = l.next(); !n.done; n = l.next()) {
						if (null === n.value.o.A) throw Error("missing input: " + a.id + "/" + h);
						++h
					}
					c = r(a.h.h);
					for (d = c.next(); !d.done; d = c.next()) e = d.value, e.B = Tg();
					return xa(g, a.B(), 5);
				case 5:
					g.h = 0;
					g.l = 0;
					break;
				case 2:
					f = ya(g);
					if (a.Ia()) return g.return();
					if (!(f instanceof Ry) && f instanceof Error && (a.D(a.id, f), a.h.h.length))
						for (h = new Ry(f.message), l = r(a.h.h), n = l.next(); !n.done; n = l.next())
							if (n = n.value, !n.resolved) {
								var m = h;
								n.h = !0;
								n.C = m;
								n.l.reject(m)
							} g.h = 0
			}
		})
	};
	var $y = function(a) {
			var b = new Ty;
			a.h.h.push(b);
			return b
		},
		az = function(a, b) {
			a.h.dependencies.push({
				ld: !1,
				dependency: b
			});
			return new Xy(b)
		};
	var bz = function(a, b) {
		Zy.call(this, a);
		this.id = a;
		this.D = b
	};
	t(bz, Zy);
	var cz = function(a, b, c, d) {
		bz.call(this, 655, d);
		this.Fa = a;
		this.collectorFunction = b;
		this.storage = c;
		this.o = $y(this);
		this.A = $y(this);
		this.l = Pg(xg)
	};
	t(cz, bz);
	cz.prototype.B = function() {
		var a, b = Ly().get(this.Fa, this.storage);
		if (b.getError()) Ny(b.getError(), this.Fa, b.getErrorMessage()), Vy(this.o), Vy(this.A);
		else {
			var c = Date.now();
			if (b = b.Vc)
				if (this.l && (null == D(b, 8) && (Ny(33, this.Fa), kd(b, 8, this.l)), null == D(b, 7) && (Ny(
						34, this.Fa), kd(b, 7, Math.round(Date.now() / 1E3 / 60)))), null != D(b, 3) || Ny(35,
						this.Fa), this.l) {
					var d = md(b, 8),
						e = null !== (a = D(b, 7)) && void 0 !== a ? a : c;
					d < this.l && kd(b, 8, Math.min(d + Number((this.l * (c / 1E3 / 60 - e) / 60).toFixed(3)),
						this.l));
					1 > md(b, 8) ? (c = {}, Ny(22, this.Fa,
							null, (c.t = String(e), c.cr = String(d), c.cs = String(My(b)), c)), Vy(this.o),
						Vy(this.A)) : (Uy(this.o, this.collectorFunction), Uy(this.A, b))
				} else Uy(this.o, this.collectorFunction), Uy(this.A, b);
			else Uy(this.o, this.collectorFunction), b = this.A, d = new Ak, d = kd(d, 1, this.Fa), d = kd(d, 8,
				this.l), c = kd(d, 3, c), Uy(b, c)
		}
	};

	function dz(a, b, c, d) {
		Ny(18, a);
		try {
			var e = Tg();
			Pg(xg) && (kd(b, 8, Number((md(b, 8) - 1).toFixed(3))), kd(b, 7, Math.round(e / 1E3 / 60)));
			return c().then(function(f) {
				Ny(29, a, null, {
					delta: String(Tg() - e)
				});
				kd(b, 3, Date.now());
				ez(a, b, f, d);
				return b
			}).catch(function(f) {
				ez(a, b, D(b, 2), d);
				Ny(28, a, fz(f));
				return b
			})
		} catch (f) {
			return ez(a, b, D(b, 2), d), Ny(1, a, fz(f)), Promise.resolve(b)
		}
	}
	var ez = function(a, b, c, d) {
			"string" !== typeof c ? Ny(21, a) : c || Ny(20, a);
			kd(b, 2, c);
			b = Ly().set(b, d);
			b.getErrorMessage() ? Ny(b.info, a, b.getErrorMessage()) : Ny(27, a)
		},
		fz = function(a) {
			return "string" === typeof a ? a : a instanceof Error ? a.message : null
		};
	var gz = function(a, b, c, d) {
		bz.call(this, 658, d);
		this.storage = c;
		this.l = $y(this);
		this.o = $y(this);
		this.A = $y(this);
		this.C = az(this, a);
		this.H = az(this, b)
	};
	t(gz, bz);
	gz.prototype.B = function() {
		var a = this;
		if (this.C.value) {
			var b = function(g) {
					Uy(a.l, {
						id: D(g, 1),
						collectorGeneratedData: D(g, 2)
					})
				},
				c = this.C.value,
				d = this.H.value,
				e = D(d, 1),
				f = My(d);
			switch (f) {
				case 0:
					Ny(24, e);
					break;
				case 1:
					Ny(25, e);
					break;
				case 2:
					Ny(26, e);
					break;
				case 3:
					Ny(9, e);
					break;
				case 4:
					Ny(23, e)
			}
			switch (f) {
				case 0:
					b(d);
					hz(this);
					break;
				case 1:
					b(d);
					Uy(this.o, c);
					Uy(this.A, d);
					break;
				case 3:
				case 2:
				case 4:
					kd(d, 2, null), dz(e, d, c, this.storage).then(b), hz(this)
			}
		} else Vy(this.l), hz(this)
	};
	var hz = function(a) {
		Vy(a.o);
		Vy(a.A)
	};

	function iz() {
		var a = window;
		var b = void 0 === b ? function() {} : b;
		return new Promise(function(c) {
			var d = function() {
				c(b());
				Ve(a, "load", d)
			};
			Ue(a, "load", d)
		})
	};
	var jz = function(a, b, c, d) {
		bz.call(this, 662, d);
		this.storage = c;
		this.l = az(this, a);
		this.o = az(this, b)
	};
	t(jz, bz);
	jz.prototype.B = function() {
		var a = this;
		this.o.value && this.l.value && iz().then(function() {
			var b = a.o.value;
			dz(D(b, 1), b, a.l.value, a.storage)
		})
	};
	var kz = function() {
		M.apply(this, arguments);
		this.nodes = []
	};
	t(kz, M);
	kz.prototype.empty = function() {
		return !this.nodes.length
	};
	kz.prototype.O = function() {
		M.prototype.O.call(this);
		this.nodes.length = 0
	};

	function lz(a, b, c, d) {
		var e, f, g, h, l;
		return Fa(function(n) {
			if (1 == n.h) {
				e = new cz(a, b, c, d);
				f = new gz(e.o, e.A, c, d);
				g = new jz(f.o, f.A, c, d);
				h = new kz;
				for (var m = r([e, f, g]), x = m.next(); !x.done; x = m.next()) x = x.value, Ui(h, x), h
					.nodes.push(x);
				if (!h.empty())
					for (m = r(h.nodes), x = m.next(); !x.done; x = m.next()) x.value.start();
				return xa(n, f.l.promise, 2)
			}
			l = n.C;
			return n.return(l ? l : {
				id: a,
				collectorGeneratedData: null
			})
		})
	};
	var mz = function(a, b) {
		this.storage = b;
		this.o = [];
		this.l = [];
		this.h = [];
		a = r(a);
		for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
	};
	mz.prototype.push = function(a) {
		var b = a.id;
		a = a.collectorFunction;
		if ("string" !== typeof b) Ny(37, "invalid-id");
		else if ("function" !== typeof a) Ny(14, b);
		else {
			var c = {};
			Ny(17, b, null, (c.api = "1", c));
			b = lz(b, a, this.storage, this.A);
			this.o.push(b);
			a = r(this.l);
			for (c = a.next(); !c.done; c = a.next()) b.then(c.value)
		}
	};
	mz.prototype.addOnSignalResolveCallback = function(a) {
		this.l.push(a);
		for (var b = r(this.o), c = b.next(); !c.done; c = b.next()) c.value.then(a)
	};
	mz.prototype.addErrorHandler = function(a) {
		this.h.push(a)
	};
	mz.prototype.A = function(a, b) {
		for (var c = r(this.h), d = c.next(); !d.done; d = c.next()) d = d.value, d(a, b)
	};
	var nz = function(a) {
		this.push = function(b) {
			a.push(b)
		};
		this.addOnSignalResolveCallback = function(b) {
			a.addOnSignalResolveCallback(b)
		};
		this.addErrorHandler = function(b) {
			a.addErrorHandler(b)
		}
	};

	function oz(a, b, c, d) {
		var e;
		if (b) {
			var f = Mf();
			var g = window;
			g = Jf(g.top) ? g.top : null;
			f === g || Og(wg) ? a.encryptedSignalProviders instanceof nz ? (d && a.encryptedSignalProviders
				.addOnSignalResolveCallback(d), a.encryptedSignalProviders.addErrorHandler(c)) : (f = new mz(
					null !== (e = a.encryptedSignalProviders) && void 0 !== e ? e : [], b), a
				.encryptedSignalProviders = new nz(f), d && f.addOnSignalResolveCallback(d), f.addErrorHandler(
					c)) : Ny(16, "")
		} else Ny(15, "")
	}

	function pz(a, b, c, d) {
		var e = new Map;
		b = b.map(function(f) {
			var g = f.Fa;
			return new Promise(function(h) {
				e.set(g, h)
			})
		});
		oz(a, c, d, function(f) {
			var g = f.collectorGeneratedData;
			f = f.id;
			var h;
			return void(null === (h = e.get(f)) || void 0 === h ? void 0 : h({
				collectorGeneratedData: g,
				id: f
			}))
		});
		return b
	};
	var qz = function() {
		return v.googletag || (v.googletag = {})
	};

	function rz(a) {
		if (!a || Yx(a)) return null;
		try {
			return window.localStorage
		} catch (b) {
			return null
		}
	}

	function sz(a, b) {
		a = rz(a);
		oz(qz(), a, function() {}, b)
	}

	function tz(a, b) {
		return (b = rz(b)) && 0 != a.length ? pz(qz(), a, b, function() {}) : null
	};
	/*


	 Copyright Mathias Bynens <http://mathiasbynens.be/>

	 Permission is hereby granted, free of charge, to any person obtaining
	 a copy of this software and associated documentation files (the
	 "Software"), to deal in the Software without restriction, including
	 without limitation the rights to use, copy, modify, merge, publish,
	 distribute, sublicense, and/or sell copies of the Software, and to
	 permit persons to whom the Software is furnished to do so, subject to
	 the following conditions:

	 The above copyright notice and this permission notice shall be
	 included in all copies or substantial portions of the Software.

	 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	*/
	var uz = function(a, b) {
		return 0 == a.indexOf(b) ? a.substr(b.length) : null
	};
	var vz = function() {
		N.call(this);
		this.H = !1;
		this.h = null;
		this.C = this.F = this.M = !1;
		this.l = 0;
		this.B = [];
		this.D = !1;
		this.R = this.N = Infinity;
		this.o = 0;
		this.K = new ku(this);
		Ui(this, this.K);
		this.J = {}
	};
	t(vz, N);
	var xz = function(a, b) {
			null == b || a.H || (a.h = b, wz(a), a.H = !0)
		},
		zz = function(a) {
			null != a.h && a.H && (yz(a), a.H = !1, a.F = !1, a.C = !1, a.l = 0, a.B = [], a.D = !1)
		},
		wz = function(a) {
			yz(a);
			!(a.h instanceof N) && "ontouchstart" in document.documentElement && hc ? (a.J = {
				touchstart: function(b) {
					a.F = !0;
					a.l = b.touches.length;
					a.o && (window.clearTimeout(a.o), a.o = 0, a.M = !0);
					a.D = Az(a, b.touches) || 1 != b.touches.length;
					a.D ? (a.N = Infinity, a.R = Infinity) : (a.N = b.touches[0].clientX, a.R = b
						.touches[0].clientY);
					b = b.touches;
					a.B = [];
					for (var c = 0; c < b.length; c++) a.B.push(b[c].identifier)
				},
				touchmove: function(b) {
					a.l = b.touches.length;
					if (!du(8) || Math.pow(b.changedTouches[0].clientX - a.N, 2) + Math.pow(b
							.changedTouches[0].clientY - a.R, 2) > Math.pow(5, 2)) a.C = !0
				},
				touchend: function(b) {
					return void Bz(a, b)
				}
			}, Hd(a.J, function(b, c) {
				a.h.addEventListener(c, b, !1)
			})) : a.K.T(a.h, "click", a.U)
		},
		yz = function(a) {
			a.K.Va(a.h, "click", a.U);
			Hd(a.J, function(b, c) {
				this.h.removeEventListener(c, b, !1)
			}, a);
			a.J = {}
		},
		Bz = function(a, b) {
			!a.F || 1 != a.l || a.C || a.M || a.D || !Az(a, b.changedTouches) || (a.o = window.setTimeout(
			function() {
					return void Cz(a)
				},
				300));
			a.l = b.touches.length;
			0 == a.l && (a.F = !1, a.C = !1, a.B = []);
			a.M = !1
		};
	vz.prototype.U = function() {
		Cz(this)
	};
	var Az = function(a, b) {
			for (var c = 0; c < b.length; c++)
				if (a.B.includes(b[c].identifier)) return !0;
			return !1
		},
		Cz = function(a) {
			a.o = 0;
			a.dispatchEvent(new Vi("click"))
		};
	vz.prototype.O = function() {
		zz(this);
		N.prototype.O.call(this)
	};
	var Dz = function(a, b, c) {
		this.l = c;
		0 == b.length && (b = [
			[]
		]);
		this.h = b.map(function(d) {
			d = a.concat(d);
			for (var e = [], f = 0, g = 0; f < d.length;) {
				var h = d[f++];
				if (128 > h) e[g++] = String.fromCharCode(h);
				else if (191 < h && 224 > h) {
					var l = d[f++];
					e[g++] = String.fromCharCode((h & 31) << 6 | l & 63)
				} else if (239 < h && 365 > h) {
					l = d[f++];
					var n = d[f++],
						m = d[f++];
					h = ((h & 7) << 18 | (l & 63) << 12 | (n & 63) << 6 | m & 63) - 65536;
					e[g++] = String.fromCharCode(55296 + (h >> 10));
					e[g++] = String.fromCharCode(56320 + (h & 1023))
				} else l = d[f++], n = d[f++], e[g++] = String.fromCharCode((h & 15) << 12 |
					(l & 63) << 6 | n & 63)
			}
			return new RegExp(e.join(""))
		})
	};
	Dz.prototype.match = function(a) {
		var b = this;
		return this.h.some(function(c) {
			c = a.match(c);
			return null == c ? !1 : !b.l || 1 <= c.length && "3.494.0" == c[1] || 2 <= c.length &&
				"3.494.0" == c[2] ? !0 : !1
		})
	};
	var Ez = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108,
			101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100,
			101, 114, 124, 99, 111, 114, 101, 41, 47
		],
		Fz = [104, 116, 116, 112, 115, 63, 58, 47, 47, 115, 48, 92, 46, 50, 109, 100, 110, 92, 46, 110, 101, 116,
			47, 105, 110, 115, 116, 114, 101, 97, 109, 47, 104, 116, 109, 108, 53, 47
		],
		Gz = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108,
			101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 114, 101, 114, 101, 108, 101, 97, 115,
			101, 47, 106, 115, 47, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 47
		],
		Hz = [
			[105, 109, 97, 51, 92, 46, 106, 115],
			[105, 109, 97, 51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]
		],
		Iz = [
			[98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41,
				40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92,
				46, 104, 116, 109, 108
			],
			[98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41,
				95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125,
				41, 123, 48, 44,
				50, 125, 92, 46, 104, 116, 109, 108
			],
			[98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41,
				123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
			]
		],
		Jz = [
			[111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115],
			[111, 117, 116, 115, 116, 114, 101, 97, 109, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]
		],
		Kz = new Dz(Ez, Hz, !1),
		Lz = new Dz(Ez, Iz, !0),
		Mz = new Dz(Fz, Hz, !1),
		Nz = new Dz(Fz, Iz, !0),
		Oz = new Dz(Gz, Hz, !1),
		Pz = new Dz([104, 116, 116, 112, 115, 63, 58, 47, 47, 40, 112, 97, 103, 101, 97, 100, 50, 124, 116, 112, 99,
			41, 92, 46, 103, 111, 111, 103, 108, 101, 115,
			121, 110, 100, 105, 99, 97, 116, 105, 111, 110, 92, 46, 99, 111, 109, 47, 112, 97, 103, 101, 97,
			100, 47, 40, 103, 97, 100, 103, 101, 116, 115, 124, 106, 115, 41, 47
		], [], !1),
		Qz = new Dz(Ez, [
			[100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57,
				92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41,
				123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
			],
			[100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57,
				92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41,
				123, 50, 44,
				51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
			],
			[100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41,
				123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
			]
		], !0),
		Rz = new Dz(Ez, Jz, !1),
		Sz = new Dz(Gz, Jz, !1),
		Kd = {
			eg: Kz,
			cg: Lz,
			zg: Mz,
			yg: Nz,
			fg: Oz,
			eh: Pz,
			dg: Qz,
			Jg: Rz,
			Kg: Sz
		};

	function Tz(a) {
		for (var b = null, c = 0; c < a.length; c++)
			if (b = a[c], Jd(function(d) {
					return d.match(b.src)
				})) return b;
		return null
	};
	var Uz = function() {
			var a = G(),
				b = document;
			return new Ds(a.parent == a ? a.location.href : b.referrer)
		},
		Vz = function(a, b) {
			Rs(a, "url", "");
			try {
				var c = 2083 - a.toString().length - 1;
				if (0 >= c) return a.toString();
				for (var d = b.slice(0, c), e = encodeURIComponent(d), f = c; 0 < f && e.length > c;) d = b.slice(0,
					f--), e = encodeURIComponent(d);
				Rs(a, "url", d)
			} catch (g) {}
			return a.toString()
		};
	var Wz = function() {
		this.h = .01 > Math.random();
		this.l = Math.floor(4503599627370496 * Math.random())
	};
	Wz.prototype.report = function(a, b, c) {
		b = void 0 === b ? {} : b;
		if (null == v.G_testRunner && (this.h || (void 0 === c ? 0 : c))) {
			b.lid = a;
			b.sdkv = cy();
			a = Qh().sort().join(",");
			ib(ef(a)) || (b.e = a);
			b = Xz(this, b);
			var d = new Ds("http://pagead2.googlesyndication.com/pagead/gen_204");
			Hd(b, function(e, f) {
				Rs(d, f, null == e ? "" : "boolean" == typeof e ? e ? "t" : "f" : "" + e)
			}, this);
			b = Uz();
			Es(d, b.A);
			b = d.toString();
			a = d.o.get("url");
			null != a && wb() && 2083 < b.length && (b = Vz(d, a));
			wy(b)
		}
	};
	var Xz = function(a, b) {
		b.id = "ima_html5";
		var c = Uz();
		b.c = a.l;
		b.domain = c.l;
		return b
	};
	Wz.prototype.isLoggingEnabled = function() {
		return this.h
	};
	var Yz = function() {
		return I(Wz)
	};
	var Zz = function(a, b, c, d, e) {
		e = void 0 === e ? "" : e;
		Vi.call(this, a);
		this.ia = b;
		this.ha = c;
		this.Jb = d;
		this.Gd = e
	};
	t(Zz, Vi);
	Zz.prototype.toString = function() {
		return ""
	};
	var $z = function(a) {
		this.h = a
	};
	k = $z.prototype;
	k.getTotalAds = function() {
		return this.h.totalAds
	};
	k.getMaxDuration = function() {
		return this.h.maxDuration
	};
	k.getAdPosition = function() {
		return this.h.adPosition
	};
	k.getPodIndex = function() {
		return this.h.podIndex
	};
	k.getTimeOffset = function() {
		return this.h.timeOffset
	};
	k.getIsBumper = function() {
		return this.h.isBumper
	};
	$z.prototype.getIsBumper = $z.prototype.getIsBumper;
	$z.prototype.getTimeOffset = $z.prototype.getTimeOffset;
	$z.prototype.getPodIndex = $z.prototype.getPodIndex;
	$z.prototype.getAdPosition = $z.prototype.getAdPosition;
	$z.prototype.getMaxDuration = $z.prototype.getMaxDuration;
	$z.prototype.getTotalAds = $z.prototype.getTotalAds;
	var aA = function(a) {
		this.h = a
	};
	k = aA.prototype;
	k.getContent = function() {
		return this.h.content
	};
	k.getContentType = function() {
		return this.h.contentType
	};
	k.getWidth = function() {
		return this.h.size.width
	};
	k.getHeight = function() {
		return this.h.size.height
	};
	k.wd = function() {
		return this.h.adSlotId
	};
	var ry = function(a) {
		return (a = a.h.backupCompanions) ? a.map(function(b) {
			return new aA(b)
		}) : []
	};
	aA.prototype.getAdSlotId = aA.prototype.wd;
	aA.prototype.getHeight = aA.prototype.getHeight;
	aA.prototype.getWidth = aA.prototype.getWidth;
	aA.prototype.getContentType = aA.prototype.getContentType;
	aA.prototype.getContent = aA.prototype.getContent;
	var bA = function(a, b) {
		this.l = a;
		this.h = b
	};
	bA.prototype.getAdIdValue = function() {
		return this.l
	};
	bA.prototype.getAdIdRegistry = function() {
		return this.h
	};
	bA.prototype.getAdIdRegistry = bA.prototype.getAdIdRegistry;
	bA.prototype.getAdIdValue = bA.prototype.getAdIdValue;
	var Y = function(a) {
		this.h = a
	};
	Y.prototype.getAdId = function() {
		return this.h.adId
	};
	Y.prototype.getCreativeAdId = function() {
		return this.h.creativeAdId
	};
	Y.prototype.getCreativeId = function() {
		return this.h.creativeId
	};
	var cA = function(a) {
		return a.h.adQueryId
	};
	k = Y.prototype;
	k.getAdSystem = function() {
		return this.h.adSystem
	};
	k.getAdvertiserName = function() {
		return this.h.advertiserName
	};
	k.getApiFramework = function() {
		return this.h.apiFramework
	};
	k.getWrapperAdIds = function() {
		return this.h.adWrapperIds
	};
	k.getWrapperCreativeIds = function() {
		return this.h.adWrapperCreativeIds
	};
	k.getWrapperAdSystems = function() {
		return this.h.adWrapperSystems
	};
	k.isLinear = function() {
		return this.h.linear
	};
	k.isSkippable = function() {
		return this.h.skippable
	};
	k.getContentType = function() {
		return this.h.contentType
	};
	k.Ce = function() {
		return this.h.description
	};
	k.Ee = function() {
		return this.h.title
	};
	k.getDuration = function() {
		return this.h.duration
	};
	k.getVastMediaWidth = function() {
		return this.h.vastMediaWidth
	};
	k.getVastMediaHeight = function() {
		return this.h.vastMediaHeight
	};
	k.getWidth = function() {
		return this.h.width
	};
	k.getHeight = function() {
		return this.h.height
	};
	k.getUiElements = function() {
		return this.h.uiElements
	};
	k.getMinSuggestedDuration = function() {
		return this.h.minSuggestedDuration
	};
	k.getAdPodInfo = function() {
		return new $z(this.h.adPodInfo)
	};
	k.getCompanionAds = function(a, b, c) {
		if (!this.h.companions) return [];
		var d = this.h.companions.map(function(e) {
			return new aA(e)
		});
		return qy(new ny(new af(a, b), c), d)
	};
	k.getTraffickingParameters = function() {
		return uu(ef(this.h.traffickingParameters))
	};
	k.getTraffickingParametersString = function() {
		return this.h.traffickingParameters
	};
	k.getVastMediaBitrate = function() {
		return this.h.vastMediaBitrate
	};
	k.getMediaUrl = function() {
		return this.h.mediaUrl
	};
	k.getSurveyUrl = function() {
		return this.h.surveyUrl
	};
	k.getDealId = function() {
		return this.h.dealId
	};
	k.Fe = function() {
		return (this.h.universalAdIds || []).map(function(a) {
			return new bA(a.adIdValue, a.adIdRegistry)
		})
	};
	k.getUniversalAdIdValue = function() {
		return this.h.universalAdIdValue
	};
	k.getUniversalAdIdRegistry = function() {
		return this.h.universalAdIdRegistry
	};
	k.getSkipTimeOffset = function() {
		return this.h.skipTimeOffset
	};
	k.isUiDisabled = function() {
		return this.h.disableUi
	};
	Y.prototype.isUiDisabled = Y.prototype.isUiDisabled;
	Y.prototype.getSkipTimeOffset = Y.prototype.getSkipTimeOffset;
	Y.prototype.getUniversalAdIdRegistry = Y.prototype.getUniversalAdIdRegistry;
	Y.prototype.getUniversalAdIdValue = Y.prototype.getUniversalAdIdValue;
	Y.prototype.getUniversalAdIds = Y.prototype.Fe;
	Y.prototype.getDealId = Y.prototype.getDealId;
	Y.prototype.getSurveyUrl = Y.prototype.getSurveyUrl;
	Y.prototype.getMediaUrl = Y.prototype.getMediaUrl;
	Y.prototype.getVastMediaBitrate = Y.prototype.getVastMediaBitrate;
	Y.prototype.getTraffickingParametersString = Y.prototype.getTraffickingParametersString;
	Y.prototype.getTraffickingParameters = Y.prototype.getTraffickingParameters;
	Y.prototype.getCompanionAds = Y.prototype.getCompanionAds;
	Y.prototype.getAdPodInfo = Y.prototype.getAdPodInfo;
	Y.prototype.getMinSuggestedDuration = Y.prototype.getMinSuggestedDuration;
	Y.prototype.getUiElements = Y.prototype.getUiElements;
	Y.prototype.getHeight = Y.prototype.getHeight;
	Y.prototype.getWidth = Y.prototype.getWidth;
	Y.prototype.getVastMediaHeight = Y.prototype.getVastMediaHeight;
	Y.prototype.getVastMediaWidth = Y.prototype.getVastMediaWidth;
	Y.prototype.getDuration = Y.prototype.getDuration;
	Y.prototype.getTitle = Y.prototype.Ee;
	Y.prototype.getDescription = Y.prototype.Ce;
	Y.prototype.getContentType = Y.prototype.getContentType;
	Y.prototype.isSkippable = Y.prototype.isSkippable;
	Y.prototype.isLinear = Y.prototype.isLinear;
	Y.prototype.getWrapperAdSystems = Y.prototype.getWrapperAdSystems;
	Y.prototype.getWrapperCreativeIds = Y.prototype.getWrapperCreativeIds;
	Y.prototype.getWrapperAdIds = Y.prototype.getWrapperAdIds;
	Y.prototype.getApiFramework = Y.prototype.getApiFramework;
	Y.prototype.getAdvertiserName = Y.prototype.getAdvertiserName;
	Y.prototype.getAdSystem = Y.prototype.getAdSystem;
	Y.prototype.getCreativeId = Y.prototype.getCreativeId;
	Y.prototype.getCreativeAdId = Y.prototype.getCreativeAdId;
	Y.prototype.getAdId = Y.prototype.getAdId;
	var dA = null,
		eA = function() {
			N.call(this);
			this.h = null;
			this.F = new ku(this);
			Ui(this, this.F);
			this.l = new Map;
			this.B = new Map;
			this.o = this.C = !1;
			this.D = null
		},
		fA;
	t(eA, N);
	var gA = function() {
			null == dA && (dA = new eA);
			return dA
		},
		wr = function(a, b, c) {
			var d = {};
			d.queryId = b;
			d.viewabilityData = c;
			a.h && uy(a.h, "activityMonitor", "viewabilityMeasurement", d)
		};
	eA.prototype.destroy = function() {
		this.F.Va(this.h, "activityMonitor", this.H);
		this.o = !1;
		this.l.clear();
		this === fA && (fA = null)
	};
	eA.prototype.O = function() {
		this.destroy();
		N.prototype.O.call(this)
	};
	eA.prototype.init = function(a) {
		if (!this.o) {
			if (this.h = a || null) this.F.T(this.h, "activityMonitor", this.H), hA(this);
			if (!(v.ima && v.ima.video && v.ima.video.client && v.ima.video.client.tagged)) {
				w("ima.video.client.sdkTag", !0, void 0);
				var b = v.document;
				a = uf(document, "SCRIPT");
				var c = de(Fd(Gd("https://s0.2mdn.net/instream/video/client.js")));
				a.src = Ie(c);
				Le(a);
				a.async = !0;
				a.type = "text/javascript";
				b = b.getElementsByTagName("script")[0];
				b.parentNode.insertBefore(a, b)
			}
			Bl();
			I(mr).J = Jx.h;
			this.C = !0;
			I(mr).o = !0;
			this.D = null;
			a = I(mr);
			b = "h" == Mq(a) || "b" == Mq(a);
			c = !(P(), !1);
			b && c && (a.I = !0, a.H = new Po);
			this.o = !0
		}
	};
	var jA = function(a) {
			if (null == a) return !1;
			if ((ec || gc) && null != a.webkitDisplayingFullscreen) return a.webkitDisplayingFullscreen;
			a = iA(a);
			var b = window.screen.availHeight || window.screen.height;
			return 0 >= (window.screen.availWidth || window.screen.width) - a.width && 42 >= b - a.height
		},
		iA = function(a) {
			var b = {
				left: a.offsetLeft,
				top: a.offsetTop,
				width: a.offsetWidth,
				height: a.offsetHeight
			};
			try {
				"function" === typeof a.getBoundingClientRect && zf(mf(a), a) && (b = a.getBoundingClientRect())
			} catch (c) {}
			return b
		},
		kA = function(a, b, c, d, e) {
			e =
				void 0 === e ? {} : e;
			if (a.o) {
				d && null == e.opt_osdId && (e.opt_osdId = d);
				if (a.D) return a.D(b, c, e);
				if (a = d ? a.B.get(d) : Jx.o) null == e.opt_fullscreen && (e.opt_fullscreen = jA(a)), null == e
					.opt_adElement && (e.opt_adElement = a);
				return bl.ab(469, Xa(zr, b, c, e), void 0) || {}
			}
			return {}
		},
		lA = function(a, b) {
			var c = String(Math.floor(1E9 * Math.random()));
			a.B.set(c, b);
			if (Ki.isSelected()) try {
				uk(function(d) {
					if (a.h) {
						var e = {};
						e.engagementString = d;
						uy(a.h, "activityMonitor", "engagementData", e)
					}
				}, function() {
					return b
				})
			} catch (d) {}
			0 != Jx.h && xr(I(mr),
				c, a);
			return c
		},
		mA = function(a, b, c) {
			if (c) a.l.get(c) == b && a.l.delete(c);
			else {
				var d = [];
				a.l.forEach(function(e, f) {
					e == b && d.push(f)
				});
				d.forEach(a.l.delete, a.l)
			}
		},
		sr = function(a, b) {
			a = a.l.get(b);
			return "function" === typeof a ? a() : {}
		},
		hA = function(a) {
			if ("function" === typeof window.Goog_AdSense_Lidar_getUrlSignalsArray) {
				var b = {};
				b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
				uy(a.h, "activityMonitor", "pageSignals", b)
			}
		};
	eA.prototype.H = function(a) {
		var b = a.ha,
			c = b.queryId,
			d = {},
			e = null;
		d.eventId = b.eventId;
		switch (a.ia) {
			case "getPageSignals":
				hA(this);
				break;
			case "reportVastEvent":
				e = b.vastEvent;
				a = b.osdId;
				var f = {};
				f.opt_fullscreen = b.isFullscreen;
				b.isOverlay && (f.opt_bounds = b.overlayBounds);
				d.viewabilityData = kA(this, e, c, a, f);
				uy(this.h, "activityMonitor", "viewability", d);
				break;
			case "fetchAdTagUrl":
				c = {}, c.eventId = b.eventId, a = b.osdId, Qd(b, "isFullscreen") && (e = b.isFullscreen), Qd(b,
					"loggingId") && (b = b.loggingId, c.loggingId = b, Yz().report(43, {
					step: "beforeLookup",
					logid: b,
					time: Date.now()
				})), c.engagementString = nA(this, a, e), this.h && uy(this.h, "activityMonitor",
					"engagement", c)
		}
	};
	var nA = function(a, b, c) {
		var d = b ? a.B.get(b) : Jx.o;
		a = {};
		null != c && (a.fullscreen = c);
		c = "";
		try {
			c = tk(function() {
				return d
			}, a)
		} catch (e) {
			c = "sdktle;" + cf(e.name, 12) + ";" + cf(e.message, 40)
		}
		return c
	};
	w("ima.common.getVideoMetadata", function(a) {
		return sr(gA(), a)
	}, void 0);
	w("ima.common.triggerViewabilityMeasurementUpdate", function(a, b) {
		wr(gA(), a, b)
	}, void 0);
	var oA = Zb ? de(Fd(Gd('javascript:""'))) : de(Fd(Gd("about:blank")));
	ce(oA);
	var pA = Zb ? de(Fd(Gd('javascript:""'))) : de(Fd(Gd("javascript:undefined")));
	ce(pA);
	var qA = function(a, b, c) {
		b = void 0 === b ? null : b;
		c = void 0 === c ? null : c;
		Vi.call(this, a);
		this.o = b;
		this.h = c
	};
	t(qA, Vi);
	qA.prototype.getAd = function() {
		return this.o
	};
	qA.prototype.getAdData = function() {
		return this.h
	};
	var rA = function() {
			this.loadVideoTimeout = 8E3;
			this.autoAlign = !0;
			this.bitrate = -1;
			this.uiElements = null;
			this.enablePreloading = this.disableClickThrough = !1;
			this.mimeTypes = null;
			this.useStyledNonLinearAds = this.useStyledLinearAds = this.useLearnMoreButton = this
				.restoreCustomPlaybackStateOnAdBreakComplete = !1;
			this.playAdsAfterTime = -1;
			this.useVideoAdUi = !0;
			this.disableUi = !1
		},
		sA = function(a, b) {
			var c = {};
			Object.assign(c, a);
			b && (c.disableClickThrough = !0);
			return c
		};
	rA.prototype.append = function(a) {
		if (a) {
			this.autoAlign = a.autoAlign || this.autoAlign;
			var b = kf(a.bitrate);
			"number" === typeof b && !isNaN(b) && 0 < b && (this.bitrate = b);
			this.disableClickThrough = a.disableClickThrough || this.disableClickThrough;
			this.disableUi = a.disableUi || this.disableUi;
			this.enablePreloading = a.enablePreloading || this.enablePreloading;
			a.mimeTypes && 0 != a.mimeTypes.length && (this.mimeTypes = a.mimeTypes);
			b = kf(a.playAdsAfterTime);
			"number" === typeof b && !isNaN(b) && 0 < b && (this.playAdsAfterTime = b);
			this.restoreCustomPlaybackStateOnAdBreakComplete =
				a.restoreCustomPlaybackStateOnAdBreakComplete || this
				.restoreCustomPlaybackStateOnAdBreakComplete;
			b = kf(a.loadVideoTimeout);
			"number" === typeof b && !isNaN(b) && 0 < b && (this.loadVideoTimeout = b);
			this.uiElements = a.uiElements || this.uiElements;
			this.useLearnMoreButton = a.useLearnMoreButton || this.useLearnMoreButton;
			this.useStyledLinearAds = a.useStyledLinearAds || this.useStyledLinearAds;
			this.useStyledNonLinearAds = a.useStyledNonLinearAds || this.useStyledNonLinearAds;
			this.useVideoAdUi = !1 === a.useVideoAdUi ? !1 : this.useVideoAdUi
		}
	};
	w("module$contents$ima$AdsRenderingSettings_AdsRenderingSettings.AUTO_SCALE", -1, void 0);
	var tA = function(a, b) {
		this.h = a[v.Symbol.iterator]();
		this.l = b;
		this.o = 0
	};
	tA.prototype[Symbol.iterator] = function() {
		return this
	};
	tA.prototype.next = function() {
		var a = this.h.next();
		return {
			value: a.done ? void 0 : this.l.call(void 0, a.value, this.o++),
			done: a.done
		}
	};
	var uA = function(a, b) {
		return new tA(a, b)
	};
	var zA = function(a) {
			if (a instanceof vA || a instanceof wA || a instanceof xA) return a;
			if ("function" == typeof a.bc) return new vA(function() {
				return yA(a)
			});
			if ("function" == typeof a[Symbol.iterator]) return new vA(function() {
				return a[Symbol.iterator]()
			});
			if ("function" == typeof a.gb) return new vA(function() {
				return yA(a.gb())
			});
			throw Error("Not an iterator or iterable.");
		},
		yA = function(a) {
			if (!(a instanceof $n)) return a;
			var b = !1;
			return {
				next: function() {
					for (var c; !b;) try {
						c = a.bc();
						break
					} catch (d) {
						if (d !== Zn) throw d;
						b = !0
					}
					return {
						value: c,
						done: b
					}
				}
			}
		},
		vA = function(a) {
			this.h = a
		};
	vA.prototype.gb = function() {
		return new wA(this.h())
	};
	vA.prototype[Symbol.iterator] = function() {
		return new xA(this.h())
	};
	vA.prototype.l = function() {
		return new xA(this.h())
	};
	var wA = function(a) {
		this.h = a
	};
	t(wA, $n);
	wA.prototype.bc = function() {
		var a = this.h.next();
		if (a.done) throw Zn;
		return a.value
	};
	wA.prototype.next = function() {
		return this.h.next()
	};
	wA.prototype[Symbol.iterator] = function() {
		return new xA(this.h)
	};
	wA.prototype.l = function() {
		return new xA(this.h)
	};
	var xA = function(a) {
		vA.call(this, function() {
			return a
		});
		this.o = a
	};
	t(xA, vA);
	xA.prototype.next = function() {
		return this.o.next()
	};
	var AA = function(a, b) {
		this.l = {};
		this.h = [];
		this.o = this.size = 0;
		var c = arguments.length;
		if (1 < c) {
			if (c % 2) throw Error("Uneven number of arguments");
			for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
		} else if (a)
			if (a instanceof AA)
				for (c = a.Qb(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
			else
				for (d in a) this.set(d, a[d])
	};
	k = AA.prototype;
	k.nb = function() {
		BA(this);
		for (var a = [], b = 0; b < this.h.length; b++) a.push(this.l[this.h[b]]);
		return a
	};
	k.Qb = function() {
		BA(this);
		return this.h.concat()
	};
	k.has = function(a) {
		return CA(this.l, a)
	};
	k.isEmpty = function() {
		return 0 == this.size
	};
	k.clear = function() {
		this.l = {};
		this.o = this.size = this.h.length = 0
	};
	k.remove = function(a) {
		return this.delete(a)
	};
	k.delete = function(a) {
		return CA(this.l, a) ? (delete this.l[a], --this.size, this.o++, this.h.length > 2 * this.size && BA(
			this), !0) : !1
	};
	var BA = function(a) {
		if (a.size != a.h.length) {
			for (var b = 0, c = 0; b < a.h.length;) {
				var d = a.h[b];
				CA(a.l, d) && (a.h[c++] = d);
				b++
			}
			a.h.length = c
		}
		if (a.size != a.h.length) {
			var e = {};
			for (c = b = 0; b < a.h.length;) d = a.h[b], CA(e, d) || (a.h[c++] = d, e[d] = 1), b++;
			a.h.length = c
		}
	};
	k = AA.prototype;
	k.get = function(a, b) {
		return CA(this.l, a) ? this.l[a] : b
	};
	k.set = function(a, b) {
		CA(this.l, a) || (this.size += 1, this.h.push(a), this.o++);
		this.l[a] = b
	};
	k.forEach = function(a, b) {
		for (var c = this.Qb(), d = 0; d < c.length; d++) {
			var e = c[d],
				f = this.get(e);
			a.call(b, f, e, this)
		}
	};
	k.keys = function() {
		return zA(this.gb(!0)).l()
	};
	k.values = function() {
		return zA(this.gb(!1)).l()
	};
	k.entries = function() {
		var a = this;
		return uA(this.keys(), function(b) {
			return [b, a.get(b)]
		})
	};
	k.gb = function(a) {
		BA(this);
		var b = 0,
			c = this.o,
			d = this,
			e = new $n;
		e.next = function() {
			if (c != d.o) throw Error("The map has changed since the iterator was created");
			if (b >= d.h.length) return ao;
			var g = d.h[b++];
			return {
				value: a ? g : d.l[g],
				done: !1
			}
		};
		var f = e.next;
		e.bc = function() {
			var g = f.call(e);
			if (g.done) throw Zn;
			return g.value
		};
		return e
	};
	var CA = function(a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	};
	var DA = null,
		EA = function() {
			N.call(this);
			this.h = new AA;
			this.l = null;
			this.B = new Map;
			this.o = new ku(this);
			Ui(this, this.o);
			this.C = new Map;
			this.H = null;
			this.F = -1;
			P().o = !0;
			hy()
		};
	t(EA, N);
	var FA = function() {
			null == DA && (DA = new EA);
			return DA
		},
		GA = function(a, b) {
			var c = {};
			c.queryId = a;
			c.viewabilityString = b;
			FA().dispatchEvent(new qA("measurable_impression", null, c))
		},
		HA = function(a, b) {
			var c = {};
			c.queryId = a;
			c.viewabilityString = b;
			FA().dispatchEvent(new qA("viewable_impression", null, c))
		},
		IA = function(a, b, c) {
			var d = {};
			d.queryId = a;
			d.viewabilityString = b;
			d.eventName = c;
			FA().dispatchEvent(new qA("externalActivityEvent", null, d))
		};
	EA.prototype.destroy = function() {
		this.o.Va(this.l, "activityMonitor", this.D);
		this.l = null
	};
	EA.prototype.D = function(a) {
		var b = a.ha;
		switch (a.ia) {
			case "appStateChanged":
				I(mr);
				b = b.appState;
				a = Q();
				a.I != b && (a.I = b, (a = I(ep).h) && bn(a.h, !b));
				break;
			case "externalActivityEvent":
				IA(b.queryId, b.viewabilityString, b.eventName);
				break;
			case "measurableImpression":
				GA(b.queryId, b.viewabilityString);
				break;
			case "viewableImpression":
				HA(b.queryId, b.viewabilityString);
				break;
			case "engagementData":
				b = b.engagementString;
				FA().H = b;
				FA().F = Ya();
				break;
			case "viewability":
				a = b.queryId;
				var c = b.vastEvent;
				this.B.get(a) && "start" ==
					c && this.B.get(a);
				a = b.eventId;
				clearTimeout(a);
				if (c = this.h.get(a)) this.h.delete(a), c(b.viewabilityData);
				break;
			case "viewabilityMeasurement":
				I(mr);
				P();
				break;
			case "engagement":
				a = b.eventId;
				clearTimeout(a);
				c = this.h.get(a);
				if (Yz().isLoggingEnabled()) {
					var d = -1;
					this.J && (d = Ya() - this.J);
					var e = !1;
					c || (e = !0);
					Qd(b, "loggingId") && Yz().report(43, {
						step: "receivedResponse",
						time: Ya(),
						timeout: e,
						logid: b.loggingId,
						timediff: d
					})
				}
				c && (this.h.delete(a), c(b.engagementString))
		}
	};
	w("ima.bridge.getNativeViewability", function(a, b) {
		FA();
		b({})
	}, void 0);
	w("ima.bridge.getVideoMetadata", function(a) {
		return (a = FA().C.get(a)) ? a() : {}
	}, void 0);
	w("ima.bridge.triggerViewEvent", HA, void 0);
	w("ima.bridge.triggerMeasurableEvent", GA, void 0);
	w("ima.bridge.triggerExternalActivityEvent", IA, void 0);
	Object.entries({
		"application/dash+xml": 1,
		"application/x-javascript": 2,
		"application/x-mpegurl": 3,
		"application/javascript": 4,
		"audio/ogg": 5,
		"audio/mp4": 6,
		"audio/mpeg": 7,
		"audio/wav": 8,
		"text/javascript": 9,
		"video/m4v": 10,
		"video/ogg": 11,
		"video/x-flv": 12,
		"video/3gpp": 13,
		"video/mpt2": 14,
		"video/mp4": 15,
		"video/mpeg": 16,
		"video/quicktime": 17,
		"video/webm": 18
	});

	function JA(a, b) {
		return b instanceof RegExp ? "__REGEXP" + b.toString() : b
	}

	function KA(a, b) {
		return b && 0 == b.toString().indexOf("__REGEXP") ? (a = b.split("__REGEXP")[1].match(/\/(.*)\/(.*)?/),
			new RegExp(a[1], a[2] || "")) : b
	}
	var LA = function(a, b) {
		ty.call(this, b);
		this.B = a;
		this.h = null;
		this.C = new ku(this);
		this.C.T(G(), "message", this.D)
	};
	t(LA, ty);
	var MA = function(a) {
		if (null == a || "string" !== typeof a || 0 != a.lastIndexOf("ima://", 0)) return null;
		a = a.substr(6);
		try {
			return JSON.parse(a, KA)
		} catch (b) {
			return null
		}
	};
	LA.prototype.sendMessage = function(a, b, c) {
		if (null != this.h && null != this.h.postMessage) {
			var d = this.h,
				e = d.postMessage,
				f = {};
			f.name = a;
			f.type = b;
			null != c && (f.data = c);
			f.sid = this.sessionId;
			f.channel = this.B;
			a = "ima://" + Dh(new Bh(JA), f);
			e.call(d, a, "*")
		}
		null != this.h && null == this.h.postMessage && Yz().report(11)
	};
	LA.prototype.O = function() {
		Si(this.C);
		this.h = null;
		ty.prototype.O.call(this)
	};
	LA.prototype.D = function(a) {
		a = a.h;
		var b = MA(a.data);
		if (NA(this, b)) {
			if (null == this.h) this.h = a.source, this.l || this.connect();
			else if (this.h != a.source) return;
			NA(this, b) && this.dispatchEvent(new Zz(b.name, b.type, b.data || {}, b.sid, a.origin))
		}
	};
	var NA = function(a, b) {
		if (null == b) return !1;
		var c = b.channel;
		if (null == c || c != a.B) return !1;
		b = b.sid;
		return null == b || "*" != a.sessionId && b != a.sessionId ? !1 : !0
	};
	var OA = {
		LOADED: "loaded",
		qc: "start",
		FIRST_QUARTILE: "firstQuartile",
		MIDPOINT: "midpoint",
		THIRD_QUARTILE: "thirdQuartile",
		COMPLETE: "complete",
		lc: "pause",
		hd: "resume",
		$c: "bufferStart",
		Zc: "bufferFinish",
		SKIPPED: "skipped",
		pe: "volumeChange",
		Ng: "playerStateChange",
		zf: "adUserInteraction"
	};
	Object.values({
		LIMITED: "limited",
		DOMAIN: "domain",
		FULL: "full"
	});
	var PA = de(Fd(Gd("https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js")));

	function QA(a, b) {
		if (!b) throw Error("Value for " + a + " is undefined, null or blank.");
		if ("string" !== typeof b && !(b instanceof String)) throw Error("Value for " + a + " is not a string.");
		if ("" === b.trim()) throw Error("Value for " + a + " is empty string.");
	}

	function RA(a, b) {
		if (null == b) throw Error("Value for " + a + " is undefined or null");
	}

	function SA(a, b) {
		if (null == b) throw Error(a + " must not be null or undefined.");
		if ("number" !== typeof b || isNaN(b)) throw Error("Value for " + a + " is not a number");
	};

	function TA(a, b) {
		return a && (a[b] || (a[b] = {}))
	}

	function UA(a, b) {
		var c;
		if (c = void 0 === c ? "undefined" === typeof omidExports ? null : omidExports : c) a = a.split("."), a
			.slice(0, a.length - 1).reduce(TA, c)[a[a.length - 1]] = b
	};

	function VA() {
		return /\d+\.\d+\.\d+(-.*)?/.test("1.3.26-google_20211025")
	}

	function WA() {
		for (var a = ["1", "3", "26"], b = ["1", "0", "3"], c = 0; 3 > c; c++) {
			var d = parseInt(a[c], 10),
				e = parseInt(b[c], 10);
			if (d > e) break;
			else if (d < e) return !1
		}
		return !0
	};
	var XA = function(a, b, c, d) {
			this.h = a;
			this.method = b;
			this.version = c;
			this.args = d
		},
		YA = function(a) {
			return !!a && void 0 !== a.omid_message_guid && void 0 !== a.omid_message_method && void 0 !== a
				.omid_message_version && "string" === typeof a.omid_message_guid && "string" === typeof a
				.omid_message_method && "string" === typeof a.omid_message_version && (void 0 === a
					.omid_message_args || void 0 !== a.omid_message_args)
		},
		ZA = function(a) {
			return new XA(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args)
		},
		$A = function(a) {
			var b = {};
			b = (b.omid_message_guid = a.h, b.omid_message_method = a.method, b.omid_message_version = a.version,
			b);
			void 0 !== a.args && (b.omid_message_args = a.args);
			return b
		};
	var aB = function(a) {
		this.l = a
	};

	function bB() {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
			var b = 16 * Math.random() | 0;
			return "y" === a ? (b & 3 | 8).toString(16) : b.toString(16)
		})
	};

	function cB() {
		var a = Ga.apply(0, arguments);
		dB(function() {
			throw new(Function.prototype.bind.apply(Error, [null,
				"Could not complete the test successfully - "
			].concat(ha(a))));
		}, function() {
			return console.error.apply(console, ha(a))
		})
	}

	function dB(a, b) {
		"undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console
			.error && b()
	};
	var eB = function(a) {
		try {
			return a.frames ? !!a.frames.omid_v1_present : !1
		} catch (b) {
			return !1
		}
	};
	var fB = function(a) {
		this.l = a;
		this.handleExportedMessage = fB.prototype.o.bind(this)
	};
	t(fB, aB);
	fB.prototype.sendMessage = function(a, b) {
		b = void 0 === b ? this.l : b;
		if (!b) throw Error(
			"Message destination must be defined at construction time or when sending the message.");
		b.handleExportedMessage($A(a), this)
	};
	fB.prototype.o = function(a, b) {
		YA(a) && this.h && this.h(ZA(a), b)
	};
	var gB = function() {
		if ("undefined" !== typeof omidGlobal && omidGlobal) return omidGlobal;
		if ("undefined" !== typeof global && global) return global;
		if ("undefined" !== typeof window && window) return window;
		if ("undefined" !== typeof globalThis && globalThis) return globalThis;
		var a = Function("return this")();
		if (a) return a;
		throw Error("Could not determine global object context.");
	}();

	function hB(a) {
		return null != a && "undefined" !== typeof a.top && null != a.top
	}

	function iB(a) {
		if (a === gB) return !1;
		try {
			if ("undefined" === typeof a.location.hostname) return !0
		} catch (b) {
			return !0
		}
		return !1
	};
	var jB = function(a, b) {
		this.l = b = void 0 === b ? gB : b;
		var c = this;
		a.addEventListener("message", function(d) {
			if ("object" === typeof d.data) {
				var e = d.data;
				YA(e) && d.source && c.h && c.h(ZA(e), d.source)
			}
		})
	};
	t(jB, aB);
	jB.prototype.sendMessage = function(a, b) {
		b = void 0 === b ? this.l : b;
		if (!b) throw Error(
			"Message destination must be defined at construction time or when sending the message.");
		b.postMessage($A(a), "*")
	};
	var kB = ["omid", "v1_SessionServiceCommunication"];

	function lB(a) {
		return kB.reduce(function(b, c) {
			return b && b[c]
		}, a)
	};
	UA("OmidSessionClient.Partner", function(a, b) {
		QA("Partner.name", a);
		QA("Partner.version", b);
		this.name = a;
		this.version = b
	});
	var mB = function(a, b, c, d) {
		d = void 0 === d ? "full" : d;
		QA("VerificationScriptResource.resourceUrl", a);
		this.o = a;
		this.A = b;
		this.l = c;
		this.h = d
	};
	mB.prototype.toJSON = function() {
		return {
			accessMode: this.h,
			resourceUrl: this.o,
			vendorKey: this.A,
			verificationParameters: this.l
		}
	};
	UA("OmidSessionClient.VerificationScriptResource", mB);
	UA("OmidSessionClient.Context", function(a, b, c, d) {
		c = void 0 === c ? null : c;
		d = void 0 === d ? null : d;
		RA("Context.partner", a);
		this.partner = a;
		this.A = b;
		this.l = c;
		this.h = d;
		this.o = !1
	});
	var nB = {
			sessionError: "reportError"
		},
		oB = Object.keys(OA).map(function(a) {
			return OA[a]
		}),
		pB = ["impressionOccurred"],
		qB = function() {
			var a = void 0 === a ? gB : a;
			this.h = a.omidSessionInterface
		};
	qB.prototype.isSupported = function() {
		return null != this.h
	};
	qB.prototype.sendMessage = function(a, b, c) {
		"registerSessionObserver" == a && (c = [b]);
		nB[a] && (a = nB[a]);
		b = this.h;
		0 <= pB.indexOf(a) && (b = b.adEvents);
		0 <= oB.indexOf(a) && (b = b.mediaEvents);
		b = b[a];
		if (!b) throw Error("Unrecognized method name: " + a + ".");
		b.apply(null, ha(c))
	};
	var tB = function(a, b, c) {
		RA("AdSession.context", a);
		this.l = a;
		if (!b) {
			var d;
			"undefined" === typeof d && "undefined" !== typeof window && window && (d = window);
			d = hB(d) ? d : gB;
			var e = void 0 === e ? eB : e;
			a: {
				b = r([d, hB(d) ? d.top : gB]);
				for (var f = b.next(); !f.done; f = b.next()) {
					b: {
						var g = d;f = f.value;
						var h = e;
						if (!iB(f)) try {
							var l = lB(f);
							if (l) {
								var n = new fB(l);
								break b
							}
						} catch (m) {}
						n = h(f) ? new jB(g, f) : null
					}
					if (g = n) {
						b = g;
						break a
					}
				}
				b = null
			}
		}
		this.h = b;
		this.o = c || new qB;
		this.L = this.D = this.C = !1;
		this.I = this.B = null;
		this.A = {};
		this.h && (this.h.h = this.Ge.bind(this));
		this.va("setClientInfo", "1.3.26-google_20211025", this.l.partner.name, this.l.partner.version);
		rB(this, a.A);
		(a = a.l) && this.va("setContentUrl", a);
		sB(this)
	};
	tB.prototype.isSupported = function() {
		return !!this.h || this.o.isSupported()
	};
	var uB = function(a, b) {
		a.sendMessage("registerSessionObserver", b)
	};
	k = tB.prototype;
	k.start = function() {
		this.va("startSession", {
			customReferenceData: this.l.h,
			underEvaluation: this.l.o
		})
	};
	k.error = function(a, b) {
		this.va("sessionError", a, b)
	};
	k.va = function(a) {
		this.sendMessage.apply(this, [a, null].concat(ha(Ga.apply(1, arguments))))
	};
	k.sendMessage = function(a, b) {
		var c = Ga.apply(2, arguments);
		if (this.h) {
			var d = a,
				e = b,
				f = bB();
			e && (this.A[f] = e);
			c = new XA(f, "SessionService." + d, "1.3.26-google_20211025", VA() && WA() ? c : JSON.stringify(
			c));
			this.h.sendMessage(c)
		} else if (this.o.isSupported()) try {
			this.o.sendMessage(a, b, c)
		} catch (g) {
			cB("Failed to communicate with SessionInterface with error:"), cB(g)
		}
	};
	k.Ge = function(a) {
		var b = a.method,
			c = a.h;
		a = a.args;
		if ("response" === b && this.A[c]) {
			var d = VA() && WA() ? a ? a : [] : a && "string" === typeof a ? JSON.parse(a) : [];
			this.A[c].apply(this, d)
		}
		"error" === b && window.console && cB(a)
	};
	var rB = function(a, b) {
			b && (b = b.map(function(c) {
				return c.toJSON()
			}), a.va("injectVerificationScriptResources", b))
		},
		sB = function(a) {
			uB(a, function(b) {
				"sessionStart" === b.type && (a.L = !0, a.B = b.data.creativeType, a.I = b.data
					.impressionType);
				"sessionFinish" === b.type && (a.L = !1)
			})
		};
	UA("OmidSessionClient.AdSession", tB);
	var vB = function(a) {
		RA("AdEvents.adSession", a);
		try {
			if (a.C) throw Error("AdEvents already registered.");
			a.C = !0;
			a.va("registerAdEvents");
			this.h = a
		} catch (b) {
			throw Error("AdSession already has an ad events instance registered");
		}
	};
	vB.prototype.loaded = function(a) {
		a = void 0 === a ? null : a;
		var b = this.h;
		if ("definedByJavaScript" === b.B) throw Error("Creative type has not been redefined");
		if ("definedByJavaScript" === b.I) throw Error("Impression type has not been redefined");
		a ? this.h.va("loaded", a.toJSON()) : this.h.va("loaded")
	};
	UA("OmidSessionClient.AdEvents", vB);
	var wB = function(a) {
		RA("MediaEvents.adSession", a);
		try {
			if (a.D) throw Error("MediaEvents already registered.");
			a.D = !0;
			a.va("registerMediaEvents");
			this.h = a
		} catch (b) {
			throw Error("AdSession already has a media events instance registered");
		}
	};
	wB.prototype.start = function(a, b) {
		SA("MediaEvents.start.duration", a);
		SA("MediaEvents.start.mediaPlayerVolume", b);
		if (0 > b || 1 < b) throw Error(
			"Value for MediaEvents.start.mediaPlayerVolume is outside the range [0,1]");
		this.h.va("start", a, b)
	};
	wB.prototype.pause = function() {
		this.h.va("pause")
	};
	wB.prototype.resume = function() {
		this.h.va("resume")
	};
	UA("OmidSessionClient.MediaEvents", wB);
	var zB = function(a, b) {
			xB ? a.srcdoc = b : (a = a.contentWindow) && yB(a.document, b)
		},
		xB = bc && "srcdoc" in uf(document, "IFRAME"),
		yB = function(a, b) {
			a.open("text/html", "replace");
			b = hu(b);
			a.write(qe(b));
			a.close()
		};

	function AB(a) {
		return (a = Af(a)) && a.omidSessionInterface ? a.omidSessionInterface : null
	}

	function BB(a, b) {
		var c = wf("IFRAME", {
			sandbox: "allow-scripts allow-same-origin",
			style: "display: none"
		});
		a.appendChild(c);
		a = "<script src=" + PA.Ga() + ">\x3c/script>";
		b && (a +=
			"\n      <script>\n        window.addEventListener('message', function(e) {\n          if (e.data.type === 'innerBridgeIframeLoaded') {\n            window.frameElement.parentElement\n              .querySelector('#" +
			b +
			"').contentWindow\n              .postMessage({type: 'omidIframeLoaded'}, '*');\n          }\n        });\n      \x3c/script>\n    "
			);
		b =
			new Promise(function(d, e) {
				c.addEventListener("load", function() {
					AB(c) ? d(c) : e()
				})
			});
		zB(c, a);
		return b
	};
	var CB = function(a, b) {
		N.call(this);
		this.l = AB(a);
		this.h = b
	};
	t(CB, N);
	var EB = function(a) {
			try {
				a.l.registerSessionObserver(function(b) {
					"sessionStart" == b.type ? DB(a, a.h) : "sessionFinish" == b.type && EB(a)
				})
			} catch (b) {
				a.dispatchEvent(new Event("error"))
			}
		},
		DB = function(a, b) {
			b instanceof ax && (b = b.P);
			try {
				a.l.setVideoElement(b)
			} catch (c) {
				a.dispatchEvent(new Event("error"))
			}
		};
	var FB = function(a) {
		this.h = a
	};
	FB.prototype.getCuePoints = function() {
		return this.h
	};
	FB.prototype.getCuePoints = FB.prototype.getCuePoints;
	w("module$contents$ima$AdCuePoints_AdCuePoints.PREROLL", 0, void 0);
	w("module$contents$ima$AdCuePoints_AdCuePoints.POSTROLL", -1, void 0);
	var GB = function(a) {
			this.h = a;
			this.o = "";
			this.l = -1;
			this.A = !1
		},
		IB = function(a, b) {
			if (0 <= a.l) {
				var c = null == b ? function() {} : b,
					d = function() {
						HB(a, c);
						a.h.removeEventListener("loadedmetadata", d, !1)
					};
				a.h.addEventListener("loadedmetadata", d, !1);
				a.h.src = a.o;
				a.h.load()
			} else null != b && b()
		},
		HB = function(a, b) {
			var c = 0 < a.h.seekable.length;
			a.A ? c ? (a.h.currentTime = a.l, JB(a), b()) : setTimeout(function() {
				return HB(a, b)
			}, 100) : (JB(a), b())
		},
		JB = function(a) {
			a.l = -1;
			a.o = "";
			a.A = !1
		};
	var KB = new af(5, 5),
		LB = function(a) {
			N.call(this);
			this.h = a;
			this.Z = null;
			this.C = new GB(a);
			this.l = new ku(this);
			Ui(this, this.l);
			this.B = 0;
			this.K = this.F = this.N = this.X = this.J = !1;
			this.M = this.o = null;
			this.U = new af(this.h.offsetWidth, this.h.offsetHeight);
			this.Ma = null;
			this.V = jA(this.h);
			this.W = !1
		};
	t(LB, N);
	k = LB.prototype;
	k.fd = function() {
		var a = this.C;
		a.o = a.h.currentSrc;
		a.A = 0 < a.h.seekable.length;
		a.l = a.h.ended ? -1 : a.h.currentTime
	};
	k.Kb = function(a) {
		IB(this.C, a)
	};
	k.load = function(a, b) {
		var c = K().h;
		c.U = !0;
		jh(c);
		yh("hvd_lc");
		MB(this);
		this.N = !1;
		if (b)
			if (yh("hvd_ad"), b instanceof mt) {
				if (yh("hvd_mad"), c = b.getMediaUrl()) {
					yh("hvd_admu");
					yh("hvd_src");
					this.h.src = c;
					this.h.load();
					return
				}
			} else if (b instanceof lt) {
			yh("hvd_dad");
			c = b.A;
			var d = b.l,
				e = b.o,
				f = b.h,
				g = b.Wa,
				h = b.Oa;
			if (c && d && e && f && g && h && (yh("hvd_addu"), b.xa)) {
				yh("hvd_admse");
				b = e + '; codecs="' + g + '"';
				f = f + '; codecs="' + h + '"';
				if (jw() && jw() && MediaSource.isTypeSupported(b) && jw() && MediaSource.isTypeSupported(f)) {
					yh("hvd_ymse");
					yh("hvd_mse");
					a = !1;
					try {
						-1 != window.location.search.indexOf("goog_limavideo=true") && (a = !0)
					} catch (l) {}
					v.customElements ? a ? a = !0 : (Li.isSelected() && Yz().report(153, {
								limvid: "vd"
							}), a = Li.isSelected() || Fi.isSelected() || Ji.isSelected() || Ii.isSelected() ||
							Gi.isSelected() || Hi.isSelected() || Di.isSelected() || Ei.isSelected() ? !0 : !1
							) : a = !1;
					a && this.h instanceof ax ? (a = this.h, a.kb = c, a.yb = d) : (this.Z = new yx(this.h, [
							new mw(c, b, 35E4, new Uu), new mw(d, f, 82E3, new Uu)
						]), Ui(this, this.Z), c = this.h, d = this.Z, d.h || (d.h = window.URL
							.createObjectURL(d.ba)),
						d = d.h, c.src = d);
					this.h.load();
					return
				}
				yh("hvd_nmse")
			}
		} else yh("hvd_uad");
		a ? (yh("hvd_src"), this.h.src = a) : yh("hvd_vn");
		this.h.load()
	};
	k.unload = function() {
		MB(this);
		this.N = !1;
		"removeAttribute" in this.h ? this.h.removeAttribute("src") : this.h.src = "";
		this.h.load()
	};
	k.setVolume = function(a) {
		this.h.volume = Math.max(a, 0);
		this.h.muted = 0 == a ? !0 : !1
	};
	k.getVolume = function() {
		return this.isMuted() ? 0 : this.h.volume
	};
	var NB = function(a) {
		a.W = !1;
		a.N || wb() ? (a.K = !1, a.o = a.h.play(), null != a.o && (a.M = null, a.o.then(function() {
			a.o = null;
			a.Fd(a.M);
			a.M = null
		}).catch(function(b) {
			a.o = null;
			var c = "";
			null != b && null != b.name && (c = b.name);
			"AbortError" == c || "NotAllowedError" == c ? a.dispatchEvent(
				"autoplayDisallowed") : a.$()
		}))) : a.K = !0
	};
	k = LB.prototype;
	k.pause = function() {
		null == this.o && (this.W = !0, this.h.pause())
	};
	k.isMuted = function() {
		return this.h.muted
	};
	k.getCurrentTime = function() {
		return this.h.currentTime
	};
	k.getDuration = function() {
		return isNaN(this.h.duration) ? -1 : this.h.duration
	};
	k.O = function() {
		if (this.Ma) {
			var a = Ku.get(this.Ma);
			Nu(a)
		}
		OB(this);
		N.prototype.O.call(this)
	};
	var OB = function(a) {
			null != a.D && (zz(a.D), a.D = null);
			null != a.R && a.R.dispose();
			ou(a.l);
			MB(a)
		},
		MB = function(a) {
			a.X = !1;
			a.F = !1;
			a.J = !1;
			a.K = !1;
			a.B = 0;
			a.o = null;
			a.M = null;
			Si(a.H)
		};
	LB.prototype.ib = function(a) {
		this.dispatchEvent(a.type)
	};
	var QB = function(a) {
		if (!a.F) {
			a.F = !0;
			a.dispatchEvent("start");
			try {
				if (Li.isSelected() && v.customElements) {
					var b = v.customElements.get("lima-video");
					a.h instanceof b ? Yz().report(153, {
						limvid: "limastart"
					}) : Yz().report(153, {
						limvid: "videostart"
					})
				}
			} catch (c) {
				Yz().report(153, {
					limvid: "startfail"
				})
			}
			b = "function" === typeof a.h.getAttribute && null != a.h.getAttribute("playsinline");
			b = void 0 === b ? !1 : b;
			(fc || cu() || du(10)) && (b || (I(by), 1)) || (I(by), sb(vb(), "Xbox")) || (ec || gc ? 0 : (!dc ||
				dc && bu(au, 4)) && (Qm() ? (I(by), !1) : !ey())) || !dc ||
				dc && bu(au, 3) || (ec || gc) && !du(4) || PB(a)
		}
	};
	k = LB.prototype;
	k.Ze = function() {
		this.N = !0;
		this.K && NB(this);
		this.K = !1;
		RB(this)
	};
	k.$e = function() {
		this.X || (this.X = !0, this.dispatchEvent("loaded"))
	};
	k.Fd = function(a) {
		null != this.o ? this.M = a : (this.dispatchEvent("play"), hc || fc || cu() || uc || QB(this))
	};
	k.cf = function(a) {
		if (!this.F && (hc || fc || cu() || uc)) {
			if (0 >= this.getCurrentTime()) return;
			if (uc && this.h.ended && 1 == this.getDuration()) {
				this.$(a);
				return
			}
			QB(this)
		}
		if (hc || sb(vb(), "Nintendo WiiU")) {
			if (1.5 < this.getCurrentTime() - this.B) {
				this.J = !0;
				this.h.currentTime = this.B;
				return
			}
			this.J = !1;
			this.getCurrentTime() > this.B && (this.B = this.getCurrentTime())
		}
		this.dispatchEvent("timeUpdate")
	};
	k.df = function() {
		this.dispatchEvent("volumeChange")
	};
	k.bf = function() {
		if (this.F && hc && !this.W && (2 > SB(this) || this.J)) {
			this.H = new ak(250);
			this.l.T(this.H, "tick", this.Ea);
			this.H.start();
			var a = !0
		} else a = !1;
		a || this.o || this.dispatchEvent("pause")
	};
	k.Ye = function() {
		var a = !0;
		if (hc || sb(vb(), "Nintendo WiiU")) a = this.B >= this.h.duration - 1.5;
		!this.J && a && this.dispatchEvent("end")
	};
	var PB = function(a) {
		a.dispatchEvent("beginFullscreen")
	};
	LB.prototype.ga = function() {
		this.dispatchEvent("endFullscreen")
	};
	LB.prototype.$ = function() {
		this.dispatchEvent("error")
	};
	LB.prototype.ra = function() {
		this.dispatchEvent("click")
	};
	var RB = function(a) {
		a.h instanceof HTMLElement && (a.Ma = Ou(a.h, KB), a.Ma.then(function(b) {
			a.Ia() || J(K(), "ps", b.width + "x" + b.height)
		}))
	};
	LB.prototype.fb = function() {
		var a = new af(this.h.offsetWidth, this.h.offsetHeight),
			b = jA(this.h);
		if (a.width != this.U.width || a.height != this.U.height) !this.V && b ? PB(this) : this.V && !b && this
			.ga(), this.U = a, this.V = b
	};
	LB.prototype.Ea = function() {
		if (!this.h.ended && this.h.paused && (hc || vc ? this.h.currentTime < this.h.duration : 1)) {
			var a = this.h.duration - this.h.currentTime,
				b = SB(this);
			0 < b && (2 <= b || 2 > a) && (Si(this.H), NB(this))
		} else Si(this.H)
	};
	var SB = function(a) {
		var b;
		a: {
			for (b = a.h.buffered.length - 1; 0 <= b;) {
				if (a.h.buffered.start(b) <= a.h.currentTime) {
					b = a.h.buffered.end(b);
					break a
				}
				b--
			}
			b = 0
		}
		return b - a.h.currentTime
	};
	LB.prototype.jb = function() {
		Yz().report(139);
		PB(this)
	};
	var VB = function(a, b, c, d) {
		M.call(this);
		var e = this;
		this.B = b;
		this.o = c;
		this.A = !1;
		b = new ku(this);
		Ui(this, b);
		this.h = this.l = null;
		BB(a, d).then(function(f) {
			return void TB(e, f)
		}).catch(function() {
			return void UB(e)
		})
	};
	t(VB, M);
	var XB = function(a) {
			a.A = !0;
			WB(a)
		},
		WB = function(a) {
			a.l && a.A && Af(a.l).postMessage({
				type: "innerBridgeIframeLoaded"
			}, "*")
		},
		TB = function(a, b) {
			a.l = b;
			a.h = new CB(b, a.o);
			a.h.T("error", function() {
				return void UB(a)
			});
			EB(a.h);
			WB(a)
		},
		UB = function(a) {
			uy(a.B, "omid", "iframeFailed");
			a.dispose()
		};
	VB.prototype.O = function() {
		this.l && (xf(this.l), this.l = null);
		M.prototype.O.call(this)
	};
	var YB = function(a, b, c, d) {
		M.call(this);
		this.A = a;
		this.o = b;
		this.h = c;
		this.D = d;
		this.l = new ku(this);
		Ui(this, this.l);
		this.l.T(this.A, d, this.C)
	};
	t(YB, M);
	var ZB = function(a, b) {
		var c = b.ha;
		switch (b.ia) {
			case "showVideo":
				c = a.o;
				null != c.l && c.l.show();
				break;
			case "hide":
				a.o.hide();
				break;
			case "resizeAndPositionVideo":
				a = a.o.h;
				c = c.resizeAndPositionVideo;
				a.h.style.left = String(c.left) + "px";
				a.h.style.top = String(c.top) + "px";
				a.h.style.width = String(c.width) + "px";
				a.h.style.height = String(c.height) + "px";
				break;
			case "restoreSizeAndPositionVideo":
				c = a.o.h, c.h.style.width = "100%", c.h.style.height = "100%", c.h.style.left = "0", c.h.style
					.right = "0"
		}
	};
	YB.prototype.C = function(a) {
		var b = a.ha;
		switch (a.ia) {
			case "activate":
				a = this.o;
				var c = this.h;
				a.h != c && a.l && a.A && a.o && (c.setVolume(a.h.getVolume()), c = a.h, a.h = a.o, a.o = c, c =
					a.l, a.l = a.A, a.A = c, a.A.hide(), null != (c = a.I.F) && (a = a.h.C.h, c.o = a, c
						.h && (c = c.h, c.h = a, DB(c, a))));
				break;
			case "startTracking":
				a = this.h;
				c = this.B;
				this.l.T(a, Nd(Qu), c);
				this.l.T(a, dy, c);
				a = this.h;
				OB(a);
				a.l.T(a.h, dy, a.ib);
				a.l.T(a.h, "ended", a.Ye);
				a.l.T(a.h, "webkitbeginfullscreen", a.jb);
				a.l.T(a.h, "webkitendfullscreen", a.ga);
				a.l.T(a.h, "loadedmetadata",
					a.Ze);
				a.l.T(a.h, "pause", a.bf);
				a.l.T(a.h, "playing", a.Fd);
				a.l.T(a.h, "timeupdate", a.cf);
				a.l.T(a.h, "volumechange", a.df);
				a.l.T(a.h, "error", a.$);
				a.l.T(a.h, uc || hc && !du(8) ? "loadeddata" : "canplay", a.$e);
				a.D = new vz;
				a.l.T(a.D, "click", a.ra);
				xz(a.D, a.h);
				a.R = new ak(1E3);
				a.l.T(a.R, "tick", a.fb);
				a.R.start();
				break;
			case "stopTracking":
				a = this.h;
				c = this.B;
				this.l.Va(a, Nd(Qu), c);
				this.l.Va(a, dy, c);
				OB(this.h);
				break;
			case "exitFullscreen":
				a = this.h;
				(ec || gc) && a.h.webkitDisplayingFullscreen && a.h.webkitExitFullscreen();
				break;
			case "play":
				NB(this.h);
				break;
			case "pause":
				this.h.pause();
				break;
			case "load":
				a = this.h;
				c = b.videoUrl;
				var d = b.muxedMediaUrl,
					e = b.muxedMimeType,
					f = b.muxedAudioCodec,
					g = b.muxedVideoCodec,
					h = b.demuxedAudioUrl,
					l = b.demuxedVideoUrl,
					n = b.demuxedAudioMimeType,
					m = b.demuxedVideoMimeType,
					x = b.demuxedAudioCodec,
					u = b.demuxedVideoCodec;
				b = b.mseCompatible;
				var A = null;
				l && h && b && m && n && u && x && (A = new lt({
					tf: l,
					se: h,
					videoItag: null,
					audioItag: null,
					sf: m,
					re: n,
					Wa: u,
					Oa: x,
					height: null,
					width: null,
					xa: b,
					Eh: null,
					xh: null
				}));
				h = null;
				d && e && g && f && (h = new mt({
					Xe: d,
					itag: null,
					mimeType: e,
					Wa: g,
					Oa: f,
					height: null,
					width: null,
					xa: b,
					zh: null
				}));
				A ? a.load(c, A) : h ? a.load(c, h) : a.load(c, null);
				break;
			case "unload":
				this.h.unload();
				break;
			case "setCurrentTime":
				this.h.h.currentTime = b.currentTime;
				break;
			case "setVolume":
				this.h.setVolume(b.volume)
		}
	};
	YB.prototype.B = function(a) {
		var b = {};
		switch (a.type) {
			case "autoplayDisallowed":
				a = "autoplayDisallowed";
				break;
			case "beginFullscreen":
				a = "fullscreen";
				break;
			case "endFullscreen":
				a = "exitFullscreen";
				break;
			case "click":
				a = "click";
				break;
			case "end":
				a = "end";
				break;
			case "error":
				a = "error";
				break;
			case "loaded":
				a = "loaded";
				break;
			case "mediaLoadTimeout":
				a = "mediaLoadTimeout";
				break;
			case "pause":
				a = "pause";
				b.ended = this.h.h.ended;
				break;
			case "play":
				a = "play";
				break;
			case "skip":
				a = "skip";
				break;
			case "start":
				a = "start";
				b.volume = this.h.getVolume();
				break;
			case "timeUpdate":
				a = "timeupdate";
				b.currentTime = this.h.getCurrentTime();
				b.duration = this.h.getDuration();
				break;
			case "volumeChange":
				a = "volumeChange";
				b.volume = this.h.getVolume();
				break;
			case "loadedmetadata":
				a = a.type;
				b.duration = this.h.getDuration();
				break;
			case "abort":
			case "canplay":
			case "canplaythrough":
			case "durationchange":
			case "emptied":
			case "loadstart":
			case "loadeddata":
			case "progress":
			case "ratechange":
			case "seeked":
			case "seeking":
			case "stalled":
			case "suspend":
			case "waiting":
				a = a.type;
				break;
			default:
				return
		}
		uy(this.A,
			this.D, a, b)
	};
	var $B = function(a, b) {
		M.call(this);
		this.l = b;
		this.o = new YB(a, b, this.l.h, "videoDisplay1");
		Ui(this, this.o);
		this.h = null;
		var c = this.l.o;
		null != c && (this.h = new YB(a, b, c, "videoDisplay2"), Ui(this, this.h))
	};
	t($B, M);
	var aC = function(a, b, c, d) {
		var e = !0;
		e = void 0 === e ? !1 : e;
		var f = Wf("IFRAME");
		f.id = b;
		f.name = b;
		f.width = String(c);
		f.height = String(d);
		f.allowTransparency = "true";
		f.scrolling = "no";
		f.marginWidth = "0";
		f.marginHeight = "0";
		f.frameBorder = "0";
		f.style.border = "0";
		f.style.verticalAlign = "bottom";
		f.src = "about:blank";
		if (Og(Eg) || e) f.setAttribute("role", "region"), f.setAttribute("aria-label", "Advertisement"), f
			.title = "3rd party ad content", f.tabIndex = 0;
		a.appendChild(f);
		return f
	};

	function bC() {
		var a, b;
		return null == (a = G().googletag) ? void 0 : null == (b = a.companionAds) ? void 0 : b.call(a)
	}

	function cC(a) {
		var b = {};
		b.slotId = a.getSlotId().getId();
		var c = [];
		a = r(a.getSizes() || []);
		for (var d = a.next(); !d.done; d = a.next())
			if (d = d.value, "string" !== typeof d) {
				var e = {};
				c.push((e.adWidth = d.getWidth(), e.adHeight = d.getHeight(), e))
			} return b.adSizes = c, b
	}

	function dC(a) {
		var b = bC();
		if (b && a && Array.isArray(a)) {
			var c = new Map(b.getSlots().map(function(u) {
				return [u.getSlotId().getId(), u]
			}));
			a = r(a);
			for (var d = a.next(); !d.done; d = a.next()) {
				var e = d.value,
					f = c.get(e.slotId);
				if (f && !b.isSlotAPersistentRoadblock(f)) {
					var g = e.adContent;
					if (g && (d = of (f.getSlotId().getDomId()))) {
						d.style.display = "";
						var h = e.adWidth,
							l = e.adHeight;
						d.textContent = "";
						if (e.friendlyIframeRendering) try {
							var n = "google_companion_" + f.getSlotId().getId(),
								m = aC(d, n, h, l),
								x = m.contentWindow ? m.contentWindow.document :
								m.contentDocument;
							ac && x.open("text/html", "replace");
							Me(x, hu(g));
							x.close()
						} catch (u) {} else Ke(d, hu(g)), d.style.width = h + "px", d.style.height = l + "px";
						b.slotRenderEnded(f, h, l);
						(e = e.onAdContentSet) && e(d)
					}
				}
			}
		}
	};
	var eC = function(a, b, c, d, e, f) {
		Zz.call(this, a, b, c, d, e);
		this.h = f
	};
	t(eC, Zz);
	var fC = function(a, b) {
		N.call(this);
		this.B = a;
		this.o = b;
		this.h = {};
		this.l = new ku(this);
		Ui(this, this.l);
		this.l.T(G(), "message", this.C)
	};
	t(fC, N);
	var gC = function(a, b) {
			var c = b.h;
			a.h.hasOwnProperty(c) && uy(a.h[c], b.type, b.ia, b.ha)
		},
		hC = function(a, b, c, d) {
			a.h.hasOwnProperty(b) || (c = new LA(b, c), a.l.T(c, a.B, function(e) {
				this.dispatchEvent(new eC(e.type, e.ia, e.ha, e.Jb, e.Gd, b))
			}), c.h = d, c.connect(), a.h[b] = c)
		};
	fC.prototype.O = function() {
		for (var a in this.h) Si(this.h[a]);
		N.prototype.O.call(this)
	};
	fC.prototype.C = function(a) {
		a = a.h;
		var b = MA(a.data);
		if (null != b) {
			var c = b.channel;
			if (this.o && !this.h.hasOwnProperty(c)) {
				var d = b.sid;
				hC(this, c, d, a.source);
				this.dispatchEvent(new eC(b.name, b.type, b.data || {}, d, a.origin, c))
			}
		}
	};

	function iC() {
		return !!Ma("googletag.cmd", G())
	}

	function jC() {
		var a = Ma("googletag.console", G());
		return null != a ? a : null
	}
	var kC = function() {
		ku.call(this);
		this.o = new fC("gpt", !0);
		Ui(this, this.o);
		this.T(this.o, "gpt", this.C);
		this.h = null;
		iC() || G().top === G() || (this.h = new fC("gpt", !1), Ui(this, this.h), this.T(this.h, "gpt", this.B))
	};
	t(kC, ku);
	kC.prototype.C = function(a) {
		var b = a.Gd,
			c = "//imasdk.googleapis.com".match(Ef);
		b = b.match(Ef);
		if (c[3] == b[3] && c[4] == b[4])
			if (null != this.h) hC(this.h, a.h, a.Jb, G().parent), null != this.h && gC(this.h, a);
			else if (c = a.ha, null != c && void 0 !== c.scope) {
			b = c.scope;
			c = c.args;
			var d;
			if ("proxy" == b) {
				var e = a.ia;
				"isGptPresent" == e ? d = iC() : "isConsolePresent" == e && (d = null != jC())
			} else if (iC())
				if ("pubads" == b || "companionAds" == b) {
					d = a.ia;
					var f = G().googletag;
					if (null != f && null != f[b] && (b = f[b](), null != b && (d = b[d], null != d))) try {
						e = d.apply(b, c)
					} catch (g) {}
					d =
						e
				} else if ("console" == b) {
				if (e = jC(), null != e && (b = e[a.ia], null != b)) try {
					b.apply(e, c)
				} catch (g) {}
			} else null === b && (e = a.ia, "googleGetCompanionAdSlots" == e ? (e = bC()) ? (e = e.getSlots()
				.map(cC), d = e.length ? e : null) : d = null : ("googleSetCompanionAdContents" == e &&
				dC(c[0]), d = null));
			void 0 !== d && (a.ha.returnValue = d, gC(this.o, a))
		}
	};
	kC.prototype.B = function(a) {
		gC(this.o, a)
	};
	var lC = function(a, b) {
		if (a.h) {
			var c = a.h;
			Si(c.h[b]);
			delete c.h[b]
		}
		a.o && (a = a.o, Si(a.h[b]), delete a.h[b])
	};
	I(Ng);
	var Vf = [
		"A7D05fL9zBqt11RE193XmJzeo4RPtGLsV822r1Bivfn7OUM0YRLJQcJVPgMdvq7u5hLUS/KmNIpe9fz+VE/dUg4AAACJeyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1RoaXJkUGFydHkiOnRydWUsInVzYWdlIjoic3Vic2V0In0="
	];

	function mC() {
		var a = void 0 === a ? window.navigator.userAgent : a;
		return (a = a.match(/Chrome\/([0-9]+)/)) && 92 > Number(a[1]) ? "conversion-measurement" :
			"attribution-reporting"
	};
	var oC = function(a, b) {
			var c = Array.prototype.slice.call(arguments),
				d = c.shift();
			if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
			return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, g, h, l, n, m, x) {
				if ("%" == n) return "%";
				var u = c.shift();
				if ("undefined" == typeof u) throw Error("[goog.string.format] Not enough arguments");
				arguments[0] = u;
				return nC[n].apply(null, arguments)
			})
		},
		nC = {
			s: function(a, b, c) {
				return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ?
					a + df(" ", Number(c) - a.length) : df(" ", Number(c) - a.length) + a
			},
			f: function(a, b, c, d, e) {
				d = a.toString();
				isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
				var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
				0 <= Number(a) && (d = f + d);
				if (isNaN(c) || d.length >= Number(c)) return d;
				d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
				a = Number(c) - d.length - f.length;
				return d = 0 <= b.indexOf("-", 0) ? f + d + df(" ", a) : f + df(0 <= b.indexOf("0", 0) ? "0" :
					" ", a) + d
			},
			d: function(a, b, c, d, e, f, g, h) {
				return nC.f(parseInt(a,
					10), b, c, d, 0, f, g, h)
			}
		};
	nC.i = nC.d;
	nC.u = nC.d;

	function pC() {
		return ["autoplay", "trust-token-redemption", mC()].filter(function(a) {
			var b = document.featurePolicy;
			return void 0 !== b && "function" == typeof b.allowedFeatures && "object" == typeof b
				.allowedFeatures() && b.allowedFeatures().includes(a)
		}).join(";")
	}
	var rC = function(a, b) {
		N.call(this);
		this.o = new ku(this);
		Ui(this, this.o);
		this.M = this.K = null;
		this.J = !1;
		this.D = "goog_" + ff++;
		this.C = new Map;
		var c = this.D,
			d = (Qf() ? "https:" : "http:") + oC("//imasdk.googleapis.com/js/core/bridge3.494.0_%s.html", Jx.A);
		a: {
			var e = window;
			try {
				do {
					try {
						if (0 == e.location.href.indexOf(d) || 0 == e.document.referrer.indexOf(d)) {
							var f = !0;
							break a
						}
					} catch (g) {}
					e = e.parent
				} while (e != e.top)
			} catch (g) {}
			f = !1
		}
		f && (d += "?f=" + c);
		f = window.document;
		f = void 0 === f ? window.document : f;
		Xf(f);
		f = pC();
		c = wf("IFRAME", {
			src: d +
				"#" + c,
			allowFullscreen: !0,
			allow: f,
			id: c,
			style: "border:0; opacity:0; margin:0; padding:0; position:relative; color-scheme: light;"
		});
		this.o.Db(c, "load", this.X);
		a.appendChild(c);
		this.h = c;
		this.B = qC(this);
		this.H = b;
		this.l = null;
		this.N = new $B(this.B, this.H);
		Ui(this, this.N);
		this.H.h && this.o.T(this.B, "displayContainer", this.U);
		this.o.T(this.B, "mouse", this.V);
		this.o.T(this.B, "touch", this.W);
		c = G();
		d = Ma("google.ima.gptProxyInstance", c);
		null != d ? c = d : (d = new kC, w("google.ima.gptProxyInstance", d, c), c = d);
		this.R = c;
		ey() ||
			(this.F = new VB(a, this.B, b.h.C.h, this.D), Ui(this, this.F))
	};
	t(rC, N);
	var qC = function(a, b) {
		b = void 0 === b ? "*" : b;
		var c = a.C.get(b);
		null == c && (c = new LA(a.D, b), a.J && (c.h = Af(a.h), c.connect()), a.C.set(b, c));
		return c
	};
	rC.prototype.O = function() {
		null !== this.l && (this.l.dispose(), this.l = null);
		this.C.forEach(function(a) {
			Si(a)
		});
		this.C.clear();
		lC(this.R, this.D);
		xf(this.h);
		N.prototype.O.call(this)
	};
	rC.prototype.V = function(a) {
		var b = a.ha,
			c = mg(this.h),
			d = document.createEvent("MouseEvent");
		d.initMouseEvent(a.ia, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y,
			b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
		this.h.dispatchEvent(d)
	};
	var sC = function(a, b) {
		var c = mg(a.h),
			d = !!("TouchEvent" in window && 0 < TouchEvent.length);
		b = b.map(function(e) {
			return d ? new Touch({
				identifier: e.identifier,
				target: a.h,
				clientX: e.clientX,
				clientY: e.clientY,
				screenX: e.screenX,
				screenY: e.screenY,
				pageX: e.pageX + c.x,
				pageY: e.pageY + c.y
			}) : document.createTouch(window, a.h, e.identifier, e.pageX + c.x, e.pageY + c.y, e
				.screenX, e.screenY)
		});
		return d ? b : document.createTouchList.apply(document, b)
	};
	rC.prototype.W = function(a) {
		var b = a.ha,
			c = mg(this.h);
		if ("TouchEvent" in window && 0 < TouchEvent.length) b = {
			bubbles: !0,
			cancelable: !0,
			view: window,
			detail: b.detail,
			ctrlKey: b.ctrlKey,
			altKey: b.altKey,
			shiftKey: b.shiftKey,
			metaKey: b.metaKey,
			touches: sC(this, b.touches),
			targetTouches: sC(this, b.targetTouches),
			changedTouches: sC(this, b.changedTouches)
		}, a = new TouchEvent(a.ia, b), this.h.dispatchEvent(a);
		else {
			var d = document.createEvent("TouchEvent");
			d.initTouchEvent(a.ia, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX +
				c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, sC(this, b.touches), sC(
					this, b.targetTouches), sC(this, b.changedTouches), b.scale, b.rotation);
			this.h.dispatchEvent(d)
		}
	};
	rC.prototype.U = function(a) {
		switch (a.ia) {
			case "showVideo":
				null == this.l ? (this.l = new vz, this.o.T(this.l, "click", this.Z)) : zz(this.l);
				xz(this.l, tC(this.H));
				break;
			case "hide":
				null !== this.l && (this.l.dispose(), this.l = null)
		}
		var b = this.N;
		ZB(b.o, a);
		b.h && ZB(b.h, a)
	};
	rC.prototype.Z = function() {
		uy(this.B, "displayContainer", "videoClick")
	};
	rC.prototype.X = function() {
		var a = this;
		this.K = Wg();
		this.M = Tg();
		this.C.forEach(function(c) {
			c.h = Af(a.h);
			c.connect()
		});
		var b;
		null == (b = this.F) || XB(b);
		this.J = !0
	};
	var vC = function() {
		N.call(this);
		this.buffered = new uC;
		this.seekable = new uC;
		this.l = new ku(this);
		Ui(this, this.l);
		this.src = this.o = "";
		this.B = !1;
		this.h = null;
		var a = Ix(Jx);
		if (a) {
			a: {
				if (Qd(a.h, "videoElementFakeDuration") && (a = a.h.videoElementFakeDuration, "number" ===
						typeof a)) break a;a = NaN
			}
			this.duration = a
		}
	};
	t(vC, N);
	var wC = function() {
		var a = ["video/mp4"],
			b = ["video/ogg"],
			c = new vC;
		c.canPlayType = function(d) {
			return a.includes(d) ? "probably" : b.includes(d) ? "maybe" : ""
		};
		c.width = 0;
		c.height = 0;
		c.offsetWidth = 0;
		c.offsetHeight = 0;
		return c
	};
	k = vC.prototype;
	k.pause = function() {
		this.autoplay = !1;
		this.paused || (null.stop(), this.paused = !0, this.dispatchEvent("timeupdate"), this.dispatchEvent(
			"pause"))
	};
	k.load = function() {
		this.readyState = 0;
		this.paused = !0;
		this.seeking = !1;
		this.dispatchEvent("loadstart");
		var a;
		isNaN(this.duration) ? a = 10 + 20 * Math.random() : a = this.duration;
		this.setProperty("duration", a);
		a = this.seekable;
		a.h.push(new xC(this.duration));
		a.length = a.h.length;
		a = this.buffered;
		a.h.push(new xC(this.duration));
		a.length = a.h.length;
		this.dispatchEvent("loadedmetadata");
		0 < this.currentTime && this.dispatchEvent("timeupdate");
		this.dispatchEvent("loadeddata");
		this.dispatchEvent("canplay");
		this.dispatchEvent("canplaythrough");
		this.dispatchEvent("progress");
		this.playbackRate = this.defaultPlaybackRate
	};
	k.setProperty = function(a, b) {
		switch (a) {
			case "currentTime":
				a = Number(b);
				this.seeking = !0;
				this.dispatchEvent("seeking");
				this.seeking = !1;
				this.currentTime = a;
				this.dispatchEvent("seeked");
				a = Ya() - this.Ec;
				b = this.currentTime + a / 1E3;
				this.Ec += a;
				2 < this.readyState && (this.currentTime = Math.min(b, this.duration));
				this.dispatchEvent("timeupdate");
				this.currentTime == this.duration && (this.ended = this.paused = !0, null.stop(), this
					.dispatchEvent("ended"));
				break;
			case "duration":
				this.duration = Number(b);
				this.dispatchEvent("durationchange");
				break;
			case "volume":
				this.volume = Number(b);
				this.dispatchEvent("volumechange");
				break;
			default:
				throw "Property setter not implemented";
		}
	};
	k.setAttribute = function(a, b) {
		null != a && yC.set(a, b)
	};
	k.getAttribute = function(a) {
		return yC.get(a)
	};
	k.ae = function(a) {
		var b = null,
			c = null;
		switch (a.type) {
			case "loadeddata":
				b = "Loaded";
				break;
			case "playing":
				b = "Playing";
				c = "#00f";
				break;
			case "pause":
				b = "Paused";
				break;
			case "ended":
				b = "Ended", c = "#000"
		}
		b && this.hc && (this.hc.innerText = b);
		c && this.xb && (this.xb.style.backgroundColor = c)
	};
	var yC = new AA,
		xC = function(a) {
			this.startTime = 0;
			this.endTime = a
		},
		uC = function() {
			this.length = 0;
			this.h = []
		};
	uC.prototype.start = function(a) {
		return this.h[a].startTime
	};
	uC.prototype.end = function(a) {
		return this.h[a].endTime
	};
	k = vC.prototype;
	k.readyState = 0;
	k.seeking = !1;
	k.currentTime = 0;
	k.initialTime = void 0;
	k.duration = NaN;
	k.paused = !0;
	k.ended = !1;
	k.autoplay = !1;
	k.loop = !1;
	k.volume = 1;
	k.muted = !1;
	Object.defineProperty(vC.prototype, "src", {
		get: function() {
			return vC.prototype.o
		},
		set: function(a) {
			var b = vC.prototype;
			b.B && null != b.h ? (b.h.reject(), b.h = null) : b.o = a
		}
	});
	k = vC.prototype;
	k.currentSrc = "";
	k.defaultPlaybackRate = 1;
	k.playbackRate = 0;
	k.Ec = 0;
	k.xb = null;
	k.hc = null;
	var BC = function(a, b) {
		M.call(this);
		this.A = a;
		this.o = this.h = null;
		this.l = zC();
		AC(this, b);
		Pw(function() {
			J(K(), "haob", "1")
		})
	};
	t(BC, M);
	BC.prototype.initialize = function() {
		this.l && this.l.load()
	};
	BC.prototype.O = function() {
		xf(this.h);
		M.prototype.O.call(this)
	};
	var AC = function(a, b) {
			a.h = wf("DIV", {
				style: "display:none;"
			});
			a.A.appendChild(a.h);
			a.h.appendChild(a.l);
			b && (a.o = wf("DIV", {
				style: "position:absolute;width:100%;height:100%;left:0px;top:0px"
			}), a.h.appendChild(a.o))
		},
		zC = function() {
			var a = Ix(Jx);
			if (Fx(a, "useVideoElementFake")) {
				a = wC();
				var b = wf("DIV", {
					style: "position:absolute;width:100%;height:100%;top:0px;left:0px;"
				});
				Object.assign(b, a);
				a.xb = wf("DIV", {
					style: "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000"
				});
				a.hc = wf("P", {
					style: "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;"
				});
				a.xb.appendChild(a.hc);
				b.appendChild(a.xb);
				a.l.T(a, ["loadeddata", "playing", "pause", "ended"], a.ae);
				a = b
			} else {
				a = !1;
				try {
					-1 != window.location.search.indexOf("goog_limavideo=true") && (a = !0)
				} catch (c) {}
				v.customElements ? a ? b = !0 : (Li.isSelected() && Yz().report(153, {
						limvid: "vw"
					}), b = Fi.isSelected() || Li.isSelected() || Di.isSelected() || Ei.isSelected() ? !0 : !1) :
					b = !1;
				if (b) {
					a && console.log("force lima video in wrapper");
					a = null;
					try {
						a = new ax
					} catch (c) {
						a = wf("lima-video"), Li.isSelected() && Yz().report(153, {
							limvid: "firefail"
						})
					}
					a.style.backgroundColor =
						"#000";
					a.style.height = "100%";
					a.style.width = "100%";
					a.style.position = "absolute";
					a.style.left = "0";
					a.style.top = "0"
				} else a = wf("VIDEO", {
					style: "background-color:#000;position:absolute;width:100%;height:100%;left:0;top:0;",
					title: Cx("Advertisement").toString()
				})
			}
			a.setAttribute("webkit-playsinline", !0);
			a.setAttribute("playsinline", !0);
			return a
		};
	BC.prototype.show = function() {
		var a = this.h;
		null != a && (a.style.display = "block")
	};
	BC.prototype.hide = function() {
		var a = this.h;
		null != a && (a.style.display = "none")
	};
	var EC = function(a, b, c) {
		var d = a && a.getRootNode ? a.getRootNode({
			composed: !0
		}) : a;
		if (null == a || !zf(mf(d), d)) throw Dy(Cy, null, "containerElement", "element");
		this.C = b;
		this.X = gy(this.C || null);
		this.W = eu(this.C || null);
		this.V = String(Math.floor(1E9 * Math.random()));
		this.M = !1;
		this.H = a;
		this.U = null != b;
		Jx.h = 2;
		this.F = CC(b ? b : null);
		d = wf("DIV", {
			style: "position:absolute"
		});
		a.insertBefore(d, a.firstChild);
		this.B = d;
		this.l = null;
		DC(this) && b ? a = new LB(b) : (this.l = new BC(this.B, !0), a = new LB(this.l.l));
		this.h = a;
		this.o = this.A = null;
		if (a = this.l && Jx.isAutoPlayAdBreaks()) a = !(DC(this) || ec || gc || Rm() || dc && (!dc || !bu(au,
			4)));
		a && (this.A = new BC(this.B, !0), this.o = new LB(this.A.l));
		this.D = c || null;
		this.R = null != this.D;
		DC(this) && b ? "function" !== typeof b.getBoundingClientRect ? (c = this.B, Jx.o = c) : c = b : c =
			this.B;
		this.L = c;
		this.I = new rC(this.B, this);
		this.N = new af(0, 0);
		this.J = "";
		b && (b = Ss(b.src || b.currentSrc), 200 > b.toString().length ? this.J = b.toString() : 200 > b.l
			.length && (this.J = b.l));
		this.K = new Map;
		this.K.set("videoDisplay1", this.h);
		this.o && this.K.set("videoDisplay2",
			this.o)
	};
	EC.prototype.initialize = function() {
		this.M = !0;
		null != this.l && this.l.initialize();
		null != this.A && this.A.initialize()
	};
	EC.prototype.isInitialized = function() {
		return this.M
	};
	EC.prototype.destroy = function() {
		var a = this;
		this.C = null;
		Si(this.l);
		Si(this.A);
		Si(this.I);
		this.h.Kb(function() {
			return Si(a.h)
		});
		null != this.o && this.o.Kb(function() {
			return Si(a.o)
		});
		xf(this.B)
	};
	EC.prototype.hide = function() {
		null != this.l && this.l.hide()
	};
	var tC = function(a) {
			return a.R && a.D ? a.D : null != a.l ? a.l.o : null
		},
		DC = function(a) {
			return fy(a.F) && a.U
		},
		CC = function(a) {
			return null != a && "function" === typeof a.getAttribute && null != a.getAttribute("playsinline") ? !0 :
				!1
		};
	EC.prototype.destroy = EC.prototype.destroy;
	EC.prototype.initialize = EC.prototype.initialize;
	var FC = function(a) {
		var b = Error.call(this);
		this.message = b.message;
		"stack" in b && (this.stack = b.stack);
		this.h = a
	};
	t(FC, Error);
	k = FC.prototype;
	k.getInnerError = function() {
		var a = this.h.innerError;
		return a instanceof Object ? new FC(a) : null != a ? Error(a) : null
	};
	k.getMessage = function() {
		return this.h.errorMessage
	};
	k.getErrorCode = function() {
		return this.h.errorCode
	};
	k.Bd = function() {
		var a = this.getErrorCode();
		return 1E3 > a ? a : 900
	};
	k.getType = function() {
		return this.h.type
	};
	k.toString = function() {
		return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (null != this.getInnerError() ?
			" Caused by: " + this.getInnerError() : "")
	};
	FC.prototype.getType = FC.prototype.getType;
	FC.prototype.getVastErrorCode = FC.prototype.Bd;
	FC.prototype.getErrorCode = FC.prototype.getErrorCode;
	FC.prototype.getMessage = FC.prototype.getMessage;
	FC.prototype.getInnerError = FC.prototype.getInnerError;
	var GC = {
		AD_LOAD: "adLoadError",
		AD_PLAY: "adPlayError"
	};
	w("module$contents$ima$AdError_AdError.Type", GC, void 0);
	var HC = function(a, b) {
		b = void 0 === b ? null : b;
		Vi.call(this, "adError");
		this.h = a;
		this.o = b
	};
	t(HC, Vi);
	HC.prototype.getError = function() {
		return this.h
	};
	HC.prototype.getUserRequestContext = function() {
		return this.o
	};
	HC.prototype.getUserRequestContext = HC.prototype.getUserRequestContext;
	HC.prototype.getError = HC.prototype.getError;
	var IC = {
		AD_ERROR: "adError"
	};
	w("module$contents$ima$AdErrorEvent_AdErrorEvent.Type", IC, void 0);
	var JC = function(a, b, c) {
		b = void 0 === b ? null : b;
		c = void 0 === c ? null : c;
		Vi.call(this, a);
		this.o = b;
		this.h = c
	};
	t(JC, Vi);
	JC.prototype.getAd = function() {
		return this.o
	};
	JC.prototype.getAdData = function() {
		return this.h
	};
	JC.prototype.getAdData = JC.prototype.getAdData;
	JC.prototype.getAd = JC.prototype.getAd;
	var KC = {
		AD_CAN_PLAY: "adCanPlay",
		yf: "adStarted",
		CONTENT_PAUSE_REQUESTED: "contentPauseRequested",
		CONTENT_RESUME_REQUESTED: "contentResumeRequested",
		CLICK: "click",
		VIDEO_CLICKED: "videoClicked",
		VIDEO_ICON_CLICKED: "videoIconClicked",
		bd: "engagedView",
		EXPANDED_CHANGED: "expandedChanged",
		STARTED: "start",
		AD_PROGRESS: "adProgress",
		AD_BUFFERING: "adBuffering",
		IMPRESSION: "impression",
		gd: "measurable_impression",
		VIEWABLE_IMPRESSION: "viewable_impression",
		cd: "fully_viewable_audible_half_duration_impression",
		ee: "overlay_resize",
		fe: "overlay_unmeasurable_impression",
		ge: "overlay_unviewable_impression",
		ie: "overlay_viewable_immediate_impression",
		he: "overlay_viewable_end_of_session_impression",
		Wf: "externalActivityEvent",
		PAUSED: "pause",
		RESUMED: "resume",
		FIRST_QUARTILE: "firstQuartile",
		MIDPOINT: "midpoint",
		THIRD_QUARTILE: "thirdQuartile",
		COMPLETE: "complete",
		DURATION_CHANGE: "durationChange",
		USER_CLOSE: "userClose",
		nh: "userRecall",
		Qg: "prefetched",
		LOADED: "loaded",
		ALL_ADS_COMPLETED: "allAdsCompleted",
		SKIPPED: "skip",
		le: "skipShown",
		LINEAR_CHANGED: "linearChanged",
		SKIPPABLE_STATE_CHANGED: "skippableStateChanged",
		AD_METADATA: "adMetadata",
		xf: "adBreakFetchError",
		AD_BREAK_READY: "adBreakReady",
		LOG: "log",
		VOLUME_CHANGED: "volumeChange",
		VOLUME_MUTED: "mute",
		INTERACTION: "interaction",
		If: "companionBackfill",
		jh: "trackingUrlPinged",
		qh: "video_card_endcap_collapse",
		rh: "video_card_endcap_dismiss",
		sh: "video_card_endcap_impression",
		Lf: "companionInitialized",
		Kf: "companionImpression",
		Jf: "companionClick",
		Cg: "mediaUrlPinged",
		be: "loadStart",
		Fg: "navigationRequested"
	};
	w("module$contents$ima$AdEvent_AdEvent.Type", KC, void 0);
	var LC = function(a, b) {
		b = void 0 === b ? null : b;
		JC.call(this, "adMetadata", a);
		this.A = b
	};
	t(LC, JC);
	LC.prototype.Be = function() {
		return this.A
	};
	LC.prototype.getAdCuePoints = LC.prototype.Be;
	var MC = function(a) {
		this.adBreakDuration = a.adBreakDuration;
		this.adPosition = a.adPosition;
		this.currentTime = a.currentTime;
		this.duration = a.duration;
		this.totalAds = a.totalAds
	};
	var NC = function(a, b) {
		N.call(this);
		this.o = a;
		this.C = b;
		this.l = this.o.currentTime;
		this.h = new ak(250);
		Ui(this, this.h);
		this.B = new ku(this);
		Ui(this, this.B);
		mu(this.B, this.h, "tick", this.D, !1, this)
	};
	t(NC, N);
	NC.prototype.Ya = function() {
		return this.l
	};
	NC.prototype.start = function() {
		OC(this);
		this.h.start()
	};
	NC.prototype.stop = function() {
		this.h.stop()
	};
	NC.prototype.D = function() {
		var a = this.o.currentTime;
		a != this.Ya() && (this.l = a, OC(this))
	};
	var OC = function(a) {
		var b = {};
		b.currentTime = a.Ya();
		uy(a.C, "contentTimeUpdate", "contentTimeUpdate", b)
	};
	var PC = {
			rgb: !0,
			rgba: !0,
			alpha: !0,
			rect: !0,
			image: !0,
			"linear-gradient": !0,
			"radial-gradient": !0,
			"repeating-linear-gradient": !0,
			"repeating-radial-gradient": !0,
			"cubic-bezier": !0,
			matrix: !0,
			perspective: !0,
			rotate: !0,
			rotate3d: !0,
			rotatex: !0,
			rotatey: !0,
			steps: !0,
			rotatez: !0,
			scale: !0,
			scale3d: !0,
			scalex: !0,
			scaley: !0,
			scalez: !0,
			skew: !0,
			skewx: !0,
			skewy: !0,
			translate: !0,
			translate3d: !0,
			translatex: !0,
			translatey: !0,
			translatez: !0
		},
		QC = function(a) {
			a = jb(a);
			if ("" == a) return null;
			var b = String(a.substr(0, 4)).toLowerCase();
			if (0 == ("url(" <
					b ? -1 : "url(" == b ? 0 : 1)) return null;
			if (0 < a.indexOf("(")) {
				if (/"|'/.test(a)) return null;
				b = /([\-\w]+)\(/g;
				for (var c; c = b.exec(a);)
					if (!(c[1].toLowerCase() in PC)) return null
			}
			return a
		};

	function RC(a, b) {
		a = v[a];
		return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
	}

	function SC(a) {
		var b = v.CSSStyleDeclaration;
		return b && b.prototype && b.prototype[a] || null
	}
	RC("Element", "attributes") || RC("Node", "attributes");
	RC("Element", "innerHTML") || RC("HTMLElement", "innerHTML");
	RC("Node", "nodeName");
	RC("Node", "nodeType");
	RC("Node", "parentNode");
	RC("Node", "childNodes");
	RC("HTMLElement", "style") || RC("Element", "style");
	RC("HTMLStyleElement", "sheet");
	var TC = SC("getPropertyValue"),
		UC = SC("setProperty");
	RC("Element", "namespaceURI") || RC("Node", "namespaceURI");

	function VC(a, b, c, d) {
		if (a) return a.apply(b, d);
		if (Zb && 10 > document.documentMode) {
			if (!b[c].call) throw Error("IE Clobbering detected");
		} else if ("function" != typeof b[c]) throw Error("Clobbering detected");
		return b[c].apply(b, d)
	};
	var WC = {
			"-webkit-border-horizontal-spacing": !0,
			"-webkit-border-vertical-spacing": !0
		},
		YC = function(a) {
			if (!a) return ne;
			var b = document.createElement("div").style;
			XC(a).forEach(function(c) {
				var d = bc && c in WC ? c : c.replace(
					/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
				0 != d.lastIndexOf("--", 0) && 0 != d.lastIndexOf("var", 0) && (c = VC(TC, a, a
						.getPropertyValue ? "getPropertyValue" : "getAttribute", [c]) || "", c = QC(c),
					null != c && VC(UC, b, b.setProperty ? "setProperty" : "setAttribute", [d, c]))
			});
			return new me(b.cssText ||
				"", le)
		},
		XC = function(a) {
			Oa(a) ? a = Pb(a) : (a = Od(a), Lb(a, "cssText"));
			return a
		};
	var ZC = function(a, b, c) {
		N.call(this);
		this.l = a;
		this.h = null;
		this.J = "";
		this.K = ne;
		this.M = 0;
		this.D = this.o = null;
		this.B = b;
		this.C = null;
		this.F = "";
		this.H = c
	};
	t(ZC, N);
	ZC.prototype.init = function(a) {
		this.F = a;
		a = "about:blank";
		Zb && (a = "");
		this.o = wf("IFRAME", {
			src: a,
			allowtransparency: !0,
			background: "transparent"
		});
		ig(this.o, {
			display: "none",
			width: "0",
			height: "0"
		});
		a = this.l.H;
		a.appendChild(this.o);
		a = a.ownerDocument;
		a = a.defaultView || a.parentWindow;
		null == this.C && (this.C = new ku(this));
		this.C.T(a, "message", this.N);
		a = '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js">\x3c/script><script>loader = new VPAIDLoader(false, "' +
			(this.F + '");\x3c/script></body>');
		if (vc ||
			tc || $b) {
			var b = this.o.contentWindow;
			b && yB(b.document, a)
		} else zB(this.o, a)
	};
	ZC.prototype.N = function(a) {
		try {
			var b = a.h.data;
			try {
				var c = JSON.parse(b)
			} catch (T) {
				return
			}
			var d = c.session;
			if (null != d && this.F == d) switch (c.type) {
				case "friendlyReady":
					var e = $C(this);
					if (null != e) {
						this.h = e;
						this.J = e.currentSrc;
						var f = e.style.cssText;
						if (Zb && 10 > document.documentMode) var g = ne;
						else {
							var h = document;
							"function" === typeof HTMLTemplateElement && (h = uf(document, "TEMPLATE")
								.content.ownerDocument);
							var l = h.implementation.createHTMLDocument("").createElement("DIV");
							l.style.cssText = f;
							g = YC(l.style)
						}
						this.K = g;
						this.M =
							e.currentTime
					} else {
						var n = this.l.H,
							m = this.l.N;
						var x = "border: 0; margin: 0; padding: 0; position: absolute; width:" + (m.width +
							"px; ");
						x += "height:" + m.height + "px;";
						this.h = wf("VIDEO", {
							style: x,
							autoplay: !0
						});
						n.appendChild(this.h)
					}
					var u = this.l.H;
					e = "border: 0; margin: 0; padding: 0;position: absolute; ";
					var A = qg(this.h);
					e += "width:" + A.width + "px; ";
					e += "height:" + A.height + "px;";
					this.D = wf("DIV", {
						style: e
					});
					u.appendChild(this.D);
					try {
						this.o.contentWindow.loader.initFriendly(this.h, this.D)
					} catch (T) {
						aD(this)
					}
					uy(this.B,
						"vpaid", "", b);
					break;
				case "becameLinear":
					this.h && !Df() && !Cf() && ig(this.h, {
						visibility: "visible"
					});
					uy(this.B, "vpaid", "", b);
					break;
				case "becameNonlinear":
					bD(this);
					uy(this.B, "vpaid", "", b);
					break;
				case "startAd":
					u = {};
					if (this.h) {
						h = this.h.paused;
						var z = 0 < this.h.currentTime;
						u.apl = z && !h ? "1" : "0";
						u.ip = h ? "1" : "0";
						u.iavp = z ? "1" : "0"
					} else u.apl = "n";
					Yz().report(99, u);
					uy(this.B, "vpaid", "", b);
					if (null != $C(this)) {
						var O = this.l;
						null != O.l && O.l.show()
					}
					break;
				default:
					uy(this.B, "vpaid", "", b)
			}
		} catch (T) {
			aD(this)
		}
	};
	var aD = function(a) {
			var b = {
				type: "error"
			};
			b.session = a.F;
			a = Dh(new Bh(void 0), b);
			window.postMessage(a, "*")
		},
		$C = function(a) {
			return ("videoDisplayUnknown" == a.H ? a.l.h : a.l.K.get(a.H)).C.h
		},
		bD = function(a) {
			a.h && !Df() && !Cf() && ig(a.h, {
				visibility: "hidden"
			})
		};
	ZC.prototype.O = function() {
		M.prototype.O.call(this);
		Si(this.C);
		this.C = null;
		xf(this.D);
		this.D = null;
		xf(this.o);
		this.o = null;
		var a = $C(this);
		if (null != a) {
			var b = this.K;
			a.style.cssText = b instanceof me && b.constructor === me ? b.h : "type_error:SafeStyle";
			Df() || Cf() ? (a.src = this.J, a.currentTime = this.M) : (a.removeAttribute("src"), this.l.hide())
		} else xf(this.h), this.h = null
	};
	var cD = function(a, b) {
		M.call(this);
		this.l = a;
		this.o = b;
		this.h = new Map
	};
	t(cD, M);
	var dD = function(a, b) {
		try {
			var c = b.ha,
				d = c.session;
			switch (c.vpaidEventType) {
				case "createFriendlyIframe":
					b = "videoDisplayUnknown";
					c.videoDisplayName && (b = c.videoDisplayName);
					var e = c.session,
						f = new ZC(a.l, a.o, b);
					a.h.set(e, f);
					f.init(e);
					break;
				case "vpaidNonLinear":
					var g = a.h.get(d);
					g && bD(g);
					break;
				case "destroyFriendlyIframe":
					var h = a.h.get(d);
					h && (h.dispose(), a.h.delete(d))
			}
		} catch (l) {
			Yz().report(125, {
				msg: l.message
			})
		}
	};
	cD.prototype.O = function() {
		this.h.forEach(function(a) {
			return a.dispose()
		})
	};
	var eD = function() {
		this.h = [];
		this.l = []
	};
	eD.prototype.isEmpty = function() {
		return 0 === this.h.length && 0 === this.l.length
	};
	eD.prototype.clear = function() {
		this.h = [];
		this.l = []
	};
	eD.prototype.remove = function(a) {
		var b = this.h;
		b: {
			var c = b.length - 1;0 > c && (c = Math.max(0, b.length + c));
			if ("string" === typeof b) c = "string" !== typeof a || 1 != a.length ? -1 : b.lastIndexOf(a,
			c);
			else {
				for (; 0 <= c; c--)
					if (c in b && b[c] === a) break b;
				c = -1
			}
		}
		0 <= c ? (Mb(b, c), b = !0) : b = !1;
		return b || Lb(this.l, a)
	};
	eD.prototype.nb = function() {
		for (var a = [], b = this.h.length - 1; 0 <= b; --b) a.push(this.h[b]);
		var c = this.l.length;
		for (b = 0; b < c; ++b) a.push(this.l[b]);
		return a
	};
	var Z = function(a, b, c, d, e, f, g) {
		N.call(this);
		var h = this;
		this.J = a;
		this.h = b;
		this.M = c;
		this.ib = e;
		this.B = new rA;
		this.D = g;
		this.N = !1;
		this.U = 1;
		this.fb = d;
		this.$ = -1;
		this.o = this.l = null;
		this.H = new NC({
			currentTime: 0
		}, this.D);
		this.F = new eD;
		this.ga = this.W = !1;
		this.X = new Map;
		this.Z = this.ra = !1;
		this.Ea = new cD(b, g);
		Ui(this, this.Ea);
		this.K = f && null != this.h.D;
		this.R = function() {
			var l = h.h.h,
				n = l.getCurrentTime();
			l = l.getDuration();
			return {
				currentTime: n,
				duration: l,
				isPlaying: !0,
				volume: h.U
			}
		};
		this.V = new ku(this);
		this.V.T(this.D, "adsManager",
			this.jb)
	};
	t(Z, N);
	Z.prototype.jb = function(a) {
		var b = this,
			c = a.ia,
			d = a.ha;
		switch (c) {
			case "error":
				fD(this);
				gD(this, d);
				break;
			case "contentPauseRequested":
				Yz().report(130);
				hD(this);
				iD(this, c, d);
				break;
			case "contentResumeRequested":
				jD(this, function() {
					return iD(b, c, d)
				});
				break;
			case "remainingTime":
				this.$ = d.remainingTime;
				break;
			case "skip":
				iD(this, c, d);
				break;
			case "log":
				iD(this, c, d, d.logData);
				break;
			case "companionBackfill":
				a = Ma("window.google_show_companion_ad");
				null != a && a();
				break;
			case "skipShown":
				this.N = !0;
				iD(this, c, d);
				break;
			case "interaction":
				iD(this,
					c, d, d.interactionData);
				break;
			case "vpaidEvent":
				dD(this.Ea, a);
				break;
			case "skippableStateChanged":
				a = d.adData;
				null != a.skippable && (this.N = a.skippable);
				iD(this, c, d);
				break;
			case "volumeChange":
				a = d.adData;
				null != a && "number" === typeof a.volume && (this.U = a.volume);
				iD(this, c, d);
				break;
			case "firstQuartile":
				iD(this, sy.firstQuartile, d);
				iD(this, c, d);
				break;
			case "thirdQuartile":
				iD(this, sy.thirdQuartile, d);
				iD(this, c, d);
				break;
			default:
				iD(this, c, d)
		}
	};
	var iD = function(a, b, c, d) {
			if (null == c.companions) {
				var e = a.X.get(c.adId);
				c.companions = null != e ? e : []
			}
			var f = c.adData;
			if (e = null == f ? null : new Y(f)) a.l = e;
			switch (b) {
				case "adBreakReady":
				case "mediaUrlPinged":
					b = new JC(b, null, c);
					break;
				case "adMetadata":
					b = null;
					null != c.adCuePoints && (b = new FB(c.adCuePoints));
					b = new LC(e, b);
					break;
				case "allAdsCompleted":
					a.l = null;
					a.ra = !0;
					b = new JC(b, e);
					break;
				case "contentPauseRequested":
					a.Z = !1;
					b = new JC(b, e);
					break;
				case "contentResumeRequested":
					a.l = null;
					a.Z = !0;
					b = new JC(b, e);
					break;
				case "loaded":
					a.$ =
						e.getDuration();
					a.N = !1;
					hy() && (d = a.J, c = a.ib, d.l.set(cA(e), a.R), (0 != Jx.h ? I(mr).o : d.C) && kA(d, "loaded",
						cA(e), c));
					b = new JC(b, e, f);
					break;
				case "start":
					a.X.set(c.adId, c.companions);
					null != tC(a.h) && (null == a.o ? (a.o = new vz, a.V.T(a.o, "click", a.af)) : zz(a.o), xz(a.o,
						tC(a.h)));
					b = new JC(b, e);
					break;
				case "complete":
					null != a.o && zz(a.o);
					hy() && mA(a.J, a.R, cA(e));
					a.l = null;
					a.X.delete(c.adId);
					b = new JC(b, e);
					break;
				case "log":
					c = null;
					null != d && null != d.type ? (f = d.type, f = "adLoadError" == f || "adPlayError" == f) : f = !
						1;
					f && (c = {
						adError: new FC(d)
					});
					b = new JC(b, e, c);
					break;
				case "interaction":
					b = new JC(b, e, d);
					break;
				case "adProgress":
					b = new JC(b, e, new MC(c));
					break;
				default:
					b = new JC(b, e)
			}
			a.dispatchEvent(b);
			a.ra && a.Z && a.destroy()
		},
		gD = function(a, b) {
			var c = new HC(new FC(b));
			a.W ? (a.dispatchEvent(c), hy() && a.l && mA(a.J, a.R, cA(a.l)), a.l = null) : a.F.l.push(c);
			a = {
				error: b.errorCode,
				vis: eh(document)
			};
			Yz().report(7, a)
		},
		kD = function(a, b, c) {
			uy(a.D, "adsManager", b, c)
		},
		jD = function(a, b) {
			Yz().report(131);
			fD(a, b)
		},
		hD = function(a) {
			var b = a.h.h;
			DC(a.h) && a.B.restoreCustomPlaybackStateOnAdBreakComplete &&
				null != b.fd && b.fd()
		},
		fD = function(a, b) {
			var c = a.h.h;
			DC(a.h) && a.B.restoreCustomPlaybackStateOnAdBreakComplete && null != c.Kb ? c.Kb(b) : b && b()
		};
	k = Z.prototype;
	k.init = function(a, b, c, d) {
		if (this.F.isEmpty()) {
			var e = this.h,
				f = null;
			e.C && null == d && (f = {
				vd: "setnull"
			});
			e.C && e.C === d && (f = {
				vd: "match"
			});
			if (e.C && e.C !== d) {
				f = gy(d || null);
				var g = eu(d || null);
				f = {
					vd: "diff",
					oc: e.X,
					nc: f,
					oi: e.W,
					ni: g
				}
			}!e.C && d && (f = {
				vd: "new"
			});
			f && (f.custVid = e.V, Yz().report(93, f));
			null != d && (e.F = CC(d), fy(e.F) && (e.U = !0, Si(e.l), Si(e.A), Si(e.o), e.l = null, e.A = null,
				e.o = null, Si(e.h), e.h = new LB(d), "function" !== typeof d.getBoundingClientRect ? (e
					.L = e.B, Jx.o = e.L) : e.L = d, null != (d = e.I.F) && (e = e.h.C.h, d.o = e, d
					.h && (d = d.h,
						d.h = e, DB(d, e)))));
			this.W = !0;
			this.resize(a, b, c);
			e = sA(this.B, this.K);
			kD(this, "init", {
				adsRenderingSettings: e,
				width: a,
				height: b,
				viewMode: c
			})
		} else {
			for (; !this.F.isEmpty();) b = a = this.F, 0 === b.h.length && (b.h = b.l, b.h.reverse(), b.l = []),
				a = a.h.pop(), this.dispatchEvent(a);
			this.dispose()
		}
	};
	k.Te = function() {
		return DC(this.h)
	};
	k.Se = function() {
		return this.K
	};
	k.getRemainingTime = function() {
		return this.$
	};
	k.getAdSkippableState = function() {
		return this.N
	};
	k.ze = function() {
		kD(this, "discardAdBreak")
	};
	k.updateAdsRenderingSettings = function(a) {
		if (null != a) {
			var b = this.B.bitrate,
				c = a.bitrate;
			Yz().report(96, {
				init: this.W ? "1" : "0",
				start: this.ga ? "1" : "0",
				old: b,
				"new": c,
				changed: b != c ? "1" : "0"
			});
			this.B = a;
			a = sA(this.B, this.K);
			kD(this, "updateAdsRenderingSettings", {
				adsRenderingSettings: a
			})
		}
	};
	k.skip = function() {
		kD(this, "skip")
	};
	k.start = function() {
		if (this.M) {
			(ec || gc) && Yz().report(50, {
				customPlayback: DC(this.h)
			});
			this.h.isInitialized() || Yz().report(26, {
				adtagurl: this.M,
				customPlayback: DC(this.h)
			});
			Lm(this.h.B) && Yz().report(30, {
				adtagurl: this.M,
				customPlayback: DC(this.h)
			});
			var a = this.h.D,
				b = this.h.B,
				c;
			if (c = a && b && !Lm(a)) a = iA(a), b = iA(b), c = 0 < a.width && 0 < a.height && 0 < b.width &&
				0 < b.height && a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b
				.height && b.top <= a.top + a.height;
			c && Yz().report(31, {
				adtagurl: this.M,
				customPlayback: DC(this.h)
			})
		}
		if (!this.h.isInitialized() &&
			!DC(this.h)) throw Dy(By);
		b = this.h;
		b.R = this.K && null != b.D;
		this.h.I.h.style.opacity = 1;
		null != this.C && 1 == this.getVolume() && ("boolean" === typeof this.C.muted && this.C.muted ? this
			.setVolume(0) : "number" === typeof this.C.volume && (b = this.C.volume, 0 <= b && 1 >= b &&
				this.setVolume(this.C.volume)));
		this.ga = !0;
		kD(this, "start")
	};
	k.af = function() {
		if (!this.B.disableClickThrough && null != this.l) {
			var a = this.l.h.clickThroughUrl;
			null != a && Hu(a, this.l.h.attributionParams)
		}
	};
	k.resize = function(a, b, c) {
		var d = this.h,
			e = d.B;
		null != e && (-1 == a ? (e.style.right = "0", e.style.left = "0") : e.style.width = a + "px", -1 == b ?
			(e.style.bottom = "0", e.style.top = "0") : e.style.height = b + "px");
		e = d.I;
		e.h.width = -1 == a ? "100%" : a;
		e.h.height = -1 == b ? "100%" : b;
		try {
			e.h.offsetTop = e.h.offsetTop
		} catch (f) {}
		d.N = new af(a, b);
		kD(this, "resize", {
			width: a,
			height: b,
			viewMode: c
		})
	};
	k.stop = function() {
		kD(this, "stop")
	};
	k.expand = function() {
		kD(this, "expand")
	};
	k.collapse = function() {
		kD(this, "collapse")
	};
	k.getVolume = function() {
		return this.U
	};
	k.setVolume = function(a) {
		this.U = a;
		this.h.h.setVolume(a);
		kD(this, "volume", {
			volume: a
		})
	};
	k.pause = function() {
		kD(this, "pause")
	};
	k.resume = function() {
		kD(this, "resume")
	};
	k.destroy = function() {
		this.dispose()
	};
	k.getCuePoints = function() {
		return this.fb
	};
	k.getCurrentAd = function() {
		return this.l
	};
	k.O = function() {
		kD(this, "destroy");
		null != this.o && this.o.dispose();
		this.V.dispose();
		this.F.clear();
		this.H && (this.H.stop(), this.H.dispose());
		hy() && mA(this.J, this.R);
		N.prototype.O.call(this)
	};
	k.clicked = function() {
		Yz().report(124, {
			api: "clicked"
		});
		var a = this.l && this.l.h.clickThroughUrl;
		a && this.l.isUiDisabled() && Hu(a, this.l.h.attributionParams);
		kD(this, "click")
	};
	k.focus = function() {
		uy(this.D, "userInteraction", "focusUiElement")
	};
	Z.prototype.clicked = Z.prototype.clicked;
	Z.prototype.getCurrentAd = Z.prototype.getCurrentAd;
	Z.prototype.getCuePoints = Z.prototype.getCuePoints;
	Z.prototype.destroy = Z.prototype.destroy;
	Z.prototype.resume = Z.prototype.resume;
	Z.prototype.pause = Z.prototype.pause;
	Z.prototype.setVolume = Z.prototype.setVolume;
	Z.prototype.getVolume = Z.prototype.getVolume;
	Z.prototype.collapse = Z.prototype.collapse;
	Z.prototype.expand = Z.prototype.expand;
	Z.prototype.stop = Z.prototype.stop;
	Z.prototype.resize = Z.prototype.resize;
	Z.prototype.start = Z.prototype.start;
	Z.prototype.skip = Z.prototype.skip;
	Z.prototype.updateAdsRenderingSettings = Z.prototype.updateAdsRenderingSettings;
	Z.prototype.discardAdBreak = Z.prototype.ze;
	Z.prototype.getAdSkippableState = Z.prototype.getAdSkippableState;
	Z.prototype.getRemainingTime = Z.prototype.getRemainingTime;
	Z.prototype.isCustomClickTrackingUsed = Z.prototype.Se;
	Z.prototype.isCustomPlaybackUsed = Z.prototype.Te;
	Z.prototype.init = Z.prototype.init;
	var lD = function(a, b) {
		Vi.call(this, "adsManagerLoaded");
		this.h = a;
		this.o = b
	};
	t(lD, Vi);
	lD.prototype.getAdsManager = function(a, b) {
		a = a || {
			currentTime: null
		};
		var c = this.h;
		c.C = a;
		null != a.currentTime && (c.H = new NC(a, c.D), c.H.start());
		null != b && (c.B = b);
		return this.h
	};
	lD.prototype.getUserRequestContext = function() {
		return this.o
	};
	lD.prototype.getUserRequestContext = lD.prototype.getUserRequestContext;
	lD.prototype.getAdsManager = lD.prototype.getAdsManager;
	var mD = {
		ADS_MANAGER_LOADED: "adsManagerLoaded"
	};
	w("module$contents$ima$AdsManagerLoadedEvent_AdsManagerLoadedEvent.Type", mD, void 0);
	var nD = function() {
		this.videoPlayMuted = this.videoPlayActivation = "unknown";
		this.videoContinuousPlay = "0";
		this.nonLinearAdSlotHeight = this.nonLinearAdSlotWidth = this.linearAdSlotHeight = this
			.linearAdSlotWidth = this.liveStreamPrefetchSeconds = 0;
		this.forceNonLinearFullSlot = !1;
		this.contentTitle = this.contentKeywords = this.contentDuration = null;
		this.vastLoadTimeout = 5E3;
		this.omidAccessModeRules = {};
		this.pageUrl = null
	};
	nD.prototype.setAdWillAutoPlay = function(a) {
		this.videoPlayActivation = a ? "auto" : "click"
	};
	nD.prototype.setAdWillPlayMuted = function(a) {
		this.videoPlayMuted = a ? "muted" : "unmuted"
	};
	nD.prototype.setContinuousPlayback = function(a) {
		this.videoContinuousPlay = a ? "2" : "1"
	};
	nD.prototype.setContinuousPlayback = nD.prototype.setContinuousPlayback;
	nD.prototype.setAdWillPlayMuted = nD.prototype.setAdWillPlayMuted;
	nD.prototype.setAdWillAutoPlay = nD.prototype.setAdWillAutoPlay;
	var oD = function(a) {
		this.h = a || {
			cookie: ""
		}
	};
	k = oD.prototype;
	k.isEnabled = function() {
		if (!v.navigator.cookieEnabled) return !1;
		if (!this.isEmpty()) return !0;
		this.set("TESTCOOKIESENABLED", "1", {
			Gc: 60
		});
		if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
		this.remove("TESTCOOKIESENABLED");
		return !0
	};
	k.set = function(a, b, c) {
		var d = !1;
		if ("object" === typeof c) {
			var e = c.Ch;
			d = c.kf || !1;
			var f = c.domain || void 0;
			var g = c.path || void 0;
			var h = c.Gc
		}
		if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
		if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
		void 0 === h && (h = -1);
		this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 ==
			h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() +
				1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
	};
	k.get = function(a, b) {
		for (var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
			f = jb(d[e]);
			if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
			if (f == a) return ""
		}
		return b
	};
	k.remove = function(a, b, c) {
		var d = void 0 !== this.get(a);
		this.set(a, "", {
			Gc: 0,
			path: b,
			domain: c
		});
		return d
	};
	k.Qb = function() {
		return pD(this).keys
	};
	k.nb = function() {
		return pD(this).values
	};
	k.isEmpty = function() {
		return !this.h.cookie
	};
	k.clear = function() {
		for (var a = pD(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
	};
	var pD = function(a) {
		a = (a.h.cookie || "").split(";");
		for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = jb(a[f]), d = e.indexOf("="), -1 == d ? (b
			.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
		return {
			keys: b,
			values: c
		}
	};

	function qD(a, b, c) {
		b = nd(b, 5) && "null" !== c.origin ? c.document.cookie : null;
		return null === b ? null : (new oD({
			cookie: b
		})).get(a) || ""
	};
	var rD = function() {
		this.h = window;
		this.l = 0
	};
	rD.prototype.isSupported = function(a) {
		if (0 === this.l) {
			if (a && qD("__gads", a, this.h)) a = !0;
			else {
				var b = this.h;
				nd(a, 5) && "null" !== b.origin && (new oD(b.document)).set("GoogleAdServingTest", "Good",
					void 0);
				if (b = "Good" === qD("GoogleAdServingTest", a, this.h)) {
					var c = this.h;
					nd(a, 5) && "null" !== c.origin && (new oD(c.document)).remove("GoogleAdServingTest",
						void 0, void 0)
				}
				a = b
			}
			this.l = a ? 2 : 1
		}
		return 2 === this.l
	};
	var sD = function(a, b, c, d) {
		if (d) {
			var e = {
				Gc: D(c, 2) - Date.now() / 1E3,
				path: D(c, 3),
				domain: D(c, 4),
				kf: !1
			};
			a = a.h;
			nd(d, 5) && "null" !== a.origin && (new oD(a.document)).set(b, D(c, 1), e)
		}
	};
	var tD = q(["https://adservice.google.com/adsid/integrator.", ""]),
		uD = q(["https://adservice.google.ad/adsid/integrator.", ""]),
		vD = q(["https://adservice.google.ae/adsid/integrator.", ""]),
		wD = q(["https://adservice.google.com.af/adsid/integrator.", ""]),
		xD = q(["https://adservice.google.com.ag/adsid/integrator.", ""]),
		yD = q(["https://adservice.google.com.ai/adsid/integrator.", ""]),
		zD = q(["https://adservice.google.al/adsid/integrator.", ""]),
		AD = q(["https://adservice.google.co.ao/adsid/integrator.", ""]),
		BD = q(["https://adservice.google.com.ar/adsid/integrator.",
			""
		]),
		CD = q(["https://adservice.google.as/adsid/integrator.", ""]),
		DD = q(["https://adservice.google.at/adsid/integrator.", ""]),
		ED = q(["https://adservice.google.com.au/adsid/integrator.", ""]),
		FD = q(["https://adservice.google.az/adsid/integrator.", ""]),
		GD = q(["https://adservice.google.com.bd/adsid/integrator.", ""]),
		HD = q(["https://adservice.google.be/adsid/integrator.", ""]),
		ID = q(["https://adservice.google.bf/adsid/integrator.", ""]),
		JD = q(["https://adservice.google.bg/adsid/integrator.", ""]),
		KD = q(["https://adservice.google.com.bh/adsid/integrator.",
			""
		]),
		LD = q(["https://adservice.google.bi/adsid/integrator.", ""]),
		MD = q(["https://adservice.google.bj/adsid/integrator.", ""]),
		ND = q(["https://adservice.google.com.bn/adsid/integrator.", ""]),
		OD = q(["https://adservice.google.com.bo/adsid/integrator.", ""]),
		PD = q(["https://adservice.google.com.br/adsid/integrator.", ""]),
		QD = q(["https://adservice.google.bs/adsid/integrator.", ""]),
		RD = q(["https://adservice.google.bt/adsid/integrator.", ""]),
		SD = q(["https://adservice.google.co.bw/adsid/integrator.", ""]),
		TD = q(["https://adservice.google.com.bz/adsid/integrator.",
			""
		]),
		UD = q(["https://adservice.google.ca/adsid/integrator.", ""]),
		VD = q(["https://adservice.google.cd/adsid/integrator.", ""]),
		WD = q(["https://adservice.google.cf/adsid/integrator.", ""]),
		XD = q(["https://adservice.google.cg/adsid/integrator.", ""]),
		YD = q(["https://adservice.google.ch/adsid/integrator.", ""]),
		ZD = q(["https://adservice.google.ci/adsid/integrator.", ""]),
		$D = q(["https://adservice.google.co.ck/adsid/integrator.", ""]),
		aE = q(["https://adservice.google.cl/adsid/integrator.", ""]),
		bE = q(["https://adservice.google.cm/adsid/integrator.",
			""
		]),
		cE = q(["https://adservice.google.com.co/adsid/integrator.", ""]),
		dE = q(["https://adservice.google.co.cr/adsid/integrator.", ""]),
		eE = q(["https://adservice.google.com.cu/adsid/integrator.", ""]),
		fE = q(["https://adservice.google.cv/adsid/integrator.", ""]),
		gE = q(["https://adservice.google.com.cy/adsid/integrator.", ""]),
		hE = q(["https://adservice.google.cz/adsid/integrator.", ""]),
		iE = q(["https://adservice.google.de/adsid/integrator.", ""]),
		jE = q(["https://adservice.google.dj/adsid/integrator.", ""]),
		kE = q(["https://adservice.google.dk/adsid/integrator.",
			""
		]),
		lE = q(["https://adservice.google.dm/adsid/integrator.", ""]),
		mE = q(["https://adservice.google.dz/adsid/integrator.", ""]),
		nE = q(["https://adservice.google.com.ec/adsid/integrator.", ""]),
		oE = q(["https://adservice.google.ee/adsid/integrator.", ""]),
		pE = q(["https://adservice.google.com.eg/adsid/integrator.", ""]),
		qE = q(["https://adservice.google.es/adsid/integrator.", ""]),
		rE = q(["https://adservice.google.com.et/adsid/integrator.", ""]),
		sE = q(["https://adservice.google.fi/adsid/integrator.", ""]),
		tE = q(["https://adservice.google.com.fj/adsid/integrator.",
			""
		]),
		uE = q(["https://adservice.google.fm/adsid/integrator.", ""]),
		vE = q(["https://adservice.google.fr/adsid/integrator.", ""]),
		wE = q(["https://adservice.google.ga/adsid/integrator.", ""]),
		xE = q(["https://adservice.google.ge/adsid/integrator.", ""]),
		yE = q(["https://adservice.google.gg/adsid/integrator.", ""]),
		zE = q(["https://adservice.google.com.gh/adsid/integrator.", ""]),
		AE = q(["https://adservice.google.com.gi/adsid/integrator.", ""]),
		BE = q(["https://adservice.google.gl/adsid/integrator.", ""]),
		CE = q(["https://adservice.google.gm/adsid/integrator.",
			""
		]),
		DE = q(["https://adservice.google.gr/adsid/integrator.", ""]),
		EE = q(["https://adservice.google.com.gt/adsid/integrator.", ""]),
		FE = q(["https://adservice.google.gy/adsid/integrator.", ""]),
		GE = q(["https://adservice.google.com.hk/adsid/integrator.", ""]),
		HE = q(["https://adservice.google.hn/adsid/integrator.", ""]),
		IE = q(["https://adservice.google.hr/adsid/integrator.", ""]),
		JE = q(["https://adservice.google.ht/adsid/integrator.", ""]),
		KE = q(["https://adservice.google.hu/adsid/integrator.", ""]),
		LE = q(["https://adservice.google.co.id/adsid/integrator.",
			""
		]),
		ME = q(["https://adservice.google.ie/adsid/integrator.", ""]),
		NE = q(["https://adservice.google.co.il/adsid/integrator.", ""]),
		OE = q(["https://adservice.google.im/adsid/integrator.", ""]),
		PE = q(["https://adservice.google.co.in/adsid/integrator.", ""]),
		QE = q(["https://adservice.google.iq/adsid/integrator.", ""]),
		RE = q(["https://adservice.google.is/adsid/integrator.", ""]),
		SE = q(["https://adservice.google.it/adsid/integrator.", ""]),
		TE = q(["https://adservice.google.je/adsid/integrator.", ""]),
		UE = q(["https://adservice.google.com.jm/adsid/integrator.",
			""
		]),
		VE = q(["https://adservice.google.jo/adsid/integrator.", ""]),
		WE = q(["https://adservice.google.co.jp/adsid/integrator.", ""]),
		XE = q(["https://adservice.google.co.ke/adsid/integrator.", ""]),
		YE = q(["https://adservice.google.com.kh/adsid/integrator.", ""]),
		ZE = q(["https://adservice.google.ki/adsid/integrator.", ""]),
		$E = q(["https://adservice.google.kg/adsid/integrator.", ""]),
		aF = q(["https://adservice.google.co.kr/adsid/integrator.", ""]),
		bF = q(["https://adservice.google.com.kw/adsid/integrator.", ""]),
		cF = q(["https://adservice.google.kz/adsid/integrator.",
			""
		]),
		dF = q(["https://adservice.google.la/adsid/integrator.", ""]),
		eF = q(["https://adservice.google.com.lb/adsid/integrator.", ""]),
		fF = q(["https://adservice.google.li/adsid/integrator.", ""]),
		gF = q(["https://adservice.google.lk/adsid/integrator.", ""]),
		hF = q(["https://adservice.google.co.ls/adsid/integrator.", ""]),
		iF = q(["https://adservice.google.lt/adsid/integrator.", ""]),
		jF = q(["https://adservice.google.lu/adsid/integrator.", ""]),
		kF = q(["https://adservice.google.lv/adsid/integrator.", ""]),
		lF = q(["https://adservice.google.com.ly/adsid/integrator.",
			""
		]),
		mF = q(["https://adservice.google.md/adsid/integrator.", ""]),
		nF = q(["https://adservice.google.me/adsid/integrator.", ""]),
		oF = q(["https://adservice.google.mg/adsid/integrator.", ""]),
		pF = q(["https://adservice.google.mk/adsid/integrator.", ""]),
		qF = q(["https://adservice.google.ml/adsid/integrator.", ""]),
		rF = q(["https://adservice.google.com.mm/adsid/integrator.", ""]),
		sF = q(["https://adservice.google.mn/adsid/integrator.", ""]),
		tF = q(["https://adservice.google.ms/adsid/integrator.", ""]),
		uF = q(["https://adservice.google.com.mt/adsid/integrator.",
			""
		]),
		vF = q(["https://adservice.google.mu/adsid/integrator.", ""]),
		wF = q(["https://adservice.google.mv/adsid/integrator.", ""]),
		xF = q(["https://adservice.google.mw/adsid/integrator.", ""]),
		yF = q(["https://adservice.google.com.mx/adsid/integrator.", ""]),
		zF = q(["https://adservice.google.com.my/adsid/integrator.", ""]),
		AF = q(["https://adservice.google.co.mz/adsid/integrator.", ""]),
		BF = q(["https://adservice.google.com.na/adsid/integrator.", ""]),
		CF = q(["https://adservice.google.com.ng/adsid/integrator.", ""]),
		DF = q(["https://adservice.google.com.ni/adsid/integrator.",
			""
		]),
		EF = q(["https://adservice.google.ne/adsid/integrator.", ""]),
		FF = q(["https://adservice.google.nl/adsid/integrator.", ""]),
		GF = q(["https://adservice.google.no/adsid/integrator.", ""]),
		HF = q(["https://adservice.google.com.np/adsid/integrator.", ""]),
		IF = q(["https://adservice.google.nr/adsid/integrator.", ""]),
		JF = q(["https://adservice.google.nu/adsid/integrator.", ""]),
		KF = q(["https://adservice.google.co.nz/adsid/integrator.", ""]),
		LF = q(["https://adservice.google.com.om/adsid/integrator.", ""]),
		MF = q(["https://adservice.google.com.pa/adsid/integrator.",
			""
		]),
		NF = q(["https://adservice.google.com.pe/adsid/integrator.", ""]),
		OF = q(["https://adservice.google.com.pg/adsid/integrator.", ""]),
		PF = q(["https://adservice.google.com.ph/adsid/integrator.", ""]),
		QF = q(["https://adservice.google.com.pk/adsid/integrator.", ""]),
		RF = q(["https://adservice.google.pl/adsid/integrator.", ""]),
		SF = q(["https://adservice.google.pn/adsid/integrator.", ""]),
		TF = q(["https://adservice.google.com.pr/adsid/integrator.", ""]),
		UF = q(["https://adservice.google.ps/adsid/integrator.", ""]),
		VF = q(["https://adservice.google.pt/adsid/integrator.",
			""
		]),
		WF = q(["https://adservice.google.com.py/adsid/integrator.", ""]),
		XF = q(["https://adservice.google.com.qa/adsid/integrator.", ""]),
		YF = q(["https://adservice.google.ro/adsid/integrator.", ""]),
		ZF = q(["https://adservice.google.ru/adsid/integrator.", ""]),
		$F = q(["https://adservice.google.rw/adsid/integrator.", ""]),
		aG = q(["https://adservice.google.com.sa/adsid/integrator.", ""]),
		bG = q(["https://adservice.google.com.sb/adsid/integrator.", ""]),
		cG = q(["https://adservice.google.sc/adsid/integrator.", ""]),
		dG = q(["https://adservice.google.se/adsid/integrator.",
			""
		]),
		eG = q(["https://adservice.google.com.sg/adsid/integrator.", ""]),
		fG = q(["https://adservice.google.sh/adsid/integrator.", ""]),
		gG = q(["https://adservice.google.si/adsid/integrator.", ""]),
		hG = q(["https://adservice.google.sk/adsid/integrator.", ""]),
		iG = q(["https://adservice.google.sn/adsid/integrator.", ""]),
		jG = q(["https://adservice.google.so/adsid/integrator.", ""]),
		kG = q(["https://adservice.google.sm/adsid/integrator.", ""]),
		lG = q(["https://adservice.google.sr/adsid/integrator.", ""]),
		mG = q(["https://adservice.google.st/adsid/integrator.",
			""
		]),
		nG = q(["https://adservice.google.com.sv/adsid/integrator.", ""]),
		oG = q(["https://adservice.google.td/adsid/integrator.", ""]),
		pG = q(["https://adservice.google.tg/adsid/integrator.", ""]),
		qG = q(["https://adservice.google.co.th/adsid/integrator.", ""]),
		rG = q(["https://adservice.google.com.tj/adsid/integrator.", ""]),
		sG = q(["https://adservice.google.tl/adsid/integrator.", ""]),
		tG = q(["https://adservice.google.tm/adsid/integrator.", ""]),
		uG = q(["https://adservice.google.tn/adsid/integrator.", ""]),
		vG = q(["https://adservice.google.to/adsid/integrator.",
			""
		]),
		wG = q(["https://adservice.google.com.tr/adsid/integrator.", ""]),
		xG = q(["https://adservice.google.tt/adsid/integrator.", ""]),
		yG = q(["https://adservice.google.com.tw/adsid/integrator.", ""]),
		zG = q(["https://adservice.google.co.tz/adsid/integrator.", ""]),
		AG = q(["https://adservice.google.com.ua/adsid/integrator.", ""]),
		BG = q(["https://adservice.google.co.ug/adsid/integrator.", ""]),
		CG = q(["https://adservice.google.co.uk/adsid/integrator.", ""]),
		DG = q(["https://adservice.google.com.uy/adsid/integrator.", ""]),
		EG = q(["https://adservice.google.co.uz/adsid/integrator.", ""]),
		FG = q(["https://adservice.google.com.vc/adsid/integrator.", ""]),
		GG = q(["https://adservice.google.co.ve/adsid/integrator.", ""]),
		HG = q(["https://adservice.google.vg/adsid/integrator.", ""]),
		IG = q(["https://adservice.google.co.vi/adsid/integrator.", ""]),
		JG = q(["https://adservice.google.com.vn/adsid/integrator.", ""]),
		KG = q(["https://adservice.google.vu/adsid/integrator.", ""]),
		LG = q(["https://adservice.google.ws/adsid/integrator.", ""]),
		MG = q(["https://adservice.google.rs/adsid/integrator.",
			""
		]),
		NG = q(["https://adservice.google.co.za/adsid/integrator.", ""]),
		OG = q(["https://adservice.google.co.zm/adsid/integrator.", ""]),
		PG = q(["https://adservice.google.co.zw/adsid/integrator.", ""]),
		QG = q(["https://adservice.google.cat/adsid/integrator.", ""]),
		RG = new Map([
			[".google.com", function(a) {
				return F(tD, a)
			}],
			[".google.ad", function(a) {
				return F(uD, a)
			}],
			[".google.ae", function(a) {
				return F(vD, a)
			}],
			[".google.com.af", function(a) {
				return F(wD, a)
			}],
			[".google.com.ag", function(a) {
				return F(xD, a)
			}],
			[".google.com.ai",
				function(a) {
					return F(yD, a)
				}
			],
			[".google.al", function(a) {
				return F(zD, a)
			}],
			[".google.co.ao", function(a) {
				return F(AD, a)
			}],
			[".google.com.ar", function(a) {
				return F(BD, a)
			}],
			[".google.as", function(a) {
				return F(CD, a)
			}],
			[".google.at", function(a) {
				return F(DD, a)
			}],
			[".google.com.au", function(a) {
				return F(ED, a)
			}],
			[".google.az", function(a) {
				return F(FD, a)
			}],
			[".google.com.bd", function(a) {
				return F(GD, a)
			}],
			[".google.be", function(a) {
				return F(HD, a)
			}],
			[".google.bf", function(a) {
				return F(ID, a)
			}],
			[".google.bg", function(a) {
				return F(JD,
					a)
			}],
			[".google.com.bh", function(a) {
				return F(KD, a)
			}],
			[".google.bi", function(a) {
				return F(LD, a)
			}],
			[".google.bj", function(a) {
				return F(MD, a)
			}],
			[".google.com.bn", function(a) {
				return F(ND, a)
			}],
			[".google.com.bo", function(a) {
				return F(OD, a)
			}],
			[".google.com.br", function(a) {
				return F(PD, a)
			}],
			[".google.bs", function(a) {
				return F(QD, a)
			}],
			[".google.bt", function(a) {
				return F(RD, a)
			}],
			[".google.co.bw", function(a) {
				return F(SD, a)
			}],
			[".google.com.bz", function(a) {
				return F(TD, a)
			}],
			[".google.ca", function(a) {
				return F(UD, a)
			}],
			[".google.cd", function(a) {
				return F(VD, a)
			}],
			[".google.cf", function(a) {
				return F(WD, a)
			}],
			[".google.cg", function(a) {
				return F(XD, a)
			}],
			[".google.ch", function(a) {
				return F(YD, a)
			}],
			[".google.ci", function(a) {
				return F(ZD, a)
			}],
			[".google.co.ck", function(a) {
				return F($D, a)
			}],
			[".google.cl", function(a) {
				return F(aE, a)
			}],
			[".google.cm", function(a) {
				return F(bE, a)
			}],
			[".google.com.co", function(a) {
				return F(cE, a)
			}],
			[".google.co.cr", function(a) {
				return F(dE, a)
			}],
			[".google.com.cu", function(a) {
				return F(eE, a)
			}],
			[".google.cv",
				function(a) {
					return F(fE, a)
				}
			],
			[".google.com.cy", function(a) {
				return F(gE, a)
			}],
			[".google.cz", function(a) {
				return F(hE, a)
			}],
			[".google.de", function(a) {
				return F(iE, a)
			}],
			[".google.dj", function(a) {
				return F(jE, a)
			}],
			[".google.dk", function(a) {
				return F(kE, a)
			}],
			[".google.dm", function(a) {
				return F(lE, a)
			}],
			[".google.dz", function(a) {
				return F(mE, a)
			}],
			[".google.com.ec", function(a) {
				return F(nE, a)
			}],
			[".google.ee", function(a) {
				return F(oE, a)
			}],
			[".google.com.eg", function(a) {
				return F(pE, a)
			}],
			[".google.es", function(a) {
				return F(qE,
					a)
			}],
			[".google.com.et", function(a) {
				return F(rE, a)
			}],
			[".google.fi", function(a) {
				return F(sE, a)
			}],
			[".google.com.fj", function(a) {
				return F(tE, a)
			}],
			[".google.fm", function(a) {
				return F(uE, a)
			}],
			[".google.fr", function(a) {
				return F(vE, a)
			}],
			[".google.ga", function(a) {
				return F(wE, a)
			}],
			[".google.ge", function(a) {
				return F(xE, a)
			}],
			[".google.gg", function(a) {
				return F(yE, a)
			}],
			[".google.com.gh", function(a) {
				return F(zE, a)
			}],
			[".google.com.gi", function(a) {
				return F(AE, a)
			}],
			[".google.gl", function(a) {
				return F(BE, a)
			}],
			[".google.gm",
				function(a) {
					return F(CE, a)
				}
			],
			[".google.gr", function(a) {
				return F(DE, a)
			}],
			[".google.com.gt", function(a) {
				return F(EE, a)
			}],
			[".google.gy", function(a) {
				return F(FE, a)
			}],
			[".google.com.hk", function(a) {
				return F(GE, a)
			}],
			[".google.hn", function(a) {
				return F(HE, a)
			}],
			[".google.hr", function(a) {
				return F(IE, a)
			}],
			[".google.ht", function(a) {
				return F(JE, a)
			}],
			[".google.hu", function(a) {
				return F(KE, a)
			}],
			[".google.co.id", function(a) {
				return F(LE, a)
			}],
			[".google.ie", function(a) {
				return F(ME, a)
			}],
			[".google.co.il", function(a) {
				return F(NE,
					a)
			}],
			[".google.im", function(a) {
				return F(OE, a)
			}],
			[".google.co.in", function(a) {
				return F(PE, a)
			}],
			[".google.iq", function(a) {
				return F(QE, a)
			}],
			[".google.is", function(a) {
				return F(RE, a)
			}],
			[".google.it", function(a) {
				return F(SE, a)
			}],
			[".google.je", function(a) {
				return F(TE, a)
			}],
			[".google.com.jm", function(a) {
				return F(UE, a)
			}],
			[".google.jo", function(a) {
				return F(VE, a)
			}],
			[".google.co.jp", function(a) {
				return F(WE, a)
			}],
			[".google.co.ke", function(a) {
				return F(XE, a)
			}],
			[".google.com.kh", function(a) {
				return F(YE, a)
			}],
			[".google.ki",
				function(a) {
					return F(ZE, a)
				}
			],
			[".google.kg", function(a) {
				return F($E, a)
			}],
			[".google.co.kr", function(a) {
				return F(aF, a)
			}],
			[".google.com.kw", function(a) {
				return F(bF, a)
			}],
			[".google.kz", function(a) {
				return F(cF, a)
			}],
			[".google.la", function(a) {
				return F(dF, a)
			}],
			[".google.com.lb", function(a) {
				return F(eF, a)
			}],
			[".google.li", function(a) {
				return F(fF, a)
			}],
			[".google.lk", function(a) {
				return F(gF, a)
			}],
			[".google.co.ls", function(a) {
				return F(hF, a)
			}],
			[".google.lt", function(a) {
				return F(iF, a)
			}],
			[".google.lu", function(a) {
				return F(jF,
					a)
			}],
			[".google.lv", function(a) {
				return F(kF, a)
			}],
			[".google.com.ly", function(a) {
				return F(lF, a)
			}],
			[".google.md", function(a) {
				return F(mF, a)
			}],
			[".google.me", function(a) {
				return F(nF, a)
			}],
			[".google.mg", function(a) {
				return F(oF, a)
			}],
			[".google.mk", function(a) {
				return F(pF, a)
			}],
			[".google.ml", function(a) {
				return F(qF, a)
			}],
			[".google.com.mm", function(a) {
				return F(rF, a)
			}],
			[".google.mn", function(a) {
				return F(sF, a)
			}],
			[".google.ms", function(a) {
				return F(tF, a)
			}],
			[".google.com.mt", function(a) {
				return F(uF, a)
			}],
			[".google.mu",
				function(a) {
					return F(vF, a)
				}
			],
			[".google.mv", function(a) {
				return F(wF, a)
			}],
			[".google.mw", function(a) {
				return F(xF, a)
			}],
			[".google.com.mx", function(a) {
				return F(yF, a)
			}],
			[".google.com.my", function(a) {
				return F(zF, a)
			}],
			[".google.co.mz", function(a) {
				return F(AF, a)
			}],
			[".google.com.na", function(a) {
				return F(BF, a)
			}],
			[".google.com.ng", function(a) {
				return F(CF, a)
			}],
			[".google.com.ni", function(a) {
				return F(DF, a)
			}],
			[".google.ne", function(a) {
				return F(EF, a)
			}],
			[".google.nl", function(a) {
				return F(FF, a)
			}],
			[".google.no", function(a) {
				return F(GF,
					a)
			}],
			[".google.com.np", function(a) {
				return F(HF, a)
			}],
			[".google.nr", function(a) {
				return F(IF, a)
			}],
			[".google.nu", function(a) {
				return F(JF, a)
			}],
			[".google.co.nz", function(a) {
				return F(KF, a)
			}],
			[".google.com.om", function(a) {
				return F(LF, a)
			}],
			[".google.com.pa", function(a) {
				return F(MF, a)
			}],
			[".google.com.pe", function(a) {
				return F(NF, a)
			}],
			[".google.com.pg", function(a) {
				return F(OF, a)
			}],
			[".google.com.ph", function(a) {
				return F(PF, a)
			}],
			[".google.com.pk", function(a) {
				return F(QF, a)
			}],
			[".google.pl", function(a) {
				return F(RF,
					a)
			}],
			[".google.pn", function(a) {
				return F(SF, a)
			}],
			[".google.com.pr", function(a) {
				return F(TF, a)
			}],
			[".google.ps", function(a) {
				return F(UF, a)
			}],
			[".google.pt", function(a) {
				return F(VF, a)
			}],
			[".google.com.py", function(a) {
				return F(WF, a)
			}],
			[".google.com.qa", function(a) {
				return F(XF, a)
			}],
			[".google.ro", function(a) {
				return F(YF, a)
			}],
			[".google.ru", function(a) {
				return F(ZF, a)
			}],
			[".google.rw", function(a) {
				return F($F, a)
			}],
			[".google.com.sa", function(a) {
				return F(aG, a)
			}],
			[".google.com.sb", function(a) {
				return F(bG, a)
			}],
			[".google.sc",
				function(a) {
					return F(cG, a)
				}
			],
			[".google.se", function(a) {
				return F(dG, a)
			}],
			[".google.com.sg", function(a) {
				return F(eG, a)
			}],
			[".google.sh", function(a) {
				return F(fG, a)
			}],
			[".google.si", function(a) {
				return F(gG, a)
			}],
			[".google.sk", function(a) {
				return F(hG, a)
			}],
			[".google.sn", function(a) {
				return F(iG, a)
			}],
			[".google.so", function(a) {
				return F(jG, a)
			}],
			[".google.sm", function(a) {
				return F(kG, a)
			}],
			[".google.sr", function(a) {
				return F(lG, a)
			}],
			[".google.st", function(a) {
				return F(mG, a)
			}],
			[".google.com.sv", function(a) {
				return F(nG,
					a)
			}],
			[".google.td", function(a) {
				return F(oG, a)
			}],
			[".google.tg", function(a) {
				return F(pG, a)
			}],
			[".google.co.th", function(a) {
				return F(qG, a)
			}],
			[".google.com.tj", function(a) {
				return F(rG, a)
			}],
			[".google.tl", function(a) {
				return F(sG, a)
			}],
			[".google.tm", function(a) {
				return F(tG, a)
			}],
			[".google.tn", function(a) {
				return F(uG, a)
			}],
			[".google.to", function(a) {
				return F(vG, a)
			}],
			[".google.com.tr", function(a) {
				return F(wG, a)
			}],
			[".google.tt", function(a) {
				return F(xG, a)
			}],
			[".google.com.tw", function(a) {
				return F(yG, a)
			}],
			[".google.co.tz",
				function(a) {
					return F(zG, a)
				}
			],
			[".google.com.ua", function(a) {
				return F(AG, a)
			}],
			[".google.co.ug", function(a) {
				return F(BG, a)
			}],
			[".google.co.uk", function(a) {
				return F(CG, a)
			}],
			[".google.com.uy", function(a) {
				return F(DG, a)
			}],
			[".google.co.uz", function(a) {
				return F(EG, a)
			}],
			[".google.com.vc", function(a) {
				return F(FG, a)
			}],
			[".google.co.ve", function(a) {
				return F(GG, a)
			}],
			[".google.vg", function(a) {
				return F(HG, a)
			}],
			[".google.co.vi", function(a) {
				return F(IG, a)
			}],
			[".google.com.vn", function(a) {
				return F(JG, a)
			}],
			[".google.vu",
				function(a) {
					return F(KG, a)
				}
			],
			[".google.ws", function(a) {
				return F(LG, a)
			}],
			[".google.rs", function(a) {
				return F(MG, a)
			}],
			[".google.co.za", function(a) {
				return F(NG, a)
			}],
			[".google.co.zm", function(a) {
				return F(OG, a)
			}],
			[".google.co.zw", function(a) {
				return F(PG, a)
			}],
			[".google.cat", function(a) {
				return F(QG, a)
			}]
		].map(function(a) {
			var b = r(a);
			a = b.next().value;
			b = b.next().value;
			var c = {};
			return [a, (c.json = b("json"), c.js = b("js"), c["sync.js"] = b("sync.js"), c)]
		}));
	var SG = function(a, b, c) {
		var d = "script";
		d = void 0 === d ? "" : d;
		var e = Wf("LINK", a);
		try {
			if (e.rel = "preload", sb("preload", "stylesheet")) {
				e.href = ce(b).toString();
				var f = Ze('style[nonce],link[rel="stylesheet"][nonce]', e.ownerDocument && e.ownerDocument
					.defaultView);
				f && e.setAttribute("nonce", f)
			} else {
				if (b instanceof be) var g = ce(b).toString();
				else {
					if (b instanceof fe) var h = ge(b);
					else {
						if (b instanceof fe) var l = b;
						else b = "object" == typeof b && b.Sa ? b.Ga() : String(b), je.test(b) || (b =
							"about:invalid#zClosurez"), l = new fe(b, ee);
						h =
							ge(l)
					}
					g = h
				}
				e.href = g
			}
		} catch (n) {
			return
		}
		d && (e.as = d);
		c && e.setAttribute("nonce", c);
		if (a = a.getElementsByTagName("head")[0]) try {
			a.appendChild(e)
		} catch (n) {}
	};
	var TG = v,
		VG = function(a) {
			var b = new Map([
				["domain", v.location.hostname]
			]);
			UG[3] >= Ya() && b.set("adsid", UG[1]);
			return He(RG.get(a).js, b)
		},
		UG, WG, XG = function() {
			TG = v;
			UG = TG.googleToken = TG.googleToken || {};
			var a = Ya();
			UG[1] && UG[3] > a && 0 < UG[2] || (UG[1] = "", UG[2] = -1, UG[3] = -1, UG[4] = "", UG[6] = "");
			WG = TG.googleIMState = TG.googleIMState || {};
			RG.has(WG[1]) || (WG[1] = ".google.com");
			Array.isArray(WG[5]) || (WG[5] = []);
			"boolean" !== typeof WG[6] && (WG[6] = !1);
			Array.isArray(WG[7]) || (WG[7] = []);
			"number" !== typeof WG[8] && (WG[8] = 0)
		},
		YG = {
			xc: function() {
				return 0 <
					WG[8]
			},
			gf: function() {
				WG[8]++
			},
			hf: function() {
				0 < WG[8] && WG[8]--
			},
			jf: function() {
				WG[8] = 0
			},
			shouldRetry: function() {
				return !1
			},
			yd: function() {
				return WG[5]
			},
			od: function(a) {
				try {
					a()
				} catch (b) {
					v.setTimeout(function() {
						throw b;
					}, 0)
				}
			},
			Oc: function() {
				if (!YG.xc()) {
					var a = v.document,
						b = function(e) {
							e = VG(e);
							a: {
								try {
									var f = Ze("script[nonce]", void 0);
									break a
								} catch (g) {}
								f = void 0
							}
							SG(a, e.toString(), f);
							f = Wf("SCRIPT", a);
							f.type = "text/javascript";
							f.onerror = function() {
								return v.processGoogleToken({}, 2)
							};
							f.src = Ie(e);
							Le(f);
							try {
								(a.head || a.body ||
									a.documentElement).appendChild(f), YG.gf()
							} catch (g) {}
						},
						c = WG[1];
					b(c);
					".google.com" != c && b(".google.com");
					b = {};
					var d = (b.newToken = "FBT", b);
					v.setTimeout(function() {
						return v.processGoogleToken(d, 1)
					}, 1E3)
				}
			}
		};

	function ZG(a) {
		XG();
		var b = TG.googleToken[5] || 0;
		a && (0 != b || UG[3] >= Ya() ? YG.od(a) : (YG.yd().push(a), YG.Oc()));
		UG[3] >= Ya() && UG[2] >= Ya() || YG.Oc()
	}
	var $G = function(a) {
		v.processGoogleToken = v.processGoogleToken || function(b, c) {
			var d = b;
			d = void 0 === d ? {} : d;
			c = void 0 === c ? 0 : c;
			b = d.newToken || "";
			var e = "NT" == b,
				f = parseInt(d.freshLifetimeSecs || "", 10),
				g = parseInt(d.validLifetimeSecs || "", 10),
				h = d["1p_jar"] || "";
			d = d.pucrd || "";
			XG();
			1 == c ? YG.jf() : YG.hf();
			if (!b && YG.shouldRetry()) RG.has(".google.com") && (WG[1] = ".google.com"), YG.Oc();
			else {
				var l = TG.googleToken = TG.googleToken || {},
					n = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f &&
					"number" === typeof g && 0 < g && "string" ===
					typeof h;
				e = e && !YG.xc() && (!(UG[3] >= Ya()) || "NT" == UG[1]);
				var m = !(UG[3] >= Ya()) && 0 != c;
				if (n || e || m) e = Ya(), f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && eg(v,
						"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), l[5] = c,
					l[1] = b, l[2] = f, l[3] = g, l[4] = h, l[6] = d, XG();
				if (n || !YG.xc()) {
					c = YG.yd();
					for (b = 0; b < c.length; b++) YG.od(c[b]);
					c.length = 0
				}
			}
		};
		ZG(a)
	};
	var aH = function(a, b) {
		b = void 0 === b ? 500 : b;
		M.call(this);
		this.l = a;
		this.timeoutMs = b;
		this.h = null;
		this.A = {};
		this.B = 0;
		this.o = null
	};
	t(aH, M);
	aH.prototype.O = function() {
		this.A = {};
		this.o && (Ve(this.l, "message", this.o), delete this.o);
		delete this.A;
		delete this.l;
		delete this.h;
		M.prototype.O.call(this)
	};
	var cH = function(a) {
			var b;
			return "function" === typeof(null === (b = a.l) || void 0 === b ? void 0 : b.__uspapi) || null != bH(a)
		},
		eH = function(a, b) {
			var c = {};
			if (cH(a)) {
				var d = Qe(function() {
					return b(c)
				});
				dH(a, function(e, f) {
					f && (c = e);
					d()
				});
				setTimeout(d, a.timeoutMs)
			} else b(c)
		},
		dH = function(a, b) {
			var c;
			if ("function" === typeof(null === (c = a.l) || void 0 === c ? void 0 : c.__uspapi)) a = a.l.__uspapi,
				a("getUSPData", 1, b);
			else if (bH(a)) {
				fH(a);
				var d = ++a.B;
				a.A[d] = b;
				a.h && (b = {}, a.h.postMessage((b.__uspapiCall = {
						command: "getUSPData",
						version: 1,
						callId: d
					},
					b), "*"))
			}
		},
		bH = function(a) {
			if (a.h) return a.h;
			a.h = Uf(a.l, "__uspapiLocator");
			return a.h
		},
		fH = function(a) {
			a.o || (a.o = function(b) {
				var c;
				try {
					var d = {};
					"string" === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
					var e = d.__uspapiReturn;
					null === (c = a.A) || void 0 === c ? void 0 : c[e.callId](e.returnValue, e.success)
				} catch (f) {}
			}, Ue(a.l, "message", a.o))
		};
	var gH = {
			issuerOrigin: "https://attestation.android.com",
			issuancePath: "/att/i",
			redemptionPath: "/att/r"
		},
		hH = {
			issuerOrigin: "https://pagead2.googlesyndication.com",
			issuancePath: "/dtt/i",
			redemptionPath: "/dtt/r",
			getStatePath: "/dtt/s"
		};
	var iH = function() {
		var a = void 0 === a ? window : a;
		a = a.navigator.userAgent;
		var b = /Chrome/.test(a);
		return /Android/.test(a) && b
	};
	I(Ng);
	var jH = function(a, b, c) {
		a = void 0 === a ? !1 : a;
		b = void 0 === b ? !1 : b;
		c = void 0 === c ? !1 : c;
		M.call(this);
		var d = this;
		this.h = a;
		a = [];
		b && iH() && a.push(gH);
		c && a.push(hH);
		if (document.hasTrustToken && !Og(Fg) && !Array.isArray(window.goog_tt_state)) {
			var e = a.map(function(f) {
				return {
					issuerOrigin: f.issuerOrigin,
					state: d.h ? 1 : 12
				}
			});
			Object.defineProperty(window, "goog_tt_state", {
				configurable: !1,
				get: function() {
					return e.slice()
				}
			})
		}
	};
	t(jH, M);
	var kH = function(a, b, c) {
			var d, e = null == (d = window.goog_tt_state) ? void 0 : d.find(function(f) {
				return f.issuerOrigin === a
			});
			e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
		},
		lH = function() {
			var a = "" + gH.issuerOrigin + gH.redemptionPath,
				b = {
					keepalive: !0,
					trustToken: {
						type: "token-redemption",
						issuer: gH.issuerOrigin,
						refreshPolicy: "none"
					}
				};
			kH(gH.issuerOrigin, 2);
			return window.fetch(a, b).then(function(c) {
				if (!c.ok) throw Error(c.status + ": Network response was not ok!");
				kH(gH.issuerOrigin, 6, !0)
			}).catch(function(c) {
				c && "NoModificationAllowedError" ===
					c.name ? kH(gH.issuerOrigin, 6, !0) : kH(gH.issuerOrigin, 5)
			})
		},
		mH = function() {
			var a = "" + gH.issuerOrigin + gH.issuancePath;
			kH(gH.issuerOrigin, 8);
			return window.fetch(a, {
				keepalive: !0,
				trustToken: {
					type: "token-request"
				}
			}).then(function(b) {
				if (!b.ok) throw Error(b.status + ": Network response was not ok!");
				kH(gH.issuerOrigin, 10);
				return lH()
			}).catch(function(b) {
				if (b && "NoModificationAllowedError" === b.name) return kH(gH.issuerOrigin, 10), lH();
				kH(gH.issuerOrigin, 9)
			})
		},
		nH = function() {
			kH(gH.issuerOrigin, 13);
			return document.hasTrustToken(gH.issuerOrigin).then(function(a) {
				return a ?
					lH() : mH()
			})
		},
		oH = function() {
			kH(hH.issuerOrigin, 13);
			if (window.Promise) {
				var a = document.hasTrustToken(hH.issuerOrigin).then(function(e) {
						return e
					}).catch(function(e) {
						return window.Promise.reject({
							state: 19,
							error: e
						})
					}),
					b = "" + hH.issuerOrigin + hH.redemptionPath,
					c = {
						keepalive: !0,
						trustToken: {
							type: "token-redemption",
							refreshPolicy: "none"
						}
					};
				kH(hH.issuerOrigin, 16);
				a = a.then(function(e) {
					return window.fetch(b, c).then(function(f) {
						if (!f.ok) throw Error(f.status + ": Network response was not ok!");
						kH(hH.issuerOrigin, 18, !0)
					}).catch(function(f) {
						if (f &&
							"NoModificationAllowedError" === f.name) kH(hH.issuerOrigin, 18, !0);
						else {
							if (e) return window.Promise.reject({
								state: 17,
								error: f
							});
							kH(hH.issuerOrigin, 17)
						}
					})
				}).then(function() {
					return document.hasTrustToken(hH.issuerOrigin).then(function(e) {
						return e
					}).catch(function(e) {
						return window.Promise.reject({
							state: 19,
							error: e
						})
					})
				}).then(function(e) {
					var f = "" + hH.issuerOrigin + hH.getStatePath;
					kH(hH.issuerOrigin, 20);
					return window.fetch(f + "?ht=" + e, {
						trustToken: {
							type: "send-redemption-record",
							issuers: [hH.issuerOrigin]
						}
					}).then(function(g) {
						if (!g.ok) throw Error(g.status +
							": Network response was not ok!");
						kH(hH.issuerOrigin, 22);
						return g.text().then(function(h) {
							return JSON.parse(h)
						})
					}).catch(function(g) {
						return window.Promise.reject({
							state: 21,
							error: g
						})
					})
				});
				var d = Yf();
				return a.then(function(e) {
					var f = "" + hH.issuerOrigin + hH.issuancePath;
					return e && e.srqt && e.cs ? (kH(hH.issuerOrigin, 23), window.fetch(f + "?cs=" + e.cs +
						"&correlator=" + d, {
							keepalive: !0,
							trustToken: {
								type: "token-request"
							}
						}).then(function(g) {
						if (!g.ok) throw Error(g.status + ": Network response was not ok!");
						kH(hH.issuerOrigin,
							25);
						return e
					}).catch(function(g) {
						return window.Promise.reject({
							state: 24,
							error: g
						})
					})) : e
				}).then(function(e) {
					if (e && e.srdt && e.cs) return kH(hH.issuerOrigin, 26), window.fetch(b + "?cs=" + e
						.cs + "&correlator=" + d, {
							keepalive: !0,
							trustToken: {
								type: "token-redemption",
								refreshPolicy: "refresh"
							}
						}).then(function(f) {
						if (!f.ok) throw Error(f.status + ": Network response was not ok!");
						kH(hH.issuerOrigin, 28, !0)
					}).catch(function(f) {
						return window.Promise.reject({
							state: 27,
							error: f
						})
					})
				}).then(function() {
					kH(hH.issuerOrigin, 29)
				}).catch(function(e) {
					if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
						if ("number" === typeof e.state && e.error instanceof Error) {
							kH(hH.issuerOrigin, e.state);
							var f = Pg(Gg);
							Math.random() <= f && gg({
								state: e.state,
								err: e.error.toString()
							}, "dtt_err")
						} else throw Error(e);
					else throw e;
				})
			}
		},
		pH = function(a) {
			if (document.hasTrustToken && !Og(Fg) && a.h) {
				if (window.goog_tt_promise) return window.goog_tt_promise;
				a = window.goog_tt_state;
				if (Array.isArray(a)) {
					var b = [];
					a.find(function(c) {
						return c.issuerOrigin === gH.issuerOrigin
					}) && b.push(nH());
					a.find(function(c) {
						return c.issuerOrigin === hH.issuerOrigin
					}) && b.push(oH());
					if (window.Promise && window.Promise.all) return a = window.Promise.all(b), "object" !=
						typeof window.goog_tt_promise && Object.defineProperty(window, "goog_tt_promise", {
							configurable: !1,
							value: a,
							writable: !1
						}), a
				}
			}
		};
	(function() {
		if (!Jd(function(b) {
				return b.match(G().location.href)
			})) {
			var a = Tz(pf());
			null == a && document.querySelectorAll && (a = Tz(document.querySelectorAll("script")));
			if (null == a) throw Error(
				"IMA SDK is either not loaded from a google domain or is not a supported version.");
		}
	})();
	var qH = function(a) {
		N.call(this);
		var b = this,
			c = Gx(Ix(this.getSettings()));
		c && 0 < c.length && (Ph.reset(), Rh(new si(c)));
		this.C = new rD;
		this.h = a;
		this.F = new Map;
		this.B = this.h.I;
		this.K = new ku(this);
		Ui(this, this.K);
		this.M = new Mx(window);
		this.N = new aH(window);
		this.l = null;
		this.H = {};
		this.J = [];
		0 != Jx.h ? (this.o = new eA, Ui(this, this.o)) : this.o = gA();
		hy() && (this.o.init(qC(this.B)), this.D = lA(this.o, this.h.L), Ti(this, function() {
			var d = b.D;
			b.o.B.delete(d);
			0 != Jx.h && (I(mr).A[d] = null)
		}))
	};
	t(qH, N);
	qH.prototype.destroy = function() {
		this.dispose()
	};
	qH.prototype.getVersion = function() {
		return "h.3.494.0"
	};
	qH.prototype.requestAds = function(a, b) {
		var c = this,
			d = [],
			e = null;
		Ox(this.M) && d.push(new Promise(function(g) {
			Rx(c.M, function(h) {
				e = h;
				g()
			})
		}));
		var f = null;
		cH(this.N) && d.push(new Promise(function(g) {
			eH(c.N, function(h) {
				f = h;
				g()
			})
		}));
		Promise.all(d).then(function() {
			rH(c, a, b, {
				Uc: e,
				Yc: f
			})
		})
	};
	var rH = function(a, b, c, d) {
		var e = b.adTagUrl;
		e && Yz().report(8, {
			adtagurl: e,
			customPlayback: DC(a.h),
			customClick: null != a.h.D
		});
		var f = "goog_" + ff++;
		a.F.set(f, c || null);
		var g = sH({
			adTagUrl: e,
			Ed: !1,
			Uc: d.Uc,
			Yc: d.Yc
		});
		a.l = Wx(e, g || {});
		sz(a.l, function() {
			tH(a)
		});
		c = [uH(a)];
		vH(Yx(a.l)) && c.push(wH());
		Promise.all(c).then(function() {
			var h = {};
			h = (h.limaExperimentIds = Qh().sort().join(","), h);
			var l = a.getSettings(),
				n = 0 != Jx.h ? I(mr).o : a.o.C;
			n = void 0 === n ? null : n;
			var m = {};
			null != n && (m.activeViewPushUpdates = n);
			m.activityMonitorMode =
				l.h;
			m.adsToken = l.I;
			m.autoPlayAdBreaks = l.isAutoPlayAdBreaks();
			m.companionBackfill = l.getCompanionBackfill();
			m.cookiesEnabled = l.l;
			m.disableCustomPlaybackForIOS10Plus = l.getDisableCustomPlaybackForIOS10Plus();
			m.engagementDetection = !0;
			m.isFunctionalTest = !1;
			m.isVpaidAdapter = l.Cb();
			m["1pJar"] = l.K;
			m.numRedirects = l.getNumRedirects();
			m.pageCorrelator = l.R;
			m.persistentStateCorrelator = Lg();
			m.playerType = l.getPlayerType();
			m.playerVersion = l.getPlayerVersion();
			m.ppid = l.getPpid();
			m.privacyControls = l.W;
			m.reportMediaRequests = !1;
			m.sessionId = l.D;
			m.streamCorrelator = l.X;
			m.testingConfig = Ix(l).h;
			m.urlSignals = l.$;
			m.vpaidMode = l.getVpaidMode();
			m.featureFlags = l.getFeatureFlags();
			n = b.adTagUrl;
			l = {};
			l.contentMediaUrl = a.h.J;
			l.customClickTrackingProvided = null != a.h.D;
			a: {
				var x = Hk();x = r(x);
				for (var u = x.next(); !u.done; u = x.next())
					if (u = u.value, u.url && u.url.includes("amp=1")) {
						x = !0;
						break a
					} x = null != window.context ? 0 < parseInt(window.context.ampcontextVersion,
					10) : null != Kk().o
			}
			l.isAmp = x;
			a: {
				try {
					var A = window.top.location.href
				} catch (Pu) {
					A = 2;
					break a
				}
				A =
				null == A ? 2 : A == window.document.location.href ? 0 : 1
			}
			l.iframeState = A;
			l.imaHostingDomain = window.document.domain;
			l.imaHostingPageUrl = window.document.URL;
			if (Qm()) var z = window.location.href;
			else {
				u = Kk();
				A = u.l;
				x = u.h;
				u = u.o;
				var O = null;
				if (u) try {
					z = Ss(u.url);
					var T = z.h,
						ia = uz(T, "/v/");
					ia || (ia = uz(T, "/a/"));
					if (!ia) throw Error("Can not extract standalone amp url.");
					var La = uz("/" + ia, "/s/"),
						ua = Hs(z.o);
					ua.remove("amp_js_v");
					ua.remove("amp_lite");
					var lc = La ? Ss("https://" + La) : Ss("http://" + ia);
					Gs(lc, ua);
					O = lc.toString()
				} catch (Pu) {
					O =
						null
				}
				z = O ? O : A && A.url ? A.url : x && x.url ? x.url : ""
			}
			l.topAccessiblePageUrl = z;
			l.referrer = window.document.referrer;
			l.domLoadTime = a.B.K;
			l.sdkImplLoadTime = a.B.M;
			l.supportsResizing = !DC(a.h);
			z = G().location.ancestorOrigins;
			l.topOrigin = z ? 0 < z.length && 200 > z[z.length - 1].length ? z[z.length - 1] : "" :
			null;
			l.osdId = a.D;
			l.usesCustomVideoPlayback = DC(a.h);
			l.usesInlinePlayback = a.h.F;
			T = a.h.H;
			z = [];
			La = ia = "";
			if (null != T) {
				ia = T;
				La = !0;
				La = void 0 === La ? !1 : La;
				ua = [];
				for (lc = 0; ia && 25 > lc; ++lc) {
					A = "";
					void 0 !== La && La || (A = (A = 9 !== ia.nodeType && ia.id) ?
						"/" + A : "");
					a: {
						if (ia && ia.nodeName && ia.parentElement) {
							x = ia.nodeName.toString().toLowerCase();
							u = ia.parentElement.childNodes;
							for (var hn = O = 0; hn < u.length; ++hn) {
								var jn = u[hn];
								if (jn.nodeName && jn.nodeName.toString().toLowerCase() === x) {
									if (ia === jn) {
										x = "." + O;
										break a
									}++O
								}
							}
						}
						x = ""
					}
					ua.push((ia.nodeName && ia.nodeName.toString().toLowerCase()) + A + x);
					ia = ia.parentElement
				}
				ia = ua.join();
				if (T) {
					T = (T = T.ownerDocument) && (T.defaultView || T.parentWindow) || null;
					La = [];
					if (T) try {
						var ba = T.parent;
						for (ua = 0; ba && ba !== T && 25 > ua; ++ua) {
							var fd = ba.frames;
							for (lc = 0; lc < fd.length; ++lc)
								if (T === fd[lc]) {
									La.push(lc);
									break
								} T = ba;
							ba = T.parent
						}
					} catch (Pu) {}
					La = La.join()
				} else La = ""
			}
			z.push(ia, La);
			if (null != n) {
				for (ba = 0; ba < jt.length - 1; ++ba) z.push(If(n, jt[ba]) || "");
				ba = If(n, "videoad_start_delay");
				fd = "";
				ba && (ba = parseInt(ba, 10), fd = 0 > ba ? "postroll" : 0 == ba ? "preroll" :
					"midroll");
				z.push(fd)
			} else
				for (ba = 0; ba < jt.length; ++ba) z.push("");
			ba = z.join(":");
			fd = ba.length;
			if (0 == fd) ba = 0;
			else {
				n = 305419896;
				for (z = 0; z < fd; z++) n ^= (n << 5) + (n >> 2) + ba.charCodeAt(z) & 4294967295;
				ba = 0 < n ? n : 4294967296 + n
			}
			l = (l.videoAdKey =
				ba.toString(), l);
			ba = {};
			h = (ba.consentSettings = g, ba.imalibExperiments = h, ba.settings = m, ba
				.videoEnvironment = l, ba);
			m = {};
			m.adsResponse = b.adsResponse;
			m.videoPlayActivation = b.videoPlayActivation;
			m.videoPlayMuted = b.videoPlayMuted;
			m.videoContinuousPlay = b.videoContinuousPlay;
			m.adTagUrl = b.adTagUrl;
			m.contentDuration = b.contentDuration;
			m.contentKeywords = b.contentKeywords;
			m.contentTitle = b.contentTitle;
			m.linearAdSlotWidth = b.linearAdSlotWidth;
			m.linearAdSlotHeight = b.linearAdSlotHeight;
			m.nonLinearAdSlotWidth = b.nonLinearAdSlotWidth;
			m.nonLinearAdSlotHeight = b.nonLinearAdSlotHeight;
			m.forceNonLinearFullSlot = b.forceNonLinearFullSlot;
			m.liveStreamPrefetchSeconds = b.liveStreamPrefetchSeconds;
			m.vastLoadTimeout = b.vastLoadTimeout;
			m.omidAccessModeRules = b.omidAccessModeRules;
			m.pageUrl = b.pageUrl;
			Object.assign(h, m);
			a.l && Jx.l && (l = a.l, m = new Kx, l = !Yx(l), kd(m, 5, l), h.isBrowserCookieEnabled = a.C
				.isSupported(m), l = m ? qD("__gads", m, a.C.h) : null, null !== l && (h
					.gfpCookieValue = l), Ni.isSelected() && (l = m ? qD("__gpi", m, a.C.h) : null,
					null !== l && (h.gfpCookieV2Id = l),
					m = m ? qD("__gpi_opt_out", m, a.C.h) : null, null !== m && (h
						.gfpCookieV2OptOut = m)));
			h.trustTokenStatus = a.J;
			if (m = Oy(rz(a.l))) a.H.espSignals = m, h.espSignals = m;
			h.isEapLoader = !1;
			m = qC(a.B, f);
			a.K.T(m, "adsLoader", a.R);
			uy(m, "adsLoader", "requestAds", h)
		})
	};
	qH.prototype.getSettings = function() {
		return Jx
	};
	qH.prototype.contentComplete = function() {
		uy(qC(this.B), "adsLoader", "contentComplete")
	};
	var vH = function(a) {
		return a ? !1 : !ey()
	};
	qH.prototype.R = function(a) {
		var b = a.ia;
		switch (b) {
			case "adsLoaded":
				b = a.ha;
				a = a.Jb;
				b = new Z(this.o, this.h, b.adTagUrl || "", b.adCuePoints, this.D, b
					.isCustomClickTrackingAllowed, qC(this.B, a));
				this.dispatchEvent(new lD(b, xH(this, a)));
				break;
			case "error":
				b = a.ha;
				this.dispatchEvent(new HC(new FC(b), xH(this, a.Jb)));
				a = {
					error: b.errorCode,
					vis: eh(document)
				};
				Yz().report(7, a);
				break;
			case "cookieUpdate":
				a = a.ha;
				if (null == a) break;
				if (Jx.l) {
					b = new Kx;
					kd(b, 5, !0);
					var c = a.gfpCookie;
					c && sD(this.C, "__gads", hd(Ek, c ? JSON.parse(c) : null),
						b);
					Ni.isSelected() && (c = a.gfpCookieV2) && sD(this.C, "__gpi", hd(Ek, c ? JSON.parse(c) :
						null), b)
				}
				yH(this, a.encryptedSignalBidderIds || []);
				break;
			case "trackingUrlPinged":
				this.dispatchEvent(new JC(b, null, a.ha))
		}
	};
	var yH = function(a, b) {
			0 != b.length && (b = tz(b.map(function(c) {
				return {
					Fa: c
				}
			}), a.l)) && b.forEach(function(c) {
				return c.then(function(d) {
					d && tH(a)
				})
			})
		},
		tH = function(a) {
			var b = Oy(rz(a.l));
			b && (a.H.espSignals = b, uy(qC(a.B), "adsLoader", "signalsRefresh", a.H))
		},
		xH = function(a, b) {
			var c = a.F.get(b);
			a.F.delete(b);
			return c
		},
		sH = function(a) {
			var b, c = b = void 0 === b ? v : b;
			c = void 0 === c ? v : c;
			(c = !!c.googlefc) || (c = b.top, c = void 0 === c ? v.top : c, c = Tf(c, "googlefcPresent"));
			var d = void 0 === d ? v : d;
			d = Tf(d.top, "googlefcLoaded");
			b = a.Uc;
			var e = a.Yc,
				f = {};
			return f.gfcPresent = !1, f.gfcLoaded = d, f.gfcUserConsent = c ? 4 : 0, f.isGdprLoader = a.Ed, f
				.addtlConsent = b ? b.addtlConsent : null, f.gdprApplies = b ? b.gdprApplies : null, f.tcString =
				b ? b.tcString : null, f.uspString = e ? e.uspString : null, f
		},
		wH = function() {
			return new Promise(function(a) {
				$G(function() {
					XG();
					Jx.I = UG[1] || "";
					XG();
					Jx.W = UG[6] || "";
					XG();
					Jx.K = UG[4] || "";
					a()
				})
			})
		},
		uH = function(a) {
			if (!Mi.isSelected()) return Promise.resolve();
			var b, c = null != (b = pH(new jH(!Yx(a.l), !1, !0))) ? b : Promise.resolve();
			return Promise.race([c, ck()]).then(function(d) {
				var e =
					void 0 === e ? window : e;
				a.J = e.goog_tt_state;
				Yz().report(158, {
					timedOut: "timed out" == d,
					status: JSON.stringify(a.J)
				})
			})
		};
	qH.prototype.contentComplete = qH.prototype.contentComplete;
	qH.prototype.getSettings = qH.prototype.getSettings;
	qH.prototype.requestAds = qH.prototype.requestAds;
	qH.prototype.getVersion = qH.prototype.getVersion;
	qH.prototype.destroy = qH.prototype.destroy;
	w("google.ima.AdCuePoints", FB, window);
	w("google.ima.AdDisplayContainer", EC, window);
	w("google.ima.AdError.ErrorCode", {
		DEPRECATED_ERROR_CODE: -1,
		VAST_MALFORMED_RESPONSE: 100,
		VAST_SCHEMA_VALIDATION_ERROR: 101,
		VAST_UNSUPPORTED_VERSION: 102,
		VAST_TRAFFICKING_ERROR: 200,
		VAST_UNEXPECTED_LINEARITY: 201,
		VAST_UNEXPECTED_DURATION_ERROR: 202,
		VAST_WRAPPER_ERROR: 300,
		VAST_LOAD_TIMEOUT: 301,
		VAST_TOO_MANY_REDIRECTS: 302,
		VAST_NO_ADS_AFTER_WRAPPER: 303,
		VIDEO_PLAY_ERROR: 400,
		VAST_MEDIA_LOAD_TIMEOUT: 402,
		VAST_LINEAR_ASSET_MISMATCH: 403,
		VAST_PROBLEM_DISPLAYING_MEDIA_FILE: 405,
		OVERLAY_AD_PLAYING_FAILED: 500,
		NONLINEAR_DIMENSIONS_ERROR: 501,
		Lg: 502,
		oh: 503,
		Mf: 602,
		Hf: 603,
		UNKNOWN_ERROR: 900,
		VPAID_ERROR: 901,
		FAILED_TO_REQUEST_ADS: 1005,
		VAST_ASSET_NOT_FOUND: 1007,
		VAST_EMPTY_RESPONSE: 1009,
		UNKNOWN_AD_RESPONSE: 1010,
		UNSUPPORTED_LOCALE: 1011,
		ADS_REQUEST_NETWORK_ERROR: 1012,
		INVALID_AD_TAG: 1013,
		STREAM_INITIALIZATION_FAILED: 1020,
		ASSET_FALLBACK_FAILED: 1021,
		INVALID_ARGUMENTS: 1101,
		Eg: 1204,
		AUTOPLAY_DISALLOWED: 1205,
		CONSENT_MANAGEMENT_PROVIDER_NOT_READY: 1300,
		bh: 2002
	}, window);
	w("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED", -1, window);
	w("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED", -1, window);
	w("google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR", -1, window);
	w("google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE", -1, window);
	w("google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED", -1, window);
	w("google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE", -1, window);
	w("google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED", -1, window);
	w("google.ima.AdError.Type", GC, window);
	w("google.ima.AdErrorEvent.Type", IC, window);
	w("google.ima.AdEvent.Type", KC, window);
	w("google.ima.AdsLoader", qH, window);
	w("google.ima.AdsManagerLoadedEvent.Type", mD, window);
	w("google.ima.CompanionAdSelectionSettings", iy, window);
	w("google.ima.CompanionAdSelectionSettings.CreativeType", jy, void 0);
	w("google.ima.CompanionAdSelectionSettings.ResourceType", ky, void 0);
	w("google.ima.CompanionAdSelectionSettings.SizeCriteria", ly, void 0);
	w("google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED", "deprecated-event", window);
	w("ima.ImaSdkSettings", W, window);
	w("google.ima.settings", Jx, window);
	w("google.ima.ImaSdkSettings.CompanionBackfillMode", {
		ALWAYS: "always",
		ON_MASTER_AD: "on_master_ad"
	}, void 0);
	w("google.ima.ImaSdkSettings.VpaidMode", {
		DISABLED: 0,
		ENABLED: 1,
		INSECURE: 2
	}, void 0);
	w("google.ima.AdsRenderingSettings", rA, window);
	w("google.ima.AdsRenderingSettings.AUTO_SCALE", -1, window);
	w("google.ima.AdsRequest", nD, window);
	w("google.ima.VERSION", "3.494.0", void 0);
	w("google.ima.OmidAccessMode", {
		LIMITED: "limited",
		DOMAIN: "domain",
		FULL: "full"
	}, void 0);
	w("google.ima.UiElements", {
		AD_ATTRIBUTION: "adAttribution",
		COUNTDOWN: "countdown"
	}, void 0);
	w("google.ima.ViewMode", {
		NORMAL: "normal",
		FULLSCREEN: "fullscreen"
	}, void 0);
})();
