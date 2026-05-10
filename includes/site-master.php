<?php



$page = substr(basename($_SERVER['PHP_SELF']), 0, -4);



if ($_SERVER['HTTP_HOST'] != 'localhost') {



    $baseurl = "https://herosolutions.com.pk/muqadsa/stahlrohr-werkstatt/";
} else {



    $baseurl = "http://localhost/stahlrohr-werkstatt/";
}



?>







<meta charset="utf-8">



<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

<meta name="title" content="Reliable Heating & Plumbing Solutions for Modern Living">

<meta name="description" content="Reliable Heating & Plumbing Solutions for Modern Living">

<meta property="og:type" content="website">

<meta property="og:url" content="<?= $baseurl ?>">

<meta property="og:title" content="Reliable Heating & Plumbing Solutions for Modern Living">

<meta property="og:description" content="Reliable Heating & Plumbing Solutions for Modern Living">

<meta property="og:image" content="<?= $baseurl ?>assets/images/logo.png">

<meta property="twitter:card" content="thumbnail">

<meta property="twitter:url" content="<?= $baseurl ?>">

<meta property="twitter:title" content="Reliable Heating & Plumbing Solutions for Modern Living">

<meta property="twitter:description" content="Reliable Heating & Plumbing Solutions for Modern Living">

<meta property="twitter:image" content="<?= $baseurl ?>assets/images/logo.png">

<!-- Css files -->



<!-- Bootstrap Css -->



<link type="text/css" rel="stylesheet" href="<?= $baseurl ?>assets/css/bootstrap.min.css">

<link type="text/css" rel="stylesheet" href="<?= $baseurl ?>assets/css/aos.css">


<!-- Main Css -->



<link type="text/css" rel="stylesheet" href="<?= $baseurl ?>css/App.css?v=0.6">
<link rel="stylesheet" href="assets/css/lightgallery.min.css">
<link rel="stylesheet" href="assets/css/lightgallery.css">


<!-- Media-Query Css -->



<!-- commonCss Css -->



<link type="text/css" rel="stylesheet" href="<?= $baseurl ?>assets/css/commonCss.css?v=0.2">
<!-- Favicon -->



<!-- <link type="image/png" rel="icon" href="<?= $baseurl ?>images/favicon.png"> -->