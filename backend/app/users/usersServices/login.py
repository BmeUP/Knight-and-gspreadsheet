from typing import Optional
from fastapi import APIRouter, Header, HTTPException
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
    try:
        pbkdf2_sha256.verify(user.password,
                             user_in_db.get('password'))
        return {"token": create_jwt({'email': user_in_db.get('email')})}
    except AttributeError:
        raise HTTPException(status_code=404, detail="Login failed...")


@user_login_router.post("/users/send")
def jwt_test(authorization: Optional[str] = Header(default=None)):
    return check_jwt(authorization)
