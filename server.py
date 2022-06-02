from flask import Flask, render_template

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'static/images'
app.secret_key = 'dupa'


@app.route("/")
def main():
    return render_template('main.html')


@app.route("/index")
def index():

    return render_template('index.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0',
            port=5000,
            debug=True)
