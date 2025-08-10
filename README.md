===
### env guide
PORT=7999  
DATABASE_URL= ***  

---
### service

|/api/auth/login|post|-|-|-| {identity, password}
|/api/auth/register|post|-|-|-| {firstName, lastName, password, confirmPassword}
|/api/auth/me|get|y|-|-|-|
|/api/post|get|y|-|-|-|
|/api/post|post|y|-|-|{message, image(file)}
|/api/post|put|y|:id|-|{message, image(file)}
|/api/post|delete|y|:id|-|-
|/api/comment|post|y|-|-|{message, postId}
|/api/like|post|y|-|-|{postId}
|/api/like|delete|y|:id|-|-

---
