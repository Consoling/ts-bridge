<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if (isset($_POST['submit'])) {

    if (empty($_POST['userName']) || empty($_POST['email']) || empty($_POST['contact']) || empty($_POST['msg'])) {
        $status = "Please fill in all required fields.";
    } else {
        $userName = htmlspecialchars($_POST['userName']);
        $email = htmlspecialchars($_POST['email']);
        $contact = htmlspecialchars($_POST['contact']);
        $msg = htmlspecialchars($_POST['msg']);

        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host       = 'smtp.hostinger.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'info@startapoderoventures.com'; // Replace with your SMTP email
            $mail->Password   = 'Ts_Br1dg3_Edu'; // Replace with your SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 465;

            $mail->setFrom('info@startapoderoventures.com');
            $mail->addAddress('tsbridgeedu@gmail.com');
            $mail->isHTML(false);
            $mail->Subject = 'Query from customer';
            $mail->Body    = "Name: $userName\nEmail: $email\nContact: $contact\nMessage: $msg";


            $mail->send();
            $status = "Email sent successfully.";
        } catch (Exception $e) {
            $status =  "Failed to send email.";
        }
    }

    header("Location: contact.html");
    exit();
}
