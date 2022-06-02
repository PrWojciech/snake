from flask import Flask, render_template, request, redirect, url_for
import data_manager

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def main():
    return render_template('main.html')


@app.route("/index", methods=["GET", "POST"])
def index():
    if request.method == 'POST':
        username = request.form['username']
        print(username)
        return redirect("/")
    return render_template("index.html")


@app.route("/scores")
def highest_scores():
    highest_scores = data_manager.get_highest_scores()
    titles = ["Username", "Score"]
    return render_template('scores.html', highest_scores=highest_scores, titles=titles)


@app.route("/index/<score>", methods=["GET", "POST"])
def save(score):
    if request.method == 'POST':
        username = request.form['username']
        data_manager.save_new_records(username, score)
        return redirect("/")
    return render_template("save_score.html", score=score)


if __name__ == '__main__':
    app.run(host='0.0.0.0',
            port=5000,
            debug=True)
