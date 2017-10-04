<?php
if (isset($_GET['t'])) {
    $t = $_GET['t'];
    sleep($t);
    $n = $_GET['n'];
    echo "console.log($n)";
}
