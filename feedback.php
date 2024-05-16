<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if (isset($_POST['submit'])) {

    if (empty($_POST['feedback_message'])) {
        // $status = "feedback required.";
    } else {
        $feedback = htmlspecialchars($_POST['feedback_message']);

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
            $mail->Subject = 'New Feedback Message';
            $mail->Body    = "Feedback: $feedback";


            $mail->send();
            $status = "feedback sent successfully.";
        } catch (Exception $e) {
            $status =  "Failed to send.";
        }
    }

    header("Location: index.html");
    exit();
}
