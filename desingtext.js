var normal="abcdefghijklmnopqrstuvwxyz?*<>"
var chiffres="abcdefghijklmnopqrstuvwxyz?*<>"
var changed="αв¢∂єƒgнιנкℓмησρqяѕтυνωχуzєє"
var haxxor="4BCD3FGH1JKLMN0PQR57UVXWYZ33"
var oldo="ค๒ς๔єŦﻮђเןкl๓ภ๏קợгรtยשฬץאz!؟●«».,=+-()"
var egipt="αβcδεŦĝhιjκlʍπøρφƦ$†uυωχψzε"
var spike="ΛBᄃDΣFGΉIJΚᄂMПӨPQЯƧƬЦVЩXΥZ!?*◁▷.,=+-()"
var balls="ⓐⓑ©ⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ!?⊛<>๏,⊜⊕⊝()"
var love="ﻪъ८ժεքցհﻨյĸlოռօթզгรէսνա〤կչεε"
var craxy="Дþ¢Ð3ƒgђîjkℓм₪øÞQЯ§†û√w×¥ž33"
var liebe="ΛßƇDƐFƓĤĪĴҠĿMИ♡ṖҨŔSŦƱ√ѠӾYZ?*&ĿŦ;&ƓŦ;"
var flip="ɐbɔdǝɟbɥıƪʞ1ɯnodbɹsʇnʌʍxʎz?*&1ʇ;&bʇ;"
var wigly="ªb¢ÞÈF૬ɧÎjΚĻмη◊ǷƍrS⊥µ√w×ýz!?*<>.,=+-()Θı2ʓ45бך89";
var japan="ﾑ乃ζÐ乇ｷǤんﾉﾌズﾚᄊ刀ԾｱQ尺丂ｲЦЏЩﾒﾘ乙!?*<>.,=+-()ᅙ1ᆯЗ456ᆨ89";
var tamil="ԹՅՇԺȝԲԳɧɿʝƙʅʍՌԾρφՐՏԵՄעաՃՎՀ!?*<>.,=+-()θΙՁკЧƼбלȣף";
var slam="ǞвटDęբg৸ijκlɱПΦРqЯsƮЦvЩжყւ!?*<>.,=+-()012ʓ45б789";


function change(_in, _out, _hax, _old, _egi, _spk, _bal, _lov, _cra, _lie, _flp, _wig, _jap, _tam, _sla)
{
  var s="", hx="", ol="", eg="", sp="", ba="",  lo="",  cr="", li="", fp="", wi="", ja="", ta="", sl="";
  var n=_in.value.toLowerCase();

  if (_in.value.length==0) return;
  
  for(i=0; i<n.length; i++)
  {
    var c=n.charAt(i);
    for(j=0; (j<normal.length)&&(c!=normal.charAt(j)); j++);
    if (j<normal.length) { 
      s+=changed.charAt(j); hx+=haxxor.charAt(j); ol+=oldo.charAt(j); eg+=egipt.charAt(j); sp+=spike.charAt(j); ba+=balls.charAt(j); lo+=love.charAt(j);cr+=craxy.charAt(j);li+=liebe.charAt(j);fp+=flip.charAt(j);wi+=wigly.charAt(j);ja+=japan.charAt(j);ta+=tamil.charAt(j);sl+=slam.charAt(j);} else {
      s+=c; hx+=c; ol+=c; eg+=c; sp+=c; ba+=c; lo+=c; cr+=c; li+=c; fp+=c; wi+=c; ja+=c; ta+=c; sl+=c;  
    }
  }
  _out.value=s;
  _hax.value=hx;
  _old.value=ol;
  _egi.value=eg;
  _spk.value=sp;
  _bal.value=ba;
  _lov.value=lo;
  _cra.value=cr;
  _lie.value=li;
  _flp.value=fp;
  _wig.value=wi;
  _jap.value=ja;
  _tam.value=ta;
  _sla.value=sl;
}


function farbe1(_in, _out)
{
  var s="";
  var a="→         ";
  var e="";
  var n=_in.value.concat ( );
  _out.value=a+n+e;
}
function farbe2(_in, _out)
{
  var s="";
  var a="~> ";
  var e=" ッ <~";
  var n=_in.value.concat ( );
    _out.value=a+n+e;
}
function farbe3(_in, _out)
{
  var s="";
  var a="░▓██ ♥► ";
  var e=" ◄♥ ██▓░ ";
  var n=_in.value.concat ( );
  _out.value=a+n+e;
}
function farbe4(_in, _out)
{
  var s="";
  var a="ιllιlı. ";
  var e=" .ιllιlı";
  var n=_in.value.concat ( );
  _out.value=a+n+e;
}

function farbe5(_in, _out)
{
  var s="";
  var a="» ";
  var e=" 【ツ】";
  var n=_in.value.concat ( );
  _out.value=a+n+e;
}
function farbe6(_in, _out)
{
  var s="";
  var a="->• ";
  var e=" •<-";
  var n=_in.value.concat ( );
  _out.value=a+n+e;
}

function farbe7(_in, _out)
{
  var s="";
  var a="·•●*´ ";
  var e=" `*●•·˙";
  var n=_in.value.concat ( );
  _out.value=a+n+e;
}
function farbe8(_in, _out)
{
  var s="";
  var a="";
  var e=" ᶫᵒᵛᵉˢᵧₒᵤ ღ";
  var n=_in.value.concat ( );
  _out.value=a+n+e;
}
function farbe9(_in, _out)
{
  var s="";
  var a="★•• ";
  var e=" ••★";
  var n=_in.value.concat ( );
  _out.value=a+n+e;
}
function farbe10(_in, _out)
{
  var s="";
  var a="(-.(-.(-.(-";
  var e="-).-).-).-)";
  var n=_in.value.concat ( );
  _out.value=a+n+e;
}
function farbe11(_in, _out)
{
  var s="";
  var a="(¯`·._.·[";
  var e="]·._.·´¯)";
  var n=_in.value.concat ( );
    _out.value=a+n+e;
}
function farbe12(_in, _out)
{
  var s="";
  var a="°o.O ";
  var e=" O.o°";
  var n=_in.value.concat ( );
    _out.value=a+n+e;
}
function farbe13(_in, _out)
{
  var s="";
  var a="`·.¸¸.·´´¯`··._.·";
  var e="`·.¸¸.·´´¯`··._.·";
  var n=_in.value.concat ( );
    _out.value=a+n+e;
}
function farbe14(_in, _out)
{
  var s="";
  var a="(¯`·._)";
  var e="(¯`·._)";
  var n=_in.value.concat ( );
  _out.value=a+n+e;
}
function farbe15(_in, _out)
{
  var s="";
  var a=".·´¯`·->";
  var e="<-·´¯`·.";
  var n=_in.value.concat ( );
  _out.value=a+n+e;
}
function farbe16(_in, _out)
{
  var s="";
  var a="~²º¹²~";
  var e="~²º¹²~";
  var n=_in.value.concat ( );
  _out.value=a+n+e;
}
function farbe17(_in, _out)
{
  var s="";
  var a="»-(¯`v´¯)-»";
  var e="«-(¯`v´¯)-«";
  var n=_in.value.concat ( );
  _out.value=a+n+e;
}
function farbe18(_in, _out)
{
  var s="";
  var a="ılıll|̲̅̅●̲̅̅|̲̅̅=̲̅̅|̲̅̅●̲̅̅|llılı ";
  var e=" ılıll|̲̅̅●̲̅̅|̲̅̅=̲̅̅|̲̅̅●̲̅̅|llılı";
  var n=_in.value.concat ( );
  _out.value=a+n+e;
}
function farbe19(_in, _out)
{
  var s="";
  var a="...(¯`•´¯)___(¯`•´¯)__";
  var e="__(¯`•´¯)___(¯`•´¯)...";
  var n=_in.value.concat ( );
  _out.value=a+n+e;
}
function farbe20(_in, _out)
{
  var s="";
  var a="((¯*.».( ¯*♥ » ";
  var e=" « ♥* ¯).«.*¯))";
  var n=_in.value.concat ( );
  _out.value=a+n+e;
}
function farbe21(_in, _out)
{
  var s="";
  var a="̿̿̿̿̿ ̿̿̿̿̿̿’̿\̵͇̿̿\=((•̪●))=/̵͇̿̿/’̿̿ ̿ ̿ ̿ ";
  var e=" ̿̿̿̿̿ ̿̿̿̿̿̿’̿\̵͇̿̿\=((•̪●))=/̵͇̿̿/’̿̿ ̿ ̿ ̿";
  var n=_in.value.concat ( );
  _out.value=a+n+e;
}
function farbe22(_in, _out)
{
  var s="";
  var a="°̅-̅-̅-’̿\̵͇̿̿\°»";
  var e="«·°/̵͇̿̿/’̿-̅-̅-̅°";
  var n=_in.value.concat ( );
  _out.value=a+n+e;
}
function farbe23(_in, _out)
{
  var s="";
  var a="(•̪●))=/̵͇̿̿/’̿̿ ̿  ̿ ̿";
  var e="«·°/̵͇̿̿/’̿-̅-̅-̅°";
  var n=_in.value.concat ( );
  _out.value=a+n+e;
}
function farbe24(_in, _out)
{
  var s="";
  var a="°̅-̅-̅-’̿\̵͇̿̿\°»`·.¸¸.·´´¯`··._.·";
  var e="`·.¸¸.·´´¯`··._. «·°/̵͇̿̿/’̿-̅-̅-̅°";
  var n=_in.value.concat ( );
  _out.value=a+n+e;
}
function farbe25(_in, _out)
{
  var s="";
  var a="▂▃▄▅▆▇█▓▒░ ";
  var e=" ░▒▓█▇▆▅▄▃▂";
  var n=_in.value.concat ( );
  _out.value=a+n+e;
}

 function doClear(theText) {
     if (theText.value == theText.defaultValue) {
         theText.value = ""
     }
 }

function SelectAll(id)
{
    document.getElementById(id).focus();
    document.getElementById(id).select();
}
function breezah(_in, _out)
{
	var s="";
	var n=_in.value.toLowerCase();
	
	for(i=0; i<n.length; i++)
	{
	var c=n.charAt(i);
	s+=i%2?c:c.toUpperCase();
	}
	  
_out.value=s;
}
