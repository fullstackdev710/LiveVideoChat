<?php
include 'core/init.php';

if (!$userObj->isLoggedIn()) {
   $userObj->redirect("index.php");
}

$user = $userObj->userData();

echo $user->name;
