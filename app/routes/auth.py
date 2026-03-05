from flask import Flask,render_template,url_for,flash,request,redirect,Blueprint,session


auth_bp=Blueprint('auth',__name__)

User_credentials={

'username':'Admin',
'Password':'1234'

}

@auth_bp.route('/login',methods=['GET','POST'])

def login():
    if request.method=='POST':
        username=request.form.get('username')
        password=request.form.get('password')
     
        if username==User_credentials['username'] and password==User_credentials['Password']:
            session['user']=username
            flash('login Successfull','success')
        else:
            flash("Invalid username or password",'danger')
    return render_template('login.html')


@auth_bp.route('/logout')

def logout():
    session.pop('username',None)
    flash("Logged out Sucessfully",'info')
    return redirect(url_for('auth.login'))