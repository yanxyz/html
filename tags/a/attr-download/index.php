<?php
if (isset($_GET['t'])) {
  $t = $_GET['t'];
  if ($t == 1 || $t == 3) {
    header('Content-Disposition: attachment; filename="a/b/1.html"');
  } else if ($t == 4) {
    header('Content-Disposition: inline');
  }
}
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title></title>
</head>
<body>
  <h1>&lt;a&gt; attr attr</h1>
  <p>no header; no attr <a href="index.php?t=0">click me</a></p>
  <p>header; no attr <a href="index.php?t=1">click me</a></p>
  <p>no header; attr no paths <a href="index.php?t=2" download="2.html">click me</a></p>
  <p>no header; attr <a href="index.php?t=2" download="a/b/2.html">click me</a></p>
  <p>header; attr <a href="index.php?t=3" download="a/b/3.html">click me</a></p>
  <p>header inline; attr <a href="index.php?t=4" download="a/b/4.html">click me</a></p>
</body>
</html>
