#  models is python class represents table in flask 

#  table as in like task id task status 

from app import db

class Task(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    title=db.Column(db.String(100),nullable=False)
    status=db.Column(db.String(20),default="Pending")

