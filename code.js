/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
<body>
    <form method="post">
        <input type="bottom" value="送信" onclick="sendMail()"></input>
    </form>
    <script src="https://smtpjs.com/v3/smtp.js"></script>
    <script>
    function sendMail() {
        Email.send({
            SecureToken: "你的token",
            To: '收件者',
            From: "寄件者",
            Subject: "主旨",
            Body: "信件內容",
        }).then(
            message => alert(message)
        )
    }   
    </script>
</body>
