if(main_ret == 179 || main_ret == 0){
	document.getElementById("load").remove();
    document.getElementById('karo').innerHTML='<tr id="mexp">'+
			'<td align="center" id="jailbreak" colspan="5" >'+
			'<a id="mira75X" class="button pointer" onMouseOver="progress.innerHTML=\'Mira by AlAzif for PS4 7.55 Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'mira75X\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">Mira</a>&nbsp;'+
			'<a id="mirab" class="button pointer" onMouseOver="progress.innerHTML=\'Mira2b Spoof to 9.99 & fixed Rest Mode by Karo, Fix for All PS4 7.5X Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'mirab\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">Mira2b</a>&nbsp;'+
			'<a id="hen" class="button pointer" onMouseOver="progress.innerHTML=\'Hen v2.1.3b by SISTR0, Spoof to 9.99 & Ported to PS4 7.5X Fw by Karo\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'hen\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">Hen213b</a>&nbsp;'+
			'<a id="goldhen1" class="button pointer" onMouseOver="progress.innerHTML=\'GoldHen v1.0 by Sistro for All PS4 7.5X Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'goldhen1\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:yellow">GoldHenV1.0</a>&nbsp;'+
			'<a id="goldhenb" class="button pointer" onMouseOver="progress.innerHTML=\'GoldHen v1.1b3 by Sistro for All PS4 7.5X Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'goldhenb\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:yellow">GoldHenV1.1b3</a>&nbsp;'+
			'<a id="goldhen" class="button pointer" onMouseOver="progress.innerHTML=\'GoldHen v1.1 by Sistro for All PS4 7.5X Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'goldhen\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:yellow">GoldHenV1.1</a>&nbsp;'+
			'</td>'+
			'</tr>'+
			'<tr><td><br/></td></tr>'+
			'<tr>'+
			'<td align="center" colspan="5"><a id="binloader" class="button pointer" onMouseOver="progress.innerHTML=\'Binloader for PS4 7.5X Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'binloader\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">Bin Loader</a>&nbsp;'+
			'<a id="app2usb" class="button pointer" onMouseOver="progress.innerHTML=\'App to USB for PS4 7.55 Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'app2usb\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">App2USB</a>&nbsp;'+
			'<a id="disableupdates" class="button pointer" onMouseOver="progress.innerHTML=\'disable updates for PS4 7.55 Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'disableupdates\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">Disable.Updates</a>&nbsp;'+
			'<a id="enableupdates" class="button pointer" onMouseOver="progress.innerHTML=\'enable updates for PS4 7.55 Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'enableupdates\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">Enable.Updates</a>&nbsp;'+
			'<a id="dumper" class="button pointer" onMouseOver="progress.innerHTML=\'Games Dumper for PS4 7.55 Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'dumper\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">Dumper</a>&nbsp;'+
			'<a id="renamer" class="button pointer" onMouseOver="progress.innerHTML=\'rif Renamer for PS4 7.55 Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'renamer\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">rif Renamer</a>&nbsp;'+
			'</td>'+
			'</tr>'+
			'<tr><td><br/></td></tr>'+
			'<tr>'+
			'<td align="center" colspan="2">'+
			'<a id="backup" class="button pointer" onMouseOver="progress.innerHTML=\'Backup of data for PS4 7.55 Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'backup\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">BackUp</a>&nbsp;'+
			'<a id="restore" class="button pointer" onMouseOver="progress.innerHTML=\'Restore data for PS4 7.55 Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'restore\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">Restore</a>&nbsp;'+
			'<a id="module" class="button pointer" onMouseOver="progress.innerHTML=\'Module Dumper for PS4 7.55 Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'module\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">Module Dumper</a>&nbsp;'+
			'<a id="ftp" class="button pointer" onMouseOver="progress.innerHTML=\'FTP server for PS4 7.55 Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'ftp\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">FTP</a>&nbsp;'+
			'<a id="todex" class="button pointer" onMouseOver="progress.innerHTML=\'ToDEX for PS4 7.55 Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'todex\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">To-DEX</a>&nbsp;'+
			'<a id="disableaslr" class="button pointer" onMouseOver="progress.innerHTML=\'Disable Aslr for PS4 7.55 Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'disableaslr\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">disable aslr</a>&nbsp;'+
			'</td>'+
			'</tr>'+
			'<tr><td><br/></td></tr>'+
			'<tr>'+
			'<td align="center" colspan="2">'+
			'<a id="orbis" class="button pointer" onMouseOver="progress.innerHTML=\'Orbis Toolbox Loader Alfa 1167 for PS4 7.55 Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'orbis\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;background-color:red;color:white">Orbis Toolbox</a>&nbsp;'+
			'<a id="enablebrowser" class="button pointer" onMouseOver="progress.innerHTML=\'Enable Browser for PS4 7.55 Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'enablebrowser\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">enable Browser</a>&nbsp;'+
			'<a id="historyblocker" class="button pointer" onMouseOver="progress.innerHTML=\'History Blocker for PS4 7.55 Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'historyblocker\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">History Blocker</a>&nbsp;'+
			'<a id="kerneldumper" class="button pointer" onMouseOver="progress.innerHTML=\'Kernel Dumper for PS4 7.55 Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'kerneldumper\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">Kernel Dumper</a>&nbsp;'+
			'<a id="linux1G" class="button pointer" onMouseOver="progress.innerHTML=\'Linux Loader 1G for PS4 7.55 Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'linux1G\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">Linux 1G</a>&nbsp;'+
			'<a id="linux3G" class="button pointer" onMouseOver="progress.innerHTML=\'Linux Loader 3G for PS4 7.55 Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'linux3G\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">Linux 3G</a>&nbsp;'+
			'</td>'+
			'</tr>'+
			'<tr><td><br/></td></tr>'+
			'<tr>'+
			'<td align="center" colspan="6">'+
			'<a id="idu" class="button pointer" onMouseOver="progress.innerHTML=\'Disable IDU Mode for PS4 7.55 Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'idu\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">Exit IDU</a>&nbsp;'+
			'<a id="ps4debug" class="button pointer" onMouseOver="progress.innerHTML=\'ps4debug for 75X\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'ps4debug\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">ps4debug</a>&nbsp;'+
			'<a id="webrte" class="button pointer" onMouseOver="progress.innerHTML=\'WebRTE for PS4 7.55 Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'webrte\'); return false" style="font-size:25px;text-align:center;background-color:blue;text-shadow: 4px 4px 4px black;color:white">WebRTE</a>&nbsp;'+
			'<a id="web" class="button pointer" onMouseOver="progress.innerHTML=\'Web activator for PS4 7.55 Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'web\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">web_activator</a>&nbsp;'+
			'<a id="fan" class="button pointer" onMouseOver="progress.innerHTML=\'Fan Controller for PS4 7.55 Fw\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'fan\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">Fan controller</a><select id="tempC" style="font-size:25px;text-align:center;"></select>&#176;C&nbsp;'+
			'</td>'+
			'</tr>'+
			'<tr><td><br/></td></tr>'+
			'<tr>'+
			'<td align="center" colspan="6">'+
			'<a id="gtava1" class="button pointer" onMouseOver="progress.innerHTML=\'GTAV ArabicGuy 1.00 for 75X\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'gtava1\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">GTAV A1</a>&nbsp;'+
			'<a id="gtava2" class="button pointer" onMouseOver="progress.innerHTML=\'GTAV ArabicGuy 1.27 for 75X\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'gtava2\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">GTAV A2</a>&nbsp;'+
			'<a id="gtava3" class="button pointer" onMouseOver="progress.innerHTML=\'GTAV ArabicGuy 1.32 for 75X\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'gtava3\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">GTAV A3</a>&nbsp;'+
			'<a id="gtavl" class="button pointer" onMouseOver="progress.innerHTML=\'GTAV Lamance 1.32 for 75X\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'gtava1\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">GTAV L</a>&nbsp;'+
			'<a id="gtavbq" class="button pointer" onMouseOver="progress.innerHTML=\'GTAV BeefQueefMod 1.33 for 75X\'"; onmouseout="progress.innerHTML=\'Karo Host for PS4 7.5X FW\'" onclick="toggle_payload(\'gtavbq\'); return false" style="font-size:25px;text-align:center;text-shadow: 4px 4px 4px black;color:white">GTAV BQ</a>&nbsp;'+
			'</td>'+
			'</tr>'+
			'<tr>'+
			'<td align="center" colspan="6">'+
			'<br></td>'+
			'</tr>'+
			'<tr>'+
			'<td class="content" >'+
 	        '<div class="text" >'+
 	        '<br><span style="text-shadow: 4px 4px 4px black;" class="yellow" >Designed, Ported and Compiled by :</span >&nbsp;&nbsp; <span style="text-shadow: 4px 4px 4px black;" class="hue" >Karo Sharifi</span>'+
 	        '<br><br><br><br><span style="text-shadow: 4px 4px 4px black;" class="yellow" >Super Special Thanks To :</span >&nbsp;&nbsp; <a style="font-size:30px;text-align:center;text-shadow: 4px 4px 4px black;color:white;">Sleirsgoevy , Al Azif , ChendoChap , DarkModderVC , ... </a>'+
	        '</div>'+
			'</td>'+
	        '</tr>'+
			'<tr>';
	for(var i=40; i<=89; i++){
    var select = document.getElementById("tempC");
    var option = document.createElement("OPTION");
	select.options.add(option);
	option.text = i;
	option.value = i;
}
tempC.value=60;
	document.getElementById("progress").innerHTML="Jailbreak Complete.. Now Run Payloads!!";
} else{
	alert("Jailbreak Failed!! Please Restart and Start Fresh!!!");
}