function symbol_map(instr, src, dest) {
  ostr = '';
  for (i=0; i<instr.length; i++) {
    if ((pos = src.indexOf(instr.charAt(i))) != -1) {
      ostr += dest.charAt(pos);
    } else {
      ostr += instr.charAt(i);
    }
  }
  return ostr;
}

function symbol_reverse(instr) {
  ostr = '';
  for (i=0; i<instr.length; i++) {
    ostr = instr.charAt(i) + ostr;
  }
  return ostr;
}

function symbol_convert() {
  var ascii = "abcdefghijklmnopqrstuvwxyz?*<>";
  var src8 = 'abcdefghijklmnrtvwy.[({?!\<-";\u203F\u2045\u2234';
  var map1 = "\u03B1\u0432\u00A2\u2202\u0454fg\u043D\u03B9\u05E0\u043A\u2113\u043C\u0438\u03C3\u03C1q\u044F\u0455\u0442\u03C5\u03BD\u03C9\u03C7\u0443z\u061F\u25CF«»";
  var map2 = "\u0102\u03b2\u010C\u010E\u0114\u0166\u011E\u0124\u0128\u0134\u0136\u0139\u041C\u0143\u0150\u0420Q\u0154\u015A\u0164\u00DA\u0056\u0174\u0416\u0176\u0179\u061F\u25CF\u00ab\u00bb";
  var map3 = "\u0E04\u0E52\u03C2\u0E54\u0454\u0166\uFEEE\u0452\u0E40\u05DF\u043Al\u0E53\u0E20\u0E4F\u05E7\u1EE3\u0433\u0E23t\u0E22\u05E9\u0E2C\u05E5\u05D0z\u061F\u25CF\u00ab\u00bb";
  //var map4 = "\u2206\u0E52\u03C2\u2202\u2211\uFF93\u0431\uFF7B\u2170\uFF89\u043A\uFF9A\u33A1\u0438\u25CA\u3115q\u042F\u3105\u20AE\u3129\u221A\u1FF3×\u311A\u007A\u061F\u25CF\u00ab\u00bb";
  var map4 = "\u2206\u0E52\u00A2\u2202\u2211\uFF93\u0431\uFF7B\u0E40\uFF89\u043A\uFF9A\uFFB6\u0438\u25CA\u05E7q\u042F$\u20AE\u0426\u221A\u1FF3\u0416\u05E5z";
  var map5 = "a\u0432cde\u0493g\u043D\u03B9j\u0138\u006C\u043Cnopqr\u0455\u0442\u03C5vw\u0445yz?*<>";
  var map6 = "\u03B1\u0432\u0441\u1E0B\u03B5\u0192\u0123\u0068\u00EF\u0458\u045Cl\u1E43\u1E49\u00F8\u03C1\u03C3\u027E\u1E61\u03C4\u03C5\u1E7F\u03CE\u03C7\u00FF\u0290?*<>";
  var map7 = "\u03B1\u0432cd\u0454fgh\u00EDjklmn\u03C3pqrstuvw\u0445\u0447z?*<>";
  var map8 = "\u0250q\u0254p\u01DD\u025F\u0183\u0265\u0131\u027E\u029E\u05DF\u026Fu\u0279\u0287\u028C\u028D\u028E\u02D9])}\u00BF\u00A1,>\u203E\u201E\u061B\u2040\u2046\u2235";
  var map9 = "\u03b1\u03b2\u03b3\u03b4\u03b5\u03b6\u03b7\u03b8j\u03b9\u03ba\u03bb\u03bc\u03bd\u03bf\u03c0\u03c1\u03c2\u03c3\u03c4\u03c5\u03c6\u03c9\u03c7\u03c8";
  var map10 = "48(d3f9h!jk1mn0pqr57uvwxy2";
  var map110 = "\u00E4b\u010Bd\u00EBf\u0121h\u00EFjklmn\u00F6pqrst\u00FCvwx\u00FF\u017C";
  var map120 = "\u00E1b\u0107d\u00E9fgh\u00EDjklm\u0144\u0151pq\u0155\u015Bt\u00FAvwx\u00FD\u017A";
  var map130 = "\u039BB\u1103D\u03A3FG\u0389IJK\u1102M\u041F\u04E8PQ\u042F\u01A7\u01AC\u0426V\u0429XYZ";
  var map140 = "\uFF91\u4E43cd\u4E47\uFF77g\u3093\uFF89\uFF8C\u30BA\uFF9A\uFFB6\u5200o\uFF71q\u5C3A\u4E02\uFF72u\u221Aw\uFF92\uFF98\u4E59";
  var map150 = "\u24b6\u24b7\u24b8\u24b9\u24bA\u24bB\u24bC\u24bD\u24bE\u24bF\u24c0\u24c1\u24c2\u24c3\u24c4\u24c5\u24c6\u24c7\u24c8\u24c9\u24ca\u24cb\u24cc\u24cd\u24ce\u24cf ";
  var inbox = document.getElementById("inbox");
  inval = inbox.value.toLowerCase();
  if (inval.length == 0) {
    return;
  }
  
  document.getElementById("code-10").value = symbol_map(inval, ascii, map1);
  document.getElementById("code-20").value = symbol_map(inval, ascii, map2);
  document.getElementById("code-30").value = symbol_map(inval, ascii, map3);
  document.getElementById("code-40").value = symbol_map(inval, ascii, map4);
  document.getElementById("code-50").value = symbol_map(inval, ascii, map5);
  document.getElementById("code-60").value = symbol_map(inval, ascii, map6);
  document.getElementById("code-70").value = symbol_map(inval, ascii, map7);
  document.getElementById("code-80").value = symbol_reverse(symbol_map(inval, src8, map8));
  document.getElementById("code-90").value = symbol_map(inval, ascii, map9);
    document.getElementById("code-100").value = symbol_map(inval, ascii, map10);
	    document.getElementById("code-110").value = symbol_map(inval, ascii, map110);
		    document.getElementById("code-120").value = symbol_map(inval, ascii, map120);
			    document.getElementById("code-130").value = symbol_map(inval, ascii, map130);
				    document.getElementById("code-140").value = symbol_map(inval, ascii, map140);
					    document.getElementById("code-150").value = symbol_map(inval, ascii, map150);
}
