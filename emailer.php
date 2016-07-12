<?php
ob_start();
require_once 'swift/lib/swift_required.php';

if (isset($_POST["name"])) {
    $name = $_POST["name"];
}

if (isset($_POST["email"])) {
    $email = $_POST["email"];
}

if (isset($_POST["phone"])) {
    $phone = $_POST["phone"];
}

if (isset($_POST["company"])) {
    $company = $_POST["company"];
}

if (isset($_POST["comment"])) {
    $comment = $_POST["comment"];
}

$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, "ssl")
  ->setUsername('code@babson.edu')
  ->setPassword('babsoncode.com/password');

$mailer = Swift_Mailer::newInstance($transport);

$message = Swift_Message::newInstance('Babson Code Consulting')
  ->setFrom(array('code@babson.edu' => 'Babson Code'))
  ->setTo(array($email))
  ->setBody("Hi " . $name . ", \n\n" . "You had contacted us through our website. Just to verify, this is the information you had entered: \n\n" . "Name: $name\nEmail:$email\nPhone: $phone\nCompany: $company\nComment: $comment\n\nThis email is to inform you that we will get in touch with you shortly regarding specific details and set up a call if needed.");

$result = $mailer->send($message);

header('Location: http://codeconsulting.herokuapp.com/#/?email=success');
ob_end_flush();
?>
