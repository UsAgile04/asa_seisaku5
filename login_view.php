<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ログイン画面</title>
</head>

<body>
    <h1>ログイン</h1>
    <form action="" method="POST">
        <p>メールアドレス<input type="text" name="email"><?php echo htmlEscape($errs['email']); ?></p>
        <p>パスワード<input type="text" name="password"><?php echo htmlEscape($errs['password']); ?></p>
        <p><input type="submit" value="ログイン"></p>
        <p><a href="signup.php">新規登録</a></p>
    </form>
</body>

</html>