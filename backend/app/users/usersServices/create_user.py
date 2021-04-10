from fastapi import HTTPException, APIRouter
from passlib.hash import pbkdf2_sha256
import gspread
from ...db.database import db
from ..usersModels.usersModel import User, ResponseUser
from ...logger.main_logger import logger

user_create_router = APIRouter()


def existing_user(email: str):
    eu = db.Users.find_one({"email": email})  # eu == Exist User
    if eu:
        return True
    else:
        return False


@user_create_router.post("/users/create", response_model=ResponseUser)
def create_user(user: User):
    if not existing_user(user.email):
        db.Users.insert_one({
            "email": user.email,
            "password": pbkdf2_sha256.hash(user.password)
        })

        return user
    else:
        raise HTTPException(status_code=400,
                            detail="User with this email already exist")



@user_create_router.post("/check_tables")
def check_tables():
    gc = gspread.service_account()
    sh = gc.open("Example")
    existing_titles = list(map(lambda record: record.get('title'), db.Title_of_sheets.find()))

    for i in sh.worksheets():
        if i.title not in existing_titles:
            x = db.Title_of_sheets.insert_one(
                {
                    "title": i.title
                }
            ).inserted_id

            worksheet = sh.worksheet(i.title)
            for j in worksheet.get_all_values()[2::]:
                db.sheets.insert_one({
                    "title_id": x,
                    "team": j[1],
                    "T": j[2],
                    "Fw": j[3],
                    "Fi": j[4],
                    "F": j[5],
                    "Cfw": j[6],
                    "F/T": j[7],
                    "Rw": j[8],
                    "Rd": j[9],
                    "Rl": j[10],
                    "R": j[11],
                    "Crw": j[12],
                    "Sw": j[13],
                    "Sw/r": j[14],
                    "Sl": j[15],
                    "Sl/r": j[16],
                    "Sdif": j[17],
                    "Ce": j[18],
                    "YK": j[19],
                    "RK": j[20],
                    "Points": j[21]
                })
                

    return {"end point": "works"}
