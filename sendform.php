<?php
//Сбор данных из полей формы. 
$name = $_POST['name'];// Берём данные из input c атрибутом name="name"
$phone = $_POST['phone']; // Берём данные из input c атрибутом name="phone"
$email = $_POST['mail']; // Берём данные из input c атрибутом name="mail"
$message = $_POST['message']; // Берём данные из input c атрибутом name="mail"

$token = "5149409818:AAEfNqgaEjviWViLOeGIWC21iC8lqK14yDw"; // Тут пишем токен
$chat_id = "-711970871"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "Кибер_безпека"; //Указываем название сайта

$arr = array(

  'Заказ с сайта: ' => $sitename,
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Почта:' => $email,
  'Письмо' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>