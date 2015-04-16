<?php

/* 
 * T
 * and open the template in the editor.; */

require_once 'class.phpmailer.php';

    $postdata = json_decode(file_get_contents("php://input"));
    //print_r($postdata);
	

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->CharSet = 'UTF-8';
$mail->Host = "smtp.live.com";
$mail->SMTPAuth= true;
$mail->Port = 587;
$mail->Username= $account;
$mail->Password= $password;
$mail->SMTPSecure = 'tls';
$mail->From = $from;
$mail->FromName= //$from_name;
$mail->isHTML(true);
$mail->Subject = //$postdata->;
$mail->Body = $msg;
$mail->addAddress("josh.kula@outlook.com");

/*if(!$mail->send()){
 echo "Mailer Error: " . $mail->ErrorInfo;
}else{
 echo "E-Mail has been sent";
}*/