import sys
from typing import Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from passlib.hash import pbkdf2_sha256
from jose import JWTError, jwt

from app.users.usersServices.create_user import user_router


app = FastAPI()


origins = [
    "http://localhost",
    "http://localhost:3000",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router)


SECRET = '0767e00916f9d1ddc7d369b1d5d2a50f36831e7208ed16c2e8397a85cd3a4650'
ALGORITHM = "HS256"

# def create_jwt(data: dict):
#     to_encode = data.copy()
#     encoded_jwt = jwt.encode(to_encode, SECRET, ALGORITHM)
#     return encoded_jwt

# @app.post('/secret-data/')
# def check_jwt(token: Token):
#     payload = jwt.decode(token.access_token, SECRET, ALGORITHM)
#     user = db.users.find_one(
#             {
#                 "email": payload.get('sub'),
#             }
#         )
#     return user.get('email')



# def create_user(user: User):
#     data = {
#         "email": user.get("email"),
#         "password": pbkdf2_sha256.hash(user.get("password"))
#     }

#     return {"ok": f"{db.users.insert_one(data).inserted_id}"}

# def login(user: User):
#     res = db.users.find_one(
#             {
#                 "email": user.get("email")
#             }, {"_id": False}
#         )

#     pass_check = pbkdf2_sha256.verify(user.get('password'), res.get('password'))
#     if pass_check:
#         return create_jwt({"sub": res.get('email')})
#     else:
#         return {"Fail": "Login failed!"}
