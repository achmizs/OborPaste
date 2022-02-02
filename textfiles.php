<?php

$base_url = "https://your.web.site/textfiles/";

if (isset($_GET['f'])) {
	render_file();
} else if (   isset($_POST['f']) 
		   && isset($_POST['p'])
		   && $_POST['p'] == 'YOUR_API_KEY_GOES_HERE') {
	new_file();
} else {
	header ('Content-type: text/plain; charset=utf-8');
	http_response_code(404);
	die("NO FILE FOR YOU!! COME BACK, ONE YEAR!");
}

## Functions

function render_file() {
	if ($_GET['m'] == 'raw') {
		header ('Content-type: text/plain; charset=utf-8');
		echo file_get_contents($_GET['f']);
		die;
	} else {
		header ('Content-type: text/html; charset=utf-8');
		include_once(__DIR__ . "/textfiles.html");
		die;
	}
}

function new_file() {
	`export LANG="en_US.UTF-8"`;
	$tmp_file_path = trim(`mktemp -q ./XXXXXXXX`);
	$tmp_file_name = `basename {$tmp_file_path}`;
	`rm {$tmp_file_path}`;
	file_put_contents("{$tmp_file_path}.txt", $_POST['f']);
	global $base_url;
	echo $base_url . $tmp_file_name;
}

?>