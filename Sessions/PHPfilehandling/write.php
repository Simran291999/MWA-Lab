<!-- Program to write in file.txt with file at beginning -->
<?php
$myfile = fopen("file.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("file.txt"));
fclose($myfile);
echo "<br>";

$myfile = fopen("file.txt", "w") or die("Unable to open file!");
$txt = "Kartik Padave\n20\npadavekartik@gmail.com";
fwrite($myfile, $txt);
fclose($myfile);

$myfile = fopen("file.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("file.txt"));
fclose($myfile);
?>