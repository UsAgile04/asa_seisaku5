<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>新規ユーザー登録</title>
</head>

<body>
    <h1>新規ユーザー登録</h1>
    <form action="signup.php" method="POST">
        <p>お名前<input type="text" name="name"><?php echo $errs['name']; ?></p>
        <p>メールアドレス<input type="text" name="email"><?php echo $errs['email']; ?></p>
        <p>パスワード<input type="text" name="password"><?php echo $errs['password']; ?></p>
        <p><input type="submit" value="登録する"></p>
    </form>
</body>

</html>