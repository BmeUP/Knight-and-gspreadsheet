from fastapi import APIRouter, HTTPException
from passlib.hash import pbkdf2_sha256
from ...db.database import db
from ..usersModels.usersModel import User, ResponseUser

user_router = APIRouter()


def existing_user(email: str):
    eu = db.Users.find_one({"email": email})  # eu == Exist User
    if eu:
        return True
    else:
        return False


@user_router.post("/users/create", response_model=ResponseUser)
def create_user(user: User):
    if not existing_user(user.email):
        db.Users.insert_one({
            "email": user.email,
            "password": pbkdf2_sha256.hash(user.password)
        })

        return user
    else:
        raise HTTPException(status_code=400, detail="User with this email already exist")
        # return {"email": "User with this email alredy exist"}
