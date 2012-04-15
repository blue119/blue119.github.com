function is_ip(strIP)
{
var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g
if (re.test(strIP))
{
if (RegExp.$1<256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256)
return true;
}
return false;
}

