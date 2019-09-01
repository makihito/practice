<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <meta http-equiv='X-UA-Compatible' content='ie=edge'>
  <title>Document</title>
</head>
<body>
  <?php
  // htmlのタグも使える
    echo '<h1>初めてのPHP</h1><br>';
    echo '5+2';
    echo '<br>';//<br>で改行できる
    echo 5+2;
  ?>

<br>
<br>

<!-- 演習３ -->
  <?php
  $apple = 'りんご';
  echo $apple ;
  echo '<br>'; 
  $num = 10+10;
  echo $num;
  ?>
<br>
<br>

  <!-- 演習４ -->
  <?php
  $a = 1;
  $b = 2;
  if($a == 1){
    echo '1が表示されました';
  }elseif($b == 2){
    echo '2が表示されました';
  }
  ?>

<!-- サンプル
    $a = 1;
    $b = 2;

    // $a用のif文
    if($a == 1){
        echo '１が表示されました';
    }

    // $b用のif文
    if($b == 2){
        echo '2が表示されました';
    }

    //elseif
    if($a == 1){
        echo '１が表示されました';
    }elseif($b == 2){
        echo '2が表示されました';
    } -->
<br>
<br>
<!-- 課題　おみくじアプリを作る -->
  <?php
  $random = mt_rand(1,6);
  if($random == 1){
    echo '大吉';
    echo '<img src="" alt="">';
  } elseif($random == 2){
    echo '中吉';
  } elseif($random == 3) {
    echo '小吉';
  } elseif($random == 4) {
    echo '末吉';
  } elseif($random == 5) {
    echo '凶';
  } elseif($random == 6){
    echo '大凶';
  }
  ?>
</body>
</html>

