from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.routers.designs import designs_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(designs_router, prefix="/designs", tags=["Designs"])

@app.get('/')
def main():
    return { "EventDesignAR": "Home" }