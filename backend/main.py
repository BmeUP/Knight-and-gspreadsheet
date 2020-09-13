from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.users.usersServices.create_user import user_create_router
from app.users.usersServices.login import user_login_router

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

app.include_router(user_create_router)
app.include_router(user_login_router)
