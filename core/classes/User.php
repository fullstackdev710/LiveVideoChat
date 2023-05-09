<?php
class User
{
   public $db;

   public function __construct()
   {
      $db = new DB;
      $this->db = $db->connect();
   }

   public function emailExist($email)
   {
      $stmt = $this->db->prepare("SELECT * FROM `users` WHERE `email` = :email");
      $stmt->bindParam(":email", $email, PDO::PARAM_STR);
      $stmt->execute();
      $user = $stmt->fetch(PDO::FETCH_OBJ);

      if (!empty($user)) {
         return $user;
      } else {
         return false;
      }
   }
}
