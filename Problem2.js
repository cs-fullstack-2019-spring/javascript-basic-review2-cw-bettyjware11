//Ask the user to enter a 4 digit code. Ask the user to enter the password again.
//If the passwords are the same print "Password is set." If the passwords are different print "ERROR, Passwords are different."

var password1 =prompt("Enter password");
var password2 =prompt("Re-enter password");
if (password1===password2)
{
    console.log("Password is set")
}
else if (password1 != password2)
{
    console.log("Passwords are different")
}