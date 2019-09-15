<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>form_learning</title>
  <link rel="stylesheet" href="stylesheet.css" type="text/css">
</head>

<body>
  <div class="header">
    <div class="header-left">Progate</div>
    <div class="header-right">
      <ul>
        <li>会社概要</li>
        <li>採用</li>
        <li class="selected">問い合わせ</li>
      </ul>
    </div>
  </div>

  <div class="main">
    <div class="contat-form">
      <div class="form-title">お問い合わせ</div>
      <form action="sent.php" method="POST">
        <div class="form-item">名前</div>
        <input type="text" name="name">
        <div class="form-item">年齢</div>
          <select name="age" id="">
            <option value="未選択">選択してください</option>
            <?php
            for ($i=6; $i<=100; $i++) { 
              echo "<option value='{$i}'>{$i}</option>";
            }
            ?>
          </select>
        <div class="form-item">お問い合わせの種類</div>
            <?php
            $types = array('Progateに関するお問い合わせ', 'Progateに対する意見', '採用に関するお問い合わせ', '取材・メディア関連のお問い合わせ');
            ?>
          <select name="category" id="">
            <option value="未選択">選択してください</option>
            <?php
            foreach($types as $values){
              echo("<option value='{$values}'>{$values}</option>");
              }
            ?>
          </select>
        <div class="form-item">内容</div>
        <textarea name="body" id="" cols="30" rows="10"></textarea>

        <input type="submit" value="送信">
      </form>
    </div>
  </div>
</body>
</html>