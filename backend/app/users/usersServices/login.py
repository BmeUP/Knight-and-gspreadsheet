from typing import Optional
from fastapi import APIRouter, Header
from passlib.hash import pbkdf2_sha256
from ...db.database import db
from ..usersModels.usersModel import User
from ...jwt.jwt import create_jwt, check_jwt



user_login_router = APIRouter()


@user_login_router.post("/users/login")
def login(user: User):
    user_in_db = db.Users.find_one(
            {
                "email": user.email
            }, {"_id": False}
        )
    pass_check = pbkdf2_sha256.verify(user.password,
                                      user_in_db.get('password'))
    if pass_check:
        return {"token": create_jwt(user_in_db)}
    else:
        return {"Fail": "Login failed!"}


@user_login_router.post("/users/send")
def jwt_test(authorization: Optional[str] = Header(default=None)):
    return check_jwt(authorization)
