## Backend Architecture

This was just

```
The folder structure was like
📦src
 ┣ 📂app
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┗ 📜register.dto.js
 ┃ ┃ ┣ 📜auth.controller.js
 ┃ ┃ ┣ 📜auth.middleware.js
 ┃ ┃ ┣ 📜auth.model.js
 ┃ ┃ ┣ 📜auth.route.js
 ┃ ┃ ┗ 📜auth.service.js
 ┃ ┣ 📂cart
 ┃ ┃ ┣ 📜cart.controller.js
 ┃ ┃ ┣ 📜cart.model.js
 ┃ ┃ ┣ 📜cart.route.js
 ┃ ┃ ┗ 📜cart.service.js
 ┃ ┣ 📂dto
 ┃ ┃ ┗ 📜base.dto.js
 ┃ ┣ 📂login
 ┃ ┃ ┣ 📜login.controller.js
 ┃ ┃ ┣ 📜login.model.js
 ┃ ┃ ┣ 📜login.route.js
 ┃ ┃ ┗ 📜login.service.js
 ┃ ┣ 📂middleware
 ┃ ┃ ┗ 📜validate.middleware.js
 ┃ ┣ 📂user
 ┃ ┃ ┣ 📜user.controller.js
 ┃ ┃ ┣ 📜user.model.js
 ┃ ┃ ┣ 📜user.route.js
 ┃ ┃ ┗ 📜user.service.js
 ┃ ┗ 📂utils
 ┃ ┃ ┣ 📜api-error.js
 ┃ ┃ ┗ 📜api-response.js
 ┗ 📂config
 ┃ ┣ 📜app.js
 ┃ ┗ 📜db.js
```

Now I want standardized Apiresponse and ApiErrors. which is in utils.
