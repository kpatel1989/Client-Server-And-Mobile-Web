<?php
require 'vendor/autoload.php';

$mail = new PHPMailer;

//Enable SMTP debugging. 
$mail->SMTPDebug = 2;  
$mail->Debugoutput = 'html';

//Set PHPMailer to use SMTP.
$mail->isSMTP();            
//Set SMTP host name                          
$mail->Host = "smtp.gmail.com";
//Set this to true if SMTP host requires authentication to send email
$mail->SMTPAuth = true;           
//If SMTP requires TLS encryption then set it
$mail->SMTPSecure = "tls";                           
//Set TCP port to connect to 
$mail->Port = 587;                   
//Provide username and password     
$mail->Username = "katk.1989@gmail.com";                 
$mail->Password = "";

//From email address and name
$mail->From = "katk.1989@gmail.com";
$mail->FromName = "Kartik Patel";

$mail->addAddress("katk.1989@gmail.com", "Kpatel");

//Send HTML or Plain Text email
$mail->isHTML(true);

$mail->Subject = "Hi. I am sending this mail from php";
$mail->Body = "<i>This is a mail body</i>";


if(!$mail->send()) 
{
    echo "Mailer Error: " . $mail->ErrorInfo;
} 
else 
{
    echo "Message has been sent successfully";
}
?>