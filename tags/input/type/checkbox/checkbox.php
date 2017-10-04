<?php
	header('Content-Type: text/html; charset=utf-8');

	if (isset($_POST['test1'])) {
		for ($i=1; $i<5; $i++) {
			$var = "r$i";
			if (isset($_POST[$var])) {
				echo "checkbox${i}: $_POST[$var] <br />";
			} else {
				echo "checkbox${i} not checked <br />";
			}
		}
	}

	if (isset($_POST['test2'])) {
		if (!empty($_POST['r'])) {
			// foreach($_POST['r'] as $r){
			// 	echo "$r <br />";
			// }
			var_dump($_POST['r']);
		}

	}
?>