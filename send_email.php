<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  
  $to = "julianwolf2013@outlook.de"; // Hier die E-Mail-Adresse eingeben, an die die Kontaktinformationen gesendet werden sollen
  $subject = "Neue Kontaktanfrage von $name";
  $body = "Name: $name\n\nEmail: $email\n\nMessage: $message";
  
  // Senden der E-Mail
  if (mail($to, $subject, $body)) {
    echo "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.";
  } else {
    echo "Es tut uns leid, beim Senden der Nachricht ist ein Fehler aufgetreten.";
  }
}
?>
