<?php
    include("config-client.php");
?>
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <title><?php echo $title; ?></title>
    <?php foreach ($metatags as $key => $value): ?>
    <meta name="<?php echo $key;?>" content="<?php echo $value; ?>">
    <?php endforeach; ?>
    <link rel="canonical" href="<?php echo $canonical; ?>">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="preload" href="assets/fonts/all.min.css" as="style">
    <link rel="preload" href="assets/css/style.css" as="style">
    <link rel="preload" href="assets/css/custom.css" as="style">
    <link rel="preload" href="assets/js/page.js" as="script">
    <link rel="preload" as="font" href="assets/webfonts/fa-regular-400.woff2" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" as="font" href="assets/webfonts/fa-brands-400.woff2" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" as="font" href="assets/webfonts/fa-solid-900.woff2" type="font/woff2" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/fonts/all.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/custom.css">
</head>

<?php
?>
