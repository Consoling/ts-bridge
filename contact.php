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
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'YOUR_SMTP_EMAIL'; // Replace with your SMTP email
            $mail->Password   = 'YOUR_SMTP_PASSWORD'; // Replace with your SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;

            $mail->setFrom('from@example.com');
            $mail->addAddress('tsbridgeedu@gmail.com');
            $mail->isHTML(false);
            $mail->Subject = 'New Form Submission';
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
