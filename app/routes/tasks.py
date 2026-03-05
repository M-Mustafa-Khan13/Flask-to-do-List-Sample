from flask import Blueprint, Flask,render_template,request,redirect,url_for,flash,session
from app import db
from app.models import Task

tasks_bp=Blueprint('tasks',__name__)

@tasks_bp.route("/")

def view_tasks():
    if 'user' not in session:
        return redirect(url_for('auth.login'))
    
    tasks=Task.query.all()
    return render_template('task.html',tasks=tasks)

@tasks_bp.route('/add',methods=['POST'])

def add_task():
    if 'user' not in session:
        return redirect(url_for('auth.login'))
     
    title=request.form.get('title')
    if title:
        new_task=Task(title=title,status='pending')
        db.session.add(new_task)
        db.session.commit()
        flash('Task has been added to the list successfully','success')
        
    return redirect(url_for('tasks.view_tasks'))


@tasks_bp.route('/tasks/<int:task_id>/status', methods=['POST'])
def update_task_status(task_id):
    task = Task.query.get(task_id)
    if task:
        task.status = request.form.get('status')
        db.session.commit()
        flash("Task Status Successfully Updated", 'success')
    return redirect(url_for('tasks.view_tasks'))

@tasks_bp.route('/tasks/<int:task_id>/delete', methods=['POST'])
def delete_task(task_id):
    task = Task.query.get(task_id)
    db.session.delete(task)
    db.session.commit()
    flash("Task Removed Successfully!", 'deleted')
    return redirect(url_for('tasks.view_tasks'))
