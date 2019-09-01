<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>じゃんけん勝負！</title>
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/stylesheet.css">
</head>

<body>
  <div class="pchand">
  <?php
    $pchand = mt_rand(0,2);
    if($pchand == 0){
      echo 'グー';
      echo '<img src="photo/M-j_gu02.png" alt="">';
    }elseif($pchand == 1){
      echo 'チョキ';
      echo '<img src="photo/M-j_ch02.png" alt="">';
    }else{
      echo 'パー';
      echo '<img src="photo/M-j_pa02.png" alt="">';
    }
  ?>
  </div>
    <div class="hand-bar">
      <dl class="go" >
        <dt><img src="photo/M-j_gu02.png" alt=""></dt>
        <dd>グー</dd>
      </dl>
      <dl class="choki">
        <dt><img src="photo/M-j_ch02.png" alt=""></dt>
        <dd>チョキ</dd>
      </dl>
      <dl　class="pa">
        <dt><img src="photo/M-j_pa02.png" alt=""></dt>
        <dd>パー</dd>
      </dl>
    </div>


</body>
</html>