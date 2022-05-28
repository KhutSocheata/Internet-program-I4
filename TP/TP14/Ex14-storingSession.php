<?php
session_start();
// store session data
    $_SESSION["username"] = "socheata";
    $_SESSION["email"] = "socheata@gmail.com";

    //retrieve session data
    echo $_SESSION[ "username"];
    echo "<br>";
    echo $_SESSION["email"];

?>