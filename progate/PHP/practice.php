<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Progate</title>
</head>
<body>
<?php
 $names = array('john','kate','bob');
 echo $names[0].'<br \n>';
 echo $names[1].'<br \n>';
 echo $names[2].'<br \n>';
 $names[] = 'peter';
 echo $names[3];
 $names[3] = 'noel';
 echo $names[3];
?>
<br>
<?php
$scores = array(
  '数学' => 70,
  '英語' => 90,
  '国語' => 80,
);
echo $scores['国語'],'<br \n>';
$scores['国語'] = $scores['国語'] += 5;
echo $scores['国語'];
?>

<br>

<?php
 for($i = 1;$i <= 100;$i*=2){
   echo $i.'<br>';
 }
?>

<br>

<?php
  $i = 2;
  while($i <=100){
    echo $i.'<br>';
    $i += 2;
  }
?>
<br>
<?php
  for($i = 1;$i <= 1000;$i*=3){
    if($i > 500){
      break;
    }
    echo $i.'<br>';
  }
?>
<br>
<?php
  for($i = 1;$i <= 30;$i++){
    if($i %3 == 0){
      continue;
    }
    echo $i.' ';
  }
?>
<br>
<?php

   $point = array(
     '数学' => 70,
     '英語' => 90,
     '国語' => 80,
   );
    
   foreach($point as $key => $value){
     echo "{$key}は{$value}ですよ".'<br>';
   }
  ?>
<br>

<h1>ここから関数練習</h1>
<?php
  $str = '12345';
  echo strlen($str).'<br>';

  $array = array('html','css','JS');
  echo count($array).'<br>';

  echo rand(10,15);
?>
<h1>関数の作成</h1>
<br>
<?php
  function hello(){
    echo 'hello,world';
  }
  hello();

  echo '<br>';

  function square($height,$width){
    echo $height * $width;
  }
  square(5,10);
  
?>
<h2>戻り値の使い方</h2>
<?php
  function getCircleArea($radius){
    return $radius * $radius *3.14;
  }
  $culc = getCircleArea(3);
  echo $culc;
?>

</body>
</html>